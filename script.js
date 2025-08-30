document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".animate-fade");
    const slideElements = document.querySelectorAll(".animate-slide");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
    slideElements.forEach(el => observer.observe(el));
});
