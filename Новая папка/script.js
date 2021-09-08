
let cubes = document.querySelector('.info_cubes');
let descr = document.querySelector('.cp_descr');
let deadline = document.querySelector('.deadline');
let deadlineCube = document.querySelector('.deadline_cube');
let deadlineSquare = document.querySelector('.deadline_square');
let numberOne = document.querySelector('.number_one');
let ppl = document.querySelector('.ppl');
let invstmnts = document.querySelector('.investments');

console.log(cubes);

window.addEventListener('scroll', () =>{
    if(window.pageYOffset >= 800){
        cubes.style.filter = 'opacity(1)';
        descr.style.left = '1050px';
    } else {
        cubes.style.filter = 'opacity(0)';
        descr.style.left = '-100%';
    }
});

window.addEventListener('scroll', () =>{
    if(window.pageYOffset >= 3686){
        deadlineCube.style.left = '0';
        deadlineSquare.style.left = '293.4px';
    }else {
        deadlineCube.style.left = '-100%';
        deadlineSquare.style.left = '-100%';
    }
});


window.addEventListener('scroll', () => {
    if(window.pageYOffset >= 4500){
        // numberOne.style.opacity = '1';
        ppl.style.textShadow = '-15px 4px 1px #5d2483';
        invstmnts.style.textShadow = '-5px 1px 1px #bb3b35';
    } else {
        // numberOne.style.opacity = '0';
        ppl.style.textShadow = '';
        invstmnts.style.textShadow = '';
    }
});

gsap.from('.ppl, .investments', {
    x: 500,
    duration: 1.2,
    scrollTrigger: {
    trigger: '.ppl, .investments',
    ease: 'power3.out',
    start: 'top bottom-=100px',
    }
});

gsap.from('.number_one', {
    scrollTrigger: '.number_one',
    opacity: 0,
    duration: 1.5,
    start: 'top bottom-=50px',
    scrub: 2,
});