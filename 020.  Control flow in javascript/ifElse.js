// Control Flow in JavaScript

// 1. if Statement
const isUserLogged = true;
if (isUserLogged) {    // Checks if condition is true
    console.log("Yes, User is Logged In");
}

// 2. else Statement
const strNum = "8";
if (strNum === 8) {  // Checks if condition is true (strict equality for both value and type)
    console.log("Same Data Type and Value");
} else {
    console.log("Not the Same Data Type or Value");
}

// 3. else if Statement for checking multiple conditions
const priceMoney = 1000;
if (priceMoney < 200) {
    console.log("Less than 200");
} else if (priceMoney < 400) {
    console.log("Less than 400");
} else if (priceMoney < 600) {
    console.log("Less than 600");
} else if (priceMoney < 800) {
    console.log("Less than 800");
} else if (priceMoney < 1000) {
    console.log("Less than 1000");
} else {
    console.log("1000 or more");
}

// 4. Another example with if statement and local variable
const Score = 100;
if (Score >= 100) {
    let Power = "Fly";
    console.log(`Player's power is ${Power}`);
}

// 5. Using && (AND) Operator
let isUserHaveAccount = true;
let isUserHaveDebitCard = true;
let isUserHaveMoney = false;
let Shopping = ["Yes", "No"];

if (isUserHaveAccount && isUserHaveDebitCard) {  // Checks if both conditions are true
    console.log(`${Shopping[0]}, User Can Shop`);
}

if (isUserHaveAccount && isUserHaveDebitCard && isUserHaveMoney) {  // Checks if all conditions are true
    console.log(`${Shopping[0]}, User Can Shop`);
} else {
    console.log(`${Shopping[1]}, User Cannot Shop`);
}

// 6. Using || (OR) Operator
if (isUserHaveAccount || isUserHaveDebitCard || isUserHaveMoney) {  // Checks if any one condition is true
    console.log(`${Shopping[0]}, User Can Shop`);
} else {
    console.log(`${Shopping[1]}, User Cannot Shop`);
}

// 7. Comparison Operators
// ==   -- Equal (loose equality, ignores data type)
// !=   -- Not equal
// ===  -- Strict equality, checks both value and data type
// !==  -- Not equal and also checks data type
// >    -- Greater than
// <    -- Less than
// >=   -- Greater than or equal
// <=   -- Less than or equal

// 8. Nullish Coalescing Operator (??) -- Returns the right operand if the left is null or undefined
let val1;
let val2;

val1 = null ?? 20;         // val1 will be 20 because null is "nullish"
val2 = undefined ?? 10;    // val2 will be 10 because undefined is "nullish"

console.log(val1, val2);   // Output: 20 10

// 9. Ternary Operator (?)
// Syntax: condition ? value_if_true : value_if_false
let age = 15;
age >= 18 ? console.log("You have voting rights") : console.log("You do not have voting rights");
