/* ============================================================
   NAV.JS — Single source nav component
   To update nav sitewide: edit this file only.
   ============================================================ */

(function () {
  /* ---- Config ---- */
  const NAV_LINKS = [
    { label: 'Solutions',     href: '/solutions/'         },
    { label: 'Case Studies',  href: '/case-studies/'      },
    { label: 'Insights',      href: '/insights/'          },
    { label: 'About',         href: '/about.html'         },
  ];
  const CTA = { label: 'Book a Call', href: '/contact.html' };
  const BRAND = { name: 'Fortify', tagline: 'Experience Certainty' };

  /* ---- Determine active link ---- */
  const path = window.location.pathname;
  function isActive(href) {
    if (href === '/') return path === '/';
    return path.startsWith(href.replace(/\/$/, ''));
  }

  /* ---- Render ---- */
  function render() {
    const links = NAV_LINKS.map(l =>
      `<a href="${l.href}" class="${isActive(l.href) ? 'active' : ''}">${l.label}</a>`
    ).join('');

    const drawerLinks = NAV_LINKS.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join('');

    const html = `
      <!-- Mobile drawer -->
      <div class="nav-drawer" id="navDrawer" role="dialog" aria-modal="true" aria-label="Navigation">
        ${drawerLinks}
        <a href="${CTA.href}" class="nav-drawer-cta">${CTA.label}</a>
      </div>

      <!-- Main nav -->
      <nav class="nav" id="mainNav" aria-label="Main navigation">
        <div class="nav-inner">
          <a href="/" class="nav-brand" aria-label="Fortify home">
            <span class="nav-logo">${BRAND.name}</span>
            <span class="nav-tagline">${BRAND.tagline}</span>
          </a>
          <div class="nav-links" role="list">
            ${links}
            <a href="${CTA.href}" class="nav-cta">${CTA.label}</a>
          </div>
          <button class="nav-hamburger" id="navHamburger"
            aria-label="Open navigation" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `;

    const mount = document.getElementById('nav-mount');
    if (mount) mount.innerHTML = html;

    initBehaviours();
  }

  /* ---- Behaviours ---- */
  function initBehaviours() {
    const nav       = document.getElementById('mainNav');
    const hamburger = document.getElementById('navHamburger');
    const drawer    = document.getElementById('navDrawer');

    /* Scroll effect */
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* Hamburger toggle */
    hamburger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    /* Close drawer on link click */
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Close on Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- Boot ---- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
