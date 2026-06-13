// Progressive enhancement: fade sections in as they enter the viewport.
// Uses geometry rather than IntersectionObserver so it also renders correctly
// in headless/static captures. Content is fully visible without JS (the CSS
// .reveal rule is overridden the moment .is-in is added, and this runs on load).
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!els.length) return;

  function check() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    els = els.filter(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.classList.add("is-in");
        return false; // done with this one
      }
      return true;
    });
  }

  check();
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  window.addEventListener("load", check);
  // Failsafe: never leave anything hidden.
  setTimeout(function () {
    els.forEach(function (el) { el.classList.add("is-in"); });
  }, 1800);
})();
