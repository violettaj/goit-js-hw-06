const textInput = document.querySelector("#validation-input");
textInput.addEventListener("focus", () => {
    textInput.value = "";
  });
  textInput.addEventListener("blur", () => {
    let text = textInput.value
    let length = 6
   if (text.length <= length) {
   textInput.classList.add("valid")}
   else {textInput.classList.add("invalid")}
  });