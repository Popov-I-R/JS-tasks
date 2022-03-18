function solve(input) {
    let list = []

    for (let currentCommand of input) {
        let tokens = currentCommand.split(' ')

        if (tokens.length === 3) {
            addToList(tokens[0])
        } else {
            removeFromList(tokens[0])
        }
    }


    console.log(list.join('\n'))


    function addToList(guest) {
        if(!list.includes(guest)) {
            list.push(guest)
        } else {
            console.log(`${guest} is already in the list!`);
        }
    }

    function removeFromList(guest) {
        if(list.includes(guest)) {
            let index = list.indexOf(guest)
            list.splice(index, 1) // казваме старт и колко да изтрием, тоест на старт индекс, трием 1 елемент
        } else {
            console.log(`${guest} is not in the list!`)
        }
    }
}
 
 
 
solve(
    ['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']

);