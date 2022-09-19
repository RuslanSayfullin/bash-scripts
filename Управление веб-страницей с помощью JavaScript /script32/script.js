let card = document.querySelector(".card");
let items = card.querySelectorAll("#rainbow");
console.log(card.textContent);

for (let i = 0; i < items.length; i++) {
    items[i].style.color= "#2980b9";
}