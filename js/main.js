// show menu
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');
// menu show
// validate is constant exists
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show__menu');
    });
}
// menu hidden
// validate is constant exists
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show__menu');
    });
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // after clicking on nav link we have to remove nav menu
    navMenu.classList.remove('show__menu');
}

navLink.forEach((n) => n.addEventListener('click',linkAction));



// scroll section active link




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav div ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active__link');
                document.querySelector('header nav div ul li a[href*=' + id + ']').classList.add('active__link');
            });
        }
    });
};







// change bg header
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 80 viewport height, add the scroll-header to the header tag.
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


// show scrol up
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 viewport height, add the show scroll class to scroll-top class.
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


// about tbs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        })

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
})


// contact form
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');


const sendEmail = (e) => {
    e.preventDefault();

    // check if the feild has a value
    if (
    contactName.value === '' || 
    contactEmail.value === '' || 
    contactSubject.value === '' || 
    contactMessage.value === ''
    ){
        //show message
        errorMessage.textContent = 'Write all the input fields';
    }
    else{
        // service id - template id - #form - public key
        emailjs.sendForm('service_sh45248',
        'template_q1ytx6p',
        '#contact-form',
        'L_joCQhUeXT2Cvfle')
            .then(() => {
                // show message and add color, window dot to open emoji
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent.';

                // remove message after 5 second
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 5000);
            }, 
            (error) => {
                alert('OOPs! SOMETHING WENT WRONG...', error)
            }
        );

        // clear input  fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
}

contactForm.addEventListener('submit',sendEmail);



function projectCab() {
    window.open('https://drive.google.com/file/d/1bb-iSbvq3PWI2Re6nvcc16DVXTrLNq7z/view', '_blank');
}
function projectBus() {
    window.open('https://drive.google.com/file/d/1WkbN6rdws0Finreaj-luap1gRjABz3V5/view', '_blank');
}
function projectCosmetica() {
    window.open('https://drive.google.com/file/d/1ycV5PkACPfqPxEEQgHHCd89Qv6rl_gDq/view?usp=sharing', '_blank');
}


