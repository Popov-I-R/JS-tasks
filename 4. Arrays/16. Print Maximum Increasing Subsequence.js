// Input.
let input = ['1 2 3 4 3 1 9 4 5 6 11'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const numbers = gets().split(' ').map(Number);
let maxSequence = [];

for(let i=0;i<numbers.length;i++){
    const currentSequence =[numbers[i]];

    for(j =i+1;j<numbers.length;j++){
        const lastAddedNumber = currentSequence[currentSequence.length -1]

        if(lastAddedNumber >= numbers[j]){
            break
        }
        currentSequence.push(numbers[j])
    }
    if(maxSequence.length<=currentSequence.length){
        maxSequence = currentSequence.slice()
    }
}

print(maxSequence.join(' '))