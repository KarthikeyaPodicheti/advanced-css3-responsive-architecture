(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

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
    if (!input || !err) return;
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
    var topic = document.getElementById("topic").value;
    var message = document.getElementById("message").value.trim();
    var consent = document.getElementById("consent").checked;
    var valid = true;

    if (name.length < 2) { setError("name", "Please enter your full name (at least 2 characters)."); valid = false; }
    else setError("name", "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("email", "Please enter a valid email address, e.g. name@example.com."); valid = false; }
    else setError("email", "");

    if (!topic) { setError("topic", "Please choose a topic."); valid = false; }
    else setError("topic", "");

    if (message.length < 10) { setError("message", "Please write a message of at least 10 characters."); valid = false; }
    else setError("message", "");

    var consentErr = document.getElementById("consent-error");
    if (!consent) { consentErr.textContent = "Please tick the consent box so I can reply to you."; consentErr.hidden = false; valid = false; }
    else { consentErr.textContent = ""; consentErr.hidden = true; }

    if (!valid) {
      status.textContent = "Please fix the highlighted errors and try again.";
      status.className = "form-status error";
      var firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    status.textContent = "Thanks " + name.split(" ")[0] + "! Your message is ready — your email app should open to send it.";
    status.className = "form-status success";
    status.focus && status.focus();
    form.submit();
  });
})();
