const t=Object.defineProperty, e=Object.prototype.hasOwnProperty, s=Object.getOwnPropertySymbols, r=Object.prototype.propertyIsEnumerable, n=(e, s, r) => (s in e?t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: r }):e[s]=r), o=(t, o) => {
    for (var a in o||(o={}))e.call(o, a)&&n(t, a, o[a]);if (s) for (var a of s(o))r.call(o, a)&&n(t, a, o[a]);return t;
};import { j as $, o as _, B as A, S as a, l as b, D as C, s as c, E as D, d, n as E, c as f, b as g, t as h, H as I, i, A as j, v as k, x as L, a as l, f as m, C as N, w as O, y as P, q as p, u as q, r as R, p as S, z as T, F as U, e as u, G as V, h as v, k as w, m as x, g as y } from "./chunks/index-69b941c4.js";function z(t) {
    let e, s, r, n, o, a, i, c=`${t[1].message}`;return document.title=e=t[0], { c() {
        s=l(), r=u("h1"), n=h(t[0]), o=l(), a=u("p"), i=h(c), this.h();
    },
    l(e) {
        p("[data-svelte=\"svelte-1o9r2ue\"]", document.head).forEach(d), s=f(e), r=g(e, "H1", { class: !0 });const l=m(r);n=y(l, t[0]), l.forEach(d), o=f(e), a=g(e, "P", { class: !0 });const u=m(a);i=y(u, c), u.forEach(d), this.h();
    },
    h() {
        v(r, "class", "svelte-244z8z"), v(a, "class", "svelte-244z8z");
    },
    m(t, e) {
        $(t, s, e), $(t, r, e), w(r, n), $(t, o, e), $(t, a, e), w(a, i);
    },
    p(t, [s]) {
        1&s&&e!==(e=t[0])&&(document.title=e), 1&s&&b(n, t[0]), 2&s&&c!==(c=`${t[1].message}`)&&b(i, c);
    },
    i: E,
    o: E,
    d(t) {
        t&&d(s), t&&d(r), t&&d(o), t&&d(a);
    } };
} function B(t, e, s) {
    let{ status: r }=e, { error: n }=e;return t.$$set=(t) => {
        "status"in t&&s(0, r=t.status), "error"in t&&s(1, n=t.error);
    }, [r, n];
} class W extends a {
    constructor(t) {
        super(), i(this, t, B, z, c, { status: 0, error: 1 });
    }
} function K(t) {
    let e, s, r;const n=[t[4]||{}];let o=t[2][1];function a(t) {
        let e={};for (let s=0;s<n.length;s+=1)e=x(e, n[s]);return { props: e };
    } return o&&(e=new o(a())), { c() {
        e&&_(e.$$.fragment), s=S();
    },
    l(t) {
        e&&R(e.$$.fragment, t), s=S();
    },
    m(t, n) {
        e&&q(e, t, n), $(t, s, n), r=!0;
    },
    p(t, r) {
        const i=16&r?k(n, [O(t[4]||{})]):{};if (o!==(o=t[2][1])) {
            if (e) {
                C();const t=e;P(t.$$.fragment, 1, 0, (() => {
                    T(t, 1);
                })), D();
            }o?(e=new o(a()), _(e.$$.fragment), L(e.$$.fragment, 1), q(e, s.parentNode, s)):e=null;
        } else o&&e.$set(i);
    },
    i(t) {
        r||(e&&L(e.$$.fragment, t), r=!0);
    },
    o(t) {
        e&&P(e.$$.fragment, t), r=!1;
    },
    d(t) {
        t&&d(s), e&&T(e, t);
    } };
} function M(t) {
    let e, s;return e=new W({ props: { status: t[0], error: t[1] }}), { c() {
        _(e.$$.fragment);
    },
    l(t) {
        R(e.$$.fragment, t);
    },
    m(t, r) {
        q(e, t, r), s=!0;
    },
    p(t, s) {
        const r={};1&s&&(r.status=t[0]), 2&s&&(r.error=t[1]), e.$set(r);
    },
    i(t) {
        s||(L(e.$$.fragment, t), s=!0);
    },
    o(t) {
        P(e.$$.fragment, t), s=!1;
    },
    d(t) {
        T(e, t);
    } };
} function Y(t) {
    let e, s, r, n;const o=[M, K], a=[];function i(t, e) {
        return t[1]?0:1;
    } return e=i(t), s=a[e]=o[e](t), { c() {
        s.c(), r=S();
    },
    l(t) {
        s.l(t), r=S();
    },
    m(t, s) {
        a[e].m(t, s), $(t, r, s), n=!0;
    },
    p(t, n) {
        const c=e;e=i(t), e===c
            ?a[e].p(t, n)
            :(C(), P(a[c], 1, 1, (() => {
                    a[c]=null;
                })), D(), s=a[e], s?s.p(t, n):(s=a[e]=o[e](t), s.c()), L(s, 1), s.m(r.parentNode, r));
    },
    i(t) {
        n||(L(s), n=!0);
    },
    o(t) {
        P(s), n=!1;
    },
    d(t) {
        a[e].d(t), t&&d(r);
    } };
} function G(t) {
    let e, s=t[6]&&H(t);return { c() {
        e=u("div"), s&&s.c(), this.h();
    },
    l(t) {
        e=g(t, "DIV", { "id": !0, "aria-live": !0, "aria-atomic": !0, "class": !0 });const r=m(e);s&&s.l(r), r.forEach(d), this.h();
    },
    h() {
        v(e, "id", "svelte-announcer"), v(e, "aria-live", "assertive"), v(e, "aria-atomic", "true"), v(e, "class", "svelte-1fp0tmk");
    },
    m(t, r) {
        $(t, e, r), s&&s.m(e, null);
    },
    p(t, r) {
        t[6]?s?s.p(t, r):(s=H(t), s.c(), s.m(e, null)):s&&(s.d(1), s=null);
    },
    d(t) {
        t&&d(e), s&&s.d();
    } };
} function H(t) {
    let e, s;return { c() {
        e=h("Navigated to "), s=h(t[7]);
    },
    l(r) {
        e=y(r, "Navigated to "), s=y(r, t[7]);
    },
    m(t, r) {
        $(t, e, r), $(t, s, r);
    },
    p(t, e) {
        128&e&&b(s, t[7]);
    },
    d(t) {
        t&&d(e), t&&d(s);
    } };
} function F(t) {
    let e, s, r, n;const o=[t[3]||{}];let a={ $$slots: { default: [Y]}, $$scope: { ctx: t }};for (let c=0;c<o.length;c+=1)a=x(a, o[c]);e=new t[8]({ props: a });let i=t[5]&&G(t);return { c() {
        _(e.$$.fragment), s=l(), i&&i.c(), r=S();
    },
    l(t) {
        R(e.$$.fragment, t), s=f(t), i&&i.l(t), r=S();
    },
    m(t, o) {
        q(e, t, o), $(t, s, o), i&&i.m(t, o), $(t, r, o), n=!0;
    },
    p(t, [s]) {
        const n=8&s?k(o, [O(t[3]||{})]):{};2071&s&&(n.$$scope={ dirty: s, ctx: t }), e.$set(n), t[5]?i?i.p(t, s):(i=G(t), i.c(), i.m(r.parentNode, r)):i&&(i.d(1), i=null);
    },
    i(t) {
        n||(L(e.$$.fragment, t), n=!0);
    },
    o(t) {
        P(e.$$.fragment, t), n=!1;
    },
    d(t) {
        T(e, t), t&&d(s), i&&i.d(t), t&&d(r);
    } };
} function J(t, e, s) {
    let{ status: r }=e, { error: n }=e, { stores: o }=e, { page: a }=e, { components: i }=e, { props_0: c=null }=e, { props_1: l=null }=e;const u=i[0];j("__svelte__", o), A(o.page.notify);let h=!1, p=!1, d=null;return N((() => {
        const t=o.page.subscribe((() => {
            h&&(s(6, p=!0), s(7, d=document.title));
        }));return s(5, h=!0), t;
    })), t.$$set=(t) => {
        "status"in t&&s(0, r=t.status), "error"in t&&s(1, n=t.error), "stores"in t&&s(9, o=t.stores), "page"in t&&s(10, a=t.page), "components"in t&&s(2, i=t.components), "props_0"in t&&s(3, c=t.props_0), "props_1"in t&&s(4, l=t.props_1);
    }, t.$$.update=() => {
        1536&t.$$.dirty&&o.page.set(a);
    }, [r, n, i, c, l, h, p, d, u, o, a];
} class X extends a {
    constructor(t) {
        super(), i(this, t, J, F, c, { status: 0, error: 1, stores: 9, page: 10, components: 2, props_0: 3, props_1: 4 });
    }
}let Q;const Z={};function tt(t) {
    let e, s, r, n, o, a, i, c;return { c() {
        e=u("nav"), s=u("div"), r=u("a"), n=h("🍓 "), o=u("span"), a=h("STRAWBERRY!"), i=l(), c=u("div"), this.h();
    },
    l(t) {
        e=g(t, "NAV", { class: !0 });const l=m(e);s=g(l, "DIV", { class: !0 });const u=m(s);r=g(u, "A", { href: !0, class: !0 });const h=m(r);n=y(h, "🍓 "), o=g(h, "SPAN", { class: !0 });const p=m(o);a=y(p, "STRAWBERRY!"), p.forEach(d), h.forEach(d), u.forEach(d), i=f(l), c=g(l, "DIV", { class: !0 }), m(c).forEach(d), l.forEach(d), this.h();
    },
    h() {
        v(o, "class", "text svelte-xg7w9t"), v(r, "href", "/"), v(r, "class", "logo svelte-xg7w9t"), v(s, "class", "left svelte-xg7w9t"), v(c, "class", "right svelte-xg7w9t"), v(e, "class", "svelte-xg7w9t");
    },
    m(t, l) {
        $(t, e, l), w(e, s), w(s, r), w(r, n), w(r, o), w(o, a), w(e, i), w(e, c);
    },
    p: E,
    i: E,
    o: E,
    d(t) {
        t&&d(e);
    } };
} class et extends a {
    constructor(t) {
        super(), i(this, t, null, tt, c, {});
    }
} function st(t) {
    let e, s, r, n;s=new et({});const o=t[1].default, a=U(o, t, t[0], null);return { c() {
        e=u("div"), _(s.$$.fragment), r=l(), a&&a.c(), this.h();
    },
    l(t) {
        e=g(t, "DIV", { class: !0 });const n=m(e);R(s.$$.fragment, n), r=f(n), a&&a.l(n), n.forEach(d), this.h();
    },
    h() {
        v(e, "class", "app-layout svelte-jb4lyj");
    },
    m(t, o) {
        $(t, e, o), q(s, e, null), w(e, r), a&&a.m(e, null), n=!0;
    },
    p(t, [e]) {
        a&&a.p&&1&e&&V(a, o, t, t[0], e, null, null);
    },
    i(t) {
        n||(L(s.$$.fragment, t), L(a, t), n=!0);
    },
    o(t) {
        P(s.$$.fragment, t), P(a, t), n=!1;
    },
    d(t) {
        t&&d(e), T(s), a&&a.d(t);
    } };
} function rt(t, e, s) {
    let{ $$slots: r={}, $$scope: n }=e;return t.$$set=(t) => {
        "$$scope"in t&&s(0, n=t.$$scope);
    }, [n, r];
} const nt=Object.freeze({ __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: class extends a {
        constructor(t) {
            super(), i(this, t, rt, st, c, {});
        }
    } });const ot=[[/^\/$/, [[() => (function (t, e) {
    if (!e) return t();if (void 0===Q) {
        const t=document.createElement("link").relList;Q=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload";
    } return Promise.all(e.map(((t) => {
        if (t in Z) return;Z[t]=!0;const e=t.endsWith(".css"), s=e?"[rel=\"stylesheet\"]":"";if (document.querySelector(`link[href="${t}"]${s}`)) return;const r=document.createElement("link");return r.rel=e?"stylesheet":Q, e||(r.as="script", r.crossOrigin=""), r.href=t, document.head.appendChild(r), e
            ?new Promise(((t, e) => {
                r.addEventListener("load", t), r.addEventListener("error", e);
            }))
            :void 0;
    }))).then((() => t()));
}((() => import("./pages/index.svelte-cc526d64.js")), ["/_app/pages/index.svelte-cc526d64.js", "/_app/assets/pages/index.svelte-5a26bcc8.css", "/_app/chunks/index-69b941c4.js"]))][0]]]];function at(t) {
    for (;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;return t;
} function it() {
    return { x: pageXOffset, y: pageYOffset };
} class ct {
    constructor({ base: t, routes: e }) {
        this.base=t, this.routes=e, this.history=window.history||{ pushState: () => {}, replaceState: () => {}, scrollRestoration: "auto" };
    }init(t) {
        let e;this.renderer=t, t.router=this, "scrollRestoration"in this.history&&(this.history.scrollRestoration="manual"), addEventListener("beforeunload", (() => {
            this.history.scrollRestoration="auto";
        })), addEventListener("load", (() => {
            this.history.scrollRestoration="manual";
        })), addEventListener("scroll", (() => {
            clearTimeout(e), e=setTimeout((() => {
                const t=o(o({}, history.state||{}), { "sveltekit:scroll": it() });history.replaceState(t, document.title, window.location.href);
            }), 50);
        })), addEventListener("click", ((t) => {
            if (t.button||t.which!==1) return;if (t.metaKey||t.ctrlKey||t.shiftKey||t.altKey) return;if (t.defaultPrevented) return;const e=at(t.target);if (!e) return;if (!e.href) return;const s=typeof e.href=="object"&&e.href.constructor.name==="SVGAnimatedString", r=String(s?e.href.baseVal:e.href);if (r===location.href) return void (location.hash||t.preventDefault());if (e.hasAttribute("download")||e.getAttribute("rel")==="external") return;if (s?e.target.baseVal:e.target) return;const n=new URL(r);if (n.pathname===location.pathname&&n.search===location.search) return;const o=this.parse(n);if (o) {
                const s=e.hasAttribute("sveltekit:noscroll");this.history.pushState({}, "", n.href), this._navigate(o, s?it():null, [], n.hash), t.preventDefault();
            }
        })), addEventListener("popstate", ((t) => {
            if (t.state) {
                const e=new URL(location.href), s=this.parse(e);s?this._navigate(s, t.state["sveltekit:scroll"], []):location.href=location.href;
            }
        })), document.body.setAttribute("tabindex", "-1"), this.history.replaceState({}, "", location.href);
    }parse(t) {
        if (t.origin!==location.origin) return null;if (!t.pathname.startsWith(this.base)) return null;const e=t.pathname.slice(this.base.length)||"/", s=this.routes.filter((([t]) => t.test(e)));if (s.length>0) {
            const r=new URLSearchParams(t.search);return { id: `${e}?${r}`, routes: s, path: e, query: r };
        }
    } async goto(t, { noscroll: e=!1, replaceState: s=!1 }={}, r) {
        const n=new URL(t, (function (t) {
            let e=t.baseURI;if (!e) {
                const s=t.getElementsByTagName("base");e=s.length?s[0].href:t.URL;
            } return e;
        }(document))), o=this.parse(n);return o?(this.history[s?"replaceState":"pushState"]({}, "", t), this._navigate(o, e?it():null, r, n.hash)):(location.href=t, new Promise((() => {})));
    } async _navigate(t, e, s, r) {
        this.renderer.notify({ path: t.path, query: t.query }), location.pathname.endsWith("/")&&location.pathname!=="/"&&history.replaceState({}, "", `${location.pathname.slice(0, -1)}${location.search}`), await this.renderer.update(t, s), document.body.focus();const n=r&&document.getElementById(r.slice(1));e?scrollTo(e.x, e.y):n?scrollTo(0, n.getBoundingClientRect().top+scrollY):scrollTo(0, 0);
    }
} function lt(t) {
    if (t.error) {
        const e=typeof t.error=="string"?new Error(t.error):t.error, s=t.status;return e instanceof Error?!s||s<400||s>599?(console.warn("\"error\" returned from load() without a valid status code — defaulting to 500"), { status: 500, error: e }):{ status: s, error: e }:{ status: 500, error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`) };
    } if (t.redirect) {
        if (!t.status||Math.floor(t.status/100)!==3) return { status: 500, error: new Error("\"redirect\" property returned from load() must be accompanied by a 3xx status code") };if (typeof t.redirect!="string") return { status: 500, error: new Error("\"redirect\" property returned from load() must be a string") };
    } return t;
} function ut(t) {
    const e=I(t);let s=!0;return { notify: function () {
        s=!0, e.update(((t) => t));
    },
    set: function (t) {
        s=!1, e.set(t);
    },
    subscribe: function (t) {
        let r;return e.subscribe(((e) => {
            (void 0===r||s&&e!==r)&&t(r=e);
        }));
    } };
} class ht {
    constructor({ Root: t, layout: e, target: s, session: r, host: n }) {
        this.Root=t, this.layout=e, this.host=n, this.router=null, this.target=s, this.started=!1, this.current={ page: null, query: null, session_changed: !1, nodes: [], contexts: []}, this.caches=new Map, this.prefetching={ id: null, promise: null }, this.stores={ page: ut({}), navigating: I(null), session: I(r) }, this.$session=null, this.root=null;const o=(t) => {
            const e=at(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href));
        };let a;addEventListener("touchstart", o), addEventListener("mousemove", ((t) => {
            clearTimeout(a), a=setTimeout((() => {
                o(t);
            }), 20);
        }));let i=!1;this.stores.session.subscribe((async (t) => {
            if (this.$session=t, !i) return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e, []);
        })), i=!0;
    } async start(t, e, s) {
        const r={ stores: this.stores, error: s, status: e, page: t.page };if (s)r.components=[this.layout.default];else {
            const e=await this._hydrate(t);if (e.redirect) throw new Error("TODO client-side redirects");Object.assign(r, e.props), this.current=e.state;
        } this.root=new this.Root({ target: this.target, props: r, hydrate: !0 }), this.started=!0;
    }notify({ path: t, query: e }) {
        dispatchEvent(new CustomEvent("sveltekit:navigation-start")), this.stores.navigating.set({ from: { path: this.current.page.path, query: this.current.page.query }, to: { path: t, query: e }});
    } async update(t, e) {
        const s=this.token={}, r=await this._get_navigation_result(t);if (s===this.token) {
            if (r.reload)location.reload();else if (r.redirect) {
                if (!(e.length>10||e.includes(this.current.page.path))) return void this.router.goto(r.redirect, { replaceState: !0 }, [...e, this.current.page.path]);this.root.$set({ status: 500, error: new Error("Redirect loop") });
            } else this.current=r.state, this.root.$set(r.props), this.stores.navigating.set(null), await 0;dispatchEvent(new CustomEvent("sveltekit:navigation-end")), this.prefetching.promise=null, this.prefetching.id=null;
        }
    } async prefetch(t) {
        const e=this.router.parse(t);if (e) return this.prefetching.promise=this._get_navigation_result(e), this.prefetching.id=e.id, await this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`);
    } async _get_navigation_result(t) {
        if (this.prefetching.id===t.id) return this.prefetching.promise;for (let e=0;e<t.routes.length;e+=1) {
            const s=t.routes[e], [r, n, o]=s;if (s.length===1) return { reload: !0 };let a=e+1;for (;a<t.routes.length;) {
                const e=t.routes[a];if (e[0].toString()!==r.toString()) break;e.length!==1&&e[1].forEach(((t) => t())), a+=1;
            } const i=n.map(((t) => t())), c={ host: this.host, path: t.path, params: o?o(s[0].exec(t.path)):{}, query: t.query }, l=await this._hydrate({ nodes: i, page: c });if (l) return l;
        } return { state: { page: null, query: null, session_changed: !1, contexts: [], nodes: []}, props: { status: 404, error: new Error(`Not found: ${t.path}`) }};
    } async _hydrate({ nodes: t, page: n }) {
        const a={ status: 200, error: null, components: []}, i=(t, n) => {
            if (!this.started) {
                const n=typeof t=="string"?t:t.url, o=document.querySelector(`script[type="svelte-data"][url="${n}"]`);if (o) {
                    const t=JSON.parse(o.textContent), { body: n }=t, a=((t, n) => {
                        const o={};for (var a in t)e.call(t, a)&&n.indexOf(a)<0&&(o[a]=t[a]);if (t!=null&&s) for (var a of s(t))n.indexOf(a)<0&&r.call(t, a)&&(o[a]=t[a]);return o;
                    })(t, ["body"]);return Promise.resolve(new Response(n, a));
                }
            } return fetch(t, n);
        }, c=n.query.toString(), l={ page: n, query: c, session_changed: !1, nodes: [], contexts: []}, u=[this.layout, ...t], h=[];let p, d;const f={ params: Object.keys(n.params).filter(((t) => !this.current.page||this.current.page.params[t]!==n.params[t])), query: c!==this.current.query, session: this.current.session_changed, context: !1 };try {
            for (let t=0;t<u.length;t+=1) {
                const e=this.current.nodes[t], s=this.current.contexts[t], { default: r, preload: g, load: m }=await u[t];if (a.components[t]=r, g) throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if (!e||r!==e.component||f.params.some(((t) => e.uses.params.has(t)))||f.query&&e.uses.query||f.session&&e.uses.session||f.context&&e.uses.context) {
                    const e=n.path+c, s=this.caches.get(r), u=s&&s.get(e);let g, y;if (!u||f.context&&u.node.uses.context) {
                        g={ component: r, uses: { params: new Set, query: !1, session: !1, context: !1 }};const t={};for (const s in n.params)Object.defineProperty(t, s, { get: () => (g.uses.params.add(s), n.params[s]), enumerable: !0 });const e=this.$session;if (m&&(y=await m.call(null, { page: { host: n.host,
                            path: n.path,
                            params: t,
                            get query() {
                                return g.uses.query=!0, n.query;
                            } },
                        get session() {
                            return g.uses.session=!0, e;
                        },
                        get context() {
                            return g.uses.context=!0, o({}, p);
                        },
                        fetch: i }), !y)) return;
                    } else ({ node: g, loaded: y }=u);if (y) {
                        if (y=lt(y), y.error) return a.error=y.error, a.status=y.status||500, l.nodes=[], { redirect: d, props: a, state: l };if (y.redirect) {
                            d=y.redirect;break;
                        } if (y.context&&(f.context=!0, p=o(o({}, p), y.context)), y.maxage) {
                            this.caches.has(r)||this.caches.set(r, new Map);const t=this.caches.get(r), s={ node: g, loaded: y };t.set(e, s);let n=!1;const o=setTimeout((() => {
                                a();
                            }), 1e3*y.maxage), a=() => {
                                t.get(e)===s&&t.delete(e), i(), clearTimeout(o);
                            }, i=this.stores.session.subscribe((() => {
                                n&&a();
                            }));n=!0;
                        }h[t]=y.props;
                    }l.nodes[t]=g, l.contexts[t]=p;
                } else l.nodes[t]=e, l.contexts[t]=p=s;
            }(await Promise.all(h)).forEach(((t, e) => {
                t&&(a[`props_${e}`]=t);
            })), this.current.page&&n.path===this.current.page.path&&!f.query||(a.page=n);
        } catch (g) {
            a.error=g, a.status=500, l.nodes=[];
        } return { redirect: d, props: a, state: l };
    }
} async function pt({ paths: t, target: e, session: s, error: r, status: n, nodes: o, page: a }) {
    const i=new ct({ base: t.base, routes: ot }), c=new ht({ Root: X, layout: nt, target: e, session: s, host: a.host });i.init(c), await c.start({ nodes: o, page: a }, n, r), dispatchEvent(new CustomEvent("sveltekit:start"));
} export { pt as start };
