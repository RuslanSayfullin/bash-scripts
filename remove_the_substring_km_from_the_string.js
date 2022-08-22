let new_str = road.replace("km", '');
let mile = (Number(new_str))*0.62;
console.log(parseFloat(mile.toFixed(1)));