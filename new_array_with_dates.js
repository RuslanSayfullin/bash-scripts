let dates =  "23.04.1996 07.10.2002 15.08.1945";

function printDates(dates) {
    let array = dates.split(" ");
    for (let index = 0; index < array.length; index++) {
        array[index] = (array[index]).replace(/\./g, '/');
    }
    console.log(array);
}

printDates(dates)