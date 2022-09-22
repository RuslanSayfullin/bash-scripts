let card = document.querySelector(".card");


function buttonClick() {
    let val = card.getElementById("val");
    console.log(val.getAttribute('value'));
  }

  const button = card.querySelector("#btn");
  button.addEventListener("click", buttonClick);


//let button = document.querySelector('#btn').addEventListener('click', function() {
//    let input = document.querySelector('#val');
//    console.log(input.getAttribute('value'))
//});