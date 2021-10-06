//navegation menu
let bar_icon= document.querySelector('.bar-icon');
let hav = document.querySelector(".nav")
let enlaces= document.querySelector('.container');
let contador=true;

bar_icon.addEventListener('click',  function() {
    this.classlist.toggle('active');

    if(contador==true){
        enlaces.style.width='100%';
        enlaces.style.overflow='hidden';
        enlaces.style.transition='0,5s'
contador=false
    }else{
contador=true;
enlaces.style.width='0%'
enlaces.style.overflow='hidden'
enlaces.style.transition='0.5'

    }



});