document.addEventListener("DOMContentLoaded",()=>{let e="https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI",t=document.querySelector(".top-stories"),n=document.getElementById("hamburger-menu"),i=document.getElementById("nav-links");function s(e){t.innerHTML="<p>Loading...</p>",fetch(e).then(e=>{if(!e.ok)throw Error("Network response was not ok");return e.json()}).then(e=>{var n;n=e.results,t.innerHTML="",n.forEach(e=>{let n=document.createElement("div");n.classList.add("story");let i=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"";n.innerHTML=`
                <h2>${e.title}</h2>
                ${i?`<a href="${e.url}" target="_blank"><img src="${i}" alt="${e.title}" /></a>`:""}
                <p>${e.abstract}</p>
            `,t.appendChild(n)})}).catch(e=>{console.error("There has been a problem with your fetch operation:",e),t.innerHTML="<p>Failed to load top stories.</p>"})}function o(){let e=new Date().toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});document.getElementById("date-time").innerText=e}s(e),document.getElementById("science-link").addEventListener("click",e=>{e.preventDefault(),s("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI"),n.click()}),document.getElementById("international-link").addEventListener("click",e=>{e.preventDefault(),s("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI"),n.click()}),document.getElementById("UsNews-link").addEventListener("click",e=>{e.preventDefault(),s("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI"),n.click()}),document.getElementById("art-link").addEventListener("click",t=>{t.preventDefault(),s(e),n.click()}),document.getElementById("Home-link").addEventListener("click",e=>{e.preventDefault(),s("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qT3OsxIOrXHUpqxlvzRoE0AsNFAmJQJI"),n.click()}),n.addEventListener("click",()=>{i.classList.toggle("active")}),o(),setInterval(o,1e3)});
//# sourceMappingURL=index.7dafeed7.js.map
