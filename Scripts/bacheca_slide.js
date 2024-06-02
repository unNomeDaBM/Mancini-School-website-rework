const bacheca_width = document.getElementById("bacheca").offsetWidth;
const bacheca_nav = document.getElementById("sliding nav");
const bacheca_left_arrow = document.getElementById("bacheca left arrow");
const bacheca_right_arrow = document.getElementById("bacheca right arrow");
const bacheca_items_width = 280;
const bacheca_items_gap = 40;
const total_width = (bacheca_items_gap + bacheca_items_width)*7
const number_of_items_that_fit = Math.round(bacheca_width/(bacheca_items_gap + bacheca_items_width) - 0.4);


let bacheca_translate_x = 0;

bacheca_left_arrow.addEventListener("click", ()=>{
    
    if(Math.abs(bacheca_translate_x) >= bacheca_items_width + bacheca_items_gap){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x + (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x += (bacheca_items_width  + bacheca_items_gap);
    }
});
bacheca_right_arrow.addEventListener("click", ()=>{

    if(Math.abs(bacheca_translate_x) < (total_width - number_of_items_that_fit*(bacheca_items_gap + bacheca_items_width))){
        bacheca_nav.style.transform = `translateX(${bacheca_translate_x - (bacheca_items_width  + bacheca_items_gap)}px)`;
        bacheca_translate_x -= (bacheca_items_width  + bacheca_items_gap);
    }

    // console.log(`bacheca_translate_x: ${bacheca_translate_x}`)
    // console.log(`number_of_items_that_fit: ${number_of_items_that_fit}`)
    // console.log(`bacheca_width/(bacheca_items_gap + bacheca_items_width): ${bacheca_width/(bacheca_items_gap + bacheca_items_width)}`)
    // console.log(`bacheca_items_gap + bacheca_items_width: ${bacheca_items_gap + bacheca_items_width}`)
    // console.log(`total_width - number_of_items_that_fit*(bacheca_items_gap + bacheca_items_width): ${total_width - number_of_items_that_fit*(bacheca_items_gap + bacheca_items_width)}`);
});
