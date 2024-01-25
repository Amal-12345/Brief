const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

function darkMode() {
  var body = document.getElementById("main");
  body.classList.toggle(".main");
}
