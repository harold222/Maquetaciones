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
}
