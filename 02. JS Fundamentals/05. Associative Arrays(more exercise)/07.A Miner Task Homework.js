function solve(input) {
    
    let collection = {}

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i]
        let quantity = +input[i+1]
        
        if (!collection.hasOwnProperty(resource)) {
            collection[resource] = 0
        }

        collection[resource] += quantity
        // if (!collection.hasOwnProperty(quantity)) {
        //     collection[resource].push(quantity)
        // }
        // if (collection[resource].includes(quantity)) {
        //     quantity += quantity
        // }
    }

    for(let item in collection) {
        console.log(`${item} -> ${collection[item]}`)
    }

}
 
 
 
solve(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
        ]
        
);