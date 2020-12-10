var mySwiper = new Swiper('.swiper-container', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

   },

   keyboard: {
      enabled: true,
      pageUpDown: true,
   },
   loop: true,

   mousewheel: {
      invert: true,
   },
});


