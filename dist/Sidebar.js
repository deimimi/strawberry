!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sidebar=e()}(this,(function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function u(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function f(t,e,n){t.classList[n?"add":"remove"](e)}let p;function h(t){p=t}const m=[],g=[],b=[],$=[],x=Promise.resolve();let v=!1;function y(t){b.push(t)}let k=!1;const _=new Set;function w(){if(!k){k=!0;do{for(let t=0;t<m.length;t+=1){const e=m[t];h(e),E(e.$$)}for(m.length=0;g.length;)g.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];_.has(e)||(_.add(e),e())}b.length=0}while(m.length);for(;$.length;)$.pop()();v=!1,k=!1,_.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const L=new Set;let M,T;function H(t,e){t&&t.i&&(L.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push(()=>{L.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function C(t,n,r){const{fragment:s,on_mount:c,on_destroy:a,after_update:l}=t.$$;s&&s.m(n,r),y(()=>{const n=c.map(e).filter(i);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(y)}function R(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function S(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,x.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(e,i,r,s,c,l,d=[-1]){const u=p;h(e);const f=i.props||{},m=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:d};let g=!1;if(m.ctx=r?r(e,f,(t,n,...o)=>{const i=o.length?o[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=i)&&(m.bound[t]&&m.bound[t](i),g&&S(e,t)),n}):[],m.update(),g=!0,o(m.before_update),m.fragment=!!s&&s(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();i.intro&&H(e.$$.fragment),C(e,i.target,i.anchor),w()}h(u)}function z(e){let n,o;return{c(){n=l("div"),n.innerHTML="<slot></slot>",this.c=t,u(n,"class","sidebar-item"),f(n,"active",e[0])},m(t,i,r){var s,a,l,d;c(t,n,i),r&&o(),s=n,a="click",l=e[1],s.addEventListener(a,l,d),o=()=>s.removeEventListener(a,l,d)},p(t,[e]){1&e&&f(n,"active",t[0])},i:t,o:t,d(t){t&&a(n),o()}}}function N(t,e,n){let{active:o=!1}=e;return t.$set=t=>{"active"in t&&n(0,o=t.active)},[o,function(e){!function(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}(t,e)}]}"function"==typeof HTMLElement&&(T=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){R(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class B extends T{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.sidebar-item{cursor:pointer;background-color:transparent;position:relative}.sidebar-item{display:flex;align-items:center;min-height:40px;line-height:24px;text-decoration:none;padding:8px 12px;border-radius:4px}.sidebar-item>:global(a){display:flex;align-items:center;min-height:40px;line-height:24px;text-decoration:none;padding:8px 12px;border-radius:4px}.sidebar-item>:global(a){margin:calc(8px*-1) calc(12px*-1);color:inherit;flex:auto}.sidebar-item:not(.active):hover{background-color:#f0f0f0}.sidebar-item:not(.active)>:global(a:focus){background-color:#f0f0f0}.sidebar-item.active{background-color:#dcebff;color:#196eff}.sidebar-item+.sidebar-item{margin-top:3px}</style>",j(this,{target:this.shadowRoot},N,z,r,{active:0}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),w()))}static get observedAttributes(){return["active"]}get active(){return this.$$.ctx[0]}set active(t){this.$set({active:t}),w()}}function O(t,e,n){const o=t.slice();return o[1]=e[n],o[3]=n,o}function q(t){let e;return{c(){e=l("slot")},m(t,n){c(t,e,n)},d(t){t&&a(e)}}}function I(t){let e,n,o;return{c(){e=l("slot"),o=d(),u(e,"name","item"),u(e,"item",n={...t[1],index:t[3]})},m(t,n){c(t,e,n),c(t,o,n)},p(t,o){1&o&&n!==(n={...t[1],index:t[3]})&&u(e,"item",n)},d(t){t&&a(e),t&&a(o)}}}function P(t){let e;const n=new B({props:{active:t[1].active,$$slots:{default:[I]},$$scope:{ctx:t}}});return n.$on("click",(function(){i(t[1].onclick)&&t[1].onclick.apply(this,arguments)})),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,o){C(n,t,o),e=!0},p(e,o){t=e;const i={};1&o&&(i.active=t[1].active),17&o&&(i.$$scope={dirty:o,ctx:t}),n.$set(i)},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){A(n.$$.fragment,t),e=!1},d(t){R(n,t)}}}function D(e){let n,i,r,f,p,h,m,g=e[0],b=[];for(let t=0;t<g.length;t+=1)b[t]=P(O(e,g,t));const $=t=>A(b[t],1,1,()=>{b[t]=null});let x=null;return g.length||(x=q()),{c(){n=l("div"),i=l("div"),i.innerHTML='<slot name="head"></slot>',r=d(),f=l("div");for(let t=0;t<b.length;t+=1)b[t].c();x&&x.c(),p=d(),h=l("div"),h.innerHTML='<slot name="foot"></slot>',this.c=t,u(i,"class","sidebar-head"),u(f,"class","sidebar-items"),u(h,"class","sidebar-foot"),u(n,"class","berry-sidebar")},m(t,e){c(t,n,e),s(n,i),s(n,r),s(n,f);for(let t=0;t<b.length;t+=1)b[t].m(f,null);x&&x.m(f,null),s(n,p),s(n,h),m=!0},p(t,[e]){if(1&e){let n;for(g=t[0],n=0;n<g.length;n+=1){const o=O(t,g,n);b[n]?(b[n].p(o,e),H(b[n],1)):(b[n]=P(o),b[n].c(),H(b[n],1),b[n].m(f,null))}for(M={r:0,c:[],p:M},n=g.length;n<b.length;n+=1)$(n);M.r||o(M.c),M=M.p,g.length?x&&(x.d(1),x=null):x||(x=q(),x.c(),x.m(f,null))}},i(t){if(!m){for(let t=0;t<g.length;t+=1)H(b[t]);m=!0}},o(t){b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)A(b[t]);m=!1},d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),x&&x.d()}}}function F(t,e,n){let{items:o=[]}=e;return t.$set=t=>{"items"in t&&n(0,o=t.items)},[o]}customElements.define("berry-sidebar-item",B);class G extends T{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.berry-sidebar{width:240px;padding:0 10px;height:100%;display:flex;flex-direction:column;flex:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.sidebar-foot{margin-top:auto}.sidebar-head{display:block;min-height:40px;line-height:24px;text-decoration:none;padding:8px 12px}</style>",j(this,{target:this.shadowRoot},F,D,r,{items:0}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),w()))}static get observedAttributes(){return["items"]}get items(){return this.$$.ctx[0]}set items(t){this.$set({items:t}),w()}}return customElements.define("berry-sidebar",G),G.Item=B,G}));
