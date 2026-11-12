const events = [
 {id:1,title:"The Indie Garden",category:"Music",date:"22 NOV 2026",time:"6:00 PM – 10:00 PM",place:"Milan Mela Grounds, Kolkata",price:"₹499",image:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=900&q=85",description:"An open-air evening of indie music and good company."},
 {id:2,title:"Clay & Create",category:"Workshop",date:"24 NOV 2026",time:"11:00 AM – 1:30 PM",place:"The Hobby Room, Kolkata",price:"₹699",image:"https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=85",description:"Get your hands messy and make something lovely."},
 {id:3,title:"Frames of the City",category:"Art",date:"28 NOV 2026",time:"12:00 PM – 7:00 PM",place:"Academy of Fine Arts, Kolkata",price:"Free",image:"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=900&q=85",description:"A celebration of local artists and visual stories."},
 {id:4,title:"Sunday Brunch Club",category:"Food",date:"29 NOV 2026",time:"10:30 AM – 1:00 PM",place:"Park Street, Kolkata",price:"₹399",image:"https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=85",description:"A relaxed table, delicious bites and new friends."},
 {id:5,title:"Acoustic Afterglow",category:"Music",date:"05 DEC 2026",time:"5:30 PM – 8:30 PM",place:"Someplace Else, Kolkata",price:"₹599",image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=85",description:"Intimate live sets from rising independent artists."},
 {id:6,title:"The Photo Walk",category:"Workshop",date:"06 DEC 2026",time:"7:00 AM – 9:00 AM",place:"Victoria Memorial, Kolkata",price:"₹249",image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85",description:"See familiar streets differently through your lens."}
];
const grid=document.getElementById("eventGrid"), search=document.getElementById("searchInput"), empty=document.getElementById("emptyState");
let category="All";
function renderEvents(){
 const term=search.value.trim().toLowerCase();
 const filtered=events.filter(e=>(category==="All"||e.category===category)&&(`${e.title} ${e.category} ${e.place} ${e.description}`).toLowerCase().includes(term));
 grid.innerHTML=filtered.map(e=>`<article class="event-card"><div class="event-image" style="background-image:url('${e.image}')"><span class="event-tag">${e.category.toUpperCase()}</span></div><div class="event-body"><span class="event-date">${e.date}</span><h3>${e.title}</h3><p style="font-size:11px;color:#73766f;line-height:1.6;margin:0">${e.description}</p><div class="event-meta"><span>◷ ${e.time}</span><span>⌖ ${e.place}</span></div><div class="event-bottom"><span class="price">${e.price}</span><button class="book-btn" data-book="${e.id}">BOOK A SPOT ↗</button></div></div></article>`).join("");
 empty.hidden=filtered.length!==0;
}
document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;category=b.dataset.category;document.querySelectorAll(".filter").forEach(x=>x.classList.toggle("active",x===b));renderEvents()});
search.addEventListener("input",renderEvents);
const dialog=document.getElementById("bookingDialog"), form=document.getElementById("bookingForm");
function openDialog(title,eyebrow="SAVE YOUR SPOT"){document.getElementById("dialogTitle").textContent=title;document.getElementById("dialogEyebrow").textContent=eyebrow;document.getElementById("dialogSubtitle").textContent=eyebrow==="HOST AN EVENT"?"Tell us how to reach you and our team will be in touch.":"A few details and you're on the list.";dialog.showModal()}
grid.addEventListener("click",e=>{const b=e.target.closest("[data-book]");if(!b)return;const ev=events.find(x=>x.id===Number(b.dataset.book));openDialog(`Book: ${ev.title}`)});
document.getElementById("navBook").addEventListener("click",()=>openDialog("Host an event","HOST AN EVENT"));
document.getElementById("hostBtn").addEventListener("click",()=>openDialog("Host an event","HOST AN EVENT"));
document.getElementById("closeDialog").addEventListener("click",()=>dialog.close());
form.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const bookings=JSON.parse(localStorage.getItem("eventoraBookings")||"[]");bookings.push({...data,createdAt:new Date().toISOString()});localStorage.setItem("eventoraBookings",JSON.stringify(bookings));document.getElementById("formMessage").textContent="Thanks! Your details have been saved in this browser.";form.reset()});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("navLinks").classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>document.getElementById("navLinks").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderEvents();
