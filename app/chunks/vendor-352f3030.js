function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function i(e){e.forEach(n)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(e,t,n,o){if(e){const i=l(e,t,n,o);return e[0](i)}}function l(e,n,o,i){return e[1]&&i?t(o.ctx.slice(),e[1](i(n))):o.ctx}function u(e,t,n,o,i,r,s){const c=function(e,t,n,o){if(e[2]&&o){const i=e[2](o(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|i[o];return e}return t.dirty|i}return t.dirty}(t,o,i,r);if(c){const i=l(t,n,o,s);e.p(i,c)}}function d(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function g(e,t){const n={};t=new Set(t);for(const o in e)t.has(o)||"$"===o[0]||(n[o]=e[o]);return n}function f(e){const t={};for(const n in e)t[n]=!0;return t}function h(t){return t&&r(t.destroy)?t.destroy:e}function p(e,t){e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function x(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function _(){return E(" ")}function v(){return E("")}function $(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function O(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)null==t[o]?e.removeAttribute(o):"style"===o?e.style.cssText=t[o]:"__value"===o?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:k(e,o,t[o])}function A(e){return Array.from(e.childNodes)}function N(e,t,n,o){for(let i=0;i<e.length;i+=1){const o=e[i];if(o.nodeName===t){let t=0;const r=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||r.push(e.name)}for(let e=0;e<r.length;e++)o.removeAttribute(r[e]);return e.splice(i,1)[0]}}return o?x(t):w(t)}function S(e,t){for(let n=0;n<e.length;n+=1){const o=e[n];if(3===o.nodeType)return o.data=""+t,e.splice(n,1)[0]}return E(t)}function M(e){return S(e," ")}function R(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let j,C;function I(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=function(){if(void 0===j){j=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){j=!0}}return j}();let i;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",i=$(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{i=$(n.contentWindow,"resize",t)}),p(e,n),()=>{(o||i&&n.contentWindow)&&i(),m(n)}}function T(e,t,n){e.classList[n?"add":"remove"](t)}function B(e,t=document.body){return Array.from(t.querySelectorAll(e))}function H(e){C=e}function L(){if(!C)throw new Error("Function called outside component initialization");return C}function P(e){L().$$.on_mount.push(e)}function D(e){L().$$.after_update.push(e)}function V(e,t){L().$$.context.set(e,t)}function z(e){return L().$$.context.get(e)}function U(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e(t)))}const W=[],K=[],Z=[],X=[],G=Promise.resolve();let F=!1;function q(){F||(F=!0,G.then(te))}function J(){return q(),G}function Y(e){Z.push(e)}let Q=!1;const ee=new Set;function te(){if(!Q){Q=!0;do{for(let e=0;e<W.length;e+=1){const t=W[e];H(t),ne(t.$$)}for(H(null),W.length=0;K.length;)K.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];ee.has(t)||(ee.add(t),t())}Z.length=0}while(W.length);for(;X.length;)X.pop()();F=!1,Q=!1,ee.clear()}}function ne(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Y)}}const oe=new Set;let ie;function re(){ie={r:0,c:[],p:ie}}function se(){ie.r||i(ie.c),ie=ie.p}function ce(e,t){e&&e.i&&(oe.delete(e),e.i(t))}function ae(e,t,n,o){if(e&&e.o){if(oe.has(e))return;oe.add(e),ie.c.push((()=>{oe.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function le(e,t){const n={},o={},i={$$scope:1};let r=e.length;for(;r--;){const s=e[r],c=t[r];if(c){for(const e in s)e in c||(o[e]=1);for(const e in c)i[e]||(n[e]=c[e],i[e]=1);e[r]=c}else for(const e in s)i[e]=1}for(const s in o)s in n||(n[s]=void 0);return n}function ue(e){return"object"==typeof e&&null!==e?e:{}}function de(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function fe(e,t,o,s){const{fragment:c,on_mount:a,on_destroy:l,after_update:u}=e.$$;c&&c.m(t,o),s||Y((()=>{const t=a.map(n).filter(r);l?l.push(...t):i(t),e.$$.on_mount=[]})),u.forEach(Y)}function he(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function pe(t,n,r,s,c,a,l=[-1]){const u=C;H(t);const d=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:o(),dirty:l,skip_bound:!1};let g=!1;if(d.ctx=r?r(t,n.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&c(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),g&&function(e,t){-1===e.$$.dirty[0]&&(W.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],d.update(),g=!0,i(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=A(n.target);d.fragment&&d.fragment.l(e),e.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&ce(t.$$.fragment),fe(t,n.target,n.anchor,n.customElement),te()}H(u)}class be{$destroy(){he(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const me=[];function ye(e,t){return{subscribe:we(e,t).subscribe}}function we(t,n=e){let o;const i=[];function r(e){if(s(t,e)&&(t=e,o)){const e=!me.length;for(let n=0;n<i.length;n+=1){const e=i[n];e[1](),me.push(e,t)}if(e){for(let e=0;e<me.length;e+=2)me[e][0](me[e+1]);me.length=0}}}return{set:r,update:function(e){r(e(t))},subscribe:function(s,c=e){const a=[s,c];return i.push(a),1===i.length&&(o=n(r)||e),s(t),()=>{const e=i.indexOf(a);-1!==e&&i.splice(e,1),0===i.length&&(o(),o=null)}}}}var xe="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",Ee="M4,10V14H6V11H7V14H8V10H4M9,10V15H11V14H13V10H9M12,11V13H11V11H12M14,10V14H16V11H17V14H18V11H19V14H20V10H14M3,9H21V15H12V16H8V15H3V9Z",_e=/[|\\{}()[\]^$+*?.]/g,ve=function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(_e,"\\$&")};const{replace:$e}="",ke=/[&<>'"]/g,Oe={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Ae=e=>Oe[e],Ne=e=>$e.call(e,ke,Ae);var Se={exports:{}};function Me(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(t){var n=e[t];"object"!=typeof n||Object.isFrozen(n)||Me(n)})),e}Se.exports=Me,Se.exports.default=Me;var Re=Se.exports;class je{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ce(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function Ie(e,...t){const n=Object.create(null);for(const o in e)n[o]=e[o];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const Te=e=>!!e.kind;class Be{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=Ce(e)}openNode(e){if(!Te(e))return;let t=e.kind;t=e.sublanguage?`language-${t}`:((e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map(((e,t)=>`${e}${"_".repeat(t+1)}`))].join(" ")}return`${t}${e}`})(t,{prefix:this.classPrefix}),this.span(t)}closeNode(e){Te(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class He{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{He._collapse(e)})))}}class Le extends He{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new Be(this,this.options).value()}finalize(){return!0}}function Pe(e){return e?"string"==typeof e?e:e.source:null}function De(...e){return e.map((e=>Pe(e))).join("")}function Ve(...e){return"("+(function(e){const t=e[e.length-1];return"object"==typeof t&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}(e).capture?"":"?:")+e.map((e=>Pe(e))).join("|")+")"}function ze(e){return new RegExp(e.toString()+"|").exec("").length-1}const Ue=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function We(e,{joinWith:t}){let n=0;return e.map((e=>{n+=1;const t=n;let o=Pe(e),i="";for(;o.length>0;){const e=Ue.exec(o);if(!e){i+=o;break}i+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}const Ke="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Ze={begin:"\\\\[\\s\\S]",relevance:0},Xe={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ze]},Ge={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ze]},Fe=function(e,t,n={}){const o=Ie({scope:"comment",begin:e,end:t,contains:[]},n);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const i=Ve("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:De(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},qe=Fe("//","$"),Je=Fe("/\\*","\\*/"),Ye=Fe("#","$"),Qe={scope:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},et={scope:"number",begin:Ke,relevance:0},tt={scope:"number",begin:"\\b(0b[01]+)",relevance:0},nt={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[Ze,{begin:/\[/,end:/\]/,relevance:0,contains:[Ze]}]}]},ot={scope:"title",begin:"[a-zA-Z]\\w*",relevance:0},it={scope:"title",begin:"[a-zA-Z_]\\w*",relevance:0},rt={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var st=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:Ke,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=De(t,/.*\b/,e.binary,/\b.*/)),Ie({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:Ze,APOS_STRING_MODE:Xe,QUOTE_STRING_MODE:Ge,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:Fe,C_LINE_COMMENT_MODE:qe,C_BLOCK_COMMENT_MODE:Je,HASH_COMMENT_MODE:Ye,NUMBER_MODE:Qe,C_NUMBER_MODE:et,BINARY_NUMBER_MODE:tt,REGEXP_MODE:nt,TITLE_MODE:ot,UNDERSCORE_TITLE_MODE:it,METHOD_GUARD:rt,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function ct(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function at(e,t){void 0!==e.className&&(e.scope=e.className,delete e.className)}function lt(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=ct,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function ut(e,t){Array.isArray(e.illegal)&&(e.illegal=Ve(...e.illegal))}function dt(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function gt(e,t){void 0===e.relevance&&(e.relevance=1)}const ft=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach((t=>{delete e[t]})),e.keywords=n.keywords,e.begin=De(n.beforeMatch,De("(?=",n.begin,")")),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},ht=["of","and","for","in","not","or","if","then","parent","list","value"];function pt(e,t,n="keyword"){const o=Object.create(null);return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(o,pt(e[n],t,n))})),o;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");o[n[0]]=[e,bt(n[0],n[1])]}))}}function bt(e,t){return t?Number(t):function(e){return ht.includes(e.toLowerCase())}(e)?0:1}const mt={},yt=e=>{console.error(e)},wt=(e,...t)=>{console.log(`WARN: ${e}`,...t)},xt=(e,t)=>{mt[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),mt[`${e}/${t}`]=!0)},Et=new Error;function _t(e,t,{key:n}){let o=0;const i=e[n],r={},s={};for(let c=1;c<=t.length;c++)s[c+o]=i[c],r[c+o]=!0,o+=ze(t[c-1]);e[n]=s,e[n]._emit=r,e[n]._multi=!0}function vt(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw yt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Et;if("object"!=typeof e.beginScope||null===e.beginScope)throw yt("beginScope must be object"),Et;_t(e,e.begin,{key:"beginScope"}),e.begin=We(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw yt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Et;if("object"!=typeof e.endScope||null===e.endScope)throw yt("endScope must be object"),Et;_t(e,e.end,{key:"endScope"}),e.end=We(e.end,{joinWith:""})}}(e)}function $t(e){function t(t,n){return new RegExp(Pe(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=ze(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=t(We(e,{joinWith:"|"}),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),o=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,o)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=Ie(e.classNameAliases||{}),function n(i,r){const s=i;if(i.isCompiled)return s;[at,dt,vt,ft].forEach((e=>e(i,r))),e.compilerExtensions.forEach((e=>e(i,r))),i.__beforeBegin=null,[lt,ut,gt].forEach((e=>e(i,r))),i.isCompiled=!0;let c=null;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),c=i.keywords.$pattern,delete i.keywords.$pattern),c=c||/\w+/,i.keywords&&(i.keywords=pt(i.keywords,e.case_insensitive)),s.keywordPatternRe=t(c,!0),r&&(i.begin||(i.begin=/\B|\b/),s.beginRe=t(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(s.endRe=t(i.end)),s.terminatorEnd=Pe(i.end)||"",i.endsWithParent&&r.terminatorEnd&&(s.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(s.illegalRe=t(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return Ie(e,{variants:null},t)})));if(e.cachedVariants)return e.cachedVariants;if(kt(e))return Ie(e,{starts:e.starts?Ie(e.starts):null});if(Object.isFrozen(e))return Ie(e);return e}("self"===e?i:e)}))),i.contains.forEach((function(e){n(e,s)})),i.starts&&n(i.starts,r),s.matcher=function(e){const t=new o;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function kt(e){return!!e&&(e.endsWithParent||kt(e.starts))}const Ot=Ce,At=Ie,Nt=Symbol("nomatch");var St=function(e){const t=Object.create(null),n=Object.create(null),o=[];let i=!0;const r="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]};let c={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Le};function a(e){return c.noHighlightRe.test(e)}function l(e,t,n,o){let i="",r="";"object"==typeof t?(i=e,n=t.ignoreIllegals,r=t.language,o=void 0):(xt("10.7.0","highlight(lang, code, ...args) has been deprecated."),xt("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),r=e,i=t),void 0===n&&(n=!0);const s={code:i,language:r};y("before:highlight",s);const c=s.result?s.result:u(s.language,s.code,n,o);return c.code=s.code,y("after:highlight",c),c}function u(e,n,o,s){const a=Object.create(null);function l(){if(!$.keywords)return void O.addText(A);let e=0;$.keywordPatternRe.lastIndex=0;let t=$.keywordPatternRe.exec(A),n="";for(;t;){n+=A.substring(e,t.index);const i=E.case_insensitive?t[0].toLowerCase():t[0],r=(o=i,$.keywords[o]);if(r){const[e,o]=r;if(O.addText(n),n="",a[i]=(a[i]||0)+1,a[i]<=7&&(N+=o),e.startsWith("_"))n+=t[0];else{const n=E.classNameAliases[e]||e;O.addKeyword(t[0],n)}}else n+=t[0];e=$.keywordPatternRe.lastIndex,t=$.keywordPatternRe.exec(A)}var o;n+=A.substr(e),O.addText(n)}function g(){null!=$.subLanguage?function(){if(""===A)return;let e=null;if("string"==typeof $.subLanguage){if(!t[$.subLanguage])return void O.addText(A);e=u($.subLanguage,A,!0,k[$.subLanguage]),k[$.subLanguage]=e._top}else e=d(A,$.subLanguage.length?$.subLanguage:null);$.relevance>0&&(N+=e.relevance),O.addSublanguage(e._emitter,e.language)}():l(),A=""}function f(e,t){let n=1;for(;void 0!==t[n];){if(!e._emit[n]){n++;continue}const o=E.classNameAliases[e[n]]||e[n],i=t[n];o?O.addKeyword(i,o):(A=i,l(),A=""),n++}}function h(e,t){return e.scope&&"string"==typeof e.scope&&O.openNode(E.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(O.addKeyword(A,E.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),A=""):e.beginScope._multi&&(f(e.beginScope,t),A="")),$=Object.create(e,{parent:{value:$}}),$}function b(e,t,n){let o=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(o){if(e["on:end"]){const n=new je(e);e["on:end"](t,n),n.isMatchIgnored&&(o=!1)}if(o){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return b(e.parent,t,n)}function m(e){return 0===$.matcher.regexIndex?(A+=e[0],1):(R=!0,0)}function y(e){const t=e[0],o=n.substr(e.index),i=b($,e,o);if(!i)return Nt;const r=$;$.endScope&&$.endScope._wrap?(g(),O.addKeyword(t,$.endScope._wrap)):$.endScope&&$.endScope._multi?(g(),f($.endScope,e)):r.skip?A+=t:(r.returnEnd||r.excludeEnd||(A+=t),g(),r.excludeEnd&&(A=t));do{$.scope&&!$.isMultiClass&&O.closeNode(),$.skip||$.subLanguage||(N+=$.relevance),$=$.parent}while($!==i.parent);return i.starts&&h(i.starts,e),r.returnEnd?0:t.length}let w={};function x(t,r){const s=r&&r[0];if(A+=t,null==s)return g(),0;if("begin"===w.type&&"end"===r.type&&w.index===r.index&&""===s){if(A+=n.slice(r.index,r.index+1),!i){const t=new Error(`0 width match regex (${e})`);throw t.languageName=e,t.badRule=w.rule,t}return 1}if(w=r,"begin"===r.type)return function(e){const t=e[0],n=e.rule,o=new je(n),i=[n.__beforeBegin,n["on:begin"]];for(const r of i)if(r&&(r(e,o),o.isMatchIgnored))return m(t);return n.skip?A+=t:(n.excludeBegin&&(A+=t),g(),n.returnBegin||n.excludeBegin||(A=t)),h(n,e),n.returnBegin?0:t.length}(r);if("illegal"===r.type&&!o){const e=new Error('Illegal lexeme "'+s+'" for mode "'+($.scope||"<unnamed>")+'"');throw e.mode=$,e}if("end"===r.type){const e=y(r);if(e!==Nt)return e}if("illegal"===r.type&&""===s)return 1;if(M>1e5&&M>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return A+=s,s.length}const E=p(e);if(!E)throw yt(r.replace("{}",e)),new Error('Unknown language: "'+e+'"');const _=$t(E);let v="",$=s||_;const k={},O=new c.__emitter(c);!function(){const e=[];for(let t=$;t!==E;t=t.parent)t.scope&&e.unshift(t.scope);e.forEach((e=>O.openNode(e)))}();let A="",N=0,S=0,M=0,R=!1;try{for($.matcher.considerAll();;){M++,R?R=!1:$.matcher.considerAll(),$.matcher.lastIndex=S;const e=$.matcher.exec(n);if(!e)break;const t=x(n.substring(S,e.index),e);S=e.index+t}return x(n.substr(S)),O.closeAllNodes(),O.finalize(),v=O.toHTML(),{language:e,value:v,relevance:N,illegal:!1,_emitter:O,_top:$}}catch(j){if(j.message&&j.message.includes("Illegal"))return{language:e,value:Ot(n),illegal:!0,relevance:0,_illegalBy:{message:j.message,index:S,context:n.slice(S-100,S+100),mode:j.mode,resultSoFar:v},_emitter:O};if(i)return{language:e,value:Ot(n),illegal:!1,relevance:0,errorRaised:j,_emitter:O,_top:$};throw j}}function d(e,n){n=n||c.languages||Object.keys(t);const o=function(e){const t={value:Ot(e),illegal:!1,relevance:0,_top:s,_emitter:new c.__emitter(c)};return t._emitter.addText(e),t}(e),i=n.filter(p).filter(m).map((t=>u(t,e,!1)));i.unshift(o);const r=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(p(e.language).supersetOf===t.language)return 1;if(p(t.language).supersetOf===e.language)return-1}return 0})),[a,l]=r,d=a;return d.secondBest=l,d}function g(e){let t=null;const o=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=c.languageDetectRe.exec(t);if(n){const t=p(n[1]);return t||(wt(r.replace("{}",n[1])),wt("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>a(e)||p(e)))}(e);if(a(o))return;y("before:highlightElement",{el:e,language:o}),!c.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e)),t=e;const i=t.textContent,s=o?l(i,{language:o,ignoreIllegals:!0}):d(i);e.innerHTML=s.value,function(e,t,o){const i=t&&n[t]||o;e.classList.add("hljs"),e.classList.add(`language-${i}`)}(e,o,s.language),e.result={language:s.language,re:s.relevance,relevance:s.relevance},s.secondBest&&(e.secondBest={language:s.secondBest.language,relevance:s.secondBest.relevance}),y("after:highlightElement",{el:e,result:s,text:i})}let f=!1;function h(){if("loading"===document.readyState)return void(f=!0);document.querySelectorAll(c.cssSelector).forEach(g)}function p(e){return e=(e||"").toLowerCase(),t[e]||t[n[e]]}function b(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{n[e.toLowerCase()]=t}))}function m(e){const t=p(e);return t&&!t.disableAutodetect}function y(e,t){const n=e;o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){f&&h()}),!1),Object.assign(e,{highlight:l,highlightAuto:d,highlightAll:h,highlightElement:g,highlightBlock:function(e){return xt("10.7.0","highlightBlock will be removed entirely in v12.0"),xt("10.7.0","Please use highlightElement now."),g(e)},configure:function(e){c=At(c,e)},initHighlighting:()=>{h(),xt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){h(),xt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(n,o){let r=null;try{r=o(e)}catch(c){if(yt("Language definition for '{}' could not be registered.".replace("{}",n)),!i)throw c;yt(c),r=s}r.name||(r.name=n),t[n]=r,r.rawDefinition=o.bind(null,e),r.aliases&&b(r.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(n))n[t]===e&&delete n[t]},listLanguages:function(){return Object.keys(t)},getLanguage:p,registerAliases:b,autoDetection:m,inherit:At,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)}}),e.debugMode=function(){i=!1},e.safeMode=function(){i=!0},e.versionString="11.0.1";for(const w in st)"object"==typeof st[w]&&Re(st[w]);return Object.assign(e,st),e}({});export{Ne as $,t as A,re as B,we as C,a as D,u as E,B as F,p as G,e as H,x as I,h as J,O as K,T as L,g as M,f as N,d as O,xe as P,Ee as Q,$ as R,be as S,U as T,L as U,ye as V,Y as W,I as X,c as Y,z as Z,ve as _,A as a,J as a0,St as a1,y as a2,k as b,N as c,m as d,w as e,b as f,S as g,R as h,pe as i,de as j,_ as k,v as l,ge as m,M as n,fe as o,le as p,ue as q,ae as r,s,E as t,se as u,ce as v,he as w,V as x,D as y,P as z};
