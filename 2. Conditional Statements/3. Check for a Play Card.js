/* 
Classical play cards use the following signs to designate the card face: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K and A. Write a program that enters a string and prints “yes” if it is a valid card sign or “no” otherwise.


Examples:
character           	Valid card sign?
5 	                    yes
1                   	no
Q                   	yes
q                   	no
P                   	no
10                  	yes
500                    	no
*/

//  ------------------SOLUTION------------------

let input = ['q'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

let character = gets();
let isNumber = !Number.isNaN(+character);
let isValidCardNumber = isNumber && +character >=2 && +character<=10;
let isValidSign = character === "J" || character === "Q" || character === "K" || character === "A";

if (isValidCardNumber || isValidSign) {
    print("Yes");
} else {
    print("No");
}