let show= document.querySelector('.show');

let increment=0;

document.addEventListener('click', e =>{
    if (e.target.matches('.increase')){
        increment++;
        show.innerHTML=increment;
    } else if(e.target.matches('.decrase')){
        increment--;
        show.innerHTML=increment;

    } else if (e.target.matches('.reset')){
        increment=0;
        show.innerHTML=increment;

    }
    //CAMBIAR COLOR 
if (increment <0){
    show.style.color='red';
} else{
    show.style.color='green';
}
if(increment==0) show.style.color = "#222";

})

