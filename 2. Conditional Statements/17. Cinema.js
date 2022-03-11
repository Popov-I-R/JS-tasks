/* 
1.	Кино
В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
•	Premiere – премиерна прожекция, на цена 12.00 лева.
•	Normal – стандартна прожекция, на цена 7.50 лева.
•	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  

Input
(["Premiere",
"10",
"12"])

Output
1440.00 leva

Input
(["Normal",
"21",
"13"])


Output
2047.50 leva
*/





function solve([typeOfProjection,rows,columns ]) {


  let income = 0;

  switch (typeOfProjection) {
    case "Premiere":
      income = rows * columns * 12;
      console.log(income)
      break;
    case "Normal":
      income = rows * columns * 7.50;
      console.log(income)
      break;
    case "Discount":
      income = rows * columns * 5;
      console.log(income)
      break;
      
  }
}

solve(["Premiere", "10", "12"]);
