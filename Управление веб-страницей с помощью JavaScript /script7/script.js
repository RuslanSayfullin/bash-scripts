let card = document.querySelector(".content");
let caption = card.querySelector("p");
card.innerHTML = "<b>"+caption.innerText+"</b>";
console.log(card.innerHTML);