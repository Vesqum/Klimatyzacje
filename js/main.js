const nav = document.querySelector('.nav');
const burgerNav = document.querySelector('.burger-btn');
const allVanItems = document.querySelectorAll('.nav__item');
const btnGallery = document.querySelector('.hero-img__btn');
const gallery = document.querySelector('.gallery__box');
const xmark = document.querySelector('.gallery__xmark');
const whiteSection = document.querySelector('.white-section');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSection = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

function handleNav() {
    nav.classList.toggle('nav--active')
    navBtnBars.classList.remove('black-bars-color')

    allVanItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemAnimation()
}

const handleNavItemAnimation = () => {
    let delayTime = 0;

    allVanItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = `.${delayTime}s`;
        delayTime++;
    })
}



const handelToggleGallery = () => {
    gallery.classList.toggle('gallery__box--active')
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = `${year}`
}

const handleObsever = () => {
    const currentSection = window.scrollY;

    allSection.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
           console.log(section.offsetTop)
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }

    })

    
}

handleCurrentYear();


burgerNav.addEventListener('click', handleNav)
btnGallery.addEventListener('click', handelToggleGallery)
xmark.addEventListener('click', handelToggleGallery)
window.addEventListener('scroll', handleObsever)



