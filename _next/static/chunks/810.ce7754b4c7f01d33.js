"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[810],{810:(e,i,n)=>{n.r(i),n.d(i,{default:()=>d});var s=n(5155),a=n(2115);let r={loading:{duration:600,spinner:{ringWidth:"8px",size:"100px",colors:{ring1:"#3498db",ring2:"#e74c3c",ring3:"#f1c40f",ring4:"#2ecc71"},animations:{spin:"spin 1.5s linear infinite",pulse:"pulse 2s infinite",fadeIn:"fadeIn 3s forwards",fadeOut:"fadeOut 0.5s forwards",slideUp:"slideUp 0.5s forwards"},delays:{ring2:"-0.5s",ring3:"-1.0s",ring4:"-1.5s"}}}},t=()=>{let{ringWidth:e,size:i,colors:n,animations:a,delays:t}=r.loading.spinner;return(0,s.jsxs)("div",{className:"flex justify-center items-center relative",style:{width:i,height:i,animation:"".concat(a.fadeIn,", ").concat(a.fadeOut,", ").concat(a.slideUp)},children:[[void 0,void 0,void 0,void 0].map((i,r)=>(0,s.jsx)("div",{className:"absolute w-full h-full border-solid border-transparent rounded-full animate-spin",style:{borderTopColor:n["ring"+(r+2)],animation:"".concat(a.spin),animationDelay:t["ring".concat(r+2)],borderWidth:e}},r)),(0,s.jsx)("div",{className:"absolute w-5 h-5 bg-primary rounded-full",style:{animation:a.pulse}})]})},d=e=>{let{children:i}=e,[n,d]=(0,a.useState)(!0);return((0,a.useEffect)(()=>{let e=setTimeout(()=>d(!1),r.loading.duration);return()=>clearTimeout(e)},[]),n)?(0,s.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-background",children:(0,s.jsx)(t,{})}):(0,s.jsx)(s.Fragment,{children:i})}}}]);