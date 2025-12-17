// let fruits = ["apple", "banana", "orange"];

// // console.log(fruits[0]); 
// // console.log(fruits[1]); 
// // console.log(fruits[2]); 

// fruits[1] = "pear";
// console.log(fruits); 

// console.log(fruits.length); 

// fruits.push("kiwi");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);


// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits[fruits.length-1] ); 


// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let i = 0; i < arr.length; i++) {
//   alert( arr[i] );
// }


// let fruits = ["Яблоко", "Апельсин", "Слива"];

// for (let fruit of fruits) {
//   alert( fruit );
// }


// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let key in arr) {
//   alert( arr[key] ); 
// }


// let fruits = [];
// fruits[123] = "Яблоко";

// alert( fruits.length ); 


// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; 
// alert( arr ); 

// arr.length = 5; 
// alert( arr[3] );


// let styles = ["Джаз", "Блюз"];
// console.log(styles);

// styles.push("Рок-н-ролл");
// console.log(styles);

// styles[1] = "Классика";
// console.log(styles);

// styles.shift("Джаз");
// console.log(styles);

// styles.unshift("Рэп", "Регги");
// console.log(styles);


// let arr1 = new Array(4);
// let arr2 = new Array(10, 20, 30);
// console.log(arr1);
// console.log(arr2);


// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// console.log(fruits[0]); 
// console.log(fruits[fruits.length - 1]); 

// fruits[1] = "Pear";

// console.log(fruits);


// let numbers = [10, 20, 30];
// numbers.push("40");
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.unshift("5");
// console.log(numbers);

// numbers.shift();
// console.log(numbers);


// let users = ["Anna", "Ivan", "Maria", "Alex"];
// console.log(users.length);

// users.shift();
// console.log(users.length);

// users.unshift("Karima");
// console.log(users.length);


// let colors = ["red", "green", "blue"];
// for (let i = 0; i < colors.length; i++) {
//     console.log( colors[i] );
// }

// for (let color of colors) {
//   console.log(color);
// }

// let data = [16, "Karima", true, null, { name: "Alex" }];

// console.log(data);


// let fruits = ["Apple", "Banana", "Orange", "Strawberry"];
// fruits.pop()
// console.log(fruits);

// let numbers = [1, 2, 3];
// numbers.push("4");
// numbers.push("5");
// console.log(numbers);


// let colors = ["red", "green", "blue", "black"];
// colors.pop();
// console.log(colors);

// colors.pop();
// console.log(colors);


// let names = ["Ivan", "Alex"];
// names.unshift("Maria");
// names.unshift("Olga");
// console.log(names);

// let cars = ["BMW", "Audi", "Toyota"];
// cars.shift();
// console.log(cars);

// cars.shift();
// console.log(cars);


// let fruits = ["Apple", "Banana", "Orange", "Mango"];

// // Удаляем "Banana" (индекс 1)
// fruits.splice(1, 1);

// // Удаляем "Mango" (после первого удаления он стал последним → индекс 2)
// fruits.splice(2, 1);

// console.log(fruits);


// let nums = [10, 20, 40, 50];

// // Вставляем 30 на индекс 2
// nums.splice(2, 0, 30);

// console.log(nums);


// let emptyArray = [];
// emptyArray.unshift("HTML");
// emptyArray.push("CSS");
// emptyArray.push("JavaScript");
// emptyArray.splice(1, 1);
// emptyArray.unshift("React");
// console.log(emptyArray);


// let queue = ["User1", "User2", "User3"];
// queue.shift();
// queue.push("User4");
// console.log(queue);


// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }

// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }


// let i = 3;
// while (i) alert(i--);


// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// for (let i = 0; i < 3; i++) {
//   alert(i);
// }


// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; 

//   sum += value;

// }
// alert( 'Сумма: ' + sum );


// #1
// let arr = [1, 2, 3, 4, 5, 6];

// if (arr.length > 5) {
// alert("The array length is greater than 5"); 
// } else if (arr.length === 5) {
//   alert("The array length is exactly 5");
// } else {
//   alert("The array length is less than 5");
// }


// #2
// let people = [];

// let name = prompt("Write a name:");

// let confirmAdd = false; 

// if (!name) {
//   alert("Name was not entered!");
// } else {
//   confirmAdd = confirm("Add this name to the list?");
// }

// if (confirmAdd) {
//   people.push(name);
//   alert("Name added");
// } else {
//   alert("Name was not added");
// }

// let action = prompt(
//   "Add to the beginning (1), remove from the beginning (2), remove from the end (3)"
// );

// if (action === "1") {
//   let newName = prompt("Write a name:");
//   if (newName) {
//     people.unshift(newName);
//   }
// } else if (action === "2") {
//   people.shift();
// } else if (action === "3") {
//   people.pop();
// }

// alert("Final list: " + people);


// #3
// let score = Number(prompt("What is your score?"));
// let grade = false;

// if (score >= 90 && score <= 100) {
//     grade = "A";
//     console.log(grade);
// } else if (score >= 75 && score <= 89) {
//     grade = "B";
//     console.log(grade);
// } else if (score >= 60 && score <= 74) {
//     grade = "C";
//     console.log(grade);
// } else if (score >= 0 && score < 60) {
//     grade = "F";
//     console.log(grade);
// } else {
//     console.log("Invalid score");
// }


// #4
// let username = prompt("Enter your username:");
// let password = prompt("Enter your password:");

// if (username === "azikari" && password === "162004") {
//     console.log("Login successful");
// } else {
//     console.log("Invalid username or password");
// }


// #5
// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// if (num1 === num2) {
//     console.log("The numbers are equal");
// } else {
//     let max = (num1 > num2) ? num1 : num2;
//     console.log("The larger number is: " + max);
// }


// let num1 = Number(prompt("Enter the first number:"));
// let num2 = Number(prompt("Enter the second number:"));

// if (num1 > num2) {
//     console.log("The larger number is " + num1);
// } else if (num2 > num1) {
//     console.log("The larger number is " + num2);
// } else {
//     console.log("The numbers are equal");
// }