// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== BURGER MENU =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    burger.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) navLinks.classList.remove('open');
  });
}

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  link.classList.remove('active');
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ===== FALLING PETALS (homepage only) =====
const petalContainer = document.getElementById('petalContainer');
if (petalContainer) {
  const petals = ['🌸', '🌺', '✿', '❀'];
  function createPetal() {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = petals[Math.floor(Math.random() * petals.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.animationDelay = (Math.random() * 4) + 's';
    p.style.opacity = 0.4 + Math.random() * 0.4;
    petalContainer.appendChild(p);
    setTimeout(() => p.remove(), 14000);
  }
  for (let i = 0; i < 8; i++) setTimeout(createPetal, i * 600);
  setInterval(createPetal, 1800);
}

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.srv-card, .testi-card, .ritual-step, .srv-item, .cat-card, .value-item, .team-card').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i * 0.08) + 's';
  revealObserver.observe(el);
});

// ===== SERVICE CARD CLICK =====
document.querySelectorAll('[data-href]').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = card.dataset.href;
  });
});

// ===== CATALOG FILTERS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const catCards = document.querySelectorAll('.cat-card');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      catCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? 'block' : 'none';
      });
    });
  });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const msg = document.getElementById('successMsg');
    btn.textContent = 'A enviar...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Enviado ✓';
      if (msg) { msg.style.display = 'block'; }
      setTimeout(() => {
        btn.textContent = 'Marcar Consulta';
        btn.disabled = false;
        contactForm.reset();
        if (msg) msg.style.display = 'none';
      }, 4000);
    }, 1200);
  });
}