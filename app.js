const icon = (name, size = 20) => {
  const icons = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
    arrowLeft: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    whatsapp: '<path d="M20 4.9A9.9 9.9 0 0 0 3.2 16.8L2 22l5.4-1.2A9.9 9.9 0 1 0 20 4.9Z"/><path d="M8 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.8c.7 1.3 1.7 2.3 3.1 3l.7-.6c.2-.2.5-.2.8-.1l1.9.9c.3.1.4.3.4.6 0 .3-.2 1.2-.5 1.4-.3.3-1.1.5-1.5.4-3.8-.9-6.6-3.5-7.7-6.5-.1-.5 0-1.6.3-2.5Z"/>',
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || ''}</svg>`;
};

const page = document.body.dataset.page || 'home';
const navItems = [
  ['home', 'Home', 'index.html'],
  ['about', 'About Us', 'about.html'],
  ['products', 'Products', 'products.html'],
  ['certificates', 'Certificates', 'certificates.html'],
  ['contact', 'Contact Us', 'contact.html'],
];

// Product list PDF stands in for the brochure until the client sends one; if the file is missing the button falls back to a WhatsApp request.
const BROCHURE_URL = 'assets/Mavera-Impex-Product-List.pdf';
const BROCHURE_FALLBACK = 'https://wa.me/918169173699?text=Hello%20Mavera%20Impex%2C%20please%20share%20your%20product%20brochure.';

// Languages offered by Google Website Translator (code:name).
const languages = 'en:English|af:Afrikaans|sq:Albanian|am:Amharic|ar:Arabic|hy:Armenian|as:Assamese|ay:Aymara|az:Azerbaijani|bm:Bambara|eu:Basque|be:Belarusian|bn:Bengali|bho:Bhojpuri|bs:Bosnian|bg:Bulgarian|ca:Catalan|ceb:Cebuano|ny:Chichewa|zh-CN:Chinese (Simplified)|zh-TW:Chinese (Traditional)|co:Corsican|hr:Croatian|cs:Czech|da:Danish|dv:Dhivehi|doi:Dogri|nl:Dutch|eo:Esperanto|et:Estonian|ee:Ewe|tl:Filipino|fi:Finnish|fr:French|fy:Frisian|gl:Galician|ka:Georgian|de:German|el:Greek|gn:Guarani|gu:Gujarati|ht:Haitian Creole|ha:Hausa|haw:Hawaiian|iw:Hebrew|hi:Hindi|hmn:Hmong|hu:Hungarian|is:Icelandic|ig:Igbo|ilo:Ilocano|id:Indonesian|ga:Irish|it:Italian|ja:Japanese|jw:Javanese|kn:Kannada|kk:Kazakh|km:Khmer|rw:Kinyarwanda|gom:Konkani|ko:Korean|kri:Krio|ku:Kurdish (Kurmanji)|ckb:Kurdish (Sorani)|ky:Kyrgyz|lo:Lao|la:Latin|lv:Latvian|ln:Lingala|lt:Lithuanian|lg:Luganda|lb:Luxembourgish|mk:Macedonian|mai:Maithili|mg:Malagasy|ms:Malay|ml:Malayalam|mt:Maltese|mi:Maori|mr:Marathi|mni-Mtei:Meiteilon (Manipuri)|lus:Mizo|mn:Mongolian|my:Myanmar (Burmese)|ne:Nepali|no:Norwegian|or:Odia (Oriya)|om:Oromo|ps:Pashto|fa:Persian|pl:Polish|pt:Portuguese|pa:Punjabi|qu:Quechua|ro:Romanian|ru:Russian|sm:Samoan|sa:Sanskrit|gd:Scots Gaelic|nso:Sepedi|sr:Serbian|st:Sesotho|sn:Shona|sd:Sindhi|si:Sinhala|sk:Slovak|sl:Slovenian|so:Somali|es:Spanish|su:Sundanese|sw:Swahili|sv:Swedish|tg:Tajik|ta:Tamil|tt:Tatar|te:Telugu|th:Thai|ti:Tigrinya|ts:Tsonga|tr:Turkish|tk:Turkmen|ak:Twi|uk:Ukrainian|ur:Urdu|ug:Uyghur|uz:Uzbek|vi:Vietnamese|cy:Welsh|xh:Xhosa|yi:Yiddish|yo:Yoruba|zu:Zulu'
  .split('|').map((pair) => { const i = pair.indexOf(':'); return [pair.slice(0, i), pair.slice(i + 1)]; });

const header = `
  <div class="topline"><div class="container topline-inner"><span><strong>Mavera Impex</strong> · Global pharmaceutical trade</span><span>India · China · International supply</span></div></div>
  <header class="site-header"><div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="Mavera Impex home"><img src="assets/mavera-logo.png" alt="Mavera Impex" /></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu', 22)}</button>
    <nav class="main-nav" aria-label="Main navigation">
      <div class="nav-links">${navItems.map(([key, label, href]) => `<a href="${href}" ${page === key ? "aria-current='page'" : ''}>${label}</a>`).join('')}</div>
      <div class="nav-tools">
        <div class="lang notranslate" translate="no">
          <button class="lang-toggle" type="button" aria-haspopup="listbox" aria-expanded="false">${icon('globe', 18)}<span data-lang-label>English</span>${icon('chevron', 16)}</button>
          <div class="lang-menu" hidden>
            <input type="search" placeholder="Search language" aria-label="Search language" data-lang-filter />
            <ul role="listbox" aria-label="Choose language" data-lang-list>${languages.map(([code, name]) => `<li role="option" tabindex="-1" data-lang="${code}">${name}</li>`).join('')}</ul>
            <p class="lang-empty" hidden>No language found</p>
          </div>
        </div>
        <a class="nav-brochure" href="${BROCHURE_URL}" download data-brochure-link>${icon('download', 18)}<span>Brochure</span></a>
      </div>
    </nav>
  </div></header>
  <div id="google_translate_element" aria-hidden="true"></div>`;

const footer = `
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><img src="assets/mavera-logo.png" alt="Mavera Impex" /><p>A global pharmaceutical trading partner connecting verified supply with the healthcare teams who need it.</p></div>
    <div class="footer-col"><h3>Explore</h3><a href="about.html">About Us</a><a href="products.html">Products</a><a href="certificates.html">Certificates</a><a href="quality.html">Quality &amp; compliance</a><a href="contact.html">Contact Us</a><a href="${BROCHURE_URL}" download data-brochure-link>Download brochure</a></div>
    <div class="footer-col"><h3>Connect</h3><a href="mailto:info@maveraimpex.com">info@maveraimpex.com</a><a href="tel:+918169173699">+91 816 917 3699</a><a href="https://www.linkedin.com/in/mavera-impex-8b0793420" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://wa.me/918169173699" target="_blank" rel="noreferrer">WhatsApp</a></div>
    <div class="footer-col"><h3>Offices</h3><span class="office-label">India</span><p>1st Floor, Krishna Kunj, S.V. Road, Malad West, Mumbai, India</p><span class="office-label">China</span><p>9th Floor, A Wing, Wonder Plaza, Keqiao, Shaoxing, China</p></div>
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

fetch(BROCHURE_URL, { method: 'HEAD' }).then((res) => { if (!res.ok) throw new Error(); }).catch(() => {
  document.querySelectorAll('[data-brochure-link]').forEach((link) => {
    link.href = BROCHURE_FALLBACK;
    link.removeAttribute('download');
    link.target = '_blank';
    link.rel = 'noreferrer';
  });
});

/* ---------- Language (Google Website Translator) ---------- */
const lang = document.querySelector('.lang');
if (lang) {
  const toggle = lang.querySelector('.lang-toggle');
  const menu = lang.querySelector('.lang-menu');
  const filter = lang.querySelector('[data-lang-filter]');
  const list = lang.querySelector('[data-lang-list]');
  const empty = lang.querySelector('.lang-empty');
  const label = lang.querySelector('[data-lang-label]');
  const names = Object.fromEntries(languages);
  const current = (document.cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/) || [])[1] || 'en';
  const getItems = () => [...list.querySelectorAll('[data-lang]')];

  const markCurrent = (code) => {
    label.textContent = names[code] || 'English';
    getItems().forEach((item) => item.setAttribute('aria-selected', String(item.dataset.lang === code)));
  };
  // Once Google's engine loads, list every language it supports (it offers more than the static fallback).
  const syncWithGoogle = (combo) => {
    const options = [...combo.options].filter((option) => option.value && option.value !== 'en');
    if (options.length < languages.length - 1) return;
    options.forEach((option) => { names[option.value] = option.textContent.trim(); });
    const sorted = options.map((option) => [option.value, names[option.value]]).sort((a, b) => a[1].localeCompare(b[1]));
    list.innerHTML = [['en', 'English'], ...sorted].map(([code, name]) => `<li role="option" tabindex="-1" data-lang="${code}">${name}</li>`).join('');
    markCurrent(current);
  };
  const open = (state) => {
    menu.hidden = !state;
    toggle.setAttribute('aria-expanded', String(state));
    if (state) { filter.value = ''; filter.dispatchEvent(new Event('input')); filter.focus(); }
  };
  const clearCookie = () => {
    const expire = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    document.cookie = expire;
    document.cookie = `${expire}; domain=${location.hostname}`;
    document.cookie = `${expire}; domain=.${location.hostname}`;
  };
  const choose = (code) => {
    open(false);
    if (code === current && code !== 'en') { markCurrent(code); return; }
    if (code === 'en') { clearCookie(); location.reload(); return; }
    const combo = document.querySelector('.goog-te-combo');
    if (combo && [...combo.options].some((option) => option.value === code)) {
      combo.value = code;
      combo.dispatchEvent(new Event('change'));
      markCurrent(code);
    } else {
      document.cookie = `googtrans=/en/${code}; path=/`;
      location.reload();
    }
  };

  markCurrent(current);
  toggle.addEventListener('click', () => open(menu.hidden));
  filter.addEventListener('input', () => {
    const term = filter.value.trim().toLowerCase();
    let shown = 0;
    getItems().forEach((item) => {
      const match = item.textContent.toLowerCase().includes(term) || item.dataset.lang.toLowerCase() === term;
      item.hidden = !match;
      if (match) shown += 1;
    });
    empty.hidden = shown > 0;
  });
  filter.addEventListener('keydown', (event) => {
    const first = getItems().find((item) => !item.hidden);
    if (event.key === 'Enter' && first) choose(first.dataset.lang);
    if (event.key === 'ArrowDown') { event.preventDefault(); first?.focus(); }
  });
  list.addEventListener('click', (event) => { const item = event.target.closest('[data-lang]'); if (item) choose(item.dataset.lang); });
  list.addEventListener('keydown', (event) => {
    const item = event.target.closest('[data-lang]');
    if (!item) return;
    const visible = getItems().filter((el) => !el.hidden);
    const i = visible.indexOf(item);
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(item.dataset.lang); }
    if (event.key === 'ArrowDown') { event.preventDefault(); visible[i + 1]?.focus(); }
    if (event.key === 'ArrowUp') { event.preventDefault(); (visible[i - 1] || filter).focus(); }
  });
  document.addEventListener('click', (event) => { if (!lang.contains(event.target)) open(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !menu.hidden) { open(false); toggle.focus(); } });

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
    let tries = 0;
    const wait = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo');
      if ((combo && combo.options.length > 1) || ++tries > 40) { clearInterval(wait); if (combo) syncWithGoogle(combo); }
    }, 250);
  };
  const script = document.createElement('script');
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.head.appendChild(script);
}

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

/* ---------- Home banner slider ---------- */
const slider = document.querySelector('[data-slider]');
if (slider) {
  const slides = [...slider.querySelectorAll('.slide')];
  const dots = [...slider.querySelectorAll('[data-slide-to]')];
  const duration = 6500;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let index = 0;
  let timer;
  slider.style.setProperty('--slide-duration', `${duration}ms`);
  slider.querySelector('[data-slide-prev]').innerHTML = icon('arrowLeft', 20);
  slider.querySelector('[data-slide-next]').innerHTML = icon('arrowRight', 20);

  const go = (next) => {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, i) => {
      dot.setAttribute('aria-selected', 'false');
      if (i === index) { void dot.offsetWidth; dot.setAttribute('aria-selected', 'true'); }
    });
  };
  const play = () => {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => go(index + 1), duration);
  };
  const pause = (state) => {
    slider.classList.toggle('is-paused', state);
    if (state) clearInterval(timer); else play();
  };
  const step = (next) => { go(next); if (!slider.classList.contains('is-paused')) play(); };

  dots.forEach((dot) => dot.addEventListener('click', () => step(Number(dot.dataset.slideTo))));
  slider.querySelector('[data-slide-prev]').addEventListener('click', () => step(index - 1));
  slider.querySelector('[data-slide-next]').addEventListener('click', () => step(index + 1));
  slider.addEventListener('mouseenter', () => pause(true));
  slider.addEventListener('mouseleave', () => pause(false));
  slider.addEventListener('focusin', () => pause(true));
  slider.addEventListener('focusout', (event) => { if (!slider.contains(event.relatedTarget)) pause(false); });
  slider.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') step(index - 1);
    if (event.key === 'ArrowRight') step(index + 1);
  });
  let touchX = null;
  slider.addEventListener('touchstart', (event) => { touchX = event.touches[0].clientX; }, { passive: true });
  slider.addEventListener('touchend', (event) => {
    if (touchX === null) return;
    const dx = event.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) step(index + (dx < 0 ? 1 : -1));
    touchX = null;
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clearInterval(timer); else if (!slider.classList.contains('is-paused')) play(); });

  go(0);
  play();
}

/* ---------- Count-up stats ---------- */
const counters = document.querySelectorAll('[data-count]');
if (counters.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    observer.unobserve(entry.target);
    const el = entry.target;
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 1400, 1);
      el.textContent = `${Math.round(target * (1 - Math.pow(1 - t, 3)))}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: 0.4 });
  counters.forEach((el) => observer.observe(el));
}

document.querySelectorAll('form[data-form]').forEach((form) => form.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status) { status.textContent = 'Thank you. Your inquiry is ready for our team and we will respond shortly.'; status.classList.add('show'); }
  form.reset();
}));

/* ---------- Product directory ---------- */
const directory = document.querySelector('.directory');
if (directory) {
  const search = directory.querySelector('[data-product-search]');
  const chips = [...directory.querySelectorAll('[data-filter]')];
  const groups = [...directory.querySelectorAll('[data-group]')];
  const empty = directory.querySelector('.empty-state');
  const text = (el) => (el ? el.textContent.toLowerCase() : '');
  let filter = 'all';

  const apply = () => {
    const term = search.value.trim().toLowerCase();
    let shown = 0;
    groups.forEach((group) => {
      const inFilter = filter === 'all' || group.dataset.group === filter;
      const groupMatch = text(group.querySelector('h3')).includes(term);
      let groupShown = 0;
      group.querySelectorAll('[data-item]').forEach((item) => {
        const sub = item.closest('[data-sub]');
        const match = inFilter && (!term || groupMatch || text(sub?.querySelector('h4')).includes(term) || text(item).includes(term));
        item.hidden = !match;
        if (match) groupShown += 1;
      });
      group.querySelectorAll('[data-sub]').forEach((sub) => { sub.hidden = !sub.querySelector('[data-item]:not([hidden])'); });
      group.hidden = groupShown === 0;
      shown += groupShown;
    });
    empty.style.display = shown ? 'none' : 'block';
  };

  search.addEventListener('input', apply);
  chips.forEach((chip) => chip.addEventListener('click', () => {
    filter = chip.dataset.filter;
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    apply();
  }));
  // Category cards jump to their list; clear any filter that would hide it.
  document.querySelectorAll('[data-jump]').forEach((card) => card.addEventListener('click', () => {
    search.value = '';
    filter = 'all';
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.filter === 'all')));
    apply();
  }));
}

document.querySelectorAll('[data-enquire]').forEach((link) => link.addEventListener('click', () => {
  const field = document.querySelector('#quote-product');
  if (field) field.value = link.dataset.enquire;
}));

const fab = document.createElement('a');
fab.className = 'whatsapp-fab';
fab.href = 'https://wa.me/918169173699?text=Hello%20Mavera%20Impex%2C%20I%20would%20like%20to%20discuss%20a%20pharmaceutical%20sourcing%20requirement.';
fab.target = '_blank';
fab.rel = 'noreferrer';
fab.setAttribute('aria-label', 'Chat with Mavera Impex on WhatsApp');
fab.innerHTML = icon('whatsapp', 24);
document.body.appendChild(fab);
