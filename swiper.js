const img = document.querySelector(".swiperImg");
if(img){
    var swiper = new Swiper(img, {
        slidesPerView: 'auto',
        loop: false,
        effect: "fade",
        autoplay: true,
        speed: 800,
        breakpoints: {
        }
    });
}