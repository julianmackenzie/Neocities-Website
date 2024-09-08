


document.addEventListener('DOMContentLoaded', function() {

    const heartTankButton = document.getElementById('heart-tank-button');
    const audioPlayer = document.getElementById('audio-player');

    heartTankButton.addEventListener('click', function() {
        audioPlayer.play();
    });


});