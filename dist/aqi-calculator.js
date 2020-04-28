parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    dZYI: [
      function (require, module, exports) {
        var define;
        var t;
        !(function (n, e) {
          "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = e())
            : "function" == typeof t && t.amd
            ? t(e)
            : (n.dayjs = e());
        })(this, function () {
          "use strict";
          var t = "millisecond",
            n = "second",
            e = "minute",
            r = "hour",
            i = "day",
            s = "week",
            u = "month",
            a = "quarter",
            o = "year",
            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c = function (t, n, e) {
              var r = String(t);
              return !r || r.length >= n
                ? t
                : "" + Array(n + 1 - r.length).join(e) + t;
            },
            d = {
              s: c,
              z: function (t) {
                var n = -t.utcOffset(),
                  e = Math.abs(n),
                  r = Math.floor(e / 60),
                  i = e % 60;
                return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
              },
              m: function (t, n) {
                var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                  r = t.clone().add(e, u),
                  i = n - r < 0,
                  s = t.clone().add(e + (i ? -1 : 1), u);
                return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
              },
              a: function (t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
              },
              p: function (h) {
                return (
                  {
                    M: u,
                    y: o,
                    w: s,
                    d: i,
                    D: "date",
                    h: r,
                    m: e,
                    s: n,
                    ms: t,
                    Q: a,
                  }[h] ||
                  String(h || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (t) {
                return void 0 === t;
              },
            },
            $ = {
              name: "en",
              weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
              months: "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            },
            l = "en",
            m = {};
          m[l] = $;
          var y = function (t) {
              return t instanceof v;
            },
            M = function (t, n, e) {
              var r;
              if (!t) return l;
              if ("string" == typeof t)
                m[t] && (r = t), n && ((m[t] = n), (r = t));
              else {
                var i = t.name;
                (m[i] = t), (r = i);
              }
              return !e && r && (l = r), r || (!e && l);
            },
            g = function (t, n, e) {
              if (y(t)) return t.clone();
              var r = n
                ? "string" == typeof n
                  ? { format: n, pl: e }
                  : n
                : {};
              return (r.date = t), new v(r);
            },
            D = d;
          (D.l = M),
            (D.i = y),
            (D.w = function (t, n) {
              return g(t, { locale: n.$L, utc: n.$u, $offset: n.$offset });
            });
          var v = (function () {
            function c(t) {
              (this.$L = this.$L || M(t.locale, null, !0)), this.parse(t);
            }
            var d = c.prototype;
            return (
              (d.parse = function (t) {
                (this.$d = (function (t) {
                  var n = t.date,
                    e = t.utc;
                  if (null === n) return new Date(NaN);
                  if (D.u(n)) return new Date();
                  if (n instanceof Date) return new Date(n);
                  if ("string" == typeof n && !/Z$/i.test(n)) {
                    var r = n.match(h);
                    if (r)
                      return e
                        ? new Date(
                            Date.UTC(
                              r[1],
                              r[2] - 1,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              r[7] || 0
                            )
                          )
                        : new Date(
                            r[1],
                            r[2] - 1,
                            r[3] || 1,
                            r[4] || 0,
                            r[5] || 0,
                            r[6] || 0,
                            r[7] || 0
                          );
                  }
                  return new Date(n);
                })(t)),
                  this.init();
              }),
              (d.init = function () {
                var t = this.$d;
                (this.$y = t.getFullYear()),
                  (this.$M = t.getMonth()),
                  (this.$D = t.getDate()),
                  (this.$W = t.getDay()),
                  (this.$H = t.getHours()),
                  (this.$m = t.getMinutes()),
                  (this.$s = t.getSeconds()),
                  (this.$ms = t.getMilliseconds());
              }),
              (d.$utils = function () {
                return D;
              }),
              (d.isValid = function () {
                return !("Invalid Date" === this.$d.toString());
              }),
              (d.isSame = function (t, n) {
                var e = g(t);
                return this.startOf(n) <= e && e <= this.endOf(n);
              }),
              (d.isAfter = function (t, n) {
                return g(t) < this.startOf(n);
              }),
              (d.isBefore = function (t, n) {
                return this.endOf(n) < g(t);
              }),
              (d.$g = function (t, n, e) {
                return D.u(t) ? this[n] : this.set(e, t);
              }),
              (d.year = function (t) {
                return this.$g(t, "$y", o);
              }),
              (d.month = function (t) {
                return this.$g(t, "$M", u);
              }),
              (d.day = function (t) {
                return this.$g(t, "$W", i);
              }),
              (d.date = function (t) {
                return this.$g(t, "$D", "date");
              }),
              (d.hour = function (t) {
                return this.$g(t, "$H", r);
              }),
              (d.minute = function (t) {
                return this.$g(t, "$m", e);
              }),
              (d.second = function (t) {
                return this.$g(t, "$s", n);
              }),
              (d.millisecond = function (n) {
                return this.$g(n, "$ms", t);
              }),
              (d.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (d.valueOf = function () {
                return this.$d.getTime();
              }),
              (d.startOf = function (t, a) {
                var h = this,
                  f = !!D.u(a) || a,
                  c = D.p(t),
                  d = function (t, n) {
                    var e = D.w(
                      h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t),
                      h
                    );
                    return f ? e : e.endOf(i);
                  },
                  $ = function (t, n) {
                    return D.w(
                      h
                        .toDate()
                        [t].apply(
                          h.toDate("s"),
                          (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)
                        ),
                      h
                    );
                  },
                  l = this.$W,
                  m = this.$M,
                  y = this.$D,
                  M = "set" + (this.$u ? "UTC" : "");
                switch (c) {
                  case o:
                    return f ? d(1, 0) : d(31, 11);
                  case u:
                    return f ? d(1, m) : d(0, m + 1);
                  case s:
                    var g = this.$locale().weekStart || 0,
                      v = (l < g ? l + 7 : l) - g;
                    return d(f ? y - v : y + (6 - v), m);
                  case i:
                  case "date":
                    return $(M + "Hours", 0);
                  case r:
                    return $(M + "Minutes", 1);
                  case e:
                    return $(M + "Seconds", 2);
                  case n:
                    return $(M + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (d.endOf = function (t) {
                return this.startOf(t, !1);
              }),
              (d.$set = function (s, a) {
                var h,
                  f = D.p(s),
                  c = "set" + (this.$u ? "UTC" : ""),
                  d = ((h = {}),
                  (h[i] = c + "Date"),
                  (h.date = c + "Date"),
                  (h[u] = c + "Month"),
                  (h[o] = c + "FullYear"),
                  (h[r] = c + "Hours"),
                  (h[e] = c + "Minutes"),
                  (h[n] = c + "Seconds"),
                  (h[t] = c + "Milliseconds"),
                  h)[f],
                  $ = f === i ? this.$D + (a - this.$W) : a;
                if (f === u || f === o) {
                  var l = this.clone().set("date", 1);
                  l.$d[d]($),
                    l.init(),
                    (this.$d = l
                      .set("date", Math.min(this.$D, l.daysInMonth()))
                      .toDate());
                } else d && this.$d[d]($);
                return this.init(), this;
              }),
              (d.set = function (t, n) {
                return this.clone().$set(t, n);
              }),
              (d.get = function (t) {
                return this[D.p(t)]();
              }),
              (d.add = function (t, a) {
                var h,
                  f = this;
                t = Number(t);
                var c = D.p(a),
                  d = function (n) {
                    var e = g(f);
                    return D.w(e.date(e.date() + Math.round(n * t)), f);
                  };
                if (c === u) return this.set(u, this.$M + t);
                if (c === o) return this.set(o, this.$y + t);
                if (c === i) return d(1);
                if (c === s) return d(7);
                var $ =
                    ((h = {}), (h[e] = 6e4), (h[r] = 36e5), (h[n] = 1e3), h)[
                      c
                    ] || 1,
                  l = this.$d.getTime() + t * $;
                return D.w(l, this);
              }),
              (d.subtract = function (t, n) {
                return this.add(-1 * t, n);
              }),
              (d.format = function (t) {
                var n = this;
                if (!this.isValid()) return "Invalid Date";
                var e = t || "YYYY-MM-DDTHH:mm:ssZ",
                  r = D.z(this),
                  i = this.$locale(),
                  s = this.$H,
                  u = this.$m,
                  a = this.$M,
                  o = i.weekdays,
                  h = i.months,
                  c = function (t, r, i, s) {
                    return (t && (t[r] || t(n, e))) || i[r].substr(0, s);
                  },
                  d = function (t) {
                    return D.s(s % 12 || 12, t, "0");
                  },
                  $ =
                    i.meridiem ||
                    function (t, n, e) {
                      var r = t < 12 ? "AM" : "PM";
                      return e ? r.toLowerCase() : r;
                    },
                  l = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: D.s(a + 1, 2, "0"),
                    MMM: c(i.monthsShort, a, h, 3),
                    MMMM: h[a] || h(this, e),
                    D: this.$D,
                    DD: D.s(this.$D, 2, "0"),
                    d: String(this.$W),
                    dd: c(i.weekdaysMin, this.$W, o, 2),
                    ddd: c(i.weekdaysShort, this.$W, o, 3),
                    dddd: o[this.$W],
                    H: String(s),
                    HH: D.s(s, 2, "0"),
                    h: d(1),
                    hh: d(2),
                    a: $(s, u, !0),
                    A: $(s, u, !1),
                    m: String(u),
                    mm: D.s(u, 2, "0"),
                    s: String(this.$s),
                    ss: D.s(this.$s, 2, "0"),
                    SSS: D.s(this.$ms, 3, "0"),
                    Z: r,
                  };
                return e.replace(f, function (t, n) {
                  return n || l[t] || r.replace(":", "");
                });
              }),
              (d.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (d.diff = function (t, h, f) {
                var c,
                  d = D.p(h),
                  $ = g(t),
                  l = 6e4 * ($.utcOffset() - this.utcOffset()),
                  m = this - $,
                  y = D.m(this, $);
                return (
                  (y =
                    ((c = {}),
                    (c[o] = y / 12),
                    (c[u] = y),
                    (c[a] = y / 3),
                    (c[s] = (m - l) / 6048e5),
                    (c[i] = (m - l) / 864e5),
                    (c[r] = m / 36e5),
                    (c[e] = m / 6e4),
                    (c[n] = m / 1e3),
                    c)[d] || m),
                  f ? y : D.a(y)
                );
              }),
              (d.daysInMonth = function () {
                return this.endOf(u).$D;
              }),
              (d.$locale = function () {
                return m[this.$L];
              }),
              (d.locale = function (t, n) {
                if (!t) return this.$L;
                var e = this.clone(),
                  r = M(t, n, !0);
                return r && (e.$L = r), e;
              }),
              (d.clone = function () {
                return D.w(this.$d, this);
              }),
              (d.toDate = function () {
                return new Date(this.valueOf());
              }),
              (d.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (d.toISOString = function () {
                return this.$d.toISOString();
              }),
              (d.toString = function () {
                return this.$d.toUTCString();
              }),
              c
            );
          })();
          return (
            (g.prototype = v.prototype),
            (g.extend = function (t, n) {
              return t(n, v, g), g;
            }),
            (g.locale = M),
            (g.isDayjs = y),
            (g.unix = function (t) {
              return g(1e3 * t);
            }),
            (g.en = m[l]),
            (g.Ls = m),
            g
          );
        });
      },
      {},
    ],
    FOZT: [
      function (require, module, exports) {
        var o = [
            {
              label: "Good",
              color: "#009900",
              range: {
                pm25: [0, 30],
                pm10: [0, 50],
                so2: [0, 40],
                no: [0, 40],
                nox: [0, 40],
                no2: [0, 40],
                o3: [0, 50],
                co: [0, 1],
                aqi: [0, 50],
              },
            },
            {
              label: "Satisfactory",
              color: "#59B300",
              range: {
                pm25: [30, 60],
                pm10: [50, 100],
                so2: [40, 80],
                no: [40, 80],
                nox: [40, 80],
                no2: [40, 80],
                o3: [50, 100],
                co: [1, 2],
                aqi: [50, 100],
              },
            },
            {
              label: "Moderately Polluted",
              color: "#DFDF31",
              range: {
                pm25: [60, 90],
                pm10: [100, 250],
                so2: [80, 380],
                no: [80, 180],
                nox: [80, 180],
                no2: [80, 180],
                o3: [100, 168],
                co: [2, 10],
                aqi: [100, 200],
              },
            },
            {
              label: "Poor",
              color: "#E68A00",
              range: {
                pm25: [90, 120],
                pm10: [250, 350],
                so2: [380, 800],
                no: [180, 280],
                nox: [180, 280],
                no2: [180, 280],
                o3: [168, 280],
                co: [10, 17],
                aqi: [200, 300],
              },
            },
            {
              label: "Very Poor",
              color: "#E82C0C",
              range: {
                pm25: [120, 250],
                pm10: [350, 430],
                so2: [800, 1600],
                no: [280, 400],
                nox: [280, 400],
                no2: [280, 400],
                o3: [280, 400],
                co: [17, 34],
                aqi: [300, 400],
              },
            },
            {
              label: "Severe",
              color: "#A52A2A",
              range: {
                pm25: [250, 1e3],
                pm10: [430, 1e3],
                so2: [1600, 2e3],
                no: [400, 1e3],
                nox: [400, 1e3],
                no2: [400, 1e3],
                o3: [400, 1e3],
                co: [34, 50],
                aqi: [400, 500],
              },
            },
          ],
          e = { pm25: 24, pm10: 24, so2: 24, nox: 24, o3: 8, co: 8 };
        module.exports = { BANDS: o, HOUR_DIFF: e };
      },
      {},
    ],
    QCct: [
      function (require, module, exports) {
        function r(r) {
          return n(r) || e(r) || i(r) || t();
        }
        function t() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function e(r) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(r))
            return Array.from(r);
        }
        function n(r) {
          if (Array.isArray(r)) return u(r);
        }
        function a(r, t) {
          return c(r) || f(r, t) || i(r, t) || o();
        }
        function o() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        function i(r, t) {
          if (r) {
            if ("string" == typeof r) return u(r, t);
            var e = Object.prototype.toString.call(r).slice(8, -1);
            return (
              "Object" === e && r.constructor && (e = r.constructor.name),
              "Map" === e || "Set" === e
                ? Array.from(e)
                : "Arguments" === e ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                ? u(r, t)
                : void 0
            );
          }
        }
        function u(r, t) {
          (null == t || t > r.length) && (t = r.length);
          for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
          return n;
        }
        function f(r, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
            var e = [],
              n = !0,
              a = !1,
              o = void 0;
            try {
              for (
                var i, u = r[Symbol.iterator]();
                !(n = (i = u.next()).done) &&
                (e.push(i.value), !t || e.length !== t);
                n = !0
              );
            } catch (f) {
              (a = !0), (o = f);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (a) throw o;
              }
            }
            return e;
          }
        }
        function c(r) {
          if (Array.isArray(r)) return r;
        }
        var l = require("dayjs"),
          y = require("./utils"),
          d = y.BANDS,
          s = y.HOUR_DIFF,
          m = function () {
            var r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            if (!Object.keys(s).includes(t)) return 0;
            var e = l(),
              n = s[t],
              o = r.filter(function (r) {
                var t = r.datetime;
                return r.value && e.diff(l(t), "hours") < n;
              });
            if (o.length <= 0) return 0;
            var i =
                o.reduce(function (r, t) {
                  return r + t.value;
                }, 0) / o.length,
              u = d.findIndex(function (r) {
                return r.range[t][1] >= i;
              });
            if (u <= 0) {
              var f = d.length - 1,
                c = d[f].range.aqi[1],
                y = d[f].range[t][1];
              return (c / y) * (i - y) + c;
            }
            var m = a(d[u].range.aqi, 2),
              v = m[0],
              b = m[1],
              h = a(d[u].range[t], 2),
              p = h[0];
            return ((b - v) / (h[1] - p)) * (i - p) + v;
          },
          v = function (t) {
            if (!Array.isArray(t) || 0 === t.length) return 0;
            var e = t.reduce(function (t, e) {
                return (
                  Object.keys(s).map(function (n) {
                    var a = { datetime: e.datetime, value: e[n] };
                    t[n] = t[n] ? [].concat(r(t[n]), [a]) : [a];
                  }),
                  t
                );
              }, {}),
              n = Object.keys(e).map(function (r) {
                return m(e[r], r);
              }),
              a = Math.max.apply(Math, r(n));
            return Math.round(a);
          };
        module.exports = v;
      },
      { dayjs: "dZYI", "./utils": "FOZT" },
    ],
  },
  {},
  ["QCct"],
  "calculateAQI"
);
//# sourceMappingURL=/aqi-calculator.js.map
