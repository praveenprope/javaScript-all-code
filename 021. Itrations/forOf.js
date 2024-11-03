// forOf loop in js

// forOf using a simple array

const table = [2,4,6,8,10,12,14,16,18,20];
for(const i of table){
    console.log(i)
}

// forOf loop using in string

const username = "Unknown Name";
for(const i of username){
    console.log(i)
}

// forOf loop using in string and remove space

const fullName = "Jhon Cena Boy";
for(const i of fullName){
    if(i==" "){
        continue
    } console.log(i)
}

// Maps

const map = new Map();
map.set('In', "India")
map.set('US', "United Kingdom")
map.set('USA', "United States Of America")
map.set('USA', "United States Of America")


// using forOf in Maps

for(const i of map){
    console.log(i)
}

// using forOf  in maps for keys and value diffrent

for(const [key,Value] of map){
    console.log(key,'-:',Value)
}

// using forOf in Object

const users = {
    username:"unknown",
    class: 10
}

// for(const i of users){
//     console.log(i)  users is not iterable
// }

