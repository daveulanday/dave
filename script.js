document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully!');
});


