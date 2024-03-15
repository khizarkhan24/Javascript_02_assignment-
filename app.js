// Task 1: Check if a character is a number, uppercase letter, or lowercase letter
// function checkCharacter(char) {
//     const ascii = char.charCodeAt(0);
//     if (ascii >= 48 && ascii <= 57) {
//         console.log(`${char} is a number.`);
//     } else if (ascii >= 65 && ascii <= 90) {
//         console.log(`${char} is an uppercase letter.`);
//     } else if (ascii >= 97 && ascii <= 122) {
//         console.log(`${char} is a lowercase letter.`);
//     } else {
//         console.log(`${char} is not a number or a letter.`);
//     }
// }

// Task 2: Compare two integers and display the larger one or if they are equal
// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is larger.`);
//     } else if (num2 > num1) {
//         console.log(`${num2} is larger.`);
//     } else {
//         console.log('The two integers are equal.');
//     }
// }

// Task 3: Check if a number is positive, negative, or zero
// function checkNumber(num) {
//     if (num > 0) {
//         console.log(`${num} is positive.`);
//     } else if (num < 0) {
//         console.log(`${num} is negative.`);
//     } else {
//         console.log(`${num} is zero.`);
//     }
// }

// Task 4: Check if a character is a vowel
// function isVowel(char) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(char.toLowerCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let correctPassword = "yourPassword"; // Replace with your actual password

// function validatePassword(userPassword) {
//     if (!userPassword) {
//         console.log("Please enter your password");
//         return;
//     }

//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password");
//     } else {
//         console.log("Incorrect password");
//     }
// }

// // Test with a user-entered password
// let userEnteredPassword = prompt("Enter your password:");
// validatePassword(userEnteredPassword);

// let correctPassword = "yourPassword"; // Replace with your actual password

// function validatePassword(userPassword) {
//     if (!userPassword) {
//         console.log("Please enter your password");
//         return;
//     }

//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password");
//     } else {
//         console.log("Incorrect password");
//     }
// }

// Test with a user-entered password
// let correctPassword = "yourPassword"; // Replace with your actual password

// function validatePassword(userPassword) {
//     if (!userPassword) {
//         console.log("Please enter your password");
//         return;
//     }

//     if (userPassword === correctPassword) {
//         console.log("Correct! The password you entered matches the original password");
//     } else {
//         console.log("Incorrect password");
//     }
// }

// Test with a user-entered password
// let userEnteredPassword = prompt("Enter your password:");
// validatePassword(userEnteredPassword);











// Declare an empty array using JS literal notation to store student names in future.
// let studentNamesLiteral = [];

// // Declare an empty array using JS object notation to store student names in future.
// let studentNamesObject = new Array();

// // Declare and initialize a strings array.
// let stringsArray = ["Hello", "World", "JavaScript"];

// // Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4, 5];

// // Declare and initialize a boolean array.
// let booleanArray = [true, false, true];

// // Declare and initialize a mixed array.
// let mixedArray = ["text", 42, true];

// Declare and Initialize an array and store available education qualifications in Pakistan
// let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// console.log("Qualifications:");
// qualificationsArray.forEach((qualification, index) => {
//     console.log((index + 1) + ") " + qualification);
// });




// // Declare an empty array using JS literal notation to store student names in future.
// let studentNamesLiteral = [];

// // Declare an empty array using JS object notation to store student names in future.
// let studentNamesObject = new Array();

// // Declare and initialize a strings array.
// let stringsArray = ["Hello", "World", "JavaScript"];

// // Declare and initialize a numbers array.
// let numbersArray = [1, 2, 3, 4, 5];

// // Declare and initialize a boolean array.
// let booleanArray = [true, false, true];

// // Declare and initialize a mixed array.
// let mixedArray = ["text", 42, true];

// // Declare and Initialize an array and store available education qualifications in Pakistan
// let qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// console.log("Qualifications:");
// qualificationsArray.forEach((qualification, index) => {
//     console.log((index + 1) + ") " + qualification);
// });

// // Problem 10
// let studentScores = [320, 230, 480, 120];
// studentScores.sort((a, b) => a - b);
// console.log("Ordered Scores of Students: " + studentScores.join(","));

// // Problem 11
// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let selectedCities = cities.slice(2, 4);
// console.log("Selected cities list: " + selectedCities.join(","));

// // Problem 12
// let arr = ["This ", " is ", " my ", " cat"];
// let singleString = arr.join("");
// console.log(singleString);

// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     // Function to add an item to the queue
//     enqueue(item) {
//         this.items.push(item);
//     }

//     // Function to remove an item from the queue
//     dequeue() {
//         if(this.isEmpty())
//             return "Underflow";
//         return this.items.shift();
//     }

//     // Function to check if the queue is empty
//     isEmpty() {
//         return this.items.length == 0;
//     }
// }

// // Creating a new Queue object
// let myQueue = new Queue();

// // Adding items to the queue
// myQueue.enqueue("keyboard");
// myQueue.enqueue("mouse");
// myQueue.enqueue("printer");
// myQueue.enqueue("monitor");

// // Printing items as they are removed from the queue
// console.log(myQueue.dequeue());  // Output: keyboard 
// console.log(myQueue.dequeue());  // Output: mouse 
// console.log(myQueue.dequeue());  // Output: printer 
// console.log(myQueue.dequeue());  // Output: monitor 







// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     // Function to add an item to the stack
//     push(item) {
//         this.items.push(item);
//     }

//     // Function to remove an item from the stack
//     pop() {
//         if(this.isEmpty())
//             return "Underflow";
//         return this.items.pop();
//     }

//     // Function to check if the stack is empty
//     isEmpty() {
//         return this.items.length == 0;
//     }
// }

// // Creating a new Stack object
// let myStack = new Stack();

// // Adding items to the stack
// myStack.push("keyboard");
// myStack.push("mouse");
// myStack.push("printer");
// myStack.push("monitor");

// // Printing items as they are removed from the stack
// console.log(myStack.pop());  // Output: monitor 
// console.log(myStack.pop());  // Output: printer 
// console.log(myStack.pop());  // Output: mouse 
// console.log(myStack.pop());  // Output: keyboard 





// // Array of phone manufacturers
// let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Start of the select element
// let dropdown = "<select>";

// // Loop through the array and create an option element for each manufacturer
// for(let i = 0; i < manufacturers.length; i++) {
//     dropdown += `<option value="${manufacturers[i]}">${manufacturers[i]}</option>`;
// }

// // End of the select element
// dropdown += "</select>";

// // Use document.write() to write the dropdown menu to the document
// document.write(dropdown);
