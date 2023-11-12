function toggleTheme() {
    body = document.querySelector('body');
    body.classList.toggle("dark-mode");
  }

darkbutton = document.getElementById("toggleButton");
darkbutton.onclick = toggleTheme;