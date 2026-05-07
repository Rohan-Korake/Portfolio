export function renderProject() {
  const projectList = [
    {
      previewImage: "assets/projects/smartExam.png",
      name: "SmartExam",
      url: "https://smartexam.vercel.app/",
      desc: "A simple web platform built with HTML and CSS, providing organized practice papers for diploma students to support exam preparation.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
      ],
    },
    {
      previewImage: "assets/projects/compKit.png",
      name: "CompKit",
      url: "https://smartexam.vercel.app/",
      desc: "A lightweight UI component kit built with HTML, CSS, and minimal JavaScript featuring reusable elements like buttons, cards, loaders, and badges.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "JavaScript", logo: "assets/logos/javascript.png" },
      ],
    },
    {
      previewImage: "assets/projects/gridStrike.png",
      name: "GridStrike",
      url: "https://gridStrike.vercel.app/",
      desc: "A simple Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring two-player mode and a smart bot for single-player gameplay.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "JavaScript", logo: "assets/logos/javascript.png" },
      ],
    },
    {
      previewImage: "assets/projects/flipMate.png",
      name: "FlipMate",
      url: "https://flipmate.vercel.app/",
      desc: "A fun memory-based card matching game where players flip cards to find pairs, designed for an engaging and interactive browser experience.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "JavaScript", logo: "assets/logos/javascript.png" },
      ],
    },
    {
      previewImage: "assets/projects/taskFlow.png",
      name: "TaskFlow",
      url: "https://taskFlow.vercel.app/",
      desc: "A simple task management web app built with AngularJS, helping users organize, track, and manage daily tasks efficiently.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "AngularJS", logo: "assets/logos/angularjs.png" },
      ],
    },
    {
      previewImage: "assets/projects/dsaPlayground.png",
      name: "DSA Playground",
      url: "https://dsaplayground.vercel.app",
      desc: "A visual learning platform for Data Structures and Algorithms, offering step-by-step animations and execution logs to enhance understanding.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "JavaScript", logo: "assets/logos/javascript.png" },
      ],
    },
    {
      previewImage: "assets/projects/lampLogin.png",
      name: "Lamp Login Auth",
      url: "https://lamplogin-auth.vercel.app/",
      desc: "An interactive authentication UI with animations, featuring login, signup, and password reset, connected to a backend for secure management.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.png" },
        { techName: "CSS", logo: "assets/logos/css.png" },
        { techName: "JavaScript", logo: "assets/logos/javascript.png" },
      ],
    },
    {
      previewImage: "assets/projects/vertixa.png",
      name: "Vertixa",
      url: "https://drive.google.com/drive/folders/1lq9vbK_078DHZTuRE_KsqgijHmKOF7cc?usp=drive_link",
      desc: "A multifunctional Android app featuring tools like a calculator, unit converter, BMI calculator, age calculator, timer, and random number generator.",
      techStack: [
        { techName: "Java", logo: "assets/logos/java.png" },
        { techName: "XML", logo: "assets/logos/xml.png" },
      ],
    },
  ];
  const projectContainer = document.getElementById("projectContainer");

  projectList.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const techHTML = project.techStack
      .map(
        (tech) => `
    <div class="tech-wrapper">
                <div class="tech-icon"><img src="${tech.logo}" alt="techLogo"></div>
                <div class="tech-name">${tech.techName}</div>
              </div>
    `,
      )
      .join("");
    projectCard.innerHTML = `
        <div class="preview-container"><img src="${project.previewImage}" alt="Preview"></div>
          <div class="project-info">
            <div class="project-header">
              <div class="project-name">${project.name}</div>
              <a href="${project.url}" target="_blank"><i
                  class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div class="project-desc">${project.desc}</div>

            <div class="project-tech-stack">${techHTML}</div>
          </div>`;

    projectContainer.append(projectCard);
  });
}
