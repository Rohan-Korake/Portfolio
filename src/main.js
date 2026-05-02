import { handleNavigation } from "./navigation.js";
import { toggleTheme } from "./theme.js";
import { initTypeWritter } from "./typeWritter.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
  toggleTheme();
  initTypeWritter();
});
