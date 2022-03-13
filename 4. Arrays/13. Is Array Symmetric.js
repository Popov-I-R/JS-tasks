// Input.
let input = ['1 2 3 4 4 3 2 1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets();
const reversedNumbers = numbers.split(' ').reverse().join(' ')

const isSymetric = numbers === reversedNumbers? 'Yes' : 'No';

print(isSymetric)