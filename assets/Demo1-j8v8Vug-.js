import{d as p,f as V,o as i,c,w as b,v as h,a as e,t as _,r as v,F as y,g as S,b as x,e as f,u as I,_ as $}from"./index-DLS7l8Wf.js";import{I as R}from"./vue3-barcode-qrcode-reader-Bh1R5IRm.js";const k={class:"flex items-center"},q=["value","id"],B=["for"],C=p({__name:"InputRadio",props:{modelValue:{type:String,default:"",required:!0},targetId:{type:String,default:"",required:!0},isValue:{type:String,default:"",required:!0},label:{type:String,default:"",required:!0}},emits:["update:modelValue"],setup(t,{emit:s}){const m=t,n=s,u=V({get(){return m.modelValue},set(o){n("update:modelValue",o)}});return(o,d)=>(i(),c("div",k,[b(e("input",{"onUpdate:modelValue":d[0]||(d[0]=a=>u.value=a),value:t.isValue,id:t.targetId,type:"radio"},null,8,q),[[h,u.value]]),e("label",{for:t.targetId,class:"ms-2"},_(t.label),9,B)]))}}),D={class:"flex flex-col justify-center items-center"},L={class:"my-8"},N={class:"phone"},w={class:"content"},F={key:0,class:"font-medium mb-4"},M=p({__name:"Demo1",setup(t){const s=v("shoot"),m=[{label:"Shoot",value:"shoot"},{label:"Stream",value:"stream"}],n=v(!1);function u(a){n.value=a}const o=v(void 0);function d(a){o.value=a}return(a,l)=>(i(),c("div",D,[l[2]||(l[2]=e("h4",null,"Select mode:",-1)),(i(),c(y,null,S(m,r=>f(C,{key:`input-radio-${r.value}`,modelValue:s.value,"onUpdate:modelValue":l[0]||(l[0]=g=>s.value=g),label:r.label,"target-id":`target-${r.value}`,"is-value":r.value},null,8,["modelValue","label","target-id","is-value"])),64)),e("pre",L,"Result: "+_(o.value),1),e("div",N,[l[1]||(l[1]=e("div",{class:"container-notch"},[e("div",{class:"notch"})],-1)),e("div",w,[n.value?x("",!0):(i(),c("h3",F," Barcode and QR code scanner ")),f(I(R),{capture:s.value,onOnloading:u,onResult:d,class:"rounded-2xl"},null,8,["capture"])])])]))}}),E=$(M,[["__scopeId","data-v-b80a3824"]]);export{E as default};
