const card1 = document.getElementById("card-1");
const card2 = document.getElementById("card-2");

const lyceumBot = document.querySelector(".lyceum__bottom");

const lyceumSlider = document.createElement("div");
const sliderWrapper = document.createElement("div");
const sliderPag = document.createElement("div");

function innerWidth720() {
  if (window.innerWidth < 721) {
    lyceumSlider.classList.add("lyceum__slider");
    lyceumSlider.classList.add("swiper-container");

    lyceumBot.append(lyceumSlider);

    sliderWrapper.classList.add("lyceum__slider-wrap");
    sliderWrapper.classList.add("swiper-wrapper");

    lyceumSlider.append(sliderWrapper);

    sliderPag.classList.add("swiper-pagination");

    sliderWrapper.append(card1);
    card1.classList.add("swiper-slide");

    sliderWrapper.append(card2);
    card2.classList.add("swiper-slide");

    lyceumSlider.append(sliderPag);

    let swiper = new Swiper(lyceumSlider, {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 8,
      speed: 1000,
      slideToClickedSlide: true,
      pagination: {
        el: sliderPag,
        type: "bullets",
        clickable: true,
      },
    });

  } else
  {
    lyceumBot.append(card1);
    card1.classList.remove("swiper-slide");
    card1.classList.remove("swiper-slide-visible");
    card1.classList.remove("swiper-slide-active");
    card1.classList.remove("swiper-slide-prev");
    card1.removeAttribute("role");
    card1.removeAttribute("aria-label");
    card1.removeAttribute("style");

    lyceumBot.append(card2);
    card2.classList.remove("swiper-slide");
    card2.classList.remove("swiper-slide-next");
    card2.classList.remove("swiper-slide-visible");
    card2.classList.remove("swiper-slide-active");
    card2.removeAttribute("role");
    card2.removeAttribute("aria-label");
    card2.removeAttribute("style");

    lyceumSlider.remove();
    sliderWrapper.remove();
    sliderPag.remove();
  }
}

window.addEventListener("resize", innerWidth720);
window.addEventListener("load", innerWidth720);
