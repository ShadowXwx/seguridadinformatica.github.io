// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const toggleMenu = document.getElementById("toggleMenu");
    const contentArea = document.getElementById("contentArea");
    const links = document.querySelectorAll(".menu-link");

    // Mostrar/Ocultar menú lateral
    toggleMenu.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
        contentArea.classList.toggle("full-width");
    });

    // Resaltar sección activa mientras se navega
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    links.forEach((link) => link.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        },
        { threshold: 0.6 } // Detectar cuando al menos el 60% de la sección es visible
    );

    // Observar todas las secciones de contenido
    document.querySelectorAll(".content").forEach((section) => {
        observer.observe(section);
    });

    // Desplazamiento suave al hacer clic en los enlaces del menú
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

