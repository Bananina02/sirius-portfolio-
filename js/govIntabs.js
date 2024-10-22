// Tabs
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".intabs");
  const tabsBtn = document.querySelectorAll(".intabs__btn");
  const tabsContent = document.querySelectorAll(".intabs__content");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("intabs__btn")) {
        const tabsPath = e.target.dataset.intabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("intabs__btn--active");
        });
        document
          .querySelector(`[data-intabs-path="${tabsPath}"]`)
          .classList.add("intabs__btn--active");
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove("intabs__content--active");
    });
    document
      .querySelector(`[data-intabs-target="${path}"]`)
      .classList.add("intabs__content--active");
  };
});
