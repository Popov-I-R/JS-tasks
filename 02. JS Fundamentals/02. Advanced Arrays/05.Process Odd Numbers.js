function solve(array) {

// ново решение 
let result = array
    .filter(x => x % 2 == 1)
    .map(x => x * 2)
    .reverse()

console.log(result.join(' '))
}


solve([10, 15, 20, 25]);


 
