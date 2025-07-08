document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", smoothScroll);
    });
  
    // function smoothScroll(e) {
    //   e.preventDefault();
      
    //   const targetId = this.getAttribute("href").substring(1);
    //   const targetElement = document.getElementById(targetId);
      
    //   window.scroll({
    //     top: targetElement.offsetTop - document.querySelector("nav").offsetHeight,
    //     behavior: "smooth"
    //   });
    // }
    function smoothScroll(e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        window.scroll({
          top: targetElement.offsetTop - document.querySelector("nav").offsetHeight,
          behavior: "smooth"
        });
      }
    }
  });

  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  