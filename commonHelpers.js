(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();document.getElementById("toggle-night-mode").addEventListener("click",function(){document.body.classList.toggle("night-mode")});(()=>{const o={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};o.openModalBtn.addEventListener("click",s),o.closeModalBtn.addEventListener("click",s);function s(){o.modal.classList.toggle("is-open")}function u(){function i(t,n){let c=document.querySelector(t);if(!c){console.log("елемент куди скролити не знайдено:",t);return}let m=c.getBoundingClientRect().top,p=window.pageYOffset,a=null;const g=function(r,l,d,y){return r/=y/2,r<1?d/2*r*r+l:(r--,-d/+l)},f=function(r){a===null&&(a=r);const l=r-a,d=g(l,p,m,n);window.scrollTo(0,d),l<n&&requestAnimationFrame(f)};requestAnimationFrame(f)}const e=document.querySelectorAll("a.scroll-to");e&&e.forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const c=this.getAttribute("href");o.modal.classList.contains("is-open")&&o.modal.classList.remove("is-open"),i(c,1e3)})})}u()})();document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".scroll-to-top");window.addEventListener("scroll",()=>{window.scrollY>300?o.style.display="block":o.style.display="none"}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=commonHelpers.js.map