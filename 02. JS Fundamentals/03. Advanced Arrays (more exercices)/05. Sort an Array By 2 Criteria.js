function solve(input) {
 
    console.log(input.sort(sortProducts)
        .join('\n'))
        

    function sortProducts(a, b) {
        let aLength = a.aLength
        let bLength = b.aLength
        let result = aLength - bLength

        //Alphabetical sort
        if (result === 0) {
            return a.localeCompare(b) // тази функция сравнява стрингове
        }

        return result
    }

   
}
 
 
 
solve(
    ['alpha', 'beta', 'gamma']
);