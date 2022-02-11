/* 

# Numbers From 1 to N #

Write a program that enters from the console a positive integer n and prints all the numbers from 1 to N inclusive, on a single line, separated by a whitespace.

**Input**
    The input will consist of a single line - the number N

**Output**
    The output should consist of a single line - the numbers from 1 to N, separated by a whitespace

**Constraints**
    N will be a valid positive 32-bit integer

**Sample tests**
| Input | Output | |----------------|----------------| | 5 | 1 2 3 4 5 | | 1 | 1 |
*/
//  ------------------SOLUTION------------------

// Input.
let input = [
    '5'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const n = +gets()
let numbers = ''

for ( let i = 1; i<=n; i++) {
    numbers +=` ${i}`;
}
print(numbers)
