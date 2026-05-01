export function handleNavigation() {
  const hamBurger = document.getElementById("hamBurger");
  const blurPage = document.getElementById("blurPage");
  const navMenu = document.getElementById("navMenu");

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
    } else {
      showMenu();
    }
  });

  // handle navigation click
  navMenu.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "homeSection":
        break;

      case "aboutSection":
        break;

      case "skillsSection":
        break;

      case "projectSection":
        break;

      case "contactSection":
        break;

      default:
        hideMenu();
        break;
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
