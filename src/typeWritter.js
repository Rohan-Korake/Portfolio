export function initTypeWritter() {
  const textline = "Rohan Korake";

  const typeWritterContainer = document.getElementById("typeWritterText");

  let indx = 0;

  run();

  function run() {
    setTimeout(() => {
      if (indx < textline.length) {
        updateText();
        indx++;
        run();
      }
    }, 100);
  }

  function updateText() {
    const currentText = textline.substring(0, indx + 1);

    const parts = currentText.split(" ");

    if (parts.length > 1) {
      typeWritterContainer.innerHTML =
        parts[0] + " <span>" + parts[1] + "</span>";
    } else {
      typeWritterContainer.innerHTML = parts[0];
    }
  }
}
