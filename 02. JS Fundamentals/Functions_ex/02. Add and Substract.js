function solve(firstNum,secondNum,thirdNum) {

    let add = (firstNum , secondNum) => firstNum + secondNum
    let sumResult = add(firstNum, secondNum)
    let subtract = (sumResult, thirdNum) => sumResult - thirdNum

    return subtract(sumResult, thirdNum)
}

console.log(solve(1,17,30)) 





