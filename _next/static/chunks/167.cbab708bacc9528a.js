"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{7167:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(5155);a(2115);var n=a(9141);function l(){return(0,i.jsx)(n.A,{vertical:"down",delay:.5,threshold:.5,className:"text-gray-600",scrollDirection:"down",children:(0,i.jsx)("p",{className:"section-text text-center text-lg mt-2",children:"C# | C/C++ | Java | Lua | Python | Swift | HTML/CSS/JS | Unity | UE5 | Godot"})})}},9141:(e,t,a)=>{a.d(t,{A:()=>l});var i=a(5155),n=a(2115);function l(e){let{children:t,horizontal:a,vertical:l,direction:d,className:r="md:py-8 lg:py-12 xl:py-16",threshold:s=.5,delay:c=200,isStatic:o=!1,scrollDirection:f,showShadow:u=!1}=e,m=(0,n.useRef)(null),p=(0,n.useMemo)(()=>({direction:d,horizontal:a,vertical:l,threshold:s,delay:c}),[d,a,l,s,c]);(0,n.useEffect)(()=>{if(o){m.current&&(m.current.style.opacity="1");return}let e=new IntersectionObserver(e=>{e.forEach(e=>{if(!e)return;let t=e.target;if(t.classList.remove("animate-fadeInSlideUp","animate-fadeInSlideDown","animate-fadeInSlideLeft","animate-fadeInSlideRight","animate-fadeOutSlideUp","animate-fadeOutSlideDown","animate-fadeOutSlideLeft","animate-fadeOutSlideRight"),e.isIntersecting){let e=p.direction||p.vertical||p.horizontal||"up";setTimeout(()=>{t.classList.add("animate-fadeInSlide".concat(S(e))),t.style.opacity="1"},p.delay)}else t.style.opacity="0",t.classList.remove("animate-fadeInSlideUp","animate-fadeInSlideDown","animate-fadeInSlideLeft","animate-fadeInSlideRight","animate-fadeOutSlideUp","animate-fadeOutSlideDown","animate-fadeOutSlideLeft","animate-fadeOutSlideRight")})},{rootMargin:p.vertical?"50% 0px 50% 0px":"0px 50% 0px 50%"}),t=m.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[p,o,f]);let S=e=>e.charAt(0).toUpperCase()+e.slice(1);return(0,i.jsx)("div",{ref:m,className:"will-change-transform ".concat(r," ").concat(u?"p-6 rounded-lg shadow-md":""),style:{opacity:o?1:0},children:t})}}}]);