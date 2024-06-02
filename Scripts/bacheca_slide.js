const bacheca_nav = document.getElementById("sliding nav");
const bacheca_left_arrow = document.getElementById("bacheca left arrow");
const bacheca_right_arrow = document.getElementById("bacheca right arrow");
const bacheca_items_width = 280;
const bacheca_items_gap = 40;


let bacheca_translate_x = 0;
let bacheca_focus_element = 1;
console.log(bacheca_nav.children.length)

bacheca_left_arrow.addEventListener("click", ()=>{
    
    if(bacheca_focus_element > 1){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x + (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x += (bacheca_items_width  + bacheca_items_gap);
        bacheca_focus_element -= 1;
    }
});
bacheca_right_arrow.addEventListener("click", ()=>{
    
    if(bacheca_focus_element < (bacheca_nav.children.length - Math.floor(window.innerWidth/(bacheca_items_gap + bacheca_items_width))+1)){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x - (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x -= (bacheca_items_width  + bacheca_items_gap);
        bacheca_focus_element += 1;
    }
});
