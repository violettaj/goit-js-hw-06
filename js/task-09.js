function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector("button");
const color = document.querySelector(".color");
color.textContent = "#FFFFFF";
const randomColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = `${getRandomHexColor()}`
}
btn.addEventListener('click', randomColor);


