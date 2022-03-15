/* 
Find Average

You need to calculate the average of a collection of values. Every value will be valid number. The average must be printed with two digits after the decimal point.
Input
    On the first line, you will receive N - the number of the values you must read
    On the next N lines you will receive numbers.

Output
    On the only line of output, print the average with two digits after the decimal point.

Input
4
1
1
1
1

Output
1.00

Input
3
2.5
1.25
3

Output
2.25

*/

//  ------------------SOLUTION------------------

// Input.
let input = [
    '4',
    '1',
    '1',
    '1',
    '1'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const n = +gets()
let sum = 0;

for(let i =0;i<n;i++){
   const currentNum = +gets()
   sum += currentNum
}

const avg = sum / n

console.log(avg.toFixed(2))