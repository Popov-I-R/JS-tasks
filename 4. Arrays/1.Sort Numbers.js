/* Sort Numbers

Write a program that reads a list of numbers separated by a comma and space.

Arrange the numbers in descending order.

Output all numbers on a single line, separated by a comma and a space.

Input
    On the only line you will receive all the numbers to be sorted.

Output
    On the only line of output, print all the numbers sorted in format n1, n2, n3, .. n

Input
2, 3, 1, 5, 6

Output
6, 5, 3, 2, 1

Input
1, 2, 3

Output
3, 2, 1


------------------SOLUTION------------------

*/ 
// Input.
let input = ['2, 3, 1, 5, 6'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const sortedNumbers = gets().split(', ')
.map((str)=> +str) // Превръщаме стринга в число
.sort((a,b) => b-a) // Подрежда числата в обратен ред (Ако е а-б щеше да е нормално)

console.log(sortedNumbers)