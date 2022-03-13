// Input.
let input = ['1 2 3 4 5 6 5 8 9'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ');

const repeatinNumber = numbers.find((el,index,arr)=> index !== arr.lastIndexOf(el))

print(repeatinNumber)
