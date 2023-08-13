
isRainbow = false
function addRainbowEffect(element) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function updateGrid(input) {
    container.textContent = "";
    if (isRainbow == true){for (let i = 0; i < (input * input); i++) {
        let div = document.createElement('div');
        div.style.cssText = `flex: 0 0 ${100 / input}%; height: ${100 / input}%; box-sizing: border-box;`;
        div.addEventListener("mouseover", () => addRainbowEffect(div));
        container.appendChild(div);

    }}
    else{ for (let i = 0; i < (input * input); i++) {
        let div = document.createElement('div');
        div.style.cssText = `flex: 0 0 ${100 / input}%; height: ${100 / input}%; box-sizing: border-box;`;
        div.addEventListener("mouseover", function addHoverEffect(){div.classList.add("hovered")});
        container.appendChild(div);
    }}
}
const container = document.querySelector(".container")
for (let i = 0; i< (16*16) ; i++){
    let div = document.createElement('div')
    div.style.cssText = 'flex: 0 0 6.25%; height: 6.25%; box-sizing: border-box;';
    container.appendChild(div)
}
let divs =document.querySelectorAll(".container > div");
divs.forEach(element => {element.addEventListener("mouseover", function addHoverEffect(){element.classList.add("hovered")});
    
})
    
 const sizeButton = document.querySelector(".size");
 sizeButton.addEventListener("click", function() {
    let input;
    do {
    input = parseInt(prompt("Enter a number between 0 and 100:"), 10);
} while (isNaN(input) || input < 0 || input > 100);
    updateGrid(input)})


const rainbowButton = document.querySelector(".rainbow");
rainbowButton.addEventListener("click", function(){
    let divs =document.querySelectorAll(".container > div");
    divs.forEach(element => {
        element.removeEventListener("mouseover", function addHoverEffect(){element.classList.add("hovered")});
        element.addEventListener("mouseover", () => addRainbowEffect(element))
        
    })
    isRainbow = true
})
const regularButton = document.querySelector(".black")
regularButton.addEventListener("click", function(){
let divs = document.querySelectorAll(".container > div");
if (isRainbow== true)
{divs.forEach(element => {
    element.removeEventListener("mouseover",() => addRainbowEffect());
    element.addEventListener("mouseover", () => element.style.backgroundColor = "black")
})
}
})
const eraseButton = document.querySelector(".eraser")
eraseButton.addEventListener("click", function(){
let divs = document.querySelectorAll(".container > div");
divs.forEach(element => {
    element.removeEventListener("mouseover", () => addRainbowEffect());
    element.addEventListener("mouseover", () => element.style.backgroundColor = "white")
})
})
const clearButton = document.querySelector(".clear")
clearButton.addEventListener("click", function(){
let divs = document.querySelectorAll(".container > div");
divs.forEach(element => {
    element.style.backgroundColor = "white"
})
})