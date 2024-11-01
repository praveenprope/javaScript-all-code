// Example JavaScript Code: Understanding Memory Creation and Execution

// Define an outer function
function outerFunction() {
    // Memory allocation for outerVariable
    let outerVariable = "I'm outside!"; // Value assigned to outerVariable
  
    // Define an inner function
    function innerFunction() {
      // Memory allocation for innerVariable
      let innerVariable = "I'm inside!"; // Value assigned to innerVariable
  
      // Accessing variables from the outer scope
      console.log(outerVariable); // Logs: "I'm outside!"
      console.log(innerVariable); // Logs: "I'm inside!"
    }
  
    // Call the inner function
    innerFunction(); // Execution context for innerFunction is created here
  }
  
  // Call the outer function to start the execution
  outerFunction(); // Execution context for outerFunction is created here
  
  /*
  Execution Breakdown:
  
  1. **Global Execution Context Creation**:
     - Memory is allocated for global variables/functions, but code is not executed yet.
     - outerFunction reference is stored in memory.
  
  2. **Calling `outerFunction()`**:
     - A new execution context for outerFunction is created.
     - Memory allocation for `outerVariable` (initially set to `undefined`).
  
  3. **Inside `outerFunction()`**:
     - `outerVariable` is assigned the value "I'm outside!".
     - `innerFunction` reference is stored in memory.
  
  4. **Calling `innerFunction()`**:
     - A new execution context for innerFunction is created.
     - Memory allocation for `innerVariable` (initially set to `undefined`).
  
  5. **Inside `innerFunction()`**:
     - `innerVariable` is assigned the value "I'm inside!".
     - console.log() accesses `outerVariable` and `innerVariable`, logging both values.
  
  6. **Completion of `innerFunction()`**:
     - After execution, innerFunction's context is removed from the stack.
     - Memory for `innerVariable` is eligible for garbage collection.
  
  7. **Completion of `outerFunction()`**:
     - After execution, outerFunction's context is removed from the stack.
     - Memory for `outerVariable` is eligible for garbage collection unless still referenced.
  
  This example demonstrates how JavaScript manages execution contexts, memory allocation, and variable scope through closures. Each function has its own context, allowing inner functions to access outer variables while maintaining their own scope.
  */
  


// --------------------- Call Stack

function one() {
    console.log("first"); // Logs "first" to the console.
    two(); // Calls the `two` function, adding it to the call stack.
}

function two() {
    console.log("second"); // Logs "second" to the console.
    three(); // Calls the `three` function, adding it to the call stack.
}

function three() {
    console.log("third"); // Logs "third" to the console. When finished, it will be removed from the call stack.
}

// Initial function call sequence
one(); // Starts by calling `one`, which in turn calls `two` and `three` in sequence.
// The call stack sequence here will be:
// 1. `one` -> `two` -> `three`

// Independent function calls
two(); // Calls `two` independently, which then calls `three`.
// The call stack sequence here will be:
// 2. `two` -> `three`

three(); // Calls `three` independently.
// The call stack sequence here will be:
// 3. `three`

/*
Expected Console Output:
first    // From the first call to `one`
second   // From the call to `two` inside `one`
third    // From the call to `three` inside `two`
second   // From the independent call to `two`
third    // From the call to `three` inside the independent `two`
third    // From the independent call to `three`
*/
