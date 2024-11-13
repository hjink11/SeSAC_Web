var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
      delay : 3500,
      disableOnInteraction : false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

});