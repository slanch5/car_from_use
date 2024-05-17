const swiper = new Swiper(".swiper", {



   autoplay: {
      delay: 3500,
      disableOnInteraction: false,
   },
   loop: true,
   slidesPerView: 3,
   spaceBetween: 14,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,

   },

   breakpoints: {
      375: {
         slidesPerView: 1,

      },
      640: {
         slidesPerView: 2,

      },
      768: {
         slidesPerView: 3,

      },

   },




},


);
