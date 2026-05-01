export function handleNavigation() {
  const hamBurger = document.getElementById("hamBurger");

  const navMenu = document.getElementById("navMenu");
  hamBurger.addEventListener("click", () => {
    if (navMenu.style.display == "flex") {
      hideMenu();
    } else {
      showMenu();
    }
  });
}
const navMenu = document.getElementById("navMenu");

// hide the nav menu option
function hideMenu() {
  navMenu.style.animation = "hide 1 0.5s ease";
  navMenu.style.display = "none";
}

// show the nav menu option
function showMenu() {
  navMenu.style.animation = "show 1 0.5s ease";
  navMenu.style.display = "flex";
}
