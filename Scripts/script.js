let menuButton = document.getElementById("menu-button");
let menu = document.getElementById("sticky-menu");

menuButton.addEventListener("click" , e => {
    let menuState = menu.getAttribute("state");
    console.log(menuState)

    if (menuState === "open"){
        menu.style.display = "none";
        menu.setAttribute("state", "closed")
        
    }else if(menuState === "closed"){
        menu.style.display = "flex";
        menu.setAttribute("state", "open")
    }
})