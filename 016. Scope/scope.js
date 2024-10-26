// 1. Global Scope Example
var globalVar = "I am a global variable"; // Global variable

function showGlobalVar() {
    console.log(globalVar); // Output: I am a global variable
}

showGlobalVar(); // Output: I am a global variable

// Accessible outside functions as well
console.log(globalVar); // Output: I am a global variable

// --------------------------------------

// 2. Function Scope Example
function showFunctionScope() {
    var functionScopedVar = "I am function-scoped"; // Local to showFunctionScope
    console.log(functionScopedVar); // Output: I am function-scoped
}

showFunctionScope();

// Uncommenting the next line will cause an error because functionScopedVar is not accessible outside its function
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// --------------------------------------

// 3. Block Scope with `let` and `const`
if (true) {
    let blockScopedLet = "I am block-scoped with let"; 
    const blockScopedConst = "I am block-scoped with const"; 
    var notBlockScoped = "I am not block-scoped with var"; 
    console.log(blockScopedLet); // Output: I am block-scoped with let
    console.log(blockScopedConst); // Output: I am block-scoped with const
}

console.log(notBlockScoped); // Output: I am not block-scoped with var

// Uncommenting the next lines will cause errors because blockScopedLet and blockScopedConst are not accessible outside the block
// console.log(blockScopedLet); // Error: blockScopedLet is not defined
// console.log(blockScopedConst); // Error: blockScopedConst is not defined

// --------------------------------------

// 4. Nested Function Scope
function outerFunction() {
    var outerVar = "I am an outer function variable";
    
    function innerFunction() {
        var innerVar = "I am an inner function variable";
        console.log(outerVar); // Output: I am an outer function variable
        console.log(innerVar); // Output: I am an inner function variable
    }
    
    innerFunction();
    
    // Uncommenting the next line will cause an error because innerVar is not accessible outside innerFunction
    // console.log(innerVar); // Error: innerVar is not defined in outerFunction
}

outerFunction();

// --------------------------------------

// 5. Function with Nested `if-else` Conditions
function checkConditions(x) {
    if (x > 10) {
        var a = "greater than 10"; // `var` is function-scoped
        let b = "block-scoped greater than 10"; // block-scoped
        console.log(a); // Output if x > 10
        console.log(b); // Output if x > 10

        if (x > 20) {
            let c = "greater than 20"; // nested block-scoped
            console.log(c); // Output if x > 20
        }
        // Uncommenting the next line will cause an error because c is block-scoped to the nested if
        // console.log(c); // Error: c is not defined
    } else {
        var d = "10 or less"; // function-scoped
        console.log(d); // Output if x <= 10
    }
    
    console.log(a); // Accessible here because var is function-scoped
    // Uncommenting the next line will cause an error because b is block-scoped
    // console.log(b); // Error: b is block-scoped to if (x > 10)
}

checkConditions(15); // Test with a value greater than 10 but less than 20
// Expected Output:
// greater than 10
// block-scoped greater than 10
// greater than 10

checkConditions(25); // Test with a value greater than 20
// Expected Output:
// greater than 10
// block-scoped greater than 10
// greater than 20
// greater than 10

checkConditions(5);  // Test with a value less than or equal to 10
// Expected Output:
// 10 or less
// 10 or less

// --------------------------------------

// 6. Example of `var` Escaping Block Scope
function testVar() {
    if (true) {
        var escapedVar = "I escape the block"; 
    }
    console.log(escapedVar); // Output: I escape the block
}

testVar(); // Expected Output: I escape the block

// --------------------------------------

// 7. Block Scope Limitation with `let` and `const`
function testLetConst() {
    if (true) {
        let blockScopedLet = "I am block-scoped with let";
        const blockScopedConst = "I am block-scoped with const";
    }
    // Uncommenting the next lines will cause errors because blockScopedLet and blockScopedConst are block-scoped
    // console.log(blockScopedLet); // Error: blockScopedLet is not defined
    // console.log(blockScopedConst); // Error: blockScopedConst is not defined
}

testLetConst();
