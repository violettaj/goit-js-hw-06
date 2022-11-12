const numberOfCategories = document.querySelectorAll(".item");

console.log("Number of categories:",numberOfCategories.length)

numberOfCategories.forEach((item) => {
    const header = item.querySelector("h2").textContent;
    const element = item.querySelectorAll("li").length;
    console.log("Category:",`${header}`)
    console.log("Elements:",`${element}`)
})

