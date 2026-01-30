console.log("Site invitation prêt ✅");

const burgerBtn = document.getElementById("burgerBtn");
const programContent = document.getElementById("programContent");

console.log("burgerBtn =", burgerBtn);
console.log("programContent =", programContent);

if (burgerBtn && programContent) {
  burgerBtn.addEventListener("click", () => {
    programContent.classList.toggle("open");
    console.log("OPEN =", programContent.classList.contains("open"));
  }); 
} else {
  console.log("❌ ERREUR : burgerBtn ou programContent introuvable !");
}
// Galerie / Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = e.currentTarget.getAttribute('src');
      lightboxImg.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
  });
  document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('page');

  // Animation d'entrée
  if (page) {
    page.classList.add('is-entering');
    // force reflow pour déclencher la transition
    void page.offsetWidth;
    page.classList.remove('is-entering');
    page.classList.add('is-entered');
  }

  // Intercepter les liens pour animation de sortie
  const TRANSITION_MS = 420;
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    // ignorer liens externes, ancrages et liens ouvrant dans une nouvelle tab
    if (!href || href.startsWith('http') && !href.startsWith(location.origin)) return;
    if (a.target === '_blank' || href.startsWith('#') || a.hasAttribute('download')) return;

    a.addEventListener('click', (e) => {
      e.preventDefault();
      const dest = a.href;
      if (!page) { window.location = dest; return; }
      page.classList.remove('is-entered');
      page.classList.add('is-exiting');
      setTimeout(() => { window.location = dest; }, TRANSITION_MS);
    });
  });

  // --- existing burger + gallery code (conserver les handlers que vous avez) ---
  // Burger toggle: ouvre/ferme le contenu du programme
  const burgerBtn = document.getElementById('burgerBtn');
  const programContent = document.getElementById('programContent');
  if (burgerBtn && programContent) {
    burgerBtn.addEventListener('click', () => {
      programContent.classList.toggle('open');
      burgerBtn.classList.toggle('open');
    });
  }

  // Galerie / Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', (e) => {
      const src = e.currentTarget.getAttribute('src');
      lightboxImg.src = src;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  };

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) closeLightbox();
  });
});
entries.forEach(entry => {
  if (entry.isIntersecting) {
    const el = entry.target;
    // Si conteneur staggered, anime ses enfants en delay
    if (el.classList.contains('staggered')) {
      const children = Array.from(el.children);
      children.forEach((child, i) => {
        // définir délai progressif
        child.style.transitionDelay = `${i * 80}ms`;
      });
      el.classList.add('in-view');
      // retirer l'observation si animation une fois
      io.unobserve(el);
      return;
    }

    // comportement par défaut (déjà présent)
    el.classList.add('in-view');

    // si hero on peut ajouter l'animation float
    if (el.classList.contains('hero-content')) {
      el.classList.add('animate');
    }

    io.unobserve(el);
  }
});
