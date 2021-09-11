gsap.registerPlugin(ScrollTrigger);

let burgerActive = document.querySelector('.burger');
let menu = document.querySelector('.menu');

gsap.from('.phone_head', {
    opacity: 0,
    x: 200,
    duration: 1.2 
});

let tweenThree = gsap.from('.function_page_title', {
    y: 120,
    opacity: 0,
    duration: 0.9,
});

let tweenOne = gsap.from('.function_item', {
    scrollTrigger: {
        trigger: '.first_column',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
    },
    x: -200,
    stagger: 0.3,
    opacity: 0,
    duration: 0.9,
});

let tweenTwo = gsap.from('.function_item_2', {
    scrollTrigger: {
        trigger: '.second_column',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 0.5,
    },
    x: 200,
    stagger: 0.3,
    opacity: 0,
    duration: 0.9,
});

burgerActive.addEventListener('click', () => {
    burgerActive.classList.toggle('active');
    menu.classList.toggle('menu_active');
});

if(document.documentElement.clientWidth <= 699){
    tweenOne.timeScale(2);
    tweenTwo.timeScale(2);
    tweenThree.timeScale(2);
}
