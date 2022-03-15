// Input.
let input = ['telerik', 'telerik'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

const textA = gets();
const textB = gets();

const comparison = textA.localeCompare(textB);

if(comparison === 1){
    print('Second')
}
else if(comparison=== -1) {
    print('First');
} else if (comparison === 0){
    print('Equal')
}
