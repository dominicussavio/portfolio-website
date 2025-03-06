// Immediately executing function to avoid global scope pollution
(function() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializePopup);
    } else {
        initializePopup();
    }

    function initializePopup() {
        // Debug log
        console.log('Initializing popup...');
        
        const popup = document.getElementById('popup-banner');
        const closeButton = document.getElementById('close-popup');
        
        // Verify elements exist
        if (!popup || !closeButton) {
            console.error('Required popup elements not found:', {
                popup: !!popup,
                closeButton: !!closeButton
            });
            return;
        }

        // Force display block after delay
        setTimeout(() => {
            popup.style.cssText = `
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
            `;
            console.log('Popup should now be visible');
        }, 2000);

        // Event listeners
        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            popup.style.display = 'none';
            console.log('Popup closed via button');
        });

        window.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.style.display = 'none';
                console.log('Popup closed via outside click');
            }
        });
    }
})();

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