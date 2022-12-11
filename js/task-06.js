const textInput = document.querySelector("#validation-input");
const dataLength =
  textInput.addEventListener("blur", () => {
    let text = textInput.value
    let length = textInput.dataset.length
   if (text.length == length) {
   textInput.classList.add("valid")
  textInput.classList.remove("invalid")}
   else {textInput.classList.add("invalid")
   textInput.classList.remove("valid")}
  });