let card = document.querySelector(".card");
let content = card.getElementsByTagName('p')

for (let i = 0; i < content.length; i++) {
    if (content[i].textContent == "Delete"){
        content[i].remove();
    }
}

let bodyp = document.getElementsByTagName("p")
for (let i = 0; i < bodyp.length; i++) {
    if (bodyp[i].textContent == "Delete"){
        bodyp[i].remove();
    }
}



