## Problem 1. Words Tracker

Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.



## Input:

    [
	'this sentence', 
	'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
	]





## Output:

	this - 3
	sentence - 2




## Input  

	[
	'is the', 
	'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']




## Output

	the – 3
	is - 1








## Problem 2. Odd Occurrences

Write a function that extracts the elements of a sentence, if it appears an odd number of times (case-insensitive).
The input comes as a single string. The words will be separated by a single space.




Examples:


## Input:          	

	'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
	

## Output: 

	c# php 1 5



## Input:           	
	
	'Cake IS SWEET is Soft CAKE sweet Food'


## Output:

	soft food
	




## Problem 3. Piccolo

Write a function that:
•	Records a car number for every car that enters the parking lot
•	Removes a car number when the car goes out
•	Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".




Examples:


## Input: 
                              	
	['IN, CA2844AA',
	'IN, CA1234TA',
	'OUT, CA2844AA',
	'IN, CA9999TT',
	'IN, CA2866HI',
	'OUT, CA1234TA',
	'IN, CA2844AA',
	'OUT, CA2866HI',
	'IN, CA9876HH',
	'IN, CA2822UU']




## Output:

	CA2822UU
	CA2844AA
	CA9876HH
	CA9999TT



## Problem 4. Party Time

There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. When guests come to the party check if he/she contains in any of the two reservation lists. 
The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
All VIP numbers start with a digit.
When you receive the command "PARTY", the guests start coming.
Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 




Examples:


## Input:  
                                        	
	['7IK9Yo0h',
	'9NoBUajQ',
	'Ce8vwPmE',
	'SVQXQCbc',
	'tSzE5t0p',
	'PARTY',
	'9NoBUajQ',
	'Ce8vwPmE',
	'SVQXQCbc'
	]


## Output:

	2
	7IK9Yo0h
	tSzE5t0p



## Input: 
                                        	
	['m8rfQBvl',
	'fc1oZCE0',
	'UgffRkOn',
	'7ugX7bm0',
	'9CQBGUeJ',
	'2FQZT3uC',
	'dziNz78I',
	'mdSGyQCJ',
	'LjcVpmDL',
	'fPXNHpm1',
	'HTTbwRmM',
	'B5yTkMQi',
	'8N0FThqG',
	'xys2FYzn',
	'MDzcM9ZK',
	'PARTY',
	'2FQZT3uC',
	'dziNz78I',
	'mdSGyQCJ',
	'LjcVpmDL',
	'fPXNHpm1',
	'HTTbwRmM',
	'B5yTkMQi',
	'8N0FThqG',
	'm8rfQBvl',
	'fc1oZCE0',
	'UgffRkOn',
	'7ugX7bm0',
	'9CQBGUeJ'
	]


## Output:

	2
	xys2FYzn
	MDzcM9ZK



## Problem 5. Card Game

You are given a sequence of people and for every person what cards he draws from the deck. The input will be an array of strings. Each string will be in the format:
{personName}: {PT, PT, PT,… PT}
Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
A single person cannot have more than one card with the same power and type, if he draws such a card he discards it. The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}




Examples:


## Input:  
                                 	
	[
	'Peter: 2C, 4H, 9H, AS, QS',

	'Tomas: 3H, 10S, JC, KD, 5S, 10S',

	'Andrea: QH, QC, QS, QD',

	'Tomas: 6H, 7S, KC, KD, 5S, 10C',

	'Andrea: QH, QC, JS, JD, JC',

	'Peter: JD, JD, JD, JD, JD, JD'
	]


## Output:

	Peter: 167
	Tomas: 175
	Andrea: 197

## Input:  
                                 	
	[
	'John: 2C, 4H, 9H, AS, QS',
	'Slav: 3H, 10S, JC, KD, 5S, 10S',
	'Alex: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'Slav: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'Alex: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'John: JD, JD, JD, JD'
	]



## Output:

	[
	'John: 2C, 4H, 9H, AS, QS',
	'Slav: 3H, 10S, JC, KD, 5S, 10S',
	'Alex: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'Slav: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'Alex: 6H, 7S, KC, KD, 5S, 10C',
	'Thomas: QH, QC, JS, JD, JC',
	'John: JD, JD, JD, JD'
	]


	
	
Hints
·	An array can be sorted by passing a comparing function to the Array.sort() function
·	Creating a comparing function by 2 criteria can be achieved by first comparing by the main criteria, if the 2 items are different (the result of the compare is not 0) - return the result as the result of the comparing function. If the two items are the same by the main criteria (the result of the comparison is 0), we need to compare by the second criteria and the result of that comparison is the result of the comparing function
	

## Problem 6. Bomb Numbers

Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 
Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear. 
The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
The output is the sum of the remaining elements in the sequence.



Examples:


## Input   
                    	
	[1, 2, 2, 4, 2, 2, 2, 9],
	[4, 2]


## Output

	12


## Input 
                      	
	[1, 4, 4, 2, 8, 9, 1],
	[9, 3]


## Output

	5



# Problem 7. Search for a Number

You will receive two arrays of integers. The second array is containing exactly three numbers. 
The first number represents the number of elements you have to take from the first array (starting from the first one).
The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
The third number is the number we search in our collection after the manipulations. 
As output print how many times that number occurs in our array in the following format: 
"Number {number} occurs {count} times."

Examples:


## Input  
             	
	[5, 2, 3, 4, 1, 6],
	[5, 2, 3]



## Output

	Number 3 occurs 1 times.


## Input   
            	
	[7, 1, 5, 8, 2, 7],
	[3, 1, 5]



## Output

	Number 5 occurs 1 times.





## Hints

•	The sort function rearranges the array in ascending order
        
•	Finally, we have to print our sorted array. To do that we loop through the array
        
•	We use i + 1, because we want to start counting from 