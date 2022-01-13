// Tips

// You are at a restaurant and the waiter brings you the bill. You will have to calculate how much the tip must be. The tips are different in different countries, but here we will use 10%.
// Input

//     On the first line you will receive the price of the meal you ordered.

// Output

//     You should print the total sum you have to pay (including the tip: 10%)

// Constraints

//     The final sum will be always a whole number. You don't have to print anything after the decimal point.

// Input

// 10

// Output

// 11

// Input

// 20

// Output

// 22


// ------------------SOLUTION------------------

// Input.
let input = ['20'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let price = Number(gets());

let tip = Number(0.10);

let sum = price * tip + price;

print(`${sum}`)