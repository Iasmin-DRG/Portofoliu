/*========== Active Link ==========*/
const navlink = document.querySelectorAll('.nav__link');

function activeLink() {
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link'); 
}

navlink.forEach((a) => a.addEventListener('click', activeLink));

/*========== Background Header ==========*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*========== Mixitup Filter ==========*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});

/* Active Work */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork() {
    linkWork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work'); 
}

linkWork.forEach((a) => a.addEventListener('click', activeWork));

/*========== Testimonials Swiper ==========*/
var testiSwiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});

/*========== Contact Form ==========*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      Message = document.getElementById('message'),
      contactMessage = document.getElementById('contact-message');
const sendEmail = function (e) {
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
        fetch('https://app-fc81ca79-e0cb-4ce1-9ad4-ba76e2dc26af.cleverapps.io/createContact',{
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contactName: contactName.value,
                contactEmail: contactEmail.value,
                message: Message.value,
            }),
          })
          .catch((err)=>{
            console.log(err)
          })

          emailjs.sendForm('service_ix8vvop',
            'template_l1ra8se',
            '#contact-form',
            '75eU35SVA3jJW5EDX'
        )
        .then(function() {
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Mesaj trimis ✓';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        },
        (error) => {
            alert('Operațiunea a eșuat. Încercați din nou.', error);
        });

      contactName.value = '';
      contactEmail.value = '';
      Message.value = '';
    }
};   

      contactForm.addEventListener('submit', sendEmail);