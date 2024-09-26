// Optional: Adding interactivity such as smooth scrolling
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section
        const targetSection = document.querySelector(targetId); // Select the target section
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    });
});
