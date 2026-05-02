export function handleNavigation() {
  const hamBurger = document.getElementById("hamBurger");
  const blurPage = document.getElementById("blurPage");
  const navMenu = document.getElementById("navMenu");
  const overlay = document.querySelector(".overlay");
  // handle hamburger click
  hamBurger.addEventListener("click", () => {
    if (navMenu.style.display == "flex") {
      hideMenu();
    } else {
      showMenu();
    }
  });

  // handle empty click
  blurPage.addEventListener("click", () => {
    if (navMenu.style.display == "flex") {
      hideMenu();
    }
  });

  // handle navigation click only on mobile
  navMenu.addEventListener("click", (e) => {
    const isMobile = window.matchMedia("(max-width: 770px)").matches;

    if (!isMobile) {
      return;
    }

    if (e.target.id === "navMenu" || e.target.closest("a")) {
      hideMenu();
    }
  });
}

const navMenu = document.getElementById("navMenu");
const blurPage = document.getElementById("blurPage");

// hide the nav menu option
function hideMenu() {
  blurPage.style.animation = "hide 1 0.5s ease";
  blurPage.style.display = "none";
  navMenu.style.animation = "hide 1 0.5s ease";
  navMenu.style.display = "none";
}

// show the nav menu option
function showMenu() {
  blurPage.style.animation = "show 1 0.5s ease";
  blurPage.style.display = "flex";
  navMenu.style.animation = "show 1 0.5s ease";
  navMenu.style.display = "flex";
}
