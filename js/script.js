const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");
hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

 function darkMode() {
   let body = document.getElementById("main");
   let rtbyc = document.getElementById("RTBYC");
   let color =document.getElementById("mainP");
   body.classList.toggle("main");
   rtbyc.classList.toggle("RTBYC");
   color.classList.toggle("mainP");
}

