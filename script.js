(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("primary-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
})();
