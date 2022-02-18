/*
Print Deck of Cards
Description

Write a program that reads a card sign(as a string) from the console and generates and prints all possible cards from a standard deck of 52 cards up to the card with the given sign(without the jokers). The cards should be printed using the classical notation (like 5 of spades, A of hearts, 9 of clubs; and K of diamonds).
    The card faces should start from 2 to A(10 is 10).
    Print each card face in its four possible suits: clubs, diamonds, hearts and spades.

Input
    On the only line, you will receive the sign of the card to which, including, you should print the cards in the deck.
*/
//  ------------------SOLUTION------------------

// Input.
let input = ['3'];

// Custom implementation of read and print. Do not touch : )
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution


let deck = ['2', '3','4','5','6','7','8','9','10','J','Q','K','A']
const card = gets(); //Не слагаме + защото имаме и букви J Q K A 
let index = 0;

do {
let face = deck[index]; 
print(`${face} of spades, ${face} of clubs, ${face} of hearts, ${face} of diamonds`)

} while(deck[index++] !== card )
