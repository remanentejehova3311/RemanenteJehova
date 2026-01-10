fetch("partials/menu.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("menu-container").innerHTML = html;
    })
    .catch(err => console.error("Error cargando menú:", err));