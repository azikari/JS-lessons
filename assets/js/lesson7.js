// let map = new Map();

// map.set("1", "str1");
// map.set("2", "str2");
// map.set(1, "num1"); 
// map.set(2, "num2"); 
// map.set(true, "bool1");  

// alert(map.get(2)); 
// alert(map.get("1")); 

// alert(map.size); 


// let map = new Map();

// map.set("name", "Arzu");
// map.set("age", 25);
// map.set(1, "One");

// console.log(map.get("name"));  
// console.log(map.get(1));      

// console.log(map.has("age"));     
// console.log(map.has("address"));  

// console.log(map.size); 

// map.forEach((value, key) => {
//     console.log(key, value);
// });

// map.delete("age");
// console.log(map.size); 

// map.clear();
// console.log(map.size); 


// let set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("apple"); 
// set.add(1);

// console.log(set.has("apple"));  
// console.log(set.has("orange"));  

// set.forEach(value => {
//     console.log(value);
// });

// console.log(set.size);  

// set.delete(1);
// console.log(set.size);  

// set.clear();
// console.log(set.size);


// let map = new Map();

// map.set("1", "str1")
//   .set(1, "num1")
//   .set(true, "bool1");

// console.log(map.get("1"));
// console.log(map.get(1));  
// console.log(map.get(true));



// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);

// for (let vegetable of recipeMap.keys()) {
//   alert(vegetable);
// }

// for (let amount of recipeMap.values()) {
//   alert(amount); 
// }

// for (let entry of recipeMap) { 
//   alert(entry); 
// }

// recipeMap.forEach((value, key, map) => {
//   alert(`${key}: ${value}`); 
// });


// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get('name') );


// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// alert(prices.orange); 


// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map);

// alert(obj.orange); 


// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// alert(set.size); 

// for (let user of set) {
//   alert(user.name); 
// }


// let set = new Set(["апельсин", "яблоко", "банан"]);

// for (let value of set) alert(value);

// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });


// Task
// function unique(arr) {
//     return [...new Set(arr)];;

// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) );


// function greet(...names) {
//   console.log(names); 
// }

// greet('Arzu', 'John', 'Alice'); 


// const person = { name: 'Arzu', age: 25, job: 'developer' };
// const { name, ...rest } = person;
// console.log(rest);


// const fruits = ['apple', 'banana'];
// const moreFruits = ['orange', 'grape'];

// const allFruits = [...fruits, ...moreFruits];
// console.log(allFruits); 

// const person1 = { name: 'Arzu', age: 25 };
// const person2 = { job: 'developer' };

// const mergedPerson = { ...person1, ...person2 };
// console.log(mergedPerson);

// Tasks
// let studentsMap = new Map([
//     ["Arzu", 5],
//     ["Karima", 4],
//     ["Omar", 5],
// ]);

// console.log(studentsMap.get("Arzu"));

// studentsMap.delete("Arzu");
// console.log(studentsMap.size);


// let names = ["Alice", "Bob", "Alice", "John", "Bob"];
// let map = new Map();

// for (let name of names) {
//   if (map.has(name)) {
//     map.set(name, map.get(name) + 1);
//   } else {
//     map.set(name, 1);
//   }
// }

// console.log(map);


// let numbersSet = new Set([1, 2, 2, 3, 4, 4, 5]);
// console.log(numbersSet);


// let set = new Set();

// set.add("apple");
// set.add("banana");
// set.add("orange"); 
// set.add("strawberry");

// console.log(set.has("apple"));  
// console.log(set.has("orange"));  


// function sumAll(...numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     return(sum);
// }

// console.log(sumAll(10, 20, 30)); 


// const person = { name: "Alice", age: 25, job: "developer" };
// const { name, ...rest } = person;
// console.log(name);
// console.log(rest); 


// let fruits1 = ["apple", "banana"];
// let fruits2 = ["orange", "grape"];
// let allFruits = [...fruits1, ...fruits2];
// console.log(allFruits);


// const person = { name: "Bob", age: 30 };

// const newPerson = { ...person, job: "developer" };

// console.log(newPerson);


// let citiesMap = new Map([
//     ["Sumgait", 400000],
//     ["Baku", 2400000],
//     ["Ganja", 350000],
// ]);

// console.log(citiesMap.get("Sumgait"));

// citiesMap.set("Baku", 2500000); 
// console.log(citiesMap);

// citiesMap.delete("Ganja");
// console.log(citiesMap.size);


// let a = [1, 2];
// let b = [3, 4];
// console.log(a.concat(b)); 

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combined = arr1.concat(arr2);
// console.log(combined); 

// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(0, 3); 
// console.log(arr); 

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// arr.copyWithin(2, 4, 7);
// console.log(arr);

// let arr = ['a', 'b', 'c'];
// let iterator = arr.entries();
// for (let [index, value] of iterator) {
//   console.log(index, value);
// }


// let arr = [1, 2, 3, 4];
// let result = arr.every(num => num > 0);
// console.log(result);

// let arr = [2, 4, 6];
// console.log(arr.every(n => n % 2 === 0));

// let arr = [1, 2, 3, 4];
// arr.fill(0, 1, 3);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let even = arr.filter(num => num % 2 === 0);
// console.log(even); 

// let arr = [1, 2, 3, 4];
// console.log(arr.find(n => n > 2));

// let arr = [1, 2, 3, 4];
// let index = arr.findIndex(num => num > 2);
// console.log(index);

// let arr = [1, 2, 3, 4];
// let result = arr.findLast(num => num < 4);
// console.log(result);

// let arr = [1, 2, 3, 4];
// let index = arr.findLastIndex(num => num < 4);
// console.log(index); 

// let arr = [1, [2, [3, 4]]];
// console.log(arr.flat(2));

// let arr = [1, 2, 3];
// console.log(arr.flatMap(n => [n, n*2]));

// let arr = [1, 2, 3];
// arr.forEach(n => console.log(n * 2));

// let str = "hello";
// console.log(Array.from(str));

// let arr = [1, 2, 3];
// console.log(arr.includes(2));
// console.log(arr.includes(4)); 

// let arr = [1, 2, 3, 2];
// console.log(arr.indexOf(2)); 

// console.log(Array.isArray([1, 2]));
// console.log(Array.isArray("str")); 

// let arr = ["a", "b", "c"];
// console.log(arr.join("-")); 

// let arr = ['a', 'b', 'c'];
// let iterator = arr.keys();
// for (let key of iterator) {
//   console.log(key);
// }

// let arr = [1, 2, 3, 2];
// console.log(arr.lastIndexOf(2));

// let arr = [1, 2, 3];
// console.log(arr.map(n => n*2));

// let arr = [1, 2, 3];
// console.log(arr.pop()); 
// console.log(arr); 

// let arr = [1, 2];
// arr.push(3);
// console.log(arr); 

// let arr = [1, 2, 3];
// console.log(arr.reduce((sum, n) => sum + n, 0)); 

// let arr = ["a", "b", "c"];
// console.log(arr.reduceRight((acc, val) => acc + val, ""));

// let arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

// let arr = [1, 2, 3];
// let shifted = arr.shift();
// console.log(shifted); 
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6];
// let sliced = arr.slice(2, 5);
// console.log(sliced); 

// let arr = [1, 2, 3];
// console.log(arr.some(n => n > 2));

// let arr = [3, 1, 2];
// arr.sort();
// console.log(arr);

// let arr = [1, 2, 3];
// arr.splice(1, 1, "a", "b");
// console.log(arr); 

// let arr = [1, 2, 5, 6];
// arr.splice(2, 0, 3, 4);
// console.log(arr); 

// let arr = [3, 4];
// arr.splice(0, 0, 1, 2);
// console.log(arr); 

// let arr = [1, 2];
// arr.splice(arr.length, 0, 3, 4);
// console.log(arr); 

// let arr = [10, 20, 30, 40];
// let removed = arr.splice(1, 2);
// console.log(removed);
// console.log(arr); 

// let arr = [1, 2, 3, 4];
// arr.splice(-2, 1);
// console.log(arr); 

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2);
// console.log(arr);

// let arr = [1000, 2000];
// console.log(arr.toLocaleString()); 

// let arr = [1, 2, 3];
// console.log(arr.toString());

// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr);

// let arr = ["a", "b"];
// for (let value of arr.values()) {
//   console.log(value); 
// }

// let fruits = ["apple", "banana"];
// fruits.push("orange");
// fruits.pop();
// console.log(fruits);

// let numbers = [2, 3, 4];
// numbers.unshift(1);
// numbers.shift();
// console.log(numbers);

// let nums = [1, 2, 3, 4];
// nums.forEach(n => console.log(n * 2));

// let nums = [1, 2, 3, 4];
// let doubled = nums.map(num => num * 2);
// console.log(doubled); 

// let ages = [12, 18, 25, 14, 30];
// let moreThan = ages.filter(num => num > 18);
// console.log(moreThan);

// let users = ["Alice", "Bob", "John"];
// console.log(users.includes("Bob"));

// let letters = ["a", "b", "c", "b"];
// console.log(letters.indexOf("b"));

// let numbers = [10, 20, 30, 40, 50];
// let sliced = numbers.slice(1, 4);
// console.log(sliced);

// let animals = ["cat", "dog", "lion", "tiger"];
// animals.splice(2, 1, "elephant");
// console.log(animals);

// let prices = [100, 200, 300];
// console.log(prices.reduce((sum, n) => sum + n, 0)); 

// let nums = [1, 3, 5, 8];
// console.log(nums.some((n => n % 2 === 0)));

// let scores = [80, 90, 100];
// console.log(scores.every(n => n > 70));

// let words = ["Hello", "world"];
// console.log(words.join(" ")); 

// let numbers = [1, 2, 3, 4, 5, 6];
// let doubled = numbers.filter(n => n % 2 === 0);
// let multiplied = doubled.map(n => n * 10);
// console.log(multiplied);
// console.log(multiplied.reduce((sum, n) => sum + n, 0));

// let numbers = [5, 12, 8, 20, 3, 15];
// let moreThan = numbers.filter(n => n > 10);
// console.log(moreThan);
// let multiplied = moreThan.map(n => n * 5);
// console.log(multiplied);
// console.log(multiplied.reduce((sum, n) => sum + n, 0));

// let prices = [100, 250, 400, 50, 600];
// let moreThan = prices.filter(price => price > 200)
// console.log(moreThan);
// let discount = moreThan.map(price => price * 0.9);
// console.log(discount);
// console.log(discount.reduce((sum, price) => sum + price, 0));

// let data = ["10", "20", "hello", "30", "JS"];
// let numbersOnly = data.filter(value => !isNaN(Number(value)));
// console.log(numbersOnly);
// let numbers = numbersOnly.map(value => Number(value));
// console.log(numbers);
// console.log(numbers.reduce((sum, n) => sum + n, 0));

// let numbers = [1,2,3,4,5,6];
// let sum = numbers
//   .filter(n => n % 2 === 0)
//   .map(n => n * 3)
//   .reduce((total, n) => total + n, 0);
// console.log(sum); 