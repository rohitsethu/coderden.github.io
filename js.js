// Interactivity for the banner: change background image on hover
const banner = document.querySelector('.banner');

// When mouse hovers over the banner, change the background image
banner.addEventListener('mouseover', () => {
    banner.style.backgroundImage = 'url(https://drive.google.com/file/d/1eBICPpEIRld3BB36MwE0NJ5oAxHgja5d/view?usp=drive_link)';
});

// When the mouse leaves the banner, change it back to the original image
banner.addEventListener('mouseout', () => {
    banner.style.backgroundImage = 'url(https://drive.google.com/file/d/1eBICPpEIRld3BB36MwE0NJ5oAxHgja5d/view?usp=drive_link)';
});
