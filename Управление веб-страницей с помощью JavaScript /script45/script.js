//1 вариант
const section = document.querySelector(".card");
function buttonClick() {
    const deleter = section.querySelector("#points");
    deleter.removeChild(deleter.lastChild);

}
const button = document.querySelector("#delete");
button.addEventListener("click", buttonClick);

//2 вариант
const section = document.querySelector(".card");
const button = document.querySelector("#delete");
button.onclick = function() {
    const deleter = section.querySelector("#points");
    deleter.removeChild(deleter.lastChild);
}

//3 вариант
btn = document.querySelector("#delete");

const lis = document.querySelectorAll("#points li");

btn.onclick = () => {
  lis[lis.length - 1].remove();
}