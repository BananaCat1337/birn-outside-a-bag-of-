let scenes = [
    { text: "Добро пожаловать в новеллу!", bg: "url('background1.jpg')", voice: "voice1.mp3" },
    { text: "Это вторая сцена.", bg: "url('background2.jpg')", voice: "voice2.mp3" },
    { text: "Финал истории.", bg: "url('background3.jpg')", voice: "voice3.mp3" }
];
let currentScene = 0;
let musicPlaying = true;
let voiceEnabled = true;

function startGame() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    nextScene();
}

function nextScene() {
    if (currentScene >= scenes.length) return;
    let scene = scenes[currentScene];
    document.getElementById('background').style.backgroundImage = scene.bg;
    document.getElementById('text-box').innerText = scene.text;
    if (voiceEnabled) playVoice(scene.voice);
    currentScene++;
}