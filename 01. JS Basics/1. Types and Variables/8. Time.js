/*

Time

Write a program that reads days, hours, minutes and seconds from the standard input. Display the total amount of seconds.
Input

    First line - d - days
    Second line - h - hours
    Third line - m - minutes
    Fourth line - s - seconds

Output
    On the only line of output, print the total amount of seconds

Constraints
    0 <= d, h, m, s <= 1000

Input
4
3
11
40

Output

357100

Input

0
2
6
0

Output
7560

*/




//  ------------------SOLUTION------------------

// Input.
let input = [
    '0',
    '2',
    '6',
    '0',
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let days = +gets();
let hours = +gets();
let minutes = +gets();
let seconds = +gets();

let sPerDay = 24 * 60 * 60 * days;
let sPerHour = 60 * 60 * hours;
let sPerMinute = 60 * minutes;


let sumInSeconds = sPerDay + sPerHour + sPerMinute + seconds;
print(sumInSeconds);
