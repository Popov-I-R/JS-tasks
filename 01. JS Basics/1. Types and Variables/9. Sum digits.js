/*

Write a program that reads a four-digit number and displays the sum of its digits

    1213 => 1 + 2 + 1 + 3 = 7
    2346 => 2 + 3 + 4 + 6 = 15

Input

    On the first line, you will receive the four-digit number N

Output

    On the only line of output, print the sum of digits

Constraints

    1000 <= N <= 9999

Input

2346

Output

15


*/




//  ------------------SOLUTION------------------

// Input.
let input = ['2346'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let str = gets();
let a = +str[0];
let b = +str[1];
let c = +str[2];
let d = +str[3];

let sum = a + b + c + d;
print(sum);


