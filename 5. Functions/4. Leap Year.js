/*
5.	Leap Year
Write a JS function to check whether a year is a leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. The output should be following:
•	If the year is a leap, print: "yes"
•	Otherwise, print: "no"

Input	Output
1984	yes
2003	no
4	    yes

--- SOLUTION ONE START --- 
*/

// function solve(year) {
//   let isLeap = false;

//   if (year % 100 === 0) {
//     isLeap = true;
//   }
//   if (year % 100 === 0) {
//     isLeap = false;
//   }
//   if (year % 400 === 0) {
//     isLeap = true;
//   }

//   console.log(isLeap ? "yes" : "no");
// }


//--- SOLUTION ONE END --- 

//--- SOLUTION TWO START --- 

function solve(year) {
    return((year % 4 ===0) && (year % 100 !==0)) || (year % 400 ===0)
    ? "yes" : "no"
}

console.log(solve(4))

//--- SOLUTION TWO END --- 