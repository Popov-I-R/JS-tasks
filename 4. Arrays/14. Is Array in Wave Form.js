// Input.
let input = ['2 1 2 1 2 1 2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ').map(Number);

let isWaveForm = 'Yes';

for(let i=1;i<numbers.length; i+=2){
    const currentNum = numbers[i];
    const previousNum = numbers[i-1]
    const nextNum = numbers[i+1]
    
    if (currentNum>=previousNum || currentNum >=nextNum){
        console.log(nextNum);
        isWaveForm = 'No';
        break
    }
}
print(isWaveForm)