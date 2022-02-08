
/* Write a program which input will be (0-9), and depending on the input, shows the digit as a word (in English). * Print “not a digit” in case of invalid input. 
* Use a SWITCH statement.

Examples:
d       result
2   	two
1   	one
0   	zero
5   	five
-0.1 	not a digit
hi  	not a digit
9   	nine
10  	not a digit





------------ SOLUTION ------------ */

// Input.
let input = ['5'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let num = gets();

switch(num){
     case "0":
        console.log("zero")
            break;
    case "1":
        console.log("one")
            break;
    case "2":
        console.log("two")
            break;
    case "3":
        console.log("three")
            break;
    case "4":
        console.log("four")
            break;
    case "5":
        console.log("five")
            break;
    case "6":
        console.log("six")
            break;
    case "7":
        console.log("seven")
            break;
    case "8":
        console.log("eight")
             break;
     case "9":
        console.log("nine")
            break;
    default:
        console.log("Not a digit");
            break
}
