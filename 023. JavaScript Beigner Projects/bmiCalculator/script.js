// this use case will give you empty value
// const weight = document.querySelector('#weight').value; 
// const height = document.querySelector('#height').value;


const form = document.querySelector('form');
const button = document.querySelector('button');
form.addEventListener('submit',function(e){
    e.preventDefault()

const weight = document.querySelector('#weight').value; 
const height = document.querySelector('#height').value;
const div = document.querySelector('#result');
const h1 = document.createElement('h1');
const p = document.createElement('p');

const heightM = (height * 0.3048);
console.log(heightM)

const bmi = (weight / (heightM * heightM)).toFixed(2);
if(bmi<18.5){
    div.appendChild(h1).textContent=`${bmi}`;
    div.appendChild(p).textContent=" 😕 You are under weight "
} else if (bmi<24.9){
       div.appendChild(h1).textContent=`${bmi}`;
    div.appendChild(p).textContent=" 😊 You are normal weight"
} else if (bmi<29.9 ){
    div.appendChild(h1).textContent=`${bmi}`;
 div.appendChild(p).textContent=" 😟 You are overweight weight"
}else{
    div.appendChild(h1).textContent=`${bmi}`;
 div.appendChild(p).textContent=" 😞 Obesity weight"
}






})

