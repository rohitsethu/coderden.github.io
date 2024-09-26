// Interactivity for the banner (optional: change banner based on time or user action)
const banner = document.querySelector('.banner');

banner.addEventListener('mouseover', () => {
    banner.style.backgroundImage = 'url(https://your-hover-banner-url-here.jpg)';
});

banner.addEventListener('mouseout', () => {
    banner.style.backgroundImage = 'url(https://your-banner-url-here.jpg)';
});
