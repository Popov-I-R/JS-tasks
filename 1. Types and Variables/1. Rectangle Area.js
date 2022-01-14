/* Rectangle Area

Write a program that will read a width and a height from the console and will calculate the area of the rectangle and print it on the console.
Hint

You must parse the input to number before making calculations

    JavaScript: Number("42");


Input

    On the first line you will receive a number. The width of the rectangle.
    On the second line you will receive a number. The height of the rectangle.

Output

    You should print the area of the rectangle.

Constraints

    The numbers will be integers

Input

10

10

Expected Output

100

Input

4

5

Output

20
*/ 
//-----------------NOW DECISION-----------------

// Input.
let input = ['4', '5'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let width = Number(gets())
let height = Number(gets());

let area = width * height;

print(`${area}`)
