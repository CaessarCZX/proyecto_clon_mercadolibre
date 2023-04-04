const swiper = new Swiper('.content__carousel__swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteractiIon: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });