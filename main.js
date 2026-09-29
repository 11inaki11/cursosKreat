/* ============================================================
   Kreat FX Escuela — main.js
   ============================================================ */

const CONTACT_EMAIL = 'info@kreatfx.com';

// Sign-ups are saved to the Google Sheet "CursosKreat" through a Google Apps Script
// web app (see ../google-sheets/LEEME.md). Paste the deployment URL here.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycby0s9XAilPrQCBHNLIyUc1d11jTPqlZ0El8y0WTeUDtcvnPVHN5STGTonrBHSmccBzJ/exec';

/* ---------- Translations ---------- */
// Spanish lives in the HTML; this table holds the English and any
// Spanish strings that only JS needs.
const I18N = {
  en: {
    'nav.school': 'School',
    'nav.why': 'The school',
    'nav.courses': 'Courses',
    'nav.method': 'Method',
    'nav.masters': 'Masters',
    'nav.signup': 'Sign up',
    'hero.eyebrow': 'Kreat FX presents',
    'hero.t1': 'The School of',
    'hero.t2': 'Audiovisual Arts & Crafts',
    'hero.t3': 'by Kreat FX',
    'hero.lead': 'Learn to create monsters, creatures and characters with the people who have been doing it for film, TV and theatre for over 35 years.',
    'hero.cta1': 'I’m interested',
    'hero.cta2': 'See the courses',
    'stamp.top': 'Coming in',
    'why.kicker': '01 · The school',
    'why.title': 'A craft you learn <em>with your hands</em>',
    'why.p1': 'We believe our profession is an art that must be learned through practice, alongside working professionals who guide you and pass on the theory that comes from years on film sets, TV studios and stages.',
    'dept.makeup': 'Makeup FX',
    'dept.creatures': 'Creatures',
    'dept.costume': 'Costume',
    'dept.props': 'Props',
    'dept.sets': 'Set design',
    'dept.anim': 'Animatronics',
    'courses.kicker': '02 · The courses',
    'courses.title': 'Three workshops. <em>Endless creatures.</em>',
    'courses.disclaimer': 'Courses are subject to change.',
    'badge.soon': 'Coming in 2027',
    'c1.tag': 'Makeup · Character',
    'c1.title': 'Character Makeup & Makeup FX',
    'c1.desc': 'The full process of creating real or fantasy characters.',
    'c1.m1': 'Character design',
    'c1.m2': 'Life cast & 3D scanning',
    'c1.m3': 'Character sculpture',
    'c1.m4': 'Different types of moulds',
    'c1.m5': 'Casting in different materials',
    'c1.m6': 'Applying the final result',
    'c2.tag': 'Props · Creatures · Dummies',
    'c2.title': 'Props Workshop & Creature Making',
    'c2.desc': 'Fundamentals of the different techniques for making fake elements, puppets and dummies.',
    'c2.m1': 'Basic knowledge of techniques and tools',
    'c2.m2': 'Making fake elements',
    'c2.m3': 'Designing a puppet & animatronics basics',
    'c2.m4': 'Making a dummy (animals or human body parts)',
    'c3.tag': 'Creatures · Puppets · Costume',
    'c3.title': 'Special Costumes',
    'c3.desc': 'Creature suits, puppets and oversized pieces.',
    'c3.m1': 'Basic design concepts',
    'c3.m2': '3D design',
    'c3.m3': 'Pattern-making',
    'c3.m4': 'Materials and how to work them',
    'c3.m5': 'Making a piece',
    'c3.m6': 'Painting & finishes',
    'method.title': 'From concept <em>to set</em>',
    'method.lead': 'Every workshop starts from a text, a brief or a script. Modules work together, just like the teams on a production.',
    'method.s1': 'The idea',
    'method.s1d': 'Understand what the story, the director and the production need.',
    'method.s2': 'The design',
    'method.s2d': 'Develop the design to the production’s needs.',
    'method.s3': 'The workshop',
    'method.s3d': 'Sculpt, mould, cast and paint with the real tools and materials of the trade.',
    'method.s4': 'The handover',
    'method.s4d': 'Delivery of the final product.',
    'method.pTitle': 'What the workshop guarantees',
    'method.p1': 'Proper instruction and real, hands-on training with the tools.',
    'method.p2': 'Taught by working professionals of the trade.',
    'method.p3': 'The big picture: you will know how your work affects every other department.',
    'masters.title': 'The parents <em>of the creatures</em>',
    'masters.photoCap': 'Alejandra and Fito with Falkor, from <i>The NeverEnding Story: The Musical</i>.',
    'fito.role': 'Director · Special makeup FX artist · Character designer',
    'fito.bio': 'Trained as a set designer at the Theatre Arts School of the Universidad del Salvador and as a graphic designer and illustrator at the Escuela Panamericana de Arte in Buenos Aires. In 1986 he founded his first special effects workshop in Argentina. In 2000 he moved to Spain as a makeup artist for Antena 3 and in 2001 founded Kreat FX in Madrid together with Alejandra Varela.',
    'ale.role': 'Head of production',
    'ale.bio': 'Executive producer and director of TV series and shows in Argentina, and a radio news producer. In 2001 she moved to Spain as a director for Antena 3 and co-founded Kreat FX, where she has run special effects production ever since.',
    'reels.kicker': '03 · Showreel',
    'reels.title': 'Hit <em>play</em>',
    'reels.makeup': 'Makeup & prosthetics',
    'reels.sfx': 'Special makeup FX',
    'reels.anim': 'Animatronics & puppets',
    'reels.costumes': 'Costumes & masks',
    'reels.props': 'Props',
    'posters.kicker': 'Our work has appeared in',
    'posters.hint': 'Swipe to see more',
    'signup.kicker': '04 · Sign up',
    'signup.title': 'Be among <em>the first</em>',
    'signup.p1': 'Leave your details and tell us which courses you are interested in. You will be the first to hear when we announce dates, places and prices.',
    'signup.t1': 'No commitment',
    'signup.t2': 'Priority access to 2027 enrolment',
    'signup.t3': 'Workshop news, no spam',
    'signup.ticket': 'I’m interested',
    'form.name': 'Full name',
    'form.email': 'Email',
    'form.phone': 'Phone (optional)',
    'form.city': 'City and country',
    'form.level': 'Your experience',
    'form.lv0': 'Complete beginner',
    'form.lv1': 'Hobbyist',
    'form.lv2': 'Student',
    'form.lv3': 'Industry professional',
    'form.courses': 'Which courses interest you?',
    'form.errCourses': 'Choose at least one course.',
    'form.msg': 'Anything you’d like to tell us? (optional)',
    'form.consent': 'I agree that Kreat FX may use my details to send me information about the school and its courses. I can ask for them to be deleted at any time by writing to <a href="mailto:info@kreatfx.com">info@kreatfx.com</a>.',
    'form.submit': 'Keep me posted',
    'sponsor.by': 'Sponsored by',
    'sponsor.kicker': 'Official sponsor of the school',
    'sponsor.tagline': '“Your ideas, our materials”',
    'sponsor.text': 'Feroca, specialists in materials for mouldmaking, special effects, cosplay and sculpture, is the official sponsor of the Kreat FX School of Audiovisual Arts & Crafts. The materials you will use to bring your creatures to life.',
    'sponsor.m1': 'Silicones',
    'sponsor.m2': 'Resins',
    'sponsor.m3': 'Latex',
    'sponsor.m4': 'Fibreglass',
    'sponsor.m5': 'Alginates',
    'sponsor.m6': 'Foams',
    'sponsor.cta': 'Discover Feroca',
    'sponsor.official': 'Official sponsor',
    'footer.claim': 'School of Audiovisual Arts & Crafts · Madrid · 2027',
    'footer.rights': 'All images show work made by Kreat FX.',
    // JS-only
    'js.sending': 'Sending…',
    'js.errRequired': 'Please fill in your name, a valid email and accept the terms.',
    'js.errSend': 'We couldn’t send your entry. Please try again, or email us at',
    'js.doneTitle': 'Got it!',
    'js.doneText': 'We’ll let you know when enrolment opens.',
    'js.docTitle': 'Kreat FX · School of Audiovisual Arts & Crafts',
  },
  es: {
    'js.sending': 'Enviando…',
    'js.errRequired': 'Rellena tu nombre, un email válido y acepta las condiciones.',
    'js.errSend': 'No hemos podido enviar tu participación. Inténtalo de nuevo o escríbenos a',
    'js.doneTitle': '¡Recibido!',
    'js.doneText': 'Te avisaremos cuando abramos inscripciones.',
    'js.docTitle': 'Kreat FX · Escuela de Artes y Oficios Audiovisuales',
  },
};

/* ---------- Language ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const originalEs = new Map();
$$('[data-i18n]').forEach(el => originalEs.set(el, el.innerHTML));

let lang = 'es';
function t(key) {
  return (I18N[lang] && I18N[lang][key]) ?? I18N.es[key] ?? key;
}

function setLang(next) {
  lang = next === 'en' ? 'en' : 'es';
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = lang === 'es' ? originalEs.get(el) : (I18N.en[key] ?? originalEs.get(el));
  });
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.title = t('js.docTitle');
  try { localStorage.setItem('kreat-lang', lang); } catch (e) { /* storage unavailable */ }
}

$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- Nav ---------- */
const nav = $('#nav');
const burger = $('#burger');
const onScroll = () => nav.classList.toggle('is-solid', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
burger.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});
function closeMenu() {
  nav.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ---------- In-page links ---------- */
// Scrolls so the target sits just below the fixed header, then re-checks once the
// smooth scroll has finished, in case lazy images or reveal animations moved things.
const targetTop = el => el.getBoundingClientRect().top + window.scrollY - (el.id === 'top' ? 0 : nav.offsetHeight + 8);
let settleTimer = null;
function scrollToEl(el, smooth = true) {
  $$('.reveal:not(.is-in)', el).forEach(x => x.classList.add('is-in'));
  window.scrollTo({ top: targetTop(el), behavior: smooth ? 'smooth' : 'auto' });
  clearTimeout(settleTimer);
  let tries = 0;
  const settle = () => {
    const top = targetTop(el);
    if (Math.abs(window.scrollY - top) > 4 && tries++ < 3) {
      window.scrollTo({ top, behavior: 'auto' });
      settleTimer = setTimeout(settle, 250);
    }
  };
  settleTimer = setTimeout(settle, smooth ? 900 : 100);
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const el = a.getAttribute('href').length > 1 && $(a.getAttribute('href'));
  if (!el) return;
  e.preventDefault();
  closeMenu();
  history.replaceState(null, '', a.getAttribute('href'));
  scrollToEl(el);
}));
if (location.hash) {
  const el = $(location.hash);
  if (el) {
    window.addEventListener('load', () => scrollToEl(el, false));
    setTimeout(() => scrollToEl(el, false), 50);
  }
}

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
const observeReveals = () => $$('.reveal:not(.is-in)').forEach(el => io.observe(el));

/* ---------- Posters carousel ---------- */
$$('.carousel').forEach(c => {
  const row = $('.posters__row', c);
  const update = () => {
    c.dataset.atStart = row.scrollLeft < 8;
    c.dataset.atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 8;
  };
  row.addEventListener('scroll', () => { c.dataset.touched = ''; update(); }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  $$('.carousel__btn', c).forEach(b => b.addEventListener('click', () => {
    row.scrollBy({ left: Number(b.dataset.dir) * row.clientWidth * .8 });
  }));
  update();
});

/* ---------- Showreels ---------- */
const player = $('#reelPlayer');
const REEL_POSTERS = {
  'reel-makeup': 'sioux', 'reel-sfx': 'hombre-lobo', 'reel-animatronics': 'orangutan',
  'reel-costumes': 'skylines-traje', 'reel-props': 'frankenstein-busto',
};
$$('.reels__tabs button').forEach(b => b.addEventListener('click', () => {
  $$('.reels__tabs button').forEach(x => x.setAttribute('aria-selected', String(x === b)));
  const wasPlaying = !player.paused;
  player.poster = `assets/img/${REEL_POSTERS[b.dataset.reel]}.webp`;
  player.src = `assets/video/${b.dataset.reel}.mp4`;
  if (wasPlaying) player.play().catch(() => {});
}));

/* ---------- Sign-up form ---------- */
const form = $('#signupForm');
const statusEl = $('#formStatus');
const submitBtn = $('#submitBtn');
const coursesError = $('#coursesError');

form.addEventListener('submit', async e => {
  e.preventDefault();
  statusEl.className = 'form__status';
  statusEl.textContent = '';

  const name = form.nombre;
  const email = form.email;
  const consent = form.acepto;
  const courses = $$('input[name="cursos"]:checked', form).map(c => c.value);

  name.classList.toggle('is-invalid', !name.value.trim());
  email.classList.toggle('is-invalid', !email.validity.valid || !email.value);
  consent.closest('.check').classList.toggle('is-invalid', !consent.checked);
  coursesError.hidden = courses.length > 0;

  if (!name.value.trim() || !email.value || !email.validity.valid || !consent.checked) {
    statusEl.classList.add('is-error');
    statusEl.textContent = t('js.errRequired');
    return;
  }
  if (!courses.length) return;
  if (form._honey.value) return; // bot

  submitBtn.disabled = true;
  statusEl.textContent = t('js.sending');

  const payload = {
    nombre: name.value.trim(),
    email: email.value.trim(),
    telefono: form.telefono.value.trim(),
    ciudad: form.ciudad.value.trim(),
    experiencia: form.experiencia.value,
    cursos: courses.join(', '),
    mensaje: form.mensaje.value.trim(),
    idioma: lang.toUpperCase(),
    acepta: consent.checked,
  };

  try {
    if (!SHEET_ENDPOINT) throw new Error('SHEET_ENDPOINT not configured');
    // text/plain keeps this a "simple" request, which Apps Script accepts without a CORS preflight.
    const res = await fetch(SHEET_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.ok) throw new Error(data.error || 'error');
    form.classList.add('is-done');
    form.innerHTML = `<span class="done-ico">¡✓!</span><h3>${t('js.doneTitle')}</h3><p>${t('js.doneText')}</p>`;
  } catch (err) {
    submitBtn.disabled = false;
    statusEl.classList.add('is-error');
    statusEl.innerHTML = `${t('js.errSend')} <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.`;
  }
});

/* ---------- Init ---------- */
$('#year').textContent = new Date().getFullYear();
let saved = null;
try { saved = localStorage.getItem('kreat-lang'); } catch (e) { /* storage unavailable */ }
setLang(saved || 'es');
observeReveals();
