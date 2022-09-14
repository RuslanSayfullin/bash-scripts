
let elems = document.getElementsByClassName("numeric");

for (let i = 0; i < elems.length; i++) {
    let temp = (Number(elems[i].textContent));
    if (temp >= 0){
        continue;
    }
    else {
         elems[i].innerHTML = "<b>"+elems[i].innerText+"</b>";
    }
}



