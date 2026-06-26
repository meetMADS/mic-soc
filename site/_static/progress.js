/* MIC-SoC learner progress tracker.
 * Per-section "mark complete" buttons + a homepage progress bar.
 * State lives in localStorage (per browser) — no backend, no login. Mentors see
 * real completion through the per-week checkpoint Google Forms.
 */
(function () {
  var SECTIONS = [
    ['w0_setup', 'Week 0 · Setup'],
    ['w1_foundations', 'Week 1 · Foundations'],
    ['w2_denoising_reconstruction', 'Week 1.5–3 · Denoising & Recon'],
    ['w3_ct_mri', 'Week 3 · CT & MRI'],
    ['w4_shape_segmentation', 'Week 4 · Shape & Segmentation'],
    ['w5_cnns', 'Week 5 · CNNs'],
    ['w6_generative', 'Week 6 · VAEs & GANs'],
    ['w7_paper', 'Week 7 · Paper reading'],
    ['w8_final_project', 'Week 8 · Final project'],
    ['p1_denoising', 'Project 1 · Denoising'],
    ['p2_segmentation', 'Project 2 · Segmentation']
  ];
  var KEY = 'micProgress';

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function stem(href) { if (!href) return ''; var p = href.split('#')[0].split('?')[0]; var f = p.substring(p.lastIndexOf('/') + 1); return f.replace(/\.html$/, ''); }
  function tally(p) { var d = 0; SECTIONS.forEach(function (s) { if (p[s[0]]) d++; }); return { done: d, total: SECTIONS.length, pct: Math.round(100 * d / SECTIONS.length) }; }

  function renderHome(el) {
    var p = load();
    function draw() {
      var t = tally(p);
      var rows = SECTIONS.map(function (s) {
        return '<li><label><input type="checkbox" data-k="' + s[0] + '"' + (p[s[0]] ? ' checked' : '') + '> ' + s[1] + '</label></li>';
      }).join('');
      el.innerHTML =
        '<div class="mic-prog-head"><b>Your progress</b><span class="mic-prog-num">' + t.done + ' / ' + t.total + ' (' + t.pct + '%)</span></div>' +
        '<div class="mic-prog-bar"><div class="mic-prog-fill" style="width:' + t.pct + '%"></div></div>' +
        '<ul class="mic-prog-list">' + rows + '</ul>' +
        '<button class="mic-prog-reset">Reset progress</button>' +
        '<p class="mic-prog-hint">Saved in this browser only. Your mentor tracks real completion via the checkpoint forms.</p>';
      el.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
        cb.addEventListener('change', function () { p[cb.dataset.k] = cb.checked; save(p); draw(); });
      });
      el.querySelector('.mic-prog-reset').addEventListener('click', function () {
        if (confirm('Clear your saved progress on this browser?')) { p = {}; save(p); draw(); }
      });
    }
    draw();
  }

  function injectButton() {
    var cur = stem(window.location.pathname);
    if (!SECTIONS.some(function (s) { return s[0] === cur; })) return;
    if (document.querySelector('.mic-lock-gate')) return;
    var article = document.querySelector('article') || document.querySelector('main');
    if (!article) return;
    var h1 = article.querySelector('h1');
    var p = load();
    var wrap = document.createElement('div'); wrap.className = 'mic-mark-wrap';
    var btn = document.createElement('button'); btn.className = 'mic-mark-btn';
    function refresh() { var done = !!p[cur]; btn.textContent = done ? '✓ Completed — click to undo' : 'Mark this section complete'; btn.classList.toggle('done', done); }
    btn.addEventListener('click', function () { p[cur] = !p[cur]; save(p); refresh(); });
    refresh(); wrap.appendChild(btn);
    if (h1 && h1.parentNode) h1.parentNode.insertBefore(wrap, h1.nextSibling);
    else article.insertBefore(wrap, article.firstChild);
  }

  function run() {
    var home = document.getElementById('mic-progress');
    if (home) renderHome(home);
    injectButton();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
