
const slider = document.querySelector("#font-size-control");
const txt = document.querySelector("#text")

const changeText = (event) => {
    let current = event.currentTarget.value;
    
    txt.style.fontSize = current + "px"
}

slider.addEventListener("input", changeText);

