function smallestOfThree() {
    let firstNum = arguments['0']
    let secondNum= arguments['1']
    let thirdNum= arguments['2']

    return Math.min(firstNum, secondNum, thirdNum)
    
    
}

console.log(smallestOfThree(10, 5, 3))