let content = document.querySelector('.cars');
let car = content.children;
const cars = [];
for (let i = 0; i < car.length; i++) {
    cars.push(car[i].textContent)
}
console.log(cars)