    /* 
Calculate Complex Sum
Description

Write a program that, for a given two numbers N and x, calculates the sum S = 1 + 1!/x + 2!/x2 + … + N!/xN.
    Use only one loop. Print the result with 5 digits after the decimal point.

Input
    On the first line you will receive one number - N.
    On the second line you will receive another number - x.

Output
    Output only one number - the sum of the sequence for the given N and x.

Constraints
    N will always be a valid integer between 2 and 10, inclusive.
    X will always be a valid floating-point number between 0.5 and 100

Sample tests
Input	
3
2	    
Output
2.75000

Input
4
3	
Output    
2.07407

  ------------------SOLUTION------------------
*/
    
    
    
    
    let input = ['3',
    '2']
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let n = +gets()
let x = +gets()

let factorial = 1
let sum = 1 

for(let i =1;i<=n;i++){
    factorial *=i
    sum += factorial / Math.pow(x,i); 
}

print(sum.toFixed(5))