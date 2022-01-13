/*
Arithmetics

Read two numbers from the console and calculate:

    The sum of a and b
    The difference when a is subtracted from b
    The product of a and b
    The remainder when a is divided by b
    The result of a powered to b

Input

    On the first line you will receive a number a
    On the second line you will receive a number b

Output

    You should print the sum, the difference, the product the remainder and the power

Input

2

2

Output

4

0

4

0

4

Input

3

1

Output

4

2

3

0

3








*/




//  ------------------SOLUTION------------------

// Input.
let input = ['3', '1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let a = +(gets());
let b = +(gets());


print( a + b);
print(a - b);
print(a * b);
print(a % b);
print(a**b);