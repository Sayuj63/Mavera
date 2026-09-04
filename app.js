const icon = (name, size = 20) => {
  const icons = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    whatsapp: '<path d="M20 4.9A9.9 9.9 0 0 0 3.2 16.8L2 22l5.4-1.2A9.9 9.9 0 1 0 20 4.9Z"/><path d="M8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c.7 1.3 1.7 2.3 3.1 3l.7-.6c.2-.2.5-.2.8-.1l1.9.9c.3.1.4.3.4.6 0 .3-.2 1.2-.5 1.4-.3.3-1.1.5-1.5.4-3.8-.9-6.6-3.5-7.7-6.5-.1-.5 0-1.6.3-2.5Z"/>',
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ''}</svg>`;
};

const page = document.body.dataset.page || 'home';
const navItems = [
  ['home', 'Home', 'index.html'],
  ['about', 'About', 'about.html'],
  ['products', 'Portfolio', 'products.html'],
  ['quality', 'Quality', 'quality.html'],
  ['contact', 'Contact', 'contact.html'],
];

const header = `
  <div class="topline"><div class="container topline-inner"><span><strong>Mavera Impex</strong> · Global pharmaceutical trade</span><span>India · China · International supply</span></div></div>
  <header class="site-header"><div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Mavera Impex home"><img src="assets/mavera-logo.png" alt="Mavera Impex" /></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu', 22)}</button>
    <nav class="main-nav" aria-label="Main navigation">${navItems.map(([key, label, href]) => `<a href="${href}" ${page === key ? "aria-current='page'" : ''}>${label}</a>`).join('')}<a class="nav-cta" href="contact.html">Start an inquiry</a></nav>
  </div></header>`;

const footer = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><img src="assets/mavera-logo.png" alt="Mavera Impex" /><p>A global pharmaceutical trading partner connecting verified supply with the healthcare teams who need it.</p></div>
    <div class="footer-col"><h3>Explore</h3><a href="about.html">About</a><a href="products.html">Portfolio</a><a href="quality.html">Quality &amp; compliance</a><a href="contact.html">Contact</a></div>
    <div class="footer-col"><h3>Connect</h3><a href="mailto:info@maveraimpex.com">info@maveraimpex.com</a><a href="tel:+918169173699">+91 816 917 3699</a><a href="https://www.linkedin.com/in/mavera-impex-8b0793420" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://wa.me/918169173699" target="_blank" rel="noreferrer">WhatsApp</a></div>
    <div class="footer-col"><h3>Offices</h3><span class="office-label">India</span><p>Krishna Kunj, 1st Floor, S.V Road, Malad West, Mumbai 400064</p><span class="office-label">China</span><p>No. A9128, 9th Floor, Wonder Plaza, Keqiao, Shaoxing</p><a href="mailto:export@maveraimpex.com">export@maveraimpex.com</a></div>
  </div><div class="container footer-bottom"><span>© <span data-year></span> Mavera Impex. All rights reserved.</span><span>Mumbai · Shaoxing</span></div></footer>`;

document.querySelector('[data-site-header]')?.insertAdjacentHTML('afterbegin', header);
document.querySelector('[data-site-footer]')?.insertAdjacentHTML('afterbegin', footer);

document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector('.main-nav');
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  button.innerHTML = icon(open ? 'x' : 'menu', 22);
});

document.querySelectorAll('.main-nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('.main-nav')?.classList.remove('open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

document.querySelectorAll('form[data-form]').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status) { status.textContent = 'Thank you. Your inquiry is ready for our team and we will respond shortly.'; status.classList.add('show'); }
  form.reset();
}));

const search = document.querySelector('[data-product-search]');
if (search) {
  const rows = [...document.querySelectorAll('[data-product-row]')];
  const empty = document.querySelector('.empty-state');
  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    let shown = 0;
    rows.forEach((row) => {
      const match = row.textContent.toLowerCase().includes(term);
      row.hidden = !match;
      if (match) shown += 1;
    });
    if (empty) empty.style.display = shown ? 'none' : 'block';
  });
}

const fab = document.createElement('a');
fab.className = 'whatsapp-fab';
fab.href = 'https://wa.me/918169173699?text=Hello%20Mavera%20Impex%2C%20I%20would%20like%20to%20discuss%20a%20pharmaceutical%20sourcing%20requirement.';
fab.target = '_blank';
fab.rel = 'noreferrer';
fab.setAttribute('aria-label', 'Chat with Mavera Impex on WhatsApp');
fab.innerHTML = icon('whatsapp', 24);
document.body.appendChild(fab);
