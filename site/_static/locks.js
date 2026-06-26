/* MIC-SoC soft lock system.
 * Reads _static/locks.json ({ "<page-stem>": true|false }). true = locked.
 * Locked pages are gated; links to them get a 🔒 badge and are blocked.
 * Mentors can preview locally via localStorage.micLocksOverride (see admin page).
 * NOTE: this is a *soft* lock for pacing, not security — direct file/PDF URLs
 * remain reachable. For hard access control you need a real backend.
 */
(function () {
  var me = document.currentScript ||
    (function () { var s = document.getElementsByTagName('script'); return s[s.length - 1]; })();
  var base = (me && me.src ? me.src : '').replace(/locks\.js(\?.*)?$/, '');
  var locksUrl = base + 'locks.json';

  function stem(href) {
    if (!href) return '';
    var p = href.split('#')[0].split('?')[0];
    var f = p.substring(p.lastIndexOf('/') + 1);
    return f.replace(/\.html$/, '');
  }
  var current = stem(window.location.pathname);

  var override = null;
  try { var o = localStorage.getItem('micLocksOverride'); if (o) override = JSON.parse(o); } catch (e) {}

  function isLocked(locks, key) { return !!(locks && locks[key] === true); }

  function apply(locks) {
    if (override) locks = Object.assign({}, locks, override);

    // 1) Badge + block links to locked pages (sidebar, cards, prev/next).
    var links = document.querySelectorAll('a[href]');
    Array.prototype.forEach.call(links, function (a) {
      var key = stem(a.getAttribute('href') || '');
      if (key && isLocked(locks, key) && !a.dataset.micLocked) {
        a.dataset.micLocked = '1';
        a.classList.add('mic-locked-link');
        var b = document.createElement('span');
        b.className = 'mic-lock-badge'; b.textContent = '🔒';
        a.insertBefore(b, a.firstChild);
        a.addEventListener('click', function (ev) {
          ev.preventDefault(); ev.stopPropagation();
          alert('🔒 Locked by your mentor.\nThis section will open when your mentor unlocks it.');
        });
      }
    });

    // 2) Gate the current page if it is locked.
    if (current && isLocked(locks, current)) {
      var article = document.querySelector('article') || document.querySelector('main');
      if (article) {
        article.innerHTML =
          '<div class="mic-lock-gate">' +
          '<div class="mic-lock-emoji">🔒</div>' +
          '<h1>This section is locked</h1>' +
          '<p>Your mentor has not opened this part of the course yet. ' +
          'It will become available here as soon as they unlock it.</p>' +
          '<p><a href="' + base + '../intro.html">← Back to the course home</a></p>' +
          '</div>';
        document.title = '🔒 Locked — ' + document.title;
      }
    }
  }

  function run(locks) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () { apply(locks); });
    } else { apply(locks); }
  }

  fetch(locksUrl, { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : {}; })
    .then(run)
    .catch(function () { run({}); });
})();
