
/*
Quadratic Equation

Write a program that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots x1 = (-b - sqrt(D)) / 2a, x2 = (-b + sqrt(D)) / 2a). Assume there always will be one or two real roots (D = b2 - 4ac >= 0). There is a useful Math function in javascript to calculate the Square Root, you can try googling it.
*/


// Input.
let input = ['2', '5', '-3']; // 

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const a = +gets();
const b = +gets();
const c = +gets();

const d = Math.pow(b, 2) - 4 * a * c;

const x1 = (-b - Math.sqrt(d)) / (2 * a);
const x2 = (-b + Math.sqrt(d)) / (2 * a);


print(`x1=${x1}; x2=${x2}`);

