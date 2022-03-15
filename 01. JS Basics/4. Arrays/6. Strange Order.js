/*
Strange Order
Write a program that orders a list of numbers in the following way:

    3,-2,1,0,-1,0,-2,1 -> -2,-1,-2,0,0,3,1,1

You need to find out the criteria for yourself by looking at the example. You can also check the example below.
Input
    On the only line of input, you will receive the numbers, separated by a comma.

Output
    Display the list with the mysterious ordering applied removed, separated by a comma.

Constraints
    1 <= list.length <= 20

Input
3,-12,0,0,13,5,1,0,-2

Output
-12,-2,0,0,0,3,13,5,1

Input
0,1,-1

Output
-1,0,1

*/


let input = ['3,-12,0,0,13,5,1,0,-2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let numbers = gets().split(',').map(Number)

let negative = numbers.filter((e) => e<0) 
let zero = numbers.filter((e) => e===0) 
let positive = numbers.filter((e) => e>0)

const orderedNumbers = negative.concat(zero, positive)
print(orderedNumbers.join(','))





