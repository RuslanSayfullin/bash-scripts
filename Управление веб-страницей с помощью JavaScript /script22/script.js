let new_element = document.createElement("h2");
new_element.innerText = "Сегодня солнечно, минус 15";

let card = document.querySelector(".card");
let content = card.querySelector(".content");


content.appendChild(new_element);
console.log(content.innerHTML);



