// Wait for the page to fully load before applying the background image
window.addEventListener('load', () => {
    const banner = document.querySelector('.banner');
    banner.style.backgroundImage = 'url(https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg)';
});

// Interactivity for the banner: change background image on hover
const banner = document.querySelector('.banner');

banner.addEventListener('mouseover', () => {
    banner.style.backgroundImage = 'url(https://bondartech.com/wp-content/uploads/modernTechnology_620977929_400-1.jpg)';
});

banner.addEventListener('mouseout', () => {
    banner.style.backgroundImage = 'url(https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg)';
});

