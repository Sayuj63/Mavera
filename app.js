const icon = (name, size = 20) => {
  const icons = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    box: '<path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z"/><path d="m3.3 7.7 8.7 5 8.7-5M12 22V12.7"/>',
    flask: '<path d="M9 3h6M10 3v6l-5.6 9.3A2 2 0 0 0 6.1 21h11.8a2 2 0 0 0 1.7-2.7L14 9V3"/><path d="M8.2 15h7.6"/>',
    pill: '<path d="m10.5 20.5 9-9a5 5 0 0 0-7-7l-9 9a5 5 0 0 0 7 7Z"/><path d="m8 8 8 8"/>',
    cross: '<path d="M12 3v18M3 12h18"/><rect x="4" y="4" width="16" height="16" rx="2"/>',
    shield: '<path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9s-1.2 6.5-3.5 9c-2.3-2.5-3.5-5.5-3.5-9S9.7 5.5 12 3Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    whatsapp: '<path d="M20 4.9A9.9 9.9 0 0 0 3.2 16.8L2 22l5.4-1.2A9.9 9.9 0 1 0 20 4.9Z"/><path d="M8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c.7 1.3 1.7 2.3 3.1 3l.7-.6c.2-.2.5-.2.8-.1l1.9.9c.3.1.4.3.4.6 0 .3-.2 1.2-.5 1.4-.3.3-1.1.5-1.5.4-3.8-.9-6.6-3.5-7.7-6.5-.1-.5 0-1.6.3-2.5Z"/>',
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.box}</svg>`;
};

const page = document.body.dataset.page || 'home';
const navItems = [
  ['home', 'Home', 'index.html'],
  ['about', 'About us', 'about.html'],
  ['products', 'Portfolio', 'products.html'],
  ['quality', 'Quality & compliance', 'quality.html'],
  ['contact', 'Contact', 'contact.html'],
];

const header = `
  <div class="topline"><div class="container topline-inner"><span><strong>Global healthcare, responsibly sourced.</strong></span><span>India office · China office · International supply</span></div></div>
  <header class="site-header"><div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Mavera Impex home"><img src="assets/mavera-logo.png" alt="Mavera Impex" /></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu', 22)}</button>
    <nav class="main-nav" aria-label="Main navigation">${navItems.map(([key, label, href]) => `<a href="${href}" ${page === key ? "aria-current='page'" : ''}>${label}</a>`).join('')}<a class="nav-cta" href="contact.html">Start an inquiry</a></nav>
  </div></header>`;

const footer = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><img src="assets/mavera-logo.png" alt="Mavera Impex" /><p>A global pharmaceutical trading partner connecting verified supply with the healthcare teams who need it.</p></div>
    <div class="footer-col"><h3>Explore</h3><a href="about.html">About us</a><a href="products.html">Product portfolio</a><a href="quality.html">Quality &amp; compliance</a><a href="contact.html">Contact us</a></div>
    <div class="footer-col"><h3>Connect</h3><a href="mailto:info@maveraimpex.com">info@maveraimpex.com</a><a href="tel:+918169173699">+91 816 917 3699</a><a href="https://www.linkedin.com/in/mavera-impex-8b0793420" target="_blank" rel="noreferrer">LinkedIn profile</a><a href="https://wa.me/918169173699" target="_blank" rel="noreferrer">WhatsApp us</a></div>
    <div class="footer-col"><h3>Our offices</h3><span class="office-label">Mavera Impex · India</span><p>Mavera Impex, Krishna Kunj, 1st Floor, S.V Road, Malad West, Mumbai, Maharashtra, India 400064</p><span class="office-label">Mavera Impex · China</span><p>No. A9128, 9th Floor, Wonder Plaza, Keqiao, Shaoxing, China</p><a href="mailto:export@maveraimpex.com">export@maveraimpex.com</a></div>
  </div><div class="container footer-bottom"><span>© <span data-year></span> Mavera Impex. All rights reserved.</span><span>Care · Trust · Overseas</span></div></footer>`;

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

const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: .08 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

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
