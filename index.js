const menubarEl = document.querySelector(".menubar");
const navMenu = document.querySelector(".nav-menu");

menubarEl.addEventListener("click",()=>{
    console.log("clickedS")
    if(menubarEl.classList.contains("fa-bars")){
        menubarEl.classList.add("fa-xmark");
        menubarEl.classList.remove("fa-bars");
        navMenu.classList.add("res-menu");
        navMenu.style.display = "block";
        // navMenu.classList.remove("navigation-menu");
    }else{
        menubarEl.classList.remove("fa-xmark");
        menubarEl.classList.add("fa-bars");
        navMenu.classList.remove("res-menu");
        navMenu.style.display = "none";
        // navMenu.classList.remove("navigation-menu");
    }
})