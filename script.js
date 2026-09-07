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
  if (form) {
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
  }

  var todoForm = document.getElementById("todo-form");
  if (!todoForm) return;

  var storageKey = "portfolio-tasks";
  var todoInput = document.getElementById("todo-input");
  var todoList = document.getElementById("todo-list");
  var emptyState = document.getElementById("todo-empty");
  var taskCount = document.getElementById("todo-count");
  var todoMessage = document.getElementById("todo-message");
  var activeFilter = "all";
  var tasks = loadTasks();

  function loadTasks() {
    try {
      var saved = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(saved) ? saved.filter(function (task) {
        return task && typeof task.id === "string" && typeof task.title === "string" && typeof task.completed === "boolean";
      }) : [];
    } catch (e) { return []; }
  }

  function saveTasks() {
    try { localStorage.setItem(storageKey, JSON.stringify(tasks)); }
    catch (e) { todoMessage.textContent = "Your browser could not save this task list."; }
  }

  function visibleTasks() {
    return tasks.filter(function (task) {
      return activeFilter === "all" || (activeFilter === "completed" ? task.completed : !task.completed);
    });
  }

  function renderTasks() {
    var visible = visibleTasks();
    todoList.textContent = "";
    visible.forEach(function (task) {
      var item = document.createElement("li");
      item.className = "task-item" + (task.completed ? " is-completed" : "");
      item.dataset.id = task.id;

      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.setAttribute("aria-label", "Mark " + task.title + " as " + (task.completed ? "active" : "complete"));

      var title = document.createElement("span");
      title.className = "task-title";
      title.textContent = task.title;

      var actions = document.createElement("div");
      actions.className = "task-actions";
      var edit = document.createElement("button");
      edit.type = "button"; edit.className = "task-action edit-task"; edit.textContent = "Edit";
      edit.setAttribute("aria-label", "Edit " + task.title);
      var remove = document.createElement("button");
      remove.type = "button"; remove.className = "task-action delete-task"; remove.textContent = "Delete";
      remove.setAttribute("aria-label", "Delete " + task.title);
      actions.append(edit, remove);
      item.append(checkbox, title, actions);
      todoList.appendChild(item);
    });
    var remaining = tasks.filter(function (task) { return !task.completed; }).length;
    taskCount.textContent = remaining + " " + (remaining === 1 ? "task" : "tasks") + " remaining";
    emptyState.hidden = visible.length !== 0;
  }

  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var title = todoInput.value.trim();
    if (!title) { todoMessage.textContent = "Enter a task before adding it."; todoInput.focus(); return; }
    tasks.unshift({ id: String(Date.now()) + Math.random().toString(16).slice(2), title: title, completed: false });
    saveTasks(); renderTasks(); todoForm.reset(); todoMessage.textContent = "Task added."; todoInput.focus();
  });

  todoList.addEventListener("change", function (event) {
    if (event.target.type !== "checkbox") return;
    var task = tasks.find(function (item) { return item.id === event.target.closest(".task-item").dataset.id; });
    if (!task) return;
    task.completed = event.target.checked; saveTasks(); renderTasks();
    todoMessage.textContent = task.completed ? "Task completed." : "Task marked active.";
  });

  todoList.addEventListener("click", function (event) {
    var button = event.target.closest("button");
    if (!button) return;
    var item = button.closest(".task-item");
    var index = tasks.findIndex(function (task) { return task.id === item.dataset.id; });
    if (index < 0) return;
    if (button.classList.contains("delete-task")) {
      tasks.splice(index, 1); saveTasks(); renderTasks(); todoMessage.textContent = "Task deleted.";
    }
    if (button.classList.contains("edit-task")) {
      var updated = window.prompt("Edit task", tasks[index].title);
      if (updated === null) return;
      updated = updated.trim();
      if (!updated) { todoMessage.textContent = "A task cannot be empty."; return; }
      tasks[index].title = updated; saveTasks(); renderTasks(); todoMessage.textContent = "Task updated.";
    }
  });

  document.querySelector(".filters").addEventListener("click", function (event) {
    var button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-button").forEach(function (filter) {
      var selected = filter === button;
      filter.classList.toggle("is-active", selected);
      filter.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    renderTasks();
  });

  renderTasks();
})();
