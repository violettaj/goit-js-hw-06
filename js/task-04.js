const firstBtn = document.querySelector(`[data-action="decrement"]`)
const secondBtn = document.querySelector(`[data-action="increment"]`)
const result =document.querySelector("#value")



let counter = 0;

function incrementValue() {
  counter += 1;
  document.getElementById("value").innerHTML = counter;
}

function decrementValue() {
    counter -= 1;
  document.getElementById("value").innerHTML = counter;
}
firstBtn.addEventListener("click", decrementValue);
secondBtn.addEventListener("click", incrementValue);
