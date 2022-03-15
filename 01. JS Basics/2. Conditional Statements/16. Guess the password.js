/* 
Да се напише функция, която получава парола (текст) и проверява дали дадената паролата съвпада с фразата "s3cr3t!P@ssw0rd". При съвпадение да се изведе "Welcome". При несъвпадение да се изведе "Wrong password!". 

Input

Output
*/


function solve([currentPassword]) {
let realPassword = 's3cr3t!P@ssw0rd'
let result = (currentPassword === realPassword) ? 'Welcome' : 'Wrong password!'

console.log(result)
}

solve(["s3cr3t!P@ssw0rd"])