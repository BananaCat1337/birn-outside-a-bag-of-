let scenes = [
    { text: "Добро пожаловать в новеллу!", bg: "url('background1.jpg')", voice: "voice1.mp3" },
    { text: "Это вторая сцена.", bg: "url('background2.jpg')", voice: "voice2.mp3" },
    { text: "Финал истории.", bg: "url('background3.jpg')", voice: "voice3.mp3" }
];
let currentScene = 0;
let musicPlaying = true;
let voiceEnabled = true;

function startGame() {
    document.querySelector('.menu-container').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    nextScene();
}

function nextScene() {
    if (currentScene >= scenes.length) {
        alert("Игра завершена!");
        return;
    }
    let scene = scenes[currentScene];
    document.getElementById('background').style.backgroundImage = scene.bg;

    // Анимация появления текста
    let textBox = document.getElementById('text-box');
    textBox.style.opacity = 0; // Сначала текст невидим
    setTimeout(() => {
        textBox.innerText = scene.text;
        textBox.style.opacity = 1; // Постепенно появляется
    }, 200); // Задержка для плавного появления

    if (voiceEnabled) playVoice(scene.voice);
    currentScene++;
}

function playVoice(voiceFile) {
    let voice = document.getElementById('voice');
    voice.src = voiceFile;
    voice.play();
}

function openSettings() {
    document.getElementById('settings-modal').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
}

function exitGame() {
    window.close();
}