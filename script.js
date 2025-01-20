// const savedTheme = localStorage.getItem("theme") || "light"; // Default ke "light"
// // Nav
// const header = document.getElementById("header");
// const main = document.querySelector("main");

// main.addEventListener("scroll", () => {
//   if (main.scrollTop > 0) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// List active

function handleHashChange() {
  const hash = location.hash;
  console.log(hash);
  if (hash === "#browse") {
    document.querySelector("#browse1").classList.add("clicked");
    document.querySelector("#popular1").classList.remove("clicked");
    document.querySelector("#trending1").classList.remove("clicked");
  }
  if (hash === "#popular") {
    document.querySelector("#popular1").classList.add("clicked");
    document.querySelector("#browse1").classList.remove("clicked");
    document.querySelector("#trending1").classList.remove("clicked");
  }
  if (hash === "#trending") {
    document.querySelector("#trending1").classList.add("clicked");
    document.querySelector("#browse1").classList.remove("clicked");
    document.querySelector("#popular1").classList.remove("clicked");
  }
}

window.addEventListener("hashchange", handleHashChange);

handleHashChange();

// img slider
let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slider-image");
  const totalSlides = slides.length;

  currentSlide = (currentSlide + step + totalSlides) % totalSlides;

  const sliderImages = document.querySelector(".slider-images");
  sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 3000);

let currentTheme = localStorage.getItem("theme") || "light"; // Default ke "light"

const header = document.getElementById("header");
const main = document.querySelector("main");
const lightModeSwitch = document.querySelector(".theme-switch__checkbox");
const nav = document.querySelector("nav");
const anchor = document.querySelectorAll("a");
const header1 = document.querySelectorAll("h1");
const input = document.querySelector(".search-input");
const overview = document.querySelector(".overview");
const browseLight = document.querySelector(".browse-light");
const browseDark = document.querySelector(".browse-dark");
const popularLight = document.querySelector(".popular-light");
const popularDark = document.querySelector(".popular-dark");
const trendingLight = document.querySelector(".trending-light");
const trendingDark = document.querySelector(".trending-dark");
const searchIconDark = document.querySelector(".search-icon-dark");
const searchIconLight = document.querySelector(".search-icon");

function updateHeaderScroll(theme) {
  if (main.scrollTop > 0) {
    if (theme === "light") {
      header.classList.remove("scrolled-dark");
      header.classList.add("scrolled-light");
    } else {
      header.classList.remove("scrolled-light");
      header.classList.add("scrolled-dark");
    }
  } else {
    header.classList.remove("scrolled-light", "scrolled-dark");
  }
}

function applyTheme(theme) {
  if (theme === "light") {
    searchIconDark.hidden = false;
    searchIconLight.hidden = true;
    browseLight.hidden = true;
    browseDark.hidden = false;
    popularLight.hidden = true;
    popularDark.hidden = false;
    trendingLight.hidden = true;
    trendingDark.hidden = false;
    main.classList.add("light-mode");
    anchor.forEach((a) => a.classList.add("light-mode"));
    header1.forEach((h) => h.classList.add("light-mode"));
    nav.classList.add("light-mode");
    input.classList.add("light-mode");
    overview.classList.add("dark-mode");
    lightModeSwitch.checked = false; // Sesuaikan dengan tema
  } else {
    searchIconDark.hidden = true;
    searchIconLight.hidden = false;
    browseLight.hidden = false;
    browseDark.hidden = true;
    popularLight.hidden = false;
    popularDark.hidden = true;
    trendingLight.hidden = false;
    trendingDark.hidden = true;
    main.classList.remove("light-mode");
    nav.classList.remove("light-mode");
    anchor.forEach((a) => a.classList.remove("light-mode"));
    header1.forEach((h) => h.classList.remove("light-mode"));
    input.classList.remove("light-mode");
    overview.classList.remove("dark-mode");
    lightModeSwitch.checked = true; // Sesuaikan dengan tema
  }
  updateHeaderScroll(theme);
}

applyTheme(currentTheme);

lightModeSwitch.addEventListener("change", () => {
  currentTheme = lightModeSwitch.checked ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});

main.addEventListener("scroll", () => {
  updateHeaderScroll(currentTheme);
});
