import{I as y}from"./vue3-barcode-qrcode-reader-Bh1R5IRm.js";import{d as b,r,c as a,a as t,F as l,b as u,t as x,e as C,u as h,o as s,_ as g}from"./index-DLS7l8Wf.js";const k={class:"flex justify-center items-center mt-10"},R={class:"flex flex-col items-center justify-center mt-6"},F={class:"phone mt-6"},S={class:"content"},B=b({__name:"Demo3",setup(O){const d=r(void 0),c=r(!1);function i(e){d.value=e}function m(e){c.value=e}const o=r(null);function p(){var e;(e=o.value)==null||e.onCanPlay()}function f(){var e;(e=o.value)==null||e.onReset()}function v(){var e;(e=o.value)==null||e.onChangeFacemode()}function _(){var e;(e=o.value)==null||e.onCanStop()}return(e,n)=>(s(),a(l,null,[t("div",k,[c.value?(s(),a(l,{key:0},[t("button",{class:"bg-yellow-300 px-6 py-1 rounded-md me-4",onClick:v}," Facemode "),t("button",{class:"bg-red-300 px-6 py-1 rounded-md",onClick:_}," Stop ")],64)):(s(),a(l,{key:1},[t("button",{class:"bg-green-300 px-6 py-1 rounded-md",onClick:p}," Stream "),d.value?(s(),a("button",{key:0,class:"bg-blue-300 px-6 py-1 rounded-md",onClick:f}," Reset ")):u("",!0)],64))]),t("div",R,[t("pre",null,"Result:"+x(d.value),1),t("div",F,[n[2]||(n[2]=t("div",{class:"notch-container"},[t("div",{class:"notch"})],-1)),t("div",S,[c.value?u("",!0):(s(),a(l,{key:0},[n[0]||(n[0]=t("h1",{class:"text-xl mb-2"},"Reader Barcode & QRCode",-1)),n[1]||(n[1]=t("h2",{class:"text-base text-red-500 capitalize mb-4"},"mode: shoot",-1))],64)),C(h(y),{ref_key:"refCamera",ref:o,capture:"shoot","show-on-stream":!0,onOnloading:m,onResult:i},null,512)])])])],64))}}),N=g(B,[["__scopeId","data-v-533e09be"]]);export{N as default};
