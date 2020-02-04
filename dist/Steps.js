!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Steps=e()}(this,(function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e,n){t.classList[n?"add":"remove"](e)}let $;function g(t){$=t}function b(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,i)})}}}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const v=[],w=[],k=[],y=[],z=Promise.resolve();let E=!1;function L(t){k.push(t)}function _(){const t=new Set;do{for(;v.length;){const t=v.shift();g(t),C(t.$$)}for(;w.length;)w.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];t.has(n)||(n(),t.add(n))}k.length=0}while(v.length);for(;y.length;)y.pop()();E=!1}function C(t){null!==t.fragment&&(t.update(),o(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(L))}const I=new Set;let A,M;function R(){A={r:0,c:[],p:A}}function T(){A.r||o(A.c),A=A.p}function H(t,e){t&&t.i&&(I.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(I.has(t))return;I.add(t),A.c.push(()=>{I.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function j(t){t&&t.c()}function N(t,n,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,r),L(()=>{const n=c.map(e).filter(i);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(L)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,z.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(e,i,r,s,c,a,l=[-1]){const u=$;g(e);const f=i.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:l};let p=!1;d.ctx=r?r(e,f,(t,n,o=n)=>(d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&O(e,t)),n)):[],d.update(),p=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),i.target&&(i.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(i.target)):d.fragment&&d.fragment.c(),i.intro&&H(e.$$.fragment),N(e,i.target,i.anchor),_()),g(u)}function Y(e){let n,i,r,l,f,d;return{c(){n=u("svg"),i=u("path"),this.c=t,h(i,"d",e[1]),h(i,"fill",r=e[2]||"currentColor"),h(n,"height",l=e[0]+"px"),h(n,"viewBox","0 0 24 24"),h(n,"width",f=e[0]+"px"),m(n,"horizontal",e[3]),m(n,"vertical",e[4]),m(n,"clockwise",e[5]),m(n,"counterclockwise",e[6]),d=[p(n,"click",e[9]),p(n,"dblclick",e[10])]},m(t,e){c(t,n,e),s(n,i)},p(t,e){2&e[0]&&h(i,"d",t[1]),4&e[0]&&r!==(r=t[2]||"currentColor")&&h(i,"fill",r),1&e[0]&&l!==(l=t[0]+"px")&&h(n,"height",l),1&e[0]&&f!==(f=t[0]+"px")&&h(n,"width",f),8&e[0]&&m(n,"horizontal",t[3]),16&e[0]&&m(n,"vertical",t[4]),32&e[0]&&m(n,"clockwise",t[5]),64&e[0]&&m(n,"counterclockwise",t[6])},i:t,o:t,d(t){t&&a(n),o(d)}}}function q(t){return"clockwise"===t||"counterclockwise"===t}function F(t){return"horizontal"===t||"vertical"===t}function P(t,e,n){let o,i,r,s,{size:c=24}=e,{path:a=""}=e,{flip:l=""}=e,{spin:u=""}=e,{color:f=""}=e;return t.$set=t=>{"size"in t&&n(0,c=t.size),"path"in t&&n(1,a=t.path),"flip"in t&&n(7,l=t.flip),"spin"in t&&n(8,u=t.spin),"color"in t&&n(2,f=t.color)},t.$$.update=()=>{128&t.$$.dirty[0]&&n(3,o=F(l)&&"horizontal"===l),128&t.$$.dirty[0]&&n(4,i=F(l)&&"vertical"===l),256&t.$$.dirty[0]&&n(5,r=q(u)&&"clockwise"===u),256&t.$$.dirty[0]&&n(6,s=q(u)&&"counterclockwise"===u)},[c,a,f,o,i,r,s,l,u,function(e){x(t,e)},function(e){x(t,e)}]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class U extends M{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}svg.horizontal{-webkit-transform:scaleX(-1);transform:scaleX(-1)}svg.vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}svg.clockwise{-webkit-animation:clockwise 2s linear infinite;animation:clockwise 2s linear infinite}@-webkit-keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes clockwise{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}svg.counterclockwise{-webkit-animation:counterclockwise 2s linear infinite;animation:counterclockwise 2s linear infinite}@-webkit-keyframes counterclockwise{0%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes counterclockwise{0%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}</style>",X(this,{target:this.shadowRoot},P,Y,r,{size:0,path:1,flip:7,spin:8,color:2}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["size","path","flip","spin","color"]}get size(){return this.$$.ctx[0]}set size(t){this.$set({size:t}),_()}get path(){return this.$$.ctx[1]}set path(t){this.$set({path:t}),_()}get flip(){return this.$$.ctx[7]}set flip(t){this.$set({flip:t}),_()}get spin(){return this.$$.ctx[8]}set spin(t){this.$set({spin:t}),_()}get color(){return this.$$.ctx[2]}set color(t){this.$set({color:t}),_()}}customElements.define("berry-icon",U);var Z="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";function D(e){let n;return{c(){n=f(e[3])},m(t,e){c(t,n,e)},p(t,e){8&e[0]&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(n,t[3])},i:t,o:t,d(t){t&&a(n)}}}function G(e){let n;const o=new U({props:{path:Z}});return{c(){j(o.$$.fragment)},m(t,e){N(o,t,e),n=!0},p:t,i(t){n||(H(o.$$.fragment,t),n=!0)},o(t){S(o.$$.fragment,t),n=!1},d(t){B(o,t)}}}function J(e){let n,o,i,r,u,f,$,g;const b=[G,D],x=[];function v(t,e){return t[2]?0:1}return i=v(e),r=x[i]=b[i](e),{c(){n=l("div"),o=l("span"),r.c(),u=d(),f=l("slot"),this.c=t,h(o,"class","progress-label"),m(o,"active",e[1]),h(n,"class","step-item"),m(n,"active",e[1]),m(n,"vertical",e[0]),g=p(n,"click",e[4])},m(t,e){c(t,n,e),s(n,o),x[i].m(o,null),s(n,u),s(n,f),$=!0},p(t,e){let s=i;i=v(t),i===s?x[i].p(t,e):(R(),S(x[s],1,1,()=>{x[s]=null}),T(),r=x[i],r||(r=x[i]=b[i](t),r.c()),H(r,1),r.m(o,null)),2&e[0]&&m(o,"active",t[1]),2&e[0]&&m(n,"active",t[1]),1&e[0]&&m(n,"vertical",t[0])},i(t){$||(H(r),$=!0)},o(t){S(r),$=!1},d(t){t&&a(n),x[i].d(),g()}}}function K(t,e,n){let{vertical:o=!1}=e,{active:i=!1}=e,{completed:r=!1}=e,{position:s}=e;return t.$set=t=>{"vertical"in t&&n(0,o=t.vertical),"active"in t&&n(1,i=t.active),"completed"in t&&n(2,r=t.completed),"position"in t&&n(3,s=t.position)},[o,i,r,s,function(e){x(t,e)}]}class Q extends M{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.step-item{cursor:pointer;background-color:transparent;position:relative;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-flex:1;flex:auto;min-height:40px;line-height:24px;padding:8px 12px;border-radius:4px}.step-item.active{background-color:#dcebff;color:#196eff}.step-item+.step-item{margin-left:10px}.progress-label{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;min-width:35px;height:35px;border-radius:50%;background-color:#fff;color:#196eff;border:2px solid #196eff}.progress-label.active{background-color:#196eff;color:#fff}</style>",X(this,{target:this.shadowRoot},K,J,r,{vertical:0,active:1,completed:2,position:3}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["vertical","active","completed","position"]}get vertical(){return this.$$.ctx[0]}set vertical(t){this.$set({vertical:t}),_()}get active(){return this.$$.ctx[1]}set active(t){this.$set({active:t}),_()}get completed(){return this.$$.ctx[2]}set completed(t){this.$set({completed:t}),_()}get position(){return this.$$.ctx[3]}set position(t){this.$set({position:t}),_()}}function V(t,e,n){const o=t.slice();return o[8]=e[n],o[10]=n,o}function W(t){let e,n,o;return{c(){e=l("slot"),o=d(),h(e,"name","step"),h(e,"step",n={...t[8],active:t[0]===t[10],completed:t[0]>t[10],index:t[10]})},m(t,n){c(t,e,n),c(t,o,n)},p(t,o){3&o[0]&&n!==(n={...t[8],active:t[0]===t[10],completed:t[0]>t[10],index:t[10]})&&h(e,"step",n)},d(t){t&&a(e),t&&a(o)}}}function tt(t){let e;const n=new Q({props:{active:t[0]===t[10],completed:t[0]>t[10],position:t[10]+1,$$slots:{default:[W]},$$scope:{ctx:t}}});return n.$on("click",(function(...e){return t[7](t[10],...e)})),{c(){j(n.$$.fragment)},m(t,o){N(n,t,o),e=!0},p(e,o){t=e;const i={};1&o[0]&&(i.active=t[0]===t[10]),1&o[0]&&(i.completed=t[0]>t[10]),2051&o[0]&&(i.$$scope={dirty:o,ctx:t}),n.$set(i)},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){S(n.$$.fragment,t),e=!1},d(t){B(n,t)}}}function et(e){let n,o,i,r,u,f,p=e[1],$=[];for(let t=0;t<p.length;t+=1)$[t]=tt(V(e,p,t));const g=t=>S($[t],1,1,()=>{$[t]=null});return{c(){n=l("div"),o=l("div");for(let t=0;t<$.length;t+=1)$[t].c();i=d(),r=l("div"),u=l("slot"),this.c=t,h(o,"class","steps"),m(o,"horizontal",e[2]),m(o,"vertical",e[3]),h(u,"name","content"),h(u,"activeindex",e[0]),h(r,"class","content"),h(n,"class","wrapper")},m(t,e){c(t,n,e),s(n,o);for(let t=0;t<$.length;t+=1)$[t].m(o,null);s(n,i),s(n,r),s(r,u),f=!0},p(t,e){if(19&e[0]){let n;for(p=t[1],n=0;n<p.length;n+=1){const i=V(t,p,n);$[n]?($[n].p(i,e),H($[n],1)):($[n]=tt(i),$[n].c(),H($[n],1),$[n].m(o,null))}for(R(),n=p.length;n<$.length;n+=1)g(n);T()}4&e[0]&&m(o,"horizontal",t[2]),8&e[0]&&m(o,"vertical",t[3]),(!f||1&e[0])&&h(u,"activeindex",t[0])},i(t){if(!f){for(let t=0;t<p.length;t+=1)H($[t]);f=!0}},o(t){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)S($[t]);f=!1},d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}($,t)}}}function nt(t){return["horizontal","vertical"].includes(t)}function ot(t,e,n){let{steps:o=[]}=e,{direction:i="horizontal"}=e,{activeIndex:r=0}=e;const s=b();function c(t){n(0,r=t),s("step",t)}let a,l;return t.$set=t=>{"steps"in t&&n(1,o=t.steps),"direction"in t&&n(5,i=t.direction),"activeIndex"in t&&n(0,r=t.activeIndex)},t.$$.update=()=>{32&t.$$.dirty[0]&&n(2,a=nt(i)),32&t.$$.dirty[0]&&n(3,l=nt(i)),12&t.$$.dirty[0]&&(a||l||(n(2,a=!0),console.warn('Invalid direction. Use "horizontal" or "vertical".')))},[r,o,a,l,c,i,s,t=>c(t)]}customElements.define("berry-steps-item",Q);class it extends M{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.steps{display:-webkit-box;display:flex}</style>",X(this,{target:this.shadowRoot},ot,et,r,{steps:1,direction:5,activeIndex:0}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["steps","direction","activeIndex"]}get steps(){return this.$$.ctx[1]}set steps(t){this.$set({steps:t}),_()}get direction(){return this.$$.ctx[5]}set direction(t){this.$set({direction:t}),_()}get activeIndex(){return this.$$.ctx[0]}set activeIndex(t){this.$set({activeIndex:t}),_()}}return customElements.define("berry-steps",it),it.Item=Q,it}));
