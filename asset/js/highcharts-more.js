/*
 Highcharts JS v4.1.8 (2015-08-20)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(l, F) {
    function K(a, b, c) {
        this.init.call(this, a, b, c)
    }
    var P = l.arrayMin,
        Q = l.arrayMax,
        s = l.each,
        H = l.extend,
        o = l.merge,
        R = l.map,
        q = l.pick,
        x = l.pInt,
        p = l.getOptions().plotOptions,
        h = l.seriesTypes,
        v = l.extendClass,
        L = l.splat,
        u = l.wrap,
        M = l.Axis,
        y = l.Tick,
        I = l.Point,
        S = l.Pointer,
        T = l.CenteredSeriesMixin,
        z = l.TrackerMixin,
        t = l.Series,
        w = Math,
        D = w.round,
        B = w.floor,
        N = w.max,
        U = l.Color,
        r = function() {};
    H(K.prototype, {
        init: function(a, b, c) {
            var d = this,
                e = d.defaultOptions;
            d.chart = b;
            d.options = a = o(e, b.angular ? {
                    background: {}
                } : void 0,
                a);
            (a = a.background) && s([].concat(L(a)).reverse(), function(a) {
                var b = a.backgroundColor,
                    g = c.userOptions,
                    a = o(d.defaultBackgroundOptions, a);
                if (b) a.backgroundColor = b;
                a.color = a.backgroundColor;
                c.options.plotBands.unshift(a);
                g.plotBands = g.plotBands || [];
                g.plotBands.unshift(a)
            })
        },
        defaultOptions: {
            center: ["50%", "50%"],
            size: "85%",
            startAngle: 0
        },
        defaultBackgroundOptions: {
            shape: "circle",
            borderWidth: 1,
            borderColor: "silver",
            backgroundColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]
            },
            from: -Number.MAX_VALUE,
            innerRadius: 0,
            to: Number.MAX_VALUE,
            outerRadius: "105%"
        }
    });
    var G = M.prototype,
        y = y.prototype,
        V = {
            getOffset: r,
            redraw: function() {
                this.isDirty = !1
            },
            render: function() {
                this.isDirty = !1
            },
            setScale: r,
            setCategories: r,
            setTitle: r
        },
        O = {
            isRadial: !0,
            defaultRadialGaugeOptions: {
                labels: {
                    align: "center",
                    x: 0,
                    y: null
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            },
            defaultRadialXOptions: {
                gridLineWidth: 1,
                labels: {
                    align: null,
                    distance: 15,
                    x: 0,
                    y: null
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            },
            defaultRadialYOptions: {
                gridLineInterpolation: "circle",
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            },
            setOptions: function(a) {
                a = this.options = o(this.defaultOptions, this.defaultRadialOptions, a);
                if (!a.plotBands) a.plotBands = []
            },
            getOffset: function() {
                G.getOffset.call(this);
                this.chart.axisOffset[this.side] = 0;
                this.center = this.pane.center = T.getCenter.call(this.pane)
            },
            getLinePath: function(a,
                b) {
                var c = this.center,
                    b = q(b, c[2] / 2 - this.offset);
                return this.chart.renderer.symbols.arc(this.left + c[0], this.top + c[1], b, b, {
                    start: this.startAngleRad,
                    end: this.endAngleRad,
                    open: !0,
                    innerR: 0
                })
            },
            setAxisTranslation: function() {
                G.setAxisTranslation.call(this);
                if (this.center) this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0
            },
            beforeSetTickPositions: function() {
                this.autoConnect &&
                    (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
            },
            setAxisSize: function() {
                G.setAxisSize.call(this);
                if (this.isRadial) {
                    this.center = this.pane.center = l.CenteredSeriesMixin.getCenter.call(this.pane);
                    if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad;
                    this.len = this.width = this.height = this.center[2] * q(this.sector, 1) / 2
                }
            },
            getPosition: function(a, b) {
                return this.postTranslate(this.isCircular ? this.translate(a) : 0, q(this.isCircular ? b : this.translate(a), this.center[2] / 2) - this.offset)
            },
            postTranslate: function(a, b) {
                var c = this.chart,
                    d = this.center,
                    a = this.startAngleRad + a;
                return {
                    x: c.plotLeft + d[0] + Math.cos(a) * b,
                    y: c.plotTop + d[1] + Math.sin(a) * b
                }
            },
            getPlotBandPath: function(a, b, c) {
                var d = this.center,
                    e = this.startAngleRad,
                    f = d[2] / 2,
                    i = [q(c.outerRadius, "100%"), c.innerRadius, q(c.thickness, 10)],
                    g = /%$/,
                    k, m = this.isCircular;
                this.options.gridLineInterpolation === "polygon" ? d = this.getPlotLinePath(a).concat(this.getPlotLinePath(b, !0)) : (a = Math.max(a, this.min), b = Math.min(b, this.max), m || (i[0] = this.translate(a),
                    i[1] = this.translate(b)), i = R(i, function(a) {
                    g.test(a) && (a = x(a, 10) * f / 100);
                    return a
                }), c.shape === "circle" || !m ? (a = -Math.PI / 2, b = Math.PI * 1.5, k = !0) : (a = e + this.translate(a), b = e + this.translate(b)), d = this.chart.renderer.symbols.arc(this.left + d[0], this.top + d[1], i[0], i[0], {
                    start: Math.min(a, b),
                    end: Math.max(a, b),
                    innerR: q(i[1], i[0] - i[2]),
                    open: k
                }));
                return d
            },
            getPlotLinePath: function(a, b) {
                var c = this,
                    d = c.center,
                    e = c.chart,
                    f = c.getPosition(a),
                    i, g, k;
                c.isCircular ? k = ["M", d[0] + e.plotLeft, d[1] + e.plotTop, "L", f.x, f.y] : c.options.gridLineInterpolation ===
                    "circle" ? (a = c.translate(a)) && (k = c.getLinePath(0, a)) : (s(e.xAxis, function(a) {
                        a.pane === c.pane && (i = a)
                    }), k = [], a = c.translate(a), d = i.tickPositions, i.autoConnect && (d = d.concat([d[0]])), b && (d = [].concat(d).reverse()), s(d, function(f, c) {
                        g = i.getPosition(f, a);
                        k.push(c ? "L" : "M", g.x, g.y)
                    }));
                return k
            },
            getTitlePosition: function() {
                var a = this.center,
                    b = this.chart,
                    c = this.options.title;
                return {
                    x: b.plotLeft + a[0] + (c.x || 0),
                    y: b.plotTop + a[1] - {
                        high: 0.5,
                        middle: 0.25,
                        low: 0
                    }[c.align] * a[2] + (c.y || 0)
                }
            }
        };
    u(G, "init", function(a, b, c) {
        var j;
        var d = b.angular,
            e = b.polar,
            f = c.isX,
            i = d && f,
            g, k;
        k = b.options;
        var m = c.pane || 0;
        if (d) {
            if (H(this, i ? V : O), g = !f) this.defaultRadialOptions = this.defaultRadialGaugeOptions
        } else if (e) H(this, O), this.defaultRadialOptions = (g = f) ? this.defaultRadialXOptions : o(this.defaultYAxisOptions, this.defaultRadialYOptions);
        a.call(this, b, c);
        if (!i && (d || e)) {
            a = this.options;
            if (!b.panes) b.panes = [];
            this.pane = (j = b.panes[m] = b.panes[m] || new K(L(k.pane)[m], b, this), m = j);
            m = m.options;
            b.inverted = !1;
            k.chart.zoomType = null;
            this.startAngleRad = b = (m.startAngle -
                90) * Math.PI / 180;
            this.endAngleRad = k = (q(m.endAngle, m.startAngle + 360) - 90) * Math.PI / 180;
            this.offset = a.offset || 0;
            if ((this.isCircular = g) && c.max === F && k - b === 2 * Math.PI) this.autoConnect = !0
        }
    });
    u(y, "getPosition", function(a, b, c, d, e) {
        var f = this.axis;
        return f.getPosition ? f.getPosition(c) : a.call(this, b, c, d, e)
    });
    u(y, "getLabelPosition", function(a, b, c, d, e, f, i, g, k) {
        var m = this.axis,
            j = f.y,
            n = 20,
            h = f.align,
            A = (m.translate(this.pos) + m.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360;
        m.isRadial ? (a = m.getPosition(this.pos, m.center[2] /
            2 + q(f.distance, -25)), f.rotation === "auto" ? d.attr({
            rotation: A
        }) : j === null && (j = m.chart.renderer.fontMetrics(d.styles.fontSize).b - d.getBBox().height / 2), h === null && (m.isCircular ? (this.label.getBBox().width > m.len * m.tickInterval / (m.max - m.min) && (n = 0), h = A > n && A < 180 - n ? "left" : A > 180 + n && A < 360 - n ? "right" : "center") : h = "center", d.attr({
            align: h
        })), a.x += f.x, a.y += j) : a = a.call(this, b, c, d, e, f, i, g, k);
        return a
    });
    u(y, "getMarkPath", function(a, b, c, d, e, f, i) {
        var g = this.axis;
        g.isRadial ? (a = g.getPosition(this.pos, g.center[2] / 2 + d), b = ["M", b, c, "L", a.x, a.y]) : b = a.call(this, b, c, d, e, f, i);
        return b
    });
    p.arearange = o(p.area, {
        lineWidth: 1,
        marker: null,
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: !0,
        dataLabels: {
            align: null,
            verticalAlign: null,
            xLow: 0,
            xHigh: 0,
            yLow: 0,
            yHigh: 0
        },
        states: {
            hover: {
                halo: !1
            }
        }
    });
    h.arearange = v(h.area, {
        type: "arearange",
        pointArrayMap: ["low", "high"],
        dataLabelCollections: ["dataLabel", "dataLabelUpper"],
        toYData: function(a) {
            return [a.low,
                a.high
            ]
        },
        pointValKey: "low",
        deferTranslatePolar: !0,
        highToXY: function(a) {
            var b = this.chart,
                c = this.xAxis.postTranslate(a.rectPlotX, this.yAxis.len - a.plotHigh);
            a.plotHighX = c.x - b.plotLeft;
            a.plotHigh = c.y - b.plotTop
        },
        getSegments: function() {
            var a = this;
            s(a.points, function(b) {
                if (!a.options.connectNulls && (b.low === null || b.high === null)) b.y = null;
                else if (b.low === null && b.high !== null) b.y = b.high
            });
            t.prototype.getSegments.call(this)
        },
        translate: function() {
            var a = this,
                b = a.yAxis;
            h.area.prototype.translate.apply(a);
            s(a.points,
                function(a) {
                    var d = a.low,
                        e = a.high,
                        f = a.plotY;
                    e === null && d === null ? a.y = null : d === null ? (a.plotLow = a.plotY = null, a.plotHigh = b.translate(e, 0, 1, 0, 1)) : e === null ? (a.plotLow = f, a.plotHigh = null) : (a.plotLow = f, a.plotHigh = b.translate(e, 0, 1, 0, 1))
                });
            this.chart.polar && s(this.points, function(c) {
                a.highToXY(c)
            })
        },
        getSegmentPath: function(a) {
            var b, c = [],
                d = a.length,
                e = t.prototype.getSegmentPath,
                f, i;
            i = this.options;
            var g = i.step;
            for (b = HighchartsAdapter.grep(a, function(a) {
                    return a.plotLow !== null
                }); d--;) f = a[d], f.plotHigh !== null && c.push({
                plotX: f.plotHighX ||
                    f.plotX,
                plotY: f.plotHigh
            });
            a = e.call(this, b);
            if (g) g === !0 && (g = "left"), i.step = {
                left: "right",
                center: "center",
                right: "left"
            }[g];
            c = e.call(this, c);
            i.step = g;
            i = [].concat(a, c);
            this.chart.polar || (c[0] = "L");
            this.areaPath = this.areaPath.concat(a, c);
            return i
        },
        drawDataLabels: function() {
            var a = this.data,
                b = a.length,
                c, d = [],
                e = t.prototype,
                f = this.options.dataLabels,
                i = f.align,
                g, k, m = this.chart.inverted;
            if (f.enabled || this._hasPointLabels) {
                for (c = b; c--;)
                    if (g = a[c])
                        if (k = g.plotHigh > g.plotLow, g.y = g.high, g._plotY = g.plotY, g.plotY =
                            g.plotHigh, d[c] = g.dataLabel, g.dataLabel = g.dataLabelUpper, g.below = k, m) {
                            if (!i) f.align = k ? "right" : "left";
                            f.x = f.xHigh
                        } else f.y = f.yHigh;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments);
                for (c = b; c--;)
                    if (g = a[c])
                        if (k = g.plotHigh > g.plotLow, g.dataLabelUpper = g.dataLabel, g.dataLabel = d[c], g.y = g.low, g.plotY = g._plotY, g.below = !k, m) {
                            if (!i) f.align = k ? "left" : "right";
                            f.x = f.xLow
                        } else f.y = f.yLow;
                e.drawDataLabels && e.drawDataLabels.apply(this, arguments)
            }
            f.align = i
        },
        alignDataLabel: function() {
            h.column.prototype.alignDataLabel.apply(this,
                arguments)
        },
        setStackedPoints: r,
        getSymbol: r,
        drawPoints: r
    });
    p.areasplinerange = o(p.arearange);
    h.areasplinerange = v(h.arearange, {
        type: "areasplinerange",
        getPointSpline: h.spline.prototype.getPointSpline
    });
    (function() {
        var a = h.column.prototype;
        p.columnrange = o(p.column, p.arearange, {
            lineWidth: 1,
            pointRange: null
        });
        h.columnrange = v(h.arearange, {
            type: "columnrange",
            translate: function() {
                var b = this,
                    c = b.yAxis,
                    d;
                a.translate.apply(b);
                s(b.points, function(a) {
                    var f = a.shapeArgs,
                        i = b.options.minPointLength,
                        g;
                    a.tooltipPos = null;
                    a.plotHigh = d = c.translate(a.high, 0, 1, 0, 1);
                    a.plotLow = a.plotY;
                    g = d;
                    a = a.plotY - d;
                    Math.abs(a) < i ? (i -= a, a += i, g -= i / 2) : a < 0 && (a *= -1, g -= a);
                    f.height = a;
                    f.y = g
                })
            },
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: r,
            pointAttrToOptions: a.pointAttrToOptions,
            drawPoints: a.drawPoints,
            drawTracker: a.drawTracker,
            animate: a.animate,
            getColumnMetrics: a.getColumnMetrics
        })
    })();
    p.gauge = o(p.line, {
        dataLabels: {
            enabled: !0,
            defer: !1,
            y: 15,
            borderWidth: 1,
            borderColor: "silver",
            borderRadius: 3,
            crop: !1,
            verticalAlign: "top",
            zIndex: 2
        },
        dial: {},
        pivot: {},
        tooltip: {
            headerFormat: ""
        },
        showInLegend: !1
    });
    z = {
        type: "gauge",
        pointClass: v(I, {
            setState: function(a) {
                this.state = a
            }
        }),
        angular: !0,
        drawGraph: r,
        fixedBox: !0,
        forceDL: !0,
        trackerGroups: ["group", "dataLabelsGroup"],
        translate: function() {
            var a = this.yAxis,
                b = this.options,
                c = a.center;
            this.generatePoints();
            s(this.points, function(d) {
                var e = o(b.dial, d.dial),
                    f = x(q(e.radius, 80)) * c[2] / 200,
                    i = x(q(e.baseLength, 70)) * f / 100,
                    g = x(q(e.rearLength, 10)) * f / 100,
                    k = e.baseWidth || 3,
                    m = e.topWidth || 1,
                    j = b.overshoot,
                    n = a.startAngleRad +
                    a.translate(d.y, null, null, null, !0);
                j && typeof j === "number" ? (j = j / 180 * Math.PI, n = Math.max(a.startAngleRad - j, Math.min(a.endAngleRad + j, n))) : b.wrap === !1 && (n = Math.max(a.startAngleRad, Math.min(a.endAngleRad, n)));
                n = n * 180 / Math.PI;
                d.shapeType = "path";
                d.shapeArgs = {
                    d: e.path || ["M", -g, -k / 2, "L", i, -k / 2, f, -m / 2, f, m / 2, i, k / 2, -g, k / 2, "z"],
                    translateX: c[0],
                    translateY: c[1],
                    rotation: n
                };
                d.plotX = c[0];
                d.plotY = c[1]
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.yAxis.center,
                c = a.pivot,
                d = a.options,
                e = d.pivot,
                f = a.chart.renderer;
            s(a.points,
                function(c) {
                    var b = c.graphic,
                        e = c.shapeArgs,
                        m = e.d,
                        j = o(d.dial, c.dial);
                    b ? (b.animate(e), e.d = m) : c.graphic = f[c.shapeType](e).attr({
                        stroke: j.borderColor || "none",
                        "stroke-width": j.borderWidth || 0,
                        fill: j.backgroundColor || "black",
                        rotation: e.rotation
                    }).add(a.group)
                });
            c ? c.animate({
                translateX: b[0],
                translateY: b[1]
            }) : a.pivot = f.circle(0, 0, q(e.radius, 5)).attr({
                "stroke-width": e.borderWidth || 0,
                stroke: e.borderColor || "silver",
                fill: e.backgroundColor || "black"
            }).translate(b[0], b[1]).add(a.group)
        },
        animate: function(a) {
            var b =
                this;
            if (!a) s(b.points, function(a) {
                var d = a.graphic;
                d && (d.attr({
                    rotation: b.yAxis.startAngleRad * 180 / Math.PI
                }), d.animate({
                    rotation: a.shapeArgs.rotation
                }, b.options.animation))
            }), b.animate = null
        },
        render: function() {
            this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
            t.prototype.render.call(this);
            this.group.clip(this.chart.clipRect)
        },
        setData: function(a, b) {
            t.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            q(b, !0) &&
                this.chart.redraw()
        },
        drawTracker: z && z.drawTrackerPoint
    };
    h.gauge = v(h.line, z);
    p.boxplot = o(p.column, {
        fillColor: "#FFFFFF",
        lineWidth: 1,
        medianWidth: 2,
        states: {
            hover: {
                brightness: -0.3
            }
        },
        threshold: null,
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
        },
        whiskerLength: "50%",
        whiskerWidth: 2
    });
    h.boxplot = v(h.column, {
        type: "boxplot",
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        toYData: function(a) {
            return [a.low, a.q1, a.median, a.q3, a.high]
        },
        pointValKey: "high",
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        drawDataLabels: r,
        translate: function() {
            var a = this.yAxis,
                b = this.pointArrayMap;
            h.column.prototype.translate.apply(this);
            s(this.points, function(c) {
                s(b, function(b) {
                    c[b] !== null && (c[b + "Plot"] = a.translate(c[b], 0, 1, 0, 1))
                })
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.points,
                c = a.options,
                d = a.chart.renderer,
                e,
                f, i, g, k, m, j, n, h, A, l, J, p, o, u, r, v, t, w, x, z, y, E = a.doQuartiles !== !1,
                C = parseInt(a.options.whiskerLength, 10) / 100;
            s(b, function(b) {
                h = b.graphic;
                z = b.shapeArgs;
                l = {};
                o = {};
                r = {};
                y = b.color || a.color;
                if (b.plotY !== F)
                    if (e = b.pointAttr[b.selected ? "selected" : ""], v = z.width, t = B(z.x), w = t + v, x = D(v / 2), f = B(E ? b.q1Plot : b.lowPlot), i = B(E ? b.q3Plot : b.lowPlot), g = B(b.highPlot), k = B(b.lowPlot), l.stroke = b.stemColor || c.stemColor || y, l["stroke-width"] = q(b.stemWidth, c.stemWidth, c.lineWidth), l.dashstyle = b.stemDashStyle || c.stemDashStyle, o.stroke =
                        b.whiskerColor || c.whiskerColor || y, o["stroke-width"] = q(b.whiskerWidth, c.whiskerWidth, c.lineWidth), r.stroke = b.medianColor || c.medianColor || y, r["stroke-width"] = q(b.medianWidth, c.medianWidth, c.lineWidth), j = l["stroke-width"] % 2 / 2, n = t + x + j, A = ["M", n, i, "L", n, g, "M", n, f, "L", n, k], E && (j = e["stroke-width"] % 2 / 2, n = B(n) + j, f = B(f) + j, i = B(i) + j, t += j, w += j, J = ["M", t, i, "L", t, f, "L", w, f, "L", w, i, "L", t, i, "z"]), C && (j = o["stroke-width"] % 2 / 2, g += j, k += j, p = ["M", n - x * C, g, "L", n + x * C, g, "M", n - x * C, k, "L", n + x * C, k]), j = r["stroke-width"] % 2 / 2, m = D(b.medianPlot) +
                        j, u = ["M", t, m, "L", w, m], h) b.stem.animate({
                        d: A
                    }), C && b.whiskers.animate({
                        d: p
                    }), E && b.box.animate({
                        d: J
                    }), b.medianShape.animate({
                        d: u
                    });
                    else {
                        b.graphic = h = d.g().add(a.group);
                        b.stem = d.path(A).attr(l).add(h);
                        if (C) b.whiskers = d.path(p).attr(o).add(h);
                        if (E) b.box = d.path(J).attr(e).add(h);
                        b.medianShape = d.path(u).attr(r).add(h)
                    }
            })
        },
        setStackedPoints: r
    });
    p.errorbar = o(p.boxplot, {
        color: "#000000",
        grouping: !1,
        linkedTo: ":previous",
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        whiskerWidth: null
    });
    h.errorbar = v(h.boxplot, {
        type: "errorbar",
        pointArrayMap: ["low", "high"],
        toYData: function(a) {
            return [a.low, a.high]
        },
        pointValKey: "high",
        doQuartiles: !1,
        drawDataLabels: h.arearange ? h.arearange.prototype.drawDataLabels : r,
        getColumnMetrics: function() {
            return this.linkedParent && this.linkedParent.columnMetrics || h.column.prototype.getColumnMetrics.call(this)
        }
    });
    p.waterfall = o(p.column, {
        lineWidth: 1,
        lineColor: "#333",
        dashStyle: "dot",
        borderColor: "#333",
        dataLabels: {
            inside: !0
        },
        states: {
            hover: {
                lineWidthPlus: 0
            }
        }
    });
    h.waterfall = v(h.column, {
        type: "waterfall",
        upColorProp: "fill",
        pointValKey: "y",
        translate: function() {
            var a = this.options,
                b = this.yAxis,
                c, d, e, f, i, g, k, m, j, n = a.threshold,
                l = a.stacking;
            h.column.prototype.translate.apply(this);
            k = m = n;
            d = this.points;
            for (c = 0, a = d.length; c < a; c++) {
                e = d[c];
                g = this.processedYData[c];
                f = e.shapeArgs;
                j = (i = l && b.stacks[(this.negStacks && g < n ? "-" : "") + this.stackKey]) ? i[e.x].points[this.index + "," + c] : [0, g];
                if (e.isSum) e.y = g;
                else if (e.isIntermediateSum) e.y = g - m;
                i = N(k, k + e.y) + j[0];
                f.y = b.translate(i, 0, 1);
                if (e.isSum) f.y = b.translate(j[1], 0, 1), f.height = Math.min(b.translate(j[0], 0, 1), b.len) - f.y;
                else if (e.isIntermediateSum) f.y = b.translate(j[1], 0, 1), f.height = Math.min(b.translate(m, 0, 1), b.len) - f.y, m = j[1];
                else {
                    if (k !== 0) f.height = g > 0 ? b.translate(k, 0, 1) - f.y : b.translate(k, 0, 1) - b.translate(k - g, 0, 1);
                    k += g
                }
                f.height < 0 && (f.y += f.height, f.height *= -1);
                e.plotY = f.y = D(f.y) - this.borderWidth % 2 / 2;
                f.height = N(D(f.height), 0.001);
                e.yBottom = f.y + f.height;
                f = e.plotY + (e.negative ? f.height : 0);
                this.chart.inverted ? e.tooltipPos[0] = b.len -
                    f : e.tooltipPos[1] = f
            }
        },
        processData: function(a) {
            var b = this.yData,
                c = this.options.data,
                d, e = b.length,
                f, i, g, k, m, j;
            i = f = g = k = this.options.threshold || 0;
            for (j = 0; j < e; j++) m = b[j], d = c && c[j] ? c[j] : {}, m === "sum" || d.isSum ? b[j] = i : m === "intermediateSum" || d.isIntermediateSum ? b[j] = f : (i += m, f += m), g = Math.min(i, g), k = Math.max(i, k);
            t.prototype.processData.call(this, a);
            this.dataMin = g;
            this.dataMax = k
        },
        toYData: function(a) {
            if (a.isSum) return a.x === 0 ? null : "sum";
            else if (a.isIntermediateSum) return a.x === 0 ? null : "intermediateSum";
            return a.y
        },
        getAttribs: function() {
            h.column.prototype.getAttribs.apply(this, arguments);
            var a = this,
                b = a.options,
                c = b.states,
                d = b.upColor || a.color,
                b = l.Color(d).brighten(0.1).get(),
                e = o(a.pointAttr),
                f = a.upColorProp;
            e[""][f] = d;
            e.hover[f] = c.hover.upColor || b;
            e.select[f] = c.select.upColor || d;
            s(a.points, function(b) {
                if (!b.options.color) b.y > 0 ? (b.pointAttr = e, b.color = d) : b.pointAttr = a.pointAttr
            })
        },
        getGraphPath: function() {
            var a = this.data,
                b = a.length,
                c = D(this.options.lineWidth + this.borderWidth) % 2 / 2,
                d = [],
                e, f, i;
            for (i = 1; i < b; i++) f = a[i].shapeArgs,
                e = a[i - 1].shapeArgs, f = ["M", e.x + e.width, e.y + c, "L", f.x, e.y + c], a[i - 1].y < 0 && (f[2] += e.height, f[5] += e.height), d = d.concat(f);
            return d
        },
        getExtremes: r,
        drawGraph: t.prototype.drawGraph
    });
    p.polygon = o(p.scatter, {
        marker: {
            enabled: !1
        }
    });
    h.polygon = v(h.scatter, {
        type: "polygon",
        fillGraph: !0,
        getSegmentPath: function(a) {
            return t.prototype.getSegmentPath.call(this, a).concat("z")
        },
        drawGraph: t.prototype.drawGraph,
        drawLegendSymbol: l.LegendSymbolMixin.drawRectangle
    });
    p.bubble = o(p.scatter, {
        dataLabels: {
            formatter: function() {
                return this.point.z
            },
            inside: !0,
            verticalAlign: "middle"
        },
        marker: {
            lineColor: null,
            lineWidth: 1
        },
        minSize: 8,
        maxSize: "20%",
        states: {
            hover: {
                halo: {
                    size: 5
                }
            }
        },
        tooltip: {
            pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
    });
    z = v(I, {
        haloPath: function() {
            return I.prototype.haloPath.call(this, this.shapeArgs.r + this.series.options.states.hover.halo.size)
        },
        ttBelow: !1
    });
    h.bubble = v(h.scatter, {
        type: "bubble",
        pointClass: z,
        pointArrayMap: ["y", "z"],
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        bubblePadding: !0,
        zoneAxis: "z",
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor"
        },
        applyOpacity: function(a) {
            var b = this.options.marker,
                c = q(b.fillOpacity, 0.5),
                a = a || b.fillColor || this.color;
            c !== 1 && (a = U(a).setOpacity(c).get("rgba"));
            return a
        },
        convertAttribs: function() {
            var a = t.prototype.convertAttribs.apply(this, arguments);
            a.fill = this.applyOpacity(a.fill);
            return a
        },
        getRadii: function(a, b, c, d) {
            var e, f, i = this.zData,
                g = [],
                k = this.options.sizeBy !== "width",
                m = b - a;
            for (e = 0, b = i.length; e <
                b; e++) i[e] < a ? g.push(c / 2 - 1) : (f = m > 0 ? (i[e] - a) / m : 0.5, k && f >= 0 && (f = Math.sqrt(f)), g.push(w.ceil(c + f * (d - c)) / 2));
            this.radii = g
        },
        animate: function(a) {
            var b = this.options.animation;
            if (!a) s(this.points, function(a) {
                var d = a.graphic,
                    a = a.shapeArgs;
                d && a && (d.attr("r", 1), d.animate({
                    r: a.r
                }, b))
            }), this.animate = null
        },
        translate: function() {
            var a, b = this.data,
                c, d, e = this.radii;
            h.scatter.prototype.translate.call(this);
            for (a = b.length; a--;) c = b[a], d = e ? e[a] : 0, d >= this.minPxSize / 2 ? (c.shapeType = "circle", c.shapeArgs = {
                x: c.plotX,
                y: c.plotY,
                r: d
            }, c.dlBox = {
                x: c.plotX - d,
                y: c.plotY - d,
                width: 2 * d,
                height: 2 * d
            }) : c.shapeArgs = c.plotY = c.dlBox = F
        },
        drawLegendSymbol: function(a, b) {
            var c = x(a.itemStyle.fontSize) / 2;
            b.legendSymbol = this.chart.renderer.circle(c, a.baseline - c, c).attr({
                zIndex: 3
            }).add(b.legendGroup);
            b.legendSymbol.isMarker = !0
        },
        drawPoints: h.column.prototype.drawPoints,
        alignDataLabel: h.column.prototype.alignDataLabel,
        buildKDTree: r,
        applyZones: r
    });
    M.prototype.beforePadding = function() {
        var a = this,
            b = this.len,
            c = this.chart,
            d = 0,
            e = b,
            f = this.isXAxis,
            i = f ? "xData" :
            "yData",
            g = this.min,
            k = {},
            m = w.min(c.plotWidth, c.plotHeight),
            j = Number.MAX_VALUE,
            n = -Number.MAX_VALUE,
            h = this.max - g,
            l = b / h,
            p = [];
        s(this.series, function(b) {
            var g = b.options;
            if (b.bubblePadding && (b.visible || !c.options.chart.ignoreHiddenSeries))
                if (a.allowZoomOutside = !0, p.push(b), f) s(["minSize", "maxSize"], function(a) {
                    var b = g[a],
                        f = /%$/.test(b),
                        b = x(b);
                    k[a] = f ? m * b / 100 : b
                }), b.minPxSize = k.minSize, b.maxPxSize = k.maxSize, b = b.zData, b.length && (j = q(g.zMin, w.min(j, w.max(P(b), g.displayNegative === !1 ? g.zThreshold : -Number.MAX_VALUE))),
                    n = q(g.zMax, w.max(n, Q(b))))
        });
        s(p, function(a) {
            var b = a[i],
                c = b.length,
                k;
            f && a.getRadii(j, n, a.minPxSize, a.maxPxSize);
            if (h > 0)
                for (; c--;) typeof b[c] === "number" && (k = a.radii[c], d = Math.min((b[c] - g) * l - k, d), e = Math.max((b[c] - g) * l + k, e))
        });
        p.length && h > 0 && !this.isLog && (e -= b, l *= (b + d - e) / b, s([
            ["min", "userMin", d],
            ["max", "userMax", e]
        ], function(b) {
            q(a.options[b[0]], a[b[1]]) === F && (a[b[0]] += b[2] / l)
        }))
    };
    (function() {
        function a(a, b, c) {
            a.call(this, b, c);
            if (this.chart.polar) this.closeSegment = function(a) {
                var b = this.xAxis.center;
                a.push("L", b[0], b[1])
            }, this.closedStacks = !0
        }

        function b(a, b) {
            var c = this.chart,
                d = this.options.animation,
                e = this.group,
                j = this.markerGroup,
                n = this.xAxis.center,
                h = c.plotLeft,
                l = c.plotTop;
            if (c.polar) {
                if (c.renderer.isSVG) d === !0 && (d = {}), b ? (c = {
                    translateX: n[0] + h,
                    translateY: n[1] + l,
                    scaleX: 0.001,
                    scaleY: 0.001
                }, e.attr(c), j && j.attr(c)) : (c = {
                    translateX: h,
                    translateY: l,
                    scaleX: 1,
                    scaleY: 1
                }, e.animate(c, d), j && j.animate(c, d), this.animate = null)
            } else a.call(this, b)
        }
        var c = t.prototype,
            d = S.prototype,
            e;
        c.searchPointByAngle = function(a) {
            var b =
                this.chart,
                c = this.xAxis.pane.center;
            return this.searchKDTree({
                clientX: 180 + Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop) * (-180 / Math.PI)
            })
        };
        u(c, "buildKDTree", function(a) {
            if (this.chart.polar) this.kdByAngle ? this.searchPoint = this.searchPointByAngle : this.kdDimensions = 2;
            a.apply(this)
        });
        c.toXY = function(a) {
            var b, c = this.chart,
                d = a.plotX;
            b = a.plotY;
            a.rectPlotX = d;
            a.rectPlotY = b;
            b = this.xAxis.postTranslate(a.plotX, this.yAxis.len - b);
            a.plotX = a.polarPlotX = b.x - c.plotLeft;
            a.plotY = a.polarPlotY = b.y - c.plotTop;
            this.kdByAngle ? (c = (d / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, c < 0 && (c += 360), a.clientX = c) : a.clientX = a.plotX
        };
        h.area && u(h.area.prototype, "init", a);
        h.areaspline && u(h.areaspline.prototype, "init", a);
        h.spline && u(h.spline.prototype, "getPointSpline", function(a, b, c, d) {
            var e, j, n, h, l, p, o;
            if (this.chart.polar) {
                e = c.plotX;
                j = c.plotY;
                a = b[d - 1];
                n = b[d + 1];
                this.connectEnds && (a || (a = b[b.length - 2]), n || (n = b[1]));
                if (a && n) h = a.plotX, l = a.plotY, b = n.plotX, p = n.plotY, h = (1.5 * e + h) / 2.5, l = (1.5 * j + l) / 2.5, n = (1.5 * e + b) / 2.5, o = (1.5 *
                    j + p) / 2.5, b = Math.sqrt(Math.pow(h - e, 2) + Math.pow(l - j, 2)), p = Math.sqrt(Math.pow(n - e, 2) + Math.pow(o - j, 2)), h = Math.atan2(l - j, h - e), l = Math.atan2(o - j, n - e), o = Math.PI / 2 + (h + l) / 2, Math.abs(h - o) > Math.PI / 2 && (o -= Math.PI), h = e + Math.cos(o) * b, l = j + Math.sin(o) * b, n = e + Math.cos(Math.PI + o) * p, o = j + Math.sin(Math.PI + o) * p, c.rightContX = n, c.rightContY = o;
                d ? (c = ["C", a.rightContX || a.plotX, a.rightContY || a.plotY, h || e, l || j, e, j], a.rightContX = a.rightContY = null) : c = ["M", e, j]
            } else c = a.call(this, b, c, d);
            return c
        });
        u(c, "translate", function(a) {
            var b =
                this.chart;
            a.call(this);
            if (b.polar && (this.kdByAngle = b.tooltip && b.tooltip.shared, !this.preventPostTranslate)) {
                a = this.points;
                for (b = a.length; b--;) this.toXY(a[b])
            }
        });
        u(c, "getSegmentPath", function(a, b) {
            var c = this.points;
            if (this.chart.polar && this.options.connectEnds !== !1 && b[b.length - 1] === c[c.length - 1] && c[0].y !== null) this.connectEnds = !0, b = [].concat(b, [c[0]]);
            return a.call(this, b)
        });
        u(c, "animate", b);
        if (h.column) e = h.column.prototype, u(e, "animate", b), u(e, "translate", function(a) {
            var b = this.xAxis,
                c = this.yAxis.len,
                d = b.center,
                e = b.startAngleRad,
                j = this.chart.renderer,
                h, l;
            this.preventPostTranslate = !0;
            a.call(this);
            if (b.isRadial) {
                b = this.points;
                for (l = b.length; l--;) h = b[l], a = h.barX + e, h.shapeType = "path", h.shapeArgs = {
                    d: j.symbols.arc(d[0], d[1], c - h.plotY, null, {
                        start: a,
                        end: a + h.pointWidth,
                        innerR: c - q(h.yBottom, c)
                    })
                }, this.toXY(h), h.tooltipPos = [h.plotX, h.plotY], h.ttBelow = h.plotY > d[1]
            }
        }), u(e, "alignDataLabel", function(a, b, d, e, h, j) {
            if (this.chart.polar) {
                a = b.rectPlotX / Math.PI * 180;
                if (e.align === null) e.align = a > 20 && a < 160 ? "left" : a > 200 &&
                    a < 340 ? "right" : "center";
                if (e.verticalAlign === null) e.verticalAlign = a < 45 || a > 315 ? "bottom" : a > 135 && a < 225 ? "top" : "middle";
                c.alignDataLabel.call(this, b, d, e, h, j)
            } else a.call(this, b, d, e, h, j)
        });
        u(d, "getCoordinates", function(a, b) {
            var c = this.chart,
                d = {
                    xAxis: [],
                    yAxis: []
                };
            c.polar ? s(c.axes, function(a) {
                var e = a.isXAxis,
                    f = a.center,
                    h = b.chartX - f[0] - c.plotLeft,
                    f = b.chartY - f[1] - c.plotTop;
                d[e ? "xAxis" : "yAxis"].push({
                    axis: a,
                    value: a.translate(e ? Math.PI - Math.atan2(h, f) : Math.sqrt(Math.pow(h, 2) + Math.pow(f, 2)), !0)
                })
            }) : d = a.call(this,
                b);
            return d
        })
    })()
})(Highcharts);