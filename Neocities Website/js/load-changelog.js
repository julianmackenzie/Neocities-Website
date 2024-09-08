
document.addEventListener('DOMContentLoaded', () => {

    async function loadChangelog() {
        try {
            const changelogresponse = await fetch('changelog.md');
            const changelogtext = await changelogresponse.text();
            const changeloghtml = marked.parse(changelogtext);
            // Append changelog to any existing HTML content in the specified container.
            document.getElementById('minichangelog').innerHTML += changeloghtml;
            if (document.getElementById('full-changelog')) {
                document.getElementById('full-changelog').innerHTML += changeloghtml;
            }
        } catch (changelogerror) {
            console.error('Changelog killed itself:', changelogerror);
        }
    }

    window.onload = loadChangelog;

});