const navLinkEls = document.querySelectorAll('.nav-item');
const sectionEls = document.querySelectorAll('.section');
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');
window.sr = ScrollReveal({ reset: true })

sr.reveal('.title-home', {
  duration: 1500
})

sr.reveal('.subtitle-home', {
    duration: 1500
})

sr.reveal('.image-home1', {
  duration: 1500
})

sr.reveal('.image-home2', {
  duration: 1500
})

sr.reveal('.text-home', {
  duration: 1500
})

sr.reveal('.title-about', {
  duration: 1500
})

sr.reveal('.subtitle-about', {
  duration: 1500
})

sr.reveal('.image-about1', {
  duration: 1500
})

sr.reveal('.text-about', {
  duration: 1500
})

sr.reveal('.title-contact', {
  duration: 1500
})

sr.reveal('.subtitle-contact', {
  duration: 1500
})

sr.reveal('.title-text-contact', {
  duration: 1500
})

sr.reveal('.text-contact', {
  duration: 1500
})

sr.reveal('.button-contact', {
  duration: 1500
})

hamburgerEl.addEventListener('click', () => {
  navEl.classList.toggle('nav--open');
  hamburgerEl.classList.toggle('hamburger--open');
})

navEl.addEventListener('click', () => {
  navEl.classList.remove('nav--open');
  hamburgerEl.classList.remove('hamburger--open');
})

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if (navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            navLinkEl.classList.add('active');
        }
    });
});