const panels = document.querySelectorAll(".panel");

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

if (!isMobile()) {
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });
}

const container = document.querySelector(".container__images");

if (container && isMobile()) {
  container.addEventListener("scroll", () => {
    let center = container.scrollLeft + container.offsetWidth / 2;

    panels.forEach((panel) => {
      const panelCenter = panel.offsetLeft + panel.offsetWidth / 2;

      if (Math.abs(center - panelCenter) < panel.offsetWidth / 2) {
        panel.classList.add("active-mobile");
      } else {
        panel.classList.remove("active-mobile");
      }
    });

  });
}
