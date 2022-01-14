/* Write an if-statement that takes two double variables a and b and exchanges their values if the first one is greater than the second one. As a result print the values a and b, separated by a space.


Examples:
a           b       result
5 	    2 	    2 5
-------------------------
3 	    4 	    3 4
-------------------------
5.5 	    4.5    4.5 5.5
-------------------------
*/ 

//  ------------------SOLUTION------------------

// Input.
let input = [
    '5.5',
    '4.5',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();

let result;

if (a > b)
    result = console.log(`${b} ${a}`)
else
    result = console.log(`${a} ${b}`);

return result;
