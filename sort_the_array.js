let array =[[1,2,3],[1,2],[1,2,3,4]];

function printArray(array) {
    const sortByTitle = (a, b) => {
          if (a == b) return 0;
          if (a < b) return -1;
          if (a > b) return 1;
    }
    array.sort(sortByTitle);
    console.log(array);
}
printArray(array)