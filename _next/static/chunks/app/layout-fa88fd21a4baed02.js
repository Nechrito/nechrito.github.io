(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{717:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,347,23)),Promise.resolve().then(a.t.bind(a,5356,23)),Promise.resolve().then(a.bind(a,810)),Promise.resolve().then(a.bind(a,9141))},810:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var i=a(5155),n=a(2115);let r={loading:{duration:800,spinner:{ringWidth:"8px",size:"100px",colors:{ring1:"#3498db",ring2:"#e74c3c",ring3:"#f1c40f",ring4:"#2ecc71"},animations:{spin:"spin 1.5s linear infinite",pulse:"pulse 2s infinite",fadeIn:"fadeIn 3s forwards",fadeOut:"fadeOut 0.5s forwards",slideUp:"slideUp 0.5s forwards"},delays:{ring2:"-0.5s",ring3:"-1.0s",ring4:"-1.5s"}}}},s=()=>{let{ringWidth:e,size:t,colors:a,animations:n,delays:s}=r.loading.spinner;return(0,i.jsxs)("div",{className:"flex justify-center items-center relative opacity-0",style:{width:t,height:t,animation:"".concat(n.fadeIn,", ").concat(n.fadeOut,", ").concat(n.slideUp)},children:[[void 0,void 0,void 0,void 0].map((t,r)=>(0,i.jsx)("div",{className:"absolute w-full h-full border-solid border-transparent rounded-full animate-spin",style:{borderTopColor:a["ring"+(r+2)],animation:"".concat(n.spin),animationDelay:s["ring".concat(r+2)],borderWidth:e}},r)),(0,i.jsx)("div",{className:"absolute w-5 h-5 bg-primary rounded-full",style:{animation:n.pulse}})]})},l=e=>{let{children:t}=e,[a,l]=(0,n.useState)(!0);return((0,n.useEffect)(()=>{let e=setTimeout(()=>l(!1),r.loading.duration);return()=>clearTimeout(e)},[]),a)?(0,i.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-background",children:(0,i.jsx)(s,{})}):(0,i.jsx)(i.Fragment,{children:t})}},9141:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(5155),n=a(2115);function r(e){let{children:t,horizontal:a,vertical:r,direction:s,className:l="py-16 px-4 md:px-8",threshold:d=.05,delay:o=0,isStatic:c=!1,scrollHide:u=!1,scrollDirection:f,showShadow:m=!1}=e,p=(0,n.useRef)(null),[h,v]=(0,n.useState)(0),g=n.useMemo(()=>({direction:s,horizontal:a,vertical:r,threshold:d,delay:o}),[s,a,r,d,o]);return(0,n.useEffect)(()=>{if(c&&!u){p.current&&(p.current.style.opacity="1");return}let e=()=>{if(!p.current||!u)return;let e=window.scrollY,t=e>h;"up"===f?t&&Math.abs(e-h)>10?(p.current.classList.remove("animate-fadeOutSlideDown"),p.current.classList.add("animate-fadeInSlideUp")):Math.abs(e-h)>10&&(p.current.classList.remove("animate-fadeInSlideUp"),p.current.classList.add("animate-fadeOutSlideDown")):t&&Math.abs(e-h)>10?(p.current.classList.remove("animate-fadeInSlideDown"),p.current.classList.add("animate-fadeOutSlideUp")):!t&&Math.abs(e-h)>10&&(p.current.classList.remove("animate-fadeOutSlideUp"),p.current.classList.add("animate-fadeInSlideDown")),v(e)};if(u)return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e);let t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e)return;let t=window.scrollY,a=t>h;v(t);let i=g.direction||g.vertical||g.horizontal||(a?"up":"down");if(e.isIntersecting)setTimeout(()=>{e.target.classList.remove("animate-fadeOutSlideUp","animate-fadeOutSlideDown","animate-fadeOutSlideLeft","animate-fadeOutSlideRight"),e.target.classList.add("animate-fadeInSlide".concat(i.charAt(0).toUpperCase()+i.slice(1))),e.target.style.opacity="1"},g.delay);else{let t;t=g.horizontal?"left"===g.horizontal?"right":"left":g.vertical?"up"===g.vertical?"down":"up":a?"down":"up",e.target.classList.remove("animate-fadeInSlideUp","animate-fadeInSlideDown","animate-fadeInSlideLeft","animate-fadeInSlideRight"),e.target.classList.add("animate-fadeOutSlide".concat(t.charAt(0).toUpperCase()+t.slice(1))),e.target.style.opacity="0"}})},{threshold:g.threshold,rootMargin:"150px"}),a=p.current;return a&&t.observe(a),()=>{a&&t.unobserve(a)}},[g,h,c,u,f]),(0,i.jsx)("div",{ref:p,className:"will-change-transform ".concat(l," ").concat(m?"p-6 rounded-lg shadow-md":""),style:{opacity:c?1:0},children:t})}},347:()=>{},5356:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[444,441,517,358],()=>t(717)),_N_E=e.O()}]);