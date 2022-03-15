/* 

Not Divisible Number
Description

Write a program that reads from the console a positive integer N and prints all the numbers from 1 to N not divisible by 3 or 7, on a single line, separated by a space.
Input

    Will always consists of one valid integer number - the number N.

Output

    Should always consists of the numbers from 1 to N, which are not divisible by 3 or 7, separated by a whitespace.

Constraints

    1 < N < 1500

Sample tests

| Input | Output | |----------------|----------------| | 10 | 1 2 4 5 8 10 | | 3 | 1 2 |
*/

//  ------------------SOLUTION------------------

// Input.
let input = [
    '11'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let n = gets();

let output = '';
for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 7 === 0 ){
        continue;
    }
output = output + ' ' + i;
}

print(output);