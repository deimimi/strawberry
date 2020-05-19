!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Button=e()}(this,(function(){"use strict";function t(){}function e(t,e){for(const o in e)t[o]=e[o];return t}function o(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(o)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,o){t.insertBefore(e,o||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function b(){return p("")}function h(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function g(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function $(t,e){for(const o in e)g(t,o,e[o])}function m(t,e,o,n){t.style.setProperty(e,o,n?"important":"")}function y(t,e,o){t.classList[o?"add":"remove"](e)}let x;function w(t){x=t}function v(t,e){const o=t.$$.callbacks[e.type];o&&o.slice().forEach(t=>t(e))}const k=[],z=[],_=[],E=[],P=Promise.resolve();let C=!1;function L(t){_.push(t)}let R=!1;const T=new Set;function A(){if(!R){R=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];w(e),M(e.$$)}for(k.length=0;z.length;)z.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];T.has(e)||(T.add(e),e())}_.length=0}while(k.length);for(;E.length;)E.pop()();C=!1,R=!1,T.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const H=new Set;let N,j;function B(){N={r:0,c:[],p:N}}function S(){N.r||r(N.c),N=N.p}function O(t,e){t&&t.i&&(H.delete(t),t.i(e))}function q(t,e,o,n){if(t&&t.o){if(H.has(t))return;H.add(t),N.c.push(()=>{H.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}}function G(t,e){const o={},n={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],c=e[i];if(c){for(const t in s)t in c||(n[t]=1);for(const t in c)r[t]||(o[t]=c[t],r[t]=1);t[i]=c}else for(const t in s)r[t]=1}for(const t in n)t in o||(o[t]=void 0);return o}function X(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function D(t,e,n){const{fragment:s,on_mount:c,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,n),L(()=>{const e=c.map(o).filter(i);l?l.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(L)}function F(t,e){const o=t.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,P.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,o,i,s,c,l,u=[-1]){const f=x;w(e);const p=o.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:u};let b=!1;if(d.ctx=i?i(e,p,(t,o,...n)=>{const r=n.length?n[0]:o;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),b&&I(e,t)),o}):[],d.update(),b=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(a)}else d.fragment&&d.fragment.c();o.intro&&O(e.$$.fragment),D(e,o.target,o.anchor),A()}w(f)}function K(e){let o,n,i,s,u,p,d;return{c(){o=f("svg"),n=f("path"),s=f("slot"),this.c=t,g(n,"d",e[2]),g(n,"fill",i=e[3]||"currentColor"),g(o,"class","berry-icon"),g(o,"height",u=""+(e[0]+e[1])),m(o,"transform","rotate("+e[4]+"deg)"),g(o,"viewBox","0 0 24 24"),g(o,"width",p=""+(e[0]+e[1])),y(o,"horizontal",e[5]),y(o,"vertical",e[6]),y(o,"clockwise",e[7]),y(o,"counterclockwise",e[8])},m(t,i,a){l(t,o,i),c(o,n),c(o,s),a&&r(d),d=[h(o,"click",e[11]),h(o,"dblclick",e[12])]},p(t,[e]){4&e&&g(n,"d",t[2]),8&e&&i!==(i=t[3]||"currentColor")&&g(n,"fill",i),3&e&&u!==(u=""+(t[0]+t[1]))&&g(o,"height",u),16&e&&m(o,"transform","rotate("+t[4]+"deg)"),3&e&&p!==(p=""+(t[0]+t[1]))&&g(o,"width",p),32&e&&y(o,"horizontal",t[5]),64&e&&y(o,"vertical",t[6]),128&e&&y(o,"clockwise",t[7]),256&e&&y(o,"counterclockwise",t[8])},i:t,o:t,d(t){t&&a(o),r(d)}}}function Q(t){return"clockwise"===t||"counterclockwise"===t}function U(t){return"horizontal"===t||"vertical"===t}function V(t,e,o){let n,r,i,s,{size:c=24}=e,{units:l="px"}=e,{path:a=""}=e,{flip:u=""}=e,{spin:f=""}=e,{color:p=""}=e,{rotate:d=0}=e;return t.$set=t=>{"size"in t&&o(0,c=t.size),"units"in t&&o(1,l=t.units),"path"in t&&o(2,a=t.path),"flip"in t&&o(9,u=t.flip),"spin"in t&&o(10,f=t.spin),"color"in t&&o(3,p=t.color),"rotate"in t&&o(4,d=t.rotate)},t.$$.update=()=>{512&t.$$.dirty&&o(5,n=U(u)&&"horizontal"===u),512&t.$$.dirty&&o(6,r=U(u)&&"vertical"===u),1024&t.$$.dirty&&o(7,i=Q(f)&&"clockwise"===f),1024&t.$$.dirty&&o(8,s=Q(f)&&"counterclockwise"===f)},[c,l,a,p,d,n,r,i,s,u,f,function(e){v(t,e)},function(e){v(t,e)}]}"function"==typeof HTMLElement&&(j=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}$destroy(){F(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(){}});class W extends j{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}svg.horizontal{transform:scaleX(-1)}svg.vertical{transform:scaleY(-1)}svg.clockwise{-webkit-animation:clockwise 2s linear infinite;animation:clockwise 2s linear infinite}@-webkit-keyframes clockwise{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes clockwise{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}svg.counterclockwise{-webkit-animation:counterclockwise 2s linear infinite;animation:counterclockwise 2s linear infinite}@-webkit-keyframes counterclockwise{0%{transform:rotate(359deg)}to{transform:rotate(0deg)}}@keyframes counterclockwise{0%{transform:rotate(359deg)}to{transform:rotate(0deg)}}</style>",J(this,{target:this.shadowRoot},V,K,s,{size:0,units:1,path:2,flip:9,spin:10,color:3,rotate:4}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),A()))}static get observedAttributes(){return["size","units","path","flip","spin","color","rotate"]}get size(){return this.$$.ctx[0]}set size(t){this.$set({size:t}),A()}get units(){return this.$$.ctx[1]}set units(t){this.$set({units:t}),A()}get path(){return this.$$.ctx[2]}set path(t){this.$set({path:t}),A()}get flip(){return this.$$.ctx[9]}set flip(t){this.$set({flip:t}),A()}get spin(){return this.$$.ctx[10]}set spin(t){this.$set({spin:t}),A()}get color(){return this.$$.ctx[3]}set color(t){this.$set({color:t}),A()}get rotate(){return this.$$.ctx[4]}set rotate(t){this.$set({rotate:t}),A()}}function Z(o){let n,r=[{class:"berry-icon-path"},{d:o[0]},{fill:o[1]},o[2]],i={};for(let t=0;t<r.length;t+=1)i=e(i,r[t]);return{c(){n=f("path"),this.c=t,$(n,i)},m(t,e){l(t,n,e)},p(t,[e]){$(n,G(r,[{class:"berry-icon-path"},1&e&&{d:t[0]},2&e&&{fill:t[1]},4&e&&t[2]]))},i:t,o:t,d(t){t&&a(n)}}}function tt(t,e,o){let{d:n}=e,{fill:r="currentColor"}=e,{props:i={}}=e;return t.$set=t=>{"d"in t&&o(0,n=t.d),"fill"in t&&o(1,r=t.fill),"props"in t&&o(2,i=t.props)},[n,r,i]}customElements.define("berry-icon",W);class et extends j{constructor(t){super(),J(this,{target:this.shadowRoot},tt,Z,s,{d:0,fill:1,props:2}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),A()))}static get observedAttributes(){return["d","fill","props"]}get d(){return this.$$.ctx[0]}set d(t){this.$set({d:t}),A()}get fill(){return this.$$.ctx[1]}set fill(t){this.$set({fill:t}),A()}get props(){return this.$$.ctx[2]}set props(t){this.$set({props:t}),A()}}function ot(t){let o,n;const r=[{path:t[1]},t[3]];let i={};for(let t=0;t<r.length;t+=1)i=e(i,r[t]);const s=new W({props:i});return{c(){o=u("span"),Y(s.$$.fragment),g(o,"class","button-prefix")},m(t,e){l(t,o,e),D(s,o,null),n=!0},p(t,e){const o=10&e?G(r,[2&e&&{path:t[1]},8&e&&X(t[3])]):{};s.$set(o)},i(t){n||(O(s.$$.fragment,t),n=!0)},o(t){q(s.$$.fragment,t),n=!1},d(t){t&&a(o),F(s)}}}function nt(e){let o,n,i,s,f,p,b,$=e[1]&&ot(e);return{c(){o=u("button"),n=u("div"),$&&$.c(),i=d(),s=u("slot"),s.textContent=`${(rt=!1)||""}`,this.c=t,g(n,"class","content-wrapper"),g(o,"class",f=(e[0]?e[0]:"")+" berry-button"),o.disabled=e[2],y(o,"icon",e[1]),y(o,"slot_used",rt),y(o,"fullwidth",e[5]),y(o,"active",e[4])},m(t,a,u){l(t,o,a),c(o,n),$&&$.m(n,null),c(n,i),c(n,s),p=!0,u&&r(b),b=[h(o,"click",e[6]),h(o,"hover",e[7]),h(o,"mouseover",e[8]),h(o,"mouseout",e[9])]},p(t,[e]){t[1]?$?($.p(t,e),O($,1)):($=ot(t),$.c(),O($,1),$.m(n,i)):$&&(B(),q($,1,1,()=>{$=null}),S()),(!p||1&e&&f!==(f=(t[0]?t[0]:"")+" berry-button"))&&g(o,"class",f),(!p||4&e)&&(o.disabled=t[2]),3&e&&y(o,"icon",t[1]),1&e&&y(o,"slot_used",rt),33&e&&y(o,"fullwidth",t[5]),17&e&&y(o,"active",t[4])},i(t){p||(O($),p=!0)},o(t){q($),p=!1},d(t){t&&a(o),$&&$.d(),r(b)}}}customElements.define("berry-icon-path",et),W.Path=et;let rt=!0;function it(t,e,o){let{color:n=""}=e,{icon:r=""}=e,{disabled:i=""}=e,{iconProps:s={}}=e,{active:c=""}=e,{fullwidth:l=!1}=e;return t.$set=t=>{"color"in t&&o(0,n=t.color),"icon"in t&&o(1,r=t.icon),"disabled"in t&&o(2,i=t.disabled),"iconProps"in t&&o(3,s=t.iconProps),"active"in t&&o(4,c=t.active),"fullwidth"in t&&o(5,l=t.fullwidth)},[n,r,i,s,c,l,function(e){v(t,e)},function(e){v(t,e)},function(e){v(t,e)},function(e){v(t,e)}]}class st extends j{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}button{line-height:1.5;position:relative;display:inline-block;font-weight:400;white-space:nowrap;text-align:center;cursor:pointer;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:manipulation;height:35px;padding:0 10px;font-size:14px;border-radius:4px;color:#333;background-color:transparent;border:1px solid transparent;border-color:#c3c3c3;outline:none}button:disabled{cursor:not-allowed}button.fullwidth{width:100%}button .content-wrapper{display:flex;align-items:center;justify-content:center;line-height:1.2}button:focus:not(:active):not(.active){background-color:#f0f0f0;border-color:#f0f0f0;color:#333}button:hover:not(:active):not(.active){background-color:#f0f0f0;border-color:#f0f0f0;color:#333}button.active{background-color:#dcebff;border-color:#dcebff;color:#196eff}button:active{background-color:#dcebff;border-color:#dcebff;color:#196eff}button.none{border:none}button.primary{color:#fff;background-color:#196eff;border:none}button.primary:active{background-color:#2882ff!important;color:#fff!important}button.primary:focus{background-color:#2882ff!important;color:#fff!important}button.primary:hover{background-color:#2882ff!important;color:#fff!important}.button-prefix{display:flex}.button.slot_used :global(.berry-icon){margin-right:5px}button.icon.slot_used{padding-right:16px}.visible{display:block}</style>",J(this,{target:this.shadowRoot},it,nt,s,{color:0,icon:1,disabled:2,iconProps:3,active:4,fullwidth:5}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),A()))}static get observedAttributes(){return["color","icon","disabled","iconProps","active","fullwidth"]}get color(){return this.$$.ctx[0]}set color(t){this.$set({color:t}),A()}get icon(){return this.$$.ctx[1]}set icon(t){this.$set({icon:t}),A()}get disabled(){return this.$$.ctx[2]}set disabled(t){this.$set({disabled:t}),A()}get iconProps(){return this.$$.ctx[3]}set iconProps(t){this.$set({iconProps:t}),A()}get active(){return this.$$.ctx[4]}set active(t){this.$set({active:t}),A()}get fullwidth(){return this.$$.ctx[5]}set fullwidth(t){this.$set({fullwidth:t}),A()}}function ct(e){let o;return{c(){o=u("div"),o.innerHTML="<slot></slot>",this.c=t,g(o,"class","berry-button-group")},m(t,e){l(t,o,e)},p:t,i:t,o:t,d(t){t&&a(o)}}}customElements.define("berry-button",st);class lt extends j{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.berry-button-group :global(button){border-radius:0}.berry-button-group>:global(button):first-child:not(:last-child),.berry-button-group>:global(span:first-child:not(:last-child)>button){border-top-left-radius:4px;border-bottom-left-radius:4px}.berry-button-group>:global(button):last-child:not(:first-child),.berry-button-group>:global(span:last-child:not(:first-child)>button){border-top-right-radius:4px;border-bottom-right-radius:4px}.berry-button-group+.berry-button-group,.berry-button-group+:global(button),.berry-button-group :global(button+button),.berry-button-group :global(button+span),.berry-button-group :global(span+button),.berry-button-group>:global(span+span),:global(button)+.berry-button-group{margin-left:-1px}.berry-button-group>:global(button),.berry-button-group>:global(span>button){position:relative}.berry-button-group>:global(button.active),.berry-button-group>:global(button:active),.berry-button-group>:global(button:focus),.berry-button-group>:global(button:hover),.berry-button-group>:global(span>button.active),.berry-button-group>:global(span>button:active),.berry-button-group>:global(span>button:focus),.berry-button-group>:global(span>button:hover){z-index:2}</style>",J(this,{target:this.shadowRoot},null,ct,s,{}),t&&t.target&&l(t.target,this,t.anchor)}}function at(t,e,o){const n=t.slice();return n[3]=e[o],n[5]=o,n}function ut(t){let o,n,r,i,s;const f=new lt({props:{$$slots:{default:[dt]},$$scope:{ctx:t}}}),p=[t[1].props];var b=t[1].component;function h(t){let o={};for(let t=0;t<p.length;t+=1)o=e(o,p[t]);return{props:o}}if(b)var $=new b(h());return{c(){o=u("div"),n=u("div"),Y(f.$$.fragment),r=d(),i=u("div"),$&&Y($.$$.fragment),g(n,"class","tab-header"),g(i,"class","tab-content"),g(o,"class","berry-button-tabs tab-wrapper")},m(t,e){l(t,o,e),c(o,n),D(f,n,null),c(o,r),c(o,i),$&&D($,i,null),s=!0},p(t,e){const o={};67&e&&(o.$$scope={dirty:e,ctx:t}),f.$set(o);const n=2&e?G(p,[X(t[1].props)]):{};if(b!==(b=t[1].component)){if($){B();const t=$;q(t.$$.fragment,1,0,()=>{F(t,1)}),S()}b?(Y(($=new b(h())).$$.fragment),O($.$$.fragment,1),D($,i,null)):$=null}else b&&$.$set(n)},i(t){s||(O(f.$$.fragment,t),$&&O($.$$.fragment,t),s=!0)},o(t){q(f.$$.fragment,t),$&&q($.$$.fragment,t),s=!1},d(t){t&&a(o),F(f),$&&F($)}}}function ft(t){let e,o,n=t[3].title+"";return{c(){e=p(n),o=d()},m(t,n){l(t,e,n),l(t,o,n)},p(t,o){1&o&&n!==(n=t[3].title+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(e,n)},d(t){t&&a(e),t&&a(o)}}}function pt(t){let e;const o=new st({props:{active:t[1]===t[0][t[5]],$$slots:{default:[ft]},$$scope:{ctx:t}}});return o.$on("click",(function(...e){return t[2](t[5],...e)})),{c(){Y(o.$$.fragment)},m(t,n){D(o,t,n),e=!0},p(e,n){t=e;const r={};3&n&&(r.active=t[1]===t[0][t[5]]),65&n&&(r.$$scope={dirty:n,ctx:t}),o.$set(r)},i(t){e||(O(o.$$.fragment,t),e=!0)},o(t){q(o.$$.fragment,t),e=!1},d(t){F(o,t)}}}function dt(t){let e,o,n=t[0],r=[];for(let e=0;e<n.length;e+=1)r[e]=pt(at(t,n,e));const i=t=>q(r[t],1,1,()=>{r[t]=null});return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=b()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);l(t,e,n),o=!0},p(t,o){if(3&o){let s;for(n=t[0],s=0;s<n.length;s+=1){const i=at(t,n,s);r[s]?(r[s].p(i,o),O(r[s],1)):(r[s]=pt(i),r[s].c(),O(r[s],1),r[s].m(e.parentNode,e))}for(B(),s=n.length;s<r.length;s+=1)i(s);S()}},i(t){if(!o){for(let t=0;t<n.length;t+=1)O(r[t]);o=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)q(r[t]);o=!1},d(t){!function(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}(r,t),t&&a(e)}}}function bt(e){let o,n,r=e[0].length>0&&ut(e);return{c(){r&&r.c(),o=b(),this.c=t},m(t,e){r&&r.m(t,e),l(t,o,e),n=!0},p(t,[e]){t[0].length>0?r?(r.p(t,e),O(r,1)):(r=ut(t),r.c(),O(r,1),r.m(o.parentNode,o)):r&&(B(),q(r,1,1,()=>{r=null}),S())},i(t){n||(O(r),n=!0)},o(t){q(r),n=!1},d(t){r&&r.d(t),t&&a(o)}}}function ht(t,e,o){let{tabs:n=[]}=e,r=n[0];return t.$set=t=>{"tabs"in t&&o(0,n=t.tabs)},[n,r,(t,e,i=t)=>{o(1,r=n[i])}]}customElements.define("berry-button-group",lt);class gt extends j{constructor(t){super(),this.shadowRoot.innerHTML="<style>*,:host *{box-sizing:border-box}.tab-content,.tab-header,.tab-wrapper{padding:5px 10px}</style>",J(this,{target:this.shadowRoot},ht,bt,s,{tabs:0}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),A()))}static get observedAttributes(){return["tabs"]}get tabs(){return this.$$.ctx[0]}set tabs(t){this.$set({tabs:t}),A()}}return customElements.define("berry-button-tabs",gt),st.Group=lt,st.Tabs=gt,st}));
