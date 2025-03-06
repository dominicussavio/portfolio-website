document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup-banner');
    const closeButton = document.getElementById('close-popup');
    
    // Show popup after 2 seconds
    setTimeout(() => {
        popup.style.display = 'block';
    }, 2000);

    // Close popup when close button is clicked
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('Form submitted:', { name, email, message });
    
    // You can add your form submission logic here, such as sending the data to a server
    
    alert('Thank you for your message!');
    
    // Clear the form
    document.getElementById('contactForm').reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the button
let backToTopButton = document.getElementById("back-to-top");

// Always show the button
backToTopButton.style.display = "block";

// When the user clicks on the button, scroll to the top of the document with smooth behavior
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};