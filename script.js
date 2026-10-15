const MENU=[
["coffee","Spanish Bonbon","Espresso over sweet condensed milk, layered and silky",260],
["coffee","Vietnamese Phin","Slow-dripped dark roast, rich and bold",240],
["coffee","Flat White","Velvety microfoam over a double shot",220],
["coffee","Iced Orchard Cold Brew","18-hour cold brew with a citrus twist",250],
["food","Avocado Toast","Sourdough, smashed avocado, chilli flakes, poached egg",420],
["food","Croissant Sandwich","Buttery croissant, egg, cheese and herbs",380],
["food","Mutton Shakshuka","Spiced tomato stew, slow-cooked mutton, baked eggs",520],
["food","Garden Egg Platter","Seasonal eggs your way, served with toasted bread",360],
["sweet","Banoffee Jar","Banana, toffee, cream and crushed biscuit",290],
["sweet","Chikoo Cheesecake","Creamy and seasonal, made from orchard fruit",320]];
const IMG=["cafe.jpg","coffee.jpg"];
const TILES=[["The Orchard","#2f5d3a,#7fa66a"],["Morning Brew","#5a3a22,#c98b4f"],["Chikoo Shade","#1b3a2a,#a8c48a"],["Cosy Corner","#4a3320,#e9d7b8"],["Golden Hour","#7a4a1e,#f0c987"],["Coconut Canopy","#0e2f22,#4f8a63"]];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function route(){const id=(location.hash||"#home").slice(1);const pg=$("#"+id)?id:"home";
$$(".page").forEach(p=>p.classList.toggle("on",p.id===pg));
$$("nav a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+pg));
$("#links").classList.remove("open");scrollTo(0,0);document.title=pg[0].toUpperCase()+pg.slice(1)+" | Icaro × 729 Grams Coffee"}
addEventListener("hashchange",route);route();
$("#burger").onclick=()=>$("#links").classList.toggle("open");
function draw(f){$("#menuList").innerHTML=MENU.filter(m=>f==="all"||m[0]===f).map(m=>`<div class="item"><div><h4>${m[1]}</h4><p>${m[2]}</p></div><b>₹${m[3]}</b></div>`).join("")}
draw("all");
$("#tabs").onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("#tabs button").forEach(x=>x.classList.toggle("on",x===b));draw(b.dataset.f)};
const bg=(c,i)=>{const[a,b]=c.split(",");return `linear-gradient(160deg,${a},${b})`};
$("#gal").innerHTML=TILES.map((t,i)=>`<div class="tile" data-i="${i}" style="background-image:${IMG[i]?`url(${IMG[i]}),`:""}${bg(t[1])}">${t[0]}</div>`).join("");
const lb=document.createElement("div");lb.className="lb";lb.innerHTML="<div></div>";document.body.append(lb);
$("#gal").onclick=e=>{const t=e.target.closest(".tile");if(!t)return;const d=lb.firstChild;d.style.backgroundImage=t.style.backgroundImage;d.textContent=t.textContent;lb.classList.add("on")};
lb.onclick=()=>lb.classList.remove("on");addEventListener("keydown",e=>e.key==="Escape"&&lb.classList.remove("on"));
const f=$("#rsv"),today=new Date().toISOString().split("T")[0];f.d.min=today;
f.onsubmit=e=>{e.preventDefault();let ok=true;[f.n,f.p,f.d].forEach(i=>{const v=i.checkValidity()&&i.value.trim();i.classList.toggle("bad",!v);if(!v)ok=false});
$("#msg").textContent=ok?`Thank you, ${f.n.value}! We've noted a table for ${f.g.value} on ${f.d.value} at ${f.t.value}. We'll confirm on ${f.p.value}.`:"Please fill in your name, a valid phone number and a date.";if(ok)f.reset()};
$("#yr").textContent=new Date().getFullYear();
