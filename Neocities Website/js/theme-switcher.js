
document.addEventListener('DOMContentLoaded', function() {
    const themeswitcher = document.getElementById('theme-switcher');
    

    // Check if at index.html, to know if ./ or ../ is needed in image URLs
    const atIndex = (function() {
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 1) {
            return true;
        } else {
            return false;
        }
    })();



    function updateStyles(styleClass) {

        const elements = document.querySelectorAll('.theme-background'); // for every themed element

        elements.forEach(el =>{
            // clear all possible themes (add to this list if more themes are added)
            el.classList.remove('chrono-theme-1', 'chrono-theme-2', 'chrono-theme-3', 'chrono-theme-4', 'chrono-theme-5', 'chrono-theme-6', 'chrono-theme-7', 'chrono-theme-8', 'cave-theme-1');
            el.classList.add(styleClass);

            // use ./ when at index.html
            if (atIndex) {
                el.style.backgroundImage = getComputedStyle(el).getPropertyValue('--index-theme-bg-img');
                el.style.border = getComputedStyle(el).getPropertyValue('--theme-border-settings');
                el.style.borderImage = getComputedStyle(el).getPropertyValue('--index-theme-border-img');
            } 
            // use ../ for any pages in /pages/
            else {
                el.style.backgroundImage = getComputedStyle(el).getPropertyValue('--inner-theme-bg-img');
                el.style.border = getComputedStyle(el).getPropertyValue('--theme-border-settings');
                el.style.borderImage = getComputedStyle(el).getPropertyValue('--inner-theme-border-img');
            }
            


        });
    }

    themeswitcher.addEventListener('change', function() {
        const selectedValue = themeswitcher.value;
        updateStyles(selectedValue);
    });

    updateStyles(themeswitcher.value);
});