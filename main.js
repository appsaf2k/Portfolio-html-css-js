// * Add dark theme

const btnDarkMode = document.getElementById("dark-mode-button");

// * 1. ПРОВЕРКА ТЕМЫ НА УРОВНЕ СИСТЕМЫ
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode__on");
  document.body.classList.add("dark");
}

// * 2. ПРОВЕРКА ТЕМНОЙ ТЕМЫ В localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode__on");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode__on");
  document.body.classList.remove("dark");
}

// * ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ ЦВЕТОВОЙ ТЕМЫ В СИСТЕМЕ
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  const nweColorScheme = event.matches ? "dark" : "light";

  if (nweColorScheme === "dark") {
    btnDarkMode.classList.add("dark-mode__on");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    btnDarkMode.classList.remove("dark-mode__on");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
});

// * СОХРАНЕНИЕ ТЕМЫ В localStorage
function btnDarkModeClickHandler() {
  btnDarkMode.classList.toggle("dark-mode__on");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
}

btnDarkMode.addEventListener("click", btnDarkModeClickHandler);
