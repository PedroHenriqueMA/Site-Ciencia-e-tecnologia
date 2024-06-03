const sidebarOpenButton =  document.querySelector("[data-button=open-sidebar]") 
const sidebarCloseButton =  document.querySelector("[data-button=close-sidebar]");
if (window.addEventListener("scroll",  () =>  {
     45 <  window.scrollY ?  (sidebarOpenButton.style.color =  "#4B0082",  console.log("passou")) :  sidebarOpenButton.style.color =  "#FFFFFF"
})
,  sidebarOpenButton.addEventListener("click",  () =>  {
     document.getElementById("sidebar").style.display =  "block",
     sidebarOpenButton.style.display =  "none"
}),  sidebarCloseButton.addEventListener("click",  () =>  {
     document.getElementById("sidebar").style.display =  "none",
     sidebarOpenButton.style.display =  "block"
}),  400 >  window.innerWidth) {
     let a =  document.querySelector("[data-text=intro-h1]"),
     b =  document.querySelector("[data-text=intro-p]");
     a.classList.remove("text-big"),
     a.classList.add("text-medium"),
     b.classList.remove("text-medium"),
     b.classList.add("text-small"),
     b.innerHTML =  "Veja mais sobre a \xE1rea do futuro"
}
else {
     let a =  document.querySelector("[data-text=intro-p]");
     a.innerHTML =  "Aqui voc\xEA v\xEA mais sobre a \xE1rea do futuro"
}