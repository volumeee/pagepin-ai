(function () {
  "use strict";
  var j,
    g,
    At,
    L,
    Nt,
    Tt,
    It,
    Rt,
    at,
    st,
    lt,
    z = {},
    Lt = [],
    ge = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    V = Array.isArray;
  function N(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function ct(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function X(e, t, n) {
    var i,
      o,
      r,
      a = {};
    for (r in t)
      r == "key" ? (i = t[r]) : r == "ref" ? (o = t[r]) : (a[r] = t[r]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? j.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (r in e.defaultProps) a[r] === void 0 && (a[r] = e.defaultProps[r]);
    return K(e, a, i, o, null);
  }
  function K(e, t, n, i, o) {
    var r = {
      type: e,
      props: t,
      key: n,
      ref: i,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: o ?? ++At,
      __i: -1,
      __u: 0,
    };
    return o == null && g.vnode != null && g.vnode(r), r;
  }
  function U(e) {
    return e.children;
  }
  function Y(e, t) {
    (this.props = e), (this.context = t);
  }
  function $(e, t) {
    if (t == null) return e.__ ? $(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? $(e) : null;
  }
  function Mt(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return Mt(e);
    }
  }
  function Dt(e) {
    ((!e.__d && (e.__d = !0) && L.push(e) && !Z.__r++) ||
      Nt != g.debounceRendering) &&
      ((Nt = g.debounceRendering) || Tt)(Z);
  }
  function Z() {
    for (var e, t, n, i, o, r, a, d = 1; L.length; )
      L.length > d && L.sort(It),
        (e = L.shift()),
        (d = L.length),
        e.__d &&
          ((n = void 0),
          (o = (i = (t = e).__v).__e),
          (r = []),
          (a = []),
          t.__P &&
            (((n = N({}, i)).__v = i.__v + 1),
            g.vnode && g.vnode(n),
            dt(
              t.__P,
              n,
              i,
              t.__n,
              t.__P.namespaceURI,
              32 & i.__u ? [o] : null,
              r,
              o ?? $(i),
              !!(32 & i.__u),
              a,
            ),
            (n.__v = i.__v),
            (n.__.__k[n.__i] = n),
            Ut(r, n, a),
            n.__e != o && Mt(n)));
    Z.__r = 0;
  }
  function $t(e, t, n, i, o, r, a, d, c, h, p) {
    var s,
      m,
      u,
      b,
      k,
      x,
      v = (i && i.__k) || Lt,
      f = t.length;
    for (c = _e(n, t, v, c, f), s = 0; s < f; s++)
      (u = n.__k[s]) != null &&
        ((m = u.__i == -1 ? z : v[u.__i] || z),
        (u.__i = s),
        (x = dt(e, u, m, o, r, a, d, c, h, p)),
        (b = u.__e),
        u.ref &&
          m.ref != u.ref &&
          (m.ref && ht(m.ref, null, u), p.push(u.ref, u.__c || b, u)),
        k == null && b != null && (k = b),
        4 & u.__u || m.__k === u.__k
          ? (c = Ht(u, c, e))
          : typeof u.type == "function" && x !== void 0
            ? (c = x)
            : b && (c = b.nextSibling),
        (u.__u &= -7));
    return (n.__e = k), c;
  }
  function _e(e, t, n, i, o) {
    var r,
      a,
      d,
      c,
      h,
      p = n.length,
      s = p,
      m = 0;
    for (e.__k = new Array(o), r = 0; r < o; r++)
      (a = t[r]) != null && typeof a != "boolean" && typeof a != "function"
        ? ((c = r + m),
          ((a = e.__k[r] =
            typeof a == "string" ||
            typeof a == "number" ||
            typeof a == "bigint" ||
            a.constructor == String
              ? K(null, a, null, null, null)
              : V(a)
                ? K(U, { children: a }, null, null, null)
                : a.constructor == null && a.__b > 0
                  ? K(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
                  : a).__ = e),
          (a.__b = e.__b + 1),
          (d = null),
          (h = a.__i = be(a, n, c, s)) != -1 &&
            (s--, (d = n[h]) && (d.__u |= 2)),
          d == null || d.__v == null
            ? (h == -1 && (o > p ? m-- : o < p && m++),
              typeof a.type != "function" && (a.__u |= 4))
            : h != c &&
              (h == c - 1
                ? m--
                : h == c + 1
                  ? m++
                  : (h > c ? m-- : m++, (a.__u |= 4))))
        : (e.__k[r] = null);
    if (s)
      for (r = 0; r < p; r++)
        (d = n[r]) != null &&
          (2 & d.__u) == 0 &&
          (d.__e == i && (i = $(d)), Bt(d, d));
    return i;
  }
  function Ht(e, t, n) {
    var i, o;
    if (typeof e.type == "function") {
      for (i = e.__k, o = 0; i && o < i.length; o++)
        i[o] && ((i[o].__ = e), (t = Ht(i[o], t, n)));
      return t;
    }
    e.__e != t &&
      (t && e.type && !n.contains(t) && (t = $(e)),
      n.insertBefore(e.__e, t || null),
      (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function be(e, t, n, i) {
    var o,
      r,
      a = e.key,
      d = e.type,
      c = t[n];
    if (
      (c === null && e.key == null) ||
      (c && a == c.key && d == c.type && (2 & c.__u) == 0)
    )
      return n;
    if (i > (c != null && (2 & c.__u) == 0 ? 1 : 0))
      for (o = n - 1, r = n + 1; o >= 0 || r < t.length; ) {
        if (o >= 0) {
          if ((c = t[o]) && (2 & c.__u) == 0 && a == c.key && d == c.type)
            return o;
          o--;
        }
        if (r < t.length) {
          if ((c = t[r]) && (2 & c.__u) == 0 && a == c.key && d == c.type)
            return r;
          r++;
        }
      }
    return -1;
  }
  function Pt(e, t, n) {
    t[0] == "-"
      ? e.setProperty(t, n ?? "")
      : (e[t] =
          n == null ? "" : typeof n != "number" || ge.test(t) ? n : n + "px");
  }
  function G(e, t, n, i, o) {
    var r, a;
    t: if (t == "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof i == "string" && (e.style.cssText = i = ""), i))
          for (t in i) (n && t in n) || Pt(e.style, t, "");
        if (n) for (t in n) (i && n[t] == i[t]) || Pt(e.style, t, n[t]);
      }
    else if (t[0] == "o" && t[1] == "n")
      (r = t != (t = t.replace(Rt, "$1"))),
        (a = t.toLowerCase()),
        (t =
          a in e || t == "onFocusOut" || t == "onFocusIn"
            ? a.slice(2)
            : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + r] = n),
        n
          ? i
            ? (n.u = i.u)
            : ((n.u = at), e.addEventListener(t, r ? lt : st, r))
          : e.removeEventListener(t, r ? lt : st, r);
    else {
      if (o == "http://www.w3.org/2000/svg")
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
          break t;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t[4] != "-")
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
    }
  }
  function zt(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = at++;
        else if (t.t < n.u) return;
        return n(g.event ? g.event(t) : t);
      }
    };
  }
  function dt(e, t, n, i, o, r, a, d, c, h) {
    var p,
      s,
      m,
      u,
      b,
      k,
      x,
      v,
      f,
      S,
      C,
      D,
      R,
      ot,
      rt,
      W,
      St,
      A = t.type;
    if (t.constructor != null) return null;
    128 & n.__u && ((c = !!(32 & n.__u)), (r = [(d = t.__e = n.__e)])),
      (p = g.__b) && p(t);
    t: if (typeof A == "function")
      try {
        if (
          ((v = t.props),
          (f = "prototype" in A && A.prototype.render),
          (S = (p = A.contextType) && i[p.__c]),
          (C = p ? (S ? S.props.value : p.__) : i),
          n.__c
            ? (x = (s = t.__c = n.__c).__ = s.__E)
            : (f
                ? (t.__c = s = new A(v, C))
                : ((t.__c = s = new Y(v, C)),
                  (s.constructor = A),
                  (s.render = ye)),
              S && S.sub(s),
              (s.props = v),
              s.state || (s.state = {}),
              (s.context = C),
              (s.__n = i),
              (m = s.__d = !0),
              (s.__h = []),
              (s._sb = [])),
          f && s.__s == null && (s.__s = s.state),
          f &&
            A.getDerivedStateFromProps != null &&
            (s.__s == s.state && (s.__s = N({}, s.__s)),
            N(s.__s, A.getDerivedStateFromProps(v, s.__s))),
          (u = s.props),
          (b = s.state),
          (s.__v = t),
          m)
        )
          f &&
            A.getDerivedStateFromProps == null &&
            s.componentWillMount != null &&
            s.componentWillMount(),
            f && s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (
            (f &&
              A.getDerivedStateFromProps == null &&
              v !== u &&
              s.componentWillReceiveProps != null &&
              s.componentWillReceiveProps(v, C),
            (!s.__e &&
              s.shouldComponentUpdate != null &&
              s.shouldComponentUpdate(v, s.__s, C) === !1) ||
              t.__v == n.__v)
          ) {
            for (
              t.__v != n.__v &&
                ((s.props = v), (s.state = s.__s), (s.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (q) {
                  q && (q.__ = t);
                }),
                D = 0;
              D < s._sb.length;
              D++
            )
              s.__h.push(s._sb[D]);
            (s._sb = []), s.__h.length && a.push(s);
            break t;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(v, s.__s, C),
            f &&
              s.componentDidUpdate != null &&
              s.__h.push(function () {
                s.componentDidUpdate(u, b, k);
              });
        }
        if (
          ((s.context = C),
          (s.props = v),
          (s.__P = e),
          (s.__e = !1),
          (R = g.__r),
          (ot = 0),
          f)
        ) {
          for (
            s.state = s.__s,
              s.__d = !1,
              R && R(t),
              p = s.render(s.props, s.state, s.context),
              rt = 0;
            rt < s._sb.length;
            rt++
          )
            s.__h.push(s._sb[rt]);
          s._sb = [];
        } else
          do
            (s.__d = !1),
              R && R(t),
              (p = s.render(s.props, s.state, s.context)),
              (s.state = s.__s);
          while (s.__d && ++ot < 25);
        (s.state = s.__s),
          s.getChildContext != null && (i = N(N({}, i), s.getChildContext())),
          f &&
            !m &&
            s.getSnapshotBeforeUpdate != null &&
            (k = s.getSnapshotBeforeUpdate(u, b)),
          (W = p),
          p != null &&
            p.type === U &&
            p.key == null &&
            (W = Ot(p.props.children)),
          (d = $t(e, V(W) ? W : [W], t, n, i, o, r, a, d, c, h)),
          (s.base = t.__e),
          (t.__u &= -161),
          s.__h.length && a.push(s),
          x && (s.__E = s.__ = null);
      } catch (q) {
        if (((t.__v = null), c || r != null))
          if (q.then) {
            for (
              t.__u |= c ? 160 : 128;
              d && d.nodeType == 8 && d.nextSibling;

            )
              d = d.nextSibling;
            (r[r.indexOf(d)] = null), (t.__e = d);
          } else for (St = r.length; St--; ) ct(r[St]);
        else (t.__e = n.__e), (t.__k = n.__k);
        g.__e(q, t, n);
      }
    else
      r == null && t.__v == n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (d = t.__e = we(n.__e, t, n, i, o, r, a, c, h));
    return (p = g.diffed) && p(t), 128 & t.__u ? void 0 : d;
  }
  function Ut(e, t, n) {
    for (var i = 0; i < n.length; i++) ht(n[i], n[++i], n[++i]);
    g.__c && g.__c(t, e),
      e.some(function (o) {
        try {
          (e = o.__h),
            (o.__h = []),
            e.some(function (r) {
              r.call(o);
            });
        } catch (r) {
          g.__e(r, o.__v);
        }
      });
  }
  function Ot(e) {
    return typeof e != "object" || e == null || (e.__b && e.__b > 0)
      ? e
      : V(e)
        ? e.map(Ot)
        : N({}, e);
  }
  function we(e, t, n, i, o, r, a, d, c) {
    var h,
      p,
      s,
      m,
      u,
      b,
      k,
      x = n.props,
      v = t.props,
      f = t.type;
    if (
      (f == "svg"
        ? (o = "http://www.w3.org/2000/svg")
        : f == "math"
          ? (o = "http://www.w3.org/1998/Math/MathML")
          : o || (o = "http://www.w3.org/1999/xhtml"),
      r != null)
    ) {
      for (h = 0; h < r.length; h++)
        if (
          (u = r[h]) &&
          "setAttribute" in u == !!f &&
          (f ? u.localName == f : u.nodeType == 3)
        ) {
          (e = u), (r[h] = null);
          break;
        }
    }
    if (e == null) {
      if (f == null) return document.createTextNode(v);
      (e = document.createElementNS(o, f, v.is && v)),
        d && (g.__m && g.__m(t, r), (d = !1)),
        (r = null);
    }
    if (f == null) x === v || (d && e.data == v) || (e.data = v);
    else {
      if (
        ((r = r && j.call(e.childNodes)), (x = n.props || z), !d && r != null)
      )
        for (x = {}, h = 0; h < e.attributes.length; h++)
          x[(u = e.attributes[h]).name] = u.value;
      for (h in x)
        if (((u = x[h]), h != "children")) {
          if (h == "dangerouslySetInnerHTML") s = u;
          else if (!(h in v)) {
            if (
              (h == "value" && "defaultValue" in v) ||
              (h == "checked" && "defaultChecked" in v)
            )
              continue;
            G(e, h, null, u, o);
          }
        }
      for (h in v)
        (u = v[h]),
          h == "children"
            ? (m = u)
            : h == "dangerouslySetInnerHTML"
              ? (p = u)
              : h == "value"
                ? (b = u)
                : h == "checked"
                  ? (k = u)
                  : (d && typeof u != "function") ||
                    x[h] === u ||
                    G(e, h, u, x[h], o);
      if (p)
        d ||
          (s && (p.__html == s.__html || p.__html == e.innerHTML)) ||
          (e.innerHTML = p.__html),
          (t.__k = []);
      else if (
        (s && (e.innerHTML = ""),
        $t(
          t.type == "template" ? e.content : e,
          V(m) ? m : [m],
          t,
          n,
          i,
          f == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o,
          r,
          a,
          r ? r[0] : n.__k && $(n, 0),
          d,
          c,
        ),
        r != null)
      )
        for (h = r.length; h--; ) ct(r[h]);
      d ||
        ((h = "value"),
        f == "progress" && b == null
          ? e.removeAttribute("value")
          : b != null &&
            (b !== e[h] ||
              (f == "progress" && !b) ||
              (f == "option" && b != x[h])) &&
            G(e, h, b, x[h], o),
        (h = "checked"),
        k != null && k != e[h] && G(e, h, k, x[h], o));
    }
    return e;
  }
  function ht(e, t, n) {
    try {
      if (typeof e == "function") {
        var i = typeof e.__u == "function";
        i && e.__u(), (i && t == null) || (e.__u = e(t));
      } else e.current = t;
    } catch (o) {
      g.__e(o, n);
    }
  }
  function Bt(e, t, n) {
    var i, o;
    if (
      (g.unmount && g.unmount(e),
      (i = e.ref) && ((i.current && i.current != e.__e) || ht(i, null, t)),
      (i = e.__c) != null)
    ) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (r) {
          g.__e(r, t);
        }
      i.base = i.__P = null;
    }
    if ((i = e.__k))
      for (o = 0; o < i.length; o++)
        i[o] && Bt(i[o], t, n || typeof e.type != "function");
    n || ct(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function ye(e, t, n) {
    return this.constructor(e, n);
  }
  function H(e, t, n) {
    var i, o, r, a;
    t == document && (t = document.documentElement),
      g.__ && g.__(e, t),
      (o = (i = !1) ? null : t.__k),
      (r = []),
      (a = []),
      dt(
        t,
        (e = t.__k = X(U, null, [e])),
        o || z,
        z,
        t.namespaceURI,
        o ? null : t.firstChild ? j.call(t.childNodes) : null,
        r,
        o ? o.__e : t.firstChild,
        i,
        a,
      ),
      Ut(r, e, a);
  }
  (j = Lt.slice),
    (g = {
      __e: function (e, t, n, i) {
        for (var o, r, a; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((r = o.constructor) &&
                  r.getDerivedStateFromError != null &&
                  (o.setState(r.getDerivedStateFromError(e)), (a = o.__d)),
                o.componentDidCatch != null &&
                  (o.componentDidCatch(e, i || {}), (a = o.__d)),
                a)
              )
                return (o.__E = o);
            } catch (d) {
              e = d;
            }
        throw e;
      },
    }),
    (At = 0),
    (Y.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s != this.state
          ? this.__s
          : (this.__s = N({}, this.state))),
        typeof e == "function" && (e = e(N({}, n), this.props)),
        e && N(n, e),
        e != null && this.__v && (t && this._sb.push(t), Dt(this));
    }),
    (Y.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Dt(this));
    }),
    (Y.prototype.render = U),
    (L = []),
    (Tt =
      typeof Promise == "function"
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (It = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (Z.__r = 0),
    (Rt = /(PointerCapture)$|Capture$/i),
    (at = 0),
    (st = zt(!1)),
    (lt = zt(!0));
  const xe = `
:host {
  all: initial;
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 13px;
  line-height: 1.45;
  color: #e8e8ee;
  --vft-bg: #17171c;
  --vft-surface: #202028;
  --vft-raised: #282832;
  --vft-text: #e8e8ee;
  --vft-muted: #a1a1b3;
  --vft-border: #373743;
  --vft-accent: #6366f1;
  --vft-accent-strong: #4f46e5;
  --vft-success: #34d399;
  --vft-danger: #f87171;
  --vft-radius-card: 12px;
  --vft-radius-control: 8px;
  --vft-radius-compact: 6px;
  --vft-radius-pill: 999px;
  --vft-ease: cubic-bezier(.2,.7,.2,1);
  --vft-spring: cubic-bezier(.2,.9,.3,1.15);
  --vft-fast: 140ms;
  --vft-normal: 190ms;
}
.vft-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  box-sizing: border-box;
  max-width: calc(100vw - 24px);
  background: #202028;
  border: 1px solid #33333e;
  border-radius: var(--vft-radius-card);
  padding: 6px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
  user-select: none;
  -webkit-user-select: none;
  animation: vft-panel-in 180ms var(--vft-ease) both;
  transition: border-radius var(--vft-normal) var(--vft-ease), box-shadow var(--vft-normal) ease, transform var(--vft-normal) var(--vft-spring);
}
.vft-toolbar.minimized {
  padding: 6px;
  border-radius: var(--vft-radius-pill);
}
.vft-icon {
  display: block;
  flex: none;
  width: 18px;
  height: 18px;
}
.vft-btn {
  appearance: none;
  border: 1px solid transparent;
  background: transparent;
  color: #e8e8ee;
  border-radius: 8px;
  min-width: 36px;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font: inherit;
  padding: 0 8px;
  transition: background-color var(--vft-fast) ease, border-color var(--vft-fast) ease, color var(--vft-fast) ease, transform var(--vft-fast) var(--vft-spring), box-shadow var(--vft-fast) ease;
}
.vft-btn:hover {
  background: #2c2c36;
  transform: translateY(-1px);
}
.vft-btn:active:not(:disabled) { transform: scale(.96); }
.vft-btn:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 1px;
}
.vft-btn.primary {
  background: #4f46e5;
  color: #fff;
  font-weight: 600;
}
.vft-btn.primary:hover {
  background: #6366f1;
  box-shadow: 0 3px 12px rgba(79,70,229,.28);
}
.vft-btn.is-active { box-shadow: 0 0 0 2px rgba(129,140,248,.35), 0 0 18px rgba(99,102,241,.42); }
.vft-btn.is-busy { pointer-events: none; }
.vft-btn.is-done { color: #bbf7d0; border-color: rgba(74,222,128,.5); }
.vft-toolbar .vft-active-dot { width: 7px; height: 7px; margin-left: 4px; border-radius: 50%; background: #86efac; box-shadow: 0 0 0 0 rgba(134,239,172,.75); animation: vft-dot-pulse 1.5s ease-out infinite; }
.vft-toolbar .vft-spin { animation: vft-spin .8s linear infinite; }
@keyframes vft-dot-pulse { 0% { box-shadow: 0 0 0 0 rgba(134,239,172,.75); } 70% { box-shadow: 0 0 0 7px rgba(134,239,172,0); } 100% { box-shadow: 0 0 0 0 rgba(134,239,172,0); } }
@keyframes vft-spin { to { transform: rotate(360deg); } }
.vft-btn:disabled {
  opacity: 0.45;
  cursor: default;
}
.vft-drag {
  cursor: grab;
  color: #a1a1b3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  min-height: 36px;
  border-radius: 8px;
  touch-action: none;
  transition: color var(--vft-fast) ease, background-color var(--vft-fast) ease;
}
.vft-drag:hover { color: #e8e8ee; background: #2c2c36; }
.vft-drag:active {
  cursor: grabbing;
}
.vft-count {
  min-width: 22px;
  height: 22px;
  border-radius: 999px;
  background: #4f46e5;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
}
.vft-dot {
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background: #4f46e5;
  border: 2px solid #fff;
}
.vft-sep {
  width: 1px;
  align-self: stretch;
  background: #33333e;
  margin: 4px 2px;
}
/* Picker highlight (S2) — rendered in the same shadow root, pointer-transparent. */
.vft-highlight {
  position: fixed;
  border: 2px solid #6366f1;
  border-radius: var(--vft-radius-compact);
  background: rgba(99, 102, 241, 0.12);
  pointer-events: none;
  z-index: 1;
  animation: vft-highlight-in 140ms var(--vft-ease) both;
  transition: top 90ms ease, left 90ms ease, width 90ms ease, height 90ms ease;
}
.vft-tooltip {
  position: fixed;
  background: #17171c;
  border: 1px solid #33333e;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  color: #e8e8ee;
  pointer-events: none;
  z-index: 2;
  max-width: 320px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vft-tooltip .vft-tt-tag {
  font-weight: 700;
  color: #a5b4fc;
}
.vft-tooltip .vft-tt-dim {
  color: #a1a1b3;
  margin-left: 8px;
}
.vft-tooltip .vft-tt-hint {
  display: block;
  color: #a1a1b3;
  font-size: 11px;
  margin-top: 2px;
}
.vft-copy-feedback {
  position: fixed;
  z-index: 5;
  box-sizing: border-box;
  max-width: min(320px, calc(100vw - 16px));
  padding: 9px 12px;
  border: 1px solid #3e3e4a;
  border-radius: 10px;
  background: #1d1d24;
  color: #f3f4f6;
  font-size: 12px;
  line-height: 1.4;
  box-shadow: 0 8px 24px rgba(0,0,0,.36);
  animation: vft-panel-in 160ms var(--vft-spring) both;
}
.vft-copy-feedback[data-kind="error"] {
  border-color: rgba(248,113,113,.55);
  color: #fecaca;
}
/* Marker badges (S2-04) — numbered, clickable, shadow-scoped. */
.vft-markers {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 2147483646;
}
.vft-marker {
  position: fixed;
  width: 28px;
  height: 28px;
  border-radius: 9px;
  border: 2px solid #a5b4fc;
  background: #4f46e5;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  z-index: 2147483647;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition: background-color var(--vft-fast) ease, border-color var(--vft-fast) ease, transform var(--vft-fast) var(--vft-spring), box-shadow var(--vft-fast) ease;
  animation: vft-marker-in 180ms var(--vft-spring) both;
}
.vft-marker.is-edge {
  background: #312e81;
  border-style: dashed;
  opacity: .92;
}
.vft-marker:hover {
  background: #6366f1;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 5px 14px rgba(0,0,0,.4);
}
.vft-marker:active { transform: scale(.94); }
.vft-marker:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
@keyframes vft-panel-in { from { opacity: 0; transform: translateY(4px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }
@keyframes vft-highlight-in { from { opacity: .45; } to { opacity: 1; } }
@keyframes vft-marker-in { from { opacity: 0; transform: scale(.75); } to { opacity: 1; transform: scale(1); } }
`;
  var ke = 0;
  function l(e, t, n, i, o, r) {
    t || (t = {});
    var a,
      d,
      c = t;
    if ("ref" in c)
      for (d in ((c = {}), t)) d == "ref" ? (a = t[d]) : (c[d] = t[d]);
    var h = {
      type: e,
      props: c,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --ke,
      __i: -1,
      __u: 0,
      __source: o,
      __self: r,
    };
    if (typeof e == "function" && (a = e.defaultProps))
      for (d in a) c[d] === void 0 && (c[d] = a[d]);
    return g.vnode && g.vnode(h), h;
  }
  const ut = {
    annotate: { title: "Annotate (pick an element) [Ctrl+Shift+Y]" },
    copy: { title: "Copy report as Markdown + screenshots [Alt+Shift+M]" },
    copyImage: { title: "Copy all screenshot images in the selected scope [Alt+Shift+I]" },
    plan: { title: "Generate and download AI implementation plan" },
    console: { title: "Copy console logs as Markdown [Alt+Shift+K]" },
    clear: { title: "Delete all annotations on this page [X]" },
    more: { title: "More" },
  };
  function toolbarIcon(name) {
    const shapes = {
      annotate: [
        l("path", { d: "M12 20h9" }),
        l("path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4Z" }),
      ],
      copy: [
        l("rect", { x: "8", y: "8", width: "13", height: "13", rx: "2" }),
        l("path", {
          d: "M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3",
        }),
      ],
      copyImage: [
        l("rect", { x: "3", y: "4", width: "18", height: "16", rx: "2" }),
        l("circle", { cx: "8.5", cy: "9", r: "1.5" }),
        l("path", { d: "m21 15-5-5L5 20" }),
      ],
      plan: [
        l("path", { d: "m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" }),
        l("path", { d: "M19 16v5M16.5 18.5h5" }),
      ],
      console: [l("path", { d: "m4 7 5 5-5 5" }), l("path", { d: "M12 17h8" })],
      clear: [
        l("path", { d: "M3 6h18" }),
        l("path", { d: "m19 6-1 14H6L5 6" }),
        l("path", { d: "M10 11v5M14 11v5" }),
        l("path", { d: "M9 6V4h6v2" }),
      ],
      check: [l("path", { d: "m5 12 4 4L19 6" })],
      loading: [l("path", { d: "M12 3a9 9 0 1 0 9 9" })],
      more: [
        l("circle", { cx: "5", cy: "12", r: "1" }),
        l("circle", { cx: "12", cy: "12", r: "1" }),
        l("circle", { cx: "19", cy: "12", r: "1" }),
      ],
      minimize: [l("path", { d: "M5 12h14" })],
      drag: [
        l("circle", { cx: "8", cy: "6", r: "1" }),
        l("circle", { cx: "16", cy: "6", r: "1" }),
        l("circle", { cx: "8", cy: "12", r: "1" }),
        l("circle", { cx: "16", cy: "12", r: "1" }),
        l("circle", { cx: "8", cy: "18", r: "1" }),
        l("circle", { cx: "16", cy: "18", r: "1" }),
      ],
    };
    return l("svg", {
      className: `vft-icon${name === "loading" ? " vft-spin" : ""}`,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      focusable: "false",
      children: shapes[name] || shapes.more,
    });
  }
  function Ce(e) {
    return e.minimized
      ? l("div", {
          className: "vft-toolbar minimized",
          "data-vft": "toolbar",
          children: l("button", {
            className: "vft-btn",
            title: "Restore toolbar",
            "aria-label": "Restore toolbar",
            onClick: e.onRestore,
            children: [
              l("span", { className: "vft-dot", "aria-hidden": "true" }),
              e.count > 0 &&
                l("span", {
                  className: "vft-count",
                  "aria-label": `${e.count} annotations`,
                  children: e.count,
                }),
            ],
          }),
        })
      : l("div", {
          className: "vft-toolbar",
          "data-vft": "toolbar",
          role: "toolbar",
          "aria-label": "PagePin AI",
          children: [
            l("span", {
              className: "vft-drag",
              title: "Drag to move",
              "aria-label": "Drag to move toolbar",
              ...e.dragHandleProps,
              children: toolbarIcon("drag"),
            }),
            e.actions.map((t) => {
              const busy = e.busyAction === t;
              const done = e.completedAction === t;
              const active = t === "annotate" && e.annotationActive;
              const progress = busy && t === "plan" ? (e.actionProgress || "Generating plan…") : null;
              return l("button", {
                className: `vft-btn${t === "annotate" ? " primary" : ""}${active ? " is-active" : ""}${busy ? " is-busy" : ""}${done ? " is-done" : ""}`,
                title: busy ? (progress || "Working…") : done ? (t === "plan" ? "Downloaded" : "Copied") : ut[t].title,
                "aria-label": busy ? `${ut[t].title} — ${progress || "working"}` : done ? `${ut[t].title} — ${t === "plan" ? "downloaded" : "copied"}` : ut[t].title,
                onClick: () => e.onAction(t),
                children: [busy ? toolbarIcon("loading") : done ? toolbarIcon("check") : toolbarIcon(t), active && l("span", { className: "vft-active-dot", "aria-label": "Annotation mode active" })],
              }, t);
            }),
            e.actions.length > 0 &&
              l("span", { className: "vft-sep", "aria-hidden": "true" }),
            l("span", {
              className: "vft-count",
              title: "Annotations on this page",
              "aria-label": `${e.count} annotations`,
              children: e.count,
            }),
            l("button", {
              className: "vft-btn",
              title: "Minimize toolbar",
              "aria-label": "Minimize toolbar",
              onClick: e.onMinimize,
              children: toolbarIcon("minimize"),
            }),
          ],
        });
  }
  const Ft = "vft-root",
    T = 12,
    Ee = 2147483647;
  class ft {
    host = null;
    shadow = null;
    markerHost = null;
    minimized = !1;
    count = 0;
    actions;
    onAction;
    pos = null;
    dragging = !1;
    dragOffset = { x: 0, y: 0 };
    rafId = 0;
    pendingPos = null;
    onResize = () => this.clampToViewport();
    onTeardown = () => this.destroy();
    destroyed = !1;
    hidden = !1;
    listenersBound = !1;
    annotationActive = !1;
    busyAction = null;
    completedAction = null;
    actionProgress = null;
    constructor(t = {}) {
      (this.count = t.initialCount ?? 0),
        (this.actions = t.actions ?? []),
        (this.onAction = t.onAction ?? (() => {}));
    }
    mount() {
      if (this.destroyed) return null;
      let t = document.getElementById(Ft);
      if (!t || !t.isConnected) {
        t = document.createElement("div");
        t.id = Ft;
        t.setAttribute("data-vft", "overlay");
        (document.body ?? document.documentElement).appendChild(t);
      }
      if (this.host !== t) {
        this.host = t;
        this.shadow = null;
      }
      this.applyHostStyles();
      this.host.style.display = this.hidden ? "none" : "";
      if (!this.shadow) {
        this.shadow = this.host.attachShadow({ mode: "open" });
        const n = document.createElement("style");
        (n.textContent = xe), this.shadow.appendChild(n);
        const i = document.createElement("div");
        i.setAttribute("data-vft", "toolbar-mount");
        this.shadow.appendChild(i);
        this.renderInto(i);
      }
      if (!this.listenersBound) {
        window.addEventListener("resize", this.onResize);
        window.addEventListener("vft:teardown", this.onTeardown);
        this.listenersBound = !0;
      }
      this.clampToViewport();
      return this.host;
    }
    applyHostStyles() {
      if (!this.host) return;
      const t = this.host.style;
      t.setProperty("position", "fixed", "important"),
        t.setProperty("z-index", String(Ee), "important"),
        t.setProperty("margin", "0", "important"),
        t.setProperty("padding", "0", "important"),
        t.setProperty("overflow", "visible", "important"),
        (t.width = "auto"),
        (t.height = "auto"),
        (t.pointerEvents = "auto"),
        this.pos
          ? ((t.left = `${this.pos.x}px`),
            (t.top = `${this.pos.y}px`),
            (t.right = "auto"),
            (t.bottom = "auto"))
          : ((t.left = "auto"),
            (t.top = "auto"),
            (t.right = `${T}px`),
            (t.bottom = `${T}px`));
    }
    renderInto(t) {
      H(
        X(Ce, {
          minimized: this.minimized,
          count: this.count,
          actions: this.actions,
          annotationActive: this.annotationActive,
          busyAction: this.busyAction,
          completedAction: this.completedAction,
          actionProgress: this.actionProgress,
          onAction: (n) => this.onAction(n),
          onMinimize: () => this.setMinimized(!0),
          onRestore: () => this.setMinimized(!1),
          dragHandleProps: { onPointerDown: (n) => this.startDrag(n) },
        }),
        t,
      );
    }
    rerender() {
      const t = this.shadow?.querySelector('[data-vft="toolbar-mount"]');
      t && this.renderInto(t);
    }
    setMinimized(t) {
      this.minimized !== t &&
        ((this.minimized = t), this.rerender(), this.clampToViewport());
    }
    isMinimized() {
      return this.minimized;
    }
    setCount(t) {
      this.count !== t && ((this.count = t), this.rerender());
    }
    setAnnotationActive(t) { this.annotationActive !== t && ((this.annotationActive = t), this.rerender()); }
    setActionState(t, n = null, r = !1, progress = null) {
      this.busyAction = n;
      this.actionProgress = n ? progress : null;
      this.completedAction = r ? t : null;
      this.rerender();
      if (r) setTimeout(() => { if (this.completedAction === t) { this.completedAction = null; this.rerender(); } }, 1400);
    }
    setHidden(t) {
      this.hidden = !!t;
      if (this.host && this.host.isConnected) {
        this.host.style.display = this.hidden ? "none" : "";
        if (!this.hidden) this.rerender();
      } else if (!this.hidden && !this.destroyed) {
        this.mount();
      }
    }
    showHighlight(t, n) {
      if (!this.shadow || this.destroyed) return;
      let i = this.shadow.querySelector('[data-vft="highlight"]');
      if (!i) {
        (i = document.createElement("div")),
          i.setAttribute("data-vft", "highlight"),
          (i.className = "vft-highlight"),
          this.shadow.appendChild(i);
        const r = document.createElement("div");
        r.setAttribute("data-vft", "tooltip"),
          (r.className = "vft-tooltip"),
          this.shadow.appendChild(r);
      }
      const o = this.shadow.querySelector('[data-vft="tooltip"]');
      if (
        ((i.style.left = `${t.x - 2}px`),
        (i.style.top = `${t.y - 2}px`),
        (i.style.width = `${Math.max(0, t.width + 4)}px`),
        (i.style.height = `${Math.max(0, t.height + 4)}px`),
        (i.style.display = ""),
        o)
      ) {
        o.textContent = "";
        const r = document.createElement("span");
        (r.className = "vft-tt-tag"), (r.textContent = n.tag);
        const a = document.createElement("span");
        (a.className = "vft-tt-dim"), (a.textContent = n.dim);
        const d = document.createElement("span");
        (d.className = "vft-tt-hint"),
          (d.textContent = n.hint),
          o.append(r, a, d),
          (o.style.display = "");
        const h = Math.min(
            Math.max(t.x, 8),
            Math.max(8, window.innerWidth - 320 - 8),
          ),
          p = t.y + t.height + 8,
          s = p + 60 < window.innerHeight ? p : Math.max(8, t.y - 60);
        (o.style.left = `${h}px`), (o.style.top = `${s}px`);
      }
    }
    hideHighlight() {
      this.shadow
        ?.querySelector('[data-vft="highlight"]')
        ?.style.setProperty("display", "none"),
        this.shadow
          ?.querySelector('[data-vft="tooltip"]')
          ?.style.setProperty("display", "none");
    }
    ensureMarkerLayer() {
      if (!this.shadow) throw new Error("overlay not mounted");
      if (!this.markerHost || !this.markerHost.isConnected) {
        this.markerHost = document.createElement("div");
        this.markerHost.setAttribute("data-vft", "marker-root");
        Object.assign(this.markerHost.style, {
          position: "fixed", inset: "0", width: "100vw", height: "100vh",
          pointerEvents: "none", zIndex: String(Ee), overflow: "visible",
          margin: "0", padding: "0", display: "block",
        });
        (document.body || document.documentElement).appendChild(this.markerHost);
      }
      let t = this.markerHost.querySelector('[data-vft="markers"]');
      if (!t) {
        t = document.createElement("div");
        t.setAttribute("data-vft", "markers");
        Object.assign(t.style, {
          position: "fixed", inset: "0", width: "100vw", height: "100vh",
          pointerEvents: "none", zIndex: String(Ee - 1), overflow: "visible",
        });
        this.markerHost.appendChild(t);
      }
      return t;
    }
    startDrag(t) {
      if (this.dragging || !this.host) return;
      t.preventDefault();
      const n = this.host.getBoundingClientRect();
      (this.pos = { x: n.left, y: n.top }),
        this.applyHostStyles(),
        (this.dragOffset = { x: t.clientX - n.left, y: t.clientY - n.top }),
        (this.dragging = !0),
        window.addEventListener("pointermove", this.onDragMove),
        window.addEventListener("pointerup", this.onDragEnd, { once: !0 }),
        window.addEventListener("pointercancel", this.onDragEnd, { once: !0 });
    }
    onDragMove = (t) => {
      this.dragging &&
        ((this.pendingPos = {
          x: t.clientX - this.dragOffset.x,
          y: t.clientY - this.dragOffset.y,
        }),
        this.rafId ||
          (this.rafId = requestAnimationFrame(() => {
            (this.rafId = 0),
              this.pendingPos &&
                this.host &&
                ((this.pos = this.clamp(this.pendingPos)),
                (this.pendingPos = null),
                this.applyHostStyles());
          })));
    };
    onDragEnd = () => {
      (this.dragging = !1),
        window.removeEventListener("pointermove", this.onDragMove),
        this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = 0)),
        (this.pendingPos = null);
    };
    clamp(t) {
      const n = this.host?.getBoundingClientRect().width ?? 200,
        i = this.host?.getBoundingClientRect().height ?? 48;
      return {
        x: Math.min(Math.max(t.x, T), Math.max(T, window.innerWidth - n - T)),
        y: Math.min(Math.max(t.y, T), Math.max(T, window.innerHeight - i - T)),
      };
    }
    clampToViewport() {
      !this.host ||
        this.destroyed ||
        (this.pos &&
          ((this.pos = this.clamp(this.pos)), this.applyHostStyles()));
    }
    static isOverlayEvent(t) {
      return (typeof t.composedPath == "function" ? t.composedPath() : []).some(
        (i) => i instanceof HTMLElement && i.hasAttribute("data-vft"),
      );
    }
    destroy() {
      if (!this.destroyed) {
        if (
          ((this.destroyed = !0),
          this.onDragEnd(),
          window.removeEventListener("resize", this.onResize),
          window.removeEventListener("vft:teardown", this.onTeardown),
          (this.listenersBound = !1),
          this.shadow)
        ) {
          const t = this.shadow.querySelector('[data-vft="toolbar-mount"]');
          t && H(null, t);
        }
        this.markerHost?.remove(), (this.markerHost = null),
          this.host?.remove(), (this.host = null), (this.shadow = null);
      }
    }
  }
  function Q(e, t = 0) {
    let n = 3735928559 ^ t,
      i = 1103547991 ^ t;
    for (let o = 0; o < e.length; o++) {
      const r = e.charCodeAt(o);
      (n = Math.imul(n ^ r, 2654435761)), (i = Math.imul(i ^ r, 1597334677));
    }
    return (
      (n =
        Math.imul(n ^ (n >>> 16), 2246822507) ^
        Math.imul(i ^ (i >>> 13), 3266489909)),
      (i =
        Math.imul(i ^ (i >>> 16), 2246822507) ^
        Math.imul(n ^ (n >>> 13), 3266489909)),
      (4294967296 * (2097151 & i) + (n >>> 0)).toString(16)
    );
  }
  const Se = 300,
    pt = 256,
    Ae = 10,
    Ne = new Set([
      "id",
      "class",
      "data-testid",
      "data-test",
      "data-test-id",
      "data-cy",
      "role",
      "aria-label",
      "aria-labelledby",
      "aria-describedby",
      "title",
      "type",
      "name",
      "alt",
      "placeholder",
      "for",
      "target",
      "rel",
      "lang",
      "href",
      "src",
    ]),
    Te = new Set(["INPUT", "TEXTAREA", "SELECT", "OPTION", "SCRIPT", "STYLE"]),
    Ie = [
      "display",
      "position",
      "fontFamily",
      "fontSize",
      "fontWeight",
      "fontStyle",
      "lineHeight",
      "color",
      "backgroundColor",
      "textAlign",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "borderTopStyle",
      "borderTopColor",
      "width",
      "height",
      "opacity",
      "zIndex",
      "overflow",
    ];
  function Re(e) {
    return e.replace(/\s+/g, " ").trim();
  }
  function Wt(e) {
    const t = e.trim();
    return t.length === 0
      ? !1
      : !!(
          /^[A-Za-z0-9+/=_-]{32,}$/.test(t) ||
          /^(sk-|pk_|rk_|Bearer\s|ghp_|xox[bap]-|AKIA)/i.test(t) ||
          /password\s*[:=]/i.test(t)
        );
  }
  function Le(e) {
    const t = e.trim();
    return /^(https?:|mailto:|#|\/|\.\/|\.\.\/)/i.test(t) ||
      /^[a-z0-9\-_.~/?#@!$&'()*+,;=%]+$/i.test(t)
      ? t.slice(0, pt)
      : null;
  }
  function mt(e) {
    const t = e.getBoundingClientRect(),
      n = (i) => Math.round(i * 10) / 10;
    return { x: n(t.x), y: n(t.y), width: n(t.width), height: n(t.height) };
  }
  function Me(e) {
    const t = {};
    for (const n of e.attributes) {
      if (!Ne.has(n.name)) continue;
      let i = n.value;
      if (n.name === "class")
        i = i
          .split(/\s+/)
          .filter(Boolean)
          .slice(0, Ae)
          .map((o) => o.slice(0, 64))
          .join(" ");
      else if (n.name === "href" || n.name === "src") {
        const o = Le(i);
        if (o === null) continue;
        i = o;
      } else i = i.slice(0, pt);
      i && (t[n.name] = i);
    }
    return t;
  }
  function qt(e) {
    if (
      Te.has(e.tagName) ||
      e.closest('input[type="password"], [data-vft-secret]')
    )
      return;
    const t = De(e),
      n = Re(t).slice(0, Se);
    if (!(!n || Wt(n))) return n;
  }
  function De(e) {
    const t = [],
      n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
    let i = n.nextNode(),
      o = null;
    for (; i; ) {
      const r = i.nodeValue ?? "";
      if (r.trim()) {
        if (o && i.parentNode !== o) {
          const a = o,
            d = i.parentNode;
          (!(a.contains(d) || d.contains(a)) || jt(d) || jt(a)) && t.push(" ");
        }
        t.push(r), (o = i.parentNode);
      }
      i = n.nextNode();
    }
    return t.join("");
  }
  const $e = new Set([
    "DIV",
    "P",
    "LI",
    "UL",
    "OL",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "SECTION",
    "ARTICLE",
    "HEADER",
    "FOOTER",
    "MAIN",
    "NAV",
    "ASIDE",
    "TABLE",
    "TR",
    "BR",
    "HR",
  ]);
  function jt(e) {
    return $e.has(e.tagName);
  }
  function He(e) {
    const t = getComputedStyle(e),
      n = {};
    for (const i of Ie) {
      const o = t.getPropertyValue(
        i.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`),
      );
      o && (n[i] = o.slice(0, 128));
    }
    return n;
  }
  const Pe = {
    position: new Set(["static"]),
    overflow: new Set(["visible"]),
    zIndex: new Set(["auto"]),
    opacity: new Set(["1"]),
    backgroundColor: new Set(["rgba(0, 0, 0, 0)", "transparent"]),
    fontSize: new Set(["16px"]),
    fontWeight: new Set(["400", "normal"]),
  };
  function ze(e) {
    const t = getComputedStyle(e),
      n = {},
      i = t.getPropertyValue("display");
    i && (n.display = i);
    for (const [o, r] of Object.entries(Pe)) {
      const a = o.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`),
        d = t.getPropertyValue(a);
      d && !r.has(d) && (n[o] = d.slice(0, 64));
    }
    return n;
  }
  function vt(e) {
    const t = e.tagName.toLowerCase(),
      n = e.getAttribute("id");
    if (n && /^[A-Za-z][\w:.-]*$/.test(n)) return `${t}#${n}`;
    const i = (e.getAttribute("class") || "").split(/\s+/).filter(Boolean)[0];
    return i ? `${t}.${i}` : t;
  }
  function Ue(e) {
    return {
      tag: e.tagName.toLowerCase(),
      safeText: qt(e),
      safeAttributes: Me(e),
      computedStyles: He(e),
      keyStyles: ze(e),
      rect: mt(e),
    };
  }
  const J = ["data-testid", "data-test", "data-test-id", "data-cy"],
    Oe = 6;
  function Be(e) {
    if (e.length > 40 || /[0-9a-f]{5,}/i.test(e)) return !0;
    const t = /^[a-z]{1,4}-([A-Za-z0-9_-]{5,})$/.exec(e);
    if (t) {
      const n = t[1];
      if (/[0-9]/.test(n) || /[A-Z]/.test(n) || n.length >= 8) return !0;
    }
    return !1;
  }
  function gt(e) {
    return (
      e.length > 48 ||
      /^(ember|react|mui|css|jss|chakra|_r_|__)/i.test(e) ||
      /[0-9a-f]{8,}/i.test(e) ||
      /:\d+/.test(e)
    );
  }
  function I(e) {
    return typeof CSS < "u" && typeof CSS.escape == "function"
      ? CSS.escape(e)
      : e.replace(/["\\]/g, "\\$&");
  }
  function Fe(e) {
    return (e.getAttribute("class") || "")
      .split(/\s+/)
      .filter((t) => t && !Be(t))
      .slice(0, 3);
  }
  function _t(e) {
    const t = e.getAttribute("aria-label");
    if (t?.trim()) return t.trim().slice(0, 128);
    const n = e.getAttribute("aria-labelledby");
    if (n) {
      const r = e.getRootNode(),
        a = n
          .split(/\s+/)
          .map((d) => r.getElementById?.(d)?.textContent?.trim() ?? "")
          .join(" ")
          .trim();
      if (a) return a.slice(0, 128);
    }
    const i = e.getAttribute("alt");
    if (i?.trim()) return i.trim().slice(0, 128);
    const o = e.getAttribute("title");
    return o?.trim()
      ? o.trim().slice(0, 128)
      : (e.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 128);
  }
  function Vt(e) {
    const t = qt(e);
    if (!(!t || t.length < 3 || t.length > 200 || Wt(t)))
      return t.toLowerCase();
  }
  function Xt(e) {
    const t = [...e.children]
      .map((n) => n.tagName.toLowerCase())
      .slice(0, 12)
      .join(",");
    return `${e.tagName.toLowerCase()}[${e.children.length}](${t})`;
  }
  function We(e) {
    const t = e.tagName.toLowerCase();
    for (const r of J) {
      const a = e.getAttribute(r);
      if (a) return `${t}[${r}="${I(a)}"]`;
    }
    const n = e.getAttribute("id");
    if (n && !gt(n)) return `${t}#${I(n)}`;
    const i = Fe(e);
    if (i.length > 0) return t + i.map((r) => `.${I(r)}`).join("");
    const o = e.parentElement;
    if (o) {
      const r = [...o.children].filter((d) => d.tagName === e.tagName),
        a = r.indexOf(e) + 1;
      if (r.length > 1) return `${t}:nth-of-type(${a})`;
    }
    return t;
  }
  function qe(e) {
    const t = [];
    let n = e,
      i = 0;
    for (; n && n.tagName !== "HTML" && i < Oe; ) {
      t.unshift(We(n));
      const o = n.getAttribute("id");
      if ((o && !gt(o)) || J.some((r) => n?.getAttribute(r))) break;
      (n = n.parentElement), i++;
    }
    return t;
  }
  function Kt(e, t, n) {
    try {
      const i = e.querySelectorAll(t);
      return i.length === 1 && i[0] === n;
    } catch {
      return !1;
    }
  }
  function je(e, t = document) {
    const n = { ancestorChain: qe(e) };
    for (const d of J) {
      const c = e.getAttribute(d);
      if (c) {
        const h = `[${d}="${I(c)}"]`;
        if (Kt(t, h, e)) {
          (n.testId = c), (n.css = h);
          break;
        }
      }
    }
    const i = e.getAttribute("id");
    if (!n.css && i && !gt(i)) {
      const d = `#${I(i)}`;
      Kt(t, d, e) && ((n.stableId = i), (n.css = d));
    }
    const o = e.getAttribute("role") || Yt(e);
    if (o) {
      n.role = o;
      const d = _t(e);
      d && (n.accessibleName = d);
    }
    const r = Vt(e);
    r && (n.normalizedTextHash = Q(r)),
      (n.structureHash = Q(Xt(e))),
      n.css || (n.css = n.ancestorChain.join(" > ")),
      (n.xpath = Ve(e));
    const a = e.getBoundingClientRect();
    return (
      (n.lastRect = {
        x: Math.round(a.x),
        y: Math.round(a.y),
        width: Math.round(a.width),
        height: Math.round(a.height),
      }),
      n
    );
  }
  function Ve(e) {
    const t = [];
    let n = e;
    for (; n && n.nodeType === 1; ) {
      const i = n.tagName.toLowerCase();
      let o = 1,
        r = n.previousElementSibling;
      for (; r; )
        r.tagName.toLowerCase() === i && o++, (r = r.previousElementSibling);
      if (
        (t.unshift(o > 1 ? `${i}[${o}]` : i),
        (n = n.parentElement),
        n && n.tagName === "HTML")
      ) {
        t.unshift("html");
        break;
      }
    }
    return "/" + t.join("/");
  }
  function Yt(e) {
    const t = e.tagName.toLowerCase();
    return {
      button: "button",
      a: e.hasAttribute("href") ? "link" : void 0,
      input: Xe(e),
      select: "combobox",
      textarea: "textbox",
      h1: "heading",
      h2: "heading",
      h3: "heading",
      h4: "heading",
      h5: "heading",
      h6: "heading",
      img: "img",
      nav: "navigation",
      main: "main",
      form: "form",
    }[t];
  }
  function Xe(e) {
    const t = (e.getAttribute("type") || "text").toLowerCase();
    return {
      button: "button",
      submit: "button",
      checkbox: "checkbox",
      radio: "radio",
      text: "textbox",
      password: "textbox",
      search: "searchbox",
      email: "textbox",
      number: "spinbutton",
    }[t];
  }
  const Ke = 0.85,
    Ye = 0.15;
  function P(e, t) {
    try {
      return [...e.querySelectorAll(t)];
    } catch {
      return [];
    }
  }
  function Ze(e, t) {
    if (!t) return 0;
    const n = e.getBoundingClientRect(),
      i = Math.abs(n.x - t.x),
      o = Math.abs(n.y - t.y),
      r = Math.abs(n.width - t.width),
      a = Math.abs(n.height - t.height);
    return i < 8 && o < 8 && r < t.width * 0.2 + 2 && a < t.height * 0.2 + 2
      ? 0.03
      : 0;
  }
  function Ge(e, t = document) {
    const n = [],
      i = new Set(),
      o = (c, h) => {
        i.has(c) || (i.add(c), n.push({ el: c, score: h }));
      };
    if (e.testId)
      for (const c of J) {
        for (const h of P(t, `[${c}="${I(e.testId)}"]`)) o(h, 1);
        if (n.length > 0) break;
      }
    if (e.stableId) for (const c of P(t, `#${I(e.stableId)}`)) o(c, 0.95);
    if (e.role) {
      const c = P(t, `[role="${I(e.role)}"]`);
      for (const h of c) {
        let p = 0.7;
        e.accessibleName && _t(h) === e.accessibleName && (p = 0.82), o(h, p);
      }
      if (n.length === 0 && e.role) {
        const h = Qe(t, e.role);
        for (const p of h) {
          let s = 0.65;
          e.accessibleName && _t(p) === e.accessibleName && (s = 0.78), o(p, s);
        }
      }
    }
    if (e.css) for (const c of P(t, e.css)) o(c, 0.72);
    else if (e.ancestorChain.length > 0)
      for (const c of P(t, e.ancestorChain.join(" > "))) o(c, 0.7);
    if (n.length === 0) return null;
    for (const c of n) {
      const h = Vt(c.el);
      e.normalizedTextHash &&
        h &&
        Q(h) === e.normalizedTextHash &&
        (c.score = Math.min(1, c.score + 0.05)),
        e.structureHash &&
          Q(Xt(c.el)) === e.structureHash &&
          (c.score = Math.min(1, c.score + 0.05)),
        (c.score = Math.min(1, c.score + Ze(c.el, e.lastRect)));
    }
    n.sort((c, h) => h.score - c.score);
    const [r, a] = n,
      d = a ? r.score - a.score : 1;
    return r.score >= Ke && d >= Ye
      ? { element: r.el, confidence: Math.round(r.score * 100) / 100 }
      : null;
  }
  function Qe(e, t) {
    const i = {
      button: ["button"],
      link: ["a"],
      heading: ["h1", "h2", "h3", "h4", "h5", "h6"],
      img: ["img"],
      textbox: ["input", "textarea"],
      navigation: ["nav"],
      main: ["main"],
    }[t];
    if (!i) return [];
    const o = [];
    for (const r of i)
      for (const a of P(e, r))
        (Yt(a) || a.getAttribute("role")) === t && o.push(a);
    return o;
  }
  function bt(e) {
    return !!e?.closest?.("[data-vft]");
  }
  function Zt(e, t) {
    const n = document.elementsFromPoint(e, t);
    for (const i of n) {
      if (!(i instanceof Element) || bt(i)) continue;
      let o = i;
      for (; o.shadowRoot; ) {
        const r = o.shadowRoot.elementFromPoint(e, t);
        if (!r || !(r instanceof Element) || r === o || bt(r)) break;
        o = r;
      }
      return o;
    }
    return null;
  }
  function Je(e) {
    const t = e.tagName.toLowerCase();
    return t.includes("-")
      ? !0
      : t === "video" ||
          t === "audio" ||
          t === "input" ||
          t === "textarea" ||
          t === "select" ||
          t === "details";
  }
  class tn {
    active = !1;
    current = null;
    rafId = 0;
    pending = null;
    parentStack = [];
    shell;
    cb;
    constructor(t, n) {
      (this.shell = t), (this.cb = n);
    }
    isActive() {
      return this.active;
    }
    currentTarget() {
      return this.current;
    }
    start() {
      this.active ||
        ((this.active = !0),
        (this.current = null),
        (this.parentStack = []),
        (document.documentElement.style.cursor = "crosshair"),
        window.addEventListener("pointermove", this.onPointerMove, {
          capture: !0,
          passive: !0,
        }),
        document.addEventListener("click", this.onClick, { capture: !0 }),
        document.addEventListener("keydown", this.onKeyDown, { capture: !0 }),
        document.addEventListener("wheel", this.onWheel, {
          capture: !0,
          passive: !1,
        }),
        window.addEventListener("scroll", this.onScroll, {
          capture: !0,
          passive: !0,
        }),
        window.addEventListener("resize", this.onScroll, { passive: !0 }));
    }
    stop() {
      this.active &&
        ((this.active = !1),
        window.removeEventListener("pointermove", this.onPointerMove, {
          capture: !0,
        }),
        document.removeEventListener("click", this.onClick, { capture: !0 }),
        document.removeEventListener("keydown", this.onKeyDown, {
          capture: !0,
        }),
        document.removeEventListener("wheel", this.onWheel, { capture: !0 }),
        window.removeEventListener("scroll", this.onScroll, { capture: !0 }),
        window.removeEventListener("resize", this.onScroll),
        this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = 0)),
        (this.pending = null),
        this.shell.hideHighlight(),
        (document.documentElement.style.cursor = ""));
    }
    onPointerMove = (t) => {
      this.active &&
        (ft.isOverlayEvent(t) ||
          ((this.pending = { x: t.clientX, y: t.clientY }),
          this.rafId ||
            (this.rafId = requestAnimationFrame(() => {
              this.rafId = 0;
              const n = this.pending;
              (this.pending = null), n && this.active && this.hoverAt(n.x, n.y);
            }))));
    };
    onScroll = () => {
      !this.active ||
        !this.current ||
        this.rafId ||
        (this.rafId = requestAnimationFrame(() => {
          (this.rafId = 0),
            this.active && this.current && this.showFor(this.current);
        }));
    };
    hoverAt(t, n) {
      const i = Zt(t, n);
      i !== this.current && ((this.current = i), (this.parentStack = [])),
        i ? this.showFor(i) : this.shell.hideHighlight();
    }
    showFor(t) {
      const n = mt(t),
        i = vt(t),
        o = `${Math.round(n.width)}×${Math.round(n.height)}`;
      this.shell.showHighlight(n, {
        tag: i,
        dim: o,
        hint: "Click to annotate · ↑ parent · Alt+scroll parent · Esc cancel",
      });
    }
    onClick = (t) => {
      if (!this.active || ft.isOverlayEvent(t)) return;
      const n = this.current ?? Zt(t.clientX, t.clientY);
      n && (t.preventDefault(), t.stopPropagation(), this.select(n));
    };
    select(t) {
      const n = {
        element: t,
        locator: je(t),
        snapshot: Ue(t),
        shadowHostHint: Je(t),
      };
      this.stop(), this.cb.onSelect(n);
    }
    onKeyDown = (t) => {
      this.active &&
        (t.key === "Escape"
          ? (t.preventDefault(),
            t.stopPropagation(),
            this.stop(),
            this.cb.onCancel())
          : t.key === "ArrowUp" &&
            this.current &&
            (t.preventDefault(), this.moveToParent()));
    };
    onWheel = (t) => {
      if (!(!this.active || !t.altKey || !this.current)) {
        if ((t.preventDefault(), t.stopPropagation(), t.deltaY > 0))
          this.moveToParent();
        else if (this.parentStack.length > 0) {
          const n = this.parentStack.pop();
          (this.current = n), this.showFor(n);
        }
      }
    };
    moveToParent() {
      if (!this.current) return;
      const t = this.current.parentElement;
      !t ||
        t === document.documentElement ||
        bt(t) ||
        (this.parentStack.length < 20 && this.parentStack.push(this.current),
        (this.current = t),
        this.showFor(t));
    }
  }
  class en {
    placed = [];
    unresolved = [];
    rafId = 0;
    mutationObserver = null;
    mutationTimer = null;
    shell;
    cb;
    layer = null;
    constructor(t, n = {}) {
      (this.shell = t), (this.cb = n);
    }
    setMarkers(t) {
      this.clear();
      for (const n of t) {
        const i = Ge(n.locator);
        if (i) {
          const o = this.createBadge(n);
          this.placed.push({ ...n, element: i.element, badge: o });
        } else this.unresolved.push(n);
      }
      this.layout(), this.observe();
    }
    refresh() {
      const t = [
        ...this.placed.map(({ id: n, index: i, locator: o }) => ({
          id: n,
          index: i,
          locator: o,
        })),
        ...this.unresolved,
      ];
      this.setMarkers(t);
    }
    clear() {
      this.unobserve();
      for (const t of this.placed) t.badge.remove();
      (this.placed = []),
        (this.unresolved = []),
        this.layer?.remove(),
        (this.layer = null);
    }
    unresolvedCount() {
      return this.unresolved.length;
    }
    unresolvedIds() {
      return this.unresolved.map((t) => t.id);
    }
    createBadge(t) {
      const n = this.getLayer(),
        i = document.createElement("button");
      return (
        (i.type = "button"),
        i.setAttribute("data-vft", "marker"),
        (i.className = "vft-marker"),
        (i.textContent = String(t.index)),
        i.setAttribute("aria-label", `Annotation ${t.index}`),
        i.title = `Annotation ${t.index}`,
        Object.assign(i.style, {
          position: "fixed", width: "28px", height: "28px", boxSizing: "border-box",
          borderRadius: "9px", border: "2px solid #a5b4fc", background: "#4f46e5",
          color: "#fff", font: "700 13px/24px system-ui, sans-serif", textAlign: "center",
          cursor: "pointer", pointerEvents: "auto", display: "flex", alignItems: "center",
          justifyContent: "center", padding: "0", zIndex: String(Ee),
          boxShadow: "0 2px 8px rgba(0,0,0,.5)",
        }),
        i.addEventListener("click", (o) => {
          o.stopPropagation(), this.cb.onMarkerClick?.(t.id);
        }),
        n.appendChild(i),
        i
      );
    }
    getLayer() {
      return (
        this.layer || (this.layer = this.shell.ensureMarkerLayer()), this.layer
      );
    }
    layout() {
      const edgeStep = 32;
      const edgeSlots = Math.max(1, Math.floor((window.innerHeight - 16) / edgeStep));
      for (const t of this.placed) {
        const rect = mt(t.element);
        const hasRect = Number.isFinite(rect.x) && Number.isFinite(rect.y) && Number.isFinite(rect.width) && Number.isFinite(rect.height);
        if (!hasRect) {
          t.badge.style.display = "none";
          continue;
        }
        const onScreen = rect.width > 0 && rect.height > 0 && this.inViewport(rect);
        t.badge.style.display = "";
        t.badge.classList.toggle("is-edge", !onScreen);
        t.badge.style.background = onScreen ? "#4f46e5" : "#312e81";
        t.badge.style.borderStyle = onScreen ? "solid" : "dashed";
        t.badge.style.opacity = onScreen ? "1" : ".92";
        if (onScreen) {
          t.badge.title = `Annotation ${t.index}`;
          t.badge.style.left = `${Math.min(Math.max(4, rect.x - 14), Math.max(4, window.innerWidth - 32))}px`;
          t.badge.style.top = `${Math.min(Math.max(4, rect.y - 14), Math.max(4, window.innerHeight - 32))}px`;
        } else {
          const slot = Math.max(0, (Number(t.index) || 1) - 1) % edgeSlots;
          const edgeTop = 8 + slot * edgeStep;
          const edgeLeft = rect.x < 0 ? 8 : rect.x > window.innerWidth ? Math.max(8, window.innerWidth - 36) : Math.min(Math.max(8, rect.x - 14), Math.max(8, window.innerWidth - 36));
          t.badge.style.left = `${edgeLeft}px`;
          t.badge.style.top = `${Math.min(edgeTop, Math.max(8, window.innerHeight - 36))}px`;
          t.badge.title = `Annotation ${t.index} — target outside viewport`;
        }
      }
    }
    inViewport(t) {
      return (
        t.x + t.width > 0 &&
        t.y + t.height > 0 &&
        t.x < window.innerWidth &&
        t.y < window.innerHeight
      );
    }
    onScrollResize = () => {
      this.rafId ||
        (this.rafId = requestAnimationFrame(() => {
          (this.rafId = 0), this.layout();
        }));
    };
    observe() {
      this.placed.length !== 0 &&
        (window.addEventListener("scroll", this.onScrollResize, {
          capture: !0,
          passive: !0,
        }),
        window.addEventListener("resize", this.onScrollResize, {
          passive: !0,
        }));
      if ((this.unresolved.length !== 0 || this.placed.length !== 0) && typeof MutationObserver !== "undefined") {
        this.mutationObserver = new MutationObserver(() => {
          clearTimeout(this.mutationTimer);
          this.mutationTimer = setTimeout(() => this.unresolved.length !== 0 ? this.refresh() : this.layout(), 180);
        });
        this.mutationObserver.observe(document.body || document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "style", "hidden"] });
      }
    }
    unobserve() {
      window.removeEventListener("scroll", this.onScrollResize, {
        capture: !0,
      }),
        window.removeEventListener("resize", this.onScrollResize),
        this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = 0)),
        this.mutationObserver?.disconnect(),
        (this.mutationObserver = null),
        this.mutationTimer && (clearTimeout(this.mutationTimer), (this.mutationTimer = null));
    }
    destroy() {
      this.clear();
    }
  }
  class nn {
    active = !1;
    lastUrl;
    debounceTimer = null;
    originals = new Map();
    onChange;
    constructor(t) {
      (this.onChange = t), (this.lastUrl = location.href);
    }
    start() {
      if (!this.active) {
        (this.active = !0), (this.lastUrl = location.href);
        for (const t of ["pushState", "replaceState"]) {
          const n = history[t].bind(history);
          this.originals.set(t, history[t]);
          const i = (o) => this.emit(o === "pushState" ? "push" : "replace");
          history[t] = function (...o) {
            n(...o), i(t);
          };
        }
        window.addEventListener("popstate", this.onPopState),
          window.addEventListener("hashchange", this.onHashChange);
      }
    }
    stop() {
      if (this.active) {
        this.active = !1;
        for (const [t, n] of this.originals) history[t] = n;
        this.originals.clear(),
          window.removeEventListener("popstate", this.onPopState),
          window.removeEventListener("hashchange", this.onHashChange),
          this.debounceTimer &&
            (clearTimeout(this.debounceTimer), (this.debounceTimer = null));
      }
    }
    isActive() {
      return this.active;
    }
    onPopState = () => this.emit("popstate");
    onHashChange = () => this.emit("hash");
    emit(t) {
      this.active &&
        (this.debounceTimer && clearTimeout(this.debounceTimer),
        (this.debounceTimer = setTimeout(() => {
          this.debounceTimer = null;
          const n = location.href;
          n !== this.lastUrl &&
            ((this.lastUrl = n), this.onChange({ url: n, navigationType: t }));
        }, 120)));
    }
  }
  var O,
    w,
    wt,
    Gt,
    tt = 0,
    Qt = [],
    y = g,
    Jt = y.__b,
    te = y.__r,
    ee = y.diffed,
    ne = y.__c,
    ie = y.unmount,
    oe = y.__;
  function yt(e, t) {
    y.__h && y.__h(w, e, tt || t), (tt = 0);
    var n = w.__H || (w.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function E(e) {
    return (tt = 1), on(se, e);
  }
  function on(e, t, n) {
    var i = yt(O++, 2);
    if (
      ((i.t = e),
      !i.__c &&
        ((i.__ = [
          se(void 0, t),
          function (d) {
            var c = i.__N ? i.__N[0] : i.__[0],
              h = i.t(c, d);
            c !== h && ((i.__N = [h, i.__[1]]), i.__c.setState({}));
          },
        ]),
        (i.__c = w),
        !w.__f))
    ) {
      var o = function (d, c, h) {
        if (!i.__c.__H) return !0;
        var p = i.__c.__H.__.filter(function (m) {
          return !!m.__c;
        });
        if (
          p.every(function (m) {
            return !m.__N;
          })
        )
          return !r || r.call(this, d, c, h);
        var s = i.__c.props !== d;
        return (
          p.forEach(function (m) {
            if (m.__N) {
              var u = m.__[0];
              (m.__ = m.__N), (m.__N = void 0), u !== m.__[0] && (s = !0);
            }
          }),
          (r && r.call(this, d, c, h)) || s
        );
      };
      w.__f = !0;
      var r = w.shouldComponentUpdate,
        a = w.componentWillUpdate;
      (w.componentWillUpdate = function (d, c, h) {
        if (this.__e) {
          var p = r;
          (r = void 0), o(d, c, h), (r = p);
        }
        a && a.call(this, d, c, h);
      }),
        (w.shouldComponentUpdate = o);
    }
    return i.__N || i.__;
  }
  function xt(e, t) {
    var n = yt(O++, 3);
    !y.__s && ae(n.__H, t) && ((n.__ = e), (n.u = t), w.__H.__h.push(n));
  }
  function kt(e) {
    return (
      (tt = 5),
      rn(function () {
        return { current: e };
      }, [])
    );
  }
  function rn(e, t) {
    var n = yt(O++, 7);
    return ae(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function an() {
    for (var e; (e = Qt.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(et), e.__H.__h.forEach(Ct), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), y.__e(t, e.__v);
        }
  }
  (y.__b = function (e) {
    (w = null), Jt && Jt(e);
  }),
    (y.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), oe && oe(e, t);
    }),
    (y.__r = function (e) {
      te && te(e), (O = 0);
      var t = (w = e.__c).__H;
      t &&
        (wt === w
          ? ((t.__h = []),
            (w.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
            }))
          : (t.__h.forEach(et), t.__h.forEach(Ct), (t.__h = []), (O = 0))),
        (wt = w);
    }),
    (y.diffed = function (e) {
      ee && ee(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((Qt.push(t) !== 1 && Gt === y.requestAnimationFrame) ||
            ((Gt = y.requestAnimationFrame) || sn)(an)),
        t.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (wt = w = null);
    }),
    (y.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(et),
            (n.__h = n.__h.filter(function (i) {
              return !i.__ || Ct(i);
            }));
        } catch (i) {
          t.some(function (o) {
            o.__h && (o.__h = []);
          }),
            (t = []),
            y.__e(i, n.__v);
        }
      }),
        ne && ne(e, t);
    }),
    (y.unmount = function (e) {
      ie && ie(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (i) {
          try {
            et(i);
          } catch (o) {
            t = o;
          }
        }),
        (n.__H = void 0),
        t && y.__e(t, n.__v));
    });
  var re = typeof requestAnimationFrame == "function";
  function sn(e) {
    var t,
      n = function () {
        clearTimeout(i), re && cancelAnimationFrame(t), setTimeout(e);
      },
      i = setTimeout(n, 35);
    re && (t = requestAnimationFrame(n));
  }
  function et(e) {
    var t = w,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (w = t);
  }
  function Ct(e) {
    var t = w;
    (e.__c = e.__()), (w = t);
  }
  function ae(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, i) {
        return n !== e[i];
      })
    );
  }
  function se(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  const Et = { clear: "Clear", technical: "Technical", concise: "Concise" };
  function ln(e) {
    const { ai: t } = e,
      [n, i] = E(!1),
      [o, r] = E(!1),
      [a, d] = E(""),
      c = t.providers.find((u) => u.id === t.selectedProviderId) ?? null,
      h = e.comment.trim().length > 0 && c !== null && c.enabled && !t.busy,
      p = c?.cloud === !0 && !t.consentCloud;
    function s() {
      d(t.suggestion ?? ""), r(!0);
    }
    function m() {
      e.onUseSuggestion(a), r(!1), e.onAiDiscard();
    }
    return l("div", {
      className: "vft-field vft-ai",
      children: [
        l("span", {
          className: "vft-legend",
          id: "vft-ai-label",
          children: "Improve with AI (optional)",
        }),
        t.providers.length === 0
          ? l("p", {
              className: "vft-note",
              children:
                "No AI provider configured. Add one in the extension popup to enable this.",
            })
          : l(U, {
              children: [
                l("div", {
                  className: "vft-ai-row",
                  children: [
                    l("label", {
                      children: [
                        "Provider",
                        l("select", {
                          value: t.selectedProviderId ?? "",
                          disabled: t.busy,
                          onChange: (u) =>
                            e.onAiChange({
                              selectedProviderId: u.target.value || null,
                            }),
                          children: t.providers.map((u) =>
                            l(
                              "option",
                              {
                                value: u.id,
                                disabled: !u.enabled,
                                children: [
                                  u.displayName,
                                  " (",
                                  u.modelId,
                                  ")",
                                  u.enabled ? "" : " — disabled",
                                ],
                              },
                              u.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                    l("label", {
                      children: [
                        "Mode",
                        l("select", {
                          value: t.mode,
                          disabled: t.busy,
                          onChange: (u) =>
                            e.onAiChange({ mode: u.target.value }),
                          children: Object.keys(Et).map((u) =>
                            l("option", { value: u, children: Et[u] }, u),
                          ),
                        }),
                      ],
                    }),
                    l("label", {
                      children: [
                        "Context",
                        l("select", {
                          value: t.contextScope,
                          disabled: t.busy,
                          onChange: (u) =>
                            e.onAiChange({ contextScope: u.target.value }),
                          children: [
                            l("option", {
                              value: "minimal",
                              children: "Minimal (comment only)",
                            }),
                            l("option", {
                              value: "element",
                              children: "Element (comment + target)",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c?.cloud &&
                  l("label", {
                    className: "vft-check",
                    children: [
                      l("input", {
                        type: "checkbox",
                        checked: t.consentCloud,
                        disabled: t.busy,
                        onChange: (u) =>
                          e.onAiChange({ consentCloud: u.target.checked }),
                      }),
                      "I understand this sends my comment text to ",
                      c.displayName,
                      " (cloud).",
                    ],
                  }),
                l("div", {
                  className: "vft-ai-row",
                  children: [
                    l("button", {
                      type: "button",
                      className: "vft-btn-ghost",
                      disabled: t.busy,
                      onClick: () => i((u) => !u),
                      children: [n ? "Hide" : "Preview", " what will be sent"],
                    }),
                    t.busy
                      ? l("button", {
                          type: "button",
                          className: "vft-btn-ghost",
                          onClick: e.onAiCancel,
                          children: "Cancel",
                        })
                      : l("button", {
                          type: "button",
                          className: "vft-btn-primary",
                          disabled: !h || p,
                          onClick: e.onAiImprove,
                          title: p ? "Confirm cloud consent first" : void 0,
                          children: "Improve",
                        }),
                  ],
                }),
                n &&
                  l("div", {
                    className: "vft-ai-preview",
                    "aria-label": "What will be sent",
                    children: [
                      l("div", {
                        children: [
                          l("strong", { children: "Comment:" }),
                          " ",
                          e.comment || "(empty)",
                        ],
                      }),
                      l("div", {
                        children: [
                          l("strong", { children: "Intent:" }),
                          " ",
                          e.intent,
                          " · ",
                          l("strong", { children: "Severity:" }),
                          " ",
                          e.severity,
                        ],
                      }),
                      t.contextScope === "element" &&
                        l("div", {
                          children: [
                            l("strong", { children: "Target:" }),
                            " ",
                            e.targetLabel,
                          ],
                        }),
                      l("div", {
                        children: [
                          l("strong", { children: "Mode:" }),
                          " ",
                          Et[t.mode],
                        ],
                      }),
                      l("div", {
                        className: "vft-note",
                        children:
                          "Screenshots are never sent. Only the text above.",
                      }),
                    ],
                  }),
                t.error &&
                  l("div", {
                    className: "vft-error",
                    role: "alert",
                    children: t.error,
                  }),
                t.busy &&
                  l("div", {
                    className: "vft-note",
                    role: "status",
                    children: ["Contacting ", c?.displayName, "…"],
                  }),
                t.clarification &&
                  l("div", {
                    className: "vft-ai-clarify",
                    role: "status",
                    children: [
                      l("strong", { children: "The AI needs clarification:" }),
                      " ",
                      t.clarification,
                      l("div", {
                        className: "vft-ai-row",
                        style: { marginTop: 8 },
                        children: [
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: e.onAiDiscard,
                            children: "Dismiss",
                          }),
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: e.onAiRegenerate,
                            children: "Try again",
                          }),
                        ],
                      }),
                    ],
                  }),
                t.suggestion !== null &&
                  !o &&
                  l("div", {
                    className: "vft-ai-result",
                    children: [
                      l("div", {
                        className: "vft-ai-compare",
                        children: [
                          l("div", {
                            children: [
                              l("strong", { children: "Original" }),
                              l("p", { children: e.comment }),
                            ],
                          }),
                          l("div", {
                            children: [
                              l("strong", { children: "Suggestion" }),
                              l("p", { children: t.suggestion }),
                            ],
                          }),
                        ],
                      }),
                      l("div", {
                        className: "vft-note",
                        children: [
                          "From ",
                          t.lastProviderName,
                          " (",
                          t.lastModel,
                          "). Nothing is saved until you choose.",
                        ],
                      }),
                      l("div", {
                        className: "vft-ai-row",
                        children: [
                          l("button", {
                            type: "button",
                            className: "vft-btn-primary",
                            onClick: e.onAiAccept,
                            children: "Use this",
                          }),
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: s,
                            children: "Edit",
                          }),
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: e.onAiRegenerate,
                            children: "Regenerate",
                          }),
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: e.onAiDiscard,
                            children: "Discard",
                          }),
                        ],
                      }),
                    ],
                  }),
                t.suggestion !== null &&
                  o &&
                  l("div", {
                    className: "vft-ai-result",
                    children: [
                      l("label", {
                        children: [
                          l("strong", { children: "Edit suggestion" }),
                          l("textarea", {
                            className: "vft-comment",
                            value: a,
                            rows: 4,
                            maxLength: 5e3,
                            onInput: (u) => d(u.target.value),
                          }),
                        ],
                      }),
                      l("div", {
                        className: "vft-ai-row",
                        style: { marginTop: 8 },
                        children: [
                          l("button", {
                            type: "button",
                            className: "vft-btn-primary",
                            onClick: m,
                            children: "Use edited text",
                          }),
                          l("button", {
                            type: "button",
                            className: "vft-btn-ghost",
                            onClick: () => r(!1),
                            children: "Back",
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
      ],
    });
  }
  const cn = ["fix", "change", "question", "approve", "copy"],
    dn = ["blocking", "important", "suggestion"],
    hn = {
      fix: "Fix",
      change: "Change",
      question: "Question",
      approve: "Approve",
      copy: "Copy",
    },
    un = {
      blocking: "Blocking",
      important: "Important",
      suggestion: "Suggestion",
    };
  function fn(e) {
    const [t, n] = E(e.initial.intent),
      [i, o] = E(e.initial.severity),
      [r, a] = E(e.initial.comment),
      [d, c] = E(!1),
      [h, p] = E(!1),
      s = kt(null),
      m = kt(null),
      u =
        t !== e.initial.intent ||
        i !== e.initial.severity ||
        r !== e.initial.comment;
    xt(() => {
      e.onChange({ intent: t, severity: i, comment: r });
    }, [t, i, r]),
      xt(() => {
        m.current?.focus();
      }, []),
      xt(() => {
        u || p(!1);
      }, [u]);
    function b(f) {
      if (f.key === "Escape") f.stopPropagation(), e.onCancel(u);
      else if (f.key === "Enter" && (f.ctrlKey || f.metaKey))
        f.preventDefault(),
          r.trim() && e.onSave({ intent: t, severity: i, comment: r.trim() });
      else if (f.key === "Tab") {
        const S = s.current;
        if (!S) return;
        const C = [
          ...S.querySelectorAll("button:not(:disabled), textarea, [tabindex]"),
        ].filter((ot) => ot.offsetParent !== null);
        if (C.length === 0) return;
        const D = C[0],
          R = C[C.length - 1];
        f.shiftKey && document.activeElement === D
          ? (f.preventDefault(), R.focus())
          : !f.shiftKey &&
            document.activeElement === R &&
            (f.preventDefault(), D.focus());
      }
    }
    function k() {
      if (u && !h) {
        p(!0);
        return;
      }
      e.onCancel(u);
    }
    function x() {
      if (!d) {
        c(!0);
        return;
      }
      e.onDelete();
    }
    const v = r.trim().length > 0 && !e.saving;
    return l("div", {
      ref: s,
      className: "vft-editor",
      role: "dialog",
      "aria-label": e.mode === "new" ? "New annotation" : "Edit annotation",
      onKeyDown: b,
      children: [
        l("button", {
          type: "button",
          className: "vft-editor-close",
          "aria-label": "Close editor",
          onClick: k,
          children: "×",
        }),
        l("h2", {
          className: "vft-editor-title",
          onPointerDown: e.onDragStart,
          children: e.mode === "new" ? "New annotation" : "Edit annotation",
        }),
        l("div", {
          className: "vft-editor-target",
          children: [
            "Target: ",
            l("code", { children: e.targetLabel }),
            e.shadowHint &&
              l("span", {
                className: "vft-editor-hint",
                children:
                  "This element may contain a shadow root that can't be inspected; the host is targeted.",
              }),
            l("button", {
              type: "button",
              className: "vft-retarget",
              onClick: e.onRetarget,
              children: "Re-select target",
            }),
          ],
        }),
        e.draftRecovered &&
          l("div", {
            className: "vft-draft-note",
            children: "Recovered unsent draft.",
          }),
        e.error &&
          l("div", {
            className: "vft-error",
            role: "alert",
            children: [
              l("div", { children: e.error }),
              l("button", {
                type: "button",
                className: "vft-btn-ghost",
                style: { marginTop: 8 },
                onClick: () => {
                  navigator.clipboard?.writeText(r).catch(() => {});
                },
                children: "Copy comment",
              }),
            ],
          }),
        l("div", {
          className: "vft-field",
          children: [
            l("span", {
              className: "vft-legend",
              id: "vft-intent-label",
              children: "Intent",
            }),
            l("div", {
              className: "vft-seg",
              role: "group",
              "aria-labelledby": "vft-intent-label",
              children: cn.map((f) =>
                l(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": t === f,
                    onClick: () => n(f),
                    children: hn[f],
                  },
                  f,
                ),
              ),
            }),
          ],
        }),
        l("div", {
          className: "vft-field",
          children: [
            l("span", {
              className: "vft-legend",
              id: "vft-severity-label",
              children: "Severity",
            }),
            l("div", {
              className: "vft-seg",
              role: "group",
              "aria-labelledby": "vft-severity-label",
              children: dn.map((f) =>
                l(
                  "button",
                  {
                    type: "button",
                    "aria-pressed": i === f,
                    onClick: () => o(f),
                    children: un[f],
                  },
                  f,
                ),
              ),
            }),
          ],
        }),
        l("div", {
          className: "vft-field",
          children: [
            l("label", { htmlFor: "vft-comment", children: "Comment" }),
            l("textarea", {
              id: "vft-comment",
              ref: m,
              className: "vft-comment",
              value: r,
              placeholder: "Describe the issue…",
              maxLength: 5e3,
              onInput: (f) => a(f.target.value),
            }),
          ],
        }),
        l("div", {
          className: "vft-field",
          children: [
            l("span", {
              className: "vft-legend",
              id: "vft-shots-label",
              children: "Screenshots (optional, stored locally)",
            }),
            l("div", {
              className: "vft-seg",
              role: "group",
              "aria-labelledby": "vft-shots-label",
              children: [
                l("button", {
                  type: "button",
                  disabled: e.capturing,
                  onClick: () => e.onCapture("element"),
                  children: e.capturing ? "Capturing…" : "Capture element",
                }),
                l("button", {
                  type: "button",
                  disabled: e.capturing,
                  onClick: () => e.onCapture("viewport"),
                  children: "Capture viewport",
                }),
              ],
            }),
            l("p", {
              className: "vft-auto-redact-note",
              children:
                "Password, payment, one-time-code, and marked-sensitive fields are masked automatically on capture.",
            }),
            e.captureError &&
              l("div", {
                className: "vft-error",
                role: "alert",
                style: { marginTop: 8 },
                children: e.captureError,
              }),
            e.screenshots.length > 0 &&
              l("div", {
                className: "vft-shots",
                children: e.screenshots.map((f, S) =>
                  l(
                    "div",
                    {
                      className: "vft-shot",
                      children: [
                        l("img", {
                          src: f.objectUrl,
                          alt: `Screenshot ${S + 1} (${f.width}×${f.height})`,
                        }),
                        f.redacted &&
                          l("span", {
                            className: "vft-shot-badge",
                            children: "Redacted",
                          }),
                        l("div", {
                          className: "vft-shot-actions",
                          children: l("button", {
                            type: "button",
                            className: "vft-shot-remove",
                            title: "Remove screenshot",
                            "aria-label": `Remove screenshot ${S + 1}`,
                            onClick: () => e.onRemoveScreenshot(f.id),
                            children: toolbarIcon("clear"),
                          }),
                        }),
                      ],
                    },
                    f.id,
                  ),
                ),
              }),
          ],
        }),
        l(ln, {
          ai: e.ai,
          comment: r,
          intent: t,
          severity: i,
          targetLabel: e.targetLabel,
          onAiChange: e.onAiChange,
          onAiImprove: e.onAiImprove,
          onAiCancel: e.onAiCancel,
          onAiAccept: e.onAiAccept,
          onAiDiscard: e.onAiDiscard,
          onAiRegenerate: e.onAiRegenerate,
          onUseSuggestion: (f) => a(f),
        }),
        l("div", {
          className: "vft-actions",
          children: [
            l("button", {
              type: "button",
              className: "vft-btn-primary",
              disabled: !v,
              onClick: () =>
                e.onSave({ intent: t, severity: i, comment: r.trim() }),
              children: e.saving
                ? "Saving…"
                : e.mode === "new"
                  ? "Add annotation"
                  : "Update",
            }),
            e.mode === "edit" &&
              l("button", {
                type: "button",
                className: `vft-btn-danger${d ? " armed" : ""}`,
                onClick: x,
                children: d ? "Confirm delete" : "Delete",
              }),
            l("button", {
              type: "button",
              className: "vft-btn-ghost",
              onClick: k,
              children: h ? "Discard changes?" : "Cancel",
            }),
          ],
        }),
      ],
    });
  }
  const pn = `
.vft-editor-wrap {
  position: fixed;
  z-index: 2147483647;
  width: 340px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 32px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
  box-sizing: border-box;
  scrollbar-gutter: stable;
}
.vft-editor {
  background: #17171c;
  border: 1px solid #33333e;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  padding: 16px;
  color: #e8e8ee;
  font-size: 13px;
  box-sizing: border-box;
}
.vft-editor h2 {
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
}
.vft-editor-title {
  cursor: grab;
  user-select: none;
  touch-action: none;
  padding-right: 28px;
}
.vft-editor-title:active { cursor: grabbing; }
.vft-editor-target {
  color: #a1a1b3;
  font-size: 12px;
  margin-bottom: 12px;
  word-break: break-all;
}
.vft-editor-target code {
  color: #a5b4fc;
  font-family: ui-monospace, monospace;
}
.vft-editor-hint {
  display: block;
  margin-top: 4px;
  color: #fbbf24;
  font-size: 11px;
}
.vft-field {
  margin-bottom: 12px;
}
.vft-field > label, .vft-legend {
  display: block;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 6px;
  color: #c9c9d6;
}
.vft-seg {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.vft-seg button {
  flex: 1 1 auto;
  background: #23232b;
  border: 1px solid #33333e;
  color: #c9c9d6;
  border-radius: 8px;
  padding: 6px 4px;
  font-size: 12px;
  cursor: pointer;
  min-width: 0;
}
.vft-seg button[aria-pressed="true"] {
  background: #4f46e5;
  border-color: #6366f1;
  color: #fff;
}
.vft-seg button:focus-visible {
  outline: 2px solid #a5b4fc;
  outline-offset: 2px;
}
.vft-comment {
  width: 100%;
  min-height: 88px;
  background: #101014;
  border: 1px solid #33333e;
  border-radius: 8px;
  color: #e8e8ee;
  padding: 8px;
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
}
.vft-comment:focus {
  border-color: #6366f1;
  outline: none;
}
.vft-draft-note {
  font-size: 11px;
  color: #a5b4fc;
  margin-bottom: 8px;
}
.vft-error {
  background: #3b1d1d;
  border: 1px solid #7f2d2d;
  color: #fca5a5;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  margin-bottom: 12px;
}
.vft-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
}
.vft-actions > button {
  flex: 1 1 90px;
  min-width: 0;
  white-space: normal;
  overflow-wrap: anywhere;
}
.vft-btn-primary {
  flex: 1;
  background: #4f46e5;
  border: none;
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}
.vft-btn-primary:hover:not(:disabled) { background: #6366f1; }
.vft-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.vft-btn-ghost {
  background: transparent;
  border: 1px solid #33333e;
  color: #c9c9d6;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
}
.vft-btn-ghost:hover { border-color: #55555f; }
.vft-btn-danger {
  background: transparent;
  border: 1px solid #7f2d2d;
  color: #fca5a5;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  cursor: pointer;
}
.vft-btn-danger.armed {
  background: #7f2d2d;
  color: #fff;
}
.vft-editor-close {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: #a1a1b3;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
}
.vft-editor-close:hover { color: #fff; background: #23232b; }
.vft-retarget {
  background: transparent;
  border: none;
  color: #a5b4fc;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
  margin-top: 4px;
  text-decoration: underline;
}
/* Screenshots (S4-03) */
.vft-auto-redact-note {
  margin: 6px 0 0;
  color: #a1a1b3;
  font-size: 11px;
  line-height: 1.4;
}
.vft-shots {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}
.vft-shot {
  position: relative;
  border: 1px solid #33333e;
  border-radius: 8px;
  overflow: hidden;
  background: #101014;
}
.vft-shot img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: contain;
}
.vft-shot-badge {
  position: absolute;
  top: 6px;
  left: 6px;
  background: #4f46e5;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
}
.vft-shot-actions {
  position: absolute;
  top: 6px;
  right: 6px;
  z-index: 1;
  display: flex;
  gap: 4px;
  padding: 0;
}
.vft-shot-actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid rgba(255,255,255,.16);
  border-radius: 8px;
  background: rgba(23,23,28,.9);
  color: #e8e8ee;
  cursor: pointer;
  backdrop-filter: blur(6px);
}
.vft-shot-actions button:hover { border-color: #f87171; background: rgba(58,31,34,.96); color: #fecaca; }
/* Redaction overlay (S4-04) */
.vft-redact {
  position: fixed;
  inset: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
}
.vft-redact-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: #e8e8ee;
  font-size: 13px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.vft-redact-bar > div { display: flex; flex-wrap: wrap; gap: 8px; max-width: 100%; }
.vft-redact-canvas {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: crosshair;
  user-select: none;
}
.vft-redact-canvas img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.vft-redact-imgwrap {
  position: relative;
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}
.vft-redact-imgwrap img {
  max-width: 100%;
  max-height: 70vh;
  display: block;
}
.vft-redact-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.vft-redact-note {
  color: #a1a1b3;
  font-size: 12px;
  text-align: center;
  margin: 12px 0 0;
}
/* AI improve panel (S6-03) */
.vft-ai {
  border-top: 1px solid #26262e;
  padding-top: 12px;
  margin-top: 4px;
}
.vft-ai-row {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 8px;
}
.vft-ai-row label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  color: #a1a1b3;
  flex: 1;
  min-width: 90px;
}
.vft-ai-row select {
  background: #23232b;
  color: #e8e8ee;
  border: 1px solid #33333e;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 12px;
}
.vft-check {
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 12px;
  color: #c9c9d6;
  margin-top: 8px;
  cursor: pointer;
}
.vft-check input { margin-top: 2px; }
.vft-ai-preview {
  background: #141419;
  border: 1px solid #33333e;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  color: #c9c9d6;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.vft-ai-result {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.vft-ai-compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}
.vft-ai-compare > div {
  min-width: 0;
  background: #141419;
  border: 1px solid #33333e;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
}
.vft-ai-compare strong { color: #a5b4fc; font-size: 11px; }
.vft-ai-compare p { margin: 4px 0 0; color: #e8e8ee; white-space: pre-wrap; overflow-wrap: anywhere; }
.vft-ai-clarify {
  background: #1a1a2e;
  border: 1px solid #4f46e5;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  color: #e8e8ee;
  margin-top: 8px;
}
@media (prefers-reduced-motion: reduce) {
  .vft-editor, .vft-editor * { transition: none !important; }
}
/* Shared design tokens and microinteractions; isolated to this extension shadow root. */
.vft-editor-wrap { transform-origin: top right; animation: vft-panel-in 180ms var(--vft-ease) both; }
.vft-editor {
  background: var(--vft-bg); border-color: var(--vft-border); border-radius: var(--vft-radius-card);
  box-shadow: 0 12px 36px rgba(0,0,0,.48);
}
.vft-editor button, .vft-editor textarea, .vft-editor select { font-family: inherit; -webkit-tap-highlight-color: transparent; }
.vft-seg button, .vft-comment, .vft-actions > button, .vft-shot-actions button,
.vft-ai-row select, .vft-ai-preview, .vft-ai-compare > div, .vft-ai-clarify,
.vft-error { border-radius: var(--vft-radius-control); }
.vft-seg button, .vft-btn-primary, .vft-btn-ghost, .vft-btn-danger,
.vft-editor-close, .vft-shot-actions button {
  min-height: 36px;
  transition: background-color var(--vft-fast) ease, border-color var(--vft-fast) ease,
    color var(--vft-fast) ease, box-shadow var(--vft-fast) ease,
    transform var(--vft-fast) var(--vft-spring), opacity var(--vft-fast) ease;
}
.vft-seg button:hover:not(:disabled), .vft-btn-ghost:hover, .vft-editor-close:hover,
.vft-shot-actions button:hover { transform: translateY(-1px); }
.vft-seg button:active:not(:disabled), .vft-btn-primary:active:not(:disabled),
.vft-btn-ghost:active:not(:disabled), .vft-btn-danger:active:not(:disabled),
.vft-shot-actions button:active:not(:disabled) { transform: scale(.975); }
.vft-btn-primary { background: var(--vft-accent-strong); border-radius: var(--vft-radius-control); }
.vft-btn-primary:hover:not(:disabled) { background: var(--vft-accent); box-shadow: 0 4px 14px rgba(79,70,229,.24); }
.vft-btn-ghost { border-radius: var(--vft-radius-control); }
.vft-btn-danger { border-radius: var(--vft-radius-control); }
.vft-comment { border-radius: var(--vft-radius-control); transition: border-color var(--vft-fast) ease, box-shadow var(--vft-fast) ease; }
.vft-comment:focus { box-shadow: 0 0 0 3px rgba(99,102,241,.18); }
.vft-seg button:focus-visible, .vft-btn-primary:focus-visible, .vft-btn-ghost:focus-visible,
.vft-btn-danger:focus-visible, .vft-editor-close:focus-visible, .vft-retarget:focus-visible,
.vft-shot-actions button:focus-visible, .vft-ai-row select:focus-visible {
  outline: 2px solid var(--vft-accent); outline-offset: 2px;
}
.vft-shot { border-radius: var(--vft-radius-control); transition: border-color var(--vft-fast) ease, box-shadow var(--vft-fast) ease; }
.vft-shot:hover { border-color: color-mix(in srgb, var(--vft-accent) 65%, var(--vft-border)); box-shadow: 0 4px 14px rgba(0,0,0,.2); }
.vft-shot-badge { border-radius: var(--vft-radius-pill); }
.vft-redact { animation: vft-panel-in 160ms var(--vft-ease) both; }
.vft-redact-bar button { min-height: 36px; border-radius: var(--vft-radius-control); transition: transform var(--vft-fast) var(--vft-spring), background-color var(--vft-fast) ease, border-color var(--vft-fast) ease; }
.vft-redact-bar button:active { transform: scale(.975); }
.vft-ai-compare > div { border-radius: var(--vft-radius-control); }
@media (hover: none) {
  .vft-btn:hover, .vft-marker:hover, .vft-seg button:hover:not(:disabled),
  .vft-btn-ghost:hover, .vft-editor-close:hover, .vft-shot-actions button:hover { transform: none; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; transition-duration: .01ms !important; }
}
`;
  function mn(e) {
    const [t, n] = E([]),
      [i, o] = E(null),
      r = kt(null);
    function a(s) {
      const m = r.current;
      if (!m) return null;
      const u = m.getBoundingClientRect(),
        b = e.imageWidth / u.width,
        k = e.imageHeight / u.height;
      return {
        x: Math.max(0, Math.min(e.imageWidth, (s.clientX - u.left) * b)),
        y: Math.max(0, Math.min(e.imageHeight, (s.clientY - u.top) * k)),
      };
    }
    function d(s) {
      const m = a(s);
      m && o({ x: m.x, y: m.y, width: 0, height: 0 });
    }
    function c(s) {
      if (!i) return;
      const m = a(s);
      m &&
        o({
          x: Math.min(i.x, m.x),
          y: Math.min(i.y, m.y),
          width: Math.abs(m.x - i.x),
          height: Math.abs(m.y - i.y),
        });
    }
    function h() {
      i && i.width > 4 && i.height > 4 && n((s) => [...s, i]), o(null);
    }
    const p = i ? [...t, i] : t;
    return l("div", {
      className: "vft-redact",
      role: "dialog",
      "aria-label": "Redact screenshot",
      children: [
        l("div", {
          className: "vft-redact-bar",
          children: [
            l("span", {
              children: [
                "Drag over sensitive areas to black them out. ",
                t.length,
                " region(s).",
              ],
            }),
            l("div", {
              children: [
                l("button", {
                  type: "button",
                  className: "vft-btn-ghost",
                  onClick: () => n([]),
                  children: "Clear",
                }),
                l("button", {
                  type: "button",
                  className: "vft-btn-ghost",
                  onClick: e.onCancel,
                  children: "Cancel",
                }),
                l("button", {
                  type: "button",
                  className: "vft-btn-primary",
                  disabled: t.length === 0,
                  onClick: () => e.onApply(t),
                  children: "Apply redactions",
                }),
              ],
            }),
          ],
        }),
        l("div", {
          className: "vft-redact-canvas",
          onMouseDown: d,
          onMouseMove: c,
          onMouseUp: h,
          onMouseLeave: h,
          children: l("div", {
            className: "vft-redact-imgwrap",
            children: [
              l("img", {
                ref: r,
                src: e.imageUrl,
                alt: "Screenshot to redact",
                draggable: !1,
              }),
              l("svg", {
                className: "vft-redact-svg",
                viewBox: `0 0 ${e.imageWidth} ${e.imageHeight}`,
                preserveAspectRatio: "none",
                children: p.map((s, m) =>
                  l(
                    "rect",
                    {
                      x: s.x,
                      y: s.y,
                      width: s.width,
                      height: s.height,
                      fill: "rgba(0,0,0,0.85)",
                      stroke: "#f87171",
                      strokeWidth: 2,
                    },
                    m,
                  ),
                ),
              }),
            ],
          }),
        }),
        l("p", {
          className: "vft-redact-note",
          children:
            "Redactions are permanent and stored locally. Share the image only after reviewing it.",
        }),
      ],
    });
  }
  async function vn(e, t) {
    const n = await createImageBitmap(e),
      i = new OffscreenCanvas(n.width, n.height),
      o = i.getContext("2d");
    if (!o) throw new Error("Canvas not available.");
    o.drawImage(n, 0, 0), n.close(), (o.fillStyle = "#000");
    for (const r of t) o.fillRect(r.x, r.y, r.width, r.height);
    return i.convertToBlob({ type: "image/png" });
  }
  const le = 1;
  function ce() {
    if (typeof crypto < "u" && typeof crypto.randomUUID == "function")
      return crypto.randomUUID();
    const e = new Uint8Array(16);
    crypto.getRandomValues(e),
      (e[6] = (e[6] & 15) | 64),
      (e[8] = (e[8] & 63) | 128);
    const t = [...e].map((n) => n.toString(16).padStart(2, "0")).join("");
    return `${t.slice(0, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}-${t.slice(16, 20)}-${t.slice(20)}`;
  }
  function de() {
    return new Date().toISOString();
  }
  const gn = 2e4;
  const AI_CLIENT_TIMEOUT = 130e3;
  class he extends Error {}
  function _n(e, t) {
    let n;
    const i = new Promise((o, r) => {
      n = setTimeout(() => r(new he("timeout")), t);
    });
    return Promise.race([e, i]).finally(() => {
      n !== void 0 && clearTimeout(n);
    });
  }
  function bn(e, t = {}) {
    const n = { v: le, requestId: ce(), type: e, payload: t, sentAt: de() };
    chrome.runtime.sendMessage(n).catch(() => {});
  }
  function reportContentError(error, operation) {
    const message =
      error instanceof Error ? error.message : String(error ?? "Unknown error");
    const stack = error instanceof Error ? error.stack : undefined;
    bn("error-log.add", {
      source: "content",
      operation,
      code: "client_error",
      message: message.slice(0, 600),
      stack: stack?.slice(0, 2000),
    });
  }
  const contentExtensionPrefix = chrome.runtime.getURL("");
  window.addEventListener("error", (event) => {
    if (event.filename?.startsWith(contentExtensionPrefix))
      bn("error-log.add", {
        source: "content",
        operation: "uncaught",
        code: "client_error",
        message: String(event.message || "Unknown content-script error").slice(
          0,
          600,
        ),
      });
  });
  window.addEventListener("unhandledrejection", (event) => {
    const reason = event.reason;
    const stack = reason instanceof Error ? reason.stack : "";
    if (stack.includes(contentExtensionPrefix))
      bn("error-log.add", {
        source: "content",
        operation: "unhandledrejection",
        code: "client_error",
        message: String(
          reason instanceof Error ? reason.message : reason,
        ).slice(0, 600),
        stack: stack.slice(0, 2000),
      });
  });
  async function _(e, t = {}, n = gn) {
    const i = { v: le, requestId: ce(), type: e, payload: t, sentAt: de() };
    try {
      const o = await _n(chrome.runtime.sendMessage(i), e === "ai.prompt.improve" ? AI_CLIENT_TIMEOUT : n);
      if (o && typeof o == "object" && "ok" in o) return o;
      bn("error-log.add", {
        source: "content",
        operation: e,
        code: "bad_response",
        message: "Unexpected response from background.",
      });
      return {
        ok: !1,
        error: "bad_response",
        message: "Unexpected response from background.",
      };
    } catch (o) {
      const timedOut = o instanceof he;
      bn("error-log.add", {
        source: "content",
        operation: e,
        code: timedOut ? "timeout" : "unreachable",
        message: timedOut
          ? "The request timed out."
          : "Could not reach the background service.",
        stack: o instanceof Error ? o.stack?.slice(0, 2000) : undefined,
      });
      return timedOut
        ? { ok: !1, error: "timeout", message: "The request timed out." }
        : {
            ok: !1,
            error: "unreachable",
            message: "Could not reach the background service.",
          };
    }
  }
  function wn(e) {
    const t = [`<${e.tagName.toLowerCase()}`],
      n = e.getAttribute("id");
    n && t.push(` id="${n.slice(0, 100)}"`);
    const i = e.getAttribute("class");
    return i && t.push(` class="${i.slice(0, 200)}"`), t.push(">"), t.join("");
  }
  const yn = 800;
  class xn {
    wrap = null;
    state = null;
    draftTimer = null;
    pendingDraft = null;
    lastFocused = null;
    savedShotIds = new Set();
    createdShotIds = new Set();
    dragging = !1;
    manualPosition = !1;
    dragOffset = { x: 0, y: 0 };
    shell;
    cb;
    constructor(t, n) {
      (this.shell = t), (this.cb = n);
    }
    isOpen() {
      return this.state !== null;
    }
    async openNew(t, n) {
      const i = n ?? (await this.loadDraft(null));
      this.savedShotIds = new Set();
      this.createdShotIds = new Set();
      (this.state = {
        editorId: ce(),
        mode: "new",
        annotationId: null,
        target: t,
        targetLabel: vt(t.element),
        shadowHint: t.shadowHostHint,
        initial: i ?? { intent: "fix", severity: "important", comment: "" },
        saving: !1,
        error: null,
        shots: [],
        capturing: !1,
        captureError: null,
        ai: await this.loadAiState(),
      }),
        this.show(i !== null);
      if (!i) {
        const settings = await _("settings.get", {});
        if (settings.ok && settings.data.autoScreenshot)
          await this.handleCapture("element");
      }
    }
    async openExisting(t) {
      const n = await _("annotation.get", { id: t });
      if (!n.ok) return;
      const i = n.data,
        o = await this.loadDraft(t),
        r = await this.loadShots(i.screenshotAssetIds);
      this.savedShotIds = new Set(i.screenshotAssetIds ?? []);
      this.createdShotIds = new Set();
      (this.state = {
        editorId: ce(),
        mode: "edit",
        annotationId: t,
        target: null,
        targetLabel: this.describeLocator(i),
        shadowHint: !1,
        initial: o ?? {
          intent: i.intent,
          severity: i.severity,
          comment: i.currentComment,
        },
        saving: !1,
        error: null,
        shots: r,
        capturing: !1,
        captureError: null,
        ai: await this.loadAiState(),
      }),
        this.show(o !== null);
    }
    async loadAiState() {
      const t = await _("ai.providers.list").catch((error) => {
          reportContentError(error, "ai.providers.list");
          return null;
        }),
        n = t && t.ok ? t.data : [],
        i = await _("ai.provider.getActive").catch((error) => {
          reportContentError(error, "ai.provider.getActive");
          return null;
        }),
        o = i && i.ok ? i.data.activeProviderId : null,
        r = n.some((a) => a.id === o) ? o : (n[0]?.id ?? null);
      return {
        providers: n,
        activeProviderId: o,
        selectedProviderId: r,
        mode: "clear",
        contextScope: "minimal",
        consentCloud: !1,
        busy: !1,
        error: null,
        suggestion: null,
        clarification: null,
        lastRequestId: null,
        lastProviderName: null,
        lastModel: null,
      };
    }
    updateTarget(t) {
      this.state &&
        ((this.state.target = t),
        (this.manualPosition = !1),
        (this.state.targetLabel = vt(t.element)),
        (this.state.shadowHint = t.shadowHostHint),
        this.rerender(!1),
        this.position());
    }
    close() {
      this.onDragEnd();
      this.flushDraft();
      for (const t of this.state?.shots ?? []) URL.revokeObjectURL(t.objectUrl);
      this.wrap && (H(null, this.wrap), this.wrap.remove(), (this.wrap = null)),
        (this.state = null),
        this.lastFocused?.focus?.(),
        (this.lastFocused = null),
        window.removeEventListener("scroll", this.reposition, !0),
        window.removeEventListener("resize", this.reposition);
    }
    describeLocator(t) {
      return t.locator.testId
        ? `[data-testid="${t.locator.testId}"]`
        : t.locator.stableId
          ? `#${t.locator.stableId}`
          : t.elementSnapshot.tag || "element";
    }
    show(t) {
      if (!this.state) return;
      this.lastFocused = document.activeElement;
      const i = this.shell.mount()?.shadowRoot;
      i &&
        (this.ensureCss(i),
        (this.wrap = document.createElement("div")),
        this.wrap.setAttribute("data-vft", "editor"),
        (this.wrap.className = "vft-editor-wrap"),
        i.appendChild(this.wrap),
        this.rerender(t),
        this.position(),
        window.addEventListener("scroll", this.reposition, {
          capture: !0,
          passive: !0,
        }),
        window.addEventListener("resize", this.reposition, { passive: !0 }));
    }
    ensureCss(t) {
      if (!t.querySelector('[data-vft="editor-css"]')) {
        const n = document.createElement("style");
        n.setAttribute("data-vft", "editor-css"),
          (n.textContent = pn),
          t.appendChild(n);
      }
    }
    rerender(t) {
      if (!this.state || !this.wrap) return;
      const n = this.state;
      H(
        X(fn, {
          key: n.annotationId ?? "new",
          mode: n.mode,
          targetLabel: n.targetLabel,
          shadowHint: n.shadowHint,
          initial: n.initial,
          draftRecovered: t,
          saving: n.saving,
          error: n.error,
          screenshots: n.shots,
          capturing: n.capturing,
          captureError: n.captureError,
          ai: n.ai,
          onChange: (i) => this.queueDraft(i),
          onSave: (i) => void this.handleSave(i),
          onDelete: () => void this.handleDelete(),
          onCancel: (i) => this.handleCancel(i),
          onDragStart: (i) => this.startDrag(i),
          onRetarget: () => this.handleRetarget(),
          onCapture: (i) => void this.handleCapture(i),
          onRemoveScreenshot: (i) => void this.handleRemoveShot(i),
          onAiChange: (i) => this.patchAi(i),
          onAiImprove: () => void this.handleAiImprove(),
          onAiCancel: () => void this.handleAiCancel(),
          onAiAccept: () => this.handleAiAccept(),
          onAiDiscard: () =>
            this.patchAi({
              suggestion: null,
              clarification: null,
              error: null,
            }),
          onAiRegenerate: () => void this.handleAiImprove(),
        }),
        this.wrap,
      );
    }
    patchAi(t) {
      this.state &&
        ((this.state = { ...this.state, ai: { ...this.state.ai, ...t } }),
        this.rerender(!1));
    }
    currentCommentText() {
      return (
        this.wrap?.querySelector(".vft-comment")?.value ??
        this.state?.initial.comment ??
        ""
      );
    }
    async handleAiImprove() {
      if (!this.state) return;
      const t = this.state.ai,
        n = t.selectedProviderId;
      if (n) {
        this.patchAi({
          busy: !0,
          error: null,
          suggestion: null,
          clarification: null,
        });
        try {
          const i = await _("ai.prompt.improve", {
            providerId: n,
            comment: this.currentCommentText(),
            intent: this.state.initial.intent,
            severity: this.state.initial.severity,
            targetLabel: this.state.targetLabel,
            elementText:
              t.contextScope === "element" ? this.state.targetLabel : void 0,
            selector: this.state.target?.locator.css,
            xpath: this.state.target?.locator.xpath,
            elementTag: this.state.target
              ? wn(this.state.target.element)
              : void 0,
            mode: t.mode,
            contextScope: t.contextScope,
            consentCloud: t.consentCloud,
          });
          if (!i.ok) throw new Error(i.message ?? i.error);
          this.patchAi({
            suggestion: i.data.suggestion,
            clarification: i.data.clarification,
            lastRequestId: i.data.requestId,
            lastProviderName: i.data.providerName,
            lastModel: i.data.model,
          });
        } catch (i) {
          const o = i instanceof Error ? i.message : "Improve failed.";
          /cancelled|aborted/i.test(o)
            ? this.patchAi({ error: null })
            : this.patchAi({ error: o });
        } finally {
          this.patchAi({ busy: !1 });
        }
      }
    }
    async handleAiCancel() {
      const t = this.state?.ai.lastRequestId;
      t && (await _("ai.request.cancel", { requestId: t }).catch(() => null)),
        this.patchAi({ busy: !1, error: null });
    }
    handleAiAccept() {
      const t = this.state?.ai.suggestion;
      if (!t || !this.wrap) return;
      const n = this.wrap.querySelector(".vft-comment");
      n &&
        ((n.value = t), n.dispatchEvent(new Event("input", { bubbles: !0 }))),
        this.patchAi({ suggestion: null, clarification: null, error: null });
    }
    position() {
      if (!this.wrap || !this.state?.target || this.manualPosition) return;
      const target = this.state.target.element.getBoundingClientRect();
      const wrap = this.wrap;
      const width = Math.min(340, Math.max(240, window.innerWidth - 32));
      const maxHeight = Math.max(160, window.innerHeight - 32);
      const height = Math.min(wrap.scrollHeight || 480, maxHeight);
      let top = target.bottom + 12;
      if (top + height > window.innerHeight - 16) top = target.top - height - 12;
      const maxTop = Math.max(16, window.innerHeight - height - 16);
      top = Math.min(Math.max(16, top), maxTop);
      const left = Math.min(Math.max(16, target.left), Math.max(16, window.innerWidth - width - 16));
      wrap.style.width = `${width}px`;
      wrap.style.maxHeight = `${maxHeight}px`;
      wrap.style.top = `${top}px`;
      wrap.style.left = `${left}px`;
    }
    startDrag = (event) => {
      if (!this.wrap || event.button !== 0) return;
      event.preventDefault();
      const rect = this.wrap.getBoundingClientRect();
      this.manualPosition = !0;
      this.dragging = !0;
      this.dragOffset = { x: event.clientX - rect.left, y: event.clientY - rect.top };
      event.currentTarget?.setPointerCapture?.(event.pointerId);
      window.addEventListener("pointermove", this.onDragMove);
      window.addEventListener("pointerup", this.onDragEnd, { once: !0 });
      window.addEventListener("pointercancel", this.onDragEnd, { once: !0 });
    };
    onDragMove = (event) => {
      if (!this.dragging || !this.wrap) return;
      const rect = this.wrap.getBoundingClientRect();
      const maxLeft = Math.max(16, window.innerWidth - rect.width - 16);
      const maxTop = Math.max(16, window.innerHeight - rect.height - 16);
      this.wrap.style.left = `${Math.min(Math.max(16, event.clientX - this.dragOffset.x), maxLeft)}px`;
      this.wrap.style.top = `${Math.min(Math.max(16, event.clientY - this.dragOffset.y), maxTop)}px`;
    };
    onDragEnd = () => {
      this.dragging = !1;
      window.removeEventListener("pointermove", this.onDragMove);
      window.removeEventListener("pointerup", this.onDragEnd);
      window.removeEventListener("pointercancel", this.onDragEnd);
    };
    reposition = () => {
      if (!this.manualPosition) this.position();
    };
    setUi(t) {
      this.state && ((this.state = { ...this.state, ...t }), this.rerender(!1));
    }
    async handleSave(t) {
      if (!this.state) return;
      const n = this.state;
      this.setUi({ saving: !0, error: null });
      try {
        const i = n.shots.map((a) => a.id),
          o = await this.readConsoleEntries(),
          r =
            t.intent === "copy" && n.target
              ? n.target.element.outerHTML.slice(0, 8e3)
              : void 0;
        if (n.mode === "new" && n.target) {
          const a = await _("annotation.save", {
            intent: t.intent,
            severity: t.severity,
            comment: t.comment,
            locator: n.target.locator,
            elementSnapshot: n.target.snapshot,
            pageUrl: location.href,
            pageTitle: document.title,
            frameId: void 0,
            screenshotAssetIds: i,
            consoleEntries: o,
            elementHtml: r,
          });
          if (!a.ok) throw new Error(a.message ?? a.error);
        } else if (n.mode === "edit" && n.annotationId) {
          const a = await _("annotation.get", { id: n.annotationId });
          if (!a.ok) throw new Error(a.message ?? a.error);
          const d = a.data,
            c = await _("annotation.save", {
              annotationId: n.annotationId,
              intent: t.intent,
              severity: t.severity,
              comment: t.comment,
              locator: d.locator,
              elementSnapshot: d.elementSnapshot,
              pageUrl: d.pageUrl,
              pageTitle: d.pageTitle,
              screenshotAssetIds: i,
              consoleEntries: o,
              elementHtml: r ?? (t.intent === "copy" ? d.elementHtml : void 0),
            });
          if (!c.ok) throw new Error(c.message ?? c.error);
        }
        const continueAnnotating = n.mode === "new" && keepAnnotating;
        await this.deleteDraft(),
          this.close(),
          this.cb.onChanged(),
          await this.maybeAutoCopy();
        if (continueAnnotating) this.cb.onContinue?.();
      } catch (i) {
        this.setUi({
          error: i instanceof Error ? i.message : "Save failed.",
          saving: !1,
        });
      }
    }
    async maybeAutoCopy() {
      try {
        const t = await _("settings.get", {});
        if (!t.ok || !t.data.autoCopy) return;
        const n = await _("export.markdown", { scope: "page" });
        if (!n.ok) return;
        await navigator.clipboard.writeText(n.data.markdown);
      } catch (error) {
        reportContentError(error, "markdown.autoCopy");
      }
    }
    async readConsoleEntries() {
      const t = window.__vftConsole;
      if (!t?.isEnabled()) return [];
      try {
        return (await t.read()).slice(-20);
      } catch (error) {
        reportContentError(error, "console.read");
        return [];
      }
    }
    async handleDelete() {
      if (!this.state?.annotationId) return;
      const t = await _("annotation.delete", { id: this.state.annotationId });
      if (!t.ok) {
        this.setUi({ error: t.message ?? t.error });
        return;
      }
      await this.deleteDraft(), this.close(), this.cb.onChanged();
    }
    async loadShots(t) {
      const n = [];
      for (const i of t.slice(0, 10)) {
        const o = await _("screenshot.get", { id: i });
        o.ok &&
          n.push({
            id: i,
            objectUrl: o.data.dataUrl,
            width: o.data.width,
            height: o.data.height,
            redacted: o.data.redacted,
            blob: void 0,
          });
      }
      return n;
    }
    async dataUrlToBlob(t) {
      return await (await fetch(t)).blob();
    }
    maskSensitiveFields(mode) {
      const selector = [
        'input[type="password"]',
        'input[autocomplete^="cc-"]',
        'input[autocomplete="one-time-code"]',
        'input[autocomplete="current-password"]',
        'input[autocomplete="new-password"]',
        "[data-vft-secret]",
        '[data-sensitive="true"]',
      ].join(",");
      const targetRect =
        mode === "element"
          ? this.state?.target?.element?.getBoundingClientRect()
          : null;
      const captureRect = targetRect
        ? {
            left: targetRect.left - 20,
            top: targetRect.top - 20,
            right: targetRect.right + 20,
            bottom: targetRect.bottom + 20,
          }
        : {
            left: 0,
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
          };
      const fields = [...document.querySelectorAll(selector)].filter(
        (field) => {
          if (!(field instanceof HTMLElement) || !field.isConnected)
            return false;
          const rect = field.getBoundingClientRect();
          const style = getComputedStyle(field);
          return (
            rect.width > 0 &&
            rect.height > 0 &&
            style.display !== "none" &&
            style.visibility !== "hidden" &&
            Number(style.opacity) > 0 &&
            rect.right > Math.max(0, captureRect.left) &&
            rect.left < Math.min(window.innerWidth, captureRect.right) &&
            rect.bottom > Math.max(0, captureRect.top) &&
            rect.top < Math.min(window.innerHeight, captureRect.bottom)
          );
        },
      );
      if (!fields.length) return { count: 0, cleanup() {} };
      const layer = document.createElement("div");
      layer.setAttribute("data-vft-capture-mask", "");
      layer.style.cssText =
        "position:fixed!important;inset:0!important;z-index:2147483646!important;margin:0!important;padding:0!important;pointer-events:none!important;background:transparent!important;";
      for (const field of fields) {
        const rect = field.getBoundingClientRect();
        const left = Math.max(0, rect.left);
        const top = Math.max(0, rect.top);
        const right = Math.min(window.innerWidth, rect.right);
        const bottom = Math.min(window.innerHeight, rect.bottom);
        if (right <= left || bottom <= top) continue;
        const mask = document.createElement("div");
        mask.style.cssText = `position:absolute!important;left:${left}px!important;top:${top}px!important;width:${right - left}px!important;height:${bottom - top}px!important;box-sizing:border-box!important;margin:0!important;padding:0!important;border:1px solid #f87171!important;border-radius:3px!important;background:#09090b!important;opacity:1!important;visibility:visible!important;pointer-events:none!important;`;
        layer.appendChild(mask);
      }
      if (!layer.childElementCount) return { count: 0, cleanup() {} };
      (document.documentElement || document.body).appendChild(layer);
      return { count: layer.childElementCount, cleanup: () => layer.remove() };
    }
    async handleCapture(t) {
      if (this.state) {
        const editorId = this.state.editorId;
        let capturedId = null;
        let backendRejected = !1;
        this.setUi({ capturing: !0, captureError: null });
        try {
          const n = {
            annotationId: this.state.annotationId,
            mode: t,
            viewport: {
              width: window.innerWidth,
              height: window.innerHeight,
              devicePixelRatio: window.devicePixelRatio || 1,
            },
          };
          if (t === "element") {
            const r = this.state.target;
            if (!r) throw new Error("No target element for element capture.");
            const a = r.element.getBoundingClientRect();
            (n.rect = { x: a.x, y: a.y, width: a.width, height: a.height }),
              (n.viewport = {
                width: window.innerWidth,
                height: window.innerHeight,
                devicePixelRatio: window.devicePixelRatio || 1,
              });
          }
          const masks = this.maskSensitiveFields(t);
          n.autoRedacted = masks.count > 0;
          this.setEditorVisible(!1);
          let i;
          try {
            await new Promise((resolve) => requestAnimationFrame(resolve));
            i = await _("screenshot.capture", n);
          } finally {
            masks.cleanup();
            this.setEditorVisible(!0);
          }
          if (!i.ok) {
            backendRejected = !0;
            throw new Error(i.message ?? i.error);
          }
          capturedId = i.data.id;
          const o = await _("screenshot.get", { id: capturedId });
          if (!o.ok) {
            backendRejected = !0;
            throw new Error(o.message ?? o.error);
          }
          if (!this.state || this.state.editorId !== editorId) {
            await _("screenshot.delete", { id: capturedId });
            capturedId = null;
            return;
          }
          this.createdShotIds.add(capturedId);
          (this.state = {
            ...this.state,
            shots: [
              ...this.state.shots,
              {
                id: capturedId,
                objectUrl: o.data.dataUrl,
                width: i.data.width,
                height: i.data.height,
                redacted: o.data.redacted ?? i.data.redacted ?? !1,
                blob: void 0,
              },
            ],
          }),
            (capturedId = null),
            this.rerender(!1);
        } catch (n) {
          if (capturedId) await _("screenshot.delete", { id: capturedId });
          if (!backendRejected) reportContentError(n, "screenshot.capture");
          this.setUi({
            captureError: n instanceof Error ? n.message : "Capture failed.",
          });
        } finally {
          this.setUi({ capturing: !1 });
        }
      }
    }
    setEditorVisible(t) {
      this.wrap && (this.wrap.style.display = t ? "" : "none");
    }
    async handleRemoveShot(t) {
      if (!this.state) return;
      const shot = this.state.shots.find((item) => item.id === t);
      if (!shot) return;
      if (!this.savedShotIds.has(t)) {
        const result = await _("screenshot.delete", { id: t });
        if (!result.ok) {
          this.setUi({ captureError: result.message ?? result.error });
          return;
        }
        this.createdShotIds.delete(t);
      }
      this.state = {
        ...this.state,
        shots: this.state.shots.filter((item) => item.id !== t),
        captureError: null,
      };
      this.rerender(!1);
    }
    redactWrap = null;
    async openRedact(t) {
      const shot = this.state?.shots.find((o) => o.id === t),
        shadow = this.shell.mount()?.shadowRoot;
      if (!shot || !shadow) return;
      try {
        shot.blob ??= await this.dataUrlToBlob(shot.objectUrl);
        if (!this.state?.shots.some((item) => item.id === t)) return;
        this.redactWrap = document.createElement("div");
        this.redactWrap.setAttribute("data-vft", "redact");
        shadow.appendChild(this.redactWrap);
        H(
          X(mn, {
            imageUrl: shot.objectUrl,
            imageWidth: shot.width,
            imageHeight: shot.height,
            onApply: (rects) => void this.applyRedactions(t, rects),
            onCancel: () => this.closeRedact(),
          }),
          this.redactWrap,
        );
      } catch (error) {
        reportContentError(error, "screenshot.redact.open");
        this.setUi({
          captureError:
            error instanceof Error
              ? error.message
              : "Could not open screenshot redaction.",
        });
      }
    }
    closeRedact() {
      this.redactWrap &&
        (H(null, this.redactWrap),
        this.redactWrap.remove(),
        (this.redactWrap = null));
    }
    async applyRedactions(t, n) {
      const i = this.state?.shots.find((o) => o.id === t);
      if (!i) {
        this.closeRedact();
        return;
      }
      let backendRejected = !1;
      try {
        const o = i.blob ?? (await this.dataUrlToBlob(i.objectUrl)),
          r = await vn(o, n),
          a = await _("screenshot.redact", { id: t, blob: r, rects: n });
        if (!a.ok) {
          backendRejected = !0;
          throw new Error(a.message ?? a.error);
        }
        if (!this.state) return;
        const d = await new Promise((c, h) => {
          const p = new FileReader();
          (p.onload = () => c(p.result)),
            (p.onerror = () => h(new Error("Failed to read redacted image."))),
            p.readAsDataURL(r);
        });
        (this.state = {
          ...this.state,
          shots: this.state.shots.map((c) =>
            c.id === t ? { ...c, objectUrl: d, redacted: !0, blob: r } : c,
          ),
        }),
          this.rerender(!1);
      } catch (o) {
        if (!backendRejected) reportContentError(o, "screenshot.redact.apply");
        this.setUi({
          captureError: o instanceof Error ? o.message : "Redaction failed.",
        });
      } finally {
        this.closeRedact();
      }
    }
    async discardNewShots() {
      let allDeleted = !0;
      for (const id of this.createdShotIds) {
        const result = await _("screenshot.delete", { id });
        if (result.ok) this.createdShotIds.delete(id);
        else allDeleted = !1;
      }
      if (!allDeleted)
        this.setUi({
          captureError:
            "Could not clean up every unsaved screenshot. Retry cancel or retarget.",
        });
      return allDeleted;
    }
    async handleCancel(t) {
      if (!(await this.discardNewShots())) return;
      if (t) await this.deleteDraft();
      this.close();
    }
    async handleRetarget() {
      if (!this.state) return;
      const t = {
        annotationId: this.state.annotationId,
        draft: this.pendingDraft ?? this.state.initial,
      };
      if (!(await this.discardNewShots())) return;
      this.close(), this.cb.onRetargetRequest(t);
    }
    queueDraft(t) {
      (this.pendingDraft = t),
        this.draftTimer && clearTimeout(this.draftTimer),
        (this.draftTimer = setTimeout(() => {
          (this.draftTimer = null), this.persistDraft();
        }, yn));
    }
    async persistDraft() {
      if (!this.state || !this.pendingDraft) return;
      const t = this.pendingDraft;
      (!t.comment.trim() &&
        t.intent === this.state.initial.intent &&
        t.severity === this.state.initial.severity) ||
        (await _("annotation.draft.save", {
          annotationId: this.state.annotationId,
          intent: t.intent,
          severity: t.severity,
          comment: t.comment,
        }));
    }
    flushDraft() {
      this.draftTimer &&
        (clearTimeout(this.draftTimer),
        (this.draftTimer = null),
        this.persistDraft());
    }
    async loadDraft(t) {
      const n = await _("annotation.draft.get", { annotationId: t });
      if (!n.ok || !n.data || !n.data.comment.trim()) return null;
      const i = n.data,
        o = ["fix", "change", "question", "approve", "copy"].includes(i.intent)
          ? i.intent
          : "fix",
        r = ["blocking", "important", "suggestion"].includes(i.severity)
          ? i.severity
          : "important";
      return { intent: o, severity: r, comment: i.comment };
    }
    async deleteDraft() {
      this.state &&
        (await _("annotation.draft.delete", {
          annotationId: this.state.annotationId,
        }));
    }
  }
  class kn {
    enabled = !1;
    readResolver = null;
    constructor() {
      window.addEventListener("vft:console-data", this.onData);
    }
    isEnabled() {
      return this.enabled;
    }
    enable() {
      (this.enabled = !0),
        window.dispatchEvent(new CustomEvent("vft:console-enable"));
    }
    disable() {
      (this.enabled = !1),
        window.dispatchEvent(new CustomEvent("vft:console-disable"));
    }
    read() {
      return new Promise((t) => {
        (this.readResolver = t),
          window.dispatchEvent(new CustomEvent("vft:console-read")),
          setTimeout(() => {
            this.readResolver && ((this.readResolver = null), t([]));
          }, 500);
      });
    }
    clear() {
      this.disable(), this.enable();
    }
    onData = (t) => {
      const n = t.detail;
      if (this.readResolver) {
        const i = this.readResolver;
        (this.readResolver = null), i(n.entries ?? []);
      }
    };
    destroy() {
      window.removeEventListener("vft:console-data", this.onData),
        this.disable();
    }
  }
  const Cn = chrome.runtime.id,
    ue = "__vftIsolatedLoaded";
  // Injection can be requested more than once by the popup or after a SPA
  // navigation. Keep the first runtime and make subsequent injections no-ops.
  if (window[ue]) {
    return;
  }
  window[ue] = !0;
  function M() {
    return (
      (!window.__vftShell || window.__vftShell.destroyed) &&
        (window.__vftShell = new ft({
          actions: ["annotate", "copy", "copyImage", "plan", "console", "clear"],
          onAction: (e) => {
            if (e === "annotate") return toggleAnnotationMode();
            if (e === "plan") {
              const shell = window.__vftShell;
              shell?.setActionState(e, e, !1, "Membaca konfigurasi AI…");
              Promise.resolve(generatePlanFromToolbar()).then((ok) => shell?.setActionState(e, null, ok !== !1));
              return;
            }
            if (e === "copy" || e === "copyImage") {
              const shell = window.__vftShell;
              shell?.setActionState(e, e, !1);
              const task = e === "copy" ? En() : copyLatestScreenshot();
              Promise.resolve(task).then((ok) => shell?.setActionState(e, null, ok !== !1));
              return;
            }
            if (e === "console") return Sn();
            if (e === "clear") return me();
          },
        })),
      window.__vftShell
    );
  }
  let toolbarCopyFeedbackTimer = 0;
  function showToolbarCopyFeedback(message, kind = "success") {
    const shell = M(),
      root = shell.shadow;
    if (!root) return;
    let node = root.querySelector('[data-vft="copy-feedback"]');
    if (!node) {
      node = document.createElement("div");
      node.setAttribute("data-vft", "copy-feedback");
      node.setAttribute("role", "status");
      node.setAttribute("aria-live", "polite");
      node.setAttribute("aria-atomic", "true");
      node.className = "vft-copy-feedback";
      root.appendChild(node);
    }
    node.dataset.kind = kind;
    node.textContent = message;
    const rect = shell.host?.getBoundingClientRect();
    const maxWidth = Math.min(320, window.innerWidth - 16);
    const left = rect ? rect.left + rect.width / 2 - maxWidth / 2 : 8;
    node.style.left = `${Math.max(8, Math.min(left, window.innerWidth - maxWidth - 8))}px`;
    node.style.top = `${Math.max(8, (rect?.top ?? 80) - 48)}px`;
    node.style.display = "block";
    clearTimeout(toolbarCopyFeedbackTimer);
    toolbarCopyFeedbackTimer = setTimeout(
      () => node.remove(),
      kind === "error" ? 3200 : 2200,
    );
  }
  async function generatePlanFromToolbar() {
    try {
      const updatePlanProgress = (message) => M().setActionState("plan", "plan", !1, message);
      updatePlanProgress("Membaca konfigurasi AI…");
      const providersResult = await _("ai.providers.list");
      if (!providersResult.ok) throw new Error(providersResult.message || providersResult.error || "Could not load AI providers.");
      const providers = Array.isArray(providersResult.data) ? providersResult.data : [];
      const activeResult = await _("ai.provider.getActive");
      if (!activeResult.ok) throw new Error(activeResult.message || activeResult.error || "Could not read the active AI provider.");
      const activeId = activeResult.data?.activeProviderId;
      const active = providers.find((item) => item.id === activeId && item.enabled) || providers.find((item) => item.enabled && (item.hasKey || item.authMode !== "session_key"));
      if (!active) throw new Error("Sambungkan AI provider terlebih dahulu di bagian AI providers.");
      updatePlanProgress("Mengumpulkan annotation halaman…");
      const report = await _("export.markdown", { scope: await currentAnnotationScope(), includeScreenshots: true, includeConsole: true });
      if (!report.ok) throw new Error(report.message || report.error || "Could not export annotations.");
      const reportMarkdown = report.data?.markdown || "";
      const screenshotPathManifest = reportMarkdown.split("\n").filter((line) => /Screenshot (file|link|preview)|pagepin-[^`\s)]+\.png|screenshots\//i.test(line)).join("\n") || "(none)";
      const instruction = [
        "Create a complete implementation plan from these PagePin annotations.",
        "Use exactly: # Implementation Plan, ## Executive Summary, ## Goal, ## Implementation Commands, ## Findings, ## Prioritized Tasks, ## Acceptance Criteria, ## Notes, ## Source Annotations (verbatim). Summarize the full list first, then provide one concrete implementation command per annotation.",
        "Do not ask clarification questions. Include every numbered annotation exactly once. Under Findings preserve the original comment and all available metadata: URL, Element, Selector, Text, Bounding Box, Status, and Created. Under Prioritized Tasks reference the annotation number and exact UI location. If a comment is ambiguous, record an assumption in Notes instead of asking a question. Preserve every screenshot file path and screenshot link exactly as provided; never replace a local path with a placeholder or omit it. Include every annotation in Findings exactly once and reproduce the complete report under Source Annotations (verbatim). Return Markdown only.",
        "Screenshot file manifest — copy these paths and links exactly:", screenshotPathManifest,
        "<annotations>", reportMarkdown.slice(0, 10000), "</annotations>",
      ].join("\n\n");
      updatePlanProgress("Menghubungi AI provider…");
      const result = await _("ai.prompt.improve", {
        providerId: active.id,
        comment: instruction.slice(0, 11000),
        mode: "plan",
        contextScope: "minimal",
        consentCloud: active.cloud === true,
      });
      if (!result.ok) throw new Error(result.message || result.error || "AI plan generation failed.");
      if (result.data?.clarification) throw new Error(`AI plan did not follow the plan contract: ${result.data.clarification}`);
      let plan = result.data?.suggestion || "";
      if (!plan) throw new Error("AI returned an empty implementation plan.");
      const sourceAnnotations = report.data?.markdown || "";
      const screenshotPaths = sourceAnnotations.split("\n").filter((line) => /Screenshot (file|link|preview)|pagepin-[^`\s)]+\.png|screenshots\//i.test(line)).join("\n");
      const annotationHeadings = sourceAnnotations.split("\n").filter((line) => /^## \d+\. /.test(line));
      if (!/^## Executive Summary\b/m.test(plan)) {
        plan = `# Implementation Plan\n\n## Executive Summary\n\nThis plan summarizes ${annotationHeadings.length || report.data?.annotationCount || 0} PagePin annotation(s) and the required UI work.\n\n${plan}`;
      }
      if (!/^## Implementation Commands\b/m.test(plan)) {
        plan += `\n\n## Implementation Commands\n\n${annotationHeadings.map((heading) => `- ${heading.replace(/^## /, "Implement ")}; verify the requested change at the exact UI location and against its screenshot.`).join("\n")}`;
      }
      if (!plan.includes("## Source Annotations (verbatim)")) {
        plan += `\n\n## Source Annotations (verbatim)\n\n${sourceAnnotations}`;
      }
      if (screenshotPaths && !/Screenshot file|pagepin-[^`\s)]+\.png|screenshots\//i.test(plan)) {
        plan += `\n\n## Screenshot Files (verbatim)\n\n${screenshotPaths}`;
      }
      updatePlanProgress("Mengunduh implementation plan…");
      const filename = `pagepin-ai-implementation-plan-${new Date().toISOString().slice(0, 10)}.md`;
      const download = await _("file.download", { dataUrl: `data:text/markdown;charset=utf-8,${encodeURIComponent(plan)}`, filename });
      if (!download.ok) throw new Error(download.message || download.error || "Plan download failed.");
      showToolbarCopyFeedback(`AI plan generated and downloaded as ${filename}.`);
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error ?? "AI plan generation failed.");
      reportContentError(error, "toolbar.plan.generate");
      showToolbarCopyFeedback(message, "error");
      return false;
    }
  }
  async function copyLatestScreenshot() {
    try {
      const scope = await currentAnnotationScope();
      const report = await _("export.markdown", {
        scope,
        includeScreenshots: true,
        includeConsole: false,
      });
      if (!report.ok) throw new Error(report.message || report.error || "Could not find screenshots in the selected scope.");
      let ids = Array.isArray(report.data?.screenshotIds) ? report.data.screenshotIds : [];
      if (ids.length === 0) {
        const annotations = await _("annotation.list", { scope });
        if (annotations.ok && Array.isArray(annotations.data)) {
          ids = annotations.data.flatMap((annotation) => Array.isArray(annotation.screenshotAssetIds) ? annotation.screenshotAssetIds : []);
        }
      }
      ids = [...new Set(ids.filter((value) => typeof value === "string" && value))];
      if (!ids.length) {
        showToolbarCopyFeedback(`No screenshots are attached in the selected scope (${scope}).`, "error");
        return !0;
      }
      if (ids.length > 50) throw new Error("Too many screenshots to copy at once. Choose a smaller scope.");
      const images = [];
      let totalBytes = 0;
      for (const id of ids) {
        const result = await _("screenshot.get", { id });
        if (!result.ok || !result.data?.dataUrl) continue;
        const response = await fetch(result.data.dataUrl);
        if (!response.ok) continue;
        const blob = await response.blob();
        totalBytes += blob.size;
        if (totalBytes > 40 * 1024 * 1024) throw new Error("Screenshots exceed the 40 MiB clipboard limit.");
        images.push({ id, dataUrl: result.data.dataUrl, blob });
      }
      if (!images.length) throw new Error("No readable screenshots were found in the selected scope.");
      if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") throw new Error("Image clipboard is unavailable in this browser.");
      const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
      const gallery = images.map(({ dataUrl }, index) => `<figure style="margin:16px 0"><img src="${esc(dataUrl)}" alt="Screenshot ${index + 1}" style="display:block;max-width:100%;height:auto"><figcaption>Screenshot ${index + 1}</figcaption></figure>`).join("");
      const html = `<section><h2>PagePin screenshots (${images.length})</h2>${gallery}</section>`;
      const representations = {
        // Do not include text/plain here: Chrome targets may prefer it and paste
        // screenshot IDs instead of the actual images.
        "text/html": new Blob([html], { type: "text/html" }),
      };
      if (images.length === 1) {
        representations["image/png"] = images[0].blob;
      } else {
        // Clipboard has one image/png slot. Build a lossless-enough contact
        // sheet so image-only paste targets still receive every screenshot,
        // while rich editors can use the HTML gallery above.
        const bitmaps = await Promise.all(images.map((image) => createImageBitmap(image.blob)));
        const maxWidth = 1600;
        const gap = 16;
        const sizes = bitmaps.map((bitmap) => {
          const scale = Math.min(1, maxWidth / Math.max(1, bitmap.width));
          return { width: Math.max(1, Math.round(bitmap.width * scale)), height: Math.max(1, Math.round(bitmap.height * scale)), scale };
        });
        const totalHeight = sizes.reduce((sum, size) => sum + size.height, 0) + gap * (sizes.length - 1);
        if (totalHeight > 16000) {
          const shrink = 16000 / totalHeight;
          sizes.forEach((size) => { size.width = Math.max(1, Math.round(size.width * shrink)); size.height = Math.max(1, Math.round(size.height * shrink)); });
        }
        const canvas = document.createElement("canvas");
        canvas.width = Math.max(...sizes.map((size) => size.width), 1);
        canvas.height = Math.min(16000, sizes.reduce((sum, size) => sum + size.height, 0) + gap * (sizes.length - 1));
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Could not prepare the combined screenshot image.");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, canvas.width, canvas.height);
        let top = 0;
        bitmaps.forEach((bitmap, index) => {
          const size = sizes[index];
          context.drawImage(bitmap, 0, top, size.width, size.height);
          bitmap.close();
          top += size.height + gap;
        });
        const composite = await new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Could not encode the combined screenshot image.")), "image/png"));
        representations["image/png"] = composite;
      }
      await navigator.clipboard.write([new ClipboardItem(representations)]);
      showToolbarCopyFeedback(`Copied ${images.length} screenshot image${images.length === 1 ? "" : "s"} to clipboard.`);
      return !0;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error ?? "Screenshot copy failed.");
      reportContentError(error, "toolbar.screenshots.copy");
      showToolbarCopyFeedback(message, "error");
      return !1;
    }
  }
  async function writeContentReportToClipboard(markdown, screenshotIds = []) {
    const ids = [
      ...new Set(
        (Array.isArray(screenshotIds) ? screenshotIds : []).filter(
          (id) => typeof id === "string" && id,
        ),
      ),
    ];
    if (ids.length > 50)
      throw new Error("This report has too many screenshots to copy at once.");
    const images = [];
    let totalBytes = 0;
    for (const id of ids) {
      const result = await _("screenshot.get", { id });
      if (!result.ok || !result.data?.dataUrl)
        throw new Error(result.message || `Could not load screenshot ${id}.`);
      const dataUrl = result.data.dataUrl;
      const estimate = Math.floor(dataUrl.length * 0.75);
      if (estimate + totalBytes > 40 * 1024 * 1024)
        throw new Error("Screenshots exceed the 40 MiB clipboard limit.");
      const blob = await fetch(dataUrl).then((response) => {
        if (!response.ok)
          throw new Error(
            "Could not prepare a screenshot image for the clipboard.",
          );
        return response.blob();
      });
      totalBytes += blob.size;
      if (totalBytes > 40 * 1024 * 1024)
        throw new Error("Screenshots exceed the 40 MiB clipboard limit.");
      images.push({
        id,
        dataUrl,
        blob,
        redacted: result.data.redacted === true,
      });
    }
    if (!images.length) {
      if (!navigator.clipboard?.writeText)
        throw new Error("Text clipboard is not supported by this browser.");
      await navigator.clipboard.writeText(markdown);
      return { imageCount: 0, unredactedCount: 0, markdownOnly: false };
    }
    if (!navigator.clipboard?.write || typeof ClipboardItem === "undefined") {
      if (!navigator.clipboard?.writeText)
        throw new Error("Clipboard write is not supported by this browser.");
      await navigator.clipboard.writeText(markdown);
      return {
        imageCount: 0,
        unredactedCount: images.filter((image) => !image.redacted).length,
        markdownOnly: true,
      };
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
        ({ dataUrl }, index) =>
          `<figure style="margin:16px 0"><img src="${escapeHtml(dataUrl)}" alt="Screenshot ${index + 1}" style="display:block;max-width:100%;height:auto"><figcaption>Screenshot ${index + 1}</figcaption></figure>`,
      )
      .join("");
    const html = `<div><pre style="white-space:pre-wrap;font:inherit">${escapeHtml(markdown)}</pre><hr><section><h2>Screenshots (${images.length})</h2>${gallery}</section></div>`;
    const representations = {
      "text/plain": new Blob([markdown], { type: "text/plain" }),
      "text/html": new Blob([html], { type: "text/html" }),
    };
    if (images.length === 1) representations["image/png"] = images[0].blob;
    await navigator.clipboard.write([new ClipboardItem(representations)]);
    return {
      imageCount: images.length,
      unredactedCount: images.filter((image) => !image.redacted).length,
      markdownOnly: false,
    };
  }
  async function En() {
    try {
      const result = await _("export.markdown", {
        scope: await currentAnnotationScope(),
        includeScreenshots: true,
        includeConsole: true,
      });
      if (!result.ok)
        throw new Error(
          result.message || result.error || "Could not export this report.",
        );
      const copied = await writeContentReportToClipboard(
        result.data.markdown,
        result.data.screenshotIds,
      );
      const message = copied.markdownOnly
        ? "Report copied as Markdown; screenshots are not supported by this clipboard."
        : `Copied report${copied.imageCount ? ` + ${copied.imageCount} screenshot${copied.imageCount === 1 ? "" : "s"}` : ""} to rich clipboard.${copied.imageCount ? " The PNG is also saved locally." : ""}${copied.unredactedCount ? ` ${copied.unredactedCount} screenshot${copied.unredactedCount === 1 ? " is" : "s are"} not marked auto-redacted; review before sharing.` : ""}`;
      showToolbarCopyFeedback(message);
      return !0;
    } catch (error) {
      reportContentError(error, "toolbar.markdown.copy");
      showToolbarCopyFeedback(
        `Copy failed: ${error instanceof Error ? error.message.slice(0, 120) : "Clipboard unavailable."}`,
        "error",
      );
      return !1;
    }
  }
  async function Sn() {
    const e = window.__vftConsole,
      t = e?.isEnabled()
        ? await e.read().catch((error) => {
            reportContentError(error, "console.read");
            return [];
          })
        : [];
    if (t.length === 0) return;
    const n = [
      `# Console Output — ${document.title}`,
      `**URL:** ${location.href}`,
      "",
    ];
    for (const i of t.slice(-100))
      n.push(
        `[${new Date(i.ts).toISOString()}] ${i.level.toUpperCase()}: ${i.message}`,
      );
    try {
      await navigator.clipboard.writeText(
        n.join(`
`),
      );
    } catch (error) {
      reportContentError(error, "toolbar.console.copy");
    }
  }
  function An() {
    return (
      window.__vftPicker ||
        (window.__vftPicker = new tn(M(), {
          onSelect: (e) => {
            const t = window.__vftRetarget;
            (window.__vftRetarget = null), t ? Nn(t, e) : B().openNew(e);
          },
          onCancel: () => {
            window.__vftRetarget = null;
            keepAnnotating = false;
            M().setAnnotationActive(!1);
          },
        })),
      window.__vftPicker
    );
  }
  function fe() {
    return (
      window.__vftMarkers ||
        (window.__vftMarkers = new en(M(), {
          onMarkerClick: (e) => {
            B().openExisting(e);
          },
        })),
      window.__vftMarkers
    );
  }
  function B() {
    return (
      window.__vftEditor ||
        (window.__vftEditor = new xn(M(), {
          onChanged: () => {
            nt();
          },
          onContinue: () => {
            keepAnnotating && F();
          },
          onRetargetRequest: (e) => {
            (window.__vftRetarget = e), F();
          },
        })),
      window.__vftEditor
    );
  }
  async function Nn(e, t) {
    const n = B();
    e.annotationId
      ? (
          await _("annotation.retarget", {
            id: e.annotationId,
            locator: t.locator,
            elementSnapshot: t.snapshot,
          })
        ).ok && (await n.openExisting(e.annotationId))
      : await n.openNew(t, e.draft);
  }
  function scopePageKey(url) {
    try {
      const parsed = new URL(url);
      return parsed.origin + parsed.pathname;
    } catch { return ""; }
  }
  function scopeOriginKey(url) {
    try { return new URL(url).origin; } catch { return ""; }
  }
  function scopeDomainKey(url) {
    try {
      const host = new URL(url).hostname.toLowerCase();
      if (!host || host === "localhost" || /^\d+(?:\.\d+){3}$/.test(host) || host.includes(":")) return host;
      const parts = host.split(".").filter(Boolean);
      if (parts.length <= 2) return parts.join(".");
      const suffix = parts.slice(-2).join(".");
      return new Set(["co.uk", "org.uk", "ac.uk", "com.au", "net.au", "co.jp", "co.id", "com.br", "co.in"]).has(suffix) ? parts.slice(-3).join(".") : suffix;
    } catch { return ""; }
  }
  async function currentAnnotationScope() {
    const settings = await _("settings.get", {});
    return settings.ok && ["page", "url", "domain"].includes(settings.data?.annotationScope)
      ? settings.data.annotationScope
      : "page";
  }
  async function nt() {
    const scope = await currentAnnotationScope();
    const response = await _("annotation.list", { scope });
    if (!response.ok) return;
    const all = Array.isArray(response.data) ? response.data : [];
    const currentPage = scopePageKey(location.href);
    const currentOrigin = scopeOriginKey(location.href);
    const currentDomain = scopeDomainKey(location.href);
    const visible = all.filter((annotation) => {
      if (scope === "domain") return scopeDomainKey(annotation.pageUrl) === currentDomain && scopePageKey(annotation.pageUrl) === currentPage;
      if (scope === "url") return scopeOriginKey(annotation.pageUrl) === currentOrigin && scopePageKey(annotation.pageUrl) === currentPage;
      return scopePageKey(annotation.pageUrl) === currentPage;
    });
    const indexes = new Map(all.map((annotation, index) => [annotation.id, index + 1]));
    fe().setMarkers(
      visible.map((annotation) => ({ id: annotation.id, index: indexes.get(annotation.id) || 1, locator: annotation.locator })),
    );
    M().setCount(all.length);
  }
  function F() {
    const e = An();
    e.isActive() || e.start();
  }
  let keepAnnotating = false;
  function toggleAnnotationMode() {
    const picker = An();
    if (picker.isActive()) {
      keepAnnotating = false;
      picker.stop();
      M().setAnnotationActive(!1);
      showToolbarCopyFeedback("Annotation mode paused. Press Ctrl+Shift+Y to resume.");
      return;
    }
    if (window.__vftEditor?.state) {
      keepAnnotating = false;
      showToolbarCopyFeedback("Repeat annotation paused. Save or close the current annotation first.");
      return;
    }
    keepAnnotating = true;
    picker.start();
    M().setAnnotationActive(!0);
    showToolbarCopyFeedback("Annotation mode on. Save to pick another element; press Esc to finish.");
  }
  function pe(e) {
    const t = e.target;
    if (
      (t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)) ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      window.__vftPicker?.isActive() ||
      window.__vftEditor
    )
      return;
    const n = e.key.toLowerCase();
    n === "a"
      ? (e.preventDefault(), toggleAnnotationMode())
      : n === "x" && (e.preventDefault(), me());
  }
  async function me() {
    const scope = await currentAnnotationScope();
    const e = await _("annotation.list", { scope });
    const label = scope === "domain" ? "this domain" : scope === "url" ? "this URL / origin" : "this page";
    if (
      !(!e.ok || e.data.length === 0) &&
      confirm(`Delete ${e.data.length} annotation(s) in ${label}?`)
    ) {
      for (const t of e.data) await _("annotation.delete", { id: t.id });
      await nt();
    }
  }
  document.addEventListener("keydown", pe);
  function it() {
    return (
      window.__vftConsole || (window.__vftConsole = new kn()),
      window.__vftConsole
    );
  }
  function Tn() {
    document.removeEventListener("keydown", pe),
      window.__vftPicker?.stop(),
      (window.__vftPicker = void 0),
      window.__vftEditor?.close(),
      (window.__vftEditor = void 0),
      window.__vftMarkers?.destroy(),
      (window.__vftMarkers = void 0),
      window.__vftSpa?.stop(),
      (window.__vftSpa = void 0),
      window.__vftConsole?.destroy(),
      (window.__vftConsole = void 0),
      (window.__vftRetarget = null),
      window.__vftShell?.destroy(),
      (window.__vftShell = void 0),
      window.dispatchEvent(new CustomEvent("vft:teardown"));
    // Allow inspector.enable to inject a fresh runtime after Hide Toolbar.
    window[ue] = !1;
  }
  chrome.runtime.onMessage.addListener((e, t, n) => {
    if (t.id !== Cn) return;
    const i = e;
    if (i?.vft === "shortcut") {
      if (i.action === "annotate") toggleAnnotationMode();
      else if (i.action === "copy-report") void En();
      else if (i.action === "copy-image") void copyLatestScreenshot();
      else if (i.action === "copy-console") void Sn();
      else if (i.action === "clear") void me();
      return;
    }
    if (
      (i?.vft === "overlay.teardown" && Tn(),
      i?.vft === "picker.start" && F(),
      i?.vft === "overlay.hide" && M().setHidden(!0),
      i?.vft === "overlay.show" && M().setHidden(!1),
      i?.vft === "annotation.open" &&
        typeof i.id == "string" &&
        B().openExisting(i.id),
      i?.vft === "console.enable" && it().enable(),
      i?.vft === "console.disable" && it().disable(),
      i?.vft === "console.clear" && it().clear(),
      i?.vft === "console.read")
    )
      return (
        it()
          .read()
          .then((o) => n({ entries: o })),
        !0
      );
  }),
    window.addEventListener("vft:picker-start", F);
  function ve() {
    if (document.contentType !== "text/html") return;
    M().mount(), fe(), B(), nt();
    const e = new nn((t) => {
      window.__vftMarkers?.refresh(),
        bn("spa.route-changed", { url: t.url }),
        nt();
    });
    (window.__vftSpa = e), e.start();
  }
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", ve, { once: !0 })
    : ve();
})();
