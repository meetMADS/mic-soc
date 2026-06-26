/* Mentor admin panel. No-ops unless a #mic-admin container exists on the page.
 * Lets a mentor tick which sections are locked, preview locally, and export the
 * locks.json file to commit (the committed file is what every mentee sees).
 */
(function () {
  var REPO_EDIT = 'https://github.com/meetMADS/mic-soc/edit/main/site/_static/locks.json';
  var PAGES = [
    ['w0_setup', 'Week 0 · Setup'],
    ['w1_foundations', 'Week 1 · Foundations'],
    ['w2_denoising_reconstruction', 'Week 1.5–3 · Denoising & Reconstruction'],
    ['w3_ct_mri', 'Week 3 · CT & MRI'],
    ['w4_shape_segmentation', 'Week 4 · Shape & Segmentation'],
    ['w5_cnns', 'Week 5 · CNNs'],
    ['w6_generative', 'Week 6 · VAEs & GANs'],
    ['w7_paper', 'Week 7 · Paper reading'],
    ['w8_final_project', 'Week 8 · Final project'],
    ['p1_denoising', 'Project 1 · Denoising'],
    ['p2_segmentation', 'Project 2 · Segmentation']
  ];

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    var root = document.getElementById('mic-admin');
    if (!root) return;
    root.className = 'mic-admin';

    var script = document.querySelector('script[src*="admin.js"]');
    var base = (script ? script.src : '').replace(/admin\.js(\?.*)?$/, '');
    var locksUrl = base + 'locks.json';

    var state = {};
    PAGES.forEach(function (p) { state[p[0]] = false; });

    // Build the table.
    var html = '<table><thead><tr><th>Section</th><th>Status</th><th>Locked?</th></tr></thead><tbody>';
    PAGES.forEach(function (p) {
      html += '<tr data-key="' + p[0] + '"><td>' + p[1] + '</td>' +
        '<td><span class="pill off">unlocked</span></td>' +
        '<td><input type="checkbox" data-key="' + p[0] + '"></td></tr>';
    });
    html += '</tbody></table>' +
      '<div class="btnrow">' +
      '<button id="mic-lockall">Lock all</button>' +
      '<button id="mic-unlockall">Unlock all</button>' +
      '<button class="primary" id="mic-preview">Preview in MY browser</button>' +
      '<button id="mic-clearpreview">Turn off preview</button>' +
      '</div>' +
      '<p class="hint">Preview only changes what <i>you</i> see. To change it for everyone, ' +
      'save the file below and commit it.</p>' +
      '<div class="btnrow">' +
      '<button id="mic-download">⬇ Download locks.json</button>' +
      '<button id="mic-copy">Copy JSON</button>' +
      '<a class="btn" href="' + REPO_EDIT + '" target="_blank" rel="noopener">✎ Edit locks.json on GitHub →</a>' +
      '</div>' +
      '<textarea id="mic-json" readonly></textarea>';
    root.innerHTML = html;

    function rowsRefresh() {
      PAGES.forEach(function (p) {
        var tr = root.querySelector('tr[data-key="' + p[0] + '"]');
        var pill = tr.querySelector('.pill');
        if (state[p[0]]) { tr.classList.add('locked'); pill.className = 'pill on'; pill.textContent = 'locked'; }
        else { tr.classList.remove('locked'); pill.className = 'pill off'; pill.textContent = 'unlocked'; }
      });
      var ordered = {};
      PAGES.forEach(function (p) { ordered[p[0]] = !!state[p[0]]; });
      root.querySelector('#mic-json').value = JSON.stringify(ordered, null, 2) + '\n';
    }

    root.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      cb.addEventListener('change', function () { state[cb.dataset.key] = cb.checked; rowsRefresh(); });
    });
    root.querySelector('#mic-lockall').onclick = function () {
      PAGES.forEach(function (p) { state[p[0]] = true; }); syncChecks(); rowsRefresh();
    };
    root.querySelector('#mic-unlockall').onclick = function () {
      PAGES.forEach(function (p) { state[p[0]] = false; }); syncChecks(); rowsRefresh();
    };
    function syncChecks() {
      root.querySelectorAll('input[type=checkbox]').forEach(function (cb) { cb.checked = !!state[cb.dataset.key]; });
    }
    root.querySelector('#mic-preview').onclick = function () {
      var o = {}; PAGES.forEach(function (p) { o[p[0]] = !!state[p[0]]; });
      try { localStorage.setItem('micLocksOverride', JSON.stringify(o)); } catch (e) {}
      alert('Preview ON. Only this browser sees these locks. Open a week to test.\nCommit locks.json to apply for everyone.');
    };
    root.querySelector('#mic-clearpreview').onclick = function () {
      try { localStorage.removeItem('micLocksOverride'); } catch (e) {}
      alert('Preview OFF. You now see the live (committed) locks.');
    };
    root.querySelector('#mic-download').onclick = function () {
      var blob = new Blob([root.querySelector('#mic-json').value], { type: 'application/json' });
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'locks.json';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    };
    root.querySelector('#mic-copy').onclick = function () {
      var ta = root.querySelector('#mic-json'); ta.select();
      navigator.clipboard ? navigator.clipboard.writeText(ta.value) : document.execCommand('copy');
      alert('Copied. Paste into locks.json on GitHub and commit.');
    };

    // Load current committed state.
    fetch(locksUrl, { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (j) {
        PAGES.forEach(function (p) { if (typeof j[p[0]] === 'boolean') state[p[0]] = j[p[0]]; });
        syncChecks(); rowsRefresh();
      })
      .catch(function () { syncChecks(); rowsRefresh(); });
  });
})();
