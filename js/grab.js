function grab(list) {
  const containers = document.querySelectorAll(list);

  containers.forEach((container) => {
    let isMouseDown = false;
    let initialX, scrollLeft;

    container.addEventListener("mousedown", function (e) {
      isMouseDown = true;
      this.classList.add("active");
      initialX = e.pageX - this.offsetLeft;
      scrollLeft = this.scrollLeft;
    });

    container.addEventListener("mouseleave", function (e) {
      isMouseDown = false;
      this.classList.remove("active");
    });

    container.addEventListener("mouseup", function (e) {
      if (isMouseDown) {
        e.preventDefault();
        isMouseDown = false;
      }
      this.classList.remove("active");
    });

    container.addEventListener("mousemove", function (e) {
      if (isMouseDown) {
        e.preventDefault();
        const x = e.pageX - this.offsetLeft;
        const scrollAmount = scrollLeft - 3 * (x - initialX);
        if (Math.abs(this.scrollLeft - scrollAmount) > 5) {
          isMouseDown = true;
        }
        this.scrollLeft = scrollAmount;
      }
    });

    container.addEventListener("touchstart", function (e) {
      isMouseDown = true;
      this.classList.add("active");
      initialX = e.touches[0].pageX - this.offsetLeft;
      scrollLeft = this.scrollLeft;
    });

    container.addEventListener("touchend", function (e) {
      if (isMouseDown) {
        e.preventDefault();
        isMouseDown = false;
      }
      this.classList.remove("active");
    });

    container.addEventListener("touchmove", function (e) {
      if (isMouseDown) {
        e.preventDefault();
        const x = e.touches[0].pageX - this.offsetLeft;
        const scrollAmount = scrollLeft - 3 * (x - initialX);
        if (Math.abs(this.scrollLeft - scrollAmount) > 5) {
          isMouseDown = true;
        }
        this.scrollLeft = scrollAmount;
      }
    });
  });
}

const projectsTabsLst = ".projects__tabs-lst";
const faqTabs = ".faq__tabs-lst";
const activitiesLst = ".activities__lst";

grab(projectsTabsLst);
grab(faqTabs);
grab(activitiesLst);
