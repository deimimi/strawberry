import{S as n,i as e,s as t,t as r,e as s,g as a,c as o,a as c,d as u,f as i,H as l,C as p}from"../chunks/index-f035eec9.js";function f(n){let e,t,f,m;return{c(){e=r("General usage\n"),t=s("pre"),f=s("code"),m=r(n[0])},l(r){e=a(r,"General usage\n"),t=o(r,"PRE",{});var s=c(t);f=o(s,"CODE",{});var i=c(f);m=a(i,n[0]),i.forEach(u),s.forEach(u)},m(n,r){i(n,e,r),i(n,t,r),l(t,f),l(f,m)},p:p,i:p,o:p,d(n){n&&u(e),n&&u(t)}}}function m(n){return['\n\x3c!-- component.svelte --\x3e\n<script>\n    import Button from "@kwangure/strawberry/components/Button";\n<\/script>\n\n<Button on:click="{() => alert(\'strawberry\')}">\n    Click me!\n</Button>\n    ']}export default class extends n{constructor(n){super(),e(this,n,m,f,t,{})}}