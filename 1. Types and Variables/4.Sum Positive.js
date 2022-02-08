
// Write a program that reads a positive integer (n) You must print the sum of all integers from 1 to n.

// Hint
//     You could use the formula sum = n(n+1)/2*

// Input
//     On the first line you will receive a number (n)

// Output
//     You should print the sum of the integers from 1 to n

// Input
// 3

// Output
// 6

// Input
// 5

// Output
// 15

// ------------------SOLUTION------------------

// Input.
let input = ['5'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let n = Number(gets());
let sum = n * (n + 1) / 2;

print(`${sum}`)




