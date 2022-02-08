/*

Write a program that determines the color of a chessboard square based on its Label and Rank

    Labels have values from a to h
    Ranks have values from 1 to 8

chessboard scheme
Input

    On the first line, you will receive L - the label
    On the second line, you will receive R - the rank

Output

    On the only line of output, print light or dark, based on your calculations

Constraints

    a <= L <= h
    1 <= R <= 8

Input
a
1

Output
dark

Input
f
3

Output
light


*/


//  ------------------SOLUTION------------------

// Input.
let input = ["a", "1"];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let label = gets()
let labelAsciiCode = label.charCodeAt(0)
let rank = +gets()


let color;

if(labelAsciiCode%2 !== rank%2){
    color = 'light'
} else {
    color = 'dark'
}

print(color)
