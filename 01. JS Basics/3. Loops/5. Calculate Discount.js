/*
Calculate Discount

You need to calculate the discounted price for each item in your shopping cart. The discount is 65%, a real deal for you.
Input

    On the first line, you will receive N - the number of the items in your shopping cart
    On the next N lines you will each item's price

Output

    On each line in the output print the discounted price of the item with two digits after the decimal point (Math rules for rounding apply)

Input

2

50

40

Output

17.50

14.00

Input

4

9.99

19.99

29.99

39.99

Output

3.50
*/

//  ------------------SOLUTION------------------

// Input.
let input = [
    '2',
    '50',
    '40'
];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let count = +gets();
for (let i = 0; i < count; i++) {
    print((+gets()/100*35).toFixed(2));
}


