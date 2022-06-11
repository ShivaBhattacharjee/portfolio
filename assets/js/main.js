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


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
    }else{
        console.log("No");
    }
})
function togglePortfolioPopup(){
    document.querySelector(".portfolio").classList.toggle("open");
}

const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
        navMenu.classList.remove('show-slider')
    })
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}