import{_ as t,S as e,i as s,s as r,D as a,e as n,c as o,a as c,d as $,b as l,N as p,f,G as i,L as u,E as h,v as d,r as m,V as g,j as y,k as v,m as b,n as w,o as x,w as E,t as j,g as k}from"./vendor-fcc0febb.js";/* empty css                    */import{c as A}from"./forward-events-9a1b4b68.js";import{l as N,N as T}from"./Navbar-2acbdf56.js";import{b as D}from"./paths-45dac81d.js";const L=new Map;function S(e){const s=e;if(L.has(s))return L.get(s);e=t(e).replace(/\\\*/g,"[\\s\\S]*");const r=new RegExp(`^${e}$`);return L.set(s,r),r}function C(t,e){e=(e=function(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string                 or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of             strings, but found a type of '${typeof t}' in the array`)}return!0}))}(e,"patterns")).map(S);for(const s of e)if(s.test(t))return!0;return!1}function I(t){let e,s,r,g,y;const v=t[6].default,b=a(v,t,t[5],null);return{c(){e=n("li"),s=n("a"),b&&b.c(),this.h()},l(t){e=o(t,"LI",{class:!0});var r=c(e);s=o(r,"A",{href:!0,class:!0});var a=c(s);b&&b.l(a),a.forEach($),r.forEach($),this.h()},h(){l(s,"href",t[0]),l(s,"class","svelte-161lg2p"),p(s,"active",t[1]),l(e,"class","berry-navbar-link svelte-161lg2p")},m(a,n){f(a,e,n),i(e,s),b&&b.m(s,null),r=!0,g||(y=u(t[2].call(null,s)),g=!0)},p(t,[e]){b&&b.p&&(!r||32&e)&&h(b,v,t,t[5],e,null,null),(!r||1&e)&&l(s,"href",t[0]),2&e&&p(s,"active",t[1])},i(t){r||(d(b,t),r=!0)},o(t){m(b,t),r=!1},d(t){t&&$(e),b&&b.d(t),g=!1,y()}}}function M(t,e,s){let r,a;g(t,N,(t=>s(4,a=t)));let{$$slots:n={},$$scope:o}=e,{href:c}=e,{pattern:$}=e;const l=A();return t.$$set=t=>{"href"in t&&s(0,c=t.href),"pattern"in t&&s(3,$=t.pattern),"$$scope"in t&&s(5,o=t.$$scope)},t.$$.update=()=>{24&t.$$.dirty&&s(1,r=C(null==a?void 0:a.pathname,$))},[c,r,l,$,a,o,n]}class V extends e{constructor(t){super(),s(this,t,M,I,r,{href:0,pattern:3})}}function z(t){let e,s,r;return{c(){e=j("🍓 "),s=n("span"),r=j("strawberry"),this.h()},l(t){e=k(t,"🍓 "),s=o(t,"SPAN",{class:!0});var a=c(s);r=k(a,"strawberry"),a.forEach($),this.h()},h(){l(s,"class","text")},m(t,a){f(t,e,a),f(t,s,a),i(s,r)},d(t){t&&$(e),t&&$(s)}}}function G(t){let e;return{c(){e=j("Components")},l(t){e=k(t,"Components")},m(t,s){f(t,e,s)},d(t){t&&$(e)}}}function H(t){let e;return{c(){e=j("Typography")},l(t){e=k(t,"Typography")},m(t,s){f(t,e,s)},d(t){t&&$(e)}}}function O(t){let e,s,r,a;return e=new V({props:{href:D+"/components",pattern:[`${D}/components`,`${D}/components/*`],$$slots:{default:[G]},$$scope:{ctx:t}}}),r=new V({props:{href:D+"/typography",pattern:D+"/typography",$$slots:{default:[H]},$$scope:{ctx:t}}}),{c(){y(e.$$.fragment),s=v(),y(r.$$.fragment)},l(t){b(e.$$.fragment,t),s=w(t),b(r.$$.fragment,t)},m(t,n){x(e,t,n),f(t,s,n),x(r,t,n),a=!0},p(t,s){const a={};2&s&&(a.$$scope={dirty:s,ctx:t}),e.$set(a);const n={};2&s&&(n.$$scope={dirty:s,ctx:t}),r.$set(n)},i(t){a||(d(e.$$.fragment,t),d(r.$$.fragment,t),a=!0)},o(t){m(e.$$.fragment,t),m(r.$$.fragment,t),a=!1},d(t){E(e,t),t&&$(s),E(r,t)}}}function P(t){let e,s,r,p;s=new T({props:{logoHref:D+"/",$$slots:{"nav-links":[O],logo:[z]},$$scope:{ctx:t}}});const u=t[0].default,g=a(u,t,t[1],null);return{c(){e=n("div"),y(s.$$.fragment),r=v(),g&&g.c(),this.h()},l(t){e=o(t,"DIV",{class:!0});var a=c(e);b(s.$$.fragment,a),r=w(a),g&&g.l(a),a.forEach($),this.h()},h(){l(e,"class","app-layout svelte-z2vi6d")},m(t,a){f(t,e,a),x(s,e,null),i(e,r),g&&g.m(e,null),p=!0},p(t,[e]){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r),g&&g.p&&(!p||2&e)&&h(g,u,t,t[1],e,null,null)},i(t){p||(d(s.$$.fragment,t),d(g,t),p=!0)},o(t){m(s.$$.fragment,t),m(g,t),p=!1},d(t){t&&$(e),E(s),g&&g.d(t)}}}function R(t,e,s){let{$$slots:r={},$$scope:a}=e;return t.$$set=t=>{"$$scope"in t&&s(1,a=t.$$scope)},[r,a]}class _ extends e{constructor(t){super(),s(this,t,R,P,r,{})}}export{_ as L};
