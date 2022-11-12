const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstElement = document.createElement("li");
firstElement.textContent = "Potatoes";
firstElement.classList.add("item")
const secondElement = document.createElement("li");
secondElement.textContent = "Mushrooms";
secondElement.classList.add("item")
const thirdElement = document.createElement("li");
thirdElement.textContent = "Garlic";
thirdElement.classList.add("item")
const fourthElement = document.createElement("li");
fourthElement.textContent = "Tomatos";
fourthElement.classList.add("item")
const fifthElement = document.createElement("li");
fifthElement.textContent = "Herbs";
fifthElement.classList.add("item")
const sixthElement = document.createElement("li");
sixthElement.textContent = "Condiments";
sixthElement.classList.add("item")

console.log(firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement)
const list = document.getElementById('ingredients');
list.append(firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement);