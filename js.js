// Wait for the page to fully load before applying the background image
window.addEventListener('load', () => {
    const banner = document.querySelector('.banner');

    // Set the background image for the banner
    banner.style.backgroundImage = 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)';
    banner.style.backgroundSize = 'cover'; // Ensure the image covers the banner
    banner.style.backgroundPosition = 'center'; // Center the image

    // Add scroll down functionality
    const scrollButton = document.querySelector('.scroll-btn');
    scrollButton.addEventListener('click', () => {
        scrollToSection('main-content'); // Replace 'main-content' with your target section ID
    });
});

// Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) { // Check if the section exists
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section with ID "${sectionId}" not found.`);
    }
}
