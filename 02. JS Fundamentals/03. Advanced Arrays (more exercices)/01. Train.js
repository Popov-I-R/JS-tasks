function solve(input) {
    let train = input
    .shift() // така вземаме първият елемент
    .split(' ') // правим го от стринг към масив
    .map(Number) // конвертираме масивa от стрингове в масив от числа

   let maxCapacity = Number(input.shift())

    for (const currentCommand of input) {
        let tokens = currentCommand.split(' ')// това е за командите, така сплитваме по спейс

        if (tokens.length > 1) { // ако дължината на кокенс е повече от 1 елемент (например 'add 10') добавяма вагон в края на влака
            train.push(+tokens[1]) // бутаме индекс 1, защото индекс 0 е 'add', remove и т.н.
        } else {
             // сега трябва да видим къде можем да поберем пътниците, обикаляйки ги
             let passengers = +tokens[0]
            for (let i = 0; i < train.length; i++) {
                let wagons = train[i]
                // дали пътниците са повече или по-равно на max capacity
                if (wagons + passengers <= maxCapacity) {
                    train[i] += passengers // ако са по-малко или равно - увеличавам и прекъсвам
                    break;
                }
                
            }
        }
    }

console.log(train.join(' ')); // join - от масив към стринг
}
 
 
 
solve(
    ['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);