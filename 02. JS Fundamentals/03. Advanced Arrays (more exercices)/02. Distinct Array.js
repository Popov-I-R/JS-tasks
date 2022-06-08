function solve(input) {
 
    let distinctArray = []

    for (let i=0; i < input.length; i++) {
        if (!distinctArray.includes(input[i])) {
            distinctArray.push(input[i])
        }
    }

console.log(distinctArray.join(' '))


}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2]);




------------------------------------------------------
// Second Solution 

function solve(input) {
 
    let distinctArray = input.filter((el, i) => {
        return input.indexOf(el) === i
    })


    console.log(distinctArray)
}
solve(
    [7, 8, 9, 7, 2, 3, 4, 1, 2]
    );




