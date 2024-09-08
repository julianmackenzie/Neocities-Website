
document.addEventListener('DOMContentLoaded', () => {
      
    
    function loadHTML(file, elementId) {
      fetch(file)
        .then(response => response.text())
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        });
    }
  

    loadHTML('./components/navigation.html', 'navigation');
    loadHTML('./components/sidebar-left.html', 'sidebar-left');
    loadHTML('./components/sidebar-right.html', 'sidebar-right');
    
  });