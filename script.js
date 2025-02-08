// Navbar Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// WhatsApp Redirect
const buyButtons = document.querySelectorAll('.buy-button');

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const watchName = button.getAttribute('data-name');
    const message = `Hello, I am interested in buying the ${watchName}.`;
    const whatsappURL = `https://wa.me/2348168032686?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });
});
