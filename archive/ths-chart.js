/*! jQuery v1.8.3 jquery.com | jquery.org/license */

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

/*
 * My97 DatePicker 4.8 Beta4
 * License: http://www.my97.net/dp/license.asp
 */

/*!
 * Vue.js v2.3.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

!function(t, e) {
    function n(t) {
        var e = ht[t] = {};
        return Q.each(t.split(et), function(t, n) {
            e[n] = !0
        }),
        e
    }
    function i(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var r = "data-" + n.replace(mt, "-$1").toLowerCase();
            if ("string" == typeof (i = t.getAttribute(r))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : vt.test(i) ? Q.parseJSON(i) : i)
                } catch (t) {}
                Q.data(t, n, i)
            } else
                i = e
        }
        return i
    }
    function r(t) {
        var e;
        for (e in t)
            if (("data" !== e || !Q.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function a() {
        return !1
    }
    function o() {
        return !0
    }
    function s(t) {
        return !t || !t.parentNode || 11 === t.parentNode.nodeType
    }
    function l(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }
    function c(t, e, n) {
        if (e = e || 0,
        Q.isFunction(e))
            return Q.grep(t, function(t, i) {
                return !!e.call(t, i, t) === n
            });
        if (e.nodeType)
            return Q.grep(t, function(t, i) {
                return t === e === n
            });
        if ("string" == typeof e) {
            var i = Q.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (Mt.test(e))
                return Q.filter(e, i, !n);
            e = Q.filter(e, i)
        }
        return Q.grep(t, function(t, i) {
            return Q.inArray(t, e) >= 0 === n
        })
    }
    function u(t) {
        var e = qt.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function d(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }
    function p(t, e) {
        if (1 === e.nodeType && Q.hasData(t)) {
            var n, i, r, a = Q._data(t), o = Q._data(e, a), s = a.events;
            if (s) {
                delete o.handle,
                o.events = {};
                for (n in s)
                    for (i = 0,
                    r = s[n].length; i < r; i++)
                        Q.event.add(e, n, s[n][i])
            }
            o.data && (o.data = Q.extend({}, o.data))
        }
    }
    function f(t, e) {
        var n;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(),
        e.mergeAttributes && e.mergeAttributes(t),
        n = e.nodeName.toLowerCase(),
        "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML),
        Q.support.html5Clone && t.innerHTML && !Q.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Jt.test(t.type) ? (e.defaultChecked = e.checked = t.checked,
        e.value !== t.value && (e.value = t.value)) : "option" === n ? e.selected = t.defaultSelected : "input" === n || "textarea" === n ? e.defaultValue = t.defaultValue : "script" === n && e.text !== t.text && (e.text = t.text),
        e.removeAttribute(Q.expando))
    }
    function h(t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : void 0 !== t.querySelectorAll ? t.querySelectorAll("*") : []
    }
    function v(t) {
        Jt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function m(t, e) {
        if (e in t)
            return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, r = ge.length; r--; )
            if ((e = ge[r] + n)in t)
                return e;
        return i
    }
    function g(t, e) {
        return t = e || t,
        "none" === Q.css(t, "display") || !Q.contains(t.ownerDocument, t)
    }
    function y(t, e) {
        for (var n, i, r = [], a = 0, o = t.length; a < o; a++)
            n = t[a],
            n.style && (r[a] = Q._data(n, "olddisplay"),
            e ? (!r[a] && "none" === n.style.display && (n.style.display = ""),
            "" === n.style.display && g(n) && (r[a] = Q._data(n, "olddisplay", k(n.nodeName)))) : (i = ne(n, "display"),
            !r[a] && "none" !== i && Q._data(n, "olddisplay", i)));
        for (a = 0; a < o; a++)
            n = t[a],
            n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[a] || "" : "none"));
        return t
    }
    function b(t, e, n) {
        var i = ue.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function _(t, e, n, i) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; r < 4; r += 2)
            "margin" === n && (a += Q.css(t, n + me[r], !0)),
            i ? ("content" === n && (a -= parseFloat(ne(t, "padding" + me[r])) || 0),
            "margin" !== n && (a -= parseFloat(ne(t, "border" + me[r] + "Width")) || 0)) : (a += parseFloat(ne(t, "padding" + me[r])) || 0,
            "padding" !== n && (a += parseFloat(ne(t, "border" + me[r] + "Width")) || 0));
        return a
    }
    function x(t, e, n) {
        var i = "width" === e ? t.offsetWidth : t.offsetHeight
          , r = !0
          , a = Q.support.boxSizing && "border-box" === Q.css(t, "boxSizing");
        if (i <= 0 || null == i) {
            if (i = ne(t, e),
            (i < 0 || null == i) && (i = t.style[e]),
            de.test(i))
                return i;
            r = a && (Q.support.boxSizingReliable || i === t.style[e]),
            i = parseFloat(i) || 0
        }
        return i + _(t, e, n || (a ? "border" : "content"), r) + "px"
    }
    function k(t) {
        if (fe[t])
            return fe[t];
        var e = Q("<" + t + ">").appendTo(B.body)
          , n = e.css("display");
        return e.remove(),
        "none" !== n && "" !== n || (ie = B.body.appendChild(ie || Q.extend(B.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })),
        re && ie.createElement || (re = (ie.contentWindow || ie.contentDocument).document,
        re.write("<!doctype html><html><body>"),
        re.close()),
        e = re.body.appendChild(re.createElement(t)),
        n = ne(e, "display"),
        B.body.removeChild(ie)),
        fe[t] = n,
        n
    }
    function w(t, e, n, i) {
        var r;
        if (Q.isArray(e))
            Q.each(e, function(e, r) {
                n || _e.test(t) ? i(t, r) : w(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== Q.type(e))
            i(t, e);
        else
            for (r in e)
                w(t + "[" + r + "]", e[r], n, i)
    }
    function C(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, r, a, o = e.toLowerCase().split(et), s = 0, l = o.length;
            if (Q.isFunction(n))
                for (; s < l; s++)
                    i = o[s],
                    a = /^\+/.test(i),
                    a && (i = i.substr(1) || "*"),
                    r = t[i] = t[i] || [],
                    r[a ? "unshift" : "push"](n)
        }
    }
    function $(t, n, i, r, a, o) {
        a = a || n.dataTypes[0],
        o = o || {},
        o[a] = !0;
        for (var s, l = t[a], c = 0, u = l ? l.length : 0, d = t === Me; c < u && (d || !s); c++)
            "string" == typeof (s = l[c](n, i, r)) && (!d || o[s] ? s = e : (n.dataTypes.unshift(s),
            s = $(t, n, i, r, s, o)));
        return (d || !s) && !o["*"] && (s = $(t, n, i, r, "*", o)),
        s
    }
    function S(t, n) {
        var i, r, a = Q.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== e && ((a[i] ? t : r || (r = {}))[i] = n[i]);
        r && Q.extend(!0, t, r)
    }
    function T(t, n, i) {
        var r, a, o, s, l = t.contents, c = t.dataTypes, u = t.responseFields;
        for (a in u)
            a in i && (n[u[a]] = i[a]);
        for (; "*" === c[0]; )
            c.shift(),
            r === e && (r = t.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (a in l)
                if (l[a] && l[a].test(r)) {
                    c.unshift(a);
                    break
                }
        if (c[0]in i)
            o = c[0];
        else {
            for (a in i) {
                if (!c[0] || t.converters[a + " " + c[0]]) {
                    o = a;
                    break
                }
                s || (s = a)
            }
            o = o || s
        }
        if (o)
            return o !== c[0] && c.unshift(o),
            i[o]
    }
    function E(t, e) {
        var n, i, r, a, o = t.dataTypes.slice(), s = o[0], l = {}, c = 0;
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        o[1])
            for (n in t.converters)
                l[n.toLowerCase()] = t.converters[n];
        for (; r = o[++c]; )
            if ("*" !== r) {
                if ("*" !== s && s !== r) {
                    if (!(n = l[s + " " + r] || l["* " + r]))
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === r && (n = l[s + " " + a[0]] || l["* " + a[0]])) {
                                !0 === n ? n = l[i] : !0 !== l[i] && (r = a[0],
                                o.splice(c--, 0, r));
                                break
                            }
                    if (!0 !== n)
                        if (n && t.throws)
                            e = n(e);
                        else
                            try {
                                e = n(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: n ? t : "No conversion from " + s + " to " + r
                                }
                            }
                }
                s = r
            }
        return {
            state: "success",
            data: e
        }
    }
    function A() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    function j() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function N() {
        return setTimeout(function() {
            We = e
        }, 0),
        We = Q.now()
    }
    function O(t, e) {
        Q.each(e, function(e, n) {
            for (var i = (Qe[e] || []).concat(Qe["*"]), r = 0, a = i.length; r < a; r++)
                if (i[r].call(t, e, n))
                    return
        })
    }
    function D(t, e, n) {
        var i, r = 0, a = Ge.length, o = Q.Deferred().always(function() {
            delete s.elem
        }), s = function() {
            for (var e = We || N(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, r = 1 - i, a = 0, s = l.tweens.length; a < s; a++)
                l.tweens[a].run(r);
            return o.notifyWith(t, [l, r, n]),
            r < 1 && s ? n : (o.resolveWith(t, [l]),
            !1)
        }, l = o.promise({
            elem: t,
            props: Q.extend({}, e),
            opts: Q.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: We || N(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n, i) {
                var r = Q.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(e) {
                for (var n = 0, i = e ? l.tweens.length : 0; n < i; n++)
                    l.tweens[n].run(1);
                return e ? o.resolveWith(t, [l, e]) : o.rejectWith(t, [l, e]),
                this
            }
        }), c = l.props;
        for (L(c, l.opts.specialEasing); r < a; r++)
            if (i = Ge[r].call(l, t, c, l.opts))
                return i;
        return O(l, c),
        Q.isFunction(l.opts.start) && l.opts.start.call(t, l),
        Q.fx.timer(Q.extend(s, {
            anim: l,
            queue: l.opts.queue,
            elem: t
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function L(t, e) {
        var n, i, r, a, o;
        for (n in t)
            if (i = Q.camelCase(n),
            r = e[i],
            a = t[n],
            Q.isArray(a) && (r = a[1],
            a = t[n] = a[0]),
            n !== i && (t[i] = a,
            delete t[n]),
            o = Q.cssHooks[i],
            o && "expand"in o) {
                a = o.expand(a),
                delete t[i];
                for (n in a)
                    n in t || (t[n] = a[n],
                    e[n] = r)
            } else
                e[i] = r
    }
    function I(t, e, n) {
        var i, r, a, o, s, l, c, u, d, p = this, f = t.style, h = {}, v = [], m = t.nodeType && g(t);
        n.queue || (u = Q._queueHooks(t, "fx"),
        null == u.unqueued && (u.unqueued = 0,
        d = u.empty.fire,
        u.empty.fire = function() {
            u.unqueued || d()
        }
        ),
        u.unqueued++,
        p.always(function() {
            p.always(function() {
                u.unqueued--,
                Q.queue(t, "fx").length || u.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        "inline" === Q.css(t, "display") && "none" === Q.css(t, "float") && (Q.support.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        Q.support.shrinkWrapBlocks || p.done(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (a = e[i],
            Ye.exec(a)) {
                if (delete e[i],
                l = l || "toggle" === a,
                a === (m ? "hide" : "show"))
                    continue;
                v.push(i)
            }
        if (o = v.length) {
            s = Q._data(t, "fxshow") || Q._data(t, "fxshow", {}),
            "hidden"in s && (m = s.hidden),
            l && (s.hidden = !m),
            m ? Q(t).show() : p.done(function() {
                Q(t).hide()
            }),
            p.done(function() {
                var e;
                Q.removeData(t, "fxshow", !0);
                for (e in h)
                    Q.style(t, e, h[e])
            });
            for (i = 0; i < o; i++)
                r = v[i],
                c = p.createTween(r, m ? s[r] : 0),
                h[r] = s[r] || Q.style(t, r),
                r in s || (s[r] = c.start,
                m && (c.end = c.start,
                c.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function M(t, e, n, i, r) {
        return new M.prototype.init(t,e,n,i,r)
    }
    function P(t, e) {
        var n, i = {
            height: t
        }, r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            n = me[r],
            i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function F(t) {
        return Q.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var q, H, B = t.document, R = t.location, z = t.navigator, U = t.jQuery, V = t.$, W = Array.prototype.push, X = Array.prototype.slice, Y = Array.prototype.indexOf, J = Object.prototype.toString, K = Object.prototype.hasOwnProperty, G = String.prototype.trim, Q = function(t, e) {
        return new Q.fn.init(t,e,q)
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, tt = /\S/, et = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, at = /^[\],:{}\s]*$/, ot = /(?:^|:|,)(?:\s*\[)+/g, st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ct = /^-ms-/, ut = /-([\da-z])/gi, dt = function(t, e) {
        return (e + "").toUpperCase()
    }, pt = function() {
        B.addEventListener ? (B.removeEventListener("DOMContentLoaded", pt, !1),
        Q.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", pt),
        Q.ready())
    }, ft = {};
    Q.fn = Q.prototype = {
        constructor: Q,
        init: function(t, n, i) {
            var r, a, o;
            if (!t)
                return this;
            if (t.nodeType)
                return this.context = this[0] = t,
                this.length = 1,
                this;
            if ("string" == typeof t) {
                if ((r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : it.exec(t)) && (r[1] || !n)) {
                    if (r[1])
                        return n = n instanceof Q ? n[0] : n,
                        o = n && n.nodeType ? n.ownerDocument || n : B,
                        t = Q.parseHTML(r[1], o, !0),
                        rt.test(r[1]) && Q.isPlainObject(n) && this.attr.call(t, n, !0),
                        Q.merge(this, t);
                    if ((a = B.getElementById(r[2])) && a.parentNode) {
                        if (a.id !== r[2])
                            return i.find(t);
                        this.length = 1,
                        this[0] = a
                    }
                    return this.context = B,
                    this.selector = t,
                    this
                }
                return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t)
            }
            return Q.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector,
            this.context = t.context),
            Q.makeArray(t, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return X.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
        },
        pushStack: function(t, e, n) {
            var i = Q.merge(this.constructor(), t);
            return i.prevObject = this,
            i.context = this.context,
            "find" === e ? i.selector = this.selector + (this.selector ? " " : "") + n : e && (i.selector = this.selector + "." + e + "(" + n + ")"),
            i
        },
        each: function(t, e) {
            return Q.each(this, t, e)
        },
        ready: function(t) {
            return Q.ready.promise().done(t),
            this
        },
        eq: function(t) {
            return t = +t,
            -1 === t ? this.slice(t) : this.slice(t, t + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(X.apply(this, arguments), "slice", X.call(arguments).join(","))
        },
        map: function(t) {
            return this.pushStack(Q.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: W,
        sort: [].sort,
        splice: [].splice
    },
    Q.fn.init.prototype = Q.fn,
    Q.extend = Q.fn.extend = function() {
        var t, n, i, r, a, o, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[1] || {},
        l = 2),
        "object" != typeof s && !Q.isFunction(s) && (s = {}),
        c === l && (s = this,
        --l); l < c; l++)
            if (null != (t = arguments[l]))
                for (n in t)
                    i = s[n],
                    r = t[n],
                    s !== r && (u && r && (Q.isPlainObject(r) || (a = Q.isArray(r))) ? (a ? (a = !1,
                    o = i && Q.isArray(i) ? i : []) : o = i && Q.isPlainObject(i) ? i : {},
                    s[n] = Q.extend(u, o, r)) : r !== e && (s[n] = r));
        return s
    }
    ,
    Q.extend({
        noConflict: function(e) {
            return t.$ === Q && (t.$ = V),
            e && t.jQuery === Q && (t.jQuery = U),
            Q
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Q.readyWait++ : Q.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--Q.readyWait : !Q.isReady) {
                if (!B.body)
                    return setTimeout(Q.ready, 1);
                Q.isReady = !0,
                !0 !== t && --Q.readyWait > 0 || (H.resolveWith(B, [Q]),
                Q.fn.trigger && Q(B).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === Q.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === Q.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : ft[J.call(t)] || "object"
        },
        isPlainObject: function(t) {
            if (!t || "object" !== Q.type(t) || t.nodeType || Q.isWindow(t))
                return !1;
            try {
                if (t.constructor && !K.call(t, "constructor") && !K.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            var n;
            for (n in t)
                ;
            return n === e || K.call(t, n)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        error: function(t) {
            throw new Error(t)
        },
        parseHTML: function(t, e, n) {
            var i;
            return t && "string" == typeof t ? ("boolean" == typeof e && (n = e,
            e = 0),
            e = e || B,
            (i = rt.exec(t)) ? [e.createElement(i[1])] : (i = Q.buildFragment([t], e, n ? null : []),
            Q.merge([], (i.cacheable ? Q.clone(i.fragment) : i.fragment).childNodes))) : null
        },
        parseJSON: function(e) {
            return e && "string" == typeof e ? (e = Q.trim(e),
            t.JSON && t.JSON.parse ? t.JSON.parse(e) : at.test(e.replace(st, "@").replace(lt, "]").replace(ot, "")) ? new Function("return " + e)() : void Q.error("Invalid JSON: " + e)) : null
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n)
                return null;
            try {
                t.DOMParser ? (r = new DOMParser,
                i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"),
                i.async = "false",
                i.loadXML(n))
            } catch (t) {
                i = e
            }
            return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && Q.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(e) {
            e && tt.test(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            }
            )(e)
        },
        camelCase: function(t) {
            return t.replace(ct, "ms-").replace(ut, dt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, n, i) {
            var r, a = 0, o = t.length, s = o === e || Q.isFunction(t);
            if (i)
                if (s) {
                    for (r in t)
                        if (!1 === n.apply(t[r], i))
                            break
                } else
                    for (; a < o && !1 !== n.apply(t[a++], i); )
                        ;
            else if (s) {
                for (r in t)
                    if (!1 === n.call(t[r], r, t[r]))
                        break
            } else
                for (; a < o && !1 !== n.call(t[a], a, t[a++]); )
                    ;
            return t
        },
        trim: G && !G.call("\ufeff ") ? function(t) {
            return null == t ? "" : G.call(t)
        }
        : function(t) {
            return null == t ? "" : (t + "").replace(nt, "")
        }
        ,
        makeArray: function(t, e) {
            var n, i = e || [];
            return null != t && (n = Q.type(t),
            null == t.length || "string" === n || "function" === n || "regexp" === n || Q.isWindow(t) ? W.call(i, t) : Q.merge(i, t)),
            i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (Y)
                    return Y.call(e, t, n);
                for (i = e.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, n) {
            var i = n.length
              , r = t.length
              , a = 0;
            if ("number" == typeof i)
                for (; a < i; a++)
                    t[r++] = n[a];
            else
                for (; n[a] !== e; )
                    t[r++] = n[a++];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            var i, r = [], a = 0, o = t.length;
            for (n = !!n; a < o; a++)
                i = !!e(t[a], a),
                n !== i && r.push(t[a]);
            return r
        },
        map: function(t, n, i) {
            var r, a, o = [], s = 0, l = t.length;
            if (t instanceof Q || l !== e && "number" == typeof l && (l > 0 && t[0] && t[l - 1] || 0 === l || Q.isArray(t)))
                for (; s < l; s++)
                    null != (r = n(t[s], s, i)) && (o[o.length] = r);
            else
                for (a in t)
                    null != (r = n(t[a], a, i)) && (o[o.length] = r);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(t, n) {
            var i, r, a;
            return "string" == typeof n && (i = t[n],
            n = t,
            t = i),
            Q.isFunction(t) ? (r = X.call(arguments, 2),
            a = function() {
                return t.apply(n, r.concat(X.call(arguments)))
            }
            ,
            a.guid = t.guid = t.guid || Q.guid++,
            a) : e
        },
        access: function(t, n, i, r, a, o, s) {
            var l, c = null == i, u = 0, d = t.length;
            if (i && "object" == typeof i) {
                for (u in i)
                    Q.access(t, n, u, i[u], 1, o, r);
                a = 1
            } else if (r !== e) {
                if (l = s === e && Q.isFunction(r),
                c && (l ? (l = n,
                n = function(t, e, n) {
                    return l.call(Q(t), n)
                }
                ) : (n.call(t, r),
                n = null)),
                n)
                    for (; u < d; u++)
                        n(t[u], i, l ? r.call(t[u], u, n(t[u], i)) : r, s);
                a = 1
            }
            return a ? t : c ? n.call(t) : d ? n(t[0], i) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }),
    Q.ready.promise = function(e) {
        if (!H)
            if (H = Q.Deferred(),
            "complete" === B.readyState)
                setTimeout(Q.ready, 1);
            else if (B.addEventListener)
                B.addEventListener("DOMContentLoaded", pt, !1),
                t.addEventListener("load", Q.ready, !1);
            else {
                B.attachEvent("onreadystatechange", pt),
                t.attachEvent("onload", Q.ready);
                var n = !1;
                try {
                    n = null == t.frameElement && B.documentElement
                } catch (t) {}
                n && n.doScroll && function t() {
                    if (!Q.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        Q.ready()
                    }
                }()
            }
        return H.promise(e)
    }
    ,
    Q.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) {
        ft["[object " + e + "]"] = e.toLowerCase()
    }),
    q = Q(B);
    var ht = {};
    Q.Callbacks = function(t) {
        t = "string" == typeof t ? ht[t] || n(t) : Q.extend({}, t);
        var i, r, a, o, s, l, c = [], u = !t.once && [], d = function(e) {
            for (i = t.memory && e,
            r = !0,
            l = o || 0,
            o = 0,
            s = c.length,
            a = !0; c && l < s; l++)
                if (!1 === c[l].apply(e[0], e[1]) && t.stopOnFalse) {
                    i = !1;
                    break
                }
            a = !1,
            c && (u ? u.length && d(u.shift()) : i ? c = [] : p.disable())
        }, p = {
            add: function() {
                if (c) {
                    var e = c.length;
                    (function e(n) {
                        Q.each(n, function(n, i) {
                            var r = Q.type(i);
                            "function" === r ? (!t.unique || !p.has(i)) && c.push(i) : i && i.length && "string" !== r && e(i)
                        })
                    }
                    )(arguments),
                    a ? s = c.length : i && (o = e,
                    d(i))
                }
                return this
            },
            remove: function() {
                return c && Q.each(arguments, function(t, e) {
                    for (var n; (n = Q.inArray(e, c, n)) > -1; )
                        c.splice(n, 1),
                        a && (n <= s && s--,
                        n <= l && l--)
                }),
                this
            },
            has: function(t) {
                return Q.inArray(t, c) > -1
            },
            empty: function() {
                return c = [],
                this
            },
            disable: function() {
                return c = u = i = e,
                this
            },
            disabled: function() {
                return !c
            },
            lock: function() {
                return u = e,
                i || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, e) {
                return e = e || [],
                e = [t, e.slice ? e.slice() : e],
                c && (!r || u) && (a ? u.push(e) : d(e)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return p
    }
    ,
    Q.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", Q.Callbacks("once memory"), "resolved"], ["reject", "fail", Q.Callbacks("once memory"), "rejected"], ["notify", "progress", Q.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return Q.Deferred(function(n) {
                        Q.each(e, function(e, i) {
                            var a = i[0]
                              , o = t[e];
                            r[i[1]](Q.isFunction(o) ? function() {
                                var t = o.apply(this, arguments);
                                t && Q.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n : this, [t])
                            }
                            : n[a])
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? Q.extend(t, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            Q.each(e, function(t, a) {
                var o = a[2]
                  , s = a[3];
                i[a[1]] = o.add,
                s && o.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock),
                r[a[0]] = o.fire,
                r[a[0] + "With"] = o.fireWith
            }),
            i.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var e, n, i, r = 0, a = X.call(arguments), o = a.length, s = 1 !== o || t && Q.isFunction(t.promise) ? o : 0, l = 1 === s ? t : Q.Deferred(), c = function(t, n, i) {
                return function(r) {
                    n[t] = this,
                    i[t] = arguments.length > 1 ? X.call(arguments) : r,
                    i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (o > 1)
                for (e = new Array(o),
                n = new Array(o),
                i = new Array(o); r < o; r++)
                    a[r] && Q.isFunction(a[r].promise) ? a[r].promise().done(c(r, i, a)).fail(l.reject).progress(c(r, n, e)) : --s;
            return s || l.resolveWith(i, a),
            l.promise()
        }
    }),
    Q.support = function() {
        var e, n, i, r, a, o, s, l, c, u, d, p = B.createElement("div");
        if (p.setAttribute("className", "t"),
        p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = p.getElementsByTagName("*"),
        i = p.getElementsByTagName("a")[0],
        !n || !i || !n.length)
            return {};
        r = B.createElement("select"),
        a = r.appendChild(B.createElement("option")),
        o = p.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        e = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === o.value,
            optSelected: a.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!B.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === B.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        },
        o.checked = !0,
        e.noCloneChecked = o.cloneNode(!0).checked,
        r.disabled = !0,
        e.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch (t) {
            e.deleteExpando = !1
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", d = function() {
            e.noCloneEvent = !1
        }
        ),
        p.cloneNode(!0).fireEvent("onclick"),
        p.detachEvent("onclick", d)),
        o = B.createElement("input"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        e.radioValue = "t" === o.value,
        o.setAttribute("checked", "checked"),
        o.setAttribute("name", "t"),
        p.appendChild(o),
        s = B.createDocumentFragment(),
        s.appendChild(p.lastChild),
        e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.appendChecked = o.checked,
        s.removeChild(o),
        s.appendChild(p),
        p.attachEvent)
            for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                l = "on" + c,
                u = l in p,
                u || (p.setAttribute(l, "return;"),
                u = "function" == typeof p[l]),
                e[c + "Bubbles"] = u;
        return Q(function() {
            var n, i, r, a, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;", s = B.getElementsByTagName("body")[0];
            s && (n = B.createElement("div"),
            n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",
            s.insertBefore(n, s.firstChild),
            i = B.createElement("div"),
            n.appendChild(i),
            i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            r = i.getElementsByTagName("td"),
            r[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            u = 0 === r[0].offsetHeight,
            r[0].style.display = "",
            r[1].style.display = "none",
            e.reliableHiddenOffsets = u && 0 === r[0].offsetHeight,
            i.innerHTML = "",
            i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            e.boxSizing = 4 === i.offsetWidth,
            e.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop,
            t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(i, null) || {}).top,
            e.boxSizingReliable = "4px" === (t.getComputedStyle(i, null) || {
                width: "4px"
            }).width,
            a = B.createElement("div"),
            a.style.cssText = i.style.cssText = o,
            a.style.marginRight = a.style.width = "0",
            i.style.width = "1px",
            i.appendChild(a),
            e.reliableMarginRight = !parseFloat((t.getComputedStyle(a, null) || {}).marginRight)),
            void 0 !== i.style.zoom && (i.innerHTML = "",
            i.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1",
            e.inlineBlockNeedsLayout = 3 === i.offsetWidth,
            i.style.display = "block",
            i.style.overflow = "visible",
            i.innerHTML = "<div></div>",
            i.firstChild.style.width = "5px",
            e.shrinkWrapBlocks = 3 !== i.offsetWidth,
            n.style.zoom = 1),
            s.removeChild(n),
            n = i = r = a = null)
        }),
        s.removeChild(p),
        n = i = r = a = o = s = p = null,
        e
    }();
    var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , mt = /([A-Z])/g;
    Q.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (Q.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? Q.cache[t[Q.expando]] : t[Q.expando]) && !r(t)
        },
        data: function(t, n, i, r) {
            if (Q.acceptData(t)) {
                var a, o, s = Q.expando, l = "string" == typeof n, c = t.nodeType, u = c ? Q.cache : t, d = c ? t[s] : t[s] && s;
                if (d && u[d] && (r || u[d].data) || !l || i !== e)
                    return d || (c ? t[s] = d = Q.deletedIds.pop() || Q.guid++ : d = s),
                    u[d] || (u[d] = {},
                    c || (u[d].toJSON = Q.noop)),
                    "object" != typeof n && "function" != typeof n || (r ? u[d] = Q.extend(u[d], n) : u[d].data = Q.extend(u[d].data, n)),
                    a = u[d],
                    r || (a.data || (a.data = {}),
                    a = a.data),
                    i !== e && (a[Q.camelCase(n)] = i),
                    l ? null == (o = a[n]) && (o = a[Q.camelCase(n)]) : o = a,
                    o
            }
        },
        removeData: function(t, e, n) {
            if (Q.acceptData(t)) {
                var i, a, o, s = t.nodeType, l = s ? Q.cache : t, c = s ? t[Q.expando] : Q.expando;
                if (l[c]) {
                    if (e && (i = n ? l[c] : l[c].data)) {
                        Q.isArray(e) || (e in i ? e = [e] : (e = Q.camelCase(e),
                        e = e in i ? [e] : e.split(" ")));
                        for (a = 0,
                        o = e.length; a < o; a++)
                            delete i[e[a]];
                        if (!(n ? r : Q.isEmptyObject)(i))
                            return
                    }
                    (n || (delete l[c].data,
                    r(l[c]))) && (s ? Q.cleanData([t], !0) : Q.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
                }
            }
        },
        _data: function(t, e, n) {
            return Q.data(t, e, n, !0)
        },
        acceptData: function(t) {
            var e = t.nodeName && Q.noData[t.nodeName.toLowerCase()];
            return !e || !0 !== e && t.getAttribute("classid") === e
        }
    }),
    Q.fn.extend({
        data: function(t, n) {
            var r, a, o, s, l, c = this[0], u = 0, d = null;
            if (t === e) {
                if (this.length && (d = Q.data(c),
                1 === c.nodeType && !Q._data(c, "parsedAttrs"))) {
                    for (o = c.attributes,
                    l = o.length; u < l; u++)
                        s = o[u].name,
                        s.indexOf("data-") || (s = Q.camelCase(s.substring(5)),
                        i(c, s, d[s]));
                    Q._data(c, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof t ? this.each(function() {
                Q.data(this, t)
            }) : (r = t.split(".", 2),
            r[1] = r[1] ? "." + r[1] : "",
            a = r[1] + "!",
            Q.access(this, function(n) {
                if (n === e)
                    return d = this.triggerHandler("getData" + a, [r[0]]),
                    d === e && c && (d = Q.data(c, t),
                    d = i(c, t, d)),
                    d === e && r[1] ? this.data(r[0]) : d;
                r[1] = n,
                this.each(function() {
                    var e = Q(this);
                    e.triggerHandler("setData" + a, r),
                    Q.data(this, t, n),
                    e.triggerHandler("changeData" + a, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(t) {
            return this.each(function() {
                Q.removeData(this, t)
            })
        }
    }),
    Q.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return e = (e || "fx") + "queue",
                i = Q._data(t, e),
                n && (!i || Q.isArray(n) ? i = Q._data(t, e, Q.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Q.queue(t, e)
              , i = n.length
              , r = n.shift()
              , a = Q._queueHooks(t, e)
              , o = function() {
                Q.dequeue(t, e)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete a.stop,
            r.call(t, o, a)),
            !i && a && a.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Q._data(t, n) || Q._data(t, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    Q.removeData(t, e + "queue", !0),
                    Q.removeData(t, n, !0)
                })
            })
        }
    }),
    Q.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            i--),
            arguments.length < i ? Q.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = Q.queue(this, t, n);
                Q._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && Q.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Q.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = Q.fx ? Q.fx.speeds[t] || t : t,
            e = e || "fx",
            this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, r = 1, a = Q.Deferred(), o = this, s = this.length, l = function() {
                --r || a.resolveWith(o, [o])
            };
            for ("string" != typeof t && (n = t,
            t = e),
            t = t || "fx"; s--; )
                (i = Q._data(o[s], t + "queueHooks")) && i.empty && (r++,
                i.empty.add(l));
            return l(),
            a.promise(n)
        }
    });
    var gt, yt, bt, _t = /[\t\r\n]/g, xt = /\r/g, kt = /^(?:button|input)$/i, wt = /^(?:button|input|object|select|textarea)$/i, Ct = /^a(?:rea|)$/i, $t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, St = Q.support.getSetAttribute;
    Q.fn.extend({
        attr: function(t, e) {
            return Q.access(this, Q.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Q.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return Q.access(this, Q.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = Q.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = e,
                    delete this[t]
                } catch (t) {}
            })
        },
        addClass: function(t) {
            var e, n, i, r, a, o, s;
            if (Q.isFunction(t))
                return this.each(function(e) {
                    Q(this).addClass(t.call(this, e, this.className))
                });
            if (t && "string" == typeof t)
                for (e = t.split(et),
                n = 0,
                i = this.length; n < i; n++)
                    if (r = this[n],
                    1 === r.nodeType)
                        if (r.className || 1 !== e.length) {
                            for (a = " " + r.className + " ",
                            o = 0,
                            s = e.length; o < s; o++)
                                a.indexOf(" " + e[o] + " ") < 0 && (a += e[o] + " ");
                            r.className = Q.trim(a)
                        } else
                            r.className = t;
            return this
        },
        removeClass: function(t) {
            var n, i, r, a, o, s, l;
            if (Q.isFunction(t))
                return this.each(function(e) {
                    Q(this).removeClass(t.call(this, e, this.className))
                });
            if (t && "string" == typeof t || t === e)
                for (n = (t || "").split(et),
                s = 0,
                l = this.length; s < l; s++)
                    if (r = this[s],
                    1 === r.nodeType && r.className) {
                        for (i = (" " + r.className + " ").replace(_t, " "),
                        a = 0,
                        o = n.length; a < o; a++)
                            for (; i.indexOf(" " + n[a] + " ") >= 0; )
                                i = i.replace(" " + n[a] + " ", " ");
                        r.className = t ? Q.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t
              , i = "boolean" == typeof e;
            return Q.isFunction(t) ? this.each(function(n) {
                Q(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var r, a = 0, o = Q(this), s = e, l = t.split(et); r = l[a++]; )
                        s = i ? s : !o.hasClass(r),
                        o[s ? "addClass" : "removeClass"](r);
                else
                    "undefined" !== n && "boolean" !== n || (this.className && Q._data(this, "__className__", this.className),
                    this.className = this.className || !1 === t ? "" : Q._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(_t, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        },
        val: function(t) {
            var n, i, r, a = this[0];
            {
                if (arguments.length)
                    return r = Q.isFunction(t),
                    this.each(function(i) {
                        var a, o = Q(this);
                        1 === this.nodeType && (a = r ? t.call(this, i, o.val()) : t,
                        null == a ? a = "" : "number" == typeof a ? a += "" : Q.isArray(a) && (a = Q.map(a, function(t) {
                            return null == t ? "" : t + ""
                        })),
                        n = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()],
                        n && "set"in n && n.set(this, a, "value") !== e || (this.value = a))
                    });
                if (a)
                    return n = Q.valHooks[a.type] || Q.valHooks[a.nodeName.toLowerCase()],
                    n && "get"in n && (i = n.get(a, "value")) !== e ? i : (i = a.value,
                    "string" == typeof i ? i.replace(xt, "") : null == i ? "" : i)
            }
        }
    }),
    Q.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, a = "select-one" === t.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++)
                        if (n = i[l],
                        (n.selected || l === r) && (Q.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Q(n).val(),
                            a)
                                return e;
                            o.push(e)
                        }
                    return o
                },
                set: function(t, e) {
                    var n = Q.makeArray(e);
                    return Q(t).find("option").each(function() {
                        this.selected = Q.inArray(Q(this).val(), n) >= 0
                    }),
                    n.length || (t.selectedIndex = -1),
                    n
                }
            }
        },
        attrFn: {},
        attr: function(t, n, i, r) {
            var a, o, s, l = t.nodeType;
            if (t && 3 !== l && 8 !== l && 2 !== l)
                return r && Q.isFunction(Q.fn[n]) ? Q(t)[n](i) : void 0 === t.getAttribute ? Q.prop(t, n, i) : ((s = 1 !== l || !Q.isXMLDoc(t)) && (n = n.toLowerCase(),
                o = Q.attrHooks[n] || ($t.test(n) ? yt : gt)),
                i !== e ? null === i ? void Q.removeAttr(t, n) : o && "set"in o && s && (a = o.set(t, i, n)) !== e ? a : (t.setAttribute(n, i + ""),
                i) : o && "get"in o && s && null !== (a = o.get(t, n)) ? a : (a = t.getAttribute(n),
                null === a ? e : a))
        },
        removeAttr: function(t, e) {
            var n, i, r, a, o = 0;
            if (e && 1 === t.nodeType)
                for (i = e.split(et); o < i.length; o++)
                    (r = i[o]) && (n = Q.propFix[r] || r,
                    a = $t.test(r),
                    a || Q.attr(t, r, ""),
                    t.removeAttribute(St ? r : n),
                    a && n in t && (t[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (kt.test(t.nodeName) && t.parentNode)
                        Q.error("type property can't be changed");
                    else if (!Q.support.radioValue && "radio" === e && Q.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            },
            value: {
                get: function(t, e) {
                    return gt && Q.nodeName(t, "button") ? gt.get(t, e) : e in t ? t.value : null
                },
                set: function(t, e, n) {
                    if (gt && Q.nodeName(t, "button"))
                        return gt.set(t, e, n);
                    t.value = e
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, n, i) {
            var r, a, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !Q.isXMLDoc(t),
                o && (n = Q.propFix[n] || n,
                a = Q.propHooks[n]),
                i !== e ? a && "set"in a && (r = a.set(t, i, n)) !== e ? r : t[n] = i : a && "get"in a && null !== (r = a.get(t, n)) ? r : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : wt.test(t.nodeName) || Ct.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }),
    yt = {
        get: function(t, n) {
            var i, r = Q.prop(t, n);
            return !0 === r || "boolean" != typeof r && (i = t.getAttributeNode(n)) && !1 !== i.nodeValue ? n.toLowerCase() : e
        },
        set: function(t, e, n) {
            var i;
            return !1 === e ? Q.removeAttr(t, n) : (i = Q.propFix[n] || n,
            i in t && (t[i] = !0),
            t.setAttribute(n, n.toLowerCase())),
            n
        }
    },
    St || (bt = {
        name: !0,
        id: !0,
        coords: !0
    },
    gt = Q.valHooks.button = {
        get: function(t, n) {
            var i;
            return i = t.getAttributeNode(n),
            i && (bt[n] ? "" !== i.value : i.specified) ? i.value : e
        },
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || (i = B.createAttribute(n),
            t.setAttributeNode(i)),
            i.value = e + ""
        }
    },
    Q.each(["width", "height"], function(t, e) {
        Q.attrHooks[e] = Q.extend(Q.attrHooks[e], {
            set: function(t, n) {
                if ("" === n)
                    return t.setAttribute(e, "auto"),
                    n
            }
        })
    }),
    Q.attrHooks.contenteditable = {
        get: gt.get,
        set: function(t, e, n) {
            "" === e && (e = "false"),
            gt.set(t, e, n)
        }
    }),
    Q.support.hrefNormalized || Q.each(["href", "src", "width", "height"], function(t, n) {
        Q.attrHooks[n] = Q.extend(Q.attrHooks[n], {
            get: function(t) {
                var i = t.getAttribute(n, 2);
                return null === i ? e : i
            }
        })
    }),
    Q.support.style || (Q.attrHooks.style = {
        get: function(t) {
            return t.style.cssText.toLowerCase() || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }),
    Q.support.optSelected || (Q.propHooks.selected = Q.extend(Q.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex),
            null
        }
    })),
    Q.support.enctype || (Q.propFix.enctype = "encoding"),
    Q.support.checkOn || Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }),
    Q.each(["radio", "checkbox"], function() {
        Q.valHooks[this] = Q.extend(Q.valHooks[this], {
            set: function(t, e) {
                if (Q.isArray(e))
                    return t.checked = Q.inArray(Q(t).val(), e) >= 0
            }
        })
    });
    var Tt = /^(?:textarea|input|select)$/i
      , Et = /^([^\.]*|)(?:\.(.+)|)$/
      , At = /(?:^|\s)hover(\.\S+|)\b/
      , jt = /^key/
      , Nt = /^(?:mouse|contextmenu)|click/
      , Ot = /^(?:focusinfocus|focusoutblur)$/
      , Dt = function(t) {
        return Q.event.special.hover ? t : t.replace(At, "mouseenter$1 mouseleave$1")
    };
    Q.event = {
        add: function(t, n, i, r, a) {
            var o, s, l, c, u, d, p, f, h, v, m;
            if (3 !== t.nodeType && 8 !== t.nodeType && n && i && (o = Q._data(t))) {
                for (i.handler && (h = i,
                i = h.handler,
                a = h.selector),
                i.guid || (i.guid = Q.guid++),
                l = o.events,
                l || (o.events = l = {}),
                s = o.handle,
                s || (o.handle = s = function(t) {
                    return void 0 === Q || t && Q.event.triggered === t.type ? e : Q.event.dispatch.apply(s.elem, arguments)
                }
                ,
                s.elem = t),
                n = Q.trim(Dt(n)).split(" "),
                c = 0; c < n.length; c++)
                    u = Et.exec(n[c]) || [],
                    d = u[1],
                    p = (u[2] || "").split(".").sort(),
                    m = Q.event.special[d] || {},
                    d = (a ? m.delegateType : m.bindType) || d,
                    m = Q.event.special[d] || {},
                    f = Q.extend({
                        type: d,
                        origType: u[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: a,
                        needsContext: a && Q.expr.match.needsContext.test(a),
                        namespace: p.join(".")
                    }, h),
                    v = l[d],
                    v || (v = l[d] = [],
                    v.delegateCount = 0,
                    m.setup && !1 !== m.setup.call(t, r, p, s) || (t.addEventListener ? t.addEventListener(d, s, !1) : t.attachEvent && t.attachEvent("on" + d, s))),
                    m.add && (m.add.call(t, f),
                    f.handler.guid || (f.handler.guid = i.guid)),
                    a ? v.splice(v.delegateCount++, 0, f) : v.push(f),
                    Q.event.global[d] = !0;
                t = null
            }
        },
        global: {},
        remove: function(t, e, n, i, r) {
            var a, o, s, l, c, u, d, p, f, h, v, m = Q.hasData(t) && Q._data(t);
            if (m && (p = m.events)) {
                for (e = Q.trim(Dt(e || "")).split(" "),
                a = 0; a < e.length; a++)
                    if (o = Et.exec(e[a]) || [],
                    s = l = o[1],
                    c = o[2],
                    s) {
                        for (f = Q.event.special[s] || {},
                        s = (i ? f.delegateType : f.bindType) || s,
                        h = p[s] || [],
                        u = h.length,
                        c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        d = 0; d < h.length; d++)
                            v = h[d],
                            (r || l === v.origType) && (!n || n.guid === v.guid) && (!c || c.test(v.namespace)) && (!i || i === v.selector || "**" === i && v.selector) && (h.splice(d--, 1),
                            v.selector && h.delegateCount--,
                            f.remove && f.remove.call(t, v));
                        0 === h.length && u !== h.length && ((!f.teardown || !1 === f.teardown.call(t, c, m.handle)) && Q.removeEvent(t, s, m.handle),
                        delete p[s])
                    } else
                        for (s in p)
                            Q.event.remove(t, s + e[a], n, i, !0);
                Q.isEmptyObject(p) && (delete m.handle,
                Q.removeData(t, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, r, a) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var o, s, l, c, u, d, p, f, h, v, m = n.type || n, g = [];
                if (Ot.test(m + Q.event.triggered))
                    return;
                if (m.indexOf("!") >= 0 && (m = m.slice(0, -1),
                s = !0),
                m.indexOf(".") >= 0 && (g = m.split("."),
                m = g.shift(),
                g.sort()),
                (!r || Q.event.customEvent[m]) && !Q.event.global[m])
                    return;
                if (n = "object" == typeof n ? n[Q.expando] ? n : new Q.Event(m,n) : new Q.Event(m),
                n.type = m,
                n.isTrigger = !0,
                n.exclusive = s,
                n.namespace = g.join("."),
                n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                d = m.indexOf(":") < 0 ? "on" + m : "",
                !r) {
                    o = Q.cache;
                    for (l in o)
                        o[l].events && o[l].events[m] && Q.event.trigger(n, i, o[l].handle.elem, !0);
                    return
                }
                if (n.result = e,
                n.target || (n.target = r),
                i = null != i ? Q.makeArray(i) : [],
                i.unshift(n),
                p = Q.event.special[m] || {},
                p.trigger && !1 === p.trigger.apply(r, i))
                    return;
                if (h = [[r, p.bindType || m]],
                !a && !p.noBubble && !Q.isWindow(r)) {
                    for (v = p.delegateType || m,
                    c = Ot.test(v + m) ? r : r.parentNode,
                    u = r; c; c = c.parentNode)
                        h.push([c, v]),
                        u = c;
                    u === (r.ownerDocument || B) && h.push([u.defaultView || u.parentWindow || t, v])
                }
                for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
                    c = h[l][0],
                    n.type = h[l][1],
                    f = (Q._data(c, "events") || {})[n.type] && Q._data(c, "handle"),
                    f && f.apply(c, i),
                    (f = d && c[d]) && Q.acceptData(c) && f.apply && !1 === f.apply(c, i) && n.preventDefault();
                return n.type = m,
                !a && !n.isDefaultPrevented() && (!p._default || !1 === p._default.apply(r.ownerDocument, i)) && ("click" !== m || !Q.nodeName(r, "a")) && Q.acceptData(r) && d && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !Q.isWindow(r) && (u = r[d],
                u && (r[d] = null),
                Q.event.triggered = m,
                r[m](),
                Q.event.triggered = e,
                u && (r[d] = u)),
                n.result
            }
        },
        dispatch: function(n) {
            n = Q.event.fix(n || t.event);
            var i, r, a, o, s, l, c, u, d, p = (Q._data(this, "events") || {})[n.type] || [], f = p.delegateCount, h = X.call(arguments), v = !n.exclusive && !n.namespace, m = Q.event.special[n.type] || {}, g = [];
            if (h[0] = n,
            n.delegateTarget = this,
            !m.preDispatch || !1 !== m.preDispatch.call(this, n)) {
                if (f && (!n.button || "click" !== n.type))
                    for (a = n.target; a != this; a = a.parentNode || this)
                        if (!0 !== a.disabled || "click" !== n.type) {
                            for (s = {},
                            c = [],
                            i = 0; i < f; i++)
                                u = p[i],
                                d = u.selector,
                                s[d] === e && (s[d] = u.needsContext ? Q(d, this).index(a) >= 0 : Q.find(d, this, null, [a]).length),
                                s[d] && c.push(u);
                            c.length && g.push({
                                elem: a,
                                matches: c
                            })
                        }
                for (p.length > f && g.push({
                    elem: this,
                    matches: p.slice(f)
                }),
                i = 0; i < g.length && !n.isPropagationStopped(); i++)
                    for (l = g[i],
                    n.currentTarget = l.elem,
                    r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++)
                        u = l.matches[r],
                        (v || !n.namespace && !u.namespace || n.namespace_re && n.namespace_re.test(u.namespace)) && (n.data = u.data,
                        n.handleObj = u,
                        (o = ((Q.event.special[u.origType] || {}).handle || u.handler).apply(l.elem, h)) !== e && (n.result = o,
                        !1 === o && (n.preventDefault(),
                        n.stopPropagation())));
                return m.postDispatch && m.postDispatch.call(this, n),
                n.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, n) {
                var i, r, a, o = n.button, s = n.fromElement;
                return null == t.pageX && null != n.clientX && (i = t.target.ownerDocument || B,
                r = i.documentElement,
                a = i.body,
                t.pageX = n.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0),
                t.pageY = n.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)),
                !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement : s),
                !t.which && o !== e && (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[Q.expando])
                return t;
            var e, n, i = t, r = Q.event.fixHooks[t.type] || {}, a = r.props ? this.props.concat(r.props) : this.props;
            for (t = Q.Event(i),
            e = a.length; e; )
                n = a[--e],
                t[n] = i[n];
            return t.target || (t.target = i.srcElement || B),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            r.filter ? r.filter(t, i) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(t, e, n) {
                    Q.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(t, e) {
                    this.onbeforeunload === e && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = Q.extend(new Q.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? Q.event.trigger(r, null, e) : Q.event.dispatch.call(e, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    Q.event.handle = Q.event.dispatch,
    Q.removeEvent = B.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }
    : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (void 0 === t[i] && (t[i] = null),
        t.detachEvent(i, n))
    }
    ,
    Q.Event = function(t, e) {
        if (!(this instanceof Q.Event))
            return new Q.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? o : a) : this.type = t,
        e && Q.extend(this, e),
        this.timeStamp = t && t.timeStamp || Q.now(),
        this[Q.expando] = !0
    }
    ,
    Q.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = o;
            var t = this.originalEvent;
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = o;
            var t = this.originalEvent;
            t && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = o,
            this.stopPropagation()
        },
        isDefaultPrevented: a,
        isPropagationStopped: a,
        isImmediatePropagationStopped: a
    },
    Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(t, e) {
        Q.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, a = t.handleObj;
                a.selector;
                return r && (r === i || Q.contains(i, r)) || (t.type = a.origType,
                n = a.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    Q.support.submitBubbles || (Q.event.special.submit = {
        setup: function() {
            if (Q.nodeName(this, "form"))
                return !1;
            Q.event.add(this, "click._submit keypress._submit", function(t) {
                var n = t.target
                  , i = Q.nodeName(n, "input") || Q.nodeName(n, "button") ? n.form : e;
                i && !Q._data(i, "_submit_attached") && (Q.event.add(i, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }),
                Q._data(i, "_submit_attached", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble,
            this.parentNode && !t.isTrigger && Q.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            if (Q.nodeName(this, "form"))
                return !1;
            Q.event.remove(this, "._submit")
        }
    }),
    Q.support.changeBubbles || (Q.event.special.change = {
        setup: function() {
            if (Tt.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (Q.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }),
                Q.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1),
                    Q.event.simulate("change", this, t, !0)
                })),
                !1;
            Q.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Tt.test(e.nodeName) && !Q._data(e, "_change_attached") && (Q.event.add(e, "change._change", function(t) {
                    this.parentNode && !t.isSimulated && !t.isTrigger && Q.event.simulate("change", this.parentNode, t, !0)
                }),
                Q._data(e, "_change_attached", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return Q.event.remove(this, "._change"),
            !Tt.test(this.nodeName)
        }
    }),
    Q.support.focusinBubbles || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = 0
          , i = function(t) {
            Q.event.simulate(e, t.target, Q.event.fix(t), !0)
        };
        Q.event.special[e] = {
            setup: function() {
                0 == n++ && B.addEventListener(t, i, !0)
            },
            teardown: function() {
                0 == --n && B.removeEventListener(t, i, !0)
            }
        }
    }),
    Q.fn.extend({
        on: function(t, n, i, r, o) {
            var s, l;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n,
                n = e);
                for (l in t)
                    this.on(l, n, i, t[l], o);
                return this
            }
            if (null == i && null == r ? (r = n,
            i = n = e) : null == r && ("string" == typeof n ? (r = i,
            i = e) : (r = i,
            i = n,
            n = e)),
            !1 === r)
                r = a;
            else if (!r)
                return this;
            return 1 === o && (s = r,
            r = function(t) {
                return Q().off(t),
                s.apply(this, arguments)
            }
            ,
            r.guid = s.guid || (s.guid = Q.guid++)),
            this.each(function() {
                Q.event.add(this, t, r, i, n)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, n, i) {
            var r, o;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj,
                Q(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, n, t[o]);
                return this
            }
            return !1 !== n && "function" != typeof n || (i = n,
            n = e),
            !1 === i && (i = a),
            this.each(function() {
                Q.event.remove(this, t, i, n)
            })
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        live: function(t, e, n) {
            return Q(this.context).on(t, this.selector, e, n),
            this
        },
        die: function(t, e) {
            return Q(this.context).off(t, this.selector || "**", e),
            this
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        },
        trigger: function(t, e) {
            return this.each(function() {
                Q.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            if (this[0])
                return Q.event.trigger(t, e, this[0], !0)
        },
        toggle: function(t) {
            var e = arguments
              , n = t.guid || Q.guid++
              , i = 0
              , r = function(n) {
                var r = (Q._data(this, "lastToggle" + t.guid) || 0) % i;
                return Q._data(this, "lastToggle" + t.guid, r + 1),
                n.preventDefault(),
                e[r].apply(this, arguments) || !1
            };
            for (r.guid = n; i < e.length; )
                e[i++].guid = n;
            return this.click(r)
        },
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        Q.fn[e] = function(t, n) {
            return null == n && (n = t,
            t = null),
            arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
        ,
        jt.test(e) && (Q.event.fixHooks[e] = Q.event.keyHooks),
        Nt.test(e) && (Q.event.fixHooks[e] = Q.event.mouseHooks)
    }),
    function(t, e) {
        function n(t, e, n, i) {
            n = n || [],
            e = e || N;
            var r, a, o, s, l = e.nodeType;
            if (!t || "string" != typeof t)
                return n;
            if (1 !== l && 9 !== l)
                return [];
            if (!(o = x(e)) && !i && (r = et.exec(t)))
                if (s = r[1]) {
                    if (9 === l) {
                        if (!(a = e.getElementById(s)) || !a.parentNode)
                            return n;
                        if (a.id === s)
                            return n.push(a),
                            n
                    } else if (e.ownerDocument && (a = e.ownerDocument.getElementById(s)) && k(e, a) && a.id === s)
                        return n.push(a),
                        n
                } else {
                    if (r[2])
                        return M.apply(n, P.call(e.getElementsByTagName(t), 0)),
                        n;
                    if ((s = r[3]) && dt && e.getElementsByClassName)
                        return M.apply(n, P.call(e.getElementsByClassName(s), 0)),
                        n
                }
            return v(t.replace(K, "$1"), e, n, i, o)
        }
        function i(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function r(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function a(t) {
            return q(function(e) {
                return e = +e,
                q(function(n, i) {
                    for (var r, a = t([], n.length, e), o = a.length; o--; )
                        n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function o(t, e, n) {
            if (t === e)
                return n;
            for (var i = t.nextSibling; i; ) {
                if (i === e)
                    return -1;
                i = i.nextSibling
            }
            return 1
        }
        function s(t, e) {
            var i, r, a, o, s, l, c, u = R[A][t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (s = t,
            l = [],
            c = b.preFilter; s; ) {
                i && !(r = G.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(a = [])),
                i = !1,
                (r = Z.exec(s)) && (a.push(i = new j(r.shift())),
                s = s.slice(i.length),
                i.type = r[0].replace(K, " "));
                for (o in b.filter)
                    (r = ot[o].exec(s)) && (!c[o] || (r = c[o](r))) && (a.push(i = new j(r.shift())),
                    s = s.slice(i.length),
                    i.type = o,
                    i.matches = r);
                if (!i)
                    break
            }
            return e ? s.length : s ? n.error(t) : R(t, l).slice(0)
        }
        function l(t, e, n) {
            var i = e.dir
              , r = n && "parentNode" === e.dir
              , a = L++;
            return e.first ? function(e, n, a) {
                for (; e = e[i]; )
                    if (r || 1 === e.nodeType)
                        return t(e, n, a)
            }
            : function(e, n, o) {
                if (o) {
                    for (; e = e[i]; )
                        if ((r || 1 === e.nodeType) && t(e, n, o))
                            return e
                } else
                    for (var s, l = D + " " + a + " ", c = l + g; e = e[i]; )
                        if (r || 1 === e.nodeType) {
                            if ((s = e[A]) === c)
                                return e.sizset;
                            if ("string" == typeof s && 0 === s.indexOf(l)) {
                                if (e.sizset)
                                    return e
                            } else {
                                if (e[A] = c,
                                t(e, n, o))
                                    return e.sizset = !0,
                                    e;
                                e.sizset = !1
                            }
                        }
            }
        }
        function c(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; )
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function u(t, e, n, i, r) {
            for (var a, o = [], s = 0, l = t.length, c = null != e; s < l; s++)
                (a = t[s]) && (n && !n(a, i, r) || (o.push(a),
                c && e.push(s)));
            return o
        }
        function d(t, e, n, i, r, a) {
            return i && !i[A] && (i = d(i)),
            r && !r[A] && (r = d(r, a)),
            q(function(a, o, s, l) {
                var c, d, p, f = [], v = [], m = o.length, g = a || h(e || "*", s.nodeType ? [s] : s, []), y = !t || !a && e ? g : u(g, f, t, s, l), b = n ? r || (a ? t : m || i) ? [] : o : y;
                if (n && n(y, b, s, l),
                i)
                    for (c = u(b, v),
                    i(c, [], s, l),
                    d = c.length; d--; )
                        (p = c[d]) && (b[v[d]] = !(y[v[d]] = p));
                if (a) {
                    if (r || t) {
                        if (r) {
                            for (c = [],
                            d = b.length; d--; )
                                (p = b[d]) && c.push(y[d] = p);
                            r(null, b = [], c, l)
                        }
                        for (d = b.length; d--; )
                            (p = b[d]) && (c = r ? F.call(a, p) : f[d]) > -1 && (a[c] = !(o[c] = p))
                    }
                } else
                    b = u(b === o ? b.splice(m, b.length) : b),
                    r ? r(null, o, b, l) : M.apply(o, b)
            })
        }
        function p(t) {
            for (var e, n, i, r = t.length, a = b.relative[t[0].type], o = a || b.relative[" "], s = a ? 1 : 0, u = l(function(t) {
                return t === e
            }, o, !0), f = l(function(t) {
                return F.call(e, t) > -1
            }, o, !0), h = [function(t, n, i) {
                return !a && (i || n !== S) || ((e = n).nodeType ? u(t, n, i) : f(t, n, i))
            }
            ]; s < r; s++)
                if (n = b.relative[t[s].type])
                    h = [l(c(h), n)];
                else {
                    if (n = b.filter[t[s].type].apply(null, t[s].matches),
                    n[A]) {
                        for (i = ++s; i < r && !b.relative[t[i].type]; i++)
                            ;
                        return d(s > 1 && c(h), s > 1 && t.slice(0, s - 1).join("").replace(K, "$1"), n, s < i && p(t.slice(s, i)), i < r && p(t = t.slice(i)), i < r && t.join(""))
                    }
                    h.push(n)
                }
            return c(h)
        }
        function f(t, e) {
            var i = e.length > 0
              , r = t.length > 0
              , a = function(o, s, l, c, d) {
                var p, f, h, v = [], m = 0, y = "0", _ = o && [], x = null != d, k = S, w = o || r && b.find.TAG("*", d && s.parentNode || s), C = D += null == k ? 1 : Math.E;
                for (x && (S = s !== N && s,
                g = a.el); null != (p = w[y]); y++) {
                    if (r && p) {
                        for (f = 0; h = t[f]; f++)
                            if (h(p, s, l)) {
                                c.push(p);
                                break
                            }
                        x && (D = C,
                        g = ++a.el)
                    }
                    i && ((p = !h && p) && m--,
                    o && _.push(p))
                }
                if (m += y,
                i && y !== m) {
                    for (f = 0; h = e[f]; f++)
                        h(_, v, s, l);
                    if (o) {
                        if (m > 0)
                            for (; y--; )
                                !_[y] && !v[y] && (v[y] = I.call(c));
                        v = u(v)
                    }
                    M.apply(c, v),
                    x && !o && v.length > 0 && m + e.length > 1 && n.uniqueSort(c)
                }
                return x && (D = C,
                S = k),
                _
            };
            return a.el = 0,
            i ? q(a) : a
        }
        function h(t, e, i) {
            for (var r = 0, a = e.length; r < a; r++)
                n(t, e[r], i);
            return i
        }
        function v(t, e, n, i, r) {
            var a, o, l, c, u, d = s(t);
            d.length;
            if (!i && 1 === d.length) {
                if (o = d[0] = d[0].slice(0),
                o.length > 2 && "ID" === (l = o[0]).type && 9 === e.nodeType && !r && b.relative[o[1].type]) {
                    if (!(e = b.find.ID(l.matches[0].replace(at, ""), e, r)[0]))
                        return n;
                    t = t.slice(o.shift().length)
                }
                for (a = ot.POS.test(t) ? -1 : o.length - 1; a >= 0 && (l = o[a],
                !b.relative[c = l.type]); a--)
                    if ((u = b.find[c]) && (i = u(l.matches[0].replace(at, ""), nt.test(o[0].type) && e.parentNode || e, r))) {
                        if (o.splice(a, 1),
                        !(t = i.length && o.join("")))
                            return M.apply(n, P.call(i, 0)),
                            n;
                        break
                    }
            }
            return w(t, d)(i, e, r, n, nt.test(t)),
            n
        }
        function m() {}
        var g, y, b, _, x, k, w, C, $, S, T = !0, E = "undefined", A = ("sizcache" + Math.random()).replace(".", ""), j = String, N = t.document, O = N.documentElement, D = 0, L = 0, I = [].pop, M = [].push, P = [].slice, F = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++)
                if (this[e] === t)
                    return e;
            return -1
        }
        , q = function(t, e) {
            return t[A] = null == e || e,
            t
        }, H = function() {
            var t = {}
              , e = [];
            return q(function(n, i) {
                return e.push(n) > b.cacheLength && delete t[e.shift()],
                t[n + " "] = i
            }, t)
        }, B = H(), R = H(), z = H(), U = "[\\x20\\t\\r\\n\\f]", V = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", W = V.replace("w", "w#"), X = "\\[" + U + "*(" + V + ")" + U + "*(?:([*^$|!~]?=)" + U + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + U + "*\\]", Y = ":(" + V + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + X + ")|[^:]|\\\\.)*|.*))\\)|)", J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)", K = new RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$","g"), G = new RegExp("^" + U + "*," + U + "*"), Z = new RegExp("^" + U + "*([\\x20\\t\\r\\n\\f>+~])" + U + "*"), tt = new RegExp(Y), et = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, nt = /[\x20\t\r\n\f]*[+~]/, it = /h\d/i, rt = /input|select|textarea|button/i, at = /\\(?!\\)/g, ot = {
            ID: new RegExp("^#(" + V + ")"),
            CLASS: new RegExp("^\\.(" + V + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + V + ")['\"]?\\]"),
            TAG: new RegExp("^(" + V.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + X),
            PSEUDO: new RegExp("^" + Y),
            POS: new RegExp(J,"i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + U + "*(even|odd|(([+-]|)(\\d*)n|)" + U + "*(?:([+-]|)" + U + "*(\\d+)|))" + U + "*\\)|)","i"),
            needsContext: new RegExp("^" + U + "*[>+~]|" + J,"i")
        }, st = function(t) {
            var e = N.createElement("div");
            try {
                return t(e)
            } catch (t) {
                return !1
            } finally {
                e = null
            }
        }, lt = st(function(t) {
            return t.appendChild(N.createComment("")),
            !t.getElementsByTagName("*").length
        }), ct = st(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            t.firstChild && typeof t.firstChild.getAttribute !== E && "#" === t.firstChild.getAttribute("href")
        }), ut = st(function(t) {
            t.innerHTML = "<select></select>";
            var e = typeof t.lastChild.getAttribute("multiple");
            return "boolean" !== e && "string" !== e
        }), dt = st(function(t) {
            return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
            !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e",
            2 === t.getElementsByClassName("e").length)
        }), pt = st(function(t) {
            t.id = A + 0,
            t.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>",
            O.insertBefore(t, O.firstChild);
            var e = N.getElementsByName && N.getElementsByName(A).length === 2 + N.getElementsByName(A + 0).length;
            return y = !N.getElementById(A),
            O.removeChild(t),
            e
        });
        try {
            P.call(O.childNodes, 0)[0].nodeType
        } catch (t) {
            P = function(t) {
                for (var e, n = []; e = this[t]; t++)
                    n.push(e);
                return n
            }
        }
        n.matches = function(t, e) {
            return n(t, null, null, e)
        }
        ,
        n.matchesSelector = function(t, e) {
            return n(e, null, null, [t]).length > 0
        }
        ,
        _ = n.getText = function(t) {
            var e, n = "", i = 0, r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += _(t)
                } else if (3 === r || 4 === r)
                    return t.nodeValue
            } else
                for (; e = t[i]; i++)
                    n += _(e);
            return n
        }
        ,
        x = n.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        k = n.contains = O.contains ? function(t, e) {
            var n = 9 === t.nodeType ? t.documentElement : t
              , i = e && e.parentNode;
            return t === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
        }
        : O.compareDocumentPosition ? function(t, e) {
            return e && !!(16 & t.compareDocumentPosition(e))
        }
        : function(t, e) {
            for (; e = e.parentNode; )
                if (e === t)
                    return !0;
            return !1
        }
        ,
        n.attr = function(t, e) {
            var n, i = x(t);
            return i || (e = e.toLowerCase()),
            (n = b.attrHandle[e]) ? n(t) : i || ut ? t.getAttribute(e) : (n = t.getAttributeNode(e),
            n ? "boolean" == typeof t[e] ? t[e] ? e : null : n.specified ? n.value : null : null)
        }
        ,
        b = n.selectors = {
            cacheLength: 50,
            createPseudo: q,
            match: ot,
            attrHandle: ct ? {} : {
                href: function(t) {
                    return t.getAttribute("href", 2)
                },
                type: function(t) {
                    return t.getAttribute("type")
                }
            },
            find: {
                ID: y ? function(t, e, n) {
                    if (typeof e.getElementById !== E && !n) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }
                : function(t, e, n) {
                    if (typeof e.getElementById !== E && !n) {
                        var i = e.getElementById(t);
                        return i ? i.id === t || typeof i.getAttributeNode !== E && i.getAttributeNode("id").value === t ? [i] : void 0 : []
                    }
                }
                ,
                TAG: lt ? function(t, e) {
                    if (typeof e.getElementsByTagName !== E)
                        return e.getElementsByTagName(t)
                }
                : function(t, e) {
                    var n = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (var i, r = [], a = 0; i = n[a]; a++)
                            1 === i.nodeType && r.push(i);
                        return r
                    }
                    return n
                }
                ,
                NAME: pt && function(t, e) {
                    if (typeof e.getElementsByName !== E)
                        return e.getElementsByName(name)
                }
                ,
                CLASS: dt && function(t, e, n) {
                    if (typeof e.getElementsByClassName !== E && !n)
                        return e.getElementsByClassName(t)
                }
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(at, ""),
                    t[3] = (t[4] || t[5] || "").replace(at, ""),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1] ? (t[2] || n.error(t[0]),
                    t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])),
                    t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && n.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n;
                    return ot.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (tt.test(e) && (n = s(e, !0)) && (n = e.indexOf(")", e.length - n) - e.length) && (e = e.slice(0, n),
                    t[0] = t[0].slice(0, n)),
                    t[2] = e),
                    t.slice(0, 3))
                }
            },
            filter: {
                ID: y ? function(t) {
                    return t = t.replace(at, ""),
                    function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                : function(t) {
                    return t = t.replace(at, ""),
                    function(e) {
                        var n = typeof e.getAttributeNode !== E && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ,
                TAG: function(t) {
                    return "*" === t ? function() {
                        return !0
                    }
                    : (t = t.replace(at, "").toLowerCase(),
                    function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                    )
                },
                CLASS: function(t) {
                    var e = B[A][t + " "];
                    return e || (e = new RegExp("(^|" + U + ")" + t + "(" + U + "|$)")) && B(t, function(t) {
                        return e.test(t.className || typeof t.getAttribute !== E && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, i) {
                    return function(r, a) {
                        var o = n.attr(r, t);
                        return null == o ? "!=" === e : !e || (o += "",
                        "=" === e ? o === i : "!=" === e ? o !== i : "^=" === e ? i && 0 === o.indexOf(i) : "*=" === e ? i && o.indexOf(i) > -1 : "$=" === e ? i && o.substr(o.length - i.length) === i : "~=" === e ? (" " + o + " ").indexOf(i) > -1 : "|=" === e && (o === i || o.substr(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i) {
                    return "nth" === t ? function(t) {
                        var e, r, a = t.parentNode;
                        if (1 === n && 0 === i)
                            return !0;
                        if (a)
                            for (r = 0,
                            e = a.firstChild; e && (1 !== e.nodeType || (r++,
                            t !== e)); e = e.nextSibling)
                                ;
                        return (r -= i) === n || r % n == 0 && r / n >= 0
                    }
                    : function(e) {
                        var n = e;
                        switch (t) {
                        case "only":
                        case "first":
                            for (; n = n.previousSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            if ("first" === t)
                                return !0;
                            n = e;
                        case "last":
                            for (; n = n.nextSibling; )
                                if (1 === n.nodeType)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var i, r = b.pseudos[t] || b.setFilters[t.toLowerCase()] || n.error("unsupported pseudo: " + t);
                    return r[A] ? r(e) : r.length > 1 ? (i = [t, t, "", e],
                    b.setFilters.hasOwnProperty(t.toLowerCase()) ? q(function(t, n) {
                        for (var i, a = r(t, e), o = a.length; o--; )
                            i = F.call(t, a[o]),
                            t[i] = !(n[i] = a[o])
                    }) : function(t) {
                        return r(t, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: q(function(t) {
                    var e = []
                      , n = []
                      , i = w(t.replace(K, "$1"));
                    return i[A] ? q(function(t, e, n, r) {
                        for (var a, o = i(t, null, r, []), s = t.length; s--; )
                            (a = o[s]) && (t[s] = !(e[s] = a))
                    }) : function(t, r, a) {
                        return e[0] = t,
                        i(e, null, a, n),
                        !n.pop()
                    }
                }),
                has: q(function(t) {
                    return function(e) {
                        return n(t, e).length > 0
                    }
                }),
                contains: q(function(t) {
                    return function(e) {
                        return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                    }
                }),
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                parent: function(t) {
                    return !b.pseudos.empty(t)
                },
                empty: function(t) {
                    var e;
                    for (t = t.firstChild; t; ) {
                        if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e)
                            return !1;
                        t = t.nextSibling
                    }
                    return !0
                },
                header: function(t) {
                    return it.test(t.nodeName)
                },
                text: function(t) {
                    var e, n;
                    return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (n = t.getAttribute("type")) || n.toLowerCase() === e)
                },
                radio: i("radio"),
                checkbox: i("checkbox"),
                file: i("file"),
                password: i("password"),
                image: i("image"),
                submit: r("submit"),
                reset: r("reset"),
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                input: function(t) {
                    return rt.test(t.nodeName)
                },
                focus: function(t) {
                    var e = t.ownerDocument;
                    return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                active: function(t) {
                    return t === t.ownerDocument.activeElement
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: a(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: a(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: a(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        },
        C = O.compareDocumentPosition ? function(t, e) {
            return t === e ? ($ = !0,
            0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1
        }
        : function(t, e) {
            if (t === e)
                return $ = !0,
                0;
            if (t.sourceIndex && e.sourceIndex)
                return t.sourceIndex - e.sourceIndex;
            var n, i, r = [], a = [], s = t.parentNode, l = e.parentNode, c = s;
            if (s === l)
                return o(t, e);
            if (!s)
                return -1;
            if (!l)
                return 1;
            for (; c; )
                r.unshift(c),
                c = c.parentNode;
            for (c = l; c; )
                a.unshift(c),
                c = c.parentNode;
            n = r.length,
            i = a.length;
            for (var u = 0; u < n && u < i; u++)
                if (r[u] !== a[u])
                    return o(r[u], a[u]);
            return u === n ? o(t, a[u], -1) : o(r[u], e, 1)
        }
        ,
        [0, 0].sort(C),
        T = !$,
        n.uniqueSort = function(t) {
            var e, n = [], i = 1, r = 0;
            if ($ = T,
            t.sort(C),
            $) {
                for (; e = t[i]; i++)
                    e === t[i - 1] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return t
        }
        ,
        n.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        w = n.compile = function(t, e) {
            var n, i = [], r = [], a = z[A][t + " "];
            if (!a) {
                for (e || (e = s(t)),
                n = e.length; n--; )
                    a = p(e[n]),
                    a[A] ? i.push(a) : r.push(a);
                a = z(t, f(r, i))
            }
            return a
        }
        ,
        N.querySelectorAll && function() {
            var t, e = v, i = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, a = [":focus"], o = [":active"], l = O.matchesSelector || O.mozMatchesSelector || O.webkitMatchesSelector || O.oMatchesSelector || O.msMatchesSelector;
            st(function(t) {
                t.innerHTML = "<select><option selected=''></option></select>",
                t.querySelectorAll("[selected]").length || a.push("\\[" + U + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                t.querySelectorAll(":checked").length || a.push(":checked")
            }),
            st(function(t) {
                t.innerHTML = "<p test=''></p>",
                t.querySelectorAll("[test^='']").length && a.push("[*^$]=" + U + "*(?:\"\"|'')"),
                t.innerHTML = "<input type='hidden'/>",
                t.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled")
            }),
            a = new RegExp(a.join("|")),
            v = function(t, n, r, o, l) {
                if (!o && !l && !a.test(t)) {
                    var c, u, d = !0, p = A, f = n, h = 9 === n.nodeType && t;
                    if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                        for (c = s(t),
                        (d = n.getAttribute("id")) ? p = d.replace(i, "\\$&") : n.setAttribute("id", p),
                        p = "[id='" + p + "'] ",
                        u = c.length; u--; )
                            c[u] = p + c[u].join("");
                        f = nt.test(t) && n.parentNode || n,
                        h = c.join(",")
                    }
                    if (h)
                        try {
                            return M.apply(r, P.call(f.querySelectorAll(h), 0)),
                            r
                        } catch (t) {} finally {
                            d || n.removeAttribute("id")
                        }
                }
                return e(t, n, r, o, l)
            }
            ,
            l && (st(function(e) {
                t = l.call(e, "div");
                try {
                    l.call(e, "[test!='']:sizzle"),
                    o.push("!=", Y)
                } catch (t) {}
            }),
            o = new RegExp(o.join("|")),
            n.matchesSelector = function(e, i) {
                if (i = i.replace(r, "='$1']"),
                !x(e) && !o.test(i) && !a.test(i))
                    try {
                        var s = l.call(e, i);
                        if (s || t || e.document && 11 !== e.document.nodeType)
                            return s
                    } catch (t) {}
                return n(i, null, null, [e]).length > 0
            }
            )
        }(),
        b.pseudos.nth = b.pseudos.eq,
        b.filters = m.prototype = b.pseudos,
        b.setFilters = new m,
        n.attr = Q.attr,
        Q.find = n,
        Q.expr = n.selectors,
        Q.expr[":"] = Q.expr.pseudos,
        Q.unique = n.uniqueSort,
        Q.text = n.getText,
        Q.isXMLDoc = n.isXML,
        Q.contains = n.contains
    }(t);
    var Lt = /Until$/
      , It = /^(?:parents|prev(?:Until|All))/
      , Mt = /^.[^:#\[\.,]*$/
      , Pt = Q.expr.match.needsContext
      , Ft = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Q.fn.extend({
        find: function(t) {
            var e, n, i, r, a, o, s = this;
            if ("string" != typeof t)
                return Q(t).filter(function() {
                    for (e = 0,
                    n = s.length; e < n; e++)
                        if (Q.contains(s[e], this))
                            return !0
                });
            for (o = this.pushStack("", "find", t),
            e = 0,
            n = this.length; e < n; e++)
                if (i = o.length,
                Q.find(t, this[e], o),
                e > 0)
                    for (r = i; r < o.length; r++)
                        for (a = 0; a < i; a++)
                            if (o[a] === o[r]) {
                                o.splice(r--, 1);
                                break
                            }
            return o
        },
        has: function(t) {
            var e, n = Q(t, this), i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (Q.contains(this, n[e]))
                        return !0
            })
        },
        not: function(t) {
            return this.pushStack(c(this, t, !1), "not", t)
        },
        filter: function(t) {
            return this.pushStack(c(this, t, !0), "filter", t)
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? Pt.test(t) ? Q(t, this.context).index(this[0]) >= 0 : Q.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function(t, e) {
            for (var n, i = 0, r = this.length, a = [], o = Pt.test(t) || "string" != typeof t ? Q(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType; ) {
                    if (o ? o.index(n) > -1 : Q.find.matchesSelector(n, t)) {
                        a.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return a = a.length > 1 ? Q.unique(a) : a,
            this.pushStack(a, "closest", t)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Q.inArray(this[0], Q(t)) : Q.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? Q(t, e) : Q.makeArray(t && t.nodeType ? [t] : t)
              , i = Q.merge(this.get(), n);
            return this.pushStack(s(n[0]) || s(i[0]) ? i : Q.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    Q.fn.andSelf = Q.fn.addBack,
    Q.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Q.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Q.dir(t, "parentNode", n)
        },
        next: function(t) {
            return l(t, "nextSibling")
        },
        prev: function(t) {
            return l(t, "previousSibling")
        },
        nextAll: function(t) {
            return Q.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Q.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Q.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Q.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Q.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Q.sibling(t.firstChild)
        },
        contents: function(t) {
            return Q.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : Q.merge([], t.childNodes)
        }
    }, function(t, e) {
        Q.fn[t] = function(n, i) {
            var r = Q.map(this, e, n);
            return Lt.test(t) || (i = n),
            i && "string" == typeof i && (r = Q.filter(i, r)),
            r = this.length > 1 && !Ft[t] ? Q.unique(r) : r,
            this.length > 1 && It.test(t) && (r = r.reverse()),
            this.pushStack(r, t, X.call(arguments).join(","))
        }
    }),
    Q.extend({
        filter: function(t, e, n) {
            return n && (t = ":not(" + t + ")"),
            1 === e.length ? Q.find.matchesSelector(e[0], t) ? [e[0]] : [] : Q.find.matches(t, e)
        },
        dir: function(t, n, i) {
            for (var r = [], a = t[n]; a && 9 !== a.nodeType && (i === e || 1 !== a.nodeType || !Q(a).is(i)); )
                1 === a.nodeType && r.push(a),
                a = a[n];
            return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Ht = / jQuery\d+="(?:null|\d+)"/g
      , Bt = /^\s+/
      , Rt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , zt = /<([\w:]+)/
      , Ut = /<tbody/i
      , Vt = /<|&#?\w+;/
      , Wt = /<(?:script|style|link)/i
      , Xt = /<(?:script|object|embed|option|style)/i
      , Yt = new RegExp("<(?:" + qt + ")[\\s/>]","i")
      , Jt = /^(?:checkbox|radio)$/
      , Kt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Gt = /\/(java|ecma)script/i
      , Qt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
      , Zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }
      , te = u(B)
      , ee = te.appendChild(B.createElement("div"));
    Zt.optgroup = Zt.option,
    Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
    Zt.th = Zt.td,
    Q.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]),
    Q.fn.extend({
        text: function(t) {
            return Q.access(this, function(t) {
                return t === e ? Q.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(t) {
            if (Q.isFunction(t))
                return this.each(function(e) {
                    Q(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = Q(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return Q.isFunction(t) ? this.each(function(e) {
                Q(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = Q(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = Q.isFunction(t);
            return this.each(function(n) {
                Q(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            if (!s(this[0]))
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this)
                });
            if (arguments.length) {
                var t = Q.clean(arguments);
                return this.pushStack(Q.merge(t, this), "before", this.selector)
            }
        },
        after: function() {
            if (!s(this[0]))
                return this.domManip(arguments, !1, function(t) {
                    this.parentNode.insertBefore(t, this.nextSibling)
                });
            if (arguments.length) {
                var t = Q.clean(arguments);
                return this.pushStack(Q.merge(this, t), "after", this.selector)
            }
        },
        remove: function(t, e) {
            for (var n, i = 0; null != (n = this[i]); i++)
                t && !Q.filter(t, [n]).length || (!e && 1 === n.nodeType && (Q.cleanData(n.getElementsByTagName("*")),
                Q.cleanData([n])),
                n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                for (1 === t.nodeType && Q.cleanData(t.getElementsByTagName("*")); t.firstChild; )
                    t.removeChild(t.firstChild);
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return Q.clone(this, t, e)
            })
        },
        html: function(t) {
            return Q.access(this, function(t) {
                var n = this[0] || {}
                  , i = 0
                  , r = this.length;
                if (t === e)
                    return 1 === n.nodeType ? n.innerHTML.replace(Ht, "") : e;
                if ("string" == typeof t && !Wt.test(t) && (Q.support.htmlSerialize || !Yt.test(t)) && (Q.support.leadingWhitespace || !Bt.test(t)) && !Zt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Rt, "<$1></$2>");
                    try {
                        for (; i < r; i++)
                            n = this[i] || {},
                            1 === n.nodeType && (Q.cleanData(n.getElementsByTagName("*")),
                            n.innerHTML = t);
                        n = 0
                    } catch (t) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            return s(this[0]) ? this.length ? this.pushStack(Q(Q.isFunction(t) ? t() : t), "replaceWith", t) : this : Q.isFunction(t) ? this.each(function(e) {
                var n = Q(this)
                  , i = n.html();
                n.replaceWith(t.call(this, e, i))
            }) : ("string" != typeof t && (t = Q(t).detach()),
            this.each(function() {
                var e = this.nextSibling
                  , n = this.parentNode;
                Q(this).remove(),
                e ? Q(e).before(t) : Q(n).append(t)
            }))
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, n, i) {
            t = [].concat.apply([], t);
            var r, a, o, s, l = 0, c = t[0], u = [], p = this.length;
            if (!Q.support.checkClone && p > 1 && "string" == typeof c && Kt.test(c))
                return this.each(function() {
                    Q(this).domManip(t, n, i)
                });
            if (Q.isFunction(c))
                return this.each(function(r) {
                    var a = Q(this);
                    t[0] = c.call(this, r, n ? a.html() : e),
                    a.domManip(t, n, i)
                });
            if (this[0]) {
                if (r = Q.buildFragment(t, this, u),
                o = r.fragment,
                a = o.firstChild,
                1 === o.childNodes.length && (o = a),
                a)
                    for (n = n && Q.nodeName(a, "tr"),
                    s = r.cacheable || p - 1; l < p; l++)
                        i.call(n && Q.nodeName(this[l], "table") ? d(this[l], "tbody") : this[l], l === s ? o : Q.clone(o, !0, !0));
                o = a = null,
                u.length && Q.each(u, function(t, e) {
                    e.src ? Q.ajax ? Q.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : Q.error("no ajax") : Q.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Qt, "")),
                    e.parentNode && e.parentNode.removeChild(e)
                })
            }
            return this
        }
    }),
    Q.buildFragment = function(t, n, i) {
        var r, a, o, s = t[0];
        return n = n || B,
        n = !n.nodeType && n[0] || n,
        n = n.ownerDocument || n,
        1 === t.length && "string" == typeof s && s.length < 512 && n === B && "<" === s.charAt(0) && !Xt.test(s) && (Q.support.checkClone || !Kt.test(s)) && (Q.support.html5Clone || !Yt.test(s)) && (a = !0,
        r = Q.fragments[s],
        o = r !== e),
        r || (r = n.createDocumentFragment(),
        Q.clean(t, n, r, i),
        a && (Q.fragments[s] = o && r)),
        {
            fragment: r,
            cacheable: a
        }
    }
    ,
    Q.fragments = {},
    Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        Q.fn[t] = function(n) {
            var i, r = 0, a = [], o = Q(n), s = o.length, l = 1 === this.length && this[0].parentNode;
            if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s)
                return o[e](this[0]),
                this;
            for (; r < s; r++)
                i = (r > 0 ? this.clone(!0) : this).get(),
                Q(o[r])[e](i),
                a = a.concat(i);
            return this.pushStack(a, t, o.selector)
        }
    }),
    Q.extend({
        clone: function(t, e, n) {
            var i, r, a, o;
            if (Q.support.html5Clone || Q.isXMLDoc(t) || !Yt.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML,
            ee.removeChild(o = ee.firstChild)),
            !(Q.support.noCloneEvent && Q.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Q.isXMLDoc(t)))
                for (f(t, o),
                i = h(t),
                r = h(o),
                a = 0; i[a]; ++a)
                    r[a] && f(i[a], r[a]);
            if (e && (p(t, o),
            n))
                for (i = h(t),
                r = h(o),
                a = 0; i[a]; ++a)
                    p(i[a], r[a]);
            return i = r = null,
            o
        },
        clean: function(t, e, n, i) {
            var r, a, o, s, l, c, d, p, f, h, m, g = e === B && te, y = [];
            for (e && void 0 !== e.createDocumentFragment || (e = B),
            r = 0; null != (o = t[r]); r++)
                if ("number" == typeof o && (o += ""),
                o) {
                    if ("string" == typeof o)
                        if (Vt.test(o)) {
                            for (g = g || u(e),
                            d = e.createElement("div"),
                            g.appendChild(d),
                            o = o.replace(Rt, "<$1></$2>"),
                            s = (zt.exec(o) || ["", ""])[1].toLowerCase(),
                            l = Zt[s] || Zt._default,
                            c = l[0],
                            d.innerHTML = l[1] + o + l[2]; c--; )
                                d = d.lastChild;
                            if (!Q.support.tbody)
                                for (p = Ut.test(o),
                                f = "table" !== s || p ? "<table>" !== l[1] || p ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes,
                                a = f.length - 1; a >= 0; --a)
                                    Q.nodeName(f[a], "tbody") && !f[a].childNodes.length && f[a].parentNode.removeChild(f[a]);
                            !Q.support.leadingWhitespace && Bt.test(o) && d.insertBefore(e.createTextNode(Bt.exec(o)[0]), d.firstChild),
                            o = d.childNodes,
                            d.parentNode.removeChild(d)
                        } else
                            o = e.createTextNode(o);
                    o.nodeType ? y.push(o) : Q.merge(y, o)
                }
            if (d && (o = d = g = null),
            !Q.support.appendChecked)
                for (r = 0; null != (o = y[r]); r++)
                    Q.nodeName(o, "input") ? v(o) : void 0 !== o.getElementsByTagName && Q.grep(o.getElementsByTagName("input"), v);
            if (n)
                for (h = function(t) {
                    if (!t.type || Gt.test(t.type))
                        return i ? i.push(t.parentNode ? t.parentNode.removeChild(t) : t) : n.appendChild(t)
                }
                ,
                r = 0; null != (o = y[r]); r++)
                    Q.nodeName(o, "script") && h(o) || (n.appendChild(o),
                    void 0 !== o.getElementsByTagName && (m = Q.grep(Q.merge([], o.getElementsByTagName("script")), h),
                    y.splice.apply(y, [r + 1, 0].concat(m)),
                    r += m.length));
            return y
        },
        cleanData: function(t, e) {
            for (var n, i, r, a, o = 0, s = Q.expando, l = Q.cache, c = Q.support.deleteExpando, u = Q.event.special; null != (r = t[o]); o++)
                if ((e || Q.acceptData(r)) && (i = r[s],
                n = i && l[i])) {
                    if (n.events)
                        for (a in n.events)
                            u[a] ? Q.event.remove(r, a) : Q.removeEvent(r, a, n.handle);
                    l[i] && (delete l[i],
                    c ? delete r[s] : r.removeAttribute ? r.removeAttribute(s) : r[s] = null,
                    Q.deletedIds.push(i))
                }
        }
    }),
    function() {
        var t, e;
        Q.uaMatch = function(t) {
            t = t.toLowerCase();
            var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        }
        ,
        t = Q.uaMatch(z.userAgent),
        e = {},
        t.browser && (e[t.browser] = !0,
        e.version = t.version),
        e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0),
        Q.browser = e,
        Q.sub = function() {
            function t(e, n) {
                return new t.fn.init(e,n)
            }
            Q.extend(!0, t, this),
            t.superclass = this,
            t.fn = t.prototype = this(),
            t.fn.constructor = t,
            t.sub = this.sub,
            t.fn.init = function(n, i) {
                return i && i instanceof Q && !(i instanceof t) && (i = t(i)),
                Q.fn.init.call(this, n, i, e)
            }
            ,
            t.fn.init.prototype = t.fn;
            var e = t(B);
            return t
        }
    }();
    var ne, ie, re, ae = /alpha\([^)]*\)/i, oe = /opacity=([^)]*)/, se = /^(top|right|bottom|left)$/, le = /^(none|table(?!-c[ea]).+)/, ce = /^margin/, ue = new RegExp("^(" + Z + ")(.*)$","i"), de = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i"), pe = new RegExp("^([-+])=(" + Z + ")","i"), fe = {
        BODY: "block"
    }, he = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ve = {
        letterSpacing: 0,
        fontWeight: 400
    }, me = ["Top", "Right", "Bottom", "Left"], ge = ["Webkit", "O", "Moz", "ms"], ye = Q.fn.toggle;
    Q.fn.extend({
        css: function(t, n) {
            return Q.access(this, function(t, n, i) {
                return i !== e ? Q.style(t, n, i) : Q.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(t, e) {
            var n = "boolean" == typeof t;
            return Q.isFunction(t) && Q.isFunction(e) ? ye.apply(this, arguments) : this.each(function() {
                (n ? t : g(this)) ? Q(this).show() : Q(this).hide()
            })
        }
    }),
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ne(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: Q.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, i, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var a, o, s, l = Q.camelCase(n), c = t.style;
                if (n = Q.cssProps[l] || (Q.cssProps[l] = m(c, l)),
                s = Q.cssHooks[n] || Q.cssHooks[l],
                i === e)
                    return s && "get"in s && (a = s.get(t, !1, r)) !== e ? a : c[n];
                if ("string" === (o = typeof i) && (a = pe.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(Q.css(t, n)),
                o = "number"),
                !(null == i || "number" === o && isNaN(i) || ("number" === o && !Q.cssNumber[l] && (i += "px"),
                s && "set"in s && (i = s.set(t, i, r)) === e)))
                    try {
                        c[n] = i
                    } catch (t) {}
            }
        },
        css: function(t, n, i, r) {
            var a, o, s, l = Q.camelCase(n);
            return n = Q.cssProps[l] || (Q.cssProps[l] = m(t.style, l)),
            s = Q.cssHooks[n] || Q.cssHooks[l],
            s && "get"in s && (a = s.get(t, !0, r)),
            a === e && (a = ne(t, n)),
            "normal" === a && n in ve && (a = ve[n]),
            i || r !== e ? (o = parseFloat(a),
            i || Q.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function(t, e, n) {
            var i, r, a = {};
            for (r in e)
                a[r] = t.style[r],
                t.style[r] = e[r];
            i = n.call(t);
            for (r in e)
                t.style[r] = a[r];
            return i
        }
    }),
    t.getComputedStyle ? ne = function(e, n) {
        var i, r, a, o, s = t.getComputedStyle(e, null), l = e.style;
        return s && (i = s.getPropertyValue(n) || s[n],
        "" === i && !Q.contains(e.ownerDocument, e) && (i = Q.style(e, n)),
        de.test(i) && ce.test(n) && (r = l.width,
        a = l.minWidth,
        o = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = i,
        i = s.width,
        l.width = r,
        l.minWidth = a,
        l.maxWidth = o)),
        i
    }
    : B.documentElement.currentStyle && (ne = function(t, e) {
        var n, i, r = t.currentStyle && t.currentStyle[e], a = t.style;
        return null == r && a && a[e] && (r = a[e]),
        de.test(r) && !se.test(e) && (n = a.left,
        i = t.runtimeStyle && t.runtimeStyle.left,
        i && (t.runtimeStyle.left = t.currentStyle.left),
        a.left = "fontSize" === e ? "1em" : r,
        r = a.pixelLeft + "px",
        a.left = n,
        i && (t.runtimeStyle.left = i)),
        "" === r ? "auto" : r
    }
    ),
    Q.each(["height", "width"], function(t, e) {
        Q.cssHooks[e] = {
            get: function(t, n, i) {
                if (n)
                    return 0 === t.offsetWidth && le.test(ne(t, "display")) ? Q.swap(t, he, function() {
                        return x(t, e, i)
                    }) : x(t, e, i)
            },
            set: function(t, n, i) {
                return b(t, n, i ? _(t, e, i, Q.support.boxSizing && "border-box" === Q.css(t, "boxSizing")) : 0)
            }
        }
    }),
    Q.support.opacity || (Q.cssHooks.opacity = {
        get: function(t, e) {
            return oe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style
              , i = t.currentStyle
              , r = Q.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : ""
              , a = i && i.filter || n.filter || "";
            n.zoom = 1,
            e >= 1 && "" === Q.trim(a.replace(ae, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            i && !i.filter) || (n.filter = ae.test(a) ? a.replace(ae, r) : a + " " + r)
        }
    }),
    Q(function() {
        Q.support.reliableMarginRight || (Q.cssHooks.marginRight = {
            get: function(t, e) {
                return Q.swap(t, {
                    display: "inline-block"
                }, function() {
                    if (e)
                        return ne(t, "marginRight")
                })
            }
        }),
        !Q.support.pixelPosition && Q.fn.position && Q.each(["top", "left"], function(t, e) {
            Q.cssHooks[e] = {
                get: function(t, n) {
                    if (n) {
                        var i = ne(t, e);
                        return de.test(i) ? Q(t).position()[e] + "px" : i
                    }
                }
            }
        })
    }),
    Q.expr && Q.expr.filters && (Q.expr.filters.hidden = function(t) {
        return 0 === t.offsetWidth && 0 === t.offsetHeight || !Q.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ne(t, "display"))
    }
    ,
    Q.expr.filters.visible = function(t) {
        return !Q.expr.filters.hidden(t)
    }
    ),
    Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        Q.cssHooks[t + e] = {
            expand: function(n) {
                var i, r = "string" == typeof n ? n.split(" ") : [n], a = {};
                for (i = 0; i < 4; i++)
                    a[t + me[i] + e] = r[i] || r[i - 2] || r[0];
                return a
            }
        },
        ce.test(t) || (Q.cssHooks[t + e].set = b)
    });
    var be = /%20/g
      , _e = /\[\]$/
      , xe = /\r?\n/g
      , ke = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i
      , we = /^(?:select|textarea)/i;
    Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? Q.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || we.test(this.nodeName) || ke.test(this.type))
            }).map(function(t, e) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(t, n) {
                    return {
                        name: e.name,
                        value: t.replace(xe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(xe, "\r\n")
                }
            }).get()
        }
    }),
    Q.param = function(t, n) {
        var i, r = [], a = function(t, e) {
            e = Q.isFunction(e) ? e() : null == e ? "" : e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (n === e && (n = Q.ajaxSettings && Q.ajaxSettings.traditional),
        Q.isArray(t) || t.jquery && !Q.isPlainObject(t))
            Q.each(t, function() {
                a(this.name, this.value)
            });
        else
            for (i in t)
                w(i, t[i], n, a);
        return r.join("&").replace(be, "+")
    }
    ;
    var Ce, $e, Se = /#.*$/, Te = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Ee = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ae = /^(?:GET|HEAD)$/, je = /^\/\//, Ne = /\?/, Oe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, De = /([?&])_=[^&]*/, Le = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Ie = Q.fn.load, Me = {}, Pe = {}, Fe = ["*/"] + ["*"];
    try {
        $e = R.href
    } catch (t) {
        $e = B.createElement("a"),
        $e.href = "",
        $e = $e.href
    }
    Ce = Le.exec($e.toLowerCase()) || [],
    Q.fn.load = function(t, n, i) {
        if ("string" != typeof t && Ie)
            return Ie.apply(this, arguments);
        if (!this.length)
            return this;
        var r, a, o, s = this, l = t.indexOf(" ");
        return l >= 0 && (r = t.slice(l, t.length),
        t = t.slice(0, l)),
        Q.isFunction(n) ? (i = n,
        n = e) : n && "object" == typeof n && (a = "POST"),
        Q.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: n,
            complete: function(t, e) {
                i && s.each(i, o || [t.responseText, e, t])
            }
        }).done(function(t) {
            o = arguments,
            s.html(r ? Q("<div>").append(t.replace(Oe, "")).find(r) : t)
        }),
        this
    }
    ,
    Q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) {
        Q.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    Q.each(["get", "post"], function(t, n) {
        Q[n] = function(t, i, r, a) {
            return Q.isFunction(i) && (a = a || r,
            r = i,
            i = e),
            Q.ajax({
                type: n,
                url: t,
                data: i,
                success: r,
                dataType: a
            })
        }
    }),
    Q.extend({
        getScript: function(t, n) {
            return Q.get(t, e, n, "script")
        },
        getJSON: function(t, e, n) {
            return Q.get(t, e, n, "json")
        },
        ajaxSetup: function(t, e) {
            return e ? S(t, Q.ajaxSettings) : (e = t,
            t = Q.ajaxSettings),
            S(t, e),
            t
        },
        ajaxSettings: {
            url: $e,
            isLocal: Ee.test(Ce[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Fe
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: C(Me),
        ajaxTransport: C(Pe),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var c, d, y, b, x, w = n;
                2 !== _ && (_ = 2,
                l && clearTimeout(l),
                s = e,
                a = o || "",
                k.readyState = t > 0 ? 4 : 0,
                i && (b = T(p, k, i)),
                t >= 200 && t < 300 || 304 === t ? (p.ifModified && (x = k.getResponseHeader("Last-Modified"),
                x && (Q.lastModified[r] = x),
                (x = k.getResponseHeader("Etag")) && (Q.etag[r] = x)),
                304 === t ? (w = "notmodified",
                c = !0) : (c = E(p, b),
                w = c.state,
                d = c.data,
                y = c.error,
                c = !y)) : (y = w,
                w && !t || (w = "error",
                t < 0 && (t = 0))),
                k.status = t,
                k.statusText = (n || w) + "",
                c ? v.resolveWith(f, [d, w, k]) : v.rejectWith(f, [k, w, y]),
                k.statusCode(g),
                g = e,
                u && h.trigger("ajax" + (c ? "Success" : "Error"), [k, p, c ? d : y]),
                m.fireWith(f, [k, w]),
                u && (h.trigger("ajaxComplete", [k, p]),
                --Q.active || Q.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = e),
            n = n || {};
            var r, a, o, s, l, c, u, d, p = Q.ajaxSetup({}, n), f = p.context || p, h = f !== p && (f.nodeType || f instanceof Q) ? Q(f) : Q.event, v = Q.Deferred(), m = Q.Callbacks("once memory"), g = p.statusCode || {}, y = {}, b = {}, _ = 0, x = "canceled", k = {
                readyState: 0,
                setRequestHeader: function(t, e) {
                    if (!_) {
                        var n = t.toLowerCase();
                        t = b[n] = b[n] || t,
                        y[t] = e
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? a : null
                },
                getResponseHeader: function(t) {
                    var n;
                    if (2 === _) {
                        if (!o)
                            for (o = {}; n = Te.exec(a); )
                                o[n[1].toLowerCase()] = n[2];
                        n = o[t.toLowerCase()]
                    }
                    return n === e ? null : n
                },
                overrideMimeType: function(t) {
                    return _ || (p.mimeType = t),
                    this
                },
                abort: function(t) {
                    return t = t || x,
                    s && s.abort(t),
                    i(0, t),
                    this
                }
            };
            if (v.promise(k),
            k.success = k.done,
            k.error = k.fail,
            k.complete = m.add,
            k.statusCode = function(t) {
                if (t) {
                    var e;
                    if (_ < 2)
                        for (e in t)
                            g[e] = [g[e], t[e]];
                    else
                        e = t[k.status],
                        k.always(e)
                }
                return this
            }
            ,
            p.url = ((t || p.url) + "").replace(Se, "").replace(je, Ce[1] + "//"),
            p.dataTypes = Q.trim(p.dataType || "*").toLowerCase().split(et),
            null == p.crossDomain && (c = Le.exec(p.url.toLowerCase()),
            p.crossDomain = !(!c || c[1] === Ce[1] && c[2] === Ce[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Ce[3] || ("http:" === Ce[1] ? 80 : 443)))),
            p.data && p.processData && "string" != typeof p.data && (p.data = Q.param(p.data, p.traditional)),
            $(Me, p, n, k),
            2 === _)
                return k;
            if (u = p.global,
            p.type = p.type.toUpperCase(),
            p.hasContent = !Ae.test(p.type),
            u && 0 == Q.active++ && Q.event.trigger("ajaxStart"),
            !p.hasContent && (p.data && (p.url += (Ne.test(p.url) ? "&" : "?") + p.data,
            delete p.data),
            r = p.url,
            !1 === p.cache)) {
                var w = Q.now()
                  , C = p.url.replace(De, "$1_=" + w);
                p.url = C + (C === p.url ? (Ne.test(p.url) ? "&" : "?") + "_=" + w : "")
            }
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && k.setRequestHeader("Content-Type", p.contentType),
            p.ifModified && (r = r || p.url,
            Q.lastModified[r] && k.setRequestHeader("If-Modified-Since", Q.lastModified[r]),
            Q.etag[r] && k.setRequestHeader("If-None-Match", Q.etag[r])),
            k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Fe + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers)
                k.setRequestHeader(d, p.headers[d]);
            if (!p.beforeSend || !1 !== p.beforeSend.call(f, k, p) && 2 !== _) {
                x = "abort";
                for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    k[d](p[d]);
                if (s = $(Pe, p, n, k)) {
                    k.readyState = 1,
                    u && h.trigger("ajaxSend", [k, p]),
                    p.async && p.timeout > 0 && (l = setTimeout(function() {
                        k.abort("timeout")
                    }, p.timeout));
                    try {
                        _ = 1,
                        s.send(y, i)
                    } catch (t) {
                        if (!(_ < 2))
                            throw t;
                        i(-1, t)
                    }
                } else
                    i(-1, "No Transport");
                return k
            }
            return k.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qe = []
      , He = /\?/
      , Be = /(=)\?(?=&|$)|\?\?/
      , Re = Q.now();
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = qe.pop() || Q.expando + "_" + Re++;
            return this[t] = !0,
            t
        }
    }),
    Q.ajaxPrefilter("json jsonp", function(n, i, r) {
        var a, o, s, l = n.data, c = n.url, u = !1 !== n.jsonp, d = u && Be.test(c), p = u && !d && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(l);
        if ("jsonp" === n.dataTypes[0] || d || p)
            return a = n.jsonpCallback = Q.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
            o = t[a],
            d ? n.url = c.replace(Be, "$1" + a) : p ? n.data = l.replace(Be, "$1" + a) : u && (n.url += (He.test(c) ? "&" : "?") + n.jsonp + "=" + a),
            n.converters["script json"] = function() {
                return s || Q.error(a + " was not called"),
                s[0]
            }
            ,
            n.dataTypes[0] = "json",
            t[a] = function() {
                s = arguments
            }
            ,
            r.always(function() {
                t[a] = o,
                n[a] && (n.jsonpCallback = i.jsonpCallback,
                qe.push(a)),
                s && Q.isFunction(o) && o(s[0]),
                s = o = e
            }),
            "script"
    }),
    Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(t) {
                return Q.globalEval(t),
                t
            }
        }
    }),
    Q.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    Q.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return {
                send: function(r, a) {
                    n = B.createElement("script"),
                    n.async = "async",
                    t.scriptCharset && (n.charset = t.scriptCharset),
                    n.src = t.url,
                    n.onload = n.onreadystatechange = function(t, r) {
                        (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        i && n.parentNode && i.removeChild(n),
                        n = e,
                        r || a(200, "success"))
                    }
                    ,
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var ze, Ue = !!t.ActiveXObject && function() {
        for (var t in ze)
            ze[t](0, 1)
    }
    , Ve = 0;
    Q.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && A() || j()
    }
    : A,
    function(t) {
        Q.extend(Q.support, {
            ajax: !!t,
            cors: !!t && "withCredentials"in t
        })
    }(Q.ajaxSettings.xhr()),
    Q.support.ajax && Q.ajaxTransport(function(n) {
        if (!n.crossDomain || Q.support.cors) {
            var i;
            return {
                send: function(r, a) {
                    var o, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    !n.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in r)
                            l.setRequestHeader(s, r[s])
                    } catch (t) {}
                    l.send(n.hasContent && n.data || null),
                    i = function(t, r) {
                        var s, c, u, d, p;
                        try {
                            if (i && (r || 4 === l.readyState))
                                if (i = e,
                                o && (l.onreadystatechange = Q.noop,
                                Ue && delete ze[o]),
                                r)
                                    4 !== l.readyState && l.abort();
                                else {
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    d = {},
                                    (p = l.responseXML) && p.documentElement && (d.xml = p);
                                    try {
                                        d.text = l.responseText
                                    } catch (t) {}
                                    try {
                                        c = l.statusText
                                    } catch (t) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (t) {
                            r || a(-1, t)
                        }
                        d && a(s, c, d, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(i, 0) : (o = ++Ve,
                    Ue && (ze || (ze = {},
                    Q(t).unload(Ue)),
                    ze[o] = i),
                    l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    });
    var We, Xe, Ye = /^(?:toggle|show|hide)$/, Je = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$","i"), Ke = /queueHooks$/, Ge = [I], Qe = {
        "*": [function(t, e) {
            var n, i, r = this.createTween(t, e), a = Je.exec(e), o = r.cur(), s = +o || 0, l = 1, c = 20;
            if (a) {
                if (n = +a[2],
                "px" !== (i = a[3] || (Q.cssNumber[t] ? "" : "px")) && s) {
                    s = Q.css(r.elem, t, !0) || n || 1;
                    do {
                        l = l || ".5",
                        s /= l,
                        Q.style(r.elem, t, s + i)
                    } while (l !== (l = r.cur() / o) && 1 !== l && --c)
                }
                r.unit = i,
                r.start = s,
                r.end = a[1] ? s + (a[1] + 1) * n : n
            }
            return r
        }
        ]
    };
    Q.Animation = Q.extend(D, {
        tweener: function(t, e) {
            Q.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; i < r; i++)
                n = t[i],
                Qe[n] = Qe[n] || [],
                Qe[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? Ge.unshift(t) : Ge.push(t)
        }
    }),
    Q.Tween = M,
    M.prototype = {
        constructor: M,
        init: function(t, e, n, i, r, a) {
            this.elem = t,
            this.prop = n,
            this.easing = r || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = a || (Q.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = M.propHooks[this.prop];
            return t && t.get ? t.get(this) : M.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = e = Q.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : M.propHooks._default.set(this),
            this
        }
    },
    M.prototype.init.prototype = M.prototype,
    M.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Q.css(t.elem, t.prop, !1, ""),
                e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                Q.fx.step[t.prop] ? Q.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Q.cssProps[t.prop]] || Q.cssHooks[t.prop]) ? Q.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    Q.each(["toggle", "show", "hide"], function(t, e) {
        var n = Q.fn[e];
        Q.fn[e] = function(i, r, a) {
            return null == i || "boolean" == typeof i || !t && Q.isFunction(i) && Q.isFunction(r) ? n.apply(this, arguments) : this.animate(P(e, !0), i, r, a)
        }
    }),
    Q.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(g).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = Q.isEmptyObject(t)
              , a = Q.speed(e, n, i)
              , o = function() {
                var e = D(this, Q.extend({}, t), a);
                r && e.stop(!0)
            };
            return r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(t, n, i) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = n,
            n = t,
            t = e),
            n && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , n = null != t && t + "queueHooks"
                  , a = Q.timers
                  , o = Q._data(this);
                if (n)
                    o[n] && o[n].stop && r(o[n]);
                else
                    for (n in o)
                        o[n] && o[n].stop && Ke.test(n) && r(o[n]);
                for (n = a.length; n--; )
                    a[n].elem === this && (null == t || a[n].queue === t) && (a[n].anim.stop(i),
                    e = !1,
                    a.splice(n, 1));
                (e || !i) && Q.dequeue(this, t)
            })
        }
    }),
    Q.each({
        slideDown: P("show"),
        slideUp: P("hide"),
        slideToggle: P("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        Q.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    Q.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? Q.extend({}, t) : {
            complete: n || !n && e || Q.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !Q.isFunction(e) && e
        };
        return i.duration = Q.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Q.fx.speeds ? Q.fx.speeds[i.duration] : Q.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            Q.isFunction(i.old) && i.old.call(this),
            i.queue && Q.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    Q.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    },
    Q.timers = [],
    Q.fx = M.prototype.init,
    Q.fx.tick = function() {
        var t, n = Q.timers, i = 0;
        for (We = Q.now(); i < n.length; i++)
            !(t = n[i])() && n[i] === t && n.splice(i--, 1);
        n.length || Q.fx.stop(),
        We = e
    }
    ,
    Q.fx.timer = function(t) {
        t() && Q.timers.push(t) && !Xe && (Xe = setInterval(Q.fx.tick, Q.fx.interval))
    }
    ,
    Q.fx.interval = 13,
    Q.fx.stop = function() {
        clearInterval(Xe),
        Xe = null
    }
    ,
    Q.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Q.fx.step = {},
    Q.expr && Q.expr.filters && (Q.expr.filters.animated = function(t) {
        return Q.grep(Q.timers, function(e) {
            return t === e.elem
        }).length
    }
    );
    var Ze = /^(?:body|html)$/i;
    Q.fn.offset = function(t) {
        if (arguments.length)
            return t === e ? this : this.each(function(e) {
                Q.offset.setOffset(this, t, e)
            });
        var n, i, r, a, o, s, l, c = {
            top: 0,
            left: 0
        }, u = this[0], d = u && u.ownerDocument;
        if (d)
            return (i = d.body) === u ? Q.offset.bodyOffset(u) : (n = d.documentElement,
            Q.contains(n, u) ? (void 0 !== u.getBoundingClientRect && (c = u.getBoundingClientRect()),
            r = F(d),
            a = n.clientTop || i.clientTop || 0,
            o = n.clientLeft || i.clientLeft || 0,
            s = r.pageYOffset || n.scrollTop,
            l = r.pageXOffset || n.scrollLeft,
            {
                top: c.top + s - a,
                left: c.left + l - o
            }) : c)
    }
    ,
    Q.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop
              , n = t.offsetLeft;
            return Q.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(Q.css(t, "marginTop")) || 0,
            n += parseFloat(Q.css(t, "marginLeft")) || 0),
            {
                top: e,
                left: n
            }
        },
        setOffset: function(t, e, n) {
            var i = Q.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var r, a, o = Q(t), s = o.offset(), l = Q.css(t, "top"), c = Q.css(t, "left"), u = ("absolute" === i || "fixed" === i) && Q.inArray("auto", [l, c]) > -1, d = {}, p = {};
            u ? (p = o.position(),
            r = p.top,
            a = p.left) : (r = parseFloat(l) || 0,
            a = parseFloat(c) || 0),
            Q.isFunction(e) && (e = e.call(t, n, s)),
            null != e.top && (d.top = e.top - s.top + r),
            null != e.left && (d.left = e.left - s.left + a),
            "using"in e ? e.using.call(t, d) : o.css(d)
        }
    },
    Q.fn.extend({
        position: function() {
            if (this[0]) {
                var t = this[0]
                  , e = this.offsetParent()
                  , n = this.offset()
                  , i = Ze.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : e.offset();
                return n.top -= parseFloat(Q.css(t, "marginTop")) || 0,
                n.left -= parseFloat(Q.css(t, "marginLeft")) || 0,
                i.top += parseFloat(Q.css(e[0], "borderTopWidth")) || 0,
                i.left += parseFloat(Q.css(e[0], "borderLeftWidth")) || 0,
                {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || B.body; t && !Ze.test(t.nodeName) && "static" === Q.css(t, "position"); )
                    t = t.offsetParent;
                return t || B.body
            })
        }
    }),
    Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        Q.fn[t] = function(r) {
            return Q.access(this, function(t, r, a) {
                var o = F(t);
                if (a === e)
                    return o ? n in o ? o[n] : o.document.documentElement[r] : t[r];
                o ? o.scrollTo(i ? Q(o).scrollLeft() : a, i ? a : Q(o).scrollTop()) : t[r] = a
            }, t, r, arguments.length, null)
        }
    }),
    Q.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        Q.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, r) {
            Q.fn[r] = function(r, a) {
                var o = arguments.length && (i || "boolean" != typeof r)
                  , s = i || (!0 === r || !0 === a ? "margin" : "border");
                return Q.access(this, function(n, i, r) {
                    var a;
                    return Q.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (a = n.documentElement,
                    Math.max(n.body["scroll" + t], a["scroll" + t], n.body["offset" + t], a["offset" + t], a["client" + t])) : r === e ? Q.css(n, i, r, s) : Q.style(n, i, r, s)
                }, n, o ? r : e, o, null)
            }
        })
    }),
    t.jQuery = t.$ = Q,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return Q
    })
}(window),
define("commonFunc", ["require", "exports", "module"], function(t, e, n) {
    (function(t) {}
    ).prototype = {
        init: function() {}
    };
    var i = {
        tip: function(t, e) {
            $("#main-tip").text(t).fadeIn("fast"),
            setTimeout(function() {
                $("#main-tip").removeClass("main-tip-danger").fadeOut()
            }, 1500 | e)
        },
        warningTip: function(t, e) {
            $("#main-tip").addClass("main-tip-danger").text(t).fadeIn("fast"),
            setTimeout(function() {
                $("#main-tip").removeClass("main-tip-danger").fadeOut()
            }, 2e3 | e)
        },
        getUrlParam: function(t, e) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
              , i = t.search.substr(1).match(n);
            return i ? unescape(i[2]) : null
        },
        getQueryString: function(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)","i")
              , n = window.location.search.substr(1).match(e);
            return null !== n ? unescape(n[2]) : null
        },
        accAdd: function(t, e) {
            var n, i, r, a = 0;
            try {
                n = t.toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                i = e.toString().split(".")[1].length
            } catch (t) {
                i = 0
            }
            if (r = Math.abs(n - i),
            a = Math.pow(10, Math.max(n, i)),
            r > 0) {
                var o = Math.pow(10, r);
                n > i ? (t = Number(t.toString().replace(".", "")),
                e = Number(e.toString().replace(".", "")) * o) : (t = Number(t.toString().replace(".", "")) * o,
                e = Number(e.toString().replace(".", "")))
            } else
                t = Number(t.toString().replace(".", "")),
                e = Number(e.toString().replace(".", ""));
            return (t + e) / a
        },
        accSub: function(t, e) {
            var n, i, r, a = 0;
            try {
                n = t.toString().split(".")[1].length
            } catch (t) {
                n = 0
            }
            try {
                i = e.toString().split(".")[1].length
            } catch (t) {
                i = 0
            }
            if (r = Math.abs(n - i),
            a = Math.pow(10, Math.max(n, i)),
            r > 0) {
                var o = Math.pow(10, r);
                n > i ? (t = Number(t.toString().replace(".", "")),
                e = Number(e.toString().replace(".", "")) * o) : (t = Number(t.toString().replace(".", "")) * o,
                e = Number(e.toString().replace(".", "")))
            } else
                t = Number(t.toString().replace(".", "")),
                e = Number(e.toString().replace(".", ""));
            return (t - e) / a
        },
        accMul: function(t, e) {
            var n = 0
              , i = t.toString()
              , r = e.toString();
            try {
                n += i.split(".")[1].length
            } catch (t) {}
            try {
                n += r.split(".")[1].length
            } catch (t) {}
            return Number(i.replace(".", "") * Number(r.replace(".", "")) / Math.pow(10, n))
        },
        accDiv: function(t, e) {
            var n, i, r = 0, a = 0;
            try {
                r = t.toString().split(".")[1].length
            } catch (t) {}
            try {
                a = e.toString().split(".")[1].length
            } catch (t) {}
            return n = Number(t.toString().replace(".", "")),
            i = Number(e.toString().replace(".", "")),
            n / i * Math.pow(10, a - r)
        },
        timeCalc: function(t) {
            var e = Math.floor(t / 86400)
              , n = t % 86400
              , i = Math.floor(n / 3600)
              , r = n % 3600
              , a = Math.floor(r / 60)
              , o = r % 60;
            return e + "天 " + i + "时 " + a + "分 " + Math.round(o) + "秒 "
        },
        digitsTranform: function(t, e, n, i, r) {
            var a;
            return null === (a = null === t ? null : isNaN(t) ? null : Number(t)) ? a = r ? "--" : a : 0 === a ? a = i ? a + "%" : a : (a = n ? (100 * a).toFixed(e) : a.toFixed(e),
            a = +a,
            a = i ? a + "%" : a)
        }
    };
    n.exports = i
}),
define("VueAjax", ["require", "exports", "module", "commonFunc"], function(t, e, n) {
    var i = t("commonFunc")
      , r = {
        url: "",
        data: {
            isajax: 1,
            datatype: "jsonp"
        },
        type: "post",
        dataType: "jsonp",
        error: function(t, e, n) {
            console.log("errorCallback", n)
        },
        defaultWarning: function(t) {
            i.warningTip(t.errormsg)
        }
    }
      , a = {
        jsonp: function(t) {
            var e = {};
            e.url = t.url,
            t.data ? (e.data = t.data,
            e.data.isajax = 1,
            e.data.datatype = "jsonp") : e.data = r.data,
            e.type = r.type,
            e.dataType = r.dataType,
            e.success = function(e) {
                if (0 === e.errorcode)
                    t.success(e.result);
                else {
                    if (-1 === e.errorcode && "用户验证失败" === e.errormsg) {
                        var n = $("#ths_iframe_login_popup").css("display");
                        return void ("none" !== n && void 0 !== n || window.LoginInstance.show())
                    }
                    t.resulterror ? t.resulterror(e) : r.defaultWarning(e)
                }
            }
            ,
            e.error = t.error ? t.error : r.error,
            $.ajax(e)
        }
    };
    n.exports = a
}),
define("VueConfig", ["require", "exports", "module"], function(t, e, n) {
    var i = {
        ajax: {
            common: {
                getauthdata: "/platform/user/getauthdata",
                getprofitrate: "platform/simuaccount/getprofitrate/"
            },
            "study-mf": {
                getStrategys: "/platform/factors/getalgorithmslist/",
                folderRename: "/platform/folder/modify/",
                folderDelete: "/platform/folder/delete/",
                folderAdd: "/platform/folder/add/",
                strategysRename: "/platform/factors/update/",
                strategysSave: "/platform/factors/update/",
                strategysDelete: "/platform/algorithms/delete/",
                strategysAdd: "/platform/factors/add/",
                strategysMove: "/platform/algorithms/move/",
                factorsRun: "/platform/factors/run/",
                factorsCancel: "/platform/factors/cancelbacktest/",
                getFactors: "/platform/factors/getlist/",
                getBacktestIds: "/platform/factors/getbacktestinfobygroup/",
                getBacktestDetail: "/platform/backtest/backtestdetail/",
                getTradeDayList: "/platform/backtest/gettradedays/",
                analyze: "/platform/factors/analyze/",
                getStrategyInfo: "/platform/backtest/queryinfo/"
            },
            "study-strategy": {
                getStrategys: "/platform/algorithms/queryall2/",
                folderRename: "/platform/folder/modify/",
                folderDelete: "/platform/folder/delete/",
                folderAdd: "/platform/folder/add/",
                strategysSave: "/platform/algorithms/update/",
                strategysMove: "/platform/algorithms/move/",
                strategysDelete: "/platform/algorithms/delete/",
                strategysRename: "/platform/algorithms/update/",
                strategysAdd: "/platform/algorithms/add/",
                getAceCode: "/platform/algorithms/queryinfo/",
                getBacktestId: "/platform/backtest/querylatest/",
                getAceMessage: "/platform/utils/getautocode/",
                getLastBacktestId: "/platform/backtest/querylatest/",
                getBacktestDetail: "/platform/backtest/backtestdetail/",
                getTradeDayList: "/platform/backtest/gettradedays/",
                getBacktestRecord: "/platform/backtest/getrecord/",
                run: "/platform/backtest/run/",
                getBacktestInfo: "/platform/backtest/queryinfo/",
                cancel: "/platform/backtest/cancel/",
                getBacktestlog: "/platform/backtest/backtestlog/",
                backtestLoop: "/platform/backtest/backtestloop/",
                recordclone: "/platform/algoclone/recordclone/",
                queryRunInfo: "/platform/algorithms/queryruninfo/",
                cancelSelected: "/platform/backtest/cancelselected/",
                addAlgoNote: "/platform/algorithms/add/"
            },
            "backtest-result": {
                getSimuaccountInfo: "/platform/simuaccount/query",
                getYbidList: "/platform/simuaccount/getyybidlist",
                getAddAccount: "/platform/simuaccount/add/",
                submitBindAccount: "/platform/simuaccount/open",
                getStrategysInfo: "/platform/backtest/queryinfo/",
                getBacktestDetail: "/platform/backtest/backtestdetail",
                getbacktestPerformance: "/platform/backtest/backtestperformance",
                getCustomDrawing: "/platform/backtest/getrecord",
                getbacktestByGroup: "/platform/factors/getbacktestinfobygroup",
                getTradelogByDate: "/platform/simuaccount/gettradelogbydate",
                getTradeLog: "/platform/backtest/tradelog",
                getPositionAccountData: "/platform/backtest/stindicator",
                getDailyPositionGains: "/platform/backtest/dailypositiongains",
                getLogsData: "/platform/backtest/backtestlog",
                getProfitData: "/platform/backtest/backspecificinfo",
                getRiskAnalysis: "/platform/backtest/getriskanalysis",
                getBrinsonAnalysis: "/platform/backtest/getbrinsonanalysis",
                getAssetAnalysis: "/platform/backtest/getassetanalysis",
                addTrade: "/platform/simupaper/add/",
                cancelCombination: "/platform/backtest/cancelattributionanalysis",
                getCombinationData: "/platform/backtest/attributionanalysis",
                getTransactionData: "/platform/backtest/tradeoperate",
                getUpperShelfPower: "/platform/creative/isuploaded",
                getIdentityAuth: "/platform/creative/identityauth",
                getStrategyAdd: "/platform/creative/strategyadd"
            },
            "strategy-lib": {
                getStrategylibList: "/platform/algorithms/goodlib",
                getStrategys: "/platform/algorithms/queryall2/",
                strategysSave: "/platform/algorithms/update/",
                getAceCode: "/platform/algorithms/queryinfo/",
                getAceMessage: "/platform/utils/getautocode/",
                getBacktestDetail: "/platform/backtest/backtestdetail/",
                getTradeDayList: "/platform/backtest/gettradedays/",
                getBacktestRecord: "/platform/backtest/getrecord/",
                getBacktestInfo: "/platform/backtest/queryinfo/",
                getBacktestlog: "/platform/backtest/backtestlog/",
                strategysAdd: "/platform/algorithms/add/",
                recordclone: "/platform/algoclone/recordclone/",
                queryclonenum: "/platform/algoclone/queryclonenum",
                researchinfo: "/platform/algorithms/goodlibresearchinfo"
            },
            "strategy-monitor": {
                checkAddedMonitor: "/platform/backtest/checkaddedmonitor",
                getUserMonitorList: "/platform/backtest/queryusermonitor",
                addStrategyMonitor: "/platform/backtest/startmonitor",
                cancelStrategyMonitor: "/platform/backtest/cancelmonitor"
            }
        },
        dev: {
            getStrategys: "http://quant.10jqka.com.cn/platform/factors/getalgorithmslist/",
            folderRename: "http://quant.10jqka.com.cn/platform/folder/modify/",
            folderDelete: "http://quant.10jqka.com.cn/platform/folder/delete/",
            folderAdd: "http://quant.10jqka.com.cn/platform/folder/add/",
            strategysRename: "http://quant.10jqka.com.cn/platform/factors/update/",
            strategysSave: "http://quant.10jqka.com.cn/platform/factors/update/",
            strategysDelete: "http://quant.10jqka.com.cn/platform/algorithms/delete/",
            strategysAdd: "http://quant.10jqka.com.cn/platform/factors/add/",
            strategysMove: "http://quant.10jqka.com.cn/platform/algorithms/move/",
            factorsRun: "http://quant.10jqka.com.cn/platform/factors/run/",
            getFactors: "http://quant.10jqka.com.cn/platform/factors/getlist/",
            getBacktestIds: "http://quant.10jqka.com.cn/platform/factors/getbacktestinfobygroup/",
            getBacktestDetail: "http://quant.10jqka.com.cn/platform/backtest/backtestdetail/",
            getTradeDayList: "http://quant.10jqka.com.cn/platform/backtest/gettradedays/",
            analyze: "http://quant.10jqka.com.cn/platform/factors/analyze/"
        }
    };
    n.exports = i
}),
function() {
    var t = this
      , e = t._
      , n = {}
      , i = Array.prototype
      , r = Object.prototype
      , a = Function.prototype
      , o = i.push
      , s = i.slice
      , l = i.concat
      , c = r.toString
      , u = r.hasOwnProperty
      , d = i.forEach
      , p = i.map
      , f = i.reduce
      , h = i.reduceRight
      , v = i.filter
      , m = i.every
      , g = i.some
      , y = i.indexOf
      , b = i.lastIndexOf
      , _ = Array.isArray
      , x = Object.keys
      , k = a.bind
      , w = function(t) {
        return t instanceof w ? t : this instanceof w ? void (this._wrapped = t) : new w(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w),
    exports._ = w) : t._ = w,
    w.VERSION = "1.6.0";
    var C = w.each = w.forEach = function(t, e, i) {
        if (null == t)
            return t;
        if (d && t.forEach === d)
            t.forEach(e, i);
        else if (t.length === +t.length) {
            for (var r = 0, a = t.length; a > r; r++)
                if (e.call(i, t[r], r, t) === n)
                    return
        } else
            for (var o = w.keys(t), r = 0, a = o.length; a > r; r++)
                if (e.call(i, t[o[r]], o[r], t) === n)
                    return;
        return t
    }
    ;
    w.map = w.collect = function(t, e, n) {
        var i = [];
        return null == t ? i : p && t.map === p ? t.map(e, n) : (C(t, function(t, r, a) {
            i.push(e.call(n, t, r, a))
        }),
        i)
    }
    ;
    var $ = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []),
        f && t.reduce === f)
            return i && (e = w.bind(e, i)),
            r ? t.reduce(e, n) : t.reduce(e);
        if (C(t, function(t, a, o) {
            r ? n = e.call(i, n, t, a, o) : (n = t,
            r = !0)
        }),
        !r)
            throw new TypeError($);
        return n
    }
    ,
    w.reduceRight = w.foldr = function(t, e, n, i) {
        var r = arguments.length > 2;
        if (null == t && (t = []),
        h && t.reduceRight === h)
            return i && (e = w.bind(e, i)),
            r ? t.reduceRight(e, n) : t.reduceRight(e);
        var a = t.length;
        if (a !== +a) {
            var o = w.keys(t);
            a = o.length
        }
        if (C(t, function(s, l, c) {
            l = o ? o[--a] : --a,
            r ? n = e.call(i, n, t[l], l, c) : (n = t[l],
            r = !0)
        }),
        !r)
            throw new TypeError($);
        return n
    }
    ,
    w.find = w.detect = function(t, e, n) {
        var i;
        return S(t, function(t, r, a) {
            return e.call(n, t, r, a) ? (i = t,
            !0) : void 0
        }),
        i
    }
    ,
    w.filter = w.select = function(t, e, n) {
        var i = [];
        return null == t ? i : v && t.filter === v ? t.filter(e, n) : (C(t, function(t, r, a) {
            e.call(n, t, r, a) && i.push(t)
        }),
        i)
    }
    ,
    w.reject = function(t, e, n) {
        return w.filter(t, function(t, i, r) {
            return !e.call(n, t, i, r)
        }, n)
    }
    ,
    w.every = w.all = function(t, e, i) {
        e || (e = w.identity);
        var r = !0;
        return null == t ? r : m && t.every === m ? t.every(e, i) : (C(t, function(t, a, o) {
            return (r = r && e.call(i, t, a, o)) ? void 0 : n
        }),
        !!r)
    }
    ;
    var S = w.some = w.any = function(t, e, i) {
        e || (e = w.identity);
        var r = !1;
        return null == t ? r : g && t.some === g ? t.some(e, i) : (C(t, function(t, a, o) {
            return r || (r = e.call(i, t, a, o)) ? n : void 0
        }),
        !!r)
    }
    ;
    w.contains = w.include = function(t, e) {
        return null != t && (y && t.indexOf === y ? -1 != t.indexOf(e) : S(t, function(t) {
            return t === e
        }))
    }
    ,
    w.invoke = function(t, e) {
        var n = s.call(arguments, 2)
          , i = w.isFunction(e);
        return w.map(t, function(t) {
            return (i ? e : t[e]).apply(t, n)
        })
    }
    ,
    w.pluck = function(t, e) {
        return w.map(t, w.property(e))
    }
    ,
    w.where = function(t, e) {
        return w.filter(t, w.matches(e))
    }
    ,
    w.findWhere = function(t, e) {
        return w.find(t, w.matches(e))
    }
    ,
    w.max = function(t, e, n) {
        if (!e && w.isArray(t) && t[0] === +t[0] && t.length < 65535)
            return Math.max.apply(Math, t);
        var i = -1 / 0
          , r = -1 / 0;
        return C(t, function(t, a, o) {
            var s = e ? e.call(n, t, a, o) : t;
            s > r && (i = t,
            r = s)
        }),
        i
    }
    ,
    w.min = function(t, e, n) {
        if (!e && w.isArray(t) && t[0] === +t[0] && t.length < 65535)
            return Math.min.apply(Math, t);
        var i = 1 / 0
          , r = 1 / 0;
        return C(t, function(t, a, o) {
            var s = e ? e.call(n, t, a, o) : t;
            r > s && (i = t,
            r = s)
        }),
        i
    }
    ,
    w.shuffle = function(t) {
        var e, n = 0, i = [];
        return C(t, function(t) {
            e = w.random(n++),
            i[n - 1] = i[e],
            i[e] = t
        }),
        i
    }
    ,
    w.sample = function(t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = w.values(t)),
        t[w.random(t.length - 1)]) : w.shuffle(t).slice(0, Math.max(0, e))
    }
    ;
    var T = function(t) {
        return null == t ? w.identity : w.isFunction(t) ? t : w.property(t)
    };
    w.sortBy = function(t, e, n) {
        return e = T(e),
        w.pluck(w.map(t, function(t, i, r) {
            return {
                value: t,
                index: i,
                criteria: e.call(n, t, i, r)
            }
        }).sort(function(t, e) {
            var n = t.criteria
              , i = e.criteria;
            if (n !== i) {
                if (n > i || void 0 === n)
                    return 1;
                if (i > n || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }), "value")
    }
    ;
    var E = function(t) {
        return function(e, n, i) {
            var r = {};
            return n = T(n),
            C(e, function(a, o) {
                var s = n.call(i, a, o, e);
                t(r, s, a)
            }),
            r
        }
    };
    w.groupBy = E(function(t, e, n) {
        w.has(t, e) ? t[e].push(n) : t[e] = [n]
    }),
    w.indexBy = E(function(t, e, n) {
        t[e] = n
    }),
    w.countBy = E(function(t, e) {
        w.has(t, e) ? t[e]++ : t[e] = 1
    }),
    w.sortedIndex = function(t, e, n, i) {
        n = T(n);
        for (var r = n.call(i, e), a = 0, o = t.length; o > a; ) {
            var s = a + o >>> 1;
            n.call(i, t[s]) < r ? a = s + 1 : o = s
        }
        return a
    }
    ,
    w.toArray = function(t) {
        return t ? w.isArray(t) ? s.call(t) : t.length === +t.length ? w.map(t, w.identity) : w.values(t) : []
    }
    ,
    w.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : w.keys(t).length
    }
    ,
    w.first = w.head = w.take = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : s.call(t, 0, e)
    }
    ,
    w.initial = function(t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e))
    }
    ,
    w.last = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }
    ,
    w.rest = w.tail = w.drop = function(t, e, n) {
        return s.call(t, null == e || n ? 1 : e)
    }
    ,
    w.compact = function(t) {
        return w.filter(t, w.identity)
    }
    ;
    var A = function(t, e, n) {
        return e && w.every(t, w.isArray) ? l.apply(n, t) : (C(t, function(t) {
            w.isArray(t) || w.isArguments(t) ? e ? o.apply(n, t) : A(t, e, n) : n.push(t)
        }),
        n)
    };
    w.flatten = function(t, e) {
        return A(t, e, [])
    }
    ,
    w.without = function(t) {
        return w.difference(t, s.call(arguments, 1))
    }
    ,
    w.partition = function(t, e) {
        var n = []
          , i = [];
        return C(t, function(t) {
            (e(t) ? n : i).push(t)
        }),
        [n, i]
    }
    ,
    w.uniq = w.unique = function(t, e, n, i) {
        w.isFunction(e) && (i = n,
        n = e,
        e = !1);
        var r = n ? w.map(t, n, i) : t
          , a = []
          , o = [];
        return C(r, function(n, i) {
            (e ? i && o[o.length - 1] === n : w.contains(o, n)) || (o.push(n),
            a.push(t[i]))
        }),
        a
    }
    ,
    w.union = function() {
        return w.uniq(w.flatten(arguments, !0))
    }
    ,
    w.intersection = function(t) {
        var e = s.call(arguments, 1);
        return w.filter(w.uniq(t), function(t) {
            return w.every(e, function(e) {
                return w.contains(e, t)
            })
        })
    }
    ,
    w.difference = function(t) {
        var e = l.apply(i, s.call(arguments, 1));
        return w.filter(t, function(t) {
            return !w.contains(e, t)
        })
    }
    ,
    w.zip = function() {
        for (var t = w.max(w.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++)
            e[n] = w.pluck(arguments, "" + n);
        return e
    }
    ,
    w.object = function(t, e) {
        if (null == t)
            return {};
        for (var n = {}, i = 0, r = t.length; r > i; i++)
            e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
        return n
    }
    ,
    w.indexOf = function(t, e, n) {
        if (null == t)
            return -1;
        var i = 0
          , r = t.length;
        if (n) {
            if ("number" != typeof n)
                return i = w.sortedIndex(t, e),
                t[i] === e ? i : -1;
            i = 0 > n ? Math.max(0, r + n) : n
        }
        if (y && t.indexOf === y)
            return t.indexOf(e, n);
        for (; r > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ,
    w.lastIndexOf = function(t, e, n) {
        if (null == t)
            return -1;
        var i = null != n;
        if (b && t.lastIndexOf === b)
            return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var r = i ? n : t.length; r--; )
            if (t[r] === e)
                return r;
        return -1
    }
    ,
    w.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0,
        t = 0),
        n = arguments[2] || 1;
        for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, a = new Array(i); i > r; )
            a[r++] = t,
            t += n;
        return a
    }
    ;
    var j = function() {};
    w.bind = function(t, e) {
        var n, i;
        if (k && t.bind === k)
            return k.apply(t, s.call(arguments, 1));
        if (!w.isFunction(t))
            throw new TypeError;
        return n = s.call(arguments, 2),
        i = function() {
            if (!(this instanceof i))
                return t.apply(e, n.concat(s.call(arguments)));
            j.prototype = t.prototype;
            var r = new j;
            j.prototype = null;
            var a = t.apply(r, n.concat(s.call(arguments)));
            return Object(a) === a ? a : r
        }
    }
    ,
    w.partial = function(t) {
        var e = s.call(arguments, 1);
        return function() {
            for (var n = 0, i = e.slice(), r = 0, a = i.length; a > r; r++)
                i[r] === w && (i[r] = arguments[n++]);
            for (; n < arguments.length; )
                i.push(arguments[n++]);
            return t.apply(this, i)
        }
    }
    ,
    w.bindAll = function(t) {
        var e = s.call(arguments, 1);
        if (0 === e.length)
            throw new Error("bindAll must be passed function names");
        return C(e, function(e) {
            t[e] = w.bind(t[e], t)
        }),
        t
    }
    ,
    w.memoize = function(t, e) {
        var n = {};
        return e || (e = w.identity),
        function() {
            var i = e.apply(this, arguments);
            return w.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
        }
    }
    ,
    w.delay = function(t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }
    ,
    w.defer = function(t) {
        return w.delay.apply(w, [t, 1].concat(s.call(arguments, 1)))
    }
    ,
    w.throttle = function(t, e, n) {
        var i, r, a, o = null, s = 0;
        n || (n = {});
        var l = function() {
            s = !1 === n.leading ? 0 : w.now(),
            o = null,
            a = t.apply(i, r),
            i = r = null
        };
        return function() {
            var c = w.now();
            s || !1 !== n.leading || (s = c);
            var u = e - (c - s);
            return i = this,
            r = arguments,
            0 >= u ? (clearTimeout(o),
            o = null,
            s = c,
            a = t.apply(i, r),
            i = r = null) : o || !1 === n.trailing || (o = setTimeout(l, u)),
            a
        }
    }
    ,
    w.debounce = function(t, e, n) {
        var i, r, a, o, s, l = function() {
            var c = w.now() - o;
            e > c ? i = setTimeout(l, e - c) : (i = null,
            n || (s = t.apply(a, r),
            a = r = null))
        };
        return function() {
            a = this,
            r = arguments,
            o = w.now();
            var c = n && !i;
            return i || (i = setTimeout(l, e)),
            c && (s = t.apply(a, r),
            a = r = null),
            s
        }
    }
    ,
    w.once = function(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0,
            e = t.apply(this, arguments),
            t = null,
            e)
        }
    }
    ,
    w.wrap = function(t, e) {
        return w.partial(e, t)
    }
    ,
    w.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, n = t.length - 1; n >= 0; n--)
                e = [t[n].apply(this, e)];
            return e[0]
        }
    }
    ,
    w.after = function(t, e) {
        return function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }
    ,
    w.keys = function(t) {
        if (!w.isObject(t))
            return [];
        if (x)
            return x(t);
        var e = [];
        for (var n in t)
            w.has(t, n) && e.push(n);
        return e
    }
    ,
    w.values = function(t) {
        for (var e = w.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++)
            i[r] = t[e[r]];
        return i
    }
    ,
    w.pairs = function(t) {
        for (var e = w.keys(t), n = e.length, i = new Array(n), r = 0; n > r; r++)
            i[r] = [e[r], t[e[r]]];
        return i
    }
    ,
    w.invert = function(t) {
        for (var e = {}, n = w.keys(t), i = 0, r = n.length; r > i; i++)
            e[t[n[i]]] = n[i];
        return e
    }
    ,
    w.functions = w.methods = function(t) {
        var e = [];
        for (var n in t)
            w.isFunction(t[n]) && e.push(n);
        return e.sort()
    }
    ,
    w.extend = function(t) {
        return C(s.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    t[n] = e[n]
        }),
        t
    }
    ,
    w.pick = function(t) {
        var e = {}
          , n = l.apply(i, s.call(arguments, 1));
        return C(n, function(n) {
            n in t && (e[n] = t[n])
        }),
        e
    }
    ,
    w.omit = function(t) {
        var e = {}
          , n = l.apply(i, s.call(arguments, 1));
        for (var r in t)
            w.contains(n, r) || (e[r] = t[r]);
        return e
    }
    ,
    w.defaults = function(t) {
        return C(s.call(arguments, 1), function(e) {
            if (e)
                for (var n in e)
                    void 0 === t[n] && (t[n] = e[n])
        }),
        t
    }
    ,
    w.clone = function(t) {
        return w.isObject(t) ? w.isArray(t) ? t.slice() : w.extend({}, t) : t
    }
    ,
    w.tap = function(t, e) {
        return e(t),
        t
    }
    ;
    var N = function(t, e, n, i) {
        if (t === e)
            return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof w && (t = t._wrapped),
        e instanceof w && (e = e._wrapped);
        var r = c.call(t);
        if (r != c.call(e))
            return !1;
        switch (r) {
        case "[object String]":
            return t == String(e);
        case "[object Number]":
            return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e;
        case "[object RegExp]":
            return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e)
            return !1;
        for (var a = n.length; a--; )
            if (n[a] == t)
                return i[a] == e;
        var o = t.constructor
          , s = e.constructor;
        if (o !== s && !(w.isFunction(o) && o instanceof o && w.isFunction(s) && s instanceof s) && "constructor"in t && "constructor"in e)
            return !1;
        n.push(t),
        i.push(e);
        var l = 0
          , u = !0;
        if ("[object Array]" == r) {
            if (l = t.length,
            u = l == e.length)
                for (; l-- && (u = N(t[l], e[l], n, i)); )
                    ;
        } else {
            for (var d in t)
                if (w.has(t, d) && (l++,
                !(u = w.has(e, d) && N(t[d], e[d], n, i))))
                    break;
            if (u) {
                for (d in e)
                    if (w.has(e, d) && !l--)
                        break;
                u = !l
            }
        }
        return n.pop(),
        i.pop(),
        u
    };
    w.isEqual = function(t, e) {
        return N(t, e, [], [])
    }
    ,
    w.isEmpty = function(t) {
        if (null == t)
            return !0;
        if (w.isArray(t) || w.isString(t))
            return 0 === t.length;
        for (var e in t)
            if (w.has(t, e))
                return !1;
        return !0
    }
    ,
    w.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }
    ,
    w.isArray = _ || function(t) {
        return "[object Array]" == c.call(t)
    }
    ,
    w.isObject = function(t) {
        return t === Object(t)
    }
    ,
    C(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        w["is" + t] = function(e) {
            return c.call(e) == "[object " + t + "]"
        }
    }),
    w.isArguments(arguments) || (w.isArguments = function(t) {
        return !(!t || !w.has(t, "callee"))
    }
    ),
    "function" != typeof /./ && (w.isFunction = function(t) {
        return "function" == typeof t
    }
    ),
    w.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }
    ,
    w.isNaN = function(t) {
        return w.isNumber(t) && t != +t
    }
    ,
    w.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" == c.call(t)
    }
    ,
    w.isNull = function(t) {
        return null === t
    }
    ,
    w.isUndefined = function(t) {
        return void 0 === t
    }
    ,
    w.has = function(t, e) {
        return u.call(t, e)
    }
    ,
    w.noConflict = function() {
        return t._ = e,
        this
    }
    ,
    w.identity = function(t) {
        return t
    }
    ,
    w.constant = function(t) {
        return function() {
            return t
        }
    }
    ,
    w.property = function(t) {
        return function(e) {
            return e[t]
        }
    }
    ,
    w.matches = function(t) {
        return function(e) {
            if (e === t)
                return !0;
            for (var n in t)
                if (t[n] !== e[n])
                    return !1;
            return !0
        }
    }
    ,
    w.times = function(t, e, n) {
        for (var i = Array(Math.max(0, t)), r = 0; t > r; r++)
            i[r] = e.call(n, r);
        return i
    }
    ,
    w.random = function(t, e) {
        return null == e && (e = t,
        t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    }
    ,
    w.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var O = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    O.unescape = w.invert(O.escape);
    var D = {
        escape: new RegExp("[" + w.keys(O.escape).join("") + "]","g"),
        unescape: new RegExp("(" + w.keys(O.unescape).join("|") + ")","g")
    };
    w.each(["escape", "unescape"], function(t) {
        w[t] = function(e) {
            return null == e ? "" : ("" + e).replace(D[t], function(e) {
                return O[t][e]
            })
        }
    }),
    w.result = function(t, e) {
        if (null != t) {
            var n = t[e];
            return w.isFunction(n) ? n.call(t) : n
        }
    }
    ,
    w.mixin = function(t) {
        C(w.functions(t), function(e) {
            var n = w[e] = t[e];
            w.prototype[e] = function() {
                var t = [this._wrapped];
                return o.apply(t, arguments),
                F.call(this, n.apply(w, t))
            }
        })
    }
    ;
    var L = 0;
    w.uniqueId = function(t) {
        var e = ++L + "";
        return t ? t + e : e
    }
    ,
    w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/
      , M = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , P = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(t, e, n) {
        var i;
        n = w.defaults({}, n, w.templateSettings);
        var r = new RegExp([(n.escape || I).source, (n.interpolate || I).source, (n.evaluate || I).source].join("|") + "|$","g")
          , a = 0
          , o = "__p+='";
        t.replace(r, function(e, n, i, r, s) {
            return o += t.slice(a, s).replace(P, function(t) {
                return "\\" + M[t]
            }),
            n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
            i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
            r && (o += "';\n" + r + "\n__p+='"),
            a = s + e.length,
            e
        }),
        o += "';\n",
        n.variable || (o = "with(obj||{}){\n" + o + "}\n"),
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            i = new Function(n.variable || "obj","_",o)
        } catch (t) {
            throw t.source = o,
            t
        }
        if (e)
            return i(e, w);
        var s = function(t) {
            return i.call(this, t, w)
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + o + "}",
        s
    }
    ,
    w.chain = function(t) {
        return w(t).chain()
    }
    ;
    var F = function(t) {
        return this._chain ? w(t).chain() : t
    };
    w.mixin(w),
    C(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = i[t];
        w.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" != t && "splice" != t || 0 !== n.length || delete n[0],
            F.call(this, n)
        }
    }),
    C(["concat", "join", "slice"], function(t) {
        var e = i[t];
        w.prototype[t] = function() {
            return F.call(this, e.apply(this._wrapped, arguments))
        }
    }),
    w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    "function" == typeof define && define.amd && define("underscore", [], function() {
        return w
    })
}
.call(this),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("backbone", ["underscore", "jquery", "exports"], function(n, i, r) {
            t.Backbone = e(t, r, n, i)
        });
    else if ("undefined" != typeof exports) {
        var n = require("underscore");
        e(t, exports, n)
    } else
        t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$)
}(this, function(t, e, n, i) {
    var r = t.Backbone
      , a = []
      , o = a.slice;
    e.VERSION = "1.1.2",
    e.$ = i,
    e.noConflict = function() {
        return t.Backbone = r,
        this
    }
    ,
    e.emulateHTTP = !1,
    e.emulateJSON = !1;
    var s = e.Events = {
        on: function(t, e, n) {
            return c(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}),
            (this._events[t] || (this._events[t] = [])).push({
                callback: e,
                context: n,
                ctx: n || this
            }),
            this) : this
        },
        once: function(t, e, i) {
            if (!c(this, "once", t, [e, i]) || !e)
                return this;
            var r = this
              , a = n.once(function() {
                r.off(t, a),
                e.apply(this, arguments)
            });
            return a._callback = e,
            this.on(t, a, i)
        },
        off: function(t, e, i) {
            var r, a, o, s, l, u, d, p;
            if (!this._events || !c(this, "off", t, [e, i]))
                return this;
            if (!t && !e && !i)
                return this._events = void 0,
                this;
            for (s = t ? [t] : n.keys(this._events),
            l = 0,
            u = s.length; l < u; l++)
                if (t = s[l],
                o = this._events[t]) {
                    if (this._events[t] = r = [],
                    e || i)
                        for (d = 0,
                        p = o.length; d < p; d++)
                            a = o[d],
                            (e && e !== a.callback && e !== a.callback._callback || i && i !== a.context) && r.push(a);
                    r.length || delete this._events[t]
                }
            return this
        },
        trigger: function(t) {
            if (!this._events)
                return this;
            var e = o.call(arguments, 1);
            if (!c(this, "trigger", t, e))
                return this;
            var n = this._events[t]
              , i = this._events.all;
            return n && u(n, e),
            i && u(i, arguments),
            this
        },
        stopListening: function(t, e, i) {
            var r = this._listeningTo;
            if (!r)
                return this;
            var a = !e && !i;
            i || "object" != typeof e || (i = this),
            t && ((r = {})[t._listenId] = t);
            for (var o in r)
                t = r[o],
                t.off(e, i, this),
                (a || n.isEmpty(t._events)) && delete this._listeningTo[o];
            return this
        }
    }
      , l = /\s+/
      , c = function(t, e, n, i) {
        if (!n)
            return !0;
        if ("object" == typeof n) {
            for (var r in n)
                t[e].apply(t, [r, n[r]].concat(i));
            return !1
        }
        if (l.test(n)) {
            for (var a = n.split(l), o = 0, s = a.length; o < s; o++)
                t[e].apply(t, [a[o]].concat(i));
            return !1
        }
        return !0
    }
      , u = function(t, e) {
        var n, i = -1, r = t.length, a = e[0], o = e[1], s = e[2];
        switch (e.length) {
        case 0:
            for (; ++i < r; )
                (n = t[i]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++i < r; )
                (n = t[i]).callback.call(n.ctx, a);
            return;
        case 2:
            for (; ++i < r; )
                (n = t[i]).callback.call(n.ctx, a, o);
            return;
        case 3:
            for (; ++i < r; )
                (n = t[i]).callback.call(n.ctx, a, o, s);
            return;
        default:
            for (; ++i < r; )
                (n = t[i]).callback.apply(n.ctx, e);
            return
        }
    }
      , d = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(d, function(t, e) {
        s[e] = function(e, i, r) {
            return (this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = n.uniqueId("l"))] = e,
            r || "object" != typeof i || (r = this),
            e[t](i, r, this),
            this
        }
    }),
    s.bind = s.on,
    s.unbind = s.off,
    n.extend(e, s);
    var p = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}),
        this.cid = n.uniqueId("c"),
        this.attributes = {},
        e.collection && (this.collection = e.collection),
        e.parse && (i = this.parse(i, e) || {}),
        i = n.defaults({}, i, n.result(this, "defaults")),
        this.set(i, e),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    n.extend(p.prototype, s, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(t) {
            return n.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return n.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        set: function(t, e, i) {
            var r, a, o, s, l, c, u, d;
            if (null == t)
                return this;
            if ("object" == typeof t ? (a = t,
            i = e) : (a = {})[t] = e,
            i || (i = {}),
            !this._validate(a, i))
                return !1;
            o = i.unset,
            l = i.silent,
            s = [],
            c = this._changing,
            this._changing = !0,
            c || (this._previousAttributes = n.clone(this.attributes),
            this.changed = {}),
            d = this.attributes,
            u = this._previousAttributes,
            this.idAttribute in a && (this.id = a[this.idAttribute]);
            for (r in a)
                e = a[r],
                n.isEqual(d[r], e) || s.push(r),
                n.isEqual(u[r], e) ? delete this.changed[r] : this.changed[r] = e,
                o ? delete d[r] : d[r] = e;
            if (!l) {
                s.length && (this._pending = i);
                for (var p = 0, f = s.length; p < f; p++)
                    this.trigger("change:" + s[p], this, d[s[p]], i)
            }
            if (c)
                return this;
            if (!l)
                for (; this._pending; )
                    i = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, i);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(t, e) {
            return this.set(t, void 0, n.extend({}, e, {
                unset: !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes)
                e[i] = void 0;
            return this.set(e, n.extend({}, t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return !!this.hasChanged() && n.clone(this.changed);
            var e, i = !1, r = this._changing ? this._previousAttributes : this.attributes;
            for (var a in t)
                n.isEqual(r[a], e = t[a]) || ((i || (i = {}))[a] = e);
            return i
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = this
              , i = t.success;
            return t.success = function(n) {
                if (!e.set(e.parse(n, t), t))
                    return !1;
                i && i(e, n, t),
                e.trigger("sync", e, n, t)
            }
            ,
            P(this, t),
            this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var r, a, o, s = this.attributes;
            if (null == t || "object" == typeof t ? (r = t,
            i = e) : (r = {})[t] = e,
            i = n.extend({
                validate: !0
            }, i),
            r && !i.wait) {
                if (!this.set(r, i))
                    return !1
            } else if (!this._validate(r, i))
                return !1;
            r && i.wait && (this.attributes = n.extend({}, s, r)),
            void 0 === i.parse && (i.parse = !0);
            var l = this
              , c = i.success;
            return i.success = function(t) {
                l.attributes = s;
                var e = l.parse(t, i);
                if (i.wait && (e = n.extend(r || {}, e)),
                n.isObject(e) && !l.set(e, i))
                    return !1;
                c && c(l, t, i),
                l.trigger("sync", l, t, i)
            }
            ,
            P(this, i),
            a = this.isNew() ? "create" : i.patch ? "patch" : "update",
            "patch" === a && (i.attrs = r),
            o = this.sync(a, this, i),
            r && i.wait && (this.attributes = s),
            o
        },
        destroy: function(t) {
            t = t ? n.clone(t) : {};
            var e = this
              , i = t.success
              , r = function() {
                e.trigger("destroy", e, e.collection, t)
            };
            if (t.success = function(n) {
                (t.wait || e.isNew()) && r(),
                i && i(e, n, t),
                e.isNew() || e.trigger("sync", e, n, t)
            }
            ,
            this.isNew())
                return t.success(),
                !1;
            P(this, t);
            var a = this.sync("delete", this, t);
            return t.wait || r(),
            a
        },
        url: function() {
            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
            return this.isNew() ? t : t.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({}, n.extend(t || {}, {
                validate: !0
            }))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate)
                return !0;
            t = n.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(e, {
                validationError: i
            })),
            !1)
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(f, function(t) {
        p.prototype[t] = function() {
            var e = o.call(arguments);
            return e.unshift(this.attributes),
            n[t].apply(n, e)
        }
    });
    var h = e.Collection = function(t, e) {
        e || (e = {}),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, n.extend({
            silent: !0
        }, e))
    }
      , v = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , m = {
        add: !0,
        remove: !1
    };
    n.extend(h.prototype, s, {
        model: p,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, n.extend({
                merge: !1
            }, e, m))
        },
        remove: function(t, e) {
            var i = !n.isArray(t);
            t = i ? [t] : n.clone(t),
            e || (e = {});
            var r, a, o, s;
            for (r = 0,
            a = t.length; r < a; r++)
                (s = t[r] = this.get(t[r])) && (delete this._byId[s.id],
                delete this._byId[s.cid],
                o = this.indexOf(s),
                this.models.splice(o, 1),
                this.length--,
                e.silent || (e.index = o,
                s.trigger("remove", s, this, e)),
                this._removeReference(s, e));
            return i ? t[0] : t
        },
        set: function(t, e) {
            e = n.defaults({}, e, v),
            e.parse && (t = this.parse(t, e));
            var i = !n.isArray(t);
            t = i ? t ? [t] : [] : n.clone(t);
            var r, a, o, s, l, c, u, d = e.at, f = this.model, h = this.comparator && null == d && !1 !== e.sort, m = n.isString(this.comparator) ? this.comparator : null, g = [], y = [], b = {}, _ = e.add, x = e.merge, k = e.remove, w = !(h || !_ || !k) && [];
            for (r = 0,
            a = t.length; r < a; r++) {
                if (l = t[r] || {},
                o = l instanceof p ? s = l : l[f.prototype.idAttribute || "id"],
                c = this.get(o))
                    k && (b[c.cid] = !0),
                    x && (l = l === s ? s.attributes : l,
                    e.parse && (l = c.parse(l, e)),
                    c.set(l, e),
                    h && !u && c.hasChanged(m) && (u = !0)),
                    t[r] = c;
                else if (_) {
                    if (!(s = t[r] = this._prepareModel(l, e)))
                        continue;
                    g.push(s),
                    this._addReference(s, e)
                }
                s = c || s,
                !w || !s.isNew() && b[s.id] || w.push(s),
                b[s.id] = !0
            }
            if (k) {
                for (r = 0,
                a = this.length; r < a; ++r)
                    b[(s = this.models[r]).cid] || y.push(s);
                y.length && this.remove(y, e)
            }
            if (g.length || w && w.length)
                if (h && (u = !0),
                this.length += g.length,
                null != d)
                    for (r = 0,
                    a = g.length; r < a; r++)
                        this.models.splice(d + r, 0, g[r]);
                else {
                    w && (this.models.length = 0);
                    var C = w || g;
                    for (r = 0,
                    a = C.length; r < a; r++)
                        this.models.push(C[r])
                }
            if (u && this.sort({
                silent: !0
            }),
            !e.silent) {
                for (r = 0,
                a = g.length; r < a; r++)
                    (s = g[r]).trigger("add", s, this, e);
                (u || w && w.length) && this.trigger("sort", this, e)
            }
            return i ? t[0] : t
        },
        reset: function(t, e) {
            e || (e = {});
            for (var i = 0, r = this.models.length; i < r; i++)
                this._removeReference(this.models[i], e);
            return e.previousModels = this.models,
            this._reset(),
            t = this.add(t, n.extend({
                silent: !0
            }, e)),
            e.silent || this.trigger("reset", this, e),
            t
        },
        push: function(t, e) {
            return this.add(t, n.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t),
            e
        },
        unshift: function(t, e) {
            return this.add(t, n.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t),
            e
        },
        slice: function() {
            return o.apply(this.models, arguments)
        },
        get: function(t) {
            if (null != t)
                return this._byId[t] || this._byId[t.id] || this._byId[t.cid]
        },
        at: function(t) {
            return this.models[t]
        },
        where: function(t, e) {
            return n.isEmpty(t) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var n in t)
                    if (t[n] !== e.get(n))
                        return !1;
                return !0
            })
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}),
            n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
            t.silent || this.trigger("sort", this, t),
            this
        },
        pluck: function(t) {
            return n.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            t = t ? n.clone(t) : {},
            void 0 === t.parse && (t.parse = !0);
            var e = t.success
              , i = this;
            return t.success = function(n) {
                var r = t.reset ? "reset" : "set";
                i[r](n, t),
                e && e(i, n, t),
                i.trigger("sync", i, n, t)
            }
            ,
            P(this, t),
            this.sync("read", this, t)
        },
        create: function(t, e) {
            if (e = e ? n.clone(e) : {},
            !(t = this._prepareModel(t, e)))
                return !1;
            e.wait || this.add(t, e);
            var i = this
              , r = e.success;
            return e.success = function(t, n) {
                e.wait && i.add(t, e),
                r && r(t, n, e)
            }
            ,
            t.save(null, e),
            t
        },
        parse: function(t, e) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (t instanceof p)
                return t;
            e = e ? n.clone(e) : {},
            e.collection = this;
            var i = new this.model(t,e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e),
            !1) : i
        },
        _addReference: function(t, e) {
            this._byId[t.cid] = t,
            null != t.id && (this._byId[t.id] = t),
            t.collection || (t.collection = this),
            t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t, e) {
            this === t.collection && delete t.collection,
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, n, i) {
            ("add" !== t && "remove" !== t || n === this) && ("destroy" === t && this.remove(e, i),
            e && t === "change:" + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)],
            null != e.id && (this._byId[e.id] = e)),
            this.trigger.apply(this, arguments))
        }
    });
    var g = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(g, function(t) {
        h.prototype[t] = function() {
            var e = o.call(arguments);
            return e.unshift(this.models),
            n[t].apply(n, e)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y, function(t) {
        h.prototype[t] = function(e, i) {
            var r = n.isFunction(e) ? e : function(t) {
                return t.get(e)
            }
            ;
            return n[t](this.models, r, i)
        }
    });
    var b = e.View = function(t) {
        this.cid = n.uniqueId("view"),
        t || (t = {}),
        n.extend(this, n.pick(t, x)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , _ = /^(\S+)\s*(.*)$/
      , x = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(b.prototype, s, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(t, n) {
            return this.$el && this.undelegateEvents(),
            this.$el = t instanceof e.$ ? t : e.$(t),
            this.el = this.$el[0],
            !1 !== n && this.delegateEvents(),
            this
        },
        delegateEvents: function(t) {
            if (!t && !(t = n.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var e in t) {
                var i = t[e];
                if (n.isFunction(i) || (i = this[t[e]]),
                i) {
                    var r = e.match(_)
                      , a = r[1]
                      , o = r[2];
                    i = n.bind(i, this),
                    a += ".delegateEvents" + this.cid,
                    "" === o ? this.$el.on(a, i) : this.$el.on(a, o, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"), !1);
            else {
                var t = n.extend({}, n.result(this, "attributes"));
                this.id && (t.id = n.result(this, "id")),
                this.className && (t.class = n.result(this, "className"));
                var i = e.$("<" + n.result(this, "tagName") + ">").attr(t);
                this.setElement(i, !1)
            }
        }
    }),
    e.sync = function(t, i, r) {
        var a = w[t];
        n.defaults(r || (r = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var o = {
            type: a,
            dataType: "json"
        };
        if (r.url || (o.url = n.result(i, "url") || M()),
        null != r.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json",
        o.data = JSON.stringify(r.attrs || i.toJSON(r))),
        r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
        o.data = o.data ? {
            model: o.data
        } : {}),
        r.emulateHTTP && ("PUT" === a || "DELETE" === a || "PATCH" === a)) {
            o.type = "POST",
            r.emulateJSON && (o.data._method = a);
            var s = r.beforeSend;
            r.beforeSend = function(t) {
                if (t.setRequestHeader("X-HTTP-Method-Override", a),
                s)
                    return s.apply(this, arguments)
            }
        }
        "GET" === o.type || r.emulateJSON || (o.processData = !1),
        "PATCH" === o.type && k && (o.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var l = r.xhr = e.ajax(n.extend(o, r));
        return i.trigger("request", i, l, r),
        l
    }
    ;
    var k = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , w = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    }
    ;
    var C = e.Router = function(t) {
        t || (t = {}),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , $ = /\((.*?)\)/g
      , S = /(\(\?)?:\w+/g
      , T = /\*\w+/g
      , E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(C.prototype, s, {
        initialize: function() {},
        route: function(t, i, r) {
            n.isRegExp(t) || (t = this._routeToRegExp(t)),
            n.isFunction(i) && (r = i,
            i = ""),
            r || (r = this[i]);
            var a = this;
            return e.history.route(t, function(n) {
                var o = a._extractParameters(t, n);
                a.execute(r, o),
                a.trigger.apply(a, ["route:" + i].concat(o)),
                a.trigger("route", i, o),
                e.history.trigger("route", a, i, o)
            }),
            this
        },
        execute: function(t, e) {
            t && t.apply(this, e)
        },
        navigate: function(t, n) {
            return e.history.navigate(t, n),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(E, "\\$&").replace($, "(?:$1)?").replace(S, function(t, e) {
                return e ? t : "([^/?]+)"
            }).replace(T, "([^?]*?)"),
            new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return n.map(i, function(t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            })
        }
    });
    var A = e.History = function() {
        this.handlers = [],
        n.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , j = /^[#\/]|\s+$/g
      , N = /^\/+|\/+$/g
      , O = /msie [\w.]+/
      , D = /\/$/
      , L = /#.*$/;
    A.started = !1,
    n.extend(A.prototype, s, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getFragment: function(t, e) {
            if (null == t)
                if (this._hasPushState || !this._wantsHashChange || e) {
                    t = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(D, "");
                    t.indexOf(n) || (t = t.slice(n.length))
                } else
                    t = this.getHash();
            return t.replace(j, "")
        },
        start: function(t) {
            if (A.started)
                throw new Error("Backbone.history has already been started");
            A.started = !0,
            this.options = n.extend({
                root: "/"
            }, this.options, t),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var i = this.getFragment()
              , r = document.documentMode
              , a = O.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
            if (this.root = ("/" + this.root + "/").replace(N, "/"),
            a && this._wantsHashChange) {
                var o = e.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = o.hide().appendTo("body")[0].contentWindow,
                this.navigate(i)
            }
            this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !a ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = i;
            var s = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && s.hash && (this.fragment = this.getHash().replace(j, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            if (!this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            A.started = !1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function(t) {
            var e = this.getFragment();
            if (e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
            e === this.fragment)
                return !1;
            this.iframe && this.navigate(e),
            this.loadUrl()
        },
        loadUrl: function(t) {
            return t = this.fragment = this.getFragment(t),
            n.any(this.handlers, function(e) {
                if (e.route.test(t))
                    return e.callback(t),
                    !0
            })
        },
        navigate: function(t, e) {
            if (!A.started)
                return !1;
            e && !0 !== e || (e = {
                trigger: !!e
            });
            var n = this.root + (t = this.getFragment(t || ""));
            if (t = t.replace(L, ""),
            this.fragment !== t) {
                if (this.fragment = t,
                "" === t && "/" !== n && (n = n.slice(0, -1)),
                this._hasPushState)
                    this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(n);
                    this._updateHash(this.location, t, e.replace),
                    this.iframe && t !== this.getFragment(this.getHash(this.iframe)) && (e.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, t, e.replace))
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, n) {
            if (n) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e)
            } else
                t.hash = "#" + e
        }
    }),
    e.history = new A;
    var I = function(t, e) {
        var i, r = this;
        i = t && n.has(t, "constructor") ? t.constructor : function() {
            return r.apply(this, arguments)
        }
        ,
        n.extend(i, r, e);
        var a = function() {
            this.constructor = i
        };
        return a.prototype = r.prototype,
        i.prototype = new a,
        t && n.extend(i.prototype, t),
        i.__super__ = r.prototype,
        i
    };
    p.extend = h.extend = C.extend = b.extend = A.extend = I;
    var M = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , P = function(t, e) {
        var n = e.error;
        e.error = function(i) {
            n && n(t, i, e),
            t.trigger("error", t, i, e)
        }
    };
    return e
}),
define("../lib/cookies", [], function() {
    return {
        get: function(t) {
            for (var e = t + "=", n = e.length, i = document.cookie.length, r = 0, a = 0; r < i; ) {
                if (a = r + n,
                document.cookie.substring(r, a) === e) {
                    var o = document.cookie.indexOf(";", a);
                    -1 === o && (o = document.cookie.length);
                    var s = "";
                    try {
                        s = decodeURIComponent(document.cookie.substring(a, o))
                    } catch (t) {
                        console.log(t)
                    }
                    return unescape(s)
                }
                if (0 === (r = document.cookie.indexOf(" ", r) + 1))
                    break
            }
            return !1
        },
        set: function(t, e, n) {
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var r = "expires=" + i.toUTCString();
            document.cookie = t + "=" + e + "; " + r + "; " + document.domain + "; /"
        },
        remove: function(t) {
            this.set(t, "", -1)
        }
    }
}),
define("../models/common/ajaxbase", ["module", "backbone"], function(t, e) {
    return e.Model.extend({
        defaults: {
            errorcode: "",
            errormsg: "",
            result: ""
        },
        url: "",
        callback: "",
        type: "post",
        dataType: "jsonp",
        baseUrl: "/",
        checkThsUserIdFailed: -1,
        ajaxRequest: "",
        defaultsLoginErrorCallback: function() {
            var t = $("#ths_iframe_login_popup").css("display");
            "none" !== t && void 0 !== t || window.LoginInstance.show()
        },
        definedLoginErrorCallback: null,
        request: function(t) {
            var e = this;
            t = t || {},
            e._request(t, e.url, e.callback)
        },
        requestEx: function(t, e, n) {
            var i = this;
            t = t || {},
            i._request(t, e, n)
        },
        _request: function(t, e, n) {
            $.support.cors = !0;
            var i = this;
            t.isajax = 1,
            this.ajaxRequest = $.ajax({
                url: e,
                data: t,
                type: i.type,
                dataType: i.dataType,
                success: function(t) {
                    if (t) {
                        if (t.errorcode === i.checkThsUserIdFailed && "用户验证失败" === t.errormsg)
                            return "function" == typeof i.definedLoginErrorCallback ? void i.definedLoginErrorCallback() : void i.defaultsLoginErrorCallback();
                        i.set(t),
                        "" !== n && n(t, this)
                    }
                },
                error: function(t, e, r) {
                    i.set({
                        errorcode: -777,
                        errormsg: "请求失败，请稍后再试",
                        result: ""
                    }),
                    "abort" !== e && "" !== n && n({
                        errorcode: -777,
                        errormsg: "请求失败，请稍后再试",
                        result: ""
                    })
                }
            })
        },
        sortData: function(t, e, n, i) {
            var r = this;
            return n = n.sort(r.sortTableFun(t, e)),
            r.getPageData(i, n)
        },
        sortTableFun: function(t, e) {
            var n = "asc" === e ? ">" : "<";
            return new Function("a","b","return a." + t + n + "b." + t + " ? 1 : -1")
        },
        getPageData: function(t, e, n) {
            for (var i = 1, r = [], a = 0; a < n.length; a++) {
                if (t === Math.ceil(i / e) && r.push(n[a]),
                t < Math.ceil(i / e)) {
                    i++;
                    break
                }
                i++
            }
            return {
                data: r,
                length: n.length
            }
        },
        searchData: function(t, e, n) {
            var i = [];
            for (var r in n)
                "all" !== t && -1 === ("" + n[r][e]).indexOf(t) || i.push(n[r]);
            return i
        }
    })
}),
define("../models/usermanagement/querymodule", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        _url: "platform/usermanagement/",
        _run: function(t) {
            t.datatype = "jsonp",
            this.request(t)
        },
        query: function(t, e) {
            this.callback = function(t) {
                e(t.result)
            }
            ,
            this.url = this.baseUrl + this._url + "getmodulesinfo/",
            this._run(t)
        },
        svaeMessage: function(t, e) {
            this.callback = function(t) {
                e(t.result)
            }
            ,
            this.url = this.baseUrl + this._url + "savemessage/",
            this._run(t)
        }
    }))
}),
define("../views/common/feedback", ["backbone", "../../models/usermanagement/querymodule"], function(t, e) {
    return new (t.View.extend({
        el: "body",
        events: {
            "click #quant_feedback .descripe-item": "toggleItem",
            "click #quant_feedback .submit-form": "submit",
            "click #quant_feedback .popbox-btn-close": "close"
        },
        show: function() {
            $("#over_layer").toggleClass("show-layer"),
            $("body").append('<div class="advise-window" id="quant_feedback"><span class="icon popbox-btn-close"></span><div class="advise-title">您想吐槽的原因是：</div><div class="advise-descripe"><div class="descripe-item">数据不够全面</div><div class="descripe-item">性能不够好，回测速度过慢</div><div class="descripe-item">回测结果不正确</div><div class="descripe-item">无法进行实盘交易</div><div class="descripe-item">无法销售策略变现</div><div class="descripe-item">编程体验差</div><div class="descripe-item">其他</div></div><div class="say-more">再说点什么？</div><textarea rows="3" placeholder="使用中有哪些不爽或者错误，请马上反馈给我~"></textarea><div class="advise-bottom"><span>联系邮箱 ：</span><input id="quant_feedback_email" type="text" name="email" placeholder="请留下您的邮箱，我们会及时答复您"/><button  type="button" class="submit-form">提交</button></div></div>')
        },
        close: function() {
            $("#quant_feedback").remove(),
            $("#over_layer").toggleClass("show-layer")
        },
        toggleItem: function(t) {
            $(t.currentTarget).toggleClass("blue-style")
        },
        submit: function(t) {
            var n = []
              , i = $("#quant_feedback_email").val();
            if ($("#quant_feedback .descripe-item").each(function() {
                $(this).hasClass("blue-style") && n.push($(this).text())
            }),
            !/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(i))
                return void alert("请输入正确的邮件格式");
            var r = {
                cause: n,
                message: $("textarea").val(),
                mail: i
            }
              , a = function(t) {
                "boolean" == typeof t && t ? (alert("保存成功"),
                $("#quant_feedback").remove(),
                $("#over_layer").toggleClass("show-layer")) : alert(t)
            };
            e.svaeMessage(r, a)
        }
    }))
}),
define("../models/header/checkComments", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        url: "platform/help/",
        _run: function(t, e, n) {
            t.datatype = this.dataType,
            this._request(t, e, n)
        },
        checkNewComments: function(t, e) {
            var n = this.baseUrl + "platform/user/checknewcomments"
              , i = function(t) {
                if (t.errorcode)
                    return void e(t);
                e(t.result)
            };
            this._run(t, n, i)
        }
    }))
}),
define("../models/header/searchHelp", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        url: "platform/help/",
        _run: function(t, e, n) {
            t.datatype = this.dataType,
            this._request(t, e, n)
        },
        search: function(t, e) {
            var n = this
              , i = JSON.stringify(t)
              , r = this.baseUrl + "platform/help/search"
              , a = function(t) {
                if (t.errorcode)
                    return void e(t);
                var r = {};
                r[i] = t,
                n.set(r),
                e(t.result)
            };
            if (this.has(i))
                return void a(this.get(i));
            this._run(t, r, a)
        }
    }))
}),
define("../models/header/sklearnEnable", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        _url: "platform/user/getauthdata",
        _run: function(t) {
            t.datatype = "jsonp",
            this.request(t)
        },
        requestIsAbled: function(t, e) {
            this.url = this.baseUrl + this._url,
            this.callback = function(t) {
                t = t.result,
                e(t)
            }
            ,
            this._run(t)
        }
    }))
}),
define("../models/header/helpList", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        _url: "platform/help/queryblock",
        _run: function(t) {
            t.datatype = "jsonp",
            this.request(t)
        },
        requestHelpList: function(t, e) {
            this.url = this.baseUrl + this._url,
            this.callback = function(t) {
                t = t.result,
                e(t)
            }
            ,
            this._run(t)
        }
    }))
}),
define("../models/header/feedback", ["../common/ajaxbase"], function(t) {
    return new (t.extend({
        _url: "platform/utils/sendmailoperate",
        _run: function(t) {
            t.datatype = "jsonp",
            this.request(t)
        },
        requestFeedBack: function(t, e) {
            this.url = this.baseUrl + this._url,
            this.callback = function(t) {
                e(t)
            }
            ,
            this._run(t)
        }
    }))
}),
define("tpl", [], function() {
    return {
        backreport_result: {
            popbox_opensimu: '<div class="popbox-controller">\n\t<span class="popbox-label">选择账户：</span>\n\t<div class="opensimu-selection">\n\t\t<span class="selection-text"></span>\n\t\t<span class="icon icon-down fr mt5"></span>\n\t\t<ul id="opensimu_options" class="opensimu-options hide">\n\t\t</ul>\n\t</div>\n</div>\n<div id="popboxContainer">\n\t\n</div>'
        },
        header: {
            "search-tips": '\n<ul class="header-search-content-item">\n\t<% $.each(result,function(key,value) {%>\n\t<li class="header-search-content-item-li">\n\t\t<div class="search-content-item-title"><span><%=value.parent_name%></span><span>＞</span><span><%=value.title%></span></div>\n\t\t<div class="search-content-item-content">\n\n\t\t\t<% $.each(value.child, function(key,secLevel) {%>\n\t\t\t\t<% \tvar leafCount = 0;\n\t\t\t\t\tif (_.keys(secLevel.child).length >= 1) {\n\t\t\t\t\t\t$.each(secLevel.child, function(key, trdLevel) {\n\t\t\t\t\t\t\tif (_.keys(trdLevel.child).length > 0){\n\t\t\t\t\t\t\t\t$.each(trdLevel.child, function(key, leaf) {\n\t\t\t\t\t\t\t\t\tleafCount++;\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tleafCount++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t} else {\n\t\t\t\t\t\tleafCount = 1\n\t\t\t\t\t}\n\t\t\t\t%>\n\t\t\t\t<div style="line-height: <%=(37*leafCount-1)%>px" class="search-second-title" tile="<%=secLevel.title%>"><%=secLevel.title%></div>\n\t\t\t\t<ul class="search-thrid-title">\n\t\t\t\t<% var rootHtml = \'help-api.html?t=\' %>\n\t\t\t\t<% if (_.keys(secLevel.child).length < 1) {%>\n\t\t\t\t<li title="<%=secLevel.title%>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/0\' %>"><%=secLevel.title.replace(keywords,repItem)%></a></li>\n\t\t\t\t<% } else { %>\n\t\t\t\t\t<% $.each(secLevel.child, function(key, trdLevel) {%>\n\t\t\t\t\t\t<% if (_.keys(trdLevel.child).length < 1) {%>\n\t\t\t\t\t\t\t<li title="<%=trdLevel.title%>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/\' + secLevel.id %>"><%=trdLevel.title.replace(keywords,repItem)%></a></li>\n\t\t\t\t\t\t<% } else { %>\n\t\t\t\t\t\t\t<% $.each(trdLevel.child, function(key, leaf) {%>\n\t\t\t\t\t\t\t\t<li title="<%= trdLevel.title + \'>\' + leaf.name.substring(0,15) + \'...\' %>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/\' + leaf.id %>"><%= trdLevel.title.replace(keywords,repItem) + \'>\' + leaf.name.replace(keywords,repItem)%></a></li>\n\t\t\t\t\t\t\t<% }); %>\n\t\t\t\t\t\t<% } %>\n\n\t\t\t\t\t<% }); %>\n\t\t\t\t<% } %>\n\t\t\t\t</ul>\n\t\t\t<% }); %>\n\t\t</div>\n\t</li>\n\t<% }); %>\n</ul>\n'
        },
        iframe: {
            "iframe-simu": '<div id="detail_profit" class="trade-trend-content">\n  <div id="detail_profit_data" class="trade-trend-table"></div>\n  <div class="trend-chart-toolbar"><span>缩放:</span>\n    <ul class="toolbar-cyclebox">\n      <li data-zoom="1week" class="cyclebox-item">1周</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="1month" class="cyclebox-item">1月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="3month" class="cyclebox-item">3月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="6month" class="cyclebox-item">6月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="1year" class="cyclebox-item">1年</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="all" class="cyclebox-item cyclebox-item-active">全部</li>\n  </ul>\n  <div class="toolbar-charts-labels">\n      <div class="toolbar-chart-label toolbar-chart-label1"><span class="symbol"></span><span class="text">基准收益</span></div>\n      <div class="toolbar-chart-label toolbar-chart-label2"><span class="symbol"></span><span class="text">策略收益</span></div>\n  </div>\n  <div class="toolbar-datebox"><span>从</span>\n      <input type="text" val="" id="overview_startDate" readonly="readonly"><span>至</span>\n      <input type="text" val="" id="overview_endDate" readonly="readonly">\n  </div>\n</div>\n<div id="trade-trend-chart" class="trade-trend-chart" >\n    <div id="trade-trend-chart1" style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499669951040"><div style="position: relative; overflow: hidden; width: 1531px; height: 200px; cursor: default;"><canvas width="1531" height="200" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1531px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgba(240, 240, 240, 0.901961); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; font-family: &quot;Microsoft YaHei&quot;; line-height: 21px; padding: 5px; left: 410.405px; top: 25px;"><span style="color: #333;font-size:13px;"><span style=""> 2017-07-05 星期三</span> <span><br><span style="color:#C23531">策略收益:<span style="font-weight : 700">0.00%</span></span><br><span style="color:#51acce">基准收益:  <span style="font-weight:700">0.00%</span></span><br></span></span></div></div>\n</div>\n</div>'
        },
        lib: {
            dialog: '<style type="text/css">\n  .plugin-dialog {\n    position: relative;\n    min-height: 135px;\n    min-width: 300px;\n  }\n  .plugin-dialog-btn {\n    float: right; margin-right: 10px; margin-top: 10px; position: static;\n  }\n  .plugin-dialog-footer {\n    bottom: 0;\n    right: 0;\n  }\n</style>\n<%\n  var containerHeight, containerOverflow;\n  if (height === \'auto\') {//默认\n    containerHeight = \'auto\';\n    containerOverflow = \'visible\';\n  } else {\n    containerOverflow = \'auto\';\n    if (isShowBtn) {\n      containerHeight = (parseInt(height) - 80) + \'px\';\n    } else {\n      containerHeight = (parseInt(height) - 37) + \'px\';\n    }\n  }\n %>\n<div class="container-mask" tabindex="1">\n  <div class="container-maskbg"></div>\n  <div\n      class="popbox plugin-dialog"\n      style="margin-left: <%= (- parseInt(width) / 2)  + \'px\' %>; width: <%= width %>; height: <%= height %>"\n      >\n    <div class="icon popbox-btn-close"></div>\n\n    <div class="popbox-title">\n      <div class="text"><%= title %></div>\n    </div>\n\n    <div class="popbox-container" style="overflow: <%= containerOverflow %>; height: <%= containerHeight %>">\n      <%= content %>\n    </div>\n\n    <% if(isShowBtn) { %>\n      <div class="popbox-footer plugin-dialog-footer" style="position: <%= height === \'auto\' ? \'relative\' : \'absolute\' %>">\n        <% if(okBtn) { %>\n          <div class="btn <%= okBtnClass %> plugin-dialog-btn popbox-btn-ok"><%= okBtnTitle %></div>\n        <% } %>\n\n        <% if(cancelBtn) { %>\n          <div class="btn <%= cancelBtnClass %> plugin-dialog-btn popbox-btn-cancel"><%= cancelBtnTitle %></div>\n        <% } %>\n      </div>\n    <% } %>\n\n  </div>\n</div>'
        },
        share: {
            mfstgy: '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个策略</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_mfstgy_options" style="display:none;" class="popbox-selection-options">\n\t\t<p style="text-align:center;padding:10px 0;">数据加载中</p>\n\t</div>\n</div>',
            research: '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个研究</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_rs_options" style="display:none;" class="popbox-selection-options"></div>\n</div>',
            stgy: '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个策略</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_stgy_options" style="display:none;" class="popbox-selection-options">\n\t\t<p style="text-align:center;padding:10px 0;">数据加载中</p>\n\t</div>\n</div>'
        },
        strategy: {
            square_top_list: '<%\n\tfunction parseCodeProfit(num) {\n\t\treturn (num < -100 || num > 9999.99) ? \'--\' : num + \'%\';\n\t}\n%>\n<% $.each(ret.list,function(index,item){ %>\n<li class="mindgo-select-item left-active">\n\t<a class="trade-main" target="_blank" href="stgy.html#bid/<%= item.backtest_id%>">\n\t<div class="trade-reason"></div>\n\t<div class="trade-manage">\n\t\t<span class="fz16 text-el">\n\t\t\t<%= item.name%>\n\t\t</span>\n\t</div>\n\t<div class="trade-intro">\n\t\t<div class="trade-left-intro">\n\t\t\t<p class="intro-precent fz20"><%= item.profit_rate ? (item.profit_rate*100).toFixed(2) : \'--\' %></p>\n\t\t\t<p>累计收益率</p>\n\t\t</div>\n\t\t<span class="vertical-line"></span>\n\t\t<div class="trade-right-intro">\n\t\t\t<div class="right-intro-first">\n\t\t\t\t<span class="intro-stock-name ss_name">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[0] ? item.stock_info[0].stock_name : \'--\' %>\n\t\t\t\t</span>\n\t\t\t\t<span class="intro-stock-count">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[0] ? parseCodeProfit((item.stock_info[0].profit_and_loss_rate*100).toFixed(2)) : \'--\' %>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class="right-intro-second">\n\t\t\t\t<span class="intro-stock-name ss_name">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[1] ? item.stock_info[1].stock_name : \'--\' %>\n\t\t\t\t</span>\n\t\t\t\t<span class="intro-stock-count">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[1] ? parseCodeProfit((item.stock_info[1].profit_and_loss_rate*100).toFixed(2)) : \'--\' %>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</a>\n\t<a href="user.html#user/<%=item.user_id%>">\n\t\t<div class="manage-person">\n\t\t<img class="person-img" src="<%=item.avatar%>">\n\t\t<span class="person-name bg"><%=item.nickname%></span>\n\t</div>\n\t</a>\n</li>\n<%})%>'
        },
        "study-mf": {
            empty: "  <div class=\"u-loading\"><%= message === undefined ? '暂无数据' : message %></div>",
            factor_continuity_detection: '<%if($.type(rst) === \'array\' && rst.length !== 0){%>\n<table class="m-yield_table m-yield_table-continuity">\n                          <thead>\n                            <tr>\n                              <td width="20%">因子截止日</td>\n                              <td width="20%">检测开始日</td>\n                              <td width="20%">检测截止日</td>\n                              <td width="20%">IC</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <%$.each(rst,function(key,value){%>\n                            <tr>\n                              <td><%=value.factor_day%></td>\n                              <td><%=value.check_start_day%></td>\n                              <td><%=value.check_stop_day%></td>\n                              <td><%=value.ic%></td>\n                            </tr>\n                            <%});%>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            factor_contribution_detection: '\n<%if(rst&&$.type(rst.each) ===\'array\'&& rst.each.length !== 0){%>\n<h2 class="tlt">最小二乘法检验(各期)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td rowspan="2">截止日</td>\n                              <td colspan="<%= rst.factor_list.length %>">回归系数</td>\n                              <td rowspan="2">R方</td>\n                              <td colspan="<%= rst.factor_list.length %>">T值</td>\n                              <%if(rst.factor_list.length-1 > 0){%>\n                              <td colspan="<%= rst.factor_list.length-1 %>">推荐因子配置比例(%)</td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.factor_list[i]%></td>\n                            <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                          <%$.each(rst.each,function(keyot,val){%>\n                            <tr>\n                              <td><%=val.enddate%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=val.hgxs[value]%></td>\n                              <%})%>\n                              <td><%=val.rf%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=val.tz[value]%></td>\n                              <%})%>\n                              <%for(var i=0;i< rst.factor_list.length -1; i++){%>\n                              <td><%=val.tz[rst.factor_list[i]]%></td>\n                              <%}%>\n                              <%})%>\n                            </tr>\n                          \n                          </tbody>\n                        </table>\n                        <h2 class="tlt mt15">最小二乘法检验(整体)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td colspan="<%= rst.factor_list.length %>">回归系数</td>\n                              <td rowspan="2">R方</td>\n                              <td colspan="<%= rst.factor_list.length %>">T值</td>\n                              <%if(rst.factor_list.length > 1){%>\n                              <td colspan="<%= rst.factor_list.length-1 %>">推荐因子配置比例(%)</td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.factor_list[i]%></td>\n                            <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=rst.total.hgxs[value]%></td>\n                              <%})%>\n                              <td><%=rst.total.rf%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=rst.total.tz[value]%></td>\n                              <%})%>\n                              <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.total.tz[rst.factor_list[i]]%></td>\n                            <%}%>\n                          </tbody>\n                        \x3c!-- </table>\n                        <h2 class="tlt mt15">主成分回归(各期)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td rowspan="2">截止日</td>\n                              <td colspan="3">回归系数</td>\n                              <td colspan="2">推荐因子配置比例(%)</td>\n                            </tr>\n                            <tr> \n                              <td>ROE</td>\n                              <td>ROA</td>\n                              <td>常数项</td>\n                              <td>ROE</td>\n                              <td>ROA</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                          </tbody>\n                        </table> --\x3e\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            factor_partition_detection: '<%if(rst){%>\n<table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <td></td>\n                              <td>第一组VS最后一组</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>标准差（%）</td>\n                              <td><%=rst.standard%></td>\n                            </tr>\n                            <tr>\n                              <td>胜率（%）</td>\n                              <td><%=rst.win_rate%></td>\n                            </tr>\n                            <tr>\n                              <td>夏普比率</td>\n                              <td><%=rst.sharpe_ratio%></td>\n                            </tr>\n                            <tr>\n                              <td>T-stat</td>\n                              <td><%=rst.t_stat%></td>\n                            </tr>\n                            <tr>\n                              <td>P-Value</td>\n                              <td><%=rst.p_value%></td>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            factor_significance_detection: '<%if(rst){%>\n<table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <td width="20%"></td>\n                              <%if(rst.group_1){%>\n                              <td width="16%">第一组</td>\n                              <%}if(rst.group_2){%>\n                              <td width="16%">第二组</td>\n                              <%}if(rst.group_3){%>\n                              <td width="16%">第三组</td>\n                              <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>超额均值（%）</td>\n                              <td><%= rst.group_1.average_extra_yield%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.average_extra_yield%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.average_extra_yield%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>跟踪误差（%）</td>\n                              <td><%= rst.group_1.tracking_error%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.tracking_error%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.tracking_error%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>信息比率</td>\n                              <td><%= rst.group_1.information_ratio%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.information_ratio%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.information_ratio%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>T-stat</td>\n                              <td><%= rst.group_1.t_stat%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.t_stat%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.t_stat%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>P-Value</td>\n                              <td><%= rst.group_1.p_value%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.p_value%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.p_value%></td>\n                              <%}%>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            factor_yield_detection: '      \n<%if(rst){%>\n      <table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <%$.each(rst.title,function(key,value){%>\n                               <% if(key === 0){%>\n                               <td width="20%"></td>\n                                <%}else{%>\n                                <td width="16%"><%=value%></td>\n                                <%}%>\n                              <%});%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <%$.each(rst.average_yield,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.yield,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.standard,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.max_drawdown,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.sharpe_ratio,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            monthly_effect: '<%if(rst){%>\n<div class="monthly_echart"></div>\n                        <div class="m-month_table">\n                          <ul class="f-cbli">\n                             <li>\n                              <div class="liblock"></div>\n                              <div class="liblock">1月</div>\n                              <div class="liblock">2月</div>\n                              <div class="liblock">3月</div>\n                              <div class="liblock">4月</div>\n                              <div class="liblock">5月</div>\n                              <div class="liblock">6月</div>\n                              <div class="liblock">7月</div>\n                              <div class="liblock">8月</div>\n                              <div class="liblock">9月</div>\n                              <div class="liblock">10月</div>\n                              <div class="liblock">11月</div>\n                              <div class="liblock">12月</div>\n                            </li>\n                          <%$.each(rst,function(key,value){%>\n                            <li>\n                              <div class="liblock"><%=key%></div>\n                              <%$.each(value,function(item,val){%>\n                                <div class="liblock"><%=val%></div>\n                              <%})%>\n                            </li>\n                          <%})%>\n                            \n                          </ul>\n                        </div>\n  <%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
            turnover_analysis: '      <%if(rst){%>\n                            <div class="m-turnover_tab f-cb">\n                              <div class="trunover">换手率</div>\n                              <div class="caclulata">\n                                <select class="j-select_way">\n                                  <option value="number">个数法</option>\n                                  <option value="weight">市值权重法</option>\n                                </select>\n                              </div>\n                              <div class="group">\n                                <select class="j-select_group">\n                                  <option value="1">第一组</option>\n                                  <option value="2">第二组</option>\n                                  <option value="3">第三组</option>\n                                </select>\n                              </div>\n                            </div>\n                            \x3c!-- <div id="chartPic1" style="width: 100%;height: 220px;margin-top: 20px;">\n                            </div> --\x3e \n        <%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n\n'
        },
        trade_addcount: {
            addcount: '<div class="popbox-controller box-sizing">\n\t<label class="popbox-label">账户名称</label>\n\t<input type="text" value="默认账户" class="popbox-inp box-sizing"></input>\n</div>\n\n<div class="popbox-controller popbox-accounttype box-sizing">\n\t<label class="popbox-label">账户类型</label>\n\t<div class="popbox-pos">\n\t\t<div class="popbox-inp box-sizing">请选择账户类型</div>\n\t\t<span class="icon fr icon-down"></span>\n\t\t<div class="popbox-select-box hide">\n\t\t\t<div class="popbox-select-item" data-id="1">股票型账户</div>\n\t\t\t<div class="popbox-select-item" data-id="2">期货型账户</div>\n\t\t\t<div class="popbox-select-item" data-id="3">混合型账户</div>\n\t\t</div>\n\t</div>\n\t\n</div>\t\n\n<div class="popbox-controller popbox-stockmoney box-sizing hide">\n\t<label class="popbox-label">股票资金</label>\n\t<div class="popbox-pos popbox-pos-money">\n\t\t<div class="popbox-inp box-sizing" data-id=""></div>\n\t\t<span class="icon fr icon-down"></span>\n\t\t<div class="popbox-select-box hide">\n\t\t\t\x3c!-- <div class="popbox-select-item" data-id="36072">10</div>\n\t\t\t<div class="popbox-select-item" data-id="36073">50</div>\n\t\t\t<div class="popbox-select-item" data-id="36074">100</div>\n\t\t\t<div class="popbox-select-item" data-id="36075">500</div>\n\t\t\t<div class="popbox-select-item" data-id="36076">700</div> --\x3e\n\t\t</div>\n\t</div>\n\t<span class="popbox-select-item-unit">万元</span>\n</div>\t\n\n\n<div class="popbox-controller popbox-forwardmoney box-sizing hide">\n\t<label class="popbox-label">期货资金</label>\n\t<div class="popbox-pos popbox-pos-money">\n\t\t<div class="popbox-inp box-sizing" data-id=""></div>\n\t\t<span class="icon fr icon-down"></span>\n\n\t\t\n\t\t<div class="popbox-select-box hide">\n\t\t\t\x3c!-- <div class="popbox-select-item" data-id="1154">10</div>\n\t\t\t<div class="popbox-select-item" data-id="1155">50</div>\n\t\t\t<div class="popbox-select-item" data-id="1156">100</div>\n\t\t\t<div class="popbox-select-item" data-id="1157">500</div>\n\t\t\t<div class="popbox-select-item" data-id="1158">700</div> --\x3e\n\t\t</div>\n\t</div>\n\t<span class="popbox-select-item-unit">万元</span>\n</div>\t'
        },
        user: {
            common: '<div class="m-user_head f-cb">\n\t<div class="head_left">\n\t\t<img src="<%=ret.user_info.imgSrc%>" style="width:115px;height: 115px;border-radius: 58px;">\t\n\t</div>\n\t<div class="head_right">\n\t\t<div>\n\t\t\t<h2 class="head"><%=ret.user_info.nickname%></h2>\n\t\t\t<p class="head_content"><%=ret.user_info.description%></p>\n\t\t\t<div class="head_below">\n\t\t\t\t<div class="litbox">\n\t\t\t\t\t<span class="litbox_left">关注:</span>\n\t\t\t\t\t<span class="number"><%=ret.attention_info.attention_num%></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="litbox litbox-right">\n\t\t\t\t\t<span class="litbox_left">粉丝:</span>\n\t\t\t\t\t<span class="number"><%=ret.attention_info.follow_num%></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n',
            information: {
                user_information_control: ' <div class="m-info_list" id="j-view-user_information">\n  </div>',
                user_information_list: ' <%if(ret.count > 0){%>\n  <% _.each(ret.list,function(value){%>\n\t<div class="info-item <%if(value.isread === 0){%>back_grey<%}%>">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="user.html#user/<%= value.userid %>">\n                <img src="<%= imgOperate(value.userid) %>" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <%if(value.type == 1 && value.isreply == 0){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>社区<span>中发布的主题</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n            <%}else if(value.type == 2 && value.isreply == 0){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>策略广场<span>中发布的策略</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n            <%}else if(value.type == 2 && value.isreply == 1){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>策略<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n            <%}else if(value.type == 1 && value.isreply == 1){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>主题<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n            <%}%>\n          </div>\n          <div class="comment-describe " style="max-height: 50px;min-height:25px;line-height: 25px;overflow: hidden;">\n          \x3c!-- <%console.log(\'regReplace\',regReplace)%> --\x3e\n          <span class="comment f-cb"><span class="f-fl">评论内容：</span><div class="comment_content f-fl"><%= regReplace(value.content,self)%></div></span>\n          </div>\n          <div class="info-describe">\n          <span class="data"><%=value.ctime%></span> \n          \x3c!-- <span class="time">17:26:55</span> --\x3e\n          </div>\n        </div>\n    </div>\n    <%});%>\n<%} else {%>\n<p class="u-no-data-alert">无消息！<p>\n<%}%>\n\n      \t\t',
                user_information_tab: '<div class="m-user_tab">\n   \t<div name="pgmao" class="sort-type">\n                <ul>\n                  <li class="btn-order comprehensive-order j-tab_button" style="display: none" data-tab="new_message">最新动态</li>\n                  <li class="btn-order count-rate j-tab_button active-order" data-tab="replay_me">回复我的 <b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:-9px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;"></b></li>\n                </ul>\n              </div>\n</div>\n       ',
                user_information_test: ' <div class="m-info_list" id="j-view-user_information">\n\n    <div class="info-item back_grey">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>评论了你在</span><a href="" class="color_blue">社区</a><span>中发布的主题</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="comment-describe">\n          <span class="comment">评论内容：水水水水水水水水</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n          \t\t\t<img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在</span><a href="" class="color_blue">策略广场</a><span>中发布的策略</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\n\n    <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在主题</span><a href="" class="color_blue">关于回测价格的疑问</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n  <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在策略</span><a href="" class="color_blue">新默认策略</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n </div>\n      \t\t'
            },
            strategy: {
                testlist: '\n <div class="strategy-item-container" id="j-view-user_strategy"> \n <%$.each(ret.list,function(index,value){%>\n              <div class="strategy-content-item"> \n                  // <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n              \t\t  <span class="strategy-item strategy-item-name text-el"><%= value.name %></span> \n                  // </a> \n              \t\t<span class="strategy-item strategy-item-profit <% if(value.profit_rate > 0) {%>rg<%} else if(value.profit_rate < 0) {%>gc<%}%>"><%= value.profit_rate %></span> \n              \t\t<span class="strategy-item strategy-item-count <% if(today_profit_rate > 0) {%>rg<%} else if(today_profit_rate < 0) {%>gc<%}%>"><%= value.today_profit_rate %></span>  \n              \t\t<span class="strategy-item strategy-item-success"><%= value.win_rate %></span> \n              \t\t<span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown %></span>  \n              \t\t<span class="strategy-item strategy-item-info"><%= value.information_ratio %></span>  \n              \t\t<span class="strategy-item strategy-item-runday"><%= value.run_days %></span> \n                \t<div class="strategy-item strategy-item-detail"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  \t\t<div class="icon6 icon-load-more"></div> \n                    </a> \n                \t</div> \n            \t</div> \n            \t<div class="strategy-content-detail <% if (i != 0) {%> hide-content <% } %>"> \n                <a target="_blank" href="<%= stgyUrl %>"> \n                  <div class="full_div"> \n                \t  <div class="content-left-detail"> \n                  \t  <p><%= description%></p> \n                  \t</div> \n                  </div> \n                </a> \n                <div class="personal-detail"> \n                  <a target="_blank" href="user.html#user/<%= userId%>"><img src="<%= picUrl%>"></a> \n                  <a target="_blank" href="user.html#user/<%= userId%>"><span class="personal-name"><%= nickname%></span></a> \n                </div> \n                <div id="<%= listChartId%>" class="content-right-detail"></div> \n              </div> \n\n\n              <%})%>\n            </div>\n',
                user_strategy_card: '\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<ul class="sortshowcontent m-sort_block f-cb" id="j-view-user_strategy">\n  <%$.each(ret.list,function(index,value){%>\n  <li class="sortblock <% if (index % 2 == 1) { %> mr0 <% } %>"> \n                <div class="sortblock-content"> \n                <div class="sortblock-title"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                      <span><%= value.name %></span> \n                    </a> \n                    <div class="sortblock-info"> \n                    <a target="_blank" href="user.html#user/<%= value.user_id %>"> \n                      <img class="sortblock-img" src="<%= value.avatar%>"> \n                    </a> \n                    <a target="_blank" href="user.html#user/<%= value.user_id %>"> \n                      <p class="sortblock-name"><%= value.nickname %></p> \n                    </a> \n                    </div> \n                </div> \n                <div class="sortblock-chart" id="cardchart<%= index %>"></div> \n                <p class="sortblock-desc">\n                  <% if(value.description == "") { %> \n                  暂无该策略逻辑介绍 \n                  <% } else { %> \n                  <%= datamethod.textEllipsis(value.description, 40) %>\n                  <% } %> \n                </p> \n                <ul class="sortblock-datainfo"> \n                   <li> \n                      <div class="profit-content"> \n                          <p class="fz20 profit-rate <% if(value.profit_rate && value.profit_rate > 0) {%>rg<% } else if (value.profit_rate && value.profit_rate < 0) {%>gc<% } %>"><%= dataHandle(value.profit_rate)%></p> \n                          <p>累计收益率</p> \n                      </div> \n                    </li> \n                    <li> \n                      <div class="success-content"> \n                          <p class="fz20 success-rate <% if(value.win_rate && value.win_rate > 0) {%>rg<% } else if (value.win_rate && value.win_rate < 0) {%>gc<% } %>"><%= dataHandle(value.win_rate)%></p> \n                          <p>成功率</p> \n                      </div> \n                    </li> \n                    <li class="noborder"> \n                      <div class="running-content"> \n                          <p class="fz20 running-date"><%= value.run_days%></p> \n                          <p>运行天数</p> \n                      </div> \n                    </li> \n                </ul> \n                <div class="sortblock-detail hide-content"> \n                    <% if (value.trade_log && value.trade_log.length>= 1) { %> \n                      <div class="stock-change-content"> \n                        <% for(var j = 0; j < value.trade_log.length && j < 2; j++) {%> \n                          <% if(value.trade_log.operation_type == "SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "CLOSE_BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">平仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "CLOSE_SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">平仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "OPEN_BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">开仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "OPEN_SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">开仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } %> \n                        <% } %> \n                      </div> \n                    <% } else {%> \n                    <span>今日无调仓</span> \n                    <% } %>\n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                      <div class="btn btn-look-detail">查看详情</div> \n                    </a> \n                  </div> \n                </div> \n            </li>\n        <%})%>\n</ul>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n<div class="pagination-list-card u-pagination f-cb"></div>\n\n\n          ',
                user_strategy_list: '\n\n\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n <div class="strategy-item-container m-sort_list f-cb" id="j-view-user_strategy"> \n            <div class="strategy-title"><span class="strategy-title-item strategy-title-name">策略名称</span><span class="strategy-title-item strategy-profit-count">累计收益率</span><span class="strategy-title-item strategy-today-count">今日收益率</span><span class="strategy-title-item strategy-success-rate">成功率</span><span class="strategy-title-item strategy-max-backtest">最大回撤</span><span class="strategy-title-item strategy-info-rate">信息比率</span><span class="strategy-title-item strategy-run-day">运行天数</span><span class="strategy-title-item strategy-detail">详情</span></div>\n <%$.each(ret.list,function(index,value){%>\n              <div class="strategy-content-item"> \n                   <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n              \t\t  <span class="strategy-item strategy-item-name text-el"><%= value.name ? value.name : \'--\'  %></span> \n                   </a> \n              \t\t<span class="strategy-item strategy-item-profit <% if(value.profit_rate && value.profit_rate > 0) {%>rg<%} else if(value.profit_rate && value.profit_rate < 0) {%>gc<%}%>"><%= dataHandle(value.profit_rate) %></span> \n              \t\t<span class="strategy-item strategy-item-count <% if(value.today_profit_rate && value.today_profit_rate > 0) {%>rg<%} else if(value.today_profit_rate && value.today_profit_rate < 0) {%>gc<%}%>"><%= dataHandle(value.today_profit_rate) %></span>  \n              \t\t<span class="strategy-item strategy-item-success"><%= dataHandle(value.win_rate) %></span> \n              \t\t<span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown ? value.max_drawdown : \'--\' %></span>  \n              \t\t<span class="strategy-item strategy-item-info"><%= value.information_ratio ? value.information_ratio : \'--\' %></span>  \n              \t\t<span class="strategy-item strategy-item-runday"><%= value.run_days ? value.run_days : \'--\'  %></span> \n                \t<div class="strategy-item strategy-item-detail"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  \t\t<div class="icon6 icon-load-more"></div> \n                    </a> \n                \t</div> \n            \t</div> \n            \t<div class="strategy-content-detail" <% if (index > 0) {%> style="display:none" <% } %>> \n                <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  <div class="full_div"> \n                \t  <div class="content-left-detail"> \n                  \t  <p><%= datamethod.textEllipsis(value.description, 90)%></p> \n                  \t</div> \n                  </div> \n                </a> \n                <div class="personal-detail"> \n                  <a target="_blank" href="user.html#user/<%= value.user_id %>"><img src="<%= value.avatar%>"></a> \n                  <a target="_blank" href="user.html#user/<%= value.user_id %>"><span class="personal-name"><%= value.nickname%></span></a> \n                </div> \n                <div id="listchart<%=index%>" class="content-right-detail"></div> \n              </div> \n              <%})%>\n             \n            </div>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n             <div class="pagination-list-list u-pagination "></div>\n\n',
                user_strategy_tab: '<div class="m-user_tab">\n   <div name="pgmao" class="sort-type">\n                <ul>\n                  <li class="btn-order comprehensive-order j-tab_button active-order" data-tab="publish_strategy" style="display:none;"><i class="p-user_icon ps_release strategy_icon"></i>发布</li>\n                  <li class="btn-order count-rate j-tab_button" data-tab="collect_strategy" style="display:none;"><i class="p-user_icon ps_collection strategy_icon"></i>收藏</li>\n                  <li class="btn-order today-rate j-tab_button" data-tab="order_strategy" style="display:none;"><i class="p-user_icon ps_order strategy_icon"></i>试用</li>\n                </ul>\n                <div class="sort-type-icon"><span class="item-sortdisplay grid-sortdisplay icon6 icon-grid-model j-tab_card_list" data-tab="strategy_card_show" style="display:none;"></span><span class="item-sortdisplay list-sortdisplay icon6 icon-list-model j-tab_card_list" data-tab="strategy_list_show" ></span></div>\n              </div>\n</div>\n       '
            },
            theme: {
                nouse_old_theme_list: ' <div class="m-info_list">\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="<%= userUrl %>">\n          \t\t\t<img src="<%= imgSrc %>" style="height:50px; border-radius:50%">\n          \t\t</a>\n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<% if(isTop) {%>\n          \t\t<span class="title-tag">置顶</span>\n      \t\t<% } %>\n          \t<a href="<%= pid %>" class="title-name" target="_blank"><%= title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a href="<%= userUrl %>" class="author-name"><%= nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n            <label class="look-count"><%= pv %></label><span class="vertical-line"></span><a class="icon3 icon-message-logo" href="<%= commentid %>"></a>\n            <span  class="message-count"><%= camount %></span><span class="vertical-line">\n            </span><span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= collectionNum %></a><span class="vertical-line"></span>\n            <% if (lastComment) { %>\n            \t<a class="author-reply" href="<%= replyUrl %>"><%= lastComment["nickname"] %></a>\n            \t<label class="last-reply">最后回复于</label><span class="last-reply-date"><%= lastTime %></span>\n            <% } %>\n            <% if(backtestId) { %>\n            \t<a href="<%= pid %>" class="icon3 icon-icon-pager" title="该主题分享了回测案例"></a>\n            <% } %>\n            <% if(researchId) { %>\n        \t\t<a href="<%= pid %>" class="icon3 icon-icon-booker" title="研究分享"></a>\n        \t<% } %>\n          </div>\n        </div>\n    </div>\n </div>\n      \t\t',
                user_theme_list: ' <%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n <div class="m-theme_list" id="j-view-user_theme">\n  <% _.each(ret.list,function(value){%>\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a target="_blank" class="logo-img" href="user.html#user/<%= value.userid %>">\n          \t\t\t<img src="<%= imgOperate(value.userid) %>" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a target="_blank" href="article.html#id/<%= value.pid %>" class="title-name" target="_blank"><%= value.article_title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a target="_blank" href="user.html#user/<%= value.userid %>" class="author-name"><%= value.nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n          <label class="look-count"><%= value.pv %></label>\n          <span class="vertical-line"></span>\n          <a class="icon3 icon-message-logo" href="article.html#id/<%= value.pid %>/comment"></a>\n          <span  class="message-count"><%= value.camount %></span>\n          <span class="vertical-line"></span>\n          <span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= value.collection_num %></a><span class="vertical-line"></span>\n          </div>\n        </div>\n    </div>\n    <%});%>\n</div>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n <div class="pagination-list-list u-pagination"></div>',
                user_theme_tab: '<div>\n\t<div class="m-user_tab">\n\t   \t<div name="pgmao" class="sort-type">\n            <ul>\n              <li class="btn-order comprehensive-order active-order j-tab_button" data-tab="mytheme">我的主题</li>\n              <li class="btn-order count-rate j-tab_button" data-tab="collect_theme">收藏主题</li>\n            </ul>\n            <a href="article-create.html?type=1" class="create-item j-mine_create" style="display: none">发表主题</a>\n            \x3c!-- <div><span>发表主题</span></div> --\x3e\n\t    </div>\n\t</div>\n\n</div>\n\t\n       '
            }
        },
        "user-new": {
            common: '<div class="m-head_box">\n<div class="head_box"><img src="<%=ret.user_info.imgSrc ? ret.user_info.imgSrc : \'http://u.thsi.cn/avatar/2531/349942531.gif\'%>" style="width: 100%;height: 100%;"></div>\n\t<div class="name"><%=ret.user_info.nickname%></div>\n\t<div class="qianming" title="<%=ret.user_info.description%>"><%=ret.user_info.description%></div>\n\t\x3c!-- <div class="focus_and_fans"><span class="focus">关注：<%=ret.attention_info.attention_num%></span><span class="fans">粉丝：<%=ret.attention_info.follow_num%></span></div> --\x3e\n</div>',
            information: {
                user_information_control: ' <div class="m-info_list" id="j-view-user_information">\n  </div>',
                user_information_list: '  <%if(ret.count > 0){%>\n  <div class="m-message_content_box">\n      <ul class="m-mine_message_lists">\n      <% $.each(ret.list,function(key,value){%>\n        <li class="<%if(value.isread === 1){%>back_grey<%}%>">\n          <div class="message_list f-cb">\n            <div class="head">\n              <div class="info-title">\n                <% if(value.isread === 0){ %>\n                <span class="red_tip"></span>\n                <%}%>\n                <%if(value.type == 1 && value.isreply == 0){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>社区<span>中发布的主题</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n                <%}else if(value.type == 2 && value.isreply == 0){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>策略广场<span>中发布的策略</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n                <%}else if(value.type == 2 && value.isreply == 1){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>策略<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n                <%}else if(value.type == 1 && value.isreply == 1){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>主题<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n                <%}%>\n            </div>\n        </div>\n        <div class="content"><span>评论内容：<%=regReplace(value.content,self)%></span></div>\n        <div class="datetime">\n          <div class="date"><%=value.ctime%></div>\n          \x3c!-- <div class="time">09:29:58</div> --\x3e\n      </div>\n  </div>\n</li>\n<%})%>\n</ul>\n</div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p>我的消息空空如也呢</p>\n</div>\n <%}%>\n     <div class="pagination-list-list u-pagination "></div>',
                user_information_tab: '<div class="m-second_nav f-cb">\n\t<div class="item choosed j-tab_button" data-tab="replay_me" style="position: relative;"><span>我的消息</span><b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:15px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;color:#fff"></b></div>\n\t<div class="item j-tab_button" data-tab="replay_me_singal" style="position: relative;"><span>交易信号</span><b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:15px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;color:#fff"></b></div>\n</div>',
                user_information_test: ' <div class="m-info_list" id="j-view-user_information">\n\n    <div class="info-item back_grey">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>评论了你在</span><a href="" class="color_blue">社区</a><span>中发布的主题</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="comment-describe">\n          <span class="comment">评论内容：水水水水水水水水</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n          \t\t\t<img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在</span><a href="" class="color_blue">策略广场</a><span>中发布的策略</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\n\n    <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在主题</span><a href="" class="color_blue">关于回测价格的疑问</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n  <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在策略</span><a href="" class="color_blue">新默认策略</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n </div>\n      \t\t',
                user_singal_information_list: '<%if(ret.count > 0){%>\n    <div class="m-message_content_box">\n        <ul class="m-mine_message_lists">\n        <% $.each(ret.list,function(key,value){%>\n            <li>\n                <div class="message_list f-cb">\n                    <div class="head">\n                        <div class="info-title">\n                            交易信号：\n                        </div>\n                    </div>\n                    <%if(value.signal_source == 0){%>\n                    <div class="content">\n                        <span class="bule">模拟交易：</span>\n                        策略“<%=value.strategy_name%>”\n                        <%if(value.trade_type == 0){%>\n                            买入\n                        <%}else if(value.trade_type == 1){%>\n                            卖出\n                        <%}%>\n                        <%=value.stock_code%>（证券代码）<%=value.stock_amount%>，成交均价为<%=value.stock_price%>。\n                        <a href="trade.html#/" class="color_red" target="_blank">查看详情</a>\n                    </div>\n                    <%}else if(value.signal_source == 1){%>\n                    <div class="content">\n                        <span class="bule">实盘仿真：</span>\n                        账户“<%=value.strategy_name%>”\n                        <%if(value.trade_type == 0){%>\n                            买入\n                        <%}else if(value.trade_type == 1){%>\n                            卖出\n                        <%}%>\n                        <%=value.stock_code%>（证券代码）<%=value.stock_amount%>，成交均价为<%=value.stock_price%>。现持有<%=value.stock_code%>（证券代码）<%=value.stock_amount%>\n                        <a href="trade.html#/" class="color_red" target="_blank">查看详情</a>\n                    </div>\n                    <%}%>\n                    <div class="datetime">\n                        <div class="date"><%=value.trade_time%></div>\n                    </div>\n                </div>\n            </li>\n        <%})%>\n        </ul>\n    </div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p>我的消息空空如也呢</p>\n</div>\n<%}%>\n    <div class="pagination-list-list u-pagination "></div>'
            },
            strategy: {
                testlist: '\n<div class="strategy-item-container" id="j-view-user_strategy"> \n <%$.each(ret.list,function(index,value){%>\n <div class="strategy-content-item"> \n  // <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n  <span class="strategy-item strategy-item-name text-el"><%= value.name %></span> \n  // </a> \n  <span class="strategy-item strategy-item-profit <% if(value.profit_rate > 0) {%>rg<%} else if(value.profit_rate < 0) {%>gc<%}%>"><%= value.profit_rate %></span> \n  <span class="strategy-item strategy-item-count <% if(today_profit_rate > 0) {%>rg<%} else if(today_profit_rate < 0) {%>gc<%}%>"><%= value.today_profit_rate %></span>  \n  <span class="strategy-item strategy-item-success"><%= value.win_rate %></span> \n  <span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown %></span>  \n  <span class="strategy-item strategy-item-info"><%= value.information_ratio %></span>  \n  <span class="strategy-item strategy-item-runday"><%= value.run_days %></span> \n  <div class="strategy-item strategy-item-detail"> \n    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n      <div class="icon6 icon-load-more"></div> \n    </a> \n  </div> \n</div> \n<div class="strategy-content-detail <% if (i != 0) {%> hide-content <% } %>"> \n  <a target="_blank" href="<%= stgyUrl %>"> \n    <div class="full_div"> \n     <div class="content-left-detail"> \n       <p><%= description%></p> \n     </div> \n   </div> \n </a> \n <div class="personal-detail"> \n  <a target="_blank" href="user.html#user/<%= userId%>"><img src="<%= picUrl%>"></a> \n  <a target="_blank" href="user.html#user/<%= userId%>"><span class="personal-name"><%= nickname%></span></a> \n</div> \n<div id="<%= listChartId%>" class="content-right-detail"></div> \n</div> \n\n\n<%})%>\n</div>\n',
                user_strategy_card: '\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<ul class="sortshowcontent m-sort_block f-cb" id="j-view-user_strategy">\n  <%$.each(ret.list,function(index,value){%>\n  <li class="sortblock <% if (index % 2 == 1) { %> mr0 <% } %>">\n                <div class="sortblock-content">\n                <div class="sortblock-title">\n                    <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n                      <span><%= value.name %></span>\n                    </a>\n                    <div class="sortblock-info">\n                    <a target="_blank" href="user.html#user/<%= value.user_id %>">\n                      <img class="sortblock-img" src="<%= value.avatar%>">\n                    </a>\n                    <a target="_blank" href="user.html#user/<%= value.user_id %>">\n                      <p class="sortblock-name"><%= value.nickname %></p>\n                    </a>\n                    </div>\n                </div>\n                <div class="sortblock-chart" id="cardchart<%= index %>"></div>\n                <p class="sortblock-desc">\n                  <% if(value.description == "") { %>\n                  暂无该策略逻辑介绍\n                  <% } else { %>\n                  <%= datamethod.textEllipsis(value.description, 40) %>\n                  <% } %>\n                </p>\n                <ul class="sortblock-datainfo">\n                   <li>\n                      <div class="profit-content">\n                          <p class="fz20 profit-rate <% if(value.profit_rate && value.profit_rate > 0) {%>rg<% } else if (value.profit_rate && value.profit_rate < 0) {%>gc<% } %>"><%= dataHandle(value.profit_rate)%></p>\n                          <p>累计收益率</p>\n                      </div>\n                    </li>\n                    <li>\n                      <div class="success-content">\n                          <p class="fz20 success-rate <% if(value.win_rate && value.win_rate > 0) {%>rg<% } else if (value.win_rate && value.win_rate < 0) {%>gc<% } %>"><%= dataHandle(value.win_rate)%></p>\n                          <p>成功率</p>\n                      </div>\n                    </li>\n                    <li class="noborder">\n                      <div class="running-content">\n                          <p class="fz20 running-date"><%= value.run_days%></p>\n                          <p>运行天数</p>\n                      </div>\n                    </li>\n                </ul>\n                <div class="sortblock-detail hide-content">\n                    <% if (value.trade_log && value.trade_log.length>= 1) { %>\n                      <div class="stock-change-content">\n                        <% for(var j = 0; j < value.trade_log.length && j < 2; j++) {%>\n                          <% if(value.trade_log.operation_type == "SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "CLOSE_BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">平仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "CLOSE_SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">平仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "OPEN_BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">开仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "OPEN_SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">开仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } %>\n                        <% } %>\n                      </div>\n                    <% } else {%>\n                    <span>今日无调仓</span>\n                    <% } %>\n                    <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n                      <div class="btn btn-look-detail">查看详情</div>\n                    </a>\n                  </div>\n                </div>\n            </li>\n        <%})%>\n</ul>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n<div class="pagination-list-card u-pagination f-cb"></div>\n\n\n\n',
                user_strategy_list: '<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<div class="m-strategy_content_box">\n  <div class="nav f-cb">\n    <div style="width: 120px;margin-left:20px;" class="item"><span>策略名称</span></div>\n    <div style="width: 75px;" class="item"><span>累计收益率</span></div>\n    <div style="width: 75px;" class="item"><span>今日收益率</span></div>\n    <div style="width: 65px;" class="item"><span>成功率</span></div>\n    <div style="width: 70px;" class="item"><span>最大回撤</span></div>\n    <div style="width: 70px;" class="item"><span>信息比率</span></div>\n    <div style="width: 70px;" class="item"><span>运行天数</span></div>\n    <div style="width: 150px;text-align: center;" class="item"><span>趋势图例</span></div>\n  </div>\n  <ul class="m-strategy_lists">\n   <%$.each(ret.list,function(index,value){%>\n    <li>\n      <div class="strategy_list f-cb">\n        <div title="<%= value.name ? value.name : \'--\'  %>" class="item strategy_name"><a href="strategy-info.html#bid/<%= value.backtest_id %>"><span><%= value.name ? value.name : \'--\'  %></span></a></div>\n        <div style="width: 75px;" class="item"><span><%= dataHandle(value.profit_rate) %></span></div>\n        <div style="width: 75px;" class="item"><span><%= dataHandle(value.today_profit_rate) %></span></div>\n        <div style="width: 65px;" class="item"><span><%= dataHandle(value.win_rate) %></span></div>\n        <div style="width: 70px;" class="item"><span><%= dataHandle(value.max_drawdown) %></span></div>\n        <div style="width: 70px;" class="item"><span><%= value.information_ratio ? Number(value.information_ratio).toFixed(2) : \'--\' %></span></div>\n        <div style="width: 70px;" class="item"><span><%= value.run_days ? value.run_days : \'--\'  %></span></div>\n        <div style="width: 180px;text-align: center;" class="item">\n          <div id="listchart<%=index%>" class="content-right-detail"></div>\n        </div>\n        <div class="item more">\n          <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n              <div class="icons icon-loadmore"></div>\n          </a>\n          </div>\n        </div>\n      </li>\n    <%})%>\n      </ul>\n    </div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p><%=title%>空空如也呢</p>\n</div>\n<%}%>\n             <div class="pagination-list-list u-pagination "></div>\n',
                user_strategy_tab: '<div class="m-second_nav f-cb">\n\t<div class="item choosed j-tab_button" data-tab="publish_strategy"><span>策略发布</span></div>\n\t<div class="item j-tab_button" data-tab="collect_strategy"><span>策略收藏</span></div>\n</div>'
            },
            theme: {
                nouse_old_theme_list: ' <div class="m-info_list">\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="<%= userUrl %>">\n          \t\t\t<img src="<%= imgSrc %>" style="height:50px; border-radius:50%">\n          \t\t</a>\n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<% if(isTop) {%>\n          \t\t<span class="title-tag">置顶</span>\n      \t\t<% } %>\n          \t<a href="<%= pid %>" class="title-name" target="_blank"><%= title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a href="<%= userUrl %>" class="author-name"><%= nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n            <label class="look-count"><%= pv %></label><span class="vertical-line"></span><a class="icon3 icon-message-logo" href="<%= commentid %>"></a>\n            <span  class="message-count"><%= camount %></span><span class="vertical-line">\n            </span><span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= collectionNum %></a><span class="vertical-line"></span>\n            <% if (lastComment) { %>\n            \t<a class="author-reply" href="<%= replyUrl %>"><%= lastComment["nickname"] %></a>\n            \t<label class="last-reply">最后回复于</label><span class="last-reply-date"><%= lastTime %></span>\n            <% } %>\n            <% if(backtestId) { %>\n            \t<a href="<%= pid %>" class="icon3 icon-icon-pager" title="该主题分享了回测案例"></a>\n            <% } %>\n            <% if(researchId) { %>\n        \t\t<a href="<%= pid %>" class="icon3 icon-icon-booker" title="研究分享"></a>\n        \t<% } %>\n          </div>\n        </div>\n    </div>\n </div>\n      \t\t',
                user_theme_list: ' <%if($.type(ret.list) === \'array\' && ret.list.length > 0 ){%>\n<div class="m-theme_box">\n  <ul class="m-theme_lists">\n    <% _.each(ret.list,function(value){%>\n    <li>\n      <div class="theme_list f-cb">\n        <div class="head"> <span><a target="_blank" href="/platform/html/article/<%= value.pid %>.html#id/<%= value.pid %>" class="title-name" target="_blank"><%= value.article_title %></a></span></div>\n        <div class="other">\n          <div class="date"><%= value.ctime %></div>\n          <div class="looked" style="width: 74px;">浏览：<%= value.pv %></div>\n          <div class="comment" style="width: 74px;">评论：<a class="" href="/platform/html/article/<%= value.pid %>.html#id/<%= value.pid %>/comment"><%= value.camount %></a></div>\n          <div class="collect">收藏：<%= value.collection_num %></div>\n          <div class="author">作者：<a target="_blank" href="user.html#user/<%= value.userid %>" class="author-name"><%= value.nickname %></a></div>\n        </div>\n      </div>\n    </li>\n    <%});%>\n  </ul>\n</div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p><%=title%>空空如也呢</p>\n</div>\n<%}%>\n <div class="pagination-list-list u-pagination u-pagination-theme"></div>',
                user_theme_tab: '<div class="m-second_nav f-cb">\n  <div class="item j-tab_button choosed" data-tab="mytheme">\n  <% if(mineRead){%>\n  <span>我的主题</span>\n  <%} else {%>\n  <span>他的主题</span>\n  <%}%>\n  </div>\n  <div class="item  j-tab_button" data-tab="collect_theme"><span>收藏主题</span></div>\n  <a href="article-create.html?type=1" class="create-item j-mine_create" style="display: none">发表主题</a>\n</div>'
            }
        }
    }
}),
define("text", ["module"], function(t) {
    "use strict";
    function e(t, e) {
        return void 0 === t || "" === t ? e : t
    }
    function n(t, n, i, r) {
        if (n === r)
            return !0;
        if (t === i) {
            if ("http" === t)
                return e(n, "80") === e(r, "80");
            if ("https" === t)
                return e(n, "443") === e(r, "443")
        }
        return !1
    }
    var i, r, a, o, s, l = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], c = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, u = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, d = "undefined" != typeof location && location.href, p = d && location.protocol && location.protocol.replace(/\:/, ""), f = d && location.hostname, h = d && (location.port || void 0), v = {}, m = t.config && t.config() || {};
    return i = {
        version: "2.0.15",
        strip: function(t) {
            if (t) {
                t = t.replace(c, "");
                var e = t.match(u);
                e && (t = e[1])
            } else
                t = "";
            return t
        },
        jsEscape: function(t) {
            return t.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: m.createXhr || function() {
            var t, e, n;
            if ("undefined" != typeof XMLHttpRequest)
                return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (e = 0; e < 3; e += 1) {
                    n = l[e];
                    try {
                        t = new ActiveXObject(n)
                    } catch (t) {}
                    if (t) {
                        l = [n];
                        break
                    }
                }
            return t
        }
        ,
        parseName: function(t) {
            var e, n, i, r = !1, a = t.lastIndexOf("."), o = 0 === t.indexOf("./") || 0 === t.indexOf("../");
            return -1 !== a && (!o || a > 1) ? (e = t.substring(0, a),
            n = t.substring(a + 1)) : e = t,
            i = n || e,
            a = i.indexOf("!"),
            -1 !== a && (r = "strip" === i.substring(a + 1),
            i = i.substring(0, a),
            n ? n = i : e = i),
            {
                moduleName: e,
                ext: n,
                strip: r
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(t, e, r, a) {
            var o, s, l, c = i.xdRegExp.exec(t);
            return !c || (o = c[2],
            s = c[3],
            s = s.split(":"),
            l = s[1],
            s = s[0],
            (!o || o === e) && (!s || s.toLowerCase() === r.toLowerCase()) && (!l && !s || n(o, l, e, a)))
        },
        finishLoad: function(t, e, n, r) {
            n = e ? i.strip(n) : n,
            m.isBuild && (v[t] = n),
            r(n)
        },
        load: function(t, e, n, r) {
            if (r && r.isBuild && !r.inlineText)
                return void n();
            m.isBuild = r && r.isBuild;
            var a = i.parseName(t)
              , o = a.moduleName + (a.ext ? "." + a.ext : "")
              , s = e.toUrl(o)
              , l = m.useXhr || i.useXhr;
            if (0 === s.indexOf("empty:"))
                return void n();
            !d || l(s, p, f, h) ? i.get(s, function(e) {
                i.finishLoad(t, a.strip, e, n)
            }, function(t) {
                n.error && n.error(t)
            }) : e([o], function(t) {
                i.finishLoad(a.moduleName + "." + a.ext, a.strip, t, n)
            })
        },
        write: function(t, e, n, r) {
            if (v.hasOwnProperty(e)) {
                var a = i.jsEscape(v[e]);
                n.asModule(t + "!" + e, "define(function () { return '" + a + "';});\n")
            }
        },
        writeFile: function(t, e, n, r, a) {
            var o = i.parseName(e)
              , s = o.ext ? "." + o.ext : ""
              , l = o.moduleName + s
              , c = n.toUrl(o.moduleName + s) + ".js";
            i.load(l, n, function(e) {
                var n = function(t) {
                    return r(c, t)
                };
                n.asModule = function(t, e) {
                    return r.asModule(t, c, e)
                }
                ,
                i.write(t, l, n, a)
            }, a)
        }
    },
    "node" === m.env || !m.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (r = require.nodeRequire("fs"),
    i.get = function(t, e, n) {
        try {
            var i = r.readFileSync(t, "utf8");
            "\ufeff" === i[0] && (i = i.substring(1)),
            e(i)
        } catch (t) {
            n && n(t)
        }
    }
    ) : "xhr" === m.env || !m.env && i.createXhr() ? i.get = function(t, e, n, r) {
        var a, o = i.createXhr();
        if (o.open("GET", t, !0),
        r)
            for (a in r)
                r.hasOwnProperty(a) && o.setRequestHeader(a.toLowerCase(), r[a]);
        m.onXhr && m.onXhr(o, t),
        o.onreadystatechange = function(i) {
            var r, a;
            4 === o.readyState && (r = o.status || 0,
            r > 399 && r < 600 ? (a = new Error(t + " HTTP status: " + r),
            a.xhr = o,
            n && n(a)) : e(o.responseText),
            m.onXhrComplete && m.onXhrComplete(o, t))
        }
        ,
        o.send(null)
    }
    : "rhino" === m.env || !m.env && "undefined" != typeof Packages && "undefined" != typeof java ? i.get = function(t, e) {
        var n, i, r = new java.io.File(t), a = java.lang.System.getProperty("line.separator"), o = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(r),"utf-8")), s = "";
        try {
            for (n = new java.lang.StringBuffer,
            i = o.readLine(),
            i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)),
            null !== i && n.append(i); null !== (i = o.readLine()); )
                n.append(a),
                n.append(i);
            s = String(n.toString())
        } finally {
            o.close()
        }
        e(s)
    }
    : ("xpconnect" === m.env || !m.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (a = Components.classes,
    o = Components.interfaces,
    Components.utils.import("resource://gre/modules/FileUtils.jsm"),
    s = "@mozilla.org/windows-registry-key;1"in a,
    i.get = function(t, e) {
        var n, i, r, l = {};
        s && (t = t.replace(/\//g, "\\")),
        r = new FileUtils.File(t);
        try {
            n = a["@mozilla.org/network/file-input-stream;1"].createInstance(o.nsIFileInputStream),
            n.init(r, 1, 0, !1),
            i = a["@mozilla.org/intl/converter-input-stream;1"].createInstance(o.nsIConverterInputStream),
            i.init(n, "utf-8", n.available(), o.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            i.readString(n.available(), l),
            i.close(),
            n.close(),
            e(l.value)
        } catch (t) {
            throw new Error((r && r.path || "") + ": " + t)
        }
    }
    ),
    i
}),
define("text!templates/lib/dialog.html", [], function() {
    return '<style type="text/css">\n  .plugin-dialog {\n    position: relative;\n    min-height: 135px;\n    min-width: 300px;\n  }\n  .plugin-dialog-btn {\n    float: right; margin-right: 10px; margin-top: 10px; position: static;\n  }\n  .plugin-dialog-footer {\n    bottom: 0;\n    right: 0;\n  }\n</style>\n<%\n  var containerHeight, containerOverflow;\n  if (height === \'auto\') {//默认\n    containerHeight = \'auto\';\n    containerOverflow = \'visible\';\n  } else {\n    containerOverflow = \'auto\';\n    if (isShowBtn) {\n      containerHeight = (parseInt(height) - 80) + \'px\';\n    } else {\n      containerHeight = (parseInt(height) - 37) + \'px\';\n    }\n  }\n %>\n<div class="container-mask" tabindex="1">\n  <div class="container-maskbg"></div>\n  <div\n      class="popbox plugin-dialog"\n      style="margin-left: <%= (- parseInt(width) / 2)  + \'px\' %>; width: <%= width %>; height: <%= height %>"\n      >\n    <div class="icon popbox-btn-close"></div>\n\n    <div class="popbox-title">\n      <div class="text"><%= title %></div>\n    </div>\n\n    <div class="popbox-container" style="overflow: <%= containerOverflow %>; height: <%= containerHeight %>">\n      <%= content %>\n    </div>\n\n    <% if(isShowBtn) { %>\n      <div class="popbox-footer plugin-dialog-footer" style="position: <%= height === \'auto\' ? \'relative\' : \'absolute\' %>">\n        <% if(okBtn) { %>\n          <div class="btn <%= okBtnClass %> plugin-dialog-btn popbox-btn-ok"><%= okBtnTitle %></div>\n        <% } %>\n\n        <% if(cancelBtn) { %>\n          <div class="btn <%= cancelBtnClass %> plugin-dialog-btn popbox-btn-cancel"><%= cancelBtnTitle %></div>\n        <% } %>\n      </div>\n    <% } %>\n\n  </div>\n</div>'
}),
define("dialog", ["backbone", "underscore", "text!templates/lib/dialog.html"], function(t, e, n) {
    return t.View.extend({
        events: {
            "click .popbox-btn-ok": "okEvent",
            "click .popbox-btn-cancel, .popbox-btn-close": "cancelEvent",
            "keydown .container-mask": "keydownEvent"
        },
        template: e.template(n),
        width: "360px",
        height: "auto",
        title: null,
        isShowBtn: !0,
        okBtn: !0,
        okBtnTitle: "确认",
        okBtnClass: "btn-blue-blue",
        cancelBtn: !0,
        cancelBtnTitle: "取消",
        cancelBtnClass: "btn-hollow-grey",
        content: "",
        btnType: ["grey", "hollow", "blue", "red", "ban"],
        tip: 0,
        btnTypeMapClass: {
            grey: "btn-grey-grey",
            hollow: "btn-hollow-grey",
            blue: "btn-blue-blue",
            red: "btn-red-red",
            ban: "btn-ban"
        },
        initialize: function() {},
        render: function(t) {
            var n = {
                width: this.width,
                height: this.height,
                title: this.title,
                isShowBtn: this.isShowBtn,
                okBtn: this.okBtn,
                okBtnTitle: this.okBtnTitle,
                okBtnClass: this.okBtnClass,
                cancelBtn: this.cancelBtn,
                cancelBtnTitle: this.cancelBtnTitle,
                cancelBtnClass: this.cancelBtnClass,
                content: this.content,
                tip: this.tip
            }
              , i = this;
            e.each(t, function(t, e) {
                void 0 !== n[e] && (n[e] = t,
                i[e] = t)
            });
            var r = this.template(n);
            return this.$el.empty(),
            this.$el.html(r),
            0 === this.tip && $(".container-maskbg").one("click", function() {
                i.$el.remove()
            }),
            this.$el.find(".container-mask").focus(),
            void 0 !== t.okEvent ? this.okEvent = t.okEvent : this.okEvent = this.hide,
            void 0 !== t.cancelEvent ? this.cancelEvent = t.cancelEvent : this.cancelEvent = this.hide,
            this.refreshEvent(),
            this.$el.addClass("hide"),
            this
        },
        setOkButtonClass: function(t) {
            return this.getOkBtnDom().removeClass(this.okBtnClass).addClass(t),
            this.okBtnClass = t,
            this
        },
        setCancelButtonClass: function(t) {
            return this.getCancelBtnDom().removeClass(this.cancelBtnClass).addClass(t),
            this.cancelBtnClass = t,
            this
        },
        setOkButtonType: function(t) {
            if (!($.inArray(t, this.btnType) >= 0))
                throw new Error("The type not in ['grey', 'hollow', 'blue', 'red', 'ban']");
            var e = this.btnTypeMapClass[t];
            return this.setOkButtonClass(e),
            this
        },
        setCancelButtonType: function(t) {
            if (!($.inArray(t, this.btnType) >= 0))
                throw new Error("The type not in ['grey', 'hollow', 'blue', 'red', 'ban']");
            var e = this.btnTypeMapClass[t];
            return this.setCancelButtonClass(e),
            this
        },
        setContent: function(t) {
            return this.getContainerDom().html(t),
            this
        },
        setWidth: function(t) {
            var e = -parseInt(t) / 2 + "px";
            return this.$el.find(".plugin-dialog").css({
                width: t,
                "margin-left": e
            }),
            this
        },
        setHeight: function(t) {
            return this.$el.find(".plugin-dialog").css("height", t),
            this
        },
        keydownEvent: function(t) {
            var e = t.keyCode;
            if (13 == e)
                this.okEvent();
            else {
                if (27 != e)
                    return;
                this.cancelEvent()
            }
        },
        setOkEvent: function(t) {
            return this.okEvent = t,
            this.refreshEvent(),
            this
        },
        setCancelEvent: function(t) {
            return this.cancelEvent = t,
            this.refreshEvent(),
            this
        },
        getOkBtnDom: function() {
            return this.$el.find(".popbox-btn-ok")
        },
        getCancelBtnDom: function() {
            return this.$el.find(".popbox-btn-cancel")
        },
        getContainerDom: function() {
            return this.$el.find(".popbox-container")
        },
        getDialogDom: function() {
            return this.$el.find(".plugin-dialog")
        },
        show: function() {
            if ("" === this.title)
                throw new Error("The title not be null");
            this.$el.removeClass("hide").show()
        },
        hide: function() {
            this.remove()
        },
        okEvent: function() {
            this.hide()
        },
        cancelEvent: function() {
            this.hide()
        },
        refreshEvent: function() {
            this.delegateEvents(this.events)
        }
    })
}),
define("../views/common/header", ["backbone", "../../lib/cookies", "../common/feedback", "../../models/header/checkComments", "../../models/header/searchHelp", "../../models/header/sklearnEnable", "../../models/header/helpList", "../../models/header/feedback", "tpl", "commonFunc", "dialog"], function(t, e, n, i, r, a, o, s, l, c, u) {
    return new (t.View.extend({
        el: "#header",
        changeImageDom: [],
        pollingRemindDom: [],
        remindTime: 6e4,
        timer: !1,
        keywords: "",
        quoteKeywords: "",
        isFocusSearch: !1,
        events: {
            "click .help-feedback-problem": "showFeedback",
            "click #header-id": "headerMenuClick",
            "mouseenter .multinav": "showSubNav",
            "mouseover .multinav": "showSubNav",
            "mouseleave .multinav": "hideSubNav",
            "keyup #view_search_input": "search",
            "focus #view_search_input": "search",
            "click #header_search": "stopClick"
        },
        initialize: function() {
            if (this.feedBackClick(),
            $("#feedbackAlert").hide(),
            e.get("userid")) {
                this.userid = e.get("userid");
                var t = e.get("escapename");
                $("#header-usr-unlogin").hide(),
                $("#header-usr-logined .header-usr-left-new span").text(t).attr({
                    title: t
                }),
                $("#header-usr-logined").show()
            } else
                $("#header-usr-unlogin").show();
            $("body").on("click", function() {
                $("#menu_strategy").remove(),
                $("#view-search-tips").hide()
            }),
            -1 === location.href.indexOf("trade") && (a.definedLoginErrorCallback = function() {}
            ),
            a.requestIsAbled({}, function(t) {
                1 === t.sklearn_enable ? ($("ul.left-search-header-subnav li.machine a.header-nav-item").show(),
                $(".nav-left a.item#machine").show()) : ($("ul.left-search-header-subnav li.machine a.header-nav-item").hide(),
                $(".nav-left a.item#machine").hide()),
                1 === t.auto_enable ? ($("ul.left-search-header-subnav li.guide a.header-nav-item").show(),
                $(".nav-left a.item#guidegeneratorstrategy").show()) : ($("ul.left-search-header-subnav li.guide a.header-nav-item").hide(),
                $(".nav-left a.item#guidegeneratorstrategy").hide())
            }),
            o.requestHelpList({}, function(t) {
                t["功能说明"].forEach(function(t) {
                    if (-1 !== t.module_id) {
                        var e = $('<li><a class="header-nav-item" href="/platform/html/help-api.html?t=' + t.module_id + '" >' + t.name + "</a></li>");
                        $(".left-header-subnav").append(e)
                    }
                }),
                t["API文档"].forEach(function(t) {
                    var e = $('<li><a class="header-nav-item" href="/platform/html/help-api.html?t=' + t.module_id + '" >' + t.name + "</a></li>");
                    $(".right-header-subnav").append(e)
                })
            }),
            this.pollingRemind(),
            this.Ta(),
            $(".feedback-weixin").on("mouseover", function() {
                $(".weixin-code").show()
            }),
            $(".feedback-weixin").on("mouseout", function() {
                $(".weixin-code").hide()
            }),
            $(".feedback-container").on("click", function(t) {
                t.stopPropagation(),
                $("#feedbackAlert").show()
            }),
            $(".feedback-control span").on("click", function(t) {
                t.stopPropagation(),
                $("#main-feedback").hide()
            })
        },
        headerMenuClick: function(t) {
            if (t.stopPropagation(),
            document.getElementById("menu_strategy"))
                $("#menu_strategy").remove();
            else {
                $("#menu_strategy") && $("#menu_strategy").remove();
                var n = e.get("userid")
                  , i = $('<div style="color:#000;z-index:9999;display:block;" id="menu_strategy" data-id class="menu2 strategy-menu" @click.stop><a class="menu-item btn btn-delete" style="color:#676A74"  href = "/platform/html/user.html#theme/' + n + '"  >我的主题</a><a class="menu-item btn "id ="header_logout" style="color:#676A74" href="//upass.10jqka.com.cn/logout">退出</a></div>')
                  , r = $("#header-id");
                i.css({
                    top: r.offset().top + r.height() + 10,
                    left: r.offset().left - 45
                }),
                i.on("mouseleave", function() {
                    $("#menu_strategy").remove()
                }),
                $("body").append(i),
                $("#header-unlogin").on("click", function() {
                    $("#header-usr-unlogin").click()
                }),
                $("#header_logout").click(function(t) {
                    t.preventDefault();
                    var n, i;
                    i = $(this).attr("href"),
                    i = i + "?redir=//" + window.location.host + "/platform/html/logoutproxy.html",
                    e.get("userid") && (n = e.get("userid"),
                    i = i + "#userid=" + n,
                    window.location.href = i),
                    TA.log({
                        id: "mindgo_57e513e5_356",
                        ld: __env
                    })
                })
            }
        },
        pollingRemind: function() {
            var t = this.$el.find("a.header-usr-left");
            t.css({
                position: "relative",
                cursor: "pointer"
            });
            var e;
            $(".j-info_jump").append('<b class="j-info_jumo_dot" style="display:none;position:absolute;padding:0 5px;font-weight: 200;border-radius:13px;height:16px;line-height:16px;font-size:10px;color:#fff;background-color:#e40011;top: 6px;left: 139px;"></b>'),
            t.append('<i class="j-red_dot" style="position:absolute;display:none;width:6px;height:6px;border-radius:3px;background-color:red;top:-2px;right:13px;"></i>'),
            this.userid && setTimeout(function() {
                e = $("b.j-user_disscuss_red"),
                i.checkNewComments({
                    userid: this.userid
                }, function(t) {
                    t > 0 ? ($(".j-red_dot").show(),
                    e.show(),
                    e.html(t),
                    $(".j-info_jumo_dot").show(),
                    $(".j-info_jumo_dot").html(t)) : ($(".j-red_dot").hide(),
                    e.hide(),
                    $(".j-info_jumo_dot").hide())
                })
            }, 1e3)
        },
        showFeedback: function() {
            n.show()
        },
        showSubNav: function(t) {
            var e = t.currentTarget;
            $(e).find(".header-subnav").show()
        },
        hideSubNav: function(t) {
            $(".header-subnav").hide()
        },
        Ta: function() {
            $(".help-common-question").click(function() {
                TA.log({
                    id: "mindgo_57e5136b_662",
                    ld: __env
                })
            }),
            $(".help-api-doc").click(function() {
                TA.log({
                    id: "mindgo_57e5138a_790",
                    ld: __env
                })
            }),
            $(".help-feedback-problem").click(function() {
                TA.log({
                    id: "mindgo_57e513a2_619",
                    ld: __env
                })
            }),
            $("#header_signup").click(function() {
                TA.log({
                    id: "mindgo_57e513cd_930",
                    ld: __env
                })
            }),
            $("#header_signin").click(function() {
                TA.log({
                    id: "mindgo_57e513b9_108",
                    ld: __env
                })
            })
        },
        search: function() {
            this.isFocusSearch || (TA.log({
                id: "mindgo_59afd2b9_877",
                ld: __env
            }),
            this.isFocusSearch = !0),
            this.timer && (clearTimeout(this.timer),
            this.timer = !1),
            this.timer = setTimeout(this.searchAction, 50)
        },
        searchAction: function() {
            this.keywords = $.trim($("#view_search_input").val()),
            "" !== this.keywords && (this.quoteKeywords = new RegExp("(" + this.keywords.replace(/(\*|\.|\?|\+|\$|\^|\[|\]|\(|\)|\{|\}|\||\\|\/)/gi, "\\$1") + ")","gi"),
            r.search({
                keywords: this.keywords
            }, function(t) {
                if (!t.errorcode) {
                    var e = "";
                    0 !== t.length && (e = _.template(l.header["search-tips"], {
                        result: t,
                        keywords: this.quoteKeywords,
                        repItem: "<span style='color:#3671ca;font-weight:bolder'>$1</span>"
                    })),
                    $("#view-search-tips").html(e).show()
                }
            }))
        },
        stopClick: function(t) {
            t.stopPropagation()
        },
        feedBackClick: function() {
            $("body").append('<div id="feedbackAlert"></div>');
            var t = new u({
                el: $("#feedbackAlert")
            });
            t.render({
                title: "意见反馈",
                cancelBtn: !1,
                okBtnTitle: "提交",
                okBtnClass: "submit",
                content: '<div class="feedback">\n\t                    <div class="main">\n\t                        <div class="contact">联系方式:\n\t                            <input type="text" id="feedback_contact">\n\t                        </div>\n\t                        <div class="content">反馈内容:\n\t                            <textarea cols="28" rows="5" id="feedback_content"></textarea>\n\t                        </div>\n\t                    </div>\n                \t</div>',
                tip: "1",
                okEvent: function() {
                    $("#feedbackAlert").hide(),
                    c.tip("提交成功");
                    var t = $("#feedback_contact").val()
                      , e = $("#feedback_content").val()
                      , n = "<br>联系方式：" + t + "<br>反馈内容：" + e;
                    "" !== t && "" !== e && s.requestFeedBack({
                        is_html: 1,
                        source: 2,
                        title: "quant-web意见反馈",
                        content: n
                    }, function(t) {
                        $("#feedback_contact").val(""),
                        $("#feedback_content").val("")
                    })
                },
                cancelEvent: function() {
                    $("#feedbackAlert").hide(),
                    $("#feedback_contact").val(""),
                    $("#feedback_content").val("")
                }
            }).show()
        }
    }))
}),
define("../components/strategy-lib/strategy-index/list/strategy-list", ["require", "exports", "module", "VueAjax", "VueConfig", "dialog", "commonFunc"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig")
      , a = (t("dialog"),
    t("commonFunc"));
    n.exports = Vue.extend({
        template: '<div class="strategybox-list-item f-cb" :class="choosedClass" @click.stop="strategyClick"><b class="pic file"></b><span class="text" :title="algoname">{{algoname}}</span></div>',
        props: {
            algoname: String,
            strategyId: [String, Number],
            folderId: {
                type: [String, Number],
                default: "-1"
            }
        },
        methods: {
            strategyClick: function() {
                var t = this;
                $("#menu_strategy").remove(),
                $.each(this.$store.state.backtestData, function(e, n) {
                    e === t.backtestDataId ? !0 === n.choosed && (n.choosed = !1) : n.choosed = !1
                }),
                this.$store.state.backtestData[t.backtestDataId].choosed = !0,
                this.$store.state.strategyChoosed = this.$store.state.backtestData[t.backtestDataId],
                i.jsonp({
                    url: r.ajax["strategy-lib"].getBacktestInfo,
                    data: {
                        backTestId: t.strategyId
                    },
                    success: function(e) {
                        t.$store.state.backtestInfo = e,
                        t.$store.state.backtestId = t.strategyId
                    },
                    resulterror: function(e) {
                        t.$store.state.backtestInfo = null,
                        t.$store.state.backtestId = null,
                        a.warningTip(e.errormsg),
                        a.editor.getSession().setValue("")
                    },
                    error: function(t) {
                        a.warningTip("网络异常，请稍后再试"),
                        a.editor.getSession().setValue("")
                    }
                })
            }
        },
        created: function() {
            if (this.menuShow && this.classStrategyChoosed) {
                var t = this;
                i.jsonp({
                    url: r.ajax["strategy-lib"].getBacktestInfo,
                    data: {
                        backTestId: t.strategyId
                    },
                    success: function(e) {
                        t.$store.state.backtestInfo = e,
                        t.$store.state.backtestId = t.strategyId
                    },
                    resulterror: function(t) {
                        a.warningTip(t.errormsg),
                        a.editor.getSession().setValue("")
                    },
                    error: function(t) {
                        a.warningTip("网络异常，请稍后再试"),
                        a.editor.getSession().setValue("")
                    }
                })
            }
        },
        computed: {
            backtestDataId: function() {
                return "" + this.folderId + this.strategyId
            },
            menuShow: function() {
                return this.$store.state.backtestData[this.backtestDataId].menuOpen
            },
            classStrategyChoosed: function() {
                return this.$store.state.backtestData[this.backtestDataId].choosed
            },
            choosedClass: function() {
                return {
                    active: this.classStrategyChoosed
                }
            }
        }
    })
}),
define("../components/strategy-lib/strategy-index/list/folder-list", ["require", "exports", "module", "./strategy-list"], function(t, e, n) {
    var i = t("./strategy-list");
    n.exports = Vue.extend({
        template: '<div class="strategybox-list-folderbox" v-on:click="folderClick"><div class="strategybox-list-folder"><span class="icon icon-folder" :class="folderClass"></span><span class="text" :title="foldername">{{foldername}}</span></div><div class="strategybox-list-items" data-folder="" v-show="folderShow"><strategy-list v-for="(item,index) of folderStgys" v-bind:algoname="item.backtest_name" :folder-id="folderId" :strategy-id="item.backtest_id" :key="index"></strategy-list></div></div>',
        data: function() {
            return {}
        },
        props: {
            folderStgys: {
                type: Array,
                default: {}
            },
            foldername: {
                type: String
            },
            folderId: {
                type: [Number, String]
            }
        },
        methods: {
            folderClick: function() {
                var t = this;
                $.each(this.$store.state.fileFolders, function(e, n) {
                    Number(e) === Number(t.folderId) ? !0 === n.folderChoosed ? n.folderChoosed = !1 : n.folderChoosed = !0 : n.folderChoosed = !1
                })
            }
        },
        components: {
            "strategy-list": i
        },
        computed: {
            folderShow: function() {
                return this.$store.state.fileFolders[this.folderId].folderChoosed
            },
            folderClass: function() {
                return {
                    "icon-folder-col": this.folderShow
                }
            },
            _strategys: function() {
                return this.$store.state.strategys
            },
            _folderData: function() {
                return this.$store.state.folderData
            }
        }
    })
}),
define("../components/strategy-lib/strategy-index/strategy-index", ["require", "exports", "module", "./list/folder-list", "./list/strategy-list"], function(t, e, n) {
    var i = t("./list/folder-list")
      , r = t("./list/strategy-list");
    n.exports = Vue.extend({
        template: '<div id="mf_stgy" class="strategybox shrink_ml14"><div class="strategybox-toolbar clearfix"><span>策略目录</span><div class="pic shrink" @click="shrinkList"></div></div><div id="zUI_strategylist" style="height:92%" class="zUIpanel"><div class="strategybox-list"><div id="strategybox_list_folder"><folder-list v-for="(item,key,index) of fileFolders" v-bind:foldername="item.name" :folder-id="key" :folder-stgys="item.data" :key="key"></folder-list></div><div id="strategybox_list_root"></div><strategy-list v-for="(item,key,index) of rootFolderData" v-bind:algoname="item.backtest_name" :strategy-id="item.backtest_id" :key="item.backtest_id"></strategy-list></div></div></div>',
        components: {
            "folder-list": i,
            "strategy-list": r
        },
        data: function() {
            return {}
        },
        mounted: function() {
            $("#zUI_strategylist").panel()
        },
        computed: {
            rootFolderData: function() {
                return this.$store.state.rootFolderData
            },
            fileFolders: function() {
                return this.$store.state.fileFolders
            },
            indexShow: function() {
                return this.$store.state.indexShow
            }
        },
        methods: {
            shrinkList: function() {
                $("#mf_stgy").css("margin-left", "-13%"),
                this.$store.state.indexShow = !0;
                var t = this;
                setTimeout(function() {
                    t.$store.state.spreadShow = !0
                }, 600)
            }
        },
        watch: {}
    })
});
var $dp, WdatePicker;
!function() {
    function t() {
        try {
            v[x],
            v.$dp = v.$dp || {}
        } catch (t) {
            v = b,
            $dp = $dp || {}
        }
        var t = {
            win: b,
            $: function(t) {
                return "string" == typeof t ? b[x].getElementById(t) : t
            },
            $D: function(t, e) {
                return this.$DV(this.$(t).value, e)
            },
            $DV: function(t, e) {
                if ("" != t) {
                    if (this.dt = $dp.cal.splitDate(t, $dp.cal.dateFmt),
                    e)
                        for (var n in e)
                            if (void 0 === this.dt[n])
                                this.errMsg = "invalid property:" + n;
                            else if (this.dt[n] += e[n],
                            "M" == n) {
                                var i = e.M > 0 ? 1 : 0
                                  , r = new Date(this.dt.y,this.dt.M,0).getDate();
                                this.dt.d = Math.min(r + i, this.dt.d)
                            }
                    if (this.dt.refresh())
                        return this.dt
                }
                return ""
            },
            show: function() {
                for (var t = v[x].getElementsByTagName("div"), e = 1e5, n = 0; n < t.length; n++) {
                    var i = parseInt(t[n].style.zIndex);
                    i > e && (e = i)
                }
                this.dd.style.zIndex = e + 2,
                p(this.dd, "block"),
                p(this.dd.firstChild, "")
            },
            unbind: function(t) {
                t = this.$(t),
                t.initcfg && (n(t, "onclick", function() {
                    u(t.initcfg)
                }),
                n(t, "onfocus", function() {
                    u(t.initcfg)
                }))
            },
            hide: function() {
                p(this.dd, "none")
            },
            attachEvent: e
        };
        for (var i in t)
            v.$dp[i] = t[i];
        $dp = v.$dp
    }
    function e(t, e, n, i) {
        if (t.addEventListener) {
            var r = e.replace(/on/, "");
            n._ieEmuEventHandler = function(t) {
                return n(t)
            }
            ,
            t.addEventListener(r, n._ieEmuEventHandler, i)
        } else
            t.attachEvent(e, n)
    }
    function n(t, e, n) {
        if (t.removeEventListener) {
            var i = e.replace(/on/, "");
            n._ieEmuEventHandler = function(t) {
                return n(t)
            }
            ,
            t.removeEventListener(i, n._ieEmuEventHandler, !1)
        } else
            t.detachEvent(e, n)
    }
    function i(t, e, n) {
        if (typeof t != typeof e)
            return !1;
        if ("object" == typeof t) {
            if (!n)
                for (var r in t) {
                    if (void 0 === e[r])
                        return !1;
                    if (!i(t[r], e[r], !0))
                        return !1
                }
            return !0
        }
        return "function" == typeof t && "function" == typeof e ? t.toString() == e.toString() : t == e
    }
    function r(t) {
        t = t || v;
        for (var e = 0, n = 0; t != v; ) {
            for (var i = t.parent[x][w]("iframe"), r = 0; r < i.length; r++)
                try {
                    if (i[r].contentWindow == t) {
                        var o = a(i[r]);
                        e += o.left,
                        n += o.top;
                        break
                    }
                } catch (t) {}
            t = t.parent
        }
        return {
            leftM: e,
            topM: n
        }
    }
    function a(t, e) {
        if (t.getBoundingClientRect)
            return t.getBoundingClientRect();
        var n = {
            ROOT_TAG: /^body|html$/i,
            OP_SCROLL: /^(?:inline|table-row)$/i
        }
          , i = !1
          , r = null
          , a = t.offsetTop
          , o = t.offsetLeft
          , l = t.offsetWidth
          , c = t.offsetHeight
          , u = t.offsetParent;
        if (u != t)
            for (; u; )
                o += u.offsetLeft,
                a += u.offsetTop,
                "fixed" == d(u, "position").toLowerCase() ? i = !0 : "body" == u.tagName.toLowerCase() && (r = u.ownerDocument.defaultView),
                u = u.offsetParent;
        for (u = t.parentNode; u.tagName && !n.ROOT_TAG.test(u.tagName); )
            (u.scrollTop || u.scrollLeft) && (n.OP_SCROLL.test(p(u)) || y && "visible" === u.style.overflow || (o -= u.scrollLeft,
            a -= u.scrollTop)),
            u = u.parentNode;
        if (!i) {
            var f = s(r);
            o -= f.left,
            a -= f.top
        }
        return l += o,
        c += a,
        {
            left: o,
            top: a,
            right: l,
            bottom: c
        }
    }
    function o(t) {
        t = t || v;
        var e = t[x];
        return {
            width: t.innerWidth ? t.innerWidth : e[k] && e[k].clientWidth ? e[k].clientWidth : e.body.offsetWidth,
            height: t.innerHeight ? t.innerHeight : e[k] && e[k].clientHeight ? e[k].clientHeight : e.body.offsetHeight
        }
    }
    function s(t) {
        t = t || v;
        var e = t[x]
          , n = e[k]
          , i = e.body;
        return e = n && null != n.scrollTop && (n.scrollTop > i.scrollTop || n.scrollLeft > i.scrollLeft) ? n : i,
        {
            top: e.scrollTop,
            left: e.scrollLeft
        }
    }
    function l(t) {
        try {
            var e = t ? t.srcElement || t.target : null;
            $dp.cal && !$dp.eCont && $dp.dd && e != $dp.el && "block" == $dp.dd.style.display && $dp.cal.close()
        } catch (t) {}
    }
    function c() {
        $dp.status = 2
    }
    function u(n, r) {
        function a() {
            if (g) {
                for (func = a.caller; null != func; ) {
                    var t = func.arguments[0];
                    if (t && (t + "").indexOf("Event") >= 0)
                        return t;
                    func = func.caller
                }
                return null
            }
            return event
        }
        if ($dp) {
            t();
            var o = {};
            for (var s in n)
                o[s] = n[s];
            for (s in h)
                "$" != s.substring(0, 1) && void 0 === o[s] && (o[s] = h[s]);
            if (r) {
                if (!function() {
                    return !m || v == b || "complete" == v[x].readyState
                }())
                    return void ($ = $ || setInterval(function() {
                        "complete" == v[x].readyState && clearInterval($),
                        u(null, !0)
                    }, 50));
                if (0 != $dp.status)
                    return;
                $dp.status = 1,
                o.el = _,
                f(o, !0)
            } else if (o.eCont)
                o.eCont = $dp.$(o.eCont),
                o.el = _,
                o.autoPickDate = !0,
                o.qsEnabled = !1,
                f(o);
            else {
                if (h.$preLoad && 2 != $dp.status)
                    return;
                var l = a();
                if ((b.event === l || l) && (o.srcEl = l.srcElement || l.target,
                l.cancelBubble = !0),
                o.el = o.el = $dp.$(o.el || o.srcEl),
                !o.el || !0 === o.el.My97Mark || o.el.disabled || $dp.dd && "none" != p($dp.dd) && "-970px" != $dp.dd.style.left) {
                    try {
                        o.el.My97Mark && (o.el.My97Mark = !1)
                    } catch (t) {}
                    return
                }
                l && 1 == o.el.nodeType && !i(o.el.initcfg, n) && ($dp.unbind(o.el),
                e(o.el, "focus" == l.type ? "onclick" : "onfocus", function() {
                    u(n)
                }),
                o.el.initcfg = n),
                f(o)
            }
        }
    }
    function d(t, e) {
        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e]
    }
    function p(t, e) {
        if (t) {
            if (null == e)
                return d(t, "display");
            t.style.display = e
        }
    }
    function f(t, e) {
        function n(t, e) {
            function n() {
                var n = e.getRealLang();
                t.lang = n.name,
                t.skin = e.skin;
                var l = ["<head><script>", "", "var doc=document, $d, $dp, $cfg=doc.cfg, $pdp = parent.$dp, $dt, $tdt, $sdt, $lastInput, $IE=$pdp.ie, $FF = $pdp.ff,$OPERA=$pdp.opera, $ny, $cMark = false;", "if($cfg.eCont){$dp = {};for(var p in $pdp)$dp[p]=$pdp[p];}else{$dp=$pdp;};for(var p in $cfg){$dp[p]=$cfg[p];}", "doc.oncontextmenu=function(){try{$c._fillQS(!$dp.has.d,0);showB($d.qsDivSel);}catch(e){};return false;};", "<\/script><script src=//s.thsi.cn/js/quant/lib/wdatepicker/lang/", n.name, ".js charset=", n.charset, "><\/script>"];
                a && (l[1] = 'document.domain="' + r + '";');
                for (var u = 0; u < s.length; u++)
                    s[u].name == e.skin && l.push('<link rel="stylesheet" type="text/css" href="//s.thsi.cn/js/quant/lib/wdatepicker/skin/' + s[u].name + '/datepicker.css" charset="' + s[u].charset + '"/>');
                l.push("<script src=//s.thsi.cn/js/quant/lib/wdatepicker/calendar.js><\/script>"),
                l.push('</head><body leftmargin="0" topmargin="0" tabindex=0></body></html>'),
                l.push("<script>var t;t=t||setInterval(function(){if(doc.ready){new My97DP();$cfg.onload();$c.autoSize();$cfg.setPos($dp);clearInterval(t);}},20);<\/script>"),
                e.setPos = i,
                e.onload = c,
                o.write("<html>"),
                o.cfg = e,
                o.write(l.join("")),
                o.close()
            }
            var r = v[x].domain
              , a = !1;
            t.innerHTML = '<iframe hideFocus=true width=9 height=7 frameborder=0 border=0 scrolling=no src="about:blank"></iframe>';
            var o, s = (h.$langList,
            h.$skinList);
            try {
                o = t.lastChild.contentWindow[x]
            } catch (e) {
                a = !0,
                t.removeChild(t.lastChild);
                var l = v[x].createElement("iframe");
                return l.hideFocus = !0,
                l.frameBorder = 0,
                l.scrolling = "no",
                l.src = "javascript:(function(){var d=document;d.open();d.domain='" + r + "';})()",
                t.appendChild(l),
                void setTimeout(function() {
                    o = t.lastChild.contentWindow[x],
                    n()
                }, 97)
            }
            n()
        }
        function i(t) {
            var e = t.position.left
              , n = t.position.top
              , i = t.el;
            if (i != _) {
                i == t.srcEl || "none" != p(i) && "hidden" != i.type || (i = t.srcEl);
                var l = a(i)
                  , c = r(b)
                  , u = o(v)
                  , d = s(v)
                  , f = $dp.dd.offsetHeight
                  , h = $dp.dd.offsetWidth;
                if (isNaN(n) && (n = 0),
                c.topM + l.bottom + f > u.height && c.topM + l.top - f > 0)
                    n += d.top + c.topM + l.top - f - 2;
                else {
                    n += d.top + c.topM + l.bottom;
                    var g = n - d.top + f - u.height;
                    g > 0 && (n -= g)
                }
                isNaN(e) && (e = 0),
                e += d.left + Math.min(c.leftM + l.left, u.width - h - 5) - (m ? 2 : 0),
                t.dd.style.top = n + "px",
                t.dd.style.left = e + "px"
            }
        }
        var l = t.el ? t.el.nodeName : "INPUT";
        if (e || t.eCont || new RegExp(/input|textarea|div|span|p|a/gi).test(l)) {
            if (t.elProp = "INPUT" == l ? "value" : "innerHTML",
            "auto" == t.lang && (t.lang = m ? navigator.browserLanguage.toLowerCase() : navigator.language.toLowerCase()),
            !t.eCont)
                for (var u in t)
                    $dp[u] = t[u];
            !$dp.dd || t.eCont || $dp.dd && (t.getRealLang().name != $dp.dd.lang || t.skin != $dp.dd.skin) ? t.eCont ? n(t.eCont, t) : ($dp.dd = v[x].createElement("DIV"),
            $dp.dd.style.cssText = "position:absolute",
            v[x].body.appendChild($dp.dd),
            n($dp.dd, t),
            e ? $dp.dd.style.left = $dp.dd.style.top = "-970px" : ($dp.show(),
            i($dp))) : $dp.cal && ($dp.show(),
            $dp.cal.init(),
            $dp.eCont || i($dp))
        }
    }
    var h = {
        $langList: [{
            name: "en",
            charset: "UTF-8"
        }, {
            name: "zh-cn",
            charset: "gb2312"
        }, {
            name: "zh-tw",
            charset: "GBK"
        }],
        $skinList: [{
            name: "default",
            charset: "gb2312"
        }, {
            name: "whyGreen",
            charset: "gb2312"
        }, {
            name: "blue",
            charset: "gb2312"
        }, {
            name: "green",
            charset: "gb2312"
        }, {
            name: "simple",
            charset: "gb2312"
        }, {
            name: "ext",
            charset: "gb2312"
        }, {
            name: "blueFresh",
            charset: "gb2312"
        }, {
            name: "twoer",
            charset: "gb2312"
        }, {
            name: "grey",
            charset: "gb2312"
        }, {
            name: "greyplus",
            charset: "gb2312"
        }, {
            name: "smorrebrod",
            charset: "gb2312"
        }],
        $wdate: !0,
        $crossFrame: !0,
        $preLoad: !1,
        $dpPath: "",
        doubleCalendar: !1,
        enableKeyboard: !0,
        enableInputMask: !0,
        autoUpdateOnChanged: null,
        weekMethod: "ISO8601",
        position: {},
        lang: "auto",
        skin: "smorrebrod",
        dateFmt: "yyyy-MM-dd",
        realDateFmt: "yyyy-MM-dd",
        realTimeFmt: "HH:mm:ss",
        realFullFmt: "%Date %Time",
        minDate: "1900-01-01 00:00:00",
        maxDate: "2099-12-31 23:59:59",
        startDate: "",
        alwaysUseStartDate: !1,
        yearOffset: 1911,
        firstDayOfWeek: 0,
        isShowWeek: !1,
        highLineWeekDay: !1,
        isShowClear: !1,
        isShowToday: !1,
        isShowOK: !1,
        isShowOthers: !0,
        readOnly: !0,
        errDealMode: 0,
        autoPickDate: null,
        qsEnabled: !0,
        autoShowQS: !1,
        opposite: !1,
        hmsMenuCfg: {
            H: [1, 6],
            m: [5, 6],
            s: [15, 4]
        },
        opposite: !1,
        specialDates: null,
        specialDays: null,
        disabledDates: null,
        disabledDays: null,
        onpicking: null,
        onpicked: null,
        onclearing: null,
        oncleared: null,
        ychanging: null,
        ychanged: null,
        Mchanging: null,
        Mchanged: null,
        dchanging: null,
        dchanged: null,
        Hchanging: null,
        Hchanged: null,
        mchanging: null,
        mchanged: null,
        schanging: null,
        schanged: null,
        eCont: null,
        vel: null,
        elProp: "",
        errMsg: "",
        quickSel: [],
        has: {},
        getRealLang: function() {
            for (var t = h.$langList, e = 0; e < t.length; e++)
                if (t[e].name == this.lang)
                    return t[e];
            return t[0]
        }
    };
    WdatePicker = u;
    var v, m, g, y, b = window, _ = {
        innerHTML: ""
    }, x = "document", k = "documentElement", w = "getElementsByTagName", C = navigator.appName;
    if ("Microsoft Internet Explorer" == C ? m = !0 : "Opera" == C ? y = !0 : g = !0,
    h.$dpPath || function() {
        for (var t, e, n = b[x][w]("script"), i = 0; i < n.length && (t = n[i].getAttribute("src") || "",
        t = t.substr(0, t.toLowerCase().indexOf("wdatepicker.js")),
        e = t.lastIndexOf("/"),
        e > 0 && (t = t.substring(0, e + 1)),
        !t); i++)
            ;
        return t
    }(),
    h.$wdate && function(t, e, n) {
        var i = b[x][w]("HEAD").item(0)
          , r = b[x].createElement("link");
        i && (r.href = t,
        r.rel = "stylesheet",
        r.type = "text/css",
        e && (r.title = e),
        n && (r.charset = n),
        i.appendChild(r))
    }("//s.thsi.cn/js/quant/lib/wdatepicker/skin/WdatePicker.css"),
    v = b,
    h.$crossFrame)
        try {
            for (; v.parent != v && 0 == v.parent[x][w]("frameset").length; )
                v = v.parent
        } catch (t) {}
    v.$dp || (v.$dp = {
        ff: g,
        ie: m,
        opera: y,
        status: 0,
        defMinDate: h.minDate,
        defMaxDate: h.maxDate
    }),
    t(),
    h.$preLoad && 0 == $dp.status && e(b, "onload", function() {
        u(null, !0)
    }),
    b[x].docMD || (e(b[x], "onmousedown", l, !0),
    b[x].docMD = !0),
    v[x].docMD || (e(v[x], "onmousedown", l, !0),
    v[x].docMD = !0),
    e(b, "onunload", function() {
        $dp.dd && p($dp.dd, "none")
    });
    var $
}(),
define("wdatepicker", function() {}),
define("datemethod", [], function() {
    return {
        getToday: function() {
            var t = new Date;
            return this.formatDate(t)
        },
        getTodayThirty: function() {
            var t = new Date
              , e = new Date(t - 2592e6)
              , n = e.getFullYear()
              , i = e.getMonth() + 1
              , r = e.getDate();
            return i = i < 10 ? "0" + i : i,
            r = r < 10 ? "0" + r : r,
            n + "-" + i + "-" + r
        },
        getYesterday: function() {
            var t = new Date;
            return t.setDate(t.getDate() - 1),
            this.formatDate(t)
        },
        getLastWeekday: function() {
            var t = new Date;
            return t.setDate(t.getDate() - 7),
            this.formatDate(t)
        },
        getLastSomeMonthday: function(t) {
            var e = new Date;
            return e.setMonth(e.getMonth() - t),
            this.formatDate(e)
        },
        getLastYearToday: function(t) {
            var e = t ? new Date(t) : new Date
              , n = e.getFullYear() - 1
              , i = e.getMonth() + 1;
            return t = e.getDate(),
            i = i < 10 ? "0" + i : i,
            t = t < 10 ? "0" + t : t,
            2 === i && 29 === t && (t = 28),
            n + "-" + i + "-" + t
        },
        getLastYearYesterday: function() {
            var t = new Date;
            return t.setDate(t.getDate() - 1),
            t.setFullYear(t.getFullYear() - 1),
            this.formatDate(t)
        },
        getLastMonthLastDay: function() {
            var t = new Date
              , e = new Date(t.getFullYear(),t.getMonth(),0);
            return this.formatDate(e)
        },
        formatDate: function(t) {
            var e = new Date(t)
              , n = e.getFullYear()
              , i = e.getMonth() + 1
              , r = e.getDate();
            return i = i < 10 ? "0" + i : i,
            r = r < 10 ? "0" + r : r,
            n + "-" + i + "-" + r
        },
        changeDateVal: function(t) {
            return t.substring(0, 4) + "-" + t.substring(4, 6) + "-" + t.substring(6)
        },
        sortArrByDate: function(t) {
            return t.sort(function(t, e) {
                return Number(t.date) > Number(e.date) ? 1 : -1
            }),
            t
        },
        getWeekByDay: function(t) {
            return ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][new Date(Date.parse(t)).getDay()]
        },
        getDateAndTimeByReg: function(t) {
            if (t) {
                var e = new RegExp("([0-9-]+)[T|\\s]([0-9:]+)")
                  , n = t.match(e);
                return {
                    date: n[1],
                    time: n[2]
                }
            }
        },
        pad: function(t) {
            return t < 10 ? "0" + t : t
        },
        toTimeString: function(t) {
            var e = new Date(t);
            return e.getFullYear() + "-" + this.pad(e.getMonth() + 1) + "-" + this.pad(e.getDate()) + " " + this.pad(e.getHours()) + ":" + this.pad(e.getMinutes()) + ":" + this.pad(e.getSeconds())
        },
        getTime: function(t) {
            var e = this.changeDateVal(t);
            return new Date(e).getTime()
        }
    }
}),
define("../lib/datamethod", [], function() {
    return {
        dealBacktestValue: function(t, e) {
            return null === t || void 0 === t ? NaN : e ? Number(100 * t).toFixed(2) + "%" : t.toFixed(2)
        },
        getByteLength: function(t) {
            if (!t)
                return 0;
            for (var e = 0, n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                i < 19968 || i > 40869 ? e++ : e += 2
            }
            return e
        },
        formatPerfomanceData: function(t, e, n) {
            return t.hasOwnProperty(e) && null !== t[e] ? n ? Number(100 * t[e]).toFixed(2) + "%" : Number(t[e]).toFixed(2) : "--"
        },
        formatPercentData: function(t, e) {
            return void 0 === t || "--" === t ? "--" : e ? Number(100 * t).toFixed(2) + "%" : Number(t).toFixed(2)
        },
        initPreAceStyle: function(t, e) {
            t.find("code").each(function(t) {
                var n = $(this).attr("class") || "lang-markdown";
                if (n && "lang" === n.substring(0, 4)) {
                    var i = n.substring(5, n.length)
                      , r = $(this).html()
                      , a = $(this).parent().empty()
                      , o = e.edit(a[0]);
                    o.$blockScrolling = 1 / 0,
                    o.setTheme("ace/theme/chrome"),
                    o.getSession().setMode("ace/mode/" + i),
                    o.setValue(r),
                    o.renderer.setShowInvisibles(!1),
                    o.renderer.setShowPrintMargin(!1),
                    o.setOptions({
                        maxLines: 1 / 0
                    }),
                    o.setReadOnly(!0),
                    o.clearSelection()
                }
            })
        },
        toEscape: function(t) {
            return t = t.replace(/&#039;/g, "'"),
            t = t.replace(/&lt;/g, "<"),
            t = t.replace(/&gt;/g, ">"),
            t = t.replace(/&quot;/g, '"'),
            marked(t)
        },
        HtmlEncode: function(t) {
            var e = document.createElement("div");
            null !== e.textContent ? e.textContent = t : e.innerText = t;
            var n = e.innerHTML;
            return n = n.replace(/(")/g, "&quot;"),
            e = null,
            n
        },
        HtmlDecode: function(t) {
            var e = document.createElement("div");
            e.innerHTML = t;
            var n = e.innerText || e.textContent;
            return n = n.replace(/&quot;/g, '"'),
            e = null,
            n
        },
        textEllipsis: function(t, e) {
            return t.length <= e ? t : t.substr(0, e) + "…"
        }
    }
}),
define("../components/strategy-lib/ace-area/ace-area", ["require", "exports", "module", "VueAjax", "VueConfig", "commonFunc", "dialog"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig")
      , a = t("commonFunc")
      , o = t("dialog");
    n.exports = Vue.extend({
        template: '<div id="customcode_editorbox" class="editorbox"><div class="editorbox-toolbar clearfix"><div class="divider clearfix"><div id="editorfull2" style="right: 0px; display: block;" class="btn-editorfull" v-show="!aceSpread" @click="aceSpreadTrue">&gt;</div><div id="editorfull2" style="right: 0px; display: block;" class="btn-editorfull" v-show="aceSpread" @click="aceSpreadFalse">&lt;</div><div id="btn_copystrategy" class="icon-num" title="复制次数">{{copyNum}}</div><div id="btn_copystrategy" class="btn-copy" v-stat2:click.clickcontent="{ id: \'CLK_appCons_button\' }" @click="strategyCopyClick"><span class="icon-copy"></span><span class="txt-copy">复制</span></div><div class="code-title"><span :title="strategyChoosed.backtest_name">{{strategyChoosed.backtest_name}}</span><span><p :class="stockMarketType | stockMarketClass" style="height: 28px;width: 70px;line-height: 28px;text-align: center;margin-left: 10px;vertical-align: middle;display: inline-block;">{{stockMarketType | stockMarket}}</p></span></div><div id="btn_editor_setting" class="icon btn-setting" @click.stop="changeSettingShow"><div id="menu_editor_setting" class="editor-setting-menu" v-show="settingShow"><div class="menu-group"><div data-fontsize="14" class="menu-item" :class="{menu_item_select:fontSizeShowControl[14]}" @click="fontsizeChange(fontSize[0])"><span class="text">小号字体</span><span class="icon icon-check"></span></div><div data-fontsize="17" class="menu-item " :class="{menu_item_select:fontSizeShowControl[17]}" @click="fontsizeChange(fontSize[1])"><span class="text">中号字体</span><span class="icon icon-check"></span></div><div data-fontsize="20" class="menu-item" :class="{menu_item_select:fontSizeShowControl[20]}" @click="fontsizeChange(fontSize[2])"><span class="text">大号字体</span><span class="icon icon-check"></span></div></div><div class="menu-group"><div data-theme="chrome" class="menu-item" :class="{menu_item_select:themeShowControl.chrome}" @click="themeChange(theme[0])"><span class="text">浅色背景</span><span class="icon icon-check"></span></div><div data-theme="monokai" class="menu-item" :class="{menu_item_select:themeShowControl.monokai}" @click="themeChange(theme[1])"><span class="text">深色背景</span><span class="icon icon-check"></span></div></div><div class="menu-group"><div data-keyboard="ace" class="menu-item" :class="{menu_item_select:keyboardShowControl.ace}" @click="keyboardChange(keyboard[0])"><span class="text">默认</span><span class="icon icon-check"></span></div><div data-keyboard="vim" class="menu-item" :class="{menu_item_select:keyboardShowControl.vim}" @click="keyboardChange(keyboard[1])"><span class="text">Vim</span><span class="icon icon-check"></span></div><div data-keyboard="emacs" class="menu-item" :class="{menu_item_select:keyboardShowControl.emacs}" @click="keyboardChange(keyboard[2])"><span class="text">Emacs</span><span class="icon icon-check"></span></div></div></div></div></div></div><div id="zUI_editor" style="height:calc(100% - 41px);width:100%;" class="zUIpanel"><div id="editor" style="height:100%;width:100%;" class="editorbox-editor"></div></div></div>',
        props: {},
        data: function() {
            return {
                fontSize: [14, 17, 20],
                theme: ["chrome", "monokai"],
                keyboard: ["ace", "vim", "emacs"],
                fontSizeShowControl: {
                    14: !1,
                    17: !0,
                    20: !1
                },
                themeShowControl: {
                    chrome: !0,
                    monokai: !1
                },
                keyboardShowControl: {
                    ace: !0,
                    vim: !1,
                    emacs: !1
                },
                editor: "",
                copyNum: 0
            }
        },
        filters: {
            stockMarketClass: function(t) {
                switch (t) {
                case "TICK":
                case "FOREX":
                case "METAL":
                case "STOCK":
                case "FUTURES":
                case "STKFUS":
                    return "blue";
                default:
                    return "gray"
                }
            },
            stockMarket: function(t) {
                switch (t) {
                case "TICK":
                    return "股票T+0";
                case "FOREX":
                    return "外汇";
                case "METAL":
                    return "T+D";
                case "STOCK":
                    return "股票";
                case "FUTURES":
                    return "期货";
                case "STKFUS":
                    return "股票期货";
                default:
                    return "股票"
                }
            }
        },
        computed: {
            stockMarketType: function() {
                if (this.$store.state.backtestInfo)
                    return this.$store.state.backtestInfo.hasOwnProperty("stock_market") ? this.$store.state.backtestInfo.stock_market : "A"
            },
            backtestinfo: function() {
                return this.$store.state.backtestInfo
            },
            backtestid: function() {
                return this.$store.state.backtestId
            },
            strategyChoosed: function() {
                return this.$store.state.strategyChoosed
            },
            aceSpread: function() {
                return this.$store.state.aceSpread
            },
            settingShow: function() {
                return this.$store.state.settingShow
            },
            aceSetting: function() {
                return this.$store.state.aceSetting
            },
            isIfind: function() {
                return window.location.href.indexOf("ifind") > -1
            }
        },
        watch: {
            backtestid: function(t) {
                null !== this.backtestinfo && this.backtestinfo.code && (this.restartEditor(this.backtestinfo.code),
                this.getCopyNum(t))
            }
        },
        methods: {
            strategyCopyClick: function() {
                var t = this.strategyChoosed.backtest_name
                  , e = this.backtestinfo.code
                  , n = this.backtestinfo.hasOwnProperty("stock_market") ? this.backtestinfo.stock_market : "A"
                  , s = this.strategyChoosed.backtest_id
                  , l = this;
                $("body").append('<div id="newAlert"></div>');
                var c = new o({
                    el: $("#newAlert")
                });
                c.render({
                    title: "新建策略",
                    content: '<div class="input">                        <input type="text" id="dialog_alert_input" value="">                    </div>                    <div class="warn"></div>',
                    okEvent: function() {
                        TA.log(l.isIfind ? {
                            id: "mindgo_wdcl_clk.copy.1",
                            ld: "ifind"
                        } : "mindgo_wdcl_clk.copy.1");
                        var t = $("#dialog_alert_input").val();
                        if ("" === t)
                            return void a.warningTip("策略名称不能为空");
                        i.jsonp({
                            url: r.ajax["strategy-lib"].strategysAdd,
                            data: {
                                algoName: t,
                                algoCode: e,
                                stock_market: n
                            },
                            success: function(t) {
                                i.jsonp({
                                    url: r.ajax["strategy-lib"].recordclone,
                                    data: {
                                        backtest_id: s
                                    },
                                    success: function(e) {
                                        if (!t._id)
                                            return a.warningTip("新增策略返回数据格式错误"),
                                            !1;
                                        a.tip("新建策略成功"),
                                        location.href = -1 !== window.location.pathname.indexOf("ifind") ? "study-ifind.html?strategyid=" + t._id : "study.html?strategyid=" + t._id
                                    },
                                    resulterror: function(t) {
                                        a.warningTip(t.errormsg)
                                    }
                                })
                            },
                            resulterror: function(t) {
                                a.warningTip(t.errormsg)
                            }
                        }),
                        c.hide()
                    },
                    cancelEvent: function() {
                        TA.log(l.isIfind ? {
                            id: "mindgo_wdcl_clk.copy.0",
                            ld: "ifind"
                        } : "mindgo_wdcl_clk.copy.0"),
                        c.hide()
                    }
                }).show(),
                $("#dialog_alert_input").focus().val(t)
            },
            aceSpreadTrue: function() {
                $("#customcode_editorbox").removeAttr("style"),
                $(".backrepottbox").removeAttr("style"),
                this.$store.state.aceSpread = !0,
                this.$store.state.backreportShow = !1
            },
            aceSpreadFalse: function() {
                var t = this;
                $("#customcode_editorbox").removeAttr("style"),
                $(".backrepottbox").removeAttr("style"),
                $(".backrepottbox").css("display", "none"),
                this.$store.state.aceSpread = !1,
                setTimeout(function() {
                    t.$store.state.backreportShow = !0
                }, 600)
            },
            changeSettingShow: function() {
                this.$store.state.settingShow = !this.$store.state.settingShow
            },
            fontsizeChange: function(t) {
                var e = this;
                this.$store.state.aceSetting.fontSize = t,
                localStorage.setItem("fontsize", t),
                $.each(this.fontSizeShowControl, function(t, n) {
                    e.fontSizeShowControl[t] = !1
                }),
                e.fontSizeShowControl[t] = !0,
                this.renderEditorSetting()
            },
            themeChange: function(t) {
                var e = this;
                this.$store.state.aceSetting.theme = t,
                localStorage.setItem("theme", t),
                $.each(this.themeShowControl, function(t, n) {
                    e.themeShowControl[t] = !1
                }),
                e.themeShowControl[t] = !0,
                this.renderEditorSetting()
            },
            keyboardChange: function(t) {
                var e = this;
                this.$store.state.aceSetting.keyboard = t,
                localStorage.setItem("keyboard", t),
                $.each(this.keyboardShowControl, function(t, n) {
                    e.keyboardShowControl[t] = !1
                }),
                e.keyboardShowControl[t] = !0,
                this.renderEditorSetting()
            },
            showSettingMenu: function() {},
            renderEditorSetting: function() {
                var t = this.$store.state.aceSetting;
                this.$nextTick(function() {
                    a.editor.setTheme("ace/theme/" + t.theme),
                    a.editor.setFontSize(parseInt(t.fontSize)),
                    a.editor.setPrintMarginColumn(5e3),
                    a.editor.setOptions({
                        enableSnippets: !0
                    }),
                    "ace" === t.keyboard ? a.editor.setKeyboardHandler(null) : a.editor.setKeyboardHandler("ace/keyboard/" + t.keyboard)
                })
            },
            restartEditor: function(t) {
                if (a.editor)
                    return void a.editor.getSession().setValue(t || "");
                $("#zUI_editor").html('<div id="editor" class="editorbox-editor" style="width:100%;height:100%"></div>'),
                a.editor = ace.edit("editor"),
                a.editor.$blockScrolling = 1 / 0,
                a.editor.getSession().setMode("ace/mode/python"),
                a.editor.getSession().setValue(t || ""),
                this.renderEditorSetting(),
                a.editor.setReadOnly(!0)
            },
            getCopyNum: function(t) {
                var e = this;
                i.jsonp({
                    url: r.ajax["strategy-lib"].queryclonenum,
                    data: {
                        backtest_id: t
                    },
                    success: function(t) {
                        e.copyNum = t
                    },
                    resulterror: function(t) {
                        a.warningTip(t.errormsg)
                    }
                })
            }
        },
        mounted: function() {
            var t = localStorage.getItem("theme")
              , e = localStorage.getItem("fontsize")
              , n = localStorage.getItem("keyboard");
            t || (t = this.theme[0]),
            e || (e = this.fontSize[1]),
            n || (n = this.keyboard[0]),
            this.restartEditor(),
            this.themeChange(t),
            this.fontsizeChange(e),
            this.keyboardChange(n)
        },
        created: function() {}
    })
}),
define("../components/strategy-lib/log/strategybox", ["require", "exports", "module", "VueAjax", "VueConfig"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig");
    n.exports = Vue.extend({
        template: '<div id="zUI_logbox" class="backrepottbox-content zUIpanel" style="overflow-y:hidden">\x3c!-- <div id="customcode_backreporttbox_errordata" class="log-content"><div v-for="row in logdata.logs"><p class="line1"><span class="date">{{ row.time }}</span><span> - </span><span class="type type-info">{{ row.type }}</span></p><pre class="line2 message" v-html="row.value"></pre></div></div> --\x3e<iframe :src="iframeUrl" frameborder="0" width="100%" height="100%"></iframe></div>',
        props: ["logdata", "pagecount"],
        data: function() {
            return {
                logPage: 2,
                pageNum: 100,
                logFlag: !0
            }
        },
        computed: {
            iframeUrl: function() {
                return this.iframeHave ? "//" + this.researchurl.split("//")[1] : ""
            },
            iframeHave: function() {
                return !!this.researchresult
            },
            researchurl: function() {
                return this.$store.state.researchurl
            },
            researchresult: function() {
                return this.$store.state.researchresult
            },
            backtestid: function() {
                return this.$store.state.backtestId
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.onScroll()
            })
        },
        methods: {
            onScroll: function() {
                var t = this;
                $("#zUI_logbox").scroll(function() {
                    var e = $(this)
                      , n = e.height()
                      , i = e.get(0).scrollHeight;
                    n + e.scrollTop() + 10 >= i && t.logFlag && t.pagecount >= t.logPage && (t.logFlag = !1,
                    t.requestLogData())
                })
            },
            requestLogData: function() {
                var t = this;
                i.jsonp({
                    url: r.ajax["study-strategy"].getBacktestlog,
                    data: {
                        backTestId: t.backtestid,
                        page: t.logPage,
                        num: t.pageNum,
                        nocacheFlag: !0
                    },
                    success: function(e) {
                        var n = e.total
                          , i = e.list;
                        if (t.total = n,
                        t.logPage = t.logPage + 1,
                        t.logFlag = !0,
                        i) {
                            for (var r = i.length, a = 0; a < r; a++)
                                "INFO" !== i[a].type && "WARN" !== i[a].type || t.logdata.logs.push(i[a]);
                            t.getSelectedIndex = 0
                        }
                    }
                })
            }
        }
    })
}),
define("../components/strategy-lib/log/sumi-trade", ["require", "exports", "module", "VueAjax", "VueConfig"], function(t, e, n) {
    t("VueAjax"),
    t("VueConfig");
    n.exports = Vue.extend({
        template: '<div id="zUI_wrongbox" class="backrepottbox-content zUIpanel" style="overflow-y:hidden">\x3c!-- <div id="customcode_backreporttbox_errordata" class="log-content"><div v-for="row in logdata.errorLogs"><p class="line1"><span class="date">{{ row.time }}</span><span> - </span><span class="type type-error">{{ row.type }}</span></p><pre class="line2 message" v-html="row.value"></pre></div></div> --\x3e<iframe :src="iframeUrl" frameborder="0" width="100%" height="100%"></iframe></div>',
        props: ["logdata"],
        computed: {
            iframeUrl: function() {
                return this.iframeHave ? "iframe-simu-trade.html?backtestId=" + this.strategyChoosed.simu_algo_id : ""
            },
            iframeHave: function() {
                return !!this.strategyChoosed.simu_algo_id
            },
            strategyChoosed: function() {
                return this.$store.state.strategyChoosed
            }
        }
    })
}),
define("../components/strategy-lib/log/nopage", ["require", "exports", "module", "VueAjax", "VueConfig"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig");
    n.exports = Vue.extend({
        template: '<div id="zUI_logbox" class="backrepottbox-content zUIpanel"><div style="    width: 150px;text-align: center;position: absolute;left: 50%;top: 50%;margin-left: -75px;margin-top: -75px;font-size:16px;"><img src="//i.thsi.cn/images/quant/201706161111/empty.png" style="width:100%;"><p>暂无内容</p></div></div>',
        props: ["logdata", "pagecount"],
        data: function() {
            return {
                logPage: 2,
                pageNum: 100,
                logFlag: !0
            }
        },
        computed: {
            iframeUrl: function() {
                return this.iframeHave ? this.strategyChoosed.research_info.uri : ""
            },
            iframeHave: function() {
                return !(!this.strategyChoosed.research_info || !this.strategyChoosed.research_info.uri)
            },
            strategyChoosed: function() {
                return this.$store.state.strategyChoosed
            },
            backtestid: function() {
                return this.$store.state.backtestId
            }
        },
        mounted: function() {
            this.$nextTick(function() {
                this.onScroll()
            })
        },
        methods: {
            onScroll: function() {
                var t = this;
                $("#zUI_logbox").scroll(function() {
                    var e = $(this)
                      , n = e.height()
                      , i = e.get(0).scrollHeight;
                    n + e.scrollTop() + 10 >= i && t.logFlag && t.pagecount >= t.logPage && (t.logFlag = !1,
                    t.requestLogData())
                })
            },
            requestLogData: function() {
                var t = this;
                i.jsonp({
                    url: r.ajax["study-strategy"].getBacktestlog,
                    data: {
                        backTestId: t.backtestid,
                        page: t.logPage,
                        num: t.pageNum,
                        nocacheFlag: !0
                    },
                    success: function(e) {
                        var n = e.total
                          , i = e.list;
                        if (t.total = n,
                        t.logPage = t.logPage + 1,
                        t.logFlag = !0,
                        i) {
                            for (var r = i.length, a = 0; a < r; a++)
                                "INFO" !== i[a].type && "WARN" !== i[a].type || t.logdata.logs.push(i[a]);
                            t.getSelectedIndex = 0
                        }
                    }
                })
            }
        }
    })
}),
define("../components/strategy-lib/log/log", ["require", "exports", "module", "VueAjax", "VueConfig", "./strategybox", "./sumi-trade", "./nopage", "commonFunc"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig")
      , a = t("./strategybox")
      , o = t("./sumi-trade")
      , s = t("./nopage");
    t("commonFunc");
    n.exports = Vue.extend({
        template: '<div id="customcode_backrepottbox_logpanel" class="backrepottbox-logpanel" :style="theme"><div class="navs clearfix"><div class="nav-item" v-show="strategyResearchShow" :class="getSelectedIndex === 0 ? activeClass : null" @click="switchTab(0)">策略研究</div><div class="nav-item" v-show="simuShow" :class="getSelectedIndex === 1 ? activeClass : null" @click="switchTab(1)">模拟交易</div><div class="nav-item hide">对比</div></div><div data-type="1" class="btn-logfull" v-show="!logSpread" @click="logSpreadTrue">∧</div><div data-type="2" class="btn-logfull" v-show="logSpread" @click="logSpreadFalse">∨</div><component :is="selectedComponet" keep-alive=""></component></div>',
        components: {
            "stugy-strategy-strategybox": a,
            "stugy-sumi-trade": o,
            "stugy-nopage": s
        },
        data: function() {
            return {
                interval: null,
                getSelectedIndex: 2,
                componentList: ["stugy-strategy-strategybox", "stugy-sumi-trade", "stugy-nopage"],
                logData: {
                    logs: [],
                    errorLogs: []
                },
                activeClass: "nav-item-active",
                logPage: 1,
                logErrorPage: 1,
                pageNum: 100,
                pageCount: 0,
                hasError: !1
            }
        },
        watch: {
            strategyResearchShow: {
                deep: !0,
                handler: function(t) {
                    !1 === t && this.simuShow ? this.getSelectedIndex = 1 : !0 === t && (this.getSelectedIndex = 0)
                }
            },
            simuShow: {
                deep: !0,
                handler: function(t) {
                    !1 === t && this.strategyResearchShow && (this.getSelectedIndex = 0)
                }
            },
            backtestid: function(t) {
                this.$store.commit("updateresearchresult", {}),
                this.$store.commit("updateresearchurl", "");
                var e = this;
                return this.$store.state.strategyChoosed.research_id ? (i.jsonp({
                    url: r.ajax["strategy-lib"].researchinfo,
                    data: {
                        research_id: e.$store.state.strategyChoosed.research_id
                    },
                    success: function(t) {
                        e.$store.commit("updateresearchresult", t),
                        e.$store.commit("updateresearchurl", t.uri)
                    }
                }),
                this.$store.state.strategyChoosed && e.$store.state.researchresult && e.$store.state.researchurl ? void (this.getSelectedIndex = 0) : this.$store.state.strategyChoosed && !e.$store.state.researchresult && this.$store.state.strategyChoosed.simu_algo_id ? void (this.getSelectedIndex = 1) : void (this.getSelectedIndex = 2)) : (this.strategyResearchShow = !1,
                this.simuShow = !1,
                void (this.getSelectedIndex = 2))
            }
        },
        computed: {
            strategyResearchShow: function() {
                return !!(this.$store.state.strategyChoosed && this.$store.state.researchresult && this.$store.state.researchurl)
            },
            simuShow: function() {
                return !(!this.$store.state.strategyChoosed || !this.$store.state.strategyChoosed.simu_algo_id)
            },
            strategyChoosed: function() {
                return this.$store.state.strategyChoosed
            },
            logSpread: function() {
                return this.$store.state.logSpread
            },
            backtestid: function() {
                return this.$store.state.backtestId
            },
            selectedComponet: function() {
                return this.componentList[this.getSelectedIndex]
            },
            getGlobalError: function() {
                return this.$store.state.errorLogs
            },
            getTheme: function() {
                return this.$store.state.aceSetting.theme
            },
            theme: function() {
                return {
                    background: "#fff"
                }
            }
        },
        methods: {
            logSpreadTrue: function() {
                this.$store.state.logSpread = !0
            },
            logSpreadFalse: function() {
                this.$store.state.logSpread = !1
            },
            resetLog: function() {
                this.logData = {
                    logs: [],
                    errorLogs: []
                }
            },
            switchTab: function(t) {
                this.getSelectedIndex = t
            }
        }
    })
}),
define("../components/strategy-lib/strategy-lib", ["require", "exports", "module", "VueAjax", "VueConfig", "../../views/common/header", "../strategy-lib/strategy-index/strategy-index", "../strategy-lib/backreport/backreport", "../strategy-lib/ace-area/ace-area", "../strategy-lib/log/log", "commonFunc"], function(t, e, n) {
    var i = t("VueAjax")
      , r = t("VueConfig")
      , a = (t("../../views/common/header"),
    t("../strategy-lib/strategy-index/strategy-index"))
      , o = t("../strategy-lib/backreport/backreport")
      , s = t("../strategy-lib/ace-area/ace-area")
      , l = t("../strategy-lib/log/log")
      , c = t("commonFunc")
      , u = function() {
        $("#menu_strategy").remove()
    };
    n.exports = Vue.extend({
        template: '<div v-stat2:mount="{ id: \'CLK\' }" style="height:100%;position:relative;" :class="{index_shrink:indexShow,ace_spread:aceSpread}" @click="closeAll"><div class="customcode-container clearfix" style="height: 98%; position:relative; margin-top: 0;padding-top: 0.8%;"><stgy-index></stgy-index><div class="spread_index" v-show="spreadShow" @click="spreadClick"><b class="pic spread"></b><span class="word">展开目录</span></div><customcode-editorbox></customcode-editorbox><div class="backrepottbox" v-show="backreportShow" :class="{log_spread:logSpread}"><backrepot-chartspanel></backrepot-chartspanel><backrepot-logpanel></backrepot-logpanel><div id="layout_adjust2" style="left:-5px;" class="layout-adjust"></div></div></div></div>',
        components: {
            "stgy-index": a,
            "customcode-editorbox": s,
            "backrepot-chartspanel": o,
            "backrepot-logpanel": l
        },
        computed: {
            logSpread: function() {
                return this.$store.state.logSpread
            },
            backreportShow: function() {
                return this.$store.state.backreportShow
            },
            aceSpread: function() {
                return this.$store.state.aceSpread
            },
            indexShow: function() {
                return this.$store.state.indexShow
            },
            spreadShow: function() {
                return this.$store.state.spreadShow
            },
            strategys: function() {
                return this.$store.state.strategys
            },
            strategyChoosed: function() {
                return this.$store.state.strategyChoosed
            }
        },
        data: function() {
            return {
                layoutAdjust2Flag: !1,
                strategyIdHas: 0,
                outStrategyId: ""
            }
        },
        watch: {},
        beforeMount: function() {
            var t = this;
            this.outStrategyId = c.getQueryString("strategyid"),
            i.jsonp({
                url: r.ajax.common.getauthdata,
                success: function(e) {
                    i.jsonp({
                        url: r.ajax["strategy-lib"].getStrategylibList,
                        success: function(e) {
                            t.$store.commit("strategyLibDataInit", e)
                        }
                    })
                }
            }),
            i.jsonp({
                url: r.ajax["strategy-lib"].getAceMessage,
                success: function(e) {
                    t.$store.commit("outerSettingInit", e)
                }
            }),
            $("body").on("mousedown", function(e) {
                "layout_adjust2" === e.target.id && (t.layoutAdjust2Flag = !0,
                $("#customcode_editorbox").addClass("f-notransition"),
                $(".backrepottbox").addClass("f-notransition"))
            }),
            $("body").on("mouseup", function(e) {
                $("#customcode_editorbox").removeClass("f-notransition"),
                $(".backrepottbox").removeClass("f-notransition"),
                t.layoutAdjust2Flag = !1
            }),
            $("body").on("mousemove", function(e) {
                var n;
                if (t.layoutAdjust2Flag)
                    if (t.$children[2].chartResize(),
                    !1 === t.$store.state.indexShow) {
                        if ((n = parseInt(100 * (e.clientX - 80) / $("#strategylib_container").width() - 15)) < 30 || n > 53)
                            return;
                        $("#customcode_editorbox").width(n + "%"),
                        $(".backrepottbox").width(79 - n + "%")
                    } else {
                        if ((n = parseInt(100 * (e.clientX - 80) / $("#strategylib_container").width() - 1.5)) < 30 || n > 66.5)
                            return;
                        $("#customcode_editorbox").width(n + "%"),
                        $(".backrepottbox").width(92 - n + "%")
                    }
            })
        },
        methods: {
            spreadClick: function() {
                $("#mf_stgy").removeAttr("style"),
                $("#customcode_editorbox").removeAttr("style"),
                $(".backrepottbox").removeAttr("style"),
                this.$store.state.indexShow = !1,
                this.$store.state.spreadShow = !1
            },
            closeAll: function() {
                $.each(this.$store.state.fileFolders, function(t, e) {
                    e.menuOpen = !1
                }),
                $.each(this.$store.state.backtestData, function(t, e) {
                    e.menuOpen = !1
                }),
                this.$store.state.settingShow = !1
            }
        },
        beforeCreate: function() {
            $("body").on("click", u)
        },
        beforeDestory: function() {
            $("body").unbind("click", u)
        }
    })
}),
define("../router/strategy-lib-router", ["../components/strategy-lib/strategy-lib"], function(t) {
    Vue.use(VueRouter);
    var e = [{
        path: "/",
        component: t
    }];
    return new VueRouter({
        routes: e
    })
}),
define("urlmethod", [], function() {
    return {
        getQueryString: function(t) {
            var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
              , n = window.location.search.substr(1).match(e);
            return null != n ? encodeURI(n[2]) : null
        },
        getHash: function(t) {
            var e = new RegExp("#" + t);
            return null != window.location.hash.match(e) ? window.location.hash.replace("#" + t, "") : null
        },
        getCookie: function(t) {
            var e, n = new RegExp("(^|)" + t + "=([^;]*)(;|$)");
            return (e = document.cookie.match(n)) ? encodeURI(e[2]) : null
        }
    }
}),
define("../vuex/strategy-lib/strategy-lib", ["require", "exports", "module", "datemethod", "urlmethod"], function(t, e, n) {
    var i = t("datemethod")
      , r = t("urlmethod")
      , a = new Vuex.Store({
        state: {
            backtestData: {},
            strategyChoosed: {},
            backtestInfo: null,
            backtestId: null,
            researchurl: "",
            researchresult: {},
            rootFolderData: [],
            fileFolders: {},
            factorData: {},
            aceSetting: {
                fontSize: 17,
                theme: "chrome",
                keyboard: "ace"
            },
            editor: "",
            indexShow: !1,
            spreadShow: !1,
            settingShow: !1,
            aceSpread: !1,
            backreportShow: !0,
            logSpread: !1,
            errorLogs: {},
            aceCode: "",
            runParams: {
                beginDate: i.getLastYearYesterday(),
                endDate: i.getLastMonthLastDay(),
                frequency: "DAILY",
                capitalBase: "1000000"
            },
            resize: !1
        },
        getters: {},
        mutations: {
            strategyLibDataInit: function(t, e) {
                var n = []
                  , i = {}
                  , a = {}
                  , o = null;
                if (e.folder) {
                    var s = r.getQueryString("strategyid");
                    $.each(e.folder, function(t, e) {
                        a[t] = {
                            name: e,
                            folderChoosed: !1,
                            menuOpen: !1,
                            data: []
                        }
                    }),
                    $.each(e.algo_bid, function(t, e) {
                        var r = e.backtest_id
                          , o = e.folder_id;
                        i["" + o + r] = e,
                        i["" + o + r].menuOpen = !1,
                        i["" + o + r].choosed = !1,
                        -1 === e.folder_id ? n.push(e) : a[e.folder_id] ? a[e.folder_id].data.push(e) : n.push(e)
                    }),
                    null === s ? ($.each(a, function(t, e) {
                        if ($.each(e.data, function(e, n) {
                            return o = n,
                            i["" + t + n.backtest_id].menuOpen = !0,
                            i["" + t + n.backtest_id].choosed = !0,
                            !1
                        }),
                        null !== o)
                            return e.menuOpen = !0,
                            e.folderChoosed = !0,
                            !1
                    }),
                    n && n[0] && (i["-1" + n[0].algo_id].choosed = !0,
                    o = n[0])) : ($.each(a, function(t, e) {
                        if ($.each(e.data, function(e, n) {
                            if ("" + t + n.backtest_id === s)
                                return o = n,
                                i["" + t + n.backtest_id].menuOpen = !0,
                                i["" + t + n.backtest_id].choosed = !0,
                                !1
                        }),
                        null !== o)
                            return e.menuOpen = !0,
                            e.folderChoosed = !0,
                            !1
                    }),
                    null === o && n && n[0] && (i["-1" + n[0].algo_id].choosed = !0,
                    o = n[0])),
                    t.rootFolderData = n,
                    t.strategyChoosed = o,
                    t.backtestData = i,
                    t.fileFolders = a
                }
            },
            outerSettingInit: function(t, e) {
                t.aceSetting = $.extend(t.aceSetting, e, !0)
            },
            getFolderName: function(t, e) {
                return t.fileFolders[e].folder_name
            },
            spreadShowTrue: function(t) {
                t.spreadShow = !0
            },
            indexShowTrue: function(t) {
                t.indexShow = !0
            },
            updateresearchresult: function(t, e) {
                t.researchresult = e
            },
            updateresearchurl: function(t, e) {
                t.researchurl = e
            }
        },
        actions: {
            spreadChange: function(t) {
                setTimeout(function() {
                    t.commit("spreadShowTrue")
                }, 1e3)
            },
            indexShowChange: function(t) {
                t.commit("indexShowTrue")
            }
        }
    });
    n.exports = a
}),
define("../components/common/dialog", ["require", "exports", "module"], function(t, e, n) {
    n.exports = Vue.extend({
        template: '<transition name="dialog-fade"><div v-show="visible"><div class="v-modal"></div><div class="dialog-wrapper" @click.self="handleWrapperClick"><div class="popbox plugin-dialog" :class="[sizeClass, customClass]" ref="dialog" :style="style"><div class="el-dialog__header"><div class="icon popbox-btn-close" v-if="showClose" @click="handleClose"></div><div class="popbox-title"><slot name="title"><div class="text">{{title}}</div></slot></div></div><div class="popbox-container" :class="[customContainerClass]" v-if="rendered" @scroll="scrollEvent($event)"><slot></slot></div><div class="popbox-footer plugin-dialog-footer" v-if="$slots.footer"><slot name="footer"></slot></div></div></div></div></transition>',
        data: function() {
            return {
                opened: !1,
                bodyOverflow: null,
                bodyPaddingRight: null,
                rendered: !0
            }
        },
        props: {
            visible: {
                type: Boolean,
                default: !1
            },
            title: {
                type: String,
                default: ""
            },
            modal: {
                type: Boolean,
                default: !0
            },
            modalAppendToBody: {
                type: Boolean,
                default: !0
            },
            lockScroll: {
                type: Boolean,
                default: !0
            },
            closeOnClickModal: {
                type: Boolean,
                default: !0
            },
            closeOnPressEscape: {
                type: Boolean,
                default: !0
            },
            showClose: {
                type: Boolean,
                default: !0
            },
            size: {
                type: String,
                default: "tiny"
            },
            customClass: {
                type: String,
                default: ""
            },
            customContainerClass: {
                type: String,
                default: ""
            },
            top: {
                type: String,
                default: "15%"
            },
            beforeClose: Function,
            containerScrollEvent: Function
        },
        watch: {
            visible: function(t) {
                if (this.$emit("update:visible", t),
                t)
                    this.$emit("open"),
                    this.$nextTick(function() {
                        this.$refs.dialog.scrollTop = 0
                    }),
                    this.lockScroll && (this.bodyOverflow || (this.bodyPaddingRight = document.body.style.paddingRight,
                    this.bodyOverflow = document.body.style.overflow),
                    document.body.style.overflow = "hidden");
                else {
                    if (this.lockScroll) {
                        var e = this;
                        setTimeout(function() {
                            e.modal && "hidden" !== e.bodyOverflow && (document.body.style.overflow = e.bodyOverflow,
                            document.body.style.paddingRight = e.bodyPaddingRight),
                            e.bodyOverflow = null,
                            e.bodyPaddingRight = null
                        }, 200)
                    }
                    this.$emit("close")
                }
            }
        },
        computed: {
            sizeClass: function() {
                return "el-dialog--" + this.size
            },
            style: function() {
                return "full" === this.size ? {} : {
                    top: this.top
                }
            }
        },
        methods: {
            handleWrapperClick: function() {
                this.closeOnClickModal && this.handleClose()
            },
            handleClose: function() {
                "function" == typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide()
            },
            hide: function(t) {
                !1 !== t && (this.$emit("update:visible", !1),
                this.$emit("visible-change", !1))
            },
            updatePopper: function() {},
            open: function(t) {
                this.rendered || (this.rendered = !0,
                this.$emit("visible-change", !0))
            },
            scrollEvent: function(t) {
                "function" == typeof this.containerScrollEvent && this.containerScrollEvent(t)
            }
        },
        mounted: function() {
            this.visible && (this.rendered = !0,
            this.open())
        }
    })
}),
define("../components/common/pager", ["require", "exports", "module"], function(t, e, n) {
    n.exports = Vue.extend({
        name: "ElPager",
        template: '<div @click="onPagerClick" class="box-group"><div :class="{ \'box-active\': currentPage === 1 }" v-if="pageCount > 0" class="box box-page">1</div><div class="box-ellipsis el-icon more btn-quickprev" :class="[quickprevIconClass]" v-if="showPrevMore" @mouseenter="quickprevIconClass = \'el-icon-d-arrow-left\'" @mouseleave="quickprevIconClass = \'el-icon-more\'">...</div><div v-for="pager in pagers" :class="{ \'box-active\': currentPage === pager }" class="box box-page">{{ pager }}</div><div class="box-ellipsis el-icon more btn-quicknext" :class="[quicknextIconClass]" v-if="showNextMore" @mouseenter="quicknextIconClass = \'el-icon-d-arrow-right\'" @mouseleave="quicknextIconClass = \'el-icon-more\'">...</div><div :class="{ \'box-active\': currentPage === pageCount }" class="box box-page" v-if="pageCount > 1">{{ pageCount }}</div></div>',
        data: function() {
            return {
                current: null,
                showPrevMore: !1,
                showNextMore: !1,
                quicknextIconClass: "el-icon-more",
                quickprevIconClass: "el-icon-more"
            }
        },
        props: {
            currentPage: Number,
            pageCount: Number
        },
        watch: {
            showPrevMore: function(t) {
                t || (this.quickprevIconClass = "el-icon-more")
            },
            showNextMore: function(t) {
                t || (this.quicknextIconClass = "el-icon-more")
            }
        },
        computed: {
            pagers: function() {
                var t = Number(this.currentPage)
                  , e = Number(this.pageCount)
                  , n = !1
                  , i = !1;
                e > 7 && (t > 4 && (n = !0),
                t < e - 3 && (i = !0));
                var r = [];
                if (n && !i)
                    for (var a = e - 5, o = a; o < e; o++)
                        r.push(o);
                else if (!n && i)
                    for (var o = 2; o < 7; o++)
                        r.push(o);
                else if (n && i)
                    for (var s = Math.floor(3.5) - 1, o = t - s; o <= t + s; o++)
                        r.push(o);
                else
                    for (var o = 2; o < e; o++)
                        r.push(o);
                return this.showPrevMore = n,
                this.showNextMore = i,
                r
            }
        },
        methods: {
            onPagerClick: function(t) {
                var e = t.target;
                if ("UL" !== e.tagName) {
                    var n = Number(t.target.textContent)
                      , i = this.pageCount
                      , r = this.currentPage;
                    -1 !== e.className.indexOf("more") && (-1 !== e.className.indexOf("quickprev") ? n = r - 5 : -1 !== e.className.indexOf("quicknext") && (n = r + 5)),
                    isNaN(n) || (n < 1 && (n = 1),
                    n > i && (n = i)),
                    n !== r && this.$emit("change", n)
                }
            }
        }
    })
}),
define("../components/common/pagination", ["require", "exports", "module", "./pager"], function(t, e, n) {
    var i = t("./pager");
    n.exports = Vue.extend({
        name: "ElPagination",
        template: '<div class="paginationbox" v-if="total > 1">\x3c!-- <prev></prev> --\x3e<div type="button" class="box box-page" :class="{ disabled: internalCurrentPage <= 1 }" @click="prev">＜</div>\x3c!-- <prev></prev> --\x3e<pager :current-page="internalCurrentPage" :page-count="internalPageCount" v-on:change="handleCurrentChange"></pager>\x3c!-- <next></next> --\x3e<div type="button" class="box box-page" :class="{ disabled: internalCurrentPage === internalPageCount || internalPageCount === 0 }" @click="next">＞</div>\x3c!-- <next></next> --\x3e\x3c!-- <jumper></jumper> --\x3e<span class="page-goto-title">GO</span><div class="box-input"><input type="text" class="goto_page" :value="internalCurrentPage" v-on:change="gotoPage($event)"></div>\x3c!-- <jumper></jumper> --\x3e\x3c!-- <sizes :pageSizes="pageSizes"></sizes> --\x3e\x3c!-- <my-slot></my-slot> --\x3e<slot name="myslot"></slot>\x3c!-- <my-slot></my-slot> --\x3e\x3c!-- <total></total> --\x3e<div class="box-total">共&nbsp;{{ total }}&nbsp;条</div>\x3c!-- <total></total> --\x3e</div>',
        data: function() {
            return {
                internalCurrentPage: 1,
                internalPageSize: 0
            }
        },
        props: {
            pageSize: {
                type: Number,
                default: 10
            },
            small: Boolean,
            total: Number,
            pageCount: Number,
            currentPage: {
                type: Number,
                default: 1
            },
            layout: {
                default: "prev, pager, next, jumper, ->, total"
            },
            pageSizes: {
                type: Array,
                default: function() {
                    return [10, 20, 30, 40, 50, 100]
                }
            }
        },
        components: {
            pager: i
        },
        methods: {
            handleCurrentChange: function(t) {
                this.internalCurrentPage = this.getValidCurrentPage(t)
            },
            prev: function() {
                var t = this.internalCurrentPage - 1;
                this.internalCurrentPage = this.getValidCurrentPage(t)
            },
            next: function() {
                var t = this.internalCurrentPage + 1;
                this.internalCurrentPage = this.getValidCurrentPage(t)
            },
            getValidCurrentPage: function(t) {
                t = parseInt(t, 10);
                var e, n = "number" == typeof this.internalPageCount;
                return n ? t < 1 ? e = 1 : t > this.internalPageCount && (e = this.internalPageCount) : (isNaN(t) || t < 1) && (e = 1),
                void 0 === e && isNaN(t) ? e = 1 : 0 === e && (e = 1),
                void 0 === e ? t : e
            },
            gotoPage: function(t) {
                t.target.value = this.internalCurrentPage = this.getValidCurrentPage(t.target.value)
            }
        },
        computed: {
            internalPageCount: function() {
                return "number" == typeof this.total ? Math.ceil(this.total / this.internalPageSize) : "number" == typeof this.pageCount ? this.pageCount : null
            }
        },
        watch: {
            currentPage: {
                immediate: !0,
                handler: function(t) {
                    this.internalCurrentPage = t
                }
            },
            pageSize: {
                immediate: !0,
                handler: function(t) {
                    this.internalPageSize = t
                }
            },
            internalCurrentPage: function(t, e) {
                t = parseInt(t, 10),
                t = isNaN(t) ? e || 1 : this.getValidCurrentPage(t),
                void 0 !== t ? this.$nextTick(function() {
                    this.internalCurrentPage = t,
                    e !== t && (this.$emit("update:currentPage", t),
                    this.$emit("current-change", this.internalCurrentPage))
                }) : (this.$emit("update:currentPage", t),
                this.$emit("current-change", this.internalCurrentPage))
            },
            internalPageCount: function(t) {
                var e = this.internalCurrentPage;
                t > 0 && 0 === e ? this.internalCurrentPage = 1 : e > t && (this.internalCurrentPage = 0 === t ? 1 : t)
            }
        }
    })
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Vue", e) : t.Vue = e()
}(this, function() {
    "use strict";
    function t(t) {
        return void 0 === t || null === t
    }
    function e(t) {
        return void 0 !== t && null !== t
    }
    function n(t) {
        return !0 === t
    }
    function i(t) {
        return "string" == typeof t || "number" == typeof t
    }
    function r(t) {
        return null !== t && "object" == typeof t
    }
    function a(t) {
        return "[object Object]" === Pr.call(t)
    }
    function o(t) {
        return "[object RegExp]" === Pr.call(t)
    }
    function s(t) {
        return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
    }
    function l(t) {
        var e = parseFloat(t);
        return isNaN(e) ? t : e
    }
    function c(t, e) {
        for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++)
            n[i[r]] = !0;
        return e ? function(t) {
            return n[t.toLowerCase()]
        }
        : function(t) {
            return n[t]
        }
    }
    function u(t, e) {
        if (t.length) {
            var n = t.indexOf(e);
            if (n > -1)
                return t.splice(n, 1)
        }
    }
    function d(t, e) {
        return qr.call(t, e)
    }
    function p(t) {
        var e = Object.create(null);
        return function(n) {
            return e[n] || (e[n] = t(n))
        }
    }
    function f(t, e) {
        function n(n) {
            var i = arguments.length;
            return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
        }
        return n._length = t.length,
        n
    }
    function h(t, e) {
        e = e || 0;
        for (var n = t.length - e, i = new Array(n); n--; )
            i[n] = t[n + e];
        return i
    }
    function v(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function m(t) {
        for (var e = {}, n = 0; n < t.length; n++)
            t[n] && v(e, t[n]);
        return e
    }
    function g() {}
    function y(t, e) {
        var n = r(t)
          , i = r(e);
        if (!n || !i)
            return !n && !i && String(t) === String(e);
        try {
            return JSON.stringify(t) === JSON.stringify(e)
        } catch (n) {
            return t === e
        }
    }
    function b(t, e) {
        for (var n = 0; n < t.length; n++)
            if (y(t[n], e))
                return n;
        return -1
    }
    function _(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            t.apply(this, arguments))
        }
    }
    function x(t) {
        var e = (t + "").charCodeAt(0);
        return 36 === e || 95 === e
    }
    function k(t, e, n, i) {
        Object.defineProperty(t, e, {
            value: n,
            enumerable: !!i,
            writable: !0,
            configurable: !0
        })
    }
    function w(t) {
        if (!Qr.test(t)) {
            var e = t.split(".");
            return function(t) {
                for (var n = 0; n < e.length; n++) {
                    if (!t)
                        return;
                    t = t[e[n]]
                }
                return t
            }
        }
    }
    function C(t, e, n) {
        if (Kr.errorHandler)
            Kr.errorHandler.call(null, t, e, n);
        else {
            if (Zr("Error in " + n + ': "' + t.toString() + '"', e),
            !la || "undefined" == typeof console)
                throw t;
            console.error(t)
        }
    }
    function $(t) {
        return "function" == typeof t && /native code/.test(t.toString())
    }
    function S(t) {
        $a.target && Sa.push($a.target),
        $a.target = t
    }
    function T() {
        $a.target = Sa.pop()
    }
    function E(t, e) {
        t.__proto__ = e
    }
    function A(t, e, n) {
        for (var i = 0, r = n.length; i < r; i++) {
            var a = n[i];
            k(t, a, e[a])
        }
    }
    function j(t, e) {
        if (r(t)) {
            var n;
            return d(t, "__ob__") && t.__ob__ instanceof Na ? n = t.__ob__ : ja.shouldConvert && !_a() && (Array.isArray(t) || a(t)) && Object.isExtensible(t) && !t._isVue && (n = new Na(t)),
            e && n && n.vmCount++,
            n
        }
    }
    function N(t, e, n, i) {
        var r = new $a
          , a = Object.getOwnPropertyDescriptor(t, e);
        if (!a || !1 !== a.configurable) {
            var o = a && a.get
              , s = a && a.set
              , l = j(n);
            Object.defineProperty(t, e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var e = o ? o.call(t) : n;
                    return $a.target && (r.depend(),
                    l && l.dep.depend(),
                    Array.isArray(e) && L(e)),
                    e
                },
                set: function(e) {
                    var a = o ? o.call(t) : n;
                    e === a || e !== e && a !== a || (i && i(),
                    s ? s.call(t, e) : n = e,
                    l = j(e),
                    r.notify())
                }
            })
        }
    }
    function O(t, e, n) {
        if (Array.isArray(t) && "number" == typeof e)
            return t.length = Math.max(t.length, e),
            t.splice(e, 1, n),
            n;
        if (d(t, e))
            return t[e] = n,
            n;
        var i = t.__ob__;
        return t._isVue || i && i.vmCount ? (Zr("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."),
        n) : i ? (N(i.value, e, n),
        i.dep.notify(),
        n) : (t[e] = n,
        n)
    }
    function D(t, e) {
        if (Array.isArray(t) && "number" == typeof e)
            return void t.splice(e, 1);
        var n = t.__ob__;
        if (t._isVue || n && n.vmCount)
            return void Zr("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
        d(t, e) && (delete t[e],
        n && n.dep.notify())
    }
    function L(t) {
        for (var e = void 0, n = 0, i = t.length; n < i; n++)
            e = t[n],
            e && e.__ob__ && e.__ob__.dep.depend(),
            Array.isArray(e) && L(e)
    }
    function I(t, e) {
        if (!e)
            return t;
        for (var n, i, r, o = Object.keys(e), s = 0; s < o.length; s++)
            n = o[s],
            i = t[n],
            r = e[n],
            d(t, n) ? a(i) && a(r) && I(i, r) : O(t, n, r);
        return t
    }
    function M(t, e) {
        return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
    }
    function P(t, e) {
        var n = Object.create(t || null);
        return e ? v(n, e) : n
    }
    function F(t) {
        for (var e in t.components) {
            var n = e.toLowerCase();
            (Fr(n) || Kr.isReservedTag(n)) && Zr("Do not use built-in or reserved HTML elements as component id: " + e)
        }
    }
    function q(t) {
        var e = t.props;
        if (e) {
            var n, i, r, o = {};
            if (Array.isArray(e))
                for (n = e.length; n--; )
                    i = e[n],
                    "string" == typeof i ? (r = Br(i),
                    o[r] = {
                        type: null
                    }) : Zr("props must be strings when using array syntax.");
            else if (a(e))
                for (var s in e)
                    i = e[s],
                    r = Br(s),
                    o[r] = a(i) ? i : {
                        type: i
                    };
            t.props = o
        }
    }
    function H(t) {
        var e = t.directives;
        if (e)
            for (var n in e) {
                var i = e[n];
                "function" == typeof i && (e[n] = {
                    bind: i,
                    update: i
                })
            }
    }
    function B(t, e, n) {
        function i(i) {
            var r = Oa[i] || Ia;
            l[i] = r(t[i], e[i], n, i)
        }
        F(e),
        "function" == typeof e && (e = e.options),
        q(e),
        H(e);
        var r = e.extends;
        if (r && (t = B(t, r, n)),
        e.mixins)
            for (var a = 0, o = e.mixins.length; a < o; a++)
                t = B(t, e.mixins[a], n);
        var s, l = {};
        for (s in t)
            i(s);
        for (s in e)
            d(t, s) || i(s);
        return l
    }
    function R(t, e, n, i) {
        if ("string" == typeof n) {
            var r = t[e];
            if (d(r, n))
                return r[n];
            var a = Br(n);
            if (d(r, a))
                return r[a];
            var o = Rr(a);
            if (d(r, o))
                return r[o];
            var s = r[n] || r[a] || r[o];
            return i && !s && Zr("Failed to resolve " + e.slice(0, -1) + ": " + n, t),
            s
        }
    }
    function z(t, e, n, i) {
        var r = e[t]
          , a = !d(n, t)
          , o = n[t];
        if (Y(Boolean, r.type) && (a && !d(r, "default") ? o = !1 : Y(String, r.type) || "" !== o && o !== Ur(t) || (o = !0)),
        void 0 === o) {
            o = U(i, r, t);
            var s = ja.shouldConvert;
            ja.shouldConvert = !0,
            j(o),
            ja.shouldConvert = s
        }
        return V(r, t, o, i, a),
        o
    }
    function U(t, e, n) {
        if (d(e, "default")) {
            var i = e.default;
            return r(i) && Zr('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', t),
            t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof i && "Function" !== X(e.type) ? i.call(t) : i
        }
    }
    function V(t, e, n, i, r) {
        if (t.required && r)
            return void Zr('Missing required prop: "' + e + '"', i);
        if (null != n || t.required) {
            var a = t.type
              , o = !a || !0 === a
              , s = [];
            if (a) {
                Array.isArray(a) || (a = [a]);
                for (var l = 0; l < a.length && !o; l++) {
                    var c = W(n, a[l]);
                    s.push(c.expectedType || ""),
                    o = c.valid
                }
            }
            if (!o)
                return void Zr('Invalid prop: type check failed for prop "' + e + '". Expected ' + s.map(Rr).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", i);
            var u = t.validator;
            u && (u(n) || Zr('Invalid prop: custom validator check failed for prop "' + e + '".', i))
        }
    }
    function W(t, e) {
        var n, i = X(e);
        return n = Ma.test(i) ? typeof t === i.toLowerCase() : "Object" === i ? a(t) : "Array" === i ? Array.isArray(t) : t instanceof e,
        {
            valid: n,
            expectedType: i
        }
    }
    function X(t) {
        var e = t && t.toString().match(/^\s*function (\w+)/);
        return e ? e[1] : ""
    }
    function Y(t, e) {
        if (!Array.isArray(e))
            return X(e) === X(t);
        for (var n = 0, i = e.length; n < i; n++)
            if (X(e[n]) === X(t))
                return !0;
        return !1
    }
    function J(t) {
        return new Va(void 0,void 0,void 0,String(t))
    }
    function K(t) {
        var e = new Va(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions);
        return e.ns = t.ns,
        e.isStatic = t.isStatic,
        e.key = t.key,
        e.isCloned = !0,
        e
    }
    function G(t) {
        for (var e = t.length, n = new Array(e), i = 0; i < e; i++)
            n[i] = K(t[i]);
        return n
    }
    function Q(t) {
        function e() {
            var t = arguments
              , n = e.fns;
            if (!Array.isArray(n))
                return n.apply(null, arguments);
            for (var i = 0; i < n.length; i++)
                n[i].apply(null, t)
        }
        return e.fns = t,
        e
    }
    function Z(e, n, i, r, a) {
        var o, s, l, c;
        for (o in e)
            s = e[o],
            l = n[o],
            c = Ja(o),
            t(s) ? Zr('Invalid handler for event "' + c.name + '": got ' + String(s), a) : t(l) ? (t(s.fns) && (s = e[o] = Q(s)),
            i(c.name, s, c.once, c.capture, c.passive)) : s !== l && (l.fns = s,
            e[o] = l);
        for (o in n)
            t(e[o]) && (c = Ja(o),
            r(c.name, n[o], c.capture))
    }
    function tt(i, r, a) {
        function o() {
            a.apply(this, arguments),
            u(s.fns, o)
        }
        var s, l = i[r];
        t(l) ? s = Q([o]) : e(l.fns) && n(l.merged) ? (s = l,
        s.fns.push(o)) : s = Q([l, o]),
        s.merged = !0,
        i[r] = s
    }
    function et(n, i, r) {
        var a = i.options.props;
        if (!t(a)) {
            var o = {}
              , s = n.attrs
              , l = n.props;
            if (e(s) || e(l))
                for (var c in a) {
                    var u = Ur(c)
                      , p = c.toLowerCase();
                    c !== p && s && d(s, p) && ta('Prop "' + p + '" is passed to component ' + ea(r || i) + ', but the declared prop name is "' + c + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + u + '" instead of "' + c + '".'),
                    nt(o, l, c, u, !0) || nt(o, s, c, u, !1)
                }
            return o
        }
    }
    function nt(t, n, i, r, a) {
        if (e(n)) {
            if (d(n, i))
                return t[i] = n[i],
                a || delete n[i],
                !0;
            if (d(n, r))
                return t[i] = n[r],
                a || delete n[r],
                !0
        }
        return !1
    }
    function it(t) {
        for (var e = 0; e < t.length; e++)
            if (Array.isArray(t[e]))
                return Array.prototype.concat.apply([], t);
        return t
    }
    function rt(t) {
        return i(t) ? [J(t)] : Array.isArray(t) ? at(t) : void 0
    }
    function at(n, r) {
        var a, o, s, l = [];
        for (a = 0; a < n.length; a++)
            o = n[a],
            t(o) || "boolean" == typeof o || (s = l[l.length - 1],
            Array.isArray(o) ? l.push.apply(l, at(o, (r || "") + "_" + a)) : i(o) ? e(s) && e(s.text) ? s.text += String(o) : "" !== o && l.push(J(o)) : e(o.text) && e(s) && e(s.text) ? l[l.length - 1] = J(s.text + o.text) : (e(o.tag) && t(o.key) && e(r) && (o.key = "__vlist" + r + "_" + a + "__"),
            l.push(o)));
        return l
    }
    function ot(t, e) {
        return r(t) ? e.extend(t) : t
    }
    function st(i, a, o) {
        if (n(i.error) && e(i.errorComp))
            return i.errorComp;
        if (e(i.resolved))
            return i.resolved;
        if (n(i.loading) && e(i.loadingComp))
            return i.loadingComp;
        if (!e(i.contexts)) {
            var s = i.contexts = [o]
              , l = !0
              , c = function() {
                for (var t = 0, e = s.length; t < e; t++)
                    s[t].$forceUpdate()
            }
              , u = _(function(t) {
                i.resolved = ot(t, a),
                l || c()
            })
              , d = _(function(t) {
                Zr("Failed to resolve async component: " + String(i) + (t ? "\nReason: " + t : "")),
                e(i.errorComp) && (i.error = !0,
                c())
            })
              , p = i(u, d);
            return r(p) && ("function" == typeof p.then ? t(i.resolved) && p.then(u, d) : e(p.component) && "function" == typeof p.component.then && (p.component.then(u, d),
            e(p.error) && (i.errorComp = ot(p.error, a)),
            e(p.loading) && (i.loadingComp = ot(p.loading, a),
            0 === p.delay ? i.loading = !0 : setTimeout(function() {
                t(i.resolved) && t(i.error) && (i.loading = !0,
                c())
            }, p.delay || 200)),
            e(p.timeout) && setTimeout(function() {
                d("timeout (" + p.timeout + "ms)")
            }, p.timeout))),
            l = !1,
            i.loading ? i.loadingComp : i.resolved
        }
        i.contexts.push(o)
    }
    function lt(t) {
        if (Array.isArray(t))
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                if (e(i) && e(i.componentOptions))
                    return i
            }
    }
    function ct(t) {
        t._events = Object.create(null),
        t._hasHookEvent = !1;
        var e = t.$options._parentListeners;
        e && pt(t, e)
    }
    function ut(t, e, n) {
        n ? Xa.$once(t, e) : Xa.$on(t, e)
    }
    function dt(t, e) {
        Xa.$off(t, e)
    }
    function pt(t, e, n) {
        Xa = t,
        Z(e, n || {}, ut, dt, t)
    }
    function ft(t, e) {
        var n = {};
        if (!t)
            return n;
        for (var i = [], r = 0, a = t.length; r < a; r++) {
            var o = t[r];
            if (o.context !== e && o.functionalContext !== e || !o.data || null == o.data.slot)
                i.push(o);
            else {
                var s = o.data.slot
                  , l = n[s] || (n[s] = []);
                "template" === o.tag ? l.push.apply(l, o.children) : l.push(o)
            }
        }
        return i.every(ht) || (n.default = i),
        n
    }
    function ht(t) {
        return t.isComment || " " === t.text
    }
    function vt(t) {
        for (var e = {}, n = 0; n < t.length; n++)
            e[t[n][0]] = t[n][1];
        return e
    }
    function mt(t) {
        var e = t.$options
          , n = e.parent;
        if (n && !e.abstract) {
            for (; n.$options.abstract && n.$parent; )
                n = n.$parent;
            n.$children.push(t)
        }
        t.$parent = n,
        t.$root = n ? n.$root : t,
        t.$children = [],
        t.$refs = {},
        t._watcher = null,
        t._inactive = null,
        t._directInactive = !1,
        t._isMounted = !1,
        t._isDestroyed = !1,
        t._isBeingDestroyed = !1
    }
    function gt(t, e, n) {
        t.$el = e,
        t.$options.render || (t.$options.render = Ya,
        t.$options.template && "#" !== t.$options.template.charAt(0) || t.$options.el || e ? Zr("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", t) : Zr("Failed to mount component: template or render function not defined.", t)),
        kt(t, "beforeMount");
        var i;
        return i = Kr.performance && Da ? function() {
            var e = t._name
              , i = t._uid
              , r = "vue-perf-start:" + i
              , a = "vue-perf-end:" + i;
            Da(r);
            var o = t._render();
            Da(a),
            La(e + " render", r, a),
            Da(r),
            t._update(o, n),
            Da(a),
            La(e + " patch", r, a)
        }
        : function() {
            t._update(t._render(), n)
        }
        ,
        t._watcher = new oo(t,i,g),
        n = !1,
        null == t.$vnode && (t._isMounted = !0,
        kt(t, "mounted")),
        t
    }
    function yt(t, e, n, i, r) {
        var a = !!(r || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== Gr);
        if (t.$options._parentVnode = i,
        t.$vnode = i,
        t._vnode && (t._vnode.parent = i),
        t.$options._renderChildren = r,
        e && t.$options.props) {
            ja.shouldConvert = !1,
            ja.isSettingProps = !0;
            for (var o = t._props, s = t.$options._propKeys || [], l = 0; l < s.length; l++) {
                var c = s[l];
                o[c] = z(c, t.$options.props, e, t)
            }
            ja.shouldConvert = !0,
            ja.isSettingProps = !1,
            t.$options.propsData = e
        }
        if (n) {
            var u = t.$options._parentListeners;
            t.$options._parentListeners = n,
            pt(t, n, u)
        }
        a && (t.$slots = ft(r, i.context),
        t.$forceUpdate())
    }
    function bt(t) {
        for (; t && (t = t.$parent); )
            if (t._inactive)
                return !0;
        return !1
    }
    function _t(t, e) {
        if (e) {
            if (t._directInactive = !1,
            bt(t))
                return
        } else if (t._directInactive)
            return;
        if (t._inactive || null === t._inactive) {
            t._inactive = !1;
            for (var n = 0; n < t.$children.length; n++)
                _t(t.$children[n]);
            kt(t, "activated")
        }
    }
    function xt(t, e) {
        if (!(e && (t._directInactive = !0,
        bt(t)) || t._inactive)) {
            t._inactive = !0;
            for (var n = 0; n < t.$children.length; n++)
                xt(t.$children[n]);
            kt(t, "deactivated")
        }
    }
    function kt(t, e) {
        var n = t.$options[e];
        if (n)
            for (var i = 0, r = n.length; i < r; i++)
                try {
                    n[i].call(t)
                } catch (n) {
                    C(n, t, e + " hook")
                }
        t._hasHookEvent && t.$emit("hook:" + e)
    }
    function wt() {
        Qa.length = Za.length = 0,
        to = {},
        eo = {},
        no = io = !1
    }
    function Ct() {
        io = !0;
        var t, e;
        for (Qa.sort(function(t, e) {
            return t.id - e.id
        }),
        ro = 0; ro < Qa.length; ro++)
            if (t = Qa[ro],
            e = t.id,
            to[e] = null,
            t.run(),
            null != to[e] && (eo[e] = (eo[e] || 0) + 1,
            eo[e] > Ga)) {
                Zr("You may have an infinite update loop " + (t.user ? 'in watcher with expression "' + t.expression + '"' : "in a component render function."), t.vm);
                break
            }
        var n = Za.slice()
          , i = Qa.slice();
        wt(),
        Tt(n),
        $t(i),
        xa && Kr.devtools && xa.emit("flush")
    }
    function $t(t) {
        for (var e = t.length; e--; ) {
            var n = t[e]
              , i = n.vm;
            i._watcher === n && i._isMounted && kt(i, "updated")
        }
    }
    function St(t) {
        t._inactive = !1,
        Za.push(t)
    }
    function Tt(t) {
        for (var e = 0; e < t.length; e++)
            t[e]._inactive = !0,
            _t(t[e], !0)
    }
    function Et(t) {
        var e = t.id;
        if (null == to[e]) {
            if (to[e] = !0,
            io) {
                for (var n = Qa.length - 1; n >= 0 && Qa[n].id > t.id; )
                    n--;
                Qa.splice(Math.max(n, ro) + 1, 0, t)
            } else
                Qa.push(t);
            no || (no = !0,
            wa(Ct))
        }
    }
    function At(t) {
        so.clear(),
        jt(t, so)
    }
    function jt(t, e) {
        var n, i, a = Array.isArray(t);
        if ((a || r(t)) && Object.isExtensible(t)) {
            if (t.__ob__) {
                var o = t.__ob__.dep.id;
                if (e.has(o))
                    return;
                e.add(o)
            }
            if (a)
                for (n = t.length; n--; )
                    jt(t[n], e);
            else
                for (i = Object.keys(t),
                n = i.length; n--; )
                    jt(t[i[n]], e)
        }
    }
    function Nt(t, e, n) {
        lo.get = function() {
            return this[e][n]
        }
        ,
        lo.set = function(t) {
            this[e][n] = t
        }
        ,
        Object.defineProperty(t, n, lo)
    }
    function Ot(t) {
        t._watchers = [];
        var e = t.$options;
        e.props && Dt(t, e.props),
        e.methods && qt(t, e.methods),
        e.data ? Lt(t) : j(t._data = {}, !0),
        e.computed && Mt(t, e.computed),
        e.watch && Ht(t, e.watch)
    }
    function Dt(t, e) {
        var n = t.$options.propsData || {}
          , i = t._props = {}
          , r = t.$options._propKeys = []
          , a = !t.$parent;
        ja.shouldConvert = a;
        for (var o in e)
            !function(a) {
                r.push(a);
                var o = z(a, e, n, t);
                (co[a] || Kr.isReservedAttr(a)) && Zr('"' + a + '" is a reserved attribute and cannot be used as component prop.', t),
                N(i, a, o, function() {
                    t.$parent && !ja.isSettingProps && Zr("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + a + '"', t)
                }),
                a in t || Nt(t, "_props", a)
            }(o);
        ja.shouldConvert = !0
    }
    function Lt(t) {
        var e = t.$options.data;
        e = t._data = "function" == typeof e ? It(e, t) : e || {},
        a(e) || (e = {},
        Zr("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", t));
        for (var n = Object.keys(e), i = t.$options.props, r = n.length; r--; )
            i && d(i, n[r]) ? Zr('The data property "' + n[r] + '" is already declared as a prop. Use prop default value instead.', t) : x(n[r]) || Nt(t, "_data", n[r]);
        j(e, !0)
    }
    function It(t, e) {
        try {
            return t.call(e)
        } catch (t) {
            return C(t, e, "data()"),
            {}
        }
    }
    function Mt(t, e) {
        var n = t._computedWatchers = Object.create(null);
        for (var i in e) {
            var r = e[i]
              , a = "function" == typeof r ? r : r.get;
            void 0 === a && (Zr('No getter function has been defined for computed property "' + i + '".', t),
            a = g),
            n[i] = new oo(t,a,g,uo),
            i in t ? i in t.$data ? Zr('The computed property "' + i + '" is already defined in data.', t) : t.$options.props && i in t.$options.props && Zr('The computed property "' + i + '" is already defined as a prop.', t) : Pt(t, i, r)
        }
    }
    function Pt(t, e, n) {
        "function" == typeof n ? (lo.get = Ft(e),
        lo.set = g) : (lo.get = n.get ? !1 !== n.cache ? Ft(e) : n.get : g,
        lo.set = n.set ? n.set : g),
        Object.defineProperty(t, e, lo)
    }
    function Ft(t) {
        return function() {
            var e = this._computedWatchers && this._computedWatchers[t];
            if (e)
                return e.dirty && e.evaluate(),
                $a.target && e.depend(),
                e.value
        }
    }
    function qt(t, e) {
        var n = t.$options.props;
        for (var i in e)
            t[i] = null == e[i] ? g : f(e[i], t),
            null == e[i] && Zr('method "' + i + '" has an undefined value in the component definition. Did you reference the function correctly?', t),
            n && d(n, i) && Zr('method "' + i + '" has already been defined as a prop.', t)
    }
    function Ht(t, e) {
        for (var n in e) {
            var i = e[n];
            if (Array.isArray(i))
                for (var r = 0; r < i.length; r++)
                    Bt(t, n, i[r]);
            else
                Bt(t, n, i)
        }
    }
    function Bt(t, e, n) {
        var i;
        a(n) && (i = n,
        n = n.handler),
        "string" == typeof n && (n = t[n]),
        t.$watch(e, n, i)
    }
    function Rt(t) {
        var e = t.$options.provide;
        e && (t._provided = "function" == typeof e ? e.call(t) : e)
    }
    function zt(t) {
        var e = Ut(t.$options.inject, t);
        e && Object.keys(e).forEach(function(n) {
            N(t, n, e[n], function() {
                Zr('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + n + '"', t)
            })
        })
    }
    function Ut(t, e) {
        if (t) {
            for (var n = Array.isArray(t), i = Object.create(null), r = n ? t : ka ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < r.length; a++)
                for (var o = r[a], s = n ? o : t[o], l = e; l; ) {
                    if (l._provided && s in l._provided) {
                        i[o] = l._provided[s];
                        break
                    }
                    l = l.$parent
                }
            return i
        }
    }
    function Vt(t, n, i, r, a) {
        var o = {}
          , s = t.options.props;
        if (e(s))
            for (var l in s)
                o[l] = z(l, s, n || {});
        else
            e(i.attrs) && Wt(o, i.attrs),
            e(i.props) && Wt(o, i.props);
        var c = Object.create(r)
          , u = function(t, e, n, i) {
            return Qt(c, t, e, n, i, !0)
        }
          , d = t.options.render.call(null, u, {
            data: i,
            props: o,
            children: a,
            parent: r,
            listeners: i.on || {},
            injections: Ut(t.options.inject, r),
            slots: function() {
                return ft(a, r)
            }
        });
        return d instanceof Va && (d.functionalContext = r,
        d.functionalOptions = t.options,
        i.slot && ((d.data || (d.data = {})).slot = i.slot)),
        d
    }
    function Wt(t, e) {
        for (var n in e)
            t[Br(n)] = e[n]
    }
    function Xt(i, a, o, s, l) {
        if (!t(i)) {
            var c = o.$options._base;
            if (r(i) && (i = c.extend(i)),
            "function" != typeof i)
                return void Zr("Invalid Component definition: " + String(i), o);
            if (!t(i.cid) || void 0 !== (i = st(i, c, o))) {
                pe(i),
                a = a || {},
                e(a.model) && Gt(i.options, a);
                var u = et(a, i, l);
                if (n(i.options.functional))
                    return Vt(i, u, a, o, s);
                var d = a.on;
                a.on = a.nativeOn,
                n(i.options.abstract) && (a = {}),
                Jt(a);
                var p = i.options.name || l;
                return new Va("vue-component-" + i.cid + (p ? "-" + p : ""),a,void 0,void 0,void 0,o,{
                    Ctor: i,
                    propsData: u,
                    listeners: d,
                    tag: l,
                    children: s
                })
            }
        }
    }
    function Yt(t, n, i, r) {
        var a = t.componentOptions
          , o = {
            _isComponent: !0,
            parent: n,
            propsData: a.propsData,
            _componentTag: a.tag,
            _parentVnode: t,
            _parentListeners: a.listeners,
            _renderChildren: a.children,
            _parentElm: i || null,
            _refElm: r || null
        }
          , s = t.data.inlineTemplate;
        return e(s) && (o.render = s.render,
        o.staticRenderFns = s.staticRenderFns),
        new a.Ctor(o)
    }
    function Jt(t) {
        t.hook || (t.hook = {});
        for (var e = 0; e < fo.length; e++) {
            var n = fo[e]
              , i = t.hook[n]
              , r = po[n];
            t.hook[n] = i ? Kt(r, i) : r
        }
    }
    function Kt(t, e) {
        return function(n, i, r, a) {
            t(n, i, r, a),
            e(n, i, r, a)
        }
    }
    function Gt(t, n) {
        var i = t.model && t.model.prop || "value"
          , r = t.model && t.model.event || "input";
        (n.props || (n.props = {}))[i] = n.model.value;
        var a = n.on || (n.on = {});
        e(a[r]) ? a[r] = [n.model.callback].concat(a[r]) : a[r] = n.model.callback
    }
    function Qt(t, e, r, a, o, s) {
        return (Array.isArray(r) || i(r)) && (o = a,
        a = r,
        r = void 0),
        n(s) && (o = vo),
        Zt(t, e, r, a, o)
    }
    function Zt(t, n, i, r, a) {
        if (e(i) && e(i.__ob__))
            return Zr("Avoid using observed data object as vnode data: " + JSON.stringify(i) + "\nAlways create fresh vnode data objects in each render!", t),
            Ya();
        if (!n)
            return Ya();
        Array.isArray(r) && "function" == typeof r[0] && (i = i || {},
        i.scopedSlots = {
            default: r[0]
        },
        r.length = 0),
        a === vo ? r = rt(r) : a === ho && (r = it(r));
        var o, s;
        if ("string" == typeof n) {
            var l;
            s = Kr.getTagNamespace(n),
            o = Kr.isReservedTag(n) ? new Va(Kr.parsePlatformTagName(n),i,r,void 0,void 0,t) : e(l = R(t.$options, "components", n)) ? Xt(l, i, t, r, n) : new Va(n,i,r,void 0,void 0,t)
        } else
            o = Xt(n, i, t, r);
        return e(o) ? (s && te(o, s),
        o) : Ya()
    }
    function te(n, i) {
        if (n.ns = i,
        "foreignObject" !== n.tag && e(n.children))
            for (var r = 0, a = n.children.length; r < a; r++) {
                var o = n.children[r];
                e(o.tag) && t(o.ns) && te(o, i)
            }
    }
    function ee(t, e) {
        var n, i, a, o, s;
        if (Array.isArray(t) || "string" == typeof t)
            for (n = new Array(t.length),
            i = 0,
            a = t.length; i < a; i++)
                n[i] = e(t[i], i);
        else if ("number" == typeof t)
            for (n = new Array(t),
            i = 0; i < t; i++)
                n[i] = e(i + 1, i);
        else if (r(t))
            for (o = Object.keys(t),
            n = new Array(o.length),
            i = 0,
            a = o.length; i < a; i++)
                s = o[i],
                n[i] = e(t[s], s, i);
        return n
    }
    function ne(t, e, n, i) {
        var r = this.$scopedSlots[t];
        if (r)
            return n = n || {},
            i && v(n, i),
            r(n) || e;
        var a = this.$slots[t];
        return a && (a._rendered && Zr('Duplicate presence of slot "' + t + '" found in the same render tree - this will likely cause render errors.', this),
        a._rendered = !0),
        a || e
    }
    function ie(t) {
        return R(this.$options, "filters", t, !0) || Wr
    }
    function re(t, e, n) {
        var i = Kr.keyCodes[e] || n;
        return Array.isArray(i) ? -1 === i.indexOf(t) : i !== t
    }
    function ae(t, e, n, i) {
        if (n)
            if (r(n)) {
                Array.isArray(n) && (n = m(n));
                var a;
                for (var o in n) {
                    if ("class" === o || "style" === o)
                        a = t;
                    else {
                        var s = t.attrs && t.attrs.type;
                        a = i || Kr.mustUseProp(e, s, o) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {})
                    }
                    o in a || (a[o] = n[o])
                }
            } else
                Zr("v-bind without argument expects an Object or Array value", this);
        return t
    }
    function oe(t, e) {
        var n = this._staticTrees[t];
        return n && !e ? Array.isArray(n) ? G(n) : K(n) : (n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy),
        le(n, "__static__" + t, !1),
        n)
    }
    function se(t, e, n) {
        return le(t, "__once__" + e + (n ? "_" + n : ""), !0),
        t
    }
    function le(t, e, n) {
        if (Array.isArray(t))
            for (var i = 0; i < t.length; i++)
                t[i] && "string" != typeof t[i] && ce(t[i], e + "_" + i, n);
        else
            ce(t, e, n)
    }
    function ce(t, e, n) {
        t.isStatic = !0,
        t.key = e,
        t.isOnce = n
    }
    function ue(t) {
        t._vnode = null,
        t._staticTrees = null;
        var e = t.$vnode = t.$options._parentVnode
          , n = e && e.context;
        t.$slots = ft(t.$options._renderChildren, n),
        t.$scopedSlots = Gr,
        t._c = function(e, n, i, r) {
            return Qt(t, e, n, i, r, !1)
        }
        ,
        t.$createElement = function(e, n, i, r) {
            return Qt(t, e, n, i, r, !0)
        }
    }
    function de(t, e) {
        var n = t.$options = Object.create(t.constructor.options);
        n.parent = e.parent,
        n.propsData = e.propsData,
        n._parentVnode = e._parentVnode,
        n._parentListeners = e._parentListeners,
        n._renderChildren = e._renderChildren,
        n._componentTag = e._componentTag,
        n._parentElm = e._parentElm,
        n._refElm = e._refElm,
        e.render && (n.render = e.render,
        n.staticRenderFns = e.staticRenderFns)
    }
    function pe(t) {
        var e = t.options;
        if (t.super) {
            var n = pe(t.super);
            if (n !== t.superOptions) {
                t.superOptions = n;
                var i = fe(t);
                i && v(t.extendOptions, i),
                e = t.options = B(n, t.extendOptions),
                e.name && (e.components[e.name] = t)
            }
        }
        return e
    }
    function fe(t) {
        var e, n = t.options, i = t.extendOptions, r = t.sealedOptions;
        for (var a in n)
            n[a] !== r[a] && (e || (e = {}),
            e[a] = he(n[a], i[a], r[a]));
        return e
    }
    function he(t, e, n) {
        if (Array.isArray(t)) {
            var i = [];
            n = Array.isArray(n) ? n : [n],
            e = Array.isArray(e) ? e : [e];
            for (var r = 0; r < t.length; r++)
                (e.indexOf(t[r]) >= 0 || n.indexOf(t[r]) < 0) && i.push(t[r]);
            return i
        }
        return t
    }
    function ve(t) {
        this instanceof ve || Zr("Vue is a constructor and should be called with the `new` keyword"),
        this._init(t)
    }
    function me(t) {
        t.use = function(t) {
            if (!t.installed) {
                var e = h(arguments, 1);
                return e.unshift(this),
                "function" == typeof t.install ? t.install.apply(t, e) : "function" == typeof t && t.apply(null, e),
                t.installed = !0,
                this
            }
        }
    }
    function ge(t) {
        t.mixin = function(t) {
            this.options = B(this.options, t)
        }
    }
    function ye(t) {
        t.cid = 0;
        var e = 1;
        t.extend = function(t) {
            t = t || {};
            var n = this
              , i = n.cid
              , r = t._Ctor || (t._Ctor = {});
            if (r[i])
                return r[i];
            var a = t.name || n.options.name;
            /^[a-zA-Z][\w-]*$/.test(a) || Zr('Invalid component name: "' + a + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
            var o = function(t) {
                this._init(t)
            };
            return o.prototype = Object.create(n.prototype),
            o.prototype.constructor = o,
            o.cid = e++,
            o.options = B(n.options, t),
            o.super = n,
            o.options.props && be(o),
            o.options.computed && _e(o),
            o.extend = n.extend,
            o.mixin = n.mixin,
            o.use = n.use,
            Yr.forEach(function(t) {
                o[t] = n[t]
            }),
            a && (o.options.components[a] = o),
            o.superOptions = n.options,
            o.extendOptions = t,
            o.sealedOptions = v({}, o.options),
            r[i] = o,
            o
        }
    }
    function be(t) {
        var e = t.options.props;
        for (var n in e)
            Nt(t.prototype, "_props", n)
    }
    function _e(t) {
        var e = t.options.computed;
        for (var n in e)
            Pt(t.prototype, n, e[n])
    }
    function xe(t) {
        Yr.forEach(function(e) {
            t[e] = function(t, n) {
                return n ? ("component" === e && Kr.isReservedTag(t) && Zr("Do not use built-in or reserved HTML elements as component id: " + t),
                "component" === e && a(n) && (n.name = n.name || t,
                n = this.options._base.extend(n)),
                "directive" === e && "function" == typeof n && (n = {
                    bind: n,
                    update: n
                }),
                this.options[e + "s"][t] = n,
                n) : this.options[e + "s"][t]
            }
        })
    }
    function ke(t) {
        return t && (t.Ctor.options.name || t.tag)
    }
    function we(t, e) {
        return "string" == typeof t ? t.split(",").indexOf(e) > -1 : !!o(t) && t.test(e)
    }
    function Ce(t, e, n) {
        for (var i in t) {
            var r = t[i];
            if (r) {
                var a = ke(r.componentOptions);
                a && !n(a) && (r !== e && $e(r),
                t[i] = null)
            }
        }
    }
    function $e(t) {
        t && t.componentInstance.$destroy()
    }
    function Se(t) {
        for (var n = t.data, i = t, r = t; e(r.componentInstance); )
            r = r.componentInstance._vnode,
            r.data && (n = Te(r.data, n));
        for (; e(i = i.parent); )
            i.data && (n = Te(n, i.data));
        return Ee(n)
    }
    function Te(t, n) {
        return {
            staticClass: Ae(t.staticClass, n.staticClass),
            class: e(t.class) ? [t.class, n.class] : n.class
        }
    }
    function Ee(t) {
        var n = t.class
          , i = t.staticClass;
        return e(i) || e(n) ? Ae(i, je(n)) : ""
    }
    function Ae(t, e) {
        return t ? e ? t + " " + e : t : e || ""
    }
    function je(n) {
        if (t(n))
            return "";
        if ("string" == typeof n)
            return n;
        var i = "";
        if (Array.isArray(n)) {
            for (var a, o = 0, s = n.length; o < s; o++)
                e(n[o]) && e(a = je(n[o])) && "" !== a && (i += a + " ");
            return i.slice(0, -1)
        }
        if (r(n)) {
            for (var l in n)
                n[l] && (i += l + " ");
            return i.slice(0, -1)
        }
        return i
    }
    function Ne(t) {
        return Ho(t) ? "svg" : "math" === t ? "math" : void 0
    }
    function Oe(t) {
        if (!la)
            return !0;
        if (Ro(t))
            return !1;
        if (t = t.toLowerCase(),
        null != zo[t])
            return zo[t];
        var e = document.createElement(t);
        return t.indexOf("-") > -1 ? zo[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : zo[t] = /HTMLUnknownElement/.test(e.toString())
    }
    function De(t) {
        if ("string" == typeof t) {
            var e = document.querySelector(t);
            return e || (Zr("Cannot find element: " + t),
            document.createElement("div"))
        }
        return t
    }
    function Le(t, e) {
        var n = document.createElement(t);
        return "select" !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute("multiple", "multiple"),
        n)
    }
    function Ie(t, e) {
        return document.createElementNS(Fo[t], e)
    }
    function Me(t) {
        return document.createTextNode(t)
    }
    function Pe(t) {
        return document.createComment(t)
    }
    function Fe(t, e, n) {
        t.insertBefore(e, n)
    }
    function qe(t, e) {
        t.removeChild(e)
    }
    function He(t, e) {
        t.appendChild(e)
    }
    function Be(t) {
        return t.parentNode
    }
    function Re(t) {
        return t.nextSibling
    }
    function ze(t) {
        return t.tagName
    }
    function Ue(t, e) {
        t.textContent = e
    }
    function Ve(t, e, n) {
        t.setAttribute(e, n)
    }
    function We(t, e) {
        var n = t.data.ref;
        if (n) {
            var i = t.context
              , r = t.componentInstance || t.elm
              , a = i.$refs;
            e ? Array.isArray(a[n]) ? u(a[n], r) : a[n] === r && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(r) < 0 ? a[n].push(r) : a[n] = [r] : a[n] = r
        }
    }
    function Xe(t, n) {
        return t.key === n.key && t.tag === n.tag && t.isComment === n.isComment && e(t.data) === e(n.data) && Ye(t, n)
    }
    function Ye(t, n) {
        if ("input" !== t.tag)
            return !0;
        var i;
        return (e(i = t.data) && e(i = i.attrs) && i.type) === (e(i = n.data) && e(i = i.attrs) && i.type)
    }
    function Je(t, n, i) {
        var r, a, o = {};
        for (r = n; r <= i; ++r)
            a = t[r].key,
            e(a) && (o[a] = r);
        return o
    }
    function Ke(t, e) {
        (t.data.directives || e.data.directives) && Ge(t, e)
    }
    function Ge(t, e) {
        var n, i, r, a = t === Wo, o = e === Wo, s = Qe(t.data.directives, t.context), l = Qe(e.data.directives, e.context), c = [], u = [];
        for (n in l)
            i = s[n],
            r = l[n],
            i ? (r.oldValue = i.value,
            tn(r, "update", e, t),
            r.def && r.def.componentUpdated && u.push(r)) : (tn(r, "bind", e, t),
            r.def && r.def.inserted && c.push(r));
        if (c.length) {
            var d = function() {
                for (var n = 0; n < c.length; n++)
                    tn(c[n], "inserted", e, t)
            };
            a ? tt(e.data.hook || (e.data.hook = {}), "insert", d) : d()
        }
        if (u.length && tt(e.data.hook || (e.data.hook = {}), "postpatch", function() {
            for (var n = 0; n < u.length; n++)
                tn(u[n], "componentUpdated", e, t)
        }),
        !a)
            for (n in s)
                l[n] || tn(s[n], "unbind", t, t, o)
    }
    function Qe(t, e) {
        var n = Object.create(null);
        if (!t)
            return n;
        var i, r;
        for (i = 0; i < t.length; i++)
            r = t[i],
            r.modifiers || (r.modifiers = Jo),
            n[Ze(r)] = r,
            r.def = R(e.$options, "directives", r.name, !0);
        return n
    }
    function Ze(t) {
        return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
    }
    function tn(t, e, n, i, r) {
        var a = t.def && t.def[e];
        if (a)
            try {
                a(n.elm, t, n, i, r)
            } catch (i) {
                C(i, n.context, "directive " + t.name + " " + e + " hook")
            }
    }
    function en(n, i) {
        if (!t(n.data.attrs) || !t(i.data.attrs)) {
            var r, a, o = i.elm, s = n.data.attrs || {}, l = i.data.attrs || {};
            e(l.__ob__) && (l = i.data.attrs = v({}, l));
            for (r in l)
                a = l[r],
                s[r] !== a && nn(o, r, a);
            da && l.value !== s.value && nn(o, "value", l.value);
            for (r in s)
                t(l[r]) && (Io(r) ? o.removeAttributeNS(Lo, Mo(r)) : Oo(r) || o.removeAttribute(r))
        }
    }
    function nn(t, e, n) {
        Do(e) ? Po(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : Oo(e) ? t.setAttribute(e, Po(n) || "false" === n ? "false" : "true") : Io(e) ? Po(n) ? t.removeAttributeNS(Lo, Mo(e)) : t.setAttributeNS(Lo, e, n) : Po(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function rn(n, i) {
        var r = i.elm
          , a = i.data
          , o = n.data;
        if (!(t(a.staticClass) && t(a.class) && (t(o) || t(o.staticClass) && t(o.class)))) {
            var s = Se(i)
              , l = r._transitionClasses;
            e(l) && (s = Ae(s, je(l))),
            s !== r._prevClass && (r.setAttribute("class", s),
            r._prevClass = s)
        }
    }
    function an(t) {
        function e() {
            (o || (o = [])).push(t.slice(h, r).trim()),
            h = r + 1
        }
        var n, i, r, a, o, s = !1, l = !1, c = !1, u = !1, d = 0, p = 0, f = 0, h = 0;
        for (r = 0; r < t.length; r++)
            if (i = n,
            n = t.charCodeAt(r),
            s)
                39 === n && 92 !== i && (s = !1);
            else if (l)
                34 === n && 92 !== i && (l = !1);
            else if (c)
                96 === n && 92 !== i && (c = !1);
            else if (u)
                47 === n && 92 !== i && (u = !1);
            else if (124 !== n || 124 === t.charCodeAt(r + 1) || 124 === t.charCodeAt(r - 1) || d || p || f) {
                switch (n) {
                case 34:
                    l = !0;
                    break;
                case 39:
                    s = !0;
                    break;
                case 96:
                    c = !0;
                    break;
                case 40:
                    f++;
                    break;
                case 41:
                    f--;
                    break;
                case 91:
                    p++;
                    break;
                case 93:
                    p--;
                    break;
                case 123:
                    d++;
                    break;
                case 125:
                    d--
                }
                if (47 === n) {
                    for (var v = r - 1, m = void 0; v >= 0 && " " === (m = t.charAt(v)); v--)
                        ;
                    m && Zo.test(m) || (u = !0)
                }
            } else
                void 0 === a ? (h = r + 1,
                a = t.slice(0, r).trim()) : e();
        if (void 0 === a ? a = t.slice(0, r).trim() : 0 !== h && e(),
        o)
            for (r = 0; r < o.length; r++)
                a = on(a, o[r]);
        return a
    }
    function on(t, e) {
        var n = e.indexOf("(");
        return n < 0 ? '_f("' + e + '")(' + t + ")" : '_f("' + e.slice(0, n) + '")(' + t + "," + e.slice(n + 1)
    }
    function sn(t) {
        console.error("[Vue compiler]: " + t)
    }
    function ln(t, e) {
        return t ? t.map(function(t) {
            return t[e]
        }).filter(function(t) {
            return t
        }) : []
    }
    function cn(t, e, n) {
        (t.props || (t.props = [])).push({
            name: e,
            value: n
        })
    }
    function un(t, e, n) {
        (t.attrs || (t.attrs = [])).push({
            name: e,
            value: n
        })
    }
    function dn(t, e, n, i, r, a) {
        (t.directives || (t.directives = [])).push({
            name: e,
            rawName: n,
            value: i,
            arg: r,
            modifiers: a
        })
    }
    function pn(t, e, n, i, r, a) {
        a && i && i.prevent && i.passive && a("passive and prevent can't be used together. Passive handler can't prevent default event."),
        i && i.capture && (delete i.capture,
        e = "!" + e),
        i && i.once && (delete i.once,
        e = "~" + e),
        i && i.passive && (delete i.passive,
        e = "&" + e);
        var o;
        i && i.native ? (delete i.native,
        o = t.nativeEvents || (t.nativeEvents = {})) : o = t.events || (t.events = {});
        var s = {
            value: n,
            modifiers: i
        }
          , l = o[e];
        Array.isArray(l) ? r ? l.unshift(s) : l.push(s) : o[e] = l ? r ? [s, l] : [l, s] : s
    }
    function fn(t, e, n) {
        var i = hn(t, ":" + e) || hn(t, "v-bind:" + e);
        if (null != i)
            return an(i);
        if (!1 !== n) {
            var r = hn(t, e);
            if (null != r)
                return JSON.stringify(r)
        }
    }
    function hn(t, e) {
        var n;
        if (null != (n = t.attrsMap[e]))
            for (var i = t.attrsList, r = 0, a = i.length; r < a; r++)
                if (i[r].name === e) {
                    i.splice(r, 1);
                    break
                }
        return n
    }
    function vn(t, e, n) {
        var i = n || {}
          , r = i.number
          , a = i.trim
          , o = "$$v";
        a && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"),
        r && (o = "_n(" + o + ")");
        var s = mn(e, o);
        t.model = {
            value: "(" + e + ")",
            expression: '"' + e + '"',
            callback: "function ($$v) {" + s + "}"
        }
    }
    function mn(t, e) {
        var n = gn(t);
        return null === n.idx ? t + "=" + e : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + t + "=" + e + "}else{$$exp.splice($$idx, 1, " + e + ")}"
    }
    function gn(t) {
        if (xo = t,
        _o = xo.length,
        wo = Co = $o = 0,
        t.indexOf("[") < 0 || t.lastIndexOf("]") < _o - 1)
            return {
                exp: t,
                idx: null
            };
        for (; !bn(); )
            ko = yn(),
            _n(ko) ? kn(ko) : 91 === ko && xn(ko);
        return {
            exp: t.substring(0, Co),
            idx: t.substring(Co + 1, $o)
        }
    }
    function yn() {
        return xo.charCodeAt(++wo)
    }
    function bn() {
        return wo >= _o
    }
    function _n(t) {
        return 34 === t || 39 === t
    }
    function xn(t) {
        var e = 1;
        for (Co = wo; !bn(); )
            if (t = yn(),
            _n(t))
                kn(t);
            else if (91 === t && e++,
            93 === t && e--,
            0 === e) {
                $o = wo;
                break
            }
    }
    function kn(t) {
        for (var e = t; !bn() && (t = yn()) !== e; )
            ;
    }
    function wn(t, e, n) {
        So = n;
        var i = e.value
          , r = e.modifiers
          , a = t.tag
          , o = t.attrsMap.type
          , s = t.attrsMap["v-bind:type"] || t.attrsMap[":type"];
        if ("input" === a && s && So('<input :type="' + s + '" v-model="' + i + '">:\nv-model does not support dynamic input types. Use v-if branches instead.'),
        "input" === a && "file" === o && So("<" + t.tag + ' v-model="' + i + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'),
        "select" === a)
            Sn(t, i, r);
        else if ("input" === a && "checkbox" === o)
            Cn(t, i, r);
        else if ("input" === a && "radio" === o)
            $n(t, i, r);
        else if ("input" === a || "textarea" === a)
            Tn(t, i, r);
        else {
            if (!Kr.isReservedTag(a))
                return vn(t, i, r),
                !1;
            So("<" + t.tag + ' v-model="' + i + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.")
        }
        return !0
    }
    function Cn(t, e, n) {
        var i = n && n.number
          , r = fn(t, "value") || "null"
          , a = fn(t, "true-value") || "true"
          , o = fn(t, "false-value") || "false";
        cn(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + r + ")>-1" + ("true" === a ? ":(" + e + ")" : ":_q(" + e + "," + a + ")")),
        pn(t, es, "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + r + ")" : r) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + e + "=$$a.concat($$v))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + mn(e, "$$c") + "}", null, !0)
    }
    function $n(t, e, n) {
        var i = n && n.number
          , r = fn(t, "value") || "null";
        r = i ? "_n(" + r + ")" : r,
        cn(t, "checked", "_q(" + e + "," + r + ")"),
        pn(t, es, mn(e, r), null, !0)
    }
    function Sn(t, e, n) {
        var i = n && n.number
          , r = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (i ? "_n(val)" : "val") + "})"
          , a = "var $$selectedVal = " + r + ";";
        a = a + " " + mn(e, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),
        pn(t, "change", a, null, !0)
    }
    function Tn(t, e, n) {
        var i = t.attrsMap.type
          , r = n || {}
          , a = r.lazy
          , o = r.number
          , s = r.trim
          , l = !a && "range" !== i
          , c = a ? "change" : "range" === i ? ts : "input"
          , u = "$event.target.value";
        s && (u = "$event.target.value.trim()"),
        o && (u = "_n(" + u + ")");
        var d = mn(e, u);
        l && (d = "if($event.target.composing)return;" + d),
        cn(t, "value", "(" + e + ")"),
        pn(t, c, d, null, !0),
        (s || o || "number" === i) && pn(t, "blur", "$forceUpdate()")
    }
    function En(t) {
        var n;
        e(t[ts]) && (n = ua ? "change" : "input",
        t[n] = [].concat(t[ts], t[n] || []),
        delete t[ts]),
        e(t[es]) && (n = va ? "click" : "change",
        t[n] = [].concat(t[es], t[n] || []),
        delete t[es])
    }
    function An(t, e, n, i, r) {
        if (n) {
            var a = e
              , o = To;
            e = function(n) {
                null !== (1 === arguments.length ? a(n) : a.apply(null, arguments)) && jn(t, e, i, o)
            }
        }
        To.addEventListener(t, e, ma ? {
            capture: i,
            passive: r
        } : i)
    }
    function jn(t, e, n, i) {
        (i || To).removeEventListener(t, e, n)
    }
    function Nn(e, n) {
        if (!t(e.data.on) || !t(n.data.on)) {
            var i = n.data.on || {}
              , r = e.data.on || {};
            To = n.elm,
            En(i),
            Z(i, r, An, jn, n.context)
        }
    }
    function On(n, i) {
        if (!t(n.data.domProps) || !t(i.data.domProps)) {
            var r, a, o = i.elm, s = n.data.domProps || {}, l = i.data.domProps || {};
            e(l.__ob__) && (l = i.data.domProps = v({}, l));
            for (r in s)
                t(l[r]) && (o[r] = "");
            for (r in l)
                if (a = l[r],
                "textContent" !== r && "innerHTML" !== r || (i.children && (i.children.length = 0),
                a !== s[r]))
                    if ("value" === r) {
                        o._value = a;
                        var c = t(a) ? "" : String(a);
                        Dn(o, i, c) && (o.value = c)
                    } else
                        o[r] = a
        }
    }
    function Dn(t, e, n) {
        return !t.composing && ("option" === e.tag || Ln(t, n) || In(t, n))
    }
    function Ln(t, e) {
        return document.activeElement !== t && t.value !== e
    }
    function In(t, n) {
        var i = t.value
          , r = t._vModifiers;
        return e(r) && r.number || "number" === t.type ? l(i) !== l(n) : e(r) && r.trim ? i.trim() !== n.trim() : i !== n
    }
    function Mn(t) {
        var e = Pn(t.style);
        return t.staticStyle ? v(t.staticStyle, e) : e
    }
    function Pn(t) {
        return Array.isArray(t) ? m(t) : "string" == typeof t ? rs(t) : t
    }
    function Fn(t, e) {
        var n, i = {};
        if (e)
            for (var r = t; r.componentInstance; )
                r = r.componentInstance._vnode,
                r.data && (n = Mn(r.data)) && v(i, n);
        (n = Mn(t.data)) && v(i, n);
        for (var a = t; a = a.parent; )
            a.data && (n = Mn(a.data)) && v(i, n);
        return i
    }
    function qn(n, i) {
        var r = i.data
          , a = n.data;
        if (!(t(r.staticStyle) && t(r.style) && t(a.staticStyle) && t(a.style))) {
            var o, s, l = i.elm, c = a.staticStyle, u = a.normalizedStyle || a.style || {}, d = c || u, p = Pn(i.data.style) || {};
            i.data.normalizedStyle = e(p.__ob__) ? v({}, p) : p;
            var f = Fn(i, !0);
            for (s in d)
                t(f[s]) && ss(l, s, "");
            for (s in f)
                (o = f[s]) !== d[s] && ss(l, s, null == o ? "" : o)
        }
    }
    function Hn(t, e) {
        if (e && (e = e.trim()))
            if (t.classList)
                e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.add(e)
                }) : t.classList.add(e);
            else {
                var n = " " + (t.getAttribute("class") || "") + " ";
                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
            }
    }
    function Bn(t, e) {
        if (e && (e = e.trim()))
            if (t.classList)
                e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function(e) {
                    return t.classList.remove(e)
                }) : t.classList.remove(e);
            else {
                for (var n = " " + (t.getAttribute("class") || "") + " ", i = " " + e + " "; n.indexOf(i) >= 0; )
                    n = n.replace(i, " ");
                t.setAttribute("class", n.trim())
            }
    }
    function Rn(t) {
        if (t) {
            if ("object" == typeof t) {
                var e = {};
                return !1 !== t.css && v(e, ds(t.name || "v")),
                v(e, t),
                e
            }
            return "string" == typeof t ? ds(t) : void 0
        }
    }
    function zn(t) {
        bs(function() {
            bs(t)
        })
    }
    function Un(t, e) {
        (t._transitionClasses || (t._transitionClasses = [])).push(e),
        Hn(t, e)
    }
    function Vn(t, e) {
        t._transitionClasses && u(t._transitionClasses, e),
        Bn(t, e)
    }
    function Wn(t, e, n) {
        var i = Xn(t, e)
          , r = i.type
          , a = i.timeout
          , o = i.propCount;
        if (!r)
            return n();
        var s = r === fs ? ms : ys
          , l = 0
          , c = function() {
            t.removeEventListener(s, u),
            n()
        }
          , u = function(e) {
            e.target === t && ++l >= o && c()
        };
        setTimeout(function() {
            l < o && c()
        }, a + 1),
        t.addEventListener(s, u)
    }
    function Xn(t, e) {
        var n, i = window.getComputedStyle(t), r = i[vs + "Delay"].split(", "), a = i[vs + "Duration"].split(", "), o = Yn(r, a), s = i[gs + "Delay"].split(", "), l = i[gs + "Duration"].split(", "), c = Yn(s, l), u = 0, d = 0;
        return e === fs ? o > 0 && (n = fs,
        u = o,
        d = a.length) : e === hs ? c > 0 && (n = hs,
        u = c,
        d = l.length) : (u = Math.max(o, c),
        n = u > 0 ? o > c ? fs : hs : null,
        d = n ? n === fs ? a.length : l.length : 0),
        {
            type: n,
            timeout: u,
            propCount: d,
            hasTransform: n === fs && _s.test(i[vs + "Property"])
        }
    }
    function Yn(t, e) {
        for (; t.length < e.length; )
            t = t.concat(t);
        return Math.max.apply(null, e.map(function(e, n) {
            return Jn(e) + Jn(t[n])
        }))
    }
    function Jn(t) {
        return 1e3 * Number(t.slice(0, -1))
    }
    function Kn(n, i) {
        var a = n.elm;
        e(a._leaveCb) && (a._leaveCb.cancelled = !0,
        a._leaveCb());
        var o = Rn(n.data.transition);
        if (!t(o) && !e(a._enterCb) && 1 === a.nodeType) {
            for (var s = o.css, c = o.type, u = o.enterClass, d = o.enterToClass, p = o.enterActiveClass, f = o.appearClass, h = o.appearToClass, v = o.appearActiveClass, m = o.beforeEnter, g = o.enter, y = o.afterEnter, b = o.enterCancelled, x = o.beforeAppear, k = o.appear, w = o.afterAppear, C = o.appearCancelled, $ = o.duration, S = Ka, T = Ka.$vnode; T && T.parent; )
                T = T.parent,
                S = T.context;
            var E = !S._isMounted || !n.isRootInsert;
            if (!E || k || "" === k) {
                var A = E && f ? f : u
                  , j = E && v ? v : p
                  , N = E && h ? h : d
                  , O = E ? x || m : m
                  , D = E && "function" == typeof k ? k : g
                  , L = E ? w || y : y
                  , I = E ? C || b : b
                  , M = l(r($) ? $.enter : $);
                null != M && Qn(M, "enter", n);
                var P = !1 !== s && !da
                  , F = ti(D)
                  , q = a._enterCb = _(function() {
                    P && (Vn(a, N),
                    Vn(a, j)),
                    q.cancelled ? (P && Vn(a, A),
                    I && I(a)) : L && L(a),
                    a._enterCb = null
                });
                n.data.show || tt(n.data.hook || (n.data.hook = {}), "insert", function() {
                    var t = a.parentNode
                      , e = t && t._pending && t._pending[n.key];
                    e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(),
                    D && D(a, q)
                }),
                O && O(a),
                P && (Un(a, A),
                Un(a, j),
                zn(function() {
                    Un(a, N),
                    Vn(a, A),
                    q.cancelled || F || (Zn(M) ? setTimeout(q, M) : Wn(a, c, q))
                })),
                n.data.show && (i && i(),
                D && D(a, q)),
                P || F || q()
            }
        }
    }
    function Gn(n, i) {
        function a() {
            C.cancelled || (n.data.show || ((o.parentNode._pending || (o.parentNode._pending = {}))[n.key] = n),
            h && h(o),
            x && (Un(o, d),
            Un(o, f),
            zn(function() {
                Un(o, p),
                Vn(o, d),
                C.cancelled || k || (Zn(w) ? setTimeout(C, w) : Wn(o, u, C))
            })),
            v && v(o, C),
            x || k || C())
        }
        var o = n.elm;
        e(o._enterCb) && (o._enterCb.cancelled = !0,
        o._enterCb());
        var s = Rn(n.data.transition);
        if (t(s))
            return i();
        if (!e(o._leaveCb) && 1 === o.nodeType) {
            var c = s.css
              , u = s.type
              , d = s.leaveClass
              , p = s.leaveToClass
              , f = s.leaveActiveClass
              , h = s.beforeLeave
              , v = s.leave
              , m = s.afterLeave
              , g = s.leaveCancelled
              , y = s.delayLeave
              , b = s.duration
              , x = !1 !== c && !da
              , k = ti(v)
              , w = l(r(b) ? b.leave : b);
            e(w) && Qn(w, "leave", n);
            var C = o._leaveCb = _(function() {
                o.parentNode && o.parentNode._pending && (o.parentNode._pending[n.key] = null),
                x && (Vn(o, p),
                Vn(o, f)),
                C.cancelled ? (x && Vn(o, d),
                g && g(o)) : (i(),
                m && m(o)),
                o._leaveCb = null
            });
            y ? y(a) : a()
        }
    }
    function Qn(t, e, n) {
        "number" != typeof t ? Zr("<transition> explicit " + e + " duration is not a valid number - got " + JSON.stringify(t) + ".", n.context) : isNaN(t) && Zr("<transition> explicit " + e + " duration is NaN - the duration expression might be incorrect.", n.context)
    }
    function Zn(t) {
        return "number" == typeof t && !isNaN(t)
    }
    function ti(n) {
        if (t(n))
            return !1;
        var i = n.fns;
        return e(i) ? ti(Array.isArray(i) ? i[0] : i) : (n._length || n.length) > 1
    }
    function ei(t, e) {
        !0 !== e.data.show && Kn(e)
    }
    function ni(t, e, n) {
        var i = e.value
          , r = t.multiple;
        if (r && !Array.isArray(i))
            return void Zr('<select multiple v-model="' + e.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(i).slice(8, -1), n);
        for (var a, o, s = 0, l = t.options.length; s < l; s++)
            if (o = t.options[s],
            r)
                a = b(i, ri(o)) > -1,
                o.selected !== a && (o.selected = a);
            else if (y(ri(o), i))
                return void (t.selectedIndex !== s && (t.selectedIndex = s));
        r || (t.selectedIndex = -1)
    }
    function ii(t, e) {
        for (var n = 0, i = e.length; n < i; n++)
            if (y(ri(e[n]), t))
                return !1;
        return !0
    }
    function ri(t) {
        return "_value"in t ? t._value : t.value
    }
    function ai(t) {
        t.target.composing = !0
    }
    function oi(t) {
        t.target.composing = !1,
        si(t.target, "input")
    }
    function si(t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !0),
        t.dispatchEvent(n)
    }
    function li(t) {
        return !t.componentInstance || t.data && t.data.transition ? t : li(t.componentInstance._vnode)
    }
    function ci(t) {
        var e = t && t.componentOptions;
        return e && e.Ctor.options.abstract ? ci(lt(e.children)) : t
    }
    function ui(t) {
        var e = {}
          , n = t.$options;
        for (var i in n.propsData)
            e[i] = t[i];
        var r = n._parentListeners;
        for (var a in r)
            e[Br(a)] = r[a];
        return e
    }
    function di(t, e) {
        if (/\d-keep-alive$/.test(e.tag))
            return t("keep-alive", {
                props: e.componentOptions.propsData
            })
    }
    function pi(t) {
        for (; t = t.parent; )
            if (t.data.transition)
                return !0
    }
    function fi(t, e) {
        return e.key === t.key && e.tag === t.tag
    }
    function hi(t) {
        t.elm._moveCb && t.elm._moveCb(),
        t.elm._enterCb && t.elm._enterCb()
    }
    function vi(t) {
        t.data.newPos = t.elm.getBoundingClientRect()
    }
    function mi(t) {
        var e = t.data.pos
          , n = t.data.newPos
          , i = e.left - n.left
          , r = e.top - n.top;
        if (i || r) {
            t.data.moved = !0;
            var a = t.elm.style;
            a.transform = a.WebkitTransform = "translate(" + i + "px," + r + "px)",
            a.transitionDuration = "0s"
        }
    }
    function gi(t) {
        return Ds = Ds || document.createElement("div"),
        Ds.innerHTML = t,
        Ds.textContent
    }
    function yi(t, e) {
        var n = e ? bl : yl;
        return t.replace(n, function(t) {
            return gl[t]
        })
    }
    function bi(t, e) {
        function n(e) {
            u += e,
            t = t.substring(e)
        }
        function i(t, n, i) {
            var r, s;
            if (null == n && (n = u),
            null == i && (i = u),
            t && (s = t.toLowerCase()),
            t)
                for (r = o.length - 1; r >= 0 && o[r].lowerCasedTag !== s; r--)
                    ;
            else
                r = 0;
            if (r >= 0) {
                for (var l = o.length - 1; l >= r; l--)
                    (l > r || !t) && e.warn && e.warn("tag <" + o[l].tag + "> has no matching end tag."),
                    e.end && e.end(o[l].tag, n, i);
                o.length = r,
                a = r && o[r - 1].tag
            } else
                "br" === s ? e.start && e.start(t, [], !0, n, i) : "p" === s && (e.start && e.start(t, [], !1, n, i),
                e.end && e.end(t, n, i))
        }
        for (var r, a, o = [], s = e.expectHTML, l = e.isUnaryTag || Vr, c = e.canBeLeftOpenTag || Vr, u = 0; t; ) {
            if (r = t,
            a && vl(a)) {
                var d = a.toLowerCase()
                  , p = ml[d] || (ml[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)","i"))
                  , f = 0
                  , h = t.replace(p, function(t, n, i) {
                    return f = i.length,
                    vl(d) || "noscript" === d || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")),
                    e.chars && e.chars(n),
                    ""
                });
                u += t.length - h.length,
                t = h,
                i(d, u - f, u)
            } else {
                var v = t.indexOf("<");
                if (0 === v) {
                    if (Ys.test(t)) {
                        var m = t.indexOf("--\x3e");
                        if (m >= 0) {
                            n(m + 3);
                            continue
                        }
                    }
                    if (Js.test(t)) {
                        var g = t.indexOf("]>");
                        if (g >= 0) {
                            n(g + 2);
                            continue
                        }
                    }
                    var y = t.match(Xs);
                    if (y) {
                        n(y[0].length);
                        continue
                    }
                    var b = t.match(Ws);
                    if (b) {
                        var _ = u;
                        n(b[0].length),
                        i(b[1], _, u);
                        continue
                    }
                    var x = function() {
                        var e = t.match(Us);
                        if (e) {
                            var i = {
                                tagName: e[1],
                                attrs: [],
                                start: u
                            };
                            n(e[0].length);
                            for (var r, a; !(r = t.match(Vs)) && (a = t.match(Bs)); )
                                n(a[0].length),
                                i.attrs.push(a);
                            if (r)
                                return i.unarySlash = r[1],
                                n(r[0].length),
                                i.end = u,
                                i
                        }
                    }();
                    if (x) {
                        !function(t) {
                            var n = t.tagName
                              , r = t.unarySlash;
                            s && ("p" === a && Ps(n) && i(a),
                            c(n) && a === n && i(n));
                            for (var u = l(n) || "html" === n && "head" === a || !!r, d = t.attrs.length, p = new Array(d), f = 0; f < d; f++) {
                                var h = t.attrs[f];
                                Ks && -1 === h[0].indexOf('""') && ("" === h[3] && delete h[3],
                                "" === h[4] && delete h[4],
                                "" === h[5] && delete h[5]);
                                var v = h[3] || h[4] || h[5] || "";
                                p[f] = {
                                    name: h[1],
                                    value: yi(v, e.shouldDecodeNewlines)
                                }
                            }
                            u || (o.push({
                                tag: n,
                                lowerCasedTag: n.toLowerCase(),
                                attrs: p
                            }),
                            a = n),
                            e.start && e.start(n, p, u, t.start, t.end)
                        }(x);
                        continue
                    }
                }
                var k = void 0
                  , w = void 0
                  , C = void 0;
                if (v >= 0) {
                    for (w = t.slice(v); !(Ws.test(w) || Us.test(w) || Ys.test(w) || Js.test(w) || (C = w.indexOf("<", 1)) < 0); )
                        v += C,
                        w = t.slice(v);
                    k = t.substring(0, v),
                    n(v)
                }
                v < 0 && (k = t,
                t = ""),
                e.chars && k && e.chars(k)
            }
            if (t === r) {
                e.chars && e.chars(t),
                !o.length && e.warn && e.warn('Mal-formatted tag at end of template: "' + t + '"');
                break
            }
        }
        i()
    }
    function _i(t, e) {
        var n = e ? kl(e) : _l;
        if (n.test(t)) {
            for (var i, r, a = [], o = n.lastIndex = 0; i = n.exec(t); ) {
                r = i.index,
                r > o && a.push(JSON.stringify(t.slice(o, r)));
                var s = an(i[1].trim());
                a.push("_s(" + s + ")"),
                o = r + i[0].length
            }
            return o < t.length && a.push(JSON.stringify(t.slice(o))),
            a.join("+")
        }
    }
    function xi(t, e) {
        function n(t) {
            u || (u = !0,
            Gs(t))
        }
        function i(t) {
            t.pre && (l = !1),
            nl(t.tag) && (c = !1)
        }
        Gs = e.warn || sn,
        rl = e.getTagNamespace || Vr,
        il = e.mustUseProp || Vr,
        nl = e.isPreTag || Vr,
        tl = ln(e.modules, "preTransformNode"),
        Zs = ln(e.modules, "transformNode"),
        el = ln(e.modules, "postTransformNode"),
        Qs = e.delimiters;
        var r, a, o = [], s = !1 !== e.preserveWhitespace, l = !1, c = !1, u = !1;
        return bi(t, {
            warn: Gs,
            expectHTML: e.expectHTML,
            isUnaryTag: e.isUnaryTag,
            canBeLeftOpenTag: e.canBeLeftOpenTag,
            shouldDecodeNewlines: e.shouldDecodeNewlines,
            start: function(t, s, u) {
                function d(t) {
                    "slot" !== t.tag && "template" !== t.tag || n("Cannot use <" + t.tag + "> as component root element because it may contain multiple nodes."),
                    t.attrsMap.hasOwnProperty("v-for") && n("Cannot use v-for on stateful component root element because it renders multiple elements.")
                }
                var p = a && a.ns || rl(t);
                ua && "svg" === p && (s = Hi(s));
                var f = {
                    type: 1,
                    tag: t,
                    attrsList: s,
                    attrsMap: Pi(s),
                    parent: a,
                    children: []
                };
                p && (f.ns = p),
                qi(f) && !_a() && (f.forbidden = !0,
                Gs("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + t + ">, as they will not be parsed."));
                for (var h = 0; h < tl.length; h++)
                    tl[h](f, e);
                if (l || (ki(f),
                f.pre && (l = !0)),
                nl(f.tag) && (c = !0),
                l)
                    wi(f);
                else {
                    Si(f),
                    Ti(f),
                    Ni(f),
                    Ci(f),
                    f.plain = !f.key && !s.length,
                    $i(f),
                    Oi(f),
                    Di(f);
                    for (var v = 0; v < Zs.length; v++)
                        Zs[v](f, e);
                    Li(f)
                }
                if (r ? o.length || (r.if && (f.elseif || f.else) ? (d(f),
                ji(r, {
                    exp: f.elseif,
                    block: f
                })) : n("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.")) : (r = f,
                d(r)),
                a && !f.forbidden)
                    if (f.elseif || f.else)
                        Ei(f, a);
                    else if (f.slotScope) {
                        a.plain = !1;
                        var m = f.slotTarget || '"default"';
                        (a.scopedSlots || (a.scopedSlots = {}))[m] = f
                    } else
                        a.children.push(f),
                        f.parent = a;
                u ? i(f) : (a = f,
                o.push(f));
                for (var g = 0; g < el.length; g++)
                    el[g](f, e)
            },
            end: function() {
                var t = o[o.length - 1]
                  , e = t.children[t.children.length - 1];
                e && 3 === e.type && " " === e.text && !c && t.children.pop(),
                o.length -= 1,
                a = o[o.length - 1],
                i(t)
            },
            chars: function(e) {
                if (!a)
                    return void (e === t ? n("Component template requires a root element, rather than just text.") : (e = e.trim()) && n('text "' + e + '" outside root element will be ignored.'));
                if (!ua || "textarea" !== a.tag || a.attrsMap.placeholder !== e) {
                    var i = a.children;
                    if (e = c || e.trim() ? Fi(a) ? e : jl(e) : s && i.length ? " " : "") {
                        var r;
                        !l && " " !== e && (r = _i(e, Qs)) ? i.push({
                            type: 2,
                            expression: r,
                            text: e
                        }) : " " === e && i.length && " " === i[i.length - 1].text || i.push({
                            type: 3,
                            text: e
                        })
                    }
                }
            }
        }),
        r
    }
    function ki(t) {
        null != hn(t, "v-pre") && (t.pre = !0)
    }
    function wi(t) {
        var e = t.attrsList.length;
        if (e)
            for (var n = t.attrs = new Array(e), i = 0; i < e; i++)
                n[i] = {
                    name: t.attrsList[i].name,
                    value: JSON.stringify(t.attrsList[i].value)
                };
        else
            t.pre || (t.plain = !0)
    }
    function Ci(t) {
        var e = fn(t, "key");
        e && ("template" === t.tag && Gs("<template> cannot be keyed. Place the key on real elements instead."),
        t.key = e)
    }
    function $i(t) {
        var e = fn(t, "ref");
        e && (t.ref = e,
        t.refInFor = Ii(t))
    }
    function Si(t) {
        var e;
        if (e = hn(t, "v-for")) {
            var n = e.match($l);
            if (!n)
                return void Gs("Invalid v-for expression: " + e);
            t.for = n[2].trim();
            var i = n[1].trim()
              , r = i.match(Sl);
            r ? (t.alias = r[1].trim(),
            t.iterator1 = r[2].trim(),
            r[3] && (t.iterator2 = r[3].trim())) : t.alias = i
        }
    }
    function Ti(t) {
        var e = hn(t, "v-if");
        if (e)
            t.if = e,
            ji(t, {
                exp: e,
                block: t
            });
        else {
            null != hn(t, "v-else") && (t.else = !0);
            var n = hn(t, "v-else-if");
            n && (t.elseif = n)
        }
    }
    function Ei(t, e) {
        var n = Ai(e.children);
        n && n.if ? ji(n, {
            exp: t.elseif,
            block: t
        }) : Gs("v-" + (t.elseif ? 'else-if="' + t.elseif + '"' : "else") + " used on element <" + t.tag + "> without corresponding v-if.")
    }
    function Ai(t) {
        for (var e = t.length; e--; ) {
            if (1 === t[e].type)
                return t[e];
            " " !== t[e].text && Gs('text "' + t[e].text.trim() + '" between v-if and v-else(-if) will be ignored.'),
            t.pop()
        }
    }
    function ji(t, e) {
        t.ifConditions || (t.ifConditions = []),
        t.ifConditions.push(e)
    }
    function Ni(t) {
        null != hn(t, "v-once") && (t.once = !0)
    }
    function Oi(t) {
        if ("slot" === t.tag)
            t.slotName = fn(t, "name"),
            t.key && Gs("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.");
        else {
            var e = fn(t, "slot");
            e && (t.slotTarget = '""' === e ? '"default"' : e),
            "template" === t.tag && (t.slotScope = hn(t, "scope"))
        }
    }
    function Di(t) {
        var e;
        (e = fn(t, "is")) && (t.component = e),
        null != hn(t, "inline-template") && (t.inlineTemplate = !0)
    }
    function Li(t) {
        var e, n, i, r, a, o, s, l = t.attrsList;
        for (e = 0,
        n = l.length; e < n; e++)
            if (i = r = l[e].name,
            a = l[e].value,
            Cl.test(i))
                if (t.hasBindings = !0,
                o = Mi(i),
                o && (i = i.replace(Al, "")),
                El.test(i))
                    i = i.replace(El, ""),
                    a = an(a),
                    s = !1,
                    o && (o.prop && (s = !0,
                    "innerHtml" === (i = Br(i)) && (i = "innerHTML")),
                    o.camel && (i = Br(i)),
                    o.sync && pn(t, "update:" + Br(i), mn(a, "$event"))),
                    s || il(t.tag, t.attrsMap.type, i) ? cn(t, i, a) : un(t, i, a);
                else if (wl.test(i))
                    i = i.replace(wl, ""),
                    pn(t, i, a, o, !1, Gs);
                else {
                    i = i.replace(Cl, "");
                    var c = i.match(Tl)
                      , u = c && c[1];
                    u && (i = i.slice(0, -(u.length + 1))),
                    dn(t, i, r, a, u, o),
                    "model" === i && Bi(t, a)
                }
            else {
                var d = _i(a, Qs);
                d && Gs(i + '="' + a + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'),
                un(t, i, JSON.stringify(a))
            }
    }
    function Ii(t) {
        for (var e = t; e; ) {
            if (void 0 !== e.for)
                return !0;
            e = e.parent
        }
        return !1
    }
    function Mi(t) {
        var e = t.match(Al);
        if (e) {
            var n = {};
            return e.forEach(function(t) {
                n[t.slice(1)] = !0
            }),
            n
        }
    }
    function Pi(t) {
        for (var e = {}, n = 0, i = t.length; n < i; n++)
            !e[t[n].name] || ua || pa || Gs("duplicate attribute: " + t[n].name),
            e[t[n].name] = t[n].value;
        return e
    }
    function Fi(t) {
        return "script" === t.tag || "style" === t.tag
    }
    function qi(t) {
        return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type)
    }
    function Hi(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            Nl.test(i.name) || (i.name = i.name.replace(Ol, ""),
            e.push(i))
        }
        return e
    }
    function Bi(t, e) {
        for (var n = t; n; )
            n.for && n.alias === e && Gs("<" + t.tag + ' v-model="' + e + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'),
            n = n.parent
    }
    function Ri(t, e) {
        t && (al = Dl(e.staticKeys || ""),
        ol = e.isReservedTag || Vr,
        Ui(t),
        Vi(t, !1))
    }
    function zi(t) {
        return c("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""))
    }
    function Ui(t) {
        if (t.static = Xi(t),
        1 === t.type) {
            if (!ol(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"])
                return;
            for (var e = 0, n = t.children.length; e < n; e++) {
                var i = t.children[e];
                Ui(i),
                i.static || (t.static = !1)
            }
        }
    }
    function Vi(t, e) {
        if (1 === t.type) {
            if ((t.static || t.once) && (t.staticInFor = e),
            t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type))
                return void (t.staticRoot = !0);
            if (t.staticRoot = !1,
            t.children)
                for (var n = 0, i = t.children.length; n < i; n++)
                    Vi(t.children[n], e || !!t.for);
            t.ifConditions && Wi(t.ifConditions, e)
        }
    }
    function Wi(t, e) {
        for (var n = 1, i = t.length; n < i; n++)
            Vi(t[n].block, e)
    }
    function Xi(t) {
        return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || Fr(t.tag) || !ol(t.tag) || Yi(t) || !Object.keys(t).every(al))))
    }
    function Yi(t) {
        for (; t.parent; ) {
            if (t = t.parent,
            "template" !== t.tag)
                return !1;
            if (t.for)
                return !0
        }
        return !1
    }
    function Ji(t, e, n) {
        var i = e ? "nativeOn:{" : "on:{";
        for (var r in t) {
            var a = t[r];
            "click" === r && a && a.modifiers && a.modifiers.right && n('Use "contextmenu" instead of "click.right" since right clicks do not actually fire "click" events.'),
            i += '"' + r + '":' + Ki(r, a) + ","
        }
        return i.slice(0, -1) + "}"
    }
    function Ki(t, e) {
        if (!e)
            return "function(){}";
        if (Array.isArray(e))
            return "[" + e.map(function(e) {
                return Ki(t, e)
            }).join(",") + "]";
        var n = Il.test(e.value)
          , i = Ll.test(e.value);
        if (e.modifiers) {
            var r = ""
              , a = ""
              , o = [];
            for (var s in e.modifiers)
                Fl[s] ? (a += Fl[s],
                Ml[s] && o.push(s)) : o.push(s);
            o.length && (r += Gi(o)),
            a && (r += a);
            return "function($event){" + r + (n ? e.value + "($event)" : i ? "(" + e.value + ")($event)" : e.value) + "}"
        }
        return n || i ? e.value : "function($event){" + e.value + "}"
    }
    function Gi(t) {
        return "if(!('button' in $event)&&" + t.map(Qi).join("&&") + ")return null;"
    }
    function Qi(t) {
        var e = parseInt(t, 10);
        if (e)
            return "$event.keyCode!==" + e;
        var n = Ml[t];
        return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")"
    }
    function Zi(t, e) {
        t.wrapData = function(n) {
            return "_b(" + n + ",'" + t.tag + "'," + e.value + (e.modifiers && e.modifiers.prop ? ",true" : "") + ")"
        }
    }
    function tr(t, e) {
        var n = pl
          , i = pl = []
          , r = fl;
        fl = 0,
        hl = e,
        sl = e.warn || sn,
        ll = ln(e.modules, "transformCode"),
        cl = ln(e.modules, "genData"),
        ul = e.directives || {},
        dl = e.isReservedTag || Vr;
        var a = t ? er(t) : '_c("div")';
        return pl = n,
        fl = r,
        {
            render: "with(this){return " + a + "}",
            staticRenderFns: i
        }
    }
    function er(t) {
        if (t.staticRoot && !t.staticProcessed)
            return nr(t);
        if (t.once && !t.onceProcessed)
            return ir(t);
        if (t.for && !t.forProcessed)
            return or(t);
        if (t.if && !t.ifProcessed)
            return rr(t);
        if ("template" !== t.tag || t.slotTarget) {
            if ("slot" === t.tag)
                return yr(t);
            var e;
            if (t.component)
                e = br(t.component, t);
            else {
                var n = t.plain ? void 0 : sr(t)
                  , i = t.inlineTemplate ? null : pr(t, !0);
                e = "_c('" + t.tag + "'" + (n ? "," + n : "") + (i ? "," + i : "") + ")"
            }
            for (var r = 0; r < ll.length; r++)
                e = ll[r](t, e);
            return e
        }
        return pr(t) || "void 0"
    }
    function nr(t) {
        return t.staticProcessed = !0,
        pl.push("with(this){return " + er(t) + "}"),
        "_m(" + (pl.length - 1) + (t.staticInFor ? ",true" : "") + ")"
    }
    function ir(t) {
        if (t.onceProcessed = !0,
        t.if && !t.ifProcessed)
            return rr(t);
        if (t.staticInFor) {
            for (var e = "", n = t.parent; n; ) {
                if (n.for) {
                    e = n.key;
                    break
                }
                n = n.parent
            }
            return e ? "_o(" + er(t) + "," + fl++ + (e ? "," + e : "") + ")" : (sl("v-once can only be used inside v-for that is keyed. "),
            er(t))
        }
        return nr(t)
    }
    function rr(t) {
        return t.ifProcessed = !0,
        ar(t.ifConditions.slice())
    }
    function ar(t) {
        function e(t) {
            return t.once ? ir(t) : er(t)
        }
        if (!t.length)
            return "_e()";
        var n = t.shift();
        return n.exp ? "(" + n.exp + ")?" + e(n.block) + ":" + ar(t) : "" + e(n.block)
    }
    function or(t) {
        var e = t.for
          , n = t.alias
          , i = t.iterator1 ? "," + t.iterator1 : ""
          , r = t.iterator2 ? "," + t.iterator2 : "";
        return vr(t) && "slot" !== t.tag && "template" !== t.tag && !t.key && sl("<" + t.tag + ' v-for="' + n + " in " + e + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0),
        t.forProcessed = !0,
        "_l((" + e + "),function(" + n + i + r + "){return " + er(t) + "})"
    }
    function sr(t) {
        var e = "{"
          , n = lr(t);
        n && (e += n + ","),
        t.key && (e += "key:" + t.key + ","),
        t.ref && (e += "ref:" + t.ref + ","),
        t.refInFor && (e += "refInFor:true,"),
        t.pre && (e += "pre:true,"),
        t.component && (e += 'tag:"' + t.tag + '",');
        for (var i = 0; i < cl.length; i++)
            e += cl[i](t);
        if (t.attrs && (e += "attrs:{" + _r(t.attrs) + "},"),
        t.props && (e += "domProps:{" + _r(t.props) + "},"),
        t.events && (e += Ji(t.events, !1, sl) + ","),
        t.nativeEvents && (e += Ji(t.nativeEvents, !0, sl) + ","),
        t.slotTarget && (e += "slot:" + t.slotTarget + ","),
        t.scopedSlots && (e += ur(t.scopedSlots) + ","),
        t.model && (e += "model:{value:" + t.model.value + ",callback:" + t.model.callback + ",expression:" + t.model.expression + "},"),
        t.inlineTemplate) {
            var r = cr(t);
            r && (e += r + ",")
        }
        return e = e.replace(/,$/, "") + "}",
        t.wrapData && (e = t.wrapData(e)),
        e
    }
    function lr(t) {
        var e = t.directives;
        if (e) {
            var n, i, r, a, o = "directives:[", s = !1;
            for (n = 0,
            i = e.length; n < i; n++) {
                r = e[n],
                a = !0;
                var l = ul[r.name] || ql[r.name];
                l && (a = !!l(t, r, sl)),
                a && (s = !0,
                o += '{name:"' + r.name + '",rawName:"' + r.rawName + '"' + (r.value ? ",value:(" + r.value + "),expression:" + JSON.stringify(r.value) : "") + (r.arg ? ',arg:"' + r.arg + '"' : "") + (r.modifiers ? ",modifiers:" + JSON.stringify(r.modifiers) : "") + "},")
            }
            return s ? o.slice(0, -1) + "]" : void 0
        }
    }
    function cr(t) {
        var e = t.children[0];
        if ((t.children.length > 1 || 1 !== e.type) && sl("Inline-template components must have exactly one child element."),
        1 === e.type) {
            var n = tr(e, hl);
            return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function(t) {
                return "function(){" + t + "}"
            }).join(",") + "]}"
        }
    }
    function ur(t) {
        return "scopedSlots:_u([" + Object.keys(t).map(function(e) {
            return dr(e, t[e])
        }).join(",") + "])"
    }
    function dr(t, e) {
        return "[" + t + ",function(" + String(e.attrsMap.scope) + "){return " + ("template" === e.tag ? pr(e) || "void 0" : er(e)) + "}]"
    }
    function pr(t, e) {
        var n = t.children;
        if (n.length) {
            var i = n[0];
            if (1 === n.length && i.for && "template" !== i.tag && "slot" !== i.tag)
                return er(i);
            var r = e ? fr(n) : 0;
            return "[" + n.map(mr).join(",") + "]" + (r ? "," + r : "")
        }
    }
    function fr(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
            var i = t[n];
            if (1 === i.type) {
                if (hr(i) || i.ifConditions && i.ifConditions.some(function(t) {
                    return hr(t.block)
                })) {
                    e = 2;
                    break
                }
                (vr(i) || i.ifConditions && i.ifConditions.some(function(t) {
                    return vr(t.block)
                })) && (e = 1)
            }
        }
        return e
    }
    function hr(t) {
        return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
    }
    function vr(t) {
        return !dl(t.tag)
    }
    function mr(t) {
        return 1 === t.type ? er(t) : gr(t)
    }
    function gr(t) {
        return "_v(" + (2 === t.type ? t.expression : xr(JSON.stringify(t.text))) + ")"
    }
    function yr(t) {
        var e = t.slotName || '"default"'
          , n = pr(t)
          , i = "_t(" + e + (n ? "," + n : "")
          , r = t.attrs && "{" + t.attrs.map(function(t) {
            return Br(t.name) + ":" + t.value
        }).join(",") + "}"
          , a = t.attrsMap["v-bind"];
        return !r && !a || n || (i += ",null"),
        r && (i += "," + r),
        a && (i += (r ? "" : ",null") + "," + a),
        i + ")"
    }
    function br(t, e) {
        var n = e.inlineTemplate ? null : pr(e, !0);
        return "_c(" + t + "," + sr(e) + (n ? "," + n : "") + ")"
    }
    function _r(t) {
        for (var e = "", n = 0; n < t.length; n++) {
            var i = t[n];
            e += '"' + i.name + '":' + xr(i.value) + ","
        }
        return e.slice(0, -1)
    }
    function xr(t) {
        return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
    }
    function kr(t) {
        var e = [];
        return t && wr(t, e),
        e
    }
    function wr(t, e) {
        if (1 === t.type) {
            for (var n in t.attrsMap)
                if (Cl.test(n)) {
                    var i = t.attrsMap[n];
                    i && ("v-for" === n ? $r(t, 'v-for="' + i + '"', e) : wl.test(n) ? Cr(i, n + '="' + i + '"', e) : Tr(i, n + '="' + i + '"', e))
                }
            if (t.children)
                for (var r = 0; r < t.children.length; r++)
                    wr(t.children[r], e)
        } else
            2 === t.type && Tr(t.expression, t.text, e)
    }
    function Cr(t, e, n) {
        var i = t.replace(zl, "")
          , r = i.match(Bl);
        r && "$" !== i.charAt(r.index - 1) && n.push('avoid using JavaScript unary operator as property name: "' + r[0] + '" in expression ' + e.trim()),
        Tr(t, e, n)
    }
    function $r(t, e, n) {
        Tr(t.for || "", e, n),
        Sr(t.alias, "v-for alias", e, n),
        Sr(t.iterator1, "v-for iterator", e, n),
        Sr(t.iterator2, "v-for iterator", e, n)
    }
    function Sr(t, e, n, i) {
        "string" != typeof t || Rl.test(t) || i.push("invalid " + e + ' "' + t + '" in expression: ' + n.trim())
    }
    function Tr(t, e, n) {
        try {
            new Function("return " + t)
        } catch (r) {
            var i = t.replace(zl, "").match(Hl);
            i ? n.push('avoid using JavaScript keyword as property name: "' + i[0] + '" in expression ' + e.trim()) : n.push("invalid expression: " + e.trim())
        }
    }
    function Er(t, e) {
        var n = xi(t.trim(), e);
        Ri(n, e);
        var i = tr(n, e);
        return {
            ast: n,
            render: i.render,
            staticRenderFns: i.staticRenderFns
        }
    }
    function Ar(t, e) {
        try {
            return new Function(t)
        } catch (n) {
            return e.push({
                err: n,
                code: t
            }),
            g
        }
    }
    function jr(t, e) {
        var n = e.warn || sn
          , i = hn(t, "class");
        if (i) {
            _i(i, e.delimiters) && n('class="' + i + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.')
        }
        i && (t.staticClass = JSON.stringify(i));
        var r = fn(t, "class", !1);
        r && (t.classBinding = r)
    }
    function Nr(t) {
        var e = "";
        return t.staticClass && (e += "staticClass:" + t.staticClass + ","),
        t.classBinding && (e += "class:" + t.classBinding + ","),
        e
    }
    function Or(t, e) {
        var n = e.warn || sn
          , i = hn(t, "style");
        if (i) {
            _i(i, e.delimiters) && n('style="' + i + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'),
            t.staticStyle = JSON.stringify(rs(i))
        }
        var r = fn(t, "style", !1);
        r && (t.styleBinding = r)
    }
    function Dr(t) {
        var e = "";
        return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","),
        t.styleBinding && (e += "style:(" + t.styleBinding + "),"),
        e
    }
    function Lr(t, e) {
        e.value && cn(t, "textContent", "_s(" + e.value + ")")
    }
    function Ir(t, e) {
        e.value && cn(t, "innerHTML", "_s(" + e.value + ")")
    }
    function Mr(t) {
        if (t.outerHTML)
            return t.outerHTML;
        var e = document.createElement("div");
        return e.appendChild(t.cloneNode(!0)),
        e.innerHTML
    }
    var Pr = Object.prototype.toString
      , Fr = c("slot,component", !0)
      , qr = Object.prototype.hasOwnProperty
      , Hr = /-(\w)/g
      , Br = p(function(t) {
        return t.replace(Hr, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    })
      , Rr = p(function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    })
      , zr = /([^-])([A-Z])/g
      , Ur = p(function(t) {
        return t.replace(zr, "$1-$2").replace(zr, "$1-$2").toLowerCase()
    })
      , Vr = function() {
        return !1
    }
      , Wr = function(t) {
        return t
    }
      , Xr = "data-server-rendered"
      , Yr = ["component", "directive", "filter"]
      , Jr = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"]
      , Kr = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !0,
        devtools: !0,
        performance: !1,
        errorHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: Vr,
        isReservedAttr: Vr,
        isUnknownElement: Vr,
        getTagNamespace: g,
        parsePlatformTagName: Wr,
        mustUseProp: Vr,
        _lifecycleHooks: Jr
    }
      , Gr = Object.freeze({})
      , Qr = /[^\w.$]/
      , Zr = g
      , ta = g
      , ea = null
      , na = "undefined" != typeof console
      , ia = /(?:^|[-_])(\w)/g
      , ra = function(t) {
        return t.replace(ia, function(t) {
            return t.toUpperCase()
        }).replace(/[-_]/g, "")
    };
    Zr = function(t, e) {
        na && !Kr.silent && console.error("[Vue warn]: " + t + (e ? oa(e) : ""))
    }
    ,
    ta = function(t, e) {
        na && !Kr.silent && console.warn("[Vue tip]: " + t + (e ? oa(e) : ""))
    }
    ,
    ea = function(t, e) {
        if (t.$root === t)
            return "<Root>";
        var n = "string" == typeof t ? t : "function" == typeof t && t.options ? t.options.name : t._isVue ? t.$options.name || t.$options._componentTag : t.name
          , i = t._isVue && t.$options.__file;
        if (!n && i) {
            var r = i.match(/([^\/\\]+)\.vue$/);
            n = r && r[1]
        }
        return (n ? "<" + ra(n) + ">" : "<Anonymous>") + (i && !1 !== e ? " at " + i : "")
    }
    ;
    var aa = function(t, e) {
        for (var n = ""; e; )
            e % 2 == 1 && (n += t),
            e > 1 && (t += t),
            e >>= 1;
        return n
    }
      , oa = function(t) {
        if (t._isVue && t.$parent) {
            for (var e = [], n = 0; t; ) {
                if (e.length > 0) {
                    var i = e[e.length - 1];
                    if (i.constructor === t.constructor) {
                        n++,
                        t = t.$parent;
                        continue
                    }
                    n > 0 && (e[e.length - 1] = [i, n],
                    n = 0)
                }
                e.push(t),
                t = t.$parent
            }
            return "\n\nfound in\n\n" + e.map(function(t, e) {
                return "" + (0 === e ? "---\x3e " : aa(" ", 5 + 2 * e)) + (Array.isArray(t) ? ea(t[0]) + "... (" + t[1] + " recursive calls)" : ea(t))
            }).join("\n")
        }
        return "\n\n(found in " + ea(t) + ")"
    }
      , sa = "__proto__"in {}
      , la = "undefined" != typeof window
      , ca = la && window.navigator.userAgent.toLowerCase()
      , ua = ca && /msie|trident/.test(ca)
      , da = ca && ca.indexOf("msie 9.0") > 0
      , pa = ca && ca.indexOf("edge/") > 0
      , fa = ca && ca.indexOf("android") > 0
      , ha = ca && /iphone|ipad|ipod|ios/.test(ca)
      , va = ca && /chrome\/\d+/.test(ca) && !pa
      , ma = !1;
    if (la)
        try {
            var ga = {};
            Object.defineProperty(ga, "passive", {
                get: function() {
                    ma = !0
                }
            }),
            window.addEventListener("test-passive", null, ga)
        } catch (t) {}
    var ya, ba, _a = function() {
        return void 0 === ya && (ya = !la && "undefined" != typeof global && "server" === global.process.env.VUE_ENV),
        ya
    }, xa = la && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, ka = "undefined" != typeof Symbol && $(Symbol) && "undefined" != typeof Reflect && $(Reflect.ownKeys), wa = function() {
        function t() {
            i = !1;
            var t = n.slice(0);
            n.length = 0;
            for (var e = 0; e < t.length; e++)
                t[e]()
        }
        var e, n = [], i = !1;
        if ("undefined" != typeof Promise && $(Promise)) {
            var r = Promise.resolve()
              , a = function(t) {
                console.error(t)
            };
            e = function() {
                r.then(t).catch(a),
                ha && setTimeout(g)
            }
        } else if ("undefined" == typeof MutationObserver || !$(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
            e = function() {
                setTimeout(t, 0)
            }
            ;
        else {
            var o = 1
              , s = new MutationObserver(t)
              , l = document.createTextNode(String(o));
            s.observe(l, {
                characterData: !0
            }),
            e = function() {
                o = (o + 1) % 2,
                l.data = String(o)
            }
        }
        return function(t, r) {
            var a;
            if (n.push(function() {
                if (t)
                    try {
                        t.call(r)
                    } catch (t) {
                        C(t, r, "nextTick")
                    }
                else
                    a && a(r)
            }),
            i || (i = !0,
            e()),
            !t && "undefined" != typeof Promise)
                return new Promise(function(t, e) {
                    a = t
                }
                )
        }
    }();
    ba = "undefined" != typeof Set && $(Set) ? Set : function() {
        function t() {
            this.set = Object.create(null)
        }
        return t.prototype.has = function(t) {
            return !0 === this.set[t]
        }
        ,
        t.prototype.add = function(t) {
            this.set[t] = !0
        }
        ,
        t.prototype.clear = function() {
            this.set = Object.create(null)
        }
        ,
        t
    }();
    var Ca = 0
      , $a = function() {
        this.id = Ca++,
        this.subs = []
    };
    $a.prototype.addSub = function(t) {
        this.subs.push(t)
    }
    ,
    $a.prototype.removeSub = function(t) {
        u(this.subs, t)
    }
    ,
    $a.prototype.depend = function() {
        $a.target && $a.target.addDep(this)
    }
    ,
    $a.prototype.notify = function() {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)
            t[e].update()
    }
    ,
    $a.target = null;
    var Sa = []
      , Ta = Array.prototype
      , Ea = Object.create(Ta);
    ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(t) {
        var e = Ta[t];
        k(Ea, t, function() {
            for (var n = arguments, i = arguments.length, r = new Array(i); i--; )
                r[i] = n[i];
            var a, o = e.apply(this, r), s = this.__ob__;
            switch (t) {
            case "push":
            case "unshift":
                a = r;
                break;
            case "splice":
                a = r.slice(2)
            }
            return a && s.observeArray(a),
            s.dep.notify(),
            o
        })
    });
    var Aa = Object.getOwnPropertyNames(Ea)
      , ja = {
        shouldConvert: !0,
        isSettingProps: !1
    }
      , Na = function(t) {
        if (this.value = t,
        this.dep = new $a,
        this.vmCount = 0,
        k(t, "__ob__", this),
        Array.isArray(t)) {
            (sa ? E : A)(t, Ea, Aa),
            this.observeArray(t)
        } else
            this.walk(t)
    };
    Na.prototype.walk = function(t) {
        for (var e = Object.keys(t), n = 0; n < e.length; n++)
            N(t, e[n], t[e[n]])
    }
    ,
    Na.prototype.observeArray = function(t) {
        for (var e = 0, n = t.length; e < n; e++)
            j(t[e])
    }
    ;
    var Oa = Kr.optionMergeStrategies;
    Oa.el = Oa.propsData = function(t, e, n, i) {
        return n || Zr('option "' + i + '" can only be used during instance creation with the `new` keyword.'),
        Ia(t, e)
    }
    ,
    Oa.data = function(t, e, n) {
        return n ? t || e ? function() {
            var i = "function" == typeof e ? e.call(n) : e
              , r = "function" == typeof t ? t.call(n) : void 0;
            return i ? I(i, r) : r
        }
        : void 0 : e ? "function" != typeof e ? (Zr('The "data" option should be a function that returns a per-instance value in component definitions.', n),
        t) : t ? function() {
            return I(e.call(this), t.call(this))
        }
        : e : t
    }
    ,
    Jr.forEach(function(t) {
        Oa[t] = M
    }),
    Yr.forEach(function(t) {
        Oa[t + "s"] = P
    }),
    Oa.watch = function(t, e) {
        if (!e)
            return Object.create(t || null);
        if (!t)
            return e;
        var n = {};
        v(n, t);
        for (var i in e) {
            var r = n[i]
              , a = e[i];
            r && !Array.isArray(r) && (r = [r]),
            n[i] = r ? r.concat(a) : [a]
        }
        return n
    }
    ,
    Oa.props = Oa.methods = Oa.computed = function(t, e) {
        if (!e)
            return Object.create(t || null);
        if (!t)
            return e;
        var n = Object.create(null);
        return v(n, t),
        v(n, e),
        n
    }
    ;
    var Da, La, Ia = function(t, e) {
        return void 0 === e ? t : e
    }, Ma = /^(String|Number|Boolean|Function|Symbol)$/, Pa = la && window.performance;
    Pa && Pa.mark && Pa.measure && Pa.clearMarks && Pa.clearMeasures && (Da = function(t) {
        return Pa.mark(t)
    }
    ,
    La = function(t, e, n) {
        Pa.measure(t, e, n),
        Pa.clearMarks(e),
        Pa.clearMarks(n),
        Pa.clearMeasures(t)
    }
    );
    var Fa, qa = c("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"), Ha = function(t, e) {
        Zr('Property or method "' + e + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', t)
    }, Ba = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
    if (Ba) {
        var Ra = c("stop,prevent,self,ctrl,shift,alt,meta");
        Kr.keyCodes = new Proxy(Kr.keyCodes,{
            set: function(t, e, n) {
                return Ra(e) ? (Zr("Avoid overwriting built-in modifier in config.keyCodes: ." + e),
                !1) : (t[e] = n,
                !0)
            }
        })
    }
    var za = {
        has: function(t, e) {
            var n = e in t
              , i = qa(e) || "_" === e.charAt(0);
            return n || i || Ha(t, e),
            n || !i
        }
    }
      , Ua = {
        get: function(t, e) {
            return "string" != typeof e || e in t || Ha(t, e),
            t[e]
        }
    };
    Fa = function(t) {
        if (Ba) {
            var e = t.$options
              , n = e.render && e.render._withStripped ? Ua : za;
            t._renderProxy = new Proxy(t,n)
        } else
            t._renderProxy = t
    }
    ;
    var Va = function(t, e, n, i, r, a, o) {
        this.tag = t,
        this.data = e,
        this.children = n,
        this.text = i,
        this.elm = r,
        this.ns = void 0,
        this.context = a,
        this.functionalContext = void 0,
        this.key = e && e.key,
        this.componentOptions = o,
        this.componentInstance = void 0,
        this.parent = void 0,
        this.raw = !1,
        this.isStatic = !1,
        this.isRootInsert = !0,
        this.isComment = !1,
        this.isCloned = !1,
        this.isOnce = !1
    }
      , Wa = {
        child: {}
    };
    Wa.child.get = function() {
        return this.componentInstance
    }
    ,
    Object.defineProperties(Va.prototype, Wa);
    var Xa, Ya = function() {
        var t = new Va;
        return t.text = "",
        t.isComment = !0,
        t
    }, Ja = p(function(t) {
        var e = "&" === t.charAt(0);
        t = e ? t.slice(1) : t;
        var n = "~" === t.charAt(0);
        t = n ? t.slice(1) : t;
        var i = "!" === t.charAt(0);
        return t = i ? t.slice(1) : t,
        {
            name: t,
            once: n,
            capture: i,
            passive: e
        }
    }), Ka = null, Ga = 100, Qa = [], Za = [], to = {}, eo = {}, no = !1, io = !1, ro = 0, ao = 0, oo = function(t, e, n, i) {
        this.vm = t,
        t._watchers.push(this),
        i ? (this.deep = !!i.deep,
        this.user = !!i.user,
        this.lazy = !!i.lazy,
        this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1,
        this.cb = n,
        this.id = ++ao,
        this.active = !0,
        this.dirty = this.lazy,
        this.deps = [],
        this.newDeps = [],
        this.depIds = new ba,
        this.newDepIds = new ba,
        this.expression = e.toString(),
        "function" == typeof e ? this.getter = e : (this.getter = w(e),
        this.getter || (this.getter = function() {}
        ,
        Zr('Failed watching path: "' + e + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', t))),
        this.value = this.lazy ? void 0 : this.get()
    };
    oo.prototype.get = function() {
        S(this);
        var t, e = this.vm;
        if (this.user)
            try {
                t = this.getter.call(e, e)
            } catch (t) {
                C(t, e, 'getter for watcher "' + this.expression + '"')
            }
        else
            t = this.getter.call(e, e);
        return this.deep && At(t),
        T(),
        this.cleanupDeps(),
        t
    }
    ,
    oo.prototype.addDep = function(t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e),
        this.newDeps.push(t),
        this.depIds.has(e) || t.addSub(this))
    }
    ,
    oo.prototype.cleanupDeps = function() {
        for (var t = this, e = this.deps.length; e--; ) {
            var n = t.deps[e];
            t.newDepIds.has(n.id) || n.removeSub(t)
        }
        var i = this.depIds;
        this.depIds = this.newDepIds,
        this.newDepIds = i,
        this.newDepIds.clear(),
        i = this.deps,
        this.deps = this.newDeps,
        this.newDeps = i,
        this.newDeps.length = 0
    }
    ,
    oo.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : Et(this)
    }
    ,
    oo.prototype.run = function() {
        if (this.active) {
            var t = this.get();
            if (t !== this.value || r(t) || this.deep) {
                var e = this.value;
                if (this.value = t,
                this.user)
                    try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        C(t, this.vm, 'callback for watcher "' + this.expression + '"')
                    }
                else
                    this.cb.call(this.vm, t, e)
            }
        }
    }
    ,
    oo.prototype.evaluate = function() {
        this.value = this.get(),
        this.dirty = !1
    }
    ,
    oo.prototype.depend = function() {
        for (var t = this, e = this.deps.length; e--; )
            t.deps[e].depend()
    }
    ,
    oo.prototype.teardown = function() {
        var t = this;
        if (this.active) {
            this.vm._isBeingDestroyed || u(this.vm._watchers, this);
            for (var e = this.deps.length; e--; )
                t.deps[e].removeSub(t);
            this.active = !1
        }
    }
    ;
    var so = new ba
      , lo = {
        enumerable: !0,
        configurable: !0,
        get: g,
        set: g
    }
      , co = {
        key: 1,
        ref: 1,
        slot: 1
    }
      , uo = {
        lazy: !0
    }
      , po = {
        init: function(t, e, n, i) {
            if (!t.componentInstance || t.componentInstance._isDestroyed) {
                (t.componentInstance = Yt(t, Ka, n, i)).$mount(e ? t.elm : void 0, e)
            } else if (t.data.keepAlive) {
                var r = t;
                po.prepatch(r, r)
            }
        },
        prepatch: function(t, e) {
            var n = e.componentOptions;
            yt(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children)
        },
        insert: function(t) {
            var e = t.context
              , n = t.componentInstance;
            n._isMounted || (n._isMounted = !0,
            kt(n, "mounted")),
            t.data.keepAlive && (e._isMounted ? St(n) : _t(n, !0))
        },
        destroy: function(t) {
            var e = t.componentInstance;
            e._isDestroyed || (t.data.keepAlive ? xt(e, !0) : e.$destroy())
        }
    }
      , fo = Object.keys(po)
      , ho = 1
      , vo = 2
      , mo = 0;
    !function(t) {
        t.prototype._init = function(t) {
            var e = this;
            e._uid = mo++;
            var n, i;
            Kr.performance && Da && (n = "vue-perf-init:" + e._uid,
            i = "vue-perf-end:" + e._uid,
            Da(n)),
            e._isVue = !0,
            t && t._isComponent ? de(e, t) : e.$options = B(pe(e.constructor), t || {}, e),
            Fa(e),
            e._self = e,
            mt(e),
            ct(e),
            ue(e),
            kt(e, "beforeCreate"),
            zt(e),
            Ot(e),
            Rt(e),
            kt(e, "created"),
            Kr.performance && Da && (e._name = ea(e, !1),
            Da(i),
            La(e._name + " init", n, i)),
            e.$options.el && e.$mount(e.$options.el)
        }
    }(ve),
    function(t) {
        var e = {};
        e.get = function() {
            return this._data
        }
        ;
        var n = {};
        n.get = function() {
            return this._props
        }
        ,
        e.set = function(t) {
            Zr("Avoid replacing instance root $data. Use nested data properties instead.", this)
        }
        ,
        n.set = function() {
            Zr("$props is readonly.", this)
        }
        ,
        Object.defineProperty(t.prototype, "$data", e),
        Object.defineProperty(t.prototype, "$props", n),
        t.prototype.$set = O,
        t.prototype.$delete = D,
        t.prototype.$watch = function(t, e, n) {
            var i = this;
            n = n || {},
            n.user = !0;
            var r = new oo(i,t,e,n);
            return n.immediate && e.call(i, r.value),
            function() {
                r.teardown()
            }
        }
    }(ve),
    function(t) {
        var e = /^hook:/;
        t.prototype.$on = function(t, n) {
            var i = this
              , r = this;
            if (Array.isArray(t))
                for (var a = 0, o = t.length; a < o; a++)
                    i.$on(t[a], n);
            else
                (r._events[t] || (r._events[t] = [])).push(n),
                e.test(t) && (r._hasHookEvent = !0);
            return r
        }
        ,
        t.prototype.$once = function(t, e) {
            function n() {
                i.$off(t, n),
                e.apply(i, arguments)
            }
            var i = this;
            return n.fn = e,
            i.$on(t, n),
            i
        }
        ,
        t.prototype.$off = function(t, e) {
            var n = this
              , i = this;
            if (!arguments.length)
                return i._events = Object.create(null),
                i;
            if (Array.isArray(t)) {
                for (var r = 0, a = t.length; r < a; r++)
                    n.$off(t[r], e);
                return i
            }
            var o = i._events[t];
            if (!o)
                return i;
            if (1 === arguments.length)
                return i._events[t] = null,
                i;
            for (var s, l = o.length; l--; )
                if ((s = o[l]) === e || s.fn === e) {
                    o.splice(l, 1);
                    break
                }
            return i
        }
        ,
        t.prototype.$emit = function(t) {
            var e = this
              , n = t.toLowerCase();
            n !== t && e._events[n] && ta('Event "' + n + '" is emitted in component ' + ea(e) + ' but the handler is registered for "' + t + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + Ur(t) + '" instead of "' + t + '".');
            var i = e._events[t];
            if (i) {
                i = i.length > 1 ? h(i) : i;
                for (var r = h(arguments, 1), a = 0, o = i.length; a < o; a++)
                    i[a].apply(e, r)
            }
            return e
        }
    }(ve),
    function(t) {
        t.prototype._update = function(t, e) {
            var n = this;
            n._isMounted && kt(n, "beforeUpdate");
            var i = n.$el
              , r = n._vnode
              , a = Ka;
            Ka = n,
            n._vnode = t,
            n.$el = r ? n.__patch__(r, t) : n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm),
            Ka = a,
            i && (i.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
        }
        ,
        t.prototype.$forceUpdate = function() {
            var t = this;
            t._watcher && t._watcher.update()
        }
        ,
        t.prototype.$destroy = function() {
            var t = this;
            if (!t._isBeingDestroyed) {
                kt(t, "beforeDestroy"),
                t._isBeingDestroyed = !0;
                var e = t.$parent;
                !e || e._isBeingDestroyed || t.$options.abstract || u(e.$children, t),
                t._watcher && t._watcher.teardown();
                for (var n = t._watchers.length; n--; )
                    t._watchers[n].teardown();
                t._data.__ob__ && t._data.__ob__.vmCount--,
                t._isDestroyed = !0,
                t.__patch__(t._vnode, null),
                kt(t, "destroyed"),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                t.$options._parentElm = t.$options._refElm = null
            }
        }
    }(ve),
    function(t) {
        t.prototype.$nextTick = function(t) {
            return wa(t, this)
        }
        ,
        t.prototype._render = function() {
            var t = this
              , e = t.$options
              , n = e.render
              , i = e.staticRenderFns
              , r = e._parentVnode;
            if (t._isMounted)
                for (var a in t.$slots)
                    t.$slots[a] = G(t.$slots[a]);
            t.$scopedSlots = r && r.data.scopedSlots || Gr,
            i && !t._staticTrees && (t._staticTrees = []),
            t.$vnode = r;
            var o;
            try {
                o = n.call(t._renderProxy, t.$createElement)
            } catch (e) {
                C(e, t, "render function"),
                o = t.$options.renderError ? t.$options.renderError.call(t._renderProxy, t.$createElement, e) : t._vnode
            }
            return o instanceof Va || (Array.isArray(o) && Zr("Multiple root nodes returned from render function. Render function should return a single root node.", t),
            o = Ya()),
            o.parent = r,
            o
        }
        ,
        t.prototype._o = se,
        t.prototype._n = l,
        t.prototype._s = s,
        t.prototype._l = ee,
        t.prototype._t = ne,
        t.prototype._q = y,
        t.prototype._i = b,
        t.prototype._m = oe,
        t.prototype._f = ie,
        t.prototype._k = re,
        t.prototype._b = ae,
        t.prototype._v = J,
        t.prototype._e = Ya,
        t.prototype._u = vt
    }(ve);
    var go = [String, RegExp]
      , yo = {
        name: "keep-alive",
        abstract: !0,
        props: {
            include: go,
            exclude: go
        },
        created: function() {
            this.cache = Object.create(null)
        },
        destroyed: function() {
            var t = this;
            for (var e in t.cache)
                $e(t.cache[e])
        },
        watch: {
            include: function(t) {
                Ce(this.cache, this._vnode, function(e) {
                    return we(t, e)
                })
            },
            exclude: function(t) {
                Ce(this.cache, this._vnode, function(e) {
                    return !we(t, e)
                })
            }
        },
        render: function() {
            var t = lt(this.$slots.default)
              , e = t && t.componentOptions;
            if (e) {
                var n = ke(e);
                if (n && (this.include && !we(this.include, n) || this.exclude && we(this.exclude, n)))
                    return t;
                var i = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                this.cache[i] ? t.componentInstance = this.cache[i].componentInstance : this.cache[i] = t,
                t.data.keepAlive = !0
            }
            return t
        }
    }
      , bo = {
        KeepAlive: yo
    };
    !function(t) {
        var e = {};
        e.get = function() {
            return Kr
        }
        ,
        e.set = function() {
            Zr("Do not replace the Vue.config object, set individual fields instead.")
        }
        ,
        Object.defineProperty(t, "config", e),
        t.util = {
            warn: Zr,
            extend: v,
            mergeOptions: B,
            defineReactive: N
        },
        t.set = O,
        t.delete = D,
        t.nextTick = wa,
        t.options = Object.create(null),
        Yr.forEach(function(e) {
            t.options[e + "s"] = Object.create(null)
        }),
        t.options._base = t,
        v(t.options.components, bo),
        me(t),
        ge(t),
        ye(t),
        xe(t)
    }(ve),
    Object.defineProperty(ve.prototype, "$isServer", {
        get: _a
    }),
    Object.defineProperty(ve.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode.ssrContext
        }
    }),
    ve.version = "2.3.2";
    var _o, xo, ko, wo, Co, $o, So, To, Eo, Ao = c("style,class"), jo = c("input,textarea,option,select"), No = function(t, e, n) {
        return "value" === n && jo(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
    }, Oo = c("contenteditable,draggable,spellcheck"), Do = c("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), Lo = "http://www.w3.org/1999/xlink", Io = function(t) {
        return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
    }, Mo = function(t) {
        return Io(t) ? t.slice(6, t.length) : ""
    }, Po = function(t) {
        return null == t || !1 === t
    }, Fo = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, qo = c("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"), Ho = c("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Bo = function(t) {
        return "pre" === t
    }, Ro = function(t) {
        return qo(t) || Ho(t)
    }, zo = Object.create(null), Uo = Object.freeze({
        createElement: Le,
        createElementNS: Ie,
        createTextNode: Me,
        createComment: Pe,
        insertBefore: Fe,
        removeChild: qe,
        appendChild: He,
        parentNode: Be,
        nextSibling: Re,
        tagName: ze,
        setTextContent: Ue,
        setAttribute: Ve
    }), Vo = {
        create: function(t, e) {
            We(e)
        },
        update: function(t, e) {
            t.data.ref !== e.data.ref && (We(t, !0),
            We(e))
        },
        destroy: function(t) {
            We(t, !0)
        }
    }, Wo = new Va("",{},[]), Xo = ["create", "activate", "update", "remove", "destroy"], Yo = {
        create: Ke,
        update: Ke,
        destroy: function(t) {
            Ke(t, Wo)
        }
    }, Jo = Object.create(null), Ko = [Vo, Yo], Go = {
        create: en,
        update: en
    }, Qo = {
        create: rn,
        update: rn
    }, Zo = /[\w).+\-_$\]]/, ts = "__r", es = "__c", ns = {
        create: Nn,
        update: Nn
    }, is = {
        create: On,
        update: On
    }, rs = p(function(t) {
        var e = {}
          , n = /;(?![^(]*\))/g
          , i = /:(.+)/;
        return t.split(n).forEach(function(t) {
            if (t) {
                var n = t.split(i);
                n.length > 1 && (e[n[0].trim()] = n[1].trim())
            }
        }),
        e
    }), as = /^--/, os = /\s*!important$/, ss = function(t, e, n) {
        if (as.test(e))
            t.style.setProperty(e, n);
        else if (os.test(n))
            t.style.setProperty(e, n.replace(os, ""), "important");
        else {
            var i = cs(e);
            if (Array.isArray(n))
                for (var r = 0, a = n.length; r < a; r++)
                    t.style[i] = n[r];
            else
                t.style[i] = n
        }
    }, ls = ["Webkit", "Moz", "ms"], cs = p(function(t) {
        if (Eo = Eo || document.createElement("div"),
        "filter" !== (t = Br(t)) && t in Eo.style)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < ls.length; n++) {
            var i = ls[n] + e;
            if (i in Eo.style)
                return i
        }
    }), us = {
        create: qn,
        update: qn
    }, ds = p(function(t) {
        return {
            enterClass: t + "-enter",
            enterToClass: t + "-enter-to",
            enterActiveClass: t + "-enter-active",
            leaveClass: t + "-leave",
            leaveToClass: t + "-leave-to",
            leaveActiveClass: t + "-leave-active"
        }
    }), ps = la && !da, fs = "transition", hs = "animation", vs = "transition", ms = "transitionend", gs = "animation", ys = "animationend";
    ps && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (vs = "WebkitTransition",
    ms = "webkitTransitionEnd"),
    void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (gs = "WebkitAnimation",
    ys = "webkitAnimationEnd"));
    var bs = la && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout
      , _s = /\b(transform|all)(,|$)/
      , xs = la ? {
        create: ei,
        activate: ei,
        remove: function(t, e) {
            !0 !== t.data.show ? Gn(t, e) : e()
        }
    } : {}
      , ks = [Go, Qo, ns, is, us, xs]
      , ws = ks.concat(Ko)
      , Cs = function(r) {
        function a(t) {
            return new Va(N.tagName(t).toLowerCase(),{},[],void 0,t)
        }
        function o(t, e) {
            function n() {
                0 == --n.listeners && s(t)
            }
            return n.listeners = e,
            n
        }
        function s(t) {
            var n = N.parentNode(t);
            e(n) && N.removeChild(n, t)
        }
        function l(t, i, r, a, o) {
            if (t.isRootInsert = !o,
            !u(t, i, r, a)) {
                var s = t.data
                  , l = t.children
                  , c = t.tag;
                e(c) ? (s && s.pre && O++,
                O || t.ns || Kr.ignoredElements.length && Kr.ignoredElements.indexOf(c) > -1 || !Kr.isUnknownElement(c) || Zr("Unknown custom element: <" + c + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', t.context),
                t.elm = t.ns ? N.createElementNS(t.ns, c) : N.createElement(c, t),
                g(t),
                h(t, l, i),
                e(s) && m(t, i),
                f(r, t.elm, a),
                s && s.pre && O--) : n(t.isComment) ? (t.elm = N.createComment(t.text),
                f(r, t.elm, a)) : (t.elm = N.createTextNode(t.text),
                f(r, t.elm, a))
            }
        }
        function u(t, i, r, a) {
            var o = t.data;
            if (e(o)) {
                var s = e(t.componentInstance) && o.keepAlive;
                if (e(o = o.hook) && e(o = o.init) && o(t, !1, r, a),
                e(t.componentInstance))
                    return d(t, i),
                    n(s) && p(t, i, r, a),
                    !0
            }
        }
        function d(t, n) {
            e(t.data.pendingInsert) && n.push.apply(n, t.data.pendingInsert),
            t.elm = t.componentInstance.$el,
            v(t) ? (m(t, n),
            g(t)) : (We(t),
            n.push(t))
        }
        function p(t, n, i, r) {
            for (var a, o = t; o.componentInstance; )
                if (o = o.componentInstance._vnode,
                e(a = o.data) && e(a = a.transition)) {
                    for (a = 0; a < A.activate.length; ++a)
                        A.activate[a](Wo, o);
                    n.push(o);
                    break
                }
            f(i, t.elm, r)
        }
        function f(t, n, i) {
            e(t) && (e(i) ? i.parentNode === t && N.insertBefore(t, n, i) : N.appendChild(t, n))
        }
        function h(t, e, n) {
            if (Array.isArray(e))
                for (var r = 0; r < e.length; ++r)
                    l(e[r], n, t.elm, null, !0);
            else
                i(t.text) && N.appendChild(t.elm, N.createTextNode(t.text))
        }
        function v(t) {
            for (; t.componentInstance; )
                t = t.componentInstance._vnode;
            return e(t.tag)
        }
        function m(t, n) {
            for (var i = 0; i < A.create.length; ++i)
                A.create[i](Wo, t);
            T = t.data.hook,
            e(T) && (e(T.create) && T.create(Wo, t),
            e(T.insert) && n.push(t))
        }
        function g(t) {
            for (var n, i = t; i; )
                e(n = i.context) && e(n = n.$options._scopeId) && N.setAttribute(t.elm, n, ""),
                i = i.parent;
            e(n = Ka) && n !== t.context && e(n = n.$options._scopeId) && N.setAttribute(t.elm, n, "")
        }
        function y(t, e, n, i, r, a) {
            for (; i <= r; ++i)
                l(n[i], a, t, e)
        }
        function b(t) {
            var n, i, r = t.data;
            if (e(r))
                for (e(n = r.hook) && e(n = n.destroy) && n(t),
                n = 0; n < A.destroy.length; ++n)
                    A.destroy[n](t);
            if (e(n = t.children))
                for (i = 0; i < t.children.length; ++i)
                    b(t.children[i])
        }
        function _(t, n, i, r) {
            for (; i <= r; ++i) {
                var a = n[i];
                e(a) && (e(a.tag) ? (x(a),
                b(a)) : s(a.elm))
            }
        }
        function x(t, n) {
            if (e(n) || e(t.data)) {
                var i, r = A.remove.length + 1;
                for (e(n) ? n.listeners += r : n = o(t.elm, r),
                e(i = t.componentInstance) && e(i = i._vnode) && e(i.data) && x(i, n),
                i = 0; i < A.remove.length; ++i)
                    A.remove[i](t, n);
                e(i = t.data.hook) && e(i = i.remove) ? i(t, n) : n()
            } else
                s(t.elm)
        }
        function k(n, i, r, a, o) {
            for (var s, c, u, d, p = 0, f = 0, h = i.length - 1, v = i[0], m = i[h], g = r.length - 1, b = r[0], x = r[g], k = !o; p <= h && f <= g; )
                t(v) ? v = i[++p] : t(m) ? m = i[--h] : Xe(v, b) ? (w(v, b, a),
                v = i[++p],
                b = r[++f]) : Xe(m, x) ? (w(m, x, a),
                m = i[--h],
                x = r[--g]) : Xe(v, x) ? (w(v, x, a),
                k && N.insertBefore(n, v.elm, N.nextSibling(m.elm)),
                v = i[++p],
                x = r[--g]) : Xe(m, b) ? (w(m, b, a),
                k && N.insertBefore(n, m.elm, v.elm),
                m = i[--h],
                b = r[++f]) : (t(s) && (s = Je(i, p, h)),
                c = e(b.key) ? s[b.key] : null,
                t(c) ? (l(b, a, n, v.elm),
                b = r[++f]) : (u = i[c],
                u || Zr("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."),
                Xe(u, b) ? (w(u, b, a),
                i[c] = void 0,
                k && N.insertBefore(n, b.elm, v.elm),
                b = r[++f]) : (l(b, a, n, v.elm),
                b = r[++f])));
            p > h ? (d = t(r[g + 1]) ? null : r[g + 1].elm,
            y(n, d, r, f, g, a)) : f > g && _(n, i, p, h)
        }
        function w(i, r, a, o) {
            if (i !== r) {
                if (n(r.isStatic) && n(i.isStatic) && r.key === i.key && (n(r.isCloned) || n(r.isOnce)))
                    return r.elm = i.elm,
                    void (r.componentInstance = i.componentInstance);
                var s, l = r.data;
                e(l) && e(s = l.hook) && e(s = s.prepatch) && s(i, r);
                var c = r.elm = i.elm
                  , u = i.children
                  , d = r.children;
                if (e(l) && v(r)) {
                    for (s = 0; s < A.update.length; ++s)
                        A.update[s](i, r);
                    e(s = l.hook) && e(s = s.update) && s(i, r)
                }
                t(r.text) ? e(u) && e(d) ? u !== d && k(c, u, d, a, o) : e(d) ? (e(i.text) && N.setTextContent(c, ""),
                y(c, null, d, 0, d.length - 1, a)) : e(u) ? _(c, u, 0, u.length - 1) : e(i.text) && N.setTextContent(c, "") : i.text !== r.text && N.setTextContent(c, r.text),
                e(l) && e(s = l.hook) && e(s = s.postpatch) && s(i, r)
            }
        }
        function C(t, i, r) {
            if (n(r) && e(t.parent))
                t.parent.data.pendingInsert = i;
            else
                for (var a = 0; a < i.length; ++a)
                    i[a].data.hook.insert(i[a])
        }
        function $(t, n, i) {
            if (!S(t, n))
                return !1;
            n.elm = t;
            var r = n.tag
              , a = n.data
              , o = n.children;
            if (e(a) && (e(T = a.hook) && e(T = T.init) && T(n, !0),
            e(T = n.componentInstance)))
                return d(n, i),
                !0;
            if (e(r)) {
                if (e(o))
                    if (t.hasChildNodes()) {
                        for (var s = !0, l = t.firstChild, c = 0; c < o.length; c++) {
                            if (!l || !$(l, o[c], i)) {
                                s = !1;
                                break
                            }
                            l = l.nextSibling
                        }
                        if (!s || l)
                            return "undefined" == typeof console || D || (D = !0,
                            console.warn("Parent: ", t),
                            console.warn("Mismatching childNodes vs. VNodes: ", t.childNodes, o)),
                            !1
                    } else
                        h(n, o, i);
                if (e(a))
                    for (var u in a)
                        if (!L(u)) {
                            m(n, i);
                            break
                        }
            } else
                t.data !== n.text && (t.data = n.text);
            return !0
        }
        function S(t, n) {
            return e(n.tag) ? 0 === n.tag.indexOf("vue-component") || n.tag.toLowerCase() === (t.tagName && t.tagName.toLowerCase()) : t.nodeType === (n.isComment ? 8 : 3)
        }
        var T, E, A = {}, j = r.modules, N = r.nodeOps;
        for (T = 0; T < Xo.length; ++T)
            for (A[Xo[T]] = [],
            E = 0; E < j.length; ++E)
                e(j[E][Xo[T]]) && A[Xo[T]].push(j[E][Xo[T]]);
        var O = 0
          , D = !1
          , L = c("attrs,style,class,staticClass,staticStyle,key");
        return function(i, r, o, s, c, u) {
            if (t(r))
                return void (e(i) && b(i));
            var d = !1
              , p = [];
            if (t(i))
                d = !0,
                l(r, p, c, u);
            else {
                var f = e(i.nodeType);
                if (!f && Xe(i, r))
                    w(i, r, p, s);
                else {
                    if (f) {
                        if (1 === i.nodeType && i.hasAttribute(Xr) && (i.removeAttribute(Xr),
                        o = !0),
                        n(o)) {
                            if ($(i, r, p))
                                return C(r, p, !0),
                                i;
                            Zr("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.")
                        }
                        i = a(i)
                    }
                    var h = i.elm
                      , m = N.parentNode(h);
                    if (l(r, p, h._leaveCb ? null : m, N.nextSibling(h)),
                    e(r.parent)) {
                        for (var g = r.parent; g; )
                            g.elm = r.elm,
                            g = g.parent;
                        if (v(r))
                            for (var y = 0; y < A.create.length; ++y)
                                A.create[y](Wo, r.parent)
                    }
                    e(m) ? _(m, [i], 0, 0) : e(i.tag) && b(i)
                }
            }
            return C(r, p, d),
            r.elm
        }
    }({
        nodeOps: Uo,
        modules: ws
    });
    da && document.addEventListener("selectionchange", function() {
        var t = document.activeElement;
        t && t.vmodel && si(t, "input")
    });
    var $s = {
        inserted: function(t, e, n) {
            if ("select" === n.tag) {
                var i = function() {
                    ni(t, e, n.context)
                };
                i(),
                (ua || pa) && setTimeout(i, 0)
            } else
                "textarea" !== n.tag && "text" !== t.type && "password" !== t.type || (t._vModifiers = e.modifiers,
                e.modifiers.lazy || (t.addEventListener("change", oi),
                fa || (t.addEventListener("compositionstart", ai),
                t.addEventListener("compositionend", oi)),
                da && (t.vmodel = !0)))
        },
        componentUpdated: function(t, e, n) {
            if ("select" === n.tag) {
                ni(t, e, n.context);
                (t.multiple ? e.value.some(function(e) {
                    return ii(e, t.options)
                }) : e.value !== e.oldValue && ii(e.value, t.options)) && si(t, "change")
            }
        }
    }
      , Ss = {
        bind: function(t, e, n) {
            var i = e.value;
            n = li(n);
            var r = n.data && n.data.transition
              , a = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
            i && r && !da ? (n.data.show = !0,
            Kn(n, function() {
                t.style.display = a
            })) : t.style.display = i ? a : "none"
        },
        update: function(t, e, n) {
            var i = e.value;
            i !== e.oldValue && (n = li(n),
            n.data && n.data.transition && !da ? (n.data.show = !0,
            i ? Kn(n, function() {
                t.style.display = t.__vOriginalDisplay
            }) : Gn(n, function() {
                t.style.display = "none"
            })) : t.style.display = i ? t.__vOriginalDisplay : "none")
        },
        unbind: function(t, e, n, i, r) {
            r || (t.style.display = t.__vOriginalDisplay)
        }
    }
      , Ts = {
        model: $s,
        show: Ss
    }
      , Es = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [Number, String, Object]
    }
      , As = {
        name: "transition",
        props: Es,
        abstract: !0,
        render: function(t) {
            var e = this
              , n = this.$slots.default;
            if (n && (n = n.filter(function(t) {
                return t.tag
            }),
            n.length)) {
                n.length > 1 && Zr("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                var r = this.mode;
                r && "in-out" !== r && "out-in" !== r && Zr("invalid <transition> mode: " + r, this.$parent);
                var a = n[0];
                if (pi(this.$vnode))
                    return a;
                var o = ci(a);
                if (!o)
                    return a;
                if (this._leaving)
                    return di(t, a);
                var s = "__transition-" + this._uid + "-";
                o.key = null == o.key ? s + o.tag : i(o.key) ? 0 === String(o.key).indexOf(s) ? o.key : s + o.key : o.key;
                var l = (o.data || (o.data = {})).transition = ui(this)
                  , c = this._vnode
                  , u = ci(c);
                if (o.data.directives && o.data.directives.some(function(t) {
                    return "show" === t.name
                }) && (o.data.show = !0),
                u && u.data && !fi(o, u)) {
                    var d = u && (u.data.transition = v({}, l));
                    if ("out-in" === r)
                        return this._leaving = !0,
                        tt(d, "afterLeave", function() {
                            e._leaving = !1,
                            e.$forceUpdate()
                        }),
                        di(t, a);
                    if ("in-out" === r) {
                        var p, f = function() {
                            p()
                        };
                        tt(l, "afterEnter", f),
                        tt(l, "enterCancelled", f),
                        tt(d, "delayLeave", function(t) {
                            p = t
                        })
                    }
                }
                return a
            }
        }
    }
      , js = v({
        tag: String,
        moveClass: String
    }, Es);
    delete js.mode;
    var Ns = {
        props: js,
        render: function(t) {
            for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], a = this.children = [], o = ui(this), s = 0; s < r.length; s++) {
                var l = r[s];
                if (l.tag)
                    if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
                        a.push(l),
                        n[l.key] = l,
                        (l.data || (l.data = {})).transition = o;
                    else {
                        var c = l.componentOptions
                          , u = c ? c.Ctor.options.name || c.tag || "" : l.tag;
                        Zr("<transition-group> children must be keyed: <" + u + ">")
                    }
            }
            if (i) {
                for (var d = [], p = [], f = 0; f < i.length; f++) {
                    var h = i[f];
                    h.data.transition = o,
                    h.data.pos = h.elm.getBoundingClientRect(),
                    n[h.key] ? d.push(h) : p.push(h)
                }
                this.kept = t(e, null, d),
                this.removed = p
            }
            return t(e, null, a)
        },
        beforeUpdate: function() {
            this.__patch__(this._vnode, this.kept, !1, !0),
            this._vnode = this.kept
        },
        updated: function() {
            var t = this.prevChildren
              , e = this.moveClass || (this.name || "v") + "-move";
            if (t.length && this.hasMove(t[0].elm, e)) {
                t.forEach(hi),
                t.forEach(vi),
                t.forEach(mi);
                var n = document.body;
                n.offsetHeight;
                t.forEach(function(t) {
                    if (t.data.moved) {
                        var n = t.elm
                          , i = n.style;
                        Un(n, e),
                        i.transform = i.WebkitTransform = i.transitionDuration = "",
                        n.addEventListener(ms, n._moveCb = function t(i) {
                            i && !/transform$/.test(i.propertyName) || (n.removeEventListener(ms, t),
                            n._moveCb = null,
                            Vn(n, e))
                        }
                        )
                    }
                })
            }
        },
        methods: {
            hasMove: function(t, e) {
                if (!ps)
                    return !1;
                if (null != this._hasMove)
                    return this._hasMove;
                var n = t.cloneNode();
                t._transitionClasses && t._transitionClasses.forEach(function(t) {
                    Bn(n, t)
                }),
                Hn(n, e),
                n.style.display = "none",
                this.$el.appendChild(n);
                var i = Xn(n);
                return this.$el.removeChild(n),
                this._hasMove = i.hasTransform
            }
        }
    }
      , Os = {
        Transition: As,
        TransitionGroup: Ns
    };
    ve.config.mustUseProp = No,
    ve.config.isReservedTag = Ro,
    ve.config.isReservedAttr = Ao,
    ve.config.getTagNamespace = Ne,
    ve.config.isUnknownElement = Oe,
    v(ve.options.directives, Ts),
    v(ve.options.components, Os),
    ve.prototype.__patch__ = la ? Cs : g,
    ve.prototype.$mount = function(t, e) {
        return t = t && la ? De(t) : void 0,
        gt(this, t, e)
    }
    ,
    setTimeout(function() {
        Kr.devtools && (xa ? xa.emit("init", ve) : va && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")),
        !1 !== Kr.productionTip && la && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html")
    }, 0);
    var Ds, Ls = !!la && function(t, e) {
        var n = document.createElement("div");
        return n.innerHTML = '<div a="' + t + '">',
        n.innerHTML.indexOf(e) > 0
    }("\n", "&#10;"), Is = c("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), Ms = c("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), Ps = c("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), Fs = /([^\s"'<>\/=]+)/, qs = /(?:=)/, Hs = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source], Bs = new RegExp("^\\s*" + Fs.source + "(?:\\s*(" + qs.source + ")\\s*(?:" + Hs.join("|") + "))?"), Rs = "[a-zA-Z_][\\w\\-\\.]*", zs = "((?:" + Rs + "\\:)?" + Rs + ")", Us = new RegExp("^<" + zs), Vs = /^\s*(\/?)>/, Ws = new RegExp("^<\\/" + zs + "[^>]*>"), Xs = /^<!DOCTYPE [^>]+>/i, Ys = /^<!--/, Js = /^<!\[/, Ks = !1;
    "x".replace(/x(.)?/g, function(t, e) {
        Ks = "" === e
    });
    var Gs, Qs, Zs, tl, el, nl, il, rl, al, ol, sl, ll, cl, ul, dl, pl, fl, hl, vl = c("script,style,textarea", !0), ml = {}, gl = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n"
    }, yl = /&(?:lt|gt|quot|amp);/g, bl = /&(?:lt|gt|quot|amp|#10);/g, _l = /\{\{((?:.|\n)+?)\}\}/g, xl = /[-.*+?^${}()|[\]\/\\]/g, kl = p(function(t) {
        var e = t[0].replace(xl, "\\$&")
          , n = t[1].replace(xl, "\\$&");
        return new RegExp(e + "((?:.|\\n)+?)" + n,"g")
    }), wl = /^@|^v-on:/, Cl = /^v-|^@|^:/, $l = /(.*?)\s+(?:in|of)\s+(.*)/, Sl = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/, Tl = /:(.*)$/, El = /^:|^v-bind:/, Al = /\.[^.]+/g, jl = p(gi), Nl = /^xmlns:NS\d+/, Ol = /^NS\d+:/, Dl = p(zi), Ll = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/, Il = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/, Ml = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [8, 46]
    }, Pl = function(t) {
        return "if(" + t + ")return null;"
    }, Fl = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: Pl("$event.target !== $event.currentTarget"),
        ctrl: Pl("!$event.ctrlKey"),
        shift: Pl("!$event.shiftKey"),
        alt: Pl("!$event.altKey"),
        meta: Pl("!$event.metaKey"),
        left: Pl("'button' in $event && $event.button !== 0"),
        middle: Pl("'button' in $event && $event.button !== 1"),
        right: Pl("'button' in $event && $event.button !== 2")
    }, ql = {
        bind: Zi,
        cloak: g
    }, Hl = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), Bl = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), Rl = /[A-Za-z_$][\w$]*/, zl = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g, Ul = {
        staticKeys: ["staticClass"],
        transformNode: jr,
        genData: Nr
    }, Vl = {
        staticKeys: ["staticStyle"],
        transformNode: Or,
        genData: Dr
    }, Wl = [Ul, Vl], Xl = {
        model: wn,
        text: Lr,
        html: Ir
    }, Yl = {
        expectHTML: !0,
        modules: Wl,
        directives: Xl,
        isPreTag: Bo,
        isUnaryTag: Is,
        mustUseProp: No,
        canBeLeftOpenTag: Ms,
        isReservedTag: Ro,
        getTagNamespace: Ne,
        staticKeys: function(t) {
            return t.reduce(function(t, e) {
                return t.concat(e.staticKeys || [])
            }, []).join(",")
        }(Wl)
    }, Jl = function(t) {
        function e(e, n) {
            var i = Object.create(t)
              , r = []
              , a = [];
            if (i.warn = function(t, e) {
                (e ? a : r).push(t)
            }
            ,
            n) {
                n.modules && (i.modules = (t.modules || []).concat(n.modules)),
                n.directives && (i.directives = v(Object.create(t.directives), n.directives));
                for (var o in n)
                    "modules" !== o && "directives" !== o && (i[o] = n[o])
            }
            var s = Er(e, i);
            return r.push.apply(r, kr(s.ast)),
            s.errors = r,
            s.tips = a,
            s
        }
        function n(t, n, r) {
            n = n || {};
            try {
                new Function("return 1")
            } catch (t) {
                t.toString().match(/unsafe-eval|CSP/) && Zr("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.")
            }
            var a = n.delimiters ? String(n.delimiters) + t : t;
            if (i[a])
                return i[a];
            var o = e(t, n);
            o.errors && o.errors.length && Zr("Error compiling template:\n\n" + t + "\n\n" + o.errors.map(function(t) {
                return "- " + t
            }).join("\n") + "\n", r),
            o.tips && o.tips.length && o.tips.forEach(function(t) {
                return ta(t, r)
            });
            var s = {}
              , l = [];
            s.render = Ar(o.render, l);
            var c = o.staticRenderFns.length;
            s.staticRenderFns = new Array(c);
            for (var u = 0; u < c; u++)
                s.staticRenderFns[u] = Ar(o.staticRenderFns[u], l);
            return o.errors && o.errors.length || !l.length || Zr("Failed to generate render function:\n\n" + l.map(function(t) {
                var e = t.err
                  , n = t.code;
                return e.toString() + " in\n\n" + n + "\n"
            }).join("\n"), r),
            i[a] = s
        }
        var i = Object.create(null);
        return {
            compile: e,
            compileToFunctions: n
        }
    }(Yl), Kl = Jl.compileToFunctions, Gl = p(function(t) {
        var e = De(t);
        return e && e.innerHTML
    }), Ql = ve.prototype.$mount;
    return ve.prototype.$mount = function(t, e) {
        if ((t = t && De(t)) === document.body || t === document.documentElement)
            return Zr("Do not mount Vue to <html> or <body> - mount to normal elements instead."),
            this;
        var n = this.$options;
        if (!n.render) {
            var i = n.template;
            if (i)
                if ("string" == typeof i)
                    "#" === i.charAt(0) && ((i = Gl(i)) || Zr("Template element not found or is empty: " + n.template, this));
                else {
                    if (!i.nodeType)
                        return Zr("invalid template option:" + i, this),
                        this;
                    i = i.innerHTML
                }
            else
                t && (i = Mr(t));
            if (i) {
                Kr.performance && Da && Da("compile");
                var r = Kl(i, {
                    shouldDecodeNewlines: Ls,
                    delimiters: n.delimiters
                }, this)
                  , a = r.render
                  , o = r.staticRenderFns;
                n.render = a,
                n.staticRenderFns = o,
                Kr.performance && Da && (Da("compile end"),
                La(this._name + " compile", "compile", "compile end"))
            }
        }
        return Ql.call(this, t, e)
    }
    ,
    ve.compile = Kl,
    ve
}),
define("vue_tip", ["require", "exports", "module"], function(t, e, n) {
    n.exports = Vue.extend({
        template: '<transition name="el-message-fade"><div style="display: block;" class="main-tip" :class="[typeIconClass, customClass]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">{{ message }}</div></transition>',
        data: function() {
            return {
                visible: !1,
                message: "",
                duration: 3e3,
                type: "info",
                customClass: "",
                onClose: null,
                closed: !1,
                timer: null
            }
        },
        computed: {
            typeIconClass: function() {
                return "main-tip-" + this.type
            }
        },
        watch: {
            closed: function(t) {
                t && (this.visible = !1,
                this.$el.addEventListener("transitionend", this.destroyElement))
            }
        },
        methods: {
            destroyElement: function() {
                this.$el.removeEventListener("transitionend", this.destroyElement),
                this.$destroy(!0),
                this.$el.parentNode.removeChild(this.$el)
            },
            close: function() {
                this.closed = !0,
                "function" == typeof this.onClose && this.onClose(this)
            },
            clearTimer: function() {
                clearTimeout(this.timer)
            },
            startTimer: function() {
                var t = this;
                this.duration > 0 && (this.timer = setTimeout(function() {
                    t.closed || t.close()
                }, this.duration))
            }
        },
        mounted: function() {
            this.startTimer()
        }
    })
}),
define("../lib/tip-vue", ["require", "exports", "module", "Vue", "vue_tip"], function(t, e, n) {
    var i, r = t("Vue"), a = r.extend(t("vue_tip")), o = [], s = 1, l = function t(e) {
        if (!r.prototype.$isServer) {
            e = e || {},
            "string" == typeof e && (e = {
                tip: e
            });
            var n = e.onClose
              , l = "tip_" + s++;
            return e.onClose = function() {
                t.close(l, n)
            }
            ,
            i = new a({
                data: e
            }),
            i.id = l,
            i.vm = i.$mount(),
            document.body.appendChild(i.vm.$el),
            i.vm.visible = !0,
            i.dom = i.vm.$el,
            o.push(i),
            i.vm
        }
    };
    l.close = function(t, e) {
        for (var n = 0, i = o.length; n < i; n++)
            if (t === o[n].id) {
                "function" == typeof e && e(o[n]),
                o.splice(n, 1);
                break
            }
    }
    ,
    l.closeAll = function() {
        for (var t = o.length - 1; t >= 0; t--)
            o[t].close()
    }
    ,
    n.exports = l
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define("qs", [], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.Qs = t()
    }
}(function() {
    return function t(e, n, i) {
        function r(o, s) {
            if (!n[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)
                        return l(o, !0);
                    if (a)
                        return a(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var u = n[o] = {
                    exports: {}
                };
                e[o][0].call(u.exports, function(t) {
                    var n = e[o][1][t];
                    return r(n || t)
                }, u, u.exports, t, e, n, i)
            }
            return n[o].exports
        }
        for (var a = "function" == typeof require && require, o = 0; o < i.length; o++)
            r(i[o]);
        return r
    }({
        1: [function(t, e, n) {
            "use strict";
            var i = String.prototype.replace
              , r = /%20/g;
            e.exports = {
                default: "RFC3986",
                formatters: {
                    RFC1738: function(t) {
                        return i.call(t, r, "+")
                    },
                    RFC3986: function(t) {
                        return t
                    }
                },
                RFC1738: "RFC1738",
                RFC3986: "RFC3986"
            }
        }
        , {}],
        2: [function(t, e, n) {
            "use strict";
            var i = t("./stringify")
              , r = t("./parse")
              , a = t("./formats");
            e.exports = {
                formats: a,
                parse: r,
                stringify: i
            }
        }
        , {
            "./formats": 1,
            "./parse": 3,
            "./stringify": 4
        }],
        3: [function(t, e, n) {
            "use strict";
            var i = t("./utils")
              , r = Object.prototype.hasOwnProperty
              , a = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                decoder: i.decode,
                delimiter: "&",
                depth: 5,
                parameterLimit: 1e3,
                plainObjects: !1,
                strictNullHandling: !1
            }
              , o = function(t, e) {
                for (var n = {}, i = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), a = 0; a < i.length; ++a) {
                    var o, s, l = i[a], c = -1 === l.indexOf("]=") ? l.indexOf("=") : l.indexOf("]=") + 1;
                    -1 === c ? (o = e.decoder(l),
                    s = e.strictNullHandling ? null : "") : (o = e.decoder(l.slice(0, c)),
                    s = e.decoder(l.slice(c + 1))),
                    r.call(n, o) ? n[o] = [].concat(n[o]).concat(s) : n[o] = s
                }
                return n
            }
              , s = function(t, e, n) {
                if (!t.length)
                    return e;
                var i, r = t.shift();
                if ("[]" === r)
                    i = [],
                    i = i.concat(s(t, e, n));
                else {
                    i = n.plainObjects ? Object.create(null) : {};
                    var a = "[" === r.charAt(0) && "]" === r.charAt(r.length - 1) ? r.slice(1, -1) : r
                      , o = parseInt(a, 10);
                    !isNaN(o) && r !== a && String(o) === a && o >= 0 && n.parseArrays && o <= n.arrayLimit ? (i = [],
                    i[o] = s(t, e, n)) : i[a] = s(t, e, n)
                }
                return i
            }
              , l = function(t, e, n) {
                if (t) {
                    var i = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
                      , a = /(\[[^[\]]*])/
                      , o = /(\[[^[\]]*])/g
                      , l = a.exec(i)
                      , c = l ? i.slice(0, l.index) : i
                      , u = [];
                    if (c) {
                        if (!n.plainObjects && r.call(Object.prototype, c) && !n.allowPrototypes)
                            return;
                        u.push(c)
                    }
                    for (var d = 0; null !== (l = o.exec(i)) && d < n.depth; ) {
                        if (d += 1,
                        !n.plainObjects && r.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)
                            return;
                        u.push(l[1])
                    }
                    return l && u.push("[" + i.slice(l.index) + "]"),
                    s(u, e, n)
                }
            };
            e.exports = function(t, e) {
                var n = e || {};
                if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)
                    throw new TypeError("Decoder has to be a function.");
                if (n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : a.delimiter,
                n.depth = "number" == typeof n.depth ? n.depth : a.depth,
                n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : a.arrayLimit,
                n.parseArrays = !1 !== n.parseArrays,
                n.decoder = "function" == typeof n.decoder ? n.decoder : a.decoder,
                n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : a.allowDots,
                n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : a.plainObjects,
                n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : a.allowPrototypes,
                n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : a.parameterLimit,
                n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : a.strictNullHandling,
                "" === t || null === t || void 0 === t)
                    return n.plainObjects ? Object.create(null) : {};
                for (var r = "string" == typeof t ? o(t, n) : t, s = n.plainObjects ? Object.create(null) : {}, c = Object.keys(r), u = 0; u < c.length; ++u) {
                    var d = c[u]
                      , p = l(d, r[d], n);
                    s = i.merge(s, p, n)
                }
                return i.compact(s)
            }
        }
        , {
            "./utils": 5
        }],
        4: [function(t, e, n) {
            "use strict";
            var i = t("./utils")
              , r = t("./formats")
              , a = {
                brackets: function(t) {
                    return t + "[]"
                },
                indices: function(t, e) {
                    return t + "[" + e + "]"
                },
                repeat: function(t) {
                    return t
                }
            }
              , o = Date.prototype.toISOString
              , s = {
                delimiter: "&",
                encode: !0,
                encoder: i.encode,
                encodeValuesOnly: !1,
                serializeDate: function(t) {
                    return o.call(t)
                },
                skipNulls: !1,
                strictNullHandling: !1
            }
              , l = function t(e, n, r, a, o, s, l, c, u, d, p, f) {
                var h = e;
                if ("function" == typeof l)
                    h = l(n, h);
                else if (h instanceof Date)
                    h = d(h);
                else if (null === h) {
                    if (a)
                        return s && !f ? s(n) : n;
                    h = ""
                }
                if ("string" == typeof h || "number" == typeof h || "boolean" == typeof h || i.isBuffer(h)) {
                    if (s) {
                        return [p(f ? n : s(n)) + "=" + p(s(h))]
                    }
                    return [p(n) + "=" + p(String(h))]
                }
                var v = [];
                if (void 0 === h)
                    return v;
                var m;
                if (Array.isArray(l))
                    m = l;
                else {
                    var g = Object.keys(h);
                    m = c ? g.sort(c) : g
                }
                for (var y = 0; y < m.length; ++y) {
                    var b = m[y];
                    o && null === h[b] || (v = Array.isArray(h) ? v.concat(t(h[b], r(n, b), r, a, o, s, l, c, u, d, p, f)) : v.concat(t(h[b], n + (u ? "." + b : "[" + b + "]"), r, a, o, s, l, c, u, d, p, f)))
                }
                return v
            };
            e.exports = function(t, e) {
                var n = t
                  , i = e || {};
                if (null !== i.encoder && void 0 !== i.encoder && "function" != typeof i.encoder)
                    throw new TypeError("Encoder has to be a function.");
                var o = void 0 === i.delimiter ? s.delimiter : i.delimiter
                  , c = "boolean" == typeof i.strictNullHandling ? i.strictNullHandling : s.strictNullHandling
                  , u = "boolean" == typeof i.skipNulls ? i.skipNulls : s.skipNulls
                  , d = "boolean" == typeof i.encode ? i.encode : s.encode
                  , p = "function" == typeof i.encoder ? i.encoder : s.encoder
                  , f = "function" == typeof i.sort ? i.sort : null
                  , h = void 0 !== i.allowDots && i.allowDots
                  , v = "function" == typeof i.serializeDate ? i.serializeDate : s.serializeDate
                  , m = "boolean" == typeof i.encodeValuesOnly ? i.encodeValuesOnly : s.encodeValuesOnly;
                if (void 0 === i.format)
                    i.format = r.default;
                else if (!Object.prototype.hasOwnProperty.call(r.formatters, i.format))
                    throw new TypeError("Unknown format option provided.");
                var g, y, b = r.formatters[i.format];
                "function" == typeof i.filter ? (y = i.filter,
                n = y("", n)) : Array.isArray(i.filter) && (y = i.filter,
                g = y);
                var _ = [];
                if ("object" != typeof n || null === n)
                    return "";
                var x;
                x = i.arrayFormat in a ? i.arrayFormat : "indices"in i ? i.indices ? "indices" : "repeat" : "indices";
                var k = a[x];
                g || (g = Object.keys(n)),
                f && g.sort(f);
                for (var w = 0; w < g.length; ++w) {
                    var C = g[w];
                    u && null === n[C] || (_ = _.concat(l(n[C], C, k, c, u, d ? p : null, y, f, h, v, b, m)))
                }
                return _.join(o)
            }
        }
        , {
            "./formats": 1,
            "./utils": 5
        }],
        5: [function(t, e, n) {
            "use strict";
            var i = Object.prototype.hasOwnProperty
              , r = function() {
                for (var t = [], e = 0; e < 256; ++e)
                    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
                return t
            }();
            n.arrayToObject = function(t, e) {
                for (var n = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i)
                    void 0 !== t[i] && (n[i] = t[i]);
                return n
            }
            ,
            n.merge = function(t, e, r) {
                if (!e)
                    return t;
                if ("object" != typeof e) {
                    if (Array.isArray(t))
                        t.push(e);
                    else {
                        if ("object" != typeof t)
                            return [t, e];
                        (r.plainObjects || r.allowPrototypes || !i.call(Object.prototype, e)) && (t[e] = !0)
                    }
                    return t
                }
                if ("object" != typeof t)
                    return [t].concat(e);
                var a = t;
                return Array.isArray(t) && !Array.isArray(e) && (a = n.arrayToObject(t, r)),
                Array.isArray(t) && Array.isArray(e) ? (e.forEach(function(e, a) {
                    i.call(t, a) ? t[a] && "object" == typeof t[a] ? t[a] = n.merge(t[a], e, r) : t.push(e) : t[a] = e
                }),
                t) : Object.keys(e).reduce(function(t, i) {
                    var a = e[i];
                    return Object.prototype.hasOwnProperty.call(t, i) ? t[i] = n.merge(t[i], a, r) : t[i] = a,
                    t
                }, a)
            }
            ,
            n.decode = function(t) {
                try {
                    return decodeURIComponent(t.replace(/\+/g, " "))
                } catch (e) {
                    return t
                }
            }
            ,
            n.encode = function(t) {
                if (0 === t.length)
                    return t;
                for (var e = "string" == typeof t ? t : String(t), n = "", i = 0; i < e.length; ++i) {
                    var a = e.charCodeAt(i);
                    45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122 ? n += e.charAt(i) : a < 128 ? n += r[a] : a < 2048 ? n += r[192 | a >> 6] + r[128 | 63 & a] : a < 55296 || a >= 57344 ? n += r[224 | a >> 12] + r[128 | a >> 6 & 63] + r[128 | 63 & a] : (i += 1,
                    a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(i)),
                    n += r[240 | a >> 18] + r[128 | a >> 12 & 63] + r[128 | a >> 6 & 63] + r[128 | 63 & a])
                }
                return n
            }
            ,
            n.compact = function(t, e) {
                if ("object" != typeof t || null === t)
                    return t;
                var i = e || []
                  , r = i.indexOf(t);
                if (-1 !== r)
                    return i[r];
                if (i.push(t),
                Array.isArray(t)) {
                    for (var a = [], o = 0; o < t.length; ++o)
                        t[o] && "object" == typeof t[o] ? a.push(n.compact(t[o], i)) : void 0 !== t[o] && a.push(t[o]);
                    return a
                }
                return Object.keys(t).forEach(function(e) {
                    t[e] = n.compact(t[e], i)
                }),
                t
            }
            ,
            n.isRegExp = function(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }
            ,
            n.isBuffer = function(t) {
                return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
            }
        }
        , {}]
    }, {}, [2])(2)
}),
define("vue_tips", ["require", "exports", "module", "qs"], function(t, e, n) {
    var i = t("qs")
      , r = {
        success: "success",
        info: "info",
        warning: "warning",
        error: "error",
        limit: "limit"
    };
    n.exports = Vue.extend({
        template: '\x3c!-- <transition name="el-message-fade"><divstyle="display: block;"class="main-tip":class="[typeIconClass, customClass]"v-show="visible"@mouseenter="clearTimer"@mouseleave="startTimer">{{ message }}</div></transition> --\x3e<transition name="el-message-fade"><div :class="[\'el-message\',type &amp;&amp; !iconClass ? `el-message--${ type }` : \'\',center ? \'is-center\' : \'\',customClass]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert"><div v-if="type === \'limit\'" class="tip_time" :style="{\'animation\': \'mymoves \' + Number(duration)/1000 + \'s linear 1\'}"></div><div v-else="" class="tip_time" :style="{\'animation\': \'mymove \' + Number(duration)/1000 + \'s linear 1\'}"></div><i :class="iconClass" v-if="iconClass"></i><i :class="typeIconClass" v-else=""></i><slot><div class="tip" v-if="type === \'limit\'"><p class="el-message__title">权限限制</p><p v-if="!dangerouslyUseHTMLString" class="el-message__content">{{ message }}</p><p v-else="" v-html="message" class="el-message__content"></p>\x3c!-- <div class="button"><span @click="close">忽略</span><span @click="getApplyPower">申请试用</span></div> --\x3e</div><div class="tip" v-else=""><p v-if="type === \'success\'" class="el-message__title">操作成功</p><p v-if="type === \'warning\'" class="el-message__title">提示！</p><p v-if="!dangerouslyUseHTMLString" class="el-message__content">{{ message }}</p><p v-else="" v-html="message" class="el-message__content"></p></div></slot><i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i></div></transition>',
        data: function() {
            return {
                visible: !1,
                message: "",
                duration: 3e3,
                type: "info",
                iconClass: "",
                customClass: "",
                onClose: null,
                showClose: !0,
                closed: !1,
                timer: null,
                dangerouslyUseHTMLString: !1,
                center: !1
            }
        },
        computed: {
            iconWrapClass: function() {
                var t = ["el-message__icon"];
                return this.type && !this.iconClass && t.push("el-message__icon--" + this.type),
                t
            },
            typeIconClass: function() {
                return this.type && !this.iconClass ? "el-message__icon el-icon-" + r[this.type] : ""
            }
        },
        watch: {
            closed: function(t) {
                t && (this.visible = !1,
                this.$el.addEventListener("transitionend", this.destroyElement))
            }
        },
        methods: {
            destroyElement: function() {
                this.$el.removeEventListener("transitionend", this.destroyElement),
                this.$destroy(!0),
                this.$el.parentNode.removeChild(this.$el)
            },
            close: function() {
                this.closed = !0,
                "function" == typeof this.onClose && this.onClose(this)
            },
            clearTimer: function() {
                clearTimeout(this.timer)
            },
            startTimer: function() {
                var t = this;
                this.duration > 0 && (this.timer = setTimeout(function() {
                    t.closed || t.close()
                }, this.duration))
            },
            getApplyPower: function() {
                var t = this;
                t.message = "",
                t.type = "",
                t.duration = 0,
                axios.post("/platform/simuassetaccount/apply", i.stringify({})).then(function(t) {
                    return t.data
                }).then(function(e) {
                    if (0 !== e.errorcode)
                        return t.message = e.errormsg ? e.errormsg : "申请试用失败",
                        t.type = "warning",
                        t.duration = 3e3,
                        void t.startTimer();
                    t.message = "申请成功，将于3到5分钟后生效",
                    t.type = "success",
                    t.duration = 3e3,
                    t.startTimer()
                }).catch(function(e) {
                    t.message = "网络异常",
                    t.type = "error",
                    t.duration = 3e3,
                    t.startTimer()
                })
            }
        },
        mounted: function() {
            this.startTimer()
        }
    })
}),
define("../lib/tips-vue", ["require", "exports", "module", "Vue", "vue_tips"], function(t, e, n) {
    var i, r = t("Vue"), a = r.extend(t("vue_tips")), o = [], s = 1, l = function t(e) {
        if (!r.prototype.$isServer) {
            e = e || {},
            "string" == typeof e && (e = {
                tip: e
            });
            var n = e.onClose
              , l = "tips_" + s++;
            return e.onClose = function() {
                t.close(l, n)
            }
            ,
            i = new a({
                data: e
            }),
            i.id = l,
            i.vm = i.$mount(),
            document.body.appendChild(i.vm.$el),
            i.vm.visible = !0,
            i.dom = i.vm.$el,
            o.push(i),
            i.vm
        }
    };
    ["success", "warning", "info", "error"].forEach(function(t) {
        l[t] = function(e) {
            return "string" == typeof e && (e = {
                message: e
            }),
            e.type = t,
            l(e)
        }
    }),
    l.close = function(t, e) {
        for (var n = 0, i = o.length; n < i; n++)
            if (t === o[n].id) {
                "function" == typeof e && e(o[n]),
                o.splice(n, 1);
                break
            }
    }
    ,
    l.closeAll = function() {
        for (var t = o.length - 1; t >= 0; t--)
            o[t].close()
    }
    ,
    n.exports = l
}),
define("../components/common/select", ["require", "exports", "module"], function(t, e, n) {
    n.exports = Vue.extend({
        template: '<div :tabindex="1" @blur="optionsShow = false" class="s_selectbox" :class="{active: optionsShow}" @click="toggleSelect">{{ isLoading ? \'请求中...\' : (isEmpty ? \'暂无数据\' : selectChoosedTitle) }}<div class="s_selectbox_list" v-show="optionsShow"><div class="s_selectbox_item" v-for="(item, key, index) in selectList" @click="optionSelect(key, item)">{{ item }}</div></div></div>',
        props: {
            selectList: Object,
            defaultSelected: {
                type: String,
                default: ""
            },
            isLoading: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            isEmpty: function() {
                return 0 === _.keys(this.selectList).length
            }
        },
        data: function() {
            return {
                optionsShow: !1,
                selectChoosedTitle: ""
            }
        },
        methods: {
            toggleSelect: function() {
                this.isLoading || this.isEmpty || (this.optionsShow = !this.optionsShow)
            },
            optionSelect: function(t, e) {
                this.selectChoosedTitle !== e && (this.selectChoosedTitle = e,
                this.$emit("option-changed", t))
            },
            init: function() {
                var t = this.defaultSelected;
                if ("" === this.defaultSelected) {
                    var e;
                    for (e in this.selectList) {
                        t = e,
                        this.optionSelect(e, this.selectList[e]);
                        break
                    }
                }
                this.selectChoosedTitle = this.selectList[t]
            }
        },
        watch: {
            selectList: function(t) {
                var e = this;
                this.$nextTick(function() {
                    e.init()
                })
            }
        },
        created: function() {
            this.init()
        }
    })
}),
define("../common/vueComponents", ["../components/common/dialog", "../components/common/pagination", "../lib/tip-vue", "../lib/tips-vue", "../components/common/select"], function(t, e, n, i, r) {
    Vue.component("vue-dialog", t),
    Vue.component("vue-pagination", e),
    Vue.component("vue-select", r),
    Vue.filter("stripUnixDate", function(t) {
        return t.replace(/t/i, " ")
    }),
    Vue.prototype.$tip = n,
    Vue.prototype.$tips = i,
    Vue.prototype.$Bus = new Vue
}),
define("../common/vueDirectives", ["require", "exports", "module", "Vue"], function(t, e, n) {
    var i = window.Vue || t("Vue")
      , r = {
        "backtest-result": location.href.indexOf("newmyfactor") > -1 ? "wdcl_yzcl_result" : "wdcl_clyj_result",
        study: "wdcl_clyj_edit",
        "study-index": "wdcl_clyj_index",
        "backreport-history": "wdcl_clyj_list",
        strategylib: "wdcl_clk",
        strategymonitor: "wdcl_cljk",
        trade: "mnjy",
        strategy: "clgc",
        "strategy-info": "clgc",
        community: "sq",
        home: "home"
    }
      , a = -1 !== window.location.href.indexOf("ifind")
      , o = !sessionStorage.getItem("navError")
      , s = a ? "-ifind.html" : ".html";
    i.directive("stat", {
        bind: function(t, e) {
            var n = e.value
              , i = n.act
              , l = n.prefix
              , c = n.namespace
              , u = n.event
              , d = n.targid;
            l = l || "mindgo",
            c = c || r[Object.keys(r).find(function(t) {
                return window.location.href.indexOf(t + s) > -1
            })],
            u = u || "click",
            t.act = i,
            t.callback = function() {
                if (t.act) {
                    var e = {
                        id: l + "_" + c + "." + t.act
                    };
                    a && (e.ld = o ? "ifind_g" : "ifind_s"),
                    d && (e.targid = d),
                    TA.log(e)
                }
            }
            ,
            t.addEventListener(u, t.callback)
        },
        unbind: function(t, e) {
            t.removeEventListener(event, t.callback)
        },
        componentUpdated: function(t, e) {
            t.act = e.value.act
        }
    })
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
}
: function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
}
;
define("../common/vueDirectives2", ["require", "exports", "module", "Vue"], function(t, e, n) {
    var i = window.Vue || t("Vue")
      , r = location.href.indexOf("ifind") > -1 ? "b2bsm_b2b_SuperMindiFind" : "b2bsm_b2b_SuperMind"
      , a = {
        click: "click",
        mount: "show",
        hover: "hover",
        stay: "stay",
        unmount: "dis",
        dclick: "dclick",
        update: "slide"
    }
      , o = function(t, e) {
        if ("object" === _typeof(e.value) && e.value.id) {
            var n = e.value.id
              , i = Object.assign({
                action: a[e.arg]
            }, e.value, {
                id: r + n
            });
            (e.modifiers.clickContent || e.modifiers.clickcontent) && (i.clickContent = e.value.clickContent || t.innerText),
            window.hxEventTracking(i)
        }
    }
      , s = {
        click: function(t) {
            var e = t.el
              , n = t.binding
              , i = (t.vnode,
            t.event);
            if (["bind", "unbind"].includes(i)) {
                e["bind" === i ? "addEventListener" : "removeEventListener"]("click", function() {
                    o(e, n)
                })
            }
        },
        mount: function(t) {
            var e = t.el
              , n = t.binding;
            t.vnode;
            "bind" === t.event && o(e, n)
        }
    };
    i.directive("stat2", {
        bind: function(t, e, n) {
            s[e.arg] && s[e.arg]({
                el: t,
                binding: e,
                vnode: n,
                event: "bind"
            })
        },
        unbind: function(t, e, n) {
            s[e.arg] && s[e.arg]({
                el: t,
                binding: e,
                vnode: n,
                event: "unbind"
            })
        }
    }),
    i.prototype.$stat2 = function(t) {
        return window.hxEventTracking(Object.assign(t, {
            id: r + t.id
        }))
    }
}),
define("../lib/zUI", ["jquery"], function() {
    $.zUI = $.zUI || {},
    $.zUI.emptyFn = function() {}
    ,
    $.zUI.asWidget = [],
    $.zUI.addWidget = function(t, e) {
        $.zUI.asWidget.push(t);
        var n = $.zUI[t] = $.zUI[t] || {}
          , i = "zUI" + t;
        n.sFlagName = i,
        n.sEventName = i + "Event",
        n.sOptsName = i + "Opts",
        n.__creator = $.zUI.emptyFn,
        n.__destroyer = $.zUI.emptyFn,
        $.extend(n, e),
        n.fn = function(t, e) {
            var i = $(t);
            i.data(n.sOptsName, $.extend({}, n.defaults, e)),
            i.data(n.sFlagName) && n.__destroyer(t),
            i.data(n.sFlagName, !0),
            n.__creator(t),
            i.on(i.data(n.sEventName))
        }
        ,
        n.unfn = function(t) {
            n.__destroyer(t);
            var e = $(t);
            e.data(n.sFlagName) && (e.off(e.data(n.sEventName)),
            e.data(n.sFlagName, !1))
        }
    }
    ,
    $.zUI.addWidget("draggable", {
        defaults: {
            bOffsetParentBoundary: !1,
            oBoundary: null,
            fnComputePosition: null
        },
        __creator: function(t) {
            $(t).data($.zUI.draggable.sEventName, {
                mousedown: function(t) {
                    function e(t) {
                        var e = {};
                        i.fnComputePosition ? e = i.fnComputePosition(t, r, a) : (e.iLeft = t.pageX - r,
                        e.iTop = t.pageY - a);
                        var o = i.oBoundary;
                        if (i.bOffsetParentBoundary) {
                            var s = n.offsetParent()[0];
                            o = {},
                            o.iMinLeft = 0,
                            o.iMinTop = 0,
                            o.iMaxLeft = s.clientWidth - n.outerWidth(),
                            o.iMaxTop = s.clientHeight - n.outerHeight()
                        }
                        o && (e.iLeft = e.iLeft < o.iMinLeft ? o.iMinLeft : e.iLeft,
                        e.iLeft = e.iLeft > o.iMaxLeft ? o.iMaxLeft : e.iLeft,
                        e.iTop = e.iTop < o.iMinTop ? o.iMinTop : e.iTop,
                        e.iTop = e.iTop > o.iMaxTop ? o.iMaxTop : e.iTop),
                        n.css({
                            left: e.iLeft,
                            top: e.iTop
                        }),
                        t.preventDefault(),
                        n.trigger("draggable.move")
                    }
                    var n = $(this)
                      , i = n.data($.zUI.draggable.sOptsName);
                    n.trigger("draggable.start");
                    var r = t.pageX - this.offsetLeft
                      , a = t.pageY - this.offsetTop
                      , o = {
                        mousemove: e,
                        mouseup: function() {
                            $(document).off(o),
                            n.trigger("draggable.stop")
                        }
                    };
                    $(document).on(o)
                }
            })
        }
    }),
    $.zUI.addWidget("panel", {
        defaults: {
            iWheelStep: 16,
            sBoxClassName: "zUIpanelScrollBox",
            sBarClassName: "zUIpanelScrollBar",
            bottomCallback: null,
            isShowScrollBar: !1
        },
        __creator: function(t) {
            function e(t, e, n, r, a, o) {
                var s = i.data($.zUI.panel.sOptsName)
                  , l = (parseInt(e.css("top")) - a) / (e.outerHeight() - t.innerHeight())
                  , c = (r.outerHeight() - n.innerHeight()) * l + o;
                r.css("top", c),
                s.bottomCallback && -1 === l && s.bottomCallback()
            }
            function n() {
                var t = i.data($.zUI.panel.sOptsName)
                  , n = i.innerHeight() - 2 * t.iTop
                  , a = i.innerHeight() / r.outerHeight()
                  , o = Math.round(a * n);
                if (a >= 1)
                    return s.css("height", 0),
                    void l.css("height", 0);
                s.css("height", n),
                l.css("height", o);
                var c = {
                    iMinTop: t.iTop
                };
                c.iMaxTop = n - Math.round(a * n) + t.iTop,
                c.iMinLeft = i.innerWidth() - t.iWidth - t.iRight,
                c.iMaxLeft = c.iMinLeft,
                e(i, r, s, l, 0, t.iTop),
                l.draggable({
                    oBoundary: c
                })
            }
            var i = $(t);
            "static" === i.css("position") && i.css("position", "relative"),
            i.css("overflow", "hidden");
            var r = i.children(":first");
            if (r.length) {
                r.css({
                    top: 0,
                    position: "absolute"
                });
                var a = i.data($.zUI.panel.sOptsName)
                  , o = a.isShowScrollBar
                  , s = $("<div style='position:absolute;display:none;line-height:0;'></div>");
                s.addClass(a.sBoxClassName);
                var l;
                l = o ? $("<div style='position:absolute;display:block;line-height:0;'></div>") : $("<div style='position:absolute;display:none;line-height:0;'></div>"),
                l.addClass(a.sBarClassName),
                s.appendTo(i),
                l.appendTo(i),
                a.iTop = parseInt(s.css("top")),
                a.iWidth = l.width(),
                a.iRight = parseInt(s.css("right")),
                l.on("draggable.move", function() {
                    var t = i.data($.zUI.panel.sOptsName);
                    e(s, l, i, r, t.iTop, 0)
                }),
                i.on("freshScroll", function() {
                    n()
                }),
                o && n();
                var c = {
                    mouseenter: function() {
                        n(),
                        s.css("display", "block"),
                        l.css("display", "block")
                    },
                    mouseleave: function() {
                        s.css("display", "none"),
                        l.css("display", o ? "block" : "none")
                    }
                }
                  , u = "mousewheel";
                "onmousewheel"in document || (u = "DOMMouseScroll"),
                c[u] = function(t) {
                    var n = i.data($.zUI.panel.sOptsName)
                      , a = 1;
                    t.preventDefault(),
                    t = t.originalEvent,
                    a = t.wheelDelta ? t.wheelDelta / 120 : -t.detail / 3;
                    var o = i.innerHeight() - r.outerHeight();
                    if (o > 0)
                        return void r.css("top", 0);
                    var c = parseInt(r.css("top"));
                    c += n.iWheelStep * a,
                    c = c > 0 ? 0 : c,
                    c = c < o ? o : c,
                    r.css("top", c),
                    e(i, r, s, l, 0, n.iTop)
                }
                ,
                i.data($.zUI.panel.sEventName, c)
            }
        },
        __destroyer: function(t) {
            var e = $(t);
            if (e.data($.zUI.panel.sFlagName)) {
                var n = e.data($.zUI.panel.sOptsName);
                e.children("." + n.sBoxClassName).remove(),
                e.children("." + n.sBarClassName).remove()
            }
        }
    }),
    $.each($.zUI.asWidget, function(t, e) {
        var n = "un" + e
          , i = {};
        i[e] = function(t) {
            return this.each(function() {
                $.zUI[e].fn(this, t)
            }),
            this
        }
        ,
        i[n] = function() {
            return this.each(function() {
                $.zUI[e].unfn(this)
            }),
            this
        }
        ,
        $.fn.extend(i)
    })
}),
require(["jquery", "../router/strategy-lib-router", "../vuex/strategy-lib/strategy-lib", "../common/vueComponents", "../common/vueDirectives", "../common/vueDirectives2", "../lib/zUI"], function(t, e, n) {
    t("#main_header_study").addClass("header-nav-item-active"),
    t("#strategy_lib").addClass("item-active");
    var i = t(window).height();
    t("#main-container").css("height", "calc(100% - 55px)"),
    t(window).on("resize", function() {
        t("#strategy_lib").addClass("item-active"),
        i = t(window).height(),
        t("#main-container").css("height", "calc(100% - 55px)")
    }),
    new Vue({
        el: "#strategylib_container",
        router: e,
        store: n
    })
}),
define("strategy-lib", function() {});
