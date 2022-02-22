// Solutions

// 4.Integer and Float
// You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format:
// `{sum} - {type of the number (Integer or Float)}`
// Examples
// Input	
// 9, 100, 1.1	
// Output
// 110.1 - Float

// Input
// 100, 200, 303	
// Output
// 603 - Integer



function solve(firstNum, secondNum,thirdNum) {
    let sum = firstNum + secondNum + thirdNum;

    sum%1===0? sum += ' - Integer' : sum += ' - Float';
    console.log(sum)
}

solve(100, 200, 303)