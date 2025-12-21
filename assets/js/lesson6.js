// let str = "Hello";
// console.log(str.charAt(1)); 

// console.log(str.charCodeAt(1));

// let str2 = " World";
// console.log(str.concat(str2)); 

// console.log(str.includes("ell")); 

// console.log(str.endsWith("lo")); 

// console.log(str.indexOf("l"));

// console.log(str.lastIndexOf("l")); 

// let a = "apple";
// let b = "banana";
// console.log(a.localeCompare(b)); 

// console.log(str.match(/l/g)); 

// console.log(str.repeat(3)); 

// console.log(str.replace("l", "x")); 
// console.log(str.replaceAll("l", "x")); 

// console.log(str.slice(2, 5)); 

// console.log(str.split(""));

// console.log(str.startsWith("He"));

// console.log(str.substring(1, 4)); 

// console.log(str.toLowerCase()); 

// console.log(str.toUpperCase()); 

// let str3 = "  Hello  ";
// console.log(str3.trim());
// console.log(str3.trimStart()); 
// console.log(str3.trimEnd()); 

// let strObj = new String("Hello");
// console.log(strObj.valueOf()); 
// console.log(typeof strObj.valueOf()); 

// let str = "JavaScript";
// console.log(str.charAt(4)); 
// console.log(str.charCodeAt(4));

// let str = "Hello";
// let str2 = " World!"
// console.log(str.concat(str2));

// let str = "Frontend";
// console.log(str.includes("end"));
// console.log(str.startsWith("Front"));
// console.log(str.endsWith("end"));

// let str = "banana";
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

// let a = "apple";
// let b = "orange";
// console.log(a.localeCompare(b)); 
// console.log(b.localeCompare(a)); 

// let str = "Hello World";
// console.log(str.match(/o/g));
// console.log(str.search(/o/));

// let str = "I like cats. Cats are cute."
// console.log(str.replace("Cats", "Dogs"));
// console.log(str.replaceAll("Cats", "Dogs"));

// let newStrIgnoreCase = str.replace(/cats/gi, "Dogs");
// console.log(newStrIgnoreCase);


// #Task
// №1
// let a = prompt("Enter the number:");
// let digits = a.split("");

// let sum = 0;

// if (digits.length === 1) {
//     console.log("It is NOT an Armstrong number");
// } else {
//     for (let i = 0; i < digits.length; i++) {
//         sum += Number(digits[i]) ** 3;
//     }

//     console.log("Sum of cubes:", sum);
// }

// №2
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} × ${j} = ${i * j}`);
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     let row = "";
//     for (let j = 1; j <= 10; j++) {
//         row += `${i}×${j}=${i*j}\t`;
//     }
//     console.log(row);
// }

// №3
// const users = [17, 21, 22, 30, 33, 43, 48];

// console.log("Younger than 30:");
// for (let i = 0; i < users.length; i++) {
//     if (users[i] >= 30) continue;
//     console.log(users[i]);
// }

// console.log("Older than 30:");
// for (let i = 0; i < users.length; i++) {
//     if (users[i] <= 30) continue;
//     console.log(users[i]);
// }

// №4
// const arr = [10, 16, 27, 36, 44, 57, 62, 74, 83, 92];

// sum = 0; 
// let i = 0;

// while (i < arr.length) {
//     sum += arr[i];
//     i++;
// }

// let average = sum / arr.length; 
// // let average = sum / 10; 
// console.log("Average:", average);

// №5
// let a = Number(prompt("Enter the number:"));

// let divisor = Number(prompt("Enter the divisor:"));

// let remainder = a % divisor;

// console.log(remainder);

// №6
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let max = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(max);


// №7
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let min = arr[0];
// let max = arr[0];
// let minIndex = 0;
// let maxIndex = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         maxIndex = i;
//     }

//     if (arr[i] < min) {
//         min = arr[i];
//         minIndex = i;
//     }
// }
// [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];

// console.log(arr);

// №8
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let min = arr[0];
// let max = arr[0];
// sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }

//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// let i = 0;
// while (i < arr.length) {
//     if (arr[i] !== min && arr[i] !== max) {
//         sum += arr[i];
//     }
//     i++;
// }

// console.log(sum);

// №9
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];

// let num = Number(prompt("Enter a number:"));

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//         found = true;
//         break; 
//     }
// }

// if (found) {
//     console.log(`${num} is in the array`);
// } else {
//     console.log(`${num} is not in the array`);
// }

// №10
// let arr = [203, 19, 2, 13, 196, 86, 35, 77];
// let oneDigit = 0;
// let twoDigits = 0;
// let threeDigits = 0;

// for (let i = 0; i < arr.length; i++) {
//     let digits = arr[i].toString();

//     if (digits.length === 1) {
//         oneDigit++;
//     } else if (digits.length === 2) {
//         twoDigits++;
//     } else if (digits.length === 3) {
//         threeDigits++;
//     }
// }

// console.log(oneDigit);
// console.log(twoDigits);
// console.log(threeDigits);

// functions
// №1
// function isPrime(number) {
//   if (number <= 1) return false;

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false; 
//     }
//   }

//   return true; 
// }

// console.log(isPrime(7));  
// console.log(isPrime(10));
// console.log(isPrime(1));  
// console.log(isPrime(13)); 

// №2
// function isEven(number) {
//     if (number % 2 === 0) {
//         return "The number is even";
//     } else {
//         return "The number is odd"
//     }
// }

// console.log(isEven(4)); 
// console.log(isEven(7));  

// №4
// function double(number) {
//     return number * 2;
// }

// console.log(double(20));

// №5
// function factorial(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5)); 

// №6
// function square(number) {
//     return number * number;
// }

// console.log(square(5));

// №7
// function isPositive(number) {
//     if (number > 0 ) return true;
//     else {
//         return false;
//     }
// }

// console.log(isPositive(5));  
// console.log(isPositive(-3)); 
// console.log(isPositive(0)); 

// #Task
// №1
// function calculate(a, b, operation) {
//   if (operation === "add") {
//     return a + b;
//   } else if (operation === "subtract") {
//     return a - b;
//   } else if (operation === "multiply") {
//     return a * b;
//   } else if (operation === "divide") {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   } else {
//     return "Unknown operation";
//   }
// }

// console.log(calculate(5, 3, "add"));     
// console.log(calculate(10, 2, "divide")); 
// console.log(calculate(7, 2, "multiply")); 
// console.log(calculate(9, 4, "subtract")); 
// console.log(calculate(5, 0, "divide")); 

// №2
// function evenOdd(...numbers) { 
//     const even = [];
//     const odd = [];

//     for (let num of numbers) {
//         if (num % 2 === 0) {
//             even.push(num); 
//         } else {
//             odd.push(num);  
//         }
//     }

//     return [even, odd]; 
// }

// const [evenNumbers, oddNumbers] = evenOdd(14, 20, 35, 40, 57, 60, 100);

// console.log("Even numbers:", evenNumbers);
// console.log("Odd numbers:", oddNumbers);

// №3
// function sumElement(numbers) {
//     let sum = 0;

//     for (let num of numbers) {
//         if (num % 4 === 0 && num % 5 === 0) {
//             sum += num;
//         }
//     }

//     return sum;
// }

// const result = sumElement([14, 20, 35, 40, 57, 60, 100]);
// console.log(result); 

// №4
// function countChar(str, char) {
//     let count = 0

//     for (let symbol of str) {
//         if (symbol == char) {
//             count += 1;
//         }
//     }
//     return count;
// }

// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countChar("hello world", "l"));
// console.log(countChar("javascript", "a"));  

// №5
// function checkNumber(number) {
//     if (number <= 0) {
//         return "Invalid number";
//     }

//     let sum = 0;

//     for (let i = 1; i < number; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     if (sum > number) {
//         return "Abundant";
//     } else if (sum < number) {
//         return "Deficient";
//     } else {
//         return "Perfect";
//     }
// }

// console.log(checkNumber(12));
// console.log(checkNumber(13));
// console.log(checkNumber(6));
// console.log(checkNumber(1));

// №6
// function squareNumbers(numbers) {
//     const squares = [];

//     for (let num of numbers) {
//         squares.push(num * num);
//     }
//     return squares;
// }

// const arr = [14, 20, 35, 40, 57, 60, 100];
// console.log(squareNumbers(arr));

// №7
// const people = [
//   { name: "Arzu", age: 21 },
//   { name: "Karima", age: 22 },
//   { name: "Omar", age: 17 }
// ];

// let minAge = people[0].age;
// let maxAge = people[0].age;

// for (let person of people) {
//     if (person.age < minAge) {
//         minAge = person.age;
//     }

//     if (person.age > maxAge) {
//         maxAge = person.age;
//     }
// }

// let difference = maxAge - minAge;

// console.log([minAge, maxAge, difference]);