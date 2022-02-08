/* Write a program that converts a number in the range [0… 1 000 000] to words, corresponding to the English pronunciation.


Examples:
numbers     number as words
0         	Zero
9         	Nine
10 	        Ten
12 	        Twelve
19 	        Nineteen
25 	        Twenty five
98 	        Ninety eight
98 	        Ninety eight
273 	      Two hundred and seventy three
400 	      Four hundred
501 	      Five hundred and one
617 	      Six hundred and seventeen
711       	Seven hundred and eleven
999       	Nine hundred and ninety nine 
*/


//  ------------------SOLUTION------------------



// Input.
let input = ['1000000'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

function NumInWords (number) {
    const first = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const mad = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
  
    for (let i = 0; i < mad.length; i++) {
      let tempNumber = number%(100*Math.pow(1000,i));
      if (Math.floor(tempNumber/Math.pow(1000,i)) !== 0) {
        if (Math.floor(tempNumber/Math.pow(1000,i)) < 20) {
          word = first[Math.floor(tempNumber/Math.pow(1000,i))] + mad[i] + ' ' + word;
        } else {
          word = tens[Math.floor(tempNumber/(10*Math.pow(1000,i)))] + '-' + first[Math.floor(tempNumber/Math.pow(1000,i))%10] + mad[i] + ' ' + word;
        }
      }
  
      tempNumber = number%(Math.pow(1000,i+1));
      if (Math.floor(tempNumber/(100*Math.pow(1000,i))) !== 0) word = first[Math.floor(tempNumber/(100*Math.pow(1000,i)))] + 'hundred ' + word;
    }
      return word;
  }
  
  console.log(NumInWords(gets()))