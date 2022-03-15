/* 

*/

function solve([n1, n2, operator]) {
  let result = 0;

  if (n1 === "0" || n2 === "0") {
    if (n1 === "0") {
      console.log(`Cannot divide ${n1} by zero`);
    } else if (n2 === "0") {
      console.log(`Cannot divide ${n1} by zero`);
    }
  } else {
    if (operator === "+" || operator === "-" || operator === "*") {
      if (operator === "+") {
        result = +n1 + +n2;
        if (result % 2 === 0) {
          console.log(`${n1} ${operator} ${n2} = ${result} - even `);
        } else {
          console.log(`${n1} ${operator} ${n2} = ${result} - odd `);
        }
      } else if (operator === "-") {
        result = n1 - n2;
        if (result % 2 === 0) {
          console.log(`${n1} ${operator} ${n2} = ${result} - even `);
        } else {
          console.log(`${n1} ${operator} ${n2} = ${result} - odd `);
        }
      } else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
          console.log(`${n1} ${operator} ${n2} = ${result} - even `);
        } else {
          console.log(`${n1} ${operator} ${n2} = ${result} - odd `);
        }
      }
    } else if (operator === "/") {
      result = n1 / n2;
      console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)} `);
    } else if (operator === "%") {
      result = n1 % n2;
      console.log(`${n1} ${operator} ${n2} = ${result} `);
    }
  }
}

solve(["1", "12", "+"]);
