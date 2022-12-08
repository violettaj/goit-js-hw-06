
const slider = document.querySelector("#font-size-control");
const txt = document.querySelector("#text")
txt.style.fontSize = "54px"
const changeText = (event) => {
    
    let current = slider.value;
    
    txt.style.fontSize = current + "px"
}

slider.addEventListener("input", changeText);

