import{S as t,i as e,s as $,D as s,e as n,c as r,a as c,d as o,b as a,E as l,f,F as p,G as u,v as m,r as i,j as d,k as g,m as h,n as x,o as v,w,t as y,g as k}from"../chunks/vendor-5c80f975.js";import{D as b}from"../chunks/Dropdown-3298f51c.js";import{c as j}from"../chunks/forward-events-35e9fa1e.js";/* empty css                                                   */import{B as D}from"../chunks/Tabs.svelte_svelte&type=style&lang-68563bc5.js";import"../chunks/Icon-0672769f.js";/* empty css                                                   */function H(t){let e,$,d,g;const h=t[3].default,x=s(h,t,t[2],null);return{c(){e=n("div"),x&&x.c(),this.h()},l(t){e=r(t,"DIV",{class:!0});var $=c(e);x&&x.l($),$.forEach(o),this.h()},h(){a(e,"class","menu-item svelte-dhbwxm"),l(e,"active",t[0])},m(s,n){f(s,e,n),x&&x.m(e,null),$=!0,d||(g=p(t[1].call(null,e)),d=!0)},p(t,[s]){x&&x.p&&(!$||4&s)&&u(x,h,t,t[2],s,null,null),1&s&&l(e,"active",t[0])},i(t){$||(m(x,t),$=!0)},o(t){i(x,t),$=!1},d(t){t&&o(e),x&&x.d(t),d=!1,g()}}}function P(t,e,$){let{$$slots:s={},$$scope:n}=e,{active:r=!1}=e;const c=j();return t.$$set=t=>{"active"in t&&$(0,r=t.active),"$$scope"in t&&$(2,n=t.$$scope)},[r,c,n,s]}class E extends t{constructor(t){super(),e(this,t,P,H,$,{active:0})}}function I(t){let e,$,d,g;const h=t[5].default,x=s(h,t,t[4],null);return{c(){e=n("a"),x&&x.c(),this.h()},l(t){e=r(t,"A",{href:!0,class:!0});var $=c(e);x&&x.l($),$.forEach(o),this.h()},h(){a(e,"href",t[0]),a(e,"class","menu-item svelte-ztjvk2"),l(e,"active",t[1])},m(s,n){f(s,e,n),x&&x.m(e,null),$=!0,d||(g=p(t[2].call(null,e)),d=!0)},p(t,[s]){x&&x.p&&(!$||16&s)&&u(x,h,t,t[4],s,null,null),(!$||1&s)&&a(e,"href",t[0]),2&s&&l(e,"active",t[1])},i(t){$||(m(x,t),$=!0)},o(t){i(x,t),$=!1},d(t){t&&o(e),x&&x.d(t),d=!1,g()}}}function L(t,e,$){let s,{$$slots:n={},$$scope:r}=e,{path:c=""}=e,{href:o=""}=e;const a=j();return t.$$set=t=>{"path"in t&&$(3,c=t.path),"href"in t&&$(0,o=t.href),"$$scope"in t&&$(4,r=t.$$scope)},t.$$.update=()=>{9&t.$$.dirty&&$(1,s=o===c)},[o,s,a,c,r,n]}class S extends t{constructor(t){super(),e(this,t,L,I,$,{path:3,href:0})}}function T(t){let e;return{c(){e=y("Purple.")},l(t){e=k(t,"Purple.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function _(t){let e;return{c(){e=y("Penguin.")},l(t){e=k(t,"Penguin.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function C(t){let e;return{c(){e=y("Has.")},l(t){e=k(t,"Has.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function z(t){let e;return{c(){e=y("Dropped.")},l(t){e=k(t,"Dropped.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function A(t){let e,$,s,n,r,c,a,l;return e=new E({props:{$$slots:{default:[T]},$$scope:{ctx:t}}}),s=new E({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),r=new E({props:{$$slots:{default:[C]},$$scope:{ctx:t}}}),a=new E({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment),$=g(),d(s.$$.fragment),n=g(),d(r.$$.fragment),c=g(),d(a.$$.fragment)},l(t){h(e.$$.fragment,t),$=x(t),h(s.$$.fragment,t),n=x(t),h(r.$$.fragment,t),c=x(t),h(a.$$.fragment,t)},m(t,o){v(e,t,o),f(t,$,o),v(s,t,o),f(t,n,o),v(r,t,o),f(t,c,o),v(a,t,o),l=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const c={};1&$&&(c.$$scope={dirty:$,ctx:t}),s.$set(c);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),r.$set(o);const l={};1&$&&(l.$$scope={dirty:$,ctx:t}),a.$set(l)},i(t){l||(m(e.$$.fragment,t),m(s.$$.fragment,t),m(r.$$.fragment,t),m(a.$$.fragment,t),l=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),i(r.$$.fragment,t),i(a.$$.fragment,t),l=!1},d(t){w(e,t),t&&o($),w(s,t),t&&o(n),w(r,t),t&&o(c),w(a,t)}}}function B(t){let e;return{c(){e=y("Click for dropdown")},l(t){e=k(t,"Click for dropdown")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function F(t){let e,$;return e=new D({props:{slot:"button",$$slots:{default:[B]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){v(e,t,s),$=!0},p(t,$){const s={};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(m(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){w(e,t)}}}function G(t){let e;return{c(){e=y("See.")},l(t){e=k(t,"See.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function V(t){let e;return{c(){e=y("The.")},l(t){e=k(t,"The.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function q(t){let e;return{c(){e=y("Hash.")},l(t){e=k(t,"Hash.")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function J(t){let e,$,s,n,r,c;return e=new S({props:{href:"#see",$$slots:{default:[G]},$$scope:{ctx:t}}}),s=new S({props:{href:"#the",$$slots:{default:[V]},$$scope:{ctx:t}}}),r=new S({props:{href:"#hash",$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment),$=g(),d(s.$$.fragment),n=g(),d(r.$$.fragment)},l(t){h(e.$$.fragment,t),$=x(t),h(s.$$.fragment,t),n=x(t),h(r.$$.fragment,t)},m(t,o){v(e,t,o),f(t,$,o),v(s,t,o),f(t,n,o),v(r,t,o),c=!0},p(t,$){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const c={};1&$&&(c.$$scope={dirty:$,ctx:t}),s.$set(c);const o={};1&$&&(o.$$scope={dirty:$,ctx:t}),r.$set(o)},i(t){c||(m(e.$$.fragment,t),m(s.$$.fragment,t),m(r.$$.fragment,t),c=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),i(r.$$.fragment,t),c=!1},d(t){w(e,t),t&&o($),w(s,t),t&&o(n),w(r,t)}}}function K(t){let e;return{c(){e=y("Linked dropdown")},l(t){e=k(t,"Linked dropdown")},m(t,$){f(t,e,$)},d(t){t&&o(e)}}}function M(t){let e,$;return e=new D({props:{slot:"button",$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment)},l(t){h(e.$$.fragment,t)},m(t,s){v(e,t,s),$=!0},p(t,$){const s={};1&$&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){$||(m(e.$$.fragment,t),$=!0)},o(t){i(e.$$.fragment,t),$=!1},d(t){w(e,t)}}}function N(t){let e,$,s,n;return e=new b({props:{$$slots:{button:[F],default:[A]},$$scope:{ctx:t}}}),s=new b({props:{$$slots:{button:[M],default:[J]},$$scope:{ctx:t}}}),{c(){d(e.$$.fragment),$=g(),d(s.$$.fragment)},l(t){h(e.$$.fragment,t),$=x(t),h(s.$$.fragment,t)},m(t,r){v(e,t,r),f(t,$,r),v(s,t,r),n=!0},p(t,[$]){const n={};1&$&&(n.$$scope={dirty:$,ctx:t}),e.$set(n);const r={};1&$&&(r.$$scope={dirty:$,ctx:t}),s.$set(r)},i(t){n||(m(e.$$.fragment,t),m(s.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),i(s.$$.fragment,t),n=!1},d(t){w(e,t),t&&o($),w(s,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,N,$,{})}}