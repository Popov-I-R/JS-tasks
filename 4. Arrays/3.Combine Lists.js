/*
Combine Lists

Write a program that reads two lists of numbers and combines them by alternatingly taking elements:
    combine 1,2,3 and 7,8,9 -> 1,7,2,8,3,9
    you can assume that the input lists will have the same length.

Print the resulting combined list to the output, separating elements with a comma.
Input
    On the first line you will receive the first list.
    On the second line -> 2nd list.

Output
    On the only line of output, print all the numbers in format n1,n2,n3,..n

Input
2,3,1
5,2,3

Output
2,5,3,2,1,3

*/

// Input.
let input = ['2,3,1','5,2,3'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const listA = gets().split(',') // Взимаме първия  стринг и го превръщаме в масив
const listB = gets().split(',') // Взимаме втория стринг и го превръщаме в масив

const combinedList = [] //Създаваме празен масив за комбиниране

for(let i =0; i<listA.length;i++){ // Правим цикъл в който въртим елементите започващ от листА
    combinedList.push(listA[i]); // Пушваме число от листА и после от листБ
    combinedList.push(listB[i]); // Пушваме число от листБ и после пак до А
}

print(combinedList.join(',')) // Превръщаме масива в стринг и го разделяме със запетая.