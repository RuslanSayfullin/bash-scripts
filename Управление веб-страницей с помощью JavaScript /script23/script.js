let new_element = document.createElement("li");
new_element.innerText = "Велосипед";

let card = document.querySelector(".card");
let content = card.querySelector(".content");
let caption = content.querySelector("ul");
let cap = caption.querySelector("li");

caption.insertBefore(new_element, cap);




