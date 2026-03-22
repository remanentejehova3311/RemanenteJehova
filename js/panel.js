const panels = document.querySelectorAll(".panel");

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    if (isMobile()) {
      e.preventDefault();
    }

    if (isMobile() && panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      removeActiveClasses();
      panel.classList.add("active");
    }
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}