const e={};import{S as t,i as s,s as n,F as r,I as c,x as o,y as a,A as l,o as $,e as u,j as i,c as p,a as h,l as f,d,V as m,G as g,m as v,f as b,g as k,H as x,v as y,W as I,J as A,X as E,p as w,r as N,u as z,z as P,t as S,b as V,R as j,T as D,U as C,h as L}from"../../chunks/index-c1703bba.js";import{c as M}from"../../chunks/forward-events-e98659b2.js";function T(e){let t;const s=e[2].default,n=r(s,e,e[1],null);return{c(){n&&n.c()},l(e){n&&n.l(e)},m(e,s){n&&n.m(e,s),t=!0},p(e,[t]){n&&n.p&&2&t&&c(n,s,e,e[1],t,null,null)},i(e){t||(o(n,e),t=!0)},o(e){a(n,e),t=!1},d(e){n&&n.d(e)}}}function U(t,s,n){let{$$slots:r={},$$scope:c}=s,{group:o=[]}=s;return l("berry-checkbox-group",{add:e=>{n(0,o=[...o,e])},remove:e=>{n(0,o=o.filter((t=>t===e)))}}),e.DEV&&!Array.isArray(o)&&console.error("'group' prop must be an Array"),t.$$set=e=>{"group"in e&&n(0,o=e.group),"$$scope"in e&&n(1,c=e.$$scope)},[o,c,r]}class B extends t{constructor(e){super(),s(this,e,U,T,n,{group:0})}}const F=e=>({}),G=e=>({});function H(e){let t,s,n,l,I,A,E=[{type:"checkbox"},e[1]],w={};for(let r=0;r<E.length;r+=1)w=$(w,E[r]);const N=e[5].label,z=r(N,e,e[4],G);return{c(){t=u("label"),s=u("input"),n=i(),z&&z.c(),this.h()},l(e){t=p(e,"LABEL",{class:!0});var r=h(t);s=p(r,"INPUT",{type:!0}),n=f(r),z&&z.l(r),r.forEach(d),this.h()},h(){m(s,w),g(s,"svelte-1thz2i1",!0),v(t,"class","berry-input-checkbox input-wrapper svelte-1thz2i1")},m(r,c){b(r,t,c),k(t,s),k(t,n),z&&z.m(t,null),l=!0,I||(A=x(e[0].call(null,s)),I=!0)},p(e,[t]){m(s,w=y(E,[{type:"checkbox"},2&t&&e[1]])),g(s,"svelte-1thz2i1",!0),z&&z.p&&16&t&&c(z,N,e,e[4],t,F,G)},i(e){l||(o(z,e),l=!0)},o(e){a(z,e),l=!1},d(e){e&&d(t),z&&z.d(e),I=!1,A()}}}function J(e,t,s){const n=["value","checked"];let r=I(t,n),{$$slots:c={},$$scope:o}=t,{value:a}=t,{checked:l=!1}=t;const u=M(),i=A("berry-checkbox-group");return e.$$set=e=>{t=$($({},t),E(e)),s(1,r=I(t,n)),"value"in e&&s(2,a=e.value),"checked"in e&&s(3,l=e.checked),"$$scope"in e&&s(4,o=e.$$scope)},e.$$.update=()=>{var t;8&e.$$.dirty&&(t=l,i&&(t?i.add(a):i.remove(a)))},[u,r,a,l,o,c]}class R extends t{constructor(e){super(),s(this,e,J,H,n,{value:2,checked:3})}}function W(e){let t,s;return{c(){t=u("span"),s=S("Check me out! I'm checkbox"),this.h()},l(e){t=p(e,"SPAN",{slot:!0});var n=h(t);s=V(n,"Check me out! I'm checkbox"),n.forEach(d),this.h()},h(){v(t,"slot","label")},m(e,n){b(e,t,n),k(t,s)},d(e){e&&d(t)}}}function X(e){let t,s;return{c(){t=u("span"),s=S("Mango"),this.h()},l(e){t=p(e,"SPAN",{slot:!0});var n=h(t);s=V(n,"Mango"),n.forEach(d),this.h()},h(){v(t,"slot","label")},m(e,n){b(e,t,n),k(t,s)},d(e){e&&d(t)}}}function q(e){let t,s;return{c(){t=u("span"),s=S("Nothing else"),this.h()},l(e){t=p(e,"SPAN",{slot:!0});var n=h(t);s=V(n,"Nothing else"),n.forEach(d),this.h()},h(){v(t,"slot","label")},m(e,n){b(e,t,n),k(t,s)},d(e){e&&d(t)}}}function K(e){let t,s,n,r,c,o,a,l=e[0][0]+"",$=e[0][0]+"",u=e[0][1]+"";return{c(){t=S("I like "),s=S(l),n=S(", "),r=S($),c=S(" and "),o=S(u),a=S("!")},l(e){t=V(e,"I like "),s=V(e,l),n=V(e,", "),r=V(e,$),c=V(e," and "),o=V(e,u),a=V(e,"!")},m(e,l){b(e,t,l),b(e,s,l),b(e,n,l),b(e,r,l),b(e,c,l),b(e,o,l),b(e,a,l)},p(e,t){1&t&&l!==(l=e[0][0]+"")&&L(s,l),1&t&&$!==($=e[0][0]+"")&&L(r,$),1&t&&u!==(u=e[0][1]+"")&&L(o,u)},d(e){e&&d(t),e&&d(s),e&&d(n),e&&d(r),e&&d(c),e&&d(o),e&&d(a)}}}function O(e){let t,s,n=e[0][0]+"";return{c(){t=S("I like "),s=S(n)},l(e){t=V(e,"I like "),s=V(e,n)},m(e,n){b(e,t,n),b(e,s,n)},p(e,t){1&t&&n!==(n=e[0][0]+"")&&L(s,n)},d(e){e&&d(t),e&&d(s)}}}function Q(e){let t,s,n,r,c,l,$,m,g;function v(e,t){return 1==e[0].length?O:e[0].length>1?K:void 0}r=new R({props:{value:"mango",$$slots:{label:[X]},$$scope:{ctx:e}}}),l=new R({props:{value:"nothing else",$$slots:{label:[q]},$$scope:{ctx:e}}});let x=v(e),y=x&&x(e);return{c(){t=u("div"),s=S("I like:"),n=i(),w(r.$$.fragment),c=i(),w(l.$$.fragment),$=i(),m=u("div"),y&&y.c()},l(e){t=p(e,"DIV",{});var o=h(t);s=V(o,"I like:"),o.forEach(d),n=f(e),N(r.$$.fragment,e),c=f(e),N(l.$$.fragment,e),$=f(e),m=p(e,"DIV",{});var a=h(m);y&&y.l(a),a.forEach(d)},m(e,o){b(e,t,o),k(t,s),b(e,n,o),z(r,e,o),b(e,c,o),z(l,e,o),b(e,$,o),b(e,m,o),y&&y.m(m,null),g=!0},p(e,t){const s={};4&t&&(s.$$scope={dirty:t,ctx:e}),r.$set(s);const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),l.$set(n),x===(x=v(e))&&y?y.p(e,t):(y&&y.d(1),y=x&&x(e),y&&(y.c(),y.m(m,null)))},i(e){g||(o(r.$$.fragment,e),o(l.$$.fragment,e),g=!0)},o(e){a(r.$$.fragment,e),a(l.$$.fragment,e),g=!1},d(e){e&&d(t),e&&d(n),P(r,e),e&&d(c),P(l,e),e&&d($),e&&d(m),y&&y.d()}}}function Y(e){let t,s,n,r,c;function l(t){e[1](t)}t=new R({props:{value:"checkie",$$slots:{label:[W]},$$scope:{ctx:e}}});let $={$$slots:{default:[Q]},$$scope:{ctx:e}};return void 0!==e[0]&&($.group=e[0]),n=new B({props:$}),j.push((()=>D(n,"group",l))),{c(){w(t.$$.fragment),s=i(),w(n.$$.fragment)},l(e){N(t.$$.fragment,e),s=f(e),N(n.$$.fragment,e)},m(e,r){z(t,e,r),b(e,s,r),z(n,e,r),c=!0},p(e,[s]){const c={};4&s&&(c.$$scope={dirty:s,ctx:e}),t.$set(c);const o={};5&s&&(o.$$scope={dirty:s,ctx:e}),!r&&1&s&&(r=!0,o.group=e[0],C((()=>r=!1))),n.$set(o)},i(e){c||(o(t.$$.fragment,e),o(n.$$.fragment,e),c=!0)},o(e){a(t.$$.fragment,e),a(n.$$.fragment,e),c=!1},d(e){P(t,e),e&&d(s),P(n,e)}}}function Z(e,t,s){let n=[];return[n,function(e){n=e,s(0,n)}]}export default class extends t{constructor(e){super(),s(this,e,Z,Y,n,{})}}