
document.addEventListener('DOMContentLoaded', () => {

    async function loadFullChangelog() {
        try {
            const changelogresponse = await fetch('changelog.md');
            const changelogtext = await changelogresponse.text();
            const changeloghtml = marked.parse(changelogtext);

            if (document.getElementById('full-changelog')) {
                document.getElementById('full-changelog').innerHTML += changeloghtml;
            }
        } catch (changelogerror) {
            console.error('Changelog killed itself:', changelogerror);
        }
    }

    async function loadMiniChangelog() {
        try {
            const changelogresponse = await fetch('changelog.md');
            const changelogtext = await changelogresponse.text();
            const changeloghtml = marked.parse(changelogtext);

            if (document.getElementById('minichangelog')) {
                document.getElementById('minichangelog').innerHTML += changeloghtml;
            }
        } catch (changelogerror) {
            console.error('Changelog killed itself:', changelogerror);
        }
    }



    
    function waitForElement(selector, callback, interval = 100, timeout = 5000) {
        const startTime = Date.now();
      
        const timer = setInterval(() => {
            const element = document.querySelector(selector);
      
            if (element) {
                clearInterval(timer);
                callback(element);
            } else if (Date.now() - startTime > timeout) {
                clearInterval(timer);
                console.error('Changelog not found within the timeout period');
            }
        }, interval);
    }



    // For each changelog, wait until their element loads to populate
    waitForElement('#minichangelog', (element) => {
        // Mini changelog has loaded and can be used
        const minichangelog = document.getElementById('minichangelog');

        loadMiniChangelog();

    });

    waitForElement('#full-changelog', (element) => {
        // Full changelog has loaded and can be used
        const fullchangelog = document.getElementById('full-changelog');

        loadFullChangelog();

    });


});