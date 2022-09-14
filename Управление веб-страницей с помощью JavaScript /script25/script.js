let card = document.querySelector(".card");
let ident=1;

let content = card.getElementsByTagName('p')

for (let i = 0; i < content.length; i++) {
    content[i].id="p_"+ident;
    ident +=1;
    console.log(content[i].id);
}





