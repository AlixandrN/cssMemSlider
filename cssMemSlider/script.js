// Slider JS

const CAROUSEL = document.querySelector('.slider-content')
const TEXTCAROUSEL = document.querySelector('.text-content')
const ITEMS = document.querySelectorAll('.item')
const DOTS = document.querySelectorAll('.dot')
const dotsWrapper = document.querySelector('.dots-wrapper') 
const textItems = document.querySelectorAll('.text')
let index = Number(0)

//SLIDES
const activeSlide = n => {
    for(let item of ITEMS) {item.classList.remove('active');};
    ITEMS[n].classList.add('active')
};
//DOTS
const activeDot = n => {
    for(let dot of DOTS) {dot.classList.remove('active');}
    DOTS[n].classList.add('active');
    cleanDots();
};
//TEXT
const activeText = n => {
    for(let text of textItems) {text.classList.remove('active');}
    textItems[n].classList.add('active');
};

dotsWrapper.addEventListener('click', (event)=> {
    movement(event) 
});

const movement = (e) => {
    let id = Number(e.target.id)    
    if(id<index) {
        ITEMS[id].classList.add('active');
        textItems[id].classList.add('active');  
        moveLeft();
        index = id;
        activeDot(index); 
    };
    if(id>index) {
        ITEMS[id].classList.add('active');
        textItems[id].classList.add('active');
        moveRight();
        index = id;
        activeDot(index);
    };   
};

CAROUSEL.addEventListener('animationend', ()=> { 
    activeSlide(index);
    CAROUSEL.classList.remove('transition-left');
    CAROUSEL.classList.remove('transition-right');
});
TEXTCAROUSEL.addEventListener('animationend', ()=> { 
    activeText(index);
    TEXTCAROUSEL.classList.remove('transition-text-left');
    TEXTCAROUSEL.classList.remove('transition-text-right');
});

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left')
    TEXTCAROUSEL.classList.add('transition-text-left')
};
const moveRight = () => {
    CAROUSEL.classList.add('transition-right')
    TEXTCAROUSEL.classList.add('transition-text-right')
    // dotsWrapper.removeEventListener('click', movement)
};

DOTS.forEach(el => {
    el.addEventListener('mouseenter', ()=> {
        el.classList.add('under-mouse')
        if (el.id != index) {el.classList.add('under-mouse-other')}
    });
    el.addEventListener('mouseleave', ()=> {
        el.classList.remove('under-mouse-other');
        el.classList.remove('under-mouse');
    });
})

const cleanDots = () => {
    DOTS.forEach(el => {
        if (el.id != index) {
            el.classList.remove('under-mouse-other')
        }
    })
};