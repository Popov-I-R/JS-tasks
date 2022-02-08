/* Sort 3 Numbers with Nested Ifs

Write a program that enters 3 real numbers and prints them sorted in descending order. * Use nested if statements.

Note: Don’t use arrays and the built-in sorting functionality.
 */


// ------------------ SOLUTION---------------




Examples:
a           	b           	c           	result
5 	           1             2 	            5 2 1
-2 	          -2	         1 	            1 -2 -2
-2 	           4 	         3 	            4 3 -2
0 	           -2.5	         5 	            5 0 -2.5
-1.1 	       -0.5          -0.1 	        -0.1 -0.5 -1.1
10 	           20         	30          	30 20 10
1 	           1 	         1           	1 1 1



let input = ['5', '1', '2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution
let x = +gets();
let y = +gets();
let z = +gets();
let smallest;
let middle;
let largest;

if (x<y)
{
    if(z<x) {
        smallest = z
        middle = x
        largest = y
    }
else {
    smallest = x;
        if (y < z) 
        {
            middle = y
            largest = z
        }
    else 
        {
            middle = z;
            largest = y
        }
    }
}
else 
{ 
    if (z <y)
    {
        smallest = z
        middle = y
        largest = x
    }
    else
        {
            smallest = y
            if (x < z)
            {
                middle = x
                largest = z;
            }
        else
        {
            middle = z;
            largest = x;
        }
    }
}
console.log(`${largest} ${middle} ${smallest}`)
