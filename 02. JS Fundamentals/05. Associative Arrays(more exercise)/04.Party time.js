function solve(input) {
    let guests = new Map()

    let guestsInput = input.slice(0, index)

    for (let guestStatus of input) {
        let guestType = ''

        if(isNaN(Number(guestStatus[0]))) {
            guestType = 'Regular'
        } else {
            guestType = 'VIP'
        }

        
            guests.set(guestStatus, guestType)
        

     
        
    }

    for (let i = index + 1; i < input.length; i++) {
        let guest = input[i]
        if (guests.has(guest)) {
            guests.delete(guest)
        }
     }
     let sortedMap = [...guests]
     .sort((a,b ) => {
         return b[1].localeCompare(a[1])
     })
     console.log(sortedMap.length)
     for (let [guestStatus, guestType] of sortedMap) {
         console.log(guestStatus)
     }
}
 
 
 
solve(
    ['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc']

);