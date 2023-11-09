/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SWIPER DISCOVER ====================*/
let swiperPopular = new Swiper(".popular__container", {
  effect: "coverflow",
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: "auto",
  loop: false,
  spaceBetween: 32,
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  // reset: true,
});

sr.reveal(
  `.section__title, .home__data, .home__social-link,
           .popular__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, `,
  {
    origin: "right",
    interval: 50,
  }
);

sr.reveal(
  `.about__data, 
           .video__description, 
           .offer__data,
           .contact-left,
           .subscribe__description`,
  {
    origin: "top",
  }
);

sr.reveal(
  `.home__info, .about__img-overlay, 
           .video__content, .offer__img,
           .contact-right,
           .subscribe__img-h2`,
  {
    origin: "top",
    interval: 50,
  }
);
