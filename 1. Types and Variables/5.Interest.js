// Interest

// You have deposited a sum into your bank account for 3 years. The bank has announced an interest of 5% per year. Each time the interest is calculated and added to your deposit. You have to calculate the amount in your deposit for each year.
// Input

//     On the only line you will receive a number (n) with the sum deposited

// Output

//     You should print the amount in your deposit for each of the 3 years

// Constraints

//     You must print the number with two numbers after the decimal point. The rules of math for rounding apply here

// Input

// 1000

// Expected Output

// 1050.00
// 1102.50
// 1157.63

// Input

// 2000

// Expected Output

// 2100.00
//  2205.00
// 2315.25

// ------------------SOLUTION------------------

// Input.
let input = ['2000'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let deposit = Number(gets());

let firstYearInterest = deposit * 0.05 + deposit;
let secondYearInterest = firstYearInterest * 0.05 + firstYearInterest;
let thirdYearInterest = secondYearInterest * 0.05 + secondYearInterest;

print(firstYearInterest.toFixed(2));
print(secondYearInterest.toFixed(2));
print(thirdYearInterest.toFixed(2));






