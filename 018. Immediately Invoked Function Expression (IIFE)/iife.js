// Immediately Invoked Function Expression (IIFE):
// An IIFE is a function that runs as soon as it is defined. 
// It is commonly used to create a new scope, prevent variable conflicts, or execute code immediately.


// Syntax of IIFE:
// Standard IIFE syntax uses a function wrapped in parentheses followed by a second set of parentheses to invoke it.
// Example: (function(){ ... })(); or (() => { ... })();

// Named IIFE
(function newCar(CAR) {  // Define an IIFE named "newCar" with a parameter "CAR"
    console.log(`Name of the Car: ${CAR}`);  // Log the car name to the console
})("BMW");  // Invoke the function immediately with "BMW" as the argument


// Using a semicolon to separate multiple IIFEs in the same file
// Always use a semicolon (;) to avoid unexpected issues when writing multiple IIFEs in one file.


// Unnamed IIFE
((Bike) => {  // Define an unnamed IIFE with a parameter "Bike"
    console.log(`Bike Name is: ${Bike}`);  // Log the bike name to the console
})('Hero');  // Invoke the function immediately with "Hero" as the argument
