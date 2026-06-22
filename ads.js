// ads.js — Monetag (sem popup/popunder)
// Zonas: 252327, 252329, 252330, 252331

(function() {
  setTimeout(function() {

    var zones = ['252327', '252329', '252330', '252331'];

    zones.forEach(function(zone) {
      var s = document.createElement('script');
      s.src = 'https://quge5.com/88/tag.min.js';
      s.setAttribute('data-zone', zone);
      s.async = true;
      s.setAttribute('data-cfasync', 'false');
      document.head.appendChild(s);
    });

  }, 10000);
})();
