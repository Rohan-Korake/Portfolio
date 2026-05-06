export function renderContact() {
  const contactDetail = [
    {
      icon: "fa-solid fa-bolt",
      text: "Ready to gain real-world experience through internships.",
    },
    { icon: "fa-solid fa-envelope", text: "rohannkorake@gmail.com" },
    { icon: "fa-solid fa-phone", text: "+91 9834208689" },
    { icon: "fa-solid fa-location-dot", text: "Sangli, Maharashtra, India" },
  ];
  const contactDetails = document.getElementById("contactDetails");

  contactDetail.forEach((item) => {
    const contactItem = document.createElement("div");
    contactItem.classList.add("contact-item");

    contactItem.innerHTML = `
    <div class="header-icon"><i class="${item.icon}"></i></div>
    <div class="header-title">${item.text}</div>
    `;
    contactDetails.append(contactItem);
  });
}
