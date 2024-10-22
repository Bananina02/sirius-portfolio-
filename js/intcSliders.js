const swiper1 = document.querySelector(".swiper-container1");
const swiper2 = document.querySelector(".swiper-container2");
const eventNextResident = document.querySelector(".swiper-button-next.res");
const eventPrevResident = document.querySelector(".swiper-button-prev.res");
const eventNextPartner = document.querySelector(".swiper-button-next.par");
const eventPrevPartner = document.querySelector(".swiper-button-prev.par");
const eventPagResident = document.querySelector(".swiper-pagination.res");
const eventPagPartner = document.querySelector(".swiper-pagination.par");

let swiperResidents = new Swiper(swiper1, {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 1000,
  slideToClickedSlide: true,
  grabCursor: true,
  navigation: {
    nextEl: eventNextResident,
    prevEl: eventPrevResident,
  },
  pagination: {
    el: eventPagResident,
    type: "bullets",
    clickable: true,
  },
});

let swiperPartners = new Swiper(swiper2, {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  speed: 1000,
  slideToClickedSlide: true,
  grabCursor: true,
  navigation: {
    nextEl: eventNextPartner,
    prevEl: eventPrevPartner,
  },
  pagination: {
    el: eventPagPartner,
    type: "bullets",
    clickable: true,
  },
});
