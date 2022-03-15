// Input.
let input = ['8 2 1 3 5 8 9 11 2 5'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ').map(Number).sort((a,b) => b - a)

const firstBiggestNumber = numbers[0]
const secondBiggestNumber = numbers[1]

print(`${firstBiggestNumber} ${secondBiggestNumber}`)