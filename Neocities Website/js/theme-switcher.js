
document.addEventListener('DOMContentLoaded', function() {
    
    

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



    /*
        NOTE:

        The theme switcher select exists inside of sidebar-left.html, which is
        added to pages dynamically as a template. This script, however, has to
        run in the page that is LOADING this other html file. So, we have to
        wait until the other file is loaded before trying to find the theme
        switcher, or it will be null and the script will not work.

    */
    function waitForElement(selector, callback, interval = 100, timeout = 5000) {
        const startTime = Date.now();
      
        const timer = setInterval(() => {
            const element = document.querySelector(selector);
      
            if (element) {
                clearInterval(timer);
                callback(element);
            } else if (Date.now() - startTime > timeout) {
                clearInterval(timer);
                console.error('Theme switcher not found within the timeout period');
            }
        }, interval);
    }

    waitForElement('#theme-switcher', (element) => {
        // Theme switcher has loaded and can be used
        const themeswitcher = document.getElementById('theme-switcher');

        themeswitcher.addEventListener('change', function() {
            const selectedValue = themeswitcher.value;
            updateStyles(selectedValue);
        });
    
        updateStyles(themeswitcher.value);
    });






});