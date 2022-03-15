// Input.
let input = ['3', '1', '2', '3', '1', '2', '3'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const n = +gets()

const arrayA = [];

for (let i =0; i<n;i++) {
    arrayA.push(+gets())
}


const arrayB =[];

for (let i =0; i<n;i++) {
    arrayB.push(+gets())
}

const areEqual = arrayA.join('') ===arrayB.join('')
print(areEqual? 'Equal' : 'Not equal')