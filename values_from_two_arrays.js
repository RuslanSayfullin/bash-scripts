let array_1 = [2,4,7,8,1];
let array_2 = [2,5,11,6,1];

function intersection(array_1, array_2) {
    let farray =[];
    for (let index = 0; index < array_1.length; index++) {
        if (array_2.includes(array_1[index]) == true) {
            farray.push(array_1[index]);
        }
    }
    return farray;
}
intersection(array_1, array_2)

