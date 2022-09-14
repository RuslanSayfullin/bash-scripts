let result = 0;
let elems = document.getElementsByClassName("numeric");
let caption = card.querySelector("h2");

for (let i = 0; i < elems.length; i++) {
    temp=(Number(elems[i].textContent));
    result +=temp;
}

console.log(result);

