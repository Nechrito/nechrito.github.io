"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{8893:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var r=a(5155);a(2115);var n=a(9141);function i(){return(0,r.jsx)(n.A,{vertical:"up",delay:1.5,threshold:.01,className:"flex-none items-center justify-center text-center absolute bottom-6 w-full",scrollDirection:"up",children:(0,r.jsxs)("footer",{className:"section-text-small text-center ",children:["\xa9 ",new Date().getFullYear()," Philip Lindh. All rights reserved."]})})}},9141:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(5155),n=a(2115);function i(e){let{children:t,horizontal:a,vertical:i,direction:s,className:l="py-16 px-4 md:px-8",threshold:c=.1,delay:d=150,isStatic:o=!1,scrollHide:u=!1,scrollDirection:m,showShadow:f=!1}=e,p=(0,n.useRef)(null),[h,w]=(0,n.useState)(0),v=(0,n.useRef)(null),S=n.useMemo(()=>({direction:s,horizontal:a,vertical:i,threshold:c,delay:d}),[s,a,i,c,d]);return(0,n.useEffect)(()=>{if(o){p.current&&(p.current.style.opacity="1");return}let e=()=>{v.current&&cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>{if(!p.current)return;let e=window.scrollY,t=e>h;"up"===m?t&&Math.abs(e-h)>50?(p.current.classList.remove("animate-fadeOutSlideDown"),p.current.classList.add("animate-fadeInSlideUp")):Math.abs(e-h)>50&&(p.current.classList.remove("animate-fadeInSlideUp"),p.current.classList.add("animate-fadeOutSlideDown")):t&&Math.abs(e-h)>50?(p.current.classList.remove("animate-fadeInSlideDown"),p.current.classList.add("animate-fadeOutSlideUp")):!t&&Math.abs(e-h)>50&&(p.current.classList.remove("animate-fadeOutSlideUp"),p.current.classList.add("animate-fadeInSlideDown")),w(e)})};if(u)return window.addEventListener("scroll",e,{passive:!0}),()=>{window.removeEventListener("scroll",e),v.current&&cancelAnimationFrame(v.current)};let t=new IntersectionObserver(e=>{e.forEach(e=>{if(!e)return;let t=window.scrollY,a=t>h;w(t);let r=S.direction||S.vertical||S.horizontal||(a?"up":"down");if(e.isIntersecting)requestAnimationFrame(()=>{e.target.classList.remove("animate-fadeOutSlideUp","animate-fadeOutSlideDown","animate-fadeOutSlideLeft","animate-fadeOutSlideRight"),d?setTimeout(()=>{e.target.classList.add("animate-fadeInSlide".concat(r.charAt(0).toUpperCase()+r.slice(1)))},d):e.target.classList.add("animate-fadeInSlide".concat(r.charAt(0).toUpperCase()+r.slice(1)))});else{let t;t=S.horizontal?"left"===S.horizontal?"right":"left":S.vertical?"up"===S.vertical?"down":"up":a?"down":"up",e.target.classList.remove("animate-fadeInSlideUp","animate-fadeInSlideDown","animate-fadeInSlideLeft","animate-fadeInSlideRight"),d?setTimeout(()=>{e.target.classList.add("animate-fadeOutSlide".concat(t.charAt(0).toUpperCase()+t.slice(1)))},d):e.target.classList.add("animate-fadeOutSlide".concat(t.charAt(0).toUpperCase()+t.slice(1)))}})},{threshold:S.threshold,rootMargin:"150px"}),a=p.current;return a&&t.observe(a),()=>{a&&t.unobserve(a)}},[S,d,o,h,u,m]),(0,r.jsx)("div",{ref:p,className:"will-change-transform ".concat(l," ").concat(f?"p-6 rounded-lg shadow-md":""),style:{opacity:o?1:0},children:t})}}}]);