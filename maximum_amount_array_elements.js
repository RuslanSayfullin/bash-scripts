let numbers = [23,4,2,4,3,11,3,12,3,23];

function maxelements(numbers) {
    let sum = 0;
    let sum2 = 0;
    let count = 0;
    for (let index = 0; index < numbers.length; index++) {
        if ((sum2 +=numbers[index]) < 51) {
            sum +=numbers[index];
            count +=1;
        }
    }
    console.log(count);
}

maxelements(numbers)