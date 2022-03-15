// Input.
let input = ['6', '1 2 3 4 3 6 5 8 3 9'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const n =+gets()
const numbers = gets().split(' ').map((el) => +el);

for(let i=0;i<numbers.length -1; i++){
    for(let j = i+1;j<numbers.length;j++){
        const a = numbers[i];
        const b = numbers[j]

        if((a+b) ===n) {
            print(`${a}, ${b}`)
        }
    }
}