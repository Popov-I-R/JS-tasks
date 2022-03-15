/* Prime Factors

Write a program that finds the prime factors of a given non-prime number. List the factors in ascending order.
    12 = 2 * 2 * 3
    100 = 2 * 2 * 5 * 5

Input
    On the first line you will receive one number - N

Output
    Output each prime factor on a newline.

Constraints
    4 <= N <= 1000
    N is guaranteed to not be a prime

Input
12

Output
2
2
3

Input
100

Output
2
2
5
5

//  ------------------SOLUTION------------------

*/

let input = ['12']
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
 
let n= +gets()
let divider = 2;

while (n > 1) {
let isDivederPrime = true;

for(let i =2;i<=Math.sqrt(divider);i++){
    if(divider % i ===0) {
        isDivederPrime = false
        break;
    }
}

if(isDivederPrime && n % divider ===0 ){
    n/=divider;
    print(divider);
} else{
    divider++;
}
}





