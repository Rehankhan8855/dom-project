var head7 = document.querySelector('h7')
 var btn =document.querySelector('#add')
 var check = 0;


 btn.addEventListener('click',()=>{
    if(check ==0){
        head7.innerHTML = "Pain";
      head7.style.color="green"
      btn.innerHTML = "Followed"
      
      check=1;
    }else{
        head7.innerHTML = "Pleasure";
      head7.style.color="red"
      btn.innerHTML = "Unfollowed"

      check=0;


    }
  })

  

 