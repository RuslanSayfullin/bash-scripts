const values=[15, 20, 25];

let card = document.querySelector(".card");
let content = card.getElementsByClassName("elems")

for (let i = 0; i < content.length; i++) {
//    console.log(values.includes(Number(content[i].textContent)))
//}
    if ((values.includes(Number(content[i].textContent))) != "false"){
        card.removeChild(content[i]);
    }
}




