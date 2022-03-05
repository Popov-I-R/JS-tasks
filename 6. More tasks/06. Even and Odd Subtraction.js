function solve(arr) {

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  let sum = 0;
  let sumTwo = 0
  

  for (let num of arr)
    if (num % 2 == 0) {
      sum += num;
    }
  
  for (let num of arr)
    if (num % 2 == 1) {
      sumTwo += num;
    }

console.log(sum - sumTwo);
}

solve([2,4,6,8,10]);
