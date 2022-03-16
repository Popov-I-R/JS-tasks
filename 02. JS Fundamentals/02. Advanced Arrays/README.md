## Problem 1. Sum First and Last

Write a function that calculates and prints the sum of the first and the last elements in an array.
The input comes as an array of string elements holding numbers.
The output is printed on the console.

## Input:

    ['20', '30', '40']



## Output:

	60



## Input  

	['5', '10']


## Output

	15







## Problem 2. Negative or Positive Numbers

Write a function that processes the elements in an array one by one and produces a new array. Prepend each negative element at the front of the array (as the first element) and append each positive (or 0) element at the end of the array.
The input comes as an array of string elements holding numbers.
The output is printed on the console, each element on a new line.


Examples:


## Input:          	

	['7', '-2', '8', '9']
	

## Output: 

	-2
	7
	8
	9



## Input:           	
	
	['3', '-2', '0', '-1']


## Output:

	-1
	-2
	3
	0



## Problem 3. First and Last K Numbers

Write a function that prints the first k and the last k elements from an array of numbers.
The input comes as an array of number elements. The first element represents the number k, all other elements are from the array that needs to be processed.
The output is printed on the console on two lines. On the first line, print the first k elements, separated by space. On the second line, print the last k elements, separated by space.



Examples:


## Input: 
                              	
	[2, 
	7, 8, 9]


## Output:

	7 8
	8 9

## 4. Last K Numbers Sequence

You are given two integers n and k. Write a function that generates and prints the following sequence:
•	The first element is 1.
•	Every following element equals the sum of the previous k elements.
•	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.


Examples:


## Input:  
                                        	
	6, 3

## Output:

	1 1 2 4 7 13


## Input: 
                                        	
	8, 2

## Output:

	1 1 2 3 5 8 13 21
	
Hints
The 2nd element (1) is the sum of the 3 elements before it, but there is only 1, so we take that. The third element is the sum of the first 2 (1 and 1), and the 4th – the sum of 1, 1, and 2. The 5th element is the sum of the 2nd, 3rd, and 4th (1, 2, and 4) and so on.


## Problem 5. Process Odd Numbers

You are given an array of numbers. Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.


Examples:


## Input:  
                                 	
	[10, 15, 20, 25]

## Output:

	50 30

## Input:   
                                	
	[3, 0, 10, 4, 7, 3]

## Output:

	6 8 0
	
	
Hints
•	Counting in arrays starts from 0
•	For example –we receive 10, 15, 20, 25
•	The elements at odd positions are 15 (index 1) and 25 (index 3)
•	We need to take these two elements and multiply them * 2
•	Finally, we print them on the console in reversed order



## Problem 6. Smallest Two Numbers

Write a function that prints the two smallest elements from an array of numbers.
The input comes as an array of number elements.
The output is printed on the console on a single line, separated by space.


Examples:


## Input   
                    	
	[30, 15, 50, 5]

## Output

	5 15


## Input 
                      	
	[3, 0, 10, 4, 7, 3]

## Output

	0 3



# Problem 7. List of Products

You will receive an array of products. Print a numbered array of all the products ordered by name.

Examples:


## Input  
             	
	['Potatoes', 'Tomatoes', 'Onions', 'Apples']


## Output

	1.Apples
	2.Onions
	3.Potatoes
	4.Tomatoes


## Input   
            	
	['Watermelon', 'Banana', 'Apples']


## Output

	1.Apples
	2.Banana
	3.Watermelon





## Hints
Hints
•	The sort function rearranges the array in ascending order
        
•	Finally, we have to print our sorted array. To do that we loop through the array
        
•	We use i + 1, because we want to start counting from 1
