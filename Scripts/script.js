let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("sticky-menu");

menuButton.addEventListener("click" , e => {
    let menuState = menu.getAttribute("state");
    console.log(menuState)

    if (menuState === "open"){
        closeMenu();
        // menu.style.display = "none";
        // menu.setAttribute("state", "closed")
        
    }else if(menuState === "closed"){
        openMenu();
        // menu.style.display = "flex";
        // menu.setAttribute("state", "open")
    }
})


function openMenu(){
    menu.setAttribute("state", "open")

    menu.style.transitionTimingFunction = "ease";
    menu.style.translate = "110svw";
}

function closeMenu(){
    menu.setAttribute("state", "closed")
    
    menu.style.transitionTimingFunction = "ease-in";
    menu.style.translate = "-110svw";
}