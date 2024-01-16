const openBtn= document.querySelector(".open-btn")
const closeBtn= document.querySelector(".close-btn")
const nav= document.querySelector(".nav-ul")
openBtn.addEventListener("click",()=>{
    nav.classList.toggle("open"); 
})
