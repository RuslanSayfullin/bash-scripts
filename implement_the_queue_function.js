const findMinSum = (numsCount, ...arr) => {
  const array = arr[0];
  let nums = new Array(numsCount).fill(Infinity);

  array.forEach(num => {
    for (let i = 0; i < nums.length; ++i) {
      if (nums[i] <= num) continue;

      nums.splice(i, 0, num);
      nums.pop();
      break;
    }
  });

  nums = nums.map(x => x === Infinity ? 0 : x);

  const sum = nums.reduce((a, b) => a + b, 0);

  return sum;
}

const array = [2, 4, 7, 8, 1];
const num = 2;

console.log(findMinSum(num, array));