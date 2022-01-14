/*
Converter

You want to buy this really cool car from the UK, but you are worried about the fuel consumption. The values you see are MPG (miles per gallon). You have no idea what 20 MPG means so, being a programmer, decide to write a converter that helps you calculate the consumption.

Doing some research, you learn that 1 gallon = 4.54 litres and 1 mile = 1.6 km.

After the calculation, round the result down to the neareast whole number.
Input

    On the first line you will receive a number m - miles per galon

Output

    On the only line of output, print {result} litres per 100 km

Constraints

    1 <= m <= 100

Input

20

Output

14 litres per 100 km

Input

44

Output

6 litres per 100 km



*/




//  ------------------SOLUTION------------------

// Input.
let input = [20];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const mpg = +gets();
const mile = 1.6;
const gallon = 4.54;
const kpl = (100 * gallon) / (mile * mpg);

print(`${Math.floor(kpl)} litres per 100 km`);