const asideMainWrap = document?.querySelector(".aside-main__wrap");
const allSirius = document?.getElementById("all-sirius");
const burger = document?.getElementById("burger");

const footer = document?.querySelector(".footer");
const footerTop = document?.querySelector(".footer__top");
const footerLogo = document?.querySelector(".footer__logo");
const footerTtl = document?.querySelector(".footer__ttl");
const footerTopBtn = document?.querySelector(".footer__top-btn");
const footerSearch = document?.querySelector(".footer__search");

const container = document.createElement("div");
container.classList.add("container");
container.classList.add("footer__container");

const footerCatalogue = document?.querySelector(".footer__catalogue");
const footerLstWrap = document?.querySelectorAll(".footer__lst-wrap");
const footerLst = document?.querySelectorAll(".footer__lst");
const footerLinkControl = document?.querySelectorAll(".footer__link-control");
const footerItemSVG = document?.querySelectorAll(".footer__item svg");
const footerTtlLink = document?.querySelectorAll(".footer__ttl-link");
const footerLstOpen = document?.querySelectorAll(".footer__lst-open");
const footerCatalogueLink = document?.querySelectorAll(
  ".footer__catalogue-link"
);
const footerBottom = document?.querySelector(".footer__bottom");

//accordion
function width720() {
  if (footerLogo) footerLogo.style.display = "none";

  footerTtlLink.forEach((link) => {
    if (link) link.style.pointerEvents = "none";
  });

  if (window.innerWidth < 721) {
    footerLst.forEach((lst) => {
      if (lst) lst.style.display = "block";
    });

    footerLstOpen.forEach((lst) => {
      if (lst) lst.style.display = "block";
    });

    const accordions = document.querySelectorAll(".footer__lst-wrap");

    accordions.forEach((el) => {
      el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(".footer__link-control");
        const content = self.querySelector(".footer__accordion-content");

        if (control && content) {
          self.classList.toggle("open");

          if (self.classList.contains("open")) {
            control.setAttribute("aria-expanded", true);
            content.setAttribute("aria-hidden", false);
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            control.setAttribute("aria-expanded", false);
            content.setAttribute("aria-hidden", true);
            content.style.maxHeight = null;
          }
        }
      });
    });
  } else {
    footerLstOpen.forEach((lst) => {
      if (lst) lst.style.display = "none";
    });
  }
}

function click(itm) {
  itm?.addEventListener("click", () => {

    asideMainWrap.style.display = "none";

    footer.style.backgroundColor = "#ffffff";
    footer.style.color = "#0F2233";
    footer.style.paddingTop = "0";
    footer.prepend(footerTop);
    footerTop.append(container);
    container.append(footerTopBtn);
    //container.append(footerSearch);

    footerTop.style.boxShadow = "0px 1px 4px rgba(0, 0, 0, 0.1)";
    footerLogo.style.margin = "0 10px";
    footerBottom.style.display = "none";
    footerTtl.style.display = "none";
    footerTopBtn.style.display = "flex";
    //footerSearch.style.display = "flex";
    footerCatalogue.style.paddingLeft = "95px";
    footerCatalogue.style.justifyContent = "space-between";
    footerLstWrap.forEach((lst) => {
      lst.style.flexBasis = "45%";
    });
    footerLinkControl.forEach((btn) => {
      btn.style.width = "100%";
    });
    footerCatalogueLink.forEach((link) => {
      link.style.marginRight = "8px";

      link.style.textDecorationLine = "underline";
      link.style.textDecorationColor = "#A7A5A6";
    });
    footerItemSVG.forEach((svg) => {
      svg.style.display = "block";
    });

    width720();
    window.addEventListener("resize", width720);
    window.addEventListener("load", width720);
  });
}

click(allSirius);
click(burger);

footerTopBtn?.addEventListener("click", () => {
  asideMainWrap.style.display = "flex";
  location.reload();
});
