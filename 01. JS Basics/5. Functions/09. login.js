/*
9.	* Login
You will be given a string representing a username. The correct password will be that username reversed. Until you receive the correct password print on the console: "Incorrect password. Try again.". 
When you receive the correct password print: "User {username} logged in." 
However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
The input comes as an array of strings - the first string represents username and each subsequent string is a password.

Input
['Acer','login','go','let me in','recA']

Output
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User Acer logged in.

Input
['sunny','rainy','cloudy','sunny','not sunny']

Output
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User sunny blocked!


*/



function solve(arr) {
  let username = arr[0];
  let password = "";

  for (let i = username.length - 1; i >= 0; i--) {
    password += username[i];
  }


  let counter = 1;
  for (let i = 1; i <= arr.length -1; i++, counter++) {
    let currentUsername = arr[i]
    if (currentUsername === password) {
console.log(`User ${username} logged in.`)
break;
    }

    if (counter === 4) {
        console.log(`User ${username} blocked!` )
        break;
    } else {
        console.log(`Incorrect password. Try again.` )
    }
  }
}

solve(['sunny','rainy','cloudy','sunny','not sunny']);
