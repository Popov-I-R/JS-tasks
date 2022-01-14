/*
Circle Perimeter and Area

Write a program that reads the radius r of a circle and prints its perimeter and area formatted with 2 digits after the decimal point.


*/


//  ------------------SOLUTION------------------

// Input.
let input = ['3'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let r = +gets();
let perimeter = 2 * Math.PI * r;
let area = Math.PI * Math.pow(r, 2);

print(`If the radius is: ${r}, then the perimeter is: ${perimeter.toFixed(2)} and the area is: ${area.toFixed(2)}`);


