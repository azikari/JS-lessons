
// const arr = [];
// arr[0] = "A";
// arr[3] = "B";

// console.log(arr);


// const a = [1, 2, 3];
// const b = [...a];

// b.push(4);

// console.log(a); 
// console.log(b); 


// const a = [1, 2, 3];
// const b = [...a];

// b.unshift(4);

// console.log(a); 
// console.log(b); 


// const a = [1, 2];
// const b = [3, 4];
// const c = [...a, ...b]; 
// console.log(c);


// const a = [1, 2];
// const b = a;

// b.push(3);

// console.log(a);


// console.log(
//   Array.from([1, 2, 3], x => x * 2)
// );


// const a = [1, 2, 3];
// const b = a.slice();

// b.pop();

// console.log(a); 
// console.log(b); 


// const a = [1, 2, 3];
// const b = Array.from(a);

// b.push(4);

// console.log(a);
// console.log(b);


// const a = [1, 2];
// const b = a.concat();

// b.push(3);
// console.log(a);
// console.log(b);


// function showMessage() {
//   let message = "Привет, я JavaScript!";

//   alert( message );
// }
// showMessage();


// let userName = 'Karima';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); 


// let userName = 'Karima';

// function showMessage() {
//   userName = "Arzu"; 

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName );

// showMessage();

// alert( userName ); 


// function checkAge(age) {
//   return age >= 18;
// }

// function showMovie(age) {
//   if (!checkAge(age)) {
//     alert("Вам еще рано смотреть фильм");
//     return;
//   }

//   alert("Вам показывается кино");
// }

// showMovie(20);
// showMovie(15); 


// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i );
//   }
// }

// showPrimes(20);


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }

// alert(checkAge(25));


// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// alert(checkAge(17));


// function min(a, b) {
//   return (a < b) ? a : b;
// }

// alert(min(2, 5));  
// alert(min(3, -1)); 
// alert(min(1, 1));


// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;  
//   }
//   return result; 
// }

// let x = Number(prompt("Enter the number x:"));
// let n = Number(prompt("Enter the exponent n (non-negative):"));

// if (n < 0) {
//   alert("The exponent must be non-negative!");
// } else {
//   let result = pow(x, n);
//   alert(`${x} to the power of ${n} = ${result}`);
// }


// function makePalindrome(num) {
//   const str = String(num);      
//   const reversed = str.split("").reverse().join(""); 
//   return Number(str + reversed); 
// }

// console.log(makePalindrome(123)); 
// console.log(makePalindrome(56));  


// function sayHello() {
//     console.log("Hello!");
// }

// sayHello();

// function greet(name) {
//     let message = 'Hello, ' + name + '!';
//     alert(message);
// }

// greet("Masha");
// greet("Ivan");  


// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5)); 
// console.log(sum(10, 20)); 


// function isEven (n) {
//     return n % 2 === 0;

// }

// console.log(isEven(4)); 
// console.log(isEven(7));


// function maxNumber(a, b) {
//     return (a > b) ? a : b;
// }

// console.log(maxNumber(10, 20)); 
// console.log(maxNumber(50, 30)); 


// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));
// console.log(sumArray([10, 20, 30])); 


// function findEvenNumbers(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i]);

//         }
//     }
//     return result;
// }
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumEvenNumbers([1, 2, 3, 4, 6, 7, 8, 9, 10])); 


// function getStringLength(str) {
//     return str.length;
// }
// console.log(getStringLength("hello")); 
// console.log(getStringLength("JavaScript")); 


// function getFirstChar(str) {
//     return str[0];
// }
// console.log(getFirstChar("apple")); 


// function getMaxNumber(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(getMaxNumber([1, 5, 3, 9, 2, 11])); 


// function countElements(arr) {
//     return arr.length;
// }
// console.log(countElements([1, 2, 3, 4])); 


// function numbersGreaterThanTen(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 10) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(numbersGreaterThanTen([5, 12, 8, 20, 3, 15]));


// function startsWithA (arr) {
//     return arr[0] === "a"
// }
// console.log(startsWithA("apple"));
// console.log(startsWithA("banana"));


// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4)); 


// function multiply(a, b) {
//     return a * b;
// }
// const result = multiply(4, 5); 
// console.log(result);


// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log(factorial(5)); 


// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2); 
//     }
// }

// console.log(fibonacci(6)); 


// function makeMultiplier(multiplier) {
//   return function(number) {
//     return number * multiplier;
//   };
// }

// const multiplyBy2 = makeMultiplier(2);
// const multiplyBy3 = makeMultiplier(3);

// console.log(multiplyBy2(10)); 
// console.log(multiplyBy3(10)); 
