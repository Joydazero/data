/*
  Highcharts JS v4.1.8 (2015-08-20)
 Solid angular gauge module

 (c) 2010-2014 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a) {
    var q = a.getOptions().plotOptions,
        r = a.pInt,
        s = a.pick,
        j = a.each,
        k;
    q.solidgauge = a.merge(q.gauge, {
        colorByPoint: !0
    });
    k = {
        initDataClasses: function(b) {
            var c = this,
                e = this.chart,
                d, o = 0,
                f = this.options;
            this.dataClasses = d = [];
            j(b.dataClasses, function(g, h) {
                var p, g = a.merge(g);
                d.push(g);
                if (!g.color) f.dataClassColor === "category" ? (p = e.options.colors, g.color = p[o++], o === p.length && (o = 0)) : g.color = c.tweenColors(a.Color(f.minColor), a.Color(f.maxColor), h / (b.dataClasses.length - 1))
            })
        },
        initStops: function(b) {
            this.stops =
                b.stops || [
                    [0, this.options.minColor],
                    [1, this.options.maxColor]
                ];
            j(this.stops, function(b) {
                b.color = a.Color(b[1])
            })
        },
        toColor: function(b, c) {
            var e, d = this.stops,
                a, f = this.dataClasses,
                g, h;
            if (f)
                for (h = f.length; h--;) {
                    if (g = f[h], a = g.from, d = g.to, (a === void 0 || b >= a) && (d === void 0 || b <= d)) {
                        e = g.color;
                        if (c) c.dataClass = h;
                        break
                    }
                } else {
                    this.isLog && (b = this.val2lin(b));
                    e = 1 - (this.max - b) / (this.max - this.min);
                    for (h = d.length; h--;)
                        if (e > d[h][0]) break;
                    a = d[h] || d[h + 1];
                    d = d[h + 1] || a;
                    e = 1 - (d[0] - e) / (d[0] - a[0] || 1);
                    e = this.tweenColors(a.color,
                        d.color, e)
                }
            return e
        },
        tweenColors: function(b, c, a) {
            var d;
            !c.rgba.length || !b.rgba.length ? b = c.raw || "none" : (b = b.rgba, c = c.rgba, d = c[3] !== 1 || b[3] !== 1, b = (d ? "rgba(" : "rgb(") + Math.round(c[0] + (b[0] - c[0]) * (1 - a)) + "," + Math.round(c[1] + (b[1] - c[1]) * (1 - a)) + "," + Math.round(c[2] + (b[2] - c[2]) * (1 - a)) + (d ? "," + (c[3] + (b[3] - c[3]) * (1 - a)) : "") + ")");
            return b
        }
    };
    j(["fill", "stroke"], function(b) {
        HighchartsAdapter.addAnimSetter(b, function(c) {
            c.elem.attr(b, k.tweenColors(a.Color(c.start), a.Color(c.end), c.pos))
        })
    });
    a.seriesTypes.solidgauge =
        a.extendClass(a.seriesTypes.gauge, {
            type: "solidgauge",
            pointAttrToOptions: {},
            bindAxes: function() {
                var b;
                a.seriesTypes.gauge.prototype.bindAxes.call(this);
                b = this.yAxis;
                a.extend(b, k);
                b.options.dataClasses && b.initDataClasses(b.options);
                b.initStops(b.options)
            },
            drawPoints: function() {
                var b = this,
                    c = b.yAxis,
                    e = c.center,
                    d = b.options,
                    o = b.chart.renderer,
                    f = d.overshoot,
                    g = f && typeof f === "number" ? f / 180 * Math.PI : 0;
                a.each(b.points, function(a) {
                    var f = a.graphic,
                        i = c.startAngleRad + c.translate(a.y, null, null, null, !0),
                        j = r(s(a.options.radius,
                            d.radius, 100)) * e[2] / 200,
                        l = r(s(a.options.innerRadius, d.innerRadius, 60)) * e[2] / 200,
                        m = c.toColor(a.y, a),
                        n = Math.min(c.startAngleRad, c.endAngleRad),
                        k = Math.max(c.startAngleRad, c.endAngleRad);
                    m === "none" && (m = a.color || b.color || "none");
                    if (m !== "none") a.color = m;
                    i = Math.max(n - g, Math.min(k + g, i));
                    d.wrap === !1 && (i = Math.max(n, Math.min(k, i)));
                    n = Math.min(i, c.startAngleRad);
                    i = Math.max(i, c.startAngleRad);
                    i - n > 2 * Math.PI && (i = n + 2 * Math.PI);
                    a.shapeArgs = l = {
                        x: e[0],
                        y: e[1],
                        r: j,
                        innerR: l,
                        start: n,
                        end: i,
                        fill: m
                    };
                    a.startR = j;
                    if (f) {
                        if (a = l.d,
                            f.animate(l), a) l.d = a
                    } else a.graphic = o.arc(l).attr({
                        stroke: d.borderColor || "none",
                        "stroke-width": d.borderWidth || 0,
                        fill: m,
                        "sweep-flag": 0
                    }).add(b.group)
                })
            },
            animate: function(b) {
                if (!b) this.startAngleRad = this.yAxis.startAngleRad, a.seriesTypes.pie.prototype.animate.call(this, b)
            }
        })
})(Highcharts);