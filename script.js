document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const navbarHeight = document.querySelector(".header").offsetHeight; // Get the height of the navigation bar

    window.scrollTo({
      top: target.offsetTop - navbarHeight - 90, // Adjust the scroll position to account for the navigation bar height
      behavior: "smooth",
    });
  });
});

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  const slides = document.querySelectorAll(".project");

  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[slideIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.getElementById("nav-small");

  function toggleHeader() {
    nav.classList.toggle("show");
  }

  menuIcon.addEventListener("click", function () {
    toggleHeader();
  });

  const menuButtons = document.querySelectorAll("#nav-small a");
  menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      toggleHeader(); // Close the navigation menu
    });
  });
});
