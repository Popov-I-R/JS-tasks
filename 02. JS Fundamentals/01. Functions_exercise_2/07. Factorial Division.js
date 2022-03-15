function solve(firstNum, secondNum) {


    let firstFactorial = getFactorial(firstNum)
    let secondFactorial = getFactorial(secondNum)

    console.log((firstFactorial / secondFactorial).toFixed(2));
    function getFactorial(num) {
        
        if (num ===1) {
            return 1;
        }

        return num * getFactorial(num -1)
    }

}
 
 
 
solve(5,2);