// Input.
let input = ['1 2 4 8 12 34 200 2000'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ').map(Number);

let isSorted = true

for(let i = 0; i<numbers.length - 1; i++) {
    const currentNumber=numbers[i]
    const nextNumber = numbers[i+1]

    if(currentNumber>nextNumber) {
        isSorted=false;
        break
    }
}

print(isSorted? 'Yes' : 'No')