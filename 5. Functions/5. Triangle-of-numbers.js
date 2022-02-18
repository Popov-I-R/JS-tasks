/* 
7.	Triangle of Numbers
Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

Constraints
n will be in the interval [1...20].


Input
5

Output
1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5

*/

function solve(n) {
  for (let i = 1; i <= n; i++) {
    let output = i;
    for (let j = 1; j < i; j++) {
      output += ` ${i}`;
    }
    console.log(output);
  }
}

solve(3);
