let menuButton = document.getElementById("menu-button");
let menuButtonBars = menuButton.children;
let menu = document.getElementById("sticky-menu");


function openMenu(){
    menu.setAttribute("state", "open")

    menu.style.transitionTimingFunction = "ease";
    menu.style.translate = "110svw";

    menuButtonBars[0].style.rotate = "45deg";
    menuButtonBars[0].style.translate = "0 8.5px";
    menuButtonBars[1].style.transitionDuration = "0.3s"; 
    menuButtonBars[1].style.backgroundColor = "rgba(0, 0, 0, 0)"; 
    menuButtonBars[2].style.rotate = "-45deg";
    menuButtonBars[2].style.translate = "0 -8.5px";
}

function closeMenu(){
    menu.setAttribute("state", "closed")
    
    menu.style.transitionTimingFunction = "ease-in";
    menu.style.translate = "-110svw";
    
    menuButtonBars[0].style.rotate = "0deg";
    menuButtonBars[0].style.translate = "0 0px";
    menuButtonBars[1].style.transitionDuration = "0.6s"; 
    menuButtonBars[1].style.backgroundColor = "rgba(255, 255, 255, 255)"; 
    menuButtonBars[2].style.rotate = "0deg";
    menuButtonBars[2].style.translate = "0 0";
}



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

