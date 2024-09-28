// Wait for the page to fully load before applying the background image
window.addEventListener('load', () => {
    const banner = document.querySelector('.banner');
    // Use the Pexels image URL
    banner.style.backgroundImage = 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'; 
    banner.style.backgroundSize = 'cover'; // Ensure the image covers the banner
    banner.style.backgroundPosition = 'center'; // Center the image
});

    // Smooth scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

});
