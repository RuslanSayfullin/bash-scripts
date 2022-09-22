let card = document.querySelector(".card");


function buttonClick() {
    let val = card.querySelector("#val");
    console.log(val.textContent)
  }

  const button = card.querySelector("#btn");
  button.addEventListener("click", buttonClick);