ExecuteEvents();

function ExecuteEvents() {
    document.addEventListener("DOMContentLoaded", iniciar);
}

function iniciar() {
  slide_head();
  slide_testimonials();
  nav_fixed();
  venobox();
}

const slide_head = () => {
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const slide_testimonials = () => {
  var swiper2 = new Swiper('.swiper-container-two', {
    effect: 'flip',
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next-two',
      prevEl: '.swiper-button-prev-two',
    },
  });
}

const nav_fixed = () => {
  window.onscroll = function (){
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      let ul = document.querySelector('nav');
      (scroll >= 100) ? ul.classList.add("nav_fixed") : ul.classList.remove("nav_fixed");
  }
}

const venobox = () => {
  $('.venobox').venobox({
      border     : '8px',                             
      bgcolor    : '#DDDDDD',                   
      numeratio  : true                              
  });
}
