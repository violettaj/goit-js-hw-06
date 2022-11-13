const firstBtn = document.querySelector(`[data-action="decrement"]`)
const secondBtn = document.querySelector(`[data-action="increment"]`)
const result =document.querySelector("#value")
let counterValue = 0;
const decrementValue = () => {
    let resultDown =counterValue --;
    result.textContent = resultDown
}


const incrementValue = () => {
   let resultUp=  counterValue ++
   result.textContent = resultUp
}

firstBtn.addEventListener("click", decrementValue);
secondBtn.addEventListener("click", incrementValue);
