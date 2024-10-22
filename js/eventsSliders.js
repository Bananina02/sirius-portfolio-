const swiper1 = document.createElement("div");

const eventWrap = document.querySelector(".event__wrapper");
const eventBottom = document.querySelector(".event__bottom");
const eventContent = document.querySelector(".event__content");
const eventVideo = document.querySelector(".event__video");
const eventCards = document.querySelectorAll(".event__card");
const control = document.createElement("div");
const eventNext = document.createElement("div");
const eventPrev = document.createElement("div");
const eventPag = document.createElement("div");
eventPag.classList.add("event__pag");

const swiper2 = document.createElement("div");

const activitiesCards = document.querySelector(".activities__cards");
const activitiesCard = document.querySelectorAll(".activities__card");
const activitiesPag = document.createElement("div");
activitiesPag.classList.add("activities__pag");

function createSwiper(newSlider, cards) {
  newSlider.classList.add("swiper-container");

  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList.add("swiper-wrapper");

  newSlider.append(sliderWrapper);

  cards.forEach((card) => {
    sliderWrapper.append(card);
    card.classList.add("swiper-slide");
  });

  return newSlider;
}

function createPag(pagWrapper) {
  pagWrapper.classList.add("swiper-pagination");

  return pagWrapper;
}

function removeClassAttr(element) {
  element.classList.remove("swiper-slide");
  element.classList.remove("swiper-slide-visible");
  element.classList.remove("swiper-slide-active");
  element.classList.remove("swiper-slide-prev");
  element.classList.remove("swiper-slide-next");
  element.removeAttribute("role");
  element.removeAttribute("aria-label");
  element.removeAttribute("style");
}

function eventSlider() {
  if (window.innerWidth < 1025) {
    eventBottom.append(createSwiper(swiper1, eventCards));

    control.classList.add("event__control");
    eventWrap.append(control);

    eventPrev.classList.add("swiper-button-prev");
    control.append(eventPrev);

    eventNext.classList.add("swiper-button-next");
    control.append(eventNext);

    let swiper = new Swiper(swiper1, {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 1000,
      slideToClickedSlide: true,
      grabCursor: true,
      navigation: {
        nextEl: eventNext,
        prevEl: eventPrev,
      },
      pagination: {
        el: eventPag,
        type: "bullets",
        clickable: true,
      },
    });

    if (window.innerWidth < 481) {
      const sliderWrapper1 = eventBottom.querySelector(".swiper-wrapper");
      sliderWrapper1.prepend(eventVideo);
      eventVideo.classList.add("swiper-slide");

      eventBottom.append(createPag(eventPag));

      control.remove();
    } else {
      eventContent.append(eventVideo);
      removeClassAttr(eventVideo);
      sliderPag.remove();
    }
  } else {
    swiperContainer.remove();
    control.remove();
  }
}

function activitiesSlider() {
  if (window.innerWidth < 481) {
    activitiesCards.append(createSwiper(swiper2, activitiesCard));

    activitiesCards.append(createPag(activitiesPag));

    let swiperNew = new Swiper(swiper2, {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 1000,
      slideToClickedSlide: true,
      grabCursor: true,
      pagination: {
        el: activitiesPag,
        type: "bullets",
        clickable: true,
      },
    });
  }
}

window.addEventListener("resize", eventSlider);
window.addEventListener("resize", activitiesSlider);

window.addEventListener("load", eventSlider);
window.addEventListener("load", activitiesSlider);
