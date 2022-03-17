function solve(params) {
    let firstTwoIndexes = []

    params.sort((a, b) => a - b)
    firstTwoIndexes = params.slice(0, 2)
    .map(Number)
    .join(' ')
console.log(firstTwoIndexes)
    


}

solve([3, 0, 10, 4, 7, 3])