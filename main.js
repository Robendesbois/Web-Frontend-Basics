let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil'); 

window.onscroll = function(){
     let value = scrollY;
     //console.log(value)
     stars.style.bottom = value + 'px';
     moon.style.top = value * 3 + 'px' ;
     mountains3.style.top = value * 2+ 'px';
     mountains4.style.top = value * 1.5 + 'px' ;
     river.style.top = value + 'px' ;
     boat.style.top = value + 'px' ;
     boat.style.left = value * 3 + 'px' ;
     nouvil.style.fontSize = value + 'px';
     if(scrollY >= 75){
        nouvil.style.fontSize = 75 + 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 492){
            nouvil.style.display = 'none';
        }else{
             nouvil.style.display = 'block';
        }
     }
}