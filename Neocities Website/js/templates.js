
document.addEventListener('DOMContentLoaded', () => {
    
    // Check if at index.html, to know if ./ or ../ is needed in image URLs
    const atIndex = (function() {
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 1) {
            return true;
        } else {
            return false;
        }
    })();
    
    
    function loadHTML(file, elementId) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        });
    }
  
    if (atIndex) {
        loadHTML('./components/navigation.html', 'navigation');
        loadHTML('./components/sidebar-left.html', 'sidebar-left');
        loadHTML('./components/sidebar-right.html', 'sidebar-right');
    }
    else {
        loadHTML('../components/navigation.html', 'navigation');
        loadHTML('../components/sidebar-left.html', 'sidebar-left');
        loadHTML('../components/sidebar-right.html', 'sidebar-right');
    }
    
  });