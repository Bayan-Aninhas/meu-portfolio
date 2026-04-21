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

const heroArea = document.querySelector('.hero');
const avatar = document.querySelector('.floating-avatar');

heroArea.addEventListener('mousemove', (e) => {
    // Pegar dimensões da tela
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    // Calcular deslocamento (dividido por 15 para ser suave)
    const moveX = (clientX - centerX) / 15;
    const moveY = (clientY - centerY) / 15;

    // Aplicar o movimento
    avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // Aumentar o brilho no movimento
    avatar.style.filter = `drop-shadow(0 0 50px rgba(255, 223, 0, 0.8))`;
});

// Resetar ao sair
heroArea.addEventListener('mouseleave', () => {
    avatar.style.transform = `translate(0, 0)`;
    avatar.style.filter = `drop-shadow(0 0 30px rgba(255, 223, 0, 0.6))`;
});