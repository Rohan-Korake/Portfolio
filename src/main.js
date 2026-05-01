import { handleNavigation } from "./navigation.js";
import { toggleTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  handleNavigation();
  toggleTheme();
});
