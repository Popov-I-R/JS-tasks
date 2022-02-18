/* 
You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.

	    |   Friday	|Saturday	|Sunday
Students|	8.45	|9.80	    |10.46
Business|	10.90	|15.60	    |16
Regular	|   15	    |20	        |22.50


*/

///---SOLUTION---



function solve(groupSize, type, day) {
  let price = 0;

  switch (type) {
    case "Students":
      if (day === "Friday") {
        price += groupSize * 8.45;
      } else if ((day = "Saturday")) {
        price += groupSize * 9.8;
      } else {
        price += groupSize * 10.46;
      }

      if (groupSize >= 30) {
        price *= 0.85;
      }

      break;
    case "Business":
      if (groupSize >= 100) {
        groupSize -= 10;
      }

      if (day === "Friday") {
        price += groupSize * 10.9;
      } else if ((day = "Saturday")) {
        price += groupSize * 15.6;
      } else {
        price += groupSize * 16.0;
      }
      break;

    case "Regular":
      if (day === "Friday") {
        price += groupSize * 15;
      } else if ((day = "Saturday")) {
        price += groupSize * 20;
      } else {
        price += groupSize * 22.5;
      }

      if (groupSize >= 10 && groupSize <= 20) {
        price *= 0.95;
      }

      break;
  }
  console.log(`Total price: ${price.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
