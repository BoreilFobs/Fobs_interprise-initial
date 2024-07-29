const sideBar = document.querySelector(".side-bar");
const logo = document.querySelector(".logo");
const navBar = document.querySelector(".nav");
const services = document.querySelector(".fa-usps");
const menue = document.querySelector(" .nav .menu ul");
function showNav() {
  sideBar.classList.add("menue-shown");
  logo.style.marginLeft = "280px";
  menue.style.opacity = "0";
  menue.style.zIndex = "-2";
}
function removeNav() {
  sideBar.classList.remove("menue-shown");
  logo.style.marginLeft = "100px";
  menue.style.opacity = "1";
  menue.style.zIndex = "1";
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navBar.style.opacity = "0";
    sideBar.style.opacity = "0";
    navBar.style.zIndex = "-1";
    sideBar.style.zIndex = "-1";
  } else {
    navBar.style.opacity = "1";
    sideBar.style.opacity = "1";
    sideBar.style.zIndex = "2";
    navBar.style.zIndex = "1";
  }
});

sideBar.addEventListener("click", (e) => {
  console.log(e);
  if (e.target.id == "media") {
    open("social.html", "_self");
  } else if (e.target.id == "logo") {
    open("logo.html", "_self");
  } else if (e.target.id == "bot") {
    open("bot.html", "_self");
  } else if (e.target.id == "web") {
    open("web design.html", "_self");
  } else if (e.target.id == "home") {
    open("index.html", "_self");
  } else if (e.target.id == "label") {
    open("label design.html", "_self");
  }
});

services.addEventListener("click", () => {
  if (document.title == "home page") {
    scrollBy(0, 2000);
  } else {
    open("index.html");
  }
});

// ------------------------------scroll events-----------------------------------------
const section2 = document.querySelector(".section-two");
const section3 = document.querySelector(".section-three");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    section2.style.transform = "translateY(0)";
    section2.style.opacity = "1";
  } else if (window.scrollY < 200) {
    section2.style.opacity = "0";
    section2.style.transform = "translateY(200px)";
  }
});
