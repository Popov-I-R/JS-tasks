
/*
Most people believe that 1 human year (~HY~) equals 7 dog years (~DY~), however, dogs reach adulthood in approximately 2 human years.
So it's better to count the first two HY as 10 DY each and then count the remaining HY as 4 DY each.
Write a program that correctly converts human years (HY) to dog years (DY). You may need some form of conditional logic.

Input
    On the first line, you will receive ~HY~ - the number of human years.

Output
    On the only line of output, print ~DY~ - the number of dog years.

Constraints

    1 <= ~HY~ <= 15

Examples:


Input
2

Output
20

Input
4

Output
28


*/


//  ------------------SOLUTION------------------

let input = [
    '4',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let humanYears = +gets()
let dogYears = 0

if (humanYears === 1 || humanYears === 2) {
    dogYears = humanYears * 10
} else if (humanYears > 2) {
dogYears = (humanYears -2 ) * 4 + 20
}

print(dogYears)