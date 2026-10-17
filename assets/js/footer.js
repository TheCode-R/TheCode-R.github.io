/* ============================================================
   FOOTER.JS — Single source footer component
   To update footer sitewide: edit this file only.
   ============================================================ */

(function () {
  const FOOTER = {
    brand: 'Fortify',
    tagline: 'Active User Growth',
    copy: '© 2026 Fortify Technologies. All rights reserved.',
    aiNote: 'Retention · Reactivation · <span>MTU Growth</span>',
    cols: [
      {
        title: 'Services',
        links: [
          { label: 'Retention',     href: '/#services' },
          { label: 'Reactivation',  href: '/#services' },
          { label: 'MTU Growth',    href: '/#services' },
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'How it works',         href: '/#how'         },
          { label: 'Results',              href: '/#results'     },
          { label: 'About',                href: '/#founder'     },
          { label: 'Book a Free Teardown', href: '/contact.html' },
        ]
      }
    ]
  };

  function render() {
    const cols = FOOTER.cols.map(col => `
      <div>
        <div class="footer-col-title">${col.title}</div>
        <div class="footer-col-links">
          ${col.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
      </div>
    `).join('');

    const html = `
      <footer class="footer">
        <div class="container">
          <div class="footer-inner">
            <div>
              <div class="footer-brand-name">${FOOTER.brand}</div>
              <div class="footer-tagline">${FOOTER.tagline}</div>
            </div>
            <div class="footer-cols">${cols}</div>
          </div>
          <div class="footer-bottom">
            <div class="footer-copy">${FOOTER.copy}</div>
            <div class="footer-ai-note">${FOOTER.aiNote}</div>
          </div>
        </div>
      </footer>
    `;

    const mount = document.getElementById('footer-mount');
    if (mount) mount.innerHTML = html;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
