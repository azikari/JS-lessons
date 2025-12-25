// let tasks = [];

// function addTask(id, name, status, priority) {
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].id === id) {
//             console.log("Task with this ID already exists.");
//             return;
//         }
//     }
//     // function addTask(id, name, status, priority) {
//     //     const exists = tasks.find(task => task.id === id);

//     //     if (exists) {
//     //         console.log("Task with this ID already exists.");
//     //         return;
//     //     }
//     // }
//     tasks.push({ id, name, status, priority });
//     console.log(`Task '${name}' added`);
// }

// function changeStatus(id, newStatus) {
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i].id === id) {
//             tasks[i].status = newStatus;
//             console.log("Status for task ID " + id + " updated.");
//             return;
//         }
//     }
//     // function changeStatus(id, newStatus) {
//     //     const task = tasks.find(task => task.id === id);

//     //     if (!task) {
//     //         console.log(`Task with this ID ${id} not found`);
//     //         return;
//     //     }

//     //     task.status = newStatus;
//     //     console.log(`Status for task ID ${id} updated to '${newStatus}'.`);
//     // }
//     console.log("Task not found.");
// }

// function changePriority(id, newPriority) {
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === id) {
//       tasks[i].priority = newPriority;
//       console.log("Priority for task ID " + id + " updated.");
//       return;
//     }
//   }

//   console.log("Task not found.");
// }

// function deleteTask(id) {
//   for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i].id === id) {
//       tasks.splice(i, 1);
//       console.log("Task ID " + id + " deleted successfully.");
//       return;
//     }
//   }

//   console.log("Task not found.");
// }

// function showTasks() {
//   console.log("All tasks:");

//   if (tasks.length === 0) {
//     console.log("No tasks.");
//     return;
//   }

//   for (let i = 0; i < tasks.length; i++) {
//     console.log(
//       "ID: " + tasks[i].id +
//       ", Name: " + tasks[i].name +
//       ", Status: " + tasks[i].status +
//       ", Priority: " + tasks[i].priority
//     );
//   }
// }

// addTask(1, "Learn JavaScript", "open", "high");
// addTask(2, "Review CSS", "started", "high");

// changeStatus(1, "completed");
// changePriority(2, "low");

// showTasks();

// deleteTask(1);

// showTasks();

// const now = new Date();
// const hour = now.getHours();
// let message;

// if (hour >= 6 && hour < 12) {
//     message = "Good Morning!";
// } else if (hour >= 12 && hour < 18) {
//     message = "Good Day!";
// } else if (hour >= 18 && hour < 23) {
//     message = "Good Evening!";
// } else {
//     message = "Good Night!";
// }

// alert(message);

// function findVowels(word) {
//     const vowels = "aeiouAEIOU";
//     let result = [];


//     for (let char of word) {
//         if (vowels.includes(char)) {
//             result.push(char);
//         }
//     }

//     return result;
// }

// console.log(findVowels("JavaScript")); 

// function countWords(str) {
//     return str.split(" ").length;
// }

// console.log(countWords("Merry Christmas"));

// function countWords(str) {
//     return str.trim().split(" ").length;
// }

// console.log(countWords(" Merry Christmas "));

// const words = ["frontend", "developer", "beinsystems", "informationtechnology"];

// let longestWord = " ";

// for (let word of words) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }

// console.log("The longest word:", longestWord);

// const words = ["HELLO", "KARIMA", "Arzu", "Javascript", "ARABIC"];

// for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     if (word === word.toUpperCase()) {
//         console.log(`Word: "${word}", Index: ${i}`);
//     }
// }

// const words = ["HeLLo", "KARIMA", "ARZU", "Javascript", "Arabic"];
// for (let i = 0; i < words.length; i++) {
//     const word = words[i];

//     let uppercaseCount = 0;
//     for (let char of word) {
//         if (char >= 'A' && char <= 'Z') {
//             uppercaseCount++;
//         }
//     }

//     if (uppercaseCount > 2) {
//         console.log(`Word: "${word}"`);
//     }
// }

// function extractUppercaseChars(sentence) {
//     let result = "";

//     const words = sentence.split(" ");

//     for (let word of words) {
//         if (word.length > 0) {
//             result += word[0]; 
//         }

//         for (let i = 1; i < word.length; i++) {
//             const char = word[i];
//             if (char >= 'A' && char <= 'Z') {
//                 result += char; 
//             }
//         }
//     }

//     return result;
// }

// console.log(extractUppercaseChars("My name is Karima"));

// function shortenSentences(sentence) {
//     let result = "";

//     const words = sentence.split(" ");

//         const shortenWords = words.map(word => {
//         if (word.length < 4) {
//             return word;
//         } else {
//             const middleCount = word.length - 2;
//             return word[0] + middleCount + word[word.length - 1];
//         }
//     });

//     return shortenWords.join(" ");
// }

// console.log(shortenSentences("My name is Karima"));

// const learningTasks = new Map();

// function addTask(id, name, status, priority) {
//     learningTasks.set(id, { name, status, priority });
// }

// function showTasks() {
//     for (let [id, task] of learningTasks) {
//         console.log(`ID: ${id}`);
//         console.log(`Task: ${task.name}`);
//         console.log(`Status: ${task.status}`);
//         console.log(`Priority: ${task.priority}`);
//     }
// }

// function updateStatus(id, newStatus) {
//     if (learningTasks.has(id)) {
//         const task = learningTasks.get(id);
//         task.status = newStatus;
//         learningTasks.set(id, task);
//     } else {
//         console.log(`Task with ID ${id} not found.`);
//     }
// }

// addTask(1, "Learn HTML", "completed", "high");
// addTask(2, "Learn CSS", "in progress", "medium");
// addTask(3, "Learn JavaScript", "in progress", "high");
// addTask(4, "Learn React", "not started", "high");

// showTasks();

// updateStatus(2, "completed");
// console.log("\nAfter updating CSS status:\n");
// showTasks();

// let numbers = [1, 2, 2, 3, 4, 3, 5]; 
// let uniqueNumbers = []; 
// let countNumbers = {}; 

// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
    
//     if (!uniqueNumbers.includes(num)) {
//         uniqueNumbers.push(num);
//         countNumbers[num] = 1;
//     } else {
//         countNumbers[num] += 1; 
//     }
// }

// console.log(uniqueNumbers);
// console.log(countNumbers);

// let word = "Level";

// let normalized = word.toLowerCase();

// let reversed = ""; 

// for (let i = normalized.length - 1; i >= 0; i--) {
//     reversed += normalized[i]; 
// }

// if (normalized === reversed) {
//     console.log(word + " is a palindrome");
// } else {
//     console.log(word + " is not a palindrome");
// }

// let arr = [1, 5, 3, 7, 2];
// let num = 4; 
// let count = 0; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//         count += 1; 
//     }
// }

// console.log("Number of elements less than", num, "is:", count);
