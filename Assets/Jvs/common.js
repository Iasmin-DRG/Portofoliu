/*========== Show Menu ==========*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*========== Menu Show ==========*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*========== Hide Show ==========*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*========== Remove Menu Mobile ==========*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));


/*========== Background Header ==========*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*========== Contact Form ==========*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      Message = document.getElementById('message'),
      contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
    e.preventDefault();

    if (
        contactName.value === '' ||
        contactEmail.value === '' ||
        Message.value === ''
    ) {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');
        contactMessage.textContent = 'Completați toate câmpurile';
    } else {
        emailjs.sendForm('service_ix8vvop',
            'template_l1ra8se',
            '#contact-form',
            '75eU35SVA3jJW5EDX'
        )
        .then(() => {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Mesaj trimis ✓';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        },
        (error) => {
            alert('Operațiunea a eșuat. Încercați din nou.', error);
        }
      );

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
};   

      contactForm.addEventListener('submit', sendEmail);