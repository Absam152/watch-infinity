// Get all buy buttons
const buyButtons = document.querySelectorAll('.buy-button');

// WhatsApp details
const whatsappNumber = '2348168032686'; // Replace with your WhatsApp number
const baseURL = `https://wa.me/${whatsappNumber}?text=`;

// Function to handle buy button clicks
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const watchName = button.getAttribute('data-name');
    const watchImage = button.getAttribute('data-image');

    // Create the pre-written message
    const message = `Hello, I am interested in buying the ${watchName}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Redirect to WhatsApp
    window.location.href = `${baseURL}${encodedMessage}`;
  });
});