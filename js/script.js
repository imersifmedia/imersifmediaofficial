document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".navbar-menu");
  
    toggler.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  });
  
  // Get the current year and display it in the footer
  const currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
  