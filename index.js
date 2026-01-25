import{S as d,i as c}from"./assets/vendor-bqRJDAzz.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function p(s){return Promise.reject(new Error("MISSING_API_KEY"))}const a=document.querySelector(".gallery"),l=document.querySelector(".loader-wrap");let u=null;function h(s){const{webformatURL:i,largeImageURL:o,tags:t="",likes:e=0,views:r=0,comments:n=0,downloads:y=0}=s,f=String(t).slice(0,200).replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`
<li class="gallery-item">
  <a class="gallery-item__link" href="${o}" title="${f}">
    <img
      class="gallery-item__img"
      src="${i}"
      alt="${f}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${e}</span>
      <span class="gallery-item__info-item">👁 ${r}</span>
      <span class="gallery-item__info-item">💬 ${n}</span>
      <span class="gallery-item__info-item">⬇ ${y}</span>
    </div>
  </a>
</li>`}function _(s){if(!a)return;if(!Array.isArray(s)||s.length===0){a.innerHTML="";return}const i=s.map(h).join("");a.innerHTML=i,u?u.refresh():u=new d(".gallery a",{captionsData:"title",captionDelay:250})}function I(){a&&(a.innerHTML="")}function P(){l&&l.classList.remove("is-hidden")}function g(){l&&l.classList.add("is-hidden")}const m=document.querySelector(".form");function S(s){s.preventDefault();const i=m.querySelector('input[name="search-text"]');i&&i.value.trim()&&(P(),I(),p().then(t=>{if(g(),!t||!Array.isArray(t.hits)){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}if(t.hits.length===0){c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3});return}_(t.hits)}).catch(t=>{g();let e="Something went wrong. Please try again.";t.message==="MISSING_API_KEY"?e="Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)":t.response?.status===429?e="Too many requests. Please try again later.":t.response?.status===400?e="Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY.":t.message&&(e=t.message),c.error({title:"Error",message:e,position:"topRight",timeout:6e3})}))}m&&m.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
