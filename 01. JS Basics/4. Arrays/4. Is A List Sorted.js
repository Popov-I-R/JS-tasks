/*
Is a List Sorted?
Write a program that checks if a list is already sorted. For a list to be sorted, the next element must NOT be smaller than the previous one.
Input
    On the first line - you will receive a number N.
    On the next N lines, you will receive a list of numbers, separated by a comma

Output
    There are N lines of output
    for each list you receive, print 'true' if sorted or 'false' otherwise.

Constraints
    1 <= N <= 10
    1 <= list.length <= 20

Input
3
1,2,3,4,5
1,2,8,9,9
1,2,2,3,2

Output
true
true
false

*/

// Input.
let input = ['3', '1,2,3,4,5', '1,2,8,9,9', '1,2,2,3,2'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


const n = +gets()

for(let i =0;i<n;i++) {
    const list = gets()
    const sortedList = list.split(',').map(Number).sort((a, b) => a - b).join(',')

    print(list===sortedList)
}

