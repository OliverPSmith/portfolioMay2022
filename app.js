

/************************** Menu Toggle */

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
  //  const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const hero = document.querySelector('.hero');
const body = document.querySelector('.body');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    header.classList.toggle('active');
  //  nav.classList.toggle('active');
    hero.classList.toggle('active');
    body.classList.toggle('active');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active')
            header.classList.remove('active');
          //  nav.classList.remove('active');
            hero.classList.remove('active');
            body.classList.remove('active');
        });
    };
});

/************************** Scroll to highlight menu option */

const section = document.querySelectorAll('section');
const menu = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    section.forEach((i) => {
        const top = window.scrollY;
        const offset = i.offsetTop - 150;
        const height = i.offsetHeight;
        const id = i.getAttribute('id');

        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove('scroll-active');
                document.querySelector('.nav-link[href*=' + id + ']' ).classList.add('scroll-active');
            });
        }
    });
};



/************************** Work Tab Toggle */

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active')
        target.classList.add('active');
    });
});


/************************** Scroll down to animate projects */

const revealProject = () => {
    const projects = document.querySelectorAll('.project-img-container');

    for (let i = 0; i < projects.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = projects[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            projects[i].classList.add('show');
            console.log('scrolling')
        }   else {
            projects[i].classList.remove('show');
        };
    };
};
window.addEventListener('scroll', revealProject);