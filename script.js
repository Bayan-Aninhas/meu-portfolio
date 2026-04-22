/* =========================
   EMAILJS
========================= */
emailjs.init("QXrJK1AQWdrrXkuD-");

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const btn = form.querySelector(".submit-button");
    if (btn) {
      btn.textContent = "A enviar...";
      btn.disabled = true;
    }

    emailjs.sendForm(
      "service_q47gizr",
      "template_6pkep1z",
      form // 👈 CORREÇÃO AQUI
    )
    .then(() => {
      showToast("success");
      form.reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      showToast("error");
    })
    .finally(() => {
      if (btn) {
        btn.textContent = "ENVIAR";
        btn.disabled = false;
      }
    });
  });
}

/* =========================
   FOOTER YEAR
========================= */
const yearEl = document.querySelector('.footer-bottom p:last-child');
if (yearEl) {
  yearEl.innerHTML = `&copy; ${new Date().getFullYear()}`;
}

/* =========================
   HERO PARALLAX
========================= */
const heroArea = document.querySelector('.hero');
const avatar = document.querySelector('.floating-avatar');

if (heroArea && avatar) {
  heroArea.addEventListener('mousemove', (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (e.clientX - centerX) / 15;
    const moveY = (e.clientY - centerY) / 15;

    avatar.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  heroArea.addEventListener('mouseleave', () => {
    avatar.style.transform = `translate(0, 0)`;
  });
}

/* =========================
   TOAST
========================= */
function showToast(type = 'success') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const messages = {
    success: {
      title: 'Mensagem enviada!',
      text: 'Vou responder em breve.'
    },
    error: {
      title: 'Erro ao enviar',
      text: 'Tenta novamente.'
    }
  };

  const { title, text } = messages[type];

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;

  toast.innerHTML = `
    <div>
      <strong>${title}</strong>
      <p>${text}</p>
    </div>
  `;

  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('toast--visible'));

  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* =========================
   SCROLL REVEAL (SÓ UMA VEZ)
========================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* =========================
   PROJECT FILTER
========================= */
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.project-card');

if (tabs.length && cards.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;

        card.style.transition = "0.3s ease";

        if (match) {
          card.style.opacity = "1";
          card.style.transform = "scale(1)";
          card.style.pointerEvents = "auto";
        } else {
          card.style.opacity = "0.2";
          card.style.transform = "scale(0.97)";
          card.style.pointerEvents = "none";
        }
      });
    });
  });
}