//authorities
const authoritiesTop = document.querySelector(".authorities__top");
const authoritiesDownload = document.querySelector(".authorities__download");
const authoritiesInf = document.querySelector(".authorities__inf");

function width720() {
  if (window.innerWidth < 721) {
    authoritiesTop.prepend(authoritiesInf);
  } else {
    authoritiesDownload.prepend(authoritiesInf);
  }
}

window.addEventListener("resize", width720);
window.addEventListener("load", width720);

//tabs
const intabsContentWrap = document.querySelector(".intabs__content-wrap");

const intabsTitles = document.querySelector(".intabs__titles");
const intabsTitles2 = document.createElement("div");
const intabsTtl2 = document.getElementById("intabs__ttl-2");

const intabsLists = document.querySelector(".intabs__lists");
const intabsRightLst = document.querySelector(".intabs__right-lst");

function width1024() {
  if (window.innerWidth < 1025) {
    intabsLists.prepend(intabsTitles);

    intabsTitles2.classList.add("intabs__titles");
    intabsTitles2.append(intabsTtl2);

    intabsLists.insertBefore(intabsTitles2, intabsRightLst);
  } else {
    intabsTitles2.remove();

    intabsContentWrap.insertBefore(intabsTitles, intabsLists);

    intabsTitles.append(intabsTtl2);
  }
}

window.addEventListener("resize", width1024);
window.addEventListener("load", width1024);
