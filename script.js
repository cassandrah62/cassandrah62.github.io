// Add active link highlighting for the navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    // Highlight active link based on scrolling position
    window.addEventListener('scroll', () => {
      let fromTop = window.scrollY;
  
      navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
  
        if (
          section.offsetTop <= fromTop &&
          section.offsetTop + section.offsetHeight > fromTop
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  });
  