// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Join Button Alert
document.querySelector("button").addEventListener("click", () => {
    alert("Welcome to PowerFit Gym 💪 Our team will contact you soon!");
});
