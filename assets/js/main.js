/* ============================================================
   MAIN.JS — Shared interactions
   ============================================================ */

/* ---- Solutions tab switcher ---- */
function initSolTabs() {
  const tabs   = document.querySelectorAll('.sol-tab');
  const panels = document.querySelectorAll('.sol-panel');
  if (!tabs.length) return;

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      if (panels[i]) panels[i].classList.add('active');
    });
  });
}

/* ---- Fade-up on scroll ---- */
function initFadeUp() {
  if (!('IntersectionObserver' in window)) return;
  const els = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  initSolTabs();
  initFadeUp();
});
