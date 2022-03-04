function solve(n, inputArr) {

let arr = []


for (let i = 0; i < n; i++) {
  arr.push(inputArr[i])
}

let output = "" // Този стринг се прави, за да може output-a да ми е на един ред, а не на няколко от цикъла
for (let j = arr.length-1; j >=0;j-- ) {
  output += `${arr [j]} `; // Накрая има малко място с причината да има място между цифрите в лупа
  
} 
  console.log(output)


}

solve(3, [10, 20, 30, 40, 50]);



