function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(document).ready(function() {
  $("img").hide().fadeIn().delay(10000);
  $("button").hide().fadeIn().delay(5000);
 
})
