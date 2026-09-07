(function () {
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function paintToggle(btn, theme) {
    var dark = theme === "dark";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    btn.textContent = dark ? "Light" : "Dark";
  }
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    paintToggle(themeBtn, currentTheme());
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      if (next === "dark") document.documentElement.setAttribute("data-theme", "dark");
      else document.documentElement.removeAttribute("data-theme");
      try { localStorage.setItem("theme", next); } catch (e) {}
      paintToggle(themeBtn, next);
    });
  }

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

  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = document.getElementById("form-status");

  function setError(id, message) {
    var input = document.getElementById(id);
    var err = document.getElementById(id + "-error");
    if (message) {
      err.textContent = message;
      err.hidden = false;
      input.setAttribute("aria-invalid", "true");
    } else {
      err.textContent = "";
      err.hidden = true;
      input.removeAttribute("aria-invalid");
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var valid = true;

    if (name.length < 2) { setError("name", "Please enter your full name (at least 2 characters)."); valid = false; }
    else setError("name", "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("email", "Please enter a valid email address, e.g. name@example.com."); valid = false; }
    else setError("email", "");

    if (message.length < 10) { setError("message", "Please write a message of at least 10 characters."); valid = false; }
    else setError("message", "");

    if (!valid) {
      status.textContent = "Please fix the highlighted errors and try again.";
      form.querySelector('[aria-invalid="true"]').focus();
      return;
    }
    status.textContent = "Thanks " + name.split(" ")[0] + "! Your message is ready - your email app should open to send it.";
    form.submit();
  });
})();
