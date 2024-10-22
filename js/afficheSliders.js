function createPag(pagWrapper) {
  pagWrapper.classList.add("swiper-pagination");

  return pagWrapper;
}

function removeClassAttr(element) {
  element.classList.remove(
    "swiper-slide",
    "swiper-slide-visible",
    "swiper-slide-active",
    "swiper-slide-prev",
    "swiper-slide-next"
  );
  
  element.removeAttribute("role", "aria-label", "style");
}

function createSlider(sliderContainer, sliderCard, pag) {
  let sliderWrapper;

  function slider() {
    if (window.innerWidth < 481) {
      sliderContainer.classList.add("swiper-container");

      sliderWrapper = document.createElement("div");
      sliderWrapper.classList.add("swiper-wrapper");
      sliderContainer.append(sliderWrapper);

      sliderCard.forEach((card) => {
        card.classList.add("swiper-slide");
        sliderWrapper.append(card);
      });

      sliderContainer.append(createPag(pag));

      let swiper = new Swiper(sliderContainer, {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        speed: 1000,
        slideToClickedSlide: true,
        grabCursor: true,
        pagination: {
          el: pag,
          type: "bullets",
          clickable: true,
        },
      });
    } else {
      sliderContainer.classList.remove(
        "swiper-container",
        "swiper-initialized",
        "swiper-horizontal",
        "swiper-backface-hidden"
      );
      sliderContainer.removeAttribute("data-tabs-target");

      sliderWrapper.remove();

      sliderCard.forEach((card) => {
        sliderContainer.append(card);
        removeClassAttr(card);
      });

      pag.remove();

      const swiperNotification = document.querySelector(".swiper-notification");
      swiperNotification.remove();
    }
  }

  window.addEventListener("resize", slider);
  window.addEventListener("load", slider);
}

//calendar slider
const calendarCards = document.querySelector(".calendar-cards");
const calendarCard = document.querySelectorAll(".calendar-card");

const calendarPag = document.createElement("div");
calendarPag.classList.add("calendar-pag");

createSlider(calendarCards, calendarCard, calendarPag);

//daily slider
const dailyCards = document.querySelector(".daily-cards");
const dailyCard = document.querySelectorAll(".daily-card");

const dailyPag = document.createElement("div");
dailyPag.classList.add("daily-pag");

createSlider(dailyCards, dailyCard, dailyPag);

//kids slider
const kidsCards = document.querySelector(".kids-cards");
const kidsCard = document.querySelectorAll(".kids-card");

const kidsPag = document.createElement("div");
kidsPag.classList.add("kids-pag");

createSlider(kidsCards, kidsCard, kidsPag);

//lectorium slider
const lectoriumCards = document.querySelector(".lectorium-cards");
const lectoriumCard = document.querySelectorAll(".lectorium-card");

const lectoriumPag = document.createElement("div");
lectoriumPag.classList.add("lectorium-pag");

createSlider(lectoriumCards, lectoriumCard, lectoriumPag);
