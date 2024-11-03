const coding = ["Js", "C", "C++", "TypeScript"]

coding.map((item) => { console.log(item) })

const cars = [
    "Tesla Model S",
    "Ford Mustang",
    "Chevrolet Camaro",
    "BMW 3 Series",
    "Audi A4",
    "Mercedes-Benz C-Class",
    "Toyota Corolla",
    "Honda Civic",
    "Porsche 911",
    "Lamborghini Aventador"
];

const carName = cars.map((item)=> item)
console.log(carName)

// chaining Map

const table = [2,4,6,8,10,12,14,16,18,20];
const answers = table.map((item)=>item+"first")
.map((item)=>item+"Secound")
.map((item)=>item+"third")
console.log(answers)