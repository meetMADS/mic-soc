/* MIC-SoC learner progress tracker (per-browser, no backend).
 * Three ways content can use it:
 *  1) Homepage overall bar:   <div id="mic-progress"></div>
 *  2) Per-page complete button: <div class="mic-mark" data-id="w1_watch"></div>
 *     (or a page whose stem is in MAIN below gets a button automatically)
 *  3) Inline per-item checkbox: <span class="mic-check" data-id="w2_read"></span>
 * All state lives under localStorage "micProgress".
 */
(function () {
  var MAIN = [
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

  function renderHome(el) {
    var p = load();
    function draw() {
      var done = 0; MAIN.forEach(function (s) { if (p[s[0]]) done++; });
      var pct = Math.round(100 * done / MAIN.length);
      var rows = MAIN.map(function (s) {
        return '<li><label><input type="checkbox" data-k="' + s[0] + '"' + (p[s[0]] ? ' checked' : '') + '> ' + s[1] + '</label></li>';
      }).join('');
      el.innerHTML =
        '<div class="mic-prog-head"><b>Your progress</b><span class="mic-prog-num">' + done + ' / ' + MAIN.length + ' (' + pct + '%)</span></div>' +
        '<div class="mic-prog-bar"><div class="mic-prog-fill" style="width:' + pct + '%"></div></div>' +
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

  // Per-page "mark complete" button. id = explicit data-id, else page stem if in MAIN.
  function injectButton() {
    if (document.querySelector('.mic-lock-gate')) return;
    var article = document.querySelector('article') || document.querySelector('main');
    if (!article) return;
    var holder = article.querySelector('.mic-mark');
    var id, label;
    if (holder) { id = holder.dataset.id || stem(window.location.pathname); label = holder.dataset.label || ''; }
    else { var cur = stem(window.location.pathname); if (MAIN.some(function (s) { return s[0] === cur; })) { id = cur; } }
    if (!id) return;

    var p = load();
    var btn = document.createElement('button'); btn.className = 'mic-mark-btn';
    function refresh() { var d = !!p[id]; btn.textContent = d ? '✓ Completed — click to undo' : (label ? 'Mark "' + label + '" complete' : 'Mark this section complete'); btn.classList.toggle('done', d); }
    btn.addEventListener('click', function () { p[id] = !p[id]; save(p); refresh(); });
    refresh();

    if (holder) { holder.appendChild(btn); }
    else { var wrap = document.createElement('div'); wrap.className = 'mic-mark-wrap'; wrap.appendChild(btn); var h1 = article.querySelector('h1'); if (h1 && h1.parentNode) h1.parentNode.insertBefore(wrap, h1.nextSibling); else article.insertBefore(wrap, article.firstChild); }
  }

  // Inline per-item checkboxes: <span class="mic-check" data-id="..."></span>
  function wireChecks() {
    var p = load();
    document.querySelectorAll('.mic-check[data-id]').forEach(function (span) {
      if (span.dataset.wired) return; span.dataset.wired = '1';
      var id = span.dataset.id;
      var cb = document.createElement('input'); cb.type = 'checkbox'; cb.checked = !!p[id];
      cb.style.marginRight = '6px'; cb.style.transform = 'scale(1.2)'; cb.style.cursor = 'pointer';
      cb.addEventListener('change', function () { p[id] = cb.checked; save(p); });
      span.insertBefore(cb, span.firstChild);
    });
  }

  function run() {
    var home = document.getElementById('mic-progress');
    if (home) renderHome(home);
    injectButton();
    wireChecks();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
