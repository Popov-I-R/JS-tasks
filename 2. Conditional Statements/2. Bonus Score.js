/* 
Write a program that applies bonus score to given score in the range [1…9] by the following rules: * If the score is between 1 and 3, the program multiplies it by 10. * If the score is between 4 and 6, the program multiplies it by 100. * If the score is between 7 and 9, the program multiplies it by 1000. * If the score is 0 or more than 9, the program prints “invalid score”.


Examples:
score           	result
2 	                20
4 	                400
9 	                9000
-1 	                invalid score
10 	                invalid score
*/

//  ------------------SOLUTION------------------

// Input.
let input = ['-1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let score = +gets();


if (score >= 1 && score <= 3) {
    console.log(score * 10);
}
else if (score >= 4 && score <= 6) {
    console.log(score * 100);
}
else if (score >= 7 && score <= 9) {
    console.log(score * 1000);
}
else
    console.log(`Invalid score`);

return;
