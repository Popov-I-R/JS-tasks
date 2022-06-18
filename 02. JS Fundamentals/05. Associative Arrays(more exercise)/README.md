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


	
	

## Problem 6. Company Users

Write a function, which keeps the information about companies and their employees. 
You will receive an array of strings containing the company name and employee's id. Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by their name in ascending order. 
Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}

Input / Constraints
•	The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
•	The input always will be valid.




Examples:


## Input   
                    	
	[
	'SoftUni -> AA12345',
	'SoftUni -> BB12345',
	'Microsoft -> CC12345',
	'HP -> BB12345'
	]



## Output

	HP
	-- BB12345
	Microsoft
	-- CC12345
	SoftUni
	-- AA12345
	-- BB12345




## Input 
                      	
	[
	'SoftUni -> AA12345',
	'SoftUni -> CC12344',
	'Lenovo -> XX23456',
	'SoftUni -> AA12345',
	'Movement -> DD11111'
	]





## Output

	Lenovo
	-- XX23456
	Movement
	-- DD11111
	SoftUni
	-- AA12345
	-- CC12344




# Problem 7. A Miner Task

You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in the format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000].


Examples:


## Input  
             	
	[
	'Gold',
	'155',
	'Silver',
	'10',
	'Copper',
	'17'
	]




## Output

	Gold -> 155
	Silver -> 10
	Copper -> 17



## Input   
            	
	[
	'gold',
	'155',
	'silver',
	'10',
	'copper',
	'17',
	'gold',
	'15'
	]




## Output

	gold -> 170
	silver -> 10
	copper -> 17



# Problem 8. *Arena tier

Pesho is a pro gladiator, he is struggling to become master of the Arena. 
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"
The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or update his skill, only if the current technical skill is lower than the new value.
If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
If they don't have techniques in common, the duel isn't happening and both continue in the Season.
You should end your program when you receive the command "Ave Cesar". At that point, you should print the gladiators, ordered by total skill in descending order, then ordered by name in ascending order. Foreach gladiator prints their technique and skill ordered descending, then ordered by technique name in ascending order.
Input / Constraints
You will receive an array of strings as a parameter to your solution.
•	The input comes in the form of commands in one of the formats specified above.
•	Gladiator and technique will always be one-word string, containing no whitespaces.
•	Skill will be an integer in the range [0, 1000].
•	There will be no invalid input lines.
•	The program ends when you receive the command "Ave Cesar".
Output
•	The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"



Examples:


## Input  
             	
	[
	'Peter -> BattleCry -> 400',
	'Alex -> PowerPunch -> 300',
	'Stefan -> Duck -> 200',
	'Stefan -> Tiger -> 250',
	'Ave Cesar'
	]





## Output

	Stefan: 450 skill
	- Tiger <!> 250
	- Duck <!> 200
	Peter: 400 skill
	- BattleCry <!> 400
	Alex: 300 skill
	- PowerPunch <!> 300




## Input   
            	
	[
	'Peter -> Duck -> 400',
	'Julius -> Shield -> 150',
	'Gladius -> Heal -> 200',
	'Gladius -> Support -> 250',
	'Gladius -> Shield -> 250',
	'Peter vs Gladius',
	'Gladius vs Julius',
	'Gladius vs Maximilian',
	'Ave Cesar'
	]





## Output

	Gladius: 700 skill
	- Shield <!> 250
	- Support <!> 250
	- Heal <!> 200
	Peter: 400 skill
	- Duck <!> 400
