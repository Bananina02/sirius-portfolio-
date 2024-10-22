//how slider
const howImg = document.querySelector(".how__img");

const storiesSlider1 = document.createElement("div");
const howCard1 = document.querySelector(".how__img-big");
const howCard2 = document.querySelector(".how__img-small");

const howPag = document.createElement("div");
howPag.classList.add("how__pag");

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

function howSlider() {
  if (window.innerWidth < 481) {
    howImg.append(storiesSlider1);
    storiesSlider1.classList.add("swiper-container");

    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("swiper-wrapper");
    storiesSlider1.append(sliderWrapper);

    sliderWrapper.append(howCard1);
    howCard1.classList.add("swiper-slide");

    sliderWrapper.append(howCard2);
    howCard2.classList.add("swiper-slide");

    storiesSlider1.append(createPag(howPag));

    let swiper = new Swiper(storiesSlider1, {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 1000,
      slideToClickedSlide: true,
      grabCursor: true,
      pagination: {
        el: howPag,
        type: "bullets",
        clickable: true,
      },
    });
  } else {
    removeClassAttr(howCard1);
    removeClassAttr(howCard2);

    storiesSlider1.remove();
    howPag.remove();

    howImg.append(howCard1);
    howImg.append(howCard2);
  }
}

//others slider
const others = document.querySelector(".others");

const storiesSlider2 = document.createElement("div");

const othersLst = document.querySelector(".others__lst");
const othersCards = document.querySelectorAll(".others__itm");

const othersPag = document.createElement("div");
othersPag.classList.add("others__pag");

function otherSlider() {
  if (window.innerWidth < 481) {
    storiesSlider2.classList.add("swiper-container");
    others.append(storiesSlider2);

    othersLst.classList.add("swiper-wrapper");

    storiesSlider2.append(othersLst);

    othersCards.forEach((card) => {
      card.classList.add("swiper-slide");
    });

    storiesSlider2.append(createPag(othersPag));

    let swiperNew = new Swiper(storiesSlider2, {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 1000,
      slideToClickedSlide: true,
      grabCursor: true,
      pagination: {
        el: othersPag,
        type: "bullets",
        clickable: true,
      },
    });
  } else {
    others.append(othersLst);

    othersLst.classList.remove("swiper-wrapper");
    othersLst.removeAttribute("id");
    othersLst.removeAttribute("aria-live");
    othersLst.removeAttribute("style")

    othersCards.forEach((card) => {
      removeClassAttr(card);
    });

    storiesSlider2.remove();
    
    othersPag.remove();
  }
}

window.addEventListener("resize", howSlider);
window.addEventListener("resize", otherSlider);

window.addEventListener("load", howSlider);
window.addEventListener("load", otherSlider);
