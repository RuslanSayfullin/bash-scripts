let randValues = ["Банан",3,"Апельсин",2,"Вишня"];
let randValues = [-100,23,34,4,432];

function printArray(randValues) {
    const sorting = (a, b) => {
          if (a == b) return 0;
          if (a < b) return -1;
          if (a > b) return 1;
    }
    randValues.sort(sorting);
    console.log(randValues);
}
printArray(randValues)


