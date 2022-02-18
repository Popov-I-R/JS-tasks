/* Reverse Number
Description

Write a method that reverses the digits of a given decimal number.
Input
    On the first line you will receive a number

Output
    Print the given number with reversed digits

Sample tests
Input	Output
256	    652
123.45	54.321
*/




// Input.
let input = ['123.45'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let reversedNum = gets()
.split('') // Превръщаме го в масив, празния стринг разделя на символи
.reverse() // Обръща ги на обратно
.join('') // събираме ги отново, празният стринг е да са долепени



console.log(reversedNum)