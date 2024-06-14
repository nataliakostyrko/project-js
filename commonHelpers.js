import{A as w,i as f,a as b}from"./assets/vendor-17c7a8f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();document.getElementById("toggle-night-mode").addEventListener("click",function(){document.body.classList.toggle("night-mode")});document.addEventListener("DOMContentLoaded",function(){const e=[{title:"Wallet webservice",image:"./img/5-my-projects/image1.jpg",image2x:"./img/5-my-projects/image1_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"Green harvest webservice",image:"./img/5-my-projects/image2.jpg",image2x:"./img/5-my-projects/image2_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-4-html-css/"},{title:"English Exellence website",image:"./img/5-my-projects/image3.jpg",image2x:"./img/5-my-projects/image3_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"mimino website",image:"./img/5-my-projects/image4.jpg",image2x:"./img/5-my-projects/image4_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"power pulse webservice ",image:"./img/5-my-projects/image5.jpg",image2x:"./img/5-my-projects/image5_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"chego jewelry website",image:"./img/5-my-projects/image6.jpg",image2x:"./img/5-my-projects/image6_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"energy flow webservice",image:"./img/5-my-projects/image7.jpg",image2x:"./img/5-my-projects/image7_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"fruitbox online store",image:"./img/5-my-projects/image8.jpg",image2x:"./img/5-my-projects/image8_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"vyshyvanka vibes Landing Page",image:"./img/5-my-projects/image9.jpg",image2x:"./img/5-my-projects/image9_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"},{title:"starlight studio landing page",image:"./img/5-my-projects/image10.jpg",image2x:"./img/5-my-projects/image10_2x.jpg",technologies:"React, JavaScript, Node JS, Git",link:"https://ghostkato.github.io/project-group-3-js/"}];let t=0;const s=3,r=document.getElementById("project-list"),o=document.getElementById("load-more");function i(){for(let c=0;c<s;c++){if(t>=e.length){o.style.display="none";break}const n=e[t],m=document.createElement("li");m.innerHTML=`
                <picture>
                    <source srcset="${n.image2x} 2x, ${n.image} 1x">
                    <img class="project-image" src="${n.image}" alt="${n.title}">
                </picture>
                <div class="project-info">
                <p class="project-technologies">${n.technologies}</p>
                    <div class="project-title-btn"><p class="project-title">${n.title}</p>
                    <button class="project-btn" onclick="window.open('${n.link}', '_blank')">VISIT
                    <svg class="arrow-up-right" width="14.5" height="14.5">
                    <use href="./img/icons.svg#icon-visit"></use>
                    </svg></button></div>
                </div>
            `,r.appendChild(m),t++}}o.addEventListener("click",i),i()});new w(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});const j=document.querySelector(".together-form"),g=document.getElementById("together-modal"),L=document.querySelector(".together-modal-close"),p=document.querySelector(".together-text-error");document.querySelector(".together-input-error");const u=document.querySelector(".together-icon-ok");document.querySelector(".together-input-ok");document.querySelector(".together-text");j.addEventListener("submit",function(e){e.preventDefault();const t=document.querySelector(".together-email").value,s=document.querySelector(".together-text").value;if(!t.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){u.style.display="none",p.style.display="block",f.info({title:"Hey!",message:"Please enter a valid email address!",position:"topCenter"});return}x(t,s)});function x(e,t){const s={email:e,comment:t};b.post("https://portfolio-js.b.goit.study/api/requests",s,{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(r=>{r.data&&(g.style.display="flex",j.reset())}).catch(r=>{f.error({title:"Error",message:"Failed to submit your request. Please try again later.",position:"topCenter"})})}const E=document.querySelector(".together-email");E.addEventListener("input",function(e){const t=e.target.value.trim();t===""?(u.style.display="none",p.style.display="none"):t.match(/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)?(u.style.display="block",p.style.display="none"):(u.style.display="none",p.style.display="block")});document.addEventListener("keydown",function(e){e.key==="Escape"&&(g.style.display="none")});L.addEventListener("click",()=>{g.style.display="none"});window.addEventListener("click",e=>{e.target===g&&(g.style.display="none")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector("#footer");function t(){const s=e.getBoundingClientRect().top,r=window.innerHeight;s<r&&(e.classList.add("visible"),updatePreview())}window.addEventListener("scroll",t),t()});(()=>{const e={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}function s(){function r(i,c){let n=document.querySelector(i);if(!n){console.log("елемент куди скролити не знайдено:",i);return}let m=n.getBoundingClientRect().top,v=window.pageYOffset,y=null;const S=function(l,a,d,k){return l/=k/2,l<1?d/2*l*l+a:(l--,-d/+a)},h=function(l){y===null&&(y=l);const a=l-y,d=S(a,v,m,c);window.scrollTo(0,d),a<c&&requestAnimationFrame(h)};requestAnimationFrame(h)}const o=document.querySelectorAll("a.scroll-to");o&&o.forEach(i=>{i.addEventListener("click",function(c){c.preventDefault();const n=this.getAttribute("href");e.modal.classList.contains("is-open")&&e.modal.classList.remove("is-open"),r(n,1e3)})})}s()})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map
