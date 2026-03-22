fetch("partials/menu.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("menu-container").innerHTML = html;
        initMenu();
    })
    .catch(err => console.error(err));

function initMenu() {
    const openBtn = document.getElementById("open");
    const closeBtn = document.getElementById("close");
    const closeInsideBtn = document.querySelector(".menu-close");
    const offcanvas = document.querySelector(".offcanvas");
    const overlay = document.getElementById("overlay");

    if (!openBtn || !closeBtn || !offcanvas) {
        console.error("Elementos del menú no encontrados");
        return;
    }

    openBtn.addEventListener("click", () => {
        offcanvas.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");
    });

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    closeInsideBtn.addEventListener("click", closeMenu);

    function closeMenu() {
        offcanvas.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
}
