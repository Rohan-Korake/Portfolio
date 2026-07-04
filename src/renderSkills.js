export function renderSkills() {
  const programming = [
    { name: "C", imgType: "image", imgAddress: "assets/logos/c.webp" },
    {
      name: "C++",
      imgType: "image",
      imgAddress: "assets/logos/c-plus-plus.webp",
    },
    { name: "Java", imgType: "image", imgAddress: "assets/logos/java.webp" },
    {
      name: "Python",
      imgType: "image",
      imgAddress: "assets/logos/python.webp",
    },
    {
      name: "Assembly",
      imgType: "image",
      imgAddress: "assets/logos/assembly.webp",
    },
  ];

  const webDev = [
    { name: "HTML", imgType: "image", imgAddress: "assets/logos/html.webp" },
    { name: "CSS", imgType: "image", imgAddress: "assets/logos/css.webp" },
    {
      name: "JavaScript",
      imgType: "image",
      imgAddress: "assets/logos/javascript.webp",
    },
    { name: "XML", imgType: "image", imgAddress: "assets/logos/xml.webp" },
    {
      name: "Tailwind CSS",
      imgType: "image",
      imgAddress: "assets/logos/tailwind.webp",
    },
    {
      name: "AngularJS",
      imgType: "image",
      imgAddress: "assets/logos/angularjs.webp",
    },
    {
      name: "React",
      imgType: "image",
      imgAddress: "assets/logos/react.webp",
    },
  ];

  const tools = [
    {
      name: "Figma",
      imgType: "image",
      imgAddress: "assets/logos/figma.webp",
    },
    { name: "Git", imgType: "image", imgAddress: "assets/logos/git.webp" },
    {
      name: "Android Studio",
      imgType: "image",
      imgAddress: "assets/logos/android-studio.webp",
    },
    {
      name: "VS Code",
      imgType: "image",
      imgAddress: "assets/logos/vscode.webp",
    },
    { name: "GitHub", imgType: "icon", iconClass: "fa-brands fa-github" },
    {
      name: "Vercel",
      imgType: "icon",
      iconClass: " fa-solid fa-caret-up",
    },
    {
      name: "Requestly",
      imgType: "image",
      imgAddress: "assets/logos/requestly.webp",
    },
    {
      name: "Vite",
      imgType: "image",
      imgAddress: "assets/logos/vite.webp",
    },
  ];

  const backend = [
    {
      name: "MongoDB",
      imgType: "image",
      imgAddress: "assets/logos/mongo.webp",
    },
    {
      name: "Express.js",
      imgType: "image",
      imgAddress: "assets/logos/expressjs.webp",
    },
    {
      name: "Node.js",
      imgType: "image",
      imgAddress: "assets/logos/nodejs.webp",
    },
  ];

  render(programming, "programmingSkills");
  render(webDev, "webDevSkills");
  render(tools, "devToolSkills");
  render(backend, "backendDevSkills");

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
