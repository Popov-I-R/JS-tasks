/*
Below and Above Average

Write a program that calculates the average of a list of numbers. Display the average, all the numbers below the average, and all the numbers above the average. Maintain the relative order of numbers.
Input
    On the only line of input, you will receive the numbers, separated by a comma.

Output
    On the first line, print the average, with two digits after the decimal separator.
    On the second line, print all the numbers bellow the average
    On the third line, print all the numbers above the average

Constraints
    1 <= list.length <= 20

Input
3,-12,0,0,13,5,1,0,-2

Output
avg: 0.89
below: -12,0,0,0,-2
above: 3,13,5,1

Input
0,1,-1

Output
avg: 0.00
below: -1
above: 1

*/

let input = ['3,-12,0,0,13,5,1,0,-2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(',').map(Number)
let sum = 0;

for(let i=0;i<numbers.length;i++){
    sum += numbers[i]
}
const avg = sum/numbers.length
const belowAvg = []
const aboveAvg = []

for(let i=0;i<numbers.length;i++){
    if(numbers[i] < avg) {
        belowAvg.push(numbers[i])
    }else if(numbers[i]> avg){
        aboveAvg.push(numbers[i])
    }
}

print(`avg: ${avg.toFixed(2)}`)
print(`below: ${belowAvg.join(',')}`)
print(`above: ${aboveAvg.join(',')}`)

