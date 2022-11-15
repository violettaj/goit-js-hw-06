function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector("button")
const randomColor = () => {
  document.body.style.backgroundColor = getRandomHexColor()
}
btn.addEventListener('click', randomColor);


