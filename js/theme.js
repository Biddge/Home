(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}
/* =========================
   SAFE PLACEHOLDER (IMPORTANT)
========================= */
function liveSearch(value) {
  // prevent JS crash on mobile
  console.log("search:", value);
}

/* =========================
   MOBILE SIDE MENU
========================= */
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (!menu) return;

  menu.classList.toggle("show");
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  menu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("show");
  document.getElementById("menuOverlay").classList.remove("show");
}

/* prevent JS crash from search */
function liveSearch(value) {
  console.log(value);
}


