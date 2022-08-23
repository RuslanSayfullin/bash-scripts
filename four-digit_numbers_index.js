values =  [143,5476,43,2];

function printBool(values) {
    let status = false;
    const indexval = 0;
    for (let index = 0; index < values.length; index++) {
        if (values[index] > 999 && 10000 > values[index]){
            status = true;
            indexval = values.indexOf(values[index]);
            break
        }
    }
    if (status===true) {
        console.log(indexval);
    }
    else {
        console.log("Искомый элемент не был найден")
    }
}
printBool(values)

