document.addEventListener("DOMContentLoaded", () => {
  const projectsTabs = document.querySelector(".projects__tabs");
  const tabsLine = document.querySelectorAll(".projects__tabs-line");
  const projectsBtn = document.querySelectorAll(".projects__tabs-btn");
  const projectsContent = document.querySelectorAll(".projects__tabs-content");

  if (projectsTabs) {
    projectsTabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("projects__tabs-btn")) {
        const tabsPath = e.target.dataset.projectsPath;
        projectsBtn.forEach((el) => {
          el.classList.remove("btn--active");
        });
        tabsLine.forEach((el) => {
          el.classList.remove("line--active");
        });
        document
          .querySelector(`[data-projects-path="${tabsPath}"]`)
          .classList.add("btn--active");
        document
          .querySelector(`[data-tabs-line="${tabsPath}"]`)
          .classList.add("line--active");
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    projectsContent.forEach((el) => {
      el.classList.remove("content--active");
    });
    document
      .querySelector(`[data-projects-target="${path}"]`)
      .classList.add("content--active");
  };
});
