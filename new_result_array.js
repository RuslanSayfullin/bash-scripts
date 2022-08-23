values = ["Строка",true,"Число","Объект","Не число",false,"Не объект"];

function printArray(values) {
    const index0 = values.indexOf(true);
    const lastIndex0 = values.lastIndexOf(true);
    const index1 = values.indexOf(false);
    const lastIndex1 = values.lastIndexOf(false);
    let newvalues = [];
    for (let index = index0; index < lastIndex1+1; index++) {
        newvalues.push(values[index]);
    }
    console.log(newvalues);
}

printArray(values)