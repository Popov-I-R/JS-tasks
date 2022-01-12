// Bottle Deposit

// When you buy something to drink you make a deposit for the bottle. Each bottle has a different deposit. Half liter bottles have $0.1 deposit and the one liter bottles have $0.25 deposit. Calculate the sum which you will make when returning the bottles. You must print two digits after the decimal point.
// Input

//     On the first line you will receive the number of 0.5L bottles.
//     On the second line you will receive the number of 1L bottles.

// Output

//     You should print the total sum you will earn.

// Input

// 10

// 10

// Output

// 3.50

// Input

// 3

// 2

// Output

// 0.80


// ------------------------- NOW DECISION

// Input.
let input = ['10','10'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let halfLiter = +gets();
let oneLiter = +gets();

let halfLiterDeposit = halfLiter * 0.1;
let oneLiterDeposit = oneLiter * 0.25;

let sumDeposit = halfLiterDeposit + oneLiterDeposit;

print(sumDeposit.toFixed(2));