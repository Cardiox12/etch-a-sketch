const rangeCounter = document.getElementById("range-counter");
const clear_button = document.getElementById("btn-container").children[0];
const color_mode_button = document.getElementById("btn-container").children[1];
const main_container = document.getElementById("main-container");
const popup_container = document.getElementById("clear-popup");
const range = document.getElementById("popup-range");
const sketch_canvas = document.getElementById("sketch");
let default_size = 16;
let grid = new Grid(sketch_canvas);

const updateRangePopup = function(val){
    rangeCounter.textContent = val;
}

const getRangeValue = function(){
    return parseInt(rangeCounter.textContent);
}

const setRangeToZero = function(){
    range.value = 0;
}

const init = function(){
    setRangeToZero();
    grid.generateGrid(default_size, default_size);
}

clear_button.addEventListener("click", () => {
    main_container.classList.toggle("blur");
    popup_container.style.display = "flex";
});

document.getElementById("submit-btn").addEventListener("click", () => {
    let rangeVal = getRangeValue();
    grid.removeCells();
    grid.generateGrid(rangeVal, rangeVal);
    setTimeout(() => {
        main_container.classList.toggle("blur");    
    }, 500);
    popup_container.style.display = "none";
});

color_mode_button.addEventListener("click", () => {
    grid.addColor();
});