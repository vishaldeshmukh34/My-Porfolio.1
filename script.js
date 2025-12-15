const typingElement = document.getElementById("typing");
const words = ["UI/UX Designer", "Web Developer", "Java Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const current = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();






















// Toggle menu for mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
