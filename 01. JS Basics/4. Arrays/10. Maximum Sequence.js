// Input.
let input = ['2 1 1 2 3 3 2 2 2 1'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const elements = gets().split(' ');

let maxLengthOfEqualElements = 0;

for(let i = 0; i < elements.length - 1;i++){
let currentLengthOfEqualElements = 1;


for (let j = i+1; j <elements.length; j++){
    if(elements[i] !== elements[j]) {
        break;
    }

    currentLengthOfEqualElements++
}
if (maxLengthOfEqualElements < currentLengthOfEqualElements){
    maxLengthOfEqualElements = currentLengthOfEqualElements;
}
}

print(maxLengthOfEqualElements);