document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".service-item");
  const photo = document.getElementById("exp-photo");

  function activate(item) {
    // remove active from all
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // change image
    const newImg = item.dataset.image;
    if (newImg && photo) {
      photo.style.opacity = "0";  // fade out
      setTimeout(() => {
        photo.src = newImg;
        photo.alt = item.querySelector("span")?.textContent || "Service preview";
        photo.style.opacity = "1"; // fade in
      }, 200);
    }
  }

  items.forEach(item => {
    const btn = item.querySelector(".service-link");
    if (!btn) return;

    btn.addEventListener("click", () => activate(item));
    item.addEventListener("mouseenter", () => activate(item));
  });

  // default to first item
  if (items.length > 0) activate(items[0]);
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
