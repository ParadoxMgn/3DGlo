(()=>{"use strict";(e=>{const t=document.getElementById("timer-days"),l=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds");let c;const r=()=>{const e=(new Date("29 june 2022 20:00:00").getTime()-(new Date).getTime())/1e3;return{days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60%24),minuts:Math.floor(e/60%60),seconds:Math.floor(e%60),timeRemaining:e}},o=r(),s=e=>r().timeRemaining>0?e<10?"0"+e:e:"00",i=()=>{const e=r();t.innerText=(()=>{const e=r();return e.days<=0?"":"1"===e.days.toString().slice(-1)&&"11"!==e.days.toString().slice(-2)?`${e.days} день`:"2"===e.days.toString().slice(-1)&&"12"!==e.days.toString().slice(-2)||"3"===e.days.toString().slice(-1)&&"13"!==e.days.toString().slice(-2)||"4"===e.days.toString().slice(-1)&&"14"!==e.days.toString().slice(-2)?`${e.days} дня`:`${e.days} дней`})(),l.innerText=s(e.hours),n.innerText=s(e.minuts),a.innerText=s(e.seconds),e.timeRemaining<=0&&clearInterval(c)};i(),o.timeRemaining>0&&(c=setInterval(i,1e3))})(),(()=>{const e=document.querySelector("menu"),t=e.querySelectorAll("ul>li>a");document.addEventListener("click",(l=>{t.forEach((t=>{!l.target.classList.contains("close-btn")&&l.target.closest("menu")&&t!==l.target||e.classList.remove("active-menu")})),l.target.closest(".menu")&&e.classList.add("active-menu")}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content");document.querySelector(".service").addEventListener("click",(l=>{if(l.target.classList.contains("popup-btn")){let l=0;t.style.opacity=`${l}`,e.style.display="block";const n=()=>{let e=requestAnimationFrame(n);document.documentElement.clientWidth<768?(cancelAnimationFrame(e),t.style.opacity="1"):(t.style.opacity=`${l}`,l+=.04),l>=1&&cancelAnimationFrame(e)};n()}})),e.addEventListener("click",(l=>{(l.target.classList.contains("popup")||l.target.classList.contains("popup-close"))&&(e.style.display="none",t.style.opacity="0")}))})(),(()=>{const e=document.querySelectorAll("menu ul>li>a"),t=document.querySelector("main>a"),l=document.getElementById("service-block");t.addEventListener("click",(e=>{e.preventDefault();let t=document.documentElement.scrollTop;const n=(l.offsetTop-t)/20,a=()=>{let e=requestAnimationFrame(a);t+=n,document.documentElement.scrollTop=t,document.documentElement.scrollTop>l.offsetTop-n&&cancelAnimationFrame(e)};a()})),e.forEach((e=>{e.addEventListener("click",(t=>{var l;t.preventDefault(),document.getElementById(`${l=e,l.href.slice(l.href.lastIndexOf("#")+1)}`).scrollIntoView({block:"start",behavior:"smooth"})}))}))})(),(()=>{const e=document.querySelector("main>a"),t=e.querySelector("img");e.style.position="relative",e.style.width="17px",e.style.height="49px",t.style.position="absolute",t.style.left="0",t.style.top="0",((e,l)=>{let n=0,a=!0;const c=()=>{requestAnimationFrame(c),n>15&&(a=!a),n<-15&&(a=!a),t.style.top=a?n>10?(n+=.6)+"px":(n+=.8)+"px":n<-10?(n-=.6)+"px":(n-=.8)+"px"};c()})()})(),document.querySelectorAll("input").forEach((e=>{(e=>{const t=e.placeholder;e.addEventListener("focus",(()=>{e.placeholder="",e.addEventListener("blur",(()=>{e.placeholder=t}))}))})(e)})),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelector(".calc-type"),l=document.querySelectorAll('input[type="text"]'),n=document.querySelector(".mess"),a=document.querySelectorAll('input[type="email"]'),c=document.querySelectorAll('input[type="tel"]'),r=e=>{e.value=e.value.replace(/\-+/g,"-"),e.value=e.value.replace(/^[\s\-]+/g,""),e.value=e.value.replace(/[\s\-]+$/g,"")},o=e=>{e.value=e.value.replace(/[^а-я\s\-]+/gi,""),e.value=e.value.replace(/\s+/g," "),r(e)};e.forEach((e=>{e.addEventListener("blur",(l=>{e!==t&&(l.target.value=l.target.value.replace(/\D+/g,""))}))})),l.forEach((t=>{let l=!0;t.addEventListener("blur",(t=>{e.forEach((e=>{t.target===e&&(l=!1)})),l&&(o(t.target),t.target.value=t.target.value.replace(/^([а-я])([a-я\s\-]+)/gi,((e,t,l)=>`${t.toUpperCase()}${l.toLowerCase()}`)))}))})),n.addEventListener("blur",(e=>{o(e.target)})),a.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^a-z0-9\@\-\_\.\!\~\*\']+/gi,""),r(e.target)}))})),c.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\-\)]+/g,""),r(e.target)}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),l=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{t.forEach(((t,n)=>{e.target.closest(".service-header-tab")===t?(t.classList.add("active"),l[n].classList.remove("d-none")):(t.classList.remove("active"),l[n].classList.add("d-none"))}))}))})()})();