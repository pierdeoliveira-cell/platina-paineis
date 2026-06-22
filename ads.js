// ads.js — Monetag integration placeholder
// Substitua o PUBLISHER_ID pelo seu ID real do Monetag após cadastro

(function() {
  var PUBLISHER_ID = 'SEU_ID_MONETAG'; // <- coloque seu ID aqui após cadastrar em monetag.com

  // Só carrega depois de 10 segundos
  setTimeout(function() {
    var script = document.createElement('script');
    script.src = 'https://alwingulla.com/88/tag.min.js';
    script.setAttribute('data-zone', PUBLISHER_ID);
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.head.appendChild(script);
  }, 10000);
})();
