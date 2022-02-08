/*

Write a program that determines the least amount of coins needed for a cashier to return change.

For example, if the price of something is 0.76 leva and the customer has paid 1 leva, the least amount of coins is 1 x 20 stotinki and 2 x 2 stotinki.

Use the coins of 1 lev, 50, 20, 10, 5, 2 and 1 stotinki.

Input
    On the first line, you will receive the price in leva.
    On the second line, you will receive how much the customer has paid in leva.

Output
    There is a variable amount of output lines.
    Print each required denomination on a new line, ordered from highest to lowest.

Input
0.76
1

Output
1 x 20 stotinki
2 x 2 stotinki

Input
1.92
5

Output
3 x 1 lev
1 x 5 stotinki
1 x 2 stotinki
1 x 1 stotinka


*/


//  ------------------SOLUTION------------------


// Input.
let input = ["1.92", "5"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let price = +gets()
let paid = +gets()

let change = (paid - price) * 100;


if(change>=100){
let levCount = Math.floor(change/100);
change -= levCount*100;
print (`${levCount} x 1 lev`)
}
if(change>=50){
    change -= 50;
    print (`1x 50 stotinki`)
}
if(change>=20){
    let twentyStotinkiCount = Math.floor(change/20);
    change -=twentyStotinkiCount * 20
    print(`${twentyStotinkiCount} x 20 stotinki`)
}
if(change>=10) {
    change -= 10
    print(`1 x 10 stotinki`)
}
if(change >= 5) {
    change -=5
    print(`1 x 5 stotinki`)
}
if(change >=2){
    let twoStotinkiCount = Math.floor(change/2)
    change -= twoStotinkiCount * 2
    print(`${twoStotinkiCount} x 2 stotinki`)
}
if(change ===1) {
    print(`1 x 1 stotinka`)
}