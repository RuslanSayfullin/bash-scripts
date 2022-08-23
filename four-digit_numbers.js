values =  [143,5476,43,2];

function printBool(values) {
    let status = false;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > 999 && 10000 > values[index]){
            status = true;
        }
    }
    console.log(status);
}
printBool(values)