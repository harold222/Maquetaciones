ExecuteEvents();

function ExecuteEvents() {
    document.addEventListener("DOMContentLoaded", iniciar);
}

function iniciar() {
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

  nav_fixed();
}

const nav_fixed = () => {
  window.onscroll = function (){
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      let ul = document.querySelector('nav');
      (scroll >= 100) ? ul.classList.add("nav_fixed") : ul.classList.remove("nav_fixed");
  }
}