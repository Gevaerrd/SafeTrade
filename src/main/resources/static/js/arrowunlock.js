document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".scroll-down-arrow");
    const body = document.body;

    if (arrow) {
        arrow.addEventListener("mouseover", function () {
            body.classList.add("scroll-enabled");

            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });

            arrow.classList.add("hidden");
            // Esconde a seta depois de um pequeno delay (opcional)
            setTimeout(() => {
                arrow.style.display = "none";
            }, 500); // meio segundo depois do scroll
        });
    }
});