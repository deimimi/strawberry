var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;import{ah as a,S as n,i as r,s as l,e as o,k as c,c as i,a as $,d as u,n as f,b as d,E as m,f as p,H as h,L as v,ai as y,G as g,v as b,j as k,m as w,o as x,I,r as j,w as E,B as O,u as D,T as V,aj as C,U as B,ak as M,l as H,W as P,D as S,al as _,X as q,Z as N,_ as R,$ as T,t as G,g as L}from"../chunks/vendor-5c80f975.js";import{B as U}from"../chunks/Tabs.svelte_svelte&type=style&lang-68563bc5.js";import"../chunks/forward-events-35e9fa1e.js";import"../chunks/Icon-0672769f.js";/* empty css                                                   */function W(t,e){for(const s in e)({}).hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}const X=function(n){var r=n,{fallback:l}=r,o=((a,n)=>{var r={};for(var l in a)e.call(a,l)&&n.indexOf(l)<0&&(r[l]=a[l]);if(null!=a&&t)for(var l of t(a))n.indexOf(l)<0&&s.call(a,l)&&(r[l]=a[l]);return r})(r,["fallback"]);const c=new Map,i=new Map;function $(t,e,s){return(n,r)=>(t.set(r.key,{rect:n.getBoundingClientRect()}),()=>{if(e.has(r.key)){const{rect:t}=e.get(r.key);return e.delete(r.key),function(t,e,s){const{delay:n=0,duration:r=(t=>30*Math.sqrt(t)),easing:l=a,fade:c=!0}=W(W({},o),s),i=e.getBoundingClientRect(),$=t.left-i.left,u=t.top-i.top,f=t.width/i.width,d=t.height/i.height,m=Math.sqrt($*$+u*u),p=getComputedStyle(e),h="none"===p.transform?"":p.transform,v=Number(p.opacity);return{delay:n,duration:(y=r,"function"==typeof y?r(m):r),easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${c?1.5*t*v:v};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${h} translate(${e*$}px,${e*u}px) scale(${t+(1-t)*f}, ${t+(1-t)*d});\n\t\t\t`};var y}(t,n,r)}return t.delete(r.key),l&&l(n,r,s)})}return[$(i,c,!1),$(c,i,!0)]}({duration:300,fade:!1});const Z=t=>({}),z=t=>({}),A=t=>({}),F=t=>({});function J(t){let e,s,a,n,r,l,k,w,x,I,E,H,P,q;const N=t[7].header,R=S(N,t,t[6],F);let T=t[1]&&K(t);const G=t[7].content,L=S(G,t,t[6],z);return{c(){e=o("div"),s=o("div"),a=o("div"),n=o("div"),r=o("div"),R&&R.c(),l=c(),T&&T.c(),k=c(),w=o("div"),L&&L.c(),this.h()},l(t){e=i(t,"DIV",{class:!0});var o=$(e);s=i(o,"DIV",{class:!0});var c=$(s);a=i(c,"DIV",{class:!0});var d=$(a);n=i(d,"DIV",{class:!0});var m=$(n);r=i(m,"DIV",{class:!0});var p=$(r);R&&R.l(p),p.forEach(u),l=f(m),T&&T.l(m),m.forEach(u),k=f(d),w=i(d,"DIV",{class:!0});var h=$(w);L&&L.l(h),h.forEach(u),d.forEach(u),c.forEach(u),o.forEach(u),this.h()},h(){d(r,"class","header-content svelte-u9m45a"),d(n,"class","header svelte-u9m45a"),d(w,"class","content svelte-u9m45a"),d(a,"class","modal svelte-u9m45a"),m(a,"closable",t[1]),d(s,"class","wrapper svelte-u9m45a"),d(e,"class","berry-modal overlay svelte-u9m45a")},m(o,c){p(o,e,c),h(e,s),h(s,a),h(a,n),h(n,r),R&&R.m(r,null),h(n,l),T&&T.m(n,null),h(a,k),h(a,w),L&&L.m(w,null),H=!0,P||(q=v(e,"click",y(t[9])),P=!0)},p(t,e){R&&R.p&&(!H||64&e)&&g(R,N,t,t[6],e,A,F),t[1]?T?(T.p(t,e),2&e&&b(T,1)):(T=K(t),T.c(),b(T,1),T.m(n,null)):T&&(O(),j(T,1,1,(()=>{T=null})),D()),L&&L.p&&(!H||64&e)&&g(L,G,t,t[6],e,Z,z),2&e&&m(a,"closable",t[1])},i(s){H||(b(R,s),b(T),b(L,s),V((()=>{I&&I.end(1),x||(x=C(a,t[3],{key:"modal"})),x.start()})),V((()=>{E||(E=B(e,_,{},!0)),E.run(1)})),H=!0)},o(s){j(R,s),j(T),j(L,s),x&&x.invalidate(),I=M(a,t[2],{key:"modal"}),E||(E=B(e,_,{},!1)),E.run(0),H=!1},d(t){t&&u(e),R&&R.d(t),T&&T.d(),L&&L.d(t),t&&I&&I.end(),t&&E&&E.end(),P=!1,q()}}}function K(t){let e,s,a;return s=new U({props:{icon:q}}),s.$on("click",t[8]),{c(){e=o("div"),k(s.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var a=$(e);w(s.$$.fragment,a),a.forEach(u),this.h()},h(){d(e,"class","close svelte-u9m45a")},m(t,n){p(t,e,n),x(s,e,null),a=!0},p:I,i(t){a||(b(s.$$.fragment,t),a=!0)},o(t){j(s.$$.fragment,t),a=!1},d(t){t&&u(e),E(s)}}}function Q(t){let e,s,a=t[0]&&J(t);return{c(){a&&a.c(),e=H()},l(t){a&&a.l(t),e=H()},m(t,n){a&&a.m(t,n),p(t,e,n),s=!0},p(t,[s]){t[0]?a?(a.p(t,s),1&s&&b(a,1)):(a=J(t),a.c(),b(a,1),a.m(e.parentNode,e)):a&&(O(),j(a,1,1,(()=>{a=null})),D())},i(t){s||(b(a),s=!0)},o(t){j(a),s=!1},d(t){a&&a.d(t),t&&u(e)}}}function Y(t,e,s){let{$$slots:a={},$$scope:n}=e,{visible:r=!1}=e,{closable:l=!0}=e;const o=P(),[c,i]=X;return t.$$set=t=>{"visible"in t&&s(0,r=t.visible),"closable"in t&&s(1,l=t.closable),"$$scope"in t&&s(6,n=t.$$scope)},t.$$.update=()=>{1&t.$$.dirty&&o(r?"open":"close")},[r,l,c,i,function(){s(0,r=!0)},function(){s(0,r=!1)},n,a,()=>{s(0,r=!1)},()=>{s(0,r=!l&&r)}]}class tt extends n{constructor(t){super(),r(this,t,Y,Q,l,{visible:0,closable:1,open:4,close:5})}get open(){return this.$$.ctx[4]}get close(){return this.$$.ctx[5]}}function et(t){let e;return{c(){e=G("Open modal")},l(t){e=L(t,"Open modal")},m(t,s){p(t,e,s)},d(t){t&&u(e)}}}function st(t){let e;return{c(){e=G("Close me!")},l(t){e=L(t,"Close me!")},m(t,s){p(t,e,s)},d(t){t&&u(e)}}}function at(t){let e,s,a,n,r;return n=new U({props:{primary:!0,fullwidth:!0,$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){e=o("div"),s=G("I am a modal. Hear me cry!"),a=c(),k(n.$$.fragment),this.h()},l(t){e=i(t,"DIV",{class:!0});var r=$(e);s=L(r,"I am a modal. Hear me cry!"),r.forEach(u),a=f(t),w(n.$$.fragment,t),this.h()},h(){d(e,"class","modal-content svelte-d2myit")},m(t,l){p(t,e,l),h(e,s),p(t,a,l),x(n,t,l),r=!0},p(t,e){const s={};8&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){r||(b(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&u(e),t&&u(a),E(n,t)}}}function nt(t){let e,s,a,n,r;function l(e){t[2](e)}e=new U({props:{$$slots:{default:[et]},$$scope:{ctx:t}}}),e.$on("click",t[1]);let o={$$slots:{content:[at]},$$scope:{ctx:t}};return void 0!==t[0]&&(o.visible=t[0]),a=new tt({props:o}),N.push((()=>R(a,"visible",l))),{c(){k(e.$$.fragment),s=c(),k(a.$$.fragment)},l(t){w(e.$$.fragment,t),s=f(t),w(a.$$.fragment,t)},m(t,n){x(e,t,n),p(t,s,n),x(a,t,n),r=!0},p(t,[s]){const r={};8&s&&(r.$$scope={dirty:s,ctx:t}),e.$set(r);const l={};8&s&&(l.$$scope={dirty:s,ctx:t}),!n&&1&s&&(n=!0,l.visible=t[0],T((()=>n=!1))),a.$set(l)},i(t){r||(b(e.$$.fragment,t),b(a.$$.fragment,t),r=!0)},o(t){j(e.$$.fragment,t),j(a.$$.fragment,t),r=!1},d(t){E(e,t),t&&u(s),E(a,t)}}}function rt(t,e,s){let a=!1;return[a,function(){s(0,a=!0)},function(t){a=t,s(0,a)}]}export default class extends n{constructor(t){super(),r(this,t,rt,nt,l,{})}}