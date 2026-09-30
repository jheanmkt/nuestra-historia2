(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = "") => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ================= INICIO ================= */
  $("#heroTo").textContent = `Para mi ${DATA.apodoElla}, ${DATA.para}`;
  const slides = $("#slides"), dots = $("#dots");
  slides.innerHTML = DATA.portada.map((f, i) => `<img src="${f}" alt="Nosotros, foto ${i + 1}" ${i ? 'loading="lazy"' : ""} draggable="false" />`).join("");
  dots.innerHTML = DATA.portada.map(() => "<i></i>").join("");
  const setDot = () => {
    const n = Math.round(slides.scrollLeft / slides.clientWidth);
    [...dots.children].forEach((d, i) => d.classList.toggle("on", i === n));
  };
  slides.addEventListener("scroll", setDot, { passive: true });
  setDot();
  $("#signature").textContent = `Con todo mi amor, tu ${DATA.apodoEl} 🧵`;
  $("#countReasons").textContent = `${DATA.razones.length} razones`;
  $("#countLetters").textContent = `${DATA.cartas.length} cartas`;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.floor((today - DATA.inicio) / 86400000);
  const fmt = new Intl.NumberFormat("es-PE");
  $("#heroDays").innerHTML = `Llevamos <strong>${fmt.format(days)} días</strong> tomados de la mano, desde aquella lluvia del 20 de enero.`;

  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const vt = DATA.versiculos[dayOfYear % DATA.versiculos.length];
  $("#verseToday").textContent = vt.v;
  $("#verseTodayRef").textContent = vt.c;

  /* ================= HISTORIA ================= */
  const tl = $("#timeline");
  tl.insertAdjacentHTML(
    "beforeend",
    DATA.historia
      .map(
        (c) => `
      <article class="chapter${c.destacado ? " chapter--star" : ""}">
        <p class="chapter-when">${esc(c.cuando)}</p>
        <h3>${esc(c.titulo)}</h3>
        <p class="chapter-text">${esc(c.texto)}</p>
        ${c.poema ? `<blockquote class="chapter-poem">${esc(c.poema)}${c.poemaAutor ? `<small>${esc(c.poemaAutor)}</small>` : ""}</blockquote>` : ""}
        ${c.nota ? `<p class="chapter-note">${esc(c.nota)}</p>` : ""}
        ${c.foto ? `<img src="${c.foto}" alt="" loading="lazy" />` : ""}
      </article>`
      )
      .join("")
  );

  const fill = $("#threadFill");
  function updateThread() {
    if ($("#historia").hidden) return;
    const r = tl.getBoundingClientRect();
    const progress = (window.innerHeight * 0.6 - r.top) / r.height;
    fill.style.height = `${Math.max(0, Math.min(1, progress)) * 100}%`;
  }
  window.addEventListener("scroll", updateThread, { passive: true });
  window.addEventListener("resize", updateThread);

  /* ================= RAZONES ================= */
  const deck = $("#deck");
  let idx = 0;
  const total = DATA.razones.length;

  function cardHTML(i) {
    const r = DATA.razones[i];
    return `
      ${r.f ? `<div class="card-photo" style="background-image:url('${r.f}')"></div>` : ""}
      <div class="card-body">
        <span class="card-num">Razón ${i + 1}</span>
        <p class="card-text">${esc(r.t)}</p>
      </div>`;
  }

  function renderDeck() {
    deck.innerHTML = "";
    for (let d = 2; d >= 0; d--) {
      const i = (idx + d) % total;
      const el = document.createElement("div");
      el.className = "card card--photo";
      el.dataset.depth = d;
      el.innerHTML = cardHTML(i);
      if (d === 0) enableDrag(el);
      deck.appendChild(el);
    }
    $("#deckCount").textContent = `${idx + 1} / ${total}`;
  }

  function fling(dir) {
    const top = deck.querySelector('[data-depth="0"]');
    if (!top) return;
    top.style.transform = `translateX(${dir * 140}%) rotate(${dir * 18}deg)`;
    top.style.opacity = "0";
    setTimeout(() => {
      idx = (idx + 1) % total;
      renderDeck();
    }, 260);
  }

  function enableDrag(el) {
    let startX = 0, startY = 0, dx = 0, active = false;
    el.addEventListener("pointerdown", (e) => {
      active = true; startX = e.clientX; startY = e.clientY; dx = 0;
      el.setPointerCapture(e.pointerId);
      el.classList.add("dragging");
    });
    el.addEventListener("pointermove", (e) => {
      if (!active) return;
      dx = e.clientX - startX;
      const dy = e.clientY - startY;
      el.style.transform = `translate(${dx}px, ${dy * 0.2}px) rotate(${dx / 18}deg)`;
    });
    const end = () => {
      if (!active) return;
      active = false;
      el.classList.remove("dragging");
      if (Math.abs(dx) > 90) fling(Math.sign(dx));
      else el.style.transform = "";
    };
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }

  $("#nextReason").addEventListener("click", () => fling(1));
  $("#prevReason").addEventListener("click", () => {
    idx = (idx - 1 + total) % total;
    renderDeck();
  });
  renderDeck();

  /* ================= CARTAS ================= */
  const READ_KEY = "hilo-rojo:leidas";
  let read = [];
  try { read = JSON.parse(localStorage.getItem(READ_KEY)) || []; } catch (_) {}

  const letters = $("#letters");
  function renderLetters() {
    letters.innerHTML = DATA.cartas
      .map(
        (c) => `
      <button type="button" class="letter${read.includes(c.id) ? " is-read" : ""}" data-letter="${c.id}">
        <span class="letter-emoji">${c.emoji}</span>
        <span class="letter-when"><span>${read.includes(c.id) ? "Ya la leíste" : "Ábrelo cuando"}</span>${esc(c.cuando)}</span>
      </button>`
      )
      .join("");
  }
  renderLetters();

  letters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-letter]");
    if (!b) return;
    const c = DATA.cartas.find((x) => x.id === b.dataset.letter);
    openSheet(`
      <div class="sheet-emoji">${c.emoji}</div>
      <h2 id="sheetTitle">Para cuando ${esc(c.cuando)}</h2>
      <p class="letter-text">${esc(c.carta)}</p>
      <p class="letter-sign">Te amo, tu ${esc(DATA.apodoEl)}</p>
      <div class="verse"><p>${esc(c.versiculo)}</p><cite>${esc(c.cita)}</cite></div>
    `);
    if (!read.includes(c.id)) {
      read.push(c.id);
      try { localStorage.setItem(READ_KEY, JSON.stringify(read)); } catch (_) {}
      renderLetters();
    }
  });

  $("#verses").innerHTML = DATA.versiculos
    .map((v) => `<article class="verse"><p>${esc(v.v)}</p><cite>${esc(v.c)}</cite></article>`)
    .join("");

  /* ================= HOJA MODAL ================= */
  const sheet = $("#sheet");
  let lastFocus = null;
  function openSheet(html) {
    lastFocus = document.activeElement;
    $("#sheetBody").innerHTML = html;
    sheet.hidden = false;
    document.body.style.overflow = "hidden";
    $(".sheet-panel").scrollTop = 0;
    $(".sheet-close").focus();
  }
  function closeSheet() {
    sheet.hidden = true;
    document.body.style.overflow = "";
    lastFocus && lastFocus.focus();
  }
  sheet.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeSheet(); });

  /* ================= FOTOS ================= */
  const gallery = $("#gallery");
  gallery.innerHTML = DATA.fotos
    .map((f, i) => `<button type="button" data-photo="${i}" aria-label="Ver foto ${i + 1}"><img src="${f}" alt="" loading="lazy" /></button>`)
    .join("");

  const lb = $("#lightbox"), lbImg = $("#lbImg");
  let pIdx = 0;
  function showPhoto(i) {
    pIdx = (i + DATA.fotos.length) % DATA.fotos.length;
    lbImg.src = DATA.fotos[pIdx];
    $("#lbCount").textContent = `${pIdx + 1} / ${DATA.fotos.length}`;
  }
  gallery.addEventListener("click", (e) => {
    const b = e.target.closest("[data-photo]");
    if (!b) return;
    showPhoto(+b.dataset.photo);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  });
  function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
  lb.addEventListener("click", (e) => {
    const a = e.target.closest("[data-lb]")?.dataset.lb;
    if (a === "close" || e.target === lb) closeLb();
    if (a === "prev") showPhoto(pIdx - 1);
    if (a === "next") showPhoto(pIdx + 1);
  });
  let sx = 0;
  lbImg.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
  lbImg.addEventListener("touchend", (e) => {
    const d = e.changedTouches[0].clientX - sx;
    if (Math.abs(d) > 50) showPhoto(pIdx + (d < 0 ? 1 : -1));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (!lb.hidden) closeLb(); else if (!sheet.hidden) closeSheet(); }
    if (!lb.hidden && e.key === "ArrowRight") showPhoto(pIdx + 1);
    if (!lb.hidden && e.key === "ArrowLeft") showPhoto(pIdx - 1);
  });

  /* ================= NAVEGACIÓN ================= */
  const views = [...document.querySelectorAll("[data-view]")];
  const tabs = [...document.querySelectorAll("[data-tab]")];
  function route() {
    const id = (location.hash || "#inicio").slice(1);
    const target = views.find((v) => v.id === id) ? id : "inicio";
    views.forEach((v) => (v.hidden = v.id !== target));
    tabs.forEach((t) => t.setAttribute("aria-current", t.getAttribute("href") === `#${target}` ? "page" : "false"));
    requestAnimationFrame(() => { window.scrollTo(0, 0); updateThread(); });
  }
  window.addEventListener("hashchange", route);
  route();
})();
