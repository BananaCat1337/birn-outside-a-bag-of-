
document.getElementById('music-toggle').addEventListener('change', function() {
    let music = document.getElementById('music');
    if (this.checked) {
      music.play();
    } else {
      music.pause();
      music.currentTime = 0;
    }
  });

function toggleVoice() {
    voiceEnabled = !voiceEnabled;
}

function playVoice(src) {
    let voice = document.getElementById('voice');
    voice.src = src;
    voice.play();
}