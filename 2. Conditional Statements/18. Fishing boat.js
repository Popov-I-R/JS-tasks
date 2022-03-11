/* 

Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
Цената зависи от сезона:
•	Цената за наем на кораба през пролетта е  3000 лв.
•	Цената за наем на кораба през лятото и есента е  4200 лв.
•	Цената за наем на кораба през зимата е  2600 лв.
В зависимост от броя си групата ползва отстъпка:
•	Ако групата е до 6 човека включително  –  отстъпка от 10%.
•	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
•	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
Вход
Приемат се 3 аргумента:
•	Бюджет на групата – цяло число в интервала [1…8000]
•	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
•	Брой рибари – цяло число в интервала [4…18]
Изход
Да се отпечата на конзолата един ред:
•	Ако бюджетът е достатъчен:
"Yes! You have {останалите пари} leva left."
•	Ако бюджетът НЕ Е достатъчен:
"Not enough money! You need {сумата, която не достига} leva."
Сумите трябва да са форматирани с точност до два знака след десетичната запетая.


*/



function fishingBoat(input) {
    let budget = parseInt(input[0]);
    let season = String(input[1]);
    let fishers = parseInt(input[2]);
 
    if ((budget < 1 || budget > 8000) || (fishers < 4 || fishers > 18)) {
        return;
    }
 
    let fishRent = 0;
 
    switch(season) {
        case 'Spring':
            fishRent = 3000;
            break;
        case 'Summer': case 'Autumn':
            fishRent = 4200;
            break;
        case 'Winter':
            fishRent = 2600;
            break;
        default:
            return;
    }
 
    if (fishers <= 6) {
        fishRent = fishRent - (fishRent * 10 / 100);
    } else if (fishers > 6 && fishers <= 11) {
        fishRent = fishRent - (fishRent * 15 / 100);
    } else if (fishers > 11) {
        fishRent = fishRent - (fishRent * 25 / 100);
    }
 
    if (fishers % 2 === 0 && season !== 'Autumn') {
        fishRent = fishRent - (fishRent * 5 / 100);
    }
 
    if (budget >= fishRent) {
        console.log(`Yes! You have ${(budget - fishRent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(fishRent - budget).toFixed(2)} leva.`);
    }
}
 
fishingBoat(['3000', 'Summer', '11']);
fishingBoat(['3600', 'Autumn', '6']);
fishingBoat(['2000', 'Winter', '13']);