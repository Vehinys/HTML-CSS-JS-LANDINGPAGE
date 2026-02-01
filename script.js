let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Sticky Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Menu burger
const button = document.querySelector(".burger");
const nav = document.querySelector(".navbar-links");
const navLinks = document.querySelectorAll(".navbar-link");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
  button.classList.toggle("toggle"); // For animation if needed
});

// Close menu when link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    button.classList.remove("toggle");
  });
});
