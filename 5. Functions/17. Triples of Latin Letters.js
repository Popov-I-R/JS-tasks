/* 
10.	Triples of Latin Letters
Write a program that receives a string of number n and print all triples of the first n small Latin letters, ordered alphabetically:

Input
3
Output
'3'	aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc


*/

function solve(n) {
  for (let i = 0; i < n; i++) {
    let firstLetter = String.fromCharCode(97 + i);
    for (let j = 0; j < n; j++) {
      let secondLetter = String.fromCharCode(97 + j);
      for (let k = 0; k < n; k++) {
        let thirdLetter = String.fromCharCode(97 + k);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}
solve(3)