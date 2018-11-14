
! function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.Timer = n()
}(this, function () {
    "use strict";

    function P(t) {
        return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function s(t, n, e) {
        var o, i = "";
        if (t.length > n) return t;
        for (o = 0; o < n; o += 1) i += String(e);
        return (i + t).slice(-i.length)
    }

    function q() {
        this.secondTenths = 0, this.seconds = 0, this.minutes = 0, this.hours = 0, this.days = 0, this.toString = function (t, n, e) {
            t = t || ["hours", "minutes", "seconds"], n = n || ":", e = e || 2;
            var o, i = [];
            for (o = 0; o < t.length; o += 1) void 0 !== this[t[o]] && ("secondTenths" === t[o] ? i.push(this[t[o]]) : i.push(s(this[t[o]], e, "0")));
            return i.join(n)
        }
    }
    var t = "undefined" != typeof window ? window.CustomEvent : void 0;
    "undefined" != typeof window && "function" != typeof t && ((t = function (t, n) {
        n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), e
    }).prototype = window.Event.prototype, window.CustomEvent = t);
    var I = "secondTenths",
        O = "seconds",
        z = "minutes",
        R = "hours",
        B = "days",
        F = {
            secondTenths: 100,
            seconds: 1e3,
            minutes: 6e4,
            hours: 36e5,
            days: 864e5
        },
        G = {
            secondTenths: 10,
            seconds: 60,
            minutes: 60,
            hours: 24
        },
        H = "undefined" != typeof module && module.exports && "function" == typeof require ? require("events") : void 0;

    function J() {
        return "undefined" != typeof document
    }

    function K() {
        return H
    }

    function N(t, n) {
        return (t % n + n) % n
    }
    return function () {
        var i, s, r, u, c, d, a, f, h, e, l = new q,
            p = new q,
            o = J() ? document.createElement("span") : K() ? new H.EventEmitter : void 0,
            v = !1,
            m = !1,
            y = {},
            b = {
                detail: {
                    timer: this
                }
            };

        function w(t, n) {
            var e, o, i = p[n];
            return o = U(t, F[e = n]), p[e] = o, l[e] = e === B ? o : 0 <= o ? N(o, G[e]) : G[e] - N(o, G[e]), p[n] !== i
        }

        function t() {
            n(),
                function () {
                    for (var t in l) l.hasOwnProperty(t) && "number" == typeof l[t] && (l[t] = 0);
                    for (var n in p) p.hasOwnProperty(n) && "number" == typeof p[n] && (p[n] = 0)
                }()
        }

        function n() {
            clearInterval(i), i = void 0, m = v = !1
        }

        function g(t) {
            var n, e, o;
            M() ? (h = E(), d = V(c.target)) : (s = "string" == typeof (e = (e = t) || {}).precision ? e.precision : O, u = "function" == typeof e.callback ? e.callback : function () {}, f = !0 === e.countdown, r = !0 === f ? -1 : 1, "object" === P(e.startValues) ? (o = e.startValues, a = L(o), l.secondTenths = a[0], l.seconds = a[1], l.minutes = a[2], l.hours = a[3], l.days = a[4], p = A(a, p)) : a = null, h = E(), S(), d = "object" === P(e.target) ? V(e.target) : f ? (e.target = {
                seconds: 0
            }, V(e.target)) : null, y = {
                precision: s,
                callback: u,
                countdown: "object" === P(e) && !0 === e.countdown,
                target: d,
                startValues: a
            }, c = e), n = F[s], C(j(Date.now())) || (i = setInterval(T, n), m = !(v = !0))
        }

        function E() {
            return j(Date.now()) - p.secondTenths * F[I] * r
        }

        function T() {
            var t, n = j(Date.now());
            (t = S())[I] && k("secondTenthsUpdated", b), t[O] && k("secondsUpdated", b), t[z] && k("minutesUpdated", b), t[R] && k("hoursUpdated", b), t[B] && k("daysUpdated", b), u(b.detail.timer), C(n) && (D(), k("targetAchieved", b))
        }

        function S() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : j(Date.now()),
                n = 0 < r ? t - h : h - t,
                e = {};
            return e[I] = w(n, I), e[O] = w(n, O), e[z] = w(n, z), e[R] = w(n, R), e[B] = w(n, B), e
        }

        function j(t) {
            return Math.floor(t / F[s]) * F[s]
        }

        function C(t) {
            return d instanceof Array && e <= t
        }

        function L(t) {
            var n, e, o, i, s, r;
            if ("object" === P(t))
                if (t instanceof Array) {
                    if (5 !== t.length) throw new Error("Array size not valid");
                    r = t
                } else r = [t.secondTenths || 0, t.seconds || 0, t.minutes || 0, t.hours || 0, t.days || 0];
            return n = r[0], e = r[1] + U(n, 10), o = r[2] + U(e, 60), i = r[3] + U(o, 60), s = r[4] + U(i, 24), r[0] = n % 10, r[1] = e % 60, r[2] = o % 60, r[3] = i % 24, r[4] = s, r
        }

        function U(t, n) {
            var e = t / n;
            return e < 0 ? Math.ceil(e) : Math.floor(e)
        }

        function V(t) {
            if (t) {
                var n = A(d = L(t));
                return e = h + n.secondTenths * F[I] * r, d
            }
        }

        function A(t, n) {
            var e = n || {};
            return e.days = t[4], e.hours = 24 * e.days + t[3], e.minutes = 60 * e.hours + t[2], e.seconds = 60 * e.minutes + t[1], e.secondTenths = 10 * e.seconds + t[[0]], e
        }

        function D() {
            t(), k("stopped", b)
        }

        function k(t, n) {
            J() ? o.dispatchEvent(new CustomEvent(t, n)) : K() && o.emit(t, n)
        }

        function x() {
            return v
        }

        function M() {
            return m
        }
        void 0 !== this && (this.start = function (t) {
            x() || (g(t), k("started", b))
        }, this.pause = function () {
            n(), m = !0, k("paused", b)
        }, this.stop = D, this.reset = function () {
            t(), g(c), k("reset", b)
        }, this.isRunning = x, this.isPaused = M, this.getTimeValues = function () {
            return l
        }, this.getTotalTimeValues = function () {
            return p
        }, this.getConfig = function () {
            return y
        }, this.addEventListener = function (t, n) {
            J() ? o.addEventListener(t, n) : K() && o.on(t, n)
        }, this.removeEventListener = function (t, n) {
            J() ? o.removeEventListener(t, n) : K() && o.removeListener(t, n)
        })
    }
});
