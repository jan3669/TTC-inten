const videoCard = document.getElementById('videoCard');
const video = document.getElementById('myVideo');
const hint = document.querySelector('.play-hint');

videoCard.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        hint.innerHTML = "Sound On 🔊";
        // ஆடியோவுடன் வீடியோவை முதலில் இருந்து பிளே செய்ய விரும்பினால்:
        // video.currentTime = 0; 
    } else {
        video.muted = true;
        hint.innerHTML = "Click to enable sound 🔇";
    }
});