// Creating a unique Symbol, which can be used as a unique object property key
let mySym = Symbol("key1"); 

// Defining an object `userDetail` with various properties
const userDetail = {
    firstName : "Rahul",                    // Standard property with string value
    "last Name" : "Bhai",                   // Property with space in key name; needs quotes
    email : "rahul123@email.com",           // Email property
    age : 18,                               // Age as a number
    [mySym] : "key2",                       // Using the Symbol as a unique property key
    address : "Unknown Place",              // Address with string value
    isLogged : false                        // Boolean property
}

// Logging the whole `userDetail` object to view all its properties
console.log(userDetail);

// Accessing object properties by different methods

// First way: Dot notation (most common), direct access by key name
console.log(userDetail.firstName);          // Output: "Rahul"

// You can't access `last Name` using dot notation since the property name contains a space
// console.log(userDetail.last Name);       // Error: `last` is not a defined property

// Second way: Bracket notation, which can handle spaces and dynamic keys
console.log(userDetail["last Name"]);       // Output: "Bhai"

// Modifying object properties

// Changing the value of the `email` property
userDetail.email = "rahul321@gmail.com";
console.log(userDetail.email);              // Output: "rahul321@gmail.com"

// Adding a function as a method inside the object
userDetail.greeting = function() {
    console.log("hello");
}
console.log(userDetail.greeting());         // Calls the greeting function and logs "hello"

// Adding a second function using `this` keyword and template literals for dynamic messages
userDetail.greeting2 = function(){
    console.log(`happy birthday ${this.firstName} ${this["last Name"]}`);
}

console.log(userDetail.greeting2());        // Calls `greeting2` and logs "happy birthday Rahul Bhai"

// Checking the updated object with new properties and functions
console.log(userDetail);

// Freezing the object to prevent any further modifications
userDetail.age = 20;                        // Modifying `age` before freezing
console.log(userDetail.age);                // Output: 20

Object.freeze(userDetail);                  // Freezes the object, making it immutable

userDetail.age = 22;                        // This change won't apply since object is frozen
console.log(userDetail.age);                // Output: 20

// Viewing the final state of the object with all properties and methods
console.log(userDetail);                    // Logs the `userDetail` object as it stands
