const startButton = document.querySelector('.start-btn');
const endButton = document.querySelector('.end-btn');
const speedButton = document.querySelector('.speed-btn');

const randomColors = () => {
    let hex = '#';
    const hexCode = '0123456789ABCDEF';
     for( let i=0; i<6; i++){
        hex = hex + hexCode[Math.floor(Math.random()*16)]
     }
     
     return hex;
}

// function for speed
let speedDefaultValue = 1000;

const speedUpFunction = () => {
    
    if(speedDefaultValue == 50){
        speedDefaultValue = speedDefaultValue - 100
    } else{
        speedDefaultValue = speedDefaultValue - 50
    }
    console.log(speedDefaultValue)

    
   if(playInterval){
    clearInterval(playInterval)
    playInterval =  setInterval(changeColors,speedDefaultValue)
   }
}



speedButton.addEventListener('click',speedUpFunction)


const changeColors = () => {
    document.body.style.backgroundColor = randomColors()
}

let playInterval;

startButton.addEventListener('click',()=> {
    if(!playInterval){
        playInterval =  setInterval(changeColors,speedDefaultValue)
    }
   
 
})

endButton.addEventListener('click',()=>{
   if (playInterval) {
    clearInterval(playInterval);
   }
   playInterval = undefined;
   
})



