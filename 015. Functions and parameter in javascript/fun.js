// Functions in JavaScript

// How to declare a function

function userName() {               // Function declaration using the keyword 'function'
    console.log("deathMan");        // When this function is called, it prints "deathMan" to the console
}
userName;  // => This is only a reference to the function, it doesn't execute the function
userName();  // => This actually calls the function, so "deathMan" will be printed

// Example: Add two numbers with a function

function addTwo(num1, num2) {
    // Parameters 'num1' and 'num2' are placeholders for the values we will pass when we call the function
  
    console.log(num1 + num2);  // This prints the sum of num1 and num2 but doesn't return it
    
    // Since there's no return statement, this function will return 'undefined' by default
}

addTwo(3, 4);   // This will print '7' to the console (3 + 4 = 7)

const test = addTwo(3, 4);  // Here, 'addTwo' is called but it doesn't return any value, so 'test' will be 'undefined'

console.log(`${test} test`);  // This prints 'undefined test' because 'test' is 'undefined'


// Example: Storing the result from a function

function addnum(num1, num2) {
    let result = num1 + num2;  // The sum of 'num1' and 'num2' is stored in the variable 'result'
    return result;  // The function returns the value of 'result' to the caller and stops execution here
}

const finalResult = addnum(8, 8);  // The returned value (16) is stored in 'finalResult'
console.log(`${finalResult} finalResult Value`);  // This prints '16 finalResult Value'


// Example: Function with a message using a parameter

function loginUserMessage(userName) {
    console.log(`${userName} user is logged in`);  // Prints a message with the user's name
}
loginUserMessage("Sidhu");  // This will print 'Sidhu user is logged in' to the console


// Example: Adding an if-else condition in the function

function loginUserMessage2(userName) {  // We can also set a default value like 'userName = "Sam"'
    if (userName === undefined) {  // This checks if 'userName' was not passed to the function
        console.log("Please enter a username");  // If 'userName' is undefined, this message is printed
        return;  // The function stops execution here without any further action
    }
    console.log(`${userName} user is logged in`);  // If a valid 'userName' is passed, it prints this message
}
loginUserMessage2();  // No argument is passed, so it prints 'Please enter a username'
loginUserMessage2("Alex");  // This prints 'Alex user is logged in'


// shopping cart example

function totalCartPrice(...prices){  // The '...prices' syntax is the rest operator, allowing us to pass multiple values as an array
     return prices;  // Returns the array of all prices passed to the function
}
 
console.log(totalCartPrice(20,32,3,4,45,54));  // Logs the array of prices to the console: [20,32,3,4,45,54]

// using objects in functions

const userDetails = {
   userName: "unknown",
   userAge: 35,
   email:"123@email.com"
}

function addObject(details){
    return details;  // Returns the passed object as it is, allowing the function caller to use this object if needed
}

console.log(addObject(userDetails));  // Logs the 'userDetails' object
console.log(addObject({ Name:"osnot", age:19 }));  // Logs a new object with Name and age properties

// using arrays in functions

const myArr = [12,32,23,23];

function addArray(newArray){
    return newArray[0];  // Returns the first element of the passed array
}

console.log(addArray(myArr));  // Logs the first element of 'myArr' (12)
console.log(addArray([23,443,23,"jdj"]));  // Logs the first element of the passed array (23)
