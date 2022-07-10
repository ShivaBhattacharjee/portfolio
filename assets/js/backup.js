// =======typing effect javascirpt

var typed = new Typed(".typing", {
    strings: ["Web-Developer", "Freelancer"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
});
var typed = new Typed(".name", {
    strings: ["Shiva Bhattacharjee"],
    typeSpeed: 50,
    backSpeed: 20,
    loop: true
});

//==========on click active class project section

let buttons = document.querySelectorAll('.work__item');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('active-work'));
        this.classList.add('active-work');        
    });
});

// filer for on click active class
let  mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// ==========popup if works

function togglePortfolioPopup(){
    document.querySelector(".portfolio").classList.toggle("open");
}
const menu = document.querySelector('.menu .nav__list .nav__item');
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
        navToggle.style.display = 'none';
    })
}
else{
    navMenu.classList.remove('show-sidebar');
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
        navToggle.style.display = 'flex';
    })
}

const navItems = menu.querySelectorAll('nav__item');

navItems.forEach(item => {
    const link = item.querySelector('nav__link');
    link.addEventListener('click', () => {
        link.classList.add('active-link')
    })
})