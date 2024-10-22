// document.addEventListener("DOMContentLoaded", () => {
//   const residentsTabs = document.querySelector(".residents__tabs");
//   const tabsLine = document.querySelectorAll(".residents__tabs-line");
//   const residentsBtn = document.querySelectorAll(".residents__tabs-btn");
//   const residentsContent = document.querySelectorAll(".residents__tabs-content");

//   if (residentsTabs) {
//     residentsTabs.addEventListener("click", (e) => {
//       if (e.target.classList.contains("residents__tabs-btn")) {
//         const tabsPath = e.target.dataset.residentsPath;
//         residentsBtn.forEach((el) => {
//           el.classList.remove("btn--active");
//         });
//         tabsLine.forEach((el) => {
//           el.classList.remove("line--active");
//         });
//         document
//           .querySelector(`[data-residents-path="${tabsPath}"]`)
//           .classList.add("btn--active");
//         document
//           .querySelector(`[data-tabs-line="${tabsPath}"]`)
//           .classList.add("line--active");
//         tabsHandler(tabsPath);
//       }
//     });
//   }

//   const tabsHandler = (path) => {
//     residentsContent.forEach((el) => {
//       el.classList.remove("content--active");
//     });
//     document
//       .querySelector(`[data-residents-target="${path}"]`)
//       .classList.add("content--active");
//   };
// });
