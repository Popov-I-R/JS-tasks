## Problem 1. Phone Book

Write a function that stores information about a person’s name and phone number. The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.


## Input:

    ['Tim 0834212554',
 	'Peter 0877547887',
 	'Bill 0896543112',
 	'Tim 0876566344']





## Output:

	Tim -> 0876566344
	Peter -> 0877547887
	Bill -> 0896543112




## Input  

	['George 0552554',
 	'Peter 087587',
 	'George 0453112',
 	'Bill 0845344']




## Output

	George -> 0453112
	Peter -> 087587
	Bill -> 0845344









## Problem 2. Storage

Write a function that takes a certain number of items and their quantity. If the same item appears more than once, add the new amount to the existing one. In the end, print all the items and their amount without sorting them. The input comes as an array of strings. Try using a Map().



Examples:


## Input:          	

	['tomatoes 10',
	'coffee 5',
	'olives 100',
	'coffee 40']

	

## Output: 

	tomatoes -> 10
	coffee -> 45
	olives -> 100




## Input:           	
	
	['apple 50',
	'apple 61',
	'coffee 115',
	'coffee 40']



## Output:

	apple -> 111
	coffee -> 155



## Problem 3. School Grades

Write a function that stores students and their grades throughout the year. If a student appears more than once, add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.
Note: The average grades must be fixed to the second decimal place.




Examples:


## Input: 
                              	
	['Lilly 4 6 6 5',
	'Tim 5 6',
	'Tammy 2 4 3',
	'Tim 6 6']




## Output:

	Lilly: 5.25
	Tammy: 3.00
	Tim: 5.75



