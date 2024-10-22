const affichePosterV = document.querySelector(".affiche__poster--v");
const affichePosterT = document.querySelector(".affiche__poster--t");

const afficheItems = document.querySelectorAll(".affiche__item");
const afficheIWraps = document.querySelectorAll(".affiche__item-wrap");

const tCardGrey = document.querySelector(".topics__card--bgcl");
const tCardB = document.querySelector(".topics__card--border");
const tCardRight = document.querySelector(".topics__right");
const tCardLeft = document.querySelector(".topics__left");




afficheItems.forEach((item, index) => {
  const className = `affiche__item-${index + 1}`;
  item.classList.add(className);
});

let AIWArray = [];

afficheIWraps.forEach((item, index) => {
  const className = `affiche__iw-${index + 1}`;
  item.classList.add(className);
  AIWArray.push(item);
});

// function innerWidth1024() {
//   if (window.innerWidth < 1025) {
//     // topics
//     tCardLeft.append(tCardGrey);
//     tCardLeft.append(tCardB);
//     // affiche
//     AIWArray.forEach((item, index) => {
//       if (index < 2) {
//         affichePosterV.append(item);
//       }
//       if (index > 1 && index < 5) {
//         affichePosterT.append(item);
//       }
//     });
//   } else {
//     // topics
//     tCardLeft.append(tCardGrey);
//     tCardLeft.append(tCardB);
//     // affiche
//     afficheItems.forEach((item, index) => {
//       const wrapper = AIWArray[index];
//       item.append(wrapper);
//     });
//   }
// }

// function innerWidth480() {
//   if (window.innerWidth < 481) {
//     // affiche
//     AIWArray.forEach((item, index) => {
//       if (index < 2) {
//         affichePosterV.append(item);
//       }
//       if (index > 1 && index < 5) {
//         affichePosterT.append(item);
//       }
//     });
//   } else {
//     // affiche
//     afficheItems.forEach((item, index) => {
//       const wrapper = AIWArray[index];
//       item.append(wrapper);
//     });
//   }
// }

window.addEventListener("resize", innerWidth1024);
window.addEventListener("load", innerWidth1024);

// window.addEventListener("resize", innerWidth480);
// window.addEventListener("load", innerWidth480);
