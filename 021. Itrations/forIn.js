// using forIn loop to itrate object

const users = {
    id: 1,
    username: "raj123",
    age: 25,
    address: "123 Main St, Delhi, India"
}

for(const key in users){
    console.log(`Key-:${key}  :- ${users[key]}`)
}

// for in loop in map

const map = new Map();
map.set('In', "India")
map.set('US', "United Kingdom")
map.set('USA', "United States Of America")
map.set('USA', "United States Of America")

for(const i in map){
    console.log(i)  // this is not working
}