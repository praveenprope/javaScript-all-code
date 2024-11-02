// While Loop

// 1. Print numbers from 1 to 10, incrementing by 2
let number = 1;
while (number <= 10) {
    console.log(number);
    number += 2;  // Increment by 2
}

// 2. Nested While Loop to print multiplication tables from 1 to 10
let a = 1;
while (a <= 10) {
    let b = 1;
    while (b <= 10) {
        let c = a * b;  // Calculate the product
        console.log(`${a} * ${b} = ${c}`);
        b++;  // Increment b
    }
    a++;  // Increment a
}

// 3. While Loop to iterate through an array of superheroes
const superHeros = ['Batman', 'Superman', 'Spider-Man', 'Iron Man'];
let i = 0;
while (i < superHeros.length) {
    console.log(superHeros[i]);
    i++;  // Increment i
}

// 4. Do While Loop to print numbers from 0 to 8
let m = 0;
do {
    console.log(m);
    m++;  // Increment m
} while (m < 8);  // The condition is checked after executing the loop body
