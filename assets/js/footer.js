/* ============================================================
   FOOTER.JS — Single source footer component
   To update footer sitewide: edit this file only.
   ============================================================ */

(function () {
  const FOOTER = {
    brand: 'Fortify',
    tagline: 'Experience Certainty',
    copy: '© 2025 Fortify Technologies. All rights reserved.',
    aiNote: 'AI-Native organisation — built and operated with <span>AI</span>',
    cols: [
      {
        title: 'Solutions',
        links: [
          { label: 'Customer Profiling',       href: '/solutions/customer-profiling.html'      },
          { label: 'Churn Analysis',            href: '/solutions/churn-analysis.html'          },
          { label: 'Business Dashboards',       href: '/solutions/business-dashboards.html'     },
          { label: 'MTU Growth',                href: '/solutions/mtu-growth.html'              },
          { label: 'Campaign Optimisation',     href: '/solutions/campaign-optimisation.html'   },
          { label: 'Competitor Analysis',       href: '/solutions/competitor-analysis.html'     },
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About',        href: '/about.html'        },
          { label: 'Case Studies', href: '/case-studies/'     },
          { label: 'Insights',     href: '/insights/'         },
          { label: 'Contact',      href: '/contact.html'      },
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
