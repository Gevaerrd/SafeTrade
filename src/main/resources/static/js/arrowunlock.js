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

            setTimeout(() => {
                void arrow.offsetWidth; // ← reflow mágico
                arrow.classList.add("hidden")
            }, 500);
        });
    }
});