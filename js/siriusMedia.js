const lyceumVideo = document.querySelector(".lyceum__video");
const lyceumBottom = document.querySelector(".lyceum__bottom");
const lyceumContent = document.querySelector(".lyceum__content");

function innerWidth1024() {
  if (window.innerWidth < 1025) {
    lyceumBottom.append(lyceumVideo);
  } else {
    lyceumContent.append(lyceumVideo);
  }
}

window.addEventListener("resize", innerWidth1024);
window.addEventListener("load", innerWidth1024);
