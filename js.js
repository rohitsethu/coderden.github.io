// Interactivity for the banner: change background image on hover
const banner = document.querySelector('.banner');

// When mouse hovers over the banner, change the background image
banner.addEventListener('mouseover', () => {
    banner.style.backgroundImage = 'url(https://bondartech.com/wp-content/uploads/modernTechnology_620977929_400-1.jpg)';
});

// When the mouse leaves the banner, change it back to the original image
banner.addEventListener('mouseout', () => {
    banner.style.backgroundImage = 'url(https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg)';
});
