import{A as b,a as x,i as f,b as S}from"./assets/vendor-a5379a3f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{b.init()});const k="/project-group-3-js/assets/image1-0ed2761b.jpg",L="/project-group-3-js/assets/image1_2x-740c20eb.jpg",E="/project-group-3-js/assets/image2-96ad393f.jpg",_="/project-group-3-js/assets/image2_2x-6a73ed1a.jpg",q="/project-group-3-js/assets/image3-6715c577.jpg",J="/project-group-3-js/assets/image3_2x-864f83b0.jpg",B="/project-group-3-js/assets/image4-a834c8e6.jpg",M="/project-group-3-js/assets/image4_2x-0977c6c6.jpg",N="/project-group-3-js/assets/image5-ff75b5f0.jpg",A="/project-group-3-js/assets/image5_2x-d087946a.jpg",O="/project-group-3-js/assets/image6-8f5a885d.jpg",P="/project-group-3-js/assets/image6_2x-be851095.jpg",G="/project-group-3-js/assets/image7-28da063c.jpg",I="/project-group-3-js/assets/image7_2x-f788309d.jpg",R="/project-group-3-js/assets/image8-716d397e.jpg",T="/project-group-3-js/assets/image8_2x-d80eaaa3.jpg",$="/project-group-3-js/assets/image9-869e4ba5.jpg",C="/project-group-3-js/assets/image9_2x-07a8c75b.jpg",z="/project-group-3-js/assets/image10-ea6702b8.jpg",D="/project-group-3-js/assets/image10_2x-ccbc9206.jpg",F="/project-group-3-js/assets/icons-e7e34544.svg";document.addEventListener("DOMContentLoaded",function(){const e=[{title:"Wallet webservice",image:k,image2x:L,technologies:"React, JavaScript, Node JS, Git",link:"https://www.apple.com/wallet/"},{title:"Green harvest webservice",image:E,image2x:_,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-4-html-css/"},{title:"English Exellence website",image:q,image2x:J,technologies:"React, JavaScript, Node JS, Git",link:"https://www.icee-network.org/"},{title:"mimino website",image:B,image2x:M,technologies:"React, JavaScript, Node JS, Git",link:"https://grand-mimino.tbilisi-hotels.com/"},{title:"power pulse webservice",image:N,image2x:A,technologies:"React, JavaScript, Node JS, Git",link:"https://powerpulsemalta.com/"},{title:"chego jewelry website",image:O,image2x:P,technologies:"React, JavaScript, Node JS, Git",link:"https://erria.xyz/profile/chego-jewelry/"},{title:"energy flow webservice",image:G,image2x:I,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"fruitbox online store",image:R,image2x:T,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"vyshyvanka vibes Landing Page",image:$,image2x:C,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"starlight studio landing page",image:z,image2x:D,technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"}];let o=0;const a=3,i=document.getElementById("project-list"),t=document.getElementById("load-more");function s(){for(let n=0;n<a;n++){if(o>=e.length){t.style.display="none";break}const r=e[o],l=document.createElement("li");l.innerHTML=`
                <picture>
                    <source srcset="${r.image2x} 2x, ${r.image} 1x">
                    <img class="project-image" src="${r.image}" alt="${r.title}">
                </picture>
                <div class="project-info">
                <p class="project-technologies">${r.technologies}</p>
                    <div class="project-title-btn"><p class="project-title">${r.title}</p>
                    <button class="project-btn" onclick="window.open('${r.link}', '_blank')">VISIT
                    <svg class="arrow-up-right" width="14.5" height="14.5">
                        <use xlink:href="${F}#icon-visit"></use>
                    </svg>
                </div>
            `,i.appendChild(l),o++}}t.addEventListener("click",s),s()});new x(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});const y=document.querySelector(".together-form"),d=document.getElementById("together-modal"),H=document.querySelector(".together-modal-close"),m=document.querySelector(".together-text-error");document.querySelector(".together-input-error");const u=document.querySelector(".together-icon-ok");document.querySelector(".together-input-ok");document.querySelector(".together-text");y.addEventListener("submit",function(e){e.preventDefault();const o=document.querySelector(".together-email").value,a=document.querySelector(".together-text").value;if(!o.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){u.style.display="none",m.style.display="block",f.info({title:"Hey!",message:"Please enter a valid email address!",position:"topCenter"});return}Z(o,a)});function Z(e,o){const a={email:e,comment:o};S.post("https://portfolio-js.b.goit.study/api/requests",a,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(i=>{i.data&&(d.style.display="flex",y.reset())}).catch(i=>{f.error({title:"Error",message:"Failed to submit your request. Please try again later.",position:"topCenter"})})}const Y=document.querySelector(".together-email");Y.addEventListener("input",function(e){const o=e.target.value.trim();o===""?(u.style.display="none",m.style.display="none"):o.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?(u.style.display="block",m.style.display="none"):(u.style.display="none",m.style.display="block")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(d.style.display="none")});H.addEventListener("click",()=>{d.style.display="none"});window.addEventListener("click",e=>{e.target===d&&(d.style.display="none")});document.addEventListener("DOMContentLoaded",function(){const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};if(e.openModalBtn&&e.closeModalBtn&&e.modal){let t=function(){e.modal.classList.toggle("is-open")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}function o(t,s){let n=document.querySelector(t);if(!n){console.log("Елемент куди скролити не знайдено:",t);return}let r=n.getBoundingClientRect().top+window.pageYOffset,l=window.pageYOffset,h=null;const v=function(c,g,p,w){return c/=w/2,c<1?p/2*c*c+g:(c--,-p/2*(c*(c-2)-1)+g)},j=function(c){h===null&&(h=c);const g=c-h,p=v(g,l,r-l,s);window.scrollTo(0,p),g<s&&requestAnimationFrame(j)};requestAnimationFrame(j)}const a=document.querySelectorAll("a.scroll-to");a&&a.forEach(t=>{t.addEventListener("click",function(s){s.preventDefault();const n=this.getAttribute("href");e.modal&&e.modal.classList.contains("is-open")&&e.modal.classList.remove("is-open"),o(n,1e3)})});const i=document.querySelector(".scroll-to-top");i&&(window.addEventListener("scroll",()=>{window.scrollY>300?i.style.display="block":i.style.display="none"}),i.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))});function V(){const e=new Date().getHours(),o=document.getElementById("toggle-night-mode");e>=18||e<6?(document.body.classList.add("night-mode"),o.checked=!0):(document.body.classList.remove("night-mode"),o.checked=!1)}document.getElementById("toggle-night-mode").addEventListener("change",function(){document.body.classList.toggle("night-mode")});window.onload=V;
//# sourceMappingURL=commonHelpers.js.map
