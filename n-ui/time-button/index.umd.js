(function(e,s){typeof exports=="object"&&typeof module!="undefined"?module.exports=s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis!="undefined"?globalThis:e||self,e.index=s(e.Vue))})(this,function(e){"use strict";const s=(n,u)=>{const t=e.ref(0),o=e.ref(!1),i=e.computed(()=>t.value>0?`${t.value}s`:"\u83B7\u53D6\u9A8C\u8BC1\u7801"),r=()=>{u("click"),a()},d=()=>{t.value=0},a=()=>{t.value=n.second,o.value=!0,l()},l=()=>{t.value>0?(t.value--,setTimeout(l,1e3)):o.value=!1};return{text:i,time:t,disabled:o,handleClick:r,reset:d}};var c=e.defineComponent({name:"NTimeButton",props:{second:{type:Number,default:60},type:{type:String,default:"primary"}},emits:["click"],setup(n,{emit:u,attrs:t,expose:o}){const{text:i,time:r,disabled:d,handleClick:a,reset:l}=s(n,u);return o({reset:l}),()=>e.createVNode(e.resolveComponent("el-button"),e.mergeProps(t,{type:n.type,disabled:d.value||r.value>0,onClick:a}),{default:()=>[i.value]})}}),f=(n=>(n.install=u=>{const{name:t}=n;t&&u.component(t,n)},n))(c);return f});
