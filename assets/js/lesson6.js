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