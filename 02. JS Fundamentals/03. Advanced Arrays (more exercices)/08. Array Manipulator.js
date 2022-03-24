function solve(arr,commands) {
    for (const currentCommand of commands) {
        let tokens = currentCommand.split(' ')
        let command = tokens[0]

        if (command=== 'add') {
            let index = Number(tokens[1])
            let number = Number(tokens[2])

            arr.splice(index, 0, number) // Когато му кажем 0 - не трие
            
        } else if (command === 'addMany') {
            let index = Number(tokens[1])
            let elements = tokens
            .slice(2)
            .map(Number)

            arr.splice(index, 0, ...elements)
            
        } else if (command === 'contains') {
            console.log(arr.indexOf(tokens[1]))
        } else if (command === 'remove') {
            let index = Number(tokens[1])
            arr.splice(index, 1)

        } else  if (command === 'shift') {
            let positions = Number(tokens[1])
            positions %= arr.length 


            let firstPart = arr.slice(0, positions)
            let secondPart = arr.slice(positions);
            arr = secondPart.concat(firstPart)
        } else if (command === 'sumPairs') {
            let merged = []

            for (let i = 0; i < arr.length - 1; i += 2) {
                merged.push(arr[i] + arr[i + 1])
                
            }

            if (arr.length % 2 === 1) {
                merged.push(arr.pop())
            }

            arr = [...merged]
            console.log(arr)
        }
    }
}


solve(
    [1, 2, 4, 5, 6, 7, 8, 9]
    ['sumPairs']
    

)