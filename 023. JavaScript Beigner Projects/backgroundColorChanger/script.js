const colorBox = document.querySelectorAll('.colorBox');
colorBox.forEach((item) => {
     item.addEventListener('click', function(e){
          console.log(e)
          console.log(e.target)
          // if(e.target.id == "red"){
          //    document.querySelector('body').style.backgroundColor = 'red';
          // }
     //     secound way

       const color = e.target.id;
       console.log(color) 
       document.body.style.backgroundColor = color;


       if(e.target.id == 'black'){
        document.querySelector('h1').style.color = 'white';
       } else {
          document.querySelector('h1').style.color = 'black';
       }
      


     })
})