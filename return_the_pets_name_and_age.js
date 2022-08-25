let pet_1 = {"name":"Шарик","age":10};
let pet_2 = {"name":"Жучка","age":5};

let apet3 = (Object.values(pet_1)+' '+Object.values(pet_2));
let newstring = apet3.replace(' ', '; ');
let newstring2 = newstring.replace(/,/g, ' ');

console.log(newstring2);