
// Places Card show
var placeContainer = document.querySelector('.place__container')

for(let i = 0; i < 6; i++){

    let prev = document.querySelector('.place__container').innerHTML
    let newPlace = `
    <div class="place__card">
        <img src=${placesData[i].imageUrl} alt="" class="place__img">
        
        <div class="place__content">
            <span class="place__rating">
                <i class="ri-star-line place__rating-icon"></i>
                <span class="place__rating-number">${placesData[i].rating}</span>
            </span>

            <div class="place__data">
                <h3 class="place__title">${placesData[i].title}</h3>
                <span class="place__subtitle">${placesData[i].subtitle}</span>
                <span class="place__price">${placesData[i].price}</span>
            </div>
        </div>

        <button class="button button--flex place__button">
            <i class="ri-arrow-right-line"></i>
        </button>
    </div>
    `
    placeContainer.innerHTML = prev + newPlace
}

// Discover Luxury Travel show

var discoverContainer = document.querySelector('.swiper-wrapper')

for(let i = 0; i < discoverData.length; i++){

    let prev = document.querySelector('.swiper-wrapper').innerHTML
    let newDiscover = `
    <div class="discover__card swiper-slide">
        <img src=${discoverData[i].imageUrl} alt="" class="discover__img">
        <div class="discover__data">
            <h2 class="discover__title">${discoverData[i].title}</h2>
            <span class="discover__description">${discoverData[i].description}</span>
        </div>
    </div>
    `
    discoverContainer.innerHTML = prev + newDiscover
}

// Articles Section
var articlesContainer = document.querySelector('.about')

for(let i = 0; i < articlesData.length; i++){

    let data = articlesData[i];
    let prev = document.querySelector('.about').innerHTML
    // alert(JSON.stringify(data));
    let newArticle = `
    <div class="about__container container grid">
        
        <div class="about__data">
            <h2 class="section__title about__title"> ${data.title[0]} <br> ${data.title[1]}</h2>
            <p class="about__description">${data.subtitle}</p>
            <a href="#" class="button">Read more</a>
        </div>
        
        <div class="about__img">
            <div class="about__img-overlay">
                <img src=${data.image[0]} alt="" class="about__img-one">
            </div>

            <div class="about__img-overlay">
                <img src=${data.image[1]} alt="" class="about__img-two">
            </div>
        </div>
        
    </div>
    `
    articlesContainer.innerHTML = prev + newArticle
}

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})




/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})