let values = ["100","30","Не число","20","Тоже не число"];

function notNan(values) {
    let sum = 0;
    for (let index = 0; index < values.length; index++) {
        if (isNaN(values[index]) === true) {
            continue;
        }
        else {
            sum += Number(values[index]);
        }
    }
    console.log(sum);
}

notNan(values)
