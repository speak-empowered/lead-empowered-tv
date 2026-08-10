
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (button && links) {
    button.addEventListener("click", () => links.classList.toggle("open"));
  }
});
