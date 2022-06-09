

/************************** Menu Toggle */
// Toggle menu onClick


const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
  //  const nav = document.querySelector('.nav');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const hero = document.querySelector('.hero');
const body = document.querySelector('.body');

//when menu icon is clicked toggle the 'active' class on these elements
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    header.classList.toggle('active');
  //  nav.classList.toggle('active');
    hero.classList.toggle('active');
    body.classList.toggle('active');

    //when nav links in the menu are clicked remove the 'active' class on these elements
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
// Add the 'scroll-active' class to the menu nav links if they are in visible - onScroll


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
// Toggle tab heading and its content - onClick


const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // make the target (the tab clicked) a dataset variable
        const target = document.querySelector(tab.dataset.tabTarget)
        // when tab is clicked remove the 'active' class for the tab content
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        // remove 'active' class for the tab clicked
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        // add 'active' class for the tab clicked and its content
        tab.classList.add('active')
        target.classList.add('active');
    });
});


/************************** Scroll down to animate projects */
// each project does small animation when coming into view by scrolling down


const revealProject = () => {
    // select all projects
    const projects = document.querySelectorAll('.project-img-container');

    for (let i = 0; i < projects.length; i++) {
        // identify distance above project to start animation - 150px
        const windowHeight = window.innerHeight;
        const elementTop = projects[i].getBoundingClientRect().top;
        const elementVisible = 150;

        // if element goes below 150px from top add the 'show' class (animation)
        if (elementTop < windowHeight - elementVisible) {
            projects[i].classList.add('show');
        }   else {
            // if goes above then remove 'show' class
            projects[i].classList.remove('show');
        };
    };
};
// call the function
window.addEventListener('scroll', revealProject);
