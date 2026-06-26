/* MIC-SoC lock system.
 * Reads _static/locks.json ({ "<page-stem>": true|false }). true = locked.
 *
 * Mentor vs learner:
 *  - When the site is behind Cloudflare Access, this asks Cloudflare who you are
 *    (/cdn-cgi/access/get-identity). If your email matches MENTOR_EMAIL, EVERYTHING
 *    is unlocked for you and a "Mentor admin" button appears. Learners only ever
 *    see unlocked sections, and cannot unlock anything (they can't change locks.json
 *    and can't impersonate the mentor email).
 *  - On plain GitHub Pages (no Access) the identity call fails and it falls back to
 *    the soft, client-side lock for everyone.
 */
(function () {
  // ── Mentor login email (your Cloudflare Access email). Edit if different. ──
  var MENTOR_EMAIL = "meet.m.a.smd@gmail.com";

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

  function revealMentorTools() {
    if (document.getElementById('mic-mentor-bar')) return;
    var bar = document.createElement('a');
    bar.id = 'mic-mentor-bar';
    bar.href = base + '../admin.html';
    bar.textContent = '🛠 Mentor admin';
    bar.title = 'You are signed in as the mentor — everything is unlocked for you.';
    bar.style.cssText = 'position:fixed;right:14px;bottom:14px;z-index:9999;background:#2563eb;' +
      'color:#fff;padding:8px 12px;border-radius:8px;text-decoration:none;font-size:.9rem;' +
      'box-shadow:0 2px 8px rgba(0,0,0,.25);';
    document.body.appendChild(bar);
  }

  function applyLearner(locks) {
    if (override) locks = Object.assign({}, locks, override);
    document.querySelectorAll('a[href]').forEach(function (a) {
      var key = stem(a.getAttribute('href') || '');
      if (key && isLocked(locks, key) && !a.dataset.micLocked) {
        a.dataset.micLocked = '1';
        a.classList.add('mic-locked-link');
        var b = document.createElement('span'); b.className = 'mic-lock-badge'; b.textContent = '🔒';
        a.insertBefore(b, a.firstChild);
        a.addEventListener('click', function (ev) {
          ev.preventDefault(); ev.stopPropagation();
          alert('🔒 Locked by your mentor.\nThis section opens when your mentor unlocks it.');
        });
      }
    });
    if (current && isLocked(locks, current)) {
      var article = document.querySelector('article') || document.querySelector('main');
      if (article) {
        article.innerHTML =
          '<div class="mic-lock-gate"><div class="mic-lock-emoji">🔒</div>' +
          '<h1>This section is locked</h1>' +
          '<p>Your mentor has not opened this part of the course yet. ' +
          'It will appear here as soon as they unlock it.</p>' +
          '<p><a href="' + base + '../intro.html">← Back to the course home</a></p></div>';
        document.title = '🔒 Locked — ' + document.title;
      }
    }
  }

  function decide(isMentor) {
    if (isMentor) { revealMentorTools(); return; }  // mentor: full access, no gating
    fetch(locksUrl, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(applyLearner)
      .catch(function () { applyLearner({}); });
  }

  function start() {
    // Ask Cloudflare Access who is signed in (only answers when behind Access).
    fetch('/cdn-cgi/access/get-identity', { credentials: 'include' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (id) {
        var email = id && (id.email || (id.identity && id.identity.email) || '');
        decide(!!email && ('' + email).toLowerCase() === MENTOR_EMAIL.toLowerCase());
      })
      .catch(function () { decide(false); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
