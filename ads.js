// ads.js — Monetag zones (sem popup/popunder)
// Zone 252327 = Multitag (banner, native, in-page push)

(function() {
  // Carrega após 10s para não atrapalhar carregamento
  setTimeout(function() {

    // ── MULTITAG principal (banner + native + in-page push) ──
    var s = document.createElement('script');
    s.src = 'https://quge5.com/88/tag.min.js';
    s.setAttribute('data-zone', '252327');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    document.head.appendChild(s);

  }, 10000);
})();
