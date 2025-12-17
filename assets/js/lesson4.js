// for (let i = 1; i < 11; i++) {
//     console.log(i); 
// }

// let i = 1;

// for (; i < 11;) {
//   console.log( i++ );
// }

// let i = 1;
// while (i < 11) {
//     console.log(i);  
//     i++;  
// }



// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 1) continue;
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// for (let i = 2; i < 21; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// let n = 20;
// while (n >= 0) {
//     console.log(n);
//     n--;
// }


// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log(sum);


// let i = 1;
// let sum = 0;

// while (i <= 100) {
//     sum += i;
//     i++;
// }

// console.log(sum);

// let i = 1;
// let sum = 0;

// do {
//   sum += i;
//   i++;
// } while (i <= 100);

// console.log(sum);


// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);


// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);


// let i; 

// do {
//     i = Number(prompt("Enter a number:"));
// } while (i <= 10);

// alert (i);


// let i; 

// do {
//     i = Number(prompt("Enter a number:"));
// } while (i !== 1234);

// alert (i);


// let sum = 0;

// for (let i = 0; i < 51; i++) {
//     if (i % 2 == 1) {
//         sum += i;
//     }
// }
//  console.log(sum);


// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(`5 x ${i} = ${5 * i}`);
//     i++;
// }


// let n = 6; 
// let factorial = 1; 

// for (let i = 1; i <= n; i++) {
//     factorial *= i; 
// }

// console.log(factorial); 


// const arr = [1, 2, 3, 4, 5]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] ** 2);
// }

// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//     console.log(num ** 2);
// }


// const user = {
//   name: "Alex",
//   age: 25,
//   city: "Moscow"
// };

// for (let key in user) {
//     console.log(key);
// }

// for (let key in user) {
//     console.log(user[key]);
// }

// let count = 0;
// for (const key in user) {
//     count++;
// }
// console.log(count);

// let sum = 0;
// for (const key in user) {
//     if (typeof user[key] === "number") {
//         sum += user[key];
//     }
// }
// console.log(sum)


// let numbers = [10, 20, 30, 40, 50];

// for (let value of numbers) {
//     console.log(value); 
// }

// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log(sum);

// let max = numbers[0]; 

// for (const num of numbers) {
//     if (num > max) {
//         max = num;
//     }
// }

// console.log(max); 

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(i, j);
//   }
// }

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} × ${j} = ${i * j}`);
//   }
// }

// for (let i = 1; i <= 4; i++) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += "* ";
//   }
//   console.log(line);
// }

// for (let i = 1; i <= 10; i++) {       
//     let row = "";                       
//     for (let j = 1; j <= 10; j++) {  
//         row += (i * j) + "\t";        
//     }
//     console.log(row);                
// }


// let n = 5;
// for (let i = 1; i <= n; i++) {       
//     let line = "";
//     for (let j = 1; j <= i; j++) {      
//         line += "*";
//     }
//     console.log(line);                    
// }


// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(`${i} × ${j} = ${i*j}`);
//     }
// }


// const arr = [
//   [10, 20],
//   [30, 40]
// ];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// const rows = 4;
// for (let i = 1; i <= rows; i++) {
//     let line = "";
//     for (let j = 1; j <= i; j++) {
//         line += "#";
//     }
//     console.log(line);
// }

// const rows = 4;
// for (let i = 0; i < rows; i++) {  
//     let line = "";
//     for (let j = 0; j <= i; j++) { 
//         line += "#";
//     }
//     console.log(line);
// }

// const nums = [
//   [1, 2],
//   [3, 4]
// ];

// let sum = 0; 

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums[i].length; j++) {
//         sum += nums[i][j];
//     }
// }

// console.log("Сумма всех элементов:", sum);


// let number = 5;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }