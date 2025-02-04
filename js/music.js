
function toggleMusic() {
    let music = document.getElementById('music');
    musicPlaying = !musicPlaying;
    musicPlaying ? music.play() : music.pause();
}

function toggleVoice() {
    voiceEnabled = !voiceEnabled;
}

function playVoice(src) {
    let voice = document.getElementById('voice');
    voice.src = src;
    voice.play();
}