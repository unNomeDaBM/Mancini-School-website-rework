const bacheca = document.getElementById("bacheca");
const bacheca_nav = document.getElementById("sliding nav");
const bacheca_left_arrow = document.getElementById("bacheca left arrow");
const bacheca_right_arrow = document.getElementById("bacheca right arrow");
const bacheca_items_width = 280;
const bacheca_items_gap = 40;
const total_width = (bacheca_items_gap + bacheca_items_width)*7

let bacheca_translate_x = 0;
let number_of_items_that_fit = Math.round(bacheca.offsetWidth/(bacheca_items_gap + bacheca_items_width) - 0.4);

bacheca_left_arrow.addEventListener("click", ()=>{
    
    if(Math.abs(bacheca_translate_x) >= bacheca_items_width + bacheca_items_gap){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x + (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x += (bacheca_items_width  + bacheca_items_gap);
    }
});
bacheca_right_arrow.addEventListener("click", ()=>{
    number_of_items_that_fit = Math.round(bacheca.offsetWidth/(bacheca_items_gap + bacheca_items_width) - 0.4);

    if(Math.abs(bacheca_translate_x) < (total_width - number_of_items_that_fit*(bacheca_items_gap + bacheca_items_width))){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x - (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x -= (bacheca_items_width  + bacheca_items_gap);
    }
});
