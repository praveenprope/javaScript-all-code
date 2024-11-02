// For Loop

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Nested For Loop to print multiplication tables from 1 to 20
for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 10; j++) {
        let table = i * j;
        console.log(`${i} * ${j} = ${table}`);
    }
}

// 3. For Loop to iterate through an array of superheroes
const superHeros = ['Batman', 'Superman', 'Spider-Man', 'Iron Man'];
for (let i = 0; i < superHeros.length; i++) {
    console.log(superHeros[i]);
}

// 4. If-Else in a For Loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`${i} is my favorite number`);
    }
    console.log(i);
}

// 5. Break Statement in a For Loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('5 is detected');
        break;  // Exits the loop when i equals 5
    }
    console.log(i);
}

// 6. Continue Statement in a For Loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('5 is detected');
        continue;  // Skips the current iteration when i equals 5
    }
    console.log(i);  // This will print all numbers except 5
}
