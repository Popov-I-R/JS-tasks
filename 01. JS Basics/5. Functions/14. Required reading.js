/*
Write a function to help Ivan calculate how many hours a day he has to spend reading the necessary literature from the list given for the summer vacation.
As input, you will receive 3 parameters: 
•	Number of pages of the current book - integer [1… 1000] 
•	Pages read in 1 hour - integer [1… 1000]
•	The number of days for which you must read the book -  integer [1… 1000]
As output print on the console the number of hours, that Ivan has to read each day.

Input
212,
20 ,
2 
Output
5.3

Input
432,
15 ,
4 
Output
7.2

*/

function solve(bookPages, hourlyPages, days) {
let pages = bookPages
let pagesPerHour = hourlyPages
let pagesPerDay = days

let hoursPerDay = bookPages / pagesPerHour
let hoursPerDayFinal = hoursPerDay / days

console.log(hoursPerDayFinal)
}

solve (432,15,4)