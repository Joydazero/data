/*
 Highcharts JS v2.1.3 (2011-02-07)
 Exporting module

 (c) 2010 Torstein H?nsi

 License: www.highcharts.com/license
*/
(function() {
    var j = Highcharts,
        y = j.Chart,
        C = j.addEvent,
        r = j.createElement,
        z = j.discardElement,
        u = j.css,
        w = j.merge,
        s = j.each,
        p = j.extend,
        D = Math.max,
        q = document,
        E = window,
        A = "ontouchstart" in q.documentElement,
        B = j.setOptions({
            lang: {
                downloadPNG: "Download PNG image",
                downloadJPEG: "Download JPEG image",
                downloadPDF: "Download PDF document",
                downloadSVG: "Download SVG vector image",
                exportButtonTitle: "Export to raster or vector image",
                printButtonTitle: "Print the chart"
            }
        });
    B.navigation = {
        menuStyle: {
            border: "1px solid #A0A0A0",
            background: "#FFFFFF"
        },
        menuItemStyle: {
            padding: "0 5px",
            background: "none",
            color: "#303030",
            fontSize: A ? "14px" : "11px"
        },
        menuItemHoverStyle: {
            background: "#4572A5",
            color: "#FFFFFF"
        },
        buttonOptions: {
            align: "right",
            backgroundColor: {
                linearGradient: [0, 0, 0, 20],
                stops: [
                    [0.4, "#F7F7F7"],
                    [0.6, "#E3E3E3"]
                ]
            },
            borderColor: "#B0B0B0",
            borderRadius: 3,
            borderWidth: 1,
            height: 20,
            hoverBorderColor: "#909090",
            hoverSymbolFill: "#81A7CF",
            hoverSymbolStroke: "#4572A5",
            symbolFill: "#E0E0E0",
            symbolStroke: "#A0A0A0",
            symbolX: 11.5,
            symbolY: 10.5,
            verticalAlign: "top",
            width: 24,
            y: 10
        }
    };
    B.exporting = {
        type: "image/png",
        url: "http://export.highcharts.com/",
        width: 800,
        buttons: {
            exportButton: {
                symbol: "exportIcon",
                x: -10,
                symbolFill: "#A8BF77",
                hoverSymbolFill: "#768F3E",
                _titleKey: "exportButtonTitle",
                menuItems: [{
                    textKey: "downloadPNG",
                    onclick: function() {
                        this.exportChart()
                    }
                }, {
                    textKey: "downloadJPEG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/jpeg"
                        })
                    }
                }, {
                    textKey: "downloadPDF",
                    onclick: function() {
                        this.exportChart({
                            type: "application/pdf"
                        })
                    }
                }, {
                    textKey: "downloadSVG",
                    onclick: function() {
                        this.exportChart({
                            type: "image/svg+xml"
                        })
                    }
                }]
            },
            printButton: {
                symbol: "printIcon",
                x: -36,
                symbolFill: "#B5C9DF",
                hoverSymbolFill: "#779ABF",
                _titleKey: "printButtonTitle",
                onclick: function() {
                    this.print()
                }
            }
        }
    };
    p(y.prototype, {
        getSVG: function(b) {
            var c = this,
                a, e, d, k, f, h, i = w(c.options, b);
            if (!q.createElementNS) q.createElementNS = function(l, g) {
                var n = q.createElement(g);
                n.getBBox = function() {
                    return c.renderer.Element.prototype.getBBox.apply({
                        element: n
                    })
                };
                return n
            };
            a = r("div", null, {
                position: "absolute",
                top: "-9999em",
                width: c.chartWidth + "px",
                height: c.chartHeight + "px"
            }, q.body);
            p(i.chart, {
                renderTo: a,
                forExport: true
            });
            i.exporting.enabled = false;
            i.chart.plotBackgroundImage = null;
            i.series = [];
            s(c.series, function(l) {
                d = l.options;
                d.animation = false;
                d.showCheckbox = false;
                if (d && d.marker && /^url\(/.test(d.marker.symbol)) d.marker.symbol = "circle";
                d.data = [];
                s(l.data, function(g) {
                    k = g.config;
                    f = p(typeof k == "object" && g.config && k.constructor != Array, {
                        x: g.x,
                        y: g.y,
                        name: g.name
                    });
                    d.data.push(f);
                    (h = g.config && g.config.marker) && /^url\(/.test(h.symbol) && delete h.symbol
                });
                i.series.push(d)
            });
            b = new Highcharts.Chart(i);
            e = b.container.innerHTML;
            i = null;
            b.destroy();
            z(a);
            e = e.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g, "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/isTracker="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" ]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/style="([^"]+)"/g, function(l) {
                return l.toLowerCase()
            });
            e = e.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g,
                "'");
            if (e.match(/ xmlns="/g).length == 2) e = e.replace(/xmlns="[^"]+"/, "");
            return e
        },
        exportChart: function(b, c) {
            var a, e = this.getSVG(c);
            b = w(this.options.exporting, b);
            a = r("form", {
                method: "post",
                action: b.url
            }, {
                display: "none"
            }, q.body);
            s(["filename", "type", "width", "svg"], function(d) {
                r("input", {
                    type: "hidden",
                    name: d,
                    value: {
                        filename: b.filename || "chart",
                        type: b.type,
                        width: b.width,
                        svg: e
                    }[d]
                }, null, a)
            });
            a.submit();
            z(a)
        },
        print: function() {
            var b = this,
                c = b.container,
                a = [],
                e = c.parentNode,
                d = q.body,
                k = d.childNodes;
            if (!b.isPrinting) {
                b.isPrinting =
                    true;
                s(k, function(f, h) {
                    if (f.nodeType == 1) {
                        a[h] = f.style.display;
                        f.style.display = "none"
                    }
                });
                d.appendChild(c);
                E.print();
                setTimeout(function() {
                    e.appendChild(c);
                    s(k, function(f, h) {
                        if (f.nodeType == 1) f.style.display = a[h]
                    });
                    b.isPrinting = false
                }, 1E3)
            }
        },
        contextMenu: function(b, c, a, e, d, k) {
            var f = this,
                h = f.options.navigation,
                i = h.menuItemStyle,
                l = f.chartWidth,
                g = f.chartHeight,
                n = "cache-" + b,
                m = f[n],
                o = D(d, k),
                t, x;
            if (!m) {
                f[n] = m = r("div", {
                    className: "highcharts-" + b
                }, {
                    position: "absolute",
                    zIndex: 1E3,
                    padding: o + "px"
                }, f.container);
                t =
                    r("div", null, p({
                        MozBoxShadow: "3px 3px 10px #888",
                        WebkitBoxShadow: "3px 3px 10px #888",
                        boxShadow: "3px 3px 10px #888"
                    }, h.menuStyle), m);
                x = function() {
                    u(m, {
                        display: "none"
                    })
                };
                C(m, "mouseleave", x);
                s(c, function(v) {
                    if (v) r("div", {
                        onmouseover: function() {
                            u(this, h.menuItemHoverStyle)
                        },
                        onmouseout: function() {
                            u(this, i)
                        },
                        innerHTML: v.text || j.getOptions().lang[v.textKey]
                    }, p({
                        cursor: "pointer"
                    }, i), t)[A ? "ontouchstart" : "onclick"] = function() {
                        x();
                        v.onclick.apply(f, arguments)
                    }
                });
                f.exportMenuWidth = m.offsetWidth;
                f.exportMenuHeight =
                    m.offsetHeight
            }
            b = {
                display: "block"
            };
            if (a + f.exportMenuWidth > l) b.right = l - a - d - o + "px";
            else b.left = a - o + "px";
            if (e + k + f.exportMenuHeight > g) b.bottom = g - e - o + "px";
            else b.top = e + k - o + "px";
            u(m, b)
        },
        addButton: function(b) {
            function c() {
                g.attr(o);
                l.attr(m)
            }
            var a = this,
                e = a.renderer,
                d = w(a.options.navigation.buttonOptions, b),
                k = d.onclick,
                f = d.menuItems,
                h = d.width,
                i = d.height,
                l, g, n;
            b = d.borderWidth;
            var m = {
                    stroke: d.borderColor
                },
                o = {
                    stroke: d.symbolStroke,
                    fill: d.symbolFill
                };
            if (d.enabled !== false) {
                l = e.rect(0, 0, h, i, d.borderRadius, b).align(d,
                    true).attr(p({
                    fill: d.backgroundColor,
                    "stroke-width": b,
                    zIndex: 19
                }, m)).add();
                n = e.rect(0, 0, h, i, 0).align(d).attr({
                    fill: "rgba(255, 255, 255, 0.001)",
                    title: j.getOptions().lang[d._titleKey],
                    zIndex: 21
                }).css({
                    cursor: "pointer"
                }).on("mouseover", function() {
                    g.attr({
                        stroke: d.hoverSymbolStroke,
                        fill: d.hoverSymbolFill
                    });
                    l.attr({
                        stroke: d.hoverBorderColor
                    })
                }).on("mouseout", c).on("click", c).add();
                if (f) k = function() {
                    c();
                    var t = n.getBBox();
                    a.contextMenu("export-menu", f, t.x, t.y, h, i)
                };
                n.on("click", function() {
                    k.apply(a, arguments)
                });
                g = e.symbol(d.symbol, d.symbolX, d.symbolY, (d.symbolSize || 12) / 2).align(d, true).attr(p(o, {
                    "stroke-width": d.symbolStrokeWidth || 1,
                    zIndex: 20
                })).add()
            }
        }
    });
    j.Renderer.prototype.symbols.exportIcon = function(b, c, a) {
        return ["M", b - a, c + a, "L", b + a, c + a, b + a, c + a * 0.5, b - a, c + a * 0.5, "Z", "M", b, c + a * 0.5, "L", b - a * 0.5, c - a / 3, b - a / 6, c - a / 3, b - a / 6, c - a, b + a / 6, c - a, b + a / 6, c - a / 3, b + a * 0.5, c - a / 3, "Z"]
    };
    j.Renderer.prototype.symbols.printIcon = function(b, c, a) {
        return ["M", b - a, c + a * 0.5, "L", b + a, c + a * 0.5, b + a, c - a / 3, b - a, c - a / 3, "Z", "M", b - a * 0.5, c - a / 3, "L", b - a *
            0.5, c - a, b + a * 0.5, c - a, b + a * 0.5, c - a / 3, "Z", "M", b - a * 0.5, c + a * 0.5, "L", b - a * 0.75, c + a, b + a * 0.75, c + a, b + a * 0.5, c + a * 0.5, "Z"
        ]
    };
    y.prototype.callbacks.push(function(b) {
        var c, a = b.options.exporting,
            e = a.buttons;
        if (a.enabled !== false)
            for (c in e) b.addButton(e[c])
    })
})();