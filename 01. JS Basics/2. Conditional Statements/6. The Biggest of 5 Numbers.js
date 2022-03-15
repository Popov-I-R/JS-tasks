/*
Write a program that finds the biggest of five numbers.
Examples:
___________________________________________________________
|   a   |   b   |  c     |     d     |     3     |biggest |
|   5   |   2   |  2 	 |     4     |     1     ||   5
|  -2   |  -22  |  1 	 |     0     |     0     ||   1
|  -2   |   4   |  3     |     2     |     0     ||   4
|   0   | -2.5  |  0 	 |     5     |     5     ||   5
|  -3   | -0.5  | -1.1   |    -2     |   -0.1    ||   0.1
------------------------------------
*/


//  ------------------SOLUTION------------------






let input = ['5', '2', '2', '4', '1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let number1 = +gets();
let number2 = +gets();
let number3 = +gets();
let number4 = +gets();
let number5 = +gets();
let biggest;

if(number1 >= number2 && number1 >= number3 && number1 >= number4 && number1 >= number5) {
    biggest =number1;
}
else if (number2 >= number1 && number2 >= number3 && number2 >= number4 && number2 >= number5) {
    biggest = number2;
}
else if (number3 >= number1 && number3 >= number2 && number3 >= number4 && number3 >= number5) {
    biggest = number3;
}
else if (number4 >= number1 && number4 >= number2 && number4 >= number3 && number4 >= number5) {
        biggest = number4;
}
else {
    biggest = number5;
}

print(biggest);
