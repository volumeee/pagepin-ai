(function () {
  "use strict";
  var q,
    N,
    _e,
    L,
    ue,
    he,
    pe,
    me,
    Z,
    ee,
    te,
    R = {},
    fe = [],
    Be = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    V = Array.isArray;
  function H(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ne(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function We(e, t, n) {
    var r,
      s,
      i,
      l = {};
    for (i in t)
      i == "key" ? (r = t[i]) : i == "ref" ? (s = t[i]) : (l[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (l.children = arguments.length > 3 ? q.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (i in e.defaultProps) l[i] === void 0 && (l[i] = e.defaultProps[i]);
    return K(e, l, r, s, null);
  }
  function K(e, t, n, r, s) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: s ?? ++_e,
      __i: -1,
      __u: 0,
    };
    return s == null && N.vnode != null && N.vnode(i), i;
  }
  function I(e) {
    return e.children;
  }
  function z(e, t) {
    (this.props = e), (this.context = t);
  }
  function F(e, t) {
    if (t == null) return e.__ ? F(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? F(e) : null;
  }
  function ve(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return ve(e);
    }
  }
  function ge(e) {
    ((!e.__d && (e.__d = !0) && L.push(e) && !J.__r++) ||
      ue != N.debounceRendering) &&
      ((ue = N.debounceRendering) || he)(J);
  }
  function J() {
    for (var e, t, n, r, s, i, l, c = 1; L.length; )
      L.length > c && L.sort(pe),
        (e = L.shift()),
        (c = L.length),
        e.__d &&
          ((n = void 0),
          (s = (r = (t = e).__v).__e),
          (i = []),
          (l = []),
          t.__P &&
            (((n = H({}, r)).__v = r.__v + 1),
            N.vnode && N.vnode(n),
            oe(
              t.__P,
              n,
              r,
              t.__n,
              t.__P.namespaceURI,
              32 & r.__u ? [s] : null,
              i,
              s ?? F(r),
              !!(32 & r.__u),
              l,
            ),
            (n.__v = r.__v),
            (n.__.__k[n.__i] = n),
            Ne(i, n, l),
            n.__e != s && ve(n)));
    J.__r = 0;
  }
  function ye(e, t, n, r, s, i, l, c, d, _, p) {
    var a,
      u,
      h,
      g,
      k,
      b,
      v = (r && r.__k) || fe,
      m = t.length;
    for (d = je(n, t, v, d, m), a = 0; a < m; a++)
      (h = n.__k[a]) != null &&
        ((u = h.__i == -1 ? R : v[h.__i] || R),
        (h.__i = a),
        (b = oe(e, h, u, s, i, l, c, d, _, p)),
        (g = h.__e),
        h.ref &&
          u.ref != h.ref &&
          (u.ref && re(u.ref, null, h), p.push(h.ref, h.__c || g, h)),
        k == null && g != null && (k = g),
        4 & h.__u || u.__k === h.__k
          ? (d = be(h, d, e))
          : typeof h.type == "function" && b !== void 0
            ? (d = b)
            : g && (d = g.nextSibling),
        (h.__u &= -7));
    return (n.__e = k), d;
  }
  function je(e, t, n, r, s) {
    var i,
      l,
      c,
      d,
      _,
      p = n.length,
      a = p,
      u = 0;
    for (e.__k = new Array(s), i = 0; i < s; i++)
      (l = t[i]) != null && typeof l != "boolean" && typeof l != "function"
        ? ((d = i + u),
          ((l = e.__k[i] =
            typeof l == "string" ||
            typeof l == "number" ||
            typeof l == "bigint" ||
            l.constructor == String
              ? K(null, l, null, null, null)
              : V(l)
                ? K(I, { children: l }, null, null, null)
                : l.constructor == null && l.__b > 0
                  ? K(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v)
                  : l).__ = e),
          (l.__b = e.__b + 1),
          (c = null),
          (_ = l.__i = qe(l, n, d, a)) != -1 &&
            (a--, (c = n[_]) && (c.__u |= 2)),
          c == null || c.__v == null
            ? (_ == -1 && (s > p ? u-- : s < p && u++),
              typeof l.type != "function" && (l.__u |= 4))
            : _ != d &&
              (_ == d - 1
                ? u--
                : _ == d + 1
                  ? u++
                  : (_ > d ? u-- : u++, (l.__u |= 4))))
        : (e.__k[i] = null);
    if (a)
      for (i = 0; i < p; i++)
        (c = n[i]) != null &&
          (2 & c.__u) == 0 &&
          (c.__e == r && (r = F(c)), Te(c, c));
    return r;
  }
  function be(e, t, n) {
    var r, s;
    if (typeof e.type == "function") {
      for (r = e.__k, s = 0; r && s < r.length; s++)
        r[s] && ((r[s].__ = e), (t = be(r[s], t, n)));
      return t;
    }
    e.__e != t &&
      (t && e.type && !n.contains(t) && (t = F(e)),
      n.insertBefore(e.__e, t || null),
      (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function qe(e, t, n, r) {
    var s,
      i,
      l = e.key,
      c = e.type,
      d = t[n];
    if (
      (d === null && e.key == null) ||
      (d && l == d.key && c == d.type && (2 & d.__u) == 0)
    )
      return n;
    if (r > (d != null && (2 & d.__u) == 0 ? 1 : 0))
      for (s = n - 1, i = n + 1; s >= 0 || i < t.length; ) {
        if (s >= 0) {
          if ((d = t[s]) && (2 & d.__u) == 0 && l == d.key && c == d.type)
            return s;
          s--;
        }
        if (i < t.length) {
          if ((d = t[i]) && (2 & d.__u) == 0 && l == d.key && c == d.type)
            return i;
          i++;
        }
      }
    return -1;
  }
  function we(e, t, n) {
    t[0] == "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || Be.test(t) ? n : n + "px");
  }
  function Q(e, t, n, r, s) {
    var i, l;
    e: if (t == "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof r == "string" && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || we(e.style, t, "");
        if (n) for (t in n) (r && n[t] == r[t]) || we(e.style, t, n[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      (i = t != (t = t.replace(me, "$1"))),
        (l = t.toLowerCase()),
        (t =
          l in e || t == "onFocusOut" || t == "onFocusIn"
            ? l.slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = Z), e.addEventListener(t, i ? te : ee, i))
          : e.removeEventListener(t, i ? te : ee, i);
    else {
      if (s == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t != "width" &&
        t != "height" &&
        t != "href" &&
        t != "list" &&
        t != "form" &&
        t != "tabIndex" &&
        t != "download" &&
        t != "rowSpan" &&
        t != "colSpan" &&
        t != "role" &&
        t != "popover" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] != "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
  }
  function ke(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = Z++;
        else if (t.t < n.u) return;
        return n(N.event ? N.event(t) : t);
      }
    };
  }
  function oe(e, t, n, r, s, i, l, c, d, _) {
    var p,
      a,
      u,
      h,
      g,
      k,
      b,
      v,
      m,
      S,
      f,
      x,
      T,
      D,
      y,
      $,
      P,
      U = t.type;
    if (t.constructor != null) return null;
    128 & n.__u && ((d = !!(32 & n.__u)), (i = [(c = t.__e = n.__e)])),
      (p = N.__b) && p(t);
    e: if (typeof U == "function")
      try {
        if (
          ((v = t.props),
          (m = "prototype" in U && U.prototype.render),
          (S = (p = U.contextType) && r[p.__c]),
          (f = p ? (S ? S.props.value : p.__) : r),
          n.__c
            ? (b = (a = t.__c = n.__c).__ = a.__E)
            : (m
                ? (t.__c = a = new U(v, f))
                : ((t.__c = a = new z(v, f)),
                  (a.constructor = U),
                  (a.render = Ke)),
              S && S.sub(a),
              (a.props = v),
              a.state || (a.state = {}),
              (a.context = f),
              (a.__n = r),
              (u = a.__d = !0),
              (a.__h = []),
              (a._sb = [])),
          m && a.__s == null && (a.__s = a.state),
          m &&
            U.getDerivedStateFromProps != null &&
            (a.__s == a.state && (a.__s = H({}, a.__s)),
            H(a.__s, U.getDerivedStateFromProps(v, a.__s))),
          (h = a.props),
          (g = a.state),
          (a.__v = t),
          u)
        )
          m &&
            U.getDerivedStateFromProps == null &&
            a.componentWillMount != null &&
            a.componentWillMount(),
            m && a.componentDidMount != null && a.__h.push(a.componentDidMount);
        else {
          if (
            (m &&
              U.getDerivedStateFromProps == null &&
              v !== h &&
              a.componentWillReceiveProps != null &&
              a.componentWillReceiveProps(v, f),
            (!a.__e &&
              a.shouldComponentUpdate != null &&
              a.shouldComponentUpdate(v, a.__s, f) === !1) ||
              t.__v == n.__v)
          ) {
            for (
              t.__v != n.__v &&
                ((a.props = v), (a.state = a.__s), (a.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (j) {
                  j && (j.__ = t);
                }),
                x = 0;
              x < a._sb.length;
              x++
            )
              a.__h.push(a._sb[x]);
            (a._sb = []), a.__h.length && l.push(a);
            break e;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(v, a.__s, f),
            m &&
              a.componentDidUpdate != null &&
              a.__h.push(function () {
                a.componentDidUpdate(h, g, k);
              });
        }
        if (
          ((a.context = f),
          (a.props = v),
          (a.__P = e),
          (a.__e = !1),
          (T = N.__r),
          (D = 0),
          m)
        ) {
          for (
            a.state = a.__s,
              a.__d = !1,
              T && T(t),
              p = a.render(a.props, a.state, a.context),
              y = 0;
            y < a._sb.length;
            y++
          )
            a.__h.push(a._sb[y]);
          a._sb = [];
        } else
          do
            (a.__d = !1),
              T && T(t),
              (p = a.render(a.props, a.state, a.context)),
              (a.state = a.__s);
          while (a.__d && ++D < 25);
        (a.state = a.__s),
          a.getChildContext != null && (r = H(H({}, r), a.getChildContext())),
          m &&
            !u &&
            a.getSnapshotBeforeUpdate != null &&
            (k = a.getSnapshotBeforeUpdate(h, g)),
          ($ = p),
          p != null &&
            p.type === I &&
            p.key == null &&
            ($ = Ce(p.props.children)),
          (c = ye(e, V($) ? $ : [$], t, n, r, s, i, l, c, d, _)),
          (a.base = t.__e),
          (t.__u &= -161),
          a.__h.length && l.push(a),
          b && (a.__E = a.__ = null);
      } catch (j) {
        if (((t.__v = null), d || i != null))
          if (j.then) {
            for (
              t.__u |= d ? 160 : 128;
              c && c.nodeType == 8 && c.nextSibling;

            )
              c = c.nextSibling;
            (i[i.indexOf(c)] = null), (t.__e = c);
          } else for (P = i.length; P--; ) ne(i[P]);
        else (t.__e = n.__e), (t.__k = n.__k);
        N.__e(j, t, n);
      }
    else
      i == null && t.__v == n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (c = t.__e = Ve(n.__e, t, n, r, s, i, l, d, _));
    return (p = N.diffed) && p(t), 128 & t.__u ? void 0 : c;
  }
  function Ne(e, t, n) {
    for (var r = 0; r < n.length; r++) re(n[r], n[++r], n[++r]);
    N.__c && N.__c(t, e),
      e.some(function (s) {
        try {
          (e = s.__h),
            (s.__h = []),
            e.some(function (i) {
              i.call(s);
            });
        } catch (i) {
          N.__e(i, s.__v);
        }
      });
  }
  function Ce(e) {
    return typeof e != "object" || e == null || (e.__b && e.__b > 0)
      ? e
      : V(e)
        ? e.map(Ce)
        : H({}, e);
  }
  function Ve(e, t, n, r, s, i, l, c, d) {
    var _,
      p,
      a,
      u,
      h,
      g,
      k,
      b = n.props,
      v = t.props,
      m = t.type;
    if (
      (m == "svg"
        ? (s = "http://www.w3.org/2000/svg")
        : m == "math"
          ? (s = "http://www.w3.org/1998/Math/MathML")
          : s || (s = "http://www.w3.org/1999/xhtml"),
      i != null)
    ) {
      for (_ = 0; _ < i.length; _++)
        if (
          (h = i[_]) &&
          "setAttribute" in h == !!m &&
          (m ? h.localName == m : h.nodeType == 3)
        ) {
          (e = h), (i[_] = null);
          break;
        }
    }
    if (e == null) {
      if (m == null) return document.createTextNode(v);
      (e = document.createElementNS(s, m, v.is && v)),
        c && (N.__m && N.__m(t, i), (c = !1)),
        (i = null);
    }
    if (m == null) b === v || (c && e.data == v) || (e.data = v);
    else {
      if (
        ((i = i && q.call(e.childNodes)), (b = n.props || R), !c && i != null)
      )
        for (b = {}, _ = 0; _ < e.attributes.length; _++)
          b[(h = e.attributes[_]).name] = h.value;
      for (_ in b)
        if (((h = b[_]), _ != "children")) {
          if (_ == "dangerouslySetInnerHTML") a = h;
          else if (!(_ in v)) {
            if (
              (_ == "value" && "defaultValue" in v) ||
              (_ == "checked" && "defaultChecked" in v)
            )
              continue;
            Q(e, _, null, h, s);
          }
        }
      for (_ in v)
        (h = v[_]),
          _ == "children"
            ? (u = h)
            : _ == "dangerouslySetInnerHTML"
              ? (p = h)
              : _ == "value"
                ? (g = h)
                : _ == "checked"
                  ? (k = h)
                  : (c && typeof h != "function") ||
                    b[_] === h ||
                    Q(e, _, h, b[_], s);
      if (p)
        c ||
          (a && (p.__html == a.__html || p.__html == e.innerHTML)) ||
          (e.innerHTML = p.__html),
          (t.__k = []);
      else if (
        (a && (e.innerHTML = ""),
        ye(
          t.type == "template" ? e.content : e,
          V(u) ? u : [u],
          t,
          n,
          r,
          m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : s,
          i,
          l,
          i ? i[0] : n.__k && F(n, 0),
          c,
          d,
        ),
        i != null)
      )
        for (_ = i.length; _--; ) ne(i[_]);
      c ||
        ((_ = "value"),
        m == "progress" && g == null
          ? e.removeAttribute("value")
          : g != null &&
            (g !== e[_] ||
              (m == "progress" && !g) ||
              (m == "option" && g != b[_])) &&
            Q(e, _, g, b[_], s),
        (_ = "checked"),
        k != null && k != e[_] && Q(e, _, k, b[_], s));
    }
    return e;
  }
  function re(e, t, n) {
    try {
      if (typeof e == "function") {
        var r = typeof e.__u == "function";
        r && e.__u(), (r && t == null) || (e.__u = e(t));
      } else e.current = t;
    } catch (s) {
      N.__e(s, n);
    }
  }
  function Te(e, t, n) {
    var r, s;
    if (
      (N.unmount && N.unmount(e),
      (r = e.ref) && ((r.current && r.current != e.__e) || re(r, null, t)),
      (r = e.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (i) {
          N.__e(i, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (s = 0; s < r.length; s++)
        r[s] && Te(r[s], t, n || typeof e.type != "function");
    n || ne(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function Ke(e, t, n) {
    return this.constructor(e, n);
  }
  function ze(e, t, n) {
    var r, s, i, l;
    t == document && (t = document.documentElement),
      N.__ && N.__(e, t),
      (s = (r = !1) ? null : t.__k),
      (i = []),
      (l = []),
      oe(
        t,
        (e = t.__k = We(I, null, [e])),
        s || R,
        R,
        t.namespaceURI,
        s ? null : t.firstChild ? q.call(t.childNodes) : null,
        i,
        s ? s.__e : t.firstChild,
        r,
        l,
      ),
      Ne(i, e, l);
  }
  (q = fe.slice),
    (N = {
      __e: function (e, t, n, r) {
        for (var s, i, l; (t = t.__); )
          if ((s = t.__c) && !s.__)
            try {
              if (
                ((i = s.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (s.setState(i.getDerivedStateFromError(e)), (l = s.__d)),
                s.componentDidCatch != null &&
                  (s.componentDidCatch(e, r || {}), (l = s.__d)),
                l)
              )
                return (s.__E = s);
            } catch (c) {
              e = c;
            }
        throw e;
      },
    }),
    (_e = 0),
    (z.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s != this.state
          ? this.__s
          : (this.__s = H({}, this.state))),
        typeof e == "function" && (e = e(H({}, n), this.props)),
        e && H(n, e),
        e != null && this.__v && (t && this._sb.push(t), ge(this));
    }),
    (z.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), ge(this));
    }),
    (z.prototype.render = I),
    (L = []),
    (he =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (pe = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (J.__r = 0),
    (me = /(PointerCapture)$|Capture$/i),
    (Z = 0),
    (ee = ke(!1)),
    (te = ke(!0));
  var Je = 0;
  function o(e, t, n, r, s, i) {
    t || (t = {});
    var l,
      c,
      d = t;
    if ("ref" in d)
      for (c in ((d = {}), t)) c == "ref" ? (l = t[c]) : (d[c] = t[c]);
    var _ = {
      type: e,
      props: d,
      key: n,
      ref: l,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Je,
      __i: -1,
      __u: 0,
      __source: s,
      __self: i,
    };
    if (typeof e == "function" && (l = e.defaultProps))
      for (c in l) d[c] === void 0 && (d[c] = l[c]);
    return N.vnode && N.vnode(_), _;
  }
  var B,
    E,
    ae,
    xe,
    Y = 0,
    $e = [],
    A = N,
    Ee = A.__b,
    Ae = A.__r,
    Se = A.diffed,
    Pe = A.__c,
    Ie = A.unmount,
    De = A.__;
  function se(e, t) {
    A.__h && A.__h(E, e, Y || t), (Y = 0);
    var n = E.__H || (E.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function w(e) {
    return (Y = 1), Qe(Le, e);
  }
  function Qe(e, t, n) {
    var r = se(B++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          Le(void 0, t),
          function (c) {
            var d = r.__N ? r.__N[0] : r.__[0],
              _ = r.t(d, c);
            d !== _ && ((r.__N = [_, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = E),
        !E.__f))
    ) {
      var s = function (c, d, _) {
        if (!r.__c.__H) return !0;
        var p = r.__c.__H.__.filter(function (u) {
          return !!u.__c;
        });
        if (
          p.every(function (u) {
            return !u.__N;
          })
        )
          return !i || i.call(this, c, d, _);
        var a = r.__c.props !== c;
        return (
          p.forEach(function (u) {
            if (u.__N) {
              var h = u.__[0];
              (u.__ = u.__N), (u.__N = void 0), h !== u.__[0] && (a = !0);
            }
          }),
          (i && i.call(this, c, d, _)) || a
        );
      };
      E.__f = !0;
      var i = E.shouldComponentUpdate,
        l = E.componentWillUpdate;
      (E.componentWillUpdate = function (c, d, _) {
        if (this.__e) {
          var p = i;
          (i = void 0), s(c, d, _), (i = p);
        }
        l && l.call(this, c, d, _);
      }),
        (E.shouldComponentUpdate = s);
    }
    return r.__N || r.__;
  }
  function ie(e, t) {
    var n = se(B++, 3);
    !A.__s && He(n.__H, t) && ((n.__ = e), (n.u = t), E.__H.__h.push(n));
  }
  function Ye(e, t) {
    var n = se(B++, 7);
    return He(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function Me(e, t) {
    return (
      (Y = 8),
      Ye(function () {
        return e;
      }, t)
    );
  }
  function Ge() {
    for (var e; (e = $e.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(G), e.__H.__h.forEach(le), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), A.__e(t, e.__v);
        }
  }
  (A.__b = function (e) {
    (E = null), Ee && Ee(e);
  }),
    (A.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), De && De(e, t);
    }),
    (A.__r = function (e) {
      Ae && Ae(e), (B = 0);
      var t = (E = e.__c).__H;
      t &&
        (ae === E
          ? ((t.__h = []),
            (E.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
            }))
          : (t.__h.forEach(G), t.__h.forEach(le), (t.__h = []), (B = 0))),
        (ae = E);
    }),
    (A.diffed = function (e) {
      Se && Se(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          (($e.push(t) !== 1 && xe === A.requestAnimationFrame) ||
            ((xe = A.requestAnimationFrame) || Xe)(Ge)),
        t.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (ae = E = null);
    }),
    (A.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(G),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || le(r);
            }));
        } catch (r) {
          t.some(function (s) {
            s.__h && (s.__h = []);
          }),
            (t = []),
            A.__e(r, n.__v);
        }
      }),
        Pe && Pe(e, t);
    }),
    (A.unmount = function (e) {
      Ie && Ie(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            G(r);
          } catch (s) {
            t = s;
          }
        }),
        (n.__H = void 0),
        t && A.__e(t, n.__v));
    });
  var Ue = typeof requestAnimationFrame == "function";
  function Xe(e) {
    var t,
      n = function () {
        clearTimeout(r), Ue && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 35);
    Ue && (t = requestAnimationFrame(n));
  }
  function G(e) {
    var t = E,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (E = t);
  }
  function le(e) {
    var t = E;
    (e.__c = e.__()), (E = t);
  }
  function He(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function Le(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const Ze = 1;
  function et() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    const e = new Uint8Array(16);
    crypto.getRandomValues(e),
      (e[6] = (e[6] & 15) | 64),
      (e[8] = (e[8] & 63) | 128);
    const t = [...e].map((n) => n.toString(16).padStart(2, "0")).join("");
    return `${t.slice(0, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}-${t.slice(16, 20)}-${t.slice(20)}`;
  }
  function tt() {
    return new Date().toISOString();
  }
  const nt = 2e4;
  const AI_CLIENT_TIMEOUT = 130e3;
  async function C(e, t = {}, n = nt) {
    const r = { v: Ze, requestId: et(), type: e, payload: t, sentAt: tt() };
    try {
      const s = await ot(chrome.runtime.sendMessage(r), e === "ai.prompt.improve" ? AI_CLIENT_TIMEOUT : n);
      if (s && typeof s == "object" && "ok" in s) return s;
      const failure = {
        ok: !1,
        error: "bad_response",
        message: "Unexpected response from background.",
      };
      if (!e.startsWith("error-log."))
        reportPopupError(new Error(failure.message), e);
      return failure;
    } catch (s) {
      const failure =
        s instanceof Fe
          ? { ok: !1, error: "timeout", message: "The request timed out." }
          : {
              ok: !1,
              error: "unreachable",
              message: "Could not reach the background service.",
            };
      if (!e.startsWith("error-log."))
        reportPopupError(new Error(failure.message), e);
      return failure;
    }
  }
  function reportPopupError(error, operation) {
    const message =
      error instanceof Error ? error.message : String(error ?? "Unknown error");
    const stack = error instanceof Error ? error.stack : undefined;
    void C("error-log.add", {
      source: "popup",
      operation,
      code: "client_error",
      message: message.slice(0, 600),
      stack: stack?.slice(0, 2000),
    });
  }
  window.addEventListener("error", (event) => {
    reportPopupError(event.error || event.message, "uncaught");
  });
  window.addEventListener("unhandledrejection", (event) => {
    reportPopupError(event.reason, "unhandledrejection");
  });
  class Fe extends Error {}
  function ot(e, t) {
    let n;
    const r = new Promise((s, i) => {
      n = setTimeout(() => i(new Fe("timeout")), t);
    });
    return Promise.race([e, r]).finally(() => {
      n !== void 0 && clearTimeout(n);
    });
  }
  async function rt() {
    const t = (await chrome.tabs.query({ active: !0, currentWindow: !0 }))[0];
    return t ? { id: t.id, url: t.url, title: t.title } : void 0;
  }
  function ce(e, t, n) {
    return o("svg", {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: t ? `popup-icon ${t}` : "popup-icon",
      "aria-hidden": "true",
      children: n,
    });
  }
  function at({ size: e = 20, className: t }) {
    return ce(e, t, [
      o(
        "rect",
        { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" },
        "r",
      ),
      o(
        "path",
        { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" },
        "p",
      ),
    ]);
  }
  function st({ size: e = 20, className: t }) {
    return ce(e, t, o("path", { d: "M20 6 9 17l-5-5" }, "p"));
  }
  function it({ size: e = 20, className: t }) {
    return ce(e, t, [
      o("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, "p1"),
      o("polyline", { points: "7 10 12 15 17 10" }, "p2"),
      o("line", { x1: "12", x2: "12", y1: "15", y2: "3" }, "l"),
    ]);
  }
  function de(e) {
    if (!e) return "unknown page";
    try {
      return new URL(e).host || "unknown page";
    } catch {
      return "unknown page";
    }
  }
  function Oe(e) {
    return e < 0
      ? "unknown"
      : e < 1024
        ? `${e} B`
        : e < 1024 * 1024
          ? `${(e / 1024).toFixed(1)} KB`
          : `${(e / (1024 * 1024)).toFixed(1)} MB`;
  }
  function O(e, t = []) {
    const [n, r] = w(void 0),
      [s, i] = w(void 0),
      [l, c] = w("loading"),
      d = Me(() => {
        c("loading"),
          i(void 0),
          e().then(
            (_) => {
              r(_), c("ready");
            },
            (_) => {
              i(_ instanceof Error ? _.message : String(_)), c("error");
            },
          );
      }, t);
    return (
      ie(() => {
        d();
      }, [d]),
      { value: n, error: s, status: l, reload: d, setValue: r }
    );
  }
  function M(e) {
    if (!e.ok) throw new Error(e.message || e.error);
    return e.data;
  }
  function lt() {
    const [e, t] = w(void 0),
      [n, r] = w("…"),
      [s, i] = w(null),
      [l, c] = w(null),
      [d, _] = w(!1),
      p = O(async () => {
        const f = await rt();
        if (!f?.id) throw new Error("No active tab.");
        return (
          t(f.id),
          r(de(f.url)),
          M(await C("inspector.state.get", { tabId: f.id }))
        );
      }),
      a = O(async () => M(await C("settings.get"))),
      u = O(async () => M(await C("storage.usage"))),
      h = Me(async (f, x) => {
        i(f), c(null);
        try {
          await x();
        } catch (T) {
          c(T instanceof Error ? T.message : String(T));
        } finally {
          i(null);
        }
      }, []),
      g = () =>
        h("enable", async () => {
          if (e === void 0) return;
          const f = p.value?.enabled ? "inspector.disable" : "inspector.enable",
            x = M(await C(f, { tabId: e }));
          p.setValue(x);
        }),
      k = () =>
        h("alwayson", async () => {
          const f = p.value;
          if (f?.originPermission) {
            if (f.hasOriginPermission) {
              const x = await C("permissions.remove", {
                origins: [f.originPermission],
              });
              if (!x.ok) throw new Error(x.message || x.error);
            } else {
              const x = await C("permissions.request", {
                origins: [f.originPermission],
              });
              if (!x.ok) throw new Error(x.message || x.error);
            }
            e !== void 0 &&
              p.setValue(M(await C("inspector.state.get", { tabId: e })));
          }
        }),
      b = (f, x) =>
        h(`setting-${f}`, async () => {
          const T = M(await C("settings.set", { [f]: x }));
          a.setValue(T);
        }),
      v = () =>
        h("wipe", async () => {
          const f = await C("data.wipe", { confirm: !0 });
          if (!f.ok) throw new Error(f.message || f.error);
          _(!1),
            u.reload(),
            a.reload(),
            e !== void 0 &&
              p.setValue(M(await C("inspector.state.get", { tabId: e })));
        }),
      m = p.value,
      S = m
        ? m.restricted
          ? o("span", {
              className: "badge unsupported",
              children: "Unsupported",
            })
          : m.enabled
            ? o("span", { className: "badge on", children: "Enabled" })
            : o("span", { className: "badge off", children: "Disabled" })
        : o("span", { className: "badge off", children: "…" });
    return o("div", {
      className: "wrap",
      children: [
        o("div", {
          className: "p-header",
          children: [
            o("img", {
              src: "../icons/icon-32.png",
              width: "28",
              height: "28",
              alt: "",
              className: "brand-mark",
            }),
            o("span", {
              className: "brand-title",
              children: "PagePin AI",
            }),
            o("span", {
              className: "ver",
              children: ["v", chrome.runtime.getManifest().version],
            }),
          ],
        }),
        o("div", {
          className: "p-body",
          children: [
            l && o("div", { className: "err", role: "alert", children: l }),
            o("section", {
              "aria-label": "This page",
              children: [
                p.status === "loading" &&
                  o("p", { className: "skeleton", children: "Checking tab…" }),
                p.status === "error" &&
                  o("p", { className: "err", children: p.error }),
                m &&
                  o(I, {
                    children: [
                      o("div", {
                        className: "row",
                        style: { marginBottom: 8 },
                        children: [
                          o("span", {
                            className: "host",
                            title: m.url,
                            children: n,
                          }),
                          S,
                        ],
                      }),
                      !m.restricted &&
                        o("button", {
                          className: `toggle-btn ${m.enabled ? "" : "off"}`,
                          disabled: s === "enable",
                          onClick: g,
                          children:
                            s === "enable"
                              ? "Working…"
                              : m.enabled
                                ? "Hide Toolbar"
                                : "Show Toolbar",
                        }),
                      m.restricted
                        ? o("p", {
                            className: "note warn",
                            children:
                              "DOM inspection isn't available on this page (browser restriction). The extension does not bypass it. You can still write manual feedback.",
                          })
                        : o(I, {
                            children: [
                              m.originPermission &&
                                o("div", {
                                  className: "setting",
                                  children: [
                                    o("div", {
                                      className: "setting-info",
                                      children: [
                                        o("span", {
                                          className: "setting-label",
                                          children: [
                                            "Always allow on ",
                                            de(m.url),
                                          ],
                                        }),
                                        o("span", {
                                          className: "setting-desc",
                                          children: "Asks for site permission",
                                        }),
                                      ],
                                    }),
                                    o("label", {
                                      className: "switch",
                                      children: [
                                        o("input", {
                                          type: "checkbox",
                                          checked: m.hasOriginPermission,
                                          disabled: s === "alwayson",
                                          onChange: k,
                                          "aria-label": `Always allow on ${de(m.url)}`,
                                        }),
                                        o("span", { className: "slider" }),
                                      ],
                                    }),
                                  ],
                                }),
                              o(ut, {
                                tabId: e,
                                consoleOptIn: !!a.value?.consoleCapture,
                              }),
                            ],
                          }),
                    ],
                  }),
              ],
            }),
            o("section", {
              className: "card",
              "aria-label": "Preferences",
              children: [
                o("h2", { children: "Preferences" }),
                a.status === "loading" &&
                  o("p", { className: "skeleton", children: "Loading…" }),
                a.value &&
                  o(I, {
                    children: [
                      o("div", {
                        className: "field",
                        children: [
                          o("label", { htmlFor: "theme", children: "Theme" }),
                          o("select", {
                            id: "theme",
                            value: a.value.theme,
                            disabled: s === "setting-theme",
                            onChange: (f) => b("theme", f.target.value),
                            children: [
                              o("option", { value: "dark", children: "Dark" }),
                              o("option", {
                                value: "light",
                                children: "Light",
                              }),
                              o("option", {
                                value: "system",
                                children: "System",
                              }),
                            ],
                          }),
                        ],
                      }),
                      o(W, {
                        label: "Auto Screenshot",
                        desc: "Capture screenshot with each annotation",
                        checked: a.value.autoScreenshot,
                        disabled: s === "setting-autoScreenshot",
                        onChange: (f) => b("autoScreenshot", f),
                      }),
                      o(W, {
                        label: "Auto Copy",
                        desc: "Copy markdown after each save",
                        checked: a.value.autoCopy,
                        disabled: s === "setting-autoCopy",
                        onChange: (f) => b("autoCopy", f),
                      }),
                      o(W, {
                        label: "Console capture",
                        desc: "Opt-in; records console from enablement",
                        checked: a.value.consoleCapture,
                        disabled: s === "setting-consoleCapture",
                        onChange: (f) => b("consoleCapture", f),
                      }),
                    ],
                  }),
              ],
            }),
            o("section", {
              className: "card",
              "aria-label": "Keyboard shortcuts",
              children: [
                o("h2", { children: "Keyboard shortcuts" }),
                o("p", {
                  className: "note shortcut-note",
                  children: "Defaults are editable in Chrome's extension shortcut settings.",
                }),
                o("div", {
                  className: "shortcut-list",
                  children: [
                    o("div", {
                      className: "setting",
                      children: [
                        o("div", {
                          className: "setting-info",
                          children: [o("span", { className: "setting-label", children: "Annotate" })],
                        }),
                        o("kbd", { className: "shortcut-key", children: "Ctrl+Shift+Y" }),
                      ],
                    }),
                    o("div", {
                      className: "setting",
                      children: [
                        o("div", {
                          className: "setting-info",
                          children: [o("span", { className: "setting-label", children: "Copy Markdown + screenshots" })],
                        }),
                        o("kbd", { className: "shortcut-key", children: "Alt+Shift+M" }),
                      ],
                    }),
                    o("div", {
                      className: "setting",
                      children: [
                        o("div", {
                          className: "setting-info",
                          children: [o("span", { className: "setting-label", children: "Copy latest PNG" })],
                        }),
                        o("kbd", { className: "shortcut-key", children: "Alt+Shift+I" }),
                      ],
                    }),
                    o("div", {
                      className: "setting",
                      children: [
                        o("div", {
                          className: "setting-info",
                          children: [o("span", { className: "setting-label", children: "Copy console" })],
                        }),
                        o("kbd", { className: "shortcut-key", children: "Alt+Shift+K" }),
                      ],
                    }),
                  ],
                }),
                o("button", {
                  className: "toggle-btn",
                  onClick: () => chrome.tabs.create({ url: "chrome://extensions/shortcuts" }),
                  children: "Edit shortcuts in Chrome",
                }),
              ],
            }),
            o(ct, {}),
            o(ht, { tabId: e, initialScope: a.value?.annotationScope || "page", onScopeChange: (scope) => b("annotationScope", scope) }),
            o("section", {
              className: "card",
              "aria-label": "Data",
              children: [
                o("h2", { children: "Data" }),
                u.value &&
                  o(I, {
                    children: [
                      o("div", {
                        className: "row",
                        children: [
                          o("span", {
                            className: "note",
                            style: { marginTop: 0 },
                            children: "Local storage",
                          }),
                          o("span", {
                            className: "note",
                            style: { marginTop: 0 },
                            children: [
                              Oe(u.value.localBytes),
                              " / ",
                              Oe(u.value.localQuota),
                            ],
                          }),
                        ],
                      }),
                      o("div", {
                        className: "meter",
                        "aria-hidden": "true",
                        children: o("div", {
                          style: {
                            width: `${Math.min(100, (u.value.localBytes / u.value.localQuota) * 100)}%`,
                          },
                        }),
                      }),
                    ],
                  }),
                d
                  ? o(I, {
                      children: [
                        o("p", {
                          className: "note warn",
                          children:
                            "This permanently deletes settings, sessions, annotations and local error logs on this device.",
                        }),
                        o("div", {
                          className: "row",
                          style: { marginTop: 8 },
                          children: [
                            o("button", {
                              className: "btn",
                              onClick: () => _(!1),
                              children: "Cancel",
                            }),
                            o("button", {
                              className: "btn danger",
                              disabled: s === "wipe",
                              onClick: v,
                              children:
                                s === "wipe"
                                  ? "Deleting…"
                                  : "Delete everything",
                            }),
                          ],
                        }),
                      ],
                    })
                  : o("button", {
                      className: "btn danger block",
                      onClick: () => _(!0),
                      children: "Delete all local data…",
                    }),
              ],
            }),
            o(mt, {}),
            o("section", {
              className: "card",
              "aria-label": "About",
              children: [
                o("h2", { children: "About" }),
                o("p", {
                  className: "note",
                  style: { marginTop: 0 },
                  children:
                    "Local-first. No account, no tracking, no background network calls. AI features are strictly opt-in and never send page data without your explicit consent.",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  const X = "vft.providerFormDraft";
  function ct() {
    const [e, t] = w(!1),
      [n, r] = w(null),
      [s, i] = w(null),
      [l, c] = w(null),
      d = O(async () => M(await C("ai.providers.list")));
    ie(() => {
      chrome.storage.local
        .get([X])
        .then((a) => {
          const u = a[X];
          u &&
            (u.displayName || u.baseUrl || u.modelId) &&
            (c(u), r(u.editingId), t(!0));
        })
        .catch(() => {});
    }, []);
    const _ = () => {
        chrome.storage.local.remove([X]).catch(() => {}), c(null);
      },
      p = () => d.reload();
    return o("section", {
      className: "card",
      "aria-label": "AI providers",
      children: [
        o("h2", { children: "AI providers" }),
        s && o("p", { className: "err", role: "alert", children: s }),
        d.status === "loading" &&
          o("p", { className: "skeleton", children: "Loading…" }),
        d.value &&
          d.value.length === 0 &&
          !e &&
          o("p", {
            className: "note",
            style: { marginTop: 0 },
            children:
              "No providers yet. Add Ollama, LM Studio, OpenAI, or a custom OpenAI-compatible endpoint. API keys stay in this browser session only.",
          }),
        d.value &&
          d.value.length > 0 &&
          o("ul", {
            className: "ann-list",
            children: d.value.map((a) =>
              o(
                dt,
                {
                  profile: a,
                  onChanged: p,
                  onEdit: () => {
                    r(a.id), t(!0);
                  },
                  onError: i,
                },
                a.id,
              ),
            ),
          }),
        e
          ? o(_t, {
              editingId: n,
              existing: d.value?.find((a) => a.id === n) ?? null,
              draft: l,
              onDone: () => {
                t(!1), r(null), _(), p();
              },
              onCancel: () => {
                t(!1), r(null), _();
              },
              onError: i,
            })
          : o("button", {
              className: "btn block",
              onClick: () => {
                r(null), c(null), t(!0);
              },
              children: "Add provider…",
            }),
        o("p", {
          className: "note",
          children:
            "Local-first: Ollama/LM Studio use plain HTTP on loopback only. Remote providers require HTTPS. Nothing is sent to any provider until you use “Improve with AI”.",
        }),
      ],
    });
  }
  function dt({ profile: e, onChanged: t, onEdit: n, onError: r }) {
    const [s, i] = w(!1),
      [l, c] = w(null),
      d = async () => {
        i(!0), c(null), r(null);
        try {
          const u = await C("ai.provider.test", { providerId: e.id });
          if (!u.ok) throw new Error(u.message || u.error);
          const h = u.data;
          if (h.needsPermission) {
            c(`Requesting access to ${h.needsPermission}…`);
            const g = await C("permissions.request", {
              origins: [h.needsPermission],
            });
            if (!g.ok || !g.data.granted) {
              c(
                `Permission needed for ${h.needsPermission} to reach this provider.`,
              );
              return;
            }
            const k = await C("ai.provider.test", { providerId: e.id });
            if (!k.ok) throw new Error(k.message || k.error);
            _(k.data);
          } else _(h);
        } catch (u) {
          r(u instanceof Error ? u.message : "Test failed.");
        } finally {
          i(!1);
        }
      },
      _ = (u) => {
        u.error
          ? c(u.error)
          : c(
              `OK — reachable${u.authenticated === !1 ? " (auth failed)" : ""}${u.models ? `, ${u.models.length} model(s)` : ""}${u.inferenceOk ? ", inference works" : ""}.`,
            );
      },
      p = async () => {
        if (!confirm(`Delete provider "${e.displayName}"?`)) return;
        const u = await C("ai.provider.delete", { id: e.id });
        u.ok ? t() : r(u.message || u.error);
      },
      a = async () => {
        const u = await C("ai.provider.setActive", { id: e.id });
        u.ok ? t() : r(u.message || u.error);
      };
    return o("li", {
      children: [
        o("div", {
          className: "ann-item",
          style: { cursor: "default" },
          children: o("span", {
            className: "ann-body",
            style: { flex: 1 },
            children: [
              o("span", {
                className: "ann-meta",
                children: [
                  e.kind,
                  " · ",
                  e.modelId,
                  e.cloud && " · cloud",
                  e.hasKey
                    ? " · key set"
                    : e.authMode === "session_key"
                      ? " · no key"
                      : "",
                ],
              }),
              o("span", { className: "ann-comment", children: e.displayName }),
              l &&
                o("span", {
                  className: "note",
                  style: { margin: "4px 0 0" },
                  children: l,
                }),
            ],
          }),
        }),
        o("div", {
          className: "row",
          style: { marginTop: 6 },
          children: [
            o("button", {
              className: "btn",
              disabled: s,
              onClick: d,
              children: s ? "Testing…" : "Test connection",
            }),
            o("button", { className: "btn", onClick: n, children: "Edit" }),
            o("button", {
              className: "btn",
              onClick: a,
              children: "Set active",
            }),
            o("button", {
              className: "btn danger",
              onClick: p,
              children: "Delete",
            }),
          ],
        }),
      ],
    });
  }
  function _t({
    editingId: e,
    existing: t,
    draft: n,
    onDone: r,
    onCancel: s,
    onError: i,
  }) {
    const [l, c] = w(n?.kind ?? t?.kind ?? "ollama"),
      [d, _] = w(n?.displayName ?? t?.displayName ?? ""),
      [p, a] = w(n?.baseUrl ?? t?.baseUrl ?? ""),
      [u, h] = w(n?.modelId ?? t?.modelId ?? ""),
      [g, k] = w(n?.authMode ?? t?.authMode ?? "none"),
      [b, v] = w(""),
      m = t?.hasKey ?? !1;
    ie(() => {
      const y = {
        editingId: e,
        kind: l,
        displayName: d,
        baseUrl: p,
        modelId: u,
        authMode: g,
      };
      (d || p || u) && chrome.storage.local.set({ [X]: y }).catch(() => {});
    }, [e, l, d, p, u, g]);
    const S = (y, $) => {
        if (y === "openai") return !0;
        if (y !== "openai_compatible" && y !== "ninerouter") return !1;
        try {
          const P = new URL($.trim()).hostname;
          return P !== "localhost" && P !== "127.0.0.1" && P !== "[::1]";
        } catch {
          return !0;
        }
      },
      [f, x] = w(!1),
      T = {
        ollama: "http://localhost:11434/v1",
        lmstudio: "http://localhost:1234/v1",
        openai: "https://api.openai.com/v1",
        ninerouter: "http://localhost:20128/v1",
        openai_compatible: "https://",
      },
      D = async () => {
        x(!0), i(null);
        try {
          const y = {
              displayName: d.trim() || `${l} provider`,
              kind: l,
              baseUrl: p.trim() || T[l],
              modelId: u.trim(),
              authMode: g,
              cloud: S(l, p.trim() || T[l]),
              sendContextDefault: "minimal",
              enabled: !0,
            },
            $ = e
              ? await C("ai.provider.update", { id: e, ...y })
              : await C("ai.provider.create", y);
          if (!$.ok) throw new Error($.message || $.error);
          if (g === "session_key" && b.trim()) {
            const P = await C("ai.provider.setKey", {
              providerId: $.data.id,
              key: b.trim(),
            });
            if (!P.ok) throw new Error(P.message || P.error);
          }
          r();
        } catch (y) {
          i(y instanceof Error ? y.message : "Save failed.");
        } finally {
          x(!1);
        }
      };
    return o("div", {
      style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 8 },
      children: [
        o("div", {
          className: "field stack",
          children: [
            o("label", { htmlFor: "pv-kind", children: "Type" }),
            o("select", {
              id: "pv-kind",
              value: l,
              onChange: (y) => {
                const $ = y.target.value;
                c($),
                  a(T[$]),
                  k(
                    $ === "openai" ||
                      $ === "openai_compatible" ||
                      $ === "ninerouter"
                      ? "session_key"
                      : "none",
                  );
              },
              children: [
                o("option", { value: "ollama", children: "Ollama (local)" }),
                o("option", {
                  value: "lmstudio",
                  children: "LM Studio (local)",
                }),
                o("option", {
                  value: "ninerouter",
                  children: "9Router (local gateway)",
                }),
                o("option", { value: "openai", children: "OpenAI (cloud)" }),
                o("option", {
                  value: "openai_compatible",
                  children: "Custom (local HTTP or remote HTTPS)",
                }),
              ],
            }),
          ],
        }),
        o("div", {
          className: "field stack",
          children: [
            o("label", { htmlFor: "pv-name", children: "Name" }),
            o("input", {
              id: "pv-name",
              className: "text-input",
              value: d,
              placeholder: "My Ollama",
              onInput: (y) => _(y.target.value),
            }),
          ],
        }),
        o("div", {
          className: "field stack",
          children: [
            o("label", { htmlFor: "pv-url", children: "Base URL" }),
            o("input", {
              id: "pv-url",
              className: "text-input",
              value: p,
              placeholder: T[l],
              onInput: (y) => a(y.target.value),
            }),
          ],
        }),
        o("div", {
          className: "field stack",
          children: [
            o("label", { htmlFor: "pv-model", children: "Model ID" }),
            o("input", {
              id: "pv-model",
              className: "text-input",
              value: u,
              placeholder: "llama3.1 (or pick from Test)",
              onInput: (y) => h(y.target.value),
            }),
          ],
        }),
        o("div", {
          className: "field stack",
          children: [
            o("label", { htmlFor: "pv-auth", children: "Auth" }),
            o("select", {
              id: "pv-auth",
              value: g,
              onChange: (y) => k(y.target.value),
              children: [
                o("option", { value: "none", children: "None (local)" }),
                o("option", {
                  value: "session_key",
                  children: "API key (session only)",
                }),
              ],
            }),
          ],
        }),
        g === "session_key" &&
          o("div", {
            className: "field stack",
            children: [
              o("label", { htmlFor: "pv-key", children: "API key" }),
              o("input", {
                id: "pv-key",
                type: "password",
                className: "text-input",
                value: b,
                placeholder: m
                  ? "•••••••• (key saved — leave blank to keep)"
                  : "sk-… (kept in session only)",
                onInput: (y) => v(y.target.value),
              }),
              m &&
                !b &&
                o("p", {
                  className: "note",
                  style: { margin: "4px 0 0" },
                  children: "A key is already saved for this provider.",
                }),
            ],
          }),
        o("p", {
          className: "note",
          children: [
            "Keys are kept in the browser session only and never leave this device except to the provider you configure. ",
            S(l, p.trim() || T[l]) &&
              "This is a cloud/remote provider: comment text will be sent to it only when you use “Improve with AI”.",
            !S(l, p.trim() || T[l]) &&
              "Local provider: requests stay on this machine.",
          ],
        }),
        o("div", {
          className: "row",
          children: [
            o("button", { className: "btn", onClick: s, children: "Cancel" }),
            o("button", {
              className: "btn primary",
              disabled: f || !u.trim(),
              onClick: D,
              children: f ? "Saving…" : e ? "Update" : "Add provider",
            }),
          ],
        }),
      ],
    });
  }
  function W({ label: e, desc: t, checked: n, disabled: r, onChange: s }) {
    return o("div", {
      className: "setting",
      children: [
        o("div", {
          className: "setting-info",
          children: [
            o("span", { className: "setting-label", children: e }),
            o("span", { className: "setting-desc", children: t }),
          ],
        }),
        o("label", {
          className: "switch",
          children: [
            o("input", {
              type: "checkbox",
              checked: n,
              disabled: r,
              onChange: (i) => s(i.target.checked),
              "aria-label": e,
            }),
            o("span", { className: "slider" }),
          ],
        }),
      ],
    });
  }
  function ut({ tabId: e, consoleOptIn: t }) {
    const n = O(async () => {
        if (e === void 0) throw new Error("No tab.");
        return M(await C("console.state.get", { tabId: e }));
      }, [e]),
      r = async () => {
        if (e === void 0) return;
        const s = await C("console.setEnabled", {
          tabId: e,
          enabled: !n.value?.enabled,
        });
        if (!s.ok)
          throw (
            (n.setValue({ enabled: n.value?.enabled ?? !1 }),
            new Error(s.message || s.error))
          );
        n.setValue(s.data);
      };
    return t
      ? o("div", {
          className: "setting",
          children: [
            o("div", {
              className: "setting-info",
              children: [
                o("span", {
                  className: "setting-label",
                  children: "Console on this tab",
                }),
                o("span", {
                  className: "setting-desc",
                  children: "Only from now on — no history",
                }),
              ],
            }),
            o("label", {
              className: "switch",
              children: [
                o("input", {
                  type: "checkbox",
                  checked: !!n.value?.enabled,
                  disabled: n.status !== "ready",
                  onChange: () => void r().catch(() => {}),
                  "aria-label": "Capture console on this tab",
                }),
                o("span", { className: "slider" }),
              ],
            }),
          ],
        })
      : null;
  }
  async function writeReportToClipboard(markdown, screenshotIds = []) {
    const ids = [
      ...new Set(
        (screenshotIds || []).filter((id) => typeof id === "string" && id),
      ),
    ];
    if (ids.length > 50)
      throw new Error(
        "This report has too many screenshots to copy at once. Choose a smaller export scope.",
      );
    const images = [];
    let totalBytes = 0;
    for (const id of ids) {
      const result = await C("screenshot.get", { id });
      if (!result.ok || !result.data?.dataUrl)
        throw new Error(
          result.message || result.error || `Screenshot ${id} is unavailable.`,
        );
      const response = await fetch(result.data.dataUrl);
      let blob = await response.blob();
      if (!blob.size) throw new Error(`Screenshot ${id} is empty.`);
      if (blob.type !== "image/png") {
        const bitmap = await createImageBitmap(blob);
        const canvas = document.createElement("canvas");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const context = canvas.getContext("2d");
        if (!context)
          throw new Error("Could not prepare a screenshot for the clipboard.");
        context.drawImage(bitmap, 0, 0);
        bitmap.close();
        blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (png) =>
              png
                ? resolve(png)
                : reject(new Error("Could not encode screenshot as PNG.")),
            "image/png",
          ),
        );
      }
      totalBytes += blob.size;
      if (totalBytes > 40 * 1024 * 1024)
        throw new Error(
          "Screenshots exceed the clipboard size limit. Choose a smaller export scope.",
        );
      images.push({
        id,
        blob,
        dataUrl: result.data.dataUrl,
        redacted: result.data.redacted === true,
      });
    }
    if (!images.length) {
      if (!navigator.clipboard?.writeText)
        throw new Error("Text clipboard is not supported by this browser.");
      await navigator.clipboard.writeText(markdown);
      return { imageCount: 0, markdownOnly: true };
    }
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard write is not supported by this browser.");
      await navigator.clipboard.writeText(markdown);
      return { imageCount: 0, markdownOnly: true };
    }
    const escapeHtml = (value) =>
      String(value).replace(
        /[&<>"']/g,
        (char) =>
          ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
          })[char],
      );
    const gallery = images
      .map(
        ({ id, dataUrl }, index) =>
          `<figure style="margin:16px 0"><img src="${escapeHtml(dataUrl)}" alt="Screenshot ${index + 1}" style="display:block;max-width:100%;height:auto"><figcaption>Screenshot ${index + 1}</figcaption></figure>`,
      )
      .join("");
    const html = `<div><pre style="white-space:pre-wrap;font:inherit">${escapeHtml(markdown)}</pre><hr><section><h2>Screenshots (${images.length})</h2>${gallery}</section></div>`;
    const representations = {
      "text/plain": new Blob([markdown], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" }),
    };
    // Preserve direct image paste for single-shot targets while retaining all images in the HTML representation.
    if (images.length === 1) representations["image/png"] = images[0].blob;
    await navigator.clipboard.write([new ClipboardItem(representations)]);
    return {
      imageCount: images.length,
      unredactedCount: images.filter((image) => !image.redacted).length,
      markdownOnly: false,
    };
  }
  async function writeScreenshotImageToClipboard(shotId) {
    const result = await C("screenshot.get", { id: shotId });
    if (!result.ok || !result.data?.dataUrl)
      throw new Error(
        result.message || result.error || "Screenshot is unavailable.",
      );
    const response = await fetch(result.data.dataUrl);
    if (!response.ok) throw new Error("Could not read screenshot image data.");
    let blob = await response.blob();
    if (!blob.size) throw new Error("Screenshot image is empty.");
    if (blob.type !== "image/png") {
      const bitmap = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const context = canvas.getContext("2d");
      if (!context) throw new Error("Could not prepare screenshot as PNG.");
      context.drawImage(bitmap, 0, 0);
      bitmap.close();
      blob = await new Promise((resolve, reject) =>
        canvas.toBlob(
          (png) =>
            png
              ? resolve(png)
              : reject(new Error("Could not encode screenshot as PNG.")),
          "image/png",
        ),
      );
    }
    const redacted = result.data.redacted === true;
    const filename = `pagepin-ai-screenshot-${new Date().toISOString().slice(0, 10)}-${shotId}.png`;
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined")
      throw new Error("This browser cannot copy PNG images to the clipboard.");
    if (blob.size > 40 * 1024 * 1024)
      throw new Error("Screenshot exceeds the 40 MiB clipboard size limit.");
    await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
    return { redacted, downloaded: false, filename };
  }
  function ht({ tabId: e, initialScope = "page", onScopeChange }) {
    const [t, n] = w(initialScope),
      [r, s] = w(!0),
      [i, l] = w(!0),
      [c, d] = w(!1),
      [_, p] = w(null),
      [a, u] = w(null),
      [h, g] = w(!1),
      [imageSelection, setImageSelection] = w(""),
      [imageCopying, setImageCopying] = w(!1),
      [imageCopied, setImageCopied] = w(!1),
      [plan, setPlan] = w(null),
      [planLoading, setPlanLoading] = w(!1),
      [planProgress, setPlanProgress] = w(null),
      [planError, setPlanError] = w(null),
      scopeValues = new Set(["page", "url", "domain", "all"]),
      _scopeSync = ie(() => {
        if (scopeValues.has(initialScope) && initialScope !== t) n(initialScope);
      }, [initialScope]),
      screenshotIndex = O(async () => {
        const ids =
          t !== "all"
            ? e === void 0
              ? []
              : (M(await C("annotation.list", { tabId: e, scope: t })) ?? []).flatMap(
                  (annotation) =>
                    Array.isArray(annotation.screenshotAssetIds)
                      ? annotation.screenshotAssetIds
                      : [],
                )
            : (M(
                await C("export.markdown", {
                  scope: t,
                  tabId: e,
                  includeScreenshots: !0,
                  includeConsole: !1,
                }),
              ).screenshotIds ?? []);
        return [
          ...new Set(
            (Array.isArray(ids) ? ids : []).filter(
              (id) => typeof id === "string" && id.length > 0,
            ),
          ),
        ];
      }, [t, e]),
      annotations = O(
        async () => e === void 0 ? [] : M(await C("annotation.list", { tabId: e, scope: t })),
        [e, t],
      ),
      [annotationDeleteConfirm, setAnnotationDeleteConfirm] = w(!1),
      [annotationStatus, setAnnotationStatus] = w(null),
      copyAnnotationMarkdown = async (annotation) => {
        setAnnotationStatus(null);
        try {
          const lines = [
            `## ${annotation.intent || "Annotation"} [${annotation.severity || "important"}]`,
            "",
            `- **Comment:** ${annotation.currentComment || ""}`,
            `- **URL:** ${annotation.pageUrl || ""}`,
            `- **Element:** ${annotation.elementSnapshot?.tag || "unknown"}`,
            `- **Selector:** ${annotation.locator?.css || annotation.locator?.testId || "n/a"}`,
          ];
          if (Array.isArray(annotation.screenshotAssetIds) && annotation.screenshotAssetIds.length) lines.push("", "**Screenshots:**", ...annotation.screenshotAssetIds.map((id) => `- ${id}.png`));
          await navigator.clipboard.writeText(lines.join("\n"));
          setAnnotationStatus("Annotation Markdown copied.");
        } catch (error) { setAnnotationStatus(error instanceof Error ? error.message : "Could not copy Markdown."); }
      },
      copyAnnotationImage = async (annotation) => {
        const id = Array.isArray(annotation.screenshotAssetIds) ? annotation.screenshotAssetIds[0] : null;
        if (!id) { setAnnotationStatus("This annotation has no image."); return; }
        try { await writeScreenshotImageToClipboard(id); setAnnotationStatus("Image copied to clipboard."); }
        catch (error) { reportPopupError(error, "annotation.screenshot.copy"); setAnnotationStatus(error instanceof Error ? error.message : "Could not copy image."); }
      },
      deleteAllAnnotations = async () => {
        if (!annotationDeleteConfirm) { setAnnotationDeleteConfirm(!0); return; }
        setAnnotationDeleteConfirm(!1); setAnnotationStatus(null);
        try {
          const items = annotations.value ?? [];
          for (const annotation of items) {
            const result = await C("annotation.delete", { id: annotation.id });
            if (!result.ok) throw new Error(result.message || result.error);
          }
          setAnnotationStatus(`Deleted ${items.length} annotation(s) in ${t === "domain" ? "this domain" : t === "url" ? "this URL" : "this page"}.`);
          annotations.reload();
        } catch (error) { setAnnotationStatus(error instanceof Error ? error.message : "Delete failed."); }
      },
      k = async (b) => {
        d(!0), p(null), u(null);
        try {
          const v = await C("export.markdown", {
            scope: t,
            tabId: e,
            includeScreenshots: r,
            includeConsole: i,
          });
          if (!v.ok) throw new Error(v.message || v.error);
          const { markdown: m, annotationCount: S } = v.data;
          if (b === "copy") {
            try {
              const copied = await writeReportToClipboard(
                m,
                v.data.screenshotIds,
              );
              p(
                copied.markdownOnly
                  ? `Copied ${S} annotation(s) as Markdown. This browser could not attach screenshot images.`
                  : `Copied ${S} annotation(s) as Markdown${copied.imageCount ? ` with ${copied.imageCount} screenshot image(s) in the rich clipboard. The PNG is also saved locally.` : "."}${copied.unredactedCount ? ` ${copied.unredactedCount} screenshot(s) are not marked auto-redacted; review before sharing.` : ""}`,
              );
            } catch (error) {
              reportPopupError(error, "markdown.copy");
              throw error;
            }
            g(!0), setTimeout(() => g(!1), 1600);
          } else {
            const T = new Blob([m], { type: "text/markdown" }),
              D = URL.createObjectURL(T),
              y = document.createElement("a");
            (y.href = D),
              (y.download = `pagepin-ai-${new Date().toISOString().slice(0, 10)}.md`),
              y.click(),
              setTimeout(() => URL.revokeObjectURL(D), 5e3),
              p(`Downloaded ${S} annotation(s).`);
          }
        } catch (v) {
          u(v instanceof Error ? v.message : "Export failed.");
        } finally {
          d(!1);
        }
      };
    const generatePlan = async () => {
        setPlanLoading(!0); setPlanProgress("Membaca konfigurasi AI…"); setPlanError(null); setPlan(null);
        try {
          // C() returns the transport envelope; M() unwraps its data payload.
          // Do not read providers.data here or an already-active provider is
          // incorrectly treated as missing.
          const providers = M(await C("ai.providers.list"));
          const activeState = M(await C("ai.provider.getActive"));
          const active = Array.isArray(providers) ? (providers.find((item) => item.id === activeState?.activeProviderId && item.enabled) || providers.find((item) => item.enabled && (item.hasKey || item.authMode !== "session_key"))) : null;
          if (!active) throw new Error("Sambungkan AI provider terlebih dahulu di bagian AI providers.");
          setPlanProgress("Mengumpulkan annotation…");
          const report = await C("export.markdown", { scope: "all", tabId: e, includeScreenshots: !0, includeConsole: !0 });
          if (!report.ok) throw new Error(report.message || report.error || "Could not combine annotations.");
          const reportMarkdown = report.data.markdown || "";
          const screenshotPathManifest = reportMarkdown.split("\n").filter((line) => /Screenshot (file|link|preview)|pagepin-[^`\s)]+\.png|screenshots\//i.test(line)).join("\n") || "(none)";
          const instruction = ["Create a clear implementation plan from these PagePin annotations.", "Use exactly: # Implementation Plan, ## Executive Summary, ## Goal, ## Implementation Commands, ## Findings, ## Prioritized Tasks, ## Acceptance Criteria, ## Notes, ## Source Annotations (verbatim). Summarize the full list first, then provide one concrete implementation command per annotation.", "Do not ask clarification questions. Include every numbered annotation exactly once. Under Findings preserve the original comment and all available metadata: URL, Element, Selector, Text, Bounding Box, Status, and Created. Under Prioritized Tasks reference the annotation number and exact UI location. If a comment is ambiguous, record an assumption in Notes instead of asking a question. Preserve every screenshot file path and screenshot link exactly as provided; never replace a local path with a placeholder or omit it. Include every annotation in Findings exactly once and reproduce the complete report under Source Annotations (verbatim). Return Markdown only.", "Screenshot file manifest — copy these paths and links exactly:", screenshotPathManifest, "<annotations>", reportMarkdown.slice(0, 10000), "</annotations>"].join("\n\n");
          setPlanProgress("Menghubungi AI provider…");
          const result = await C("ai.prompt.improve", { providerId: active.id, comment: instruction.slice(0, 11000), mode: "plan", contextScope: "minimal", consentCloud: active.cloud === !0 });
          if (!result.ok) throw new Error(result.message || result.error || "AI plan generation failed.");
          if (result.data?.clarification) throw new Error(`AI plan did not follow the plan contract: ${result.data.clarification}`);
          let generatedPlan = result.data?.suggestion || "";
          if (!generatedPlan) throw new Error("AI returned an empty implementation plan.");
          const sourceAnnotations = report.data.markdown || "";
          const screenshotPaths = sourceAnnotations.split("\n").filter((line) => /Screenshot (file|link|preview)|pagepin-[^`\s)]+\.png|screenshots\//i.test(line)).join("\n");
          const annotationHeadings = sourceAnnotations.split("\n").filter((line) => /^## \d+\. /.test(line));
          if (!/^## Executive Summary\b/m.test(generatedPlan)) {
            generatedPlan = `# Implementation Plan\n\n## Executive Summary\n\nThis plan summarizes ${annotationHeadings.length || report.data.annotationCount || 0} PagePin annotation(s) and the required UI work.\n\n${generatedPlan}`;
          }
          if (!/^## Implementation Commands\b/m.test(generatedPlan)) {
            generatedPlan += `\n\n## Implementation Commands\n\n${annotationHeadings.map((heading) => `- ${heading.replace(/^## /, "Implement ")}; verify the requested change at the exact UI location and against its screenshot.`).join("\n")}`;
          }
          if (!generatedPlan.includes("## Source Annotations (verbatim)")) {
            generatedPlan += `\n\n## Source Annotations (verbatim)\n\n${sourceAnnotations}`;
          }
          if (screenshotPaths && !/Screenshot file|pagepin-[^`\s)]+\.png|screenshots\//i.test(generatedPlan)) {
            generatedPlan += `\n\n## Screenshot Files (verbatim)\n\n${screenshotPaths}`;
          }
          setPlan(generatedPlan);
          if (!generatedPlan) throw new Error("AI returned an empty implementation plan.");
          setPlanProgress("Mengunduh implementation plan…");
          const filename = `pagepin-ai-implementation-plan-${new Date().toISOString().slice(0, 10)}.md`;
          const download = await C("file.download", { dataUrl: `data:text/markdown;charset=utf-8,${encodeURIComponent(generatedPlan)}`, filename });
          if (!download.ok) throw new Error(download.message || download.error || "Plan download failed.");
          p(`Plan generated and downloaded as ${filename}.`);
        } catch (error) { setPlanError(error instanceof Error ? error.message : "Plan generation failed."); setPlanProgress(null); }
        finally { setPlanLoading(!1); }
      },
      downloadPlan = async () => {
        if (!plan) return;
        try {
          const filename = `pagepin-ai-implementation-plan-${new Date().toISOString().slice(0, 10)}.md`;
          const dataUrl = `data:text/markdown;charset=utf-8,${encodeURIComponent(plan)}`;
          const result = await C("file.download", { dataUrl, filename });
          p(`Plan downloaded to ${result.data?.filename || filename}.`);
        } catch (error) { setPlanError(error instanceof Error ? error.message : "Plan download failed."); }
      };
    const screenshotIds = Array.isArray(screenshotIndex.value)
        ? screenshotIndex.value
        : [],
      currentScreenshotId = screenshotIds.includes(imageSelection)
        ? imageSelection
        : (screenshotIds[0] ?? ""),
      copySelectedScreenshot = async () => {
        if (!currentScreenshotId) return;
        setImageCopying(!0), p(null), u(null), g(!1);
        try {
          const result =
            await writeScreenshotImageToClipboard(currentScreenshotId);
          setImageCopied(!result.downloaded);
          p(
            result.downloaded
              ? `Image saved to ${result.filename}.${result.redacted ? "" : " This screenshot is not marked auto-redacted; review before sharing."}`
              : result.redacted
                ? "Copied PNG only. Paste into an app that accepts images."
                : "Copied PNG only. This screenshot is not marked auto-redacted; review before sharing.",
          );
          if (!result.downloaded) setTimeout(() => setImageCopied(!1), 1800);
        } catch (error) {
          reportPopupError(error, "screenshot.copy");
          u(error instanceof Error ? error.message : "Screenshot copy failed.");
        } finally {
          setImageCopying(!1);
        }
      };
    return o("section", {
      className: "card",
      "aria-label": "Export",
      children: [
        o("h2", { children: "Export" }),
        o("div", {
          className: "field",
          children: [
            o("label", { htmlFor: "export-scope", children: "Scope" }),
            o("select", {
              id: "export-scope",
              value: t,
              onChange: (b) => { const value = b.target.value; n(value); onScopeChange?.(value); },
              children: [
                o("option", { value: "page", children: "This page" }),
                o("option", { value: "url", children: "This URL / origin" }),
                o("option", { value: "domain", children: "This domain + subdomains" }),
                o("option", { value: "all", children: "All pages" }),
              ],
            }),
          ],
        }),
        o(W, {
          label: "Include screenshots",
          desc: "Keep local references; attach image data when copying",
          checked: r,
          onChange: s,
        }),
        o(W, {
          label: "Console context",
          desc: "Include captured console entries",
          checked: i,
          onChange: l,
        }),
        a && o("p", { className: "err", role: "alert", children: a }),
        o("div", {
          className: "row",
          style: { marginTop: 8 },
          children: [
            o("button", {
              className: "btn with-icon",
              title: "Copy Markdown and referenced screenshots together",
              disabled: c || imageCopying,
              onClick: () => void k("copy"),
              children: c
                ? "Working…"
                : h
                  ? o(I, {
                      children: [
                        o(st, { size: 18, className: "icon-pop" }),
                        " Copied!",
                      ],
                    })
                  : o(I, { children: [o(at, { size: 18 }), " Copy Markdown"] }),
            }),
            o("button", {
              className: "btn with-icon",
              disabled: c || imageCopying,
              onClick: () => void k("download"),
              children: [o(it, { size: 18 }), " Download .md"],
            }),
          ],
        }),
        _ && o("p", { className: "note", role: "status", children: _ }),
        planError && o("p", { className: "err", role: "alert", children: planError }),
        planLoading && planProgress && o("div", { className: "plan-progress", role: "status", "aria-live": "polite", children: [
          o("div", { className: "plan-progress-head", children: [o("span", { className: "button-spinner" }), o("span", { children: planProgress })] }),
          o("div", { className: "plan-progress-track", children: o("div", { className: "plan-progress-bar" }) }),
        ] }),
        plan && o("div", { className: "plan-preview", children: plan }),
        o("div", { className: "row", style: { marginTop: 8 }, children: [
          o("button", { className: "btn primary with-icon", disabled: c || planLoading, onClick: () => void (plan ? downloadPlan() : generatePlan()), children: planLoading ? "Generating plan…" : plan ? "Download plan .md" : "Generate plan with AI" }),
          plan && o("button", { className: "btn with-icon", disabled: planLoading, onClick: () => void generatePlan(), children: "Regenerate" }),
        ] }),

        o("div", { className: "export-annotations", children: [
          o("div", { className: "export-subhead", children: [
            o("h3", { children: [t === "domain" ? "Annotations on this domain " : t === "url" ? "Annotations on this URL " : "Annotations on all pages ", (annotations.value?.length ?? 0) > 0 && `(${annotations.value.length})`] }),
            o("span", { className: "export-subhead-note", children: "Click an item to copy Markdown" }),
          ] }),
          annotations.status === "loading" && o("p", { className: "skeleton", children: "Loading annotations…" }),
          annotations.status === "error" && o("p", { className: "err", role: "alert", children: annotations.error }),
          annotationStatus && o("p", { className: "note", role: "status", children: annotationStatus }),
          annotations.value && annotations.value.length === 0 && o("p", { className: "note", style: { marginTop: 0 }, children: t === "domain" ? "No annotations on this domain." : t === "url" ? "No annotations on this URL." : "No annotations." }),
          annotations.value && annotations.value.length > 0 && o("ul", { className: "ann-list", children: annotations.value.map((annotation, index) =>
            o("li", { className: "ann-row", children: o("div", {
              className: "ann-item", role: "button", tabIndex: 0,
              onClick: () => void copyAnnotationMarkdown(annotation),
              onKeyDown: (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); void copyAnnotationMarkdown(annotation); } },
              children: [
                o("span", { className: "ann-num", children: index + 1 }),
                o("span", { className: "ann-body", children: [
                  o("span", { className: "ann-meta", children: [annotation.intent, " · ", annotation.severity, annotation.status === "unresolved_target" && " · target lost"] }),
                  o("span", { className: "ann-comment", children: annotation.currentComment }),
                ] }),
                Array.isArray(annotation.screenshotAssetIds) && annotation.screenshotAssetIds.length > 0 && o("span", { className: "ann-tools", children: o("button", { type: "button", className: "ann-image-btn", title: "Copy annotation image as PNG", onClick: (event) => { event.stopPropagation(); void copyAnnotationImage(annotation); }, children: o(at, { size: 16 }) }) }),
              ],
            }) }, annotation.id),
          ) }),
          annotations.value && annotations.value.length > 0 && o("button", { className: `btn ${annotationDeleteConfirm ? "danger" : ""}`, onClick: () => void deleteAllAnnotations(), children: annotationDeleteConfirm ? "Confirm delete all?" : t === "domain" ? "Delete all on domain" : t === "url" ? "Delete all on URL" : "Delete all" }),
        ] }),
      ],
    });
  }
  function mt() {
    const [status, setStatus] = w(null),
      logs = O(async () => M(await C("error-log.list")), []),
      entries = Array.isArray(logs.value?.entries) ? logs.value.entries : [],
      copyLogs = async () => {
        setStatus(null);
        try {
          if (!entries.length) return;
          await navigator.clipboard.writeText(JSON.stringify(entries, null, 2));
          setStatus(`Copied ${entries.length} error log(s).`);
        } catch (error) {
          reportPopupError(error, "error-log.copy");
          setStatus(
            error instanceof Error
              ? error.message
              : "Could not copy error logs.",
          );
        }
      };
    ie(() => {
      const onStorage = (changes, area) => {
        if (area === "local" && changes["vft.errorLogs"]) logs.reload();
      };
      chrome.storage.onChanged.addListener(onStorage);
      return () => chrome.storage.onChanged.removeListener(onStorage);
    }, []);
    return o("section", {
      className: "card",
      "aria-label": "Extension errors",
      children: [
        o("div", {
          className: "head",
          children: [
            o("h2", {
              children: [
                "Extension errors",
                entries.length > 0 && ` (${entries.length})`,
              ],
            }),
          ],
        }),
        logs.status === "loading" &&
          o("p", { className: "skeleton", children: "Checking errors…" }),
        logs.status === "error" &&
          o("p", { className: "err", role: "alert", children: logs.error }),
        entries.length === 0
          ? o("p", {
              className: "note",
              style: { marginTop: 0 },
              children: "No extension errors recorded.",
            })
          : o("ol", {
              className: "error-log-list",
              children: entries
                .slice(-5)
                .reverse()
                .map((entry) =>
                  o(
                    "li",
                    {
                      className: "error-log-item",
                      children: [
                        o("span", {
                          className: "error-log-meta",
                          children: `${entry.source} · ${entry.operation || "runtime"} · ${entry.at}`,
                        }),
                        o("span", {
                          className: "error-log-message",
                          children: entry.message,
                        }),
                      ],
                    },
                    entry.id,
                  ),
                ),
            }),
        status &&
          o("p", { className: "note", role: "status", children: status }),
        o("button", {
          className: "btn block with-icon",
          disabled: entries.length === 0,
          onClick: () => void copyLogs(),
          children: [o(at, { size: 16 }), "Copy error logs"],
        }),
      ],
    });
  }
  const Re = document.getElementById("popup-root");
  Re && ze(o(lt, {}), Re);
})();
