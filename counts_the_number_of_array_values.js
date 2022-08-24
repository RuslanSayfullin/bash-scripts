let array = [["boolean",true],["number",4],["string","word"],["object",{}]];

function countString(array) {
    count = 0;
    for (let index = 0; index < array.length; index++) {
         if (typeof ((array[index])[1]) == "string")
            count +=1;
    }
    console.log("Количество строковых элементов в именованном массиве: " + count);
}
countString(array)
