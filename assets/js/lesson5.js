
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
