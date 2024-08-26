// Stack and Heap Memory

// 1. Stack => Primitive Data Types use Stack Memory.
//    Stack memory works by copying values.

// Example:

let a = "xyz@gmail.com";
let b = a;
b = "abc@gmail.com";
console.log(a);  // Output: "xyz@gmail.com"
console.log(b);  // Output: "abc@gmail.com"

// Stack memory is used for temporary variables. Example:

function yeah() {
  let a = "iAmHere";  // 'a' is stored in stack memory and is automatically removed from the stack memory
  console.log(a);
}

yeah();

// 2. Heap Memory

// Non-Primitive Data Types use Heap Memory.
// In Heap Memory, the original reference is used, not a copy.

// Example:

let userOne = {
  Gmail: "abc@gmail.com"
};

let userTwo = userOne;

userTwo.Gmail = "xyz@gmail.com";

console.log(userOne); // Output: { Gmail: 'xyz@gmail.com' }
console.log(userTwo); // Output: { Gmail: 'xyz@gmail.com' }

// userTwo directly changes the original object, which is why both are the same.
