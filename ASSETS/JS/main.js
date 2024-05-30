// Show Menu
const navMenu = document.getElementById("sub-menu"),
        menuToggle = document.getElementById("menu"),
        menuClose = document.getElementById("menu-close"),
        main = document.getElementsByClassName("main")

// Validating the menu 
if(menuToggle){
    menuToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
        main.classList.add("blurred")
    })
}

// Close menu
if(menuClose){
    menuClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
        main.classList.remove("blurred")
    })
}



