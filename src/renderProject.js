export function renderProject() {
  const projectList = [
    {
      previewImage: "assets/projects/smartExam.webp",
      name: "SmartExam",
      url: "https://smartexam.vercel.app/",
      desc: "A simple web platform built with HTML and CSS, providing organized practice papers for diploma students to support exam preparation.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
      ],
    },
    {
      previewImage: "assets/projects/compKit.webp",
      name: "CompKit",
      url: "https://compkit.vercel.app/",
      desc: "A lightweight UI component kit built with HTML, CSS, and minimal JavaScript featuring reusable elements like buttons, cards, loaders, and badges.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/gridStrike.webp",
      name: "GridStrike",
      url: "https://gridStrike.vercel.app/",
      desc: "A simple Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring two-player mode and a smart bot for single-player gameplay.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/flipMate.webp",
      name: "FlipMate",
      url: "https://flipmate.vercel.app/",
      desc: "A fun memory-based card matching game where players flip cards to find pairs, designed for an engaging and interactive browser experience.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/taskFlow.webp",
      name: "TaskFlow",
      url: "https://taskFlow-list.vercel.app/",
      desc: "A simple task management web app built with AngularJS, helping users organize, track, and manage daily tasks efficiently.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "AngularJS", logo: "assets/logos/angularjs.webp" },
      ],
    },
    {
      previewImage: "assets/projects/dsaPlayground.webp",
      name: "DSA Playground",
      url: "https://dsaplayground.vercel.app",
      desc: "A visual learning platform for Data Structures and Algorithms, offering step-by-step animations and execution logs to enhance understanding.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/lampLogin.webp",
      name: "Lamp Login Auth",
      url: "https://github.com/Rohan-Korake/Lamp-Login-Authentication",
      desc: "An interactive authentication UI with animations, featuring login, signup, and password reset, connected to a backend for secure management.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/vertixa.webp",
      name: "Vertixa",
      url: "https://drive.google.com/drive/folders/1lq9vbK_078DHZTuRE_KsqgijHmKOF7cc?usp=drive_link",
      desc: "A multifunctional Android app featuring tools like a calculator, unit converter, BMI calculator, age calculator, timer, and random number generator.",
      techStack: [
        { techName: "Java", logo: "assets/logos/java.webp" },
        { techName: "XML", logo: "assets/logos/xml.webp" },
      ],
    },
    {
      previewImage: "assets/projects/gitlens.webp",
      name: "GitLens",
      url: "https://gitlens-profile.vercel.app/",
      desc: "A modern web project focused on API handling, data fetching, dynamic content updates, and interactive UI rendering using JavaScript.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "CSS", logo: "assets/logos/css.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/skyCast.webp",
      name: "SkyCast",
      url: "https://skycastnow.vercel.app/",
      desc: "Real-time weather app with API integration, dynamic updates, and responsive UI built using Tailwind CSS and JavaScript.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "Tailwind CSS", logo: "assets/logos/tailwind.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/backendFoundation.webp",
      name: "Backend Foundation",
      url: "https://github.com/Rohan-Korake/backend-foundation",
      desc: "Backend learning repository for practicing server-side concepts like APIs, authentication, and database integration.",
      techStack: [
        { techName: "MongoDB", logo: "assets/logos/mongo.webp" },
        { techName: "Expressjs", logo: "assets/logos/expressjs.webp" },
        { techName: "Nodejs", logo: "assets/logos/nodejs.webp" },
      ],
    },
    {
      previewImage: "assets/projects/designHub.webp",
      name: "DesignHub",
      url: "https://designhub-ui.vercel.app/",
      desc: "UI/UX inspiration platform built to showcase and explore modern interface designs, interactive components, and user-centric layouts.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "Tailwind CSS", logo: "assets/logos/tailwind.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/markify.webp",
      name: "Markify",
      url: "https://trymarkify.vercel.app/",
      desc: "Smart marks distribution calculator that generates realistic experiment marks to achieve a target average.",
      techStack: [
        { techName: "HTML", logo: "assets/logos/html.webp" },
        { techName: "Tailwind CSS", logo: "assets/logos/tailwind.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
      ],
    },
    {
      previewImage: "assets/projects/gradientKit.webp",
      name: "Gradient kit",
      url: "https://gradient-kit.vercel.app/",
      desc: "Modern gradient generator for creating, customizing, and exporting beautiful gradient color combinations.",
      techStack: [
        { techName: "React", logo: "assets/logos/react.webp" },
        { techName: "Tailwind CSS", logo: "assets/logos/tailwind.webp" },
        { techName: "JavaScript", logo: "assets/logos/javascript.webp" },
        { techName: "Vite", logo: "assets/logos/vite.webp" },
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
