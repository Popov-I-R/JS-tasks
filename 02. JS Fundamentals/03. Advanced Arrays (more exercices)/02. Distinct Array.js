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











// for (let i = 0; i < numbers.length; i++) {
        
//     let currentIndex = numbers[i]
//     currentIndex
//     for (let j = i+1; j < numbers.length; j++) {
//         let currentJ = numbers[j]
        
//         if (currentIndex === currentJ ) {
//             let what = currentJ
//             console.log(what)
//         }
        
//     }
    
// }

// }

//  по горният начин намерих дублиращите се елементи чрез вложен фор цикъл/ не е функционално