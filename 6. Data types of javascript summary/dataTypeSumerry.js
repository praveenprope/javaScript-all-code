// Data Type are weo types. 

//1. Primitive Data Type      (" Call by Value ")
//2. Non-Primitive Data Type  (" Call by Reference ")

// 1.Primitive Data Type -> 1.String 2.Number 3.Boolean 4.Null 5.Undefind 6.Symbol 7.BigInt

 // 1. String 
  
   const stringType = "string";  // String Data Type

// 2. Number

   const numberType = 7837;   // Number Data Type

// 3. Boolean   

   const booleanType = true; // Boolean Data Type

// 4. Null 

   const nullType = null;   // Null Data Type

// 5. Undefind

   const undefindType = undefined;  // Undefind Data Type
   let  undefindType1;  // you also declare undefind like this


// 6. Symbol

   const symbolType = Symbol('123');
   const anotherSymbolType = Symbol('123');
   console.log(symbolType==anotherSymbolType);  // value are same but they are diffrent
//    let change = Number(symbolType);  // Cannot convert into Number data type
   let change2 = String(symbolType)+Boolean(symbolType);
//    console.log(change); // Error throungh
   console.log(change2); // Change symbol value into String and Boolean Data Type


   // 7. bigInt 

   const bigNumber = 93872873673276327632727382323n;
   const bigNumber2 = 9387288873787328476324782323;
   console.log(bigNumber2)  //9.387288873787329e+27 output value in points
   console.log(bigNumber)  // using n in last we can store large value in javaScript


  // 2. Non-Primitive Data Type  => 1.Array , 2.Object , 3.Function
     
   // 1. Array

    let superHeros = ["SpiderMan","IronMan","CaptainAmerica","RakeshChacha"];
    console.log(superHeros,typeof superHeros); // Array is a type of a object

  //  2. Object

    let policeForm = {  
        fullName: "Rakesh Chacha",
        Age     : 24,
        bornDate: 24/26/26,
        Address: "Unkown",  
      }

      console.log(policeForm);
      console.log(typeof policeForm);  // Object is type of Object


      // 3. Fuction

      let newFuction = function(){
         console.log("Hello World");
      }

      console.log(newFuction, typeof newFuction);  // Fuction is a type of object function


      // Data types check using type of
      
      console.log(typeof stringType,stringType);
      console.log(typeof numberType, numberType);
      console.log(typeof booleanType, booleanType);
      console.log(typeof nullType, nullType);
      console.log(typeof undefindType, undefindType);
      console.log(typeof symbolType, symbolType);
      console.log(typeof bigNumber, bigNumber);
      console.log(typeof superHeros, superHeros);
      console.log(typeof policeForm, policeForm);
      console.log(typeof newFuction, newFuction);
