let array = [true,4,"word","10n"];
let result = "";
function count(array) {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        count +=1;
    }
    console.log(count);
}

count(array)