/*

Write a program that shows the sign (+, - or 0) of the product of three real numbers, without calculating it. * Use a sequence of if operators.


Examples:
| a |  b |  c | result
| 5 |  2 |  2 |   +
|-2 | -2 |  1 |   +
|-2 |  4 |  3 |   -
| 0 |-2.5|  4 |   0
|-1 |-0.5|-5.1|   -
*/


//  ------------------SOLUTION------------------


// Input.
let input = ['-1', '-0.5' ,'-5.1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let a = +gets();
let b = +gets();
let c = +gets();

if (a > 0 && b > 0 && c > 0)
{
    console.log("+");
 }
 else if (a < 0 && b < 0 && c < 0)
{
    console.log("-");
 }
else if (a > 0 && b > 0 && c < 0)
 {
     console.log("-");
 }
else if (a > 0 && b < 0 && c > 0)
 {
     console.log("-");
 }
else if (a < 0 && b > 0 && c > 0)
{
    console.log("-");
}
    else if (a > 0 && b < 0 && c < 0)
{
    console.log("+");
}
    else if (a < 0 && b < 0 && c > 0)
{
    console.log("+");
}
    else if (a < 0 && b > 0 && c < 0)
{
    console.log("+");
}
    else
{
    console.log(0);
}



