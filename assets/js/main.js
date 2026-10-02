/* ==========================================================================
   Scuola Svizzera di Sci e Snowboard San Bernardino — script principale
   ========================================================================== */
(() => {
  "use strict";
  document.documentElement.classList.remove("no-js");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const S = window.SITE || {};
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const ICON = {
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m6 9 6 6 6-6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5M11 8v6M8 11h6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m15 18-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m9 18 6-6-6-6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="m18 15-6-6-6 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    insta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  };
  window.ICON = ICON;

  /* ---------------- Navigazione ---------------- */
  const NAV = [
    { label: "Home", href: "index.html", page: "home" },
    { label: "Info", page: "info", children: [
      { label: "Chi siamo", href: "info.html#chi-siamo" },
      { label: "Sci Pian Cales e Confin", href: "info.html#pian-cales-confin" },
      { label: "Piste sci di fondo", href: "info.html#sci-di-fondo" },
      { label: "Escursioni / Sentieri invernali", href: "info.html#escursioni" },
      { label: "Noleggio materiale", href: "info.html#noleggio" },
    ] },
    { label: "Corsi", page: "corsi", children: [
      { label: "Corsi collettivi", href: "corsi.html#collettivi" },
      { label: "Lezioni private", href: "corsi.html#private" },
      { label: "Snowboard", href: "corsi.html#snowboard" },
      { label: "Sci di fondo", href: "corsi.html#fondo" },
      { label: "Livelli Swiss Snow League", href: "corsi.html#livelli" },
      { label: "Prenota online ↗", href: S.booking, ext: true },
    ] },
    { label: "Gare", page: "gare", children: [
      { label: "Info e tariffe gare", href: "gare.html#info-tariffe" },
      { label: "Programma gare", href: "gare.html#programma" },
      { label: "Risultati gare", href: "gare.html#risultati" },
    ] },
    { label: "News", href: "news.html", page: "news" },
    { label: "Galleria", href: "galleria.html", page: "galleria" },
    { label: "Webcam / Meteo", href: "webcam.html", page: "webcam" },
    { label: "Sostenitori", href: "sostenitori.html", page: "sostenitori" },
    { label: "Downloads", href: "downloads.html", page: "downloads" },
  ];

  const current = document.body.dataset.page || "home";

  function renderHeader() {
    const host = $("#site-header");
    if (!host) return;
    const items = NAV.map((item) => {
      const active = item.page === current ? " is-active" : "";
      if (!item.children) return `<li><a href="${item.href}" class="${active}">${item.label}</a></li>`;
      const sub = item.children.map((c) => `<li><a href="${c.href}"${c.ext ? ' target="_blank" rel="noopener"' : ""}>${c.label}</a></li>`).join("");
      return `<li class="has-sub"><button class="nav-parent${active}" aria-expanded="false">${item.label}${ICON.chevron}</button><ul class="submenu">${sub}</ul></li>`;
    }).join("");
    host.outerHTML = `
      <a class="skip-link" href="#main">Vai al contenuto</a>
      <div class="scroll-progress" aria-hidden="true"></div>
      <header class="site-header${document.body.dataset.header === "solid" ? " is-solid" : ""}">
        <div class="wrap">
          <a class="brand" href="index.html" aria-label="Scuola Svizzera di Sci San Bernardino — Home">
            <img src="assets/img/logo/badge-swiss-ski-school.png" alt="" width="52" height="52">
            <span class="brand-text"><strong>Scuola Svizzera di Sci</strong><span>e Snowboard · San Bernardino</span></span>
          </a>
          <nav class="main-nav" id="main-nav" aria-label="Menu principale">
            <ul>${items}<li><a class="btn-book" href="${S.booking}" target="_blank" rel="noopener">Prenota</a></li></ul>
          </nav>
          <button class="nav-toggle" aria-controls="main-nav" aria-expanded="false" aria-label="Apri menu"><span></span><span></span><span></span></button>
        </div>
      </header>`;
  }

  function renderFooter() {
    const host = $("#site-footer");
    if (!host) return;
    const y = new Date().getFullYear();
    host.outerHTML = `
      <div class="footer-mountains" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none"><path fill="currentColor" d="M0 140V96l120-46 90 30 140-70 110 52 80-24 150 62 130-84 120 64 100-30 160 70 120-48 120 40v48z"/><path fill="#fff" opacity=".9" d="m350 10 30 14-22 4-8-18zm420 30 22 12-18 2zm-650 10 18 8-14 2z"/></svg>
      </div>
      <footer class="site-footer">
        <div class="tricolor animated"></div>
        <div class="wrap">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="assets/img/logo/badge-swiss-ski-school.png" alt="Swiss Ski School San Bernardino" class="rot-badge" width="84" height="84">
              <h4>Scuola Svizzera di Sci e Snowboard San Bernardino</h4>
              <p>Promuoviamo e divulghiamo la pratica degli sport sulla neve.</p>
              <div class="socials">
                <a href="${S.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.insta}</a>
                <a href="mailto:${S.email}" aria-label="Email">${ICON.mail}</a>
                <a href="${S.phoneHref}" aria-label="Telefono">${ICON.phone}</a>
              </div>
            </div>
            <div class="footer-contact">
              <h4>Contatti</h4>
              <ul>
                <li><a href="${S.phoneHref}">${ICON.phone} ${S.phone}</a></li>
                <li><a href="mailto:${S.email}">${ICON.mail} ${S.email}</a></li>
                <li><a href="https://maps.google.com/?q=Cantonal+116+6565+San+Bernardino" target="_blank" rel="noopener">${ICON.pin} Cantonál 116<br>CH-6565 San Bernardino</a></li>
              </ul>
            </div>
            <div>
              <h4>Scopri</h4>
              <ul>
                <li><a href="corsi.html">Corsi e lezioni</a></li>
                <li><a href="info.html#pian-cales-confin">Skipass e impianti</a></li>
                <li><a href="gare.html">Gare</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="webcam.html">Webcam / Meteo</a></li>
                <li><a href="downloads.html">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h4>Utili</h4>
              <ul>
                <li><a href="${S.booking}" target="_blank" rel="noopener">Riservazioni online ↗</a></li>
                <li><a href="https://www.slf.ch/avalanche/bulletin/it/gk_c_it_dst_1_3.pdf" target="_blank" rel="noopener">Bollettino valanghe SLF ↗</a></li>
                <li><a href="https://www.meteocentrale.ch/it/europa/svizzera/meteo-s-bernardino/details/M11-000736/" target="_blank" rel="noopener">Meteo S. Bernardino ↗</a></li>
                <li><a href="sostenitori.html">Sostenitori</a></li>
              </ul>
              <div class="footer-partner"><img src="assets/img/logo/logo-san-bernardino.png" alt="San Bernardino Mesolcina Calanca" loading="lazy"></div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${y} Scuola Svizzera di Sci e Snowboard San Bernardino. Tutti i diritti riservati.</span>
            <span class="tricolor"></span>
          </div>
        </div>
      </footer>
      <button class="to-top" aria-label="Torna su">${ICON.up}</button>`;
  }

  renderHeader();
  renderFooter();

  const header = $(".site-header");
  const body = document.body;

  /* Menu mobile + sottomenu */
  const toggle = $(".nav-toggle");
  toggle?.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
    body.style.overflow = open ? "hidden" : "";
  });
  $$(".nav-parent").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const li = btn.parentElement;
      const open = !li.classList.contains("open");
      $$(".has-sub.open").forEach((x) => { x.classList.remove("open"); x.firstElementChild.setAttribute("aria-expanded", "false"); });
      li.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open);
    });
  });
  document.addEventListener("click", () => $$(".has-sub.open").forEach((x) => x.classList.remove("open")));
  $$(".main-nav a").forEach((a) => a.addEventListener("click", () => {
    body.classList.remove("nav-open"); body.style.overflow = ""; toggle?.setAttribute("aria-expanded", "false");
  }));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && body.classList.contains("nav-open")) toggle.click();
  });

  /* Scroll: header, progress, torna su */
  const progress = $(".scroll-progress");
  const toTop = $(".to-top");
  let lastY = 0, ticking = false;
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    header?.classList.toggle("is-scrolled", y > 40);
    const hide = y > 500 && y > lastY && !body.classList.contains("nav-open");
    header?.classList.toggle("is-hidden", hide);
    body.classList.toggle("header-hidden", hide);
    toTop?.classList.toggle("is-visible", y > 700);
    // parallax leggero
    if (!reduceMotion) $$("[data-parallax]").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      el.style.transform = `translate3d(0, ${(r.top + r.height / 2 - innerHeight / 2) * -parseFloat(el.dataset.parallax)}px, 0)`;
    });
    lastY = y; ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();
  toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  /* ---------------- Bacheca news ---------------- */
  const thumbOf = (p) => p.replace(/^(news|gare|prospetto)\//, "$1/thumb/");
  const CAT = { stagione: ["Stagione 25/26", "tag--red"], corsi: ["Corsi", ""], eventi: ["Eventi", "tag--yellow"], gare: ["Gare", "tag--red"], maestri: ["Maestri", ""] };
  const fmt = (d) => new Date(d + "T12:00:00").toLocaleDateString("it-CH", { day: "numeric", month: "long", year: "numeric" });

  function newsCard(n, i) {
    const [catLabel, catClass] = CAT[n.cat] || ["Info", ""];
    const year = n.date.slice(0, 4);
    const media = n.img ? `
      <a class="news-card__img" href="assets/img/${n.img}" data-lightbox="news" data-caption="${n.title}" data-sub="${fmt(n.date)}" ${n.wide ? 'style="aspect-ratio:16/10"' : ""}>
        <img src="assets/img/${thumbOf(n.img)}" alt="${n.title}" loading="lazy">
        <span class="news-card__zoom">${ICON.zoom}</span>
      </a>` : "";
    const list = n.list ? `<ul>${n.list.map((x) => `<li>${x}</li>`).join("")}</ul>` : "";
    return `<article class="news-card${n.img ? "" : " news-card--text"}" data-cat="${n.cat}" data-year="${year}" style="--d:${Math.min(i, 8) * 0.06}s">
      ${media}
      <div class="news-card__body">
        <div class="news-card__meta"><span class="tag ${catClass}">${catLabel}</span><time datetime="${n.date}">${fmt(n.date)}</time></div>
        <h3>${n.title}</h3>
        ${n.text ? `<p>${n.text}</p>` : ""}${list}
      </div>
    </article>`;
  }

  $$("[data-news]").forEach((host) => {
    const limit = parseInt(host.dataset.news, 10) || Infinity;
    const items = (window.NEWS || []).slice(0, limit);
    host.innerHTML = items.map(newsCard).join("");
    $$(".news-card", host).forEach((c) => c.classList.add("pop"));
  });

  // filtri bacheca
  $$("[data-filters]").forEach((bar) => {
    const grid = $(bar.dataset.filters);
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      $$(".chip", bar).forEach((c) => c.classList.toggle("is-active", c === chip));
      const f = chip.dataset.filter;
      let i = 0;
      $$(".news-card", grid).forEach((card) => {
        const show = f === "all" || card.dataset.cat === f || card.dataset.year === f || (f === "archivio" && card.dataset.year < "2025");
        card.classList.toggle("is-hidden", !show);
        card.classList.remove("pop");
        if (show) { void card.offsetWidth; card.style.setProperty("--d", Math.min(i++, 10) * 0.05 + "s"); card.classList.add("pop"); }
      });
    });
  });

  // ticker
  $$("[data-ticker]").forEach((t) => {
    const items = (window.NEWS || []).slice(0, 6).map((n) => `<a href="news.html">${n.title}</a>`).join("");
    t.innerHTML = `<div class="ticker__track">${items}${items}</div>`;
  });

  /* ---------------- Galleria ---------------- */
  $$("[data-gallery]").forEach((host) => {
    host.innerHTML = (window.GALLERY || []).map((g) =>
      `<a href="${g.full}" data-lightbox="gallery" data-caption="${g.caption}" data-reveal="zoom"><img src="${g.thumb}" alt="${g.caption}" loading="lazy"></a>`).join("");
  });

  /* ---------------- Reveal on scroll ---------------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-visible");
      io.unobserve(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }) : null;

  $$("[data-stagger]").forEach((wrap) => {
    [...wrap.children].forEach((child, i) => {
      if (!child.hasAttribute("data-reveal")) child.setAttribute("data-reveal", wrap.dataset.stagger || "");
      child.style.setProperty("--d", (i % 8) * 0.09 + "s");
    });
  });
  $$("[data-reveal], .hl, .stat").forEach((el) => (io ? io.observe(el) : el.classList.add("is-visible")));

  /* ---------------- Contatori ---------------- */
  const countIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target, end = parseFloat(el.dataset.count), dur = 1800, t0 = performance.now();
      const sep = el.dataset.sep === "true";
      const step = (t) => {
        const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 4)));
        el.firstChild.nodeValue = sep ? v.toLocaleString("de-CH") : v;
        if (p < 1) requestAnimationFrame(step);
      };
      reduceMotion ? (el.firstChild.nodeValue = sep ? end.toLocaleString("de-CH") : end) : requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 }) : null;
  $$("[data-count]").forEach((el) => countIO?.observe(el));

  /* ---------------- Bottoni: effetto riempimento dal punto del mouse ---------------- */
  document.addEventListener("pointermove", (e) => {
    const b = e.target.closest?.(".btn");
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--mx", e.clientX - r.left + "px");
    b.style.setProperty("--my", e.clientY - r.top + "px");
  });

  /* ---------------- Tilt 3D sulle card servizi ---------------- */
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------------- Tabs ---------------- */
  $$("[data-tabs]").forEach((tabs) => {
    const list = $(".tabs__list", tabs);
    const btns = $$("button", list);
    const pill = document.createElement("span");
    pill.className = "tabs__pill";
    list.prepend(pill);
    const select = (btn) => {
      btns.forEach((b) => {
        const on = b === btn;
        b.setAttribute("aria-selected", on);
        $("#" + b.getAttribute("aria-controls")).hidden = !on;
      });
      pill.style.left = btn.offsetLeft + "px";
      pill.style.width = btn.offsetWidth + "px";
      if (btn.dataset.color) pill.style.background = btn.dataset.color;
    };
    btns.forEach((b) => b.addEventListener("click", () => select(b)));
    select(btns.find((b) => b.getAttribute("aria-selected") === "true") || btns[0]);
    window.addEventListener("resize", () => select(btns.find((b) => b.getAttribute("aria-selected") === "true")));
  });

  /* ---------------- Subnav: evidenzia sezione corrente ---------------- */
  const subLinks = $$(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    const map = new Map(subLinks.map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        subLinks.forEach((a) => a.classList.remove("is-current"));
        const a = map.get(en.target.id);
        if (a) { a.classList.add("is-current"); a.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }); }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------------- Lightbox ---------------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Visualizzatore immagini");
  lb.innerHTML = `<span class="lightbox__count"></span>
    <a class="lightbox__dl" href="#" download>Scarica</a>
    <button class="lightbox__close" aria-label="Chiudi">${ICON.close}</button>
    <button class="lightbox__prev" aria-label="Precedente">${ICON.prev}</button>
    <div class="lightbox__stage"><img class="lightbox__img" alt=""><div class="lightbox__caption"></div></div>
    <button class="lightbox__next" aria-label="Successiva">${ICON.next}</button>`;
  document.body.appendChild(lb);
  const lbImg = $(".lightbox__img", lb), lbCap = $(".lightbox__caption", lb), lbCount = $(".lightbox__count", lb), lbDl = $(".lightbox__dl", lb);
  let group = [], idx = 0, lastFocus = null;

  function show(i) {
    idx = (i + group.length) % group.length;
    const a = group[idx];
    lbImg.classList.remove("is-loaded");
    lbImg.onload = () => lbImg.classList.add("is-loaded");
    lbImg.src = a.getAttribute("href");
    lbImg.alt = a.dataset.caption || "";
    lbCap.innerHTML = (a.dataset.caption || "") + (a.dataset.sub ? `<small>${a.dataset.sub}</small>` : "");
    lbCount.textContent = group.length > 1 ? `${idx + 1} / ${group.length}` : "";
    lbDl.href = a.getAttribute("href");
    $(".lightbox__prev", lb).hidden = $(".lightbox__next", lb).hidden = group.length < 2;
  }
  function open(a) {
    const name = a.dataset.lightbox;
    group = $$(`[data-lightbox="${name}"]`).filter((x) => x.offsetParent !== null || x === a);
    lastFocus = document.activeElement;
    show(group.indexOf(a));
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    $(".lightbox__close", lb).focus();
  }
  function close() {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
    lastFocus?.focus();
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-lightbox]");
    if (!a) return;
    e.preventDefault();
    open(a);
  });
  $(".lightbox__close", lb).addEventListener("click", close);
  $(".lightbox__prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lightbox__next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.classList.contains("lightbox__stage")) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(idx - 1);
    if (e.key === "ArrowRight") show(idx + 1);
  });
  let tx = 0;
  lb.addEventListener("touchstart", (e) => (tx = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
  });

  /* ---------------- Neve animata (canvas) ---------------- */
  $$("canvas[data-snow]").forEach((cv) => {
    if (reduceMotion) return;
    const ctx = cv.getContext("2d");
    let w, h, flakes = [], dpr = Math.min(devicePixelRatio || 1, 2), mouseX = 0;
    const N = parseInt(cv.dataset.snow, 10) || 140;
    function resize() {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function make(top) {
      const r = Math.random() * 2.6 + 0.6;
      return { x: Math.random() * w, y: top ? -10 : Math.random() * h, r, s: r * 0.35 + 0.25, d: Math.random() * Math.PI * 2, o: Math.random() * 0.5 + 0.4 };
    }
    resize();
    flakes = Array.from({ length: N }, () => make(false));
    window.addEventListener("resize", resize);
    cv.parentElement.addEventListener("pointermove", (e) => (mouseX = (e.clientX / innerWidth - 0.5) * 1.6));
    let visible = true;
    new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(cv);
    (function loop() {
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        for (const f of flakes) {
          f.d += 0.01;
          f.y += f.s;
          f.x += Math.sin(f.d) * 0.4 + mouseX * f.r * 0.3;
          if (f.y > h + 10 || f.x < -20 || f.x > w + 20) Object.assign(f, make(true));
          ctx.beginPath();
          ctx.globalAlpha = f.o;
          ctx.fillStyle = "#fff";
          ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    })();
  });

  /* ---------------- Meteo live (Open-Meteo, nessuna chiave richiesta) ---------------- */
  const WMO = {
    0: ["☀️", "Sereno"], 1: ["🌤️", "Prevalentemente sereno"], 2: ["⛅", "Parzialmente nuvoloso"], 3: ["☁️", "Coperto"],
    45: ["🌫️", "Nebbia"], 48: ["🌫️", "Nebbia con brina"], 51: ["🌦️", "Pioviggine leggera"], 53: ["🌦️", "Pioviggine"], 55: ["🌧️", "Pioviggine intensa"],
    61: ["🌧️", "Pioggia debole"], 63: ["🌧️", "Pioggia"], 65: ["🌧️", "Pioggia forte"], 66: ["🌧️", "Pioggia gelata"], 67: ["🌧️", "Pioggia gelata"],
    71: ["🌨️", "Neve debole"], 73: ["🌨️", "Nevicata"], 75: ["❄️", "Neve forte"], 77: ["🌨️", "Granelli di neve"],
    80: ["🌦️", "Rovesci"], 81: ["🌧️", "Rovesci"], 82: ["⛈️", "Rovesci forti"], 85: ["🌨️", "Rovesci di neve"], 86: ["❄️", "Forti rovesci di neve"],
    95: ["⛈️", "Temporale"], 96: ["⛈️", "Temporale con grandine"], 99: ["⛈️", "Temporale con grandine"],
  };
  const wmo = (c) => WMO[c] || ["🌡️", "—"];
  $$("[data-weather]").forEach(async (box) => {
    const fc = $(box.dataset.forecast || "#__none");
    const url = "https://api.open-meteo.com/v1/forecast?latitude=46.4617&longitude=9.1856&elevation=1626" +
      "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,snow_depth,relative_humidity_2m" +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum&timezone=Europe%2FZurich&forecast_days=5";
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);
      const d = await res.json();
      const c = d.current, [ico, desc] = wmo(c.weather_code);
      const snow = c.snow_depth != null ? Math.round(c.snow_depth * 100) : null;
      box.innerHTML = `
        <div class="weather__place">San Bernardino · 1626 m · ora</div>
        <div class="weather__icon" aria-hidden="true">${ico}</div>
        <div class="weather__temp">${Math.round(c.temperature_2m)}°C</div>
        <div class="weather__desc">${desc} · percepita ${Math.round(c.apparent_temperature)}°</div>
        <div class="weather__row">
          <span>💨 Vento ${Math.round(c.wind_speed_10m)} km/h</span>
          <span>💧 Umidità ${c.relative_humidity_2m}%</span>
          ${snow !== null ? `<span>❄️ Neve ${snow} cm</span>` : ""}
        </div>`;
      if (fc) {
        fc.innerHTML = d.daily.time.map((t, i) => {
          const [di] = wmo(d.daily.weather_code[i]);
          const day = i === 0 ? "Oggi" : new Date(t + "T12:00").toLocaleDateString("it-CH", { weekday: "short" });
          const sf = d.daily.snowfall_sum[i];
          return `<div><b>${day}</b><i>${di}</i><span>${Math.round(d.daily.temperature_2m_min[i])}° / ${Math.round(d.daily.temperature_2m_max[i])}°</span>${sf > 0 ? `<br><span>❄️ ${sf} cm</span>` : ""}</div>`;
        }).join("");
      }
    } catch (err) {
      box.innerHTML = `<div class="weather__place">San Bernardino · 1626 m</div><div class="weather__icon">🏔️</div>
        <div class="weather__temp">Meteo</div><div class="weather__desc">Dati non disponibili al momento — <a href="https://www.meteocentrale.ch/it/europa/svizzera/meteo-s-bernardino/details/M11-000736/" target="_blank" rel="noopener" style="color:var(--yellow)">vedi Meteocentrale</a></div>`;
    }
  });

  /* ---------------- Webcam ---------------- */
  $$("[data-webcam]").forEach((wc) => {
    const img = $("img", wc.closest("section") || document);
    const live = img.getAttribute("src");
    const label = $("[data-webcam-label]");
    let html = `<button class="is-active" data-src="live">Live</button>`;
    for (let h = 6; h <= 21; h++) html += `<button data-src="${String(h).padStart(2, "0")}">${String(h).padStart(2, "0")}:00</button>`;
    wc.innerHTML = html;
    const bust = () => "?t=" + Date.now();
    img.src = live + bust();
    wc.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      $$("button", wc).forEach((x) => x.classList.toggle("is-active", x === b));
      img.style.opacity = 0.3;
      img.onload = () => (img.style.opacity = 1);
      img.src = b.dataset.src === "live" ? live + bust() : `https://www.scisanbernardino.ch/webcam/grande/${b.dataset.src}.jpg` + bust();
      if (label) label.textContent = b.dataset.src === "live" ? "Live" : `Archivio ${b.dataset.src}:00`;
    });
    // aggiornamento automatico immagine live ogni 5 minuti
    setInterval(() => { if ($(".is-active", wc)?.dataset.src === "live") img.src = live + bust(); }, 300000);
  });
})();
