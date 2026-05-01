export function toggleTheme() {
  const themeButton = document.getElementById("themeButton");
  const darkButton = document.getElementById("darkButton");
  const lightButton = document.getElementById("lightButton");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    lightTheme();
  } else {
    darkTheme();
  }

  themeButton.addEventListener("click", () => {
    if (!isLight) {
      lightTheme();
    } else {
      darkTheme();
    }
  });
}
let isLight = false;

function lightTheme() {
  document.documentElement.classList.add("light");
  localStorage.setItem("theme", "light");
  isLight = true;
  lightButton.style.animation = "hide1 0.5s ease";
  lightButton.style.display = "none";
  darkButton.style.animation = "rotate 1 0.5s ease";
  darkButton.style.display = "flex";
}

function darkTheme() {
  document.documentElement.classList.remove("light");
  localStorage.setItem("theme", "dark");
  isLight = false;
  darkButton.style.animation = "hide 1 0.5s ease";
  darkButton.style.display = "none";
  lightButton.style.animation = "rotate 1 0.5s ease";
  lightButton.style.display = "flex";
}
