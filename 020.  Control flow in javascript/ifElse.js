// Control flow in JavaScript

// if Statement

const isUserLogged = true;
if(isUserLogged){    // Check true codition
    console.log("Yes User is Logged")
}

// else statement

const strNum = "8";
if(strNum === 8){  // if this codition is not true else codtition is print
    console.log("Same Data Type")
}  else {
    console.log("Not Same Data Type")
}

// else if statement for chrck multiple codition

const priceMoney = 1000;
if(priceMoney<200){
    console.log("less than 200")
} else if (priceMoney<400){
      console.log("less than 400")
}
 else if (priceMoney<600){
      console.log("less than 600")
}
 else if (priceMoney<800){
      console.log("less than 800")
}
 else if (priceMoney<1000){
      console.log("less than 1000")
}
 else {
      console.log("less than 1200 or more")
}

// one more expample

const Score = 100;
if(Score>=100){
    let Power = "Fly";
    console.log(`Player power is ${Power}`)
}

// using && and operator

let isUserHaveAccount = true;
let isUserHaveDebitCard = true;
let isUserHaveMoney = false;
let Shopping = ["Yes","No"];


if(isUserHaveAccount && isUserHaveDebitCard){  // check both codtion are true
    console.log(` ${Shopping[0]} User Can Shoping`)
};

if(isUserHaveAccount && isUserHaveDebitCard && isUserHaveMoney){  // check all three codtions if one codition is false code print else statment
      console.log(`${Shopping[0]} User Can Shoping`)
} else {
    console.log(`${Shopping[1]} User Cant Shoping`)
}

// using || or operator

if(isUserHaveAccount || isUserHaveDebitCard || isUserHaveMoney){  // check all three codtions if one codition is true code print if  statment
    console.log(`${Shopping[0]} User Can Shoping`)
} else {
  console.log(`${Shopping[1]} User Cant Shoping`)
}

// coditional operators

// ==   -- Equal
// !=   -- not Equal
// ===  -- Check equal and also check dataType
// > -- Greater than
// < -- Less than
// <=, >= less than eqaul and greater than or equal