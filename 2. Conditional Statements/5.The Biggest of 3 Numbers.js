/*

Write a program that finds the biggest of three numbers.
Examples:
____________________________________
|   a   |   b   |  c     | biggest |
|   5   |   2   |  2 	 |   5     |
|  -2   |  -2   |  1 	 |   1     |
|  -2   |   4   |  3     |  4     |
|   0   | -2.5  |  5 	 |   5     |
|  -0.1 | -0.5  | -1.1   |  -0.1   |
------------------------------------

*/


//  ------------------SOLUTION------------------

let input = ['5', '2', '2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let number1 = +gets();
let number2 = +gets();
let number3 = +gets();
let biggest;

if(number1 >= number2 && number1 >= number3) {
    biggest =number1;
}
else if (number2 >= number1 && number2 >= number3) {
    biggest = number2;
}
else {
    biggest = number3;
}

print(biggest);
