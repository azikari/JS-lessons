// let name = prompt("Enter your name:", "");

// if (name === "Karima") {
//   console.log("Hello, Karima!");
// } else {
//   console.log("User not found");
// }

// let age = prompt("How old are you?");
// age = Number(age)
// if (age >= 18) {
//       alert("Welcome!");
// } else {
//   alert("Access denied");
// }


// let number = prompt("Enter a number:"); 
// number = Number(number);

// if (number % 2 == 1) { 
//   console.log("The number is odd");
// } else {
//   console.log("The number is even");
// }


// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// num1 = Number(num1);
// num2 = Number(num2);

// if(num1 > num2) {
//     console.log("The first number is greater than the second");
// } else {
//     console.log("The second number is greater than the first");
// }


// let num1 = prompt("Enter the first number:");
// let num2 = prompt("Enter the second number:");

// num1 = Number(num1);
// num2 = Number(num2);

// if (num1 > num2) {
//     console.log("The first number is greater than the second");
// } else if (num1 < num2) {
//     console.log("The second number is greater than the first");
// } else {
//     console.log("The numbers are equal");
// }


// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }


// let age = 17;
// let canVote;
// if (age >= 18) {
//     canVote = "Yes";
// } else {
//     canVote = "No";
// }
// console.log(canVote); 



// let day = Number(prompt("Enter a number:"));
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid Day!";
// }

// console.log(dayName);


// let score = parseInt(prompt("Enter the score:"));
// let grade;

// switch (true) {
//   case (score >= 90 && score <= 100):
//     grade = "A";
//     break;
//   case (score >= 75 && score <= 89):
//     grade = "B";
//     break;
//   case (score >= 60 && score <= 74):
//     grade = "C";
//     break;
//   case (score < 60 && score >= 0):
//     grade = "F";
//     break;
//   default:
//     grade = "Invalid score";
// }

// console.log("Your score: " + grade);


// let month = Number(prompt("Enter a number:"));
// let season;

// switch (true) {
//     case (month <= 2 && month > 0):
//         season = "Winter";
//         break;
//     case (month >= 3 && month <= 5):
//         season = "Spring";
//         break;
//     case (month >= 6 && month <= 8):
//         season: "Summer";
//         break;
//     case (month >= 9 && month <= 11):
//         season = "Fall";
//         break;
//     case (month === 12):
//         season = "Winter";
//         break;
//     default:
//         season = "Invalid month number"
// }

// console.log("Season: " + season);


// let food = Number(prompt("Enter a number:"));
// let foodName;

// switch (food){
//     case 1:
//         foodName = "Soup";
//         break;
//     case 2:
//         foodName = "Salad";
//         break;
//     case 3:
//         foodName = "Dessert"
//         break;
//     default:
//         foodName = "Not found in menu"
// }

// console.log(foodName);


// let number = Number(prompt("Enter a number:"));

// let result = (number > 0) ? "Positive" :
//              (number < 0) ? "Negative" :
//              "Zero";

// console.log(result);


// let number = Number(prompt("Enter a number:"));

// let result = (number % 2 === 0) ? "Even" : "Odd";

// console.log(result);


// let age = Number(prompt("Enter your age:"));

// let result = (age >= 18) ? "Access Allowed" : "Access Denied";

// console.log(result);


// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// let max = (num1 > num2) ? num1 : num2;

// console.log("The larger number is: " + max);


// let number = Number(prompt("Enter the number of the month:"));
// let month;

// switch (number) {
//     case 1:
//         month = "January";
//         break;
//     case 2:
//         month = "February";
//         break;
//     case 3:
//         month = "March";
//         break;
//     case 4:
//         month = "April";
//         break;
//     case 5:
//         month = "May"
//         break;
//     case 6:
//         month = "June";
//         break;
//     case 7:
//         month = "July";
//         break;
//     case 8:
//         month = "August";
//         break;
//     case 9:
//         month = "September";
//         break;
//     case 10:
//         month = "October";
//         break;
//     case 11:
//         month = "November";
//         break;
//     case 12:
//         month = "December";
//         break;
//     default:
//         month = "Invalid number!";
// }

// console.log(month)


// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// if (num1 === num2) {
//     console.log("The numbers are equal");
// } else {
//     let max = (num1 > num2) ? num1 : num2;
//     console.log("The larger number is: " + max);
// }



// const diesel = 0.9;
// const regular = 1;
// const premium = 1.5;

// let budget = 100;

// let number = Number(prompt("Choose the fuel type:"));

// let fuelType;
// let fuelPrice;

// if (number === 1) {
//   fuelPrice = diesel;
//   fuelType = "diesel";
// }
// else if (number === 2) {
//   fuelPrice = regular;
//   fuelType = "regular";
// }
// else if (number === 3) {
//   fuelPrice = premium;
//   fuelType = "premium";
// }
// else {
//   alert("Please enter the correct fuel type!");

//   number = Number(prompt("Choose the fuel type:"));

//   if (number === 1) {
//     fuelPrice = diesel;
//     fuelType = "diesel";
//   }
//   else if (number === 2) {
//     fuelPrice = regular;
//     fuelType = "regular";
//   }
//   else if (number === 3) {
//     fuelPrice = premium;
//     fuelType = "premium";
//   }
//   else {
//     alert("Please enter the correct fuel type!");
//   }
// }

// if (fuelPrice !== undefined) {
//   let liters = Number(prompt("Enter the amount of fuel (in liters):"));
//   let totalCost = liters * fuelPrice;

//   if (budget >= totalCost) {
//     let balance = budget - totalCost;
//     alert("Purchase successful!");
//     alert("Remaining balance: " + balance + " AZN");
//   } 
//   else {
//     let missing = totalCost - budget;
//     alert("Not enough money!");
//     alert("Total cost: " + totalCost + " AZN");
//     alert("Your budget: " + budget + " AZN");
//     alert("Missing: " + missing + " AZN");
//   }
// }

// let a = 4;
// let b = ++a + 5; 
// console.log(b); 
