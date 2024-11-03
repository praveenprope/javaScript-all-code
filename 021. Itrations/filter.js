const coding = ["Js","C","C++","TypeScript"]
const Lan = coding.forEach((item)=>{
    return item
})
console.log(Lan)

// use filter to store value

let nums = [1,2,3,4,5,6,7,8,9,10]
const numbers = nums.filter((item)=>{return item})
console.log(numbers)

// secound exapmple with codition

const num = nums.filter((item)=> item>4 )
console.log(num)

const twonum = nums.filter((item)=>{
  return item > 6
})
console.log(twonum)

// use for each for this 

let newArray = [];
nums.forEach((item)=>{
   if(item<4){
    newArray.push(item)
   }
})
console.log(newArray)

const books = [
    {
      genre: "History",
      publish: 2015,
      name: "Sapiens: A Brief History of Humankind",
      edition: "1st"
    },
    {
      genre: "Fantasy",
      publish: 1997,
      name: "Harry Potter and the Philosopher's Stone",
      edition: "1st"
    },
    {
      genre: "Horror",
      publish: 1986,
      name: "It",
      edition: "1st"
    },
    {
      genre: "Drama",
      publish: 1960,
      name: "To Kill a Mockingbird",
      edition: "3rd"
    },
    {
      genre: "History",
      publish: 2018,
      name: "The Silk Roads: A New History of the World",
      edition: "2nd"
    },
    {
      genre: "Fantasy",
      publish: 1954,
      name: "The Fellowship of the Ring",
      edition: "5th"
    },
    {
      genre: "Horror",
      publish: 1897,
      name: "Dracula",
      edition: "4th"
    },
    {
      genre: "Drama",
      publish: 2006,
      name: "The Road",
      edition: "2nd"
    },
    {
      genre: "History",
      publish: 2010,
      name: "The Rise and Fall of the Third Reich",
      edition: "6th"
    },
    {
      genre: "Fantasy",
      publish: 2005,
      name: "The Lion, the Witch, and the Wardrobe",
      edition: "1st"
    },
    {
      genre: "Horror",
      publish: 1974,
      name: "Carrie",
      edition: "1st"
    },
    {
      genre: "Drama",
      publish: 1984,
      name: "The Color Purple",
      edition: "3rd"
    },
    {
      genre: "History",
      publish: 2000,
      name: "Guns, Germs, and Steel",
      edition: "2nd"
    },
    {
      genre: "Fantasy",
      publish: 1937,
      name: "The Hobbit",
      edition: "4th"
    },
    {
      genre: "Horror",
      publish: 2014,
      name: "Bird Box",
      edition: "2nd"
    },
    {
      genre: "Drama",
      publish: 2003,
      name: "Atonement",
      edition: "1st"
    },
    {
      genre: "History",
      publish: 1998,
      name: "A People's History of the United States",
      edition: "3rd"
    },
    {
      genre: "Fantasy",
      publish: 1990,
      name: "Good Omens",
      edition: "2nd"
    },
    {
      genre: "Horror",
      publish: 1983,
      name: "Pet Sematary",
      edition: "1st"
    },
    {
      genre: "Drama",
      publish: 1949,
      name: "Death of a Salesman",
      edition: "2nd"
    }
  ];

  // use filter in books array 

 const store = books.filter((item)=>{
       if(item.genre==="History" && item.publish>2000){
        return item
       }
  })

  console.log(store)