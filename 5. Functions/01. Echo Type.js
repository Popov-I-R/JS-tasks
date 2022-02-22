/*Write a JS function that takes one parameter and prints on two lines the type of the parameter and then one of the following:
•	If the parameter type is either string or number, print its value
•	Otherwise, print the text 'Parameter is not suitable for printing'

Input	
'Hello, JavaScript!'	
Output
string
Hello, JavaScript!

Input	
18	
Output
number
18

Input	
null	
Output
object
Parameter is not suitable for printing



*/


function solve(parameter) {
  if (typeof(parameter) === "object") {
    //   console.log(typeof parameter);
      console.log("Parameter is not suitable for printing");
  } else {
          console.log(typeof parameter);
          console.log(parameter);
        }
      }


solve(null);

// HIstorical JS bug that may can never be fixed - null is represented as an object


