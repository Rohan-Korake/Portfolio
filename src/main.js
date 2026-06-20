import { handleNavigation } from "./navigation.js";
import { renderContact } from "./renderContact.js";
import { renderProject } from "./renderProject.js";
import { renderSkills } from "./renderSkills.js";
import { toggleTheme } from "./theme.js";
import { initTypeWritter } from "./typeWritter.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");
  await handleLoadingScreen();
  await app.classList.add("show");
  handleNavigation();
  toggleTheme();
  initTypeWritter();
  renderSkills();
  renderProject();
  renderContact();
});

async function handleLoadingScreen() {
  const loader = document.getElementById("loader");
  loader.style.display = "flex";
  await sleep(2500);
  loader.style.display = "none";
}

// Sleep helper
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
