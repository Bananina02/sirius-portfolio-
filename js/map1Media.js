//authorities
const cityWrapper = document.querySelector(".city__wrapper");
const cityTop = document.querySelector(".city__top");
const cityTxt = document.querySelector(".city__txt");

function width1024() {
  if (window.innerWidth < 1025) {
    cityWrapper.append(cityTxt);
  } else {
    cityTop.append(cityTxt);
  }
}

window.addEventListener("resize", width1024);
window.addEventListener("load", width1024);
