// reduce

const products = [
    {
      name: "iPhone 14",
      price: 999
    },
    {
      name: "Samsung Galaxy S22",
      price: 849
    },
    {
      name: "Dell XPS 13 Laptop",
      price: 1299
    },
    {
      name: "Sony WH-1000XM4 Headphones",
      price: 349
    },
    {
      name: "Apple Watch Series 8",
      price: 399
    },
    {
      name: "Nintendo Switch",
      price: 299
    }
  ];

 const total =  products.reduce((acc,item)=>{
      return acc+item.price
  },0)
  console.log(total)