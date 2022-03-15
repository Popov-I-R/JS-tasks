/*
Remove Duplicates

Write a program that removes all duplicates from a list of elements.
    1,2,2,2,4,7 -> 1,2,4,7.

Maintain the relative order of the remaining items.
Input
    On the only line of input, you will receive the elements, separated by a comma.

Output
    Display the list with the duplicates removed, separated by a comma.

Constraints
    1 <= list.length <= 20

Input
1,2,2,2,2,18,3,12

Output
1,2,18,3,12

Input
c,c,a,b,a,a,b,c

Output
c,a,b

--SOLUTION--

*/ 

// Input.Write a program that removes all duplicates from a list of elements.
let input = ['1,2,2,2,2,18,3,12'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


const list = gets().split(',');
const listOfUniqueElements = [];

for(let i=0;i<list.length;i++){
    if(!listOfUniqueElements.includes(list[i])){
        listOfUniqueElements.push(list[i])
    }
}

print(listOfUniqueElements.join(','))