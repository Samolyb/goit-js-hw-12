import{a as w,S as E,i as g}from"./assets/vendor-f736e62a.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();const L="43864009-cebb341532060e679edcf3c4c",b="https://pixabay.com/api/";async function I(e,s=1){return(await w.get(b,{params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}document.querySelector(".list");let h;function x(e){e.innerHTML=""}function B(e,s){const n=e.map(r=>`
      <li class="item-list">
        <a href="${r.largeImageURL}" class="item-list-link">
            <img class="item-list-img" src="${r.webformatURL}" alt="${r.tags}">
        </a>
        <div class='markup-info'>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Likes</h3>
                <p class="item-list-text">${r.likes}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Views</h3>
                <p class="item-list-text">${r.views}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Comments</h3>
                <p class="item-list-text">${r.comments}</p>
            </div>
            <div class="item-list-info-text">
                <h3 class="item-list-title">Downloads</h3>
                <p class="item-list-text">${r.downloads}</p>
            </div>
        </div>
      </li>
    `).join("");s.insertAdjacentHTML("beforeend",n),h=new E(".item-list-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}),h.refresh()}function c(e,s){e.style.display=s?"block":"none"}function p(e,s){e.style.display=s?"block":"none"}function P(){g.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"})}function d(e){g.error({title:"Error",message:e,position:"topCenter"})}function O(e){const{height:s}=e.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}const $=document.getElementById("search-form"),A=document.getElementById("search-input"),m=document.getElementById("gallery"),a=document.getElementById("load-more"),y=document.getElementById("loader");let u="",o=1,f=100;$.addEventListener("submit",async e=>{if(e.preventDefault(),u=A.value.trim(),u===""){d("Please enter a search term");return}o=1,f=0,x(m),c(a,!1),await v()});a.addEventListener("click",async()=>{o++,await v()});async function v(){p(y,!0);try{const e=await I(u,o);if(f=e.totalHits,e.hits.length===0&&o===1){d("Sorry, there are no images matching your search query. Please try again!");return}B(e.hits,m),o*15>=f?(c(a,!1),P()):c(a,!0),o>1&&O(m)}catch(e){console.error("Error fetching images:",e),d("An error occurred while fetching data. Please try again later.")}finally{p(y,!1)}}
//# sourceMappingURL=commonHelpers.js.map
