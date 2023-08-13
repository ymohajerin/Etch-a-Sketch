const container = document.querySelector(".container")
for (let i = 0; i< (16*16) ; i++){
    let div = document.createElement('div')
    div.style.cssText = 'flex: 0 0 6.25%; height: 6.25%; background-color: white; box-sizing: border-box;';
    container.appendChild(div)
}
document.querySelectorAll(".container > div").forEach(element => {element.addEventListener("mouseover", function(){
    element.classList.add("hovered");
})
    
 })