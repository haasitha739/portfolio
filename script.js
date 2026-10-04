const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".navbar").style.boxShadow = "0 3px 15px lightblue";
    });
});

const footerMessage = document.getElementById("footer-message");

footerMessage.addEventListener("click", function() {
    footerMessage.textContent = "Thanks for visiting my portfolio!";
});
