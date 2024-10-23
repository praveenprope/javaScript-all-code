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
    return result;  // The function returns the value of 'result' to the caller
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
        return;  // The function stops execution here
    }
    console.log(`${userName} user is logged in`);  // If a valid 'userName' is passed, it prints this message
}
loginUserMessage2();  // No argument is passed, so it prints 'Please enter a username'
loginUserMessage2("Alex");  // This prints 'Alex user is logged in'


// shoping cart
 
function totalCartPrice(...prices){  //... thsi a rest operator
     return prices
}
 
console.log(totalCartPrice(20,32,3,4,45,54))

// use objects in functions

const userDetails = {
   usernName: "unknown",
   userage: 35,
   gmail:"123@email.com"

}

function addObject(Details){
    return Details
}
console.log(addObject(userDetails))
console.log(addObject(object = {
    Name:"osnot",
    age:19,

}))

const myarr = [12,32,23,23]

function addArray(newArray){
    return newArray[0]
}

console.log(addArray(myarr))
console.log(addArray(let = [23,443,23,"jdj"]))