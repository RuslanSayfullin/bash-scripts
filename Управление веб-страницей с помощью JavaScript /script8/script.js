let result = 0;
let elems = document.getElementsByClassName("price");

for (let i = 0; i < elems.length; i++) {
    temp=(Number(elems[i].textContent));
    result +=temp;
}

console.log(result);

