/* 
The Chinese zodiac assigns an animal to year according to the following table:

Year|	Animal		|Year	|Animal
2000|	Dragon		|2006	|Dog
2001|	Snake		|2007	|Pig
2002|	Horse		|2008	|Rat
2003|	Sheep		|2009	|Ox
2004|	Monkey		|2010	|Tiger
2005|	Rooster		|2011	|Hare

Write a program that determines the zodiac sign for a particular year. Note that the cycle repeats itself, so 2012 will be the year of the Dragon again.
Input
    On the first line, you will receive the year
Output

    On the only line of output, print the corresponding zodiac Sign

Input
2000

Output
Dragon

Input
1975

Output
Hare

*/

//  ------------------SOLUTION------------------

// Input.
let input = ['2000'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let year = +gets()
let remainder = year % 12;

if(remainder === 0) {
    print(`Monkey`)
} else if (remainder === 1){
    print(`Rooster`)
}else if (remainder === 2){
    print(`Dog`)
}else if (remainder === 3){
    print(`Pig`)
}else if (remainder === 4){
    print(`Rat`)
}else if (remainder === 5){
    print(`Ox`)
}else if (remainder === 6){
    print(`Tiger`)
}else if (remainder === 7){
    print(`Hare`)
}else if (remainder === 8){
    print(`Dragon`)
}else if (remainder === 9){
    print(`Snake`)
}else if (remainder === 10){
    print(`Horse`)
}else if (remainder === 11){
    print(`Sheep`)
}