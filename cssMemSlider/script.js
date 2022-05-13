// Slider JS

const CAROUSEL = document.querySelector('.slider-content')

const ITEMS = document.querySelectorAll('.item')
const DOTS = document.querySelectorAll('.dot')
const dotsWrapper = document.querySelector('.dots-wrapper') 

let index = Number(0)



//SLIDES
const activeSlide = n => {
    console.log('n=', n)
    for(let item of ITEMS) {item.classList.remove('active');};
    ITEMS[n].classList.add('active')
};
//DOTS
const activeDot = n => {
    for(let dot of DOTS) {dot.classList.remove('active');}
    DOTS[n].classList.add('active');
};

dotsWrapper.addEventListener('click', (event)=> {
    let id = Number(event.target.id)    
    if(id<index) {
        ITEMS[id].classList.add('active');
        moveLeft();
        index = id;
        activeDot(index);
    }
    if(id>index) {
        ITEMS[id].classList.add('active');
        moveRight();
        index = id;
        activeDot(index);
    }   
})

CAROUSEL.addEventListener('animationend', ()=> { 
    activeSlide(index);
    CAROUSEL.classList.remove('transition-left');
    CAROUSEL.classList.remove('transition-right');
})


const moveLeft = () => {
    CAROUSEL.classList.add('transition-left')
    // BTNLeft.removeEventListener('click', moveLeft) 
    // BTNRight.removeEventListener('click', moveRight)
}
const moveRight = () => {
    CAROUSEL.classList.add('transition-right')
}