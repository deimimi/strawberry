import{S as s,i as e,s as t,e as a,t as n,k as r,j as i,c as o,a as c,g as l,d as f,n as $,m as u,b as m,f as d,H as p,o as v,L as h,h as g,v as k,P as b,Q as y,R as w,r as x,w as I,l as j,B as V,u as z,T as A,U as D,V as E,W as T,X as B}from"../chunks/vendor-f19757b3.js";import{B as C}from"../chunks/Tabs.svelte_svelte&type=style&lang-e5631783.js";import{I as P}from"../chunks/Icon-bf885f20.js";import"../chunks/forward-events-aecd99fd.js";/* empty css                                                   */function _(s){let e,t,j,V,z,D,E,T,B,C,_;return E=new P({props:{path:A}}),{c(){e=a("div"),t=a("div"),j=a("div"),V=n(s[2]),z=r(),D=a("div"),i(E.$$.fragment),this.h()},l(a){e=o(a,"DIV",{class:!0});var n=c(e);t=o(n,"DIV",{class:!0});var r=c(t);j=o(r,"DIV",{class:!0});var i=c(j);V=l(i,s[2]),i.forEach(f),z=$(r),D=o(r,"DIV",{class:!0});var m=c(D);u(E.$$.fragment,m),m.forEach(f),r.forEach(f),n.forEach(f),this.h()},h(){m(j,"class","message svelte-139az0k"),m(D,"class","close svelte-139az0k"),m(t,"class","notification svelte-139az0k"),m(e,"class","berry-notification wrapper svelte-139az0k")},m(a,n){d(a,e,n),p(e,t),p(t,j),p(j,V),p(t,z),p(t,D),v(E,D,null),B=!0,C||(_=h(D,"click",s[3]),C=!0)},p(e,t){s=e,(!B||4&t)&&g(V,s[2])},i(e){B||(k(E.$$.fragment,e),b((()=>{T||(T=y(t,w,{x:200,duration:s[1]},!0)),T.run(1)})),B=!0)},o(e){x(E.$$.fragment,e),T||(T=y(t,w,{x:200,duration:s[1]},!1)),T.run(0),B=!1},d(s){s&&f(e),I(E),s&&T&&T.end(),C=!1,_()}}}function H(s){let e,t,a=s[0]&&_(s);return{c(){a&&a.c(),e=j()},l(s){a&&a.l(s),e=j()},m(s,n){a&&a.m(s,n),d(s,e,n),t=!0},p(s,[t]){s[0]?a?(a.p(s,t),1&t&&k(a,1)):(a=_(s),a.c(),k(a,1),a.m(e.parentNode,e)):a&&(V(),x(a,1,1,(()=>{a=null})),z())},i(s){t||(k(a),t=!0)},o(s){x(a),t=!1},d(s){a&&a.d(s),s&&f(e)}}}function L(s,e,t){let{removeAfter:a=4e3}=e,{duration:n=500}=e,{visible:r=!1}=e,{message:i}=e;return s.$$set=s=>{"removeAfter"in s&&t(4,a=s.removeAfter),"duration"in s&&t(1,n=s.duration),"visible"in s&&t(0,r=s.visible),"message"in s&&t(2,i=s.message)},s.$$.update=()=>{17&s.$$.dirty&&r&&setTimeout((()=>{t(0,r=!1)}),a)},[r,n,i,function(){t(0,r=!1)},a]}class N extends s{constructor(s){super(),e(this,s,L,H,t,{removeAfter:4,duration:1,visible:0,message:2})}}function Q(s){let e;return{c(){e=n("Click to show notification")},l(s){e=l(s,"Click to show notification")},m(s,t){d(s,e,t)},d(s){s&&f(e)}}}function R(s){let e,t,a,n,o;function c(e){s[2](e)}e=new C({props:{$$slots:{default:[Q]},$$scope:{ctx:s}}}),e.$on("click",(function(){D(s[1])&&s[1].apply(this,arguments)}));let l={message:"Prepare yee the way!"};return void 0!==s[0]&&(l.visible=s[0]),a=new N({props:l}),E.push((()=>T(a,"visible",c))),{c(){i(e.$$.fragment),t=r(),i(a.$$.fragment)},l(s){u(e.$$.fragment,s),t=$(s),u(a.$$.fragment,s)},m(s,n){v(e,s,n),d(s,t,n),v(a,s,n),o=!0},p(t,[r]){s=t;const i={};8&r&&(i.$$scope={dirty:r,ctx:s}),e.$set(i);const o={};!n&&1&r&&(n=!0,o.visible=s[0],B((()=>n=!1))),a.$set(o)},i(s){o||(k(e.$$.fragment,s),k(a.$$.fragment,s),o=!0)},o(s){x(e.$$.fragment,s),x(a.$$.fragment,s),o=!1},d(s){I(e,s),s&&f(t),I(a,s)}}}function S(s,e,t){let a,n;return s.$$.update=()=>{1&s.$$.dirty&&t(1,a=n?()=>{}:()=>{t(0,n=!0)})},[n,a,function(s){n=s,t(0,n)}]}export default class extends s{constructor(s){super(),e(this,s,S,R,t,{})}}