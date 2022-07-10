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
let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

// ==========popup if works

function togglePortfolioPopup() {
    document.querySelector(".portfolio").classList.toggle("open");
}
// const menu = document.querySelector('nav .container ul');
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
        navMenu.classList.remove('show-slider')
        navToggle.style.display = 'none';
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
        navToggle.style.display = 'flex';
    })
}

// const sections = document.querySelectorAll("section[id")

// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//     let scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetheight;
//         const sectionTop = current.offsetTop - 50,
//             sectionId = current.getAttribute("id");
//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
//         {
//             document.querySelector('.nav__menu a[href"= ' + sectionId 
//             + ']').classList.add("active-link")
//             console.log("yes")
//         }
//         else{
//             document.querySelector('.nav__menu a[href"=' + sectionId + ']'.classList.remove("acto"))
//         }
//     })
// }
// const menu = document.querySelector('nav .menu ul"');
const menu = document.querySelector('nav .menu ul');
const navItems = menu.querySelectorAll('li');
const changeActiveItem = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active-link');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active-link')
    })
})

