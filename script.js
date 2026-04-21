const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada!");
});

// Automatically update the year to 2025 or current
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p:last-child').innerHTML = `&copy; ${currentYear}`;

/* Optional: Add a fade-in effect to the entire page */
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada! 🚀");
});

