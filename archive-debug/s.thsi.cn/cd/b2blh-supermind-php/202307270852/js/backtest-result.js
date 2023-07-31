/*! jQuery v1.8.3 jquery.com | jquery.org/license */

/*!
 * vue-resource v1.3.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
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

/*
 * My97 DatePicker 4.8 Beta4
 * License: http://www.my97.net/dp/license.asp
 */

//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

/**
 * @license text 2.0.15 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/text/LICENSE
 */

!(function (t, e) {
  function n(t) {
    var e = (ht[t] = {});
    return (
      Q.each(t.split(et), function (t, n) {
        e[n] = !0;
      }),
      e
    );
  }
  function i(t, n, i) {
    if (i === e && 1 === t.nodeType) {
      var a = 'data-' + n.replace(mt, '-$1').toLowerCase();
      if ('string' == typeof (i = t.getAttribute(a))) {
        try {
          i = 'true' === i || ('false' !== i && ('null' === i ? null : +i + '' === i ? +i : vt.test(i) ? Q.parseJSON(i) : i));
        } catch (t) {}
        Q.data(t, n, i);
      } else i = e;
    }
    return i;
  }
  function a(t) {
    var e;
    for (e in t) if (('data' !== e || !Q.isEmptyObject(t[e])) && 'toJSON' !== e) return !1;
    return !0;
  }
  function r() {
    return !1;
  }
  function s() {
    return !0;
  }
  function o(t) {
    return !t || !t.parentNode || 11 === t.parentNode.nodeType;
  }
  function l(t, e) {
    do {
      t = t[e];
    } while (t && 1 !== t.nodeType);
    return t;
  }
  function c(t, e, n) {
    if (((e = e || 0), Q.isFunction(e)))
      return Q.grep(t, function (t, i) {
        return !!e.call(t, i, t) === n;
      });
    if (e.nodeType)
      return Q.grep(t, function (t, i) {
        return (t === e) === n;
      });
    if ('string' == typeof e) {
      var i = Q.grep(t, function (t) {
        return 1 === t.nodeType;
      });
      if (Nt.test(e)) return Q.filter(e, i, !n);
      e = Q.filter(e, i);
    }
    return Q.grep(t, function (t, i) {
      return Q.inArray(t, e) >= 0 === n;
    });
  }
  function d(t) {
    var e = Bt.split('|'),
      n = t.createDocumentFragment();
    if (n.createElement) for (; e.length; ) n.createElement(e.pop());
    return n;
  }
  function u(t, e) {
    return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e));
  }
  function p(t, e) {
    if (1 === e.nodeType && Q.hasData(t)) {
      var n,
        i,
        a,
        r = Q._data(t),
        s = Q._data(e, r),
        o = r.events;
      if (o) {
        delete s.handle, (s.events = {});
        for (n in o) for (i = 0, a = o[n].length; i < a; i++) Q.event.add(e, n, o[n][i]);
      }
      s.data && (s.data = Q.extend({}, s.data));
    }
  }
  function f(t, e) {
    var n;
    1 === e.nodeType &&
      (e.clearAttributes && e.clearAttributes(),
      e.mergeAttributes && e.mergeAttributes(t),
      (n = e.nodeName.toLowerCase()),
      'object' === n
        ? (e.parentNode && (e.outerHTML = t.outerHTML),
          Q.support.html5Clone && t.innerHTML && !Q.trim(e.innerHTML) && (e.innerHTML = t.innerHTML))
        : 'input' === n && Gt.test(t.type)
        ? ((e.defaultChecked = e.checked = t.checked), e.value !== t.value && (e.value = t.value))
        : 'option' === n
        ? (e.selected = t.defaultSelected)
        : 'input' === n || 'textarea' === n
        ? (e.defaultValue = t.defaultValue)
        : 'script' === n && e.text !== t.text && (e.text = t.text),
      e.removeAttribute(Q.expando));
  }
  function h(t) {
    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName('*') : void 0 !== t.querySelectorAll ? t.querySelectorAll('*') : [];
  }
  function v(t) {
    Gt.test(t.type) && (t.defaultChecked = t.checked);
  }
  function m(t, e) {
    if (e in t) return e;
    for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, a = ge.length; a--; ) if ((e = ge[a] + n) in t) return e;
    return i;
  }
  function g(t, e) {
    return (t = e || t), 'none' === Q.css(t, 'display') || !Q.contains(t.ownerDocument, t);
  }
  function b(t, e) {
    for (var n, i, a = [], r = 0, s = t.length; r < s; r++)
      (n = t[r]),
        n.style &&
          ((a[r] = Q._data(n, 'olddisplay')),
          e
            ? (!a[r] && 'none' === n.style.display && (n.style.display = ''),
              '' === n.style.display && g(n) && (a[r] = Q._data(n, 'olddisplay', _(n.nodeName))))
            : ((i = ne(n, 'display')), !a[r] && 'none' !== i && Q._data(n, 'olddisplay', i)));
    for (r = 0; r < s; r++)
      (n = t[r]), n.style && ((e && 'none' !== n.style.display && '' !== n.style.display) || (n.style.display = e ? a[r] || '' : 'none'));
    return t;
  }
  function y(t, e, n) {
    var i = de.exec(e);
    return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || 'px') : e;
  }
  function x(t, e, n, i) {
    for (var a = n === (i ? 'border' : 'content') ? 4 : 'width' === e ? 1 : 0, r = 0; a < 4; a += 2)
      'margin' === n && (r += Q.css(t, n + me[a], !0)),
        i
          ? ('content' === n && (r -= parseFloat(ne(t, 'padding' + me[a])) || 0),
            'margin' !== n && (r -= parseFloat(ne(t, 'border' + me[a] + 'Width')) || 0))
          : ((r += parseFloat(ne(t, 'padding' + me[a])) || 0),
            'padding' !== n && (r += parseFloat(ne(t, 'border' + me[a] + 'Width')) || 0));
    return r;
  }
  function w(t, e, n) {
    var i = 'width' === e ? t.offsetWidth : t.offsetHeight,
      a = !0,
      r = Q.support.boxSizing && 'border-box' === Q.css(t, 'boxSizing');
    if (i <= 0 || null == i) {
      if (((i = ne(t, e)), (i < 0 || null == i) && (i = t.style[e]), ue.test(i))) return i;
      (a = r && (Q.support.boxSizingReliable || i === t.style[e])), (i = parseFloat(i) || 0);
    }
    return i + x(t, e, n || (r ? 'border' : 'content'), a) + 'px';
  }
  function _(t) {
    if (fe[t]) return fe[t];
    var e = Q('<' + t + '>').appendTo(H.body),
      n = e.css('display');
    return (
      e.remove(),
      ('none' !== n && '' !== n) ||
        ((ie = H.body.appendChild(ie || Q.extend(H.createElement('iframe'), { frameBorder: 0, width: 0, height: 0 }))),
        (ae && ie.createElement) ||
          ((ae = (ie.contentWindow || ie.contentDocument).document), ae.write('<!doctype html><html><body>'), ae.close()),
        (e = ae.body.appendChild(ae.createElement(t))),
        (n = ne(e, 'display')),
        H.body.removeChild(ie)),
      (fe[t] = n),
      n
    );
  }
  function k(t, e, n, i) {
    var a;
    if (Q.isArray(e))
      Q.each(e, function (e, a) {
        n || xe.test(t) ? i(t, a) : k(t + '[' + ('object' == typeof a ? e : '') + ']', a, n, i);
      });
    else if (n || 'object' !== Q.type(e)) i(t, e);
    else for (a in e) k(t + '[' + a + ']', e[a], n, i);
  }
  function T(t) {
    return function (e, n) {
      'string' != typeof e && ((n = e), (e = '*'));
      var i,
        a,
        r,
        s = e.toLowerCase().split(et),
        o = 0,
        l = s.length;
      if (Q.isFunction(n))
        for (; o < l; o++)
          (i = s[o]), (r = /^\+/.test(i)), r && (i = i.substr(1) || '*'), (a = t[i] = t[i] || []), a[r ? 'unshift' : 'push'](n);
    };
  }
  function C(t, n, i, a, r, s) {
    (r = r || n.dataTypes[0]), (s = s || {}), (s[r] = !0);
    for (var o, l = t[r], c = 0, d = l ? l.length : 0, u = t === Ne; c < d && (u || !o); c++)
      'string' == typeof (o = l[c](n, i, a)) && (!u || s[o] ? (o = e) : (n.dataTypes.unshift(o), (o = C(t, n, i, a, o, s))));
    return (u || !o) && !s['*'] && (o = C(t, n, i, a, '*', s)), o;
  }
  function A(t, n) {
    var i,
      a,
      r = Q.ajaxSettings.flatOptions || {};
    for (i in n) n[i] !== e && ((r[i] ? t : a || (a = {}))[i] = n[i]);
    a && Q.extend(!0, t, a);
  }
  function S(t, n, i) {
    var a,
      r,
      s,
      o,
      l = t.contents,
      c = t.dataTypes,
      d = t.responseFields;
    for (r in d) r in i && (n[d[r]] = i[r]);
    for (; '*' === c[0]; ) c.shift(), a === e && (a = t.mimeType || n.getResponseHeader('content-type'));
    if (a)
      for (r in l)
        if (l[r] && l[r].test(a)) {
          c.unshift(r);
          break;
        }
    if (c[0] in i) s = c[0];
    else {
      for (r in i) {
        if (!c[0] || t.converters[r + ' ' + c[0]]) {
          s = r;
          break;
        }
        o || (o = r);
      }
      s = s || o;
    }
    if (s) return s !== c[0] && c.unshift(s), i[s];
  }
  function $(t, e) {
    var n,
      i,
      a,
      r,
      s = t.dataTypes.slice(),
      o = s[0],
      l = {},
      c = 0;
    if ((t.dataFilter && (e = t.dataFilter(e, t.dataType)), s[1])) for (n in t.converters) l[n.toLowerCase()] = t.converters[n];
    for (; (a = s[++c]); )
      if ('*' !== a) {
        if ('*' !== o && o !== a) {
          if (!(n = l[o + ' ' + a] || l['* ' + a]))
            for (i in l)
              if (((r = i.split(' ')), r[1] === a && (n = l[o + ' ' + r[0]] || l['* ' + r[0]]))) {
                !0 === n ? (n = l[i]) : !0 !== l[i] && ((a = r[0]), s.splice(c--, 0, a));
                break;
              }
          if (!0 !== n)
            if (n && t.throws) e = n(e);
            else
              try {
                e = n(e);
              } catch (t) {
                return { state: 'parsererror', error: n ? t : 'No conversion from ' + o + ' to ' + a };
              }
        }
        o = a;
      }
    return { state: 'success', data: e };
  }
  function L() {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  }
  function D() {
    try {
      return new t.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }
  function I() {
    return (
      setTimeout(function () {
        We = e;
      }, 0),
      (We = Q.now())
    );
  }
  function P(t, e) {
    Q.each(e, function (e, n) {
      for (var i = (Qe[e] || []).concat(Qe['*']), a = 0, r = i.length; a < r; a++) if (i[a].call(t, e, n)) return;
    });
  }
  function E(t, e, n) {
    var i,
      a = 0,
      r = Ke.length,
      s = Q.Deferred().always(function () {
        delete o.elem;
      }),
      o = function () {
        for (
          var e = We || I(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, a = 1 - i, r = 0, o = l.tweens.length;
          r < o;
          r++
        )
          l.tweens[r].run(a);
        return s.notifyWith(t, [l, a, n]), a < 1 && o ? n : (s.resolveWith(t, [l]), !1);
      },
      l = s.promise({
        elem: t,
        props: Q.extend({}, e),
        opts: Q.extend(!0, { specialEasing: {} }, n),
        originalProperties: e,
        originalOptions: n,
        startTime: We || I(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, n, i) {
          var a = Q.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(a), a;
        },
        stop: function (e) {
          for (var n = 0, i = e ? l.tweens.length : 0; n < i; n++) l.tweens[n].run(1);
          return e ? s.resolveWith(t, [l, e]) : s.rejectWith(t, [l, e]), this;
        },
      }),
      c = l.props;
    for (F(c, l.opts.specialEasing); a < r; a++) if ((i = Ke[a].call(l, t, c, l.opts))) return i;
    return (
      P(l, c),
      Q.isFunction(l.opts.start) && l.opts.start.call(t, l),
      Q.fx.timer(Q.extend(o, { anim: l, queue: l.opts.queue, elem: t })),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    );
  }
  function F(t, e) {
    var n, i, a, r, s;
    for (n in t)
      if (
        ((i = Q.camelCase(n)),
        (a = e[i]),
        (r = t[n]),
        Q.isArray(r) && ((a = r[1]), (r = t[n] = r[0])),
        n !== i && ((t[i] = r), delete t[n]),
        (s = Q.cssHooks[i]),
        s && 'expand' in s)
      ) {
        (r = s.expand(r)), delete t[i];
        for (n in r) n in t || ((t[n] = r[n]), (e[n] = a));
      } else e[i] = a;
  }
  function j(t, e, n) {
    var i,
      a,
      r,
      s,
      o,
      l,
      c,
      d,
      u,
      p = this,
      f = t.style,
      h = {},
      v = [],
      m = t.nodeType && g(t);
    n.queue ||
      ((d = Q._queueHooks(t, 'fx')),
      null == d.unqueued &&
        ((d.unqueued = 0),
        (u = d.empty.fire),
        (d.empty.fire = function () {
          d.unqueued || u();
        })),
      d.unqueued++,
      p.always(function () {
        p.always(function () {
          d.unqueued--, Q.queue(t, 'fx').length || d.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ('height' in e || 'width' in e) &&
        ((n.overflow = [f.overflow, f.overflowX, f.overflowY]),
        'inline' === Q.css(t, 'display') &&
          'none' === Q.css(t, 'float') &&
          (Q.support.inlineBlockNeedsLayout && 'inline' !== _(t.nodeName) ? (f.zoom = 1) : (f.display = 'inline-block'))),
      n.overflow &&
        ((f.overflow = 'hidden'),
        Q.support.shrinkWrapBlocks ||
          p.done(function () {
            (f.overflow = n.overflow[0]), (f.overflowX = n.overflow[1]), (f.overflowY = n.overflow[2]);
          }));
    for (i in e)
      if (((r = e[i]), Je.exec(r))) {
        if ((delete e[i], (l = l || 'toggle' === r), r === (m ? 'hide' : 'show'))) continue;
        v.push(i);
      }
    if ((s = v.length)) {
      (o = Q._data(t, 'fxshow') || Q._data(t, 'fxshow', {})),
        'hidden' in o && (m = o.hidden),
        l && (o.hidden = !m),
        m
          ? Q(t).show()
          : p.done(function () {
              Q(t).hide();
            }),
        p.done(function () {
          var e;
          Q.removeData(t, 'fxshow', !0);
          for (e in h) Q.style(t, e, h[e]);
        });
      for (i = 0; i < s; i++)
        (a = v[i]),
          (c = p.createTween(a, m ? o[a] : 0)),
          (h[a] = o[a] || Q.style(t, a)),
          a in o || ((o[a] = c.start), m && ((c.end = c.start), (c.start = 'width' === a || 'height' === a ? 1 : 0)));
    }
  }
  function N(t, e, n, i, a) {
    return new N.prototype.init(t, e, n, i, a);
  }
  function O(t, e) {
    var n,
      i = { height: t },
      a = 0;
    for (e = e ? 1 : 0; a < 4; a += 2 - e) (n = me[a]), (i['margin' + n] = i['padding' + n] = t);
    return e && (i.opacity = i.width = t), i;
  }
  function M(t) {
    return Q.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow);
  }
  var B,
    R,
    H = t.document,
    q = t.location,
    U = t.navigator,
    z = t.jQuery,
    V = t.$,
    W = Array.prototype.push,
    Y = Array.prototype.slice,
    J = Array.prototype.indexOf,
    G = Object.prototype.toString,
    X = Object.prototype.hasOwnProperty,
    K = String.prototype.trim,
    Q = function (t, e) {
      return new Q.fn.init(t, e, B);
    },
    Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    tt = /\S/,
    et = /\s+/,
    nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    rt = /^[\],:{}\s]*$/,
    st = /(?:^|:|,)(?:\s*\[)+/g,
    ot = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    ct = /^-ms-/,
    dt = /-([\da-z])/gi,
    ut = function (t, e) {
      return (e + '').toUpperCase();
    },
    pt = function () {
      H.addEventListener
        ? (H.removeEventListener('DOMContentLoaded', pt, !1), Q.ready())
        : 'complete' === H.readyState && (H.detachEvent('onreadystatechange', pt), Q.ready());
    },
    ft = {};
  (Q.fn = Q.prototype =
    {
      constructor: Q,
      init: function (t, n, i) {
        var a, r, s;
        if (!t) return this;
        if (t.nodeType) return (this.context = this[0] = t), (this.length = 1), this;
        if ('string' == typeof t) {
          if ((a = '<' === t.charAt(0) && '>' === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : it.exec(t)) && (a[1] || !n)) {
            if (a[1])
              return (
                (n = n instanceof Q ? n[0] : n),
                (s = n && n.nodeType ? n.ownerDocument || n : H),
                (t = Q.parseHTML(a[1], s, !0)),
                at.test(a[1]) && Q.isPlainObject(n) && this.attr.call(t, n, !0),
                Q.merge(this, t)
              );
            if ((r = H.getElementById(a[2])) && r.parentNode) {
              if (r.id !== a[2]) return i.find(t);
              (this.length = 1), (this[0] = r);
            }
            return (this.context = H), (this.selector = t), this;
          }
          return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
        }
        return Q.isFunction(t)
          ? i.ready(t)
          : (t.selector !== e && ((this.selector = t.selector), (this.context = t.context)), Q.makeArray(t, this));
      },
      selector: '',
      jquery: '1.8.3',
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return Y.call(this);
      },
      get: function (t) {
        return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t];
      },
      pushStack: function (t, e, n) {
        var i = Q.merge(this.constructor(), t);
        return (
          (i.prevObject = this),
          (i.context = this.context),
          'find' === e
            ? (i.selector = this.selector + (this.selector ? ' ' : '') + n)
            : e && (i.selector = this.selector + '.' + e + '(' + n + ')'),
          i
        );
      },
      each: function (t, e) {
        return Q.each(this, t, e);
      },
      ready: function (t) {
        return Q.ready.promise().done(t), this;
      },
      eq: function (t) {
        return (t = +t), -1 === t ? this.slice(t) : this.slice(t, t + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      slice: function () {
        return this.pushStack(Y.apply(this, arguments), 'slice', Y.call(arguments).join(','));
      },
      map: function (t) {
        return this.pushStack(
          Q.map(this, function (e, n) {
            return t.call(e, n, e);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: W,
      sort: [].sort,
      splice: [].splice,
    }),
    (Q.fn.init.prototype = Q.fn),
    (Q.extend = Q.fn.extend =
      function () {
        var t,
          n,
          i,
          a,
          r,
          s,
          o = arguments[0] || {},
          l = 1,
          c = arguments.length,
          d = !1;
        for (
          'boolean' == typeof o && ((d = o), (o = arguments[1] || {}), (l = 2)),
            'object' != typeof o && !Q.isFunction(o) && (o = {}),
            c === l && ((o = this), --l);
          l < c;
          l++
        )
          if (null != (t = arguments[l]))
            for (n in t)
              (i = o[n]),
                (a = t[n]),
                o !== a &&
                  (d && a && (Q.isPlainObject(a) || (r = Q.isArray(a)))
                    ? (r ? ((r = !1), (s = i && Q.isArray(i) ? i : [])) : (s = i && Q.isPlainObject(i) ? i : {}),
                      (o[n] = Q.extend(d, s, a)))
                    : a !== e && (o[n] = a));
        return o;
      }),
    Q.extend({
      noConflict: function (e) {
        return t.$ === Q && (t.$ = V), e && t.jQuery === Q && (t.jQuery = z), Q;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? Q.readyWait++ : Q.ready(!0);
      },
      ready: function (t) {
        if (!0 === t ? !--Q.readyWait : !Q.isReady) {
          if (!H.body) return setTimeout(Q.ready, 1);
          (Q.isReady = !0), (!0 !== t && --Q.readyWait > 0) || (R.resolveWith(H, [Q]), Q.fn.trigger && Q(H).trigger('ready').off('ready'));
        }
      },
      isFunction: function (t) {
        return 'function' === Q.type(t);
      },
      isArray:
        Array.isArray ||
        function (t) {
          return 'array' === Q.type(t);
        },
      isWindow: function (t) {
        return null != t && t == t.window;
      },
      isNumeric: function (t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      },
      type: function (t) {
        return null == t ? String(t) : ft[G.call(t)] || 'object';
      },
      isPlainObject: function (t) {
        if (!t || 'object' !== Q.type(t) || t.nodeType || Q.isWindow(t)) return !1;
        try {
          if (t.constructor && !X.call(t, 'constructor') && !X.call(t.constructor.prototype, 'isPrototypeOf')) return !1;
        } catch (t) {
          return !1;
        }
        var n;
        for (n in t);
        return n === e || X.call(t, n);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      error: function (t) {
        throw new Error(t);
      },
      parseHTML: function (t, e, n) {
        var i;
        return t && 'string' == typeof t
          ? ('boolean' == typeof e && ((n = e), (e = 0)),
            (e = e || H),
            (i = at.exec(t))
              ? [e.createElement(i[1])]
              : ((i = Q.buildFragment([t], e, n ? null : [])), Q.merge([], (i.cacheable ? Q.clone(i.fragment) : i.fragment).childNodes)))
          : null;
      },
      parseJSON: function (e) {
        return e && 'string' == typeof e
          ? ((e = Q.trim(e)),
            t.JSON && t.JSON.parse
              ? t.JSON.parse(e)
              : rt.test(e.replace(ot, '@').replace(lt, ']').replace(st, ''))
              ? new Function('return ' + e)()
              : void Q.error('Invalid JSON: ' + e))
          : null;
      },
      parseXML: function (n) {
        var i, a;
        if (!n || 'string' != typeof n) return null;
        try {
          t.DOMParser
            ? ((a = new DOMParser()), (i = a.parseFromString(n, 'text/xml')))
            : ((i = new ActiveXObject('Microsoft.XMLDOM')), (i.async = 'false'), i.loadXML(n));
        } catch (t) {
          i = e;
        }
        return (!i || !i.documentElement || i.getElementsByTagName('parsererror').length) && Q.error('Invalid XML: ' + n), i;
      },
      noop: function () {},
      globalEval: function (e) {
        e &&
          tt.test(e) &&
          (
            t.execScript ||
            function (e) {
              t.eval.call(t, e);
            }
          )(e);
      },
      camelCase: function (t) {
        return t.replace(ct, 'ms-').replace(dt, ut);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, n, i) {
        var a,
          r = 0,
          s = t.length,
          o = s === e || Q.isFunction(t);
        if (i)
          if (o) {
            for (a in t) if (!1 === n.apply(t[a], i)) break;
          } else for (; r < s && !1 !== n.apply(t[r++], i); );
        else if (o) {
          for (a in t) if (!1 === n.call(t[a], a, t[a])) break;
        } else for (; r < s && !1 !== n.call(t[r], r, t[r++]); );
        return t;
      },
      trim:
        K && !K.call('\ufeff ')
          ? function (t) {
              return null == t ? '' : K.call(t);
            }
          : function (t) {
              return null == t ? '' : (t + '').replace(nt, '');
            },
      makeArray: function (t, e) {
        var n,
          i = e || [];
        return (
          null != t &&
            ((n = Q.type(t)),
            null == t.length || 'string' === n || 'function' === n || 'regexp' === n || Q.isWindow(t) ? W.call(i, t) : Q.merge(i, t)),
          i
        );
      },
      inArray: function (t, e, n) {
        var i;
        if (e) {
          if (J) return J.call(e, t, n);
          for (i = e.length, n = n ? (n < 0 ? Math.max(0, i + n) : n) : 0; n < i; n++) if (n in e && e[n] === t) return n;
        }
        return -1;
      },
      merge: function (t, n) {
        var i = n.length,
          a = t.length,
          r = 0;
        if ('number' == typeof i) for (; r < i; r++) t[a++] = n[r];
        else for (; n[r] !== e; ) t[a++] = n[r++];
        return (t.length = a), t;
      },
      grep: function (t, e, n) {
        var i,
          a = [],
          r = 0,
          s = t.length;
        for (n = !!n; r < s; r++) (i = !!e(t[r], r)), n !== i && a.push(t[r]);
        return a;
      },
      map: function (t, n, i) {
        var a,
          r,
          s = [],
          o = 0,
          l = t.length;
        if (t instanceof Q || (l !== e && 'number' == typeof l && ((l > 0 && t[0] && t[l - 1]) || 0 === l || Q.isArray(t))))
          for (; o < l; o++) null != (a = n(t[o], o, i)) && (s[s.length] = a);
        else for (r in t) null != (a = n(t[r], r, i)) && (s[s.length] = a);
        return s.concat.apply([], s);
      },
      guid: 1,
      proxy: function (t, n) {
        var i, a, r;
        return (
          'string' == typeof n && ((i = t[n]), (n = t), (t = i)),
          Q.isFunction(t)
            ? ((a = Y.call(arguments, 2)),
              (r = function () {
                return t.apply(n, a.concat(Y.call(arguments)));
              }),
              (r.guid = t.guid = t.guid || Q.guid++),
              r)
            : e
        );
      },
      access: function (t, n, i, a, r, s, o) {
        var l,
          c = null == i,
          d = 0,
          u = t.length;
        if (i && 'object' == typeof i) {
          for (d in i) Q.access(t, n, d, i[d], 1, s, a);
          r = 1;
        } else if (a !== e) {
          if (
            ((l = o === e && Q.isFunction(a)),
            c &&
              (l
                ? ((l = n),
                  (n = function (t, e, n) {
                    return l.call(Q(t), n);
                  }))
                : (n.call(t, a), (n = null))),
            n)
          )
            for (; d < u; d++) n(t[d], i, l ? a.call(t[d], d, n(t[d], i)) : a, o);
          r = 1;
        }
        return r ? t : c ? n.call(t) : u ? n(t[0], i) : s;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (Q.ready.promise = function (e) {
      if (!R)
        if (((R = Q.Deferred()), 'complete' === H.readyState)) setTimeout(Q.ready, 1);
        else if (H.addEventListener) H.addEventListener('DOMContentLoaded', pt, !1), t.addEventListener('load', Q.ready, !1);
        else {
          H.attachEvent('onreadystatechange', pt), t.attachEvent('onload', Q.ready);
          var n = !1;
          try {
            n = null == t.frameElement && H.documentElement;
          } catch (t) {}
          n &&
            n.doScroll &&
            (function t() {
              if (!Q.isReady) {
                try {
                  n.doScroll('left');
                } catch (e) {
                  return setTimeout(t, 50);
                }
                Q.ready();
              }
            })();
        }
      return R.promise(e);
    }),
    Q.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (t, e) {
      ft['[object ' + e + ']'] = e.toLowerCase();
    }),
    (B = Q(H));
  var ht = {};
  (Q.Callbacks = function (t) {
    t = 'string' == typeof t ? ht[t] || n(t) : Q.extend({}, t);
    var i,
      a,
      r,
      s,
      o,
      l,
      c = [],
      d = !t.once && [],
      u = function (e) {
        for (i = t.memory && e, a = !0, l = s || 0, s = 0, o = c.length, r = !0; c && l < o; l++)
          if (!1 === c[l].apply(e[0], e[1]) && t.stopOnFalse) {
            i = !1;
            break;
          }
        (r = !1), c && (d ? d.length && u(d.shift()) : i ? (c = []) : p.disable());
      },
      p = {
        add: function () {
          if (c) {
            var e = c.length;
            (function e(n) {
              Q.each(n, function (n, i) {
                var a = Q.type(i);
                'function' === a ? (!t.unique || !p.has(i)) && c.push(i) : i && i.length && 'string' !== a && e(i);
              });
            })(arguments),
              r ? (o = c.length) : i && ((s = e), u(i));
          }
          return this;
        },
        remove: function () {
          return (
            c &&
              Q.each(arguments, function (t, e) {
                for (var n; (n = Q.inArray(e, c, n)) > -1; ) c.splice(n, 1), r && (n <= o && o--, n <= l && l--);
              }),
            this
          );
        },
        has: function (t) {
          return Q.inArray(t, c) > -1;
        },
        empty: function () {
          return (c = []), this;
        },
        disable: function () {
          return (c = d = i = e), this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          return (d = e), i || p.disable(), this;
        },
        locked: function () {
          return !d;
        },
        fireWith: function (t, e) {
          return (e = e || []), (e = [t, e.slice ? e.slice() : e]), c && (!a || d) && (r ? d.push(e) : u(e)), this;
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return p;
  }),
    Q.extend({
      Deferred: function (t) {
        var e = [
            ['resolve', 'done', Q.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', Q.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', Q.Callbacks('memory')],
          ],
          n = 'pending',
          i = {
            state: function () {
              return n;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return Q.Deferred(function (n) {
                Q.each(e, function (e, i) {
                  var r = i[0],
                    s = t[e];
                  a[i[1]](
                    Q.isFunction(s)
                      ? function () {
                          var t = s.apply(this, arguments);
                          t && Q.isFunction(t.promise)
                            ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify)
                            : n[r + 'With'](this === a ? n : this, [t]);
                        }
                      : n[r]
                  );
                }),
                  (t = null);
              }).promise();
            },
            promise: function (t) {
              return null != t ? Q.extend(t, i) : i;
            },
          },
          a = {};
        return (
          (i.pipe = i.then),
          Q.each(e, function (t, r) {
            var s = r[2],
              o = r[3];
            (i[r[1]] = s.add),
              o &&
                s.add(
                  function () {
                    n = o;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (a[r[0]] = s.fire),
              (a[r[0] + 'With'] = s.fireWith);
          }),
          i.promise(a),
          t && t.call(a, a),
          a
        );
      },
      when: function (t) {
        var e,
          n,
          i,
          a = 0,
          r = Y.call(arguments),
          s = r.length,
          o = 1 !== s || (t && Q.isFunction(t.promise)) ? s : 0,
          l = 1 === o ? t : Q.Deferred(),
          c = function (t, n, i) {
            return function (a) {
              (n[t] = this),
                (i[t] = arguments.length > 1 ? Y.call(arguments) : a),
                i === e ? l.notifyWith(n, i) : --o || l.resolveWith(n, i);
            };
          };
        if (s > 1)
          for (e = new Array(s), n = new Array(s), i = new Array(s); a < s; a++)
            r[a] && Q.isFunction(r[a].promise) ? r[a].promise().done(c(a, i, r)).fail(l.reject).progress(c(a, n, e)) : --o;
        return o || l.resolveWith(i, r), l.promise();
      },
    }),
    (Q.support = (function () {
      var e,
        n,
        i,
        a,
        r,
        s,
        o,
        l,
        c,
        d,
        u,
        p = H.createElement('div');
      if (
        (p.setAttribute('className', 't'),
        (p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (n = p.getElementsByTagName('*')),
        (i = p.getElementsByTagName('a')[0]),
        !n || !i || !n.length)
      )
        return {};
      (a = H.createElement('select')),
        (r = a.appendChild(H.createElement('option'))),
        (s = p.getElementsByTagName('input')[0]),
        (i.style.cssText = 'top:1px;float:left;opacity:.5'),
        (e = {
          leadingWhitespace: 3 === p.firstChild.nodeType,
          tbody: !p.getElementsByTagName('tbody').length,
          htmlSerialize: !!p.getElementsByTagName('link').length,
          style: /top/.test(i.getAttribute('style')),
          hrefNormalized: '/a' === i.getAttribute('href'),
          opacity: /^0.5/.test(i.style.opacity),
          cssFloat: !!i.style.cssFloat,
          checkOn: 'on' === s.value,
          optSelected: r.selected,
          getSetAttribute: 't' !== p.className,
          enctype: !!H.createElement('form').enctype,
          html5Clone: '<:nav></:nav>' !== H.createElement('nav').cloneNode(!0).outerHTML,
          boxModel: 'CSS1Compat' === H.compatMode,
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (s.checked = !0),
        (e.noCloneChecked = s.cloneNode(!0).checked),
        (a.disabled = !0),
        (e.optDisabled = !r.disabled);
      try {
        delete p.test;
      } catch (t) {
        e.deleteExpando = !1;
      }
      if (
        (!p.addEventListener &&
          p.attachEvent &&
          p.fireEvent &&
          (p.attachEvent(
            'onclick',
            (u = function () {
              e.noCloneEvent = !1;
            })
          ),
          p.cloneNode(!0).fireEvent('onclick'),
          p.detachEvent('onclick', u)),
        (s = H.createElement('input')),
        (s.value = 't'),
        s.setAttribute('type', 'radio'),
        (e.radioValue = 't' === s.value),
        s.setAttribute('checked', 'checked'),
        s.setAttribute('name', 't'),
        p.appendChild(s),
        (o = H.createDocumentFragment()),
        o.appendChild(p.lastChild),
        (e.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (e.appendChecked = s.checked),
        o.removeChild(s),
        o.appendChild(p),
        p.attachEvent)
      )
        for (c in { submit: !0, change: !0, focusin: !0 })
          (l = 'on' + c), (d = l in p), d || (p.setAttribute(l, 'return;'), (d = 'function' == typeof p[l])), (e[c + 'Bubbles'] = d);
      return (
        Q(function () {
          var n,
            i,
            a,
            r,
            s = 'padding:0;margin:0;border:0;display:block;overflow:hidden;',
            o = H.getElementsByTagName('body')[0];
          o &&
            ((n = H.createElement('div')),
            (n.style.cssText = 'visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px'),
            o.insertBefore(n, o.firstChild),
            (i = H.createElement('div')),
            n.appendChild(i),
            (i.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
            (a = i.getElementsByTagName('td')),
            (a[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
            (d = 0 === a[0].offsetHeight),
            (a[0].style.display = ''),
            (a[1].style.display = 'none'),
            (e.reliableHiddenOffsets = d && 0 === a[0].offsetHeight),
            (i.innerHTML = ''),
            (i.style.cssText =
              'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
            (e.boxSizing = 4 === i.offsetWidth),
            (e.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop),
            t.getComputedStyle &&
              ((e.pixelPosition = '1%' !== (t.getComputedStyle(i, null) || {}).top),
              (e.boxSizingReliable = '4px' === (t.getComputedStyle(i, null) || { width: '4px' }).width),
              (r = H.createElement('div')),
              (r.style.cssText = i.style.cssText = s),
              (r.style.marginRight = r.style.width = '0'),
              (i.style.width = '1px'),
              i.appendChild(r),
              (e.reliableMarginRight = !parseFloat((t.getComputedStyle(r, null) || {}).marginRight))),
            void 0 !== i.style.zoom &&
              ((i.innerHTML = ''),
              (i.style.cssText = s + 'width:1px;padding:1px;display:inline;zoom:1'),
              (e.inlineBlockNeedsLayout = 3 === i.offsetWidth),
              (i.style.display = 'block'),
              (i.style.overflow = 'visible'),
              (i.innerHTML = '<div></div>'),
              (i.firstChild.style.width = '5px'),
              (e.shrinkWrapBlocks = 3 !== i.offsetWidth),
              (n.style.zoom = 1)),
            o.removeChild(n),
            (n = i = a = r = null));
        }),
        o.removeChild(p),
        (n = i = a = r = s = o = p = null),
        e
      );
    })());
  var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    mt = /([A-Z])/g;
  Q.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: 'jQuery' + (Q.fn.jquery + Math.random()).replace(/\D/g, ''),
    noData: { embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', applet: !0 },
    hasData: function (t) {
      return !!(t = t.nodeType ? Q.cache[t[Q.expando]] : t[Q.expando]) && !a(t);
    },
    data: function (t, n, i, a) {
      if (Q.acceptData(t)) {
        var r,
          s,
          o = Q.expando,
          l = 'string' == typeof n,
          c = t.nodeType,
          d = c ? Q.cache : t,
          u = c ? t[o] : t[o] && o;
        if ((u && d[u] && (a || d[u].data)) || !l || i !== e)
          return (
            u || (c ? (t[o] = u = Q.deletedIds.pop() || Q.guid++) : (u = o)),
            d[u] || ((d[u] = {}), c || (d[u].toJSON = Q.noop)),
            ('object' != typeof n && 'function' != typeof n) || (a ? (d[u] = Q.extend(d[u], n)) : (d[u].data = Q.extend(d[u].data, n))),
            (r = d[u]),
            a || (r.data || (r.data = {}), (r = r.data)),
            i !== e && (r[Q.camelCase(n)] = i),
            l ? null == (s = r[n]) && (s = r[Q.camelCase(n)]) : (s = r),
            s
          );
      }
    },
    removeData: function (t, e, n) {
      if (Q.acceptData(t)) {
        var i,
          r,
          s,
          o = t.nodeType,
          l = o ? Q.cache : t,
          c = o ? t[Q.expando] : Q.expando;
        if (l[c]) {
          if (e && (i = n ? l[c] : l[c].data)) {
            Q.isArray(e) || (e in i ? (e = [e]) : ((e = Q.camelCase(e)), (e = e in i ? [e] : e.split(' '))));
            for (r = 0, s = e.length; r < s; r++) delete i[e[r]];
            if (!(n ? a : Q.isEmptyObject)(i)) return;
          }
          (n || (delete l[c].data, a(l[c]))) &&
            (o ? Q.cleanData([t], !0) : Q.support.deleteExpando || l != l.window ? delete l[c] : (l[c] = null));
        }
      }
    },
    _data: function (t, e, n) {
      return Q.data(t, e, n, !0);
    },
    acceptData: function (t) {
      var e = t.nodeName && Q.noData[t.nodeName.toLowerCase()];
      return !e || (!0 !== e && t.getAttribute('classid') === e);
    },
  }),
    Q.fn.extend({
      data: function (t, n) {
        var a,
          r,
          s,
          o,
          l,
          c = this[0],
          d = 0,
          u = null;
        if (t === e) {
          if (this.length && ((u = Q.data(c)), 1 === c.nodeType && !Q._data(c, 'parsedAttrs'))) {
            for (s = c.attributes, l = s.length; d < l; d++)
              (o = s[d].name), o.indexOf('data-') || ((o = Q.camelCase(o.substring(5))), i(c, o, u[o]));
            Q._data(c, 'parsedAttrs', !0);
          }
          return u;
        }
        return 'object' == typeof t
          ? this.each(function () {
              Q.data(this, t);
            })
          : ((a = t.split('.', 2)),
            (a[1] = a[1] ? '.' + a[1] : ''),
            (r = a[1] + '!'),
            Q.access(
              this,
              function (n) {
                if (n === e)
                  return (
                    (u = this.triggerHandler('getData' + r, [a[0]])),
                    u === e && c && ((u = Q.data(c, t)), (u = i(c, t, u))),
                    u === e && a[1] ? this.data(a[0]) : u
                  );
                (a[1] = n),
                  this.each(function () {
                    var e = Q(this);
                    e.triggerHandler('setData' + r, a), Q.data(this, t, n), e.triggerHandler('changeData' + r, a);
                  });
              },
              null,
              n,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (t) {
        return this.each(function () {
          Q.removeData(this, t);
        });
      },
    }),
    Q.extend({
      queue: function (t, e, n) {
        var i;
        if (t)
          return (
            (e = (e || 'fx') + 'queue'),
            (i = Q._data(t, e)),
            n && (!i || Q.isArray(n) ? (i = Q._data(t, e, Q.makeArray(n))) : i.push(n)),
            i || []
          );
      },
      dequeue: function (t, e) {
        e = e || 'fx';
        var n = Q.queue(t, e),
          i = n.length,
          a = n.shift(),
          r = Q._queueHooks(t, e),
          s = function () {
            Q.dequeue(t, e);
          };
        'inprogress' === a && ((a = n.shift()), i--),
          a && ('fx' === e && n.unshift('inprogress'), delete r.stop, a.call(t, s, r)),
          !i && r && r.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + 'queueHooks';
        return (
          Q._data(t, n) ||
          Q._data(t, n, {
            empty: Q.Callbacks('once memory').add(function () {
              Q.removeData(t, e + 'queue', !0), Q.removeData(t, n, !0);
            }),
          })
        );
      },
    }),
    Q.fn.extend({
      queue: function (t, n) {
        var i = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), i--),
          arguments.length < i
            ? Q.queue(this[0], t)
            : n === e
            ? this
            : this.each(function () {
                var e = Q.queue(this, t, n);
                Q._queueHooks(this, t), 'fx' === t && 'inprogress' !== e[0] && Q.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          Q.dequeue(this, t);
        });
      },
      delay: function (t, e) {
        return (
          (t = Q.fx ? Q.fx.speeds[t] || t : t),
          (e = e || 'fx'),
          this.queue(e, function (e, n) {
            var i = setTimeout(e, t);
            n.stop = function () {
              clearTimeout(i);
            };
          })
        );
      },
      clearQueue: function (t) {
        return this.queue(t || 'fx', []);
      },
      promise: function (t, n) {
        var i,
          a = 1,
          r = Q.Deferred(),
          s = this,
          o = this.length,
          l = function () {
            --a || r.resolveWith(s, [s]);
          };
        for ('string' != typeof t && ((n = t), (t = e)), t = t || 'fx'; o--; )
          (i = Q._data(s[o], t + 'queueHooks')) && i.empty && (a++, i.empty.add(l));
        return l(), r.promise(n);
      },
    });
  var gt,
    bt,
    yt,
    xt = /[\t\r\n]/g,
    wt = /\r/g,
    _t = /^(?:button|input)$/i,
    kt = /^(?:button|input|object|select|textarea)$/i,
    Tt = /^a(?:rea|)$/i,
    Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    At = Q.support.getSetAttribute;
  Q.fn.extend({
    attr: function (t, e) {
      return Q.access(this, Q.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        Q.removeAttr(this, t);
      });
    },
    prop: function (t, e) {
      return Q.access(this, Q.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return (
        (t = Q.propFix[t] || t),
        this.each(function () {
          try {
            (this[t] = e), delete this[t];
          } catch (t) {}
        })
      );
    },
    addClass: function (t) {
      var e, n, i, a, r, s, o;
      if (Q.isFunction(t))
        return this.each(function (e) {
          Q(this).addClass(t.call(this, e, this.className));
        });
      if (t && 'string' == typeof t)
        for (e = t.split(et), n = 0, i = this.length; n < i; n++)
          if (((a = this[n]), 1 === a.nodeType))
            if (a.className || 1 !== e.length) {
              for (r = ' ' + a.className + ' ', s = 0, o = e.length; s < o; s++) r.indexOf(' ' + e[s] + ' ') < 0 && (r += e[s] + ' ');
              a.className = Q.trim(r);
            } else a.className = t;
      return this;
    },
    removeClass: function (t) {
      var n, i, a, r, s, o, l;
      if (Q.isFunction(t))
        return this.each(function (e) {
          Q(this).removeClass(t.call(this, e, this.className));
        });
      if ((t && 'string' == typeof t) || t === e)
        for (n = (t || '').split(et), o = 0, l = this.length; o < l; o++)
          if (((a = this[o]), 1 === a.nodeType && a.className)) {
            for (i = (' ' + a.className + ' ').replace(xt, ' '), r = 0, s = n.length; r < s; r++)
              for (; i.indexOf(' ' + n[r] + ' ') >= 0; ) i = i.replace(' ' + n[r] + ' ', ' ');
            a.className = t ? Q.trim(i) : '';
          }
      return this;
    },
    toggleClass: function (t, e) {
      var n = typeof t,
        i = 'boolean' == typeof e;
      return Q.isFunction(t)
        ? this.each(function (n) {
            Q(this).toggleClass(t.call(this, n, this.className, e), e);
          })
        : this.each(function () {
            if ('string' === n)
              for (var a, r = 0, s = Q(this), o = e, l = t.split(et); (a = l[r++]); )
                (o = i ? o : !s.hasClass(a)), s[o ? 'addClass' : 'removeClass'](a);
            else
              ('undefined' !== n && 'boolean' !== n) ||
                (this.className && Q._data(this, '__className__', this.className),
                (this.className = this.className || !1 === t ? '' : Q._data(this, '__className__') || ''));
          });
    },
    hasClass: function (t) {
      for (var e = ' ' + t + ' ', n = 0, i = this.length; n < i; n++)
        if (1 === this[n].nodeType && (' ' + this[n].className + ' ').replace(xt, ' ').indexOf(e) >= 0) return !0;
      return !1;
    },
    val: function (t) {
      var n,
        i,
        a,
        r = this[0];
      {
        if (arguments.length)
          return (
            (a = Q.isFunction(t)),
            this.each(function (i) {
              var r,
                s = Q(this);
              1 === this.nodeType &&
                ((r = a ? t.call(this, i, s.val()) : t),
                null == r
                  ? (r = '')
                  : 'number' == typeof r
                  ? (r += '')
                  : Q.isArray(r) &&
                    (r = Q.map(r, function (t) {
                      return null == t ? '' : t + '';
                    })),
                (n = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()]),
                (n && 'set' in n && n.set(this, r, 'value') !== e) || (this.value = r));
            })
          );
        if (r)
          return (
            (n = Q.valHooks[r.type] || Q.valHooks[r.nodeName.toLowerCase()]),
            n && 'get' in n && (i = n.get(r, 'value')) !== e
              ? i
              : ((i = r.value), 'string' == typeof i ? i.replace(wt, '') : null == i ? '' : i)
          );
      }
    },
  }),
    Q.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = t.attributes.value;
            return !e || e.specified ? t.value : t.text;
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                n,
                i = t.options,
                a = t.selectedIndex,
                r = 'select-one' === t.type || a < 0,
                s = r ? null : [],
                o = r ? a + 1 : i.length,
                l = a < 0 ? o : r ? a : 0;
              l < o;
              l++
            )
              if (
                ((n = i[l]),
                (n.selected || l === a) &&
                  (Q.support.optDisabled ? !n.disabled : null === n.getAttribute('disabled')) &&
                  (!n.parentNode.disabled || !Q.nodeName(n.parentNode, 'optgroup')))
              ) {
                if (((e = Q(n).val()), r)) return e;
                s.push(e);
              }
            return s;
          },
          set: function (t, e) {
            var n = Q.makeArray(e);
            return (
              Q(t)
                .find('option')
                .each(function () {
                  this.selected = Q.inArray(Q(this).val(), n) >= 0;
                }),
              n.length || (t.selectedIndex = -1),
              n
            );
          },
        },
      },
      attrFn: {},
      attr: function (t, n, i, a) {
        var r,
          s,
          o,
          l = t.nodeType;
        if (t && 3 !== l && 8 !== l && 2 !== l)
          return a && Q.isFunction(Q.fn[n])
            ? Q(t)[n](i)
            : void 0 === t.getAttribute
            ? Q.prop(t, n, i)
            : ((o = 1 !== l || !Q.isXMLDoc(t)) && ((n = n.toLowerCase()), (s = Q.attrHooks[n] || (Ct.test(n) ? bt : gt))),
              i !== e
                ? null === i
                  ? void Q.removeAttr(t, n)
                  : s && 'set' in s && o && (r = s.set(t, i, n)) !== e
                  ? r
                  : (t.setAttribute(n, i + ''), i)
                : s && 'get' in s && o && null !== (r = s.get(t, n))
                ? r
                : ((r = t.getAttribute(n)), null === r ? e : r));
      },
      removeAttr: function (t, e) {
        var n,
          i,
          a,
          r,
          s = 0;
        if (e && 1 === t.nodeType)
          for (i = e.split(et); s < i.length; s++)
            (a = i[s]) &&
              ((n = Q.propFix[a] || a), (r = Ct.test(a)), r || Q.attr(t, a, ''), t.removeAttribute(At ? a : n), r && n in t && (t[n] = !1));
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (_t.test(t.nodeName) && t.parentNode) Q.error("type property can't be changed");
            else if (!Q.support.radioValue && 'radio' === e && Q.nodeName(t, 'input')) {
              var n = t.value;
              return t.setAttribute('type', e), n && (t.value = n), e;
            }
          },
        },
        value: {
          get: function (t, e) {
            return gt && Q.nodeName(t, 'button') ? gt.get(t, e) : e in t ? t.value : null;
          },
          set: function (t, e, n) {
            if (gt && Q.nodeName(t, 'button')) return gt.set(t, e, n);
            t.value = e;
          },
        },
      },
      propFix: {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable',
      },
      prop: function (t, n, i) {
        var a,
          r,
          s,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return (
            (s = 1 !== o || !Q.isXMLDoc(t)),
            s && ((n = Q.propFix[n] || n), (r = Q.propHooks[n])),
            i !== e
              ? r && 'set' in r && (a = r.set(t, i, n)) !== e
                ? a
                : (t[n] = i)
              : r && 'get' in r && null !== (a = r.get(t, n))
              ? a
              : t[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var n = t.getAttributeNode('tabindex');
            return n && n.specified ? parseInt(n.value, 10) : kt.test(t.nodeName) || (Tt.test(t.nodeName) && t.href) ? 0 : e;
          },
        },
      },
    }),
    (bt = {
      get: function (t, n) {
        var i,
          a = Q.prop(t, n);
        return !0 === a || ('boolean' != typeof a && (i = t.getAttributeNode(n)) && !1 !== i.nodeValue) ? n.toLowerCase() : e;
      },
      set: function (t, e, n) {
        var i;
        return !1 === e ? Q.removeAttr(t, n) : ((i = Q.propFix[n] || n), i in t && (t[i] = !0), t.setAttribute(n, n.toLowerCase())), n;
      },
    }),
    At ||
      ((yt = { name: !0, id: !0, coords: !0 }),
      (gt = Q.valHooks.button =
        {
          get: function (t, n) {
            var i;
            return (i = t.getAttributeNode(n)), i && (yt[n] ? '' !== i.value : i.specified) ? i.value : e;
          },
          set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return i || ((i = H.createAttribute(n)), t.setAttributeNode(i)), (i.value = e + '');
          },
        }),
      Q.each(['width', 'height'], function (t, e) {
        Q.attrHooks[e] = Q.extend(Q.attrHooks[e], {
          set: function (t, n) {
            if ('' === n) return t.setAttribute(e, 'auto'), n;
          },
        });
      }),
      (Q.attrHooks.contenteditable = {
        get: gt.get,
        set: function (t, e, n) {
          '' === e && (e = 'false'), gt.set(t, e, n);
        },
      })),
    Q.support.hrefNormalized ||
      Q.each(['href', 'src', 'width', 'height'], function (t, n) {
        Q.attrHooks[n] = Q.extend(Q.attrHooks[n], {
          get: function (t) {
            var i = t.getAttribute(n, 2);
            return null === i ? e : i;
          },
        });
      }),
    Q.support.style ||
      (Q.attrHooks.style = {
        get: function (t) {
          return t.style.cssText.toLowerCase() || e;
        },
        set: function (t, e) {
          return (t.style.cssText = e + '');
        },
      }),
    Q.support.optSelected ||
      (Q.propHooks.selected = Q.extend(Q.propHooks.selected, {
        get: function (t) {
          var e = t.parentNode;
          return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null;
        },
      })),
    Q.support.enctype || (Q.propFix.enctype = 'encoding'),
    Q.support.checkOn ||
      Q.each(['radio', 'checkbox'], function () {
        Q.valHooks[this] = {
          get: function (t) {
            return null === t.getAttribute('value') ? 'on' : t.value;
          },
        };
      }),
    Q.each(['radio', 'checkbox'], function () {
      Q.valHooks[this] = Q.extend(Q.valHooks[this], {
        set: function (t, e) {
          if (Q.isArray(e)) return (t.checked = Q.inArray(Q(t).val(), e) >= 0);
        },
      });
    });
  var St = /^(?:textarea|input|select)$/i,
    $t = /^([^\.]*|)(?:\.(.+)|)$/,
    Lt = /(?:^|\s)hover(\.\S+|)\b/,
    Dt = /^key/,
    It = /^(?:mouse|contextmenu)|click/,
    Pt = /^(?:focusinfocus|focusoutblur)$/,
    Et = function (t) {
      return Q.event.special.hover ? t : t.replace(Lt, 'mouseenter$1 mouseleave$1');
    };
  (Q.event = {
    add: function (t, n, i, a, r) {
      var s, o, l, c, d, u, p, f, h, v, m;
      if (3 !== t.nodeType && 8 !== t.nodeType && n && i && (s = Q._data(t))) {
        for (
          i.handler && ((h = i), (i = h.handler), (r = h.selector)),
            i.guid || (i.guid = Q.guid++),
            l = s.events,
            l || (s.events = l = {}),
            o = s.handle,
            o ||
              ((s.handle = o =
                function (t) {
                  return void 0 === Q || (t && Q.event.triggered === t.type) ? e : Q.event.dispatch.apply(o.elem, arguments);
                }),
              (o.elem = t)),
            n = Q.trim(Et(n)).split(' '),
            c = 0;
          c < n.length;
          c++
        )
          (d = $t.exec(n[c]) || []),
            (u = d[1]),
            (p = (d[2] || '').split('.').sort()),
            (m = Q.event.special[u] || {}),
            (u = (r ? m.delegateType : m.bindType) || u),
            (m = Q.event.special[u] || {}),
            (f = Q.extend(
              {
                type: u,
                origType: d[1],
                data: a,
                handler: i,
                guid: i.guid,
                selector: r,
                needsContext: r && Q.expr.match.needsContext.test(r),
                namespace: p.join('.'),
              },
              h
            )),
            (v = l[u]),
            v ||
              ((v = l[u] = []),
              (v.delegateCount = 0),
              (m.setup && !1 !== m.setup.call(t, a, p, o)) ||
                (t.addEventListener ? t.addEventListener(u, o, !1) : t.attachEvent && t.attachEvent('on' + u, o))),
            m.add && (m.add.call(t, f), f.handler.guid || (f.handler.guid = i.guid)),
            r ? v.splice(v.delegateCount++, 0, f) : v.push(f),
            (Q.event.global[u] = !0);
        t = null;
      }
    },
    global: {},
    remove: function (t, e, n, i, a) {
      var r,
        s,
        o,
        l,
        c,
        d,
        u,
        p,
        f,
        h,
        v,
        m = Q.hasData(t) && Q._data(t);
      if (m && (p = m.events)) {
        for (e = Q.trim(Et(e || '')).split(' '), r = 0; r < e.length; r++)
          if (((s = $t.exec(e[r]) || []), (o = l = s[1]), (c = s[2]), o)) {
            for (
              f = Q.event.special[o] || {},
                o = (i ? f.delegateType : f.bindType) || o,
                h = p[o] || [],
                d = h.length,
                c = c ? new RegExp('(^|\\.)' + c.split('.').sort().join('\\.(?:.*\\.|)') + '(\\.|$)') : null,
                u = 0;
              u < h.length;
              u++
            )
              (v = h[u]),
                (a || l === v.origType) &&
                  (!n || n.guid === v.guid) &&
                  (!c || c.test(v.namespace)) &&
                  (!i || i === v.selector || ('**' === i && v.selector)) &&
                  (h.splice(u--, 1), v.selector && h.delegateCount--, f.remove && f.remove.call(t, v));
            0 === h.length &&
              d !== h.length &&
              ((!f.teardown || !1 === f.teardown.call(t, c, m.handle)) && Q.removeEvent(t, o, m.handle), delete p[o]);
          } else for (o in p) Q.event.remove(t, o + e[r], n, i, !0);
        Q.isEmptyObject(p) && (delete m.handle, Q.removeData(t, 'events', !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (n, i, a, r) {
      if (!a || (3 !== a.nodeType && 8 !== a.nodeType)) {
        var s,
          o,
          l,
          c,
          d,
          u,
          p,
          f,
          h,
          v,
          m = n.type || n,
          g = [];
        if (Pt.test(m + Q.event.triggered)) return;
        if (
          (m.indexOf('!') >= 0 && ((m = m.slice(0, -1)), (o = !0)),
          m.indexOf('.') >= 0 && ((g = m.split('.')), (m = g.shift()), g.sort()),
          (!a || Q.event.customEvent[m]) && !Q.event.global[m])
        )
          return;
        if (
          ((n = 'object' == typeof n ? (n[Q.expando] ? n : new Q.Event(m, n)) : new Q.Event(m)),
          (n.type = m),
          (n.isTrigger = !0),
          (n.exclusive = o),
          (n.namespace = g.join('.')),
          (n.namespace_re = n.namespace ? new RegExp('(^|\\.)' + g.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (u = m.indexOf(':') < 0 ? 'on' + m : ''),
          !a)
        ) {
          s = Q.cache;
          for (l in s) s[l].events && s[l].events[m] && Q.event.trigger(n, i, s[l].handle.elem, !0);
          return;
        }
        if (
          ((n.result = e),
          n.target || (n.target = a),
          (i = null != i ? Q.makeArray(i) : []),
          i.unshift(n),
          (p = Q.event.special[m] || {}),
          p.trigger && !1 === p.trigger.apply(a, i))
        )
          return;
        if (((h = [[a, p.bindType || m]]), !r && !p.noBubble && !Q.isWindow(a))) {
          for (v = p.delegateType || m, c = Pt.test(v + m) ? a : a.parentNode, d = a; c; c = c.parentNode) h.push([c, v]), (d = c);
          d === (a.ownerDocument || H) && h.push([d.defaultView || d.parentWindow || t, v]);
        }
        for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
          (c = h[l][0]),
            (n.type = h[l][1]),
            (f = (Q._data(c, 'events') || {})[n.type] && Q._data(c, 'handle')),
            f && f.apply(c, i),
            (f = u && c[u]) && Q.acceptData(c) && f.apply && !1 === f.apply(c, i) && n.preventDefault();
        return (
          (n.type = m),
          !r &&
            !n.isDefaultPrevented() &&
            (!p._default || !1 === p._default.apply(a.ownerDocument, i)) &&
            ('click' !== m || !Q.nodeName(a, 'a')) &&
            Q.acceptData(a) &&
            u &&
            a[m] &&
            (('focus' !== m && 'blur' !== m) || 0 !== n.target.offsetWidth) &&
            !Q.isWindow(a) &&
            ((d = a[u]), d && (a[u] = null), (Q.event.triggered = m), a[m](), (Q.event.triggered = e), d && (a[u] = d)),
          n.result
        );
      }
    },
    dispatch: function (n) {
      n = Q.event.fix(n || t.event);
      var i,
        a,
        r,
        s,
        o,
        l,
        c,
        d,
        u,
        p = (Q._data(this, 'events') || {})[n.type] || [],
        f = p.delegateCount,
        h = Y.call(arguments),
        v = !n.exclusive && !n.namespace,
        m = Q.event.special[n.type] || {},
        g = [];
      if (((h[0] = n), (n.delegateTarget = this), !m.preDispatch || !1 !== m.preDispatch.call(this, n))) {
        if (f && (!n.button || 'click' !== n.type))
          for (r = n.target; r != this; r = r.parentNode || this)
            if (!0 !== r.disabled || 'click' !== n.type) {
              for (o = {}, c = [], i = 0; i < f; i++)
                (d = p[i]),
                  (u = d.selector),
                  o[u] === e && (o[u] = d.needsContext ? Q(u, this).index(r) >= 0 : Q.find(u, this, null, [r]).length),
                  o[u] && c.push(d);
              c.length && g.push({ elem: r, matches: c });
            }
        for (p.length > f && g.push({ elem: this, matches: p.slice(f) }), i = 0; i < g.length && !n.isPropagationStopped(); i++)
          for (l = g[i], n.currentTarget = l.elem, a = 0; a < l.matches.length && !n.isImmediatePropagationStopped(); a++)
            (d = l.matches[a]),
              (v || (!n.namespace && !d.namespace) || (n.namespace_re && n.namespace_re.test(d.namespace))) &&
                ((n.data = d.data),
                (n.handleObj = d),
                (s = ((Q.event.special[d.origType] || {}).handle || d.handler).apply(l.elem, h)) !== e &&
                  ((n.result = s), !1 === s && (n.preventDefault(), n.stopPropagation())));
        return m.postDispatch && m.postDispatch.call(this, n), n.result;
      }
    },
    props:
      'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
        ' '
      ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (t, e) {
        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t;
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (t, n) {
        var i,
          a,
          r,
          s = n.button,
          o = n.fromElement;
        return (
          null == t.pageX &&
            null != n.clientX &&
            ((i = t.target.ownerDocument || H),
            (a = i.documentElement),
            (r = i.body),
            (t.pageX = n.clientX + ((a && a.scrollLeft) || (r && r.scrollLeft) || 0) - ((a && a.clientLeft) || (r && r.clientLeft) || 0)),
            (t.pageY = n.clientY + ((a && a.scrollTop) || (r && r.scrollTop) || 0) - ((a && a.clientTop) || (r && r.clientTop) || 0))),
          !t.relatedTarget && o && (t.relatedTarget = o === t.target ? n.toElement : o),
          !t.which && s !== e && (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[Q.expando]) return t;
      var e,
        n,
        i = t,
        a = Q.event.fixHooks[t.type] || {},
        r = a.props ? this.props.concat(a.props) : this.props;
      for (t = Q.Event(i), e = r.length; e; ) (n = r[--e]), (t[n] = i[n]);
      return (
        t.target || (t.target = i.srcElement || H),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        (t.metaKey = !!t.metaKey),
        a.filter ? a.filter(t, i) : t
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: { delegateType: 'focusin' },
      blur: { delegateType: 'focusout' },
      beforeunload: {
        setup: function (t, e, n) {
          Q.isWindow(this) && (this.onbeforeunload = n);
        },
        teardown: function (t, e) {
          this.onbeforeunload === e && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (t, e, n, i) {
      var a = Q.extend(new Q.Event(), n, { type: t, isSimulated: !0, originalEvent: {} });
      i ? Q.event.trigger(a, null, e) : Q.event.dispatch.call(e, a), a.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (Q.event.handle = Q.event.dispatch),
    (Q.removeEvent = H.removeEventListener
      ? function (t, e, n) {
          t.removeEventListener && t.removeEventListener(e, n, !1);
        }
      : function (t, e, n) {
          var i = 'on' + e;
          t.detachEvent && (void 0 === t[i] && (t[i] = null), t.detachEvent(i, n));
        }),
    (Q.Event = function (t, e) {
      if (!(this instanceof Q.Event)) return new Q.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || (t.getPreventDefault && t.getPreventDefault()) ? s : r))
        : (this.type = t),
        e && Q.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Q.now()),
        (this[Q.expando] = !0);
    }),
    (Q.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = s;
        var t = this.originalEvent;
        t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = s;
        var t = this.originalEvent;
        t && (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = s), this.stopPropagation();
      },
      isDefaultPrevented: r,
      isPropagationStopped: r,
      isImmediatePropagationStopped: r,
    }),
    Q.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (t, e) {
      Q.event.special[t] = {
        delegateType: e,
        bindType: e,
        handle: function (t) {
          var n,
            i = this,
            a = t.relatedTarget,
            r = t.handleObj;
          r.selector;
          return (a && (a === i || Q.contains(i, a))) || ((t.type = r.origType), (n = r.handler.apply(this, arguments)), (t.type = e)), n;
        },
      };
    }),
    Q.support.submitBubbles ||
      (Q.event.special.submit = {
        setup: function () {
          if (Q.nodeName(this, 'form')) return !1;
          Q.event.add(this, 'click._submit keypress._submit', function (t) {
            var n = t.target,
              i = Q.nodeName(n, 'input') || Q.nodeName(n, 'button') ? n.form : e;
            i &&
              !Q._data(i, '_submit_attached') &&
              (Q.event.add(i, 'submit._submit', function (t) {
                t._submit_bubble = !0;
              }),
              Q._data(i, '_submit_attached', !0));
          });
        },
        postDispatch: function (t) {
          t._submit_bubble &&
            (delete t._submit_bubble, this.parentNode && !t.isTrigger && Q.event.simulate('submit', this.parentNode, t, !0));
        },
        teardown: function () {
          if (Q.nodeName(this, 'form')) return !1;
          Q.event.remove(this, '._submit');
        },
      }),
    Q.support.changeBubbles ||
      (Q.event.special.change = {
        setup: function () {
          if (St.test(this.nodeName))
            return (
              ('checkbox' !== this.type && 'radio' !== this.type) ||
                (Q.event.add(this, 'propertychange._change', function (t) {
                  'checked' === t.originalEvent.propertyName && (this._just_changed = !0);
                }),
                Q.event.add(this, 'click._change', function (t) {
                  this._just_changed && !t.isTrigger && (this._just_changed = !1), Q.event.simulate('change', this, t, !0);
                })),
              !1
            );
          Q.event.add(this, 'beforeactivate._change', function (t) {
            var e = t.target;
            St.test(e.nodeName) &&
              !Q._data(e, '_change_attached') &&
              (Q.event.add(e, 'change._change', function (t) {
                this.parentNode && !t.isSimulated && !t.isTrigger && Q.event.simulate('change', this.parentNode, t, !0);
              }),
              Q._data(e, '_change_attached', !0));
          });
        },
        handle: function (t) {
          var e = t.target;
          if (this !== e || t.isSimulated || t.isTrigger || ('radio' !== e.type && 'checkbox' !== e.type))
            return t.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return Q.event.remove(this, '._change'), !St.test(this.nodeName);
        },
      }),
    Q.support.focusinBubbles ||
      Q.each({ focus: 'focusin', blur: 'focusout' }, function (t, e) {
        var n = 0,
          i = function (t) {
            Q.event.simulate(e, t.target, Q.event.fix(t), !0);
          };
        Q.event.special[e] = {
          setup: function () {
            0 == n++ && H.addEventListener(t, i, !0);
          },
          teardown: function () {
            0 == --n && H.removeEventListener(t, i, !0);
          },
        };
      }),
    Q.fn.extend({
      on: function (t, n, i, a, s) {
        var o, l;
        if ('object' == typeof t) {
          'string' != typeof n && ((i = i || n), (n = e));
          for (l in t) this.on(l, n, i, t[l], s);
          return this;
        }
        if (
          (null == i && null == a
            ? ((a = n), (i = n = e))
            : null == a && ('string' == typeof n ? ((a = i), (i = e)) : ((a = i), (i = n), (n = e))),
          !1 === a)
        )
          a = r;
        else if (!a) return this;
        return (
          1 === s &&
            ((o = a),
            (a = function (t) {
              return Q().off(t), o.apply(this, arguments);
            }),
            (a.guid = o.guid || (o.guid = Q.guid++))),
          this.each(function () {
            Q.event.add(this, t, a, i, n);
          })
        );
      },
      one: function (t, e, n, i) {
        return this.on(t, e, n, i, 1);
      },
      off: function (t, n, i) {
        var a, s;
        if (t && t.preventDefault && t.handleObj)
          return (
            (a = t.handleObj),
            Q(t.delegateTarget).off(a.namespace ? a.origType + '.' + a.namespace : a.origType, a.selector, a.handler),
            this
          );
        if ('object' == typeof t) {
          for (s in t) this.off(s, n, t[s]);
          return this;
        }
        return (
          (!1 !== n && 'function' != typeof n) || ((i = n), (n = e)),
          !1 === i && (i = r),
          this.each(function () {
            Q.event.remove(this, t, i, n);
          })
        );
      },
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      live: function (t, e, n) {
        return Q(this.context).on(t, this.selector, e, n), this;
      },
      die: function (t, e) {
        return Q(this.context).off(t, this.selector || '**', e), this;
      },
      delegate: function (t, e, n, i) {
        return this.on(e, t, n, i);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length ? this.off(t, '**') : this.off(e, t || '**', n);
      },
      trigger: function (t, e) {
        return this.each(function () {
          Q.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        if (this[0]) return Q.event.trigger(t, e, this[0], !0);
      },
      toggle: function (t) {
        var e = arguments,
          n = t.guid || Q.guid++,
          i = 0,
          a = function (n) {
            var a = (Q._data(this, 'lastToggle' + t.guid) || 0) % i;
            return Q._data(this, 'lastToggle' + t.guid, a + 1), n.preventDefault(), e[a].apply(this, arguments) || !1;
          };
        for (a.guid = n; i < e.length; ) e[i++].guid = n;
        return this.click(a);
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    Q.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function (t, e) {
        (Q.fn[e] = function (t, n) {
          return null == n && ((n = t), (t = null)), arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e);
        }),
          Dt.test(e) && (Q.event.fixHooks[e] = Q.event.keyHooks),
          It.test(e) && (Q.event.fixHooks[e] = Q.event.mouseHooks);
      }
    ),
    (function (t, e) {
      function n(t, e, n, i) {
        (n = n || []), (e = e || I);
        var a,
          r,
          s,
          o,
          l = e.nodeType;
        if (!t || 'string' != typeof t) return n;
        if (1 !== l && 9 !== l) return [];
        if (!(s = w(e)) && !i && (a = et.exec(t)))
          if ((o = a[1])) {
            if (9 === l) {
              if (!(r = e.getElementById(o)) || !r.parentNode) return n;
              if (r.id === o) return n.push(r), n;
            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(o)) && _(e, r) && r.id === o) return n.push(r), n;
          } else {
            if (a[2]) return N.apply(n, O.call(e.getElementsByTagName(t), 0)), n;
            if ((o = a[3]) && ut && e.getElementsByClassName) return N.apply(n, O.call(e.getElementsByClassName(o), 0)), n;
          }
        return v(t.replace(X, '$1'), e, n, i, s);
      }
      function i(t) {
        return function (e) {
          return 'input' === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function a(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && e.type === t;
        };
      }
      function r(t) {
        return B(function (e) {
          return (
            (e = +e),
            B(function (n, i) {
              for (var a, r = t([], n.length, e), s = r.length; s--; ) n[(a = r[s])] && (n[a] = !(i[a] = n[a]));
            })
          );
        });
      }
      function s(t, e, n) {
        if (t === e) return n;
        for (var i = t.nextSibling; i; ) {
          if (i === e) return -1;
          i = i.nextSibling;
        }
        return 1;
      }
      function o(t, e) {
        var i,
          a,
          r,
          s,
          o,
          l,
          c,
          d = q[L][t + ' '];
        if (d) return e ? 0 : d.slice(0);
        for (o = t, l = [], c = y.preFilter; o; ) {
          (i && !(a = K.exec(o))) || (a && (o = o.slice(a[0].length) || o), l.push((r = []))),
            (i = !1),
            (a = Z.exec(o)) && (r.push((i = new D(a.shift()))), (o = o.slice(i.length)), (i.type = a[0].replace(X, ' ')));
          for (s in y.filter)
            (a = st[s].exec(o)) &&
              (!c[s] || (a = c[s](a))) &&
              (r.push((i = new D(a.shift()))), (o = o.slice(i.length)), (i.type = s), (i.matches = a));
          if (!i) break;
        }
        return e ? o.length : o ? n.error(t) : q(t, l).slice(0);
      }
      function l(t, e, n) {
        var i = e.dir,
          a = n && 'parentNode' === e.dir,
          r = F++;
        return e.first
          ? function (e, n, r) {
              for (; (e = e[i]); ) if (a || 1 === e.nodeType) return t(e, n, r);
            }
          : function (e, n, s) {
              if (s) {
                for (; (e = e[i]); ) if ((a || 1 === e.nodeType) && t(e, n, s)) return e;
              } else
                for (var o, l = E + ' ' + r + ' ', c = l + g; (e = e[i]); )
                  if (a || 1 === e.nodeType) {
                    if ((o = e[L]) === c) return e.sizset;
                    if ('string' == typeof o && 0 === o.indexOf(l)) {
                      if (e.sizset) return e;
                    } else {
                      if (((e[L] = c), t(e, n, s))) return (e.sizset = !0), e;
                      e.sizset = !1;
                    }
                  }
            };
      }
      function c(t) {
        return t.length > 1
          ? function (e, n, i) {
              for (var a = t.length; a--; ) if (!t[a](e, n, i)) return !1;
              return !0;
            }
          : t[0];
      }
      function d(t, e, n, i, a) {
        for (var r, s = [], o = 0, l = t.length, c = null != e; o < l; o++)
          (r = t[o]) && ((n && !n(r, i, a)) || (s.push(r), c && e.push(o)));
        return s;
      }
      function u(t, e, n, i, a, r) {
        return (
          i && !i[L] && (i = u(i)),
          a && !a[L] && (a = u(a, r)),
          B(function (r, s, o, l) {
            var c,
              u,
              p,
              f = [],
              v = [],
              m = s.length,
              g = r || h(e || '*', o.nodeType ? [o] : o, []),
              b = !t || (!r && e) ? g : d(g, f, t, o, l),
              y = n ? (a || (r ? t : m || i) ? [] : s) : b;
            if ((n && n(b, y, o, l), i)) for (c = d(y, v), i(c, [], o, l), u = c.length; u--; ) (p = c[u]) && (y[v[u]] = !(b[v[u]] = p));
            if (r) {
              if (a || t) {
                if (a) {
                  for (c = [], u = y.length; u--; ) (p = y[u]) && c.push((b[u] = p));
                  a(null, (y = []), c, l);
                }
                for (u = y.length; u--; ) (p = y[u]) && (c = a ? M.call(r, p) : f[u]) > -1 && (r[c] = !(s[c] = p));
              }
            } else (y = d(y === s ? y.splice(m, y.length) : y)), a ? a(null, s, y, l) : N.apply(s, y);
          })
        );
      }
      function p(t) {
        for (
          var e,
            n,
            i,
            a = t.length,
            r = y.relative[t[0].type],
            s = r || y.relative[' '],
            o = r ? 1 : 0,
            d = l(
              function (t) {
                return t === e;
              },
              s,
              !0
            ),
            f = l(
              function (t) {
                return M.call(e, t) > -1;
              },
              s,
              !0
            ),
            h = [
              function (t, n, i) {
                return (!r && (i || n !== A)) || ((e = n).nodeType ? d(t, n, i) : f(t, n, i));
              },
            ];
          o < a;
          o++
        )
          if ((n = y.relative[t[o].type])) h = [l(c(h), n)];
          else {
            if (((n = y.filter[t[o].type].apply(null, t[o].matches)), n[L])) {
              for (i = ++o; i < a && !y.relative[t[i].type]; i++);
              return u(
                o > 1 && c(h),
                o > 1 &&
                  t
                    .slice(0, o - 1)
                    .join('')
                    .replace(X, '$1'),
                n,
                o < i && p(t.slice(o, i)),
                i < a && p((t = t.slice(i))),
                i < a && t.join('')
              );
            }
            h.push(n);
          }
        return c(h);
      }
      function f(t, e) {
        var i = e.length > 0,
          a = t.length > 0,
          r = function (s, o, l, c, u) {
            var p,
              f,
              h,
              v = [],
              m = 0,
              b = '0',
              x = s && [],
              w = null != u,
              _ = A,
              k = s || (a && y.find.TAG('*', (u && o.parentNode) || o)),
              T = (E += null == _ ? 1 : Math.E);
            for (w && ((A = o !== I && o), (g = r.el)); null != (p = k[b]); b++) {
              if (a && p) {
                for (f = 0; (h = t[f]); f++)
                  if (h(p, o, l)) {
                    c.push(p);
                    break;
                  }
                w && ((E = T), (g = ++r.el));
              }
              i && ((p = !h && p) && m--, s && x.push(p));
            }
            if (((m += b), i && b !== m)) {
              for (f = 0; (h = e[f]); f++) h(x, v, o, l);
              if (s) {
                if (m > 0) for (; b--; ) !x[b] && !v[b] && (v[b] = j.call(c));
                v = d(v);
              }
              N.apply(c, v), w && !s && v.length > 0 && m + e.length > 1 && n.uniqueSort(c);
            }
            return w && ((E = T), (A = _)), x;
          };
        return (r.el = 0), i ? B(r) : r;
      }
      function h(t, e, i) {
        for (var a = 0, r = e.length; a < r; a++) n(t, e[a], i);
        return i;
      }
      function v(t, e, n, i, a) {
        var r,
          s,
          l,
          c,
          d,
          u = o(t);
        u.length;
        if (!i && 1 === u.length) {
          if (((s = u[0] = u[0].slice(0)), s.length > 2 && 'ID' === (l = s[0]).type && 9 === e.nodeType && !a && y.relative[s[1].type])) {
            if (!(e = y.find.ID(l.matches[0].replace(rt, ''), e, a)[0])) return n;
            t = t.slice(s.shift().length);
          }
          for (r = st.POS.test(t) ? -1 : s.length - 1; r >= 0 && ((l = s[r]), !y.relative[(c = l.type)]); r--)
            if ((d = y.find[c]) && (i = d(l.matches[0].replace(rt, ''), (nt.test(s[0].type) && e.parentNode) || e, a))) {
              if ((s.splice(r, 1), !(t = i.length && s.join('')))) return N.apply(n, O.call(i, 0)), n;
              break;
            }
        }
        return k(t, u)(i, e, a, n, nt.test(t)), n;
      }
      function m() {}
      var g,
        b,
        y,
        x,
        w,
        _,
        k,
        T,
        C,
        A,
        S = !0,
        $ = 'undefined',
        L = ('sizcache' + Math.random()).replace('.', ''),
        D = String,
        I = t.document,
        P = I.documentElement,
        E = 0,
        F = 0,
        j = [].pop,
        N = [].push,
        O = [].slice,
        M =
          [].indexOf ||
          function (t) {
            for (var e = 0, n = this.length; e < n; e++) if (this[e] === t) return e;
            return -1;
          },
        B = function (t, e) {
          return (t[L] = null == e || e), t;
        },
        R = function () {
          var t = {},
            e = [];
          return B(function (n, i) {
            return e.push(n) > y.cacheLength && delete t[e.shift()], (t[n + ' '] = i);
          }, t);
        },
        H = R(),
        q = R(),
        U = R(),
        z = '[\\x20\\t\\r\\n\\f]',
        V = '(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+',
        W = V.replace('w', 'w#'),
        Y = '\\[' + z + '*(' + V + ')' + z + '*(?:([*^$|!~]?=)' + z + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + W + ')|)|)' + z + '*\\]',
        J = ':(' + V + ')(?:\\((?:([\'"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:' + Y + ')|[^:]|\\\\.)*|.*))\\)|)',
        G = ':(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + z + '*((?:-\\d)?\\d*)' + z + '*\\)|)(?=[^-]|$)',
        X = new RegExp('^' + z + '+|((?:^|[^\\\\])(?:\\\\.)*)' + z + '+$', 'g'),
        K = new RegExp('^' + z + '*,' + z + '*'),
        Z = new RegExp('^' + z + '*([\\x20\\t\\r\\n\\f>+~])' + z + '*'),
        tt = new RegExp(J),
        et = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        nt = /[\x20\t\r\n\f]*[+~]/,
        it = /h\d/i,
        at = /input|select|textarea|button/i,
        rt = /\\(?!\\)/g,
        st = {
          ID: new RegExp('^#(' + V + ')'),
          CLASS: new RegExp('^\\.(' + V + ')'),
          NAME: new RegExp('^\\[name=[\'"]?(' + V + ')[\'"]?\\]'),
          TAG: new RegExp('^(' + V.replace('w', 'w*') + ')'),
          ATTR: new RegExp('^' + Y),
          PSEUDO: new RegExp('^' + J),
          POS: new RegExp(G, 'i'),
          CHILD: new RegExp(
            '^:(only|nth|first|last)-child(?:\\(' +
              z +
              '*(even|odd|(([+-]|)(\\d*)n|)' +
              z +
              '*(?:([+-]|)' +
              z +
              '*(\\d+)|))' +
              z +
              '*\\)|)',
            'i'
          ),
          needsContext: new RegExp('^' + z + '*[>+~]|' + G, 'i'),
        },
        ot = function (t) {
          var e = I.createElement('div');
          try {
            return t(e);
          } catch (t) {
            return !1;
          } finally {
            e = null;
          }
        },
        lt = ot(function (t) {
          return t.appendChild(I.createComment('')), !t.getElementsByTagName('*').length;
        }),
        ct = ot(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            t.firstChild && typeof t.firstChild.getAttribute !== $ && '#' === t.firstChild.getAttribute('href')
          );
        }),
        dt = ot(function (t) {
          t.innerHTML = '<select></select>';
          var e = typeof t.lastChild.getAttribute('multiple');
          return 'boolean' !== e && 'string' !== e;
        }),
        ut = ot(function (t) {
          return (
            (t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>"),
            !(!t.getElementsByClassName || !t.getElementsByClassName('e').length) &&
              ((t.lastChild.className = 'e'), 2 === t.getElementsByClassName('e').length)
          );
        }),
        pt = ot(function (t) {
          (t.id = L + 0), (t.innerHTML = "<a name='" + L + "'></a><div name='" + L + "'></div>"), P.insertBefore(t, P.firstChild);
          var e = I.getElementsByName && I.getElementsByName(L).length === 2 + I.getElementsByName(L + 0).length;
          return (b = !I.getElementById(L)), P.removeChild(t), e;
        });
      try {
        O.call(P.childNodes, 0)[0].nodeType;
      } catch (t) {
        O = function (t) {
          for (var e, n = []; (e = this[t]); t++) n.push(e);
          return n;
        };
      }
      (n.matches = function (t, e) {
        return n(t, null, null, e);
      }),
        (n.matchesSelector = function (t, e) {
          return n(e, null, null, [t]).length > 0;
        }),
        (x = n.getText =
          function (t) {
            var e,
              n = '',
              i = 0,
              a = t.nodeType;
            if (a) {
              if (1 === a || 9 === a || 11 === a) {
                if ('string' == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) n += x(t);
              } else if (3 === a || 4 === a) return t.nodeValue;
            } else for (; (e = t[i]); i++) n += x(e);
            return n;
          }),
        (w = n.isXML =
          function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && 'HTML' !== e.nodeName;
          }),
        (_ = n.contains =
          P.contains
            ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                  i = e && e.parentNode;
                return t === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i));
              }
            : P.compareDocumentPosition
            ? function (t, e) {
                return e && !!(16 & t.compareDocumentPosition(e));
              }
            : function (t, e) {
                for (; (e = e.parentNode); ) if (e === t) return !0;
                return !1;
              }),
        (n.attr = function (t, e) {
          var n,
            i = w(t);
          return (
            i || (e = e.toLowerCase()),
            (n = y.attrHandle[e])
              ? n(t)
              : i || dt
              ? t.getAttribute(e)
              : ((n = t.getAttributeNode(e)), n ? ('boolean' == typeof t[e] ? (t[e] ? e : null) : n.specified ? n.value : null) : null)
          );
        }),
        (y = n.selectors =
          {
            cacheLength: 50,
            createPseudo: B,
            match: st,
            attrHandle: ct
              ? {}
              : {
                  href: function (t) {
                    return t.getAttribute('href', 2);
                  },
                  type: function (t) {
                    return t.getAttribute('type');
                  },
                },
            find: {
              ID: b
                ? function (t, e, n) {
                    if (typeof e.getElementById !== $ && !n) {
                      var i = e.getElementById(t);
                      return i && i.parentNode ? [i] : [];
                    }
                  }
                : function (t, e, n) {
                    if (typeof e.getElementById !== $ && !n) {
                      var i = e.getElementById(t);
                      return i
                        ? i.id === t || (typeof i.getAttributeNode !== $ && i.getAttributeNode('id').value === t)
                          ? [i]
                          : void 0
                        : [];
                    }
                  },
              TAG: lt
                ? function (t, e) {
                    if (typeof e.getElementsByTagName !== $) return e.getElementsByTagName(t);
                  }
                : function (t, e) {
                    var n = e.getElementsByTagName(t);
                    if ('*' === t) {
                      for (var i, a = [], r = 0; (i = n[r]); r++) 1 === i.nodeType && a.push(i);
                      return a;
                    }
                    return n;
                  },
              NAME:
                pt &&
                function (t, e) {
                  if (typeof e.getElementsByName !== $) return e.getElementsByName(name);
                },
              CLASS:
                ut &&
                function (t, e, n) {
                  if (typeof e.getElementsByClassName !== $ && !n) return e.getElementsByClassName(t);
                },
            },
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' },
            },
            preFilter: {
              ATTR: function (t) {
                return (
                  (t[1] = t[1].replace(rt, '')),
                  (t[3] = (t[4] || t[5] || '').replace(rt, '')),
                  '~=' === t[2] && (t[3] = ' ' + t[3] + ' '),
                  t.slice(0, 4)
                );
              },
              CHILD: function (t) {
                return (
                  (t[1] = t[1].toLowerCase()),
                  'nth' === t[1]
                    ? (t[2] || n.error(t[0]),
                      (t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ('even' === t[2] || 'odd' === t[2]))),
                      (t[4] = +(t[6] + t[7] || 'odd' === t[2])))
                    : t[2] && n.error(t[0]),
                  t
                );
              },
              PSEUDO: function (t) {
                var e, n;
                return st.CHILD.test(t[0])
                  ? null
                  : (t[3]
                      ? (t[2] = t[3])
                      : (e = t[4]) &&
                        (tt.test(e) &&
                          (n = o(e, !0)) &&
                          (n = e.indexOf(')', e.length - n) - e.length) &&
                          ((e = e.slice(0, n)), (t[0] = t[0].slice(0, n))),
                        (t[2] = e)),
                    t.slice(0, 3));
              },
            },
            filter: {
              ID: b
                ? function (t) {
                    return (
                      (t = t.replace(rt, '')),
                      function (e) {
                        return e.getAttribute('id') === t;
                      }
                    );
                  }
                : function (t) {
                    return (
                      (t = t.replace(rt, '')),
                      function (e) {
                        var n = typeof e.getAttributeNode !== $ && e.getAttributeNode('id');
                        return n && n.value === t;
                      }
                    );
                  },
              TAG: function (t) {
                return '*' === t
                  ? function () {
                      return !0;
                    }
                  : ((t = t.replace(rt, '').toLowerCase()),
                    function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    });
              },
              CLASS: function (t) {
                var e = H[L][t + ' '];
                return (
                  e ||
                  ((e = new RegExp('(^|' + z + ')' + t + '(' + z + '|$)')) &&
                    H(t, function (t) {
                      return e.test(t.className || (typeof t.getAttribute !== $ && t.getAttribute('class')) || '');
                    }))
                );
              },
              ATTR: function (t, e, i) {
                return function (a, r) {
                  var s = n.attr(a, t);
                  return null == s
                    ? '!=' === e
                    : !e ||
                        ((s += ''),
                        '=' === e
                          ? s === i
                          : '!=' === e
                          ? s !== i
                          : '^=' === e
                          ? i && 0 === s.indexOf(i)
                          : '*=' === e
                          ? i && s.indexOf(i) > -1
                          : '$=' === e
                          ? i && s.substr(s.length - i.length) === i
                          : '~=' === e
                          ? (' ' + s + ' ').indexOf(i) > -1
                          : '|=' === e && (s === i || s.substr(0, i.length + 1) === i + '-'));
                };
              },
              CHILD: function (t, e, n, i) {
                return 'nth' === t
                  ? function (t) {
                      var e,
                        a,
                        r = t.parentNode;
                      if (1 === n && 0 === i) return !0;
                      if (r) for (a = 0, e = r.firstChild; e && (1 !== e.nodeType || (a++, t !== e)); e = e.nextSibling);
                      return (a -= i) === n || (a % n == 0 && a / n >= 0);
                    }
                  : function (e) {
                      var n = e;
                      switch (t) {
                        case 'only':
                        case 'first':
                          for (; (n = n.previousSibling); ) if (1 === n.nodeType) return !1;
                          if ('first' === t) return !0;
                          n = e;
                        case 'last':
                          for (; (n = n.nextSibling); ) if (1 === n.nodeType) return !1;
                          return !0;
                      }
                    };
              },
              PSEUDO: function (t, e) {
                var i,
                  a = y.pseudos[t] || y.setFilters[t.toLowerCase()] || n.error('unsupported pseudo: ' + t);
                return a[L]
                  ? a(e)
                  : a.length > 1
                  ? ((i = [t, t, '', e]),
                    y.setFilters.hasOwnProperty(t.toLowerCase())
                      ? B(function (t, n) {
                          for (var i, r = a(t, e), s = r.length; s--; ) (i = M.call(t, r[s])), (t[i] = !(n[i] = r[s]));
                        })
                      : function (t) {
                          return a(t, 0, i);
                        })
                  : a;
              },
            },
            pseudos: {
              not: B(function (t) {
                var e = [],
                  n = [],
                  i = k(t.replace(X, '$1'));
                return i[L]
                  ? B(function (t, e, n, a) {
                      for (var r, s = i(t, null, a, []), o = t.length; o--; ) (r = s[o]) && (t[o] = !(e[o] = r));
                    })
                  : function (t, a, r) {
                      return (e[0] = t), i(e, null, r, n), !n.pop();
                    };
              }),
              has: B(function (t) {
                return function (e) {
                  return n(t, e).length > 0;
                };
              }),
              contains: B(function (t) {
                return function (e) {
                  return (e.textContent || e.innerText || x(e)).indexOf(t) > -1;
                };
              }),
              enabled: function (t) {
                return !1 === t.disabled;
              },
              disabled: function (t) {
                return !0 === t.disabled;
              },
              checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return ('input' === e && !!t.checked) || ('option' === e && !!t.selected);
              },
              selected: function (t) {
                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
              },
              parent: function (t) {
                return !y.pseudos.empty(t);
              },
              empty: function (t) {
                var e;
                for (t = t.firstChild; t; ) {
                  if (t.nodeName > '@' || 3 === (e = t.nodeType) || 4 === e) return !1;
                  t = t.nextSibling;
                }
                return !0;
              },
              header: function (t) {
                return it.test(t.nodeName);
              },
              text: function (t) {
                var e, n;
                return (
                  'input' === t.nodeName.toLowerCase() &&
                  'text' === (e = t.type) &&
                  (null == (n = t.getAttribute('type')) || n.toLowerCase() === e)
                );
              },
              radio: i('radio'),
              checkbox: i('checkbox'),
              file: i('file'),
              password: i('password'),
              image: i('image'),
              submit: a('submit'),
              reset: a('reset'),
              button: function (t) {
                var e = t.nodeName.toLowerCase();
                return ('input' === e && 'button' === t.type) || 'button' === e;
              },
              input: function (t) {
                return at.test(t.nodeName);
              },
              focus: function (t) {
                var e = t.ownerDocument;
                return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
              },
              active: function (t) {
                return t === t.ownerDocument.activeElement;
              },
              first: r(function () {
                return [0];
              }),
              last: r(function (t, e) {
                return [e - 1];
              }),
              eq: r(function (t, e, n) {
                return [n < 0 ? n + e : n];
              }),
              even: r(function (t, e) {
                for (var n = 0; n < e; n += 2) t.push(n);
                return t;
              }),
              odd: r(function (t, e) {
                for (var n = 1; n < e; n += 2) t.push(n);
                return t;
              }),
              lt: r(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; --i >= 0; ) t.push(i);
                return t;
              }),
              gt: r(function (t, e, n) {
                for (var i = n < 0 ? n + e : n; ++i < e; ) t.push(i);
                return t;
              }),
            },
          }),
        (T = P.compareDocumentPosition
          ? function (t, e) {
              return t === e
                ? ((C = !0), 0)
                : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition)
                ? -1
                : 1;
            }
          : function (t, e) {
              if (t === e) return (C = !0), 0;
              if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
              var n,
                i,
                a = [],
                r = [],
                o = t.parentNode,
                l = e.parentNode,
                c = o;
              if (o === l) return s(t, e);
              if (!o) return -1;
              if (!l) return 1;
              for (; c; ) a.unshift(c), (c = c.parentNode);
              for (c = l; c; ) r.unshift(c), (c = c.parentNode);
              (n = a.length), (i = r.length);
              for (var d = 0; d < n && d < i; d++) if (a[d] !== r[d]) return s(a[d], r[d]);
              return d === n ? s(t, r[d], -1) : s(a[d], e, 1);
            }),
        [0, 0].sort(T),
        (S = !C),
        (n.uniqueSort = function (t) {
          var e,
            n = [],
            i = 1,
            a = 0;
          if (((C = S), t.sort(T), C)) {
            for (; (e = t[i]); i++) e === t[i - 1] && (a = n.push(i));
            for (; a--; ) t.splice(n[a], 1);
          }
          return t;
        }),
        (n.error = function (t) {
          throw new Error('Syntax error, unrecognized expression: ' + t);
        }),
        (k = n.compile =
          function (t, e) {
            var n,
              i = [],
              a = [],
              r = U[L][t + ' '];
            if (!r) {
              for (e || (e = o(t)), n = e.length; n--; ) (r = p(e[n])), r[L] ? i.push(r) : a.push(r);
              r = U(t, f(a, i));
            }
            return r;
          }),
        I.querySelectorAll &&
          (function () {
            var t,
              e = v,
              i = /'|\\/g,
              a = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              r = [':focus'],
              s = [':active'],
              l = P.matchesSelector || P.mozMatchesSelector || P.webkitMatchesSelector || P.oMatchesSelector || P.msMatchesSelector;
            ot(function (t) {
              (t.innerHTML = "<select><option selected=''></option></select>"),
                t.querySelectorAll('[selected]').length ||
                  r.push('\\[' + z + '*(?:checked|disabled|ismap|multiple|readonly|selected|value)'),
                t.querySelectorAll(':checked').length || r.push(':checked');
            }),
              ot(function (t) {
                (t.innerHTML = "<p test=''></p>"),
                  t.querySelectorAll("[test^='']").length && r.push('[*^$]=' + z + '*(?:""|\'\')'),
                  (t.innerHTML = "<input type='hidden'/>"),
                  t.querySelectorAll(':enabled').length || r.push(':enabled', ':disabled');
              }),
              (r = new RegExp(r.join('|'))),
              (v = function (t, n, a, s, l) {
                if (!s && !l && !r.test(t)) {
                  var c,
                    d,
                    u = !0,
                    p = L,
                    f = n,
                    h = 9 === n.nodeType && t;
                  if (1 === n.nodeType && 'object' !== n.nodeName.toLowerCase()) {
                    for (
                      c = o(t),
                        (u = n.getAttribute('id')) ? (p = u.replace(i, '\\$&')) : n.setAttribute('id', p),
                        p = "[id='" + p + "'] ",
                        d = c.length;
                      d--;

                    )
                      c[d] = p + c[d].join('');
                    (f = (nt.test(t) && n.parentNode) || n), (h = c.join(','));
                  }
                  if (h)
                    try {
                      return N.apply(a, O.call(f.querySelectorAll(h), 0)), a;
                    } catch (t) {
                    } finally {
                      u || n.removeAttribute('id');
                    }
                }
                return e(t, n, a, s, l);
              }),
              l &&
                (ot(function (e) {
                  t = l.call(e, 'div');
                  try {
                    l.call(e, "[test!='']:sizzle"), s.push('!=', J);
                  } catch (t) {}
                }),
                (s = new RegExp(s.join('|'))),
                (n.matchesSelector = function (e, i) {
                  if (((i = i.replace(a, "='$1']")), !w(e) && !s.test(i) && !r.test(i)))
                    try {
                      var o = l.call(e, i);
                      if (o || t || (e.document && 11 !== e.document.nodeType)) return o;
                    } catch (t) {}
                  return n(i, null, null, [e]).length > 0;
                }));
          })(),
        (y.pseudos.nth = y.pseudos.eq),
        (y.filters = m.prototype = y.pseudos),
        (y.setFilters = new m()),
        (n.attr = Q.attr),
        (Q.find = n),
        (Q.expr = n.selectors),
        (Q.expr[':'] = Q.expr.pseudos),
        (Q.unique = n.uniqueSort),
        (Q.text = n.getText),
        (Q.isXMLDoc = n.isXML),
        (Q.contains = n.contains);
    })(t);
  var Ft = /Until$/,
    jt = /^(?:parents|prev(?:Until|All))/,
    Nt = /^.[^:#\[\.,]*$/,
    Ot = Q.expr.match.needsContext,
    Mt = { children: !0, contents: !0, next: !0, prev: !0 };
  Q.fn.extend({
    find: function (t) {
      var e,
        n,
        i,
        a,
        r,
        s,
        o = this;
      if ('string' != typeof t)
        return Q(t).filter(function () {
          for (e = 0, n = o.length; e < n; e++) if (Q.contains(o[e], this)) return !0;
        });
      for (s = this.pushStack('', 'find', t), e = 0, n = this.length; e < n; e++)
        if (((i = s.length), Q.find(t, this[e], s), e > 0))
          for (a = i; a < s.length; a++)
            for (r = 0; r < i; r++)
              if (s[r] === s[a]) {
                s.splice(a--, 1);
                break;
              }
      return s;
    },
    has: function (t) {
      var e,
        n = Q(t, this),
        i = n.length;
      return this.filter(function () {
        for (e = 0; e < i; e++) if (Q.contains(this, n[e])) return !0;
      });
    },
    not: function (t) {
      return this.pushStack(c(this, t, !1), 'not', t);
    },
    filter: function (t) {
      return this.pushStack(c(this, t, !0), 'filter', t);
    },
    is: function (t) {
      return (
        !!t &&
        ('string' == typeof t
          ? Ot.test(t)
            ? Q(t, this.context).index(this[0]) >= 0
            : Q.filter(t, this).length > 0
          : this.filter(t).length > 0)
      );
    },
    closest: function (t, e) {
      for (var n, i = 0, a = this.length, r = [], s = Ot.test(t) || 'string' != typeof t ? Q(t, e || this.context) : 0; i < a; i++)
        for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType; ) {
          if (s ? s.index(n) > -1 : Q.find.matchesSelector(n, t)) {
            r.push(n);
            break;
          }
          n = n.parentNode;
        }
      return (r = r.length > 1 ? Q.unique(r) : r), this.pushStack(r, 'closest', t);
    },
    index: function (t) {
      return t
        ? 'string' == typeof t
          ? Q.inArray(this[0], Q(t))
          : Q.inArray(t.jquery ? t[0] : t, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (t, e) {
      var n = 'string' == typeof t ? Q(t, e) : Q.makeArray(t && t.nodeType ? [t] : t),
        i = Q.merge(this.get(), n);
      return this.pushStack(o(n[0]) || o(i[0]) ? i : Q.unique(i));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    (Q.fn.andSelf = Q.fn.addBack),
    Q.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return Q.dir(t, 'parentNode');
        },
        parentsUntil: function (t, e, n) {
          return Q.dir(t, 'parentNode', n);
        },
        next: function (t) {
          return l(t, 'nextSibling');
        },
        prev: function (t) {
          return l(t, 'previousSibling');
        },
        nextAll: function (t) {
          return Q.dir(t, 'nextSibling');
        },
        prevAll: function (t) {
          return Q.dir(t, 'previousSibling');
        },
        nextUntil: function (t, e, n) {
          return Q.dir(t, 'nextSibling', n);
        },
        prevUntil: function (t, e, n) {
          return Q.dir(t, 'previousSibling', n);
        },
        siblings: function (t) {
          return Q.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return Q.sibling(t.firstChild);
        },
        contents: function (t) {
          return Q.nodeName(t, 'iframe') ? t.contentDocument || t.contentWindow.document : Q.merge([], t.childNodes);
        },
      },
      function (t, e) {
        Q.fn[t] = function (n, i) {
          var a = Q.map(this, e, n);
          return (
            Ft.test(t) || (i = n),
            i && 'string' == typeof i && (a = Q.filter(i, a)),
            (a = this.length > 1 && !Mt[t] ? Q.unique(a) : a),
            this.length > 1 && jt.test(t) && (a = a.reverse()),
            this.pushStack(a, t, Y.call(arguments).join(','))
          );
        };
      }
    ),
    Q.extend({
      filter: function (t, e, n) {
        return n && (t = ':not(' + t + ')'), 1 === e.length ? (Q.find.matchesSelector(e[0], t) ? [e[0]] : []) : Q.find.matches(t, e);
      },
      dir: function (t, n, i) {
        for (var a = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !Q(r).is(i)); )
          1 === r.nodeType && a.push(r), (r = r[n]);
        return a;
      },
      sibling: function (t, e) {
        for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
        return n;
      },
    });
  var Bt =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    Rt = / jQuery\d+="(?:null|\d+)"/g,
    Ht = /^\s+/,
    qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Ut = /<([\w:]+)/,
    zt = /<tbody/i,
    Vt = /<|&#?\w+;/,
    Wt = /<(?:script|style|link)/i,
    Yt = /<(?:script|object|embed|option|style)/i,
    Jt = new RegExp('<(?:' + Bt + ')[\\s/>]', 'i'),
    Gt = /^(?:checkbox|radio)$/,
    Xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Kt = /\/(java|ecma)script/i,
    Qt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    Zt = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      area: [1, '<map>', '</map>'],
      _default: [0, '', ''],
    },
    te = d(H),
    ee = te.appendChild(H.createElement('div'));
  (Zt.optgroup = Zt.option),
    (Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead),
    (Zt.th = Zt.td),
    Q.support.htmlSerialize || (Zt._default = [1, 'X<div>', '</div>']),
    Q.fn.extend({
      text: function (t) {
        return Q.access(
          this,
          function (t) {
            return t === e ? Q.text(this) : this.empty().append(((this[0] && this[0].ownerDocument) || H).createTextNode(t));
          },
          null,
          t,
          arguments.length
        );
      },
      wrapAll: function (t) {
        if (Q.isFunction(t))
          return this.each(function (e) {
            Q(this).wrapAll(t.call(this, e));
          });
        if (this[0]) {
          var e = Q(t, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; ) t = t.firstChild;
                return t;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (t) {
        return Q.isFunction(t)
          ? this.each(function (e) {
              Q(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = Q(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = Q.isFunction(t);
        return this.each(function (n) {
          Q(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            Q.nodeName(this, 'body') || Q(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (t) {
          (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(t);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (t) {
          (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(t, this.firstChild);
        });
      },
      before: function () {
        if (!o(this[0]))
          return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this);
          });
        if (arguments.length) {
          var t = Q.clean(arguments);
          return this.pushStack(Q.merge(t, this), 'before', this.selector);
        }
      },
      after: function () {
        if (!o(this[0]))
          return this.domManip(arguments, !1, function (t) {
            this.parentNode.insertBefore(t, this.nextSibling);
          });
        if (arguments.length) {
          var t = Q.clean(arguments);
          return this.pushStack(Q.merge(this, t), 'after', this.selector);
        }
      },
      remove: function (t, e) {
        for (var n, i = 0; null != (n = this[i]); i++)
          (t && !Q.filter(t, [n]).length) ||
            (!e && 1 === n.nodeType && (Q.cleanData(n.getElementsByTagName('*')), Q.cleanData([n])),
            n.parentNode && n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          for (1 === t.nodeType && Q.cleanData(t.getElementsByTagName('*')); t.firstChild; ) t.removeChild(t.firstChild);
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return Q.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return Q.access(
          this,
          function (t) {
            var n = this[0] || {},
              i = 0,
              a = this.length;
            if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Rt, '') : e;
            if (
              'string' == typeof t &&
              !Wt.test(t) &&
              (Q.support.htmlSerialize || !Jt.test(t)) &&
              (Q.support.leadingWhitespace || !Ht.test(t)) &&
              !Zt[(Ut.exec(t) || ['', ''])[1].toLowerCase()]
            ) {
              t = t.replace(qt, '<$1></$2>');
              try {
                for (; i < a; i++) (n = this[i] || {}), 1 === n.nodeType && (Q.cleanData(n.getElementsByTagName('*')), (n.innerHTML = t));
                n = 0;
              } catch (t) {}
            }
            n && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function (t) {
        return o(this[0])
          ? this.length
            ? this.pushStack(Q(Q.isFunction(t) ? t() : t), 'replaceWith', t)
            : this
          : Q.isFunction(t)
          ? this.each(function (e) {
              var n = Q(this),
                i = n.html();
              n.replaceWith(t.call(this, e, i));
            })
          : ('string' != typeof t && (t = Q(t).detach()),
            this.each(function () {
              var e = this.nextSibling,
                n = this.parentNode;
              Q(this).remove(), e ? Q(e).before(t) : Q(n).append(t);
            }));
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, n, i) {
        t = [].concat.apply([], t);
        var a,
          r,
          s,
          o,
          l = 0,
          c = t[0],
          d = [],
          p = this.length;
        if (!Q.support.checkClone && p > 1 && 'string' == typeof c && Xt.test(c))
          return this.each(function () {
            Q(this).domManip(t, n, i);
          });
        if (Q.isFunction(c))
          return this.each(function (a) {
            var r = Q(this);
            (t[0] = c.call(this, a, n ? r.html() : e)), r.domManip(t, n, i);
          });
        if (this[0]) {
          if (((a = Q.buildFragment(t, this, d)), (s = a.fragment), (r = s.firstChild), 1 === s.childNodes.length && (s = r), r))
            for (n = n && Q.nodeName(r, 'tr'), o = a.cacheable || p - 1; l < p; l++)
              i.call(n && Q.nodeName(this[l], 'table') ? u(this[l], 'tbody') : this[l], l === o ? s : Q.clone(s, !0, !0));
          (s = r = null),
            d.length &&
              Q.each(d, function (t, e) {
                e.src
                  ? Q.ajax
                    ? Q.ajax({ url: e.src, type: 'GET', dataType: 'script', async: !1, global: !1, throws: !0 })
                    : Q.error('no ajax')
                  : Q.globalEval((e.text || e.textContent || e.innerHTML || '').replace(Qt, '')),
                  e.parentNode && e.parentNode.removeChild(e);
              });
        }
        return this;
      },
    }),
    (Q.buildFragment = function (t, n, i) {
      var a,
        r,
        s,
        o = t[0];
      return (
        (n = n || H),
        (n = (!n.nodeType && n[0]) || n),
        (n = n.ownerDocument || n),
        1 === t.length &&
          'string' == typeof o &&
          o.length < 512 &&
          n === H &&
          '<' === o.charAt(0) &&
          !Yt.test(o) &&
          (Q.support.checkClone || !Xt.test(o)) &&
          (Q.support.html5Clone || !Jt.test(o)) &&
          ((r = !0), (a = Q.fragments[o]), (s = a !== e)),
        a || ((a = n.createDocumentFragment()), Q.clean(t, n, a, i), r && (Q.fragments[o] = s && a)),
        { fragment: a, cacheable: r }
      );
    }),
    (Q.fragments = {}),
    Q.each(
      { appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' },
      function (t, e) {
        Q.fn[t] = function (n) {
          var i,
            a = 0,
            r = [],
            s = Q(n),
            o = s.length,
            l = 1 === this.length && this[0].parentNode;
          if ((null == l || (l && 11 === l.nodeType && 1 === l.childNodes.length)) && 1 === o) return s[e](this[0]), this;
          for (; a < o; a++) (i = (a > 0 ? this.clone(!0) : this).get()), Q(s[a])[e](i), (r = r.concat(i));
          return this.pushStack(r, t, s.selector);
        };
      }
    ),
    Q.extend({
      clone: function (t, e, n) {
        var i, a, r, s;
        if (
          (Q.support.html5Clone || Q.isXMLDoc(t) || !Jt.test('<' + t.nodeName + '>')
            ? (s = t.cloneNode(!0))
            : ((ee.innerHTML = t.outerHTML), ee.removeChild((s = ee.firstChild))),
          !((Q.support.noCloneEvent && Q.support.noCloneChecked) || (1 !== t.nodeType && 11 !== t.nodeType) || Q.isXMLDoc(t)))
        )
          for (f(t, s), i = h(t), a = h(s), r = 0; i[r]; ++r) a[r] && f(i[r], a[r]);
        if (e && (p(t, s), n)) for (i = h(t), a = h(s), r = 0; i[r]; ++r) p(i[r], a[r]);
        return (i = a = null), s;
      },
      clean: function (t, e, n, i) {
        var a,
          r,
          s,
          o,
          l,
          c,
          u,
          p,
          f,
          h,
          m,
          g = e === H && te,
          b = [];
        for ((e && void 0 !== e.createDocumentFragment) || (e = H), a = 0; null != (s = t[a]); a++)
          if (('number' == typeof s && (s += ''), s)) {
            if ('string' == typeof s)
              if (Vt.test(s)) {
                for (
                  g = g || d(e),
                    u = e.createElement('div'),
                    g.appendChild(u),
                    s = s.replace(qt, '<$1></$2>'),
                    o = (Ut.exec(s) || ['', ''])[1].toLowerCase(),
                    l = Zt[o] || Zt._default,
                    c = l[0],
                    u.innerHTML = l[1] + s + l[2];
                  c--;

                )
                  u = u.lastChild;
                if (!Q.support.tbody)
                  for (
                    p = zt.test(s),
                      f = 'table' !== o || p ? ('<table>' !== l[1] || p ? [] : u.childNodes) : u.firstChild && u.firstChild.childNodes,
                      r = f.length - 1;
                    r >= 0;
                    --r
                  )
                    Q.nodeName(f[r], 'tbody') && !f[r].childNodes.length && f[r].parentNode.removeChild(f[r]);
                !Q.support.leadingWhitespace && Ht.test(s) && u.insertBefore(e.createTextNode(Ht.exec(s)[0]), u.firstChild),
                  (s = u.childNodes),
                  u.parentNode.removeChild(u);
              } else s = e.createTextNode(s);
            s.nodeType ? b.push(s) : Q.merge(b, s);
          }
        if ((u && (s = u = g = null), !Q.support.appendChecked))
          for (a = 0; null != (s = b[a]); a++)
            Q.nodeName(s, 'input') ? v(s) : void 0 !== s.getElementsByTagName && Q.grep(s.getElementsByTagName('input'), v);
        if (n)
          for (
            h = function (t) {
              if (!t.type || Kt.test(t.type)) return i ? i.push(t.parentNode ? t.parentNode.removeChild(t) : t) : n.appendChild(t);
            },
              a = 0;
            null != (s = b[a]);
            a++
          )
            (Q.nodeName(s, 'script') && h(s)) ||
              (n.appendChild(s),
              void 0 !== s.getElementsByTagName &&
                ((m = Q.grep(Q.merge([], s.getElementsByTagName('script')), h)), b.splice.apply(b, [a + 1, 0].concat(m)), (a += m.length)));
        return b;
      },
      cleanData: function (t, e) {
        for (var n, i, a, r, s = 0, o = Q.expando, l = Q.cache, c = Q.support.deleteExpando, d = Q.event.special; null != (a = t[s]); s++)
          if ((e || Q.acceptData(a)) && ((i = a[o]), (n = i && l[i]))) {
            if (n.events) for (r in n.events) d[r] ? Q.event.remove(a, r) : Q.removeEvent(a, r, n.handle);
            l[i] && (delete l[i], c ? delete a[o] : a.removeAttribute ? a.removeAttribute(o) : (a[o] = null), Q.deletedIds.push(i));
          }
      },
    }),
    (function () {
      var t, e;
      (Q.uaMatch = function (t) {
        t = t.toLowerCase();
        var e =
          /(chrome)[ \/]([\w.]+)/.exec(t) ||
          /(webkit)[ \/]([\w.]+)/.exec(t) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) ||
          /(msie) ([\w.]+)/.exec(t) ||
          (t.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)) ||
          [];
        return { browser: e[1] || '', version: e[2] || '0' };
      }),
        (t = Q.uaMatch(U.userAgent)),
        (e = {}),
        t.browser && ((e[t.browser] = !0), (e.version = t.version)),
        e.chrome ? (e.webkit = !0) : e.webkit && (e.safari = !0),
        (Q.browser = e),
        (Q.sub = function () {
          function t(e, n) {
            return new t.fn.init(e, n);
          }
          Q.extend(!0, t, this),
            (t.superclass = this),
            (t.fn = t.prototype = this()),
            (t.fn.constructor = t),
            (t.sub = this.sub),
            (t.fn.init = function (n, i) {
              return i && i instanceof Q && !(i instanceof t) && (i = t(i)), Q.fn.init.call(this, n, i, e);
            }),
            (t.fn.init.prototype = t.fn);
          var e = t(H);
          return t;
        });
    })();
  var ne,
    ie,
    ae,
    re = /alpha\([^)]*\)/i,
    se = /opacity=([^)]*)/,
    oe = /^(top|right|bottom|left)$/,
    le = /^(none|table(?!-c[ea]).+)/,
    ce = /^margin/,
    de = new RegExp('^(' + Z + ')(.*)$', 'i'),
    ue = new RegExp('^(' + Z + ')(?!px)[a-z%]+$', 'i'),
    pe = new RegExp('^([-+])=(' + Z + ')', 'i'),
    fe = { BODY: 'block' },
    he = { position: 'absolute', visibility: 'hidden', display: 'block' },
    ve = { letterSpacing: 0, fontWeight: 400 },
    me = ['Top', 'Right', 'Bottom', 'Left'],
    ge = ['Webkit', 'O', 'Moz', 'ms'],
    be = Q.fn.toggle;
  Q.fn.extend({
    css: function (t, n) {
      return Q.access(
        this,
        function (t, n, i) {
          return i !== e ? Q.style(t, n, i) : Q.css(t, n);
        },
        t,
        n,
        arguments.length > 1
      );
    },
    show: function () {
      return b(this, !0);
    },
    hide: function () {
      return b(this);
    },
    toggle: function (t, e) {
      var n = 'boolean' == typeof t;
      return Q.isFunction(t) && Q.isFunction(e)
        ? be.apply(this, arguments)
        : this.each(function () {
            (n ? t : g(this)) ? Q(this).show() : Q(this).hide();
          });
    },
  }),
    Q.extend({
      cssHooks: {
        opacity: {
          get: function (t, e) {
            if (e) {
              var n = ne(t, 'opacity');
              return '' === n ? '1' : n;
            }
          },
        },
      },
      cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
      cssProps: { float: Q.support.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function (t, n, i, a) {
        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
          var r,
            s,
            o,
            l = Q.camelCase(n),
            c = t.style;
          if (((n = Q.cssProps[l] || (Q.cssProps[l] = m(c, l))), (o = Q.cssHooks[n] || Q.cssHooks[l]), i === e))
            return o && 'get' in o && (r = o.get(t, !1, a)) !== e ? r : c[n];
          if (
            ('string' === (s = typeof i) && (r = pe.exec(i)) && ((i = (r[1] + 1) * r[2] + parseFloat(Q.css(t, n))), (s = 'number')),
            !(
              null == i ||
              ('number' === s && isNaN(i)) ||
              ('number' === s && !Q.cssNumber[l] && (i += 'px'), o && 'set' in o && (i = o.set(t, i, a)) === e)
            ))
          )
            try {
              c[n] = i;
            } catch (t) {}
        }
      },
      css: function (t, n, i, a) {
        var r,
          s,
          o,
          l = Q.camelCase(n);
        return (
          (n = Q.cssProps[l] || (Q.cssProps[l] = m(t.style, l))),
          (o = Q.cssHooks[n] || Q.cssHooks[l]),
          o && 'get' in o && (r = o.get(t, !0, a)),
          r === e && (r = ne(t, n)),
          'normal' === r && n in ve && (r = ve[n]),
          i || a !== e ? ((s = parseFloat(r)), i || Q.isNumeric(s) ? s || 0 : r) : r
        );
      },
      swap: function (t, e, n) {
        var i,
          a,
          r = {};
        for (a in e) (r[a] = t.style[a]), (t.style[a] = e[a]);
        i = n.call(t);
        for (a in e) t.style[a] = r[a];
        return i;
      },
    }),
    t.getComputedStyle
      ? (ne = function (e, n) {
          var i,
            a,
            r,
            s,
            o = t.getComputedStyle(e, null),
            l = e.style;
          return (
            o &&
              ((i = o.getPropertyValue(n) || o[n]),
              '' === i && !Q.contains(e.ownerDocument, e) && (i = Q.style(e, n)),
              ue.test(i) &&
                ce.test(n) &&
                ((a = l.width),
                (r = l.minWidth),
                (s = l.maxWidth),
                (l.minWidth = l.maxWidth = l.width = i),
                (i = o.width),
                (l.width = a),
                (l.minWidth = r),
                (l.maxWidth = s))),
            i
          );
        })
      : H.documentElement.currentStyle &&
        (ne = function (t, e) {
          var n,
            i,
            a = t.currentStyle && t.currentStyle[e],
            r = t.style;
          return (
            null == a && r && r[e] && (a = r[e]),
            ue.test(a) &&
              !oe.test(e) &&
              ((n = r.left),
              (i = t.runtimeStyle && t.runtimeStyle.left),
              i && (t.runtimeStyle.left = t.currentStyle.left),
              (r.left = 'fontSize' === e ? '1em' : a),
              (a = r.pixelLeft + 'px'),
              (r.left = n),
              i && (t.runtimeStyle.left = i)),
            '' === a ? 'auto' : a
          );
        }),
    Q.each(['height', 'width'], function (t, e) {
      Q.cssHooks[e] = {
        get: function (t, n, i) {
          if (n)
            return 0 === t.offsetWidth && le.test(ne(t, 'display'))
              ? Q.swap(t, he, function () {
                  return w(t, e, i);
                })
              : w(t, e, i);
        },
        set: function (t, n, i) {
          return y(t, n, i ? x(t, e, i, Q.support.boxSizing && 'border-box' === Q.css(t, 'boxSizing')) : 0);
        },
      };
    }),
    Q.support.opacity ||
      (Q.cssHooks.opacity = {
        get: function (t, e) {
          return se.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || '')
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : e
            ? '1'
            : '';
        },
        set: function (t, e) {
          var n = t.style,
            i = t.currentStyle,
            a = Q.isNumeric(e) ? 'alpha(opacity=' + 100 * e + ')' : '',
            r = (i && i.filter) || n.filter || '';
          (n.zoom = 1),
            (e >= 1 && '' === Q.trim(r.replace(re, '')) && n.removeAttribute && (n.removeAttribute('filter'), i && !i.filter)) ||
              (n.filter = re.test(r) ? r.replace(re, a) : r + ' ' + a);
        },
      }),
    Q(function () {
      Q.support.reliableMarginRight ||
        (Q.cssHooks.marginRight = {
          get: function (t, e) {
            return Q.swap(t, { display: 'inline-block' }, function () {
              if (e) return ne(t, 'marginRight');
            });
          },
        }),
        !Q.support.pixelPosition &&
          Q.fn.position &&
          Q.each(['top', 'left'], function (t, e) {
            Q.cssHooks[e] = {
              get: function (t, n) {
                if (n) {
                  var i = ne(t, e);
                  return ue.test(i) ? Q(t).position()[e] + 'px' : i;
                }
              },
            };
          });
    }),
    Q.expr &&
      Q.expr.filters &&
      ((Q.expr.filters.hidden = function (t) {
        return (
          (0 === t.offsetWidth && 0 === t.offsetHeight) ||
          (!Q.support.reliableHiddenOffsets && 'none' === ((t.style && t.style.display) || ne(t, 'display')))
        );
      }),
      (Q.expr.filters.visible = function (t) {
        return !Q.expr.filters.hidden(t);
      })),
    Q.each({ margin: '', padding: '', border: 'Width' }, function (t, e) {
      (Q.cssHooks[t + e] = {
        expand: function (n) {
          var i,
            a = 'string' == typeof n ? n.split(' ') : [n],
            r = {};
          for (i = 0; i < 4; i++) r[t + me[i] + e] = a[i] || a[i - 2] || a[0];
          return r;
        },
      }),
        ce.test(t) || (Q.cssHooks[t + e].set = y);
    });
  var ye = /%20/g,
    xe = /\[\]$/,
    we = /\r?\n/g,
    _e = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ke = /^(?:select|textarea)/i;
  Q.fn.extend({
    serialize: function () {
      return Q.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? Q.makeArray(this.elements) : this;
      })
        .filter(function () {
          return this.name && !this.disabled && (this.checked || ke.test(this.nodeName) || _e.test(this.type));
        })
        .map(function (t, e) {
          var n = Q(this).val();
          return null == n
            ? null
            : Q.isArray(n)
            ? Q.map(n, function (t, n) {
                return { name: e.name, value: t.replace(we, '\r\n') };
              })
            : { name: e.name, value: n.replace(we, '\r\n') };
        })
        .get();
    },
  }),
    (Q.param = function (t, n) {
      var i,
        a = [],
        r = function (t, e) {
          (e = Q.isFunction(e) ? e() : null == e ? '' : e), (a[a.length] = encodeURIComponent(t) + '=' + encodeURIComponent(e));
        };
      if ((n === e && (n = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(t) || (t.jquery && !Q.isPlainObject(t))))
        Q.each(t, function () {
          r(this.name, this.value);
        });
      else for (i in t) k(i, t[i], n, r);
      return a.join('&').replace(ye, '+');
    });
  var Te,
    Ce,
    Ae = /#.*$/,
    Se = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    $e = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Le = /^(?:GET|HEAD)$/,
    De = /^\/\//,
    Ie = /\?/,
    Pe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Ee = /([?&])_=[^&]*/,
    Fe = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    je = Q.fn.load,
    Ne = {},
    Oe = {},
    Me = ['*/'] + ['*'];
  try {
    Ce = q.href;
  } catch (t) {
    (Ce = H.createElement('a')), (Ce.href = ''), (Ce = Ce.href);
  }
  (Te = Fe.exec(Ce.toLowerCase()) || []),
    (Q.fn.load = function (t, n, i) {
      if ('string' != typeof t && je) return je.apply(this, arguments);
      if (!this.length) return this;
      var a,
        r,
        s,
        o = this,
        l = t.indexOf(' ');
      return (
        l >= 0 && ((a = t.slice(l, t.length)), (t = t.slice(0, l))),
        Q.isFunction(n) ? ((i = n), (n = e)) : n && 'object' == typeof n && (r = 'POST'),
        Q.ajax({
          url: t,
          type: r,
          dataType: 'html',
          data: n,
          complete: function (t, e) {
            i && o.each(i, s || [t.responseText, e, t]);
          },
        }).done(function (t) {
          (s = arguments), o.html(a ? Q('<div>').append(t.replace(Pe, '')).find(a) : t);
        }),
        this
      );
    }),
    Q.each('ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '), function (t, e) {
      Q.fn[e] = function (t) {
        return this.on(e, t);
      };
    }),
    Q.each(['get', 'post'], function (t, n) {
      Q[n] = function (t, i, a, r) {
        return Q.isFunction(i) && ((r = r || a), (a = i), (i = e)), Q.ajax({ type: n, url: t, data: i, success: a, dataType: r });
      };
    }),
    Q.extend({
      getScript: function (t, n) {
        return Q.get(t, e, n, 'script');
      },
      getJSON: function (t, e, n) {
        return Q.get(t, e, n, 'json');
      },
      ajaxSetup: function (t, e) {
        return e ? A(t, Q.ajaxSettings) : ((e = t), (t = Q.ajaxSettings)), A(t, e), t;
      },
      ajaxSettings: {
        url: Ce,
        isLocal: $e.test(Te[1]),
        global: !0,
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: !0,
        async: !0,
        accepts: {
          xml: 'application/xml, text/xml',
          html: 'text/html',
          text: 'text/plain',
          json: 'application/json, text/javascript',
          '*': Me,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText' },
        converters: { '* text': t.String, 'text html': !0, 'text json': Q.parseJSON, 'text xml': Q.parseXML },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: T(Ne),
      ajaxTransport: T(Oe),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var c,
            u,
            b,
            y,
            w,
            k = n;
          2 !== x &&
            ((x = 2),
            l && clearTimeout(l),
            (o = e),
            (r = s || ''),
            (_.readyState = t > 0 ? 4 : 0),
            i && (y = S(p, _, i)),
            (t >= 200 && t < 300) || 304 === t
              ? (p.ifModified &&
                  ((w = _.getResponseHeader('Last-Modified')),
                  w && (Q.lastModified[a] = w),
                  (w = _.getResponseHeader('Etag')) && (Q.etag[a] = w)),
                304 === t ? ((k = 'notmodified'), (c = !0)) : ((c = $(p, y)), (k = c.state), (u = c.data), (b = c.error), (c = !b)))
              : ((b = k), (k && !t) || ((k = 'error'), t < 0 && (t = 0))),
            (_.status = t),
            (_.statusText = (n || k) + ''),
            c ? v.resolveWith(f, [u, k, _]) : v.rejectWith(f, [_, k, b]),
            _.statusCode(g),
            (g = e),
            d && h.trigger('ajax' + (c ? 'Success' : 'Error'), [_, p, c ? u : b]),
            m.fireWith(f, [_, k]),
            d && (h.trigger('ajaxComplete', [_, p]), --Q.active || Q.event.trigger('ajaxStop')));
        }
        'object' == typeof t && ((n = t), (t = e)), (n = n || {});
        var a,
          r,
          s,
          o,
          l,
          c,
          d,
          u,
          p = Q.ajaxSetup({}, n),
          f = p.context || p,
          h = f !== p && (f.nodeType || f instanceof Q) ? Q(f) : Q.event,
          v = Q.Deferred(),
          m = Q.Callbacks('once memory'),
          g = p.statusCode || {},
          b = {},
          y = {},
          x = 0,
          w = 'canceled',
          _ = {
            readyState: 0,
            setRequestHeader: function (t, e) {
              if (!x) {
                var n = t.toLowerCase();
                (t = y[n] = y[n] || t), (b[t] = e);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return 2 === x ? r : null;
            },
            getResponseHeader: function (t) {
              var n;
              if (2 === x) {
                if (!s) for (s = {}; (n = Se.exec(r)); ) s[n[1].toLowerCase()] = n[2];
                n = s[t.toLowerCase()];
              }
              return n === e ? null : n;
            },
            overrideMimeType: function (t) {
              return x || (p.mimeType = t), this;
            },
            abort: function (t) {
              return (t = t || w), o && o.abort(t), i(0, t), this;
            },
          };
        if (
          (v.promise(_),
          (_.success = _.done),
          (_.error = _.fail),
          (_.complete = m.add),
          (_.statusCode = function (t) {
            if (t) {
              var e;
              if (x < 2) for (e in t) g[e] = [g[e], t[e]];
              else (e = t[_.status]), _.always(e);
            }
            return this;
          }),
          (p.url = ((t || p.url) + '').replace(Ae, '').replace(De, Te[1] + '//')),
          (p.dataTypes = Q.trim(p.dataType || '*')
            .toLowerCase()
            .split(et)),
          null == p.crossDomain &&
            ((c = Fe.exec(p.url.toLowerCase())),
            (p.crossDomain = !(
              !c ||
              (c[1] === Te[1] && c[2] === Te[2] && (c[3] || ('http:' === c[1] ? 80 : 443)) == (Te[3] || ('http:' === Te[1] ? 80 : 443)))
            ))),
          p.data && p.processData && 'string' != typeof p.data && (p.data = Q.param(p.data, p.traditional)),
          C(Ne, p, n, _),
          2 === x)
        )
          return _;
        if (
          ((d = p.global),
          (p.type = p.type.toUpperCase()),
          (p.hasContent = !Le.test(p.type)),
          d && 0 == Q.active++ && Q.event.trigger('ajaxStart'),
          !p.hasContent && (p.data && ((p.url += (Ie.test(p.url) ? '&' : '?') + p.data), delete p.data), (a = p.url), !1 === p.cache))
        ) {
          var k = Q.now(),
            T = p.url.replace(Ee, '$1_=' + k);
          p.url = T + (T === p.url ? (Ie.test(p.url) ? '&' : '?') + '_=' + k : '');
        }
        ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) && _.setRequestHeader('Content-Type', p.contentType),
          p.ifModified &&
            ((a = a || p.url),
            Q.lastModified[a] && _.setRequestHeader('If-Modified-Since', Q.lastModified[a]),
            Q.etag[a] && _.setRequestHeader('If-None-Match', Q.etag[a])),
          _.setRequestHeader(
            'Accept',
            p.dataTypes[0] && p.accepts[p.dataTypes[0]]
              ? p.accepts[p.dataTypes[0]] + ('*' !== p.dataTypes[0] ? ', ' + Me + '; q=0.01' : '')
              : p.accepts['*']
          );
        for (u in p.headers) _.setRequestHeader(u, p.headers[u]);
        if (!p.beforeSend || (!1 !== p.beforeSend.call(f, _, p) && 2 !== x)) {
          w = 'abort';
          for (u in { success: 1, error: 1, complete: 1 }) _[u](p[u]);
          if ((o = C(Oe, p, n, _))) {
            (_.readyState = 1),
              d && h.trigger('ajaxSend', [_, p]),
              p.async &&
                p.timeout > 0 &&
                (l = setTimeout(function () {
                  _.abort('timeout');
                }, p.timeout));
            try {
              (x = 1), o.send(b, i);
            } catch (t) {
              if (!(x < 2)) throw t;
              i(-1, t);
            }
          } else i(-1, 'No Transport');
          return _;
        }
        return _.abort();
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var Be = [],
    Re = /\?/,
    He = /(=)\?(?=&|$)|\?\?/,
    qe = Q.now();
  Q.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var t = Be.pop() || Q.expando + '_' + qe++;
      return (this[t] = !0), t;
    },
  }),
    Q.ajaxPrefilter('json jsonp', function (n, i, a) {
      var r,
        s,
        o,
        l = n.data,
        c = n.url,
        d = !1 !== n.jsonp,
        u = d && He.test(c),
        p = d && !u && 'string' == typeof l && !(n.contentType || '').indexOf('application/x-www-form-urlencoded') && He.test(l);
      if ('jsonp' === n.dataTypes[0] || u || p)
        return (
          (r = n.jsonpCallback = Q.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback),
          (s = t[r]),
          u
            ? (n.url = c.replace(He, '$1' + r))
            : p
            ? (n.data = l.replace(He, '$1' + r))
            : d && (n.url += (Re.test(c) ? '&' : '?') + n.jsonp + '=' + r),
          (n.converters['script json'] = function () {
            return o || Q.error(r + ' was not called'), o[0];
          }),
          (n.dataTypes[0] = 'json'),
          (t[r] = function () {
            o = arguments;
          }),
          a.always(function () {
            (t[r] = s), n[r] && ((n.jsonpCallback = i.jsonpCallback), Be.push(r)), o && Q.isFunction(s) && s(o[0]), (o = s = e);
          }),
          'script'
        );
    }),
    Q.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        'text script': function (t) {
          return Q.globalEval(t), t;
        },
      },
    }),
    Q.ajaxPrefilter('script', function (t) {
      t.cache === e && (t.cache = !1), t.crossDomain && ((t.type = 'GET'), (t.global = !1));
    }),
    Q.ajaxTransport('script', function (t) {
      if (t.crossDomain) {
        var n,
          i = H.head || H.getElementsByTagName('head')[0] || H.documentElement;
        return {
          send: function (a, r) {
            (n = H.createElement('script')),
              (n.async = 'async'),
              t.scriptCharset && (n.charset = t.scriptCharset),
              (n.src = t.url),
              (n.onload = n.onreadystatechange =
                function (t, a) {
                  (a || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null), i && n.parentNode && i.removeChild(n), (n = e), a || r(200, 'success'));
                }),
              i.insertBefore(n, i.firstChild);
          },
          abort: function () {
            n && n.onload(0, 1);
          },
        };
      }
    });
  var Ue,
    ze =
      !!t.ActiveXObject &&
      function () {
        for (var t in Ue) Ue[t](0, 1);
      },
    Ve = 0;
  (Q.ajaxSettings.xhr = t.ActiveXObject
    ? function () {
        return (!this.isLocal && L()) || D();
      }
    : L),
    (function (t) {
      Q.extend(Q.support, { ajax: !!t, cors: !!t && 'withCredentials' in t });
    })(Q.ajaxSettings.xhr()),
    Q.support.ajax &&
      Q.ajaxTransport(function (n) {
        if (!n.crossDomain || Q.support.cors) {
          var i;
          return {
            send: function (a, r) {
              var s,
                o,
                l = n.xhr();
              if ((n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields))
                for (o in n.xhrFields) l[o] = n.xhrFields[o];
              n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                !n.crossDomain && !a['X-Requested-With'] && (a['X-Requested-With'] = 'XMLHttpRequest');
              try {
                for (o in a) l.setRequestHeader(o, a[o]);
              } catch (t) {}
              l.send((n.hasContent && n.data) || null),
                (i = function (t, a) {
                  var o, c, d, u, p;
                  try {
                    if (i && (a || 4 === l.readyState))
                      if (((i = e), s && ((l.onreadystatechange = Q.noop), ze && delete Ue[s]), a)) 4 !== l.readyState && l.abort();
                      else {
                        (o = l.status), (d = l.getAllResponseHeaders()), (u = {}), (p = l.responseXML) && p.documentElement && (u.xml = p);
                        try {
                          u.text = l.responseText;
                        } catch (t) {}
                        try {
                          c = l.statusText;
                        } catch (t) {
                          c = '';
                        }
                        o || !n.isLocal || n.crossDomain ? 1223 === o && (o = 204) : (o = u.text ? 200 : 404);
                      }
                  } catch (t) {
                    a || r(-1, t);
                  }
                  u && r(o, c, u, d);
                }),
                n.async
                  ? 4 === l.readyState
                    ? setTimeout(i, 0)
                    : ((s = ++Ve), ze && (Ue || ((Ue = {}), Q(t).unload(ze)), (Ue[s] = i)), (l.onreadystatechange = i))
                  : i();
            },
            abort: function () {
              i && i(0, 1);
            },
          };
        }
      });
  var We,
    Ye,
    Je = /^(?:toggle|show|hide)$/,
    Ge = new RegExp('^(?:([-+])=|)(' + Z + ')([a-z%]*)$', 'i'),
    Xe = /queueHooks$/,
    Ke = [j],
    Qe = {
      '*': [
        function (t, e) {
          var n,
            i,
            a = this.createTween(t, e),
            r = Ge.exec(e),
            s = a.cur(),
            o = +s || 0,
            l = 1,
            c = 20;
          if (r) {
            if (((n = +r[2]), 'px' !== (i = r[3] || (Q.cssNumber[t] ? '' : 'px')) && o)) {
              o = Q.css(a.elem, t, !0) || n || 1;
              do {
                (l = l || '.5'), (o /= l), Q.style(a.elem, t, o + i);
              } while (l !== (l = a.cur() / s) && 1 !== l && --c);
            }
            (a.unit = i), (a.start = o), (a.end = r[1] ? o + (r[1] + 1) * n : n);
          }
          return a;
        },
      ],
    };
  (Q.Animation = Q.extend(E, {
    tweener: function (t, e) {
      Q.isFunction(t) ? ((e = t), (t = ['*'])) : (t = t.split(' '));
      for (var n, i = 0, a = t.length; i < a; i++) (n = t[i]), (Qe[n] = Qe[n] || []), Qe[n].unshift(e);
    },
    prefilter: function (t, e) {
      e ? Ke.unshift(t) : Ke.push(t);
    },
  })),
    (Q.Tween = N),
    (N.prototype = {
      constructor: N,
      init: function (t, e, n, i, a, r) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = a || 'swing'),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = r || (Q.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var t = N.propHooks[this.prop];
        return t && t.get ? t.get(this) : N.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = N.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e = Q.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : N.propHooks._default.set(this),
          this
        );
      },
    }),
    (N.prototype.init.prototype = N.prototype),
    (N.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] || (t.elem.style && null != t.elem.style[t.prop])
            ? ((e = Q.css(t.elem, t.prop, !1, '')), e && 'auto' !== e ? e : 0)
            : t.elem[t.prop];
        },
        set: function (t) {
          Q.fx.step[t.prop]
            ? Q.fx.step[t.prop](t)
            : t.elem.style && (null != t.elem.style[Q.cssProps[t.prop]] || Q.cssHooks[t.prop])
            ? Q.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (N.propHooks.scrollTop = N.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    Q.each(['toggle', 'show', 'hide'], function (t, e) {
      var n = Q.fn[e];
      Q.fn[e] = function (i, a, r) {
        return null == i || 'boolean' == typeof i || (!t && Q.isFunction(i) && Q.isFunction(a))
          ? n.apply(this, arguments)
          : this.animate(O(e, !0), i, a, r);
      };
    }),
    Q.fn.extend({
      fadeTo: function (t, e, n, i) {
        return this.filter(g).css('opacity', 0).show().end().animate({ opacity: e }, t, n, i);
      },
      animate: function (t, e, n, i) {
        var a = Q.isEmptyObject(t),
          r = Q.speed(e, n, i),
          s = function () {
            var e = E(this, Q.extend({}, t), r);
            a && e.stop(!0);
          };
        return a || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
      },
      stop: function (t, n, i) {
        var a = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          'string' != typeof t && ((i = n), (n = t), (t = e)),
          n && !1 !== t && this.queue(t || 'fx', []),
          this.each(function () {
            var e = !0,
              n = null != t && t + 'queueHooks',
              r = Q.timers,
              s = Q._data(this);
            if (n) s[n] && s[n].stop && a(s[n]);
            else for (n in s) s[n] && s[n].stop && Xe.test(n) && a(s[n]);
            for (n = r.length; n--; )
              r[n].elem === this && (null == t || r[n].queue === t) && (r[n].anim.stop(i), (e = !1), r.splice(n, 1));
            (e || !i) && Q.dequeue(this, t);
          })
        );
      },
    }),
    Q.each(
      {
        slideDown: O('show'),
        slideUp: O('hide'),
        slideToggle: O('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (t, e) {
        Q.fn[t] = function (t, n, i) {
          return this.animate(e, t, n, i);
        };
      }
    ),
    (Q.speed = function (t, e, n) {
      var i =
        t && 'object' == typeof t
          ? Q.extend({}, t)
          : { complete: n || (!n && e) || (Q.isFunction(t) && t), duration: t, easing: (n && e) || (e && !Q.isFunction(e) && e) };
      return (
        (i.duration = Q.fx.off
          ? 0
          : 'number' == typeof i.duration
          ? i.duration
          : i.duration in Q.fx.speeds
          ? Q.fx.speeds[i.duration]
          : Q.fx.speeds._default),
        (null != i.queue && !0 !== i.queue) || (i.queue = 'fx'),
        (i.old = i.complete),
        (i.complete = function () {
          Q.isFunction(i.old) && i.old.call(this), i.queue && Q.dequeue(this, i.queue);
        }),
        i
      );
    }),
    (Q.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (Q.timers = []),
    (Q.fx = N.prototype.init),
    (Q.fx.tick = function () {
      var t,
        n = Q.timers,
        i = 0;
      for (We = Q.now(); i < n.length; i++) !(t = n[i])() && n[i] === t && n.splice(i--, 1);
      n.length || Q.fx.stop(), (We = e);
    }),
    (Q.fx.timer = function (t) {
      t() && Q.timers.push(t) && !Ye && (Ye = setInterval(Q.fx.tick, Q.fx.interval));
    }),
    (Q.fx.interval = 13),
    (Q.fx.stop = function () {
      clearInterval(Ye), (Ye = null);
    }),
    (Q.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Q.fx.step = {}),
    Q.expr &&
      Q.expr.filters &&
      (Q.expr.filters.animated = function (t) {
        return Q.grep(Q.timers, function (e) {
          return t === e.elem;
        }).length;
      });
  var Ze = /^(?:body|html)$/i;
  (Q.fn.offset = function (t) {
    if (arguments.length)
      return t === e
        ? this
        : this.each(function (e) {
            Q.offset.setOffset(this, t, e);
          });
    var n,
      i,
      a,
      r,
      s,
      o,
      l,
      c = { top: 0, left: 0 },
      d = this[0],
      u = d && d.ownerDocument;
    if (u)
      return (i = u.body) === d
        ? Q.offset.bodyOffset(d)
        : ((n = u.documentElement),
          Q.contains(n, d)
            ? (void 0 !== d.getBoundingClientRect && (c = d.getBoundingClientRect()),
              (a = M(u)),
              (r = n.clientTop || i.clientTop || 0),
              (s = n.clientLeft || i.clientLeft || 0),
              (o = a.pageYOffset || n.scrollTop),
              (l = a.pageXOffset || n.scrollLeft),
              { top: c.top + o - r, left: c.left + l - s })
            : c);
  }),
    (Q.offset = {
      bodyOffset: function (t) {
        var e = t.offsetTop,
          n = t.offsetLeft;
        return (
          Q.support.doesNotIncludeMarginInBodyOffset &&
            ((e += parseFloat(Q.css(t, 'marginTop')) || 0), (n += parseFloat(Q.css(t, 'marginLeft')) || 0)),
          { top: e, left: n }
        );
      },
      setOffset: function (t, e, n) {
        var i = Q.css(t, 'position');
        'static' === i && (t.style.position = 'relative');
        var a,
          r,
          s = Q(t),
          o = s.offset(),
          l = Q.css(t, 'top'),
          c = Q.css(t, 'left'),
          d = ('absolute' === i || 'fixed' === i) && Q.inArray('auto', [l, c]) > -1,
          u = {},
          p = {};
        d ? ((p = s.position()), (a = p.top), (r = p.left)) : ((a = parseFloat(l) || 0), (r = parseFloat(c) || 0)),
          Q.isFunction(e) && (e = e.call(t, n, o)),
          null != e.top && (u.top = e.top - o.top + a),
          null != e.left && (u.left = e.left - o.left + r),
          'using' in e ? e.using.call(t, u) : s.css(u);
      },
    }),
    Q.fn.extend({
      position: function () {
        if (this[0]) {
          var t = this[0],
            e = this.offsetParent(),
            n = this.offset(),
            i = Ze.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
          return (
            (n.top -= parseFloat(Q.css(t, 'marginTop')) || 0),
            (n.left -= parseFloat(Q.css(t, 'marginLeft')) || 0),
            (i.top += parseFloat(Q.css(e[0], 'borderTopWidth')) || 0),
            (i.left += parseFloat(Q.css(e[0], 'borderLeftWidth')) || 0),
            { top: n.top - i.top, left: n.left - i.left }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var t = this.offsetParent || H.body; t && !Ze.test(t.nodeName) && 'static' === Q.css(t, 'position'); ) t = t.offsetParent;
          return t || H.body;
        });
      },
    }),
    Q.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, n) {
      var i = /Y/.test(n);
      Q.fn[t] = function (a) {
        return Q.access(
          this,
          function (t, a, r) {
            var s = M(t);
            if (r === e) return s ? (n in s ? s[n] : s.document.documentElement[a]) : t[a];
            s ? s.scrollTo(i ? Q(s).scrollLeft() : r, i ? r : Q(s).scrollTop()) : (t[a] = r);
          },
          t,
          a,
          arguments.length,
          null
        );
      };
    }),
    Q.each({ Height: 'height', Width: 'width' }, function (t, n) {
      Q.each({ padding: 'inner' + t, content: n, '': 'outer' + t }, function (i, a) {
        Q.fn[a] = function (a, r) {
          var s = arguments.length && (i || 'boolean' != typeof a),
            o = i || (!0 === a || !0 === r ? 'margin' : 'border');
          return Q.access(
            this,
            function (n, i, a) {
              var r;
              return Q.isWindow(n)
                ? n.document.documentElement['client' + t]
                : 9 === n.nodeType
                ? ((r = n.documentElement),
                  Math.max(n.body['scroll' + t], r['scroll' + t], n.body['offset' + t], r['offset' + t], r['client' + t]))
                : a === e
                ? Q.css(n, i, a, o)
                : Q.style(n, i, a, o);
            },
            n,
            s ? a : e,
            s,
            null
          );
        };
      });
    }),
    (t.jQuery = t.$ = Q),
    'function' == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define('jquery', [], function () {
        return Q;
      });
})(window),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define('VueResource', e)
      : (t.VueResource = e());
  })(this, function () {
    'use strict';
    function t(t) {
      (this.state = H), (this.value = void 0), (this.deferred = []);
      var e = this;
      try {
        t(
          function (t) {
            e.resolve(t);
          },
          function (t) {
            e.reject(t);
          }
        );
      } catch (t) {
        e.reject(t);
      }
    }
    function e(t, e) {
      t instanceof Promise ? (this.promise = t) : (this.promise = new Promise(t.bind(e))), (this.context = e);
    }
    function n(t) {
      'undefined' != typeof console && G && console.warn('[VueResource warn]: ' + t);
    }
    function i(t) {
      'undefined' != typeof console && console.error(t);
    }
    function a(t, e) {
      return z(t, e);
    }
    function r(t) {
      return t ? t.replace(/^\s*|\s*$/g, '') : '';
    }
    function s(t) {
      return t ? t.toLowerCase() : '';
    }
    function o(t) {
      return t ? t.toUpperCase() : '';
    }
    function l(t) {
      return 'string' == typeof t;
    }
    function c(t) {
      return 'function' == typeof t;
    }
    function d(t) {
      return null !== t && 'object' == typeof t;
    }
    function u(t) {
      return d(t) && Object.getPrototypeOf(t) == Object.prototype;
    }
    function p(t) {
      return 'undefined' != typeof Blob && t instanceof Blob;
    }
    function f(t) {
      return 'undefined' != typeof FormData && t instanceof FormData;
    }
    function h(t, n, i) {
      var a = e.resolve(t);
      return arguments.length < 2 ? a : a.then(n, i);
    }
    function v(t, e, n) {
      return (n = n || {}), c(n) && (n = n.call(e)), g(t.bind({ $vm: e, $options: n }), t, { $options: n });
    }
    function m(t, e) {
      var n, i;
      if (Q(t)) for (n = 0; n < t.length; n++) e.call(t[n], t[n], n);
      else if (d(t)) for (i in t) W.call(t, i) && e.call(t[i], t[i], i);
      return t;
    }
    function g(t) {
      return (
        J.call(arguments, 1).forEach(function (e) {
          x(t, e, !0);
        }),
        t
      );
    }
    function b(t) {
      return (
        J.call(arguments, 1).forEach(function (e) {
          for (var n in e) void 0 === t[n] && (t[n] = e[n]);
        }),
        t
      );
    }
    function y(t) {
      return (
        J.call(arguments, 1).forEach(function (e) {
          x(t, e);
        }),
        t
      );
    }
    function x(t, e, n) {
      for (var i in e)
        n && (u(e[i]) || Q(e[i]))
          ? (u(e[i]) && !u(t[i]) && (t[i] = {}), Q(e[i]) && !Q(t[i]) && (t[i] = []), x(t[i], e[i], n))
          : void 0 !== e[i] && (t[i] = e[i]);
    }
    function w(t, e, n) {
      var i = _(t),
        a = i.expand(e);
      return n && n.push.apply(n, i.vars), a;
    }
    function _(t) {
      var e = ['+', '#', '.', '/', ';', '?', '&'],
        n = [];
      return {
        vars: n,
        expand: function (i) {
          return t.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (t, a, r) {
            if (a) {
              var s = null,
                o = [];
              if (
                (-1 !== e.indexOf(a.charAt(0)) && ((s = a.charAt(0)), (a = a.substr(1))),
                a.split(/,/g).forEach(function (t) {
                  var e = /([^:\*]*)(?::(\d+)|(\*))?/.exec(t);
                  o.push.apply(o, k(i, s, e[1], e[2] || e[3])), n.push(e[1]);
                }),
                s && '+' !== s)
              ) {
                var l = ',';
                return '?' === s ? (l = '&') : '#' !== s && (l = s), (0 !== o.length ? s : '') + o.join(l);
              }
              return o.join(',');
            }
            return S(r);
          });
        },
      };
    }
    function k(t, e, n, i) {
      var a = t[n],
        r = [];
      if (T(a) && '' !== a)
        if ('string' == typeof a || 'number' == typeof a || 'boolean' == typeof a)
          (a = a.toString()), i && '*' !== i && (a = a.substring(0, parseInt(i, 10))), r.push(A(e, a, C(e) ? n : null));
        else if ('*' === i)
          Array.isArray(a)
            ? a.filter(T).forEach(function (t) {
                r.push(A(e, t, C(e) ? n : null));
              })
            : Object.keys(a).forEach(function (t) {
                T(a[t]) && r.push(A(e, a[t], t));
              });
        else {
          var s = [];
          Array.isArray(a)
            ? a.filter(T).forEach(function (t) {
                s.push(A(e, t));
              })
            : Object.keys(a).forEach(function (t) {
                T(a[t]) && (s.push(encodeURIComponent(t)), s.push(A(e, a[t].toString())));
              }),
            C(e) ? r.push(encodeURIComponent(n) + '=' + s.join(',')) : 0 !== s.length && r.push(s.join(','));
        }
      else
        ';' === e
          ? r.push(encodeURIComponent(n))
          : '' !== a || ('&' !== e && '?' !== e)
          ? '' === a && r.push('')
          : r.push(encodeURIComponent(n) + '=');
      return r;
    }
    function T(t) {
      return void 0 !== t && null !== t;
    }
    function C(t) {
      return ';' === t || '&' === t || '?' === t;
    }
    function A(t, e, n) {
      return (e = '+' === t || '#' === t ? S(e) : encodeURIComponent(e)), n ? encodeURIComponent(n) + '=' + e : e;
    }
    function S(t) {
      return t
        .split(/(%[0-9A-Fa-f]{2})/g)
        .map(function (t) {
          return /%[0-9A-Fa-f]/.test(t) || (t = encodeURI(t)), t;
        })
        .join('');
    }
    function $(t, e) {
      var n,
        i = this || {},
        a = t;
      return (
        l(t) && (a = { url: t, params: e }),
        (a = g({}, $.options, i.$options, a)),
        $.transforms.forEach(function (t) {
          l(t) && (t = $.transform[t]), c(t) && (n = L(t, n, i.$vm));
        }),
        n(a)
      );
    }
    function L(t, e, n) {
      return function (i) {
        return t.call(n, i, e);
      };
    }
    function D(t, e, n) {
      var i,
        a = Q(e),
        r = u(e);
      m(e, function (e, s) {
        (i = d(e) || Q(e)), n && (s = n + '[' + (r || i ? s : '') + ']'), !n && a ? t.add(e.name, e.value) : i ? D(t, e, s) : t.add(s, e);
      });
    }
    function I(t) {
      var e = t.match(/^\[|^\{(?!\{)/),
        n = { '[': /]$/, '{': /}$/ };
      return e && n[e[0]].test(t);
    }
    function P(t, e) {
      e((t.client || (X ? pt : ft))(t));
    }
    function E(t, e) {
      return Object.keys(t).reduce(function (t, n) {
        return s(e) === s(n) ? n : t;
      }, null);
    }
    function F(t) {
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError('Invalid character in header field name');
      return r(t);
    }
    function j(t) {
      return new e(function (e) {
        var n = new FileReader();
        n.readAsText(t),
          (n.onload = function () {
            e(n.result);
          });
      });
    }
    function N(t) {
      return 0 === t.type.indexOf('text') || -1 !== t.type.indexOf('json');
    }
    function O(t) {
      var n = this || {},
        a = ht(n.$vm);
      return (
        b(t || {}, n.$options, O.options),
        O.interceptors.forEach(function (t) {
          l(t) && (t = O.interceptor[t]), c(t) && a.use(t);
        }),
        a(new gt(t)).then(
          function (t) {
            return t.ok ? t : e.reject(t);
          },
          function (t) {
            return t instanceof Error && i(t), e.reject(t);
          }
        )
      );
    }
    function M(t, e, n, i) {
      var a = this || {},
        r = {};
      return (
        (n = Z({}, M.actions, n)),
        m(n, function (n, s) {
          (n = g({ url: t, params: Z({}, e) }, i, n)),
            (r[s] = function () {
              return (a.$http || O)(B(n, arguments));
            });
        }),
        r
      );
    }
    function B(t, e) {
      var n,
        i = Z({}, t),
        a = {};
      switch (e.length) {
        case 2:
          (a = e[0]), (n = e[1]);
          break;
        case 1:
          /^(POST|PUT|PATCH)$/i.test(i.method) ? (n = e[0]) : (a = e[0]);
          break;
        case 0:
          break;
        default:
          throw 'Expected up to 2 arguments [params, body], got ' + e.length + ' arguments';
      }
      return (i.body = n), (i.params = Z({}, i.params, a)), i;
    }
    function R(t) {
      R.installed ||
        (K(t),
        (t.url = $),
        (t.http = O),
        (t.resource = M),
        (t.Promise = e),
        Object.defineProperties(t.prototype, {
          $url: {
            get: function () {
              return v(t.url, this, this.$options.url);
            },
          },
          $http: {
            get: function () {
              return v(t.http, this, this.$options.http);
            },
          },
          $resource: {
            get: function () {
              return t.resource.bind(this);
            },
          },
          $promise: {
            get: function () {
              var e = this;
              return function (n) {
                return new t.Promise(n, e);
              };
            },
          },
        }));
    }
    var H = 2;
    (t.reject = function (e) {
      return new t(function (t, n) {
        n(e);
      });
    }),
      (t.resolve = function (e) {
        return new t(function (t, n) {
          t(e);
        });
      }),
      (t.all = function (e) {
        return new t(function (n, i) {
          var a = 0,
            r = [];
          0 === e.length && n(r);
          for (var s = 0; s < e.length; s += 1)
            t.resolve(e[s]).then(
              (function (t) {
                return function (i) {
                  (r[t] = i), (a += 1) === e.length && n(r);
                };
              })(s),
              i
            );
        });
      }),
      (t.race = function (e) {
        return new t(function (n, i) {
          for (var a = 0; a < e.length; a += 1) t.resolve(e[a]).then(n, i);
        });
      });
    var q = t.prototype;
    (q.resolve = function (t) {
      var e = this;
      if (e.state === H) {
        if (t === e) throw new TypeError('Promise settled with itself.');
        var n = !1;
        try {
          var i = t && t.then;
          if (null !== t && 'object' == typeof t && 'function' == typeof i)
            return void i.call(
              t,
              function (t) {
                n || e.resolve(t), (n = !0);
              },
              function (t) {
                n || e.reject(t), (n = !0);
              }
            );
        } catch (t) {
          return void (n || e.reject(t));
        }
        (e.state = 0), (e.value = t), e.notify();
      }
    }),
      (q.reject = function (t) {
        var e = this;
        if (e.state === H) {
          if (t === e) throw new TypeError('Promise settled with itself.');
          (e.state = 1), (e.value = t), e.notify();
        }
      }),
      (q.notify = function () {
        var t = this;
        a(function () {
          if (t.state !== H)
            for (; t.deferred.length; ) {
              var e = t.deferred.shift(),
                n = e[0],
                i = e[1],
                a = e[2],
                r = e[3];
              try {
                0 === t.state
                  ? a('function' == typeof n ? n.call(void 0, t.value) : t.value)
                  : 1 === t.state && ('function' == typeof i ? a(i.call(void 0, t.value)) : r(t.value));
              } catch (t) {
                r(t);
              }
            }
        });
      }),
      (q.then = function (e, n) {
        var i = this;
        return new t(function (t, a) {
          i.deferred.push([e, n, t, a]), i.notify();
        });
      }),
      (q.catch = function (t) {
        return this.then(void 0, t);
      }),
      'undefined' == typeof Promise && (window.Promise = t),
      (e.all = function (t, n) {
        return new e(Promise.all(t), n);
      }),
      (e.resolve = function (t, n) {
        return new e(Promise.resolve(t), n);
      }),
      (e.reject = function (t, n) {
        return new e(Promise.reject(t), n);
      }),
      (e.race = function (t, n) {
        return new e(Promise.race(t), n);
      });
    var U = e.prototype;
    (U.bind = function (t) {
      return (this.context = t), this;
    }),
      (U.then = function (t, n) {
        return (
          t && t.bind && this.context && (t = t.bind(this.context)),
          n && n.bind && this.context && (n = n.bind(this.context)),
          new e(this.promise.then(t, n), this.context)
        );
      }),
      (U.catch = function (t) {
        return t && t.bind && this.context && (t = t.bind(this.context)), new e(this.promise.catch(t), this.context);
      }),
      (U.finally = function (t) {
        return this.then(
          function (e) {
            return t.call(this), e;
          },
          function (e) {
            return t.call(this), Promise.reject(e);
          }
        );
      });
    var z,
      V = {},
      W = V.hasOwnProperty,
      Y = [],
      J = Y.slice,
      G = !1,
      X = 'undefined' != typeof window,
      K = function (t) {
        var e = t.config,
          n = t.nextTick;
        (z = n), (G = e.debug || !e.silent);
      },
      Q = Array.isArray,
      Z = Object.assign || y,
      tt = function (t, e) {
        var n = e(t);
        return l(t.root) && !n.match(/^(https?:)?\//) && (n = t.root + '/' + n), n;
      },
      et = function (t, e) {
        var n = Object.keys($.options.params),
          i = {},
          a = e(t);
        return (
          m(t.params, function (t, e) {
            -1 === n.indexOf(e) && (i[e] = t);
          }),
          (i = $.params(i)),
          i && (a += (-1 == a.indexOf('?') ? '?' : '&') + i),
          a
        );
      },
      nt = function (t) {
        var e = [],
          n = w(t.url, t.params, e);
        return (
          e.forEach(function (e) {
            delete t.params[e];
          }),
          n
        );
      };
    ($.options = { url: '', root: null, params: {} }),
      ($.transform = { template: nt, query: et, root: tt }),
      ($.transforms = ['template', 'query', 'root']),
      ($.params = function (t) {
        var e = [],
          n = encodeURIComponent;
        return (
          (e.add = function (t, e) {
            c(e) && (e = e()), null === e && (e = ''), this.push(n(t) + '=' + n(e));
          }),
          D(e, t),
          e.join('&').replace(/%20/g, '+')
        );
      }),
      ($.parse = function (t) {
        var e = document.createElement('a');
        return (
          document.documentMode && ((e.href = t), (t = e.href)),
          (e.href = t),
          {
            href: e.href,
            protocol: e.protocol ? e.protocol.replace(/:$/, '') : '',
            port: e.port,
            host: e.host,
            hostname: e.hostname,
            pathname: '/' === e.pathname.charAt(0) ? e.pathname : '/' + e.pathname,
            search: e.search ? e.search.replace(/^\?/, '') : '',
            hash: e.hash ? e.hash.replace(/^#/, '') : '',
          }
        );
      });
    var it = function (t) {
        return new e(function (e) {
          var n = new XDomainRequest(),
            i = function (i) {
              var a = i.type,
                r = 0;
              'load' === a ? (r = 200) : 'error' === a && (r = 500), e(t.respondWith(n.responseText, { status: r }));
            };
          (t.abort = function () {
            return n.abort();
          }),
            n.open(t.method, t.getUrl()),
            t.timeout && (n.timeout = t.timeout),
            (n.onload = i),
            (n.onabort = i),
            (n.onerror = i),
            (n.ontimeout = i),
            (n.onprogress = function () {}),
            n.send(t.getBody());
        });
      },
      at = X && 'withCredentials' in new XMLHttpRequest(),
      rt = function (t, e) {
        if (X) {
          var n = $.parse(location.href),
            i = $.parse(t.getUrl());
          (i.protocol === n.protocol && i.host === n.host) || ((t.crossOrigin = !0), (t.emulateHTTP = !1), at || (t.client = it));
        }
        e();
      },
      st = function (t, e) {
        f(t.body)
          ? t.headers.delete('Content-Type')
          : (d(t.body) || Q(t.body)) &&
            (t.emulateJSON
              ? ((t.body = $.params(t.body)), t.headers.set('Content-Type', 'application/x-www-form-urlencoded'))
              : (t.body = JSON.stringify(t.body))),
          e(function (t) {
            return (
              Object.defineProperty(t, 'data', {
                get: function () {
                  return this.body;
                },
                set: function (t) {
                  this.body = t;
                },
              }),
              t.bodyText
                ? h(t.text(), function (e) {
                    if (0 === (t.headers.get('Content-Type') || '').indexOf('application/json') || I(e))
                      try {
                        t.body = JSON.parse(e);
                      } catch (e) {
                        t.body = null;
                      }
                    else t.body = e;
                    return t;
                  })
                : t
            );
          });
      },
      ot = function (t) {
        return new e(function (e) {
          var n,
            i,
            a = t.jsonp || 'callback',
            r = t.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2),
            s = null;
          (n = function (n) {
            var a = n.type,
              o = 0;
            'load' === a && null !== s ? (o = 200) : 'error' === a && (o = 500),
              o && window[r] && (delete window[r], document.body.removeChild(i)),
              e(t.respondWith(s, { status: o }));
          }),
            (window[r] = function (t) {
              s = JSON.stringify(t);
            }),
            (t.abort = function () {
              n({ type: 'abort' });
            }),
            (t.params[a] = r),
            t.timeout && setTimeout(t.abort, t.timeout),
            (i = document.createElement('script')),
            (i.src = t.getUrl()),
            (i.type = 'text/javascript'),
            (i.async = !0),
            (i.onload = n),
            (i.onerror = n),
            document.body.appendChild(i);
        });
      },
      lt = function (t, e) {
        'JSONP' == t.method && (t.client = ot), e();
      },
      ct = function (t, e) {
        c(t.before) && t.before.call(this, t), e();
      },
      dt = function (t, e) {
        t.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(t.method) && (t.headers.set('X-HTTP-Method-Override', t.method), (t.method = 'POST')),
          e();
      },
      ut = function (t, e) {
        m(Z({}, O.headers.common, t.crossOrigin ? {} : O.headers.custom, O.headers[s(t.method)]), function (e, n) {
          t.headers.has(n) || t.headers.set(n, e);
        }),
          e();
      },
      pt = function (t) {
        return new e(function (e) {
          var n = new XMLHttpRequest(),
            i = function (i) {
              var a = t.respondWith('response' in n ? n.response : n.responseText, {
                status: 1223 === n.status ? 204 : n.status,
                statusText: 1223 === n.status ? 'No Content' : r(n.statusText),
              });
              m(r(n.getAllResponseHeaders()).split('\n'), function (t) {
                a.headers.append(t.slice(0, t.indexOf(':')), t.slice(t.indexOf(':') + 1));
              }),
                e(a);
            };
          (t.abort = function () {
            return n.abort();
          }),
            t.progress &&
              ('GET' === t.method
                ? n.addEventListener('progress', t.progress)
                : /^(POST|PUT)$/i.test(t.method) && n.upload.addEventListener('progress', t.progress)),
            n.open(t.method, t.getUrl(), !0),
            t.timeout && (n.timeout = t.timeout),
            t.responseType && 'responseType' in n && (n.responseType = t.responseType),
            (t.withCredentials || t.credentials) && (n.withCredentials = !0),
            t.crossOrigin || t.headers.set('X-Requested-With', 'XMLHttpRequest'),
            t.headers.forEach(function (t, e) {
              n.setRequestHeader(e, t);
            }),
            (n.onload = i),
            (n.onabort = i),
            (n.onerror = i),
            (n.ontimeout = i),
            n.send(t.getBody());
        });
      },
      ft = function (t) {
        var n = require('got');
        return new e(function (e) {
          var i,
            a = t.getUrl(),
            s = t.getBody(),
            o = t.method,
            l = {};
          t.headers.forEach(function (t, e) {
            l[e] = t;
          }),
            n(a, { body: s, method: o, headers: l }).then(
              (i = function (n) {
                var i = t.respondWith(n.body, { status: n.statusCode, statusText: r(n.statusMessage) });
                m(n.headers, function (t, e) {
                  i.headers.set(e, t);
                }),
                  e(i);
              }),
              function (t) {
                return i(t.response);
              }
            );
        });
      },
      ht = function (t) {
        function i(i) {
          return new e(function (e) {
            function o() {
              (a = r.pop()), c(a) ? a.call(t, i, l) : (n('Invalid interceptor of type ' + typeof a + ', must be a function'), l());
            }
            function l(n) {
              if (c(n)) s.unshift(n);
              else if (d(n))
                return (
                  s.forEach(function (e) {
                    n = h(n, function (n) {
                      return e.call(t, n) || n;
                    });
                  }),
                  void h(n, e)
                );
              o();
            }
            o();
          }, t);
        }
        var a,
          r = [P],
          s = [];
        return (
          d(t) || (t = null),
          (i.use = function (t) {
            r.push(t);
          }),
          i
        );
      },
      vt = function (t) {
        var e = this;
        (this.map = {}),
          m(t, function (t, n) {
            return e.append(n, t);
          });
      };
    (vt.prototype.has = function (t) {
      return null !== E(this.map, t);
    }),
      (vt.prototype.get = function (t) {
        var e = this.map[E(this.map, t)];
        return e ? e.join() : null;
      }),
      (vt.prototype.getAll = function (t) {
        return this.map[E(this.map, t)] || [];
      }),
      (vt.prototype.set = function (t, e) {
        this.map[F(E(this.map, t) || t)] = [r(e)];
      }),
      (vt.prototype.append = function (t, e) {
        var n = this.map[E(this.map, t)];
        n ? n.push(r(e)) : this.set(t, e);
      }),
      (vt.prototype.delete = function (t) {
        delete this.map[E(this.map, t)];
      }),
      (vt.prototype.deleteAll = function () {
        this.map = {};
      }),
      (vt.prototype.forEach = function (t, e) {
        var n = this;
        m(this.map, function (i, a) {
          m(i, function (i) {
            return t.call(e, i, a, n);
          });
        });
      });
    var mt = function (t, e) {
      var n = e.url,
        i = e.headers,
        a = e.status,
        r = e.statusText;
      (this.url = n),
        (this.ok = a >= 200 && a < 300),
        (this.status = a || 0),
        (this.statusText = r || ''),
        (this.headers = new vt(i)),
        (this.body = t),
        l(t) ? (this.bodyText = t) : p(t) && ((this.bodyBlob = t), N(t) && (this.bodyText = j(t)));
    };
    (mt.prototype.blob = function () {
      return h(this.bodyBlob);
    }),
      (mt.prototype.text = function () {
        return h(this.bodyText);
      }),
      (mt.prototype.json = function () {
        return h(this.text(), function (t) {
          return JSON.parse(t);
        });
      });
    var gt = function (t) {
      (this.body = null),
        (this.params = {}),
        Z(this, t, { method: o(t.method || 'GET') }),
        this.headers instanceof vt || (this.headers = new vt(this.headers));
    };
    (gt.prototype.getUrl = function () {
      return $(this);
    }),
      (gt.prototype.getBody = function () {
        return this.body;
      }),
      (gt.prototype.respondWith = function (t, e) {
        return new mt(t, Z(e || {}, { url: this.getUrl() }));
      });
    var bt = { Accept: 'application/json, text/plain, */*' },
      yt = { 'Content-Type': 'application/json;charset=utf-8' };
    return (
      (O.options = {}),
      (O.headers = { put: yt, post: yt, patch: yt, delete: yt, common: bt, custom: {} }),
      (O.interceptor = { before: ct, method: dt, body: st, jsonp: lt, header: ut, cors: rt }),
      (O.interceptors = ['before', 'method', 'body', 'jsonp', 'header', 'cors']),
      ['get', 'delete', 'head', 'jsonp'].forEach(function (t) {
        O[t] = function (e, n) {
          return this(Z(n || {}, { url: e, method: t }));
        };
      }),
      ['post', 'put', 'patch'].forEach(function (t) {
        O[t] = function (e, n, i) {
          return this(Z(i || {}, { url: e, method: t, body: n }));
        };
      }),
      (M.actions = {
        get: { method: 'GET' },
        save: { method: 'POST' },
        query: { method: 'GET' },
        update: { method: 'PUT' },
        remove: { method: 'DELETE' },
        delete: { method: 'DELETE' },
      }),
      'undefined' != typeof window && window.Vue && window.Vue.use(R),
      R
    );
  }),
  define('commonFunc', ['require', 'exports', 'module'], function (t, e, n) {
    (function (t) {}).prototype = { init: function () {} };
    var i = {
      tip: function (t, e) {
        $('#main-tip').text(t).fadeIn('fast'),
          setTimeout(function () {
            $('#main-tip').removeClass('main-tip-danger').fadeOut();
          }, 1500 | e);
      },
      warningTip: function (t, e) {
        $('#main-tip').addClass('main-tip-danger').text(t).fadeIn('fast'),
          setTimeout(function () {
            $('#main-tip').removeClass('main-tip-danger').fadeOut();
          }, 2e3 | e);
      },
      getUrlParam: function (t, e) {
        var n = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
          i = t.search.substr(1).match(n);
        return i ? unescape(i[2]) : null;
      },
      getQueryString: function (t) {
        var e = new RegExp('(^|&)' + t + '=([^&]*)(&|$)', 'i'),
          n = window.location.search.substr(1).match(e);
        return null !== n ? unescape(n[2]) : null;
      },
      accAdd: function (t, e) {
        var n,
          i,
          a,
          r = 0;
        try {
          n = t.toString().split('.')[1].length;
        } catch (t) {
          n = 0;
        }
        try {
          i = e.toString().split('.')[1].length;
        } catch (t) {
          i = 0;
        }
        if (((a = Math.abs(n - i)), (r = Math.pow(10, Math.max(n, i))), a > 0)) {
          var s = Math.pow(10, a);
          n > i
            ? ((t = Number(t.toString().replace('.', ''))), (e = Number(e.toString().replace('.', '')) * s))
            : ((t = Number(t.toString().replace('.', '')) * s), (e = Number(e.toString().replace('.', ''))));
        } else (t = Number(t.toString().replace('.', ''))), (e = Number(e.toString().replace('.', '')));
        return (t + e) / r;
      },
      accSub: function (t, e) {
        var n,
          i,
          a,
          r = 0;
        try {
          n = t.toString().split('.')[1].length;
        } catch (t) {
          n = 0;
        }
        try {
          i = e.toString().split('.')[1].length;
        } catch (t) {
          i = 0;
        }
        if (((a = Math.abs(n - i)), (r = Math.pow(10, Math.max(n, i))), a > 0)) {
          var s = Math.pow(10, a);
          n > i
            ? ((t = Number(t.toString().replace('.', ''))), (e = Number(e.toString().replace('.', '')) * s))
            : ((t = Number(t.toString().replace('.', '')) * s), (e = Number(e.toString().replace('.', ''))));
        } else (t = Number(t.toString().replace('.', ''))), (e = Number(e.toString().replace('.', '')));
        return (t - e) / r;
      },
      accMul: function (t, e) {
        var n = 0,
          i = t.toString(),
          a = e.toString();
        try {
          n += i.split('.')[1].length;
        } catch (t) {}
        try {
          n += a.split('.')[1].length;
        } catch (t) {}
        return Number((i.replace('.', '') * Number(a.replace('.', ''))) / Math.pow(10, n));
      },
      accDiv: function (t, e) {
        var n,
          i,
          a = 0,
          r = 0;
        try {
          a = t.toString().split('.')[1].length;
        } catch (t) {}
        try {
          r = e.toString().split('.')[1].length;
        } catch (t) {}
        return (n = Number(t.toString().replace('.', ''))), (i = Number(e.toString().replace('.', ''))), (n / i) * Math.pow(10, r - a);
      },
      timeCalc: function (t) {
        var e = Math.floor(t / 86400),
          n = t % 86400,
          i = Math.floor(n / 3600),
          a = n % 3600,
          r = Math.floor(a / 60),
          s = a % 60;
        return e + '天 ' + i + '时 ' + r + '分 ' + Math.round(s) + '秒 ';
      },
      digitsTranform: function (t, e, n, i, a) {
        var r;
        return null === (r = null === t ? null : isNaN(t) ? null : Number(t))
          ? (r = a ? '--' : r)
          : 0 === r
          ? (r = i ? r + '%' : r)
          : ((r = n ? (100 * r).toFixed(e) : r.toFixed(e)), (r = +r), (r = i ? r + '%' : r));
      },
    };
    n.exports = i;
  }),
  define('VueAjax', ['require', 'exports', 'module', 'commonFunc'], function (t, e, n) {
    var i = t('commonFunc'),
      a = {
        url: '',
        data: { isajax: 1, datatype: 'jsonp' },
        type: 'post',
        dataType: 'jsonp',
        error: function (t, e, n) {
          console.log('errorCallback', n);
        },
        defaultWarning: function (t) {
          i.warningTip(t.errormsg);
        },
      },
      r = {
        jsonp: function (t) {
          var e = {};
          (e.url = t.url),
            t.data ? ((e.data = t.data), (e.data.isajax = 1), (e.data.datatype = 'jsonp')) : (e.data = a.data),
            (e.type = a.type),
            (e.dataType = a.dataType),
            (e.success = function (e) {
              if (0 === e.errorcode) t.success(e.result);
              else {
                if (-1 === e.errorcode && '用户验证失败' === e.errormsg) {
                  var n = $('#ths_iframe_login_popup').css('display');
                  return void (('none' !== n && void 0 !== n) || window.LoginInstance.show());
                }
                t.resulterror ? t.resulterror(e) : a.defaultWarning(e);
              }
            }),
            (e.error = t.error ? t.error : a.error),
            $.ajax(e);
        },
      };
    n.exports = r;
  }),
  define('VueConfig', ['require', 'exports', 'module'], function (t, e, n) {
    var i = {
      ajax: {
        common: { getauthdata: '/platform/user/getauthdata', getprofitrate: 'platform/simuaccount/getprofitrate/' },
        'study-mf': {
          getStrategys: '/platform/factors/getalgorithmslist/',
          folderRename: '/platform/folder/modify/',
          folderDelete: '/platform/folder/delete/',
          folderAdd: '/platform/folder/add/',
          strategysRename: '/platform/factors/update/',
          strategysSave: '/platform/factors/update/',
          strategysDelete: '/platform/algorithms/delete/',
          strategysAdd: '/platform/factors/add/',
          strategysMove: '/platform/algorithms/move/',
          factorsRun: '/platform/factors/run/',
          factorsCancel: '/platform/factors/cancelbacktest/',
          getFactors: '/platform/factors/getlist/',
          getBacktestIds: '/platform/factors/getbacktestinfobygroup/',
          getBacktestDetail: '/platform/backtest/backtestdetail/',
          getTradeDayList: '/platform/backtest/gettradedays/',
          analyze: '/platform/factors/analyze/',
          getStrategyInfo: '/platform/backtest/queryinfo/',
        },
        'study-strategy': {
          getStrategys: '/platform/algorithms/queryall2/',
          folderRename: '/platform/folder/modify/',
          folderDelete: '/platform/folder/delete/',
          folderAdd: '/platform/folder/add/',
          strategysSave: '/platform/algorithms/update/',
          strategysMove: '/platform/algorithms/move/',
          strategysDelete: '/platform/algorithms/delete/',
          strategysRename: '/platform/algorithms/update/',
          strategysAdd: '/platform/algorithms/add/',
          getAceCode: '/platform/algorithms/queryinfo/',
          getBacktestId: '/platform/backtest/querylatest/',
          getAceMessage: '/platform/utils/getautocode/',
          getLastBacktestId: '/platform/backtest/querylatest/',
          getBacktestDetail: '/platform/backtest/backtestdetail/',
          getTradeDayList: '/platform/backtest/gettradedays/',
          getBacktestRecord: '/platform/backtest/getrecord/',
          run: '/platform/backtest/run/',
          getBacktestInfo: '/platform/backtest/queryinfo/',
          cancel: '/platform/backtest/cancel/',
          getBacktestlog: '/platform/backtest/backtestlog/',
          backtestLoop: '/platform/backtest/backtestloop/',
          recordclone: '/platform/algoclone/recordclone/',
          queryRunInfo: '/platform/algorithms/queryruninfo/',
          cancelSelected: '/platform/backtest/cancelselected/',
          addAlgoNote: '/platform/algorithms/add/',
        },
        'backtest-result': {
          getSimuaccountInfo: '/platform/simuaccount/query',
          getYbidList: '/platform/simuaccount/getyybidlist',
          getAddAccount: '/platform/simuaccount/add/',
          submitBindAccount: '/platform/simuaccount/open',
          getStrategysInfo: '/platform/backtest/queryinfo/',
          getBacktestDetail: '/platform/backtest/backtestdetail',
          getbacktestPerformance: '/platform/backtest/backtestperformance',
          getCustomDrawing: '/platform/backtest/getrecord',
          getbacktestByGroup: '/platform/factors/getbacktestinfobygroup',
          getTradelogByDate: '/platform/simuaccount/gettradelogbydate',
          getTradeLog: '/platform/backtest/tradelog',
          getPositionAccountData: '/platform/backtest/stindicator',
          getDailyPositionGains: '/platform/backtest/dailypositiongains',
          getLogsData: '/platform/backtest/backtestlog',
          getProfitData: '/platform/backtest/backspecificinfo',
          getRiskAnalysis: '/platform/backtest/getriskanalysis',
          getBrinsonAnalysis: '/platform/backtest/getbrinsonanalysis',
          getAssetAnalysis: '/platform/backtest/getassetanalysis',
          addTrade: '/platform/simupaper/add/',
          cancelCombination: '/platform/backtest/cancelattributionanalysis',
          getCombinationData: '/platform/backtest/attributionanalysis',
          getTransactionData: '/platform/backtest/tradeoperate',
          getUpperShelfPower: '/platform/creative/isuploaded',
          getIdentityAuth: '/platform/creative/identityauth',
          getStrategyAdd: '/platform/creative/strategyadd',
        },
        'strategy-lib': {
          getStrategylibList: '/platform/algorithms/goodlib',
          getStrategys: '/platform/algorithms/queryall2/',
          strategysSave: '/platform/algorithms/update/',
          getAceCode: '/platform/algorithms/queryinfo/',
          getAceMessage: '/platform/utils/getautocode/',
          getBacktestDetail: '/platform/backtest/backtestdetail/',
          getTradeDayList: '/platform/backtest/gettradedays/',
          getBacktestRecord: '/platform/backtest/getrecord/',
          getBacktestInfo: '/platform/backtest/queryinfo/',
          getBacktestlog: '/platform/backtest/backtestlog/',
          strategysAdd: '/platform/algorithms/add/',
          recordclone: '/platform/algoclone/recordclone/',
          queryclonenum: '/platform/algoclone/queryclonenum',
          researchinfo: '/platform/algorithms/goodlibresearchinfo',
        },
        'strategy-monitor': {
          checkAddedMonitor: '/platform/backtest/checkaddedmonitor',
          getUserMonitorList: '/platform/backtest/queryusermonitor',
          addStrategyMonitor: '/platform/backtest/startmonitor',
          cancelStrategyMonitor: '/platform/backtest/cancelmonitor',
        },
      },
      dev: {
        getStrategys: 'http://quant.10jqka.com.cn/platform/factors/getalgorithmslist/',
        folderRename: 'http://quant.10jqka.com.cn/platform/folder/modify/',
        folderDelete: 'http://quant.10jqka.com.cn/platform/folder/delete/',
        folderAdd: 'http://quant.10jqka.com.cn/platform/folder/add/',
        strategysRename: 'http://quant.10jqka.com.cn/platform/factors/update/',
        strategysSave: 'http://quant.10jqka.com.cn/platform/factors/update/',
        strategysDelete: 'http://quant.10jqka.com.cn/platform/algorithms/delete/',
        strategysAdd: 'http://quant.10jqka.com.cn/platform/factors/add/',
        strategysMove: 'http://quant.10jqka.com.cn/platform/algorithms/move/',
        factorsRun: 'http://quant.10jqka.com.cn/platform/factors/run/',
        getFactors: 'http://quant.10jqka.com.cn/platform/factors/getlist/',
        getBacktestIds: 'http://quant.10jqka.com.cn/platform/factors/getbacktestinfobygroup/',
        getBacktestDetail: 'http://quant.10jqka.com.cn/platform/backtest/backtestdetail/',
        getTradeDayList: 'http://quant.10jqka.com.cn/platform/backtest/gettradedays/',
        analyze: 'http://quant.10jqka.com.cn/platform/factors/analyze/',
      },
    };
    n.exports = i;
  }),
  define('rouleTxt', ['require', 'exports', 'module'], function (t, e, n) {
    n.exports =
      '\n<p>本《用户协议》（以下简称“本协议”）是您(以下也可以“用户”来指代您)与浙江同花顺云软件有限公司(以下简称“本公司”)就使用策略宝平台服务（以下简称“本服务”）所达成的协议。在您开始使用本服务之前，请您务必应认真阅读(未成年人应当在监护人陪同下阅读)并充分理解本协议，特别涉及是免除或者限制本公司责任的条款和开通和使用特殊单项服务的条款。除非您完全接受本协议的全部内容，否则您无权使用本服务。您对本服务的登录、查看、发布信息等行为即视为您已充分理解本协议并承诺作为协议的一方当事人接受协议的约束。</p>\n<br />\n<p>一、协议适用范围</p>\n<p>1.1 本协议约定了本公司和用户之间就使用策略宝平台服务发生的权利义务关系。</p>\n<p>1.2 “本公司”指浙江同花顺云软件有限公司。但就本协议涉及的某些服务项目，本公司的关联企业也可能向您提供服务，与您发生权利义务关系。</p>\n<p>1.3 用户指任何以合法的方式获取和使用策略宝平台服务的人。</p>\n<p>1.4 “策略宝平台”是本公司借助互联网产品——同花顺等软件对自然人、法人或其他组织包括但不限于金融机构及技术服务合作伙伴所开放的量化策略服务渠道。您注册策略宝账号后可以通过策略宝平台进行量化策略研究，向平台提交上传代码进行技术服务支持、与用户交流互动等。</p>\n<br />\n<p>二、使用策略宝平台</p>\n<p>2.1 用户可以从任何合法的渠道登入策略宝平台。</p>\n<p>2.2 本公司授权用户拥有中华人民共和国境内永久地、不可转让的、非独占地和非商业性地使用本服务的权利，但该权利不可转让，本公司也保留在任何必要情形下收回该授权的权利。</p>\n<p>2.3 您在使用本服务前，需要注册一个策略宝平台账号。本公司有权根据用户需求和产品需要对帐号注册和绑定的方式进行变更 。</p>\n<br />\n<p>三、关于“帐号”注册和使用</p>\n<p>3.1 本服务为用户提供了注册通道，用户在有权选择合法的字符组合作为自己的帐号，并自行设置符合安全要求的密码。用户设置的帐号、密码是用户用以登录并以注册用户身份使用本服务的凭证。</p>\n<p>3.2 您在本服务中的注册账号仅限于您本人使用，禁止赠与、借用、出租或售卖。如果本公司发现或者有理由怀疑使用者并非帐号初始注册人，则有权在未经通知的情况下，暂停或终止向该注册账号提供服务，并有权注销该帐号，而无需向注册该帐号的用户承担法律责任。由此带来的包括并不限于用户通讯中断、用户资料和信息等清空等损失由用户自行承担。</p>\n<p>3.3 用户有责任维护个人帐号、密码的安全性与保密性，用户就以其注册帐号名义所从事的一切活动负全部责任，包括用户数据的修改、发表的言论以及其他在策略宝平台上的操作行为。因此，用户应高度重视对帐号与密码的保密，若发现他人未经许可使用其帐号或发生其他任何安全漏洞问题时立即通知本公司。但无论因何种原因发生的密码泄露，均应由用户自行承担责任。</p>\n<p>3.4 用户账号在丢失或遗忘密码后，可遵照本公司的申诉途径及时申诉请求找回账号。用户应提供能增加账号安全性的个人密码保护资料。用户可以凭初始注册资料及个人密码保护资料填写申诉单向本公司申请找回账号，本公司的密码找回机制仅负责识别申诉单上所填资料与系统记录资料的正确性，而无法识别申诉人是否系真正账号有权使用人。对用户因被他人冒名申诉而知的任何损失，本公司不承担任何责任，用户知晓账号及密码保管责任在于用户，本公司并不承诺账号丢失或遗忘密码后用户一定能通过申诉找回账号。</p>\n<p>3.5 用户应保证注册帐号时填写的身份信息的真实性，任何由于非法、不真实、不准确的用户信息所产生的责任由用户承担。用户应不断更新注册资料，符合及时、详尽、真实、准确的要求。所有原始键入的资料将被引用为用户的帐号注册资料。如果因用户的注册信息不真实而引起的问题，以及对问题发生所带来的后果，本公司不负任何责任。如果用户提供的信息不准确、不真实、不合法或者本公司有理由怀疑为错误、不实或不合法的资料或在个人资料中发布广告、不严肃内容及无关信息，本公司有权暂停或终止向用户提供服务，注销该帐号，并拒绝用户现在和未来使用“本服务的全部或任何部分。因此产生的一切损失由用户自行承担。</p>\n<p>3.6 除自行注册策略宝平台帐号外，用户也可选择通过策略宝平台的帐号管理后台，授权使用其合法拥有的新浪微博、腾讯QQ、微信的帐号注册并登录策略宝平台。当用户以上述已有账号注册的，同样适用本协议中对账号的相关约定。</p>\n<p>3.7策略宝平台帐号的所有权归浙江同花顺云软件有限公司，您注册申请通过后，您将拥有策略宝平台帐号的使用权，可以登录并在策略宝平台上制作、复制、发布、传播内容。平台帐号的所有权归浙江同花顺云软件有限公司所有，公司有权因经营需要收回帐号。同时，禁止任何赠与、借用、租用、转让或售卖帐号等的行为。如您违反本协议内容，浙江同花顺云软件有限公司有权对该帐户进行暂停使用、注销或停止提供服务等处理，且不承担任何法律责任，由此导致的包括并不限于您通讯中断、资料和内容等清空等损失由您自行承担。</p>\n<br />\n<p>四、用户个人信息保护</p>\n<p>4.1 您在注册帐号或使用本服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，则无法使用本服务或在使用过程中受到限制。</p>\n<p>4.2 您可随时浏览、修改自己提交的个人身份信息，但出于安全性和身份识别（如账号申诉服务）的考虑，您可能无法修改注册时提供的初始注册信息及其他验证信息。</p>\n<p>4.3本公司将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。但用户同时明白，互联网的开放性以及技术更新非常快，非本公司可控制的因素导致用户信息泄漏的，本公司不承担责任。</p>\n<p>4.4 本公司不会将您的个人信息转移或披露给任何非关联的第三方，除非：</p>\n<p style="text-indent:2em">  （1）相关法律法规或法院、政府机关要求；</p>\n<p style="text-indent:2em">  （2）为完成合并、分立、收购或资产转让而转移；</p>\n<p style="text-indent:2em">  （3）为提供您要求的服务所必需。</p>\n<p>4.5请用户注意勿在使用本服务中透露自己的各类财产帐户、银行卡、信用卡、第三方支付账户及对应密码等重要资料，否则由此带来的任何损失由用户自行承担。用户不应将自认为隐私的信息通过本服务发表、上传或扩散。</p>\n<p>4.6 在以下情况下，本公司有权使用用户的个人信息：</p>\n<p style="text-indent:2em">  （1）在进行促销或抽奖时，本公司可能会与赞助商共享用户的个人信息，在这些情况下本公司会在发送用户信息之前进行提示，并且用户可以通过不参与促销或抽奖活动来终止传送过程；</p>\n<p style="text-indent:2em">  （2）本公司可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本公司同等的保护用户隐私的责任，则本公司有权将用户的注册资料等提供给该第三方；</p>\n<p style="text-indent:2em">  （3）在不透露单个用户隐私资料的前提下，本公司有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。本公司利用您提交的电子邮件用于发送与本公司有关的通知。除前述使用以及您个人行为或同意披露外，本公司不会在网络中向任何第三方显示或共享您的电子邮件信息。</p>\n<br />\n<p>五、【用户行为规范】</p>\n<p>5.1 【信息内容规范】</p>\n<p>5.1.1 本协议所述信息内容是指用户使用本服务过程中所制作、复制、发布、传播的任何内容，包括但不限于头像、名称、用户说明等注册信息及 认证资料，或文字、语音、图片、视频、图文等发送、回复和相关链接页面，以及其他使用本服务所产生的内容。</p>\n<p>5.1.2 您理解并同意，策略宝平台一直致力于为用户提供文明健康、规范有序的网络环境，您不得利用本服务制作、复制、发布、 传播如下干扰策略宝平台正常运营，以及侵犯其他用户或第三方合法权益的内容：</p>\n<p>5.1.2.1 发布、传送、传播、储存违反国家法律法规禁止的内容：</p>\n<p style="text-indent:2em">  （1）违反宪法确定的基本原则的；</p>\n<p style="text-indent:2em">  （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</p>\n<p style="text-indent:2em">  （3）损害国家荣誉和利益的；</p>\n<p style="text-indent:2em">  （4）煽动民族仇恨、民族歧视，破坏民族团结的；</p>\n<p style="text-indent:2em">  （5）破坏国家宗教政策，宣扬邪教和封建迷信的；</p>\n<p style="text-indent:2em">  （6）散布谣言，扰乱社会秩序，破坏社会稳定的；</p>\n<p style="text-indent:2em">  （7）散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；</p>\n<p style="text-indent:2em">  （8）侮辱或者诽谤他人，侵害他人合法权益的；</p>\n<p style="text-indent:2em">  （9）煽动非法集会、结社、游行、示威、聚众扰乱社会秩序；</p>\n<p style="text-indent:2em">  （10）以非法民间组织名义活动的；</p>\n<p style="text-indent:2em">  （11）不遵守法律法规、社会主义制度、国家利益、公民合法利益、公共秩序、社会道德风尚和信息真实性 等“七条底线”要求的；</p>\n<p style="text-indent:2em">  （12）含有法律、行政法规禁止的其他内容的。</p>\n<p>5.1.2.2 发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；</p>\n<p>5.1.2.3 涉及他人隐私、个人信息或资料的内容；</p>\n<p>5.1.2.4 发表、传送、传播骚扰信息、广告信息及垃圾信息或含有任何性或性暗示的内容；</p>\n<p>5.1.2.5 发布、传送、传播谣言、虚假信息或其他含有不实信息的内容；</p>\n<p>5.1.2.6 其他违反法律法规、政策及公序良俗、社会公德或干扰策略宝平台正常运营和侵犯其他用户或第三方合法权益内容的信息。</p>\n<p>5.2 【平台使用规范】</p>\n<p>5.2.1 本条所述平台使用是指用户使用本服务所进行的任何行为，包括但不限于注册登录、申请认证、帐号运营推广以及其他使用策略宝平台所进行的行为。</p>\n<p>5.2.2 您不得利用策略宝平台进行如下行为：</p>\n<p>5.2.2.1 提交、发布虚假信息；</p>\n<p>5.2.2.2 强制、诱导其他用户关注帐号、点击链接页面或分享信息的；</p>\n<p>5.2.2.3 填写和提交帐号注册与认证资料违反本协议规定，运营行为与注册或认证信息所公示身份无关的；</p>\n<p>5.2.2.4 未能按照策略宝平台业务流程注册和使用本服务，违反本服务功能限制或运营策略，或采取任何措施规避前述流程、限制或策略，干扰策略宝平台正常运营的；</p>\n<p>5.2.2.5 未经本公司书面许可利用其他本服务的任何功能，以及第三方运营平台进行推广或互相推广的；</p>\n<p>5.2.2.6 未经本公司书面许可使用插件、外挂或通过其他第三方工具、运营平台或任何服务接入本服务和相关系统的；</p>\n<p>5.2.2.7 利用策略宝平台服务从事包括但不限于欺诈、传销、违法物品营销等任何违法犯罪活动的；</p>\n<p>5.2.2.8 制作、发布与以上行为相关的方法、工具，或对此类方法、工具进行运营或传播，无论这些行为是否为商业目的；</p>\n<p>5.2.2.9 仿冒、混淆他人帐号昵称、头像、功能介绍或发布内容等，或冒充、利用他人名义的；</p>\n<p>5.2.2.10 未经本公司书面许可，自行或授权、允许、协助任何第三人对信息内容进行非法获取，用于包括但不限于宣传、增加阅读量、浏览量等商业用途 的。“非法获取”是指采用包括但不限于“蜘蛛”(spider)程序、爬虫程序、拟人程序等非真实用户或避开、破坏技术措施等非正常浏览的手段、方式，读取、 复制、转存、获得数据和信息内容的行为；</p>\n<p>5.2.2.11 未经本公司书面许可，与第三方达成任何形式的协议、承诺或确认，在策略宝平台发布任何对本服务所提供的任何功能进行排他、排斥、排除、妨碍、阻碍、强制选择等非善意竞争的内容；\n<p>5.2.2.12 任何导致或可能导致本公司与第三方产生纠纷、争议或诉讼的行为。</p>\n<p>5.2.3 您在使用本服务的过程中，不得从事包括但不限于以下行为，也不得为以下行为提供便利（包括但不限于为用户的行为提供便利等）；</p>\n<p>5.2.3.1删除、隐匿、改变本服务显示或其中包含的任何专利、著作权、商标或其他权利声明；</p>\n<p>5.2.3.2以任何方式干扰或企图干扰本公司任何产品、任何部分或功能的正常运行，或者制作、发布、传播上述工具、方法等；</p>\n<p>5.2.3.3 除无法绕开的内容显示需要外，未经本公司书面许可，不得以本公司名义使用任何本公司商标标识或其任何变体、缩写、改写等；</p>\n<p>5.2.3.4 避开、尝试避开或声称能够避开任何内容保护机制，或导致用户认为其直接与本公司及本公司相关产品进行交互；</p>\n<p>5.2.3.5 除无法绕开的信息内容显示需要外，在未获得本公司书面许可的情况下，以任何方式使用本公司URL地址、技术接口等；</p>\n<p>5.2.3.6 在未经过用户同意的情况下，向任何其他用户及他方显示或以其他任何方式提供该用户的任何信息；</p>\n<p>5.2.3.7 在没有获得用户和本公司明示同意的情况下，擅自以本公司的名义向用户发布、发送商业广告等信息；</p>\n<p>5.2.3.8 为任何用户自动登录到本服务平台提供代理身份验证凭据；</p>\n<p>5.2.3.9 提供跟踪功能，包括但不限于识别其他用户在个人主页上查看、点击等操作行为；</p>\n<p>5.2.3.10 自动将浏览器窗口定向到其他网页；</p>\n<p>5.2.3.11 未经授权获取对本公司产品或服务的访问权；</p>\n<p>5.2.3.12 发布的信息内容中含有计算机病毒、木马或者其他恶意程序、链接等任何可能危害本公司或用户权益和终端信息安全等的内容；</p>\n<p>5.2.3.13 捏造或虚构事实，或未经本公司书面同意，公开表达或暗示，您与本公司之间存在合作关系，包括但不限于相互持股、商业往来或合作关系等，或声称本公司对您的认可；</p>\n<p>5.2.3.14 其他本公司认为不应该、不适当的行为、内容。</p>\n<p>5.3【对自己行为负责】</p>\n<p>您理解并同意，策略宝平台仅为用户提供量化策略研究、传播及获取的平台，您必须为自己注册帐号下的一切行为负责，包括您所发表的任何内容以及由此产生的任何后果。您应对本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。本公司无法且不会对因前述风险而导致的任何损失或损害承担责任。</p>\n<p>5.4 您保证：不对平台、技术接口、本服务数据进行反向工程（reverse engineer）、反向编译（decompile）或反汇编（disassemble）；不对平台、技术接口、本服务数据进行内容、功能、逻辑及界面等任何方面的修改；不得将平台、技术接口、本服务数据或业务用于本协议以外目的。</p>\n<br />\n<p>六、知识产权</p>\n<p>6.1 本公司在本服务中提供的内容（包括但不限于软件、技术、程序、网页、文字、图片、图像、音频、视频、图表、版面设计、电子文档等）的知识产权属于本公司所有。本公司提供本服务时所依托的软件的著作权、专利权及其他知识产权均归本公司所有。未经本公司许可，任何人不得擅自使用（包括但不限于通过任何机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像本服务中的内容）。</p>\n<p>6.2 您理解并同意，在使用本服务时发布上传的文字、图片、视频、音频等均由您原创或已获合法授权。您通过策略宝平台上传、发布的任何内容的知识产权归属策略宝平台所有。</p>\n<p>6.3 用户应保证，在使用本服务时上传的文字、图片、视频、音频等的信息不侵犯任何第三方知识产权。否则，本公司有权移除该侵权信息，并对此不负任何责任。前述第三方提出权利主张，用户应自行承担责任，并保证本公司不会因此而遭受任何损失。</p>\n<p>6.4 您知悉、理解并同意您通过策略宝平台发布、传播的内容，授权公司及其关联公司、控制公司可在全球范围内、免费、非独家、可转授权地使用，使用范围包括但不限于在当前或其他网站、应用程序、产品或终端设备等，并授权本公司及其关联公司、控制公司对相应内容可进行修改、复制、改编、翻译、汇编或制作衍生产品。</p>\n<p>6.5 您确认并同意授权本公司以本公司自己的名义或委托专业第三方对侵犯您上传发布的享有知识产权的内容进行代维权，维权形式包括但不限于：监测侵权行为、发送维权函、提起诉讼或仲裁、调解、和解等，公司有权对维权事宜做出决策并独立实施。</p>\n<p>6.6 公司为策略宝平台的开发、运营提供技术支持，并对策略宝平台服务的开发和运营等过程中产生的所有数据和信息等享有全部权利。</p>\n<p>6.7 请您在任何情况下都不要私自使用公司的包括但不限于 “同花顺”、“策略宝”、和“10jqka.com”等在内的任何商标、服务标记、商号、域名、网站名称或其他显著品牌特征等（以下统称为“标识”）。未经本公司事先书面同意，您不得将本条款前述标识以单独或结合任何方式展示、使用或申请注册商标、进行域名注册等，也不得实施向他人明示或暗示有权展示、使用、或其他有权处理该些标识的行为。由于您违反本协议使用公司上述商标、标识等给公司或他人造成损失的，由您承担全部法律责任。</p>\n<br />\n<p>七、隐私协议</p>\n<p>7.1 您知悉并同意：个人隐私信息是指能够对您进行个人辨识或涉及个人通信的信息，包括您的真实姓名、身份证号、手机号码、银行账户、IP地址等。非个人隐私信息是指您对本服务的操作状态以及使用习惯等一些明确且客观反映在策略宝平台服务器端的基本记录信息和其他一切个人隐私信息范围外的普通信息，以及您同意公开的上述隐私信息。</p>\n<p>7.2 策略宝平台不对外公开或向第三方提供您的注册资料及用户在使用网络服务时存储在本网站的非公开内容，但下列情况除外：</p>\n<p style="text-indent:2em">（1）事先获得您的明确授权；</p>\n<p style="text-indent:2em">（2）根据有关的法律法规要求；</p>\n<p style="text-indent:2em">（3）按照相关政府主管部门的要求；</p>\n<p style="text-indent:2em">（4）该第三方同意承担与本平台同等的保护隐私的责任。</p>\n<p>7.3 在不透露您隐私资料的前提下，本平台有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</p>\n<br />\n<p>八、服务的变更、中断和终止</p>\n<p>8.1您理解并同意，本公司提供的本服务是按照现有技术和条件所能达到的现状提供的。本公司会尽最大努力向您提供服务，确保服务的连贯性和安全性；但本公司不能随时预见和防范法律、技术以及其他风险，包括但不限于不可抗力、病毒、木马、黑客攻击、系统不稳定、第三方服务瑕疵、政府行为等原因可能导致的服务中断、数据丢失以及其他的损失和风险。</p>\n<p>8.2 用户须明白，本公司为了服务整体运营的需要，有权在公告通知后，在不事先通知用户的情况下修改、中断、中止或终止策略宝平台内的各项服务，而无须向用户或第三方负责或承担任何赔偿责任。</p>\n<br />\n<p>九、法律责任声明</p>\n<p>9.1 本公司对于任何自本网站而获得的他人的信息、内容或者广告宣传等任何资讯(以下统称“信息”)，不负保证真实、准确和完整性的责任。如果任何单位或者个人通过上述“信息”而进行任何行为，须自行甄别真伪和谨慎预防风险，否则，无论何种原因，本公司不对任何非与本网站直接发生的交易和(或)行为承担任何直接、间接、附带或衍生的损失和责任。</p>\n<p>9.2 若您提交的注册信息和材料不真实、不完整、不合法或无效，那么导致或产生的一切法律责任由您承担。浙江同花顺云软件有限公司有权随时封禁或删除您的平台帐号，以及中止或终止为您提供策略宝平台的相关服务。</p>\n<p>9.3 本公司不保证(包括但不限于)：</p>\n<p style="text-indent:2em">  （1）本公司完全适合用户的使用要求；</p>\n<p style="text-indent:2em">  （2）本公司不受干扰，及时、安全、可靠或不出现错误；用户经由本公司取得的任何产品、服务或其他材料符合用户的期望；</p>\n<p style="text-indent:2em">  （3）软件中任何错误都将能得到更正。</p>\n<p>9.4 您理解并认可，策略宝平台为提供量化策略分享、传播及研究的平台，您在使用策略宝平台时，请您自行对内容加以判断，并承担因使用内容而引起的所有风险。您须为自己注册帐户下的一切行为负责，包括您所发表内容的真实性、合法性、准确性、有效性，以及承担因账号使用、运营、管理行为产生的结果。您应对策略宝平台中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容真实性、合法性、准确性、有效性的依赖而产生的风险。浙江同花顺云软件有限公司无法且不会对因您的行为而导致的损失或损害承担责任。 如果您发现任何人违反本协议规定或以其他不当的方式使用策略宝平台服务，请立即举报或投诉，浙江同花顺云软件有限公司将依法进行处理。</p>\n<p>9.5 对违反有关法律法规或本协议规定的行为，浙江同花顺云软件有限公司将依法律规定及上述规则等加以合理判断进行处理，对违法违规的任何人士采取适当的法律行动，并依据法律法规保存有关信息并向有关部门报告等。</p>\n<p>9.6 若您上传、发布的内容或其他在策略宝平台上从事的行为侵害他人利益并引发第三方的任何索赔、要求或赔偿的，需由您承担全部法律责任。若因此给浙江同花顺云软件有限公司或第三方造成任何损失，您应负责赔偿并使之免受损害，损失包括但不限于诉讼费用、律师费用、和解费用、罚款或生效法律文书中规定的损害赔偿金额及其他直接或间接支出费用。</p>\n<p>9.7 若浙江同花顺云软件有限公司发现您不当使用本平台帐号或因您的帐号被他人举报投诉时，浙江同花顺云软件有限公司有权不经通知随时删除相关内容，并视行为情节对违规帐号进行处理，处理方式包括但不限于警告、删除部分或全部订阅用户、限制或禁止使用全部或部分功能、帐号封禁甚至注销，并有权视具体情况而公告处理结果。</p>\n<p>9.8 因技术故障等不可抗事件影响到本服务的正常运行的，策略宝平台及其合作单位承诺在第一时间内与相关单位配合，及时处理进行修复，但您因第三方如电信部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他各种不可抗力原因而遭受的一切损失，策略宝平台及其合作单位不承担责任。</p>\n<br />\n<p>十、关于单项服务的特殊约定</p>\n<p>10.1 策略宝平台中包含本公司研究发布的量化策略以及用户展示的量化策略研究成果，同时也包括本公司或其关联企业合法运营的其他单项服务。这些服务以“策略商城”，“策略创作平台”特别频道的形式存在，包括但不限于“段子”、“美女”、“趣图”、“语录”、“特卖”和“彩票”等。本公司将不时地增加、减少或改动这些特别频道的设置。</p>\n<p>10.2 您可以在策略宝平台中开启和使用上述单项服务功能。某些单项服务可能需要您同时接受就该服务特别制订的用户协议、使用协议或者其他约束您与该项服务提供者之间的法律文件。本公司将以醒目的方式提供这些法律文件供您查阅。但一旦您开始使用上述服务，则视为您同时接受有关单项服务的相关法律文件的约束。</p>\n<br />\n<p>十一、违约责任</p>\n<p>用户因违反国家法律法规或本协议的约定或用户侵害他人任何权利因而衍生或导致任何第三人向本公司提出任何索赔或请求，包括但不限于诉讼费用、律师费用、差旅费用、和解金额、罚款或生效法律文书中规定的损害赔偿金额、软件使用费等而给本公司造成损失的，用户应赔偿本公司因此而遭受的一切损失，并消除影响。</p>\n<br />\n<p>十二、其他条款</p>\n<p>12.1本协议的订立、执行和解释及争议的解决均应适用中国法律。倘本协议之任何规定因与中华人民共和国法律抵触而无效，则这些条款将尽可能接近本协议原条文意旨重新解析，且本协议其它规定仍应具有完整的效力及效果。本协议的签署地点为本公司公司所在地，若用户与本公司发生争议的，双方同意将争议提交本公司公司所在地法院诉讼解决。</p>\n<p>12.2本协议可能因国家政策、产品以及履行环境发生变化而进行修改，本公司会将修改后的协议发布在网站上。若您对修改后的协议有异议的，请立即停止登录、使用策略宝平台及服务，若您登录或继续使用策略宝平台及服务，视为认可修改后的协议。</p>\n    ';
  }),
  define('exportMethod', [], function () {
    return {
      download: function (t, e, n) {
        var i = this.UA();
        if (i.indexOf('IE') > -1 && parseInt(i.replace('IE', '')) < 10) {
          var a = window.top.open('about:blank', '_blank');
          a.document.write('sep=\rn' + e), owin.document.close(), a.document.execCommand('SaveAs', !0, t), a.close();
        } else if (i.indexOf('IE10') > -1 || 'IE11' === i || 'Edge' === i) {
          var r = new Blob(['\ufeff' + e], { type: n });
          navigator.msSaveBlob(r, t);
        } else {
          var s = document.createElement('a');
          if (
            (s.setAttribute('href', this._getDownloadUrl(e, n)),
            s.setAttribute('target', '_blank'),
            s.setAttribute('download', t),
            (s.style.display = 'none'),
            $('body').append(s),
            'Safari' === i)
          ) {
            var o = document.createEvent('MouseEvents');
            o.initEvent('click', !0, !0), s.dispatchEvent(o);
          } else s.click();
        }
      },
      _getDownloadUrl: function (t, e) {
        if (window.Blob && window.URL && window.URL.createObjectURL) {
          var n = new Blob(['\ufeff' + t], { type: e });
          return URL.createObjectURL(n);
        }
        return 'data:attachment/' + e.replace('text/', '') + ';charset=utf-8,\ufeff' + encodeURIComponent(t);
      },
      UA: function () {
        var t = navigator.userAgent;
        return t.indexOf('Chrome') > -1
          ? 'Chrome'
          : t.indexOf('Opera') > -1
          ? 'Opera'
          : t.indexOf('Firefox') > -1
          ? 'Firefox'
          : t.indexOf('Safari') > -1
          ? 'Safari'
          : t.indexOf('compatible') > -1 && t.indexOf('MSIE') > -1
          ? 'IE' + t.match(/MSIE (\d+\.\d+)/i)[1]
          : !t.indexOf('Trident') > -1 && t.indexOf('rv:11') > -1
          ? 'IE11'
          : 'Edge';
      },
    };
  }),
  define(
    '../components/backtest-result/simu-trade-modal/simu-trade-content',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc'],
    function (t, e, n) {
      t('VueAjax'), t('VueConfig'), t('commonFunc');
      n.exports = Vue.extend({
        template:
          '<div><div class="popbox-controller"><span class="popbox-label" style="width: 98px;">选择模拟账户：</span><div class="opensimu-selection" @mouseleave="leaveAccountPannel" style="width: 211px;"><span class="selection-text" v-on:click="showAccountList" style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{{hasAccountName}}</span><span class="icon icon-down fr mt5"></span><ul id="opensimu_options" class="opensimu-options" v-bind:class="{ hide: hideAccountList }"><li v-on:click="selectAccount(index, item)" v-for="(item, index) in accountList" class="opensimu-option">{{item["account_name"]}}</li></ul></div></div><div class="popbox-controller" v-show="!isAddNewAccount &amp;&amp; hasAccountSimu"><span class="popbox-label" style="width: 98px;">股票模拟资金：</span><div class="opensimu-selection-readonly" style="width: 211px;"><span class="selection-text">{{hasAccountSimuFund}}</span></div>&nbsp;元</div><div class="popbox-controller" v-show="!isAddNewAccount &amp;&amp; hasAccountFutures"><span class="popbox-label" style="width: 98px;">期货模拟资金：</span><div class="opensimu-selection-readonly" style="width: 211px;"><span class="selection-text">{{hasAccountStockFund}}</span></div>&nbsp;元</div><div class="popbox-controller popbox-controller-account-name" v-show="isAddNewAccount"><span class="popbox-label" style="width: 98px;">模拟账户名称：</span><div class="opensimu-selection" style="width: 211px;"><input class="selection-text" type="text" v-model="addAccountName"></div></div><div class="popbox-controller" v-show="isAddNewAccount"><span class="popbox-label" style="width: 98px;">模拟账户类型：</span><div class="opensimu-selection" @mouseleave="leaveAccountTypePannel" style="width: 211px;"><span class="selection-text" v-on:click="showAddAccountType">{{addAccountTypeName}}</span><span class="icon icon-down fr mt5"></span><ul id="opensimu_options" class="opensimu-options" v-bind:class="{ hide: hideAddAccountType }"><li v-on:click="tabChangeAddAccountType(index, item)" v-for="(item, index) in addAccountTypeList" class="opensimu-option">{{item.typeName}}</li></ul></div></div><div class="popbox-controller" v-show="isAddNewAccount &amp;&amp; isAddNewSimu"><span class="popbox-label" style="width: 98px;">股票模拟资金：</span><div class="opensimu-selection opensimu-selection-unit" @mouseleave="leaveSimuPannel" style="width: 178px;"><span class="selection-text" v-on:click="showAddSimuFunc">{{addSimuFund}}</span><span class="icon icon-down fr mt5"></span><ul id="opensimu_options" class="opensimu-options" v-bind:class="{ hide: isShowAddSimuList }"><li v-on:click="tabChangeAddSimu(index, item)" v-for="(item, index) in simuYybid" class="opensimu-option">{{item.money}}</li></ul></div>&nbsp;万元</div><div class="popbox-controller" v-show="isAddNewAccount &amp;&amp; isAddNewFutures"><span class="popbox-label" style="width: 98px;">期货模拟资金：</span><div class="opensimu-selection opensimu-selection-unit" @mouseleave="leaveFuturesPannel" style="width: 178px;"><span class="selection-text" v-on:click="showAddFuturesFunc">{{addFuturesFund}}</span><span class="icon icon-down fr mt5"></span><ul id="opensimu_options" class="opensimu-options" v-bind:class="{ hide: isShowAddFuturesList }"><li v-on:click="tabChangeAddFutures(index, item)" v-for="(item, index) in futuresYybid" class="opensimu-option">{{item.money}}</li></ul></div>&nbsp;万元</div></div>',
        components: {},
        props: ['modalhide', 'modaldata', 'modalyybid'],
        watch: {
          modalhide: function () {
            this.modalhide || this.renderModal();
          },
        },
        computed: {},
        data: function () {
          return {
            accountList: [],
            isAddNewAccount: !1,
            hideAccountList: !0,
            hasAccountSimuFund: null,
            hasAccountStockFund: null,
            hasAccountName: null,
            hasAccountType: null,
            hasAccountSimu: !1,
            hasAccountFutures: !1,
            addAccountName: '默认账户',
            addAccountTypeList: [],
            hideAddAccountType: !0,
            addAccountType: null,
            addAccountTypeName: '请选择账户类型',
            isAddNewSimu: !1,
            isAddNewFutures: !1,
            isShowAddSimuList: !0,
            isShowAddFuturesList: !0,
            addSimuFund: 0,
            addFuturesFund: 0,
            simuYybid: [],
            futuresYybid: [],
            simuCode: null,
            futuresCode: null,
          };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        mounted: function () {},
        methods: {
          renderModal: function () {
            var t = this;
            t.resetData(),
              (t.accountList = t.modaldata),
              (t.hasAccountName = t.accountList[0].account_name),
              (t.hasAccountSimuFund = t.accountList[0].simu_cash),
              (t.hasAccountStockFund = t.accountList[0].futures_cash),
              (t.hasAccountType = t.accountList[0].account_type),
              (t.hasAccountCode = t.accountList[0].account_code),
              (t.hasAccountSimu = 'futures' !== t.hasAccountType),
              (t.hasAccountFutures = 'simu' !== t.hasAccountType),
              (t.simuYybid = []),
              (t.futuresYybid = []),
              t.modalyybid &&
                (t.modalyybid.simu &&
                  (t.addAccountTypeList.push({ typeName: '股票型', type: 'simu' }),
                  $.each(t.modalyybid.simu, function (e, n) {
                    t.simuYybid.push({ money: e, code: n });
                  }),
                  (t.addSimuFund = t.simuYybid[0].money),
                  (t.simuCode = t.simuYybid[0].code)),
                t.modalyybid.futures &&
                  (t.addAccountTypeList.push({ typeName: '期货型', type: 'futures' }),
                  $.each(t.modalyybid.futures, function (e, n) {
                    t.futuresYybid.push({ money: e, code: n });
                  }),
                  (t.addFuturesFund = t.futuresYybid[0].money),
                  (t.futuresCode = t.futuresYybid[0].code)),
                t.modalyybid.simu && t.modalyybid.futures && t.addAccountTypeList.push({ typeName: '混合型', type: 'mixed' }));
          },
          resetData: function () {
            (this.accountList = []),
              (this.isAddNewAccount = !1),
              (this.hideAccountList = !0),
              (this.hasAccountSimuFund = null),
              (this.hasAccountStockFund = null),
              (this.hasAccountName = null),
              (this.hasAccountType = null),
              (this.hasAccountSimu = !1),
              (this.hasAccountFutures = !1),
              (this.addAccountName = '默认账户'),
              (this.addAccountTypeList = []),
              (this.hideAddAccountType = !0),
              (this.addAccountType = null),
              (this.addAccountTypeName = '请选择账户类型'),
              (this.isAddNewSimu = !1),
              (this.isAddNewFutures = !1),
              (this.isShowAddSimuList = !0),
              (this.isShowAddFuturesList = !0),
              (this.addSimuFund = 0),
              (this.addFuturesFund = 0),
              (this.simuYybid = []),
              (this.futuresYybid = []),
              (this.simuCode = null),
              (this.futuresCode = null);
          },
          showAccountList: function () {
            var t = this;
            t.hideAccountList ? (t.hideAccountList = !1) : (t.hideAccountList = !0),
              (t.hideAddAccountType = !0),
              (t.isShowAddSimuList = !0),
              (t.isShowAddFuturesList = !0);
          },
          selectAccount: function (t, e) {
            var n = this;
            if (
              ((n.hideAccountList = !0),
              (n.hasAccountName = e.account_name),
              (n.addAccountType = null),
              (n.hasAccountType = null),
              (n.hasAccountCode = null),
              null === e.account_yybid)
            )
              return (
                (n.isAddNewAccount = !0),
                (n.addSimuFund = n.simuYybid[0] ? n.simuYybid[0].money : null),
                (n.simuCode = n.simuYybid[0] ? n.simuYybid[0].code : null),
                (n.addFuturesFund = n.futuresYybid[0] ? n.futuresYybid[0].money : null),
                (n.futuresCode = n.futuresYybid[0] ? n.futuresYybid[0].code : null),
                (n.addAccountName = '默认账户'),
                (n.addAccountTypeName = '请选择账户类型'),
                (n.isShowAddFuturesList = !0),
                (n.isShowAddSimuList = !0),
                (n.hideAddAccountType = !0),
                (n.isAddNewSimu = !1),
                (n.isAddNewFutures = !1),
                !1
              );
            (n.isAddNewAccount = !1),
              (n.hasAccountSimuFund = e.simu_cash),
              (n.hasAccountStockFund = e.futures_cash),
              (n.hasAccountType = e.account_type),
              (n.hasAccountCode = e.account_code),
              (n.hasAccountSimu = 'futures' !== n.hasAccountType),
              (n.hasAccountFutures = 'simu' !== n.hasAccountType);
          },
          showAddAccountType: function () {
            var t = this;
            t.hideAddAccountType ? (t.hideAddAccountType = !1) : (t.hideAddAccountType = !0),
              (t.hideAccountList = !0),
              (t.isShowAddSimuList = !0),
              (t.isShowAddFuturesList = !0);
          },
          tabChangeAddAccountType: function (t, e) {
            var n = this;
            (n.addAccountTypeName = e.typeName),
              (n.addAccountType = e.type),
              (n.hideAddAccountType = !0),
              (n.futuresCode = null),
              (n.simuCode = null),
              (n.addSimuFund = null),
              (n.addFuturesFund = null),
              'simu' === e.type
                ? ((n.isAddNewSimu = !0),
                  (n.isAddNewFutures = !1),
                  (n.addSimuFund = n.simuYybid[0] ? n.simuYybid[0].money : null),
                  (n.simuCode = n.simuYybid[0] ? n.simuYybid[0].code : null))
                : 'futures' === e.type
                ? ((n.isAddNewFutures = !0),
                  (n.isAddNewSimu = !1),
                  (n.addFuturesFund = n.futuresYybid[0] ? n.futuresYybid[0].money : null),
                  (n.futuresCode = n.futuresYybid[0] ? n.futuresYybid[0].code : null))
                : 'mixed' === e.type &&
                  ((n.isAddNewSimu = !0),
                  (n.isAddNewFutures = !0),
                  (n.addSimuFund = n.simuYybid[0] ? n.simuYybid[0].money : null),
                  (n.simuCode = n.simuYybid[0] ? n.simuYybid[0].code : null),
                  (n.addFuturesFund = n.futuresYybid[0] ? n.futuresYybid[0].money : null),
                  (n.futuresCode = n.futuresYybid[0] ? n.futuresYybid[0].code : null));
          },
          showAddSimuFunc: function () {
            var t = this;
            t.isShowAddSimuList ? (t.isShowAddSimuList = !1) : (t.isShowAddSimuList = !0),
              (t.isShowAddFuturesList = !0),
              (t.hideAddAccountType = !0),
              (t.hideAccountList = !0);
          },
          showAddFuturesFunc: function () {
            var t = this;
            t.isShowAddFuturesList ? (t.isShowAddFuturesList = !1) : (t.isShowAddFuturesList = !0),
              (t.isShowAddSimuList = !0),
              (t.hideAddAccountType = !0),
              (t.hideAccountList = !0);
          },
          tabChangeAddSimu: function (t, e) {
            var n = this;
            (n.addSimuFund = e.money), (n.simuCode = e.code), (n.isShowAddSimuList = !0);
          },
          tabChangeAddFutures: function (t, e) {
            var n = this;
            (n.addFuturesFund = e.money), (n.futuresCode = e.code), (n.isShowAddFuturesList = !0);
          },
          getParams: function () {
            var t = this,
              e = {};
            return (
              t.hasAccountType && (e.simuaccount = t.hasAccountCode),
              t.addAccountType &&
                ((e.account_name = t.addAccountName),
                (e.account_type = t.addAccountType),
                (e.simu_yybid = t.simuCode),
                (e.futures_yybid = t.futuresCode)),
              e
            );
          },
          leaveAccountPannel: function () {
            this.hideAccountList = !0;
          },
          leaveAccountTypePannel: function () {
            this.hideAddAccountType = !0;
          },
          leaveSimuPannel: function () {
            this.isShowAddSimuList = !0;
          },
          leaveFuturesPannel: function () {
            this.isShowAddFuturesList = !0;
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/simu-trade-modal/simu-trade-modal',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', './simu-trade-content'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = (t('commonFunc'), t('./simu-trade-content'));
      n.exports = Vue.extend({
        template:
          '<div class="container-mask" v-bind:class="{hide: ishidemodal}"><div class="container-maskbg"></div><div class="popbox plugin-dialog" v-bind:class="{popboxClass}"><div class="icon popbox-btn-close" v-on:click="cancelFunc"></div><div class="popbox-title"><div class="text">{{title}}</div></div><div class="popbox-container p10"><simu-trade-content ref="child" :modaldata="modaldatalist" :modalhide="modalcontenthide" :modalyybid="yybid"></simu-trade-content></div><div class="popbox-footer plugin-dialog-footer"><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" v-on:click="okFunc">确定</div><div class="btn plugin-dialog-btn btn-hollow-grey popbox-btn-cancel" v-on:click="cancelFunc">取消</div></div></div></div>',
        components: { 'simu-trade-content': r },
        props: ['ishidemodal', 'modaldatalist', 'modalcontenthide', 'yybid'],
        data: function () {
          return { title: '开启仿真交易', popboxClass: 'simu-popbox' };
        },
        computed: {
          backTestId: function () {
            return this.$store.state.backTestId;
          },
        },
        watch: { ishidemodal: function () {}, modaldatalist: function () {} },
        beforeCreate: function () {},
        beforeMount: function () {},
        mounted: function () {},
        methods: {
          renderModal: function () {},
          cancelFunc: function () {
            this.$emit('modal-return', !0);
          },
          okFunc: function () {
            var t = this,
              e = null;
            if (((e = t.$refs.child.getParams()), e.simuaccount)) {
              var n = e;
              (n.backtestid = t.backTestId), t.submitAccountInfo(n);
            }
            e.account_type &&
              i.jsonp({
                url: a.ajax['backtest-result'].getAddAccount,
                data: e,
                success: function (e) {
                  var n = {};
                  (n.simuaccount = e.simu_account), (n.backtestid = t.backTestId), t.submitAccountInfo(n);
                },
              });
          },
          submitAccountInfo: function (t) {
            var e = this;
            i.jsonp({
              url: a.ajax['backtest-result'].submitBindAccount,
              data: t,
              success: function (n) {
                e.$emit('modal-return', !0), (location.href = 'trade.html#account/' + t.simuaccount);
              },
            });
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/breadcrumbs/breadcrumbs',
    [
      'require',
      'exports',
      'module',
      'VueAjax',
      'VueConfig',
      'commonFunc',
      'rouleTxt',
      'exportMethod',
      '../simu-trade-modal/simu-trade-modal',
    ],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('rouleTxt'),
        o = t('exportMethod'),
        l = t('../simu-trade-modal/simu-trade-modal');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-common-info"><div class="backreport-breadcrumbs"><div class="backreport-breadcrumbs-left">\x3c!-- 策略名 --\x3e<div class="backreport-breadcrumbs-name"><span v-show="showLinkBtn" :title="strategyName">{{strategyName}}</span><a :href="backtestStratgyLibLink" v-show="!showLinkBtn" :title="strategyName">&lt; {{strategyName}}</a></div>\x3c!-- 多因子页面分组信息（第一组，第二组...） --\x3e<div class="s_selectbox backreport-breadcrumbs-group" v-bind:class="{hide: hideGruops}" @mouseleave="hideGroupList"><div class="breadcrumbs-group-text" v-on:click="selectGroup">{{currentGroup}}</div><div class="breadcrumbs-group-list s_selectbox_list" v-show="isHideGruopList"><div v-on:click="renderFactorPage(index, group.backTestId)" v-for="(group, index) in groups" class="s_selectbox_item">{{group.gruopName}}</div></div></div></div><ul class="backreport-breadcrumbs-right" v-show="showLinkBtn &amp;&amp; !hideWhenAlgoIdNull" v-if="!ismachineshow"><li><a :href="backtestMenuLink" :target="jump" class="item" v-stat="{act: \'index\'}">返回策略目录</a></li><li><a :href="backtestEditingLink" :target="jump" class="item" v-stat="{act: \'edit\'}">返回策略编辑</a></li><li><a :href="backtestHistoryLink" :target="jump" class="item" v-stat="{act: \'list\'}">返回回测列表</a></li></ul><ul class="backreport-breadcrumbs-right" v-show="newmyfactor" v-if="!ismachineshow"><li><a :href="factorBacktestMenuLink" class="item" v-stat="{act: \'edit\'}">返回策略目录</a></li><li><a :href="factorBacktestEditingLink + algoId" class="item" v-stat="{act: \'list\'}">返回策略编辑</a></li><li><a :href="factorBacktestHistoryLink + algoId" class="item" v-stat="{act: \'list\'}">返回回测列表</a></li></ul><ul class="backreport-breadcrumbs-right" v-show="showFactorLinkBtn" v-if="!ismachineshow"><li><a :href="backtestHistoryLink" target="_blank" class="item" v-stat="{act: \'list\'}">返回回测列表</a></li></ul><ul class="backreport-breadcrumbs-right" v-if="ismachineshow"><li><a :href="\'/platform/html/machine.html#/policyEditor/\' + algoId" class="item" v-stat="{act: \'edit\'}">返回策略编辑</a></li><li><a :href="\'/platform/html/machine.html#/backHistory/\' + algoId" class="item" v-stat="{act: \'list\'}">返回回测列表</a></li></ul></div>\x3c!-- 已完成（或失败） --\x3e<div class="backreport-toolbar" v-if="showStatusType &amp;&amp; showStatus"><div class="fl ml15"><p><span>回测日期：{{formDate}} 至 {{toDate}}</span><span class="gap-line">|</span><span>资金：{{initMoney}}</span><span class="gap-line">|</span><span>频率：{{tradeFrequency}}</span><span class="gap-line">|</span><span>总运行时长：{{backTestFail == 2 ? \'--\':testSpendTime}}秒</span><span v-show="showLinkBtn">（{{backTestFail == 2 ? \'运行失败\':\'完成\'}}）</span></p></div><div class="fr" v-show="!showLinkBtn" v-if="!ismachineshow"><div class="btn-export mr10" @mouseleave="hideExportPannel" v-stat="{act: \'export\'}"><span v-if="!isShowExportProgress" class="txt btn-blue" @click="exportClick"><i class="btn-txt">导出结果</i><i class="icon-down-triangle"></i></span><span v-else="" class="txt btn-blue btnnotallowed">导出中</span><ul class="tb-export-items" v-bind:class="{ show: isShowExportPannel }"><a class="tb-export-item" @click="exportTransaction" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.mx\'}">交易明细</a><a class="tb-export-item" @click="exportHistoryOld" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.cc\'}">历史持仓</a>\x3c!-- <a class="tb-export-item" @click="exportHistory" v-stat="{act: \'export.ccgp\'}">历史持仓(股票)</a><a class="tb-export-item" @click="exportAccount" v-stat="{act: \'export.xx\'}">账户信息</a>--\x3e<a class="tb-export-item" @click="exportLogs" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.log\'}">输出日志</a></ul></div></div><div class="fr" v-show="showLinkBtn" v-if="!ismachineshow"><div class="btn-export mr10" @mouseleave="hideExportPannel"><span v-if="!isShowExportProgress" class="txt btn-blue" @click="exportClick" v-stat="{act: \'export\'}"><i class="btn-txt">导出结果</i><i class="icon-down-triangle"></i></span><span v-else="" class="txt btn-blue btnnotallowed">导出中</span><ul class="tb-export-items" v-bind:class="{ show: isShowExportPannel }"><a class="tb-export-item" @click="exportTransaction" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.mx\'}">交易明细</a><a class="tb-export-item" @click="exportHistoryOld" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.cc\'}">历史持仓</a>\x3c!-- <a class="tb-export-item" @click="exportHistory" v-stat="{act: \'export.cc\'}">历史持仓(股票)</a><a class="tb-export-item" @click="exportAccount">账户信息</a>--\x3e<a class="tb-export-item" @click="exportLogs" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }" v-stat="{act: \'export.log\'}">输出日志</a></ul></div>\x3c!-- <divv-on:click="upperShelf"v-show="!hideWhenAlgoIdNull"v-if="modelType === \'STOCK\'"class="btn btn-blue mr10">上架至策略宝<spanv-show="tipTxt"class="icon2 icon-help h_tip upper-tip"@mouseenter="isShowTimeTip = true"@mouseleave="isShowTimeTip = false"><div class="h_tip_box" v-show="isShowTimeTip">{{tipTxt}}</div></span></div> --\x3e<div @click="jumpToAnalysis" target="_blank" style="background: #f8a561; border: 1px solid #f8a561;" class="btn btn-blue mr10" v-show="!hideWhenAlgoIdNull" v-if="modelType === \'STOCK\' || modelType === \'A\'" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }">绩效分析</div><div v-on:click="openSimuPannel" class="btn btn-blue mr10" v-show="!hideWhenAlgoIdNull&amp;&amp;modelType !== \'A\'" v-stat2:click.clickcontent="{ id: \'HCJG_topNavBar_button\' }">开启模拟交易</div><a :href="shareToArticle" target="_self" class="btn btn-blue mr10" v-show="!hideWhenAlgoIdNull&amp;&amp;!isInIFinD&amp;&amp;!newmyfactor" v-stat="{act: \'share\'}">分享至社区</a><div style="display:none;" class="btn btn-blue mr10">分享</div></div><div class="fr mr10"><div id="statusBar" class="status-progressbar-container" v-bind:class="{ show: isShowExportProgress }"><span class="status-txt">导出中</span><div class="status-progressbar"><div v-bind:style="{ width: exportProgressNum}" class="status-progressbar-fill"></div></div><span class="status-progress-txt">{{exportProgressNum}}</span></div></div></div>\x3c!-- 未完成（或失败） --\x3e<div class="backreport-toolbar" v-else-if="!showStatusType &amp;&amp; showStatus"><div class="fl ml15"><p><span>回测日期：{{formDate}} 至 {{toDate}}</span><span class="gap-line">|</span><span>资金：{{initMoney}}</span><span class="gap-line">|</span><span>频率：{{tradeFrequency}}</span><span class="gap-line">|</span><span>总运行时长：{{backTestFail == 2 ? \'--\':testSpendTime}}秒</span><span v-show="showLinkBtn">（{{backTestFail == 2 ? \'运行失败\':\'运行中\'}}）</span></p></div><div class="fr ml10"><div v-on:click="cancelBackTest" class="btn btn-blue mr10" v-show="!hideWhenAlgoIdNull&amp;&amp;backTestFail != 2">取消回测</div></div><div class="fr mr10" v-show="backTestFail != 2"><div class="status-progressbar-container show"><div class="status-progressbar"><div class="status-progressbar-fill" v-bind:style="{ width: backTestProgress}"></div></div><span class="status-progress-txt">{{backTestProgress}}</span></div></div><div class="backtest-status" v-show="backTestFail != 2"><div class="status-loaderbox"><div class="status-loader"></div></div></div></div>\x3c!-- 已取消 --\x3e<div class="backreport-toolbar" v-else-if="!showCancelBackTestBtn &amp;&amp; !showStatus"><div class="fl ml15"><p><span>回测日期：{{formDate}} 至 {{toDate}}</span><span class="gap-line">|</span><span>资金：{{initMoney}}</span><span class="gap-line">|</span><span>频率：{{tradeFrequency}}</span><span class="gap-line">|</span><span>总运行时长：{{backTestFail == 2 ? \'--\':testSpendTime}}秒</span><span>（<span class="orange-warn">{{backTestFail == 2 ? \'运行失败\':\'已取消\'}}</span>）</span></p></div></div><simu-modal :ishidemodal="isHideModal" :modaldatalist="modalListData" :modalcontenthide="modalContentHide" :yybid="yyBid" v-on:modal-return="listenModal"></simu-modal>\x3c!-- 开启模拟交易 --\x3e<div class="container-mask" v-show="confirmVisi"><div class="container-maskbg"></div><div class="popbox plugin-dialog"><div class="icon popbox-btn-close" v-on:click="confirmVisi = false"></div><div class="popbox-title"><div class="text">开启模拟交易</div></div><div class="popbox-container p10"><div class="text">确认开启模拟交易吗？</div></div><div class="popbox-container p10"><label style="margin-right: 10px;"><input type="radio" v-model="baseon" value="0">从当前日开始模拟</label><label><input type="radio" v-model="baseon" value="1">在已有的回测基础上继续模拟</label></div><div class="popbox-footer plugin-dialog-footer"><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" @click="confirmTrade" v-stat="{act: \'fzjy.1\'}">确定</div><div class="btn plugin-dialog-btn btn-hollow-grey popbox-btn-cancel" @click="confirmVisi = false" v-stat="{act: \'fzjy.0\'}">取消</div></div></div></div>\x3c!-- 上架策略宝注意事项 --\x3e<div class="container-mask" v-show="isUpperShelfAttention"><div class="container-maskbg"></div><div class="popboxs plugin-dialog"><div class="icon popbox-btn-close" v-on:click="isUpperShelfAttention = false"></div><div class="popbox-title"><div class="text">注意事项</div></div><div class="popbox-container p10"><h2>策略上传注意事项（必读）</h2><div class="text"><p><span>1.</span>上传策略必须有盘前选股函数 set_stock_picks({stock,weight})  , 否则视为无效，详情请见<a href="//quant.10jqka.com.cn/platform/html/help-api.html?t=-2#541/557" style="color:#5389d2;">帮助文档</a>。</p><p><span>2.</span>策略宝现仅支持股票中低频策略，不支持股票高频策略及其他品种策略。</p><p><span>3.</span>策略持仓数不大于10只。</p><p><span>4.</span>策略调仓周期不得超过10个交易日，尽量每周都有调仓选股。</p><p><span>5.</span>策略描述必须填写策略逻辑，调仓周期，最大持仓数量，可近似。</p><p><span>6.</span>策略描述中希望补充策略应用场景，例如策略擅长在震荡市，趋势市场应用等等。</p><p><span>7.</span>选股中如包含创业板股票，必须在策略描述中写明。</p><p><span>8.</span>回测资金不宜过大，不要超过100万（一般低于50万）；也不宜过小，依选股数量决定。</p></div></div><div class="popbox-footer plugin-dialog-footer"><div class="btn plugin-dialog-btn btn-hollow-grey popbox-btn-cancel" @click="isUpperShelfAttention = false">返回</div><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" v-on:click="nextUpperShelf" :class="{\'disabled\': !isNaN(nextTxt)}">{{isNaN(nextTxt) ? nextTxt : nextTxt + \'s\'}}</div></div></div></div>\x3c!-- 上架策略宝输入确认框 --\x3e<div class="container-mask" v-show="isUpperShelf"><div class="container-maskbg"></div><div class="popboxs plugin-dialog"><div class="icon popbox-btn-close" v-on:click="isUpperShelf = false"></div><div class="popbox-title"><div class="text">上架至策略宝</div></div><div class="popbox-container p10"><div class="text form"><div class="item name"><p>策略名称</p><input type="text" v-model="squareStrategyName" placeholder="请输入"></div><div class="item number"><p>订阅人数上限</p><input type="number" v-model="squareLimitNumber">&nbsp;&nbsp;人</div><div class="item price"><p>策略参考价</p><input type="number" v-model="squarePrice">&nbsp;&nbsp;元/月<span>（同花顺可能会根据市场和运营活动调整策略售价）</span></div><div class="item brief"><p>策略描述</p><textarea v-model="squareStrategyBrief" maxlength="200"></textarea><span>{{squareStrategyBrief.length}}/200</span></div><div class="check"><label><input type="checkbox" name="" v-model="squareRuleCheck">我已详细阅读并遵守</label><a v-on:click="isRouleTxt = true" style="cursor: pointer;color:#5389d2;">《同花顺策略宝商城条例》</a></div></div></div><div class="popbox-footer plugin-dialog-footer"><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" v-on:click="confirmUpperShelf">提交</div></div></div></div>\x3c!-- 上架策略宝成功提示 --\x3e<div class="container-mask" v-show="isUpperShelfSuccess"><div class="container-maskbg"></div><div class="popbox plugin-dialog"><div class="icon popbox-btn-close" v-on:click="isUpperShelfSuccess = false"></div><div class="popbox-title"><div class="text">提示</div></div><div class="popbox-container p10"><div class="text form">提交成功，审核工作需要几个交易日的时间，请耐心等待…</div></div><div class="popbox-footer plugin-dialog-footer"><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" v-on:click="isUpperShelfSuccess = false">确认</div></div></div></div>\x3c!-- 《同花顺策略宝商城条例》 --\x3e<div class="container-mask" v-show="isRouleTxt"><div class="container-maskbg"></div><div class="popboxs plugin-dialog"><div class="icon popbox-btn-close" v-on:click="isRouleTxt = false"></div><div class="popbox-title"><div class="text">《同花顺策略宝商城条例》</div></div><div class="popbox-container roule p10"><h2>策略宝用户协议</h2><div v-html="rouleTxtRender"></div></div><div class="popbox-footer plugin-dialog-footer" style="text-align: center;"><div class="btn plugin-dialog-btn popbox-btn-ok btn-blue-blue" v-on:click="isRouleTxt = false" style="float: none;">关闭</div></div></div></div></div>',
        components: { 'simu-modal': l },
        data: function () {
          return {
            backtestMenuLink: '#',
            backtestEditingLink: '#',
            backtestHistoryLink: '#',
            factorBacktestMenuLink: '#',
            factorBacktestEditingLink: '#',
            factorBacktestHistoryLink: '#',
            shareToArticle: '#',
            backtestStratgyLibLink: '#',
            strategyName: '--',
            modelType: '',
            formDate: '----',
            toDate: '----',
            initMoney: 0,
            tradeFrequency: '--',
            frequency: { DAILY: '每日', MINUTE: '分钟', TICK: 'TICK' },
            testSpendTime: '--',
            hideOpenSimuBtn: !0,
            hideGruops: !0,
            IsFactorPage: null,
            algoId: null,
            freq: null,
            currentGroup: '第一组',
            isHideGruopList: !1,
            modalListData: [],
            isShowExportPannel: !1,
            isShowExportProgress: !1,
            exportProgressNum: '0%',
            exportPageCount: null,
            exportAveCent: null,
            exportPage: 1,
            exportPageSize: 12,
            csvStr: [],
            isHideModal: !0,
            modalContentHide: !0,
            maxAccountNumber: null,
            yyBid: null,
            isModalShowing: !1,
            showStatus: !1,
            showCancelBackTestBtn: !0,
            showFactorLinkBtn: !1,
            isNullAlgoId: !0,
            ismachineshow: !1,
            confirmVisi: !1,
            newmyfactor: !1,
            queryType: '',
            baseon: '0',
            nextTxt: null,
            timer: null,
            isPowerUpperShelf: !0,
            isUpperShelfAttention: !1,
            isUpperShelf: !1,
            squareStrategyName: '',
            squareLimitNumber: null,
            squarePrice: null,
            squareStrategyBrief: '',
            squareRuleCheck: !1,
            isRouleTxt: !1,
            isUpperShelfSuccess: !1,
            rouleTxtRender: s,
            tipTxt: '',
            isShowTimeTip: !1,
          };
        },
        watch: {
          confirmVisi: function () {
            this.baseon = '0';
          },
          backTestId: function () {
            this.backTestId && this.getBackTestInfo();
          },
          groupId: function () {
            this.groupId && this.getFactorPageInfo();
          },
          showStatusType: function () {
            var t = this,
              e = t.$store.state.backTestProgress;
            this.getBackTestRunTime(), '100%' === e && t.$store.state.backTestStatus && sessionStorage.setItem('isDoingBackTest', 0);
          },
          isUpperShelfAttention: function (t) {
            t || clearInterval(this.timer);
          },
          isUpperShelf: function (t) {
            t &&
              ((this.squareStrategyName = ''),
              (this.squareLimitNumber = null),
              (this.squarePrice = null),
              (this.squareStrategyBrief = ''),
              (this.squareRuleCheck = !1));
          },
        },
        computed: {
          backTestProgress: function () {
            return this.$store.state.backTestProgress;
          },
          showStatusType: function () {
            var t = this.$store.state.backTestProgress,
              e = this.$store.state.backTestStatus;
            return !('100%' !== t && !e);
          },
          backTestId: function () {
            return this.$store.state.backTestId;
          },
          groups: function () {
            return this.$store.state.factorGroups;
          },
          groupId: function () {
            return this.$store.state.groupId;
          },
          changeSpendTime: function () {
            return sessionStorage.getItem('isDoingBackTest');
          },
          showLinkBtn: function () {
            return this.$store.state.showLinkBtn;
          },
          backTestFail: function () {
            return this.$store.state.backTestFail;
          },
          hideWhenAlgoIdNull: function () {
            return this.isNullAlgoId;
          },
          isInIFinD: function () {
            return -1 !== window.location.pathname.indexOf('ifind');
          },
          jump: function () {
            return '_self';
          },
        },
        beforeMount: function () {
          var t = window.location.href;
          !0 === /machine/.test(t) ? (this.ismachineshow = !0) : (this.ismachineshow = !1),
            !0 === /t=newmyfactor/.test(t) ? (this.newmyfactor = !0) : (this.newmyfactor = !1);
          var e = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getYbidList,
            success: function (t) {
              var n = t.simu,
                i = t.futures;
              if (null === n && null === i) return !1;
              (e.yyBid = {}),
                null !== n &&
                  ((e.yyBid.simu = {}),
                  $.each(n, function (t, n) {
                    var i = n[0];
                    e.yyBid.simu['' + t] = i;
                  })),
                null !== i &&
                  ((e.yyBid.futures = {}),
                  $.each(i, function (t, n) {
                    var i = n[0];
                    e.yyBid.futures['' + t] = i;
                  }));
            },
          });
        },
        mounted: function () {},
        methods: {
          cancelDeAcc: function (t) {
            t();
          },
          getBackTestInfo: function () {
            var t = this;
            t.$store.commit({ type: 'getBackTestFail', data: 0 }),
              i.jsonp({
                url: a.ajax['backtest-result'].getStrategysInfo,
                data: { backTestId: t.backTestId },
                success: function (e) {
                  if (
                    (!e.stock_market ||
                      ('A' !== e.stock_market && 'STOCK' !== e.stock_market) ||
                      t.$eventBus.$emit('SetshowCombinationAttribution', !0),
                    (t.strategyName = e.name),
                    (t.algoId = e.algo_id),
                    (t.modelType = e.stock_market),
                    -1 === window.location.pathname.indexOf('ifind')
                      ? ((t.backtestMenuLink = 'study-index.html#/'),
                        (t.backtestEditingLink = 'study.html?strategyId=' + t.algoId),
                        (t.factorBacktestMenuLink = 'machine.html#/newStudyMf/'),
                        (t.factorBacktestEditingLink = 'machine.html#/newStrategyDetailMf/'),
                        (t.factorBacktestHistoryLink = 'machine.html#/newStrategyHistorylMf/'))
                      : ((t.backtestMenuLink = 'study-index-ifind.html#/'),
                        (t.backtestEditingLink = 'study-ifind.html?strategyId=' + t.algoId),
                        (t.factorBacktestMenuLink = 'machine.html#/newStudyMf-ifind/'),
                        (t.factorBacktestEditingLink = 'machine.html#/newStrategyDetailMf-ifind/'),
                        (t.factorBacktestHistoryLink = 'machine.html#/newStrategyHistorylMf-ifind/')),
                    (t.shareToArticle = '/view/community/article-create?bid=' + t.backTestId),
                    t.groupId
                      ? ((t.showFactorLinkBtn = !0),
                        (t.backtestStratgyLibLink =
                          -1 === window.location.pathname.indexOf('ifind') ? 'machine.html#/studyMf/' : 'machine.html#/studyMf-ifind'),
                        (t.backtestHistoryLink =
                          -1 === window.location.pathname.indexOf('ifind')
                            ? 'machine.html#/strategyHistorylMf/' + t.algoId
                            : 'machine.html#/strategyHistorylMf-ifind/' + t.algoId))
                      : ((t.backtestStratgyLibLink =
                          -1 === window.location.pathname.indexOf('ifind')
                            ? 'strategylib.html?strategyid' + t.backTestId
                            : 'strategylib-ifind.html?strategyid' + t.backTestId),
                        (t.backtestHistoryLink =
                          -1 === window.location.pathname.indexOf('ifind')
                            ? 'backreport-history.html#algoid/' + t.algoId
                            : 'backreport-history-ifind.html#algoid/' + t.algoId)),
                    'AUTO' === e.algo_gen_method &&
                      ((t.backtestMenuLink = 'machine.html#/guideGeneratorStrategyList/'),
                      (t.backtestEditingLink = 'machine.html#/guideGeneratorStrategy/' + t.algoId),
                      (t.backtestHistoryLink = 'machine.html#/guideGeneratorStrategyHistory/' + t.algoId)),
                    (t.isNullAlgoId = !t.algoId),
                    (t.hideOpenSimuBtn = e.simu_on && 'FAIL' != e.status),
                    (t.formDate = e.begin_date),
                    (t.toDate = e.end_date ? e.end_date : '--'),
                    (t.initMoney = e.capital_base),
                    (t.tradeFrequency = t.frequency[e.frequency]),
                    t.$store.commit({ type: 'getBeginDate', date: t.formDate }),
                    t.$store.commit({ type: 'getEndDate', date: t.toDate }),
                    t.$store.commit({ type: 'getBackTestProgress', data: r.digitsTranform(e.progress, 2, !0, !0, !1) }),
                    (t.showStatus = !0),
                    t.$store.commit({ type: 'getBackTestStatus', status: 1 }),
                    'FAIL' == e.status
                      ? t.$store.commit({ type: 'getBackTestFail', data: 2 })
                      : t.$store.commit({ type: 'getBackTestFail', data: 0 }),
                    e.progress < 1 && 'COMPILING' === e.status)
                  )
                    return t.$store.commit({ type: 'getBackTestStatus', status: 0 }), (t.showStatusType = !1), !1;
                  (t.testSpendTime = (new Date(e.stop_run_time) - new Date(e.start_run_time)) / 1e3), (t.showStatusType = !0);
                },
              });
          },
          getBackTestRunTime: function () {
            var t = this;
            i.jsonp({
              url: a.ajax['backtest-result'].getStrategysInfo,
              data: { backTestId: t.backTestId },
              success: function (e) {
                t.testSpendTime = (new Date(e.stop_run_time) - new Date(e.start_run_time)) / 1e3;
              },
            });
          },
          getFactorPageInfo: function () {
            var t = this;
            (t.currentGroup = t.groups[--t.groupId].gruopName), (t.hideGruops = !1);
          },
          tabToggle: function (t, e) {
            (this.active = t), (this.currentView = e);
          },
          openSimuPannel: function () {
            var t = this;
            if ('A' === t.modelType) {
              var e = t.$store.state.maxAccountNum;
              if (t.isModalShowing) return !1;
              (t.isModalShowing = !0),
                i.jsonp({
                  url: a.ajax['backtest-result'].getSimuaccountInfo,
                  resulterror: function (e) {
                    t.isModalShowing = !1;
                  },
                  success: function (n) {
                    if (!n) return !1;
                    0 === n.length
                      ? (t.modalListData = [
                          { account_name: '无账户', account_yybid: null },
                          { account_name: '新建账户', account_yybid: null },
                        ])
                      : ($.each(n, function (e, n) {
                          if ('' !== n.join_game) return !0;
                          var i = n.stock_cash ? n.stock_cash : null,
                            a = n.total_asssets ? n.total_asssets : null;
                          (i = null !== i ? (i ? i.toFixed(2) : 0) : ''),
                            (a = null !== a ? (a ? a.toFixed(2) : 0) : ''),
                            t.modalListData.push({
                              account_name: n.name,
                              account_code: n.simu_account,
                              account_yybid: n.simu_yybid,
                              account_type: n.account_type,
                              simu_cash: i,
                              futures_cash: a,
                            });
                        }),
                        n.length < e &&
                          t.yyBid &&
                          t.modalListData.push({
                            account_name: '新建账户',
                            account_yybid: null,
                          })),
                      (t.isHideModal = !1),
                      (t.modalContentHide = !1),
                      (t.isModalShowing = !1);
                  },
                });
            } else t.confirmVisi = !0;
          },
          confirmTrade: function () {
            var t = this;
            i.jsonp({
              url: a.ajax['backtest-result'].addTrade,
              data: { backtest_id: t.backTestId, baseon: t.baseon },
              resulterror: function (e) {
                r.warningTip(e.errormsg), (t.confirmVisi = !1);
              },
              success: function (e) {
                if (!e) return !1;
                e && (r.tip('开启成功'), (location.href = t.isInIFinD ? 'trade-ifind.html#/' : 'trade.html#/')), (t.confirmVisi = !1);
              },
            });
          },
          listenModal: function (t) {
            var e = this;
            (e.isHideModal = !0), (e.modalContentHide = !0), (e.modalListData = []);
          },
          renderFactorPage: function (t, e) {
            var n = this;
            (n.currentGroup = n.groups[t].gruopName),
              (n.backTestId = e),
              n.$store.commit({ type: 'getBackTestId', id: e }),
              n.$store.commit({ type: 'getGroupId', data: t + 1 }),
              (n.isHideGruopList = !1),
              n.$router.replace('/');
          },
          selectGroup: function () {
            var t = this;
            t.isHideGruopList ? (t.isHideGruopList = !1) : (t.isHideGruopList = !0);
          },
          hideGroupList: function () {
            this.isHideGruopList = !1;
          },
          exportClick: function () {
            var t = this;
            t.isShowExportPannel = !t.isShowExportPannel;
          },
          exportTransaction: function () {
            var t = this;
            t.exportReset(), t.csvStr.push(',日期,时间,代码,名称,操作,成交价,数量,金额,佣金,印花税\n'), t.getTransactionData();
          },
          getTransactionData: function () {
            var t,
              e = this;
            (t = { bid: e.backTestId, size: e.exportPageSize, page: e.exportPage, nocacheFlag: !0 }),
              i.jsonp({
                url: a.ajax['backtest-result'].getTradelogByDate,
                data: t,
                success: function (t) {
                  if ('' === t || 0 === t.length)
                    (e.csvStr = []), e.csvStr.push('暂无交易日志'), o.download('detail.txt', e.csvStr.join(), 'text/txt'), e.exportEnd();
                  else {
                    if (
                      (1 === e.exportPage &&
                        ((e.exportPageCount = Math.ceil(t.total / e.exportPageSize)),
                        (e.exportAveCent = Math.floor(100 / e.exportPageCount))),
                      $.each(t.data, function (t, n) {
                        var i = n.trade_day,
                          a = n.trade_logs;
                        e.csvStr.push(i + '（' + a.length + '笔交易）,,,,,,,,,\n'),
                          $.each(a, function (t, n) {
                            var i;
                            'BUY' === n.operation_type
                              ? (i = '买入')
                              : 'CLOSE_BUY' === n.operation_type
                              ? (i = '平仓买入')
                              : 'CLOSE_SALE' === n.operation_type
                              ? (i = '平仓卖出')
                              : 'OPEN_BUY' === n.operation_type
                              ? (i = '开仓买入')
                              : 'OPEN_SALE' === n.operation_type
                              ? (i = '开仓卖出')
                              : 'OPEN_SHORT' === n.operation_type
                              ? (i = '开空')
                              : 'OPEN_LONG' === n.operation_type
                              ? (i = '开多')
                              : 'CLOSE_SHORT' === n.operation_type
                              ? (i = '平空')
                              : 'CLOSE_LONG' === n.operation_type
                              ? (i = '平多')
                              : 'SALE' === n.operation_type && (i = '卖出');
                            var a = new RegExp('([0-9-]+) ([0-9:]+)'),
                              r = n.trade_date.match(a),
                              s = n.stock_name,
                              o = Number(n.trade_price).toFixed(2),
                              l = Number(n.trade_value).toFixed(2),
                              c = null === n.commissions ? '--' : Number(n.commissions).toFixed(2),
                              d = null === n.cost ? '--' : n.cost.toFixed(2);
                            e.csvStr.push(
                              ',' +
                                r[2] +
                                ',' +
                                n.asset_code +
                                ',' +
                                s +
                                ',' +
                                i +
                                ',' +
                                o +
                                ',' +
                                n.trade_amount +
                                ',' +
                                l +
                                ',' +
                                c +
                                ',' +
                                d +
                                '\n'
                            );
                          });
                      }),
                      e.exportPageCount === e.exportPage)
                    )
                      return (
                        (e.exportProgressNum = '100%'),
                        o.download('detail.csv', e.csvStr.join(), 'text/csv'),
                        setTimeout(function () {
                          e.exportEnd();
                        }, 100),
                        !1
                      );
                    (e.exportProgressNum = e.exportAveCent * e.exportPage + '%'),
                      e.exportPageCount > e.exportPage && (e.exportPage++, e.getTransactionData());
                  }
                },
              });
          },
          exportHistoryOld: function () {
            var t = this;
            (t.isShowExportPannel = !1),
              t.exportReset(),
              t.csvStr.push(',日期,总资产,现金,证券,数量,持仓,收盘价, 收益\n'),
              t.getHistoryDataOld();
          },
          exportHistory: function () {
            var t = this;
            (t.isShowExportPannel = !1),
              t.exportReset(),
              t.csvStr.push(
                ',日期,证券代码,证券名称,持仓数量,持仓市值,仓位占比,收盘价,收益,成本价,收益率,回撤,持有天数,可用数量,当日涨跌幅(%) \n'
              ),
              (t.queryType = 'position'),
              t.getHistoryData();
          },
          exportAccount: function () {
            var t = this;
            (t.isShowExportPannel = !1),
              t.exportReset(),
              t.csvStr.push(',日期,买入手续费,卖出手续费,印花税费,现金,持仓市值,账户总资产,日涨跌幅,账户净值,回撤,最大回撤\n'),
              (t.queryType = 'account'),
              t.getHistoryData();
          },
          getHistoryData: function () {
            var t,
              e = this;
            (t = { backtestid: e.backTestId, pagesize: e.exportPageSize, page: e.exportPage, query_type: e.queryType }),
              i.jsonp({
                url: a.ajax['backtest-result'].getPositionAccountData,
                data: t,
                success: function (t) {
                  if ('' === t || 0 === t.length)
                    (e.csvStr = []),
                      e.csvStr.push('暂无历史持仓数据'),
                      o.download('dailyposition.txt', e.csvStr.join(), 'text/txt'),
                      e.exportEnd();
                  else {
                    if (
                      (1 === e.exportPage &&
                        ((e.exportPageCount = Math.ceil(t.total / e.exportPageSize)),
                        (e.exportAveCent = Math.floor(100 / e.exportPageCount))),
                      'position' === e.queryType
                        ? $.each(t.data, function (t, n) {
                            e.csvStr.push(
                              n.position_date +
                                ',' +
                                n.asset_code +
                                ',' +
                                n.symbol_name +
                                ',' +
                                n.pos_amount +
                                ',' +
                                n.pos_value +
                                ',' +
                                n.position_rate +
                                ',' +
                                n.close_price +
                                ',' +
                                n.profit +
                                ',' +
                                n.cost_basis +
                                ',' +
                                n.profit_rate +
                                ',' +
                                n.drawdown +
                                ',' +
                                n.position_days +
                                ',' +
                                n.available_amount +
                                ',' +
                                n.quote_rate +
                                '\n'
                            );
                          })
                        : 'account' === e.queryType &&
                          $.each(t.data, function (t, n) {
                            e.csvStr.push(
                              n.position_date +
                                ',' +
                                n.buy_commision +
                                ',' +
                                n.sale_commision +
                                ',' +
                                n.total_tax +
                                ',' +
                                n.ending_cash +
                                ',' +
                                n.pos_asset_value +
                                ',' +
                                n.total_asset_value +
                                ',' +
                                n.profit_rate +
                                ',' +
                                n.account_net_value +
                                ',' +
                                n.drawdown +
                                ',' +
                                n.max_drawdown +
                                '\n'
                            );
                          }),
                      e.exportPageCount === e.exportPage)
                    )
                      return (
                        (e.exportProgressNum = '100%'),
                        'position' === e.queryType
                          ? o.download('持仓明细.csv', e.csvStr.join(), 'text/csv')
                          : 'account' === e.queryType && o.download('账户信息.csv', e.csvStr.join(), 'text/csv'),
                        setTimeout(function () {
                          e.exportEnd();
                        }, 100),
                        !1
                      );
                    (e.exportProgressNum = e.exportAveCent * e.exportPage + '%'),
                      e.exportPageCount > e.exportPage && (e.exportPage++, e.getHistoryData());
                  }
                },
                error: function () {
                  setTimeout(function () {
                    e.exportEnd();
                  }, 100);
                },
                resulterror: function (t) {
                  setTimeout(function () {
                    r.warningTip(t.errormsg), e.exportEnd();
                  }, 100);
                },
              });
          },
          getHistoryDataOld: function () {
            var t,
              e = this;
            (t = { backTestId: e.backTestId, num: e.exportPageSize, page: e.exportPage, nocacheFlag: !0 }),
              i.jsonp({
                url: a.ajax['backtest-result'].getDailyPositionGains,
                data: t,
                success: function (t) {
                  if ('' === t || 0 === t.length)
                    (e.csvStr = []),
                      e.csvStr.push('暂无历史持仓数据'),
                      o.download('dailyposition.txt', e.csvStr.join(), 'text/txt'),
                      e.exportEnd();
                  else {
                    if (
                      (1 === e.exportPage &&
                        ((e.exportPageCount = Math.ceil(t.total / e.exportPageSize)),
                        (e.exportAveCent = Math.floor(100 / e.exportPageCount))),
                      $.each(t.data, function (t, n) {
                        var i = new RegExp('([0-9-]+)T([0-9:]+)'),
                          a = n.position_date.match(i),
                          r = n.total_asset_value.toFixed(2),
                          s = n.ending_cash.toFixed(2),
                          o = n.daily_position;
                        e.csvStr.push(a[1] + ',' + r + ',' + s + ', , , , \n'),
                          o.length > 0 &&
                            $.each(o, function (t, n) {
                              var i = e.filterSpace(n.stock_name) + '(' + n.asset_code + ')',
                                a = n.pos_amount,
                                r = n.pos_value.toFixed(2),
                                s = n.profit_and_loss.toFixed(2);
                              e.csvStr.push(' , , ,' + i + ',' + a + ',' + r + ',' + n.close_price + ',' + s + '\n');
                            });
                      }),
                      e.exportPageCount === e.exportPage)
                    )
                      return (
                        (e.exportProgressNum = '100%'),
                        o.download('dailyposition.csv', e.csvStr.join(), 'text/csv'),
                        setTimeout(function () {
                          e.exportEnd();
                        }, 100),
                        !1
                      );
                    (e.exportProgressNum = e.exportAveCent * e.exportPage + '%'),
                      e.exportPageCount > e.exportPage && (e.exportPage++, e.getHistoryDataOld());
                  }
                },
              });
          },
          exportLogs: function () {
            var t = this;
            t.exportReset(), t.getLogsData();
          },
          getLogsData: function () {
            var t,
              e = this;
            (t = { backTestId: e.backTestId, num: e.exportPageSize, page: e.exportPage, nocacheFlag: !0 }),
              i.jsonp({
                url: a.ajax['backtest-result'].getLogsData,
                data: t,
                success: function (t) {
                  if ('' === t || 0 === t.length)
                    (e.csvStr = []), e.csvStr.push('暂无日志'), o.download('outlog.txt', e.csvStr.join(), 'text/txt'), e.exportEnd();
                  else {
                    if (
                      (1 === e.exportPage &&
                        ((e.exportPageCount = Math.ceil(t.total / e.exportPageSize)),
                        (e.exportAveCent = Math.floor(100 / e.exportPageCount))),
                      $.each(t.list, function (t, n) {
                        var i = n.value.replace(/<br\/>/gi, '\r\n');
                        e.csvStr.push(n.time + n.type + i + '\r\n');
                      }),
                      e.exportPageCount === e.exportPage)
                    )
                      return (
                        (e.exportProgressNum = '100%'),
                        o.download('outlog.txt', e.csvStr.join(), 'text/txt'),
                        setTimeout(function () {
                          e.exportEnd();
                        }, 100),
                        !1
                      );
                    (e.exportProgressNum = e.exportAveCent * e.exportPage + '%'),
                      e.exportPageCount > e.exportPage && (e.exportPage++, e.getLogsData());
                  }
                },
              });
          },
          exportReset: function () {
            var t = this;
            (t.isShowExportPannel = !1), (t.exportProgressNum = '0%'), (t.isShowExportProgress = !0);
          },
          exportEnd: function () {
            var t = this;
            (t.isShowExportProgress = !1),
              (t.exportProgressNum = '0%'),
              (t.exportPage = 1),
              (t.exportPageCount = null),
              (t.exportAveCent = null),
              (t.csvStr = []);
          },
          filterSpace: function (t) {
            var e = new RegExp('&#032;', 'g');
            return t.replace(e, '');
          },
          cancelBackTest: function () {
            var t = this;
            i.jsonp({
              url: a.ajax['study-strategy'].cancel,
              data: { backTestId: t.backTestId },
              success: function (e) {
                (t.backTestId = null),
                  (t.showCancelBackTestBtn = !1),
                  (t.showStatus = !1),
                  t.$store.commit({ type: 'getCancelBackTest', data: !0 }),
                  r.tip('策略已取消');
              },
            });
          },
          hideExportPannel: function () {
            this.isShowExportPannel = !1;
          },
          upperShelf: function () {
            var t = this;
            if ('该策略已上传' !== this.tipTxt) {
              if (this.isPowerUpperShelf)
                return void window.open('//square.10jqka.com.cn/strategyfront/strategy/usercenter/index.html', '_blank');
              this.timer && clearInterval(this.timer), (this.isUpperShelfAttention = !0);
              var e = 10;
              (this.nextTxt = 10),
                (this.timer = setInterval(function () {
                  e--, e > 0 ? (t.nextTxt = e) : ((t.nextTxt = '下一步'), clearInterval(t.timer));
                }, 1e3));
            }
          },
          nextUpperShelf: function () {
            isNaN(this.nextTxt) && ((this.isUpperShelfAttention = !1), (this.isUpperShelf = !0));
          },
          confirmUpperShelf: function () {
            var t = this,
              e = '';
            if (
              (t.squareStrategyName
                ? t.squareLimitNumber
                  ? t.squarePrice
                    ? t.squareStrategyBrief
                      ? t.squareRuleCheck || (e = '请勾选并遵守同花顺策略宝商城条例')
                      : (e = '请输入策略描述')
                    : (e = '请输入策略参考价格')
                  : (e = '请输入订阅人数上限')
                : (e = '请输入策略名称'),
              e)
            )
              return void r.warningTip(e);
            i.jsonp({
              url: a.ajax['backtest-result'].getStrategyAdd,
              data: {
                strategy_id: t.backTestId,
                strategy_name: t.squareStrategyName,
                strategy_description: t.squareStrategyBrief,
                sub_limit: t.squareLimitNumber,
                sub_price: t.squarePrice,
              },
              success: function (e) {
                (t.isUpperShelf = !1), (t.isPowerUpperShelf = !0), (t.isUpperShelfSuccess = !0);
              },
            });
          },
          jumpToAnalysis: function () {
            this.isInIFinD
              ? (window.location.href = 'machine.html#/performanceAnalysisResult-ifind/backtest/' + this.backTestId)
              : window.open('machine.html#/performanceAnalysisResult/backtest/' + this.backTestId);
          },
        },
      });
    }
  ),
  define('../vuex/backtest-result', ['require', 'exports', 'module'], function (t, e, n) {
    var i = new Vuex.Store({
      state: {
        maxAccountNum: 0,
        showLinkBtn: null,
        revenueOverviewRst: null,
        backTestId: null,
        factorGroups: null,
        beginDate: null,
        endDate: null,
        groupId: null,
        backTestStatus: null,
        backTestProgress: '0%',
        hasAnalysisAccess: 0,
        backTestFail: null,
        cancelBackTest: !1,
        styleAttrLeftData: {},
        allloadingshow: [],
        firstTipError: !1,
        isKeepLoading: !1,
      },
      getters: {
        firstTipError: function (t) {
          return t.firstTipError;
        },
        isKeepLoading: function (t) {
          return t.isKeepLoading;
        },
        backTestId: function (t) {
          return t.backTestId;
        },
        beginDate: function (t) {
          return t.beginDate;
        },
        endDate: function (t) {
          return t.endDate;
        },
        backTestStatus: function (t) {
          return t.backTestStatus;
        },
        backTestProgress: function (t) {
          return t.backTestProgress;
        },
        hasAnalysisAccess: function (t) {
          return t.hasAnalysisAccess;
        },
        factorGroups: function (t) {
          return t.factorGroups;
        },
        groupId: function (t) {
          return t.groupId;
        },
        cancelBackTest: function (t) {
          return t.cancelBackTest;
        },
        backTestFail: function (t) {
          return t.backTestFail;
        },
        showLinkBtn: function (t) {
          return t.showLinkBtn;
        },
      },
      mutations: {
        getFirstTipError: function (t, e) {
          t.firstTipError = e.data;
        },
        getIsKeepLoading: function (t, e) {
          t.isKeepLoading = e.data;
        },
        getBackTestId: function (t, e) {
          t.backTestId = e.id;
        },
        getMaxAccountNum: function (t, e) {
          t.maxAccountNum = e.count;
        },
        getBeginDate: function (t, e) {
          t.beginDate = e.date;
        },
        getEndDate: function (t, e) {
          t.endDate = e.date;
        },
        getBackTestStatus: function (t, e) {
          t.backTestStatus = e.status;
        },
        getBackTestProgress: function (t, e) {
          t.backTestProgress = e.data;
        },
        getHasAnalysisAccess: function (t, e) {
          t.hasAnalysisAccess = e.data;
        },
        getFactorGroups: function (t, e) {
          t.factorGroups = e.data;
        },
        getGroupId: function (t, e) {
          t.groupId = e.data;
        },
        getCancelBackTest: function (t, e) {
          t.cancelBackTest = e.data;
        },
        getShowLinkBtn: function (t, e) {
          t.showLinkBtn = e.data;
        },
        getBackTestFail: function (t, e) {
          t.backTestFail = e.data;
        },
        getStyleAttrLeftData: function (t, e) {
          t.styleAttrLeftData = e.data;
        },
        resetAllLoadingShow: function (t, e) {
          t.allloadingshow = e.data;
        },
        getAllLoadingShow: function (t, e) {
          t.allloadingshow.push(e.data);
        },
      },
      actions: {},
    });
    n.exports = i;
  }),
  (function (t) {
    if ('object' == typeof exports && 'undefined' != typeof module) module.exports = t();
    else if ('function' == typeof define && define.amd) define('qs', [], t);
    else {
      var e;
      (e = 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : this),
        (e.Qs = t());
    }
  })(function () {
    return (function t(e, n, i) {
      function a(s, o) {
        if (!n[s]) {
          if (!e[s]) {
            var l = 'function' == typeof require && require;
            if (!o && l) return l(s, !0);
            if (r) return r(s, !0);
            var c = new Error("Cannot find module '" + s + "'");
            throw ((c.code = 'MODULE_NOT_FOUND'), c);
          }
          var d = (n[s] = { exports: {} });
          e[s][0].call(
            d.exports,
            function (t) {
              var n = e[s][1][t];
              return a(n || t);
            },
            d,
            d.exports,
            t,
            e,
            n,
            i
          );
        }
        return n[s].exports;
      }
      for (var r = 'function' == typeof require && require, s = 0; s < i.length; s++) a(i[s]);
      return a;
    })(
      {
        1: [
          function (t, e, n) {
            'use strict';
            var i = String.prototype.replace,
              a = /%20/g;
            e.exports = {
              default: 'RFC3986',
              formatters: {
                RFC1738: function (t) {
                  return i.call(t, a, '+');
                },
                RFC3986: function (t) {
                  return t;
                },
              },
              RFC1738: 'RFC1738',
              RFC3986: 'RFC3986',
            };
          },
          {},
        ],
        2: [
          function (t, e, n) {
            'use strict';
            var i = t('./stringify'),
              a = t('./parse'),
              r = t('./formats');
            e.exports = { formats: r, parse: a, stringify: i };
          },
          { './formats': 1, './parse': 3, './stringify': 4 },
        ],
        3: [
          function (t, e, n) {
            'use strict';
            var i = t('./utils'),
              a = Object.prototype.hasOwnProperty,
              r = {
                allowDots: !1,
                allowPrototypes: !1,
                arrayLimit: 20,
                decoder: i.decode,
                delimiter: '&',
                depth: 5,
                parameterLimit: 1e3,
                plainObjects: !1,
                strictNullHandling: !1,
              },
              s = function (t, e) {
                for (
                  var n = {}, i = t.split(e.delimiter, e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit), r = 0;
                  r < i.length;
                  ++r
                ) {
                  var s,
                    o,
                    l = i[r],
                    c = -1 === l.indexOf(']=') ? l.indexOf('=') : l.indexOf(']=') + 1;
                  -1 === c
                    ? ((s = e.decoder(l)), (o = e.strictNullHandling ? null : ''))
                    : ((s = e.decoder(l.slice(0, c))), (o = e.decoder(l.slice(c + 1)))),
                    a.call(n, s) ? (n[s] = [].concat(n[s]).concat(o)) : (n[s] = o);
                }
                return n;
              },
              o = function (t, e, n) {
                if (!t.length) return e;
                var i,
                  a = t.shift();
                if ('[]' === a) (i = []), (i = i.concat(o(t, e, n)));
                else {
                  i = n.plainObjects ? Object.create(null) : {};
                  var r = '[' === a.charAt(0) && ']' === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                    s = parseInt(r, 10);
                  !isNaN(s) && a !== r && String(s) === r && s >= 0 && n.parseArrays && s <= n.arrayLimit
                    ? ((i = []), (i[s] = o(t, e, n)))
                    : (i[r] = o(t, e, n));
                }
                return i;
              },
              l = function (t, e, n) {
                if (t) {
                  var i = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
                    r = /(\[[^[\]]*])/,
                    s = /(\[[^[\]]*])/g,
                    l = r.exec(i),
                    c = l ? i.slice(0, l.index) : i,
                    d = [];
                  if (c) {
                    if (!n.plainObjects && a.call(Object.prototype, c) && !n.allowPrototypes) return;
                    d.push(c);
                  }
                  for (var u = 0; null !== (l = s.exec(i)) && u < n.depth; ) {
                    if (((u += 1), !n.plainObjects && a.call(Object.prototype, l[1].slice(1, -1)) && !n.allowPrototypes)) return;
                    d.push(l[1]);
                  }
                  return l && d.push('[' + i.slice(l.index) + ']'), o(d, e, n);
                }
              };
            e.exports = function (t, e) {
              var n = e || {};
              if (null !== n.decoder && void 0 !== n.decoder && 'function' != typeof n.decoder)
                throw new TypeError('Decoder has to be a function.');
              if (
                ((n.delimiter = 'string' == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : r.delimiter),
                (n.depth = 'number' == typeof n.depth ? n.depth : r.depth),
                (n.arrayLimit = 'number' == typeof n.arrayLimit ? n.arrayLimit : r.arrayLimit),
                (n.parseArrays = !1 !== n.parseArrays),
                (n.decoder = 'function' == typeof n.decoder ? n.decoder : r.decoder),
                (n.allowDots = 'boolean' == typeof n.allowDots ? n.allowDots : r.allowDots),
                (n.plainObjects = 'boolean' == typeof n.plainObjects ? n.plainObjects : r.plainObjects),
                (n.allowPrototypes = 'boolean' == typeof n.allowPrototypes ? n.allowPrototypes : r.allowPrototypes),
                (n.parameterLimit = 'number' == typeof n.parameterLimit ? n.parameterLimit : r.parameterLimit),
                (n.strictNullHandling = 'boolean' == typeof n.strictNullHandling ? n.strictNullHandling : r.strictNullHandling),
                '' === t || null === t || void 0 === t)
              )
                return n.plainObjects ? Object.create(null) : {};
              for (
                var a = 'string' == typeof t ? s(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, c = Object.keys(a), d = 0;
                d < c.length;
                ++d
              ) {
                var u = c[d],
                  p = l(u, a[u], n);
                o = i.merge(o, p, n);
              }
              return i.compact(o);
            };
          },
          { './utils': 5 },
        ],
        4: [
          function (t, e, n) {
            'use strict';
            var i = t('./utils'),
              a = t('./formats'),
              r = {
                brackets: function (t) {
                  return t + '[]';
                },
                indices: function (t, e) {
                  return t + '[' + e + ']';
                },
                repeat: function (t) {
                  return t;
                },
              },
              s = Date.prototype.toISOString,
              o = {
                delimiter: '&',
                encode: !0,
                encoder: i.encode,
                encodeValuesOnly: !1,
                serializeDate: function (t) {
                  return s.call(t);
                },
                skipNulls: !1,
                strictNullHandling: !1,
              },
              l = function t(e, n, a, r, s, o, l, c, d, u, p, f) {
                var h = e;
                if ('function' == typeof l) h = l(n, h);
                else if (h instanceof Date) h = u(h);
                else if (null === h) {
                  if (r) return o && !f ? o(n) : n;
                  h = '';
                }
                if ('string' == typeof h || 'number' == typeof h || 'boolean' == typeof h || i.isBuffer(h)) {
                  if (o) {
                    return [p(f ? n : o(n)) + '=' + p(o(h))];
                  }
                  return [p(n) + '=' + p(String(h))];
                }
                var v = [];
                if (void 0 === h) return v;
                var m;
                if (Array.isArray(l)) m = l;
                else {
                  var g = Object.keys(h);
                  m = c ? g.sort(c) : g;
                }
                for (var b = 0; b < m.length; ++b) {
                  var y = m[b];
                  (s && null === h[y]) ||
                    (v = Array.isArray(h)
                      ? v.concat(t(h[y], a(n, y), a, r, s, o, l, c, d, u, p, f))
                      : v.concat(t(h[y], n + (d ? '.' + y : '[' + y + ']'), a, r, s, o, l, c, d, u, p, f)));
                }
                return v;
              };
            e.exports = function (t, e) {
              var n = t,
                i = e || {};
              if (null !== i.encoder && void 0 !== i.encoder && 'function' != typeof i.encoder)
                throw new TypeError('Encoder has to be a function.');
              var s = void 0 === i.delimiter ? o.delimiter : i.delimiter,
                c = 'boolean' == typeof i.strictNullHandling ? i.strictNullHandling : o.strictNullHandling,
                d = 'boolean' == typeof i.skipNulls ? i.skipNulls : o.skipNulls,
                u = 'boolean' == typeof i.encode ? i.encode : o.encode,
                p = 'function' == typeof i.encoder ? i.encoder : o.encoder,
                f = 'function' == typeof i.sort ? i.sort : null,
                h = void 0 !== i.allowDots && i.allowDots,
                v = 'function' == typeof i.serializeDate ? i.serializeDate : o.serializeDate,
                m = 'boolean' == typeof i.encodeValuesOnly ? i.encodeValuesOnly : o.encodeValuesOnly;
              if (void 0 === i.format) i.format = a.default;
              else if (!Object.prototype.hasOwnProperty.call(a.formatters, i.format))
                throw new TypeError('Unknown format option provided.');
              var g,
                b,
                y = a.formatters[i.format];
              'function' == typeof i.filter ? ((b = i.filter), (n = b('', n))) : Array.isArray(i.filter) && ((b = i.filter), (g = b));
              var x = [];
              if ('object' != typeof n || null === n) return '';
              var w;
              w = i.arrayFormat in r ? i.arrayFormat : 'indices' in i ? (i.indices ? 'indices' : 'repeat') : 'indices';
              var _ = r[w];
              g || (g = Object.keys(n)), f && g.sort(f);
              for (var k = 0; k < g.length; ++k) {
                var T = g[k];
                (d && null === n[T]) || (x = x.concat(l(n[T], T, _, c, d, u ? p : null, b, f, h, v, y, m)));
              }
              return x.join(s);
            };
          },
          { './formats': 1, './utils': 5 },
        ],
        5: [
          function (t, e, n) {
            'use strict';
            var i = Object.prototype.hasOwnProperty,
              a = (function () {
                for (var t = [], e = 0; e < 256; ++e) t.push('%' + ((e < 16 ? '0' : '') + e.toString(16)).toUpperCase());
                return t;
              })();
            (n.arrayToObject = function (t, e) {
              for (var n = e && e.plainObjects ? Object.create(null) : {}, i = 0; i < t.length; ++i) void 0 !== t[i] && (n[i] = t[i]);
              return n;
            }),
              (n.merge = function (t, e, a) {
                if (!e) return t;
                if ('object' != typeof e) {
                  if (Array.isArray(t)) t.push(e);
                  else {
                    if ('object' != typeof t) return [t, e];
                    (a.plainObjects || a.allowPrototypes || !i.call(Object.prototype, e)) && (t[e] = !0);
                  }
                  return t;
                }
                if ('object' != typeof t) return [t].concat(e);
                var r = t;
                return (
                  Array.isArray(t) && !Array.isArray(e) && (r = n.arrayToObject(t, a)),
                  Array.isArray(t) && Array.isArray(e)
                    ? (e.forEach(function (e, r) {
                        i.call(t, r) ? (t[r] && 'object' == typeof t[r] ? (t[r] = n.merge(t[r], e, a)) : t.push(e)) : (t[r] = e);
                      }),
                      t)
                    : Object.keys(e).reduce(function (t, i) {
                        var r = e[i];
                        return Object.prototype.hasOwnProperty.call(t, i) ? (t[i] = n.merge(t[i], r, a)) : (t[i] = r), t;
                      }, r)
                );
              }),
              (n.decode = function (t) {
                try {
                  return decodeURIComponent(t.replace(/\+/g, ' '));
                } catch (e) {
                  return t;
                }
              }),
              (n.encode = function (t) {
                if (0 === t.length) return t;
                for (var e = 'string' == typeof t ? t : String(t), n = '', i = 0; i < e.length; ++i) {
                  var r = e.charCodeAt(i);
                  45 === r || 46 === r || 95 === r || 126 === r || (r >= 48 && r <= 57) || (r >= 65 && r <= 90) || (r >= 97 && r <= 122)
                    ? (n += e.charAt(i))
                    : r < 128
                    ? (n += a[r])
                    : r < 2048
                    ? (n += a[192 | (r >> 6)] + a[128 | (63 & r)])
                    : r < 55296 || r >= 57344
                    ? (n += a[224 | (r >> 12)] + a[128 | ((r >> 6) & 63)] + a[128 | (63 & r)])
                    : ((i += 1),
                      (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(i)))),
                      (n += a[240 | (r >> 18)] + a[128 | ((r >> 12) & 63)] + a[128 | ((r >> 6) & 63)] + a[128 | (63 & r)]));
                }
                return n;
              }),
              (n.compact = function (t, e) {
                if ('object' != typeof t || null === t) return t;
                var i = e || [],
                  a = i.indexOf(t);
                if (-1 !== a) return i[a];
                if ((i.push(t), Array.isArray(t))) {
                  for (var r = [], s = 0; s < t.length; ++s)
                    t[s] && 'object' == typeof t[s] ? r.push(n.compact(t[s], i)) : void 0 !== t[s] && r.push(t[s]);
                  return r;
                }
                return (
                  Object.keys(t).forEach(function (e) {
                    t[e] = n.compact(t[e], i);
                  }),
                  t
                );
              }),
              (n.isRegExp = function (t) {
                return '[object RegExp]' === Object.prototype.toString.call(t);
              }),
              (n.isBuffer = function (t) {
                return null !== t && void 0 !== t && !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t));
              });
          },
          {},
        ],
      },
      {},
      [2]
    )(2);
  }),
  define('datemethod', [], function () {
    return {
      getToday: function () {
        var t = new Date();
        return this.formatDate(t);
      },
      getTodayThirty: function () {
        var t = new Date(),
          e = new Date(t - 2592e6),
          n = e.getFullYear(),
          i = e.getMonth() + 1,
          a = e.getDate();
        return (i = i < 10 ? '0' + i : i), (a = a < 10 ? '0' + a : a), n + '-' + i + '-' + a;
      },
      getYesterday: function () {
        var t = new Date();
        return t.setDate(t.getDate() - 1), this.formatDate(t);
      },
      getLastWeekday: function () {
        var t = new Date();
        return t.setDate(t.getDate() - 7), this.formatDate(t);
      },
      getLastSomeMonthday: function (t) {
        var e = new Date();
        return e.setMonth(e.getMonth() - t), this.formatDate(e);
      },
      getLastYearToday: function (t) {
        var e = t ? new Date(t) : new Date(),
          n = e.getFullYear() - 1,
          i = e.getMonth() + 1;
        return (
          (t = e.getDate()), (i = i < 10 ? '0' + i : i), (t = t < 10 ? '0' + t : t), 2 === i && 29 === t && (t = 28), n + '-' + i + '-' + t
        );
      },
      getLastYearYesterday: function () {
        var t = new Date();
        return t.setDate(t.getDate() - 1), t.setFullYear(t.getFullYear() - 1), this.formatDate(t);
      },
      getLastMonthLastDay: function () {
        var t = new Date(),
          e = new Date(t.getFullYear(), t.getMonth(), 0);
        return this.formatDate(e);
      },
      formatDate: function (t) {
        var e = new Date(t),
          n = e.getFullYear(),
          i = e.getMonth() + 1,
          a = e.getDate();
        return (i = i < 10 ? '0' + i : i), (a = a < 10 ? '0' + a : a), n + '-' + i + '-' + a;
      },
      changeDateVal: function (t) {
        return t.substring(0, 4) + '-' + t.substring(4, 6) + '-' + t.substring(6);
      },
      sortArrByDate: function (t) {
        return (
          t.sort(function (t, e) {
            return Number(t.date) > Number(e.date) ? 1 : -1;
          }),
          t
        );
      },
      getWeekByDay: function (t) {
        return ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][new Date(Date.parse(t)).getDay()];
      },
      getDateAndTimeByReg: function (t) {
        if (t) {
          var e = new RegExp('([0-9-]+)[T|\\s]([0-9:]+)'),
            n = t.match(e);
          return { date: n[1], time: n[2] };
        }
      },
      pad: function (t) {
        return t < 10 ? '0' + t : t;
      },
      toTimeString: function (t) {
        var e = new Date(t);
        return (
          e.getFullYear() +
          '-' +
          this.pad(e.getMonth() + 1) +
          '-' +
          this.pad(e.getDate()) +
          ' ' +
          this.pad(e.getHours()) +
          ':' +
          this.pad(e.getMinutes()) +
          ':' +
          this.pad(e.getSeconds())
        );
      },
      getTime: function (t) {
        var e = this.changeDateVal(t);
        return new Date(e).getTime();
      },
    };
  }),
  define('../lib/datamethod', [], function () {
    return {
      dealBacktestValue: function (t, e) {
        return null === t || void 0 === t ? NaN : e ? Number(100 * t).toFixed(2) + '%' : t.toFixed(2);
      },
      getByteLength: function (t) {
        if (!t) return 0;
        for (var e = 0, n = 0; n < t.length; n++) {
          var i = t.charCodeAt(n);
          i < 19968 || i > 40869 ? e++ : (e += 2);
        }
        return e;
      },
      formatPerfomanceData: function (t, e, n) {
        return t.hasOwnProperty(e) && null !== t[e] ? (n ? Number(100 * t[e]).toFixed(2) + '%' : Number(t[e]).toFixed(2)) : '--';
      },
      formatPercentData: function (t, e) {
        return void 0 === t || '--' === t ? '--' : e ? Number(100 * t).toFixed(2) + '%' : Number(t).toFixed(2);
      },
      initPreAceStyle: function (t, e) {
        t.find('code').each(function (t) {
          var n = $(this).attr('class') || 'lang-markdown';
          if (n && 'lang' === n.substring(0, 4)) {
            var i = n.substring(5, n.length),
              a = $(this).html(),
              r = $(this).parent().empty(),
              s = e.edit(r[0]);
            (s.$blockScrolling = 1 / 0),
              s.setTheme('ace/theme/chrome'),
              s.getSession().setMode('ace/mode/' + i),
              s.setValue(a),
              s.renderer.setShowInvisibles(!1),
              s.renderer.setShowPrintMargin(!1),
              s.setOptions({ maxLines: 1 / 0 }),
              s.setReadOnly(!0),
              s.clearSelection();
          }
        });
      },
      toEscape: function (t) {
        return (
          (t = t.replace(/&#039;/g, "'")),
          (t = t.replace(/&lt;/g, '<')),
          (t = t.replace(/&gt;/g, '>')),
          (t = t.replace(/&quot;/g, '"')),
          marked(t)
        );
      },
      HtmlEncode: function (t) {
        var e = document.createElement('div');
        null !== e.textContent ? (e.textContent = t) : (e.innerText = t);
        var n = e.innerHTML;
        return (n = n.replace(/(")/g, '&quot;')), (e = null), n;
      },
      HtmlDecode: function (t) {
        var e = document.createElement('div');
        e.innerHTML = t;
        var n = e.innerText || e.textContent;
        return (n = n.replace(/&quot;/g, '"')), (e = null), n;
      },
      textEllipsis: function (t, e) {
        return t.length <= e ? t : t.substr(0, e) + '…';
      },
    };
  }),
  define(
    '../components/backtest-result/revenue-overview/revenue-overview',
    ['require', 'exports', 'module', 'qs', 'datemethod', 'VueAjax', 'VueConfig', 'commonFunc', 'datemethod', '../../../lib/datamethod'],
    function (t, e, n) {
      var i = t('qs'),
        a = t('datemethod'),
        r = t('VueAjax'),
        s = t('VueConfig'),
        o = t('commonFunc'),
        l = t('datemethod'),
        c = (t('../../../lib/datamethod'), null),
        d = null;
      n.exports = Vue.extend({
        template:
          '<div id="backreport_revenue_overview" class="backreport-result-container backreport-overview"><table class="overviewbox-table" v-if="showIndex === 1"><thead><tr><td>策略收益</td><td>基准收益</td><td>策略年化收益率</td><td>基准年化收益</td><td>Alpha</td><td>Beta</td><td>Sharpe</td><td>Sortino</td><td>Information Ratio</td><td>Volatility</td><td><span>最大回撤</span><span class="icon2 icon-help h_tip" @mouseenter="showTimeTip" @mouseleave="hideTimeTip"><div class="h_tip_box" v-show="isShowTimeTip &amp;&amp; moreTime">{{moreTime}}至{{mostTime}}</div></span></td><td>Tracking Error</td><td>Downside Risk</td><td>胜率</td></tr></thead><tbody><tr><td>{{performance.yield}}</td><td>{{performance.benchmarkYield}}</td><td>{{performance.annualYield}}</td><td>{{performance.benchmarkAnnualYield}}</td><td>{{performance.alpha}}</td><td>{{performance.beta}}</td><td>{{performance.sharpe}}</td><td>{{performance.sortino}}</td><td>{{performance.informationRatio}}</td><td>{{performance.volatility}}</td><td>{{performance.maxDrawdown}}</td><td>{{performance.trackingError}}</td><td>{{performance.downsideRisk}}</td><td>{{performance.winRate}}</td></tr></tbody></table><div id="charts-box" style="width: 100%; height: 100%; position: relative;" v-if="showIndex === 1"><div class="toolbar-charts-select" v-show="progress === 1"><div class="toolbar-chart-label"><input type="radio" name="chartStyle" id="chartsRadioNormal" v-on:change="chartsRadioNormal" checked="checked"><label for="chartsRadioNormal">普通轴</label></div><div class="toolbar-chart-label"><input type="radio" name="chartStyle" id="chartsRadioLog" v-on:change="chartsRadioLog"><label for="chartsRadioLog">对数轴</label></div></div><div id="revenue_overview_charts" class="overviewbox-charts" style="width: 100%;"></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="loading-data" v-else-if="showIndex === 2">策略运行失败，暂无数据.</div></div>',
        components: {},
        data: function () {
          return {
            chartId: 'revenue_overview_charts',
            beginDate: '',
            endDate: '',
            tempDate: '',
            dateTemp: '',
            tempObj: {},
            isLoopTran: !0,
            loopTran: null,
            chart: null,
            state1: !0,
            state2: !1,
            moreTime: null,
            mostTime: null,
            colorList: ['#C23531', '#7e659c', '#ed9951', '#51acce', '#9cb863', '#b4554f', '#617da5', '#384a62'],
            performance: {
              yield: '--',
              benchmarkYield: '--',
              annualYield: '--',
              benchmarkAnnualYield: '--',
              alpha: '--',
              beta: '--',
              sharpe: '--',
              sortino: '--',
              informationRatio: '--',
              volatility: '--',
              maxDrawdown: '--',
              trackingError: '--',
              downsideRisk: '--',
              winRate: '--',
            },
            interval: null,
            trades: null,
            chartDataList: null,
            isShowTimeTip: !1,
            showIndex: 0,
            progress: null,
          };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {
          backTestId: function () {
            this.getPageInfo();
          },
          backTestStatus: function () {
            if (0 == +sessionStorage.getItem('isDoingBackTest') && 1 === this.progress) return !1;
            this.getPageInfo();
          },
        },
        computed: {
          backTestId: function () {
            return this.$store.state.backTestId;
          },
          backTestStatus: function () {
            return this.$store.state.backTestStatus;
          },
          status: function () {
            return this.$store.state.backTestFail;
          },
          cancelBackTest: function () {
            return this.$store.state.cancelBackTest;
          },
        },
        mounted: function () {
          (this.backTestId = this.$store.state.backTestId),
            this.backTestId && this.getPageInfo(),
            $(window).resize(function () {
              var t = document.getElementsByTagName('iframe')[0];
              if (void 0 !== t) {
                t.parentNode.style.display = 'none';
              }
            });
        },
        methods: {
          getPageInfo: function () {
            var t = this;
            if (2 === t.status) return (t.showIndex = 2), !1;
            (t.showIndex = 1),
              1 === t.backTestStatus
                ? setTimeout(function () {
                    t.initChart(), t.hasProgressed();
                  }, 0)
                : 0 === t.backTestStatus
                ? setTimeout(function () {
                    t.initChart(), t.doingProgress();
                  }, 0)
                : t.loading();
          },
          loading: function () {
            self.showIndex = 0;
          },
          doingProgress: function () {
            this.requestTradeDay();
          },
          hasProgressed: function () {
            this.getCompletedData();
          },
          chartsOptions: function () {
            var t = this;
            return {
              chart: { renderTo: 'revenue_overview_charts', marginTop: 12 },
              plotOptions: { column: { dataGrouping: { enabled: !1 } }, line: { dataGrouping: { enabled: !1 } } },
              rangeSelector: {
                selected: 5,
                inputEnabled: !1,
                inputDateFormat: '%Y-%m-%d',
                buttonSpacing: 1,
                height: 35,
                buttonTheme: {
                  fill: '#fff',
                  stroke: '#999',
                  width: 40,
                  height: 16,
                  r: 2,
                  style: { color: '#676A74', font: '14px "Microsoft yahei", sans-serif' },
                  states: { hover: {}, select: { fill: '#5389D2', style: { color: 'white', font: '14px "Microsoft yahei", sans-serif' } } },
                },
                labelStyle: { color: '#676A74', font: '14px "Microsoft yahei", sans-serif' },
                buttons: [
                  { type: 'week', count: 1, text: '1周' },
                  { type: 'month', count: 1, text: '1月' },
                  { type: 'month', count: 3, text: '3月' },
                  { type: 'month', count: 6, text: '6月' },
                  { type: 'year', count: 1, text: '1年' },
                  { type: 'all', count: 1, text: '全部' },
                ],
              },
              legend: {
                enabled: !0,
                align: 'left',
                verticalAlign: 'top',
                itemStyle: { font: '14px "Microsoft yahei", sans-serif', color: '#333' },
                x: 308,
              },
              tooltip: {
                shared: !0,
                enabled: !0,
                valueDecimals: 2,
                followPointer: !0,
                borderColor: '#eeeeee',
                padding: 5,
                formatter: function () {
                  var t = this.points,
                    e = [],
                    n = Highcharts.dateFormat('%Y-%m-%d', this.x),
                    i = a.getWeekByDay(n),
                    r = 0;
                  return (
                    e.push('<div style="background: #eeeeee; border: 0; border-radius: 3px;">'),
                    e.push(
                      '<b><div style = "color: #333;font-size:13px; line-height: 18px; padding: 2px 0;"><span style="font-weight: 600;">' +
                        n +
                        '  ' +
                        i +
                        '</span> <div></b><br/>'
                    ),
                    $.each(t, function (t, n) {
                      if (!n) return !1;
                      if ('基准收益' == n.series.name)
                        e.push(
                          '<span style="color:#2F4554; line-height: 18px; font-weight:600; padding: 5px 0;">基准收益：<span style="font-weight:700;color:#2F4554;">' +
                            Number(n.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      else if ('策略收益' == n.series.name)
                        e.push(
                          '<span style="color:#C23531; line-height: 18px; font-weight:600; padding: 5px 0;">策略收益：<span style="font-weight:700; color:#C23531;">' +
                            Number(n.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      else if ('超额收益' == n.series.name)
                        e.push(
                          '<span style="color:#f89c6d; line-height: 18px; font-weight:600; padding: 5px 0;">超额收益：<span style="font-weight:700; color:#f89c6d;">' +
                            Number(n.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      else if ('当日盈亏' == n.series.name) {
                        var i = n.y >= 0 ? '#EE5F5B' : '#62C462';
                        e.push(
                          '<span style="color:' +
                            i +
                            '; line-height: 18px; font-weight:600; padding: 5px 0;">盈亏分析：<span style="font-weight:700;color:' +
                            i +
                            ';">' +
                            Number(n.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      } else if ('当日买入' == n.series.name)
                        e.push(
                          '<span style="color:#676a74; line-height: 18px; font-weight:600; padding: 5px 0;">当日买入：<span style="font-weight:700; color:#676a74;">' +
                            Math.round(100 * n.y) / 100 +
                            '</span></span><br>'
                        );
                      else if ('当日卖出' == n.series.name)
                        e.push(
                          '<span style="color:#22ac38; line-height: 18px; font-weight:600; padding: 5px 0;">当日卖出：<span style="font-weight:700; color:#22ac38;">' +
                            Math.round(100 * n.y) / 100 +
                            '</span></span><br>'
                        );
                      else {
                        var a = Math.round(100 * n.y) / 100;
                        e.push(
                          '<span style="font-weight:600; padding: 5px 0; color:' +
                            n.color +
                            '">' +
                            n.series.name +
                            '：<span style="font-weight:700; color:' +
                            n.color +
                            '">' +
                            a +
                            '</span></span><br>'
                        ),
                          r++;
                      }
                    }),
                    e.push('</div>'),
                    e.join('')
                  );
                },
              },
              xAxis: {
                dateTimeLabelFormats: {
                  millisecond: '%Y%m%d',
                  second: '%Y%m%d',
                  minute: '%Y%m%d',
                  hour: '%Y%m%d',
                  day: '%Y%m%d',
                  week: '%Y%m%d',
                  month: '%Y%m%d',
                  year: '%Y%m%d',
                },
                tickLength: 0,
                tickWidth: 0,
                startOnTick: !0,
                endOnTick: !0,
                gridLineWidth: 1,
                labels: { enabled: !0, autoRotation: [-45] },
                plotBands: [
                  {
                    color: '#e1e0ef',
                    from: null,
                    to: null,
                    id: null,
                    label: { text: '最大回撤区间', style: { color: '#676A74', textAlign: 'center' } },
                  },
                ],
                events: {
                  afterSetExtremes: function () {
                    null !== d && (clearTimeout(d), (d = null)),
                      (d = setTimeout(function () {
                        t.changeRangeTime();
                      }, 200));
                  },
                },
              },
              yAxis: [
                {
                  labels: {
                    align: 'left',
                    x: 0,
                    formatter: function () {
                      return t.yAxis(this.value) + '%';
                    },
                  },
                  title: { text: '收益走势' },
                  height: '49%',
                  tickAmount: 10,
                  opposite: !0,
                },
                {
                  labels: {
                    align: 'left',
                    x: 0,
                    formatter: function () {
                      return t.yAxis(this.value) + '%';
                    },
                  },
                  title: { text: '盈亏分析' },
                  top: '50%',
                  height: '24%',
                  offset: 0,
                  tickAmount: 10,
                  opposite: !0,
                },
                {
                  labels: {
                    align: 'left',
                    x: 0,
                    formatter: function () {
                      return t.yAxis(this.value);
                    },
                  },
                  title: { text: '成交记录' },
                  top: '75%',
                  height: '25%',
                  offset: 0,
                  tickAmount: 10,
                  opposite: !0,
                },
                {
                  labels: {
                    align: 'left',
                    x: 0,
                    formatter: function () {
                      return t.yAxis(this.value);
                    },
                  },
                  title: { text: '自定义画图' },
                  top: '0%',
                  height: '0%',
                  offset: 0,
                  tickAmount: 10,
                  opposite: !0,
                  visible: !1,
                },
              ],
              credits: { enabled: !1 },
              exporting: { enabled: !1 },
            };
          },
          initChart: function () {
            Highcharts.setOptions({
              lang: { loading: '数据正在加载中...', rangeSelectorZoom: '缩放:', rangeSelectorFrom: '从', rangeSelectorTo: '至' },
            });
            var t = {};
            c && (c.destroy(), (c = null)),
              (t = this.chartsOptions()),
              Highcharts.wrap(Highcharts.Axis.prototype, 'getPlotBandPath', function (t) {
                var e = t.apply(this, Array.prototype.slice.call(arguments, 1));
                return e && (e.flat = !1), e;
              }),
              c ||
                ((c = Highcharts.stockChart(this.chartId, t, function (t) {
                  setTimeout(function () {
                    $(window).resize(function () {
                      t.reflow();
                    });
                  }, 0);
                })),
                c.showLoading());
          },
          requestTradeDay: function () {
            var t = this;
            r.jsonp({
              url: s.ajax['study-strategy'].getTradeDayList,
              data: { backTestId: t.backTestId },
              success: function (e) {
                t.trades = e;
                var n, i;
                (n = e[0]),
                  (i = e[e.length - 1]),
                  (t.beginDate = n.substr(0, 4) + '-' + n.substr(4, 2) + '-' + n.substr(6, 2)),
                  (t.tempDate = n.substr(0, 4) + '-' + n.substr(4, 2) + '-' + n.substr(6, 2)),
                  (t.endDate = i.substr(0, 4) + '-' + i.substr(4, 2) + '-' + i.substr(6, 2)),
                  t.requestChartData(),
                  t.waitLimit();
              },
            });
          },
          waitLimit: function () {
            if (!this.cancelBackTest) {
              var t = this,
                e = function (t, e) {
                  setTimeout(function () {
                    t();
                  }, 5e3);
                },
                n = new Promise(e);
              Promise.all([t.newRequestChardata(), n]).then(function (e) {
                if (t.cancelBackTest) return !1;
                var n = e[0].data.result;
                'COMPILING' === n.status ? t.waitLimit() : t.requestChartData(),
                  ('COMPILING' !== n.status && 'SUCCESS' !== n.status) || t.handleData(n);
              });
            }
          },
          newRequestChardata: function () {
            var t = { backTestId: this.backTestId },
              e = i.stringify(t);
            return axios.post('/platform/backtest/backtestloop/', e);
          },
          requestChartData: function () {
            var t = this;
            return t.cancelBackTest
              ? (clearInterval(t.interval), (t.interval = null), sessionStorage.setItem('isDoingBackTest', 1), !1)
              : 1 === t.progress
              ? (clearInterval(t.interval),
                (t.interval = null),
                t.$store.commit({ type: 'getBackTestStatus', status: 1 }),
                sessionStorage.setItem('isDoingBackTest', 0),
                t.backTestBeenCompleted(),
                !1)
              : t.backTestId && 2 != t.$store.state.backTestFail
              ? void r.jsonp({
                  url: s.ajax['study-strategy'].backtestLoop,
                  data: { backTestId: t.backTestId },
                  success: function (e) {
                    1 === e.performance.progress
                      ? (t.$store.commit({ type: 'getBackTestStatus', status: 1 }),
                        sessionStorage.setItem('isDoingBackTest', 0),
                        t.backTestBeenCompleted())
                      : t.handleData(e);
                  },
                  resulterror: function () {},
                  error: function () {},
                })
              : (clearInterval(t.interval), void (t.interval = null));
          },
          handleData: function (t) {
            var e = this;
            (e.progress = t.performance.progress),
              e.$store.commit({ type: 'getBackTestProgress', data: o.digitsTranform(t.performance.progress, 2, !0, !0, !1) }),
              (e.performance = e.handlePerformance(t.performance));
            var n = {};
            (n = {
              date: [],
              dateList: [],
              chartsDataList: [],
              excessIncome: [],
              logExcessIncome: [],
              algoprofit: [],
              logAlgoprofit: [],
              bechmarkprofit: [],
              logBechmarkprofit: [],
              profitloss: [],
              tradeRecordBuy: [],
              tradeRecordSale: [],
              maxdrawdown: [],
              record: {},
            }),
              (n.dateList = e.trades);
            var i = t.profit.list;
            $.each(e.trades, function (t, e) {
              var a,
                r,
                s = e,
                c = l.getTime(s),
                d = i[s] ? i[s] : null;
              (a = d && d.trade_record ? d.trade_record.buy : null),
                (r = d && d.trade_record ? d.trade_record.sale : null),
                n.date.push(s),
                n.bechmarkprofit.push([c, d ? o.digitsTranform(d.benchmark_profit, 2, !0, !1, !1) : null]),
                n.algoprofit.push([c, d ? o.digitsTranform(d.algo_profit, 2, !0, !1, !1) : null]),
                n.excessIncome.push([c, d ? o.digitsTranform(d.excess_income, 2, !0, !1, !1) : null]),
                n.logBechmarkprofit.push([c, d ? o.digitsTranform(d.log_benchmark_profit, 2, !0, !1, !1) : null]),
                n.logAlgoprofit.push([c, d ? o.digitsTranform(d.log_algo_profit, 2, !0, !1, !1) : null]),
                n.logExcessIncome.push([c, d ? o.digitsTranform(d.log_excess_income, 2, !0, !1, !1) : null]),
                n.profitloss.push([c, d ? o.digitsTranform(d.profit_and_loss, 2, !0, !1, !1) : null]),
                n.tradeRecordBuy.push([c, o.digitsTranform(a, 2, !1, !1, !1)]),
                n.tradeRecordSale.push([c, o.digitsTranform(r, 2, !1, !1, !1)]),
                n.maxdrawdown.push([c, d ? o.digitsTranform(d.max_drawdown, 2, !0, !1, !1) : null]);
            }),
              t.record ? (n = e._parseRecordData(t.record, n)) : (n.record = !1),
              (e.chartDataList = n),
              e.updateChart(n),
              c.reflow(),
              'FAIL' == t.status && e.$store.commit({ type: 'getBackTestFail', data: 2 });
          },
          _parseRecordData: function (t, e) {
            var n = {};
            for (var i in t) for (var a in t[i]) n.hasOwnProperty(a) || (n[a] = null);
            var r = _.keys(n);
            for (var s in this.trades) {
              var o = this.trades[s];
              for (var c in r) {
                var d = r[c];
                if (e.record.hasOwnProperty(d)) {
                  var u = t[o] && !isNaN(t[o][d]) ? t[o][d] : null;
                  e.record[d].push([l.getTime(o), u]);
                } else e.record[d] = [];
              }
            }
            return e;
          },
          getTransactionData: function (t) {
            var e = this;
            (e.dateTemp = e.tempDate),
              (e.tempDate = new Date(e.tempDate).getTime() + 2592e6),
              r.jsonp({
                url: s.ajax['backtest-result'].getTransactionData,
                data: {
                  backTestId: e.backTestId,
                  begin: 0 === t ? e.beginDate : l.formatDate(e.dateTemp),
                  end: e.tempDate < new Date(e.endDate).getTime() ? l.formatDate(e.tempDate) : e.endDate,
                },
                success: function (t) {
                  $.extend(!0, e.tempObj, t),
                    e.chartDataList.date &&
                      ($.each(e.chartDataList.date, function (t, n) {
                        $.each(e.tempObj, function (i, a) {
                          Number(n) === Number(i) &&
                            ((e.chartDataList.tradeRecordBuy[t][1] = o.digitsTranform(a.buy, 2, !1, !1, !1)),
                            (e.chartDataList.tradeRecordSale[t][1] = o.digitsTranform(a.sale, 2, !1, !1, !1)));
                        });
                      }),
                      e.updateChart(e.chartDataList));
                },
              });
          },
          getCompletedData: function () {
            var t,
              e = this;
            (t = e.backTestId),
              r.jsonp({
                url: s.ajax['backtest-result'].getBacktestDetail,
                data: { backTestId: t },
                success: function (n) {
                  var i,
                    a,
                    o = n.performance,
                    c = n.profit.list,
                    d = {
                      date: [],
                      dateList: [],
                      chartsDataList: [],
                      excessIncome: [],
                      logExcessIncome: [],
                      algoprofit: [],
                      logAlgoprofit: [],
                      bechmarkprofit: [],
                      logBechmarkprofit: [],
                      profitloss: [],
                      tradeRecordBuy: [],
                      tradeRecordSale: [],
                      maxdrawdown: [],
                      record: null,
                    };
                  $('#backreport_revenue_overview').attr('data-collected', n.is_collection),
                    (e.performance = e.handlePerformance(o)),
                    (i = o.drawdown_more),
                    (a = o.drawdown_most),
                    $.each(c, function (t, e) {
                      e.profit_and_loss;
                      d.date.push(t);
                      var n = l.getTime(t);
                      d.dateList.push(n),
                        d.chartsDataList.push(e),
                        d.excessIncome.push([n, e.excess_income ? 100 * e.excess_income : 0]),
                        d.logExcessIncome.push([n, e.log_excess_income ? 100 * e.log_excess_income : 0]),
                        d.algoprofit.push([n, e.algo_profit ? 100 * e.algo_profit : 0]),
                        d.logAlgoprofit.push([n, e.log_algo_profit ? 100 * e.log_algo_profit : 0]),
                        d.bechmarkprofit.push([n, e.benchmark_profit ? 100 * e.benchmark_profit : 0]),
                        d.logBechmarkprofit.push([n, e.log_benchmark_profit ? 100 * e.log_benchmark_profit : 0]),
                        d.profitloss.push([n, e.profit_and_loss ? 100 * e.profit_and_loss : 0]),
                        d.tradeRecordBuy.push([n, e.trade_record.buy ? e.trade_record.buy : 0]),
                        d.tradeRecordSale.push([n, e.trade_record.sale ? e.trade_record.sale : 0]),
                        d.maxdrawdown.push([n, e.max_drawdown ? 100 * e.max_drawdown : 0]);
                    });
                  var u, p;
                  (u = d.date[0]),
                    (p = d.date[d.date.length - 1]),
                    (e.beginDate = u.substr(0, 4) + '-' + u.substr(4, 2) + '-' + u.substr(6, 2)),
                    (e.tempDate = u.substr(0, 4) + '-' + u.substr(4, 2) + '-' + u.substr(6, 2)),
                    (e.endDate = p.substr(0, 4) + '-' + p.substr(4, 2) + '-' + p.substr(6, 2)),
                    r.jsonp({
                      url: s.ajax['backtest-result'].getCustomDrawing,
                      data: { backtestid: t },
                      success: function (t) {
                        var n = 0;
                        if (((e.progress = 1), !t && null === t))
                          return (e.chartDataList = d), e.updateChart(d), e.updateChartSettings(i, a), e.renderTimePlugins(), !1;
                        (d.record = {}),
                          $.each(t, function (t, e) {
                            var i = l.getTime(t);
                            $.each(e, function (t, e) {
                              0 === n && (d.record[t] = []), d.record[t].push([i, isNaN(Number(e)) ? null : Number(e)]);
                            }),
                              n++;
                          }),
                          (e.chartDataList = d),
                          e.updateChart(d),

                          e.updateChartSettings(i, a),
                          e.renderTimePlugins();
                      },
                    });
                },
              });
          },
          backTestBeenCompleted: function () {
            var t = this,
              e = $('input.highcharts-range-selector'),
              n = e.eq(0).val(),
              i = e.eq(1).val();
            r.jsonp({
              url: s.ajax['backtest-result'].getbacktestPerformance,
              data: { backTestId: t.backTestId, startdate: n, enddate: i },
              success: function (e) {
                var n = e.drawdown_more,
                  i = e.drawdown_most;
                t.updateChartSettings(n, i), t.renderTimePlugins();
              },
            });
          },
          updateChart: function (t) {
            var e = [],
              n = [],
              i = [],
              a = [];
            (n = $.merge([], t.bechmarkprofit)),
              (i = $.merge([], t.algoprofit)),
              (a = $.merge([], t.excessIncome)),
              (e = [
                {
                  type: 'line',
                  name: '基准收益',
                  color: '#2F4554',
                  tooltip: {},
                  lineWidth: 1,
                  data: n,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
                {
                  type: 'line',
                  name: '策略收益',
                  color: '#C23531',
                  tooltip: {},
                  lineWidth: 1,
                  data: i,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
                {
                  type: 'line',
                  name: '超额收益',
                  color: '#f89c6d',
                  tooltip: {},
                  lineWidth: 1,
                  data: a,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
                {
                  type: 'column',
                  name: '当日盈亏',
                  color: '#EE5F5B',
                  negativeColor: '#62C462',
                  data: t.profitloss,
                  lineWidth: 1,
                  yAxis: 1,
                  showInLegend: !1,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
                {
                  type: 'column',
                  name: '当日买入',
                  color: '#EE5F5B',
                  data: t.tradeRecordBuy,
                  lineWidth: 1,
                  yAxis: 2,
                  showInLegend: !1,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
                {
                  type: 'column',
                  name: '当日卖出',
                  color: '#62C462',
                  data: t.tradeRecordSale,
                  lineWidth: 1,
                  yAxis: 2,
                  showInLegend: !1,
                  states: { hover: { enabled: !0, halo: { lineWidth: 1, lineWidthPlus: 1 } } },
                },
              ]),
              t.record &&
                (this.updateRecordChart(),
                c.redraw(),
                $.each(t.record, function (t, n) {
                  e.push({ name: t, yAxis: 3, data: n, showInLegend: !1 });
                })),
              $.each(e, function (t, e) {
                var n = !1,
                  i = e;
                $.each(c.series, function (t, e) {
                  if (e && i.name == e.name) return (n = !0), e.update(i, !1), !1;
                }),
                  n || c.addSeries(i, !1);
              }),
              c.redraw(),
              c.hideLoading();
          },
          updateChartSettings: function (t, e) {
            var n = {},
              i = this;
            if (
              ((i.moreTime = t.substr(0, 4) + '-' + t.substr(4, 2) + '-' + t.substr(6, 2)),
              (i.mostTime = e.substr(0, 4) + '-' + e.substr(4, 2) + '-' + e.substr(6, 2)),
              (n = {
                selected: 5,
                inputDateFormat: '%Y-%m-%d',
                enabled: !0,
                inputEnabled: !0,
                buttonSpacing: 1,
                height: 35,
                buttonTheme: {
                  fill: '#fff',
                  stroke: '#999',
                  width: 40,
                  height: 16,
                  r: 2,
                  style: { color: '#676A74', font: '14px "Microsoft yahei", sans-serif' },
                  states: { hover: {}, select: { fill: '#5389D2', style: { color: 'white', font: '14px "Microsoft yahei", sans-serif' } } },
                },
                labelStyle: { color: '#676A74', font: '14px "Microsoft yahei", sans-serif' },
                buttons: [
                  { type: 'week', count: 1, text: '1周' },
                  { type: 'month', count: 1, text: '1月' },
                  { type: 'month', count: 3, text: '3月' },
                  { type: 'month', count: 6, text: '6月' },
                  { type: 'year', count: 1, text: '1年' },
                  { type: 'all', count: 1, text: '全部' },
                ],
              }),
              c)
            ) {
              var a = [];
              t &&
                e &&
                t !== e &&
                (a = [
                  {
                    color: '#e4f0ff',
                    from: t ? l.getTime(t) : null,
                    to: e ? l.getTime(e) : null,
                    id: 'plot-bank',
                    label: { text: '最大回撤区间', style: { color: '#676a74', textAlign: 'center' } },
                  },
                ]),
                $.each(c.xAxis, function (t, e) {
                  e.update({ gridLineWidth: 0, plotBands: a });
                });
            }
            c.update({ rangeSelector: n });
          },
          updateRecordChart: function () {
            c &&
              (c.yAxis[0].update({ height: '39%' }),
              c.yAxis[1].update({ top: '40%', height: '19%' }),
              c.yAxis[2].update({ top: '60%', height: '19%' }),
              c.yAxis[3].update({ top: '80%', height: '20%', visible: !0 }));
          },
          yAxis: function (t) {
            var e;
            return 0 === t
              ? (e = t)
              : ((e = t < 1 && t > -1 ? t.toFixed(1) : parseInt(t) == t ? t : t.toFixed(1)),
                e > 1e6 || e < -1e6 ? ((e /= 1e6), e.toFixed(1) + 'M') : e > 1e3 || e < -1e3 ? ((e /= 1e3), e.toFixed(1) + 'K') : e);
          },
          handlePerformance: function (t) {
            return {
              yield: o.digitsTranform(t.yield, 2, !0, !0, !0),
              annualYield: o.digitsTranform(t.annual_yield, 2, !0, !0, !0),
              benchmarkYield: o.digitsTranform(t.benchmark_yield, 2, !0, !0, !0),
              benchmarkAnnualYield: o.digitsTranform(t.benchmark_annual_yield, 2, !0, !0, !0),
              alpha: o.digitsTranform(t.alpha, 2, !1, !1, !0),
              beta: o.digitsTranform(t.beta, 2, !1, !1, !0),
              sharpe: o.digitsTranform(t.sharpe_ratio, 2, !1, !1, !0),
              sortino: o.digitsTranform(t.sortino, 2, !1, !1, !0),
              informationRatio: o.digitsTranform(t.information_ratio, 2, !1, !1, !0),
              volatility: o.digitsTranform(t.volatility, 2, !1, !1, !0),
              maxDrawdown: o.digitsTranform(t.max_drawdown, 2, !0, !0, !0),
              trackingError: o.digitsTranform(t.tracking_error, 2, !1, !1, !0),
              downsideRisk: o.digitsTranform(t.downside_risk, 2, !1, !1, !0),
              winRate: o.digitsTranform(t.win_rate, 2, !0, !0, !0),
            };
          },
          renderTimePlugins: function () {
            var t = ($('input.highcharts-range-selector'), this);
            $('input.highcharts-range-selector').click(function () {
              new WdatePicker({
                maxDate: t.endDate,
                minDate: t.beginDate,
                position: { left: -60 },
                onpicked: function () {
                  this.onchange(), this.onblur();
                },
              });
            });
          },
          changeRangeTime: function (t) {
            var e = this,
              n = $('input.highcharts-range-selector'),
              i = n.eq(0).val(),
              a = n.eq(1).val();
            r.jsonp({
              url: s.ajax['backtest-result'].getbacktestPerformance,
              data: { backTestId: e.backTestId, startdate: i, enddate: a },
              success: function (t) {
                e.performance = e.handlePerformance(t);
              },
            });
          },
          chartsRadioNormal: function (t) {
            var e;
            if (c) {
              (e = c.series), e[2].show();
              var n = {};
              $.extend(!0, n, this.chartDataList),
                e[0].setData(n.bechmarkprofit, !1),
                e[1].setData(n.algoprofit, !1),
                e[2].setData(n.excessIncome, !1),
                c.redraw();
            }
          },
          chartsRadioLog: function (t) {
            var e;
            if (c) {
              (e = c.series), e[2].hide();
              var n = {};
              $.extend(!0, n, this.chartDataList),
                e[0].setData(n.logBechmarkprofit, !1),
                e[1].setData(n.logAlgoprofit, !1),
                e[2].setData(n.logExcessIncome, !1),
                c.redraw();
            }
          },
          showTimeTip: function (t) {
            this.isShowTimeTip = !0;
          },
          hideTimeTip: function (t) {
            this.isShowTimeTip = !1;
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/pagination/pagination',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig'],
    function (t, e, n) {
      t('VueAjax'), t('VueConfig');
      n.exports = Vue.extend({
        template:
          '<div class="paginationbox" v-if="total <= 5"><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div>\x3c!-- <div class="box-ellipsis">...</div> --\x3e<div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div><div class="paginationbox" v-else-if=" total > 5 &amp;&amp; currentPage < 4 "><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList.slice(0, currentPage+1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(total-1, total)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div><div class="paginationbox" v-else-if=" total > 5 &amp;&amp; 4 <= currentPage &amp;&amp; currentPage <= total-3 "><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList.slice(0, 1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(currentPage-2, currentPage+1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(total-1, total)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div><div class="paginationbox" v-else-if=" total > 5 &amp;&amp; total-2 === currentPage"><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList.slice(0, 1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(total-4, total)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div><div class="paginationbox" v-else-if=" total > 5 &amp;&amp; total-2 < currentPage &amp;&amp; currentPage < total"><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList.slice(0, 1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(total-3, total)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div><div class="paginationbox" v-else-if=" total > 5 &amp;&amp; currentPage === total"><div class="box cont" @click="prePage">&lt;</div><div class="box box-page" v-for="item in pageList.slice(0, 1)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box-ellipsis">...</div><div class="box box-page" v-for="item in pageList.slice(total-2, currentPage)" v-bind:class="{ boxactive : currentPage === item } " @click="tabPage(item)">{{item}}</div><div class="box box-next cont" @click="nextPage">&gt;</div><div class="box-input"><input type="text" class="goto_page" v-model="inpPage"></div><div class="box-goto" @click="gotoPage">前往</div></div>',
        components: {},
        props: ['total', 'current'],
        data: function () {
          return { inpPage: 1, currentPage: 1 };
        },
        computed: {
          pageList: function () {
            for (var t = [], e = this.total, n = 0; n < e; n++) t.push(n + 1);
            return t;
          },
          pageCount: function () {
            return this.total;
          },
        },
        watch: {
          inpPage: function () {
            this.inpPage = ('' + this.inpPage).replace(/[^\d]/g, '');
          },
        },
        mounted: function () {},
        methods: {
          tabPage: function (t) {
            (this.currentPage = t), (this.inpPage = this.currentPage), this.sendMsgToParent();
          },
          prePage: function () {
            this.currentPage > 1 && (--this.currentPage, (this.inpPage = this.currentPage), this.sendMsgToParent());
          },
          nextPage: function () {
            this.currentPage < this.pageCount && (++this.currentPage, (this.inpPage = this.currentPage), this.sendMsgToParent());
          },
          gotoPage: function () {
            var t = this,
              e = Number(t.inpPage);
            0 < e && e !== t.currentPage && ((t.currentPage = e), t.sendMsgToParent());
          },
          sendMsgToParent: function () {
            this.$emit('listentopagination', this.currentPage);
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/transaction-detail/transaction-detail',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', '../pagination/pagination'],
    function (t, e, n) {
      $(window).resize(function () {
        var t = Math.floor($('#zUIpanel').height() / 12) - 3;
        $('#backreport_transaction_detail_tbody').find('tr.trclose td').css('height', t);
      });
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('../pagination/pagination');
      n.exports = Vue.extend({
        template:
          '<div id="backreport_transaction_detail" class="backreport-result-container backreport-transaction"><div class="backreport-table-thead-fixed"><table width="100%" cellpadding="0" cellspacing="0"><colgroup>\x3c!-- <col width="6%"></col> --\x3e<col width="8%"><col width="8%"><col width="12%"><col width="8%"><col width="8%"><col width="8%"><col width="10%"><col width="8%"><col width="8%"><col width="22%"></colgroup><thead><tr>\x3c!-- <th class="wholeFold" @click="showOrHideWholePannel">展开/收起</th> --\x3e<th>日期</th><th>时间</th><th>代码/名称</th><th>买卖操作</th><th>成交价</th><th>成交数量</th><th>成交金额</th><th>保证金</th><th>费率</th><th><input id="trade_detail_startDate" type="text" readonly="" class="trade_detail_startDate" :value="tradeStartDate" @click="showTradeStartDateDialog"><div class="time-split">&nbsp;至&nbsp;</div><input id="trade_detail_endDate" type="text" readonly="" class="trade_detail_endDate" :value="tradeEndDate" @click="showTradeEndDateDialog"></th></tr></thead></table></div><div id="zUIpanel" class="table-container zUIpanel"><table class="backreport-table" cellpadding="0" cellspacing="0"><colgroup>\x3c!-- <col width="6%"></col> --\x3e<col width="8%"><col width="8%"><col width="12%"><col width="8%"><col width="8%"><col width="8%"><col width="10%"><col width="8%"><col width="8%"><col width="22%"></colgroup><tbody id="backreport_transaction_detail_tbody" v-if="showIndex === 1"><template>\x3c!-- <tr v-if="tradeinfo.logs.length === 0" class="tr-parent tr-onlyone" v-bind:class="{ trclose : tradeinfo.isClose, tropen : !tradeinfo.isClose}"><td><p><span v-bind:class="{\'icon-symbol-none\': tradeinfo.logs.length < 1}"></span></p></td><td class="td-blue"><span>{{tradeinfo.date}}&nbsp;&nbsp;无交易数据</span></td><td><span></span></td><td><span><p></p><p></p></span></td><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td><td><span></span></td></tr> --\x3e\x3c!-- <tr v-if="tradeinfo.logs.length === 1" class="tr-parent tr-onlyone" v-bind:class="{ trclose : tradeinfo.isClose, tropen : !tradeinfo.isClose}"><td><p><span v-bind:class="{\'icon-symbol-none\': tradeinfo.logs.length <= 1}"></span></p></td><td class="td-blue"><span :title="tradeinfo.date + \' 发生\' + tradeinfo.logs.length + \'笔交易\'">{{tradeinfo.date}} 发生{{tradeinfo.logs.length}}笔交易</span></td><td><span>{{tradeinfo.logs[0].time}}</span></td><td><span :title="tradeinfo.logs[0].code + \' \' + tradeinfo.logs[0].name"><p>{{tradeinfo.logs[0].code}}</p><p>{{tradeinfo.logs[0].name}}</p></span></td><td><span :class="tradeinfo.logs[0].opera | setOperaClass">{{tradeinfo.logs[0].opera}}</span></td><td><span>{{tradeinfo.logs[0].price | toFixedFloat}}</span></td><td><span>{{tradeinfo.logs[0].count}}</span></td><td><span :title="tradeinfo.logs[0].sum | toFixedFloat">{{tradeinfo.logs[0].sum | toFixedFloat}}</span></td><td><span>{{tradeinfo.logs[0].margin | toFixedFloat}}</span></td><td><span>{{tradeinfo.logs[0].rate | toFixedFloat}}</span></td></tr> --\x3e\x3c!-- <tr class="tr-parent"><td><p><span class="icon icon-symbol"></span></p></td><td class="td-blue"><span :title="tradeinfo.date + \' 发生\' + tradeinfo.logs.length + \'笔交易\'">{{tradeinfo.date}} 发生{{tradeinfo.logs.length}}笔交易</span></td><td colspan="8"><span></span></td></tr> --\x3e<tr class="tr-son" v-for="(item, indexKey) in tradeinfoList" v-if="(indexKey + 1) !== tradeinfoList.length" :key="indexKey" :class="tradeinfoList[indexKey].date.toString() === tradeinfoList[indexKey + 1].date.toString() ? \'\' : \'blank\'"><td><span>{{item.date}}</span></td><td><span>{{item.time}}</span></td><td><span :title="item.code + \' \' + item.name"><p>{{item.code}}</p><p>{{item.name}}</p></span></td><td><span :class="item.opera | setOperaClass">{{item.opera}}</span></td><td><span>{{item.price | toFixedFloat}}</span></td><td><span>{{item.count}}</span></td><td><span :title="item.sum | toFixedFloat">{{item.sum | toFixedFloat}}</span></td><td><span>{{item.margin | toFixedFloat}}</span></td><td><span>{{item.rate | toFixedFloat}}</span></td><td width="22%"></td></tr><tr class="tr-son" v-for="(item, indexKey) in tradeinfoList" v-if="(indexKey + 1) === tradeinfoList.length" :key="indexKey"><td><span>{{item.date}}</span></td><td><span>{{item.time}}</span></td><td><span :title="item.code + \' \' + item.name"><p>{{item.code}}</p><p>{{item.name}}</p></span></td><td><span :class="item.opera | setOperaClass">{{item.opera}}</span></td><td><span>{{item.price | toFixedFloat}}</span></td><td><span>{{item.count}}</span></td><td><span :title="item.sum | toFixedFloat">{{item.sum | toFixedFloat}}</span></td><td><span>{{item.margin | toFixedFloat}}</span></td><td><span>{{item.rate | toFixedFloat}}</span></td><td width="22%"></td></tr><div class="clear-margin"></div></template></tbody><tbody v-else-if="showIndex === 0"><tr style="border:0;"><td colspan="10" style="background: #F0F2F5;"><div class="loading-data">数据正在加载中...</div></td></tr></tbody><tbody v-else-if="showIndex === 2"><tr style="border:0;"><td colspan="10" style="background: #F0F2F5;"><div class="error-data">暂无数据.</div></td></tr></tbody></table></div><div class="pagination-container" v-show="showIndex===1"><pagination :total="pageCount" v-on:listentopagination="showMsgFromPagination"></pagination></div></div>',
        components: { pagination: r },
        data: function () {
          return {
            backTestId: this.$store.state.backTestId,
            params: null,
            pageCount: null,
            tradeinfoList: [],
            currentPage: null,
            isfolded: !0,
            height: '32px',
            showIndex: 0,
            tradeRefresh: !1,
            minStartDate: this.$store.getters.beginDate,
            tradeStartDate: this.$store.getters.beginDate,
            tradeEndDate: this.$store.getters.endDate,
          };
        },
        filters: {
          setOperaClass: function (t) {
            switch (t) {
              case '开空':
              case '平多':
              case '卖出':
              case '平仓卖出':
              case '开仓卖出':
                return 'green';
              case '开多':
              case '平空':
              case '买入':
              case '平仓买入':
              case '开仓买入':
                return 'red';
              default:
                return '';
            }
          },
          toFixedFloat: function (t) {
            if (null !== t) {
              var e = '',
                n = void 0,
                i = 0;
              if (((n = t < 0 ? Number(Math.abs(t)).toFixed(2).toString() : Number(t).toFixed(2).toString()), -1 === n.indexOf('.'))) {
                for (var a = n.length - 1; a >= 0; a--) (e = i % 3 == 0 && 0 !== i ? n.charAt(a) + ',' + e : n.charAt(a) + e), i++;
                return (t = t < 0 ? '-' + e + '.00' : e + '.00');
              }
              for (var r = n.indexOf('.') - 1; r >= 0; r--) (e = i % 3 == 0 && 0 !== i ? n.charAt(r) + ',' + e : n.charAt(r) + e), i++;
              return (t =
                t < 0 ? '-' + e + (n + '00').substr((n + '00').indexOf('.'), 3) : e + (n + '00').substr((n + '00').indexOf('.'), 3));
            }
            return '--';
          },
        },
        watch: {
          tradeRefresh: function () {
            (this.tradeinfoList = []),
              (this.params = { backTestId: this.backTestId, page: 1, num: 30, begin: this.tradeStartDate, end: this.tradeEndDate }),
              this.getData(this.params);
          },
          currentPage: function (t, e) {
            (this.params = { backTestId: this.backTestId, page: t, num: 30, begin: this.tradeStartDate, end: this.tradeEndDate }),
              this.getData(this.params);
          },
        },
        mounted: function () {
          this.currentPage = 1;
        },
        methods: {
          showTradeStartDateDialog: function () {
            var t = this;
            new WdatePicker({
              maxDate: "#F{$dp.$D('trade_detail_endDate')}",
              minDate: t.minStartDate,
              startDate: '%y-$M-%d',
              onpicked: function (e) {
                (t.tradeStartDate = e.el.value), (t.tradeRefresh = !t.tradeRefresh);
              },
            });
          },
          showTradeEndDateDialog: function () {
            var t = this;
            new WdatePicker({
              minDate: "#F{$dp.$D('trade_detail_startDate')}",
              maxDate: '%y-$M-%d',
              startDate: '%y-$M-%d',
              position: { left: -30 },
              onpicked: function (e) {
                (t.tradeEndDate = e.el.value), (t.tradeRefresh = !t.tradeRefresh);
              },
            });
          },
          getData: function (t) {
            var e = this,
              n = {
                OPEN_SHORT: '开空',
                OPEN_LONG: '开多',
                CLOSE_SHORT: '平空',
                CLOSE_LONG: '平多',
                BUY: '买入',
                SALE: '卖出',
                CLOSE_BUY: '平仓买入',
                CLOSE_SALE: '平仓卖出',
                OPEN_BUY: '开仓买入',
              };
            i.jsonp({
              url: a.ajax['backtest-result'].getTradeLog,
              data: t,
              success: function (i) {
                if (!i.total) return (e.showIndex = 2), !1;
                1 === t.page && (e.pageCount = Math.ceil(i.total / t.num)),
                  (e.tradeinfoList = []),
                  $.each(i.data, function (t, i) {
                    var a = new RegExp('([0-9-]+) ([0-9:]+)'),
                      r = i.trade_date.match(a),
                      s = r[1],
                      o = r[2],
                      l = i.operation_type,
                      c = isNaN(i.commissions) ? 0 : i.commissions,
                      d = isNaN(i.cost) ? 0 : i.cost;
                    e.tradeinfoList.push({
                      date: s,
                      time: o,
                      code: i.asset_code,
                      name: i.stock_name,
                      opera: n[l] ? n[l] : '开仓卖出',
                      price: Number(i.trade_price).toFixed(2),
                      count: i.trade_amount,
                      sum: Number(i.trade_value).toFixed(2),
                      margin: i.hasOwnProperty('margin') ? i.margin : null,
                      rate: Number(c) + Number(d),
                    });
                  }),
                  (e.showIndex = 1),
                  $('#zUIpanel').panel(),
                  (e.height = Math.floor($('#zUIpanel').height() / 12 - 3) + 'px');
              },
              resulterror: function (t) {
                e.showIndex = 2;
              },
            });
          },
          showMsgFromPagination: function (t) {
            var e = this;
            (e.currentPage = t), (e.params.page = t);
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/daily-position/daily-position',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', '../pagination/pagination'],
    function (t, e, n) {
      $(window).resize(function () {
        var t = Math.floor($('#zUIpanel').height() / 13) - 3;
        $('#backreport_daily_position').find('tr.trclose td').css('height', t);
      });
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('../pagination/pagination');
      n.exports = Vue.extend({
        template:
          '<div id="backreport_daily_position" class="backreport-result-container backreport-transaction"><div class="backreport-table-thead-fixed"><table width="100%" cellpadding="0" cellspacing="0"><colgroup><col width="7%"><col width="8%"><col width="12%"><col width="5%"><col width="5%"><col width="12%"><col width="7%"><col width="7%"><col width="12%"><col width="12%"><col width="12%"><col width="1%"></colgroup><thead><tr><th class="wholeFold" @click="showOrHideWholePannel">展开/收起</th><th>日期(时间)</th><th>代码/名称</th><th>类型</th><th>方向</th><th>收盘价/结算价</th><th>数量</th><th>保证金</th><th><span>市值</span></th><th><span>开仓均价</span></th><th><span>累计盈亏</span></th><th></th></tr></thead></table></div><div id="zUIpanel" class="table-container zUIpanel"><table class="backreport-table" cellpadding="0" cellspacing="0"><colgroup><col width="7%"><col width="8%"><col width="12%"><col width="5%"><col width="5%"><col width="12%"><col width="7%"><col width="7%"><col width="12%"><col width="12%"><col width="12%"><col width="1%"></colgroup><tbody id="backreport_daily_position_tbody" v-if="showIndex === 1"><template v-for="(dailyinfo, index) in dailyinfoList"><tr class="tr-parent" v-bind:class="{ trclose : dailyinfo.isClose, tropen : !dailyinfo.isClose, \'tr-onlyone\': dailyinfo.position.length === 0}" @click="showOrHide(dailyinfo.len, index)"><td><p>\x3c!-- <span v-bind:class="{icon: dailyinfo.len > 0}" class="icon-symbol"></> --\x3e<span v-bind:class="{icon: dailyinfo.len > 0, \'icon-symbol\':  dailyinfo.position.length > 0, \'icon-symbol-none\': dailyinfo.position.length === 0}"></span></p></td><td class="td-blue"><span>{{dailyinfo.date}}</span></td><td v-if="dailyinfo.len > 0"><span :title="\'持有\' + dailyinfo.len + \'只证券\'">持有{{dailyinfo.len}}只证券</span></td><td v-else=""><span>无交易数据</span></td><td colspan="5"><span></span></td><td class="td-blue span-right"><span :title="\'总资产:\' + dailyinfo.asset">总资产: {{dailyinfo.asset}}</span></td><td class="td-blue span-right"><span :title="\'现金:\' + dailyinfo.cash">现金: {{dailyinfo.cash}}</span></td><td class="td-blue span-right" v-bind:class="{ red: dailyinfo.totalProfitAndLoss >= 0, green : dailyinfo.totalProfitAndLoss < 0 }"><span :title="\'累计盈亏:\' + dailyinfo.totalProfitAndLoss">累计盈亏: {{dailyinfo.totalProfitAndLoss}}</span></td><td><span></span></td></tr><tr class="tr-son" v-for="(item, indexKey) in dailyinfo.position" v-bind:class="{ trdetail : dailyinfo.isClose, \'trsonlast\': indexKey === (dailyinfo.position.length - 1)}"><td><span></span></td><td><span>{{dailyinfo.time}}</span></td><td><span :title="item.code + \' \' + item.name"><p>{{item.code}}</p><p>{{item.name}}</p></span></td><td><span :title="item[\'posType\'] | setPosType">{{item[\'posType\'] | setPosType}}</span></td><td :class="item.posDirection | setPosDirectionClass"><span>{{item.posDirection | setPosDirection}}</span></td><td><span>{{item.closePrice | toFixedFloat}}</span></td><td><span>{{item.amount}}</span></td><td><span>{{item.margin | toFixedFloat}}</span></td><td class="span-right"><span :title="item.sum | toFixedFloat">{{item.sum | toFixedFloat}}</span></td><td class="span-right"><span :title="item.avgPrice | toFixedFloat">{{item.avgPrice | toFixedFloat}}</span></td><td v-bind:class="{ red: item.floating > 0, green : item.floating < 0 }" class="span-right"><span :title="item.floating | toFixedFloat">{{item.floating | toFixedFloat}}</span></td><td><span></span></td></tr><div class="clear-margin"></div></template></tbody><tbody v-else-if="showIndex === 0"><tr style="border:0;"><td colspan="11" style="background: #F0F2F5;"><div class="loading-data">数据正在加载中...</div></td></tr></tbody><tbody v-else-if="showIndex === 2"><tr style="border:0;"><td colspan="11" style="background: #F0F2F5;"><div class="error-data">暂无数据.</div></td></tr></tbody></table></div><div class="pagination-container" v-show="showIndex===1"><pagination :total="pageCount" v-on:listentopagination="showMsgFromPagination"></pagination></div></div>',
        components: { pagination: r },
        data: function () {
          return {
            backTestId: this.$store.state.backTestId,
            params: null,
            pageCount: null,
            dailyinfoList: [],
            currentPage: null,
            isfolded: !0,
            height: '32px',
            showIndex: 0,
          };
        },
        filters: {
          setPosType: function (t) {
            switch (t) {
              case 'METAL':
                return 'T+D';
              case 'STOCK':
                return '股票';
              case 'A':
                return '股票（旧）';
              case 'US':
                return '美股';
              case 'FOREX':
                return '外汇';
              case 'STKFUS':
                return '股票期货';
              case 'TICK':
                return '股票T+0';
              case 'FUTURES':
              case 'FUTURE':
                return '期货';
              default:
                return '--';
            }
          },
          setPosDirection: function (t) {
            switch (t) {
              case 'LONG':
                return '多';
              case 'SHORT':
                return '空';
              default:
                return '--';
            }
          },
          setPosDirectionClass: function (t) {
            switch (t) {
              case 'LONG':
                return 'red';
              case 'SHORT':
                return 'green';
              default:
                return '';
            }
          },
          toFixedFloat: function (t) {
            if (null !== t) {
              var e = '',
                n = void 0,
                i = 0;
              if (((n = t < 0 ? Number(Math.abs(t)).toFixed(2).toString() : Number(t).toFixed(2).toString()), -1 === n.indexOf('.'))) {
                for (var a = n.length - 1; a >= 0; a--) (e = i % 3 == 0 && 0 !== i ? n.charAt(a) + ',' + e : n.charAt(a) + e), i++;
                return (t = t < 0 ? '-' + e + '.00' : e + '.00');
              }
              for (var r = n.indexOf('.') - 1; r >= 0; r--) (e = i % 3 == 0 && 0 !== i ? n.charAt(r) + ',' + e : n.charAt(r) + e), i++;
              return (t =
                t < 0 ? '-' + e + (n + '00').substr((n + '00').indexOf('.'), 3) : e + (n + '00').substr((n + '00').indexOf('.'), 3));
            }
            return '--';
          },
        },
        watch: {
          currentPage: function (t, e) {
            (this.params = { backTestId: this.backTestId, page: t, num: 13 }), this.getData(this.params);
          },
        },
        mounted: function () {
          this.currentPage = 1;
        },
        methods: {
          getData: function (t) {
            var e = this;
            i.jsonp({
              url: a.ajax['backtest-result'].getDailyPositionGains,
              data: t,
              success: function (n) {
                if (!n.total) return (e.showIndex = 2), !1;
                1 === t.page && (e.pageCount = Math.ceil(n.total / t.num)),
                  (e.dailyinfoList = []),
                  $.each(n.data, function (t, n) {
                    var i = new RegExp('([0-9-]+)T([0-9:]+)'),
                      a = n.position_date.match(i),
                      r = n.position_date.slice(11, 19),
                      s = [],
                      o = 0;
                    $.each(n.daily_position, function (t, e) {
                      s.push({
                        avgPrice: e.avg_price,
                        posType: e.pos_type,
                        posDirection: e.pos_direction,
                        margin: e.margin,
                        code: e.asset_code,
                        name: e.stock_name,
                        closePrice: e.close_price,
                        amount: e.pos_amount,
                        sum: e.pos_value.toFixed(2),
                        floating: e.profit_and_loss.toFixed(2),
                      }),
                        (o = t + 1);
                    }),
                      e.dailyinfoList.push({
                        date: a[1],
                        time: r,
                        asset: n.total_asset_value.toFixed(2),
                        cash: n.ending_cash.toFixed(2),
                        totalProfitAndLoss: n.profit_and_loss.toFixed(2),
                        len: o,
                        position: s,
                        isClose: !0,
                      });
                  }),
                  (e.showIndex = 1),
                  $('#zUIpanel').panel(),
                  (e.height = Math.floor($('#zUIpanel').height() / 12 - 3) + 'px');
              },
              resulterror: function (t) {
                e.showIndex = 2;
              },
            });
          },
          showOrHide: function (t, e) {
            var n = this;
            if (t <= 0) return !1;
            n.dailyinfoList[e].isClose = !n.dailyinfoList[e].isClose;
          },
          showOrHideWholePannel: function () {
            var t = this;
            (t.isfolded = !t.isfolded),
              $.each(t.dailyinfoList, function (e, n) {
                n.isClose = t.isfolded;
              });
          },
          showMsgFromPagination: function (t) {
            var e = this;
            (e.currentPage = t), (e.params.page = t);
          },
        },
      });
    }
  ),
  define('../components/backtest-result/out-logs/out-logs', ['require', 'exports', 'module', 'VueAjax', 'VueConfig'], function (t, e, n) {
    var i = t('VueAjax'),
      a = t('VueConfig');
    n.exports = Vue.extend({
      template:
        '<div class="backreport-result-container zUIpanel-outlogs" id="zUIpanel" :style="backgroundTheme"><div class="backrepottbox-content-items log-content"><div class="log-content-box" v-if="showIndex === 1"><div class="backrepottbox-content-item" v-for="log in logList"><p class="line1"><span class="date">{{log.time}}</span><span> - </span><span class="type type-info">{{log.type}}</span><span class="param"></span></p><pre class="line2 message">{{log.value}}</pre></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div></div></div>',
      components: {},
      data: function () {
        return {
          backTestId: this.$store.state.backTestId,
          page: 1,
          pageCount: null,
          pageSize: 100,
          logList: [],
          flag: !0,
          showIndex: 0,
          theme: '',
        };
      },
      computed: {
        backgroundTheme: function () {
          return { background: 'monokai' === this.theme ? '#272822' : '#fff' };
        },
      },
      beforeCreate: function () {},
      beforeMount: function () {},
      mounted: function () {
        this.requestLogData(),
          this.$nextTick(function () {
            this.onScroll();
          }),
          (this.theme = localStorage.getItem('theme'));
      },
      methods: {
        onScroll: function () {
          var t = this;
          $('#zUIpanel').scroll(function () {
            var e = $(this),
              n = e.height(),
              i = e.get(0).scrollHeight;
            n + e.scrollTop() + 50 >= i && t.flag && t.pageCount >= t.page && ((t.flag = !1), t.requestLogData());
          });
        },
        requestLogData: function () {
          var t = this,
            e = { backTestId: t.backTestId, page: t.page, num: t.pageSize, nocacheFlag: !0 };
          i.jsonp({
            url: a.ajax['backtest-result'].getLogsData,
            data: e,
            success: function (e) {
              1 !== t.page || e.total || (t.showIndex = 2);
              var n = e.total,
                i = e.list;
              i &&
                (1 === t.page && (t.pageCount = Math.ceil(n / t.pageSize)),
                (t.showIndex = 1),
                ++t.page,
                (t.flag = !0),
                $.each(i, function (e, n) {
                  t.logList.push({ time: n.time, type: n.type, value: n.value });
                }));
            },
            resulterror: function (e) {
              1 === t.page && (t.showIndex = 2);
            },
          });
        },
      },
      watch: {},
    });
  }),
  define('backtestHighChart', ['require', 'exports', 'module'], function (t, e, n) {
    var i = {
      options: function (t, e) {
        var n;
        return (
          (n = {
            chart: { renderTo: 'chartId', type: e.chartType, marginRight: 20 },
            title: { text: '' },
            legend: {
              enabled: e.legendIsShow,
              align: 'left',
              verticalAlign: 'top',
              itemStyle: { font: '14px "Microsoft yahei", sans-serif', color: '#333' },
              symbolHeight: 15,
              symbolWidth: 15,
              symbolRadius: 3,
            },
            tooltip: {
              show: e.tooltipisShow,
              shared: !0,
              valueDecimals: 2,
              followPointer: !0,
              formatter: function () {
                var t = this.points,
                  e = [];
                return (
                  $.each(t, function (t, n) {
                    if (!n) return !1;
                    e.push(
                      '<span style="color:#2F4554; line-height: 18px;">' +
                        n.series.name +
                        '：<span style="font-weight:700">' +
                        n.y +
                        '</span></span><br>'
                    );
                  }),
                  e.join('')
                );
              },
            },
            xAxis: {
              categories: e.xAxisCategories,
              lineWidth: e.xAxisLineWidth || 0,
              tickLength: 0,
              gridLineColor: '#E8E8E8',
              gridLineDashStyle: 'solid',
              gridLineWidth: 1,
            },
            yAxis: {
              labels: {
                align: 'right',
                formatter: function () {
                  return e.yAixsFormatter(this);
                },
              },
              title: { text: '' },
              min: e.yAxisMin,
              max: e.yAxisMax,
              minRange: 1,
              gridLineWidth: 0,
              height: '100%',
              plotLines: [{ color: '#E8E8E8', width: 1, value: 0, dashStyle: 'solid' }],
              opposite: !0,
            },
            credits: { enabled: !1 },
            exporting: { enabled: !1 },
            series: e.series,
          }),
          n
        );
      },
    };
    n.exports = i;
  }),
  define(
    '../components/backtest-result/profit/profit',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略收益</span><span style="width:50%" class="fr">基准收益</span></div></div><div style="width:22%" class="td"><div>3月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略收益</span><span style="width:50%" class="fr">基准收益</span></div></div><div style="width:22%" class="td"><div>6月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略收益</span><span style="width:50%" class="fr">基准收益</span></div></div><div style="width:22%" class="td"><div>12月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略收益</span><span style="width:50%" class="fr">基准收益</span></div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.aloProfitJan}}</td><td class="cb">{{item.benchProfitJan}}</td><td class="cy">{{item.aloProfitMar}}</td><td class="cb">{{item.benchProfitMar}}</td><td class="cy">{{item.aloProfitJune}}</td><td class="cb">{{item.benchProfitJune}}</td><td class="cy">{{item.aloProfitDecem}}</td><td class="cb">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'profit', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [],
                d = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.benchmark_yield, 2, !0, !1, !1),
                  i = r.digitsTranform(e.yield, 2, !0, !1, !1);
                (n = null === n ? null : Number(n)), (i = null === i ? null : Number(i)), c.push(n), d.push(i);
              });
              var u = c.concat(d),
                p = Math.min.apply(null, u),
                f = Math.max.apply(null, u);
              (f = Math.max.apply(null, [Math.ceil(Math.abs(p)), Math.ceil(Math.abs(f))])),
                (p = -1 * f),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].benchmark_yield, 2, !0, !0, !0),
                    aloProfitJan: r.digitsTranform(n[1].yield, 2, !0, !0, !0),
                    benchProfitMar: r.digitsTranform(n[3].benchmark_yield, 2, !0, !0, !0),
                    aloProfitMar: r.digitsTranform(n[3].yield, 2, !0, !0, !0),
                    benchProfitJune: r.digitsTranform(n[6].benchmark_yield, 2, !0, !0, !0),
                    aloProfitJune: r.digitsTranform(n[6].yield, 2, !0, !0, !0),
                    benchProfitDecem: r.digitsTranform(n[12].benchmark_yield, 2, !0, !0, !0),
                    aloProfitDecem: r.digitsTranform(n[12].yield, 2, !0, !0, !0),
                  });
                }),
                (o = {
                  legendIsShow: !0,
                  tooltipisShow: !1,
                  chartType: 'column',
                  xAxisCategories: l,
                  series: [
                    {
                      name: '策略收益',
                      color: '#FF9900',
                      data: d,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y ? this.y + '%' : null;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                    {
                      name: '基准收益',
                      color: '#326CAF',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y ? this.y + '%' : null;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: p,
                  yAxisMax: f,
                  yAixsFormatter: function (t) {
                    return t.value + '%';
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/alpha/alpha',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.aloProfitJan}}</td><td class="cy">{{item.aloProfitMar}}</td><td class="cy">{{item.aloProfitJune}}</td><td class="cy">{{item.aloProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'alpha', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.alpha, 2, !1, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    aloProfitJan: r.digitsTranform(n[1].alpha, 2, !1, !1, !0),
                    aloProfitMar: r.digitsTranform(n[3].alpha, 2, !1, !1, !0),
                    aloProfitJune: r.digitsTranform(n[6].alpha, 2, !1, !1, !0),
                    aloProfitDecem: r.digitsTranform(n[12].alpha, 2, !1, !1, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'column',
                  xAxisCategories: l,
                  series: [
                    {
                      name: 'Alpha',
                      color: '#FF9900',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: d,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value;
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/beta/beta',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cb">{{item.benchProfitJan}}</td><td class="cb">{{item.benchProfitMar}}</td><td class="cb">{{item.benchProfitJune}}</td><td class="cb">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'beta', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.beta, 2, !1, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].beta, 2, !1, !1, !0),
                    benchProfitMar: r.digitsTranform(n[3].beta, 2, !1, !1, !0),
                    benchProfitJune: r.digitsTranform(n[6].beta, 2, !1, !1, !0),
                    benchProfitDecem: r.digitsTranform(n[12].beta, 2, !1, !1, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'line',
                  xAxisCategories: l,
                  series: [
                    {
                      name: 'Beta',
                      color: '#326CAF',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: d,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value;
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/sharpe/sharpe',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.benchProfitJan}}</td><td class="cy">{{item.benchProfitMar}}</td><td class="cy">{{item.benchProfitJune}}</td><td class="cy">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'sharpe', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.sharpe_ratio, 2, !1, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].sharpe_ratio, 2, !1, !1, !0),
                    benchProfitMar: r.digitsTranform(n[3].sharpe_ratio, 2, !1, !1, !0),
                    benchProfitJune: r.digitsTranform(n[6].sharpe_ratio, 2, !1, !1, !0),
                    benchProfitDecem: r.digitsTranform(n[12].sharpe_ratio, 2, !1, !1, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'line',
                  xAxisCategories: l,
                  series: [
                    {
                      name: 'Sharpe',
                      color: '#FF9900',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: d,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value;
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/sortino/sortino',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.benchProfitJan}}</td><td class="cy">{{item.benchProfitMar}}</td><td class="cy">{{item.benchProfitJune}}</td><td class="cy">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'sortino', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.sortino, 2, !1, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].sortino, 2, !1, !1, !0),
                    benchProfitMar: r.digitsTranform(n[3].sortino, 2, !1, !1, !0),
                    benchProfitJune: r.digitsTranform(n[6].sortino, 2, !1, !1, !0),
                    benchProfitDecem: r.digitsTranform(n[12].sortino, 2, !1, !1, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'line',
                  xAxisCategories: l,
                  series: [
                    {
                      name: 'Sortino',
                      color: '#FF9900',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: d,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value;
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/information-ratio/information-ratio',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.benchProfitJan}}</td><td class="cy">{{item.benchProfitMar}}</td><td class="cy">{{item.benchProfitJune}}</td><td class="cy">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'informationRatio', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.information_ratio, 2, !1, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].information_ratio, 2, !1, !1, !0),
                    benchProfitMar: r.digitsTranform(n[3].information_ratio, 2, !1, !1, !0),
                    benchProfitJune: r.digitsTranform(n[6].information_ratio, 2, !1, !1, !0),
                    benchProfitDecem: r.digitsTranform(n[12].information_ratio, 2, !1, !1, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'line',
                  xAxisCategories: l,
                  series: [
                    {
                      name: '信息比率',
                      color: '#FF9900',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: d,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value;
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/volatility/volatility',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略波动率</span><span style="width:50%" class="fr">基准波动率</span></div></div><div style="width:22%" class="td"><div>3月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略波动率</span><span style="width:50%" class="fr">基准波动率</span></div></div><div style="width:22%" class="td"><div>6月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略波动率</span><span style="width:50%" class="fr">基准波动率</span></div></div><div style="width:22%" class="td"><div>12月</div><div class="td-divider"></div><div class="clearfix"><span style="width:50%" class="fl">策略波动率</span><span style="width:50%" class="fr">基准波动率</span></div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"><col width="11%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cy">{{item.aloProfitJan}}</td><td class="cb">{{item.benchProfitJan}}</td><td class="cy">{{item.aloProfitMar}}</td><td class="cb">{{item.benchProfitMar}}</td><td class="cy">{{item.aloProfitJune}}</td><td class="cb">{{item.benchProfitJune}}</td><td class="cy">{{item.aloProfitDecem}}</td><td class="cb">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'volatility', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [],
                d = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.benchmark_volatility, 2, !0, !1, !1),
                  i = r.digitsTranform(e.volatility, 2, !0, !1, !1);
                (n = null === n ? null : Number(n)), (i = null === i ? null : Number(i)), c.push(n), d.push(i);
              });
              var u = c.concat(d),
                p = Math.min.apply(null, u),
                f = Math.max.apply(null, u);
              (f = Math.max.apply(null, [Math.ceil(Math.abs(p)), Math.ceil(Math.abs(f))])),
                (p = -1 * f),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].benchmark_volatility, 2, !0, !0, !0),
                    aloProfitJan: r.digitsTranform(n[1].volatility, 2, !0, !0, !0),
                    benchProfitMar: r.digitsTranform(n[3].benchmark_volatility, 2, !0, !0, !0),
                    aloProfitMar: r.digitsTranform(n[3].volatility, 2, !0, !0, !0),
                    benchProfitJune: r.digitsTranform(n[6].benchmark_volatility, 2, !0, !0, !0),
                    aloProfitJune: r.digitsTranform(n[6].volatility, 2, !0, !0, !0),
                    benchProfitDecem: r.digitsTranform(n[12].benchmark_volatility, 2, !0, !0, !0),
                    aloProfitDecem: r.digitsTranform(n[12].volatility, 2, !0, !0, !0),
                  });
                }),
                (o = {
                  legendIsShow: !0,
                  tooltipisShow: !1,
                  chartType: 'line',
                  xAxisCategories: l,
                  series: [
                    {
                      name: '策略波动率',
                      color: '#FF9900',
                      data: d,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y ? this.y + '%' : null;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                    {
                      name: '基准波动率',
                      color: '#326CAF',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y ? this.y + '%' : null;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: p,
                  yAxisMax: f,
                  yAixsFormatter: function (t) {
                    return t.value + '%';
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/maximum-withdrawal/maximum-withdrawal',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'backtestHighChart'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('backtestHighChart');
      n.exports = Vue.extend({
        template:
          '<div class="backreport-result-container backreport-profit" v-if="showIndex === 1"><div class="chart-box" id="highChartBox"></div><div class="profit-tablebox"><div class="backreport-table-thead-fixed2"><div style="width:12%;line-height:3" class="td">日期</div><div style="width:22%" class="td"><div>1月</div></div><div style="width:22%" class="td"><div>3月</div></div><div style="width:22%" class="td"><div>6月</div></div><div style="width:22%" class="td"><div>12月</div></div></div><div class="backreport-table-container zUIpanel"><table class="backreport-table"><colgroup><col width="12%"><col width="22%"><col width="22%"><col width="22%"><col width="22%"></colgroup><tbody id="zUIpanel_profit_tbody"><tr v-for="item in tableDataList"><td>{{item.date}}</td><td class="cb">{{item.benchProfitJan}}</td><td class="cb">{{item.benchProfitMar}}</td><td class="cb">{{item.benchProfitJune}}</td><td class="cb">{{item.benchProfitDecem}}</td></tr></tbody></table></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div>',
        components: {},
        data: function () {
          return { backTestId: this.$store.state.backTestId, tableDataList: [], showIndex: 0 };
        },
        beforeCreate: function () {},
        beforeMount: function () {},
        watch: {},
        mounted: function () {
          var t = this;
          i.jsonp({
            url: a.ajax['backtest-result'].getProfitData,
            data: { type: 'maxBackTest', backTestId: t.backTestId },
            success: function (e) {
              var n,
                i,
                a,
                o,
                l = [],
                c = [];
              if (((n = e.table), (i = e.chart), !(n && _.keys(n).length && i && _.keys(i).length))) return void (t.showIndex = 2);
              $.each(i, function (t, e) {
                l.push(t);
                var n = r.digitsTranform(e.max_drawdown, 2, !0, !1, !1);
                (n = null === n ? null : Number(n)), c.push(n);
              });
              var d = Math.min.apply(null, c),
                u = Math.max.apply(null, c);
              (u = Math.max.apply(null, [Math.ceil(Math.abs(d)), Math.ceil(Math.abs(u))])),
                (d = -1 * u),
                $.each(n, function (e, n) {
                  t.tableDataList.push({
                    date: e,
                    benchProfitJan: r.digitsTranform(n[1].max_drawdown, 2, !0, !0, !0),
                    benchProfitMar: r.digitsTranform(n[3].max_drawdown, 2, !0, !0, !0),
                    benchProfitJune: r.digitsTranform(n[6].max_drawdown, 2, !0, !0, !0),
                    benchProfitDecem: r.digitsTranform(n[12].max_drawdown, 2, !0, !0, !0),
                  });
                }),
                (o = {
                  legendIsShow: !1,
                  tooltipisShow: !1,
                  chartType: 'area',
                  xAxisCategories: l,
                  series: [
                    {
                      name: '最大回撤',
                      color: '#326CAF',
                      data: c,
                      dataLabels: {
                        enabled: !0,
                        overflow: 'justify',
                        formatter: function () {
                          return this.y ? this.y + '%' : null;
                        },
                        style: { color: '#676A74', fontWeight: 'normal' },
                      },
                    },
                  ],
                  yAxisMin: 0,
                  yAxisMax: u,
                  yAixsFormatter: function (t) {
                    return t.value + '%';
                  },
                }),
                (a = s.options('highChartBox', o)),
                (t.showIndex = 1),
                setTimeout(function () {
                  new Highcharts.Chart('highChartBox', a);
                }, 0);
            },
            resulterror: function (e) {
              t.showIndex = 2;
            },
          });
        },
        methods: {},
      });
    }
  ),
  define(
    '../components/backtest-result/attribution-analysis/asset-allocation',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig');
      n.exports = Vue.extend({
        template:
          '<div class="attributionAnal-container attributionAnal-asset-container"><div class="attributeAnal-asset-time"><span>截止日期</span><input type="text" readonly="" id="assetAllocation" class="assetAllocation Wdate" v-model="selectDate" @click="changeTime"></div><div class="asset-content-container" v-if="showIndex === 1"><div class="table-container"><table class="backreport-table data-update-container"><thead><tr><td>序号</td><td>种类</td><td>证券代码</td><td>证券名称</td><td>买入均价(元)</td><td>最新价(元)</td><td>涨跌</td><td>涨跌幅(%)</td><td>持有数量(股)</td><td>持仓市值(元)</td><td>资产占比(%)</td><td>持仓收益(元)</td><td>持仓收益率(%)</td><td>实际收益(元)</td><td>实际收益率(%)</td><td>综合收益(元)</td><td>综合收益率(%)</td></tr></thead><tbody id="assetAnalysisiTBody"><tr v-for="item in tableList" v-bind:class="{high: item.profitAndLoss > 0, low: item.profitAndLoss < 0}"><td>{{item.index}}</td><td>{{item.type}}</td><td>{{item.code}}</td><td>{{item.name}}</td><td>{{item.buyAva}}</td><td class="lowOrHigh">{{item.nowPrice}}</td><td class="lowOrHigh">{{item.profitAndLoss}}</td><td class="lowOrHigh">{{item.profitAndLossPercent}}</td><td>{{item.holding}}</td><td>{{item.position}}</td><td>{{item.assetPercent}}</td><td>{{item.holdingProfit}}</td><td>{{item.holdingProfitPercent}}</td><td>{{item.actualProfit}}</td><td>{{item.actualProfitPercent}}</td><td>{{item.wholeProfit}}</td><td>{{item.wholeProfitPercent}}</td></tr></tbody></table></div><div class="bottom-content-container"><div class="attributionAnal_box coupon_analysis-container"><div id="couponPieId" class="data-update-container coupon_analysis"></div></div><div class="attributionAnal_box industry_analysisi-container"><div id="industryPieId" class="data-update-container industry_analysis"></div></div><div class="attributionAnal_box stockstyle_analysis-container"><div id="stockstyleTable" class="data-update-container stockstyle_analysis"><table><thead><tr><th></th><th align="center" colspan="3">持股风格</th></tr></thead><tbody><tr><td align="right" class="right">大盘</td><td align="center" class="border-left-top stockStyleChangeTd">{{holdingDataList.td1}}</td><td align="center" class="border-left-top stockStyleChangeTd">{{holdingDataList.td2}}</td><td align="center" class="border-left-top-right stockStyleChangeTd">{{holdingDataList.td3}}</td></tr><tr><td align="right" class="right">中盘</td><td align="center" class="border-left-top stockStyleChangeTd">{{holdingDataList.td4}}</td><td align="center" class="border-left-top stockStyleChangeTd">{{holdingDataList.td5}}</td><td align="center" class="border-left-top-right stockStyleChangeTd">{{holdingDataList.td6}}</td></tr><tr><td align="right" class="right">小盘</td><td align="center" class="border-left-top-bottom stockStyleChangeTd">{{holdingDataList.td7}}</td><td align="center" class="border-left-top-bottom stockStyleChangeTd">{{holdingDataList.td8}}</td><td align="center" class="border-left-top-right-bottom stockStyleChangeTd">{{holdingDataList.td9}}</td></tr><tr><td class="right top"> </td><td align="center">价值</td><td align="center">混合</td><td align="center">成长</td></tr></tbody></table></div></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div></div>',
        components: {},
        data: function () {
          return {
            backTestId: null,
            tableList: [
              {
                index: '--',
                type: '--',
                code: '--',
                name: '--',
                buyAva: '--',
                nowPrice: '--',
                profitAndLoss: '--',
                profitAndLossPercent: '--',
                holding: '--',
                position: '--',
                assetPercent: '--',
                holdingProfit: '--',
                holdingProfitPercent: '--',
                actualProfit: '--',
                actualProfitPercent: '--',
                wholeProfit: '--',
                wholeProfitPercent: '--',
              },
            ],
            holdingDataList: { td1: '--', td2: '--', td3: '--', td4: '--', td5: '--', td6: '--', td7: '--', td8: '--', td9: '--' },
            chart1: null,
            chart2: null,
            beginDate: null,
            endDate: null,
            selectDate: null,
            showIndex: 0,
          };
        },
        watch: {
          backTestId: function () {
            this.initTab();
          },
          selectDate: function () {
            this.render();
          },
        },
        mounted: function () {
          var t = this;
          setTimeout(function () {
            t.backTestId = t.$store.state.backTestId;
          }, 300);
        },
        methods: {
          initTab: function () {
            var t = this;
            (t.beginDate = t.$store.state.beginDate), (t.endDate = t.$store.state.endDate), (t.selectDate = t.endDate);
          },
          render: function () {
            var t = this;
            i.jsonp({
              url: a.ajax['backtest-result'].getAssetAnalysis,
              data: { backtestid: t.backTestId, beginDate: t.beginDate, endDate: t.selectDate, symbol: '' },
              success: function (e) {
                if (null === e) return (t.showIndex = 2), !1;
                t.tableList = [];
                var n = e.merge_list,
                  i = e.group_style_list,
                  a = e.industry_total_list,
                  r = [],
                  s = [],
                  o = {},
                  l = {};
                n.forEach(function (e, n) {
                  t.tableList.push({
                    index: ++n,
                    type: e.stock_title ? e.stock_title : '--',
                    code: e.stock_code ? e.stock_code : '--',
                    name: e.stock_name ? e.stock_name : '--',
                    buyAva: e.average_buy_price ? e.average_buy_price : '--',
                    nowPrice: e.close_price ? e.close_price : '--',
                    profitAndLoss: e.profit_or_loss ? e.profit_or_loss : '--',
                    profitAndLossPercent: e.profit_or_loss_rate ? e.profit_or_loss_rate : '--',
                    holding: e.pos_amount ? e.pos_amount : '--',
                    position: e.pos_value ? e.pos_value : '--',
                    assetPercent: e.proportion_asset_rate ? e.proportion_asset_rate : '--',
                    holdingProfit: e.hold_profit ? e.hold_profit : '--',
                    holdingProfitPercent: e.hold_profit_rate ? e.hold_profit_rate : '--',
                    actualProfit: e.real_profit ? e.real_profit : '--',
                    actualProfitPercent: e.real_profit_rate ? e.real_profit_rate : '--',
                    wholeProfit: e.total_profit ? e.total_profit : '--',
                    wholeProfitPercent: e.total_profit_rate ? e.total_profit_rate : '--',
                  }),
                    r.push({ name: e.stock_name, y: e.proportion_asset_rate });
                }),
                  a.forEach(function (t, e) {
                    s.push({ name: t.industry_name, y: t.industry_pos_value_rate });
                  }),
                  (t.holdingDataList = {
                    td1: i.high_and_value,
                    td2: i.high_and_mixture,
                    td3: i.high_and_increase,
                    td4: i.middle_and_value,
                    td5: i.middle_and_mixture,
                    td6: i.middle_and_increase,
                    td7: i.low_and_value,
                    td8: i.low_and_mixture,
                    td9: i.low_and_increase,
                  }),
                  (o = { title: '个券分析', seriesName: '个券分析', seriesData: r }),
                  (l = { title: '行业分析', seriesName: '行业分析', seriesData: s }),
                  (t.showIndex = 1),
                  setTimeout(function () {
                    (t.chart1 = new Highcharts.Chart('couponPieId', t.pieChartOptions(o))),
                      (t.chart2 = new Highcharts.Chart('industryPieId', t.pieChartOptions(l)));
                  }, 0);
              },
              resulterror: function (e) {
                t.showIndex = 2;
              },
            });
          },
          changeTime: function () {
            var t = this;
            new WdatePicker({
              position: { left: -60 },
              maxDate: t.endDate,
              minDate: t.beginDate,
              onpicked: function () {
                t.selectDate = this.value;
              },
            });
          },
          pieChartOptions: function (t) {
            return {
              chart: {},
              title: { text: t.title, style: { color: '#000', fontWeight: 'bold' } },
              tooltip: { headerFormat: '{series.name} <br>', pointFormat: '{point.name}： <b>{point.percentage} %</b>' },
              credits: { enabled: !1 },
              exporting: { enabled: !1 },
              legend: {
                align: 'right',
                verticalAlign: 'middle',
                margin: 20,
                itemDistance: 10,
                symbolHeight: 15,
                symbolWidth: 20,
                symbolRadius: 5,
                layout: 'vertical',
              },
              plotOptions: { pie: { allowPointeSelect: !0, cursor: 'pointer', dataLabels: { enabled: !1 }, showInLegend: !0 } },
              series: [{ type: 'pie', name: t.seriesName, data: t.seriesData }],
            };
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/attribution-analysis/brinson',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig');
      n.exports = Vue.extend({
        template:
          '<div class="attributionAnal-container"><div class="attributionAnal-container_box attributionAnal-container_box_Brinson" v-if="showIndex === 1"><div class="attributionAnal_box"><div id="weightChartId" class="data-update-container attributionAnal_weight"></div></div><div class="attributionAnal_box"><div id="allAnalysisChartId" class="data-update-container attributionAnal_allAnalysis"></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div></div>',
        components: {},
        data: function () {
          return { backTestId: null, chart1: null, chart2: null, beginDate: null, endDate: null, showIndex: 0 };
        },
        watch: {
          backTestId: function () {
            this.render();
          },
        },
        mounted: function () {
          var t = this;
          setTimeout(function () {
            t.backTestId = t.$store.state.backTestId;
          }, 300);
        },
        methods: {
          render: function () {
            var t = this,
              e = [],
              n = [],
              r = [],
              s = [],
              o = [],
              l = [];
            (t.beginDate = t.$store.state.beginDate),
              (t.endDate = t.$store.state.endDate),
              i.jsonp({
                url: a.ajax['backtest-result'].getBrinsonAnalysis,
                data: { backtestid: t.backTestId, beginDate: t.beginDate, endDate: t.endDate, symbol: '' },
                success: function (i) {
                  if (!i.length) return (t.showIndex = 2), !1;
                  $.each(i, function (t, i) {
                    e.push(i.industry_name),
                      n.push(i.weight_diversity),
                      r.push(i.configure_effect),
                      s.push(i.choice_effect),
                      o.push(i.interactive_effect),
                      l.push(i.comprehensive_effect);
                  });
                  var a = { title: '权重差', xAxisCategories: e, seriesData: [{ name: '权重差', data: n, color: '#b6a2df' }] },
                    c = {
                      title: '归因分析',
                      xAxisCategories: e,
                      seriesData: [
                        { name: '配置效应', data: r, color: '#ffb880' },
                        { name: '选择效应', data: s, color: '#59b1f0' },
                        { name: '交互效应', data: o, color: '#d97a80' },
                        { name: '综合效应', data: l, color: '#b6a2df' },
                      ],
                    };
                  (t.showIndex = 1),
                    setTimeout(function () {
                      (t.chart1 = new Highcharts.Chart('weightChartId', t.chartOptions(a))),
                        (t.chart2 = new Highcharts.Chart('allAnalysisChartId', t.chartOptions(c)));
                    }, 0);
                },
                resulterror: function (e) {
                  t.showIndex = 2;
                },
              });
          },
          chartOptions: function (t) {
            return {
              chart: { type: 'bar' },
              title: { text: t.title, style: { color: '#000', fontWeight: 'bold' } },
              tooltip: {},
              credits: { enabled: !1 },
              exporting: { enabled: !1 },
              legend: { align: 'right', verticalAlign: 'top' },
              yAxis: {
                labels: {
                  formatter: function () {
                    return this.value + '%';
                  },
                },
                title: { text: '' },
                height: '100%',
                alternateGridColor: '#fafafa',
                gridLineWidth: 0,
                plotLines: [{ color: '#E8E8Ea', width: 1, value: 0, dashStyle: 'solid' }],
              },
              xAxis: {
                categories: t.xAxisCategories,
                tickLength: 0,
                gridLineColor: '#E8E8E8',
                gridLineDashStyle: 'solid',
                gridLineWidth: 1,
              },
              series: t.seriesData,
            };
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/attribution-analysis/style',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig');
      n.exports = Vue.extend({
        template:
          '<div class="attributionAnal-container"><div class="attributionAnal-container_box attributionAnal-container_box_Style" v-if="showIndex === 1"><div class="attributionAnal_box_Style_title">基准：沪深300 &nbsp;&nbsp; 时期：<span class="start-time">{{beginDate}}</span><span>~</span><span class="end-time">{{endDate}}</span></div><div class="style-charts-content"><div class="attributionAnal_box"><div id="radarChartId" class="data-update-container attributionAnal_weight"></div></div><div class="attributionAnal_box"><div id="styleColumnChartId" class="data-update-container attributionAnal_allAnalysis"></div></div></div></div><div class="loading-data" v-else-if="showIndex === 0">数据正在加载中...</div><div class="error-data" v-else-if="showIndex === 2">暂无数据.</div></div>',
        components: {},
        data: function () {
          return { chart1: null, chart2: null, backTestId: null, beginDate: null, endDate: null, showIndex: 0 };
        },
        watch: {
          backTestId: function () {
            this.render();
          },
        },
        mounted: function () {
          var t = this;
          setTimeout(function () {
            t.backTestId = t.$store.state.backTestId;
          }, 300);
        },
        methods: {
          render: function () {
            var t = this;
            (t.beginDate = t.$store.state.beginDate),
              (t.endDate = t.$store.state.endDate),
              i.jsonp({
                url: a.ajax['backtest-result'].getRiskAnalysis,
                data: { backtestid: t.backTestId, beginDate: t.beginDate, endDate: t.endDate, symbol: '' },
                success: function (e) {
                  if (null === e) return (t.showIndex = 2), !1;
                  var n,
                    i,
                    a,
                    r,
                    s,
                    o,
                    l,
                    c,
                    d = [],
                    u = ['#ffb880', '#59b1f0', '#d97a80'],
                    p = 0,
                    f = [];
                  (n = e.group),
                    (i = e.stard_and_group),
                    $.each(n, function (t, e) {
                      var n = [];
                      n.push(e.size),
                        n.push(e.beta),
                        n.push(e.momentum),
                        n.push(e.volatility),
                        n.push(e.linear_size),
                        n.push(e.booktoprice),
                        n.push(e.liquidity),
                        n.push(e.earning_yield),
                        n.push(e.growth),
                        n.push(e.leverage),
                        f.push(e.size),
                        f.push(e.beta),
                        f.push(e.momentum),
                        f.push(e.volatility),
                        f.push(e.linear_size),
                        f.push(e.booktoprice),
                        f.push(e.liquidity),
                        f.push(e.earning_yield),
                        f.push(e.growth),
                        f.push(e.leverage),
                        d.push({ name: t, data: n, color: u[p] }),
                        p++;
                    }),
                    (a = Math.ceil(Math.max.apply(null, f))),
                    (r = -1 * a),
                    (l = { seriesData: d, max: a, min: r });
                  var h = i.group,
                    v = i.standard,
                    m = [],
                    g = [];
                  m.push(h.size),
                    m.push(h.beta),
                    m.push(h.momentum),
                    m.push(h.volatility),
                    m.push(h.linear_size),
                    m.push(h.booktoprice),
                    m.push(h.liquidity),
                    m.push(h.earning_yield),
                    m.push(h.growth),
                    m.push(h.leverage),
                    g.push(v.size),
                    g.push(v.beta),
                    g.push(v.momentum),
                    g.push(v.volatility),
                    g.push(v.linear_size),
                    g.push(v.booktoprice),
                    g.push(v.liquidity),
                    g.push(v.earning_yield),
                    g.push(v.growth),
                    g.push(v.leverage),
                    (s = Math.ceil(Math.max.apply(null, m.concat(g)))),
                    (o = Math.floor(Math.min.apply(null, m.concat(g)))),
                    (t.isHide = !1),
                    (c = {
                      min: o,
                      max: s,
                      xAxisCategories: [
                        '规模',
                        '贝塔',
                        '趋势',
                        '残差波动率',
                        '非线性规模',
                        '账面市值比',
                        '流动性',
                        '收益率',
                        '成长',
                        '杠杆',
                      ],
                      seriesData: [
                        { name: '组合投资', data: m, color: '#d97a80' },
                        { name: '基准投资', data: g, color: '#59b1f0' },
                      ],
                    }),
                    (t.showIndex = 1),
                    setTimeout(function () {
                      (t.chart1 = new Highcharts.Chart('radarChartId', t.radarChartOptions(l))),
                        (t.chart2 = new Highcharts.Chart('styleColumnChartId', t.barChartOptions(c)));
                    }, 0);
                },
                resulterror: function (e) {
                  t.showIndex = 2;
                },
              });
          },
          radarChartOptions: function (t) {
            return {
              chart: { polar: !0, type: 'line' },
              title: { text: '' },
              tooltip: {},
              credits: { enabled: !1 },
              exporting: { enabled: !1 },
              pane: { size: '80%', startAngle: 0 },
              xAxis: {
                lineWidth: 0,
                tickmarkPlacement: 'on',
                categories: ['规模', '贝塔', '趋势', '残差波动率', '非线性规模', '账面市值比', '流动性', '收益率', '成长', '杠杆'],
              },
              yAxis: { gridLineInterpolation: 'polygon', lineWidth: 0, minRange: 1, min: t.min, max: t.max },
              legend: { align: 'right', verticalAlign: 'bottom', layout: 'vertical' },
              series: t.seriesData,
            };
          },
          barChartOptions: function (t) {
            return {
              chart: { type: 'bar' },
              title: { text: '', style: { color: '#000', fontWeight: 'bold' } },
              tooltip: {},
              credits: { enabled: !1 },
              exporting: { enabled: !1 },
              legend: { align: 'right', verticalAlign: 'bottom', layout: 'vertical' },
              yAxis: {
                labels: {
                  formatter: function () {
                    return this.value;
                  },
                },
                title: { text: '' },
                min: t.min,
                max: t.max,
                height: '100%',
                alternateGridColor: '#fafafa',
                gridLineWidth: 0,
                plotLines: [{ color: '#E8E8E8', width: 1, value: 0, dashStyle: 'solid' }],
              },
              xAxis: {
                categories: t.xAxisCategories,
                tickLength: 0,
                gridLineColor: '#E8E8E8',
                gridLineDashStyle: 'solid',
                gridLineWidth: 1,
              },
              series: t.seriesData,
            };
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/attribution-analysis/attribution-analysis',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', './asset-allocation', './brinson', './style'],
    function (t, e, n) {
      var i = (t('VueAjax'), t('VueConfig'), t('./asset-allocation')),
        a = t('./brinson'),
        r = t('./style');
      n.exports = Vue.extend({
        template:
          '<div v-stat2:mount="{ id: \'GYFX\' }" id="backreport_attibution_analysis" class="backreport-result-container backreport-attibution_analysis"><div class="attributionAnal-nav" v-show="hasAuthAccess"><div @click="toggle(index, tab.view)" v-for="(tab, index) in tabs" v-stat2:click.clickcontent="{ id: \'GYFX_toNavBar_button\' }" :class="{active : active === index}">{{tab.title}}</div></div><div class="anal-content-container" v-show="hasAuthAccess"><component :is="currentTabView"></component></div><div class="anal-hasNoAccess" v-show="!hasAuthAccess">暂无归因分析权限.</div></div>',
        components: { asset: i },
        data: function () {
          return {
            tabs: [
              { title: '资产配置', view: i },
              { title: 'Brinson归因', view: a },
              { title: '风格分析', view: r },
            ],
            currentTabView: i,
            active: 0,
            hasAuthAccess: !0,
          };
        },
        watch: {},
        mounted: function () {
          var t = this.$store.state.hasAnalysisAccess;
          this.hasAuthAccess = !!+t;
        },
        methods: {
          toggle: function (t, e) {
            var n = this;
            (n.active = t), (n.currentTabView = e);
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/income-decomposition',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc');
      n.exports = Vue.extend({
        template:
          '<div class="decomposition"><div class="decheader"><span class="icon"></span><p class="brinson">Brinson分析</p><div class="incomeheader"><span></span><span>收益分解</span><span></span></div></div><div class="decbody"><div class="yield"><label @click.stop.self=""><input type="checkbox" v-model="localcheckboxChoosed" @click.stop.self="" class="icon-checkbox"><div class="checkbox-img"></div></label><span class="l">显示年化收益率</span></div><div class="listbox"><div style="top: 2px; left: 235px;">主动收益<br><span :class="resultdata.active_ret | riseAndFallClass">{{resultdata.active_ret | safeFloatPerFixedTwo}}</span></div><div style="top: 133px; left: 94px;">交易以及其他收益<br><span class="inbl" :class="resultdata.trade_active_ret | riseAndFallClass">{{resultdata.trade_active_ret | safeFloatPerFixedTwo}}</span></div><div style="top: 133px; left: 376px;">持仓相关收益<br><span class="inbl" :class="resultdata.hold_active_ret | riseAndFallClass">{{resultdata.hold_active_ret | safeFloatPerFixedTwo}}</span></div><div style="top: 262px; left: 94px;">配置收益<br><span :class="resultdata.position_active_ret | riseAndFallClass">{{resultdata.position_active_ret | safeFloatPerFixedTwo}}</span></div><div style="top: 262px; left: 376px;">管理收益<br><span :class="resultdata.manage_active_ret | riseAndFallClass">{{resultdata.manage_active_ret | safeFloatPerFixedTwo}}</span></div><div style="top: 393px; left: 2px;">行业选择收益<br><span class="inbl" :class="resultdata.sector_allocat | riseAndFallClass">{{resultdata.sector_allocat | safeFloatPerFixedTwo}}</span></div><div style="top: 393px; left: 235px;">个股选择收益<br><span class="inbl" :class="resultdata.sector_select | riseAndFallClass">{{resultdata.sector_select | safeFloatPerFixedTwo}}</span></div><div style="top: 393px; left: 468px;">交叉收益<br><span class="inbl" :class="resultdata.sector_interact | riseAndFallClass">{{resultdata.sector_interact | safeFloatPerFixedTwo}}</span></div></div><div class="textbox"><p>该策略主动收益为<span>{{resultdata.active_ret | safeFloatPerFixedTwo}}</span>，交易及其他收益为<span>{{resultdata.trade_active_ret | safeFloatPerFixedTwo}}</span>，反映了管理人盘中买卖点选择以及其他资产带来的收益的；持仓相关收益为<span>{{resultdata.hold_active_ret | safeFloatPerFixedTwo}}</span>，反映的是在股票持仓中，用股票收盘价计算得到的持仓收益。配置收益为<span>{{resultdata.position_active_ret | safeFloatPerFixedTwo}}</span>，主要是由产品的股票仓位和基准的股票仓位差异带来的，反映的是投资经理的仓位管理能力。管理收益为<span>{{resultdata.manage_active_ret | safeFloatPerFixedTwo}}</span>，它反映的是不考虑仓位的情况下，投资经理在股票内部的管理能力，其中，行业选择收益为<span>{{resultdata.sector_allocat | safeFloatPerFixedTwo}}</span>、个股选择收益为<span>{{resultdata.sector_select | safeFloatPerFixedTwo}}</span>、交叉收益为<span>{{resultdata.sector_interact | safeFloatPerFixedTwo}}</span>。</p></div></div><div class="data_recall nodata zUIpanel1" v-show="decdatashow"><div id="main_loading_blue" class="main-loadingbox main-loadingbox-blue"><div class="loading-container"><div class="loading-part part1"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part2"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part4"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div></div><div class="loading-text">获取数据中……</div><div class="loading-text" style="font-size: 16px;" v-show="firstTipError">(首次计算所需时间较长，可稍后访问)</div></div></div></div>',
        components: {},
        data: function () {
          return { loopFlag: null, loopornot: !0, localcheckboxChoosed: !1, resultdata: {}, decdatashow: !1 };
        },
        props: ['backtestid', 'startDate', 'endDate', 'isRunning'],
        computed: {
          firstTipError: function () {
            return this.$store.state.firstTipError;
          },
          isKeepLoading: function () {
            return this.$store.state.isKeepLoading;
          },
          allLoadingShow: function () {
            return this.$store.state.allloadingshow;
          },
        },
        watch: {
          localcheckboxChoosed: function (t) {
            t ? this.init(1) : this.init();
          },
          allLoadingShow: function (t) {
            var e = this;
            1 === t.length && -1 !== $.inArray(0, this.allLoadingShow) && (this.loopornot = !0),
              0 === t.length && (clearInterval(this.loopFlag), (this.loopFlag = null)),
              this.loopornot && this.isRunning
                ? ((this.decdatashow = !0),
                  null === this.loopFlag &&
                    (this.loopFlag = setInterval(function () {
                      e.init();
                    }, 5e3)))
                : (clearInterval(this.loopFlag), (this.loopFlag = null));
          },
        },
        destroyed: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null));
        },
        activated: function () {
          this.isKeepLoading && this.$emit('hand-run-click');
        },
        deactivated: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null), this.$emit('hand-stop-click'));
        },
        mounted: function () {},
        methods: {
          init: function (t) {
            var e = this;
            this.decdatashow = !0;
            var n = {
              backtestid: this.backtestid,
              type: 1 === t ? 'brinson_yield_annual' : 'brinson_yield',
              begin_date: this.startDate,
              end_date: this.endDate,
            };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                null !== t &&
                  ((e.resultdata = t),
                  (e.decdatashow = !1),
                  e.isRunning
                    ? e.$store.commit({ type: 'getAllLoadingShow', data: 1 })
                    : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  (e.loopornot = !1));
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
        },
        filters: {
          riseAndFallClass: function (t, e) {
            return isNaN(t) ? '' : (e || (e = 0), Number(t) > e ? 'rise-red' : Number(t) < e ? 'fall-green' : '');
          },
          safeFloatPerFixedTwo: function (t) {
            return null === t ? '--' : isNaN(t) ? '--' : Number(100 * t).toFixed(2) + '%';
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/attributable-dismantling',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = null,
        o = null,
        l = null;
      n.exports = Vue.extend({
        template:
          '<div class="dismantling"><div class="disheader"><div class="attrheader"><span></span><span>行业绩效归因拆解</span><span></span></div></div><div class="disbody"><div class="yield"><label @click.stop.self=""><input type="checkbox" v-model="localcheckboxChoosed" @click.stop.self="" class="icon-checkbox"><div class="checkbox-img"></div></label><span class="l">显示年化收益率</span></div><div class="box"><div id="disChart_l" class="disChart_l"></div></div><div class="box"><div id="disChart_m" class="disChart_m"></div></div><div class="box"><div id="disChart_r" class="disChart_r"></div></div><div class="textbox"><p v-show="positiveshow &amp;&amp; negativeshow">从行业选择来看，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>行业，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{positivename}}</span>行业获得了正的主动收益，{{showlowname ? \'低配\' : \'高配\'}}了<span>{{negativename}}</span>行业获得了负的主动收益。</p><p v-show="positiveshow &amp;&amp; !negativeshow">从行业选择来看，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>行业，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}的行业表现优异，均获得了正的主动收益。</p><p v-show="!positiveshow &amp;&amp; negativeshow">从行业选择来看，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>行业，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}的行业效果不佳。</p></div></div><div class="data_recall nodata zUIpanel1" v-show="Array.from(new Set(mydisdatashow)).length !== 3"><div id="main_loading_blue" class="main-loadingbox main-loadingbox-blue"><div class="loading-container"><div class="loading-part part1"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part2"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part4"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div></div><div class="loading-text">获取数据中……</div><div class="loading-text" style="font-size: 16px;" v-show="firstTipError">(首次计算所需时间较长，可稍后访问)</div></div></div></div>',
        components: {},
        data: function () {
          return {
            loopFlag: null,
            industryname: {
              CI400000: '银行',
              CI500000: '交通运输',
              CI300000: '汽车',
              CI420000: '房地产',
              CI200000: '电力及公用事业',
              CI210000: '钢铁',
              CI100000: '石油石化',
              CI410000: '非银行金融',
              CI260000: '机械',
              CI630000: '传媒',
              CI280000: '国防军工',
              CI230000: '建筑',
              CI610000: '通信',
              CI700000: '综合',
              CI320000: '餐饮旅游',
              CI350000: '医药',
              CI360000: '食品饮料',
              CI330000: '家电',
              CI220000: '基础化工',
              CI250000: '轻工制造',
              CI600000: '电子元器件',
              CI310000: '商贸零售',
              CI270000: '电力设备',
              CI370000: '农林牧渔',
              CI620000: '计算机',
              CI340000: '纺织服装',
              CI120000: '有色金属',
              CI110000: '煤炭',
              CI240000: '建材',
            },
            localcheckboxChoosed: !1,
            resultLeftData: {},
            resultMiddleData: {},
            resultRightData: {},
            higharr: [],
            highname: '',
            showlowname: !0,
            positiveshow: !0,
            negativeshow: !0,
            disdatashow: [],
          };
        },
        props: ['backtestid', 'startDate', 'endDate', 'isRunning'],
        computed: {
          firstTipError: function () {
            return this.$store.state.firstTipError;
          },
          isKeepLoading: function () {
            return this.$store.state.isKeepLoading;
          },
          allLoadingShow: function () {
            return this.$store.state.allloadingshow;
          },
          myhighname: function () {
            return this.highname;
          },
          positivename: function () {
            for (var t = [], e = 0; e < this.higharr.length; e++)
              this.resultLeftData[this.higharr[e][1]] > 0 && t.push(this.industryname[this.higharr[e][1]]),
                t.length === this.higharr.length && (this.negativeshow = !1);
            return t.join('、');
          },
          negativename: function () {
            for (var t = [], e = 0; e < this.higharr.length; e++)
              this.resultLeftData[this.higharr[e][1]] <= 0 && t.push(this.industryname[this.higharr[e][1]]),
                t.length === this.higharr.length && (this.positiveshow = !1);
            return t.join('、');
          },
          mydisdatashow: function () {
            return this.disdatashow;
          },
        },
        watch: {
          localcheckboxChoosed: function (t) {
            (this.disdatashow = []),
              t
                ? (this._getLeftData(1), this._getMiddleData(1), this._getRightData())
                : (this._getLeftData(), this._getMiddleData(), this._getRightData());
          },
          allLoadingShow: function (t) {
            var e = this;
            1 === t.length && -1 !== $.inArray(0, this.allLoadingShow) && (this.disdatashow = []),
              0 === t.length && (clearInterval(this.loopFlag), (this.loopFlag = null)),
              3 !== Array.from(new Set(this.mydisdatashow)).length && this.isRunning
                ? null === this.loopFlag &&
                  (this.loopFlag = setInterval(function () {
                    -1 === $.inArray(1, e.mydisdatashow)
                      ? e._getLeftData()
                      : -1 === $.inArray(2, e.mydisdatashow)
                      ? e._getMiddleData()
                      : e._getRightData();
                  }, 5e3))
                : (clearInterval(this.loopFlag), (this.loopFlag = null));
          },
        },
        destroyed: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null));
        },
        activated: function () {
          this.isKeepLoading && this.$emit('hand-run-click');
        },
        deactivated: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null), this.$emit('hand-stop-click'));
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t._initChartL(), t._initChartM(), t._initChartR();
          });
        },
        methods: {
          _getLeftData: function (t) {
            var e = this,
              n = {
                backtestid: this.backtestid,
                type: 1 === t ? 'brinson_indus_active_ret_annual' : 'brinson_indus_active_ret',
                begin_date: this.startDate,
                end_date: this.endDate,
              };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                null !== t &&
                  ((e.resultLeftData = t),
                  e.disdatashow.push(1),
                  e.isRunning
                    ? e.$store.commit({ type: 'getAllLoadingShow', data: 2 })
                    : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  e._updateLeftChart());
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
          _getMiddleData: function (t) {
            var e = this,
              n = {
                backtestid: this.backtestid,
                type: 1 === t ? 'brinson_indus_active_risk_annual' : 'brinson_indus_active_risk',
                begin_date: this.startDate,
                end_date: this.endDate,
              };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                null !== t &&
                  ((e.resultMiddleData = t),
                  e.disdatashow.push(2),
                  e.isRunning
                    ? e.$store.commit({ type: 'getAllLoadingShow', data: 3 })
                    : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  e._updateMiddleChart());
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
          _getRightData: function (t) {
            var e = this;
            (e.higharr = []), (e.highname = '');
            var n = {
              backtestid: this.backtestid,
              type: 'brinson_indus_active_weight',
              begin_date: this.startDate,
              end_date: this.endDate,
            };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                if (null !== t) {
                  (e.resultRightData = t), e.disdatashow.push(3);
                  var n = JSON.parse(JSON.stringify(t)),
                    i = [],
                    a = [];
                  for (var r in n) n[r] <= 0 ? a.push([n[r], r]) : ((e.showlowname = !1), i.push([n[r], r]));
                  e.showlowname
                    ? (e.higharr = a.sort(function (t, e) {
                        return t[0] - e[0];
                      }))
                    : (e.higharr = i.sort(function (t, e) {
                        return e[0] - t[0];
                      })),
                    e.higharr.length >= 3 && (e.higharr = e.higharr.slice(0, 3));
                  for (var s = [], r = 0; r < e.higharr.length; r++) s.push(e.industryname[e.higharr[r][1]]);
                  (e.highname = s.join('、')),
                    e.isRunning
                      ? e.$store.commit({ type: 'getAllLoadingShow', data: 4 })
                      : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                    e._updateRightChart();
                }
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
          _initChartL: function () {
            null !== s && (s.destroy(), (s = null)),
              (s = Highcharts.chart('disChart_l', {
                credits: { text: '' },
                title: { text: '主动收益', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 900, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { enabled: !1 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return (100 * this.y).toFixed(2) + '%';
                      },
                    },
                  },
                  series: {},
                },
                yAxis: {
                  labels: {
                    formatter: function () {
                      return (100 * this.value).toFixed(2) + '%';
                    },
                  },
                  title: { text: '' },
                },
                xAxis: {},
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initChartM: function () {
            null !== o && (o.destroy(), (o = null)),
              (o = Highcharts.chart('disChart_m', {
                credits: { text: '' },
                title: { text: '主动风险', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 900, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { enabled: !1 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return (100 * this.y).toFixed(2) + '%';
                      },
                    },
                  },
                  series: {},
                },
                yAxis: {
                  labels: {
                    formatter: function () {
                      return (100 * this.value).toFixed(2) + '%';
                    },
                  },
                  title: { text: '' },
                },
                xAxis: {},
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initChartR: function () {
            null !== l && (l.destroy(), (l = null)),
              (l = Highcharts.chart('disChart_r', {
                credits: { text: '' },
                title: { text: '主动权重', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 900, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { enabled: !1 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return (100 * this.y).toFixed(2) + '%';
                      },
                    },
                  },
                  series: {},
                },
                yAxis: {
                  labels: {
                    formatter: function () {
                      return (100 * this.value).toFixed(2) + '%';
                    },
                  },
                  title: { text: '' },
                },
                xAxis: {},
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _updateLeftChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [];
            for (var o in this.resultLeftData) r.push([this.resultLeftData[o], o]);
            r
              .sort(function (t, e) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                var n = e[0];
                i.push(t.industryname[e[1]]), n >= 0 ? a.push({ y: n, color: '#ea7279' }) : a.push({ y: n, color: '#49bf9f' });
              }),
              e.push({ name: '主动收益', data: a });
            for (var l in e) {
              var c = !1;
              for (n in s.series)
                if (s.series[n] && e[l].name === s.series[n].name) {
                  (c = !0), s.series[n].update(e[l]);
                  break;
                }
              c || s.addSeries(e[l]);
            }
            s.xAxis[0].update({ categories: i }), s.reflow();
          },
          _updateMiddleChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [];
            for (var s in this.resultMiddleData) r.push([this.resultMiddleData[s], s]);
            r
              .sort(function (t, e) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                var n = e[0];
                i.push(t.industryname[e[1]]), n >= 0 ? a.push({ y: n, color: '#5ab1ef' }) : a.push({ y: n, color: '#49bf9f' });
              }),
              e.push({ name: '主动风险', data: a });
            for (var l in e) {
              var c = !1;
              for (n in o.series)
                if (o.series[n] && e[l].name === o.series[n].name) {
                  (c = !0), o.series[n].update(e[l]);
                  break;
                }
              c || o.addSeries(e[l]);
            }
            o.xAxis[0].update({ categories: i }), o.reflow();
          },
          _updateRightChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [];
            for (var s in this.resultRightData) r.push([this.resultRightData[s], s]);
            r
              .sort(function (t, e) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                var n = e[0];
                i.push(t.industryname[e[1]]), n >= 0 ? a.push({ y: n, color: '#f8a45f' }) : a.push({ y: n, color: '#49bf9f' });
              }),
              e.push({ name: '主动权重', data: a });
            for (var o in e) {
              var c = !1;
              for (n in l.series)
                if (l.series[n] && e[o].name === l.series[n].name) {
                  (c = !0), l.series[n].update(e[o]);
                  break;
                }
              c || l.addSeries(e[o]);
            }
            l.xAxis[0].update({ categories: i }), l.reflow();
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/style-attribution',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = null,
        o = null;
      n.exports = Vue.extend({
        template:
          '<div class="attribution"><div class="attrheader"><span class="icon"></span><p class="style">风格分析</p><div class="styleheader"><span></span><span>风格归因</span><span></span></div></div><div class="attrbody"><div class="yield"><label @click.stop.self=""><input type="checkbox" v-model="localcheckboxChoosed" @click.stop.self="" class="icon-checkbox"><div class="checkbox-img"></div></label><span class="l">显示年化收益率</span></div><div class="box"><div id="attrChart_l" class="attrChart_l"></div></div><div class="box"><div id="attrChart_r" class="attrChart_r"></div></div></div><div class="data_recall nodata zUIpanel1" v-show="Array.from(new Set(myattrdatashow)).length !== 2"><div id="main_loading_blue" class="main-loadingbox main-loadingbox-blue"><div class="loading-container"><div class="loading-part part1"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part2"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part4"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div></div><div class="loading-text">获取数据中……</div><div class="loading-text" style="font-size: 16px;" v-show="firstTipError">(首次计算所需时间较长，可稍后访问)</div></div></div></div>',
        components: {},
        data: function () {
          return {
            loopFlag: null,
            stylename: {
              beta: 'beta',
              bp: '价值',
              earnings_yield: '盈利能力',
              growth: '成长能力',
              industry: '行业',
              leverage: '杠杆率',
              liquidity: '流动性',
              momentum: '动量',
              non_linear_size: '非线性市值',
              size: '市值',
              volatility: '波动率',
            },
            localcheckboxChoosed: !1,
            resultLeftData: {},
            resultRightData: {},
            attrdatashow: [],
          };
        },
        props: ['backtestid', 'startDate', 'endDate', 'isRunning'],
        computed: {
          firstTipError: function () {
            return this.$store.state.firstTipError;
          },
          isKeepLoading: function () {
            return this.$store.state.isKeepLoading;
          },
          allLoadingShow: function () {
            return this.$store.state.allloadingshow;
          },
          myattrdatashow: function () {
            return this.attrdatashow;
          },
        },
        watch: {
          localcheckboxChoosed: function (t) {
            (this.attrdatashow = []), t ? (this._getLeftData(1), this._getRightData(1)) : (this._getLeftData(), this._getRightData());
          },
          allLoadingShow: function (t) {
            var e = this;
            1 === t.length && -1 !== $.inArray(0, this.allLoadingShow) && (this.attrdatashow = []),
              0 === t.length && (clearInterval(this.loopFlag), (this.loopFlag = null)),
              2 !== Array.from(new Set(this.myattrdatashow)).length && this.isRunning
                ? null === this.loopFlag &&
                  (this.loopFlag = setInterval(function () {
                    -1 === $.inArray(1, e.myattrdatashow) ? e._getLeftData() : e._getRightData();
                  }, 5e3))
                : (clearInterval(this.loopFlag), (this.loopFlag = null));
          },
        },
        destroyed: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null));
        },
        activated: function () {
          this.isKeepLoading && this.$emit('hand-run-click');
        },
        deactivated: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null), this.$emit('hand-stop-click'));
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t._initChartL(), t._initChartR();
          });
        },
        methods: {
          _getLeftData: function (t) {
            var e = this,
              n = {
                backtestid: this.backtestid,
                type: 1 === t ? 'barra_active_ret_annual' : 'barra_active_ret',
                begin_date: this.startDate,
                end_date: this.endDate,
              };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                null !== t &&
                  ((e.resultLeftData = t),
                  e.attrdatashow.push(1),
                  e.$store.commit({ type: 'getStyleAttrLeftData', data: e.resultLeftData }),
                  e.isRunning
                    ? e.$store.commit({ type: 'getAllLoadingShow', data: 5 })
                    : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  e._updateLeftChart());
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
          _getRightData: function (t) {
            var e = this,
              n = {
                backtestid: this.backtestid,
                type: 1 === t ? 'barra_active_risk_annual' : 'barra_active_risk',
                begin_date: this.startDate,
                end_date: this.endDate,
              };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: n,
              success: function (t) {
                null !== t &&
                  ((e.resultRightData = t),
                  e.attrdatashow.push(2),
                  e.isRunning
                    ? e.$store.commit({ type: 'getAllLoadingShow', data: 6 })
                    : e.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  e._updateRightChart());
              },
              resulterror: function (t) {
                e.$emit('hand-stop-click'),
                  r.warningTip(t.errormsg),
                  null !== e.loopFlag && (clearInterval(e.loopFlag), (e.loopFlag = null));
              },
            });
          },
          _initChartL: function () {
            null !== s && (s.destroy(), (s = null)),
              (s = Highcharts.chart('attrChart_l', {
                credits: { text: '' },
                title: { text: '主动收益', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 600, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { enabled: !1 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return (100 * this.y).toFixed(2) + '%';
                      },
                    },
                  },
                  series: {},
                },
                yAxis: {
                  labels: {
                    formatter: function () {
                      return (100 * this.value).toFixed(2) + '%';
                    },
                  },
                  title: { text: '' },
                },
                xAxis: {},
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initChartR: function () {
            null !== o && (o.destroy(), (o = null)),
              (o = Highcharts.chart('attrChart_r', {
                credits: { text: '' },
                title: { text: '主动风险', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 600, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { enabled: !1 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return (100 * this.y).toFixed(2) + '%';
                      },
                    },
                  },
                  series: {},
                },
                yAxis: {
                  labels: {
                    formatter: function () {
                      return (100 * this.value).toFixed(2) + '%';
                    },
                  },
                  title: { text: '' },
                },
                xAxis: {},
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _updateLeftChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [];
            for (var o in this.resultLeftData) 'country' === o ? delete this.resultLeftData[o] : r.push([this.resultLeftData[o], o]);
            r
              .sort(function (t, e) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                var n = e[0];
                i.push(t.stylename[e[1]]), n >= 0 ? a.push({ y: n, color: '#ea7279' }) : a.push({ y: n, color: '#49bf9f' });
              }),
              e.push({ name: '主动收益', data: a });
            for (var l in e) {
              var c = !1;
              for (n in s.series)
                if (s.series[n] && e[l].name === s.series[n].name) {
                  (c = !0), s.series[n].update(e[l]);
                  break;
                }
              c || s.addSeries(e[l]);
            }
            s.xAxis[0].update({ categories: i }), s.reflow();
          },
          _updateRightChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [];
            for (var s in this.resultRightData) 'country' === s ? delete this.resultRightData[s] : r.push([this.resultRightData[s], s]);
            r
              .sort(function (t, e) {
                return e[0] - t[0];
              })
              .forEach(function (e) {
                var n = e[0];
                i.push(t.stylename[e[1]]), n >= 0 ? a.push({ y: n, color: '#5ab1ef' }) : a.push({ y: n, color: '#49bf9f' });
              }),
              e.push({ name: '主动风险', data: a });
            for (var l in e) {
              var c = !1;
              for (n in o.series)
                if (o.series[n] && e[l].name === o.series[n].name) {
                  (c = !0), o.series[n].update(e[l]);
                  break;
                }
              c || o.addSeries(e[l]);
            }
            o.xAxis[0].update({ categories: i }), o.reflow();
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/style-comparison',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc', 'datemethod'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('datemethod');
      window.chartComp = null;
      var o = null;
      n.exports = Vue.extend({
        template:
          '<div class="comparison"><div class="compheader"><div class="styleheader"><span></span><span>策略和基准风格对比</span><span></span></div></div><div class="compbody"><div class="chartBox" v-show="bigchartshow"><span @click="shutchart"></span><div class="bigChart" id="bigchart"></div></div><p class="legend">风格名称/<span>主动暴露度</span></p><p class="historydata" v-show="historydatashow">鼠标单击查看历史指标</p><div class="box"><div id="compChart" class="compChart"></div></div><div class="textbox"><p v-show="positiveshow &amp;&amp; negativeshow">投资风格方面，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{positivename}}</span>获得了正的主动收益，{{showlowname ? \'低配\' : \'高配\'}}了<span>{{negativename}}</span>获得了负的主动收益。</p><p v-show="positiveshow &amp;&amp; !negativeshow">投资风格方面，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}的风格因子表现优异，均获得了正的主动收益。</p><p v-show="!positiveshow &amp;&amp; negativeshow">投资风格方面，相对于基准指数而言，该产品{{showlowname ? \'低配\' : \'高配\'}}了<span>{{myhighname}}</span>，从结果导向而言，该产品{{showlowname ? \'低配\' : \'高配\'}}的风格因子效果不佳。</p></div></div><div class="data_recall nodata zUIpanel1" v-show="Array.from(new Set(mycompdatashow)).length !== 2"><div id="main_loading_blue" class="main-loadingbox main-loadingbox-blue"><div class="loading-container"><div class="loading-part part1"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part2"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part4"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div></div><div class="loading-text">获取数据中……</div><div class="loading-text" style="font-size: 16px;" v-show="firstTipError">(首次计算所需时间较长，可稍后访问)</div></div></div></div>',
        components: {},
        data: function () {
          return {
            loopFlag: null,
            stylename: {
              beta: 'beta',
              bp: '价值',
              earnings_yield: '盈利能力',
              growth: '成长能力',
              industry: '行业',
              leverage: '杠杆率',
              liquidity: '流动性',
              momentum: '动量',
              non_linear_size: '非线性市值',
              size: '市值',
              volatility: '波动率',
            },
            reStylename: {
              beta: 'beta',
              价值: 'bp',
              盈利能力: 'earnings_yield',
              成长能力: 'growth',
              行业: 'industry',
              杠杆率: 'leverage',
              流动性: 'liquidity',
              动量: 'momentum',
              非线性市值: 'non_linear_size',
              市值: 'size',
              波动率: 'volatility',
            },
            higharr: [],
            highname: '',
            weightarr: [],
            resultData: {},
            resultBigData: {},
            bigchartshow: !1,
            historydatashow: !1,
            showlowname: !0,
            positiveshow: !0,
            negativeshow: !0,
            compdatashow: [],
          };
        },
        props: ['backtestid', 'startDate', 'endDate', 'isRunning'],
        computed: {
          firstTipError: function () {
            return this.$store.state.firstTipError;
          },
          isKeepLoading: function () {
            return this.$store.state.isKeepLoading;
          },
          allLoadingShow: function () {
            return this.$store.state.allloadingshow;
          },
          myWeightarr: function () {
            return this.weightarr;
          },
          mycompdatashow: function () {
            return this.compdatashow;
          },
          attrLeftData: function () {
            return this.$store.state.styleAttrLeftData;
          },
          myhighname: function () {
            return this.highname;
          },
          positivename: function () {
            for (var t = [], e = 0; e < this.higharr.length; e++)
              this.attrLeftData[this.higharr[e][1]] > 0 && t.push(this.stylename[this.higharr[e][1]]),
                t.length === this.higharr.length && (this.negativeshow = !1);
            return t.join('、');
          },
          negativename: function () {
            for (var t = [], e = 0; e < this.higharr.length; e++)
              this.attrLeftData[this.higharr[e][1]] <= 0 && t.push(this.stylename[this.higharr[e][1]]),
                t.length === this.higharr.length && (this.positiveshow = !1);
            return t.join('、');
          },
          plotBandsLabels: function () {
            var t = this;
            return [
              {
                from: -0.5,
                to: 0.5,
                label: { text: t.myWeightarr[0] ? t.myWeightarr[0].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 0.5,
                to: 1.5,
                label: { text: t.myWeightarr[1] ? t.myWeightarr[1].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 1.5,
                to: 2.5,
                label: { text: t.myWeightarr[2] ? t.myWeightarr[2].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 2.5,
                to: 3.5,
                label: { text: t.myWeightarr[3] ? t.myWeightarr[3].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 3.5,
                to: 4.5,
                label: { text: t.myWeightarr[4] ? t.myWeightarr[4].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 4.5,
                to: 5.5,
                label: { text: t.myWeightarr[5] ? t.myWeightarr[5].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 5.5,
                to: 6.5,
                label: { text: t.myWeightarr[6] ? t.myWeightarr[6].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 6.5,
                to: 7.5,
                label: { text: t.myWeightarr[7] ? t.myWeightarr[7].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 7.5,
                to: 8.5,
                label: { text: t.myWeightarr[8] ? t.myWeightarr[8].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
              {
                from: 8.5,
                to: 9.5,
                label: { text: t.myWeightarr[9] ? t.myWeightarr[9].toFixed(2) : '0.00', style: { color: '#d98c0d' }, x: -37 },
              },
            ];
          },
        },
        watch: {
          myWeightarr: function (t) {
            var e = this;
            this.$nextTick(function () {
              e._updateChart();
            });
          },
          allLoadingShow: function (t) {
            var e = this;
            1 === t.length && -1 !== $.inArray(0, this.allLoadingShow) && (this.compdatashow = []),
              0 === t.length && (clearInterval(this.loopFlag), (this.loopFlag = null)),
              2 !== Array.from(new Set(this.mycompdatashow)).length && this.isRunning
                ? null === this.loopFlag &&
                  (this.loopFlag = setInterval(function () {
                    -1 === $.inArray(1, e.mycompdatashow) ? e._getData() : e._getBigData();
                  }, 5e3))
                : (clearInterval(this.loopFlag), (this.loopFlag = null));
          },
        },
        destroyed: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null));
        },
        activated: function () {
          this.isKeepLoading && this.$emit('hand-run-click');
        },
        deactivated: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null), this.$emit('hand-stop-click'));
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t._initChart(), t._initBigChart();
          });
        },
        methods: {
          _getData: function () {
            var t = this;
            (t.higharr = []), (t.highname = '');
            var e = { backtestid: this.backtestid, type: 'barra_exposure', begin_date: this.startDate, end_date: this.endDate };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: e,
              success: function (e) {
                if (null !== e) {
                  (t.resultData = e), t.compdatashow.push(1);
                  var n = [],
                    i = [],
                    a = [];
                  for (var r in t.resultData) 'country' === r ? delete t.resultData[r] : n.push([t.resultData[r].active_weight, r]);
                  n
                    .sort(function (t, e) {
                      return e[0] - t[0];
                    })
                    .forEach(function (e) {
                      t.weightarr.push(e[0]);
                    }),
                    n.forEach(function (e) {
                      e[0] <= 0 ? a.push(e) : ((t.showlowname = !1), i.push(e));
                    }),
                    t.showlowname
                      ? (t.higharr = a.sort(function (t, e) {
                          return t[0] - e[0];
                        }))
                      : (t.higharr = i.sort(function (t, e) {
                          return e[0] - t[0];
                        })),
                    t.higharr.length >= 3 && (t.higharr = t.higharr.slice(0, 3));
                  for (var s = [], r = 0; r < t.higharr.length; r++) s.push(t.stylename[t.higharr[r][1]]);
                  (t.highname = s.join('、')),
                    t.isRunning
                      ? t.$store.commit({ type: 'getAllLoadingShow', data: 7 })
                      : t.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                    t._updateChart();
                }
              },
              resulterror: function (e) {
                t.$emit('hand-stop-click'),
                  r.warningTip(e.errormsg),
                  null !== t.loopFlag && (clearInterval(t.loopFlag), (t.loopFlag = null));
              },
            });
          },
          _getBigData: function () {
            var t = this,
              e = { backtestid: this.backtestid, type: 'barra_exposure_detail', begin_date: this.startDate, end_date: this.endDate };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: e,
              success: function (e) {
                if (null !== e) {
                  t.resultBigData = e;
                  for (var n in t.resultBigData) 'country' === n && delete t.resultBigData[n];
                  t.compdatashow.push(2),
                    t.isRunning
                      ? t.$store.commit({ type: 'getAllLoadingShow', data: 8 })
                      : t.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                    t._updateBigChart();
                }
              },
              resulterror: function (e) {
                t.$emit('hand-stop-click'),
                  r.warningTip(e.errormsg),
                  null !== t.loopFlag && (clearInterval(t.loopFlag), (t.loopFlag = null));
              },
            });
          },
          _initChart: function () {
            var t = this;
            null !== window.chartComp && (window.chartComp.destroy(), (window.chartComp = null)),
              Highcharts.wrap(Highcharts.Axis.prototype, 'getPlotBandPath', function (t) {
                var e = t.apply(this, Array.prototype.slice.call(arguments, 1));
                return e && (e.flat = !1), e;
              }),
              (window.chartComp = Highcharts.chart('compChart', {
                credits: { text: '' },
                title: { text: '', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 450, type: 'column', inverted: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: { floating: !0, align: 'right', verticalAlign: 'top', symbolRadius: 0, x: 0, y: -15 },
                plotOptions: {
                  column: {
                    dataLabels: {
                      enabled: !0,
                      allowOverlap: !0,
                      formatter: function () {
                        return this.y.toFixed(2);
                      },
                    },
                  },
                  series: {
                    cursor: 'pointer',
                    events: {
                      click: function (e) {
                        t._updateBigChart(t.reStylename[e.point.category]), (t.bigchartshow = !0);
                      },
                      mouseOver: function () {
                        t.historydatashow = !0;
                      },
                      mouseOut: function () {
                        t.historydatashow = !1;
                      },
                    },
                  },
                },
                yAxis: { title: { text: '' } },
                xAxis: { plotBands: [], offset: 40 },
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(t.y).toFixed(2) +
                            '</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initBigChart: function () {
            null !== o && (o.destroy(), (o = null)),
              (o = Highcharts.stockChart('bigchart', {
                chart: { type: 'spline', height: 450 },
                credits: { enabled: !1 },
                rangeSelector: { enabled: !1 },
                yAxis: {},
                xAxis: {
                  labels: { enabled: !0 },
                  startOnTick: !0,
                  endOnTick: !0,
                  gridLineWidth: 1,
                  dateTimeLabelFormats: {
                    millisecond: '%Y%m%d',
                    second: '%Y%m%d',
                    minute: '%Y%m%d',
                    hour: '%Y%m%d',
                    day: '%Y%m%d',
                    week: '%Y%m%d',
                    month: '%Y%m%d',
                    year: '%Y%m%d',
                  },
                  tickLength: 0,
                  tickWidth: 0,
                },
                navigator: { enabled: !0 },
                scrollbar: { enabled: !0 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [],
                      n = Highcharts.dateFormat('%Y-%m-%d', this.x);
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' + n + '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
                title: { text: '能量指标历史变化' },
                legend: { align: 'right', verticalAlign: 'top', y: -6, enabled: !0, margin: 2 },
                plotOptions: { series: { states: {}, marker: { fillColor: '#fff', lineWidth: 1, lineColor: null, radius: 3 } } },
              }));
          },
          shutchart: function () {
            this.bigchartshow = !1;
          },
          _updateChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [],
              s = [];
            for (var o in this.resultData) 'country' === o ? delete this.resultData[o] : s.push([this.resultData[o], o]);
            s
              .sort(function (t, e) {
                return e[0].active_weight - t[0].active_weight;
              })
              .forEach(function (e) {
                var n = e[0];
                a.push({ y: n.weight }), r.push({ y: n.bench_weight }), i.push(t.stylename[e[1]]);
              }),
              e.push({ name: '策略组合', color: '#ea7279', data: a }, { name: '基准组合', color: '#5ab1ef', data: r });
            for (var l in e) {
              var c = !1;
              for (n in window.chartComp.series)
                if (window.chartComp.series[n] && e[l].name === window.chartComp.series[n].name) {
                  (c = !0), window.chartComp.series[n].update(e[l]);
                  break;
                }
              c || window.chartComp.addSeries(e[l]);
            }
            window.chartComp.xAxis[0].update({ categories: i, plotBands: this.plotBandsLabels }), window.chartComp.reflow();
          },
          _updateBigChart: function (t) {
            var e = [],
              n = 1,
              i = [],
              a = [],
              r = [],
              l = [];
            l.push([this.resultBigData[t], t]);
            var c = [];
            l.forEach(function (t) {
              var e = t[0];
              for (var n in e)
                -1 === $.inArray(n, c) &&
                  (c.push(n),
                  i.push([new Date(s.changeDateVal(n)).getTime(), e[n].weight]),
                  a.push([new Date(s.changeDateVal(n)).getTime(), e[n].bench_weight]),
                  r.push([new Date(s.changeDateVal(n)).getTime(), e[n].active_weight]));
            }),
              e.push(
                { name: '策略组合暴露度', color: '#ea7279', data: i },
                { name: '基准组合暴露度', color: '#5ab1ef', data: a },
                { name: '主动暴露度', color: '#00f', data: r }
              );
            for (var d in e) {
              var u = !1;
              for (n in o.series)
                if (o.series[n] && e[d].name === o.series[n].name) {
                  (u = !0), o.series[n].update(e[d]);
                  break;
                }
              u || o.addSeries(e[d]);
            }
            o.reflow();
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/style-stability',
    ['require', 'exports', 'module', 'VueAjax', 'VueConfig', 'commonFunc'],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = null,
        o = null,
        l = null;
      n.exports = Vue.extend({
        template:
          '<div class="stability"><div class="stabheader"><div class="styleheader"><span></span><span>风格稳定性</span><span></span></div></div><div class="stabbody"><div class="box"><div id="stabChart_l" class="stabChart_l"></div></div><div class="box"><div id="stabChart_m" class="stabChart_m"></div></div><div class="box"><div id="stabChart_r" class="stabChart_r"></div></div></div><div class="data_recall nodata zUIpanel1" v-show="stabdatashow"><div id="main_loading_blue" class="main-loadingbox main-loadingbox-blue"><div class="loading-container"><div class="loading-part part1"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part2"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div><div class="loading-part part4"><div class="circle circle1"></div><div class="circle circle2"></div><div class="circle circle3"></div><div class="circle circle4"></div></div></div><div class="loading-text">获取数据中……</div><div class="loading-text" style="font-size: 16px;" v-show="firstTipError">(首次计算所需时间较长，可稍后访问)</div></div></div></div>',
        components: {},
        data: function () {
          return {
            loopFlag: null,
            loopornot: !0,
            stylename: {
              beta: 'beta',
              bp: '价值',
              earnings_yield: '盈利能力',
              growth: '成长能力',
              industry: '行业',
              leverage: '杠杆率',
              liquidity: '流动性',
              momentum: '动量',
              non_linear_size: '非线性市值',
              size: '市值',
              volatility: '波动率',
            },
            resultData: {},
            stabdatashow: !1,
          };
        },
        props: ['backtestid', 'startDate', 'endDate', 'isRunning'],
        computed: {
          firstTipError: function () {
            return this.$store.state.firstTipError;
          },
          isKeepLoading: function () {
            return this.$store.state.isKeepLoading;
          },
          allLoadingShow: function () {
            return this.$store.state.allloadingshow;
          },
          mystabdatashow: function () {
            return this.stabdatashow;
          },
        },
        watch: {
          allLoadingShow: function (t) {
            var e = this;
            1 === t.length && -1 !== $.inArray(0, this.allLoadingShow) && (this.loopornot = !0),
              0 === t.length && (clearInterval(this.loopFlag), (this.loopFlag = null)),
              this.loopornot && this.isRunning
                ? ((this.stabdatashow = !0),
                  null === this.loopFlag &&
                    (this.loopFlag = setInterval(function () {
                      e._getStabData(), e._initChartL(), e._initChartM(), e._initChartR();
                    }, 5e3)))
                : (clearInterval(this.loopFlag), (this.loopFlag = null));
          },
        },
        destroyed: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null));
        },
        activated: function () {
          this.isKeepLoading && this.$emit('hand-run-click');
        },
        deactivated: function () {
          null !== this.loopFlag && (clearInterval(this.loopFlag), (this.loopFlag = null), this.$emit('hand-stop-click'));
        },
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t._initChartL(), t._initChartM(), t._initChartR();
          });
        },
        methods: {
          _getStabData: function () {
            var t = this;
            this.stabdatashow = !0;
            var e = { backtestid: this.backtestid, type: 'barra_stability', begin_date: this.startDate, end_date: this.endDate };
            i.jsonp({
              url: a.ajax['backtest-result'].getCombinationData,
              data: e,
              success: function (e) {
                null !== e &&
                  ((t.resultData = e),
                  (t.stabdatashow = !1),
                  t.isRunning
                    ? t.$store.commit({ type: 'getAllLoadingShow', data: 9 })
                    : t.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
                  (t.loopornot = !1),
                  t._updateLeftChart(),
                  t._updateMiddleChart(),
                  t._updateRightChart());
              },
              resulterror: function (e) {
                t.$emit('hand-stop-click'),
                  r.warningTip(e.errormsg),
                  null !== t.loopFlag && (clearInterval(t.loopFlag), (t.loopFlag = null));
              },
            });
          },
          _initChartL: function () {
            null !== s && (s.destroy(), (s = null)),
              (s = Highcharts.chart('stabChart_l', {
                credits: { text: '' },
                title: { text: '主动收益', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 450, type: 'line', polar: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: {},
                plotOptions: { series: { marker: { fillColor: '#fff', lineWidth: 1, lineColor: null, radius: 3 } } },
                yAxis: {
                  labels: { enabled: !1 },
                  gridLineInterpolation: 'polygon',
                  lineWidth: 0,
                  alternateGridColor: '#dededf',
                  tickAmount: 4,
                },
                xAxis: { tickmarkPlacement: 'on', lineWidth: 0 },
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initChartM: function () {
            null !== o && (o.destroy(), (o = null)),
              (o = Highcharts.chart('stabChart_m', {
                credits: { text: '' },
                title: { text: '主动风险', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 450, type: 'line', polar: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: {},
                plotOptions: { series: { marker: { fillColor: '#fff', lineWidth: 1, lineColor: null, radius: 3 } } },
                yAxis: {
                  labels: { enabled: !1 },
                  gridLineInterpolation: 'polygon',
                  lineWidth: 0,
                  alternateGridColor: '#dededf',
                  tickAmount: 4,
                },
                xAxis: { tickmarkPlacement: 'on', lineWidth: 0 },
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(100 * t.y).toFixed(2) +
                            '%</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _initChartR: function () {
            null !== l && (l.destroy(), (l = null)),
              (l = Highcharts.chart('stabChart_r', {
                credits: { text: '' },
                title: { text: '主动暴露度', style: { fontSize: 14, fontWeight: 'bold', y: 10 } },
                chart: { height: 450, type: 'line', polar: !0 },
                rangeSelector: { enabled: !1 },
                scrollbar: { enabled: !1 },
                legend: {},
                plotOptions: { series: { marker: { fillColor: '#fff', lineWidth: 1, lineColor: null, radius: 3 } } },
                yAxis: {
                  labels: { enabled: !1 },
                  gridLineInterpolation: 'polygon',
                  lineWidth: 0,
                  alternateGridColor: '#dededf',
                  tickAmount: 4,
                },
                xAxis: { tickmarkPlacement: 'on', lineWidth: 0 },
                navigator: { enabled: !1 },
                tooltip: {
                  shared: !0,
                  valueDecimals: 2,
                  valueSuffix: '%',
                  followPointer: !0,
                  formatter: function () {
                    var t = this.points,
                      e = [];
                    return (
                      e.push(
                        '<b><span style = "color: #333;font-size:13px; line-height: 18px;"><span style="">' +
                          this.x +
                          '</span> <span></b><br/>'
                      ),
                      t.forEach(function (t) {
                        if (!t) return !1;
                        e.push(
                          '<span style="color:' +
                            t.color +
                            '; line-height: 18px;">' +
                            t.series.name +
                            '：<span style="font-weight:700">' +
                            Number(t.y).toFixed(2) +
                            '</span></span><br>'
                        );
                      }),
                      e.join('')
                    );
                  },
                },
              }));
          },
          _updateLeftChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [],
              o = [],
              l = [],
              c = [];
            for (var d in this.resultData) 'country' === d ? delete this.resultData[d] : c.push([this.resultData[d], d]);
            var u = [];
            c.forEach(function (e) {
              var n = e[0];
              for (var s in n)
                u.push(s),
                  (u = Array.from(new Set(u))),
                  s === u[0]
                    ? a.push({ y: n[s].active_ret })
                    : s === u[1]
                    ? r.push({ y: n[s].active_ret })
                    : s === u[2]
                    ? o.push({ y: n[s].active_ret })
                    : l.push({ y: n[s].active_ret });
              i.push(t.stylename[e[1]]);
            }),
              1 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a })
                : 2 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a }, { name: u[1], color: '#61b4ef', data: r })
                : 3 === u.length
                ? e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: o }
                  )
                : e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: o },
                    { name: u[3], color: '#b6a2de', data: l }
                  );
            for (var p in e) {
              var f = !1;
              for (n in s.series)
                if (s.series[n] && e[p].name === s.series[n].name) {
                  (f = !0), s.series[n].update(e[p]);
                  break;
                }
              f || s.addSeries(e[p]);
            }
            s.xAxis[0].update({ categories: i }), s.reflow();
          },
          _updateMiddleChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [],
              s = [],
              l = [],
              c = [];
            for (var d in this.resultData) 'country' === d ? delete this.resultData[d] : c.push([this.resultData[d], d]);
            var u = [];
            c.forEach(function (e) {
              var n = e[0];
              for (var o in n)
                u.push(o),
                  (u = Array.from(new Set(u))),
                  o === u[0]
                    ? a.push({ y: n[o].active_risk })
                    : o === u[1]
                    ? r.push({ y: n[o].active_risk })
                    : o === u[2]
                    ? s.push({ y: n[o].active_risk })
                    : l.push({ y: n[o].active_risk });
              i.push(t.stylename[e[1]]);
            }),
              1 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a })
                : 2 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a }, { name: u[1], color: '#61b4ef', data: r })
                : 3 === u.length
                ? e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: s }
                  )
                : e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: s },
                    { name: u[3], color: '#b6a2de', data: l }
                  );
            for (var p in e) {
              var f = !1;
              for (n in o.series)
                if (o.series[n] && e[p].name === o.series[n].name) {
                  (f = !0), o.series[n].update(e[p]);
                  break;
                }
              f || o.addSeries(e[p]);
            }
            o.xAxis[0].update({ categories: i }), o.reflow();
          },
          _updateRightChart: function () {
            var t = this,
              e = [],
              n = 1,
              i = [],
              a = [],
              r = [],
              s = [],
              o = [],
              c = [];
            for (var d in this.resultData) 'country' === d ? delete this.resultData[d] : c.push([this.resultData[d], d]);
            var u = [];
            c.forEach(function (e) {
              var n = e[0];
              for (var l in n)
                u.push(l),
                  (u = Array.from(new Set(u))),
                  l === u[0]
                    ? a.push({ y: n[l].active_weight })
                    : l === u[1]
                    ? r.push({ y: n[l].active_weight })
                    : l === u[2]
                    ? s.push({ y: n[l].active_weight })
                    : o.push({ y: n[l].active_weight });
              i.push(t.stylename[e[1]]);
            }),
              1 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a })
                : 2 === u.length
                ? e.push({ name: u[0], color: '#e17279', data: a }, { name: u[1], color: '#61b4ef', data: r })
                : 3 === u.length
                ? e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: s }
                  )
                : e.push(
                    { name: u[0], color: '#e17279', data: a },
                    { name: u[1], color: '#61b4ef', data: r },
                    { name: u[2], color: '#f8a45f', data: s },
                    { name: u[3], color: '#b6a2de', data: o }
                  );
            for (var p in e) {
              var f = !1;
              for (n in l.series)
                if (l.series[n] && e[p].name === l.series[n].name) {
                  (f = !0), l.series[n].update(e[p]);
                  break;
                }
              f || l.addSeries(e[p]);
            }
            l.xAxis[0].update({ categories: i }), l.reflow();
          },
        },
      });
    }
  ),
  define(
    '../components/backtest-result/combination-attribution/combination-attribution',
    [
      'require',
      'exports',
      'module',
      'VueAjax',
      'VueConfig',
      'commonFunc',
      'datemethod',
      './income-decomposition',
      './attributable-dismantling',
      './style-attribution',
      './style-comparison',
      './style-stability',
    ],
    function (t, e, n) {
      var i = t('VueAjax'),
        a = t('VueConfig'),
        r = t('commonFunc'),
        s = t('datemethod'),
        o = t('./income-decomposition'),
        l = t('./attributable-dismantling'),
        c = t('./style-attribution'),
        d = t('./style-comparison'),
        u = t('./style-stability');
      n.exports = Vue.extend({
        template:
          '<div class="container"><div class="comheader"><div class="runcal r" @click="handRunClick(1)" v-if="(allLoadingShow.length === 10 || allLoadingShow.length === 0)">运行计算</div><div class="cancal r" @click="handStopClick(1)" v-else="">取消计算</div><div class="timesection r">时间区间：<input type="text" v-model="startdate" id="customcode_backrepottbox_startDate"><span> - </span><input type="text" v-model="enddate" id="customcode_backrepottbox_endDate"></div><div class="benchmark r">基准：<span>{{benchmark}}</span></div><br><p class="r">注：多期分析使用Carino简化因子调整</p></div><keep-alive><income-decomposition :backtestid="backtestid" :start-date="startdate" :end-date="enddate" :is-running="running" v-show="running" @hand-stop-click="handStopClick" @hand-run-click="handRunClick"></income-decomposition></keep-alive><keep-alive><attributable-dismantling :backtestid="backtestid" :start-date="startdate" :end-date="enddate" :is-running="running" v-show="running" @hand-stop-click="handStopClick" @hand-run-click="handRunClick"></attributable-dismantling></keep-alive><keep-alive><attribution-style :backtestid="backtestid" :start-date="startdate" :end-date="enddate" :is-running="running" v-show="running" @hand-stop-click="handStopClick" @hand-run-click="handRunClick"></attribution-style></keep-alive><keep-alive><comparison-style :backtestid="backtestid" :start-date="startdate" :end-date="enddate" :is-running="running" v-show="running" @hand-stop-click="handStopClick" @hand-run-click="handRunClick"></comparison-style></keep-alive><keep-alive><stability-style :backtestid="backtestid" :start-date="startdate" :end-date="enddate" :is-running="running" v-show="running" @hand-stop-click="handStopClick" @hand-run-click="handRunClick"></stability-style></keep-alive><div style="position: absolute; width: calc(100% - 60px); height: calc(100% - 65px); top: 65px; background: #fff;" v-if="!running"><p style="text-align: center; margin-top: 60px;">请点击运行计算，获取归因分析结果。</p></div></div>',
        components: {
          'income-decomposition': o,
          'attributable-dismantling': l,
          'attribution-style': c,
          'comparison-style': d,
          'stability-style': u,
        },
        data: function () {
          return {
            benchmarkname: {
              '000300.SH': '沪深300',
              '000001.SH': '上证指数',
              '000905.SH': '中证500',
              '000906.SH': '中证800',
              '399001.SZ': '深证成指',
              '399006.SZ': '创业板',
            },
            startdate: '',
            enddate: '',
            benchmark: '',
            running: !1,
            backtestid: '',
          };
        },
        computed: {
          allLoadingShow: function () {
            return Array.from(new Set(this.$store.state.allloadingshow));
          },
        },
        watch: {
          allLoadingShow: function (t) {
            10 === t.length && this.$store.commit({ type: 'getIsKeepLoading', data: !1 });
          },
        },
        destroyed: function () {
          (this.running = !1), this.$store.commit({ type: 'resetAllLoadingShow', data: [] });
        },
        beforeMount: function () {
          this.backtestid = r.getUrlParam(window.location, 'id');
        },
        mounted: function () {
          this.renderTop();
          var t = this,
            e = { backTestId: this.backtestid };
          i.jsonp({
            url: a.ajax['backtest-result'].getStrategysInfo,
            data: e,
            success: function (e) {
              (t.startdate = e.begin_date),
                (t.enddate = e.end_date),
                (t.benchmark = e.hasOwnProperty('benchmark') ? t.showBenchmarkname(e.benchmark) : '沪深300');
              var n = { backtestid: t.backtestid, type: 'check_init', begin_date: t.startdate, end_date: t.enddate };
              i.jsonp({
                url: a.ajax['backtest-result'].getCombinationData,
                data: n,
                success: function (e) {
                  t.handRunClick(), t.$store.commit({ type: 'getFirstTipError', data: !1 });
                },
                resulterror: function (e) {
                  301 === e.errorcode
                    ? t.$store.commit({ type: 'getFirstTipError', data: !0 })
                    : 200 !== e.errorcode
                    ? r.warningTip(e.errormsg)
                    : (t.$store.commit({ type: 'getFirstTipError', data: !1 }), t.handRunClick());
                },
              });
            },
            resulterror: function (t) {
              r.warningTip(t.errormsg);
            },
          });
        },
        methods: {
          renderTop: function () {
            var t = this,
              e = $('#customcode_backrepottbox_startDate'),
              n = $('#customcode_backrepottbox_endDate'),
              i = function (t) {
                return t < 10 ? ('0' + t).toString() : t;
              };
            e.unbind('click').click(function () {
              new WdatePicker({
                maxDate: "#F{$dp.$D('customcode_backrepottbox_endDate')}",
                minDate: '2005-01-01',
                startDate: '%y-$M-%d',
                onpicked: function (e) {
                  t.startdate = $(this).val();
                },
                ychanged: function (e) {
                  t.startdate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                },
                Mchanged: function (e) {
                  t.startdate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                },
                dchanged: function (e) {
                  t.startdate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                },
              });
            }),
              n.unbind('click').click(function () {
                new WdatePicker({
                  minDate: "#F{$dp.$D('customcode_backrepottbox_startDate', {d: 1})}",
                  maxDate: s.getYesterday(),
                  startDate: '%y-$M-%d',
                  onpicked: function (e) {
                    t.enddate = $(this).val();
                  },
                  ychanged: function (e) {
                    t.enddate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                  },
                  Mchanged: function (e) {
                    t.enddate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                  },
                  dchanged: function (e) {
                    t.enddate = $dp.cal.date.y + '-' + i($dp.cal.date.M) + '-' + $dp.cal.date.d;
                  },
                });
              });
          },
          handRunClick: function (t) {
            1 === t && this.$store.commit({ type: 'getIsKeepLoading', data: !0 }),
              (this.running = !0),
              this.$store.commit({ type: 'resetAllLoadingShow', data: [] }),
              this.$store.commit({ type: 'getAllLoadingShow', data: 0 });
          },
          handStopClick: function (t) {
            var e = this,
              n = { backtestid: this.backtestid };
            i.jsonp({
              url: a.ajax['backtest-result'].cancelCombination,
              data: n,
              success: function (n) {
                1 === t && (e.$store.commit({ type: 'getIsKeepLoading', data: !1 }), r.tip('取消成功')),
                  (e.running = !1),
                  e.$store.commit({ type: 'resetAllLoadingShow', data: [] });
              },
              resulterror: function (t) {
                r.warningTip(t.errormsg);
              },
            });
          },
          showBenchmarkname: function (t) {
            switch (t) {
              case '000300.SH':
                return '沪深300';
              case '000001.SH':
                return '上证指数';
              case '000905.SH':
                return '中证500';
              case '000906.SH':
                return '中证800';
              case '399001.SZ':
                return '深证成指';
              case '399006.SZ':
                return '创业板';
              default:
                return '沪深300';
            }
          },
        },
      });
    }
  ),
  define(
    '../router/backtest-result',
    [
      '../components/backtest-result/revenue-overview/revenue-overview',
      '../components/backtest-result/transaction-detail/transaction-detail',
      '../components/backtest-result/daily-position/daily-position',
      '../components/backtest-result/out-logs/out-logs',
      '../components/backtest-result/profit/profit',
      '../components/backtest-result/alpha/alpha',
      '../components/backtest-result/beta/beta',
      '../components/backtest-result/sharpe/sharpe',
      '../components/backtest-result/sortino/sortino',
      '../components/backtest-result/information-ratio/information-ratio',
      '../components/backtest-result/volatility/volatility',
      '../components/backtest-result/maximum-withdrawal/maximum-withdrawal',
      '../components/backtest-result/attribution-analysis/attribution-analysis',
      '../components/backtest-result/combination-attribution/combination-attribution',
    ],
    function (t, e, n, i, a, r, s, o, l, c, d, u, p, f) {
      Vue.use(VueRouter);
      var h = [
        { path: '/', component: t },
        { path: '/transactionDetail', component: e },
        { path: '/dailyPosition', component: n },
        { path: '/outLogs', component: i },
        {
          path: '/profit',
          component: a,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/alpha',
          component: r,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/beta',
          component: s,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/sharpe',
          component: o,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/sortino',
          component: l,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/informationRatio',
          component: c,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/volatility',
          component: d,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/maximumWithdrawal',
          component: u,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/attributionAnalysis',
          component: p,
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
        {
          path: '/combinationAttribution',
          component: f,
          meta: { keepAlive: !0 },
          beforeEnter: function (t, e, n) {
            if (+sessionStorage.getItem('isDoingBackTest')) return !1;
            n();
          },
        },
      ];
      return new VueRouter({ routes: h });
    }
  ),
  define('../components/common/dialog', ['require', 'exports', 'module'], function (t, e, n) {
    n.exports = Vue.extend({
      template:
        '<transition name="dialog-fade"><div v-show="visible"><div class="v-modal"></div><div class="dialog-wrapper" @click.self="handleWrapperClick"><div class="popbox plugin-dialog" :class="[sizeClass, customClass]" ref="dialog" :style="style"><div class="el-dialog__header"><div class="icon popbox-btn-close" v-if="showClose" @click="handleClose"></div><div class="popbox-title"><slot name="title"><div class="text">{{title}}</div></slot></div></div><div class="popbox-container" :class="[customContainerClass]" v-if="rendered" @scroll="scrollEvent($event)"><slot></slot></div><div class="popbox-footer plugin-dialog-footer" v-if="$slots.footer"><slot name="footer"></slot></div></div></div></div></transition>',
      data: function () {
        return { opened: !1, bodyOverflow: null, bodyPaddingRight: null, rendered: !0 };
      },
      props: {
        visible: { type: Boolean, default: !1 },
        title: { type: String, default: '' },
        modal: { type: Boolean, default: !0 },
        modalAppendToBody: { type: Boolean, default: !0 },
        lockScroll: { type: Boolean, default: !0 },
        closeOnClickModal: { type: Boolean, default: !0 },
        closeOnPressEscape: { type: Boolean, default: !0 },
        showClose: { type: Boolean, default: !0 },
        size: { type: String, default: 'tiny' },
        customClass: { type: String, default: '' },
        customContainerClass: { type: String, default: '' },
        top: { type: String, default: '15%' },
        beforeClose: Function,
        containerScrollEvent: Function,
      },
      watch: {
        visible: function (t) {
          if ((this.$emit('update:visible', t), t))
            this.$emit('open'),
              this.$nextTick(function () {
                this.$refs.dialog.scrollTop = 0;
              }),
              this.lockScroll &&
                (this.bodyOverflow ||
                  ((this.bodyPaddingRight = document.body.style.paddingRight), (this.bodyOverflow = document.body.style.overflow)),
                (document.body.style.overflow = 'hidden'));
          else {
            if (this.lockScroll) {
              var e = this;
              setTimeout(function () {
                e.modal &&
                  'hidden' !== e.bodyOverflow &&
                  ((document.body.style.overflow = e.bodyOverflow), (document.body.style.paddingRight = e.bodyPaddingRight)),
                  (e.bodyOverflow = null),
                  (e.bodyPaddingRight = null);
              }, 200);
            }
            this.$emit('close');
          }
        },
      },
      computed: {
        sizeClass: function () {
          return 'el-dialog--' + this.size;
        },
        style: function () {
          return 'full' === this.size ? {} : { top: this.top };
        },
      },
      methods: {
        handleWrapperClick: function () {
          this.closeOnClickModal && this.handleClose();
        },
        handleClose: function () {
          'function' == typeof this.beforeClose ? this.beforeClose(this.hide) : this.hide();
        },
        hide: function (t) {
          !1 !== t && (this.$emit('update:visible', !1), this.$emit('visible-change', !1));
        },
        updatePopper: function () {},
        open: function (t) {
          this.rendered || ((this.rendered = !0), this.$emit('visible-change', !0));
        },
        scrollEvent: function (t) {
          'function' == typeof this.containerScrollEvent && this.containerScrollEvent(t);
        },
      },
      mounted: function () {
        this.visible && ((this.rendered = !0), this.open());
      },
    });
  }),
  define('../components/common/pager', ['require', 'exports', 'module'], function (t, e, n) {
    n.exports = Vue.extend({
      name: 'ElPager',
      template:
        '<div @click="onPagerClick" class="box-group"><div :class="{ \'box-active\': currentPage === 1 }" v-if="pageCount > 0" class="box box-page">1</div><div class="box-ellipsis el-icon more btn-quickprev" :class="[quickprevIconClass]" v-if="showPrevMore" @mouseenter="quickprevIconClass = \'el-icon-d-arrow-left\'" @mouseleave="quickprevIconClass = \'el-icon-more\'">...</div><div v-for="pager in pagers" :class="{ \'box-active\': currentPage === pager }" class="box box-page">{{ pager }}</div><div class="box-ellipsis el-icon more btn-quicknext" :class="[quicknextIconClass]" v-if="showNextMore" @mouseenter="quicknextIconClass = \'el-icon-d-arrow-right\'" @mouseleave="quicknextIconClass = \'el-icon-more\'">...</div><div :class="{ \'box-active\': currentPage === pageCount }" class="box box-page" v-if="pageCount > 1">{{ pageCount }}</div></div>',
      data: function () {
        return {
          current: null,
          showPrevMore: !1,
          showNextMore: !1,
          quicknextIconClass: 'el-icon-more',
          quickprevIconClass: 'el-icon-more',
        };
      },
      props: { currentPage: Number, pageCount: Number },
      watch: {
        showPrevMore: function (t) {
          t || (this.quickprevIconClass = 'el-icon-more');
        },
        showNextMore: function (t) {
          t || (this.quicknextIconClass = 'el-icon-more');
        },
      },
      computed: {
        pagers: function () {
          var t = Number(this.currentPage),
            e = Number(this.pageCount),
            n = !1,
            i = !1;
          e > 7 && (t > 4 && (n = !0), t < e - 3 && (i = !0));
          var a = [];
          if (n && !i) for (var r = e - 5, s = r; s < e; s++) a.push(s);
          else if (!n && i) for (var s = 2; s < 7; s++) a.push(s);
          else if (n && i) for (var o = Math.floor(3.5) - 1, s = t - o; s <= t + o; s++) a.push(s);
          else for (var s = 2; s < e; s++) a.push(s);
          return (this.showPrevMore = n), (this.showNextMore = i), a;
        },
      },
      methods: {
        onPagerClick: function (t) {
          var e = t.target;
          if ('UL' !== e.tagName) {
            var n = Number(t.target.textContent),
              i = this.pageCount,
              a = this.currentPage;
            -1 !== e.className.indexOf('more') &&
              (-1 !== e.className.indexOf('quickprev') ? (n = a - 5) : -1 !== e.className.indexOf('quicknext') && (n = a + 5)),
              isNaN(n) || (n < 1 && (n = 1), n > i && (n = i)),
              n !== a && this.$emit('change', n);
          }
        },
      },
    });
  }),
  define('../components/common/pagination', ['require', 'exports', 'module', './pager'], function (t, e, n) {
    var i = t('./pager');
    n.exports = Vue.extend({
      name: 'ElPagination',
      template:
        '<div class="paginationbox" v-if="total > 1">\x3c!-- <prev></prev> --\x3e<div type="button" class="box box-page" :class="{ disabled: internalCurrentPage <= 1 }" @click="prev">＜</div>\x3c!-- <prev></prev> --\x3e<pager :current-page="internalCurrentPage" :page-count="internalPageCount" v-on:change="handleCurrentChange"></pager>\x3c!-- <next></next> --\x3e<div type="button" class="box box-page" :class="{ disabled: internalCurrentPage === internalPageCount || internalPageCount === 0 }" @click="next">＞</div>\x3c!-- <next></next> --\x3e\x3c!-- <jumper></jumper> --\x3e<span class="page-goto-title">GO</span><div class="box-input"><input type="text" class="goto_page" :value="internalCurrentPage" v-on:change="gotoPage($event)"></div>\x3c!-- <jumper></jumper> --\x3e\x3c!-- <sizes :pageSizes="pageSizes"></sizes> --\x3e\x3c!-- <my-slot></my-slot> --\x3e<slot name="myslot"></slot>\x3c!-- <my-slot></my-slot> --\x3e\x3c!-- <total></total> --\x3e<div class="box-total">共&nbsp;{{ total }}&nbsp;条</div>\x3c!-- <total></total> --\x3e</div>',
      data: function () {
        return { internalCurrentPage: 1, internalPageSize: 0 };
      },
      props: {
        pageSize: { type: Number, default: 10 },
        small: Boolean,
        total: Number,
        pageCount: Number,
        currentPage: { type: Number, default: 1 },
        layout: { default: 'prev, pager, next, jumper, ->, total' },
        pageSizes: {
          type: Array,
          default: function () {
            return [10, 20, 30, 40, 50, 100];
          },
        },
      },
      components: { pager: i },
      methods: {
        handleCurrentChange: function (t) {
          this.internalCurrentPage = this.getValidCurrentPage(t);
        },
        prev: function () {
          var t = this.internalCurrentPage - 1;
          this.internalCurrentPage = this.getValidCurrentPage(t);
        },
        next: function () {
          var t = this.internalCurrentPage + 1;
          this.internalCurrentPage = this.getValidCurrentPage(t);
        },
        getValidCurrentPage: function (t) {
          t = parseInt(t, 10);
          var e,
            n = 'number' == typeof this.internalPageCount;
          return (
            n ? (t < 1 ? (e = 1) : t > this.internalPageCount && (e = this.internalPageCount)) : (isNaN(t) || t < 1) && (e = 1),
            void 0 === e && isNaN(t) ? (e = 1) : 0 === e && (e = 1),
            void 0 === e ? t : e
          );
        },
        gotoPage: function (t) {
          t.target.value = this.internalCurrentPage = this.getValidCurrentPage(t.target.value);
        },
      },
      computed: {
        internalPageCount: function () {
          return 'number' == typeof this.total
            ? Math.ceil(this.total / this.internalPageSize)
            : 'number' == typeof this.pageCount
            ? this.pageCount
            : null;
        },
      },
      watch: {
        currentPage: {
          immediate: !0,
          handler: function (t) {
            this.internalCurrentPage = t;
          },
        },
        pageSize: {
          immediate: !0,
          handler: function (t) {
            this.internalPageSize = t;
          },
        },
        internalCurrentPage: function (t, e) {
          (t = parseInt(t, 10)),
            (t = isNaN(t) ? e || 1 : this.getValidCurrentPage(t)),
            void 0 !== t
              ? this.$nextTick(function () {
                  (this.internalCurrentPage = t),
                    e !== t && (this.$emit('update:currentPage', t), this.$emit('current-change', this.internalCurrentPage));
                })
              : (this.$emit('update:currentPage', t), this.$emit('current-change', this.internalCurrentPage));
        },
        internalPageCount: function (t) {
          var e = this.internalCurrentPage;
          t > 0 && 0 === e ? (this.internalCurrentPage = 1) : e > t && (this.internalCurrentPage = 0 === t ? 1 : t);
        },
      },
    });
  }),
  (function (t, e) {
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = e())
      : 'function' == typeof define && define.amd
      ? define('Vue', e)
      : (t.Vue = e());
  })(this, function () {
    'use strict';
    function t(t) {
      return void 0 === t || null === t;
    }
    function e(t) {
      return void 0 !== t && null !== t;
    }
    function n(t) {
      return !0 === t;
    }
    function i(t) {
      return 'string' == typeof t || 'number' == typeof t;
    }
    function a(t) {
      return null !== t && 'object' == typeof t;
    }
    function r(t) {
      return '[object Object]' === Oa.call(t);
    }
    function s(t) {
      return '[object RegExp]' === Oa.call(t);
    }
    function o(t) {
      return null == t ? '' : 'object' == typeof t ? JSON.stringify(t, null, 2) : String(t);
    }
    function l(t) {
      var e = parseFloat(t);
      return isNaN(e) ? t : e;
    }
    function c(t, e) {
      for (var n = Object.create(null), i = t.split(','), a = 0; a < i.length; a++) n[i[a]] = !0;
      return e
        ? function (t) {
            return n[t.toLowerCase()];
          }
        : function (t) {
            return n[t];
          };
    }
    function d(t, e) {
      if (t.length) {
        var n = t.indexOf(e);
        if (n > -1) return t.splice(n, 1);
      }
    }
    function u(t, e) {
      return Ba.call(t, e);
    }
    function p(t) {
      var e = Object.create(null);
      return function (n) {
        return e[n] || (e[n] = t(n));
      };
    }
    function f(t, e) {
      function n(n) {
        var i = arguments.length;
        return i ? (i > 1 ? t.apply(e, arguments) : t.call(e, n)) : t.call(e);
      }
      return (n._length = t.length), n;
    }
    function h(t, e) {
      e = e || 0;
      for (var n = t.length - e, i = new Array(n); n--; ) i[n] = t[n + e];
      return i;
    }
    function v(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function m(t) {
      for (var e = {}, n = 0; n < t.length; n++) t[n] && v(e, t[n]);
      return e;
    }
    function g() {}
    function b(t, e) {
      var n = a(t),
        i = a(e);
      if (!n || !i) return !n && !i && String(t) === String(e);
      try {
        return JSON.stringify(t) === JSON.stringify(e);
      } catch (n) {
        return t === e;
      }
    }
    function y(t, e) {
      for (var n = 0; n < t.length; n++) if (b(t[n], e)) return n;
      return -1;
    }
    function x(t) {
      var e = !1;
      return function () {
        e || ((e = !0), t.apply(this, arguments));
      };
    }
    function w(t) {
      var e = (t + '').charCodeAt(0);
      return 36 === e || 95 === e;
    }
    function _(t, e, n, i) {
      Object.defineProperty(t, e, { value: n, enumerable: !!i, writable: !0, configurable: !0 });
    }
    function k(t) {
      if (!Qa.test(t)) {
        var e = t.split('.');
        return function (t) {
          for (var n = 0; n < e.length; n++) {
            if (!t) return;
            t = t[e[n]];
          }
          return t;
        };
      }
    }
    function T(t, e, n) {
      if (Xa.errorHandler) Xa.errorHandler.call(null, t, e, n);
      else {
        if ((Za('Error in ' + n + ': "' + t.toString() + '"', e), !lr || 'undefined' == typeof console)) throw t;
        console.error(t);
      }
    }
    function C(t) {
      return 'function' == typeof t && /native code/.test(t.toString());
    }
    function A(t) {
      Cr.target && Ar.push(Cr.target), (Cr.target = t);
    }
    function S() {
      Cr.target = Ar.pop();
    }
    function $(t, e) {
      t.__proto__ = e;
    }
    function L(t, e, n) {
      for (var i = 0, a = n.length; i < a; i++) {
        var r = n[i];
        _(t, r, e[r]);
      }
    }
    function D(t, e) {
      if (a(t)) {
        var n;
        return (
          u(t, '__ob__') && t.__ob__ instanceof Ir
            ? (n = t.__ob__)
            : Dr.shouldConvert && !xr() && (Array.isArray(t) || r(t)) && Object.isExtensible(t) && !t._isVue && (n = new Ir(t)),
          e && n && n.vmCount++,
          n
        );
      }
    }
    function I(t, e, n, i) {
      var a = new Cr(),
        r = Object.getOwnPropertyDescriptor(t, e);
      if (!r || !1 !== r.configurable) {
        var s = r && r.get,
          o = r && r.set,
          l = D(n);
        Object.defineProperty(t, e, {
          enumerable: !0,
          configurable: !0,
          get: function () {
            var e = s ? s.call(t) : n;
            return Cr.target && (a.depend(), l && l.dep.depend(), Array.isArray(e) && F(e)), e;
          },
          set: function (e) {
            var r = s ? s.call(t) : n;
            e === r || (e !== e && r !== r) || (i && i(), o ? o.call(t, e) : (n = e), (l = D(e)), a.notify());
          },
        });
      }
    }
    function P(t, e, n) {
      if (Array.isArray(t) && 'number' == typeof e) return (t.length = Math.max(t.length, e)), t.splice(e, 1, n), n;
      if (u(t, e)) return (t[e] = n), n;
      var i = t.__ob__;
      return t._isVue || (i && i.vmCount)
        ? (Za('Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.'),
          n)
        : i
        ? (I(i.value, e, n), i.dep.notify(), n)
        : ((t[e] = n), n);
    }
    function E(t, e) {
      if (Array.isArray(t) && 'number' == typeof e) return void t.splice(e, 1);
      var n = t.__ob__;
      if (t._isVue || (n && n.vmCount))
        return void Za('Avoid deleting properties on a Vue instance or its root $data - just set it to null.');
      u(t, e) && (delete t[e], n && n.dep.notify());
    }
    function F(t) {
      for (var e = void 0, n = 0, i = t.length; n < i; n++) (e = t[n]), e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && F(e);
    }
    function j(t, e) {
      if (!e) return t;
      for (var n, i, a, s = Object.keys(e), o = 0; o < s.length; o++)
        (n = s[o]), (i = t[n]), (a = e[n]), u(t, n) ? r(i) && r(a) && j(i, a) : P(t, n, a);
      return t;
    }
    function N(t, e) {
      return e ? (t ? t.concat(e) : Array.isArray(e) ? e : [e]) : t;
    }
    function O(t, e) {
      var n = Object.create(t || null);
      return e ? v(n, e) : n;
    }
    function M(t) {
      for (var e in t.components) {
        var n = e.toLowerCase();
        (Ma(n) || Xa.isReservedTag(n)) && Za('Do not use built-in or reserved HTML elements as component id: ' + e);
      }
    }
    function B(t) {
      var e = t.props;
      if (e) {
        var n,
          i,
          a,
          s = {};
        if (Array.isArray(e))
          for (n = e.length; n--; )
            (i = e[n]),
              'string' == typeof i ? ((a = Ha(i)), (s[a] = { type: null })) : Za('props must be strings when using array syntax.');
        else if (r(e)) for (var o in e) (i = e[o]), (a = Ha(o)), (s[a] = r(i) ? i : { type: i });
        t.props = s;
      }
    }
    function R(t) {
      var e = t.directives;
      if (e)
        for (var n in e) {
          var i = e[n];
          'function' == typeof i && (e[n] = { bind: i, update: i });
        }
    }
    function H(t, e, n) {
      function i(i) {
        var a = Pr[i] || jr;
        l[i] = a(t[i], e[i], n, i);
      }
      M(e), 'function' == typeof e && (e = e.options), B(e), R(e);
      var a = e.extends;
      if ((a && (t = H(t, a, n)), e.mixins)) for (var r = 0, s = e.mixins.length; r < s; r++) t = H(t, e.mixins[r], n);
      var o,
        l = {};
      for (o in t) i(o);
      for (o in e) u(t, o) || i(o);
      return l;
    }
    function q(t, e, n, i) {
      if ('string' == typeof n) {
        var a = t[e];
        if (u(a, n)) return a[n];
        var r = Ha(n);
        if (u(a, r)) return a[r];
        var s = qa(r);
        if (u(a, s)) return a[s];
        var o = a[n] || a[r] || a[s];
        return i && !o && Za('Failed to resolve ' + e.slice(0, -1) + ': ' + n, t), o;
      }
    }
    function U(t, e, n, i) {
      var a = e[t],
        r = !u(n, t),
        s = n[t];
      if (
        (J(Boolean, a.type) && (r && !u(a, 'default') ? (s = !1) : J(String, a.type) || ('' !== s && s !== za(t)) || (s = !0)),
        void 0 === s)
      ) {
        s = z(i, a, t);
        var o = Dr.shouldConvert;
        (Dr.shouldConvert = !0), D(s), (Dr.shouldConvert = o);
      }
      return V(a, t, s, i, r), s;
    }
    function z(t, e, n) {
      if (u(e, 'default')) {
        var i = e.default;
        return (
          a(i) &&
            Za(
              'Invalid default value for prop "' +
                n +
                '": Props with type Object/Array must use a factory function to return the default value.',
              t
            ),
          t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n]
            ? t._props[n]
            : 'function' == typeof i && 'Function' !== Y(e.type)
            ? i.call(t)
            : i
        );
      }
    }
    function V(t, e, n, i, a) {
      if (t.required && a) return void Za('Missing required prop: "' + e + '"', i);
      if (null != n || t.required) {
        var r = t.type,
          s = !r || !0 === r,
          o = [];
        if (r) {
          Array.isArray(r) || (r = [r]);
          for (var l = 0; l < r.length && !s; l++) {
            var c = W(n, r[l]);
            o.push(c.expectedType || ''), (s = c.valid);
          }
        }
        if (!s)
          return void Za(
            'Invalid prop: type check failed for prop "' +
              e +
              '". Expected ' +
              o.map(qa).join(', ') +
              ', got ' +
              Object.prototype.toString.call(n).slice(8, -1) +
              '.',
            i
          );
        var d = t.validator;
        d && (d(n) || Za('Invalid prop: custom validator check failed for prop "' + e + '".', i));
      }
    }
    function W(t, e) {
      var n,
        i = Y(e);
      return (
        (n = Nr.test(i) ? typeof t === i.toLowerCase() : 'Object' === i ? r(t) : 'Array' === i ? Array.isArray(t) : t instanceof e),
        { valid: n, expectedType: i }
      );
    }
    function Y(t) {
      var e = t && t.toString().match(/^\s*function (\w+)/);
      return e ? e[1] : '';
    }
    function J(t, e) {
      if (!Array.isArray(e)) return Y(e) === Y(t);
      for (var n = 0, i = e.length; n < i; n++) if (Y(e[n]) === Y(t)) return !0;
      return !1;
    }
    function G(t) {
      return new Vr(void 0, void 0, void 0, String(t));
    }
    function X(t) {
      var e = new Vr(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions);
      return (e.ns = t.ns), (e.isStatic = t.isStatic), (e.key = t.key), (e.isCloned = !0), e;
    }
    function K(t) {
      for (var e = t.length, n = new Array(e), i = 0; i < e; i++) n[i] = X(t[i]);
      return n;
    }
    function Q(t) {
      function e() {
        var t = arguments,
          n = e.fns;
        if (!Array.isArray(n)) return n.apply(null, arguments);
        for (var i = 0; i < n.length; i++) n[i].apply(null, t);
      }
      return (e.fns = t), e;
    }
    function Z(e, n, i, a, r) {
      var s, o, l, c;
      for (s in e)
        (o = e[s]),
          (l = n[s]),
          (c = Gr(s)),
          t(o)
            ? Za('Invalid handler for event "' + c.name + '": got ' + String(o), r)
            : t(l)
            ? (t(o.fns) && (o = e[s] = Q(o)), i(c.name, o, c.once, c.capture, c.passive))
            : o !== l && ((l.fns = o), (e[s] = l));
      for (s in n) t(e[s]) && ((c = Gr(s)), a(c.name, n[s], c.capture));
    }
    function tt(i, a, r) {
      function s() {
        r.apply(this, arguments), d(o.fns, s);
      }
      var o,
        l = i[a];
      t(l) ? (o = Q([s])) : e(l.fns) && n(l.merged) ? ((o = l), o.fns.push(s)) : (o = Q([l, s])), (o.merged = !0), (i[a] = o);
    }
    function et(n, i, a) {
      var r = i.options.props;
      if (!t(r)) {
        var s = {},
          o = n.attrs,
          l = n.props;
        if (e(o) || e(l))
          for (var c in r) {
            var d = za(c),
              p = c.toLowerCase();
            c !== p &&
              o &&
              u(o, p) &&
              tr(
                'Prop "' +
                  p +
                  '" is passed to component ' +
                  er(a || i) +
                  ', but the declared prop name is "' +
                  c +
                  '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' +
                  d +
                  '" instead of "' +
                  c +
                  '".'
              ),
              nt(s, l, c, d, !0) || nt(s, o, c, d, !1);
          }
        return s;
      }
    }
    function nt(t, n, i, a, r) {
      if (e(n)) {
        if (u(n, i)) return (t[i] = n[i]), r || delete n[i], !0;
        if (u(n, a)) return (t[i] = n[a]), r || delete n[a], !0;
      }
      return !1;
    }
    function it(t) {
      for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
      return t;
    }
    function at(t) {
      return i(t) ? [G(t)] : Array.isArray(t) ? rt(t) : void 0;
    }
    function rt(n, a) {
      var r,
        s,
        o,
        l = [];
      for (r = 0; r < n.length; r++)
        (s = n[r]),
          t(s) ||
            'boolean' == typeof s ||
            ((o = l[l.length - 1]),
            Array.isArray(s)
              ? l.push.apply(l, rt(s, (a || '') + '_' + r))
              : i(s)
              ? e(o) && e(o.text)
                ? (o.text += String(s))
                : '' !== s && l.push(G(s))
              : e(s.text) && e(o) && e(o.text)
              ? (l[l.length - 1] = G(o.text + s.text))
              : (e(s.tag) && t(s.key) && e(a) && (s.key = '__vlist' + a + '_' + r + '__'), l.push(s)));
      return l;
    }
    function st(t, e) {
      return a(t) ? e.extend(t) : t;
    }
    function ot(i, r, s) {
      if (n(i.error) && e(i.errorComp)) return i.errorComp;
      if (e(i.resolved)) return i.resolved;
      if (n(i.loading) && e(i.loadingComp)) return i.loadingComp;
      if (!e(i.contexts)) {
        var o = (i.contexts = [s]),
          l = !0,
          c = function () {
            for (var t = 0, e = o.length; t < e; t++) o[t].$forceUpdate();
          },
          d = x(function (t) {
            (i.resolved = st(t, r)), l || c();
          }),
          u = x(function (t) {
            Za('Failed to resolve async component: ' + String(i) + (t ? '\nReason: ' + t : '')), e(i.errorComp) && ((i.error = !0), c());
          }),
          p = i(d, u);
        return (
          a(p) &&
            ('function' == typeof p.then
              ? t(i.resolved) && p.then(d, u)
              : e(p.component) &&
                'function' == typeof p.component.then &&
                (p.component.then(d, u),
                e(p.error) && (i.errorComp = st(p.error, r)),
                e(p.loading) &&
                  ((i.loadingComp = st(p.loading, r)),
                  0 === p.delay
                    ? (i.loading = !0)
                    : setTimeout(function () {
                        t(i.resolved) && t(i.error) && ((i.loading = !0), c());
                      }, p.delay || 200)),
                e(p.timeout) &&
                  setTimeout(function () {
                    u('timeout (' + p.timeout + 'ms)');
                  }, p.timeout))),
          (l = !1),
          i.loading ? i.loadingComp : i.resolved
        );
      }
      i.contexts.push(s);
    }
    function lt(t) {
      if (Array.isArray(t))
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          if (e(i) && e(i.componentOptions)) return i;
        }
    }
    function ct(t) {
      (t._events = Object.create(null)), (t._hasHookEvent = !1);
      var e = t.$options._parentListeners;
      e && pt(t, e);
    }
    function dt(t, e, n) {
      n ? Yr.$once(t, e) : Yr.$on(t, e);
    }
    function ut(t, e) {
      Yr.$off(t, e);
    }
    function pt(t, e, n) {
      (Yr = t), Z(e, n || {}, dt, ut, t);
    }
    function ft(t, e) {
      var n = {};
      if (!t) return n;
      for (var i = [], a = 0, r = t.length; a < r; a++) {
        var s = t[a];
        if ((s.context !== e && s.functionalContext !== e) || !s.data || null == s.data.slot) i.push(s);
        else {
          var o = s.data.slot,
            l = n[o] || (n[o] = []);
          'template' === s.tag ? l.push.apply(l, s.children) : l.push(s);
        }
      }
      return i.every(ht) || (n.default = i), n;
    }
    function ht(t) {
      return t.isComment || ' ' === t.text;
    }
    function vt(t) {
      for (var e = {}, n = 0; n < t.length; n++) e[t[n][0]] = t[n][1];
      return e;
    }
    function mt(t) {
      var e = t.$options,
        n = e.parent;
      if (n && !e.abstract) {
        for (; n.$options.abstract && n.$parent; ) n = n.$parent;
        n.$children.push(t);
      }
      (t.$parent = n),
        (t.$root = n ? n.$root : t),
        (t.$children = []),
        (t.$refs = {}),
        (t._watcher = null),
        (t._inactive = null),
        (t._directInactive = !1),
        (t._isMounted = !1),
        (t._isDestroyed = !1),
        (t._isBeingDestroyed = !1);
    }
    function gt(t, e, n) {
      (t.$el = e),
        t.$options.render ||
          ((t.$options.render = Jr),
          (t.$options.template && '#' !== t.$options.template.charAt(0)) || t.$options.el || e
            ? Za(
                'You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.',
                t
              )
            : Za('Failed to mount component: template or render function not defined.', t)),
        _t(t, 'beforeMount');
      var i;
      return (
        (i =
          Xa.performance && Er
            ? function () {
                var e = t._name,
                  i = t._uid,
                  a = 'vue-perf-start:' + i,
                  r = 'vue-perf-end:' + i;
                Er(a);
                var s = t._render();
                Er(r), Fr(e + ' render', a, r), Er(a), t._update(s, n), Er(r), Fr(e + ' patch', a, r);
              }
            : function () {
                t._update(t._render(), n);
              }),
        (t._watcher = new ss(t, i, g)),
        (n = !1),
        null == t.$vnode && ((t._isMounted = !0), _t(t, 'mounted')),
        t
      );
    }
    function bt(t, e, n, i, a) {
      var r = !!(a || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== Ka);
      if (
        ((t.$options._parentVnode = i),
        (t.$vnode = i),
        t._vnode && (t._vnode.parent = i),
        (t.$options._renderChildren = a),
        e && t.$options.props)
      ) {
        (Dr.shouldConvert = !1), (Dr.isSettingProps = !0);
        for (var s = t._props, o = t.$options._propKeys || [], l = 0; l < o.length; l++) {
          var c = o[l];
          s[c] = U(c, t.$options.props, e, t);
        }
        (Dr.shouldConvert = !0), (Dr.isSettingProps = !1), (t.$options.propsData = e);
      }
      if (n) {
        var d = t.$options._parentListeners;
        (t.$options._parentListeners = n), pt(t, n, d);
      }
      r && ((t.$slots = ft(a, i.context)), t.$forceUpdate());
    }
    function yt(t) {
      for (; t && (t = t.$parent); ) if (t._inactive) return !0;
      return !1;
    }
    function xt(t, e) {
      if (e) {
        if (((t._directInactive = !1), yt(t))) return;
      } else if (t._directInactive) return;
      if (t._inactive || null === t._inactive) {
        t._inactive = !1;
        for (var n = 0; n < t.$children.length; n++) xt(t.$children[n]);
        _t(t, 'activated');
      }
    }
    function wt(t, e) {
      if (!((e && ((t._directInactive = !0), yt(t))) || t._inactive)) {
        t._inactive = !0;
        for (var n = 0; n < t.$children.length; n++) wt(t.$children[n]);
        _t(t, 'deactivated');
      }
    }
    function _t(t, e) {
      var n = t.$options[e];
      if (n)
        for (var i = 0, a = n.length; i < a; i++)
          try {
            n[i].call(t);
          } catch (n) {
            T(n, t, e + ' hook');
          }
      t._hasHookEvent && t.$emit('hook:' + e);
    }
    function kt() {
      (Qr.length = Zr.length = 0), (ts = {}), (es = {}), (ns = is = !1);
    }
    function Tt() {
      is = !0;
      var t, e;
      for (
        Qr.sort(function (t, e) {
          return t.id - e.id;
        }),
          as = 0;
        as < Qr.length;
        as++
      )
        if (((t = Qr[as]), (e = t.id), (ts[e] = null), t.run(), null != ts[e] && ((es[e] = (es[e] || 0) + 1), es[e] > Kr))) {
          Za(
            'You may have an infinite update loop ' +
              (t.user ? 'in watcher with expression "' + t.expression + '"' : 'in a component render function.'),
            t.vm
          );
          break;
        }
      var n = Zr.slice(),
        i = Qr.slice();
      kt(), St(n), Ct(i), wr && Xa.devtools && wr.emit('flush');
    }
    function Ct(t) {
      for (var e = t.length; e--; ) {
        var n = t[e],
          i = n.vm;
        i._watcher === n && i._isMounted && _t(i, 'updated');
      }
    }
    function At(t) {
      (t._inactive = !1), Zr.push(t);
    }
    function St(t) {
      for (var e = 0; e < t.length; e++) (t[e]._inactive = !0), xt(t[e], !0);
    }
    function $t(t) {
      var e = t.id;
      if (null == ts[e]) {
        if (((ts[e] = !0), is)) {
          for (var n = Qr.length - 1; n >= 0 && Qr[n].id > t.id; ) n--;
          Qr.splice(Math.max(n, as) + 1, 0, t);
        } else Qr.push(t);
        ns || ((ns = !0), kr(Tt));
      }
    }
    function Lt(t) {
      os.clear(), Dt(t, os);
    }
    function Dt(t, e) {
      var n,
        i,
        r = Array.isArray(t);
      if ((r || a(t)) && Object.isExtensible(t)) {
        if (t.__ob__) {
          var s = t.__ob__.dep.id;
          if (e.has(s)) return;
          e.add(s);
        }
        if (r) for (n = t.length; n--; ) Dt(t[n], e);
        else for (i = Object.keys(t), n = i.length; n--; ) Dt(t[i[n]], e);
      }
    }
    function It(t, e, n) {
      (ls.get = function () {
        return this[e][n];
      }),
        (ls.set = function (t) {
          this[e][n] = t;
        }),
        Object.defineProperty(t, n, ls);
    }
    function Pt(t) {
      t._watchers = [];
      var e = t.$options;
      e.props && Et(t, e.props),
        e.methods && Bt(t, e.methods),
        e.data ? Ft(t) : D((t._data = {}), !0),
        e.computed && Nt(t, e.computed),
        e.watch && Rt(t, e.watch);
    }
    function Et(t, e) {
      var n = t.$options.propsData || {},
        i = (t._props = {}),
        a = (t.$options._propKeys = []),
        r = !t.$parent;
      Dr.shouldConvert = r;
      for (var s in e)
        !(function (r) {
          a.push(r);
          var s = U(r, e, n, t);
          (cs[r] || Xa.isReservedAttr(r)) && Za('"' + r + '" is a reserved attribute and cannot be used as component prop.', t),
            I(i, r, s, function () {
              t.$parent &&
                !Dr.isSettingProps &&
                Za(
                  'Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop\'s value. Prop being mutated: "' +
                    r +
                    '"',
                  t
                );
            }),
            r in t || It(t, '_props', r);
        })(s);
      Dr.shouldConvert = !0;
    }
    function Ft(t) {
      var e = t.$options.data;
      (e = t._data = 'function' == typeof e ? jt(e, t) : e || {}),
        r(e) ||
          ((e = {}), Za('data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', t));
      for (var n = Object.keys(e), i = t.$options.props, a = n.length; a--; )
        i && u(i, n[a])
          ? Za('The data property "' + n[a] + '" is already declared as a prop. Use prop default value instead.', t)
          : w(n[a]) || It(t, '_data', n[a]);
      D(e, !0);
    }
    function jt(t, e) {
      try {
        return t.call(e);
      } catch (t) {
        return T(t, e, 'data()'), {};
      }
    }
    function Nt(t, e) {
      var n = (t._computedWatchers = Object.create(null));
      for (var i in e) {
        var a = e[i],
          r = 'function' == typeof a ? a : a.get;
        void 0 === r && (Za('No getter function has been defined for computed property "' + i + '".', t), (r = g)),
          (n[i] = new ss(t, r, g, ds)),
          i in t
            ? i in t.$data
              ? Za('The computed property "' + i + '" is already defined in data.', t)
              : t.$options.props && i in t.$options.props && Za('The computed property "' + i + '" is already defined as a prop.', t)
            : Ot(t, i, a);
      }
    }
    function Ot(t, e, n) {
      'function' == typeof n
        ? ((ls.get = Mt(e)), (ls.set = g))
        : ((ls.get = n.get ? (!1 !== n.cache ? Mt(e) : n.get) : g), (ls.set = n.set ? n.set : g)),
        Object.defineProperty(t, e, ls);
    }
    function Mt(t) {
      return function () {
        var e = this._computedWatchers && this._computedWatchers[t];
        if (e) return e.dirty && e.evaluate(), Cr.target && e.depend(), e.value;
      };
    }
    function Bt(t, e) {
      var n = t.$options.props;
      for (var i in e)
        (t[i] = null == e[i] ? g : f(e[i], t)),
          null == e[i] &&
            Za('method "' + i + '" has an undefined value in the component definition. Did you reference the function correctly?', t),
          n && u(n, i) && Za('method "' + i + '" has already been defined as a prop.', t);
    }
    function Rt(t, e) {
      for (var n in e) {
        var i = e[n];
        if (Array.isArray(i)) for (var a = 0; a < i.length; a++) Ht(t, n, i[a]);
        else Ht(t, n, i);
      }
    }
    function Ht(t, e, n) {
      var i;
      r(n) && ((i = n), (n = n.handler)), 'string' == typeof n && (n = t[n]), t.$watch(e, n, i);
    }
    function qt(t) {
      var e = t.$options.provide;
      e && (t._provided = 'function' == typeof e ? e.call(t) : e);
    }
    function Ut(t) {
      var e = zt(t.$options.inject, t);
      e &&
        Object.keys(e).forEach(function (n) {
          I(t, n, e[n], function () {
            Za(
              'Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' +
                n +
                '"',
              t
            );
          });
        });
    }
    function zt(t, e) {
      if (t) {
        for (
          var n = Array.isArray(t), i = Object.create(null), a = n ? t : _r ? Reflect.ownKeys(t) : Object.keys(t), r = 0;
          r < a.length;
          r++
        )
          for (var s = a[r], o = n ? s : t[s], l = e; l; ) {
            if (l._provided && o in l._provided) {
              i[s] = l._provided[o];
              break;
            }
            l = l.$parent;
          }
        return i;
      }
    }
    function Vt(t, n, i, a, r) {
      var s = {},
        o = t.options.props;
      if (e(o)) for (var l in o) s[l] = U(l, o, n || {});
      else e(i.attrs) && Wt(s, i.attrs), e(i.props) && Wt(s, i.props);
      var c = Object.create(a),
        d = function (t, e, n, i) {
          return Qt(c, t, e, n, i, !0);
        },
        u = t.options.render.call(null, d, {
          data: i,
          props: s,
          children: r,
          parent: a,
          listeners: i.on || {},
          injections: zt(t.options.inject, a),
          slots: function () {
            return ft(r, a);
          },
        });
      return (
        u instanceof Vr &&
          ((u.functionalContext = a), (u.functionalOptions = t.options), i.slot && ((u.data || (u.data = {})).slot = i.slot)),
        u
      );
    }
    function Wt(t, e) {
      for (var n in e) t[Ha(n)] = e[n];
    }
    function Yt(i, r, s, o, l) {
      if (!t(i)) {
        var c = s.$options._base;
        if ((a(i) && (i = c.extend(i)), 'function' != typeof i)) return void Za('Invalid Component definition: ' + String(i), s);
        if (!t(i.cid) || void 0 !== (i = ot(i, c, s))) {
          pe(i), (r = r || {}), e(r.model) && Kt(i.options, r);
          var d = et(r, i, l);
          if (n(i.options.functional)) return Vt(i, d, r, s, o);
          var u = r.on;
          (r.on = r.nativeOn), n(i.options.abstract) && (r = {}), Gt(r);
          var p = i.options.name || l;
          return new Vr('vue-component-' + i.cid + (p ? '-' + p : ''), r, void 0, void 0, void 0, s, {
            Ctor: i,
            propsData: d,
            listeners: u,
            tag: l,
            children: o,
          });
        }
      }
    }
    function Jt(t, n, i, a) {
      var r = t.componentOptions,
        s = {
          _isComponent: !0,
          parent: n,
          propsData: r.propsData,
          _componentTag: r.tag,
          _parentVnode: t,
          _parentListeners: r.listeners,
          _renderChildren: r.children,
          _parentElm: i || null,
          _refElm: a || null,
        },
        o = t.data.inlineTemplate;
      return e(o) && ((s.render = o.render), (s.staticRenderFns = o.staticRenderFns)), new r.Ctor(s);
    }
    function Gt(t) {
      t.hook || (t.hook = {});
      for (var e = 0; e < ps.length; e++) {
        var n = ps[e],
          i = t.hook[n],
          a = us[n];
        t.hook[n] = i ? Xt(a, i) : a;
      }
    }
    function Xt(t, e) {
      return function (n, i, a, r) {
        t(n, i, a, r), e(n, i, a, r);
      };
    }
    function Kt(t, n) {
      var i = (t.model && t.model.prop) || 'value',
        a = (t.model && t.model.event) || 'input';
      (n.props || (n.props = {}))[i] = n.model.value;
      var r = n.on || (n.on = {});
      e(r[a]) ? (r[a] = [n.model.callback].concat(r[a])) : (r[a] = n.model.callback);
    }
    function Qt(t, e, a, r, s, o) {
      return (Array.isArray(a) || i(a)) && ((s = r), (r = a), (a = void 0)), n(o) && (s = hs), Zt(t, e, a, r, s);
    }
    function Zt(t, n, i, a, r) {
      if (e(i) && e(i.__ob__))
        return (
          Za(
            'Avoid using observed data object as vnode data: ' +
              JSON.stringify(i) +
              '\nAlways create fresh vnode data objects in each render!',
            t
          ),
          Jr()
        );
      if (!n) return Jr();
      Array.isArray(a) && 'function' == typeof a[0] && ((i = i || {}), (i.scopedSlots = { default: a[0] }), (a.length = 0)),
        r === hs ? (a = at(a)) : r === fs && (a = it(a));
      var s, o;
      if ('string' == typeof n) {
        var l;
        (o = Xa.getTagNamespace(n)),
          (s = Xa.isReservedTag(n)
            ? new Vr(Xa.parsePlatformTagName(n), i, a, void 0, void 0, t)
            : e((l = q(t.$options, 'components', n)))
            ? Yt(l, i, t, a, n)
            : new Vr(n, i, a, void 0, void 0, t));
      } else s = Yt(n, i, t, a);
      return e(s) ? (o && te(s, o), s) : Jr();
    }
    function te(n, i) {
      if (((n.ns = i), 'foreignObject' !== n.tag && e(n.children)))
        for (var a = 0, r = n.children.length; a < r; a++) {
          var s = n.children[a];
          e(s.tag) && t(s.ns) && te(s, i);
        }
    }
    function ee(t, e) {
      var n, i, r, s, o;
      if (Array.isArray(t) || 'string' == typeof t) for (n = new Array(t.length), i = 0, r = t.length; i < r; i++) n[i] = e(t[i], i);
      else if ('number' == typeof t) for (n = new Array(t), i = 0; i < t; i++) n[i] = e(i + 1, i);
      else if (a(t)) for (s = Object.keys(t), n = new Array(s.length), i = 0, r = s.length; i < r; i++) (o = s[i]), (n[i] = e(t[o], o, i));
      return n;
    }
    function ne(t, e, n, i) {
      var a = this.$scopedSlots[t];
      if (a) return (n = n || {}), i && v(n, i), a(n) || e;
      var r = this.$slots[t];
      return (
        r &&
          (r._rendered &&
            Za('Duplicate presence of slot "' + t + '" found in the same render tree - this will likely cause render errors.', this),
          (r._rendered = !0)),
        r || e
      );
    }
    function ie(t) {
      return q(this.$options, 'filters', t, !0) || Wa;
    }
    function ae(t, e, n) {
      var i = Xa.keyCodes[e] || n;
      return Array.isArray(i) ? -1 === i.indexOf(t) : i !== t;
    }
    function re(t, e, n, i) {
      if (n)
        if (a(n)) {
          Array.isArray(n) && (n = m(n));
          var r;
          for (var s in n) {
            if ('class' === s || 'style' === s) r = t;
            else {
              var o = t.attrs && t.attrs.type;
              r = i || Xa.mustUseProp(e, o, s) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
            }
            s in r || (r[s] = n[s]);
          }
        } else Za('v-bind without argument expects an Object or Array value', this);
      return t;
    }
    function se(t, e) {
      var n = this._staticTrees[t];
      return n && !e
        ? Array.isArray(n)
          ? K(n)
          : X(n)
        : ((n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy)), le(n, '__static__' + t, !1), n);
    }
    function oe(t, e, n) {
      return le(t, '__once__' + e + (n ? '_' + n : ''), !0), t;
    }
    function le(t, e, n) {
      if (Array.isArray(t)) for (var i = 0; i < t.length; i++) t[i] && 'string' != typeof t[i] && ce(t[i], e + '_' + i, n);
      else ce(t, e, n);
    }
    function ce(t, e, n) {
      (t.isStatic = !0), (t.key = e), (t.isOnce = n);
    }
    function de(t) {
      (t._vnode = null), (t._staticTrees = null);
      var e = (t.$vnode = t.$options._parentVnode),
        n = e && e.context;
      (t.$slots = ft(t.$options._renderChildren, n)),
        (t.$scopedSlots = Ka),
        (t._c = function (e, n, i, a) {
          return Qt(t, e, n, i, a, !1);
        }),
        (t.$createElement = function (e, n, i, a) {
          return Qt(t, e, n, i, a, !0);
        });
    }
    function ue(t, e) {
      var n = (t.$options = Object.create(t.constructor.options));
      (n.parent = e.parent),
        (n.propsData = e.propsData),
        (n._parentVnode = e._parentVnode),
        (n._parentListeners = e._parentListeners),
        (n._renderChildren = e._renderChildren),
        (n._componentTag = e._componentTag),
        (n._parentElm = e._parentElm),
        (n._refElm = e._refElm),
        e.render && ((n.render = e.render), (n.staticRenderFns = e.staticRenderFns));
    }
    function pe(t) {
      var e = t.options;
      if (t.super) {
        var n = pe(t.super);
        if (n !== t.superOptions) {
          t.superOptions = n;
          var i = fe(t);
          i && v(t.extendOptions, i), (e = t.options = H(n, t.extendOptions)), e.name && (e.components[e.name] = t);
        }
      }
      return e;
    }
    function fe(t) {
      var e,
        n = t.options,
        i = t.extendOptions,
        a = t.sealedOptions;
      for (var r in n) n[r] !== a[r] && (e || (e = {}), (e[r] = he(n[r], i[r], a[r])));
      return e;
    }
    function he(t, e, n) {
      if (Array.isArray(t)) {
        var i = [];
        (n = Array.isArray(n) ? n : [n]), (e = Array.isArray(e) ? e : [e]);
        for (var a = 0; a < t.length; a++) (e.indexOf(t[a]) >= 0 || n.indexOf(t[a]) < 0) && i.push(t[a]);
        return i;
      }
      return t;
    }
    function ve(t) {
      this instanceof ve || Za('Vue is a constructor and should be called with the `new` keyword'), this._init(t);
    }
    function me(t) {
      t.use = function (t) {
        if (!t.installed) {
          var e = h(arguments, 1);
          return (
            e.unshift(this),
            'function' == typeof t.install ? t.install.apply(t, e) : 'function' == typeof t && t.apply(null, e),
            (t.installed = !0),
            this
          );
        }
      };
    }
    function ge(t) {
      t.mixin = function (t) {
        this.options = H(this.options, t);
      };
    }
    function be(t) {
      t.cid = 0;
      var e = 1;
      t.extend = function (t) {
        t = t || {};
        var n = this,
          i = n.cid,
          a = t._Ctor || (t._Ctor = {});
        if (a[i]) return a[i];
        var r = t.name || n.options.name;
        /^[a-zA-Z][\w-]*$/.test(r) ||
          Za(
            'Invalid component name: "' +
              r +
              '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.'
          );
        var s = function (t) {
          this._init(t);
        };
        return (
          (s.prototype = Object.create(n.prototype)),
          (s.prototype.constructor = s),
          (s.cid = e++),
          (s.options = H(n.options, t)),
          (s.super = n),
          s.options.props && ye(s),
          s.options.computed && xe(s),
          (s.extend = n.extend),
          (s.mixin = n.mixin),
          (s.use = n.use),
          Ja.forEach(function (t) {
            s[t] = n[t];
          }),
          r && (s.options.components[r] = s),
          (s.superOptions = n.options),
          (s.extendOptions = t),
          (s.sealedOptions = v({}, s.options)),
          (a[i] = s),
          s
        );
      };
    }
    function ye(t) {
      var e = t.options.props;
      for (var n in e) It(t.prototype, '_props', n);
    }
    function xe(t) {
      var e = t.options.computed;
      for (var n in e) Ot(t.prototype, n, e[n]);
    }
    function we(t) {
      Ja.forEach(function (e) {
        t[e] = function (t, n) {
          return n
            ? ('component' === e && Xa.isReservedTag(t) && Za('Do not use built-in or reserved HTML elements as component id: ' + t),
              'component' === e && r(n) && ((n.name = n.name || t), (n = this.options._base.extend(n))),
              'directive' === e && 'function' == typeof n && (n = { bind: n, update: n }),
              (this.options[e + 's'][t] = n),
              n)
            : this.options[e + 's'][t];
        };
      });
    }
    function _e(t) {
      return t && (t.Ctor.options.name || t.tag);
    }
    function ke(t, e) {
      return 'string' == typeof t ? t.split(',').indexOf(e) > -1 : !!s(t) && t.test(e);
    }
    function Te(t, e, n) {
      for (var i in t) {
        var a = t[i];
        if (a) {
          var r = _e(a.componentOptions);
          r && !n(r) && (a !== e && Ce(a), (t[i] = null));
        }
      }
    }
    function Ce(t) {
      t && t.componentInstance.$destroy();
    }
    function Ae(t) {
      for (var n = t.data, i = t, a = t; e(a.componentInstance); ) (a = a.componentInstance._vnode), a.data && (n = Se(a.data, n));
      for (; e((i = i.parent)); ) i.data && (n = Se(n, i.data));
      return $e(n);
    }
    function Se(t, n) {
      return { staticClass: Le(t.staticClass, n.staticClass), class: e(t.class) ? [t.class, n.class] : n.class };
    }
    function $e(t) {
      var n = t.class,
        i = t.staticClass;
      return e(i) || e(n) ? Le(i, De(n)) : '';
    }
    function Le(t, e) {
      return t ? (e ? t + ' ' + e : t) : e || '';
    }
    function De(n) {
      if (t(n)) return '';
      if ('string' == typeof n) return n;
      var i = '';
      if (Array.isArray(n)) {
        for (var r, s = 0, o = n.length; s < o; s++) e(n[s]) && e((r = De(n[s]))) && '' !== r && (i += r + ' ');
        return i.slice(0, -1);
      }
      if (a(n)) {
        for (var l in n) n[l] && (i += l + ' ');
        return i.slice(0, -1);
      }
      return i;
    }
    function Ie(t) {
      return Bs(t) ? 'svg' : 'math' === t ? 'math' : void 0;
    }
    function Pe(t) {
      if (!lr) return !0;
      if (Hs(t)) return !1;
      if (((t = t.toLowerCase()), null != qs[t])) return qs[t];
      var e = document.createElement(t);
      return t.indexOf('-') > -1
        ? (qs[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement)
        : (qs[t] = /HTMLUnknownElement/.test(e.toString()));
    }
    function Ee(t) {
      if ('string' == typeof t) {
        var e = document.querySelector(t);
        return e || (Za('Cannot find element: ' + t), document.createElement('div'));
      }
      return t;
    }
    function Fe(t, e) {
      var n = document.createElement(t);
      return 'select' !== t ? n : (e.data && e.data.attrs && void 0 !== e.data.attrs.multiple && n.setAttribute('multiple', 'multiple'), n);
    }
    function je(t, e) {
      return document.createElementNS(Os[t], e);
    }
    function Ne(t) {
      return document.createTextNode(t);
    }
    function Oe(t) {
      return document.createComment(t);
    }
    function Me(t, e, n) {
      t.insertBefore(e, n);
    }
    function Be(t, e) {
      t.removeChild(e);
    }
    function Re(t, e) {
      t.appendChild(e);
    }
    function He(t) {
      return t.parentNode;
    }
    function qe(t) {
      return t.nextSibling;
    }
    function Ue(t) {
      return t.tagName;
    }
    function ze(t, e) {
      t.textContent = e;
    }
    function Ve(t, e, n) {
      t.setAttribute(e, n);
    }
    function We(t, e) {
      var n = t.data.ref;
      if (n) {
        var i = t.context,
          a = t.componentInstance || t.elm,
          r = i.$refs;
        e
          ? Array.isArray(r[n])
            ? d(r[n], a)
            : r[n] === a && (r[n] = void 0)
          : t.data.refInFor
          ? Array.isArray(r[n]) && r[n].indexOf(a) < 0
            ? r[n].push(a)
            : (r[n] = [a])
          : (r[n] = a);
      }
    }
    function Ye(t, n) {
      return t.key === n.key && t.tag === n.tag && t.isComment === n.isComment && e(t.data) === e(n.data) && Je(t, n);
    }
    function Je(t, n) {
      if ('input' !== t.tag) return !0;
      var i;
      return (e((i = t.data)) && e((i = i.attrs)) && i.type) === (e((i = n.data)) && e((i = i.attrs)) && i.type);
    }
    function Ge(t, n, i) {
      var a,
        r,
        s = {};
      for (a = n; a <= i; ++a) (r = t[a].key), e(r) && (s[r] = a);
      return s;
    }
    function Xe(t, e) {
      (t.data.directives || e.data.directives) && Ke(t, e);
    }
    function Ke(t, e) {
      var n,
        i,
        a,
        r = t === Vs,
        s = e === Vs,
        o = Qe(t.data.directives, t.context),
        l = Qe(e.data.directives, e.context),
        c = [],
        d = [];
      for (n in l)
        (i = o[n]),
          (a = l[n]),
          i
            ? ((a.oldValue = i.value), tn(a, 'update', e, t), a.def && a.def.componentUpdated && d.push(a))
            : (tn(a, 'bind', e, t), a.def && a.def.inserted && c.push(a));
      if (c.length) {
        var u = function () {
          for (var n = 0; n < c.length; n++) tn(c[n], 'inserted', e, t);
        };
        r ? tt(e.data.hook || (e.data.hook = {}), 'insert', u) : u();
      }
      if (
        (d.length &&
          tt(e.data.hook || (e.data.hook = {}), 'postpatch', function () {
            for (var n = 0; n < d.length; n++) tn(d[n], 'componentUpdated', e, t);
          }),
        !r)
      )
        for (n in o) l[n] || tn(o[n], 'unbind', t, t, s);
    }
    function Qe(t, e) {
      var n = Object.create(null);
      if (!t) return n;
      var i, a;
      for (i = 0; i < t.length; i++)
        (a = t[i]), a.modifiers || (a.modifiers = Js), (n[Ze(a)] = a), (a.def = q(e.$options, 'directives', a.name, !0));
      return n;
    }
    function Ze(t) {
      return t.rawName || t.name + '.' + Object.keys(t.modifiers || {}).join('.');
    }
    function tn(t, e, n, i, a) {
      var r = t.def && t.def[e];
      if (r)
        try {
          r(n.elm, t, n, i, a);
        } catch (i) {
          T(i, n.context, 'directive ' + t.name + ' ' + e + ' hook');
        }
    }
    function en(n, i) {
      if (!t(n.data.attrs) || !t(i.data.attrs)) {
        var a,
          r,
          s = i.elm,
          o = n.data.attrs || {},
          l = i.data.attrs || {};
        e(l.__ob__) && (l = i.data.attrs = v({}, l));
        for (a in l) (r = l[a]), o[a] !== r && nn(s, a, r);
        ur && l.value !== o.value && nn(s, 'value', l.value);
        for (a in o) t(l[a]) && (Fs(a) ? s.removeAttributeNS(Es, js(a)) : Is(a) || s.removeAttribute(a));
      }
    }
    function nn(t, e, n) {
      Ps(e)
        ? Ns(n)
          ? t.removeAttribute(e)
          : t.setAttribute(e, e)
        : Is(e)
        ? t.setAttribute(e, Ns(n) || 'false' === n ? 'false' : 'true')
        : Fs(e)
        ? Ns(n)
          ? t.removeAttributeNS(Es, js(e))
          : t.setAttributeNS(Es, e, n)
        : Ns(n)
        ? t.removeAttribute(e)
        : t.setAttribute(e, n);
    }
    function an(n, i) {
      var a = i.elm,
        r = i.data,
        s = n.data;
      if (!(t(r.staticClass) && t(r.class) && (t(s) || (t(s.staticClass) && t(s.class))))) {
        var o = Ae(i),
          l = a._transitionClasses;
        e(l) && (o = Le(o, De(l))), o !== a._prevClass && (a.setAttribute('class', o), (a._prevClass = o));
      }
    }
    function rn(t) {
      function e() {
        (s || (s = [])).push(t.slice(h, a).trim()), (h = a + 1);
      }
      var n,
        i,
        a,
        r,
        s,
        o = !1,
        l = !1,
        c = !1,
        d = !1,
        u = 0,
        p = 0,
        f = 0,
        h = 0;
      for (a = 0; a < t.length; a++)
        if (((i = n), (n = t.charCodeAt(a)), o)) 39 === n && 92 !== i && (o = !1);
        else if (l) 34 === n && 92 !== i && (l = !1);
        else if (c) 96 === n && 92 !== i && (c = !1);
        else if (d) 47 === n && 92 !== i && (d = !1);
        else if (124 !== n || 124 === t.charCodeAt(a + 1) || 124 === t.charCodeAt(a - 1) || u || p || f) {
          switch (n) {
            case 34:
              l = !0;
              break;
            case 39:
              o = !0;
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
              u++;
              break;
            case 125:
              u--;
          }
          if (47 === n) {
            for (var v = a - 1, m = void 0; v >= 0 && ' ' === (m = t.charAt(v)); v--);
            (m && Qs.test(m)) || (d = !0);
          }
        } else void 0 === r ? ((h = a + 1), (r = t.slice(0, a).trim())) : e();
      if ((void 0 === r ? (r = t.slice(0, a).trim()) : 0 !== h && e(), s)) for (a = 0; a < s.length; a++) r = sn(r, s[a]);
      return r;
    }
    function sn(t, e) {
      var n = e.indexOf('(');
      return n < 0 ? '_f("' + e + '")(' + t + ')' : '_f("' + e.slice(0, n) + '")(' + t + ',' + e.slice(n + 1);
    }
    function on(t) {
      console.error('[Vue compiler]: ' + t);
    }
    function ln(t, e) {
      return t
        ? t
            .map(function (t) {
              return t[e];
            })
            .filter(function (t) {
              return t;
            })
        : [];
    }
    function cn(t, e, n) {
      (t.props || (t.props = [])).push({ name: e, value: n });
    }
    function dn(t, e, n) {
      (t.attrs || (t.attrs = [])).push({ name: e, value: n });
    }
    function un(t, e, n, i, a, r) {
      (t.directives || (t.directives = [])).push({ name: e, rawName: n, value: i, arg: a, modifiers: r });
    }
    function pn(t, e, n, i, a, r) {
      r && i && i.prevent && i.passive && r("passive and prevent can't be used together. Passive handler can't prevent default event."),
        i && i.capture && (delete i.capture, (e = '!' + e)),
        i && i.once && (delete i.once, (e = '~' + e)),
        i && i.passive && (delete i.passive, (e = '&' + e));
      var s;
      i && i.native ? (delete i.native, (s = t.nativeEvents || (t.nativeEvents = {}))) : (s = t.events || (t.events = {}));
      var o = { value: n, modifiers: i },
        l = s[e];
      Array.isArray(l) ? (a ? l.unshift(o) : l.push(o)) : (s[e] = l ? (a ? [o, l] : [l, o]) : o);
    }
    function fn(t, e, n) {
      var i = hn(t, ':' + e) || hn(t, 'v-bind:' + e);
      if (null != i) return rn(i);
      if (!1 !== n) {
        var a = hn(t, e);
        if (null != a) return JSON.stringify(a);
      }
    }
    function hn(t, e) {
      var n;
      if (null != (n = t.attrsMap[e]))
        for (var i = t.attrsList, a = 0, r = i.length; a < r; a++)
          if (i[a].name === e) {
            i.splice(a, 1);
            break;
          }
      return n;
    }
    function vn(t, e, n) {
      var i = n || {},
        a = i.number,
        r = i.trim,
        s = '$$v';
      r && (s = "(typeof $$v === 'string'? $$v.trim(): $$v)"), a && (s = '_n(' + s + ')');
      var o = mn(e, s);
      t.model = { value: '(' + e + ')', expression: '"' + e + '"', callback: 'function ($$v) {' + o + '}' };
    }
    function mn(t, e) {
      var n = gn(t);
      return null === n.idx
        ? t + '=' + e
        : 'var $$exp = ' +
            n.exp +
            ', $$idx = ' +
            n.idx +
            ';if (!Array.isArray($$exp)){' +
            t +
            '=' +
            e +
            '}else{$$exp.splice($$idx, 1, ' +
            e +
            ')}';
    }
    function gn(t) {
      if (((xs = t), (ys = xs.length), (_s = ks = Ts = 0), t.indexOf('[') < 0 || t.lastIndexOf(']') < ys - 1)) return { exp: t, idx: null };
      for (; !yn(); ) (ws = bn()), xn(ws) ? _n(ws) : 91 === ws && wn(ws);
      return { exp: t.substring(0, ks), idx: t.substring(ks + 1, Ts) };
    }
    function bn() {
      return xs.charCodeAt(++_s);
    }
    function yn() {
      return _s >= ys;
    }
    function xn(t) {
      return 34 === t || 39 === t;
    }
    function wn(t) {
      var e = 1;
      for (ks = _s; !yn(); )
        if (((t = bn()), xn(t))) _n(t);
        else if ((91 === t && e++, 93 === t && e--, 0 === e)) {
          Ts = _s;
          break;
        }
    }
    function _n(t) {
      for (var e = t; !yn() && (t = bn()) !== e; );
    }
    function kn(t, e, n) {
      Cs = n;
      var i = e.value,
        a = e.modifiers,
        r = t.tag,
        s = t.attrsMap.type,
        o = t.attrsMap['v-bind:type'] || t.attrsMap[':type'];
      if (
        ('input' === r &&
          o &&
          Cs('<input :type="' + o + '" v-model="' + i + '">:\nv-model does not support dynamic input types. Use v-if branches instead.'),
        'input' === r &&
          'file' === s &&
          Cs('<' + t.tag + ' v-model="' + i + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'),
        'select' === r)
      )
        An(t, i, a);
      else if ('input' === r && 'checkbox' === s) Tn(t, i, a);
      else if ('input' === r && 'radio' === s) Cn(t, i, a);
      else if ('input' === r || 'textarea' === r) Sn(t, i, a);
      else {
        if (!Xa.isReservedTag(r)) return vn(t, i, a), !1;
        Cs(
          '<' +
            t.tag +
            ' v-model="' +
            i +
            '">: v-model is not supported on this element type. If you are working with contenteditable, it\'s recommended to wrap a library dedicated for that purpose inside a custom component.'
        );
      }
      return !0;
    }
    function Tn(t, e, n) {
      var i = n && n.number,
        a = fn(t, 'value') || 'null',
        r = fn(t, 'true-value') || 'true',
        s = fn(t, 'false-value') || 'false';
      cn(
        t,
        'checked',
        'Array.isArray(' + e + ')?_i(' + e + ',' + a + ')>-1' + ('true' === r ? ':(' + e + ')' : ':_q(' + e + ',' + r + ')')
      ),
        pn(
          t,
          to,
          'var $$a=' +
            e +
            ',$$el=$event.target,$$c=$$el.checked?(' +
            r +
            '):(' +
            s +
            ');if(Array.isArray($$a)){var $$v=' +
            (i ? '_n(' + a + ')' : a) +
            ',$$i=_i($$a,$$v);if($$c){$$i<0&&(' +
            e +
            '=$$a.concat($$v))}else{$$i>-1&&(' +
            e +
            '=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{' +
            mn(e, '$$c') +
            '}',
          null,
          !0
        );
    }
    function Cn(t, e, n) {
      var i = n && n.number,
        a = fn(t, 'value') || 'null';
      (a = i ? '_n(' + a + ')' : a), cn(t, 'checked', '_q(' + e + ',' + a + ')'), pn(t, to, mn(e, a), null, !0);
    }
    function An(t, e, n) {
      var i = n && n.number,
        a =
          'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' +
          (i ? '_n(val)' : 'val') +
          '})',
        r = 'var $$selectedVal = ' + a + ';';
      (r = r + ' ' + mn(e, '$event.target.multiple ? $$selectedVal : $$selectedVal[0]')), pn(t, 'change', r, null, !0);
    }
    function Sn(t, e, n) {
      var i = t.attrsMap.type,
        a = n || {},
        r = a.lazy,
        s = a.number,
        o = a.trim,
        l = !r && 'range' !== i,
        c = r ? 'change' : 'range' === i ? Zs : 'input',
        d = '$event.target.value';
      o && (d = '$event.target.value.trim()'), s && (d = '_n(' + d + ')');
      var u = mn(e, d);
      l && (u = 'if($event.target.composing)return;' + u),
        cn(t, 'value', '(' + e + ')'),
        pn(t, c, u, null, !0),
        (o || s || 'number' === i) && pn(t, 'blur', '$forceUpdate()');
    }
    function $n(t) {
      var n;
      e(t[Zs]) && ((n = dr ? 'change' : 'input'), (t[n] = [].concat(t[Zs], t[n] || [])), delete t[Zs]),
        e(t[to]) && ((n = vr ? 'click' : 'change'), (t[n] = [].concat(t[to], t[n] || [])), delete t[to]);
    }
    function Ln(t, e, n, i, a) {
      if (n) {
        var r = e,
          s = As;
        e = function (n) {
          null !== (1 === arguments.length ? r(n) : r.apply(null, arguments)) && Dn(t, e, i, s);
        };
      }
      As.addEventListener(t, e, mr ? { capture: i, passive: a } : i);
    }
    function Dn(t, e, n, i) {
      (i || As).removeEventListener(t, e, n);
    }
    function In(e, n) {
      if (!t(e.data.on) || !t(n.data.on)) {
        var i = n.data.on || {},
          a = e.data.on || {};
        (As = n.elm), $n(i), Z(i, a, Ln, Dn, n.context);
      }
    }
    function Pn(n, i) {
      if (!t(n.data.domProps) || !t(i.data.domProps)) {
        var a,
          r,
          s = i.elm,
          o = n.data.domProps || {},
          l = i.data.domProps || {};
        e(l.__ob__) && (l = i.data.domProps = v({}, l));
        for (a in o) t(l[a]) && (s[a] = '');
        for (a in l)
          if (((r = l[a]), ('textContent' !== a && 'innerHTML' !== a) || (i.children && (i.children.length = 0), r !== o[a])))
            if ('value' === a) {
              s._value = r;
              var c = t(r) ? '' : String(r);
              En(s, i, c) && (s.value = c);
            } else s[a] = r;
      }
    }
    function En(t, e, n) {
      return !t.composing && ('option' === e.tag || Fn(t, n) || jn(t, n));
    }
    function Fn(t, e) {
      return document.activeElement !== t && t.value !== e;
    }
    function jn(t, n) {
      var i = t.value,
        a = t._vModifiers;
      return (e(a) && a.number) || 'number' === t.type ? l(i) !== l(n) : e(a) && a.trim ? i.trim() !== n.trim() : i !== n;
    }
    function Nn(t) {
      var e = On(t.style);
      return t.staticStyle ? v(t.staticStyle, e) : e;
    }
    function On(t) {
      return Array.isArray(t) ? m(t) : 'string' == typeof t ? io(t) : t;
    }
    function Mn(t, e) {
      var n,
        i = {};
      if (e) for (var a = t; a.componentInstance; ) (a = a.componentInstance._vnode), a.data && (n = Nn(a.data)) && v(i, n);
      (n = Nn(t.data)) && v(i, n);
      for (var r = t; (r = r.parent); ) r.data && (n = Nn(r.data)) && v(i, n);
      return i;
    }
    function Bn(n, i) {
      var a = i.data,
        r = n.data;
      if (!(t(a.staticStyle) && t(a.style) && t(r.staticStyle) && t(r.style))) {
        var s,
          o,
          l = i.elm,
          c = r.staticStyle,
          d = r.normalizedStyle || r.style || {},
          u = c || d,
          p = On(i.data.style) || {};
        i.data.normalizedStyle = e(p.__ob__) ? v({}, p) : p;
        var f = Mn(i, !0);
        for (o in u) t(f[o]) && so(l, o, '');
        for (o in f) (s = f[o]) !== u[o] && so(l, o, null == s ? '' : s);
      }
    }
    function Rn(t, e) {
      if (e && (e = e.trim()))
        if (t.classList)
          e.indexOf(' ') > -1
            ? e.split(/\s+/).forEach(function (e) {
                return t.classList.add(e);
              })
            : t.classList.add(e);
        else {
          var n = ' ' + (t.getAttribute('class') || '') + ' ';
          n.indexOf(' ' + e + ' ') < 0 && t.setAttribute('class', (n + e).trim());
        }
    }
    function Hn(t, e) {
      if (e && (e = e.trim()))
        if (t.classList)
          e.indexOf(' ') > -1
            ? e.split(/\s+/).forEach(function (e) {
                return t.classList.remove(e);
              })
            : t.classList.remove(e);
        else {
          for (var n = ' ' + (t.getAttribute('class') || '') + ' ', i = ' ' + e + ' '; n.indexOf(i) >= 0; ) n = n.replace(i, ' ');
          t.setAttribute('class', n.trim());
        }
    }
    function qn(t) {
      if (t) {
        if ('object' == typeof t) {
          var e = {};
          return !1 !== t.css && v(e, uo(t.name || 'v')), v(e, t), e;
        }
        return 'string' == typeof t ? uo(t) : void 0;
      }
    }
    function Un(t) {
      yo(function () {
        yo(t);
      });
    }
    function zn(t, e) {
      (t._transitionClasses || (t._transitionClasses = [])).push(e), Rn(t, e);
    }
    function Vn(t, e) {
      t._transitionClasses && d(t._transitionClasses, e), Hn(t, e);
    }
    function Wn(t, e, n) {
      var i = Yn(t, e),
        a = i.type,
        r = i.timeout,
        s = i.propCount;
      if (!a) return n();
      var o = a === fo ? mo : bo,
        l = 0,
        c = function () {
          t.removeEventListener(o, d), n();
        },
        d = function (e) {
          e.target === t && ++l >= s && c();
        };
      setTimeout(function () {
        l < s && c();
      }, r + 1),
        t.addEventListener(o, d);
    }
    function Yn(t, e) {
      var n,
        i = window.getComputedStyle(t),
        a = i[vo + 'Delay'].split(', '),
        r = i[vo + 'Duration'].split(', '),
        s = Jn(a, r),
        o = i[go + 'Delay'].split(', '),
        l = i[go + 'Duration'].split(', '),
        c = Jn(o, l),
        d = 0,
        u = 0;
      return (
        e === fo
          ? s > 0 && ((n = fo), (d = s), (u = r.length))
          : e === ho
          ? c > 0 && ((n = ho), (d = c), (u = l.length))
          : ((d = Math.max(s, c)), (n = d > 0 ? (s > c ? fo : ho) : null), (u = n ? (n === fo ? r.length : l.length) : 0)),
        { type: n, timeout: d, propCount: u, hasTransform: n === fo && xo.test(i[vo + 'Property']) }
      );
    }
    function Jn(t, e) {
      for (; t.length < e.length; ) t = t.concat(t);
      return Math.max.apply(
        null,
        e.map(function (e, n) {
          return Gn(e) + Gn(t[n]);
        })
      );
    }
    function Gn(t) {
      return 1e3 * Number(t.slice(0, -1));
    }
    function Xn(n, i) {
      var r = n.elm;
      e(r._leaveCb) && ((r._leaveCb.cancelled = !0), r._leaveCb());
      var s = qn(n.data.transition);
      if (!t(s) && !e(r._enterCb) && 1 === r.nodeType) {
        for (
          var o = s.css,
            c = s.type,
            d = s.enterClass,
            u = s.enterToClass,
            p = s.enterActiveClass,
            f = s.appearClass,
            h = s.appearToClass,
            v = s.appearActiveClass,
            m = s.beforeEnter,
            g = s.enter,
            b = s.afterEnter,
            y = s.enterCancelled,
            w = s.beforeAppear,
            _ = s.appear,
            k = s.afterAppear,
            T = s.appearCancelled,
            C = s.duration,
            A = Xr,
            S = Xr.$vnode;
          S && S.parent;

        )
          (S = S.parent), (A = S.context);
        var $ = !A._isMounted || !n.isRootInsert;
        if (!$ || _ || '' === _) {
          var L = $ && f ? f : d,
            D = $ && v ? v : p,
            I = $ && h ? h : u,
            P = $ ? w || m : m,
            E = $ && 'function' == typeof _ ? _ : g,
            F = $ ? k || b : b,
            j = $ ? T || y : y,
            N = l(a(C) ? C.enter : C);
          null != N && Qn(N, 'enter', n);
          var O = !1 !== o && !ur,
            M = ti(E),
            B = (r._enterCb = x(function () {
              O && (Vn(r, I), Vn(r, D)), B.cancelled ? (O && Vn(r, L), j && j(r)) : F && F(r), (r._enterCb = null);
            }));
          n.data.show ||
            tt(n.data.hook || (n.data.hook = {}), 'insert', function () {
              var t = r.parentNode,
                e = t && t._pending && t._pending[n.key];
              e && e.tag === n.tag && e.elm._leaveCb && e.elm._leaveCb(), E && E(r, B);
            }),
            P && P(r),
            O &&
              (zn(r, L),
              zn(r, D),
              Un(function () {
                zn(r, I), Vn(r, L), B.cancelled || M || (Zn(N) ? setTimeout(B, N) : Wn(r, c, B));
              })),
            n.data.show && (i && i(), E && E(r, B)),
            O || M || B();
        }
      }
    }
    function Kn(n, i) {
      function r() {
        T.cancelled ||
          (n.data.show || ((s.parentNode._pending || (s.parentNode._pending = {}))[n.key] = n),
          h && h(s),
          w &&
            (zn(s, u),
            zn(s, f),
            Un(function () {
              zn(s, p), Vn(s, u), T.cancelled || _ || (Zn(k) ? setTimeout(T, k) : Wn(s, d, T));
            })),
          v && v(s, T),
          w || _ || T());
      }
      var s = n.elm;
      e(s._enterCb) && ((s._enterCb.cancelled = !0), s._enterCb());
      var o = qn(n.data.transition);
      if (t(o)) return i();
      if (!e(s._leaveCb) && 1 === s.nodeType) {
        var c = o.css,
          d = o.type,
          u = o.leaveClass,
          p = o.leaveToClass,
          f = o.leaveActiveClass,
          h = o.beforeLeave,
          v = o.leave,
          m = o.afterLeave,
          g = o.leaveCancelled,
          b = o.delayLeave,
          y = o.duration,
          w = !1 !== c && !ur,
          _ = ti(v),
          k = l(a(y) ? y.leave : y);
        e(k) && Qn(k, 'leave', n);
        var T = (s._leaveCb = x(function () {
          s.parentNode && s.parentNode._pending && (s.parentNode._pending[n.key] = null),
            w && (Vn(s, p), Vn(s, f)),
            T.cancelled ? (w && Vn(s, u), g && g(s)) : (i(), m && m(s)),
            (s._leaveCb = null);
        }));
        b ? b(r) : r();
      }
    }
    function Qn(t, e, n) {
      'number' != typeof t
        ? Za('<transition> explicit ' + e + ' duration is not a valid number - got ' + JSON.stringify(t) + '.', n.context)
        : isNaN(t) && Za('<transition> explicit ' + e + ' duration is NaN - the duration expression might be incorrect.', n.context);
    }
    function Zn(t) {
      return 'number' == typeof t && !isNaN(t);
    }
    function ti(n) {
      if (t(n)) return !1;
      var i = n.fns;
      return e(i) ? ti(Array.isArray(i) ? i[0] : i) : (n._length || n.length) > 1;
    }
    function ei(t, e) {
      !0 !== e.data.show && Xn(e);
    }
    function ni(t, e, n) {
      var i = e.value,
        a = t.multiple;
      if (a && !Array.isArray(i))
        return void Za(
          '<select multiple v-model="' +
            e.expression +
            '"> expects an Array value for its binding, but got ' +
            Object.prototype.toString.call(i).slice(8, -1),
          n
        );
      for (var r, s, o = 0, l = t.options.length; o < l; o++)
        if (((s = t.options[o]), a)) (r = y(i, ai(s)) > -1), s.selected !== r && (s.selected = r);
        else if (b(ai(s), i)) return void (t.selectedIndex !== o && (t.selectedIndex = o));
      a || (t.selectedIndex = -1);
    }
    function ii(t, e) {
      for (var n = 0, i = e.length; n < i; n++) if (b(ai(e[n]), t)) return !1;
      return !0;
    }
    function ai(t) {
      return '_value' in t ? t._value : t.value;
    }
    function ri(t) {
      t.target.composing = !0;
    }
    function si(t) {
      (t.target.composing = !1), oi(t.target, 'input');
    }
    function oi(t, e) {
      var n = document.createEvent('HTMLEvents');
      n.initEvent(e, !0, !0), t.dispatchEvent(n);
    }
    function li(t) {
      return !t.componentInstance || (t.data && t.data.transition) ? t : li(t.componentInstance._vnode);
    }
    function ci(t) {
      var e = t && t.componentOptions;
      return e && e.Ctor.options.abstract ? ci(lt(e.children)) : t;
    }
    function di(t) {
      var e = {},
        n = t.$options;
      for (var i in n.propsData) e[i] = t[i];
      var a = n._parentListeners;
      for (var r in a) e[Ha(r)] = a[r];
      return e;
    }
    function ui(t, e) {
      if (/\d-keep-alive$/.test(e.tag)) return t('keep-alive', { props: e.componentOptions.propsData });
    }
    function pi(t) {
      for (; (t = t.parent); ) if (t.data.transition) return !0;
    }
    function fi(t, e) {
      return e.key === t.key && e.tag === t.tag;
    }
    function hi(t) {
      t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
    }
    function vi(t) {
      t.data.newPos = t.elm.getBoundingClientRect();
    }
    function mi(t) {
      var e = t.data.pos,
        n = t.data.newPos,
        i = e.left - n.left,
        a = e.top - n.top;
      if (i || a) {
        t.data.moved = !0;
        var r = t.elm.style;
        (r.transform = r.WebkitTransform = 'translate(' + i + 'px,' + a + 'px)'), (r.transitionDuration = '0s');
      }
    }
    function gi(t) {
      return (Eo = Eo || document.createElement('div')), (Eo.innerHTML = t), Eo.textContent;
    }
    function bi(t, e) {
      var n = e ? yl : bl;
      return t.replace(n, function (t) {
        return gl[t];
      });
    }
    function yi(t, e) {
      function n(e) {
        (d += e), (t = t.substring(e));
      }
      function i(t, n, i) {
        var a, o;
        if ((null == n && (n = d), null == i && (i = d), t && (o = t.toLowerCase()), t))
          for (a = s.length - 1; a >= 0 && s[a].lowerCasedTag !== o; a--);
        else a = 0;
        if (a >= 0) {
          for (var l = s.length - 1; l >= a; l--)
            (l > a || !t) && e.warn && e.warn('tag <' + s[l].tag + '> has no matching end tag.'), e.end && e.end(s[l].tag, n, i);
          (s.length = a), (r = a && s[a - 1].tag);
        } else 'br' === o ? e.start && e.start(t, [], !0, n, i) : 'p' === o && (e.start && e.start(t, [], !1, n, i), e.end && e.end(t, n, i));
      }
      for (var a, r, s = [], o = e.expectHTML, l = e.isUnaryTag || Va, c = e.canBeLeftOpenTag || Va, d = 0; t; ) {
        if (((a = t), r && vl(r))) {
          var u = r.toLowerCase(),
            p = ml[u] || (ml[u] = new RegExp('([\\s\\S]*?)(</' + u + '[^>]*>)', 'i')),
            f = 0,
            h = t.replace(p, function (t, n, i) {
              return (
                (f = i.length),
                vl(u) || 'noscript' === u || (n = n.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                e.chars && e.chars(n),
                ''
              );
            });
          (d += t.length - h.length), (t = h), i(u, d - f, d);
        } else {
          var v = t.indexOf('<');
          if (0 === v) {
            if (Jo.test(t)) {
              var m = t.indexOf('--\x3e');
              if (m >= 0) {
                n(m + 3);
                continue;
              }
            }
            if (Go.test(t)) {
              var g = t.indexOf(']>');
              if (g >= 0) {
                n(g + 2);
                continue;
              }
            }
            var b = t.match(Yo);
            if (b) {
              n(b[0].length);
              continue;
            }
            var y = t.match(Wo);
            if (y) {
              var x = d;
              n(y[0].length), i(y[1], x, d);
              continue;
            }
            var w = (function () {
              var e = t.match(zo);
              if (e) {
                var i = { tagName: e[1], attrs: [], start: d };
                n(e[0].length);
                for (var a, r; !(a = t.match(Vo)) && (r = t.match(Ho)); ) n(r[0].length), i.attrs.push(r);
                if (a) return (i.unarySlash = a[1]), n(a[0].length), (i.end = d), i;
              }
            })();
            if (w) {
              !(function (t) {
                var n = t.tagName,
                  a = t.unarySlash;
                o && ('p' === r && Oo(n) && i(r), c(n) && r === n && i(n));
                for (var d = l(n) || ('html' === n && 'head' === r) || !!a, u = t.attrs.length, p = new Array(u), f = 0; f < u; f++) {
                  var h = t.attrs[f];
                  Xo && -1 === h[0].indexOf('""') && ('' === h[3] && delete h[3], '' === h[4] && delete h[4], '' === h[5] && delete h[5]);
                  var v = h[3] || h[4] || h[5] || '';
                  p[f] = { name: h[1], value: bi(v, e.shouldDecodeNewlines) };
                }
                d || (s.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: p }), (r = n)), e.start && e.start(n, p, d, t.start, t.end);
              })(w);
              continue;
            }
          }
          var _ = void 0,
            k = void 0,
            T = void 0;
          if (v >= 0) {
            for (k = t.slice(v); !(Wo.test(k) || zo.test(k) || Jo.test(k) || Go.test(k) || (T = k.indexOf('<', 1)) < 0); )
              (v += T), (k = t.slice(v));
            (_ = t.substring(0, v)), n(v);
          }
          v < 0 && ((_ = t), (t = '')), e.chars && _ && e.chars(_);
        }
        if (t === a) {
          e.chars && e.chars(t), !s.length && e.warn && e.warn('Mal-formatted tag at end of template: "' + t + '"');
          break;
        }
      }
      i();
    }
    function xi(t, e) {
      var n = e ? _l(e) : xl;
      if (n.test(t)) {
        for (var i, a, r = [], s = (n.lastIndex = 0); (i = n.exec(t)); ) {
          (a = i.index), a > s && r.push(JSON.stringify(t.slice(s, a)));
          var o = rn(i[1].trim());
          r.push('_s(' + o + ')'), (s = a + i[0].length);
        }
        return s < t.length && r.push(JSON.stringify(t.slice(s))), r.join('+');
      }
    }
    function wi(t, e) {
      function n(t) {
        d || ((d = !0), Ko(t));
      }
      function i(t) {
        t.pre && (l = !1), nl(t.tag) && (c = !1);
      }
      (Ko = e.warn || on),
        (al = e.getTagNamespace || Va),
        (il = e.mustUseProp || Va),
        (nl = e.isPreTag || Va),
        (tl = ln(e.modules, 'preTransformNode')),
        (Zo = ln(e.modules, 'transformNode')),
        (el = ln(e.modules, 'postTransformNode')),
        (Qo = e.delimiters);
      var a,
        r,
        s = [],
        o = !1 !== e.preserveWhitespace,
        l = !1,
        c = !1,
        d = !1;
      return (
        yi(t, {
          warn: Ko,
          expectHTML: e.expectHTML,
          isUnaryTag: e.isUnaryTag,
          canBeLeftOpenTag: e.canBeLeftOpenTag,
          shouldDecodeNewlines: e.shouldDecodeNewlines,
          start: function (t, o, d) {
            function u(t) {
              ('slot' !== t.tag && 'template' !== t.tag) ||
                n('Cannot use <' + t.tag + '> as component root element because it may contain multiple nodes.'),
                t.attrsMap.hasOwnProperty('v-for') &&
                  n('Cannot use v-for on stateful component root element because it renders multiple elements.');
            }
            var p = (r && r.ns) || al(t);
            dr && 'svg' === p && (o = Ri(o));
            var f = { type: 1, tag: t, attrsList: o, attrsMap: Oi(o), parent: r, children: [] };
            p && (f.ns = p),
              Bi(f) &&
                !xr() &&
                ((f.forbidden = !0),
                Ko(
                  'Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <' +
                    t +
                    '>, as they will not be parsed.'
                ));
            for (var h = 0; h < tl.length; h++) tl[h](f, e);
            if ((l || (_i(f), f.pre && (l = !0)), nl(f.tag) && (c = !0), l)) ki(f);
            else {
              Ai(f), Si(f), Ii(f), Ti(f), (f.plain = !f.key && !o.length), Ci(f), Pi(f), Ei(f);
              for (var v = 0; v < Zo.length; v++) Zo[v](f, e);
              Fi(f);
            }
            if (
              (a
                ? s.length ||
                  (a.if && (f.elseif || f.else)
                    ? (u(f), Di(a, { exp: f.elseif, block: f }))
                    : n(
                        'Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.'
                      ))
                : ((a = f), u(a)),
              r && !f.forbidden)
            )
              if (f.elseif || f.else) $i(f, r);
              else if (f.slotScope) {
                r.plain = !1;
                var m = f.slotTarget || '"default"';
                (r.scopedSlots || (r.scopedSlots = {}))[m] = f;
              } else r.children.push(f), (f.parent = r);
            d ? i(f) : ((r = f), s.push(f));
            for (var g = 0; g < el.length; g++) el[g](f, e);
          },
          end: function () {
            var t = s[s.length - 1],
              e = t.children[t.children.length - 1];
            e && 3 === e.type && ' ' === e.text && !c && t.children.pop(), (s.length -= 1), (r = s[s.length - 1]), i(t);
          },
          chars: function (e) {
            if (!r)
              return void (e === t
                ? n('Component template requires a root element, rather than just text.')
                : (e = e.trim()) && n('text "' + e + '" outside root element will be ignored.'));
            if (!dr || 'textarea' !== r.tag || r.attrsMap.placeholder !== e) {
              var i = r.children;
              if ((e = c || e.trim() ? (Mi(r) ? e : Dl(e)) : o && i.length ? ' ' : '')) {
                var a;
                !l && ' ' !== e && (a = xi(e, Qo))
                  ? i.push({ type: 2, expression: a, text: e })
                  : (' ' === e && i.length && ' ' === i[i.length - 1].text) || i.push({ type: 3, text: e });
              }
            }
          },
        }),
        a
      );
    }
    function _i(t) {
      null != hn(t, 'v-pre') && (t.pre = !0);
    }
    function ki(t) {
      var e = t.attrsList.length;
      if (e)
        for (var n = (t.attrs = new Array(e)), i = 0; i < e; i++)
          n[i] = { name: t.attrsList[i].name, value: JSON.stringify(t.attrsList[i].value) };
      else t.pre || (t.plain = !0);
    }
    function Ti(t) {
      var e = fn(t, 'key');
      e && ('template' === t.tag && Ko('<template> cannot be keyed. Place the key on real elements instead.'), (t.key = e));
    }
    function Ci(t) {
      var e = fn(t, 'ref');
      e && ((t.ref = e), (t.refInFor = ji(t)));
    }
    function Ai(t) {
      var e;
      if ((e = hn(t, 'v-for'))) {
        var n = e.match(Cl);
        if (!n) return void Ko('Invalid v-for expression: ' + e);
        t.for = n[2].trim();
        var i = n[1].trim(),
          a = i.match(Al);
        a ? ((t.alias = a[1].trim()), (t.iterator1 = a[2].trim()), a[3] && (t.iterator2 = a[3].trim())) : (t.alias = i);
      }
    }
    function Si(t) {
      var e = hn(t, 'v-if');
      if (e) (t.if = e), Di(t, { exp: e, block: t });
      else {
        null != hn(t, 'v-else') && (t.else = !0);
        var n = hn(t, 'v-else-if');
        n && (t.elseif = n);
      }
    }
    function $i(t, e) {
      var n = Li(e.children);
      n && n.if
        ? Di(n, { exp: t.elseif, block: t })
        : Ko('v-' + (t.elseif ? 'else-if="' + t.elseif + '"' : 'else') + ' used on element <' + t.tag + '> without corresponding v-if.');
    }
    function Li(t) {
      for (var e = t.length; e--; ) {
        if (1 === t[e].type) return t[e];
        ' ' !== t[e].text && Ko('text "' + t[e].text.trim() + '" between v-if and v-else(-if) will be ignored.'), t.pop();
      }
    }
    function Di(t, e) {
      t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
    }
    function Ii(t) {
      null != hn(t, 'v-once') && (t.once = !0);
    }
    function Pi(t) {
      if ('slot' === t.tag)
        (t.slotName = fn(t, 'name')),
          t.key &&
            Ko(
              '`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.'
            );
      else {
        var e = fn(t, 'slot');
        e && (t.slotTarget = '""' === e ? '"default"' : e), 'template' === t.tag && (t.slotScope = hn(t, 'scope'));
      }
    }
    function Ei(t) {
      var e;
      (e = fn(t, 'is')) && (t.component = e), null != hn(t, 'inline-template') && (t.inlineTemplate = !0);
    }
    function Fi(t) {
      var e,
        n,
        i,
        a,
        r,
        s,
        o,
        l = t.attrsList;
      for (e = 0, n = l.length; e < n; e++)
        if (((i = a = l[e].name), (r = l[e].value), Tl.test(i)))
          if (((t.hasBindings = !0), (s = Ni(i)), s && (i = i.replace(Ll, '')), $l.test(i)))
            (i = i.replace($l, '')),
              (r = rn(r)),
              (o = !1),
              s &&
                (s.prop && ((o = !0), 'innerHtml' === (i = Ha(i)) && (i = 'innerHTML')),
                s.camel && (i = Ha(i)),
                s.sync && pn(t, 'update:' + Ha(i), mn(r, '$event'))),
              o || il(t.tag, t.attrsMap.type, i) ? cn(t, i, r) : dn(t, i, r);
          else if (kl.test(i)) (i = i.replace(kl, '')), pn(t, i, r, s, !1, Ko);
          else {
            i = i.replace(Tl, '');
            var c = i.match(Sl),
              d = c && c[1];
            d && (i = i.slice(0, -(d.length + 1))), un(t, i, a, r, d, s), 'model' === i && Hi(t, r);
          }
        else {
          var u = xi(r, Qo);
          u &&
            Ko(
              i +
                '="' +
                r +
                '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'
            ),
            dn(t, i, JSON.stringify(r));
        }
    }
    function ji(t) {
      for (var e = t; e; ) {
        if (void 0 !== e.for) return !0;
        e = e.parent;
      }
      return !1;
    }
    function Ni(t) {
      var e = t.match(Ll);
      if (e) {
        var n = {};
        return (
          e.forEach(function (t) {
            n[t.slice(1)] = !0;
          }),
          n
        );
      }
    }
    function Oi(t) {
      for (var e = {}, n = 0, i = t.length; n < i; n++)
        !e[t[n].name] || dr || pr || Ko('duplicate attribute: ' + t[n].name), (e[t[n].name] = t[n].value);
      return e;
    }
    function Mi(t) {
      return 'script' === t.tag || 'style' === t.tag;
    }
    function Bi(t) {
      return 'style' === t.tag || ('script' === t.tag && (!t.attrsMap.type || 'text/javascript' === t.attrsMap.type));
    }
    function Ri(t) {
      for (var e = [], n = 0; n < t.length; n++) {
        var i = t[n];
        Il.test(i.name) || ((i.name = i.name.replace(Pl, '')), e.push(i));
      }
      return e;
    }
    function Hi(t, e) {
      for (var n = t; n; )
        n.for &&
          n.alias === e &&
          Ko(
            '<' +
              t.tag +
              ' v-model="' +
              e +
              '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'
          ),
          (n = n.parent);
    }
    function qi(t, e) {
      t && ((rl = El(e.staticKeys || '')), (sl = e.isReservedTag || Va), zi(t), Vi(t, !1));
    }
    function Ui(t) {
      return c('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (t ? ',' + t : ''));
    }
    function zi(t) {
      if (((t.static = Yi(t)), 1 === t.type)) {
        if (!sl(t.tag) && 'slot' !== t.tag && null == t.attrsMap['inline-template']) return;
        for (var e = 0, n = t.children.length; e < n; e++) {
          var i = t.children[e];
          zi(i), i.static || (t.static = !1);
        }
      }
    }
    function Vi(t, e) {
      if (1 === t.type) {
        if (
          ((t.static || t.once) && (t.staticInFor = e),
          t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type))
        )
          return void (t.staticRoot = !0);
        if (((t.staticRoot = !1), t.children)) for (var n = 0, i = t.children.length; n < i; n++) Vi(t.children[n], e || !!t.for);
        t.ifConditions && Wi(t.ifConditions, e);
      }
    }
    function Wi(t, e) {
      for (var n = 1, i = t.length; n < i; n++) Vi(t[n].block, e);
    }
    function Yi(t) {
      return (
        2 !== t.type &&
        (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || Ma(t.tag) || !sl(t.tag) || Ji(t) || !Object.keys(t).every(rl))))
      );
    }
    function Ji(t) {
      for (; t.parent; ) {
        if (((t = t.parent), 'template' !== t.tag)) return !1;
        if (t.for) return !0;
      }
      return !1;
    }
    function Gi(t, e, n) {
      var i = e ? 'nativeOn:{' : 'on:{';
      for (var a in t) {
        var r = t[a];
        'click' === a &&
          r &&
          r.modifiers &&
          r.modifiers.right &&
          n('Use "contextmenu" instead of "click.right" since right clicks do not actually fire "click" events.'),
          (i += '"' + a + '":' + Xi(a, r) + ',');
      }
      return i.slice(0, -1) + '}';
    }
    function Xi(t, e) {
      if (!e) return 'function(){}';
      if (Array.isArray(e))
        return (
          '[' +
          e
            .map(function (e) {
              return Xi(t, e);
            })
            .join(',') +
          ']'
        );
      var n = jl.test(e.value),
        i = Fl.test(e.value);
      if (e.modifiers) {
        var a = '',
          r = '',
          s = [];
        for (var o in e.modifiers) Ml[o] ? ((r += Ml[o]), Nl[o] && s.push(o)) : s.push(o);
        s.length && (a += Ki(s)), r && (a += r);
        return 'function($event){' + a + (n ? e.value + '($event)' : i ? '(' + e.value + ')($event)' : e.value) + '}';
      }
      return n || i ? e.value : 'function($event){' + e.value + '}';
    }
    function Ki(t) {
      return "if(!('button' in $event)&&" + t.map(Qi).join('&&') + ')return null;';
    }
    function Qi(t) {
      var e = parseInt(t, 10);
      if (e) return '$event.keyCode!==' + e;
      var n = Nl[t];
      return '_k($event.keyCode,' + JSON.stringify(t) + (n ? ',' + JSON.stringify(n) : '') + ')';
    }
    function Zi(t, e) {
      t.wrapData = function (n) {
        return '_b(' + n + ",'" + t.tag + "'," + e.value + (e.modifiers && e.modifiers.prop ? ',true' : '') + ')';
      };
    }
    function ta(t, e) {
      var n = pl,
        i = (pl = []),
        a = fl;
      (fl = 0),
        (hl = e),
        (ol = e.warn || on),
        (ll = ln(e.modules, 'transformCode')),
        (cl = ln(e.modules, 'genData')),
        (dl = e.directives || {}),
        (ul = e.isReservedTag || Va);
      var r = t ? ea(t) : '_c("div")';
      return (pl = n), (fl = a), { render: 'with(this){return ' + r + '}', staticRenderFns: i };
    }
    function ea(t) {
      if (t.staticRoot && !t.staticProcessed) return na(t);
      if (t.once && !t.onceProcessed) return ia(t);
      if (t.for && !t.forProcessed) return sa(t);
      if (t.if && !t.ifProcessed) return aa(t);
      if ('template' !== t.tag || t.slotTarget) {
        if ('slot' === t.tag) return ba(t);
        var e;
        if (t.component) e = ya(t.component, t);
        else {
          var n = t.plain ? void 0 : oa(t),
            i = t.inlineTemplate ? null : pa(t, !0);
          e = "_c('" + t.tag + "'" + (n ? ',' + n : '') + (i ? ',' + i : '') + ')';
        }
        for (var a = 0; a < ll.length; a++) e = ll[a](t, e);
        return e;
      }
      return pa(t) || 'void 0';
    }
    function na(t) {
      return (
        (t.staticProcessed = !0),
        pl.push('with(this){return ' + ea(t) + '}'),
        '_m(' + (pl.length - 1) + (t.staticInFor ? ',true' : '') + ')'
      );
    }
    function ia(t) {
      if (((t.onceProcessed = !0), t.if && !t.ifProcessed)) return aa(t);
      if (t.staticInFor) {
        for (var e = '', n = t.parent; n; ) {
          if (n.for) {
            e = n.key;
            break;
          }
          n = n.parent;
        }
        return e
          ? '_o(' + ea(t) + ',' + fl++ + (e ? ',' + e : '') + ')'
          : (ol('v-once can only be used inside v-for that is keyed. '), ea(t));
      }
      return na(t);
    }
    function aa(t) {
      return (t.ifProcessed = !0), ra(t.ifConditions.slice());
    }
    function ra(t) {
      function e(t) {
        return t.once ? ia(t) : ea(t);
      }
      if (!t.length) return '_e()';
      var n = t.shift();
      return n.exp ? '(' + n.exp + ')?' + e(n.block) + ':' + ra(t) : '' + e(n.block);
    }
    function sa(t) {
      var e = t.for,
        n = t.alias,
        i = t.iterator1 ? ',' + t.iterator1 : '',
        a = t.iterator2 ? ',' + t.iterator2 : '';
      return (
        va(t) &&
          'slot' !== t.tag &&
          'template' !== t.tag &&
          !t.key &&
          ol(
            '<' +
              t.tag +
              ' v-for="' +
              n +
              ' in ' +
              e +
              '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.',
            !0
          ),
        (t.forProcessed = !0),
        '_l((' + e + '),function(' + n + i + a + '){return ' + ea(t) + '})'
      );
    }
    function oa(t) {
      var e = '{',
        n = la(t);
      n && (e += n + ','),
        t.key && (e += 'key:' + t.key + ','),
        t.ref && (e += 'ref:' + t.ref + ','),
        t.refInFor && (e += 'refInFor:true,'),
        t.pre && (e += 'pre:true,'),
        t.component && (e += 'tag:"' + t.tag + '",');
      for (var i = 0; i < cl.length; i++) e += cl[i](t);
      if (
        (t.attrs && (e += 'attrs:{' + xa(t.attrs) + '},'),
        t.props && (e += 'domProps:{' + xa(t.props) + '},'),
        t.events && (e += Gi(t.events, !1, ol) + ','),
        t.nativeEvents && (e += Gi(t.nativeEvents, !0, ol) + ','),
        t.slotTarget && (e += 'slot:' + t.slotTarget + ','),
        t.scopedSlots && (e += da(t.scopedSlots) + ','),
        t.model && (e += 'model:{value:' + t.model.value + ',callback:' + t.model.callback + ',expression:' + t.model.expression + '},'),
        t.inlineTemplate)
      ) {
        var a = ca(t);
        a && (e += a + ',');
      }
      return (e = e.replace(/,$/, '') + '}'), t.wrapData && (e = t.wrapData(e)), e;
    }
    function la(t) {
      var e = t.directives;
      if (e) {
        var n,
          i,
          a,
          r,
          s = 'directives:[',
          o = !1;
        for (n = 0, i = e.length; n < i; n++) {
          (a = e[n]), (r = !0);
          var l = dl[a.name] || Bl[a.name];
          l && (r = !!l(t, a, ol)),
            r &&
              ((o = !0),
              (s +=
                '{name:"' +
                a.name +
                '",rawName:"' +
                a.rawName +
                '"' +
                (a.value ? ',value:(' + a.value + '),expression:' + JSON.stringify(a.value) : '') +
                (a.arg ? ',arg:"' + a.arg + '"' : '') +
                (a.modifiers ? ',modifiers:' + JSON.stringify(a.modifiers) : '') +
                '},'));
        }
        return o ? s.slice(0, -1) + ']' : void 0;
      }
    }
    function ca(t) {
      var e = t.children[0];
      if (
        ((t.children.length > 1 || 1 !== e.type) && ol('Inline-template components must have exactly one child element.'), 1 === e.type)
      ) {
        var n = ta(e, hl);
        return (
          'inlineTemplate:{render:function(){' +
          n.render +
          '},staticRenderFns:[' +
          n.staticRenderFns
            .map(function (t) {
              return 'function(){' + t + '}';
            })
            .join(',') +
          ']}'
        );
      }
    }
    function da(t) {
      return (
        'scopedSlots:_u([' +
        Object.keys(t)
          .map(function (e) {
            return ua(e, t[e]);
          })
          .join(',') +
        '])'
      );
    }
    function ua(t, e) {
      return '[' + t + ',function(' + String(e.attrsMap.scope) + '){return ' + ('template' === e.tag ? pa(e) || 'void 0' : ea(e)) + '}]';
    }
    function pa(t, e) {
      var n = t.children;
      if (n.length) {
        var i = n[0];
        if (1 === n.length && i.for && 'template' !== i.tag && 'slot' !== i.tag) return ea(i);
        var a = e ? fa(n) : 0;
        return '[' + n.map(ma).join(',') + ']' + (a ? ',' + a : '');
      }
    }
    function fa(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        var i = t[n];
        if (1 === i.type) {
          if (
            ha(i) ||
            (i.ifConditions &&
              i.ifConditions.some(function (t) {
                return ha(t.block);
              }))
          ) {
            e = 2;
            break;
          }
          (va(i) ||
            (i.ifConditions &&
              i.ifConditions.some(function (t) {
                return va(t.block);
              }))) &&
            (e = 1);
        }
      }
      return e;
    }
    function ha(t) {
      return void 0 !== t.for || 'template' === t.tag || 'slot' === t.tag;
    }
    function va(t) {
      return !ul(t.tag);
    }
    function ma(t) {
      return 1 === t.type ? ea(t) : ga(t);
    }
    function ga(t) {
      return '_v(' + (2 === t.type ? t.expression : wa(JSON.stringify(t.text))) + ')';
    }
    function ba(t) {
      var e = t.slotName || '"default"',
        n = pa(t),
        i = '_t(' + e + (n ? ',' + n : ''),
        a =
          t.attrs &&
          '{' +
            t.attrs
              .map(function (t) {
                return Ha(t.name) + ':' + t.value;
              })
              .join(',') +
            '}',
        r = t.attrsMap['v-bind'];
      return (!a && !r) || n || (i += ',null'), a && (i += ',' + a), r && (i += (a ? '' : ',null') + ',' + r), i + ')';
    }
    function ya(t, e) {
      var n = e.inlineTemplate ? null : pa(e, !0);
      return '_c(' + t + ',' + oa(e) + (n ? ',' + n : '') + ')';
    }
    function xa(t) {
      for (var e = '', n = 0; n < t.length; n++) {
        var i = t[n];
        e += '"' + i.name + '":' + wa(i.value) + ',';
      }
      return e.slice(0, -1);
    }
    function wa(t) {
      return t.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    }
    function _a(t) {
      var e = [];
      return t && ka(t, e), e;
    }
    function ka(t, e) {
      if (1 === t.type) {
        for (var n in t.attrsMap)
          if (Tl.test(n)) {
            var i = t.attrsMap[n];
            i && ('v-for' === n ? Ca(t, 'v-for="' + i + '"', e) : kl.test(n) ? Ta(i, n + '="' + i + '"', e) : Sa(i, n + '="' + i + '"', e));
          }
        if (t.children) for (var a = 0; a < t.children.length; a++) ka(t.children[a], e);
      } else 2 === t.type && Sa(t.expression, t.text, e);
    }
    function Ta(t, e, n) {
      var i = t.replace(Ul, ''),
        a = i.match(Hl);
      a &&
        '$' !== i.charAt(a.index - 1) &&
        n.push('avoid using JavaScript unary operator as property name: "' + a[0] + '" in expression ' + e.trim()),
        Sa(t, e, n);
    }
    function Ca(t, e, n) {
      Sa(t.for || '', e, n),
        Aa(t.alias, 'v-for alias', e, n),
        Aa(t.iterator1, 'v-for iterator', e, n),
        Aa(t.iterator2, 'v-for iterator', e, n);
    }
    function Aa(t, e, n, i) {
      'string' != typeof t || ql.test(t) || i.push('invalid ' + e + ' "' + t + '" in expression: ' + n.trim());
    }
    function Sa(t, e, n) {
      try {
        new Function('return ' + t);
      } catch (a) {
        var i = t.replace(Ul, '').match(Rl);
        i
          ? n.push('avoid using JavaScript keyword as property name: "' + i[0] + '" in expression ' + e.trim())
          : n.push('invalid expression: ' + e.trim());
      }
    }
    function $a(t, e) {
      var n = wi(t.trim(), e);
      qi(n, e);
      var i = ta(n, e);
      return { ast: n, render: i.render, staticRenderFns: i.staticRenderFns };
    }
    function La(t, e) {
      try {
        return new Function(t);
      } catch (n) {
        return e.push({ err: n, code: t }), g;
      }
    }
    function Da(t, e) {
      var n = e.warn || on,
        i = hn(t, 'class');
      if (i) {
        xi(i, e.delimiters) &&
          n(
            'class="' +
              i +
              '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.'
          );
      }
      i && (t.staticClass = JSON.stringify(i));
      var a = fn(t, 'class', !1);
      a && (t.classBinding = a);
    }
    function Ia(t) {
      var e = '';
      return t.staticClass && (e += 'staticClass:' + t.staticClass + ','), t.classBinding && (e += 'class:' + t.classBinding + ','), e;
    }
    function Pa(t, e) {
      var n = e.warn || on,
        i = hn(t, 'style');
      if (i) {
        xi(i, e.delimiters) &&
          n(
            'style="' +
              i +
              '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'
          ),
          (t.staticStyle = JSON.stringify(io(i)));
      }
      var a = fn(t, 'style', !1);
      a && (t.styleBinding = a);
    }
    function Ea(t) {
      var e = '';
      return t.staticStyle && (e += 'staticStyle:' + t.staticStyle + ','), t.styleBinding && (e += 'style:(' + t.styleBinding + '),'), e;
    }
    function Fa(t, e) {
      e.value && cn(t, 'textContent', '_s(' + e.value + ')');
    }
    function ja(t, e) {
      e.value && cn(t, 'innerHTML', '_s(' + e.value + ')');
    }
    function Na(t) {
      if (t.outerHTML) return t.outerHTML;
      var e = document.createElement('div');
      return e.appendChild(t.cloneNode(!0)), e.innerHTML;
    }
    var Oa = Object.prototype.toString,
      Ma = c('slot,component', !0),
      Ba = Object.prototype.hasOwnProperty,
      Ra = /-(\w)/g,
      Ha = p(function (t) {
        return t.replace(Ra, function (t, e) {
          return e ? e.toUpperCase() : '';
        });
      }),
      qa = p(function (t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }),
      Ua = /([^-])([A-Z])/g,
      za = p(function (t) {
        return t.replace(Ua, '$1-$2').replace(Ua, '$1-$2').toLowerCase();
      }),
      Va = function () {
        return !1;
      },
      Wa = function (t) {
        return t;
      },
      Ya = 'data-server-rendered',
      Ja = ['component', 'directive', 'filter'],
      Ga = [
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeUpdate',
        'updated',
        'beforeDestroy',
        'destroyed',
        'activated',
        'deactivated',
      ],
      Xa = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !0,
        devtools: !0,
        performance: !1,
        errorHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: Va,
        isReservedAttr: Va,
        isUnknownElement: Va,
        getTagNamespace: g,
        parsePlatformTagName: Wa,
        mustUseProp: Va,
        _lifecycleHooks: Ga,
      },
      Ka = Object.freeze({}),
      Qa = /[^\w.$]/,
      Za = g,
      tr = g,
      er = null,
      nr = 'undefined' != typeof console,
      ir = /(?:^|[-_])(\w)/g,
      ar = function (t) {
        return t
          .replace(ir, function (t) {
            return t.toUpperCase();
          })
          .replace(/[-_]/g, '');
      };
    (Za = function (t, e) {
      nr && !Xa.silent && console.error('[Vue warn]: ' + t + (e ? sr(e) : ''));
    }),
      (tr = function (t, e) {
        nr && !Xa.silent && console.warn('[Vue tip]: ' + t + (e ? sr(e) : ''));
      }),
      (er = function (t, e) {
        if (t.$root === t) return '<Root>';
        var n =
            'string' == typeof t
              ? t
              : 'function' == typeof t && t.options
              ? t.options.name
              : t._isVue
              ? t.$options.name || t.$options._componentTag
              : t.name,
          i = t._isVue && t.$options.__file;
        if (!n && i) {
          var a = i.match(/([^\/\\]+)\.vue$/);
          n = a && a[1];
        }
        return (n ? '<' + ar(n) + '>' : '<Anonymous>') + (i && !1 !== e ? ' at ' + i : '');
      });
    var rr = function (t, e) {
        for (var n = ''; e; ) e % 2 == 1 && (n += t), e > 1 && (t += t), (e >>= 1);
        return n;
      },
      sr = function (t) {
        if (t._isVue && t.$parent) {
          for (var e = [], n = 0; t; ) {
            if (e.length > 0) {
              var i = e[e.length - 1];
              if (i.constructor === t.constructor) {
                n++, (t = t.$parent);
                continue;
              }
              n > 0 && ((e[e.length - 1] = [i, n]), (n = 0));
            }
            e.push(t), (t = t.$parent);
          }
          return (
            '\n\nfound in\n\n' +
            e
              .map(function (t, e) {
                return (
                  '' +
                  (0 === e ? '---\x3e ' : rr(' ', 5 + 2 * e)) +
                  (Array.isArray(t) ? er(t[0]) + '... (' + t[1] + ' recursive calls)' : er(t))
                );
              })
              .join('\n')
          );
        }
        return '\n\n(found in ' + er(t) + ')';
      },
      or = '__proto__' in {},
      lr = 'undefined' != typeof window,
      cr = lr && window.navigator.userAgent.toLowerCase(),
      dr = cr && /msie|trident/.test(cr),
      ur = cr && cr.indexOf('msie 9.0') > 0,
      pr = cr && cr.indexOf('edge/') > 0,
      fr = cr && cr.indexOf('android') > 0,
      hr = cr && /iphone|ipad|ipod|ios/.test(cr),
      vr = cr && /chrome\/\d+/.test(cr) && !pr,
      mr = !1;
    if (lr)
      try {
        var gr = {};
        Object.defineProperty(gr, 'passive', {
          get: function () {
            mr = !0;
          },
        }),
          window.addEventListener('test-passive', null, gr);
      } catch (t) {}
    var br,
      yr,
      xr = function () {
        return void 0 === br && (br = !lr && 'undefined' != typeof global && 'server' === global.process.env.VUE_ENV), br;
      },
      wr = lr && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      _r = 'undefined' != typeof Symbol && C(Symbol) && 'undefined' != typeof Reflect && C(Reflect.ownKeys),
      kr = (function () {
        function t() {
          i = !1;
          var t = n.slice(0);
          n.length = 0;
          for (var e = 0; e < t.length; e++) t[e]();
        }
        var e,
          n = [],
          i = !1;
        if ('undefined' != typeof Promise && C(Promise)) {
          var a = Promise.resolve(),
            r = function (t) {
              console.error(t);
            };
          e = function () {
            a.then(t).catch(r), hr && setTimeout(g);
          };
        } else if (
          'undefined' == typeof MutationObserver ||
          (!C(MutationObserver) && '[object MutationObserverConstructor]' !== MutationObserver.toString())
        )
          e = function () {
            setTimeout(t, 0);
          };
        else {
          var s = 1,
            o = new MutationObserver(t),
            l = document.createTextNode(String(s));
          o.observe(l, { characterData: !0 }),
            (e = function () {
              (s = (s + 1) % 2), (l.data = String(s));
            });
        }
        return function (t, a) {
          var r;
          if (
            (n.push(function () {
              if (t)
                try {
                  t.call(a);
                } catch (t) {
                  T(t, a, 'nextTick');
                }
              else r && r(a);
            }),
            i || ((i = !0), e()),
            !t && 'undefined' != typeof Promise)
          )
            return new Promise(function (t, e) {
              r = t;
            });
        };
      })();
    yr =
      'undefined' != typeof Set && C(Set)
        ? Set
        : (function () {
            function t() {
              this.set = Object.create(null);
            }
            return (
              (t.prototype.has = function (t) {
                return !0 === this.set[t];
              }),
              (t.prototype.add = function (t) {
                this.set[t] = !0;
              }),
              (t.prototype.clear = function () {
                this.set = Object.create(null);
              }),
              t
            );
          })();
    var Tr = 0,
      Cr = function () {
        (this.id = Tr++), (this.subs = []);
      };
    (Cr.prototype.addSub = function (t) {
      this.subs.push(t);
    }),
      (Cr.prototype.removeSub = function (t) {
        d(this.subs, t);
      }),
      (Cr.prototype.depend = function () {
        Cr.target && Cr.target.addDep(this);
      }),
      (Cr.prototype.notify = function () {
        for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
      }),
      (Cr.target = null);
    var Ar = [],
      Sr = Array.prototype,
      $r = Object.create(Sr);
    ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (t) {
      var e = Sr[t];
      _($r, t, function () {
        for (var n = arguments, i = arguments.length, a = new Array(i); i--; ) a[i] = n[i];
        var r,
          s = e.apply(this, a),
          o = this.__ob__;
        switch (t) {
          case 'push':
          case 'unshift':
            r = a;
            break;
          case 'splice':
            r = a.slice(2);
        }
        return r && o.observeArray(r), o.dep.notify(), s;
      });
    });
    var Lr = Object.getOwnPropertyNames($r),
      Dr = { shouldConvert: !0, isSettingProps: !1 },
      Ir = function (t) {
        if (((this.value = t), (this.dep = new Cr()), (this.vmCount = 0), _(t, '__ob__', this), Array.isArray(t))) {
          (or ? $ : L)(t, $r, Lr), this.observeArray(t);
        } else this.walk(t);
      };
    (Ir.prototype.walk = function (t) {
      for (var e = Object.keys(t), n = 0; n < e.length; n++) I(t, e[n], t[e[n]]);
    }),
      (Ir.prototype.observeArray = function (t) {
        for (var e = 0, n = t.length; e < n; e++) D(t[e]);
      });
    var Pr = Xa.optionMergeStrategies;
    (Pr.el = Pr.propsData =
      function (t, e, n, i) {
        return n || Za('option "' + i + '" can only be used during instance creation with the `new` keyword.'), jr(t, e);
      }),
      (Pr.data = function (t, e, n) {
        return n
          ? t || e
            ? function () {
                var i = 'function' == typeof e ? e.call(n) : e,
                  a = 'function' == typeof t ? t.call(n) : void 0;
                return i ? j(i, a) : a;
              }
            : void 0
          : e
          ? 'function' != typeof e
            ? (Za('The "data" option should be a function that returns a per-instance value in component definitions.', n), t)
            : t
            ? function () {
                return j(e.call(this), t.call(this));
              }
            : e
          : t;
      }),
      Ga.forEach(function (t) {
        Pr[t] = N;
      }),
      Ja.forEach(function (t) {
        Pr[t + 's'] = O;
      }),
      (Pr.watch = function (t, e) {
        if (!e) return Object.create(t || null);
        if (!t) return e;
        var n = {};
        v(n, t);
        for (var i in e) {
          var a = n[i],
            r = e[i];
          a && !Array.isArray(a) && (a = [a]), (n[i] = a ? a.concat(r) : [r]);
        }
        return n;
      }),
      (Pr.props =
        Pr.methods =
        Pr.computed =
          function (t, e) {
            if (!e) return Object.create(t || null);
            if (!t) return e;
            var n = Object.create(null);
            return v(n, t), v(n, e), n;
          });
    var Er,
      Fr,
      jr = function (t, e) {
        return void 0 === e ? t : e;
      },
      Nr = /^(String|Number|Boolean|Function|Symbol)$/,
      Or = lr && window.performance;
    Or &&
      Or.mark &&
      Or.measure &&
      Or.clearMarks &&
      Or.clearMeasures &&
      ((Er = function (t) {
        return Or.mark(t);
      }),
      (Fr = function (t, e, n) {
        Or.measure(t, e, n), Or.clearMarks(e), Or.clearMarks(n), Or.clearMeasures(t);
      }));
    var Mr,
      Br = c(
        'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require'
      ),
      Rr = function (t, e) {
        Za(
          'Property or method "' +
            e +
            '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.',
          t
        );
      },
      Hr = 'undefined' != typeof Proxy && Proxy.toString().match(/native code/);
    if (Hr) {
      var qr = c('stop,prevent,self,ctrl,shift,alt,meta');
      Xa.keyCodes = new Proxy(Xa.keyCodes, {
        set: function (t, e, n) {
          return qr(e) ? (Za('Avoid overwriting built-in modifier in config.keyCodes: .' + e), !1) : ((t[e] = n), !0);
        },
      });
    }
    var Ur = {
        has: function (t, e) {
          var n = e in t,
            i = Br(e) || '_' === e.charAt(0);
          return n || i || Rr(t, e), n || !i;
        },
      },
      zr = {
        get: function (t, e) {
          return 'string' != typeof e || e in t || Rr(t, e), t[e];
        },
      };
    Mr = function (t) {
      if (Hr) {
        var e = t.$options,
          n = e.render && e.render._withStripped ? zr : Ur;
        t._renderProxy = new Proxy(t, n);
      } else t._renderProxy = t;
    };
    var Vr = function (t, e, n, i, a, r, s) {
        (this.tag = t),
          (this.data = e),
          (this.children = n),
          (this.text = i),
          (this.elm = a),
          (this.ns = void 0),
          (this.context = r),
          (this.functionalContext = void 0),
          (this.key = e && e.key),
          (this.componentOptions = s),
          (this.componentInstance = void 0),
          (this.parent = void 0),
          (this.raw = !1),
          (this.isStatic = !1),
          (this.isRootInsert = !0),
          (this.isComment = !1),
          (this.isCloned = !1),
          (this.isOnce = !1);
      },
      Wr = { child: {} };
    (Wr.child.get = function () {
      return this.componentInstance;
    }),
      Object.defineProperties(Vr.prototype, Wr);
    var Yr,
      Jr = function () {
        var t = new Vr();
        return (t.text = ''), (t.isComment = !0), t;
      },
      Gr = p(function (t) {
        var e = '&' === t.charAt(0);
        t = e ? t.slice(1) : t;
        var n = '~' === t.charAt(0);
        t = n ? t.slice(1) : t;
        var i = '!' === t.charAt(0);
        return (t = i ? t.slice(1) : t), { name: t, once: n, capture: i, passive: e };
      }),
      Xr = null,
      Kr = 100,
      Qr = [],
      Zr = [],
      ts = {},
      es = {},
      ns = !1,
      is = !1,
      as = 0,
      rs = 0,
      ss = function (t, e, n, i) {
        (this.vm = t),
          t._watchers.push(this),
          i
            ? ((this.deep = !!i.deep), (this.user = !!i.user), (this.lazy = !!i.lazy), (this.sync = !!i.sync))
            : (this.deep = this.user = this.lazy = this.sync = !1),
          (this.cb = n),
          (this.id = ++rs),
          (this.active = !0),
          (this.dirty = this.lazy),
          (this.deps = []),
          (this.newDeps = []),
          (this.depIds = new yr()),
          (this.newDepIds = new yr()),
          (this.expression = e.toString()),
          'function' == typeof e
            ? (this.getter = e)
            : ((this.getter = k(e)),
              this.getter ||
                ((this.getter = function () {}),
                Za(
                  'Failed watching path: "' +
                    e +
                    '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.',
                  t
                ))),
          (this.value = this.lazy ? void 0 : this.get());
      };
    (ss.prototype.get = function () {
      A(this);
      var t,
        e = this.vm;
      if (this.user)
        try {
          t = this.getter.call(e, e);
        } catch (t) {
          T(t, e, 'getter for watcher "' + this.expression + '"');
        }
      else t = this.getter.call(e, e);
      return this.deep && Lt(t), S(), this.cleanupDeps(), t;
    }),
      (ss.prototype.addDep = function (t) {
        var e = t.id;
        this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
      }),
      (ss.prototype.cleanupDeps = function () {
        for (var t = this, e = this.deps.length; e--; ) {
          var n = t.deps[e];
          t.newDepIds.has(n.id) || n.removeSub(t);
        }
        var i = this.depIds;
        (this.depIds = this.newDepIds),
          (this.newDepIds = i),
          this.newDepIds.clear(),
          (i = this.deps),
          (this.deps = this.newDeps),
          (this.newDeps = i),
          (this.newDeps.length = 0);
      }),
      (ss.prototype.update = function () {
        this.lazy ? (this.dirty = !0) : this.sync ? this.run() : $t(this);
      }),
      (ss.prototype.run = function () {
        if (this.active) {
          var t = this.get();
          if (t !== this.value || a(t) || this.deep) {
            var e = this.value;
            if (((this.value = t), this.user))
              try {
                this.cb.call(this.vm, t, e);
              } catch (t) {
                T(t, this.vm, 'callback for watcher "' + this.expression + '"');
              }
            else this.cb.call(this.vm, t, e);
          }
        }
      }),
      (ss.prototype.evaluate = function () {
        (this.value = this.get()), (this.dirty = !1);
      }),
      (ss.prototype.depend = function () {
        for (var t = this, e = this.deps.length; e--; ) t.deps[e].depend();
      }),
      (ss.prototype.teardown = function () {
        var t = this;
        if (this.active) {
          this.vm._isBeingDestroyed || d(this.vm._watchers, this);
          for (var e = this.deps.length; e--; ) t.deps[e].removeSub(t);
          this.active = !1;
        }
      });
    var os = new yr(),
      ls = { enumerable: !0, configurable: !0, get: g, set: g },
      cs = { key: 1, ref: 1, slot: 1 },
      ds = { lazy: !0 },
      us = {
        init: function (t, e, n, i) {
          if (!t.componentInstance || t.componentInstance._isDestroyed) {
            (t.componentInstance = Jt(t, Xr, n, i)).$mount(e ? t.elm : void 0, e);
          } else if (t.data.keepAlive) {
            var a = t;
            us.prepatch(a, a);
          }
        },
        prepatch: function (t, e) {
          var n = e.componentOptions;
          bt((e.componentInstance = t.componentInstance), n.propsData, n.listeners, e, n.children);
        },
        insert: function (t) {
          var e = t.context,
            n = t.componentInstance;
          n._isMounted || ((n._isMounted = !0), _t(n, 'mounted')), t.data.keepAlive && (e._isMounted ? At(n) : xt(n, !0));
        },
        destroy: function (t) {
          var e = t.componentInstance;
          e._isDestroyed || (t.data.keepAlive ? wt(e, !0) : e.$destroy());
        },
      },
      ps = Object.keys(us),
      fs = 1,
      hs = 2,
      vs = 0;
    !(function (t) {
      t.prototype._init = function (t) {
        var e = this;
        e._uid = vs++;
        var n, i;
        Xa.performance && Er && ((n = 'vue-perf-init:' + e._uid), (i = 'vue-perf-end:' + e._uid), Er(n)),
          (e._isVue = !0),
          t && t._isComponent ? ue(e, t) : (e.$options = H(pe(e.constructor), t || {}, e)),
          Mr(e),
          (e._self = e),
          mt(e),
          ct(e),
          de(e),
          _t(e, 'beforeCreate'),
          Ut(e),
          Pt(e),
          qt(e),
          _t(e, 'created'),
          Xa.performance && Er && ((e._name = er(e, !1)), Er(i), Fr(e._name + ' init', n, i)),
          e.$options.el && e.$mount(e.$options.el);
      };
    })(ve),
      (function (t) {
        var e = {};
        e.get = function () {
          return this._data;
        };
        var n = {};
        (n.get = function () {
          return this._props;
        }),
          (e.set = function (t) {
            Za('Avoid replacing instance root $data. Use nested data properties instead.', this);
          }),
          (n.set = function () {
            Za('$props is readonly.', this);
          }),
          Object.defineProperty(t.prototype, '$data', e),
          Object.defineProperty(t.prototype, '$props', n),
          (t.prototype.$set = P),
          (t.prototype.$delete = E),
          (t.prototype.$watch = function (t, e, n) {
            var i = this;
            (n = n || {}), (n.user = !0);
            var a = new ss(i, t, e, n);
            return (
              n.immediate && e.call(i, a.value),
              function () {
                a.teardown();
              }
            );
          });
      })(ve),
      (function (t) {
        var e = /^hook:/;
        (t.prototype.$on = function (t, n) {
          var i = this,
            a = this;
          if (Array.isArray(t)) for (var r = 0, s = t.length; r < s; r++) i.$on(t[r], n);
          else (a._events[t] || (a._events[t] = [])).push(n), e.test(t) && (a._hasHookEvent = !0);
          return a;
        }),
          (t.prototype.$once = function (t, e) {
            function n() {
              i.$off(t, n), e.apply(i, arguments);
            }
            var i = this;
            return (n.fn = e), i.$on(t, n), i;
          }),
          (t.prototype.$off = function (t, e) {
            var n = this,
              i = this;
            if (!arguments.length) return (i._events = Object.create(null)), i;
            if (Array.isArray(t)) {
              for (var a = 0, r = t.length; a < r; a++) n.$off(t[a], e);
              return i;
            }
            var s = i._events[t];
            if (!s) return i;
            if (1 === arguments.length) return (i._events[t] = null), i;
            for (var o, l = s.length; l--; )
              if ((o = s[l]) === e || o.fn === e) {
                s.splice(l, 1);
                break;
              }
            return i;
          }),
          (t.prototype.$emit = function (t) {
            var e = this,
              n = t.toLowerCase();
            n !== t &&
              e._events[n] &&
              tr(
                'Event "' +
                  n +
                  '" is emitted in component ' +
                  er(e) +
                  ' but the handler is registered for "' +
                  t +
                  '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' +
                  za(t) +
                  '" instead of "' +
                  t +
                  '".'
              );
            var i = e._events[t];
            if (i) {
              i = i.length > 1 ? h(i) : i;
              for (var a = h(arguments, 1), r = 0, s = i.length; r < s; r++) i[r].apply(e, a);
            }
            return e;
          });
      })(ve),
      (function (t) {
        (t.prototype._update = function (t, e) {
          var n = this;
          n._isMounted && _t(n, 'beforeUpdate');
          var i = n.$el,
            a = n._vnode,
            r = Xr;
          (Xr = n),
            (n._vnode = t),
            (n.$el = a ? n.__patch__(a, t) : n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm)),
            (Xr = r),
            i && (i.__vue__ = null),
            n.$el && (n.$el.__vue__ = n),
            n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
        }),
          (t.prototype.$forceUpdate = function () {
            var t = this;
            t._watcher && t._watcher.update();
          }),
          (t.prototype.$destroy = function () {
            var t = this;
            if (!t._isBeingDestroyed) {
              _t(t, 'beforeDestroy'), (t._isBeingDestroyed = !0);
              var e = t.$parent;
              !e || e._isBeingDestroyed || t.$options.abstract || d(e.$children, t), t._watcher && t._watcher.teardown();
              for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
              t._data.__ob__ && t._data.__ob__.vmCount--,
                (t._isDestroyed = !0),
                t.__patch__(t._vnode, null),
                _t(t, 'destroyed'),
                t.$off(),
                t.$el && (t.$el.__vue__ = null),
                (t.$options._parentElm = t.$options._refElm = null);
            }
          });
      })(ve),
      (function (t) {
        (t.prototype.$nextTick = function (t) {
          return kr(t, this);
        }),
          (t.prototype._render = function () {
            var t = this,
              e = t.$options,
              n = e.render,
              i = e.staticRenderFns,
              a = e._parentVnode;
            if (t._isMounted) for (var r in t.$slots) t.$slots[r] = K(t.$slots[r]);
            (t.$scopedSlots = (a && a.data.scopedSlots) || Ka), i && !t._staticTrees && (t._staticTrees = []), (t.$vnode = a);
            var s;
            try {
              s = n.call(t._renderProxy, t.$createElement);
            } catch (e) {
              T(e, t, 'render function'),
                (s = t.$options.renderError ? t.$options.renderError.call(t._renderProxy, t.$createElement, e) : t._vnode);
            }
            return (
              s instanceof Vr ||
                (Array.isArray(s) &&
                  Za('Multiple root nodes returned from render function. Render function should return a single root node.', t),
                (s = Jr())),
              (s.parent = a),
              s
            );
          }),
          (t.prototype._o = oe),
          (t.prototype._n = l),
          (t.prototype._s = o),
          (t.prototype._l = ee),
          (t.prototype._t = ne),
          (t.prototype._q = b),
          (t.prototype._i = y),
          (t.prototype._m = se),
          (t.prototype._f = ie),
          (t.prototype._k = ae),
          (t.prototype._b = re),
          (t.prototype._v = G),
          (t.prototype._e = Jr),
          (t.prototype._u = vt);
      })(ve);
    var ms = [String, RegExp],
      gs = {
        name: 'keep-alive',
        abstract: !0,
        props: { include: ms, exclude: ms },
        created: function () {
          this.cache = Object.create(null);
        },
        destroyed: function () {
          var t = this;
          for (var e in t.cache) Ce(t.cache[e]);
        },
        watch: {
          include: function (t) {
            Te(this.cache, this._vnode, function (e) {
              return ke(t, e);
            });
          },
          exclude: function (t) {
            Te(this.cache, this._vnode, function (e) {
              return !ke(t, e);
            });
          },
        },
        render: function () {
          var t = lt(this.$slots.default),
            e = t && t.componentOptions;
          if (e) {
            var n = _e(e);
            if (n && ((this.include && !ke(this.include, n)) || (this.exclude && ke(this.exclude, n)))) return t;
            var i = null == t.key ? e.Ctor.cid + (e.tag ? '::' + e.tag : '') : t.key;
            this.cache[i] ? (t.componentInstance = this.cache[i].componentInstance) : (this.cache[i] = t), (t.data.keepAlive = !0);
          }
          return t;
        },
      },
      bs = { KeepAlive: gs };
    !(function (t) {
      var e = {};
      (e.get = function () {
        return Xa;
      }),
        (e.set = function () {
          Za('Do not replace the Vue.config object, set individual fields instead.');
        }),
        Object.defineProperty(t, 'config', e),
        (t.util = { warn: Za, extend: v, mergeOptions: H, defineReactive: I }),
        (t.set = P),
        (t.delete = E),
        (t.nextTick = kr),
        (t.options = Object.create(null)),
        Ja.forEach(function (e) {
          t.options[e + 's'] = Object.create(null);
        }),
        (t.options._base = t),
        v(t.options.components, bs),
        me(t),
        ge(t),
        be(t),
        we(t);
    })(ve),
      Object.defineProperty(ve.prototype, '$isServer', { get: xr }),
      Object.defineProperty(ve.prototype, '$ssrContext', {
        get: function () {
          return this.$vnode.ssrContext;
        },
      }),
      (ve.version = '2.3.2');
    var ys,
      xs,
      ws,
      _s,
      ks,
      Ts,
      Cs,
      As,
      Ss,
      $s = c('style,class'),
      Ls = c('input,textarea,option,select'),
      Ds = function (t, e, n) {
        return (
          ('value' === n && Ls(t) && 'button' !== e) ||
          ('selected' === n && 'option' === t) ||
          ('checked' === n && 'input' === t) ||
          ('muted' === n && 'video' === t)
        );
      },
      Is = c('contenteditable,draggable,spellcheck'),
      Ps = c(
        'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible'
      ),
      Es = 'http://www.w3.org/1999/xlink',
      Fs = function (t) {
        return ':' === t.charAt(5) && 'xlink' === t.slice(0, 5);
      },
      js = function (t) {
        return Fs(t) ? t.slice(6, t.length) : '';
      },
      Ns = function (t) {
        return null == t || !1 === t;
      },
      Os = { svg: 'http://www.w3.org/2000/svg', math: 'http://www.w3.org/1998/Math/MathML' },
      Ms = c(
        'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template'
      ),
      Bs = c(
        'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
        !0
      ),
      Rs = function (t) {
        return 'pre' === t;
      },
      Hs = function (t) {
        return Ms(t) || Bs(t);
      },
      qs = Object.create(null),
      Us = Object.freeze({
        createElement: Fe,
        createElementNS: je,
        createTextNode: Ne,
        createComment: Oe,
        insertBefore: Me,
        removeChild: Be,
        appendChild: Re,
        parentNode: He,
        nextSibling: qe,
        tagName: Ue,
        setTextContent: ze,
        setAttribute: Ve,
      }),
      zs = {
        create: function (t, e) {
          We(e);
        },
        update: function (t, e) {
          t.data.ref !== e.data.ref && (We(t, !0), We(e));
        },
        destroy: function (t) {
          We(t, !0);
        },
      },
      Vs = new Vr('', {}, []),
      Ws = ['create', 'activate', 'update', 'remove', 'destroy'],
      Ys = {
        create: Xe,
        update: Xe,
        destroy: function (t) {
          Xe(t, Vs);
        },
      },
      Js = Object.create(null),
      Gs = [zs, Ys],
      Xs = { create: en, update: en },
      Ks = { create: an, update: an },
      Qs = /[\w).+\-_$\]]/,
      Zs = '__r',
      to = '__c',
      eo = { create: In, update: In },
      no = { create: Pn, update: Pn },
      io = p(function (t) {
        var e = {},
          n = /;(?![^(]*\))/g,
          i = /:(.+)/;
        return (
          t.split(n).forEach(function (t) {
            if (t) {
              var n = t.split(i);
              n.length > 1 && (e[n[0].trim()] = n[1].trim());
            }
          }),
          e
        );
      }),
      ao = /^--/,
      ro = /\s*!important$/,
      so = function (t, e, n) {
        if (ao.test(e)) t.style.setProperty(e, n);
        else if (ro.test(n)) t.style.setProperty(e, n.replace(ro, ''), 'important');
        else {
          var i = lo(e);
          if (Array.isArray(n)) for (var a = 0, r = n.length; a < r; a++) t.style[i] = n[a];
          else t.style[i] = n;
        }
      },
      oo = ['Webkit', 'Moz', 'ms'],
      lo = p(function (t) {
        if (((Ss = Ss || document.createElement('div')), 'filter' !== (t = Ha(t)) && t in Ss.style)) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < oo.length; n++) {
          var i = oo[n] + e;
          if (i in Ss.style) return i;
        }
      }),
      co = { create: Bn, update: Bn },
      uo = p(function (t) {
        return {
          enterClass: t + '-enter',
          enterToClass: t + '-enter-to',
          enterActiveClass: t + '-enter-active',
          leaveClass: t + '-leave',
          leaveToClass: t + '-leave-to',
          leaveActiveClass: t + '-leave-active',
        };
      }),
      po = lr && !ur,
      fo = 'transition',
      ho = 'animation',
      vo = 'transition',
      mo = 'transitionend',
      go = 'animation',
      bo = 'animationend';
    po &&
      (void 0 === window.ontransitionend &&
        void 0 !== window.onwebkittransitionend &&
        ((vo = 'WebkitTransition'), (mo = 'webkitTransitionEnd')),
      void 0 === window.onanimationend &&
        void 0 !== window.onwebkitanimationend &&
        ((go = 'WebkitAnimation'), (bo = 'webkitAnimationEnd')));
    var yo = lr && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
      xo = /\b(transform|all)(,|$)/,
      wo = lr
        ? {
            create: ei,
            activate: ei,
            remove: function (t, e) {
              !0 !== t.data.show ? Kn(t, e) : e();
            },
          }
        : {},
      _o = [Xs, Ks, eo, no, co, wo],
      ko = _o.concat(Gs),
      To = (function (a) {
        function r(t) {
          return new Vr(I.tagName(t).toLowerCase(), {}, [], void 0, t);
        }
        function s(t, e) {
          function n() {
            0 == --n.listeners && o(t);
          }
          return (n.listeners = e), n;
        }
        function o(t) {
          var n = I.parentNode(t);
          e(n) && I.removeChild(n, t);
        }
        function l(t, i, a, r, s) {
          if (((t.isRootInsert = !s), !d(t, i, a, r))) {
            var o = t.data,
              l = t.children,
              c = t.tag;
            e(c)
              ? (o && o.pre && P++,
                P ||
                  t.ns ||
                  (Xa.ignoredElements.length && Xa.ignoredElements.indexOf(c) > -1) ||
                  !Xa.isUnknownElement(c) ||
                  Za(
                    'Unknown custom element: <' +
                      c +
                      '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.',
                    t.context
                  ),
                (t.elm = t.ns ? I.createElementNS(t.ns, c) : I.createElement(c, t)),
                g(t),
                h(t, l, i),
                e(o) && m(t, i),
                f(a, t.elm, r),
                o && o.pre && P--)
              : n(t.isComment)
              ? ((t.elm = I.createComment(t.text)), f(a, t.elm, r))
              : ((t.elm = I.createTextNode(t.text)), f(a, t.elm, r));
          }
        }
        function d(t, i, a, r) {
          var s = t.data;
          if (e(s)) {
            var o = e(t.componentInstance) && s.keepAlive;
            if ((e((s = s.hook)) && e((s = s.init)) && s(t, !1, a, r), e(t.componentInstance))) return u(t, i), n(o) && p(t, i, a, r), !0;
          }
        }
        function u(t, n) {
          e(t.data.pendingInsert) && n.push.apply(n, t.data.pendingInsert),
            (t.elm = t.componentInstance.$el),
            v(t) ? (m(t, n), g(t)) : (We(t), n.push(t));
        }
        function p(t, n, i, a) {
          for (var r, s = t; s.componentInstance; )
            if (((s = s.componentInstance._vnode), e((r = s.data)) && e((r = r.transition)))) {
              for (r = 0; r < L.activate.length; ++r) L.activate[r](Vs, s);
              n.push(s);
              break;
            }
          f(i, t.elm, a);
        }
        function f(t, n, i) {
          e(t) && (e(i) ? i.parentNode === t && I.insertBefore(t, n, i) : I.appendChild(t, n));
        }
        function h(t, e, n) {
          if (Array.isArray(e)) for (var a = 0; a < e.length; ++a) l(e[a], n, t.elm, null, !0);
          else i(t.text) && I.appendChild(t.elm, I.createTextNode(t.text));
        }
        function v(t) {
          for (; t.componentInstance; ) t = t.componentInstance._vnode;
          return e(t.tag);
        }
        function m(t, n) {
          for (var i = 0; i < L.create.length; ++i) L.create[i](Vs, t);
          (S = t.data.hook), e(S) && (e(S.create) && S.create(Vs, t), e(S.insert) && n.push(t));
        }
        function g(t) {
          for (var n, i = t; i; ) e((n = i.context)) && e((n = n.$options._scopeId)) && I.setAttribute(t.elm, n, ''), (i = i.parent);
          e((n = Xr)) && n !== t.context && e((n = n.$options._scopeId)) && I.setAttribute(t.elm, n, '');
        }
        function b(t, e, n, i, a, r) {
          for (; i <= a; ++i) l(n[i], r, t, e);
        }
        function y(t) {
          var n,
            i,
            a = t.data;
          if (e(a)) for (e((n = a.hook)) && e((n = n.destroy)) && n(t), n = 0; n < L.destroy.length; ++n) L.destroy[n](t);
          if (e((n = t.children))) for (i = 0; i < t.children.length; ++i) y(t.children[i]);
        }
        function x(t, n, i, a) {
          for (; i <= a; ++i) {
            var r = n[i];
            e(r) && (e(r.tag) ? (w(r), y(r)) : o(r.elm));
          }
        }
        function w(t, n) {
          if (e(n) || e(t.data)) {
            var i,
              a = L.remove.length + 1;
            for (
              e(n) ? (n.listeners += a) : (n = s(t.elm, a)),
                e((i = t.componentInstance)) && e((i = i._vnode)) && e(i.data) && w(i, n),
                i = 0;
              i < L.remove.length;
              ++i
            )
              L.remove[i](t, n);
            e((i = t.data.hook)) && e((i = i.remove)) ? i(t, n) : n();
          } else o(t.elm);
        }
        function _(n, i, a, r, s) {
          for (
            var o, c, d, u, p = 0, f = 0, h = i.length - 1, v = i[0], m = i[h], g = a.length - 1, y = a[0], w = a[g], _ = !s;
            p <= h && f <= g;

          )
            t(v)
              ? (v = i[++p])
              : t(m)
              ? (m = i[--h])
              : Ye(v, y)
              ? (k(v, y, r), (v = i[++p]), (y = a[++f]))
              : Ye(m, w)
              ? (k(m, w, r), (m = i[--h]), (w = a[--g]))
              : Ye(v, w)
              ? (k(v, w, r), _ && I.insertBefore(n, v.elm, I.nextSibling(m.elm)), (v = i[++p]), (w = a[--g]))
              : Ye(m, y)
              ? (k(m, y, r), _ && I.insertBefore(n, m.elm, v.elm), (m = i[--h]), (y = a[++f]))
              : (t(o) && (o = Ge(i, p, h)),
                (c = e(y.key) ? o[y.key] : null),
                t(c)
                  ? (l(y, r, n, v.elm), (y = a[++f]))
                  : ((d = i[c]),
                    d ||
                      Za('It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key.'),
                    Ye(d, y)
                      ? (k(d, y, r), (i[c] = void 0), _ && I.insertBefore(n, y.elm, v.elm), (y = a[++f]))
                      : (l(y, r, n, v.elm), (y = a[++f]))));
          p > h ? ((u = t(a[g + 1]) ? null : a[g + 1].elm), b(n, u, a, f, g, r)) : f > g && x(n, i, p, h);
        }
        function k(i, a, r, s) {
          if (i !== a) {
            if (n(a.isStatic) && n(i.isStatic) && a.key === i.key && (n(a.isCloned) || n(a.isOnce)))
              return (a.elm = i.elm), void (a.componentInstance = i.componentInstance);
            var o,
              l = a.data;
            e(l) && e((o = l.hook)) && e((o = o.prepatch)) && o(i, a);
            var c = (a.elm = i.elm),
              d = i.children,
              u = a.children;
            if (e(l) && v(a)) {
              for (o = 0; o < L.update.length; ++o) L.update[o](i, a);
              e((o = l.hook)) && e((o = o.update)) && o(i, a);
            }
            t(a.text)
              ? e(d) && e(u)
                ? d !== u && _(c, d, u, r, s)
                : e(u)
                ? (e(i.text) && I.setTextContent(c, ''), b(c, null, u, 0, u.length - 1, r))
                : e(d)
                ? x(c, d, 0, d.length - 1)
                : e(i.text) && I.setTextContent(c, '')
              : i.text !== a.text && I.setTextContent(c, a.text),
              e(l) && e((o = l.hook)) && e((o = o.postpatch)) && o(i, a);
          }
        }
        function T(t, i, a) {
          if (n(a) && e(t.parent)) t.parent.data.pendingInsert = i;
          else for (var r = 0; r < i.length; ++r) i[r].data.hook.insert(i[r]);
        }
        function C(t, n, i) {
          if (!A(t, n)) return !1;
          n.elm = t;
          var a = n.tag,
            r = n.data,
            s = n.children;
          if (e(r) && (e((S = r.hook)) && e((S = S.init)) && S(n, !0), e((S = n.componentInstance)))) return u(n, i), !0;
          if (e(a)) {
            if (e(s))
              if (t.hasChildNodes()) {
                for (var o = !0, l = t.firstChild, c = 0; c < s.length; c++) {
                  if (!l || !C(l, s[c], i)) {
                    o = !1;
                    break;
                  }
                  l = l.nextSibling;
                }
                if (!o || l)
                  return (
                    'undefined' == typeof console ||
                      E ||
                      ((E = !0), console.warn('Parent: ', t), console.warn('Mismatching childNodes vs. VNodes: ', t.childNodes, s)),
                    !1
                  );
              } else h(n, s, i);
            if (e(r))
              for (var d in r)
                if (!F(d)) {
                  m(n, i);
                  break;
                }
          } else t.data !== n.text && (t.data = n.text);
          return !0;
        }
        function A(t, n) {
          return e(n.tag)
            ? 0 === n.tag.indexOf('vue-component') || n.tag.toLowerCase() === (t.tagName && t.tagName.toLowerCase())
            : t.nodeType === (n.isComment ? 8 : 3);
        }
        var S,
          $,
          L = {},
          D = a.modules,
          I = a.nodeOps;
        for (S = 0; S < Ws.length; ++S) for (L[Ws[S]] = [], $ = 0; $ < D.length; ++$) e(D[$][Ws[S]]) && L[Ws[S]].push(D[$][Ws[S]]);
        var P = 0,
          E = !1,
          F = c('attrs,style,class,staticClass,staticStyle,key');
        return function (i, a, s, o, c, d) {
          if (t(a)) return void (e(i) && y(i));
          var u = !1,
            p = [];
          if (t(i)) (u = !0), l(a, p, c, d);
          else {
            var f = e(i.nodeType);
            if (!f && Ye(i, a)) k(i, a, p, o);
            else {
              if (f) {
                if ((1 === i.nodeType && i.hasAttribute(Ya) && (i.removeAttribute(Ya), (s = !0)), n(s))) {
                  if (C(i, a, p)) return T(a, p, !0), i;
                  Za(
                    'The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.'
                  );
                }
                i = r(i);
              }
              var h = i.elm,
                m = I.parentNode(h);
              if ((l(a, p, h._leaveCb ? null : m, I.nextSibling(h)), e(a.parent))) {
                for (var g = a.parent; g; ) (g.elm = a.elm), (g = g.parent);
                if (v(a)) for (var b = 0; b < L.create.length; ++b) L.create[b](Vs, a.parent);
              }
              e(m) ? x(m, [i], 0, 0) : e(i.tag) && y(i);
            }
          }
          return T(a, p, u), a.elm;
        };
      })({ nodeOps: Us, modules: ko });
    ur &&
      document.addEventListener('selectionchange', function () {
        var t = document.activeElement;
        t && t.vmodel && oi(t, 'input');
      });
    var Co = {
        inserted: function (t, e, n) {
          if ('select' === n.tag) {
            var i = function () {
              ni(t, e, n.context);
            };
            i(), (dr || pr) && setTimeout(i, 0);
          } else
            ('textarea' !== n.tag && 'text' !== t.type && 'password' !== t.type) ||
              ((t._vModifiers = e.modifiers),
              e.modifiers.lazy ||
                (t.addEventListener('change', si),
                fr || (t.addEventListener('compositionstart', ri), t.addEventListener('compositionend', si)),
                ur && (t.vmodel = !0)));
        },
        componentUpdated: function (t, e, n) {
          if ('select' === n.tag) {
            ni(t, e, n.context);
            (t.multiple
              ? e.value.some(function (e) {
                  return ii(e, t.options);
                })
              : e.value !== e.oldValue && ii(e.value, t.options)) && oi(t, 'change');
          }
        },
      },
      Ao = {
        bind: function (t, e, n) {
          var i = e.value;
          n = li(n);
          var a = n.data && n.data.transition,
            r = (t.__vOriginalDisplay = 'none' === t.style.display ? '' : t.style.display);
          i && a && !ur
            ? ((n.data.show = !0),
              Xn(n, function () {
                t.style.display = r;
              }))
            : (t.style.display = i ? r : 'none');
        },
        update: function (t, e, n) {
          var i = e.value;
          i !== e.oldValue &&
            ((n = li(n)),
            n.data && n.data.transition && !ur
              ? ((n.data.show = !0),
                i
                  ? Xn(n, function () {
                      t.style.display = t.__vOriginalDisplay;
                    })
                  : Kn(n, function () {
                      t.style.display = 'none';
                    }))
              : (t.style.display = i ? t.__vOriginalDisplay : 'none'));
        },
        unbind: function (t, e, n, i, a) {
          a || (t.style.display = t.__vOriginalDisplay);
        },
      },
      So = { model: Co, show: Ao },
      $o = {
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
        duration: [Number, String, Object],
      },
      Lo = {
        name: 'transition',
        props: $o,
        abstract: !0,
        render: function (t) {
          var e = this,
            n = this.$slots.default;
          if (
            n &&
            ((n = n.filter(function (t) {
              return t.tag;
            })),
            n.length)
          ) {
            n.length > 1 && Za('<transition> can only be used on a single element. Use <transition-group> for lists.', this.$parent);
            var a = this.mode;
            a && 'in-out' !== a && 'out-in' !== a && Za('invalid <transition> mode: ' + a, this.$parent);
            var r = n[0];
            if (pi(this.$vnode)) return r;
            var s = ci(r);
            if (!s) return r;
            if (this._leaving) return ui(t, r);
            var o = '__transition-' + this._uid + '-';
            s.key = null == s.key ? o + s.tag : i(s.key) ? (0 === String(s.key).indexOf(o) ? s.key : o + s.key) : s.key;
            var l = ((s.data || (s.data = {})).transition = di(this)),
              c = this._vnode,
              d = ci(c);
            if (
              (s.data.directives &&
                s.data.directives.some(function (t) {
                  return 'show' === t.name;
                }) &&
                (s.data.show = !0),
              d && d.data && !fi(s, d))
            ) {
              var u = d && (d.data.transition = v({}, l));
              if ('out-in' === a)
                return (
                  (this._leaving = !0),
                  tt(u, 'afterLeave', function () {
                    (e._leaving = !1), e.$forceUpdate();
                  }),
                  ui(t, r)
                );
              if ('in-out' === a) {
                var p,
                  f = function () {
                    p();
                  };
                tt(l, 'afterEnter', f),
                  tt(l, 'enterCancelled', f),
                  tt(u, 'delayLeave', function (t) {
                    p = t;
                  });
              }
            }
            return r;
          }
        },
      },
      Do = v({ tag: String, moveClass: String }, $o);
    delete Do.mode;
    var Io = {
        props: Do,
        render: function (t) {
          for (
            var e = this.tag || this.$vnode.data.tag || 'span',
              n = Object.create(null),
              i = (this.prevChildren = this.children),
              a = this.$slots.default || [],
              r = (this.children = []),
              s = di(this),
              o = 0;
            o < a.length;
            o++
          ) {
            var l = a[o];
            if (l.tag)
              if (null != l.key && 0 !== String(l.key).indexOf('__vlist'))
                r.push(l), (n[l.key] = l), ((l.data || (l.data = {})).transition = s);
              else {
                var c = l.componentOptions,
                  d = c ? c.Ctor.options.name || c.tag || '' : l.tag;
                Za('<transition-group> children must be keyed: <' + d + '>');
              }
          }
          if (i) {
            for (var u = [], p = [], f = 0; f < i.length; f++) {
              var h = i[f];
              (h.data.transition = s), (h.data.pos = h.elm.getBoundingClientRect()), n[h.key] ? u.push(h) : p.push(h);
            }
            (this.kept = t(e, null, u)), (this.removed = p);
          }
          return t(e, null, r);
        },
        beforeUpdate: function () {
          this.__patch__(this._vnode, this.kept, !1, !0), (this._vnode = this.kept);
        },
        updated: function () {
          var t = this.prevChildren,
            e = this.moveClass || (this.name || 'v') + '-move';
          if (t.length && this.hasMove(t[0].elm, e)) {
            t.forEach(hi), t.forEach(vi), t.forEach(mi);
            var n = document.body;
            n.offsetHeight;
            t.forEach(function (t) {
              if (t.data.moved) {
                var n = t.elm,
                  i = n.style;
                zn(n, e),
                  (i.transform = i.WebkitTransform = i.transitionDuration = ''),
                  n.addEventListener(
                    mo,
                    (n._moveCb = function t(i) {
                      (i && !/transform$/.test(i.propertyName)) || (n.removeEventListener(mo, t), (n._moveCb = null), Vn(n, e));
                    })
                  );
              }
            });
          }
        },
        methods: {
          hasMove: function (t, e) {
            if (!po) return !1;
            if (null != this._hasMove) return this._hasMove;
            var n = t.cloneNode();
            t._transitionClasses &&
              t._transitionClasses.forEach(function (t) {
                Hn(n, t);
              }),
              Rn(n, e),
              (n.style.display = 'none'),
              this.$el.appendChild(n);
            var i = Yn(n);
            return this.$el.removeChild(n), (this._hasMove = i.hasTransform);
          },
        },
      },
      Po = { Transition: Lo, TransitionGroup: Io };
    (ve.config.mustUseProp = Ds),
      (ve.config.isReservedTag = Hs),
      (ve.config.isReservedAttr = $s),
      (ve.config.getTagNamespace = Ie),
      (ve.config.isUnknownElement = Pe),
      v(ve.options.directives, So),
      v(ve.options.components, Po),
      (ve.prototype.__patch__ = lr ? To : g),
      (ve.prototype.$mount = function (t, e) {
        return (t = t && lr ? Ee(t) : void 0), gt(this, t, e);
      }),
      setTimeout(function () {
        Xa.devtools &&
          (wr
            ? wr.emit('init', ve)
            : vr &&
              console[console.info ? 'info' : 'log'](
                'Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools'
              )),
          !1 !== Xa.productionTip &&
            lr &&
            'undefined' != typeof console &&
            console[console.info ? 'info' : 'log'](
              'You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html'
            );
      }, 0);
    var Eo,
      Fo =
        !!lr &&
        (function (t, e) {
          var n = document.createElement('div');
          return (n.innerHTML = '<div a="' + t + '">'), n.innerHTML.indexOf(e) > 0;
        })('\n', '&#10;'),
      jo = c('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'),
      No = c('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'),
      Oo = c(
        'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track'
      ),
      Mo = /([^\s"'<>\/=]+)/,
      Bo = /(?:=)/,
      Ro = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
      Ho = new RegExp('^\\s*' + Mo.source + '(?:\\s*(' + Bo.source + ')\\s*(?:' + Ro.join('|') + '))?'),
      qo = '[a-zA-Z_][\\w\\-\\.]*',
      Uo = '((?:' + qo + '\\:)?' + qo + ')',
      zo = new RegExp('^<' + Uo),
      Vo = /^\s*(\/?)>/,
      Wo = new RegExp('^<\\/' + Uo + '[^>]*>'),
      Yo = /^<!DOCTYPE [^>]+>/i,
      Jo = /^<!--/,
      Go = /^<!\[/,
      Xo = !1;
    'x'.replace(/x(.)?/g, function (t, e) {
      Xo = '' === e;
    });
    var Ko,
      Qo,
      Zo,
      tl,
      el,
      nl,
      il,
      al,
      rl,
      sl,
      ol,
      ll,
      cl,
      dl,
      ul,
      pl,
      fl,
      hl,
      vl = c('script,style,textarea', !0),
      ml = {},
      gl = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&amp;': '&', '&#10;': '\n' },
      bl = /&(?:lt|gt|quot|amp);/g,
      yl = /&(?:lt|gt|quot|amp|#10);/g,
      xl = /\{\{((?:.|\n)+?)\}\}/g,
      wl = /[-.*+?^${}()|[\]\/\\]/g,
      _l = p(function (t) {
        var e = t[0].replace(wl, '\\$&'),
          n = t[1].replace(wl, '\\$&');
        return new RegExp(e + '((?:.|\\n)+?)' + n, 'g');
      }),
      kl = /^@|^v-on:/,
      Tl = /^v-|^@|^:/,
      Cl = /(.*?)\s+(?:in|of)\s+(.*)/,
      Al = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
      Sl = /:(.*)$/,
      $l = /^:|^v-bind:/,
      Ll = /\.[^.]+/g,
      Dl = p(gi),
      Il = /^xmlns:NS\d+/,
      Pl = /^NS\d+:/,
      El = p(Ui),
      Fl = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
      jl = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
      Nl = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
      Ol = function (t) {
        return 'if(' + t + ')return null;';
      },
      Ml = {
        stop: '$event.stopPropagation();',
        prevent: '$event.preventDefault();',
        self: Ol('$event.target !== $event.currentTarget'),
        ctrl: Ol('!$event.ctrlKey'),
        shift: Ol('!$event.shiftKey'),
        alt: Ol('!$event.altKey'),
        meta: Ol('!$event.metaKey'),
        left: Ol("'button' in $event && $event.button !== 0"),
        middle: Ol("'button' in $event && $event.button !== 1"),
        right: Ol("'button' in $event && $event.button !== 2"),
      },
      Bl = { bind: Zi, cloak: g },
      Rl = new RegExp(
        '\\b' +
          'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments'
            .split(',')
            .join('\\b|\\b') +
          '\\b'
      ),
      Hl = new RegExp('\\b' + 'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)'),
      ql = /[A-Za-z_$][\w$]*/,
      Ul = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g,
      zl = { staticKeys: ['staticClass'], transformNode: Da, genData: Ia },
      Vl = { staticKeys: ['staticStyle'], transformNode: Pa, genData: Ea },
      Wl = [zl, Vl],
      Yl = { model: kn, text: Fa, html: ja },
      Jl = {
        expectHTML: !0,
        modules: Wl,
        directives: Yl,
        isPreTag: Rs,
        isUnaryTag: jo,
        mustUseProp: Ds,
        canBeLeftOpenTag: No,
        isReservedTag: Hs,
        getTagNamespace: Ie,
        staticKeys: (function (t) {
          return t
            .reduce(function (t, e) {
              return t.concat(e.staticKeys || []);
            }, [])
            .join(',');
        })(Wl),
      },
      Gl = (function (t) {
        function e(e, n) {
          var i = Object.create(t),
            a = [],
            r = [];
          if (
            ((i.warn = function (t, e) {
              (e ? r : a).push(t);
            }),
            n)
          ) {
            n.modules && (i.modules = (t.modules || []).concat(n.modules)),
              n.directives && (i.directives = v(Object.create(t.directives), n.directives));
            for (var s in n) 'modules' !== s && 'directives' !== s && (i[s] = n[s]);
          }
          var o = $a(e, i);
          return a.push.apply(a, _a(o.ast)), (o.errors = a), (o.tips = r), o;
        }
        function n(t, n, a) {
          n = n || {};
          try {
            new Function('return 1');
          } catch (t) {
            t.toString().match(/unsafe-eval|CSP/) &&
              Za(
                'It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.'
              );
          }
          var r = n.delimiters ? String(n.delimiters) + t : t;
          if (i[r]) return i[r];
          var s = e(t, n);
          s.errors &&
            s.errors.length &&
            Za(
              'Error compiling template:\n\n' +
                t +
                '\n\n' +
                s.errors
                  .map(function (t) {
                    return '- ' + t;
                  })
                  .join('\n') +
                '\n',
              a
            ),
            s.tips &&
              s.tips.length &&
              s.tips.forEach(function (t) {
                return tr(t, a);
              });
          var o = {},
            l = [];
          o.render = La(s.render, l);
          var c = s.staticRenderFns.length;
          o.staticRenderFns = new Array(c);
          for (var d = 0; d < c; d++) o.staticRenderFns[d] = La(s.staticRenderFns[d], l);
          return (
            (s.errors && s.errors.length) ||
              !l.length ||
              Za(
                'Failed to generate render function:\n\n' +
                  l
                    .map(function (t) {
                      var e = t.err,
                        n = t.code;
                      return e.toString() + ' in\n\n' + n + '\n';
                    })
                    .join('\n'),
                a
              ),
            (i[r] = o)
          );
        }
        var i = Object.create(null);
        return { compile: e, compileToFunctions: n };
      })(Jl),
      Xl = Gl.compileToFunctions,
      Kl = p(function (t) {
        var e = Ee(t);
        return e && e.innerHTML;
      }),
      Ql = ve.prototype.$mount;
    return (
      (ve.prototype.$mount = function (t, e) {
        if ((t = t && Ee(t)) === document.body || t === document.documentElement)
          return Za('Do not mount Vue to <html> or <body> - mount to normal elements instead.'), this;
        var n = this.$options;
        if (!n.render) {
          var i = n.template;
          if (i)
            if ('string' == typeof i)
              '#' === i.charAt(0) && ((i = Kl(i)) || Za('Template element not found or is empty: ' + n.template, this));
            else {
              if (!i.nodeType) return Za('invalid template option:' + i, this), this;
              i = i.innerHTML;
            }
          else t && (i = Na(t));
          if (i) {
            Xa.performance && Er && Er('compile');
            var a = Xl(i, { shouldDecodeNewlines: Fo, delimiters: n.delimiters }, this),
              r = a.render,
              s = a.staticRenderFns;
            (n.render = r),
              (n.staticRenderFns = s),
              Xa.performance && Er && (Er('compile end'), Fr(this._name + ' compile', 'compile', 'compile end'));
          }
        }
        return Ql.call(this, t, e);
      }),
      (ve.compile = Xl),
      ve
    );
  }),
  define('vue_tip', ['require', 'exports', 'module'], function (t, e, n) {
    n.exports = Vue.extend({
      template:
        '<transition name="el-message-fade"><div style="display: block;" class="main-tip" :class="[typeIconClass, customClass]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">{{ message }}</div></transition>',
      data: function () {
        return { visible: !1, message: '', duration: 3e3, type: 'info', customClass: '', onClose: null, closed: !1, timer: null };
      },
      computed: {
        typeIconClass: function () {
          return 'main-tip-' + this.type;
        },
      },
      watch: {
        closed: function (t) {
          t && ((this.visible = !1), this.$el.addEventListener('transitionend', this.destroyElement));
        },
      },
      methods: {
        destroyElement: function () {
          this.$el.removeEventListener('transitionend', this.destroyElement), this.$destroy(!0), this.$el.parentNode.removeChild(this.$el);
        },
        close: function () {
          (this.closed = !0), 'function' == typeof this.onClose && this.onClose(this);
        },
        clearTimer: function () {
          clearTimeout(this.timer);
        },
        startTimer: function () {
          var t = this;
          this.duration > 0 &&
            (this.timer = setTimeout(function () {
              t.closed || t.close();
            }, this.duration));
        },
      },
      mounted: function () {
        this.startTimer();
      },
    });
  }),
  define('../lib/tip-vue', ['require', 'exports', 'module', 'Vue', 'vue_tip'], function (t, e, n) {
    var i,
      a = t('Vue'),
      r = a.extend(t('vue_tip')),
      s = [],
      o = 1,
      l = function t(e) {
        if (!a.prototype.$isServer) {
          (e = e || {}), 'string' == typeof e && (e = { tip: e });
          var n = e.onClose,
            l = 'tip_' + o++;
          return (
            (e.onClose = function () {
              t.close(l, n);
            }),
            (i = new r({ data: e })),
            (i.id = l),
            (i.vm = i.$mount()),
            document.body.appendChild(i.vm.$el),
            (i.vm.visible = !0),
            (i.dom = i.vm.$el),
            s.push(i),
            i.vm
          );
        }
      };
    (l.close = function (t, e) {
      for (var n = 0, i = s.length; n < i; n++)
        if (t === s[n].id) {
          'function' == typeof e && e(s[n]), s.splice(n, 1);
          break;
        }
    }),
      (l.closeAll = function () {
        for (var t = s.length - 1; t >= 0; t--) s[t].close();
      }),
      (n.exports = l);
  }),
  define('vue_tips', ['require', 'exports', 'module', 'qs'], function (t, e, n) {
    var i = t('qs'),
      a = { success: 'success', info: 'info', warning: 'warning', error: 'error', limit: 'limit' };
    n.exports = Vue.extend({
      template:
        '\x3c!-- <transition name="el-message-fade"><divstyle="display: block;"class="main-tip":class="[typeIconClass, customClass]"v-show="visible"@mouseenter="clearTimer"@mouseleave="startTimer">{{ message }}</div></transition> --\x3e<transition name="el-message-fade"><div :class="[\'el-message\',type &amp;&amp; !iconClass ? `el-message--${ type }` : \'\',center ? \'is-center\' : \'\',customClass]" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer" role="alert"><div v-if="type === \'limit\'" class="tip_time" :style="{\'animation\': \'mymoves \' + Number(duration)/1000 + \'s linear 1\'}"></div><div v-else="" class="tip_time" :style="{\'animation\': \'mymove \' + Number(duration)/1000 + \'s linear 1\'}"></div><i :class="iconClass" v-if="iconClass"></i><i :class="typeIconClass" v-else=""></i><slot><div class="tip" v-if="type === \'limit\'"><p class="el-message__title">权限限制</p><p v-if="!dangerouslyUseHTMLString" class="el-message__content">{{ message }}</p><p v-else="" v-html="message" class="el-message__content"></p>\x3c!-- <div class="button"><span @click="close">忽略</span><span @click="getApplyPower">申请试用</span></div> --\x3e</div><div class="tip" v-else=""><p v-if="type === \'success\'" class="el-message__title">操作成功</p><p v-if="type === \'warning\'" class="el-message__title">提示！</p><p v-if="!dangerouslyUseHTMLString" class="el-message__content">{{ message }}</p><p v-else="" v-html="message" class="el-message__content"></p></div></slot><i v-if="showClose" class="el-message__closeBtn el-icon-close" @click="close"></i></div></transition>',
      data: function () {
        return {
          visible: !1,
          message: '',
          duration: 3e3,
          type: 'info',
          iconClass: '',
          customClass: '',
          onClose: null,
          showClose: !0,
          closed: !1,
          timer: null,
          dangerouslyUseHTMLString: !1,
          center: !1,
        };
      },
      computed: {
        iconWrapClass: function () {
          var t = ['el-message__icon'];
          return this.type && !this.iconClass && t.push('el-message__icon--' + this.type), t;
        },
        typeIconClass: function () {
          return this.type && !this.iconClass ? 'el-message__icon el-icon-' + a[this.type] : '';
        },
      },
      watch: {
        closed: function (t) {
          t && ((this.visible = !1), this.$el.addEventListener('transitionend', this.destroyElement));
        },
      },
      methods: {
        destroyElement: function () {
          this.$el.removeEventListener('transitionend', this.destroyElement), this.$destroy(!0), this.$el.parentNode.removeChild(this.$el);
        },
        close: function () {
          (this.closed = !0), 'function' == typeof this.onClose && this.onClose(this);
        },
        clearTimer: function () {
          clearTimeout(this.timer);
        },
        startTimer: function () {
          var t = this;
          this.duration > 0 &&
            (this.timer = setTimeout(function () {
              t.closed || t.close();
            }, this.duration));
        },
        getApplyPower: function () {
          var t = this;
          (t.message = ''),
            (t.type = ''),
            (t.duration = 0),
            axios
              .post('/platform/simuassetaccount/apply', i.stringify({}))
              .then(function (t) {
                return t.data;
              })
              .then(function (e) {
                if (0 !== e.errorcode)
                  return (
                    (t.message = e.errormsg ? e.errormsg : '申请试用失败'), (t.type = 'warning'), (t.duration = 3e3), void t.startTimer()
                  );
                (t.message = '申请成功，将于3到5分钟后生效'), (t.type = 'success'), (t.duration = 3e3), t.startTimer();
              })
              .catch(function (e) {
                (t.message = '网络异常'), (t.type = 'error'), (t.duration = 3e3), t.startTimer();
              });
        },
      },
      mounted: function () {
        this.startTimer();
      },
    });
  }),
  define('../lib/tips-vue', ['require', 'exports', 'module', 'Vue', 'vue_tips'], function (t, e, n) {
    var i,
      a = t('Vue'),
      r = a.extend(t('vue_tips')),
      s = [],
      o = 1,
      l = function t(e) {
        if (!a.prototype.$isServer) {
          (e = e || {}), 'string' == typeof e && (e = { tip: e });
          var n = e.onClose,
            l = 'tips_' + o++;
          return (
            (e.onClose = function () {
              t.close(l, n);
            }),
            (i = new r({ data: e })),
            (i.id = l),
            (i.vm = i.$mount()),
            document.body.appendChild(i.vm.$el),
            (i.vm.visible = !0),
            (i.dom = i.vm.$el),
            s.push(i),
            i.vm
          );
        }
      };
    ['success', 'warning', 'info', 'error'].forEach(function (t) {
      l[t] = function (e) {
        return 'string' == typeof e && (e = { message: e }), (e.type = t), l(e);
      };
    }),
      (l.close = function (t, e) {
        for (var n = 0, i = s.length; n < i; n++)
          if (t === s[n].id) {
            'function' == typeof e && e(s[n]), s.splice(n, 1);
            break;
          }
      }),
      (l.closeAll = function () {
        for (var t = s.length - 1; t >= 0; t--) s[t].close();
      }),
      (n.exports = l);
  }),
  define('../components/common/select', ['require', 'exports', 'module'], function (t, e, n) {
    n.exports = Vue.extend({
      template:
        '<div :tabindex="1" @blur="optionsShow = false" class="s_selectbox" :class="{active: optionsShow}" @click="toggleSelect">{{ isLoading ? \'请求中...\' : (isEmpty ? \'暂无数据\' : selectChoosedTitle) }}<div class="s_selectbox_list" v-show="optionsShow"><div class="s_selectbox_item" v-for="(item, key, index) in selectList" @click="optionSelect(key, item)">{{ item }}</div></div></div>',
      props: { selectList: Object, defaultSelected: { type: String, default: '' }, isLoading: { type: Boolean, default: !1 } },
      computed: {
        isEmpty: function () {
          return 0 === _.keys(this.selectList).length;
        },
      },
      data: function () {
        return { optionsShow: !1, selectChoosedTitle: '' };
      },
      methods: {
        toggleSelect: function () {
          this.isLoading || this.isEmpty || (this.optionsShow = !this.optionsShow);
        },
        optionSelect: function (t, e) {
          this.selectChoosedTitle !== e && ((this.selectChoosedTitle = e), this.$emit('option-changed', t));
        },
        init: function () {
          var t = this.defaultSelected;
          if ('' === this.defaultSelected) {
            var e;
            for (e in this.selectList) {
              (t = e), this.optionSelect(e, this.selectList[e]);
              break;
            }
          }
          this.selectChoosedTitle = this.selectList[t];
        },
      },
      watch: {
        selectList: function (t) {
          var e = this;
          this.$nextTick(function () {
            e.init();
          });
        },
      },
      created: function () {
        this.init();
      },
    });
  }),
  define(
    '../common/vueComponents',
    ['../components/common/dialog', '../components/common/pagination', '../lib/tip-vue', '../lib/tips-vue', '../components/common/select'],
    function (t, e, n, i, a) {
      Vue.component('vue-dialog', t),
        Vue.component('vue-pagination', e),
        Vue.component('vue-select', a),
        Vue.filter('stripUnixDate', function (t) {
          return t.replace(/t/i, ' ');
        }),
        (Vue.prototype.$tip = n),
        (Vue.prototype.$tips = i),
        (Vue.prototype.$Bus = new Vue());
    }
  ),
  define('../common/vueDirectives', ['require', 'exports', 'module', 'Vue'], function (t, e, n) {
    var i = window.Vue || t('Vue'),
      a = {
        'backtest-result': location.href.indexOf('newmyfactor') > -1 ? 'wdcl_yzcl_result' : 'wdcl_clyj_result',
        study: 'wdcl_clyj_edit',
        'study-index': 'wdcl_clyj_index',
        'backreport-history': 'wdcl_clyj_list',
        strategylib: 'wdcl_clk',
        strategymonitor: 'wdcl_cljk',
        trade: 'mnjy',
        strategy: 'clgc',
        'strategy-info': 'clgc',
        community: 'sq',
        home: 'home',
      },
      r = -1 !== window.location.href.indexOf('ifind'),
      s = !sessionStorage.getItem('navError'),
      o = r ? '-ifind.html' : '.html';
    i.directive('stat', {
      bind: function (t, e) {
        var n = e.value,
          i = n.act,
          l = n.prefix,
          c = n.namespace,
          d = n.event,
          u = n.targid;
        (l = l || 'mindgo'),
          (c =
            c ||
            a[
              Object.keys(a).find(function (t) {
                return window.location.href.indexOf(t + o) > -1;
              })
            ]),
          (d = d || 'click'),
          (t.act = i),
          (t.callback = function () {
            if (t.act) {
              var e = { id: l + '_' + c + '.' + t.act };
              r && (e.ld = s ? 'ifind_g' : 'ifind_s'), u && (e.targid = u), TA.log(e);
            }
          }),
          t.addEventListener(d, t.callback);
      },
      unbind: function (t, e) {
        t.removeEventListener(event, t.callback);
      },
      componentUpdated: function (t, e) {
        t.act = e.value.act;
      },
    });
  });
var _typeof =
  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      };
define('../common/vueDirectives2', ['require', 'exports', 'module', 'Vue'], function (t, e, n) {
  var i = window.Vue || t('Vue'),
    a = location.href.indexOf('ifind') > -1 ? 'b2bsm_b2b_SuperMindiFind' : 'b2bsm_b2b_SuperMind',
    r = { click: 'click', mount: 'show', hover: 'hover', stay: 'stay', unmount: 'dis', dclick: 'dclick', update: 'slide' },
    s = function (t, e) {
      if ('object' === _typeof(e.value) && e.value.id) {
        var n = e.value.id,
          i = Object.assign({ action: r[e.arg] }, e.value, { id: a + n });
        (e.modifiers.clickContent || e.modifiers.clickcontent) && (i.clickContent = e.value.clickContent || t.innerText),
          window.hxEventTracking(i);
      }
    },
    o = {
      click: function (t) {
        var e = t.el,
          n = t.binding,
          i = (t.vnode, t.event);
        if (['bind', 'unbind'].includes(i)) {
          e['bind' === i ? 'addEventListener' : 'removeEventListener']('click', function () {
            s(e, n);
          });
        }
      },
      mount: function (t) {
        var e = t.el,
          n = t.binding;
        t.vnode;
        'bind' === t.event && s(e, n);
      },
    };
  i.directive('stat2', {
    bind: function (t, e, n) {
      o[e.arg] && o[e.arg]({ el: t, binding: e, vnode: n, event: 'bind' });
    },
    unbind: function (t, e, n) {
      o[e.arg] && o[e.arg]({ el: t, binding: e, vnode: n, event: 'unbind' });
    },
  }),
    (i.prototype.$stat2 = function (t) {
      return window.hxEventTracking(Object.assign(t, { id: a + t.id }));
    });
}),
  define('../lib/zUI', ['jquery'], function () {
    ($.zUI = $.zUI || {}),
      ($.zUI.emptyFn = function () {}),
      ($.zUI.asWidget = []),
      ($.zUI.addWidget = function (t, e) {
        $.zUI.asWidget.push(t);
        var n = ($.zUI[t] = $.zUI[t] || {}),
          i = 'zUI' + t;
        (n.sFlagName = i),
          (n.sEventName = i + 'Event'),
          (n.sOptsName = i + 'Opts'),
          (n.__creator = $.zUI.emptyFn),
          (n.__destroyer = $.zUI.emptyFn),
          $.extend(n, e),
          (n.fn = function (t, e) {
            var i = $(t);
            i.data(n.sOptsName, $.extend({}, n.defaults, e)),
              i.data(n.sFlagName) && n.__destroyer(t),
              i.data(n.sFlagName, !0),
              n.__creator(t),
              i.on(i.data(n.sEventName));
          }),
          (n.unfn = function (t) {
            n.__destroyer(t);
            var e = $(t);
            e.data(n.sFlagName) && (e.off(e.data(n.sEventName)), e.data(n.sFlagName, !1));
          });
      }),
      $.zUI.addWidget('draggable', {
        defaults: { bOffsetParentBoundary: !1, oBoundary: null, fnComputePosition: null },
        __creator: function (t) {
          $(t).data($.zUI.draggable.sEventName, {
            mousedown: function (t) {
              function e(t) {
                var e = {};
                i.fnComputePosition ? (e = i.fnComputePosition(t, a, r)) : ((e.iLeft = t.pageX - a), (e.iTop = t.pageY - r));
                var s = i.oBoundary;
                if (i.bOffsetParentBoundary) {
                  var o = n.offsetParent()[0];
                  (s = {}),
                    (s.iMinLeft = 0),
                    (s.iMinTop = 0),
                    (s.iMaxLeft = o.clientWidth - n.outerWidth()),
                    (s.iMaxTop = o.clientHeight - n.outerHeight());
                }
                s &&
                  ((e.iLeft = e.iLeft < s.iMinLeft ? s.iMinLeft : e.iLeft),
                  (e.iLeft = e.iLeft > s.iMaxLeft ? s.iMaxLeft : e.iLeft),
                  (e.iTop = e.iTop < s.iMinTop ? s.iMinTop : e.iTop),
                  (e.iTop = e.iTop > s.iMaxTop ? s.iMaxTop : e.iTop)),
                  n.css({ left: e.iLeft, top: e.iTop }),
                  t.preventDefault(),
                  n.trigger('draggable.move');
              }
              var n = $(this),
                i = n.data($.zUI.draggable.sOptsName);
              n.trigger('draggable.start');
              var a = t.pageX - this.offsetLeft,
                r = t.pageY - this.offsetTop,
                s = {
                  mousemove: e,
                  mouseup: function () {
                    $(document).off(s), n.trigger('draggable.stop');
                  },
                };
              $(document).on(s);
            },
          });
        },
      }),
      $.zUI.addWidget('panel', {
        defaults: {
          iWheelStep: 16,
          sBoxClassName: 'zUIpanelScrollBox',
          sBarClassName: 'zUIpanelScrollBar',
          bottomCallback: null,
          isShowScrollBar: !1,
        },
        __creator: function (t) {
          function e(t, e, n, a, r, s) {
            var o = i.data($.zUI.panel.sOptsName),
              l = (parseInt(e.css('top')) - r) / (e.outerHeight() - t.innerHeight()),
              c = (a.outerHeight() - n.innerHeight()) * l + s;
            a.css('top', c), o.bottomCallback && -1 === l && o.bottomCallback();
          }
          function n() {
            var t = i.data($.zUI.panel.sOptsName),
              n = i.innerHeight() - 2 * t.iTop,
              r = i.innerHeight() / a.outerHeight(),
              s = Math.round(r * n);
            if (r >= 1) return o.css('height', 0), void l.css('height', 0);
            o.css('height', n), l.css('height', s);
            var c = { iMinTop: t.iTop };
            (c.iMaxTop = n - Math.round(r * n) + t.iTop),
              (c.iMinLeft = i.innerWidth() - t.iWidth - t.iRight),
              (c.iMaxLeft = c.iMinLeft),
              e(i, a, o, l, 0, t.iTop),
              l.draggable({ oBoundary: c });
          }
          var i = $(t);
          'static' === i.css('position') && i.css('position', 'relative'), i.css('overflow', 'hidden');
          var a = i.children(':first');
          if (a.length) {
            a.css({ top: 0, position: 'absolute' });
            var r = i.data($.zUI.panel.sOptsName),
              s = r.isShowScrollBar,
              o = $("<div style='position:absolute;display:none;line-height:0;'></div>");
            o.addClass(r.sBoxClassName);
            var l;
            (l = s
              ? $("<div style='position:absolute;display:block;line-height:0;'></div>")
              : $("<div style='position:absolute;display:none;line-height:0;'></div>")),
              l.addClass(r.sBarClassName),
              o.appendTo(i),
              l.appendTo(i),
              (r.iTop = parseInt(o.css('top'))),
              (r.iWidth = l.width()),
              (r.iRight = parseInt(o.css('right'))),
              l.on('draggable.move', function () {
                var t = i.data($.zUI.panel.sOptsName);
                e(o, l, i, a, t.iTop, 0);
              }),
              i.on('freshScroll', function () {
                n();
              }),
              s && n();
            var c = {
                mouseenter: function () {
                  n(), o.css('display', 'block'), l.css('display', 'block');
                },
                mouseleave: function () {
                  o.css('display', 'none'), l.css('display', s ? 'block' : 'none');
                },
              },
              d = 'mousewheel';
            'onmousewheel' in document || (d = 'DOMMouseScroll'),
              (c[d] = function (t) {
                var n = i.data($.zUI.panel.sOptsName),
                  r = 1;
                t.preventDefault(), (t = t.originalEvent), (r = t.wheelDelta ? t.wheelDelta / 120 : -t.detail / 3);
                var s = i.innerHeight() - a.outerHeight();
                if (s > 0) return void a.css('top', 0);
                var c = parseInt(a.css('top'));
                (c += n.iWheelStep * r), (c = c > 0 ? 0 : c), (c = c < s ? s : c), a.css('top', c), e(i, a, o, l, 0, n.iTop);
              }),
              i.data($.zUI.panel.sEventName, c);
          }
        },
        __destroyer: function (t) {
          var e = $(t);
          if (e.data($.zUI.panel.sFlagName)) {
            var n = e.data($.zUI.panel.sOptsName);
            e.children('.' + n.sBoxClassName).remove(), e.children('.' + n.sBarClassName).remove();
          }
        },
      }),
      $.each($.zUI.asWidget, function (t, e) {
        var n = 'un' + e,
          i = {};
        (i[e] = function (t) {
          return (
            this.each(function () {
              $.zUI[e].fn(this, t);
            }),
            this
          );
        }),
          (i[n] = function () {
            return (
              this.each(function () {
                $.zUI[e].unfn(this);
              }),
              this
            );
          }),
          $.fn.extend(i);
      });
  });
var $dp, WdatePicker;
!(function () {
  function t() {
    try {
      v[w], (v.$dp = v.$dp || {});
    } catch (t) {
      (v = y), ($dp = $dp || {});
    }
    var t = {
      win: y,
      $: function (t) {
        return 'string' == typeof t ? y[w].getElementById(t) : t;
      },
      $D: function (t, e) {
        return this.$DV(this.$(t).value, e);
      },
      $DV: function (t, e) {
        if ('' != t) {
          if (((this.dt = $dp.cal.splitDate(t, $dp.cal.dateFmt)), e))
            for (var n in e)
              if (void 0 === this.dt[n]) this.errMsg = 'invalid property:' + n;
              else if (((this.dt[n] += e[n]), 'M' == n)) {
                var i = e.M > 0 ? 1 : 0,
                  a = new Date(this.dt.y, this.dt.M, 0).getDate();
                this.dt.d = Math.min(a + i, this.dt.d);
              }
          if (this.dt.refresh()) return this.dt;
        }
        return '';
      },
      show: function () {
        for (var t = v[w].getElementsByTagName('div'), e = 1e5, n = 0; n < t.length; n++) {
          var i = parseInt(t[n].style.zIndex);
          i > e && (e = i);
        }
        (this.dd.style.zIndex = e + 2), p(this.dd, 'block'), p(this.dd.firstChild, '');
      },
      unbind: function (t) {
        (t = this.$(t)),
          t.initcfg &&
            (n(t, 'onclick', function () {
              d(t.initcfg);
            }),
            n(t, 'onfocus', function () {
              d(t.initcfg);
            }));
      },
      hide: function () {
        p(this.dd, 'none');
      },
      attachEvent: e,
    };
    for (var i in t) v.$dp[i] = t[i];
    $dp = v.$dp;
  }
  function e(t, e, n, i) {
    if (t.addEventListener) {
      var a = e.replace(/on/, '');
      (n._ieEmuEventHandler = function (t) {
        return n(t);
      }),
        t.addEventListener(a, n._ieEmuEventHandler, i);
    } else t.attachEvent(e, n);
  }
  function n(t, e, n) {
    if (t.removeEventListener) {
      var i = e.replace(/on/, '');
      (n._ieEmuEventHandler = function (t) {
        return n(t);
      }),
        t.removeEventListener(i, n._ieEmuEventHandler, !1);
    } else t.detachEvent(e, n);
  }
  function i(t, e, n) {
    if (typeof t != typeof e) return !1;
    if ('object' == typeof t) {
      if (!n)
        for (var a in t) {
          if (void 0 === e[a]) return !1;
          if (!i(t[a], e[a], !0)) return !1;
        }
      return !0;
    }
    return 'function' == typeof t && 'function' == typeof e ? t.toString() == e.toString() : t == e;
  }
  function a(t) {
    t = t || v;
    for (var e = 0, n = 0; t != v; ) {
      for (var i = t.parent[w][k]('iframe'), a = 0; a < i.length; a++)
        try {
          if (i[a].contentWindow == t) {
            var s = r(i[a]);
            (e += s.left), (n += s.top);
            break;
          }
        } catch (t) {}
      t = t.parent;
    }
    return { leftM: e, topM: n };
  }
  function r(t, e) {
    if (t.getBoundingClientRect) return t.getBoundingClientRect();
    var n = { ROOT_TAG: /^body|html$/i, OP_SCROLL: /^(?:inline|table-row)$/i },
      i = !1,
      a = null,
      r = t.offsetTop,
      s = t.offsetLeft,
      l = t.offsetWidth,
      c = t.offsetHeight,
      d = t.offsetParent;
    if (d != t)
      for (; d; )
        (s += d.offsetLeft),
          (r += d.offsetTop),
          'fixed' == u(d, 'position').toLowerCase() ? (i = !0) : 'body' == d.tagName.toLowerCase() && (a = d.ownerDocument.defaultView),
          (d = d.offsetParent);
    for (d = t.parentNode; d.tagName && !n.ROOT_TAG.test(d.tagName); )
      (d.scrollTop || d.scrollLeft) &&
        (n.OP_SCROLL.test(p(d)) || (b && 'visible' === d.style.overflow) || ((s -= d.scrollLeft), (r -= d.scrollTop))),
        (d = d.parentNode);
    if (!i) {
      var f = o(a);
      (s -= f.left), (r -= f.top);
    }
    return (l += s), (c += r), { left: s, top: r, right: l, bottom: c };
  }
  function s(t) {
    t = t || v;
    var e = t[w];
    return {
      width: t.innerWidth ? t.innerWidth : e[_] && e[_].clientWidth ? e[_].clientWidth : e.body.offsetWidth,
      height: t.innerHeight ? t.innerHeight : e[_] && e[_].clientHeight ? e[_].clientHeight : e.body.offsetHeight,
    };
  }
  function o(t) {
    t = t || v;
    var e = t[w],
      n = e[_],
      i = e.body;
    return (
      (e = n && null != n.scrollTop && (n.scrollTop > i.scrollTop || n.scrollLeft > i.scrollLeft) ? n : i),
      { top: e.scrollTop, left: e.scrollLeft }
    );
  }
  function l(t) {
    try {
      var e = t ? t.srcElement || t.target : null;
      $dp.cal && !$dp.eCont && $dp.dd && e != $dp.el && 'block' == $dp.dd.style.display && $dp.cal.close();
    } catch (t) {}
  }
  function c() {
    $dp.status = 2;
  }
  function d(n, a) {
    function r() {
      if (g) {
        for (func = r.caller; null != func; ) {
          var t = func.arguments[0];
          if (t && (t + '').indexOf('Event') >= 0) return t;
          func = func.caller;
        }
        return null;
      }
      return event;
    }
    if ($dp) {
      t();
      var s = {};
      for (var o in n) s[o] = n[o];
      for (o in h) '$' != o.substring(0, 1) && void 0 === s[o] && (s[o] = h[o]);
      if (a) {
        if (
          !(function () {
            return !m || v == y || 'complete' == v[w].readyState;
          })()
        )
          return void (C =
            C ||
            setInterval(function () {
              'complete' == v[w].readyState && clearInterval(C), d(null, !0);
            }, 50));
        if (0 != $dp.status) return;
        ($dp.status = 1), (s.el = x), f(s, !0);
      } else if (s.eCont) (s.eCont = $dp.$(s.eCont)), (s.el = x), (s.autoPickDate = !0), (s.qsEnabled = !1), f(s);
      else {
        if (h.$preLoad && 2 != $dp.status) return;
        var l = r();
        if (
          ((y.event === l || l) && ((s.srcEl = l.srcElement || l.target), (l.cancelBubble = !0)),
          (s.el = s.el = $dp.$(s.el || s.srcEl)),
          !s.el || !0 === s.el.My97Mark || s.el.disabled || ($dp.dd && 'none' != p($dp.dd) && '-970px' != $dp.dd.style.left))
        ) {
          try {
            s.el.My97Mark && (s.el.My97Mark = !1);
          } catch (t) {}
          return;
        }
        l &&
          1 == s.el.nodeType &&
          !i(s.el.initcfg, n) &&
          ($dp.unbind(s.el),
          e(s.el, 'focus' == l.type ? 'onclick' : 'onfocus', function () {
            d(n);
          }),
          (s.el.initcfg = n)),
          f(s);
      }
    }
  }
  function u(t, e) {
    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, !1)[e];
  }
  function p(t, e) {
    if (t) {
      if (null == e) return u(t, 'display');
      t.style.display = e;
    }
  }
  function f(t, e) {
    function n(t, e) {
      function n() {
        var n = e.getRealLang();
        (t.lang = n.name), (t.skin = e.skin);
        var l = [
          '<head><script>',
          '',
          'var doc=document, $d, $dp, $cfg=doc.cfg, $pdp = parent.$dp, $dt, $tdt, $sdt, $lastInput, $IE=$pdp.ie, $FF = $pdp.ff,$OPERA=$pdp.opera, $ny, $cMark = false;',
          'if($cfg.eCont){$dp = {};for(var p in $pdp)$dp[p]=$pdp[p];}else{$dp=$pdp;};for(var p in $cfg){$dp[p]=$cfg[p];}',
          'doc.oncontextmenu=function(){try{$c._fillQS(!$dp.has.d,0);showB($d.qsDivSel);}catch(e){};return false;};',
          '</script><script src=//s.thsi.cn/js/quant/lib/wdatepicker/lang/',
          n.name,
          '.js charset=',
          n.charset,
          '></script>',
        ];
        r && (l[1] = 'document.domain="' + a + '";');
        for (var d = 0; d < o.length; d++)
          o[d].name == e.skin &&
            l.push(
              '<link rel="stylesheet" type="text/css" href="//s.thsi.cn/js/quant/lib/wdatepicker/skin/' +
                o[d].name +
                '/datepicker.css" charset="' +
                o[d].charset +
                '"/>'
            );
        l.push('<script src=//s.thsi.cn/js/quant/lib/wdatepicker/calendar.js></script>'),
          l.push('</head><body leftmargin="0" topmargin="0" tabindex=0></body></html>'),
          l.push(
            '<script>var t;t=t||setInterval(function(){if(doc.ready){new My97DP();$cfg.onload();$c.autoSize();$cfg.setPos($dp);clearInterval(t);}},20);</script>'
          ),
          (e.setPos = i),
          (e.onload = c),
          s.write('<html>'),
          (s.cfg = e),
          s.write(l.join('')),
          s.close();
      }
      var a = v[w].domain,
        r = !1;
      t.innerHTML = '<iframe hideFocus=true width=9 height=7 frameborder=0 border=0 scrolling=no src="about:blank"></iframe>';
      var s,
        o = (h.$langList, h.$skinList);
      try {
        s = t.lastChild.contentWindow[w];
      } catch (e) {
        (r = !0), t.removeChild(t.lastChild);
        var l = v[w].createElement('iframe');
        return (
          (l.hideFocus = !0),
          (l.frameBorder = 0),
          (l.scrolling = 'no'),
          (l.src = "javascript:(function(){var d=document;d.open();d.domain='" + a + "';})()"),
          t.appendChild(l),
          void setTimeout(function () {
            (s = t.lastChild.contentWindow[w]), n();
          }, 97)
        );
      }
      n();
    }
    function i(t) {
      var e = t.position.left,
        n = t.position.top,
        i = t.el;
      if (i != x) {
        i == t.srcEl || ('none' != p(i) && 'hidden' != i.type) || (i = t.srcEl);
        var l = r(i),
          c = a(y),
          d = s(v),
          u = o(v),
          f = $dp.dd.offsetHeight,
          h = $dp.dd.offsetWidth;
        if ((isNaN(n) && (n = 0), c.topM + l.bottom + f > d.height && c.topM + l.top - f > 0)) n += u.top + c.topM + l.top - f - 2;
        else {
          n += u.top + c.topM + l.bottom;
          var g = n - u.top + f - d.height;
          g > 0 && (n -= g);
        }
        isNaN(e) && (e = 0),
          (e += u.left + Math.min(c.leftM + l.left, d.width - h - 5) - (m ? 2 : 0)),
          (t.dd.style.top = n + 'px'),
          (t.dd.style.left = e + 'px');
      }
    }
    var l = t.el ? t.el.nodeName : 'INPUT';
    if (e || t.eCont || new RegExp(/input|textarea|div|span|p|a/gi).test(l)) {
      if (
        ((t.elProp = 'INPUT' == l ? 'value' : 'innerHTML'),
        'auto' == t.lang && (t.lang = m ? navigator.browserLanguage.toLowerCase() : navigator.language.toLowerCase()),
        !t.eCont)
      )
        for (var d in t) $dp[d] = t[d];
      !$dp.dd || t.eCont || ($dp.dd && (t.getRealLang().name != $dp.dd.lang || t.skin != $dp.dd.skin))
        ? t.eCont
          ? n(t.eCont, t)
          : (($dp.dd = v[w].createElement('DIV')),
            ($dp.dd.style.cssText = 'position:absolute'),
            v[w].body.appendChild($dp.dd),
            n($dp.dd, t),
            e ? ($dp.dd.style.left = $dp.dd.style.top = '-970px') : ($dp.show(), i($dp)))
        : $dp.cal && ($dp.show(), $dp.cal.init(), $dp.eCont || i($dp));
    }
  }
  var h = {
    $langList: [
      { name: 'en', charset: 'UTF-8' },
      { name: 'zh-cn', charset: 'gb2312' },
      { name: 'zh-tw', charset: 'GBK' },
    ],
    $skinList: [
      { name: 'default', charset: 'gb2312' },
      { name: 'whyGreen', charset: 'gb2312' },
      { name: 'blue', charset: 'gb2312' },
      { name: 'green', charset: 'gb2312' },
      { name: 'simple', charset: 'gb2312' },
      { name: 'ext', charset: 'gb2312' },
      { name: 'blueFresh', charset: 'gb2312' },
      { name: 'twoer', charset: 'gb2312' },
      { name: 'grey', charset: 'gb2312' },
      { name: 'greyplus', charset: 'gb2312' },
      { name: 'smorrebrod', charset: 'gb2312' },
    ],
    $wdate: !0,
    $crossFrame: !0,
    $preLoad: !1,
    $dpPath: '',
    doubleCalendar: !1,
    enableKeyboard: !0,
    enableInputMask: !0,
    autoUpdateOnChanged: null,
    weekMethod: 'ISO8601',
    position: {},
    lang: 'auto',
    skin: 'smorrebrod',
    dateFmt: 'yyyy-MM-dd',
    realDateFmt: 'yyyy-MM-dd',
    realTimeFmt: 'HH:mm:ss',
    realFullFmt: '%Date %Time',
    minDate: '1900-01-01 00:00:00',
    maxDate: '2099-12-31 23:59:59',
    startDate: '',
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
    hmsMenuCfg: { H: [1, 6], m: [5, 6], s: [15, 4] },
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
    elProp: '',
    errMsg: '',
    quickSel: [],
    has: {},
    getRealLang: function () {
      for (var t = h.$langList, e = 0; e < t.length; e++) if (t[e].name == this.lang) return t[e];
      return t[0];
    },
  };
  WdatePicker = d;
  var v,
    m,
    g,
    b,
    y = window,
    x = { innerHTML: '' },
    w = 'document',
    _ = 'documentElement',
    k = 'getElementsByTagName',
    T = navigator.appName;
  if (
    ('Microsoft Internet Explorer' == T ? (m = !0) : 'Opera' == T ? (b = !0) : (g = !0),
    h.$dpPath ||
      (function () {
        for (
          var t, e, n = y[w][k]('script'), i = 0;
          i < n.length &&
          ((t = n[i].getAttribute('src') || ''),
          (t = t.substr(0, t.toLowerCase().indexOf('wdatepicker.js'))),
          (e = t.lastIndexOf('/')),
          e > 0 && (t = t.substring(0, e + 1)),
          !t);
          i++
        );
        return t;
      })(),
    h.$wdate &&
      (function (t, e, n) {
        var i = y[w][k]('HEAD').item(0),
          a = y[w].createElement('link');
        i && ((a.href = t), (a.rel = 'stylesheet'), (a.type = 'text/css'), e && (a.title = e), n && (a.charset = n), i.appendChild(a));
      })('//s.thsi.cn/js/quant/lib/wdatepicker/skin/WdatePicker.css'),
    (v = y),
    h.$crossFrame)
  )
    try {
      for (; v.parent != v && 0 == v.parent[w][k]('frameset').length; ) v = v.parent;
    } catch (t) {}
  v.$dp || (v.$dp = { ff: g, ie: m, opera: b, status: 0, defMinDate: h.minDate, defMaxDate: h.maxDate }),
    t(),
    h.$preLoad &&
      0 == $dp.status &&
      e(y, 'onload', function () {
        d(null, !0);
      }),
    y[w].docMD || (e(y[w], 'onmousedown', l, !0), (y[w].docMD = !0)),
    v[w].docMD || (e(v[w], 'onmousedown', l, !0), (v[w].docMD = !0)),
    e(y, 'onunload', function () {
      $dp.dd && p($dp.dd, 'none');
    });
  var C;
})(),
  define('wdatepicker', function () {}),
  function () {
    var t = this,
      e = t._,
      n = {},
      i = Array.prototype,
      a = Object.prototype,
      r = Function.prototype,
      s = i.push,
      o = i.slice,
      l = i.concat,
      c = a.toString,
      d = a.hasOwnProperty,
      u = i.forEach,
      p = i.map,
      f = i.reduce,
      h = i.reduceRight,
      v = i.filter,
      m = i.every,
      g = i.some,
      b = i.indexOf,
      y = i.lastIndexOf,
      x = Array.isArray,
      w = Object.keys,
      _ = r.bind,
      k = function (t) {
        return t instanceof k ? t : this instanceof k ? void (this._wrapped = t) : new k(t);
      };
    'undefined' != typeof exports
      ? ('undefined' != typeof module && module.exports && (exports = module.exports = k), (exports._ = k))
      : (t._ = k),
      (k.VERSION = '1.6.0');
    var T =
      (k.each =
      k.forEach =
        function (t, e, i) {
          if (null == t) return t;
          if (u && t.forEach === u) t.forEach(e, i);
          else if (t.length === +t.length) {
            for (var a = 0, r = t.length; r > a; a++) if (e.call(i, t[a], a, t) === n) return;
          } else for (var s = k.keys(t), a = 0, r = s.length; r > a; a++) if (e.call(i, t[s[a]], s[a], t) === n) return;
          return t;
        });
    k.map = k.collect = function (t, e, n) {
      var i = [];
      return null == t
        ? i
        : p && t.map === p
        ? t.map(e, n)
        : (T(t, function (t, a, r) {
            i.push(e.call(n, t, a, r));
          }),
          i);
    };
    var C = 'Reduce of empty array with no initial value';
    (k.reduce =
      k.foldl =
      k.inject =
        function (t, e, n, i) {
          var a = arguments.length > 2;
          if ((null == t && (t = []), f && t.reduce === f)) return i && (e = k.bind(e, i)), a ? t.reduce(e, n) : t.reduce(e);
          if (
            (T(t, function (t, r, s) {
              a ? (n = e.call(i, n, t, r, s)) : ((n = t), (a = !0));
            }),
            !a)
          )
            throw new TypeError(C);
          return n;
        }),
      (k.reduceRight = k.foldr =
        function (t, e, n, i) {
          var a = arguments.length > 2;
          if ((null == t && (t = []), h && t.reduceRight === h)) return i && (e = k.bind(e, i)), a ? t.reduceRight(e, n) : t.reduceRight(e);
          var r = t.length;
          if (r !== +r) {
            var s = k.keys(t);
            r = s.length;
          }
          if (
            (T(t, function (o, l, c) {
              (l = s ? s[--r] : --r), a ? (n = e.call(i, n, t[l], l, c)) : ((n = t[l]), (a = !0));
            }),
            !a)
          )
            throw new TypeError(C);
          return n;
        }),
      (k.find = k.detect =
        function (t, e, n) {
          var i;
          return (
            A(t, function (t, a, r) {
              return e.call(n, t, a, r) ? ((i = t), !0) : void 0;
            }),
            i
          );
        }),
      (k.filter = k.select =
        function (t, e, n) {
          var i = [];
          return null == t
            ? i
            : v && t.filter === v
            ? t.filter(e, n)
            : (T(t, function (t, a, r) {
                e.call(n, t, a, r) && i.push(t);
              }),
              i);
        }),
      (k.reject = function (t, e, n) {
        return k.filter(
          t,
          function (t, i, a) {
            return !e.call(n, t, i, a);
          },
          n
        );
      }),
      (k.every = k.all =
        function (t, e, i) {
          e || (e = k.identity);
          var a = !0;
          return null == t
            ? a
            : m && t.every === m
            ? t.every(e, i)
            : (T(t, function (t, r, s) {
                return (a = a && e.call(i, t, r, s)) ? void 0 : n;
              }),
              !!a);
        });
    var A =
      (k.some =
      k.any =
        function (t, e, i) {
          e || (e = k.identity);
          var a = !1;
          return null == t
            ? a
            : g && t.some === g
            ? t.some(e, i)
            : (T(t, function (t, r, s) {
                return a || (a = e.call(i, t, r, s)) ? n : void 0;
              }),
              !!a);
        });
    (k.contains = k.include =
      function (t, e) {
        return (
          null != t &&
          (b && t.indexOf === b
            ? -1 != t.indexOf(e)
            : A(t, function (t) {
                return t === e;
              }))
        );
      }),
      (k.invoke = function (t, e) {
        var n = o.call(arguments, 2),
          i = k.isFunction(e);
        return k.map(t, function (t) {
          return (i ? e : t[e]).apply(t, n);
        });
      }),
      (k.pluck = function (t, e) {
        return k.map(t, k.property(e));
      }),
      (k.where = function (t, e) {
        return k.filter(t, k.matches(e));
      }),
      (k.findWhere = function (t, e) {
        return k.find(t, k.matches(e));
      }),
      (k.max = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        var i = -1 / 0,
          a = -1 / 0;
        return (
          T(t, function (t, r, s) {
            var o = e ? e.call(n, t, r, s) : t;
            o > a && ((i = t), (a = o));
          }),
          i
        );
      }),
      (k.min = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        var i = 1 / 0,
          a = 1 / 0;
        return (
          T(t, function (t, r, s) {
            var o = e ? e.call(n, t, r, s) : t;
            a > o && ((i = t), (a = o));
          }),
          i
        );
      }),
      (k.shuffle = function (t) {
        var e,
          n = 0,
          i = [];
        return (
          T(t, function (t) {
            (e = k.random(n++)), (i[n - 1] = i[e]), (i[e] = t);
          }),
          i
        );
      }),
      (k.sample = function (t, e, n) {
        return null == e || n
          ? (t.length !== +t.length && (t = k.values(t)), t[k.random(t.length - 1)])
          : k.shuffle(t).slice(0, Math.max(0, e));
      });
    var S = function (t) {
      return null == t ? k.identity : k.isFunction(t) ? t : k.property(t);
    };
    k.sortBy = function (t, e, n) {
      return (
        (e = S(e)),
        k.pluck(
          k
            .map(t, function (t, i, a) {
              return { value: t, index: i, criteria: e.call(n, t, i, a) };
            })
            .sort(function (t, e) {
              var n = t.criteria,
                i = e.criteria;
              if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (i > n || void 0 === i) return -1;
              }
              return t.index - e.index;
            }),
          'value'
        )
      );
    };
    var $ = function (t) {
      return function (e, n, i) {
        var a = {};
        return (
          (n = S(n)),
          T(e, function (r, s) {
            var o = n.call(i, r, s, e);
            t(a, o, r);
          }),
          a
        );
      };
    };
    (k.groupBy = $(function (t, e, n) {
      k.has(t, e) ? t[e].push(n) : (t[e] = [n]);
    })),
      (k.indexBy = $(function (t, e, n) {
        t[e] = n;
      })),
      (k.countBy = $(function (t, e) {
        k.has(t, e) ? t[e]++ : (t[e] = 1);
      })),
      (k.sortedIndex = function (t, e, n, i) {
        n = S(n);
        for (var a = n.call(i, e), r = 0, s = t.length; s > r; ) {
          var o = (r + s) >>> 1;
          n.call(i, t[o]) < a ? (r = o + 1) : (s = o);
        }
        return r;
      }),
      (k.toArray = function (t) {
        return t ? (k.isArray(t) ? o.call(t) : t.length === +t.length ? k.map(t, k.identity) : k.values(t)) : [];
      }),
      (k.size = function (t) {
        return null == t ? 0 : t.length === +t.length ? t.length : k.keys(t).length;
      }),
      (k.first =
        k.head =
        k.take =
          function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : o.call(t, 0, e);
          }),
      (k.initial = function (t, e, n) {
        return o.call(t, 0, t.length - (null == e || n ? 1 : e));
      }),
      (k.last = function (t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : o.call(t, Math.max(t.length - e, 0));
      }),
      (k.rest =
        k.tail =
        k.drop =
          function (t, e, n) {
            return o.call(t, null == e || n ? 1 : e);
          }),
      (k.compact = function (t) {
        return k.filter(t, k.identity);
      });
    var L = function (t, e, n) {
      return e && k.every(t, k.isArray)
        ? l.apply(n, t)
        : (T(t, function (t) {
            k.isArray(t) || k.isArguments(t) ? (e ? s.apply(n, t) : L(t, e, n)) : n.push(t);
          }),
          n);
    };
    (k.flatten = function (t, e) {
      return L(t, e, []);
    }),
      (k.without = function (t) {
        return k.difference(t, o.call(arguments, 1));
      }),
      (k.partition = function (t, e) {
        var n = [],
          i = [];
        return (
          T(t, function (t) {
            (e(t) ? n : i).push(t);
          }),
          [n, i]
        );
      }),
      (k.uniq = k.unique =
        function (t, e, n, i) {
          k.isFunction(e) && ((i = n), (n = e), (e = !1));
          var a = n ? k.map(t, n, i) : t,
            r = [],
            s = [];
          return (
            T(a, function (n, i) {
              (e ? i && s[s.length - 1] === n : k.contains(s, n)) || (s.push(n), r.push(t[i]));
            }),
            r
          );
        }),
      (k.union = function () {
        return k.uniq(k.flatten(arguments, !0));
      }),
      (k.intersection = function (t) {
        var e = o.call(arguments, 1);
        return k.filter(k.uniq(t), function (t) {
          return k.every(e, function (e) {
            return k.contains(e, t);
          });
        });
      }),
      (k.difference = function (t) {
        var e = l.apply(i, o.call(arguments, 1));
        return k.filter(t, function (t) {
          return !k.contains(e, t);
        });
      }),
      (k.zip = function () {
        for (var t = k.max(k.pluck(arguments, 'length').concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = k.pluck(arguments, '' + n);
        return e;
      }),
      (k.object = function (t, e) {
        if (null == t) return {};
        for (var n = {}, i = 0, a = t.length; a > i; i++) e ? (n[t[i]] = e[i]) : (n[t[i][0]] = t[i][1]);
        return n;
      }),
      (k.indexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = 0,
          a = t.length;
        if (n) {
          if ('number' != typeof n) return (i = k.sortedIndex(t, e)), t[i] === e ? i : -1;
          i = 0 > n ? Math.max(0, a + n) : n;
        }
        if (b && t.indexOf === b) return t.indexOf(e, n);
        for (; a > i; i++) if (t[i] === e) return i;
        return -1;
      }),
      (k.lastIndexOf = function (t, e, n) {
        if (null == t) return -1;
        var i = null != n;
        if (y && t.lastIndexOf === y) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var a = i ? n : t.length; a--; ) if (t[a] === e) return a;
        return -1;
      }),
      (k.range = function (t, e, n) {
        arguments.length <= 1 && ((e = t || 0), (t = 0)), (n = arguments[2] || 1);
        for (var i = Math.max(Math.ceil((e - t) / n), 0), a = 0, r = new Array(i); i > a; ) (r[a++] = t), (t += n);
        return r;
      });
    var D = function () {};
    (k.bind = function (t, e) {
      var n, i;
      if (_ && t.bind === _) return _.apply(t, o.call(arguments, 1));
      if (!k.isFunction(t)) throw new TypeError();
      return (
        (n = o.call(arguments, 2)),
        (i = function () {
          if (!(this instanceof i)) return t.apply(e, n.concat(o.call(arguments)));
          D.prototype = t.prototype;
          var a = new D();
          D.prototype = null;
          var r = t.apply(a, n.concat(o.call(arguments)));
          return Object(r) === r ? r : a;
        })
      );
    }),
      (k.partial = function (t) {
        var e = o.call(arguments, 1);
        return function () {
          for (var n = 0, i = e.slice(), a = 0, r = i.length; r > a; a++) i[a] === k && (i[a] = arguments[n++]);
          for (; n < arguments.length; ) i.push(arguments[n++]);
          return t.apply(this, i);
        };
      }),
      (k.bindAll = function (t) {
        var e = o.call(arguments, 1);
        if (0 === e.length) throw new Error('bindAll must be passed function names');
        return (
          T(e, function (e) {
            t[e] = k.bind(t[e], t);
          }),
          t
        );
      }),
      (k.memoize = function (t, e) {
        var n = {};
        return (
          e || (e = k.identity),
          function () {
            var i = e.apply(this, arguments);
            return k.has(n, i) ? n[i] : (n[i] = t.apply(this, arguments));
          }
        );
      }),
      (k.delay = function (t, e) {
        var n = o.call(arguments, 2);
        return setTimeout(function () {
          return t.apply(null, n);
        }, e);
      }),
      (k.defer = function (t) {
        return k.delay.apply(k, [t, 1].concat(o.call(arguments, 1)));
      }),
      (k.throttle = function (t, e, n) {
        var i,
          a,
          r,
          s = null,
          o = 0;
        n || (n = {});
        var l = function () {
          (o = !1 === n.leading ? 0 : k.now()), (s = null), (r = t.apply(i, a)), (i = a = null);
        };
        return function () {
          var c = k.now();
          o || !1 !== n.leading || (o = c);
          var d = e - (c - o);
          return (
            (i = this),
            (a = arguments),
            0 >= d
              ? (clearTimeout(s), (s = null), (o = c), (r = t.apply(i, a)), (i = a = null))
              : s || !1 === n.trailing || (s = setTimeout(l, d)),
            r
          );
        };
      }),
      (k.debounce = function (t, e, n) {
        var i,
          a,
          r,
          s,
          o,
          l = function () {
            var c = k.now() - s;
            e > c ? (i = setTimeout(l, e - c)) : ((i = null), n || ((o = t.apply(r, a)), (r = a = null)));
          };
        return function () {
          (r = this), (a = arguments), (s = k.now());
          var c = n && !i;
          return i || (i = setTimeout(l, e)), c && ((o = t.apply(r, a)), (r = a = null)), o;
        };
      }),
      (k.once = function (t) {
        var e,
          n = !1;
        return function () {
          return n ? e : ((n = !0), (e = t.apply(this, arguments)), (t = null), e);
        };
      }),
      (k.wrap = function (t, e) {
        return k.partial(e, t);
      }),
      (k.compose = function () {
        var t = arguments;
        return function () {
          for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
          return e[0];
        };
      }),
      (k.after = function (t, e) {
        return function () {
          return --t < 1 ? e.apply(this, arguments) : void 0;
        };
      }),
      (k.keys = function (t) {
        if (!k.isObject(t)) return [];
        if (w) return w(t);
        var e = [];
        for (var n in t) k.has(t, n) && e.push(n);
        return e;
      }),
      (k.values = function (t) {
        for (var e = k.keys(t), n = e.length, i = new Array(n), a = 0; n > a; a++) i[a] = t[e[a]];
        return i;
      }),
      (k.pairs = function (t) {
        for (var e = k.keys(t), n = e.length, i = new Array(n), a = 0; n > a; a++) i[a] = [e[a], t[e[a]]];
        return i;
      }),
      (k.invert = function (t) {
        for (var e = {}, n = k.keys(t), i = 0, a = n.length; a > i; i++) e[t[n[i]]] = n[i];
        return e;
      }),
      (k.functions = k.methods =
        function (t) {
          var e = [];
          for (var n in t) k.isFunction(t[n]) && e.push(n);
          return e.sort();
        }),
      (k.extend = function (t) {
        return (
          T(o.call(arguments, 1), function (e) {
            if (e) for (var n in e) t[n] = e[n];
          }),
          t
        );
      }),
      (k.pick = function (t) {
        var e = {},
          n = l.apply(i, o.call(arguments, 1));
        return (
          T(n, function (n) {
            n in t && (e[n] = t[n]);
          }),
          e
        );
      }),
      (k.omit = function (t) {
        var e = {},
          n = l.apply(i, o.call(arguments, 1));
        for (var a in t) k.contains(n, a) || (e[a] = t[a]);
        return e;
      }),
      (k.defaults = function (t) {
        return (
          T(o.call(arguments, 1), function (e) {
            if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
          }),
          t
        );
      }),
      (k.clone = function (t) {
        return k.isObject(t) ? (k.isArray(t) ? t.slice() : k.extend({}, t)) : t;
      }),
      (k.tap = function (t, e) {
        return e(t), t;
      });
    var I = function (t, e, n, i) {
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e) return t === e;
      t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
      var a = c.call(t);
      if (a != c.call(e)) return !1;
      switch (a) {
        case '[object String]':
          return t == String(e);
        case '[object Number]':
          return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
        case '[object Date]':
        case '[object Boolean]':
          return +t == +e;
        case '[object RegExp]':
          return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
      }
      if ('object' != typeof t || 'object' != typeof e) return !1;
      for (var r = n.length; r--; ) if (n[r] == t) return i[r] == e;
      var s = t.constructor,
        o = e.constructor;
      if (s !== o && !(k.isFunction(s) && s instanceof s && k.isFunction(o) && o instanceof o) && 'constructor' in t && 'constructor' in e)
        return !1;
      n.push(t), i.push(e);
      var l = 0,
        d = !0;
      if ('[object Array]' == a) {
        if (((l = t.length), (d = l == e.length))) for (; l-- && (d = I(t[l], e[l], n, i)); );
      } else {
        for (var u in t) if (k.has(t, u) && (l++, !(d = k.has(e, u) && I(t[u], e[u], n, i)))) break;
        if (d) {
          for (u in e) if (k.has(e, u) && !l--) break;
          d = !l;
        }
      }
      return n.pop(), i.pop(), d;
    };
    (k.isEqual = function (t, e) {
      return I(t, e, [], []);
    }),
      (k.isEmpty = function (t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t) if (k.has(t, e)) return !1;
        return !0;
      }),
      (k.isElement = function (t) {
        return !(!t || 1 !== t.nodeType);
      }),
      (k.isArray =
        x ||
        function (t) {
          return '[object Array]' == c.call(t);
        }),
      (k.isObject = function (t) {
        return t === Object(t);
      }),
      T(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'], function (t) {
        k['is' + t] = function (e) {
          return c.call(e) == '[object ' + t + ']';
        };
      }),
      k.isArguments(arguments) ||
        (k.isArguments = function (t) {
          return !(!t || !k.has(t, 'callee'));
        }),
      'function' != typeof /./ &&
        (k.isFunction = function (t) {
          return 'function' == typeof t;
        }),
      (k.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t));
      }),
      (k.isNaN = function (t) {
        return k.isNumber(t) && t != +t;
      }),
      (k.isBoolean = function (t) {
        return !0 === t || !1 === t || '[object Boolean]' == c.call(t);
      }),
      (k.isNull = function (t) {
        return null === t;
      }),
      (k.isUndefined = function (t) {
        return void 0 === t;
      }),
      (k.has = function (t, e) {
        return d.call(t, e);
      }),
      (k.noConflict = function () {
        return (t._ = e), this;
      }),
      (k.identity = function (t) {
        return t;
      }),
      (k.constant = function (t) {
        return function () {
          return t;
        };
      }),
      (k.property = function (t) {
        return function (e) {
          return e[t];
        };
      }),
      (k.matches = function (t) {
        return function (e) {
          if (e === t) return !0;
          for (var n in t) if (t[n] !== e[n]) return !1;
          return !0;
        };
      }),
      (k.times = function (t, e, n) {
        for (var i = Array(Math.max(0, t)), a = 0; t > a; a++) i[a] = e.call(n, a);
        return i;
      }),
      (k.random = function (t, e) {
        return null == e && ((e = t), (t = 0)), t + Math.floor(Math.random() * (e - t + 1));
      }),
      (k.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var P = { escape: { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;' } };
    P.unescape = k.invert(P.escape);
    var E = {
      escape: new RegExp('[' + k.keys(P.escape).join('') + ']', 'g'),
      unescape: new RegExp('(' + k.keys(P.unescape).join('|') + ')', 'g'),
    };
    k.each(['escape', 'unescape'], function (t) {
      k[t] = function (e) {
        return null == e
          ? ''
          : ('' + e).replace(E[t], function (e) {
              return P[t][e];
            });
      };
    }),
      (k.result = function (t, e) {
        if (null != t) {
          var n = t[e];
          return k.isFunction(n) ? n.call(t) : n;
        }
      }),
      (k.mixin = function (t) {
        T(k.functions(t), function (e) {
          var n = (k[e] = t[e]);
          k.prototype[e] = function () {
            var t = [this._wrapped];
            return s.apply(t, arguments), M.call(this, n.apply(k, t));
          };
        });
      });
    var F = 0;
    (k.uniqueId = function (t) {
      var e = ++F + '';
      return t ? t + e : e;
    }),
      (k.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
    var j = /(.)^/,
      N = { "'": "'", '\\': '\\', '\r': 'r', '\n': 'n', '\t': 't', '\u2028': 'u2028', '\u2029': 'u2029' },
      O = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    (k.template = function (t, e, n) {
      var i;
      n = k.defaults({}, n, k.templateSettings);
      var a = new RegExp([(n.escape || j).source, (n.interpolate || j).source, (n.evaluate || j).source].join('|') + '|$', 'g'),
        r = 0,
        s = "__p+='";
      t.replace(a, function (e, n, i, a, o) {
        return (
          (s += t.slice(r, o).replace(O, function (t) {
            return '\\' + N[t];
          })),
          n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
          i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
          a && (s += "';\n" + a + "\n__p+='"),
          (r = o + e.length),
          e
        );
      }),
        (s += "';\n"),
        n.variable || (s = 'with(obj||{}){\n' + s + '}\n'),
        (s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + 'return __p;\n');
      try {
        i = new Function(n.variable || 'obj', '_', s);
      } catch (t) {
        throw ((t.source = s), t);
      }
      if (e) return i(e, k);
      var o = function (t) {
        return i.call(this, t, k);
      };
      return (o.source = 'function(' + (n.variable || 'obj') + '){\n' + s + '}'), o;
    }),
      (k.chain = function (t) {
        return k(t).chain();
      });
    var M = function (t) {
      return this._chain ? k(t).chain() : t;
    };
    k.mixin(k),
      T(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (t) {
        var e = i[t];
        k.prototype[t] = function () {
          var n = this._wrapped;
          return e.apply(n, arguments), ('shift' != t && 'splice' != t) || 0 !== n.length || delete n[0], M.call(this, n);
        };
      }),
      T(['concat', 'join', 'slice'], function (t) {
        var e = i[t];
        k.prototype[t] = function () {
          return M.call(this, e.apply(this._wrapped, arguments));
        };
      }),
      k.extend(k.prototype, {
        chain: function () {
          return (this._chain = !0), this;
        },
        value: function () {
          return this._wrapped;
        },
      }),
      'function' == typeof define &&
        define.amd &&
        define('underscore', [], function () {
          return k;
        });
  }.call(this),
  (function (t, e) {
    if ('function' == typeof define && define.amd)
      define('backbone', ['underscore', 'jquery', 'exports'], function (n, i, a) {
        t.Backbone = e(t, a, n, i);
      });
    else if ('undefined' != typeof exports) {
      var n = require('underscore');
      e(t, exports, n);
    } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$);
  })(this, function (t, e, n, i) {
    var a = t.Backbone,
      r = [],
      s = r.slice;
    (e.VERSION = '1.1.2'),
      (e.$ = i),
      (e.noConflict = function () {
        return (t.Backbone = a), this;
      }),
      (e.emulateHTTP = !1),
      (e.emulateJSON = !1);
    var o = (e.Events = {
        on: function (t, e, n) {
          return c(this, 'on', t, [e, n]) && e
            ? (this._events || (this._events = {}),
              (this._events[t] || (this._events[t] = [])).push({ callback: e, context: n, ctx: n || this }),
              this)
            : this;
        },
        once: function (t, e, i) {
          if (!c(this, 'once', t, [e, i]) || !e) return this;
          var a = this,
            r = n.once(function () {
              a.off(t, r), e.apply(this, arguments);
            });
          return (r._callback = e), this.on(t, r, i);
        },
        off: function (t, e, i) {
          var a, r, s, o, l, d, u, p;
          if (!this._events || !c(this, 'off', t, [e, i])) return this;
          if (!t && !e && !i) return (this._events = void 0), this;
          for (o = t ? [t] : n.keys(this._events), l = 0, d = o.length; l < d; l++)
            if (((t = o[l]), (s = this._events[t]))) {
              if (((this._events[t] = a = []), e || i))
                for (u = 0, p = s.length; u < p; u++)
                  (r = s[u]), ((e && e !== r.callback && e !== r.callback._callback) || (i && i !== r.context)) && a.push(r);
              a.length || delete this._events[t];
            }
          return this;
        },
        trigger: function (t) {
          if (!this._events) return this;
          var e = s.call(arguments, 1);
          if (!c(this, 'trigger', t, e)) return this;
          var n = this._events[t],
            i = this._events.all;
          return n && d(n, e), i && d(i, arguments), this;
        },
        stopListening: function (t, e, i) {
          var a = this._listeningTo;
          if (!a) return this;
          var r = !e && !i;
          i || 'object' != typeof e || (i = this), t && ((a = {})[t._listenId] = t);
          for (var s in a) (t = a[s]), t.off(e, i, this), (r || n.isEmpty(t._events)) && delete this._listeningTo[s];
          return this;
        },
      }),
      l = /\s+/,
      c = function (t, e, n, i) {
        if (!n) return !0;
        if ('object' == typeof n) {
          for (var a in n) t[e].apply(t, [a, n[a]].concat(i));
          return !1;
        }
        if (l.test(n)) {
          for (var r = n.split(l), s = 0, o = r.length; s < o; s++) t[e].apply(t, [r[s]].concat(i));
          return !1;
        }
        return !0;
      },
      d = function (t, e) {
        var n,
          i = -1,
          a = t.length,
          r = e[0],
          s = e[1],
          o = e[2];
        switch (e.length) {
          case 0:
            for (; ++i < a; ) (n = t[i]).callback.call(n.ctx);
            return;
          case 1:
            for (; ++i < a; ) (n = t[i]).callback.call(n.ctx, r);
            return;
          case 2:
            for (; ++i < a; ) (n = t[i]).callback.call(n.ctx, r, s);
            return;
          case 3:
            for (; ++i < a; ) (n = t[i]).callback.call(n.ctx, r, s, o);
            return;
          default:
            for (; ++i < a; ) (n = t[i]).callback.apply(n.ctx, e);
            return;
        }
      },
      u = { listenTo: 'on', listenToOnce: 'once' };
    n.each(u, function (t, e) {
      o[e] = function (e, i, a) {
        return (
          ((this._listeningTo || (this._listeningTo = {}))[e._listenId || (e._listenId = n.uniqueId('l'))] = e),
          a || 'object' != typeof i || (a = this),
          e[t](i, a, this),
          this
        );
      };
    }),
      (o.bind = o.on),
      (o.unbind = o.off),
      n.extend(e, o);
    var p = (e.Model = function (t, e) {
      var i = t || {};
      e || (e = {}),
        (this.cid = n.uniqueId('c')),
        (this.attributes = {}),
        e.collection && (this.collection = e.collection),
        e.parse && (i = this.parse(i, e) || {}),
        (i = n.defaults({}, i, n.result(this, 'defaults'))),
        this.set(i, e),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    n.extend(p.prototype, o, {
      changed: null,
      validationError: null,
      idAttribute: 'id',
      initialize: function () {},
      toJSON: function (t) {
        return n.clone(this.attributes);
      },
      sync: function () {
        return e.sync.apply(this, arguments);
      },
      get: function (t) {
        return this.attributes[t];
      },
      escape: function (t) {
        return n.escape(this.get(t));
      },
      has: function (t) {
        return null != this.get(t);
      },
      set: function (t, e, i) {
        var a, r, s, o, l, c, d, u;
        if (null == t) return this;
        if (('object' == typeof t ? ((r = t), (i = e)) : ((r = {})[t] = e), i || (i = {}), !this._validate(r, i))) return !1;
        (s = i.unset),
          (l = i.silent),
          (o = []),
          (c = this._changing),
          (this._changing = !0),
          c || ((this._previousAttributes = n.clone(this.attributes)), (this.changed = {})),
          (u = this.attributes),
          (d = this._previousAttributes),
          this.idAttribute in r && (this.id = r[this.idAttribute]);
        for (a in r)
          (e = r[a]),
            n.isEqual(u[a], e) || o.push(a),
            n.isEqual(d[a], e) ? delete this.changed[a] : (this.changed[a] = e),
            s ? delete u[a] : (u[a] = e);
        if (!l) {
          o.length && (this._pending = i);
          for (var p = 0, f = o.length; p < f; p++) this.trigger('change:' + o[p], this, u[o[p]], i);
        }
        if (c) return this;
        if (!l) for (; this._pending; ) (i = this._pending), (this._pending = !1), this.trigger('change', this, i);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (t, e) {
        return this.set(t, void 0, n.extend({}, e, { unset: !0 }));
      },
      clear: function (t) {
        var e = {};
        for (var i in this.attributes) e[i] = void 0;
        return this.set(e, n.extend({}, t, { unset: !0 }));
      },
      hasChanged: function (t) {
        return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t);
      },
      changedAttributes: function (t) {
        if (!t) return !!this.hasChanged() && n.clone(this.changed);
        var e,
          i = !1,
          a = this._changing ? this._previousAttributes : this.attributes;
        for (var r in t) n.isEqual(a[r], (e = t[r])) || ((i || (i = {}))[r] = e);
        return i;
      },
      previous: function (t) {
        return null != t && this._previousAttributes ? this._previousAttributes[t] : null;
      },
      previousAttributes: function () {
        return n.clone(this._previousAttributes);
      },
      fetch: function (t) {
        (t = t ? n.clone(t) : {}), void 0 === t.parse && (t.parse = !0);
        var e = this,
          i = t.success;
        return (
          (t.success = function (n) {
            if (!e.set(e.parse(n, t), t)) return !1;
            i && i(e, n, t), e.trigger('sync', e, n, t);
          }),
          O(this, t),
          this.sync('read', this, t)
        );
      },
      save: function (t, e, i) {
        var a,
          r,
          s,
          o = this.attributes;
        if (
          (null == t || 'object' == typeof t ? ((a = t), (i = e)) : ((a = {})[t] = e), (i = n.extend({ validate: !0 }, i)), a && !i.wait)
        ) {
          if (!this.set(a, i)) return !1;
        } else if (!this._validate(a, i)) return !1;
        a && i.wait && (this.attributes = n.extend({}, o, a)), void 0 === i.parse && (i.parse = !0);
        var l = this,
          c = i.success;
        return (
          (i.success = function (t) {
            l.attributes = o;
            var e = l.parse(t, i);
            if ((i.wait && (e = n.extend(a || {}, e)), n.isObject(e) && !l.set(e, i))) return !1;
            c && c(l, t, i), l.trigger('sync', l, t, i);
          }),
          O(this, i),
          (r = this.isNew() ? 'create' : i.patch ? 'patch' : 'update'),
          'patch' === r && (i.attrs = a),
          (s = this.sync(r, this, i)),
          a && i.wait && (this.attributes = o),
          s
        );
      },
      destroy: function (t) {
        t = t ? n.clone(t) : {};
        var e = this,
          i = t.success,
          a = function () {
            e.trigger('destroy', e, e.collection, t);
          };
        if (
          ((t.success = function (n) {
            (t.wait || e.isNew()) && a(), i && i(e, n, t), e.isNew() || e.trigger('sync', e, n, t);
          }),
          this.isNew())
        )
          return t.success(), !1;
        O(this, t);
        var r = this.sync('delete', this, t);
        return t.wait || a(), r;
      },
      url: function () {
        var t = n.result(this, 'urlRoot') || n.result(this.collection, 'url') || N();
        return this.isNew() ? t : t.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
      },
      parse: function (t, e) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return !this.has(this.idAttribute);
      },
      isValid: function (t) {
        return this._validate({}, n.extend(t || {}, { validate: !0 }));
      },
      _validate: function (t, e) {
        if (!e.validate || !this.validate) return !0;
        t = n.extend({}, this.attributes, t);
        var i = (this.validationError = this.validate(t, e) || null);
        return !i || (this.trigger('invalid', this, i, n.extend(e, { validationError: i })), !1);
      },
    });
    var f = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];
    n.each(f, function (t) {
      p.prototype[t] = function () {
        var e = s.call(arguments);
        return e.unshift(this.attributes), n[t].apply(n, e);
      };
    });
    var h = (e.Collection = function (t, e) {
        e || (e = {}),
          e.model && (this.model = e.model),
          void 0 !== e.comparator && (this.comparator = e.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          t && this.reset(t, n.extend({ silent: !0 }, e));
      }),
      v = { add: !0, remove: !0, merge: !0 },
      m = { add: !0, remove: !1 };
    n.extend(h.prototype, o, {
      model: p,
      initialize: function () {},
      toJSON: function (t) {
        return this.map(function (e) {
          return e.toJSON(t);
        });
      },
      sync: function () {
        return e.sync.apply(this, arguments);
      },
      add: function (t, e) {
        return this.set(t, n.extend({ merge: !1 }, e, m));
      },
      remove: function (t, e) {
        var i = !n.isArray(t);
        (t = i ? [t] : n.clone(t)), e || (e = {});
        var a, r, s, o;
        for (a = 0, r = t.length; a < r; a++)
          (o = t[a] = this.get(t[a])) &&
            (delete this._byId[o.id],
            delete this._byId[o.cid],
            (s = this.indexOf(o)),
            this.models.splice(s, 1),
            this.length--,
            e.silent || ((e.index = s), o.trigger('remove', o, this, e)),
            this._removeReference(o, e));
        return i ? t[0] : t;
      },
      set: function (t, e) {
        (e = n.defaults({}, e, v)), e.parse && (t = this.parse(t, e));
        var i = !n.isArray(t);
        t = i ? (t ? [t] : []) : n.clone(t);
        var a,
          r,
          s,
          o,
          l,
          c,
          d,
          u = e.at,
          f = this.model,
          h = this.comparator && null == u && !1 !== e.sort,
          m = n.isString(this.comparator) ? this.comparator : null,
          g = [],
          b = [],
          y = {},
          x = e.add,
          w = e.merge,
          _ = e.remove,
          k = !(h || !x || !_) && [];
        for (a = 0, r = t.length; a < r; a++) {
          if (((l = t[a] || {}), (s = l instanceof p ? (o = l) : l[f.prototype.idAttribute || 'id']), (c = this.get(s))))
            _ && (y[c.cid] = !0),
              w && ((l = l === o ? o.attributes : l), e.parse && (l = c.parse(l, e)), c.set(l, e), h && !d && c.hasChanged(m) && (d = !0)),
              (t[a] = c);
          else if (x) {
            if (!(o = t[a] = this._prepareModel(l, e))) continue;
            g.push(o), this._addReference(o, e);
          }
          (o = c || o), !k || (!o.isNew() && y[o.id]) || k.push(o), (y[o.id] = !0);
        }
        if (_) {
          for (a = 0, r = this.length; a < r; ++a) y[(o = this.models[a]).cid] || b.push(o);
          b.length && this.remove(b, e);
        }
        if (g.length || (k && k.length))
          if ((h && (d = !0), (this.length += g.length), null != u))
            for (a = 0, r = g.length; a < r; a++) this.models.splice(u + a, 0, g[a]);
          else {
            k && (this.models.length = 0);
            var T = k || g;
            for (a = 0, r = T.length; a < r; a++) this.models.push(T[a]);
          }
        if ((d && this.sort({ silent: !0 }), !e.silent)) {
          for (a = 0, r = g.length; a < r; a++) (o = g[a]).trigger('add', o, this, e);
          (d || (k && k.length)) && this.trigger('sort', this, e);
        }
        return i ? t[0] : t;
      },
      reset: function (t, e) {
        e || (e = {});
        for (var i = 0, a = this.models.length; i < a; i++) this._removeReference(this.models[i], e);
        return (
          (e.previousModels = this.models),
          this._reset(),
          (t = this.add(t, n.extend({ silent: !0 }, e))),
          e.silent || this.trigger('reset', this, e),
          t
        );
      },
      push: function (t, e) {
        return this.add(t, n.extend({ at: this.length }, e));
      },
      pop: function (t) {
        var e = this.at(this.length - 1);
        return this.remove(e, t), e;
      },
      unshift: function (t, e) {
        return this.add(t, n.extend({ at: 0 }, e));
      },
      shift: function (t) {
        var e = this.at(0);
        return this.remove(e, t), e;
      },
      slice: function () {
        return s.apply(this.models, arguments);
      },
      get: function (t) {
        if (null != t) return this._byId[t] || this._byId[t.id] || this._byId[t.cid];
      },
      at: function (t) {
        return this.models[t];
      },
      where: function (t, e) {
        return n.isEmpty(t)
          ? e
            ? void 0
            : []
          : this[e ? 'find' : 'filter'](function (e) {
              for (var n in t) if (t[n] !== e.get(n)) return !1;
              return !0;
            });
      },
      findWhere: function (t) {
        return this.where(t, !0);
      },
      sort: function (t) {
        if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
        return (
          t || (t = {}),
          n.isString(this.comparator) || 1 === this.comparator.length
            ? (this.models = this.sortBy(this.comparator, this))
            : this.models.sort(n.bind(this.comparator, this)),
          t.silent || this.trigger('sort', this, t),
          this
        );
      },
      pluck: function (t) {
        return n.invoke(this.models, 'get', t);
      },
      fetch: function (t) {
        (t = t ? n.clone(t) : {}), void 0 === t.parse && (t.parse = !0);
        var e = t.success,
          i = this;
        return (
          (t.success = function (n) {
            var a = t.reset ? 'reset' : 'set';
            i[a](n, t), e && e(i, n, t), i.trigger('sync', i, n, t);
          }),
          O(this, t),
          this.sync('read', this, t)
        );
      },
      create: function (t, e) {
        if (((e = e ? n.clone(e) : {}), !(t = this._prepareModel(t, e)))) return !1;
        e.wait || this.add(t, e);
        var i = this,
          a = e.success;
        return (
          (e.success = function (t, n) {
            e.wait && i.add(t, e), a && a(t, n, e);
          }),
          t.save(null, e),
          t
        );
      },
      parse: function (t, e) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.models);
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (t, e) {
        if (t instanceof p) return t;
        (e = e ? n.clone(e) : {}), (e.collection = this);
        var i = new this.model(t, e);
        return i.validationError ? (this.trigger('invalid', this, i.validationError, e), !1) : i;
      },
      _addReference: function (t, e) {
        (this._byId[t.cid] = t),
          null != t.id && (this._byId[t.id] = t),
          t.collection || (t.collection = this),
          t.on('all', this._onModelEvent, this);
      },
      _removeReference: function (t, e) {
        this === t.collection && delete t.collection, t.off('all', this._onModelEvent, this);
      },
      _onModelEvent: function (t, e, n, i) {
        (('add' !== t && 'remove' !== t) || n === this) &&
          ('destroy' === t && this.remove(e, i),
          e && t === 'change:' + e.idAttribute && (delete this._byId[e.previous(e.idAttribute)], null != e.id && (this._byId[e.id] = e)),
          this.trigger.apply(this, arguments));
      },
    });
    var g = [
      'forEach',
      'each',
      'map',
      'collect',
      'reduce',
      'foldl',
      'inject',
      'reduceRight',
      'foldr',
      'find',
      'detect',
      'filter',
      'select',
      'reject',
      'every',
      'all',
      'some',
      'any',
      'include',
      'contains',
      'invoke',
      'max',
      'min',
      'toArray',
      'size',
      'first',
      'head',
      'take',
      'initial',
      'rest',
      'tail',
      'drop',
      'last',
      'without',
      'difference',
      'indexOf',
      'shuffle',
      'lastIndexOf',
      'isEmpty',
      'chain',
      'sample',
    ];
    n.each(g, function (t) {
      h.prototype[t] = function () {
        var e = s.call(arguments);
        return e.unshift(this.models), n[t].apply(n, e);
      };
    });
    var b = ['groupBy', 'countBy', 'sortBy', 'indexBy'];
    n.each(b, function (t) {
      h.prototype[t] = function (e, i) {
        var a = n.isFunction(e)
          ? e
          : function (t) {
              return t.get(e);
            };
        return n[t](this.models, a, i);
      };
    });
    var y = (e.View = function (t) {
        (this.cid = n.uniqueId('view')),
          t || (t = {}),
          n.extend(this, n.pick(t, w)),
          this._ensureElement(),
          this.initialize.apply(this, arguments),
          this.delegateEvents();
      }),
      x = /^(\S+)\s*(.*)$/,
      w = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];
    n.extend(y.prototype, o, {
      tagName: 'div',
      $: function (t) {
        return this.$el.find(t);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this.$el.remove(), this.stopListening(), this;
      },
      setElement: function (t, n) {
        return (
          this.$el && this.undelegateEvents(),
          (this.$el = t instanceof e.$ ? t : e.$(t)),
          (this.el = this.$el[0]),
          !1 !== n && this.delegateEvents(),
          this
        );
      },
      delegateEvents: function (t) {
        if (!t && !(t = n.result(this, 'events'))) return this;
        this.undelegateEvents();
        for (var e in t) {
          var i = t[e];
          if ((n.isFunction(i) || (i = this[t[e]]), i)) {
            var a = e.match(x),
              r = a[1],
              s = a[2];
            (i = n.bind(i, this)), (r += '.delegateEvents' + this.cid), '' === s ? this.$el.on(r, i) : this.$el.on(r, s, i);
          }
        }
        return this;
      },
      undelegateEvents: function () {
        return this.$el.off('.delegateEvents' + this.cid), this;
      },
      _ensureElement: function () {
        if (this.el) this.setElement(n.result(this, 'el'), !1);
        else {
          var t = n.extend({}, n.result(this, 'attributes'));
          this.id && (t.id = n.result(this, 'id')), this.className && (t.class = n.result(this, 'className'));
          var i = e.$('<' + n.result(this, 'tagName') + '>').attr(t);
          this.setElement(i, !1);
        }
      },
    }),
      (e.sync = function (t, i, a) {
        var r = k[t];
        n.defaults(a || (a = {}), { emulateHTTP: e.emulateHTTP, emulateJSON: e.emulateJSON });
        var s = { type: r, dataType: 'json' };
        if (
          (a.url || (s.url = n.result(i, 'url') || N()),
          null != a.data ||
            !i ||
            ('create' !== t && 'update' !== t && 'patch' !== t) ||
            ((s.contentType = 'application/json'), (s.data = JSON.stringify(a.attrs || i.toJSON(a)))),
          a.emulateJSON && ((s.contentType = 'application/x-www-form-urlencoded'), (s.data = s.data ? { model: s.data } : {})),
          a.emulateHTTP && ('PUT' === r || 'DELETE' === r || 'PATCH' === r))
        ) {
          (s.type = 'POST'), a.emulateJSON && (s.data._method = r);
          var o = a.beforeSend;
          a.beforeSend = function (t) {
            if ((t.setRequestHeader('X-HTTP-Method-Override', r), o)) return o.apply(this, arguments);
          };
        }
        'GET' === s.type || a.emulateJSON || (s.processData = !1),
          'PATCH' === s.type &&
            _ &&
            (s.xhr = function () {
              return new ActiveXObject('Microsoft.XMLHTTP');
            });
        var l = (a.xhr = e.ajax(n.extend(s, a)));
        return i.trigger('request', i, l, a), l;
      });
    var _ = !('undefined' == typeof window || !window.ActiveXObject || (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)),
      k = { create: 'POST', update: 'PUT', patch: 'PATCH', delete: 'DELETE', read: 'GET' };
    e.ajax = function () {
      return e.$.ajax.apply(e.$, arguments);
    };
    var T = (e.Router = function (t) {
        t || (t = {}), t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
      }),
      C = /\((.*?)\)/g,
      A = /(\(\?)?:\w+/g,
      S = /\*\w+/g,
      $ = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(T.prototype, o, {
      initialize: function () {},
      route: function (t, i, a) {
        n.isRegExp(t) || (t = this._routeToRegExp(t)), n.isFunction(i) && ((a = i), (i = '')), a || (a = this[i]);
        var r = this;
        return (
          e.history.route(t, function (n) {
            var s = r._extractParameters(t, n);
            r.execute(a, s), r.trigger.apply(r, ['route:' + i].concat(s)), r.trigger('route', i, s), e.history.trigger('route', r, i, s);
          }),
          this
        );
      },
      execute: function (t, e) {
        t && t.apply(this, e);
      },
      navigate: function (t, n) {
        return e.history.navigate(t, n), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = n.result(this, 'routes');
          for (var t, e = n.keys(this.routes); null != (t = e.pop()); ) this.route(t, this.routes[t]);
        }
      },
      _routeToRegExp: function (t) {
        return (
          (t = t
            .replace($, '\\$&')
            .replace(C, '(?:$1)?')
            .replace(A, function (t, e) {
              return e ? t : '([^/?]+)';
            })
            .replace(S, '([^?]*?)')),
          new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
        );
      },
      _extractParameters: function (t, e) {
        var i = t.exec(e).slice(1);
        return n.map(i, function (t, e) {
          return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null;
        });
      },
    });
    var L = (e.History = function () {
        (this.handlers = []),
          n.bindAll(this, 'checkUrl'),
          'undefined' != typeof window && ((this.location = window.location), (this.history = window.history));
      }),
      D = /^[#\/]|\s+$/g,
      I = /^\/+|\/+$/g,
      P = /msie [\w.]+/,
      E = /\/$/,
      F = /#.*$/;
    (L.started = !1),
      n.extend(L.prototype, o, {
        interval: 50,
        atRoot: function () {
          return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
        },
        getHash: function (t) {
          var e = (t || this).location.href.match(/#(.*)$/);
          return e ? e[1] : '';
        },
        getFragment: function (t, e) {
          if (null == t)
            if (this._hasPushState || !this._wantsHashChange || e) {
              t = decodeURI(this.location.pathname + this.location.search);
              var n = this.root.replace(E, '');
              t.indexOf(n) || (t = t.slice(n.length));
            } else t = this.getHash();
          return t.replace(D, '');
        },
        start: function (t) {
          if (L.started) throw new Error('Backbone.history has already been started');
          (L.started = !0),
            (this.options = n.extend({ root: '/' }, this.options, t)),
            (this.root = this.options.root),
            (this._wantsHashChange = !1 !== this.options.hashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState));
          var i = this.getFragment(),
            a = document.documentMode,
            r = P.exec(navigator.userAgent.toLowerCase()) && (!a || a <= 7);
          if (((this.root = ('/' + this.root + '/').replace(I, '/')), r && this._wantsHashChange)) {
            var s = e.$('<iframe src="javascript:0" tabindex="-1">');
            (this.iframe = s.hide().appendTo('body')[0].contentWindow), this.navigate(i);
          }
          this._hasPushState
            ? e.$(window).on('popstate', this.checkUrl)
            : this._wantsHashChange && 'onhashchange' in window && !r
            ? e.$(window).on('hashchange', this.checkUrl)
            : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            (this.fragment = i);
          var o = this.location;
          if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !this.atRoot())
              return (this.fragment = this.getFragment(null, !0)), this.location.replace(this.root + '#' + this.fragment), !0;
            this._hasPushState &&
              this.atRoot() &&
              o.hash &&
              ((this.fragment = this.getHash().replace(D, '')), this.history.replaceState({}, document.title, this.root + this.fragment));
          }
          if (!this.options.silent) return this.loadUrl();
        },
        stop: function () {
          e.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (L.started = !1);
        },
        route: function (t, e) {
          this.handlers.unshift({ route: t, callback: e });
        },
        checkUrl: function (t) {
          var e = this.getFragment();
          if ((e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))), e === this.fragment)) return !1;
          this.iframe && this.navigate(e), this.loadUrl();
        },
        loadUrl: function (t) {
          return (
            (t = this.fragment = this.getFragment(t)),
            n.any(this.handlers, function (e) {
              if (e.route.test(t)) return e.callback(t), !0;
            })
          );
        },
        navigate: function (t, e) {
          if (!L.started) return !1;
          (e && !0 !== e) || (e = { trigger: !!e });
          var n = this.root + (t = this.getFragment(t || ''));
          if (((t = t.replace(F, '')), this.fragment !== t)) {
            if (((this.fragment = t), '' === t && '/' !== n && (n = n.slice(0, -1)), this._hasPushState))
              this.history[e.replace ? 'replaceState' : 'pushState']({}, document.title, n);
            else {
              if (!this._wantsHashChange) return this.location.assign(n);
              this._updateHash(this.location, t, e.replace),
                this.iframe &&
                  t !== this.getFragment(this.getHash(this.iframe)) &&
                  (e.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, t, e.replace));
            }
            return e.trigger ? this.loadUrl(t) : void 0;
          }
        },
        _updateHash: function (t, e, n) {
          if (n) {
            var i = t.href.replace(/(javascript:|#).*$/, '');
            t.replace(i + '#' + e);
          } else t.hash = '#' + e;
        },
      }),
      (e.history = new L());
    var j = function (t, e) {
      var i,
        a = this;
      (i =
        t && n.has(t, 'constructor')
          ? t.constructor
          : function () {
              return a.apply(this, arguments);
            }),
        n.extend(i, a, e);
      var r = function () {
        this.constructor = i;
      };
      return (r.prototype = a.prototype), (i.prototype = new r()), t && n.extend(i.prototype, t), (i.__super__ = a.prototype), i;
    };
    p.extend = h.extend = T.extend = y.extend = L.extend = j;
    var N = function () {
        throw new Error('A "url" property or function must be specified');
      },
      O = function (t, e) {
        var n = e.error;
        e.error = function (i) {
          n && n(t, i, e), t.trigger('error', t, i, e);
        };
      };
    return e;
  }),
  define('../models/common/ajaxbase', ['module', 'backbone'], function (t, e) {
    return e.Model.extend({
      defaults: { errorcode: '', errormsg: '', result: '' },
      url: '',
      callback: '',
      type: 'post',
      dataType: 'jsonp',
      baseUrl: '/',
      checkThsUserIdFailed: -1,
      ajaxRequest: '',
      defaultsLoginErrorCallback: function () {
        var t = $('#ths_iframe_login_popup').css('display');
        ('none' !== t && void 0 !== t) || window.LoginInstance.show();
      },
      definedLoginErrorCallback: null,
      request: function (t) {
        var e = this;
        (t = t || {}), e._request(t, e.url, e.callback);
      },
      requestEx: function (t, e, n) {
        var i = this;
        (t = t || {}), i._request(t, e, n);
      },
      _request: function (t, e, n) {
        $.support.cors = !0;
        var i = this;
        (t.isajax = 1),
          (this.ajaxRequest = $.ajax({
            url: e,
            data: t,
            type: i.type,
            dataType: i.dataType,
            success: function (t) {
              if (t) {
                if (t.errorcode === i.checkThsUserIdFailed && '用户验证失败' === t.errormsg)
                  return 'function' == typeof i.definedLoginErrorCallback
                    ? void i.definedLoginErrorCallback()
                    : void i.defaultsLoginErrorCallback();
                i.set(t), '' !== n && n(t, this);
              }
            },
            error: function (t, e, a) {
              i.set({ errorcode: -777, errormsg: '请求失败，请稍后再试', result: '' }),
                'abort' !== e && '' !== n && n({ errorcode: -777, errormsg: '请求失败，请稍后再试', result: '' });
            },
          }));
      },
      sortData: function (t, e, n, i) {
        var a = this;
        return (n = n.sort(a.sortTableFun(t, e))), a.getPageData(i, n);
      },
      sortTableFun: function (t, e) {
        var n = 'asc' === e ? '>' : '<';
        return new Function('a', 'b', 'return a.' + t + n + 'b.' + t + ' ? 1 : -1');
      },
      getPageData: function (t, e, n) {
        for (var i = 1, a = [], r = 0; r < n.length; r++) {
          if ((t === Math.ceil(i / e) && a.push(n[r]), t < Math.ceil(i / e))) {
            i++;
            break;
          }
          i++;
        }
        return { data: a, length: n.length };
      },
      searchData: function (t, e, n) {
        var i = [];
        for (var a in n) ('all' !== t && -1 === ('' + n[a][e]).indexOf(t)) || i.push(n[a]);
        return i;
      },
    });
  }),
  define('../models/usermanagement/querymodule', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      _url: 'platform/usermanagement/',
      _run: function (t) {
        (t.datatype = 'jsonp'), this.request(t);
      },
      query: function (t, e) {
        (this.callback = function (t) {
          e(t.result);
        }),
          (this.url = this.baseUrl + this._url + 'getmodulesinfo/'),
          this._run(t);
      },
      svaeMessage: function (t, e) {
        (this.callback = function (t) {
          e(t.result);
        }),
          (this.url = this.baseUrl + this._url + 'savemessage/'),
          this._run(t);
      },
    }))();
  }),
  define('../views/common/feedback', ['backbone', '../../models/usermanagement/querymodule'], function (t, e) {
    return new (t.View.extend({
      el: 'body',
      events: {
        'click #quant_feedback .descripe-item': 'toggleItem',
        'click #quant_feedback .submit-form': 'submit',
        'click #quant_feedback .popbox-btn-close': 'close',
      },
      show: function () {
        $('#over_layer').toggleClass('show-layer'),
          $('body').append(
            '<div class="advise-window" id="quant_feedback"><span class="icon popbox-btn-close"></span><div class="advise-title">您想吐槽的原因是：</div><div class="advise-descripe"><div class="descripe-item">数据不够全面</div><div class="descripe-item">性能不够好，回测速度过慢</div><div class="descripe-item">回测结果不正确</div><div class="descripe-item">无法进行实盘交易</div><div class="descripe-item">无法销售策略变现</div><div class="descripe-item">编程体验差</div><div class="descripe-item">其他</div></div><div class="say-more">再说点什么？</div><textarea rows="3" placeholder="使用中有哪些不爽或者错误，请马上反馈给我~"></textarea><div class="advise-bottom"><span>联系邮箱 ：</span><input id="quant_feedback_email" type="text" name="email" placeholder="请留下您的邮箱，我们会及时答复您"/><button  type="button" class="submit-form">提交</button></div></div>'
          );
      },
      close: function () {
        $('#quant_feedback').remove(), $('#over_layer').toggleClass('show-layer');
      },
      toggleItem: function (t) {
        $(t.currentTarget).toggleClass('blue-style');
      },
      submit: function (t) {
        var n = [],
          i = $('#quant_feedback_email').val();
        if (
          ($('#quant_feedback .descripe-item').each(function () {
            $(this).hasClass('blue-style') && n.push($(this).text());
          }),
          !/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(i))
        )
          return void alert('请输入正确的邮件格式');
        var a = { cause: n, message: $('textarea').val(), mail: i },
          r = function (t) {
            'boolean' == typeof t && t
              ? (alert('保存成功'), $('#quant_feedback').remove(), $('#over_layer').toggleClass('show-layer'))
              : alert(t);
          };
        e.svaeMessage(a, r);
      },
    }))();
  }),
  define('../lib/cookies', [], function () {
    return {
      get: function (t) {
        for (var e = t + '=', n = e.length, i = document.cookie.length, a = 0, r = 0; a < i; ) {
          if (((r = a + n), document.cookie.substring(a, r) === e)) {
            var s = document.cookie.indexOf(';', r);
            -1 === s && (s = document.cookie.length);
            var o = '';
            try {
              o = decodeURIComponent(document.cookie.substring(r, s));
            } catch (t) {
              console.log(t);
            }
            return unescape(o);
          }
          if (0 === (a = document.cookie.indexOf(' ', a) + 1)) break;
        }
        return !1;
      },
      set: function (t, e, n) {
        var i = new Date();
        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
        var a = 'expires=' + i.toUTCString();
        document.cookie = t + '=' + e + '; ' + a + '; ' + document.domain + '; /';
      },
      remove: function (t) {
        this.set(t, '', -1);
      },
    };
  }),
  define('../models/header/checkComments', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      url: 'platform/help/',
      _run: function (t, e, n) {
        (t.datatype = this.dataType), this._request(t, e, n);
      },
      checkNewComments: function (t, e) {
        var n = this.baseUrl + 'platform/user/checknewcomments',
          i = function (t) {
            if (t.errorcode) return void e(t);
            e(t.result);
          };
        this._run(t, n, i);
      },
    }))();
  }),
  define('../models/header/searchHelp', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      url: 'platform/help/',
      _run: function (t, e, n) {
        (t.datatype = this.dataType), this._request(t, e, n);
      },
      search: function (t, e) {
        var n = this,
          i = JSON.stringify(t),
          a = this.baseUrl + 'platform/help/search',
          r = function (t) {
            if (t.errorcode) return void e(t);
            var a = {};
            (a[i] = t), n.set(a), e(t.result);
          };
        if (this.has(i)) return void r(this.get(i));
        this._run(t, a, r);
      },
    }))();
  }),
  define('../models/header/sklearnEnable', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      _url: 'platform/user/getauthdata',
      _run: function (t) {
        (t.datatype = 'jsonp'), this.request(t);
      },
      requestIsAbled: function (t, e) {
        (this.url = this.baseUrl + this._url),
          (this.callback = function (t) {
            (t = t.result), e(t);
          }),
          this._run(t);
      },
    }))();
  }),
  define('../models/header/helpList', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      _url: 'platform/help/queryblock',
      _run: function (t) {
        (t.datatype = 'jsonp'), this.request(t);
      },
      requestHelpList: function (t, e) {
        (this.url = this.baseUrl + this._url),
          (this.callback = function (t) {
            (t = t.result), e(t);
          }),
          this._run(t);
      },
    }))();
  }),
  define('../models/header/feedback', ['../common/ajaxbase'], function (t) {
    return new (t.extend({
      _url: 'platform/utils/sendmailoperate',
      _run: function (t) {
        (t.datatype = 'jsonp'), this.request(t);
      },
      requestFeedBack: function (t, e) {
        (this.url = this.baseUrl + this._url),
          (this.callback = function (t) {
            e(t);
          }),
          this._run(t);
      },
    }))();
  }),
  define('tpl', [], function () {
    return {
      backreport_result: {
        popbox_opensimu:
          '<div class="popbox-controller">\n\t<span class="popbox-label">选择账户：</span>\n\t<div class="opensimu-selection">\n\t\t<span class="selection-text"></span>\n\t\t<span class="icon icon-down fr mt5"></span>\n\t\t<ul id="opensimu_options" class="opensimu-options hide">\n\t\t</ul>\n\t</div>\n</div>\n<div id="popboxContainer">\n\t\n</div>',
      },
      header: {
        'search-tips':
          '\n<ul class="header-search-content-item">\n\t<% $.each(result,function(key,value) {%>\n\t<li class="header-search-content-item-li">\n\t\t<div class="search-content-item-title"><span><%=value.parent_name%></span><span>＞</span><span><%=value.title%></span></div>\n\t\t<div class="search-content-item-content">\n\n\t\t\t<% $.each(value.child, function(key,secLevel) {%>\n\t\t\t\t<% \tvar leafCount = 0;\n\t\t\t\t\tif (_.keys(secLevel.child).length >= 1) {\n\t\t\t\t\t\t$.each(secLevel.child, function(key, trdLevel) {\n\t\t\t\t\t\t\tif (_.keys(trdLevel.child).length > 0){\n\t\t\t\t\t\t\t\t$.each(trdLevel.child, function(key, leaf) {\n\t\t\t\t\t\t\t\t\tleafCount++;\n\t\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tleafCount++;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t})\n\t\t\t\t\t} else {\n\t\t\t\t\t\tleafCount = 1\n\t\t\t\t\t}\n\t\t\t\t%>\n\t\t\t\t<div style="line-height: <%=(37*leafCount-1)%>px" class="search-second-title" tile="<%=secLevel.title%>"><%=secLevel.title%></div>\n\t\t\t\t<ul class="search-thrid-title">\n\t\t\t\t<% var rootHtml = \'help-api.html?t=\' %>\n\t\t\t\t<% if (_.keys(secLevel.child).length < 1) {%>\n\t\t\t\t<li title="<%=secLevel.title%>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/0\' %>"><%=secLevel.title.replace(keywords,repItem)%></a></li>\n\t\t\t\t<% } else { %>\n\t\t\t\t\t<% $.each(secLevel.child, function(key, trdLevel) {%>\n\t\t\t\t\t\t<% if (_.keys(trdLevel.child).length < 1) {%>\n\t\t\t\t\t\t\t<li title="<%=trdLevel.title%>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/\' + secLevel.id %>"><%=trdLevel.title.replace(keywords,repItem)%></a></li>\n\t\t\t\t\t\t<% } else { %>\n\t\t\t\t\t\t\t<% $.each(trdLevel.child, function(key, leaf) {%>\n\t\t\t\t\t\t\t\t<li title="<%= trdLevel.title + \'>\' + leaf.name.substring(0,15) + \'...\' %>"><a class="view_a_search_tips" href="<%= rootHtml + value.parent_id + \'#\' + value.id + \'/\' + leaf.id %>"><%= trdLevel.title.replace(keywords,repItem) + \'>\' + leaf.name.replace(keywords,repItem)%></a></li>\n\t\t\t\t\t\t\t<% }); %>\n\t\t\t\t\t\t<% } %>\n\n\t\t\t\t\t<% }); %>\n\t\t\t\t<% } %>\n\t\t\t\t</ul>\n\t\t\t<% }); %>\n\t\t</div>\n\t</li>\n\t<% }); %>\n</ul>\n',
      },
      iframe: {
        'iframe-simu':
          '<div id="detail_profit" class="trade-trend-content">\n  <div id="detail_profit_data" class="trade-trend-table"></div>\n  <div class="trend-chart-toolbar"><span>缩放:</span>\n    <ul class="toolbar-cyclebox">\n      <li data-zoom="1week" class="cyclebox-item">1周</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="1month" class="cyclebox-item">1月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="3month" class="cyclebox-item">3月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="6month" class="cyclebox-item">6月</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="1year" class="cyclebox-item">1年</li>\n      <div class="li-vertical"></div>\n      <li data-zoom="all" class="cyclebox-item cyclebox-item-active">全部</li>\n  </ul>\n  <div class="toolbar-charts-labels">\n      <div class="toolbar-chart-label toolbar-chart-label1"><span class="symbol"></span><span class="text">基准收益</span></div>\n      <div class="toolbar-chart-label toolbar-chart-label2"><span class="symbol"></span><span class="text">策略收益</span></div>\n  </div>\n  <div class="toolbar-datebox"><span>从</span>\n      <input type="text" val="" id="overview_startDate" readonly="readonly"><span>至</span>\n      <input type="text" val="" id="overview_endDate" readonly="readonly">\n  </div>\n</div>\n<div id="trade-trend-chart" class="trade-trend-chart" >\n    <div id="trade-trend-chart1" style="height: 200px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1499669951040"><div style="position: relative; overflow: hidden; width: 1531px; height: 200px; cursor: default;"><canvas width="1531" height="200" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 1531px; height: 200px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></canvas></div><div style="position: absolute; display: none; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgba(240, 240, 240, 0.901961); border-width: 0px; border-color: rgb(51, 51, 51); border-radius: 4px; color: rgb(255, 255, 255); font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 14px; font-family: &quot;Microsoft YaHei&quot;; line-height: 21px; padding: 5px; left: 410.405px; top: 25px;"><span style="color: #333;font-size:13px;"><span style=""> 2017-07-05 星期三</span> <span><br><span style="color:#C23531">策略收益:<span style="font-weight : 700">0.00%</span></span><br><span style="color:#51acce">基准收益:  <span style="font-weight:700">0.00%</span></span><br></span></span></div></div>\n</div>\n</div>',
      },
      lib: {
        dialog:
          '<style type="text/css">\n  .plugin-dialog {\n    position: relative;\n    min-height: 135px;\n    min-width: 300px;\n  }\n  .plugin-dialog-btn {\n    float: right; margin-right: 10px; margin-top: 10px; position: static;\n  }\n  .plugin-dialog-footer {\n    bottom: 0;\n    right: 0;\n  }\n</style>\n<%\n  var containerHeight, containerOverflow;\n  if (height === \'auto\') {//默认\n    containerHeight = \'auto\';\n    containerOverflow = \'visible\';\n  } else {\n    containerOverflow = \'auto\';\n    if (isShowBtn) {\n      containerHeight = (parseInt(height) - 80) + \'px\';\n    } else {\n      containerHeight = (parseInt(height) - 37) + \'px\';\n    }\n  }\n %>\n<div class="container-mask" tabindex="1">\n  <div class="container-maskbg"></div>\n  <div\n      class="popbox plugin-dialog"\n      style="margin-left: <%= (- parseInt(width) / 2)  + \'px\' %>; width: <%= width %>; height: <%= height %>"\n      >\n    <div class="icon popbox-btn-close"></div>\n\n    <div class="popbox-title">\n      <div class="text"><%= title %></div>\n    </div>\n\n    <div class="popbox-container" style="overflow: <%= containerOverflow %>; height: <%= containerHeight %>">\n      <%= content %>\n    </div>\n\n    <% if(isShowBtn) { %>\n      <div class="popbox-footer plugin-dialog-footer" style="position: <%= height === \'auto\' ? \'relative\' : \'absolute\' %>">\n        <% if(okBtn) { %>\n          <div class="btn <%= okBtnClass %> plugin-dialog-btn popbox-btn-ok"><%= okBtnTitle %></div>\n        <% } %>\n\n        <% if(cancelBtn) { %>\n          <div class="btn <%= cancelBtnClass %> plugin-dialog-btn popbox-btn-cancel"><%= cancelBtnTitle %></div>\n        <% } %>\n      </div>\n    <% } %>\n\n  </div>\n</div>',
      },
      share: {
        mfstgy:
          '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个策略</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_mfstgy_options" style="display:none;" class="popbox-selection-options">\n\t\t<p style="text-align:center;padding:10px 0;">数据加载中</p>\n\t</div>\n</div>',
        research:
          '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个研究</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_rs_options" style="display:none;" class="popbox-selection-options"></div>\n</div>',
        stgy: '<div class="popbox-selection">\n\t<div class="popbox-selection-text">请选择一个策略</div><span class="icon fr icon-down"></span>\n\t<div id="popbox_stgy_options" style="display:none;" class="popbox-selection-options">\n\t\t<p style="text-align:center;padding:10px 0;">数据加载中</p>\n\t</div>\n</div>',
      },
      strategy: {
        square_top_list:
          '<%\n\tfunction parseCodeProfit(num) {\n\t\treturn (num < -100 || num > 9999.99) ? \'--\' : num + \'%\';\n\t}\n%>\n<% $.each(ret.list,function(index,item){ %>\n<li class="mindgo-select-item left-active">\n\t<a class="trade-main" target="_blank" href="stgy.html#bid/<%= item.backtest_id%>">\n\t<div class="trade-reason"></div>\n\t<div class="trade-manage">\n\t\t<span class="fz16 text-el">\n\t\t\t<%= item.name%>\n\t\t</span>\n\t</div>\n\t<div class="trade-intro">\n\t\t<div class="trade-left-intro">\n\t\t\t<p class="intro-precent fz20"><%= item.profit_rate ? (item.profit_rate*100).toFixed(2) : \'--\' %></p>\n\t\t\t<p>累计收益率</p>\n\t\t</div>\n\t\t<span class="vertical-line"></span>\n\t\t<div class="trade-right-intro">\n\t\t\t<div class="right-intro-first">\n\t\t\t\t<span class="intro-stock-name ss_name">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[0] ? item.stock_info[0].stock_name : \'--\' %>\n\t\t\t\t</span>\n\t\t\t\t<span class="intro-stock-count">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[0] ? parseCodeProfit((item.stock_info[0].profit_and_loss_rate*100).toFixed(2)) : \'--\' %>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t\t<div class="right-intro-second">\n\t\t\t\t<span class="intro-stock-name ss_name">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[1] ? item.stock_info[1].stock_name : \'--\' %>\n\t\t\t\t</span>\n\t\t\t\t<span class="intro-stock-count">\n\t\t\t\t\t<%= $.type(item.stock_info) === \'array\' && item.stock_info[1] ? parseCodeProfit((item.stock_info[1].profit_and_loss_rate*100).toFixed(2)) : \'--\' %>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t</a>\n\t<a href="user.html#user/<%=item.user_id%>">\n\t\t<div class="manage-person">\n\t\t<img class="person-img" src="<%=item.avatar%>">\n\t\t<span class="person-name bg"><%=item.nickname%></span>\n\t</div>\n\t</a>\n</li>\n<%})%>',
      },
      'study-mf': {
        empty: '  <div class="u-loading"><%= message === undefined ? \'暂无数据\' : message %></div>',
        factor_continuity_detection:
          '<%if($.type(rst) === \'array\' && rst.length !== 0){%>\n<table class="m-yield_table m-yield_table-continuity">\n                          <thead>\n                            <tr>\n                              <td width="20%">因子截止日</td>\n                              <td width="20%">检测开始日</td>\n                              <td width="20%">检测截止日</td>\n                              <td width="20%">IC</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <%$.each(rst,function(key,value){%>\n                            <tr>\n                              <td><%=value.factor_day%></td>\n                              <td><%=value.check_start_day%></td>\n                              <td><%=value.check_stop_day%></td>\n                              <td><%=value.ic%></td>\n                            </tr>\n                            <%});%>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        factor_contribution_detection:
          '\n<%if(rst&&$.type(rst.each) ===\'array\'&& rst.each.length !== 0){%>\n<h2 class="tlt">最小二乘法检验(各期)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td rowspan="2">截止日</td>\n                              <td colspan="<%= rst.factor_list.length %>">回归系数</td>\n                              <td rowspan="2">R方</td>\n                              <td colspan="<%= rst.factor_list.length %>">T值</td>\n                              <%if(rst.factor_list.length-1 > 0){%>\n                              <td colspan="<%= rst.factor_list.length-1 %>">推荐因子配置比例(%)</td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.factor_list[i]%></td>\n                            <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                          <%$.each(rst.each,function(keyot,val){%>\n                            <tr>\n                              <td><%=val.enddate%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=val.hgxs[value]%></td>\n                              <%})%>\n                              <td><%=val.rf%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=val.tz[value]%></td>\n                              <%})%>\n                              <%for(var i=0;i< rst.factor_list.length -1; i++){%>\n                              <td><%=val.tz[rst.factor_list[i]]%></td>\n                              <%}%>\n                              <%})%>\n                            </tr>\n                          \n                          </tbody>\n                        </table>\n                        <h2 class="tlt mt15">最小二乘法检验(整体)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td colspan="<%= rst.factor_list.length %>">回归系数</td>\n                              <td rowspan="2">R方</td>\n                              <td colspan="<%= rst.factor_list.length %>">T值</td>\n                              <%if(rst.factor_list.length > 1){%>\n                              <td colspan="<%= rst.factor_list.length-1 %>">推荐因子配置比例(%)</td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=value%></td>\n                            <%})%>\n                            <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.factor_list[i]%></td>\n                            <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=rst.total.hgxs[value]%></td>\n                              <%})%>\n                              <td><%=rst.total.rf%></td>\n                              <%$.each(rst.factor_list,function(key,value){%>\n                              <td><%=rst.total.tz[value]%></td>\n                              <%})%>\n                              <%for(var i=0;i< rst.factor_list.length-1; i++){%>\n                              <td><%=rst.total.tz[rst.factor_list[i]]%></td>\n                            <%}%>\n                          </tbody>\n                        \x3c!-- </table>\n                        <h2 class="tlt mt15">主成分回归(各期)</h2>\n                        <table class="m-yield_table m-yield_table-contribution">\n                          <thead>\n                            <tr>\n                              <td rowspan="2">截止日</td>\n                              <td colspan="3">回归系数</td>\n                              <td colspan="2">推荐因子配置比例(%)</td>\n                            </tr>\n                            <tr> \n                              <td>ROE</td>\n                              <td>ROA</td>\n                              <td>常数项</td>\n                              <td>ROE</td>\n                              <td>ROA</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                            <tr>\n                              <td>2015-08-11</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                              <td>1.87</td>\n                            </tr>\n                          </tbody>\n                        </table> --\x3e\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        factor_partition_detection:
          '<%if(rst){%>\n<table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <td></td>\n                              <td>第一组VS最后一组</td>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>标准差（%）</td>\n                              <td><%=rst.standard%></td>\n                            </tr>\n                            <tr>\n                              <td>胜率（%）</td>\n                              <td><%=rst.win_rate%></td>\n                            </tr>\n                            <tr>\n                              <td>夏普比率</td>\n                              <td><%=rst.sharpe_ratio%></td>\n                            </tr>\n                            <tr>\n                              <td>T-stat</td>\n                              <td><%=rst.t_stat%></td>\n                            </tr>\n                            <tr>\n                              <td>P-Value</td>\n                              <td><%=rst.p_value%></td>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        factor_significance_detection:
          '<%if(rst){%>\n<table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <td width="20%"></td>\n                              <%if(rst.group_1){%>\n                              <td width="16%">第一组</td>\n                              <%}if(rst.group_2){%>\n                              <td width="16%">第二组</td>\n                              <%}if(rst.group_3){%>\n                              <td width="16%">第三组</td>\n                              <%}%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <td>超额均值（%）</td>\n                              <td><%= rst.group_1.average_extra_yield%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.average_extra_yield%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.average_extra_yield%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>跟踪误差（%）</td>\n                              <td><%= rst.group_1.tracking_error%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.tracking_error%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.tracking_error%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>信息比率</td>\n                              <td><%= rst.group_1.information_ratio%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.information_ratio%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.information_ratio%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>T-stat</td>\n                              <td><%= rst.group_1.t_stat%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.t_stat%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.t_stat%></td>\n                              <%}%>\n                            </tr>\n                            <tr>\n                              <td>P-Value</td>\n                              <td><%= rst.group_1.p_value%></td>\n                              <%if(rst.group_2){%>\n                              <td><%= rst.group_2.p_value%></td>\n                              <%}if(rst.group_3){%>\n                              <td><%= rst.group_3.p_value%></td>\n                              <%}%>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        factor_yield_detection:
          '      \n<%if(rst){%>\n      <table class="m-yield_table">\n                          <thead>\n                            <tr>\n                              <%$.each(rst.title,function(key,value){%>\n                               <% if(key === 0){%>\n                               <td width="20%"></td>\n                                <%}else{%>\n                                <td width="16%"><%=value%></td>\n                                <%}%>\n                              <%});%>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr>\n                              <%$.each(rst.average_yield,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.yield,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.standard,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.max_drawdown,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                            <tr>\n                              <%$.each(rst.sharpe_ratio,function(key,value){%>\n                                <td><%=value%></td>\n                              <%})%>\n                            </tr>\n                          </tbody>\n                        </table>\n<%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        monthly_effect:
          '<%if(rst){%>\n<div class="monthly_echart"></div>\n                        <div class="m-month_table">\n                          <ul class="f-cbli">\n                             <li>\n                              <div class="liblock"></div>\n                              <div class="liblock">1月</div>\n                              <div class="liblock">2月</div>\n                              <div class="liblock">3月</div>\n                              <div class="liblock">4月</div>\n                              <div class="liblock">5月</div>\n                              <div class="liblock">6月</div>\n                              <div class="liblock">7月</div>\n                              <div class="liblock">8月</div>\n                              <div class="liblock">9月</div>\n                              <div class="liblock">10月</div>\n                              <div class="liblock">11月</div>\n                              <div class="liblock">12月</div>\n                            </li>\n                          <%$.each(rst,function(key,value){%>\n                            <li>\n                              <div class="liblock"><%=key%></div>\n                              <%$.each(value,function(item,val){%>\n                                <div class="liblock"><%=val%></div>\n                              <%})%>\n                            </li>\n                          <%})%>\n                            \n                          </ul>\n                        </div>\n  <%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n',
        turnover_analysis:
          '      <%if(rst){%>\n                            <div class="m-turnover_tab f-cb">\n                              <div class="trunover">换手率</div>\n                              <div class="caclulata">\n                                <select class="j-select_way">\n                                  <option value="number">个数法</option>\n                                  <option value="weight">市值权重法</option>\n                                </select>\n                              </div>\n                              <div class="group">\n                                <select class="j-select_group">\n                                  <option value="1">第一组</option>\n                                  <option value="2">第二组</option>\n                                  <option value="3">第三组</option>\n                                </select>\n                              </div>\n                            </div>\n                            \x3c!-- <div id="chartPic1" style="width: 100%;height: 220px;margin-top: 20px;">\n                            </div> --\x3e \n        <%}else{%>\n  <div class="u-loading">暂无数据</div>\n<%}%>\n\n',
      },
      trade_addcount: {
        addcount:
          '<div class="popbox-controller box-sizing">\n\t<label class="popbox-label">账户名称</label>\n\t<input type="text" value="默认账户" class="popbox-inp box-sizing"></input>\n</div>\n\n<div class="popbox-controller popbox-accounttype box-sizing">\n\t<label class="popbox-label">账户类型</label>\n\t<div class="popbox-pos">\n\t\t<div class="popbox-inp box-sizing">请选择账户类型</div>\n\t\t<span class="icon fr icon-down"></span>\n\t\t<div class="popbox-select-box hide">\n\t\t\t<div class="popbox-select-item" data-id="1">股票型账户</div>\n\t\t\t<div class="popbox-select-item" data-id="2">期货型账户</div>\n\t\t\t<div class="popbox-select-item" data-id="3">混合型账户</div>\n\t\t</div>\n\t</div>\n\t\n</div>\t\n\n<div class="popbox-controller popbox-stockmoney box-sizing hide">\n\t<label class="popbox-label">股票资金</label>\n\t<div class="popbox-pos popbox-pos-money">\n\t\t<div class="popbox-inp box-sizing" data-id=""></div>\n\t\t<span class="icon fr icon-down"></span>\n\t\t<div class="popbox-select-box hide">\n\t\t\t\x3c!-- <div class="popbox-select-item" data-id="36072">10</div>\n\t\t\t<div class="popbox-select-item" data-id="36073">50</div>\n\t\t\t<div class="popbox-select-item" data-id="36074">100</div>\n\t\t\t<div class="popbox-select-item" data-id="36075">500</div>\n\t\t\t<div class="popbox-select-item" data-id="36076">700</div> --\x3e\n\t\t</div>\n\t</div>\n\t<span class="popbox-select-item-unit">万元</span>\n</div>\t\n\n\n<div class="popbox-controller popbox-forwardmoney box-sizing hide">\n\t<label class="popbox-label">期货资金</label>\n\t<div class="popbox-pos popbox-pos-money">\n\t\t<div class="popbox-inp box-sizing" data-id=""></div>\n\t\t<span class="icon fr icon-down"></span>\n\n\t\t\n\t\t<div class="popbox-select-box hide">\n\t\t\t\x3c!-- <div class="popbox-select-item" data-id="1154">10</div>\n\t\t\t<div class="popbox-select-item" data-id="1155">50</div>\n\t\t\t<div class="popbox-select-item" data-id="1156">100</div>\n\t\t\t<div class="popbox-select-item" data-id="1157">500</div>\n\t\t\t<div class="popbox-select-item" data-id="1158">700</div> --\x3e\n\t\t</div>\n\t</div>\n\t<span class="popbox-select-item-unit">万元</span>\n</div>\t',
      },
      user: {
        common:
          '<div class="m-user_head f-cb">\n\t<div class="head_left">\n\t\t<img src="<%=ret.user_info.imgSrc%>" style="width:115px;height: 115px;border-radius: 58px;">\t\n\t</div>\n\t<div class="head_right">\n\t\t<div>\n\t\t\t<h2 class="head"><%=ret.user_info.nickname%></h2>\n\t\t\t<p class="head_content"><%=ret.user_info.description%></p>\n\t\t\t<div class="head_below">\n\t\t\t\t<div class="litbox">\n\t\t\t\t\t<span class="litbox_left">关注:</span>\n\t\t\t\t\t<span class="number"><%=ret.attention_info.attention_num%></span>\n\t\t\t\t</div>\n\t\t\t\t<div class="litbox litbox-right">\n\t\t\t\t\t<span class="litbox_left">粉丝:</span>\n\t\t\t\t\t<span class="number"><%=ret.attention_info.follow_num%></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n',
        strategy: {
          testlist:
            '\n <div class="strategy-item-container" id="j-view-user_strategy"> \n <%$.each(ret.list,function(index,value){%>\n              <div class="strategy-content-item"> \n                  // <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n              \t\t  <span class="strategy-item strategy-item-name text-el"><%= value.name %></span> \n                  // </a> \n              \t\t<span class="strategy-item strategy-item-profit <% if(value.profit_rate > 0) {%>rg<%} else if(value.profit_rate < 0) {%>gc<%}%>"><%= value.profit_rate %></span> \n              \t\t<span class="strategy-item strategy-item-count <% if(today_profit_rate > 0) {%>rg<%} else if(today_profit_rate < 0) {%>gc<%}%>"><%= value.today_profit_rate %></span>  \n              \t\t<span class="strategy-item strategy-item-success"><%= value.win_rate %></span> \n              \t\t<span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown %></span>  \n              \t\t<span class="strategy-item strategy-item-info"><%= value.information_ratio %></span>  \n              \t\t<span class="strategy-item strategy-item-runday"><%= value.run_days %></span> \n                \t<div class="strategy-item strategy-item-detail"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  \t\t<div class="icon6 icon-load-more"></div> \n                    </a> \n                \t</div> \n            \t</div> \n            \t<div class="strategy-content-detail <% if (i != 0) {%> hide-content <% } %>"> \n                <a target="_blank" href="<%= stgyUrl %>"> \n                  <div class="full_div"> \n                \t  <div class="content-left-detail"> \n                  \t  <p><%= description%></p> \n                  \t</div> \n                  </div> \n                </a> \n                <div class="personal-detail"> \n                  <a target="_blank" href="user.html#user/<%= userId%>"><img src="<%= picUrl%>"></a> \n                  <a target="_blank" href="user.html#user/<%= userId%>"><span class="personal-name"><%= nickname%></span></a> \n                </div> \n                <div id="<%= listChartId%>" class="content-right-detail"></div> \n              </div> \n\n\n              <%})%>\n            </div>\n',
          user_strategy_card:
            '\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<ul class="sortshowcontent m-sort_block f-cb" id="j-view-user_strategy">\n  <%$.each(ret.list,function(index,value){%>\n  <li class="sortblock <% if (index % 2 == 1) { %> mr0 <% } %>"> \n                <div class="sortblock-content"> \n                <div class="sortblock-title"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                      <span><%= value.name %></span> \n                    </a> \n                    <div class="sortblock-info"> \n                    <a target="_blank" href="user.html#user/<%= value.user_id %>"> \n                      <img class="sortblock-img" src="<%= value.avatar%>"> \n                    </a> \n                    <a target="_blank" href="user.html#user/<%= value.user_id %>"> \n                      <p class="sortblock-name"><%= value.nickname %></p> \n                    </a> \n                    </div> \n                </div> \n                <div class="sortblock-chart" id="cardchart<%= index %>"></div> \n                <p class="sortblock-desc">\n                  <% if(value.description == "") { %> \n                  暂无该策略逻辑介绍 \n                  <% } else { %> \n                  <%= datamethod.textEllipsis(value.description, 40) %>\n                  <% } %> \n                </p> \n                <ul class="sortblock-datainfo"> \n                   <li> \n                      <div class="profit-content"> \n                          <p class="fz20 profit-rate <% if(value.profit_rate && value.profit_rate > 0) {%>rg<% } else if (value.profit_rate && value.profit_rate < 0) {%>gc<% } %>"><%= dataHandle(value.profit_rate)%></p> \n                          <p>累计收益率</p> \n                      </div> \n                    </li> \n                    <li> \n                      <div class="success-content"> \n                          <p class="fz20 success-rate <% if(value.win_rate && value.win_rate > 0) {%>rg<% } else if (value.win_rate && value.win_rate < 0) {%>gc<% } %>"><%= dataHandle(value.win_rate)%></p> \n                          <p>成功率</p> \n                      </div> \n                    </li> \n                    <li class="noborder"> \n                      <div class="running-content"> \n                          <p class="fz20 running-date"><%= value.run_days%></p> \n                          <p>运行天数</p> \n                      </div> \n                    </li> \n                </ul> \n                <div class="sortblock-detail hide-content"> \n                    <% if (value.trade_log && value.trade_log.length>= 1) { %> \n                      <div class="stock-change-content"> \n                        <% for(var j = 0; j < value.trade_log.length && j < 2; j++) {%> \n                          <% if(value.trade_log.operation_type == "SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "CLOSE_BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">平仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "CLOSE_SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">平仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "OPEN_BUY") { %> \n                            <div class="stock-change-info"><span class="stock-type bgr">开仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } else if (value.trade_log.operation_type == "OPEN_SALE") { %> \n                            <div class="stock-change-info"><span class="stock-type bgb">开仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span> \n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div> \n                          <% } %> \n                        <% } %> \n                      </div> \n                    <% } else {%> \n                    <span>今日无调仓</span> \n                    <% } %>\n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                      <div class="btn btn-look-detail">查看详情</div> \n                    </a> \n                  </div> \n                </div> \n            </li>\n        <%})%>\n</ul>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n<div class="pagination-list-card u-pagination f-cb"></div>\n\n\n          ',
          user_strategy_list:
            '\n\n\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n <div class="strategy-item-container m-sort_list f-cb" id="j-view-user_strategy"> \n            <div class="strategy-title"><span class="strategy-title-item strategy-title-name">策略名称</span><span class="strategy-title-item strategy-profit-count">累计收益率</span><span class="strategy-title-item strategy-today-count">今日收益率</span><span class="strategy-title-item strategy-success-rate">成功率</span><span class="strategy-title-item strategy-max-backtest">最大回撤</span><span class="strategy-title-item strategy-info-rate">信息比率</span><span class="strategy-title-item strategy-run-day">运行天数</span><span class="strategy-title-item strategy-detail">详情</span></div>\n <%$.each(ret.list,function(index,value){%>\n              <div class="strategy-content-item"> \n                   <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n              \t\t  <span class="strategy-item strategy-item-name text-el"><%= value.name ? value.name : \'--\'  %></span> \n                   </a> \n              \t\t<span class="strategy-item strategy-item-profit <% if(value.profit_rate && value.profit_rate > 0) {%>rg<%} else if(value.profit_rate && value.profit_rate < 0) {%>gc<%}%>"><%= dataHandle(value.profit_rate) %></span> \n              \t\t<span class="strategy-item strategy-item-count <% if(value.today_profit_rate && value.today_profit_rate > 0) {%>rg<%} else if(value.today_profit_rate && value.today_profit_rate < 0) {%>gc<%}%>"><%= dataHandle(value.today_profit_rate) %></span>  \n              \t\t<span class="strategy-item strategy-item-success"><%= dataHandle(value.win_rate) %></span> \n              \t\t<span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown ? value.max_drawdown : \'--\' %></span>  \n              \t\t<span class="strategy-item strategy-item-info"><%= value.information_ratio ? value.information_ratio : \'--\' %></span>  \n              \t\t<span class="strategy-item strategy-item-runday"><%= value.run_days ? value.run_days : \'--\'  %></span> \n                \t<div class="strategy-item strategy-item-detail"> \n                    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  \t\t<div class="icon6 icon-load-more"></div> \n                    </a> \n                \t</div> \n            \t</div> \n            \t<div class="strategy-content-detail" <% if (index > 0) {%> style="display:none" <% } %>> \n                <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n                  <div class="full_div"> \n                \t  <div class="content-left-detail"> \n                  \t  <p><%= datamethod.textEllipsis(value.description, 90)%></p> \n                  \t</div> \n                  </div> \n                </a> \n                <div class="personal-detail"> \n                  <a target="_blank" href="user.html#user/<%= value.user_id %>"><img src="<%= value.avatar%>"></a> \n                  <a target="_blank" href="user.html#user/<%= value.user_id %>"><span class="personal-name"><%= value.nickname%></span></a> \n                </div> \n                <div id="listchart<%=index%>" class="content-right-detail"></div> \n              </div> \n              <%})%>\n             \n            </div>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n             <div class="pagination-list-list u-pagination "></div>\n\n',
          user_strategy_tab:
            '<div class="m-user_tab">\n   <div name="pgmao" class="sort-type">\n                <ul>\n                  <li class="btn-order comprehensive-order j-tab_button active-order" data-tab="publish_strategy" style="display:none;"><i class="p-user_icon ps_release strategy_icon"></i>发布</li>\n                  <li class="btn-order count-rate j-tab_button" data-tab="collect_strategy" style="display:none;"><i class="p-user_icon ps_collection strategy_icon"></i>收藏</li>\n                  <li class="btn-order today-rate j-tab_button" data-tab="order_strategy" style="display:none;"><i class="p-user_icon ps_order strategy_icon"></i>试用</li>\n                </ul>\n                <div class="sort-type-icon"><span class="item-sortdisplay grid-sortdisplay icon6 icon-grid-model j-tab_card_list" data-tab="strategy_card_show" style="display:none;"></span><span class="item-sortdisplay list-sortdisplay icon6 icon-list-model j-tab_card_list" data-tab="strategy_list_show" ></span></div>\n              </div>\n</div>\n       ',
        },
        information: {
          user_information_control: ' <div class="m-info_list" id="j-view-user_information">\n  </div>',
          user_information_list:
            ' <%if(ret.count > 0){%>\n  <% _.each(ret.list,function(value){%>\n\t<div class="info-item <%if(value.isread === 0){%>back_grey<%}%>">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="user.html#user/<%= value.userid %>">\n                <img src="<%= imgOperate(value.userid) %>" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <%if(value.type == 1 && value.isreply == 0){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>社区<span>中发布的主题</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n            <%}else if(value.type == 2 && value.isreply == 0){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>策略广场<span>中发布的策略</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n            <%}else if(value.type == 2 && value.isreply == 1){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>策略<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n            <%}else if(value.type == 1 && value.isreply == 1){%>\n            <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>主题<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n            <%}%>\n          </div>\n          <div class="comment-describe " style="max-height: 50px;min-height:25px;line-height: 25px;overflow: hidden;">\n          \x3c!-- <%console.log(\'regReplace\',regReplace)%> --\x3e\n          <span class="comment f-cb"><span class="f-fl">评论内容：</span><div class="comment_content f-fl"><%= regReplace(value.content,self)%></div></span>\n          </div>\n          <div class="info-describe">\n          <span class="data"><%=value.ctime%></span> \n          \x3c!-- <span class="time">17:26:55</span> --\x3e\n          </div>\n        </div>\n    </div>\n    <%});%>\n<%} else {%>\n<p class="u-no-data-alert">无消息！<p>\n<%}%>\n\n      \t\t',
          user_information_tab:
            '<div class="m-user_tab">\n   \t<div name="pgmao" class="sort-type">\n                <ul>\n                  <li class="btn-order comprehensive-order j-tab_button" style="display: none" data-tab="new_message">最新动态</li>\n                  <li class="btn-order count-rate j-tab_button active-order" data-tab="replay_me">回复我的 <b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:-9px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;"></b></li>\n                </ul>\n              </div>\n</div>\n       ',
          user_information_test:
            ' <div class="m-info_list" id="j-view-user_information">\n\n    <div class="info-item back_grey">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>评论了你在</span><a href="" class="color_blue">社区</a><span>中发布的主题</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="comment-describe">\n          <span class="comment">评论内容：水水水水水水水水</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n          \t\t\t<img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在</span><a href="" class="color_blue">策略广场</a><span>中发布的策略</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\n\n    <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在主题</span><a href="" class="color_blue">关于回测价格的疑问</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n  <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在策略</span><a href="" class="color_blue">新默认策略</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n </div>\n      \t\t',
        },
        theme: {
          nouse_old_theme_list:
            ' <div class="m-info_list">\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="<%= userUrl %>">\n          \t\t\t<img src="<%= imgSrc %>" style="height:50px; border-radius:50%">\n          \t\t</a>\n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<% if(isTop) {%>\n          \t\t<span class="title-tag">置顶</span>\n      \t\t<% } %>\n          \t<a href="<%= pid %>" class="title-name" target="_blank"><%= title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a href="<%= userUrl %>" class="author-name"><%= nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n            <label class="look-count"><%= pv %></label><span class="vertical-line"></span><a class="icon3 icon-message-logo" href="<%= commentid %>"></a>\n            <span  class="message-count"><%= camount %></span><span class="vertical-line">\n            </span><span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= collectionNum %></a><span class="vertical-line"></span>\n            <% if (lastComment) { %>\n            \t<a class="author-reply" href="<%= replyUrl %>"><%= lastComment["nickname"] %></a>\n            \t<label class="last-reply">最后回复于</label><span class="last-reply-date"><%= lastTime %></span>\n            <% } %>\n            <% if(backtestId) { %>\n            \t<a href="<%= pid %>" class="icon3 icon-icon-pager" title="该主题分享了回测案例"></a>\n            <% } %>\n            <% if(researchId) { %>\n        \t\t<a href="<%= pid %>" class="icon3 icon-icon-booker" title="研究分享"></a>\n        \t<% } %>\n          </div>\n        </div>\n    </div>\n </div>\n      \t\t',
          user_theme_list:
            ' <%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n <div class="m-theme_list" id="j-view-user_theme">\n  <% _.each(ret.list,function(value){%>\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a target="_blank" class="logo-img" href="user.html#user/<%= value.userid %>">\n          \t\t\t<img src="<%= imgOperate(value.userid) %>" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a target="_blank" href="article.html#id/<%= value.pid %>" class="title-name" target="_blank"><%= value.article_title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a target="_blank" href="user.html#user/<%= value.userid %>" class="author-name"><%= value.nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n          <label class="look-count"><%= value.pv %></label>\n          <span class="vertical-line"></span>\n          <a class="icon3 icon-message-logo" href="article.html#id/<%= value.pid %>/comment"></a>\n          <span  class="message-count"><%= value.camount %></span>\n          <span class="vertical-line"></span>\n          <span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= value.collection_num %></a><span class="vertical-line"></span>\n          </div>\n        </div>\n    </div>\n    <%});%>\n</div>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n <div class="pagination-list-list u-pagination"></div>',
          user_theme_tab:
            '<div>\n\t<div class="m-user_tab">\n\t   \t<div name="pgmao" class="sort-type">\n            <ul>\n              <li class="btn-order comprehensive-order active-order j-tab_button" data-tab="mytheme">我的主题</li>\n              <li class="btn-order count-rate j-tab_button" data-tab="collect_theme">收藏主题</li>\n            </ul>\n            <a href="article-create.html?type=1" class="create-item j-mine_create" style="display: none">发表主题</a>\n            \x3c!-- <div><span>发表主题</span></div> --\x3e\n\t    </div>\n\t</div>\n\n</div>\n\t\n       ',
        },
      },
      'user-new': {
        common:
          '<div class="m-head_box">\n<div class="head_box"><img src="<%=ret.user_info.imgSrc ? ret.user_info.imgSrc : \'http://u.thsi.cn/avatar/2531/349942531.gif\'%>" style="width: 100%;height: 100%;"></div>\n\t<div class="name"><%=ret.user_info.nickname%></div>\n\t<div class="qianming" title="<%=ret.user_info.description%>"><%=ret.user_info.description%></div>\n\t\x3c!-- <div class="focus_and_fans"><span class="focus">关注：<%=ret.attention_info.attention_num%></span><span class="fans">粉丝：<%=ret.attention_info.follow_num%></span></div> --\x3e\n</div>',
        information: {
          user_information_control: ' <div class="m-info_list" id="j-view-user_information">\n  </div>',
          user_information_list:
            '  <%if(ret.count > 0){%>\n  <div class="m-message_content_box">\n      <ul class="m-mine_message_lists">\n      <% $.each(ret.list,function(key,value){%>\n        <li class="<%if(value.isread === 1){%>back_grey<%}%>">\n          <div class="message_list f-cb">\n            <div class="head">\n              <div class="info-title">\n                <% if(value.isread === 0){ %>\n                <span class="red_tip"></span>\n                <%}%>\n                <%if(value.type == 1 && value.isreply == 0){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>社区<span>中发布的主题</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n                <%}else if(value.type == 2 && value.isreply == 0){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>评论了你在</span>策略广场<span>中发布的策略</span><a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a>\n                <%}else if(value.type == 2 && value.isreply == 1){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>策略<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n                <%}else if(value.type == 1 && value.isreply == 1){%>\n                <a href="user.html#user/<%= value.userid %>" class="color_blue" target="_blank"><%=value.nickname%></a><span>回复了你在</span>主题<a href="<%=value.artticle_title_href%>" class="color_blue"><%=value.article_title%></a><span>中的评论</span>\n                <%}%>\n            </div>\n        </div>\n        <div class="content"><span>评论内容：<%=regReplace(value.content,self)%></span></div>\n        <div class="datetime">\n          <div class="date"><%=value.ctime%></div>\n          \x3c!-- <div class="time">09:29:58</div> --\x3e\n      </div>\n  </div>\n</li>\n<%})%>\n</ul>\n</div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p>我的消息空空如也呢</p>\n</div>\n <%}%>\n     <div class="pagination-list-list u-pagination "></div>',
          user_information_tab:
            '<div class="m-second_nav f-cb">\n\t<div class="item choosed j-tab_button" data-tab="replay_me" style="position: relative;"><span>我的消息</span><b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:15px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;color:#fff"></b></div>\n\t<div class="item j-tab_button" data-tab="replay_me_singal" style="position: relative;"><span>交易信号</span><b class="j-old_user_disscuss_red" style="position:absolute;display:none;right:15px;top:0px;height:16px;line-height: 16px;font-size: 10px;font-weight: 200;border-radius:13px;;padding: 0 5px;background-color:red;color:#fff"></b></div>\n</div>',
          user_information_test:
            ' <div class="m-info_list" id="j-view-user_information">\n\n    <div class="info-item back_grey">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>评论了你在</span><a href="" class="color_blue">社区</a><span>中发布的主题</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="comment-describe">\n          <span class="comment">评论内容：水水水水水水水水</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n          \t\t\t<img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n          \t\t</a>\t              \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在</span><a href="" class="color_blue">策略广场</a><span>中发布的策略</span><a href="" class="color_blue">首款硅基电池的发布</a>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n\n\n    <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在主题</span><a href="" class="color_blue">关于回测价格的疑问</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n  <div class="info-item">\n        <div class="info-logo info-sub">\n              <a class="logo-img" href="http://u.thsi.cn/avatar/2274/108132274.gif">\n                <img src="http://u.thsi.cn/avatar/2274/108132274.gif" style="height:50px; border-radius:50%">\n              </a>                \n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n            <a href="http://u.thsi.cn/avatar/2274/108132274.gif" class="color_blue" target="_blank">12121212121212</a><span>回复了你在策略</span><a href="" class="color_blue">新默认策略</a><span>中的评论</span>\n          </div>\n          <div class="info-describe">\n          <span class="data">1962-02-29</span> \n          <span class="time">17:26:55</span>\n          </div>\n        </div>\n    </div>\n\n </div>\n      \t\t',
          user_singal_information_list:
            '<%if(ret.count > 0){%>\n    <div class="m-message_content_box">\n        <ul class="m-mine_message_lists">\n        <% $.each(ret.list,function(key,value){%>\n            <li>\n                <div class="message_list f-cb">\n                    <div class="head">\n                        <div class="info-title">\n                            交易信号：\n                        </div>\n                    </div>\n                    <%if(value.signal_source == 0){%>\n                    <div class="content">\n                        <span class="bule">模拟交易：</span>\n                        策略“<%=value.strategy_name%>”\n                        <%if(value.trade_type == 0){%>\n                            买入\n                        <%}else if(value.trade_type == 1){%>\n                            卖出\n                        <%}%>\n                        <%=value.stock_code%>（证券代码）<%=value.stock_amount%>，成交均价为<%=value.stock_price%>。\n                        <a href="trade.html#/" class="color_red" target="_blank">查看详情</a>\n                    </div>\n                    <%}else if(value.signal_source == 1){%>\n                    <div class="content">\n                        <span class="bule">实盘仿真：</span>\n                        账户“<%=value.strategy_name%>”\n                        <%if(value.trade_type == 0){%>\n                            买入\n                        <%}else if(value.trade_type == 1){%>\n                            卖出\n                        <%}%>\n                        <%=value.stock_code%>（证券代码）<%=value.stock_amount%>，成交均价为<%=value.stock_price%>。现持有<%=value.stock_code%>（证券代码）<%=value.stock_amount%>\n                        <a href="trade.html#/" class="color_red" target="_blank">查看详情</a>\n                    </div>\n                    <%}%>\n                    <div class="datetime">\n                        <div class="date"><%=value.trade_time%></div>\n                    </div>\n                </div>\n            </li>\n        <%})%>\n        </ul>\n    </div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p>我的消息空空如也呢</p>\n</div>\n<%}%>\n    <div class="pagination-list-list u-pagination "></div>',
        },
        strategy: {
          testlist:
            '\n<div class="strategy-item-container" id="j-view-user_strategy"> \n <%$.each(ret.list,function(index,value){%>\n <div class="strategy-content-item"> \n  // <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>""> \n  <span class="strategy-item strategy-item-name text-el"><%= value.name %></span> \n  // </a> \n  <span class="strategy-item strategy-item-profit <% if(value.profit_rate > 0) {%>rg<%} else if(value.profit_rate < 0) {%>gc<%}%>"><%= value.profit_rate %></span> \n  <span class="strategy-item strategy-item-count <% if(today_profit_rate > 0) {%>rg<%} else if(today_profit_rate < 0) {%>gc<%}%>"><%= value.today_profit_rate %></span>  \n  <span class="strategy-item strategy-item-success"><%= value.win_rate %></span> \n  <span class="strategy-item strategy-item-maxbacktes"><%= value.max_drawdown %></span>  \n  <span class="strategy-item strategy-item-info"><%= value.information_ratio %></span>  \n  <span class="strategy-item strategy-item-runday"><%= value.run_days %></span> \n  <div class="strategy-item strategy-item-detail"> \n    <a target="_blank" href="stgy.html#bid/<%= value.backtest_id %>"> \n      <div class="icon6 icon-load-more"></div> \n    </a> \n  </div> \n</div> \n<div class="strategy-content-detail <% if (i != 0) {%> hide-content <% } %>"> \n  <a target="_blank" href="<%= stgyUrl %>"> \n    <div class="full_div"> \n     <div class="content-left-detail"> \n       <p><%= description%></p> \n     </div> \n   </div> \n </a> \n <div class="personal-detail"> \n  <a target="_blank" href="user.html#user/<%= userId%>"><img src="<%= picUrl%>"></a> \n  <a target="_blank" href="user.html#user/<%= userId%>"><span class="personal-name"><%= nickname%></span></a> \n</div> \n<div id="<%= listChartId%>" class="content-right-detail"></div> \n</div> \n\n\n<%})%>\n</div>\n',
          user_strategy_card:
            '\n<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<ul class="sortshowcontent m-sort_block f-cb" id="j-view-user_strategy">\n  <%$.each(ret.list,function(index,value){%>\n  <li class="sortblock <% if (index % 2 == 1) { %> mr0 <% } %>">\n                <div class="sortblock-content">\n                <div class="sortblock-title">\n                    <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n                      <span><%= value.name %></span>\n                    </a>\n                    <div class="sortblock-info">\n                    <a target="_blank" href="user.html#user/<%= value.user_id %>">\n                      <img class="sortblock-img" src="<%= value.avatar%>">\n                    </a>\n                    <a target="_blank" href="user.html#user/<%= value.user_id %>">\n                      <p class="sortblock-name"><%= value.nickname %></p>\n                    </a>\n                    </div>\n                </div>\n                <div class="sortblock-chart" id="cardchart<%= index %>"></div>\n                <p class="sortblock-desc">\n                  <% if(value.description == "") { %>\n                  暂无该策略逻辑介绍\n                  <% } else { %>\n                  <%= datamethod.textEllipsis(value.description, 40) %>\n                  <% } %>\n                </p>\n                <ul class="sortblock-datainfo">\n                   <li>\n                      <div class="profit-content">\n                          <p class="fz20 profit-rate <% if(value.profit_rate && value.profit_rate > 0) {%>rg<% } else if (value.profit_rate && value.profit_rate < 0) {%>gc<% } %>"><%= dataHandle(value.profit_rate)%></p>\n                          <p>累计收益率</p>\n                      </div>\n                    </li>\n                    <li>\n                      <div class="success-content">\n                          <p class="fz20 success-rate <% if(value.win_rate && value.win_rate > 0) {%>rg<% } else if (value.win_rate && value.win_rate < 0) {%>gc<% } %>"><%= dataHandle(value.win_rate)%></p>\n                          <p>成功率</p>\n                      </div>\n                    </li>\n                    <li class="noborder">\n                      <div class="running-content">\n                          <p class="fz20 running-date"><%= value.run_days%></p>\n                          <p>运行天数</p>\n                      </div>\n                    </li>\n                </ul>\n                <div class="sortblock-detail hide-content">\n                    <% if (value.trade_log && value.trade_log.length>= 1) { %>\n                      <div class="stock-change-content">\n                        <% for(var j = 0; j < value.trade_log.length && j < 2; j++) {%>\n                          <% if(value.trade_log.operation_type == "SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "CLOSE_BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">平仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "CLOSE_SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">平仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "OPEN_BUY") { %>\n                            <div class="stock-change-info"><span class="stock-type bgr">开仓买入</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } else if (value.trade_log.operation_type == "OPEN_SALE") { %>\n                            <div class="stock-change-info"><span class="stock-type bgb">开仓卖出</span><span class="stock-price"><%= value.trade_log.trade_price %>元</span>\n                            <span class="stock-name ss_name"><%= value.trade_log.stock_name %></span><span class="stock-num"><%= value.trade_log.trade_amount %>股</span></div>\n                          <% } %>\n                        <% } %>\n                      </div>\n                    <% } else {%>\n                    <span>今日无调仓</span>\n                    <% } %>\n                    <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n                      <div class="btn btn-look-detail">查看详情</div>\n                    </a>\n                  </div>\n                </div>\n            </li>\n        <%})%>\n</ul>\n<%} else {%>\n<p class="u-no-data-alert">暂无查询数据！<p>\n<%}%>\n<div class="pagination-list-card u-pagination f-cb"></div>\n\n\n\n',
          user_strategy_list:
            '<%if($.type(ret.list) === \'array\' && ret.list.length > 0){%>\n<div class="m-strategy_content_box">\n  <div class="nav f-cb">\n    <div style="width: 120px;margin-left:20px;" class="item"><span>策略名称</span></div>\n    <div style="width: 75px;" class="item"><span>累计收益率</span></div>\n    <div style="width: 75px;" class="item"><span>今日收益率</span></div>\n    <div style="width: 65px;" class="item"><span>成功率</span></div>\n    <div style="width: 70px;" class="item"><span>最大回撤</span></div>\n    <div style="width: 70px;" class="item"><span>信息比率</span></div>\n    <div style="width: 70px;" class="item"><span>运行天数</span></div>\n    <div style="width: 150px;text-align: center;" class="item"><span>趋势图例</span></div>\n  </div>\n  <ul class="m-strategy_lists">\n   <%$.each(ret.list,function(index,value){%>\n    <li>\n      <div class="strategy_list f-cb">\n        <div title="<%= value.name ? value.name : \'--\'  %>" class="item strategy_name"><a href="strategy-info.html#bid/<%= value.backtest_id %>"><span><%= value.name ? value.name : \'--\'  %></span></a></div>\n        <div style="width: 75px;" class="item"><span><%= dataHandle(value.profit_rate) %></span></div>\n        <div style="width: 75px;" class="item"><span><%= dataHandle(value.today_profit_rate) %></span></div>\n        <div style="width: 65px;" class="item"><span><%= dataHandle(value.win_rate) %></span></div>\n        <div style="width: 70px;" class="item"><span><%= dataHandle(value.max_drawdown) %></span></div>\n        <div style="width: 70px;" class="item"><span><%= value.information_ratio ? Number(value.information_ratio).toFixed(2) : \'--\' %></span></div>\n        <div style="width: 70px;" class="item"><span><%= value.run_days ? value.run_days : \'--\'  %></span></div>\n        <div style="width: 180px;text-align: center;" class="item">\n          <div id="listchart<%=index%>" class="content-right-detail"></div>\n        </div>\n        <div class="item more">\n          <a target="_blank" href="strategy-info.html#bid/<%= value.backtest_id %>">\n              <div class="icons icon-loadmore"></div>\n          </a>\n          </div>\n        </div>\n      </li>\n    <%})%>\n      </ul>\n    </div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p><%=title%>空空如也呢</p>\n</div>\n<%}%>\n             <div class="pagination-list-list u-pagination "></div>\n',
          user_strategy_tab:
            '<div class="m-second_nav f-cb">\n\t<div class="item choosed j-tab_button" data-tab="publish_strategy"><span>策略发布</span></div>\n\t<div class="item j-tab_button" data-tab="collect_strategy"><span>策略收藏</span></div>\n</div>',
        },
        theme: {
          nouse_old_theme_list:
            ' <div class="m-info_list">\n\t<div class="info-item">\n        <div class="info-logo info-sub">\n          \t\t<a class="logo-img" href="<%= userUrl %>">\n          \t\t\t<img src="<%= imgSrc %>" style="height:50px; border-radius:50%">\n          \t\t</a>\n        </div>\n        <div class="info-content info-sub">\n          <div class="info-title">\n          \t<% if(isTop) {%>\n          \t\t<span class="title-tag">置顶</span>\n      \t\t<% } %>\n          \t<a href="<%= pid %>" class="title-name" target="_blank"><%= title %></a></div>\n          <div class="info-describe"><span class="describe-author">作者</span> \n          <a href="<%= userUrl %>" class="author-name"><%= nickname %></a> \n          <span class="vertical-line"></span><span class="describe-look">浏览</span>\n            <label class="look-count"><%= pv %></label><span class="vertical-line"></span><a class="icon3 icon-message-logo" href="<%= commentid %>"></a>\n            <span  class="message-count"><%= camount %></span><span class="vertical-line">\n            </span><span class="icon3 icon-collection-log"></span><a class="collection-count">\n            <%= collectionNum %></a><span class="vertical-line"></span>\n            <% if (lastComment) { %>\n            \t<a class="author-reply" href="<%= replyUrl %>"><%= lastComment["nickname"] %></a>\n            \t<label class="last-reply">最后回复于</label><span class="last-reply-date"><%= lastTime %></span>\n            <% } %>\n            <% if(backtestId) { %>\n            \t<a href="<%= pid %>" class="icon3 icon-icon-pager" title="该主题分享了回测案例"></a>\n            <% } %>\n            <% if(researchId) { %>\n        \t\t<a href="<%= pid %>" class="icon3 icon-icon-booker" title="研究分享"></a>\n        \t<% } %>\n          </div>\n        </div>\n    </div>\n </div>\n      \t\t',
          user_theme_list:
            ' <%if($.type(ret.list) === \'array\' && ret.list.length > 0 ){%>\n<div class="m-theme_box">\n  <ul class="m-theme_lists">\n    <% _.each(ret.list,function(value){%>\n    <li>\n      <div class="theme_list f-cb">\n        <div class="head"> <span><a target="_blank" href="/platform/html/article/<%= value.pid %>.html#id/<%= value.pid %>" class="title-name" target="_blank"><%= value.article_title %></a></span></div>\n        <div class="other">\n          <div class="date"><%= value.ctime %></div>\n          <div class="looked" style="width: 74px;">浏览：<%= value.pv %></div>\n          <div class="comment" style="width: 74px;">评论：<a class="" href="/platform/html/article/<%= value.pid %>.html#id/<%= value.pid %>/comment"><%= value.camount %></a></div>\n          <div class="collect">收藏：<%= value.collection_num %></div>\n          <div class="author">作者：<a target="_blank" href="user.html#user/<%= value.userid %>" class="author-name"><%= value.nickname %></a></div>\n        </div>\n      </div>\n    </li>\n    <%});%>\n  </ul>\n</div>\n<%} else {%>\n<div class="u-no-data-alert">\n    <img src="http://i.thsi.cn/images/quant/201706161111/empty.png">\n    <p><%=title%>空空如也呢</p>\n</div>\n<%}%>\n <div class="pagination-list-list u-pagination u-pagination-theme"></div>',
          user_theme_tab:
            '<div class="m-second_nav f-cb">\n  <div class="item j-tab_button choosed" data-tab="mytheme">\n  <% if(mineRead){%>\n  <span>我的主题</span>\n  <%} else {%>\n  <span>他的主题</span>\n  <%}%>\n  </div>\n  <div class="item  j-tab_button" data-tab="collect_theme"><span>收藏主题</span></div>\n  <a href="article-create.html?type=1" class="create-item j-mine_create" style="display: none">发表主题</a>\n</div>',
        },
      },
    };
  }),
  define('text', ['module'], function (t) {
    'use strict';
    function e(t, e) {
      return void 0 === t || '' === t ? e : t;
    }
    function n(t, n, i, a) {
      if (n === a) return !0;
      if (t === i) {
        if ('http' === t) return e(n, '80') === e(a, '80');
        if ('https' === t) return e(n, '443') === e(a, '443');
      }
      return !1;
    }
    var i,
      a,
      r,
      s,
      o,
      l = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
      c = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
      d = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
      u = 'undefined' != typeof location && location.href,
      p = u && location.protocol && location.protocol.replace(/\:/, ''),
      f = u && location.hostname,
      h = u && (location.port || void 0),
      v = {},
      m = (t.config && t.config()) || {};
    return (
      (i = {
        version: '2.0.15',
        strip: function (t) {
          if (t) {
            t = t.replace(c, '');
            var e = t.match(d);
            e && (t = e[1]);
          } else t = '';
          return t;
        },
        jsEscape: function (t) {
          return t
            .replace(/(['\\])/g, '\\$1')
            .replace(/[\f]/g, '\\f')
            .replace(/[\b]/g, '\\b')
            .replace(/[\n]/g, '\\n')
            .replace(/[\t]/g, '\\t')
            .replace(/[\r]/g, '\\r')
            .replace(/[\u2028]/g, '\\u2028')
            .replace(/[\u2029]/g, '\\u2029');
        },
        createXhr:
          m.createXhr ||
          function () {
            var t, e, n;
            if ('undefined' != typeof XMLHttpRequest) return new XMLHttpRequest();
            if ('undefined' != typeof ActiveXObject)
              for (e = 0; e < 3; e += 1) {
                n = l[e];
                try {
                  t = new ActiveXObject(n);
                } catch (t) {}
                if (t) {
                  l = [n];
                  break;
                }
              }
            return t;
          },
        parseName: function (t) {
          var e,
            n,
            i,
            a = !1,
            r = t.lastIndexOf('.'),
            s = 0 === t.indexOf('./') || 0 === t.indexOf('../');
          return (
            -1 !== r && (!s || r > 1) ? ((e = t.substring(0, r)), (n = t.substring(r + 1))) : (e = t),
            (i = n || e),
            (r = i.indexOf('!')),
            -1 !== r && ((a = 'strip' === i.substring(r + 1)), (i = i.substring(0, r)), n ? (n = i) : (e = i)),
            { moduleName: e, ext: n, strip: a }
          );
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (t, e, a, r) {
          var s,
            o,
            l,
            c = i.xdRegExp.exec(t);
          return (
            !c ||
            ((s = c[2]),
            (o = c[3]),
            (o = o.split(':')),
            (l = o[1]),
            (o = o[0]),
            (!s || s === e) && (!o || o.toLowerCase() === a.toLowerCase()) && ((!l && !o) || n(s, l, e, r)))
          );
        },
        finishLoad: function (t, e, n, a) {
          (n = e ? i.strip(n) : n), m.isBuild && (v[t] = n), a(n);
        },
        load: function (t, e, n, a) {
          if (a && a.isBuild && !a.inlineText) return void n();
          m.isBuild = a && a.isBuild;
          var r = i.parseName(t),
            s = r.moduleName + (r.ext ? '.' + r.ext : ''),
            o = e.toUrl(s),
            l = m.useXhr || i.useXhr;
          if (0 === o.indexOf('empty:')) return void n();
          !u || l(o, p, f, h)
            ? i.get(
                o,
                function (e) {
                  i.finishLoad(t, r.strip, e, n);
                },
                function (t) {
                  n.error && n.error(t);
                }
              )
            : e([s], function (t) {
                i.finishLoad(r.moduleName + '.' + r.ext, r.strip, t, n);
              });
        },
        write: function (t, e, n, a) {
          if (v.hasOwnProperty(e)) {
            var r = i.jsEscape(v[e]);
            n.asModule(t + '!' + e, "define(function () { return '" + r + "';});\n");
          }
        },
        writeFile: function (t, e, n, a, r) {
          var s = i.parseName(e),
            o = s.ext ? '.' + s.ext : '',
            l = s.moduleName + o,
            c = n.toUrl(s.moduleName + o) + '.js';
          i.load(
            l,
            n,
            function (e) {
              var n = function (t) {
                return a(c, t);
              };
              (n.asModule = function (t, e) {
                return a.asModule(t, c, e);
              }),
                i.write(t, l, n, r);
            },
            r
          );
        },
      }),
      'node' === m.env ||
      (!m.env &&
        'undefined' != typeof process &&
        process.versions &&
        process.versions.node &&
        !process.versions['node-webkit'] &&
        !process.versions['atom-shell'])
        ? ((a = require.nodeRequire('fs')),
          (i.get = function (t, e, n) {
            try {
              var i = a.readFileSync(t, 'utf8');
              '\ufeff' === i[0] && (i = i.substring(1)), e(i);
            } catch (t) {
              n && n(t);
            }
          }))
        : 'xhr' === m.env || (!m.env && i.createXhr())
        ? (i.get = function (t, e, n, a) {
            var r,
              s = i.createXhr();
            if ((s.open('GET', t, !0), a)) for (r in a) a.hasOwnProperty(r) && s.setRequestHeader(r.toLowerCase(), a[r]);
            m.onXhr && m.onXhr(s, t),
              (s.onreadystatechange = function (i) {
                var a, r;
                4 === s.readyState &&
                  ((a = s.status || 0),
                  a > 399 && a < 600 ? ((r = new Error(t + ' HTTP status: ' + a)), (r.xhr = s), n && n(r)) : e(s.responseText),
                  m.onXhrComplete && m.onXhrComplete(s, t));
              }),
              s.send(null);
          })
        : 'rhino' === m.env || (!m.env && 'undefined' != typeof Packages && 'undefined' != typeof java)
        ? (i.get = function (t, e) {
            var n,
              i,
              a = new java.io.File(t),
              r = java.lang.System.getProperty('line.separator'),
              s = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a), 'utf-8')),
              o = '';
            try {
              for (
                n = new java.lang.StringBuffer(),
                  i = s.readLine(),
                  i && i.length() && 65279 === i.charAt(0) && (i = i.substring(1)),
                  null !== i && n.append(i);
                null !== (i = s.readLine());

              )
                n.append(r), n.append(i);
              o = String(n.toString());
            } finally {
              s.close();
            }
            e(o);
          })
        : ('xpconnect' === m.env || (!m.env && 'undefined' != typeof Components && Components.classes && Components.interfaces)) &&
          ((r = Components.classes),
          (s = Components.interfaces),
          Components.utils.import('resource://gre/modules/FileUtils.jsm'),
          (o = '@mozilla.org/windows-registry-key;1' in r),
          (i.get = function (t, e) {
            var n,
              i,
              a,
              l = {};
            o && (t = t.replace(/\//g, '\\')), (a = new FileUtils.File(t));
            try {
              (n = r['@mozilla.org/network/file-input-stream;1'].createInstance(s.nsIFileInputStream)),
                n.init(a, 1, 0, !1),
                (i = r['@mozilla.org/intl/converter-input-stream;1'].createInstance(s.nsIConverterInputStream)),
                i.init(n, 'utf-8', n.available(), s.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
                i.readString(n.available(), l),
                i.close(),
                n.close(),
                e(l.value);
            } catch (t) {
              throw new Error(((a && a.path) || '') + ': ' + t);
            }
          })),
      i
    );
  }),
  define('text!templates/lib/dialog.html', [], function () {
    return '<style type="text/css">\n  .plugin-dialog {\n    position: relative;\n    min-height: 135px;\n    min-width: 300px;\n  }\n  .plugin-dialog-btn {\n    float: right; margin-right: 10px; margin-top: 10px; position: static;\n  }\n  .plugin-dialog-footer {\n    bottom: 0;\n    right: 0;\n  }\n</style>\n<%\n  var containerHeight, containerOverflow;\n  if (height === \'auto\') {//默认\n    containerHeight = \'auto\';\n    containerOverflow = \'visible\';\n  } else {\n    containerOverflow = \'auto\';\n    if (isShowBtn) {\n      containerHeight = (parseInt(height) - 80) + \'px\';\n    } else {\n      containerHeight = (parseInt(height) - 37) + \'px\';\n    }\n  }\n %>\n<div class="container-mask" tabindex="1">\n  <div class="container-maskbg"></div>\n  <div\n      class="popbox plugin-dialog"\n      style="margin-left: <%= (- parseInt(width) / 2)  + \'px\' %>; width: <%= width %>; height: <%= height %>"\n      >\n    <div class="icon popbox-btn-close"></div>\n\n    <div class="popbox-title">\n      <div class="text"><%= title %></div>\n    </div>\n\n    <div class="popbox-container" style="overflow: <%= containerOverflow %>; height: <%= containerHeight %>">\n      <%= content %>\n    </div>\n\n    <% if(isShowBtn) { %>\n      <div class="popbox-footer plugin-dialog-footer" style="position: <%= height === \'auto\' ? \'relative\' : \'absolute\' %>">\n        <% if(okBtn) { %>\n          <div class="btn <%= okBtnClass %> plugin-dialog-btn popbox-btn-ok"><%= okBtnTitle %></div>\n        <% } %>\n\n        <% if(cancelBtn) { %>\n          <div class="btn <%= cancelBtnClass %> plugin-dialog-btn popbox-btn-cancel"><%= cancelBtnTitle %></div>\n        <% } %>\n      </div>\n    <% } %>\n\n  </div>\n</div>';
  }),
  define('dialog', ['backbone', 'underscore', 'text!templates/lib/dialog.html'], function (t, e, n) {
    return t.View.extend({
      events: {
        'click .popbox-btn-ok': 'okEvent',
        'click .popbox-btn-cancel, .popbox-btn-close': 'cancelEvent',
        'keydown .container-mask': 'keydownEvent',
      },
      template: e.template(n),
      width: '360px',
      height: 'auto',
      title: null,
      isShowBtn: !0,
      okBtn: !0,
      okBtnTitle: '确认',
      okBtnClass: 'btn-blue-blue',
      cancelBtn: !0,
      cancelBtnTitle: '取消',
      cancelBtnClass: 'btn-hollow-grey',
      content: '',
      btnType: ['grey', 'hollow', 'blue', 'red', 'ban'],
      tip: 0,
      btnTypeMapClass: { grey: 'btn-grey-grey', hollow: 'btn-hollow-grey', blue: 'btn-blue-blue', red: 'btn-red-red', ban: 'btn-ban' },
      initialize: function () {},
      render: function (t) {
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
            tip: this.tip,
          },
          i = this;
        e.each(t, function (t, e) {
          void 0 !== n[e] && ((n[e] = t), (i[e] = t));
        });
        var a = this.template(n);
        return (
          this.$el.empty(),
          this.$el.html(a),
          0 === this.tip &&
            $('.container-maskbg').one('click', function () {
              i.$el.remove();
            }),
          this.$el.find('.container-mask').focus(),
          void 0 !== t.okEvent ? (this.okEvent = t.okEvent) : (this.okEvent = this.hide),
          void 0 !== t.cancelEvent ? (this.cancelEvent = t.cancelEvent) : (this.cancelEvent = this.hide),
          this.refreshEvent(),
          this.$el.addClass('hide'),
          this
        );
      },
      setOkButtonClass: function (t) {
        return this.getOkBtnDom().removeClass(this.okBtnClass).addClass(t), (this.okBtnClass = t), this;
      },
      setCancelButtonClass: function (t) {
        return this.getCancelBtnDom().removeClass(this.cancelBtnClass).addClass(t), (this.cancelBtnClass = t), this;
      },
      setOkButtonType: function (t) {
        if (!($.inArray(t, this.btnType) >= 0)) throw new Error("The type not in ['grey', 'hollow', 'blue', 'red', 'ban']");
        var e = this.btnTypeMapClass[t];
        return this.setOkButtonClass(e), this;
      },
      setCancelButtonType: function (t) {
        if (!($.inArray(t, this.btnType) >= 0)) throw new Error("The type not in ['grey', 'hollow', 'blue', 'red', 'ban']");
        var e = this.btnTypeMapClass[t];
        return this.setCancelButtonClass(e), this;
      },
      setContent: function (t) {
        return this.getContainerDom().html(t), this;
      },
      setWidth: function (t) {
        var e = -parseInt(t) / 2 + 'px';
        return this.$el.find('.plugin-dialog').css({ width: t, 'margin-left': e }), this;
      },
      setHeight: function (t) {
        return this.$el.find('.plugin-dialog').css('height', t), this;
      },
      keydownEvent: function (t) {
        var e = t.keyCode;
        if (13 == e) this.okEvent();
        else {
          if (27 != e) return;
          this.cancelEvent();
        }
      },
      setOkEvent: function (t) {
        return (this.okEvent = t), this.refreshEvent(), this;
      },
      setCancelEvent: function (t) {
        return (this.cancelEvent = t), this.refreshEvent(), this;
      },
      getOkBtnDom: function () {
        return this.$el.find('.popbox-btn-ok');
      },
      getCancelBtnDom: function () {
        return this.$el.find('.popbox-btn-cancel');
      },
      getContainerDom: function () {
        return this.$el.find('.popbox-container');
      },
      getDialogDom: function () {
        return this.$el.find('.plugin-dialog');
      },
      show: function () {
        if ('' === this.title) throw new Error('The title not be null');
        this.$el.removeClass('hide').show();
      },
      hide: function () {
        this.remove();
      },
      okEvent: function () {
        this.hide();
      },
      cancelEvent: function () {
        this.hide();
      },
      refreshEvent: function () {
        this.delegateEvents(this.events);
      },
    });
  }),
  define(
    '../views/common/header',
    [
      'backbone',
      '../../lib/cookies',
      '../common/feedback',
      '../../models/header/checkComments',
      '../../models/header/searchHelp',
      '../../models/header/sklearnEnable',
      '../../models/header/helpList',
      '../../models/header/feedback',
      'tpl',
      'commonFunc',
      'dialog',
    ],
    function (t, e, n, i, a, r, s, o, l, c, d) {
      return new (t.View.extend({
        el: '#header',
        changeImageDom: [],
        pollingRemindDom: [],
        remindTime: 6e4,
        timer: !1,
        keywords: '',
        quoteKeywords: '',
        isFocusSearch: !1,
        events: {
          'click .help-feedback-problem': 'showFeedback',
          'click #header-id': 'headerMenuClick',
          'mouseenter .multinav': 'showSubNav',
          'mouseover .multinav': 'showSubNav',
          'mouseleave .multinav': 'hideSubNav',
          'keyup #view_search_input': 'search',
          'focus #view_search_input': 'search',
          'click #header_search': 'stopClick',
        },
        initialize: function () {
          if ((this.feedBackClick(), $('#feedbackAlert').hide(), e.get('userid'))) {
            this.userid = e.get('userid');
            var t = e.get('escapename');
            $('#header-usr-unlogin').hide(),
              $('#header-usr-logined .header-usr-left-new span').text(t).attr({ title: t }),
              $('#header-usr-logined').show();
          } else $('#header-usr-unlogin').show();
          $('body').on('click', function () {
            $('#menu_strategy').remove(), $('#view-search-tips').hide();
          }),
            -1 === location.href.indexOf('trade') && (r.definedLoginErrorCallback = function () {}),
            r.requestIsAbled({}, function (t) {
              1 === t.sklearn_enable
                ? ($('ul.left-search-header-subnav li.machine a.header-nav-item').show(), $('.nav-left a.item#machine').show())
                : ($('ul.left-search-header-subnav li.machine a.header-nav-item').hide(), $('.nav-left a.item#machine').hide()),
                1 === t.auto_enable
                  ? ($('ul.left-search-header-subnav li.guide a.header-nav-item').show(),
                    $('.nav-left a.item#guidegeneratorstrategy').show())
                  : ($('ul.left-search-header-subnav li.guide a.header-nav-item').hide(),
                    $('.nav-left a.item#guidegeneratorstrategy').hide());
            }),
            s.requestHelpList({}, function (t) {
              t['功能说明'].forEach(function (t) {
                if (-1 !== t.module_id) {
                  var e = $(
                    '<li><a class="header-nav-item" href="/platform/html/help-api.html?t=' + t.module_id + '" >' + t.name + '</a></li>'
                  );
                  $('.left-header-subnav').append(e);
                }
              }),
                t['API文档'].forEach(function (t) {
                  var e = $(
                    '<li><a class="header-nav-item" href="/platform/html/help-api.html?t=' + t.module_id + '" >' + t.name + '</a></li>'
                  );
                  $('.right-header-subnav').append(e);
                });
            }),
            this.pollingRemind(),
            this.Ta(),
            $('.feedback-weixin').on('mouseover', function () {
              $('.weixin-code').show();
            }),
            $('.feedback-weixin').on('mouseout', function () {
              $('.weixin-code').hide();
            }),
            $('.feedback-container').on('click', function (t) {
              t.stopPropagation(), $('#feedbackAlert').show();
            }),
            $('.feedback-control span').on('click', function (t) {
              t.stopPropagation(), $('#main-feedback').hide();
            });
        },
        headerMenuClick: function (t) {
          if ((t.stopPropagation(), document.getElementById('menu_strategy'))) $('#menu_strategy').remove();
          else {
            $('#menu_strategy') && $('#menu_strategy').remove();
            var n = e.get('userid'),
              i = $(
                '<div style="color:#000;z-index:9999;display:block;" id="menu_strategy" data-id class="menu2 strategy-menu" @click.stop><a class="menu-item btn btn-delete" style="color:#676A74"  href = "/platform/html/user.html#theme/' +
                  n +
                  '"  >我的主题</a><a class="menu-item btn "id ="header_logout" style="color:#676A74" href="//upass.10jqka.com.cn/logout">退出</a></div>'
              ),
              a = $('#header-id');
            i.css({ top: a.offset().top + a.height() + 10, left: a.offset().left - 45 }),
              i.on('mouseleave', function () {
                $('#menu_strategy').remove();
              }),
              $('body').append(i),
              $('#header-unlogin').on('click', function () {
                $('#header-usr-unlogin').click();
              }),
              $('#header_logout').click(function (t) {
                t.preventDefault();
                var n, i;
                (i = $(this).attr('href')),
                  (i = i + '?redir=//' + window.location.host + '/platform/html/logoutproxy.html'),
                  e.get('userid') && ((n = e.get('userid')), (i = i + '#userid=' + n), (window.location.href = i)),
                  TA.log({ id: 'mindgo_57e513e5_356', ld: __env });
              });
          }
        },
        pollingRemind: function () {
          var t = this.$el.find('a.header-usr-left');
          t.css({ position: 'relative', cursor: 'pointer' });
          var e;
          $('.j-info_jump').append(
            '<b class="j-info_jumo_dot" style="display:none;position:absolute;padding:0 5px;font-weight: 200;border-radius:13px;height:16px;line-height:16px;font-size:10px;color:#fff;background-color:#e40011;top: 6px;left: 139px;"></b>'
          ),
            t.append(
              '<i class="j-red_dot" style="position:absolute;display:none;width:6px;height:6px;border-radius:3px;background-color:red;top:-2px;right:13px;"></i>'
            ),
            this.userid &&
              setTimeout(function () {
                (e = $('b.j-user_disscuss_red')),
                  i.checkNewComments({ userid: this.userid }, function (t) {
                    t > 0
                      ? ($('.j-red_dot').show(), e.show(), e.html(t), $('.j-info_jumo_dot').show(), $('.j-info_jumo_dot').html(t))
                      : ($('.j-red_dot').hide(), e.hide(), $('.j-info_jumo_dot').hide());
                  });
              }, 1e3);
        },
        showFeedback: function () {
          n.show();
        },
        showSubNav: function (t) {
          var e = t.currentTarget;
          $(e).find('.header-subnav').show();
        },
        hideSubNav: function (t) {
          $('.header-subnav').hide();
        },
        Ta: function () {
          $('.help-common-question').click(function () {
            TA.log({ id: 'mindgo_57e5136b_662', ld: __env });
          }),
            $('.help-api-doc').click(function () {
              TA.log({ id: 'mindgo_57e5138a_790', ld: __env });
            }),
            $('.help-feedback-problem').click(function () {
              TA.log({ id: 'mindgo_57e513a2_619', ld: __env });
            }),
            $('#header_signup').click(function () {
              TA.log({ id: 'mindgo_57e513cd_930', ld: __env });
            }),
            $('#header_signin').click(function () {
              TA.log({ id: 'mindgo_57e513b9_108', ld: __env });
            });
        },
        search: function () {
          this.isFocusSearch || (TA.log({ id: 'mindgo_59afd2b9_877', ld: __env }), (this.isFocusSearch = !0)),
            this.timer && (clearTimeout(this.timer), (this.timer = !1)),
            (this.timer = setTimeout(this.searchAction, 50));
        },
        searchAction: function () {
          (this.keywords = $.trim($('#view_search_input').val())),
            '' !== this.keywords &&
              ((this.quoteKeywords = new RegExp(
                '(' + this.keywords.replace(/(\*|\.|\?|\+|\$|\^|\[|\]|\(|\)|\{|\}|\||\\|\/)/gi, '\\$1') + ')',
                'gi'
              )),
              a.search({ keywords: this.keywords }, function (t) {
                if (!t.errorcode) {
                  var e = '';
                  0 !== t.length &&
                    (e = _.template(l.header['search-tips'], {
                      result: t,
                      keywords: this.quoteKeywords,
                      repItem: "<span style='color:#3671ca;font-weight:bolder'>$1</span>",
                    })),
                    $('#view-search-tips').html(e).show();
                }
              }));
        },
        stopClick: function (t) {
          t.stopPropagation();
        },
        feedBackClick: function () {
          $('body').append('<div id="feedbackAlert"></div>');
          var t = new d({ el: $('#feedbackAlert') });
          t.render({
            title: '意见反馈',
            cancelBtn: !1,
            okBtnTitle: '提交',
            okBtnClass: 'submit',
            content:
              '<div class="feedback">\n\t                    <div class="main">\n\t                        <div class="contact">联系方式:\n\t                            <input type="text" id="feedback_contact">\n\t                        </div>\n\t                        <div class="content">反馈内容:\n\t                            <textarea cols="28" rows="5" id="feedback_content"></textarea>\n\t                        </div>\n\t                    </div>\n                \t</div>',
            tip: '1',
            okEvent: function () {
              $('#feedbackAlert').hide(), c.tip('提交成功');
              var t = $('#feedback_contact').val(),
                e = $('#feedback_content').val(),
                n = '<br>联系方式：' + t + '<br>反馈内容：' + e;
              '' !== t &&
                '' !== e &&
                o.requestFeedBack({ is_html: 1, source: 2, title: 'quant-web意见反馈', content: n }, function (t) {
                  $('#feedback_contact').val(''), $('#feedback_content').val('');
                });
            },
            cancelEvent: function () {
              $('#feedbackAlert').hide(), $('#feedback_contact').val(''), $('#feedback_content').val('');
            },
          }).show();
        },
      }))();
    }
  );
var _typeof =
  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
    ? function (t) {
        return typeof t;
      }
    : function (t) {
        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
      };
require([
  'jquery',
  'VueResource',
  'VueAjax',
  'VueConfig',
  'commonFunc',
  '../components/backtest-result/breadcrumbs/breadcrumbs',
  '../vuex/backtest-result',
  '../router/backtest-result',
  '../common/vueComponents',
  '../common/vueDirectives',
  '../common/vueDirectives2',
  '../lib/zUI',
  'wdatepicker',
  '../views/common/feedback',
  '../views/common/header',
], function (t, e, n, i, a, r, s, o) {
  Vue.use(e), sessionStorage.setItem('isDoingBackTest', 1), (Vue.prototype.$eventBus = new Vue());
  new Vue({
    el: '#backtest_result',
    data: {
      isShowLink: null,
      backTestId: null,
      IsFactorPage: null,
      groupId: null,
      groups: [],
      number: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      showLinkBtn: null,
      showCombinationAttribution: !1,
    },
    components: { 'backtest-head': r },
    router: o,
    watch: {
      $route: function () {},
      backTestId: function () {},
      IsFactorPage: function () {
        this.IsFactorPage ? this.getFactorPageInfo() : this.setBackTestId();
      },
    },
    created: function () {
      this.getUserAuth(), this.getPageUrlInfo();
    },
    mounted: function () {
      var t = this;
      this.$router.push('/'),
        this.$eventBus.$once('SetshowCombinationAttribution', function (e) {
          t.showCombinationAttribution = e;
        });
    },
    methods: {
      getUserAuth: function () {
        var t = this;
        n.jsonp({
          url: i.ajax.common.getauthdata,
          success: function (e) {
            (t.maxAccountNumber = e.broker_quota),
              t.$store.commit({ type: 'getMaxAccountNum', count: e.broker_quota }),
              e.backtest_analysis
                ? (t.$store.commit({ type: 'getHasAnalysisAccess', data: 1 }), (t.isShowLink = !0))
                : (t.$store.commit({ type: 'getHasAnalysisAccess', data: 0 }), (t.isShowLink = !1));
          },
        });
      },
      getPageUrlInfo: function () {
        var t,
          e,
          n = this,
          i = window.location;
        (n.backTestId = a.getUrlParam(i, 'id')),
          (e = a.getUrlParam(i, 't')),
          (n.IsFactorPage = 'factor' === e),
          (n.showLinkBtn = 'strategylib' !== e && 'factor' !== e),
          this.$store.commit({ type: 'getShowLinkBtn', data: n.showLinkBtn }),
          (t = a.getUrlParam(i, 'i')),
          (n.groupId = 0 == +t ? 1 : t);
      },
      setBackTestId: function () {
        this.$store.commit({ type: 'getBackTestId', id: this.backTestId });
      },
      getFactorPageInfo: function () {
        var e = this;
        n.jsonp({
          url: i.ajax['backtest-result'].getbacktestByGroup,
          data: { backtest_id: e.backTestId, group_id: 0 },
          success: function (n) {
            'object' === (void 0 === n ? 'undefined' : _typeof(n)) &&
              n instanceof Array &&
              t.each(n, function (t, n) {
                e.groups.push({ gruopName: '第' + e.number[t] + '组', backTestId: n._id });
              }),
              'object' !== (void 0 === n ? 'undefined' : _typeof(n)) ||
                n instanceof Array ||
                e.groups.push({ gruopName: '第一组', backTestId: n._id }),
              e.$store.commit({ type: 'getGroupId', data: e.groupId }),
              e.$store.commit({ type: 'getBackTestId', id: e.groups[e.groupId - 1].backTestId }),
              e.$store.commit({ type: 'getFactorGroups', data: e.groups });
          },
        });
      },
    },
    store: s,
  });
}),
  define('backtest-result', function () {});
