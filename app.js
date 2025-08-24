
function setCookie(name, value, days){const d=new Date();d.setTime(d.getTime()+(days*24*60*60*1000));document.cookie=`${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;}
function getCookie(name){const cookieArr=document.cookie.split(';');for(let c of cookieArr){let [k,v]=c.trim().split('=');if(decodeURIComponent(k)===name)return decodeURIComponent(v||'');}return null;}
function eraseCookie(name){ setCookie(name,'',-1); }
function showCookieBar(){const accepted=getCookie('cookieConsent');const bar=document.getElementById('cookiebar');if(!accepted&&bar){bar.style.display='block';}}
function acceptCookies(){setCookie('cookieConsent','yes',365);const bar=document.getElementById('cookiebar');if(bar) bar.style.display='none';}
function login(username){sessionStorage.setItem('isLoggedIn','true');sessionStorage.setItem('username',username);setCookie('rememberUser',username,7);}
function logout(){sessionStorage.removeItem('isLoggedIn');sessionStorage.removeItem('username');window.location.href='index.html';}
function guard(){if(sessionStorage.getItem('isLoggedIn')!=='true'){window.location.href='login.html?redirect='+encodeURIComponent(location.pathname.split('/').pop());}}
function buildShareLinks(opts){const pageUrl=encodeURIComponent(opts.url||window.location.href);const text=encodeURIComponent(opts.text||document.title);const hashtags=encodeURIComponent(opts.hashtags||'fitness,health,tech');return {whatsapp:`https://api.whatsapp.com/send?text=${text}%20${pageUrl}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,twitter:`https://twitter.com/intent/tweet?text=${text}&url=${pageUrl}&hashtags=${hashtags}`};}
function renderShareBar(containerId,opts){const links=buildShareLinks(opts||{});const el=document.getElementById(containerId);if(!el) return;el.innerHTML=`<a aria-label="Share on WhatsApp" href="${links.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a aria-label="Share on Facebook" href="${links.facebook}" target="_blank" rel="noopener">Facebook</a><a aria-label="Share on X/Twitter" href="${links.twitter}" target="_blank" rel="noopener">Twitter</a>`;}
function qs(sel){return document.querySelector(sel);}function qsa(sel){return Array.from(document.querySelectorAll(sel));}
document.addEventListener('DOMContentLoaded', showCookieBar);
