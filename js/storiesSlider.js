function grabDesk() {
  if (window.innerWidth > 480) {
    [...document.querySelectorAll(".stories__slider")].forEach(
      (container, n = !1, i = void 0, r = void 0, a = !1, t = 0) => {
        container.addEventListener("mousedown", function (e) {
          (n = !0), this.classList.add("active");
          (i = e.pageX - this.offsetLeft), (r = this.scrollLeft);
        });
        container.addEventListener("mouseleave", function (e) {
          (n = !1), this.classList.remove("active");
        });
        container.addEventListener("mouseup", function (e) {
          a && (e.preventDefault(), (a = !1)),
            (n = !1),
            this.classList.remove("active");
        });
        container.addEventListener("mousemove", function (e) {
          var t;
          n &&
            (e.preventDefault(),
            (t = e.pageX - this.offsetLeft),
            (t = r - 3 * (t - i)),
            5 < Math.abs(this.scrollLeft - t) && (a = !0),
            (this.scrollLeft = t));
        });
      }
    );
  }
}

window.addEventListener("resize", grabDesk);
window.addEventListener("load", grabDesk);

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

const storiesSlider = document.querySelector(".stories__slider");

const slider = document.createElement("div");
const swiperWrapper = document.createElement("div");

const storiesCard = document.querySelectorAll(".stories__card");

const storiesPag = document.createElement("div");
storiesPag.classList.add("stories__pag");

function createSlider() {
  if (window.innerWidth < 481) {
    slider.classList.add("swiper-container");
    storiesSlider.append(slider);

    swiperWrapper.classList.add("swiper-wrapper");

    slider.append(swiperWrapper);

    storiesCard.forEach((card) => {
      swiperWrapper.append(card);
      card.classList.add("swiper-slide");
    });

    slider.append(createPag(storiesPag));

    let swiper = new Swiper(slider, {
      slidesPerView: "auto",
      slidesPerGroup: 1,
      speed: 1000,
      slideToClickedSlide: true,
      grabCursor: true,
      pagination: {
        el: storiesPag,
        type: "bullets",
        clickable: true,
      },
    });
  }
  else {
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperWrapper.removeAttribute("id");
    swiperWrapper.removeAttribute("aria-live");
    swiperWrapper.removeAttribute("style");

    storiesCard.forEach((card) => {
      storiesSlider.append(card);
      removeClassAttr(card);
    });

    slider.remove();
    storiesPag.remove();
  }
}

window.addEventListener("resize", createSlider);
window.addEventListener("load", createSlider);
