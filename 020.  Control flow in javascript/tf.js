// Truthy and Falsy Values in JavaScript

// Falsy Values:
// These values are considered "false" when evaluated in a Boolean context:
// 0, -0, BigInt 0n, null, undefined, NaN, "", false

// Truthy Values:
// Any value not considered falsy is "truthy" in JavaScript:
// true, "false" (non-empty string), " ", {}, [], function(){}

// ------------------Examples--------------------//

// Example 1: Checking an Empty String
const userEmail = "";  // empty string is a falsy value
if (userEmail) {
    console.log("You are Logged In");
} else {
    console.log("You are not Logged In");  // This will print
}

// Example 2: Checking an Empty Array
const cars = [];  // an empty array is a truthy value
if (cars) {
    console.log(true);  // This will print
} else {
    console.log(false);
}

// Solution: Checking if an Array is Empty
if (cars.length === 0) {
    console.log("Array is Empty");  // This will print if the array has no elements
}

// Example 3: Checking an Empty Object
const bikes = {};  // an empty object is a truthy value
if (bikes) {
    console.log(true);  // This will print
} else {
    console.log(false);
}

// Solution: Checking if an Object is Empty
if (Object.keys(bikes).length === 0) {
    console.log("Object is Empty");  // This will print if the object has no properties
}

// Example 4: Non-Empty Object Example
let userDetails = {
    Name: "John Cena",
    Work: "WWE Superstar",
    Money: 29299393,
};
console.log(Object.keys(userDetails));  // Outputs: ['Name', 'Work', 'Money']

if (Object.keys(userDetails).length === 0) {
    console.log("Object is Empty");
} else {
    console.log("Object is not Empty");  // This will print
}
