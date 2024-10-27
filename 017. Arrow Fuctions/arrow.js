// Define an object called 'users' with properties and methods
const users = {
    username: "unknown bro", // Initial username
    price: 9494,              // A sample price (could represent user balance, etc.)
    time: "morning",          // Time of day (used for context in the application)
    islogged: false,          // Boolean indicating if the user is logged in

    // Define a method 'welcomeMessage' to display a personalized message
    welcomeMessage: function() {
        console.log(`${this.username} welcome to the website`);
        // 'this' refers to the 'users' object, so 'this.username' gets 'users.username'
        return; // Optional: returns undefined, ending the function
    }
};

// Call 'welcomeMessage' and log the greeting based on the initial username
console.log(users.welcomeMessage()); // Output: "unknown bro welcome to the website"

// Change the 'username' property to see how 'this' updates
users.username = "nothing";
console.log(users.welcomeMessage()); // Output: "nothing welcome to the website"

// 'this' keyword in a regular function (not in an object or class context)
function checkThis() {
    console.log(this); // In non-strict mode, 'this' refers to the global object (e.g., 'window' in browsers)
    return;
}
checkThis(); // In strict mode, it would return 'undefined'

// Arrow functions
// Arrow function syntax: () => {}

// Define a simple arrow function called 'firstArrow' to log a message
const firstArrow = () => console.log("hello"); // Implicitly returns undefined after logging
firstArrow(); // Output: "hello"

// Define another arrow function 'secArrow' that returns an object
const secArrow = () => ({ username: "inside arrow function" });
// Parentheses around the object ensure it’s interpreted as an object literal, not a code block
console.log(secArrow()); // Output: { username: "inside arrow function" }

// Implicit return example with an arrow function
const addTwo = (num1, num2) => {
    console.log(num1 + num2); // Logs the sum of num1 and num2
    return; // Explicit return of 'undefined'
};
addTwo(4, 5); // Output: 9 (sum is logged), then undefined is returned

