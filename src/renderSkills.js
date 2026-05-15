export function renderSkills() {
  const programming = [
    { name: "C", imgType: "image", imgAddress: "assets/logos/c.png" },
    {
      name: "C++",
      imgType: "image",
      imgAddress: "assets/logos/c-plus-plus.png",
    },
    { name: "Java", imgType: "image", imgAddress: "assets/logos/java.png" },
    {
      name: "Python",
      imgType: "image",
      imgAddress: "assets/logos/python.png",
    },
    {
      name: "Assembly",
      imgType: "image",
      imgAddress: "assets/logos/assembly.png",
    },
  ];

  const webDev = [
    { name: "HTML", imgType: "image", imgAddress: "assets/logos/html.png" },
    { name: "CSS", imgType: "image", imgAddress: "assets/logos/css.png" },
    {
      name: "JavaScript",
      imgType: "image",
      imgAddress: "assets/logos/javascript.png",
    },
    { name: "XML", imgType: "image", imgAddress: "assets/logos/xml.png" },
    {
      name: "Tailwind CSS",
      imgType: "image",
      imgAddress: "assets/logos/tailwind.png",
    },
  ];

  const tools = [
    {
      name: "Figma",
      imgType: "image",
      imgAddress: "assets/logos/figma.png",
    },
    { name: "Git", imgType: "image", imgAddress: "assets/logos/git.png" },
    {
      name: "Android Studio",
      imgType: "image",
      imgAddress: "assets/logos/android-studio.png",
    },
    {
      name: "VS Code",
      imgType: "image",
      imgAddress: "assets/logos/vscode.png",
    },
    { name: "GitHub", imgType: "icon", iconClass: "fa-brands fa-github" },
    {
      name: "Vercel",
      imgType: "icon",
      iconClass: " fa-solid fa-caret-up",
    },
  ];

  render(programming, "programmingSkills");
  render(webDev, "webDevSkills");
  render(tools, "devToolSkills");

  function render(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    data.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill");

      let iconHTML = "";

      if (skill.imgType === "image") {
        iconHTML = `<img src="${skill.imgAddress}" alt="${skill.name} logo">`;
      } else {
        iconHTML = `<i class="${skill.iconClass}"></i>`;
      }

      skillDiv.innerHTML = `
        <div class="skill-icon">
          ${iconHTML}
        </div>
        <div class="skill-name">${skill.name}</div>
      `;

      container.appendChild(skillDiv);
    });
  }
}
