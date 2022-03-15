/*
A phone bill plan includes 1 hour of free calls and 20 text messages for 12.00 levas. Each additional minute costs 0.10 levas and each additional message costs 0.06 levas. Also, any additional minutes/text messages are subject to 20% sales tax. Write a program that calculates the additional charge for text, the additional charge for minutes, and the sales tax charge for both. Also, display the total amount paid.

Input
    On the first line, you will receive the total amount of text messages.
    On the second line, you will receive the total amount of minutes.

Output
    1st line - number of additional messages and additional amount paid
    2nd line - number of additional minutes and additional amount paid
    3rd line - amount paid in taxes
    4th line - total bill

Input
31
115

Output
11 additional messages for 0.66 levas
55 additional minutes for 5.50 levas
1.23 additional taxes
19.39 total bill

Input
18
44

Output
0 additional messages for 0.00 levas
0 additional minutes for 0.00 levas
0.00 additional taxes
12.00 total bill
*/

//  ------------------SOLUTION------------------



// Input.
let input = ["31", "115"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

// Input.
let input = ["31", "115"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let messages = +gets()
let minutes = +gets()

let additionalMessages = Math.max(messages - 20, 0);
let additionalMessagesPrice = additionalMessages*0.06;

print(`${additionalMessages} additional messages for ${additionalMessagesPrice.toFixed(2)} levas`)

let additionalMinutes = Math.max(minutes - 60, 0);
let additionalMinutesPrice = additionalMinutes*0.10;

print(`${additionalMinutes} additional minutes for ${additionalMinutesPrice.toFixed(2)} levas`)

let additionalTaxes = (additionalMinutesPrice + additionalMessagesPrice) * 0.2
print(`${additionalTaxes.toFixed(2)} additional taxes`)

let totalBill = 12 + additionalMinutesPrice + additionalMessagesPrice + additionalTaxes
print(`${totalBill.toFixed(2)} total bill`)