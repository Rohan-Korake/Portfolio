import { handleNavigation } from "./navigation.js";
import { renderProject } from "./renderProject.js";
import { renderSkills } from "./renderSkills.js";
import { toggleTheme } from "./theme.js";
import { initTypeWritter } from "./typeWritter.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
  toggleTheme();
  initTypeWritter();
  renderSkills();
  renderProject();
});
