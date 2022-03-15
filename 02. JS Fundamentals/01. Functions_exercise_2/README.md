# Problem 1. Smallest of Three Numbers

Write a function that receives three integers and prints the smallest number. Use an appropriate name for the function.

## Input:

    2,
	5,
	3



## Output:

	2



## Input  

	600,
	342,
	123


## Output

	123

## Input  
         	
	25,
	21,
	4
	

## Output

	4





## Problem 2. Add and Subtract

You will receive three integer numbers. 
Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer.



Examples:


## Input:          	

	23,
	6,
	10
	

## Output: 

	19


## Input:           	
	
	1,
	17,
	30


## Output:

	-12


## Input:           	
	
	42	

## Output: 
	
	0

## Problem 3. Palindrome Integers

A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

## Output

	•	If the current integer is a palindrome, print: "true"
	•	Otherwise, print: "false"



Examples:


## Input: 
                              	
	[123,323,421,121]

## Output:

	false
	true
	false
	true

## Hints

	•	Read more about palindromes: https://en.wikipedia.org/wiki/Palindrome



## 4. Password Validator

Write a function that checks if a given password is valid. Password validations are:
•	The length should be 6 - 10 characters (inclusive)
•	It should consist only of letters and digits
•	It should have at least 2 digits 
If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
•	"Password must be between 6 and 10 characters"
•	"Password must consist only of letters and digits"
•	"Password must have at least 2 digits"



Examples:


## Input:  
                                        	
	'logIn'	

## Output:

	Password must be between 6 and 10 characters
	Password must have at least 2 digits


## Input: 
                                        	
	'MyPass123'

## Output:

	'MyPass123'	Password is valid
	
## Input: 
                                        	
	'Pa$s$s'

## Output:

	Password must consist only of letters and digits
	Password must have at least 2 digits



## Problem 5. Perfect Number 

Write a function that receives a number and checks if that number is perfect or NOT.
A perfect number is a positive integer that is equal to the sum of its proper positive divisors. That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).

## Output

	•	If the number is perfect, print: "We have a perfect number!"
	•	Otherwise, print: "It's not so perfect."



Examples:


## Input:  
                                 	
	6

## Output:

	We have a perfect number!	

## Input:   
                                	
	1236498	

## Output:

	It's not so perfect.
	
	
Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself) => 6 is a perfect number because it is the sum of 1 + 2 + 3 (all of which are divided without residue).
•	Read about the Perfect number here: https://en.wikipedia.org/wiki/Perfect_number


## Problem 6. Loading Bar

You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


Examples:


## Input   
                    	
	30

## Output

	30% [%%%.......]
	Still loading...


## Input 
                      	
	50	

## Output

	50% [%%%%%.....]
	Still loading...


## Input 
                      	
	100

## Output

	100% Complete!


# Problem 7. Factorial Division

Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point.



Examples:


## Input  
             	
	5,
	2


## Output

	60.00

## Input   
            	
	6,
	2


## Output

	360.00




## Hints
•	Read more about factorial here: https://en.wikipedia.org/wiki/Factorial
•	You can use recursion
