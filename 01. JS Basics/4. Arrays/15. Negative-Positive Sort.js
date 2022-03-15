// Input.
let input = ['7 2 -2 1 -5 4 5 -3 1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ').map(Number)

const negativeNumbers = []
const positiveNumbers = []

for(const num of numbers) {
    if(num<0){
        negativeNumbers.push(num);
    } else {
        positiveNumbers.push(num);
    }
}

const sortedNumbers = negativeNumbers.concat(positiveNumbers);

print(sortedNumbers.join(' '));