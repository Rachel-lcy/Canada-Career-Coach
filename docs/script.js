// Requirement-level check: show the level and note for the phrase the visitor taps.
(function () {
  var buttons = document.querySelectorAll('#phrases .phrase');
  var tag = document.getElementById('vtag');
  var note = document.getElementById('vnote');
  if (!buttons.length || !tag || !note) return;
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      tag.textContent = b.dataset.tag;
      tag.className = 'vtag ' + b.dataset.cls;
      note.textContent = b.dataset.note;
    });
  });
})();

// Copy buttons: each button copies the text of the element named in data-copy.
// If the clipboard is blocked, select the text so the visitor can copy it by hand.
(function () {
  document.querySelectorAll('.copy[data-copy]').forEach(function (btn) {
    var text = document.getElementById(btn.dataset.copy);
    if (!text) return;
    var label = btn.textContent;
    function selectText() {
      var range = document.createRange();
      range.selectNodeContents(text);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      btn.textContent = 'Press Cmd+C';
    }
    btn.addEventListener('click', function () {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text.innerText).then(function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = label; }, 1800);
        }, selectText);
      } else {
        selectText();
      }
    });
  });
})();

// Tabs: used for the sample roles and the AI tool choice.
// Click or use the left and right arrow keys; only the chosen panel is shown.
(function () {
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      // Tool choice: show only the steps and prompts that match the chosen tool.
      if (tab.dataset.tool) {
        document.querySelectorAll('[data-show]').forEach(function (el) {
          el.hidden = el.dataset.show.split(' ').indexOf(tab.dataset.tool) === -1;
        });
      }
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });
})();

// Mobile menu: open and close the hamburger menu; close it after choosing a link or pressing Escape.
(function () {
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  function setOpen(open) {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () { setOpen(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) { setOpen(false); btn.focus(); }
  });
})();