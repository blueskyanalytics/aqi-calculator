// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function(modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
            typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module,
                            module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x) { return newRequire(localRequire.resolve(x)); }

    function resolve(x) { return modules[name][1][x] || x; }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] =
        [ function(require, module) { module.exports = exports; }, {} ];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function() { return mainExports; });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({
  "KAlz" : [
    function(require, module, exports) {
      var define;
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof(obj) { return typeof obj; };
        } else {
          _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" &&
                           obj.constructor === Symbol &&
                           obj !== Symbol.prototype
                       ? "symbol"
                       : typeof obj;
          };
        }
        return _typeof(obj);
      }

      !function(t, n) {
        "object" ==
                (typeof exports === "undefined"
                     ? "undefined"
                     : _typeof(exports)) && "undefined" != typeof module
            ? module.exports = n()
            : "function" == typeof define && define.amd ? define(n)
                                                        : t.dayjs = n();
      }(this, function() {
        "use strict";

        var t = "millisecond", n = "second", e = "minute", r = "hour",
            i = "day", s = "week", u = "month", o = "quarter", a = "year",
            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c =
                function c(t, n, e) {
              var r = String(t);
              return !r || r.length >= n
                         ? t
                         : "" + Array(n + 1 - r.length).join(e) + t;
            },
            d = {
              s : c,
              z : function z(t) {
                var n = -t.utcOffset(), e = Math.abs(n), r = Math.floor(e / 60),
                    i = e % 60;
                return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
              },
              m : function m(t, n) {
                var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                    r = t.clone().add(e, u), i = n - r < 0,
                    s = t.clone().add(e + (i ? -1 : 1), u);
                return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
              },
              a : function a(
                  t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t); },
              p : function p(h) {
                return {
                  M : u,
                  y : a,
                  w : s,
                  d : i,
                  D : "date",
                  h : r,
                  m : e,
                  s : n,
                  ms : t,
                  Q : o
                }[h] || String(h || "").toLowerCase().replace(/s$/, "");
              },
              u : function u(t) { return void 0 === t; }
            },
            $ = {
              name : "en",
              weekdays :
                  "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday"
                      .split("_"),
              months :
                  "January_February_March_April_May_June_July_August_September_October_November_December"
                      .split("_")
            },
            l = "en", m = {};

        m[l] = $;

        var y = function y(t) { return t instanceof v; },
            M = function M(t, n, e) {
              var r;
              if (!t)
                return l;
              if ("string" == typeof t)
                m[t] && (r = t), n && (m[t] = n, r = t);
              else {
                var i = t.name;
                m[i] = t, r = i;
              }
              return !e && r && (l = r), r || !e && l;
            }, g = function g(t, n, e) {
              if (y(t))
                return t.clone();
              var r = n ? "string" == typeof n ? {format : n, pl : e} : n : {};
              return r.date = t, new v(r);
            }, D = d;

        D.l = M, D.i = y, D.w = function(t, n) {
          return g(t, {locale : n.$L, utc : n.$u, $offset : n.$offset});
        };

        var v = function() {
          function c(t) {
            this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
          }

          var d = c.prototype;
          return d.parse =
                     function(t) {
            this.$d = function(t) {
              var n = t.date, e = t.utc;
              if (null === n)
                return new Date(NaN);
              if (D.u(n))
                return new Date();
              if (n instanceof Date)
                return new Date(n);

              if ("string" == typeof n && !/Z$/i.test(n)) {
                var r = n.match(h);
                if (r)
                  return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1,
                                               r[4] || 0, r[5] || 0, r[6] || 0,
                                               r[7] || 0))
                           : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0,
                                      r[5] || 0, r[6] || 0, r[7] || 0);
              }

              return new Date(n);
            }(t), this.init();
          },
                 d.init =
                     function() {
                   var t = this.$d;
                   this.$y = t.getFullYear(), this.$M = t.getMonth(),
                   this.$D = t.getDate(), this.$W = t.getDay(),
                   this.$H = t.getHours(), this.$m = t.getMinutes(),
                   this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
                 },
                 d.$utils = function() { return D; },
                 d.isValid =
                     function() {
                   return !("Invalid Date" === this.$d.toString());
                 },
                 d.isSame =
                     function(t, n) {
                   var e = g(t);
                   return this.startOf(n) <= e && e <= this.endOf(n);
                 },
                 d.isAfter = function(t, n) { return g(t) < this.startOf(n); },
                 d.isBefore = function(t, n) { return this.endOf(n) < g(t); },
                 d.$g = function(
                     t, n, e) { return D.u(t) ? this[n] : this.set(e, t); },
                 d.year = function(t) { return this.$g(t, "$y", a); },
                 d.month = function(t) { return this.$g(t, "$M", u); },
                 d.day = function(t) { return this.$g(t, "$W", i); },
                 d.date = function(t) { return this.$g(t, "$D", "date"); },
                 d.hour = function(t) { return this.$g(t, "$H", r); },
                 d.minute = function(t) { return this.$g(t, "$m", e); },
                 d.second = function(t) { return this.$g(t, "$s", n); },
                 d.millisecond = function(n) { return this.$g(n, "$ms", t); },
                 d.unix =
                     function() { return Math.floor(this.valueOf() / 1e3); },
                 d.valueOf = function() { return this.$d.getTime(); },
                 d.startOf =
                     function(t, o) {
                   var h = this, f = !!D.u(o) || o, c = D.p(t),
                       d =
                           function d(t, n) {
                         var e = D.w(h.$u ? Date.UTC(h.$y, n, t)
                                          : new Date(h.$y, n, t),
                                     h);
                         return f ? e : e.endOf(i);
                       },
                       $ =
                           function $(t, n) {
                         return D.w(h.toDate()[t].apply(
                                        h.toDate("s"), (f ? [ 0, 0, 0, 0 ]
                                                          : [ 23, 59, 59, 999 ])
                                                           .slice(n)),
                                    h);
                       },
                       l = this.$W, m = this.$M, y = this.$D,
                       M = "set" + (this.$u ? "UTC" : "");

                   switch (c) {
                   case a:
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
                 },
                 d.endOf = function(t) { return this.startOf(t, !1); },
                 d.$set =
                     function(s, o) {
                   var h, f = D.p(s), c = "set" + (this.$u ? "UTC" : ""),
                          d = (h = {}, h[i] = c + "Date", h.date = c + "Date",
                               h[u] = c + "Month", h[a] = c + "FullYear",
                               h[r] = c + "Hours", h[e] = c + "Minutes",
                               h[n] = c + "Seconds", h[t] = c + "Milliseconds",
                               h)[f],
                          $ = f === i ? this.$D + (o - this.$W) : o;

                   if (f === u || f === a) {
                     var l = this.clone().set("date", 1);
                     l.$d[d]($), l.init(),
                         this.$d =
                             l.set("date", Math.min(this.$D, l.daysInMonth()))
                                 .toDate();
                   } else
                     d && this.$d[d]($);

                   return this.init(), this;
                 },
                 d.set = function(t, n) { return this.clone().$set(t, n); },
                 d.get = function(t) { return this[D.p(t)](); },
                 d.add =
                     function(t, o) {
                   var h, f = this;
                   t = Number(t);

                   var c = D.p(o), d = function d(n) {
                     var e = g(f);
                     return D.w(e.date(e.date() + Math.round(n * t)), f);
                   };

                   if (c === u)
                     return this.set(u, this.$M + t);
                   if (c === a)
                     return this.set(a, this.$y + t);
                   if (c === i)
                     return d(1);
                   if (c === s)
                     return d(7);
                   var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3,
                            h)[c] ||
                           1,
                       l = this.$d.getTime() + t * $;
                   return D.w(l, this);
                 },
                 d.subtract = function(t, n) { return this.add(-1 * t, n); },
                 d.format =
                     function(t) {
                   var n = this;
                   if (!this.isValid())
                     return "Invalid Date";

                   var e = t || "YYYY-MM-DDTHH:mm:ssZ", r = D.z(this),
                       i = this.$locale(), s = this.$H, u = this.$m,
                       o = this.$M, a = i.weekdays, h = i.months,
                       c =
                           function c(t, r, i, s) {
                         return t && (t[r] || t(n, e)) || i[r].substr(0, s);
                       },
                       d = function d(t) { return D.s(s % 12 || 12, t, "0"); },
                       $ = i.meridiem || function(t, n, e) {
                         var r = t < 12 ? "AM" : "PM";
                         return e ? r.toLowerCase() : r;
                       }, l = {
                         YY : String(this.$y).slice(-2),
                         YYYY : this.$y,
                         M : o + 1,
                         MM : D.s(o + 1, 2, "0"),
                         MMM : c(i.monthsShort, o, h, 3),
                         MMMM : h[o] || h(this, e),
                         D : this.$D,
                         DD : D.s(this.$D, 2, "0"),
                         d : String(this.$W),
                         dd : c(i.weekdaysMin, this.$W, a, 2),
                         ddd : c(i.weekdaysShort, this.$W, a, 3),
                         dddd : a[this.$W],
                         H : String(s),
                         HH : D.s(s, 2, "0"),
                         h : d(1),
                         hh : d(2),
                         a : $(s, u, !0),
                         A : $(s, u, !1),
                         m : String(u),
                         mm : D.s(u, 2, "0"),
                         s : String(this.$s),
                         ss : D.s(this.$s, 2, "0"),
                         SSS : D.s(this.$ms, 3, "0"),
                         Z : r
                       };

                   return e.replace(
                       f,
                       function(t,
                                n) { return n || l[t] || r.replace(":", ""); });
                 },
                 d.utcOffset =
                     function() {
                   return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                 },
                 d.diff =
                     function(t, h, f) {
                   var c, d = D.p(h), $ = g(t),
                          l = 6e4 * ($.utcOffset() - this.utcOffset()),
                          m = this - $, y = D.m(this, $);
                   return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3,
                               c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5,
                               c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3,
                               c)[d] ||
                              m,
                          f ? y : D.a(y);
                 },
                 d.daysInMonth = function() { return this.endOf(u).$D; },
                 d.$locale = function() { return m[this.$L]; },
                 d.locale =
                     function(t, n) {
                   if (!t)
                     return this.$L;
                   var e = this.clone(), r = M(t, n, !0);
                   return r && (e.$L = r), e;
                 },
                 d.clone = function() { return D.w(this.$d, this); },
                 d.toDate = function() { return new Date(this.valueOf()); },
                 d.toJSON =
                     function() {
                   return this.isValid() ? this.toISOString() : null;
                 },
                 d.toISOString = function() { return this.$d.toISOString(); },
                 d.toString = function() { return this.$d.toUTCString(); }, c;
        }();

        return g.prototype = v.prototype,
               g.extend = function(t, n) { return t(n, v, g), g; },
               g.locale = M, g.isDayjs = y,
               g.unix = function(t) { return g(1e3 * t); }, g.en = m[l],
               g.Ls = m, g;
      });
    },
    {}
  ],
  "FOZT" : [
    function(require, module, exports) {
      var BANDS = [
        {
          label : "Good",
          color : "#009900",
          range : {
            pm25 : [ 0, 30 ],
            pm10 : [ 0, 50 ],
            so2 : [ 0, 40 ],
            no : [ 0, 40 ],
            nox : [ 0, 40 ],
            no2 : [ 0, 40 ],
            o3 : [ 0, 50 ],
            co : [ 0, 1 ],
            aqi : [ 0, 50 ]
          }
        },
        {
          label : "Satisfactory",
          color : "#59B300",
          range : {
            pm25 : [ 30, 60 ],
            pm10 : [ 50, 100 ],
            so2 : [ 40, 80 ],
            no : [ 40, 80 ],
            nox : [ 40, 80 ],
            no2 : [ 40, 80 ],
            o3 : [ 50, 100 ],
            co : [ 1, 2 ],
            aqi : [ 50, 100 ]
          }
        },
        {
          label : "Moderately Polluted",
          color : "#DFDF31",
          range : {
            pm25 : [ 60, 90 ],
            pm10 : [ 100, 250 ],
            so2 : [ 80, 380 ],
            no : [ 80, 180 ],
            nox : [ 80, 180 ],
            no2 : [ 80, 180 ],
            o3 : [ 100, 168 ],
            co : [ 2, 10 ],
            aqi : [ 100, 200 ]
          }
        },
        {
          label : "Poor",
          color : "#E68A00",
          range : {
            pm25 : [ 90, 120 ],
            pm10 : [ 250, 350 ],
            so2 : [ 380, 800 ],
            no : [ 180, 280 ],
            nox : [ 180, 280 ],
            no2 : [ 180, 280 ],
            o3 : [ 168, 280 ],
            co : [ 10, 17 ],
            aqi : [ 200, 300 ]
          }
        },
        {
          label : "Very Poor",
          color : "#E82C0C",
          range : {
            pm25 : [ 120, 250 ],
            pm10 : [ 350, 430 ],
            so2 : [ 800, 1600 ],
            no : [ 280, 400 ],
            nox : [ 280, 400 ],
            no2 : [ 280, 400 ],
            o3 : [ 280, 400 ],
            co : [ 17, 34 ],
            aqi : [ 300, 400 ]
          }
        },
        {
          label : "Severe",
          color : "#A52A2A",
          range : {
            pm25 : [ 250, 1000 ],
            pm10 : [ 430, 1000 ],
            so2 : [ 1600, 2000 ],
            no : [ 400, 1000 ],
            nox : [ 400, 1000 ],
            no2 : [ 400, 1000 ],
            o3 : [ 400, 1000 ],
            co : [ 34, 50 ],
            aqi : [ 400, 500 ]
          }
        }
      ];
      var HOUR_DIFF =
          {pm25 : 24, pm10 : 24, so2 : 24, nox : 24, o3 : 8, co : 8};
      module.exports = {BANDS : BANDS, HOUR_DIFF : HOUR_DIFF};
    },
    {}
  ],
  "QCct" : [
    function(require, module, exports) {
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) ||
               _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) ||
               _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (var _i = arr[Symbol.iterator](), _s;
               !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }

      var dayjs = require("./dayjs.min");

      var _require = require("./utils"), BANDS = _require.BANDS,
          HOUR_DIFF = _require.HOUR_DIFF;

      var calculateSubIndex = function calculateSubIndex() {
        var arr = arguments.length > 0 && arguments[0] !== undefined
                      ? arguments[0]
                      : [];
        var pollutant = arguments.length > 1 ? arguments[1] : undefined;
        // If not a known pollutant
        if (!Object.keys(HOUR_DIFF).includes(pollutant))
          return null; // FIlter the values based on hours and null check

        var now = dayjs(); // Hour diff specific to pollutant

        var hourDiff = HOUR_DIFF[pollutant];
        var filtered = arr.filter(function(_ref) {
          var datetime = _ref.datetime, value = _ref.value;
          return value && now.diff(dayjs(datetime), 'hours') < hourDiff;
        }); // If no values left, aqi is considered 0

        if (filtered.length <= 0)
          return null; // Average out the values

        var mean = filtered.reduce(function(acc, _ref2) {
          var value = _ref2.value;
          return acc + value;
        }, 0) / filtered.length; // Find which aqi bands it belongs

        var index = BANDS.findIndex(function(_ref3) {
          var range = _ref3.range;
          return range[pollutant][1] >= mean;
        }); // Edge Case
        // if it exceeds the set bands

        if (index < 0) {
          var lastIndex = BANDS.length - 1;
          var aqiBase = BANDS[lastIndex].range.aqi[1];
          var pollutantBase = BANDS[lastIndex].range[pollutant][1];

          var _aqi = aqiBase / pollutantBase * (mean - pollutantBase) + aqiBase;

          return _aqi;
        }

        var _BANDS$index$range$aq = _slicedToArray(BANDS[index].range.aqi, 2),
            aqiLo = _BANDS$index$range$aq[0], aqiHi = _BANDS$index$range$aq[1];

        var _BANDS$index$range$po =
                _slicedToArray(BANDS[index].range[pollutant], 2),
            pollutantLo = _BANDS$index$range$po[0],
            pollutantHi =
                _BANDS$index$range$po[1]; // this is the basically the line
                                          // equation where we take the ratio of
                                          // slopes of
        // the two lines. two lines representing linear relation between
        // subIndex and concentrations Linear algebra 101

        var aqi = (aqiHi - aqiLo) / (pollutantHi - pollutantLo) *
                      (mean - pollutantLo) +
                  aqiLo;
        return aqi;
      };

      var calculateAQI = function calculateAQI(arr) {
        // validation
        if (!Array.isArray(arr) || arr.length === 0)
          return null; // Get the data in proper format

        var pollutantArr = arr.reduce(function(acc, val) {
          Object.keys(HOUR_DIFF).map(function(key) {
            var obj = {datetime : val.datetime, value : val[key]};
            acc[key] = acc[key]
                           ? [].concat(_toConsumableArray(acc[key]), [ obj ])
                           : [ obj ];
          });
          return acc;
        }, {}); // Calculate subIndex of each pollutant

        var subIndexes =
            Object.keys(pollutantArr)
                .map(function(
                    key) { return calculateSubIndex(pollutantArr[key], key); })
                .filter(function(val) { return val; });
        if (subIndexes.length === 0)
          return null; // The good stuff

        var nAQI = Math.max.apply(Math, _toConsumableArray(subIndexes));
        return Math.round(nAQI);
      };

      module.exports = calculateAQI;
    },
    {"./dayjs.min" : "KAlz", "./utils" : "FOZT"}
  ]
},
   {}, [ "QCct" ], "calculateAQI")