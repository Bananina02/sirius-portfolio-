//opps
const navWrapper = document.querySelector(".nav__wrapper");
const oppsTop = document.querySelector(".opps__top");
const oppsLink = document.querySelector(".opps__link");

function width1024() {
  if (window.innerWidth < 1025) {
    navWrapper.append(oppsLink);
  } else {
    oppsTop.append(oppsLink);
  }
}

window.addEventListener("resize", width1024);
window.addEventListener("load", width1024);
