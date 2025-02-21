

let currentScene = 0;
let currentChoicePath = null;
let musicPlaying = true;
let voiceEnabled = true;

function startGame() {
  document.querySelector(".menu-container").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  nextScene();
}

function nextScene() {
  let scene;
  if (currentChoicePath) {
    scene = choicePaths[currentChoicePath].shift();
    if (!scene) {
      currentChoicePath = null;
      return nextScene();
    }
  } else {
    if (currentScene >= scenes.length) return alert("Игра завершена!");
    scene = scenes[currentScene++];
  }
  if (scene.character.position === "left") {
    document.getElementById(
      "character-left"
    ).style.backgroundImage = `url(${scene.character.sprite})`;
    document.getElementById("character-right").style.backgroundImage = "";
  } else {
    document.getElementById(
      "character-right"
    ).style.backgroundImage = `url(${scene.character.sprite})`;
    document.getElementById("character-left").style.backgroundImage = "";
  }

  if (voiceEnabled) playVoice(scene.voice);

  document.getElementById("background").style.backgroundImage = scene.bg;
  document.getElementById("dialogue-text").innerText = scene.text;
  document.getElementById("character-name").innerText = scene.character.name;

  if (scene.choices) showChoices(scene.choices);
}

function showChoices(choices) {
  let choiceContainer = document.getElementById("choice-container");
  choiceContainer.innerHTML = "";
  choiceContainer.style.display = "flex";
  choices.forEach((choice) => {
    let button = document.createElement("button");
    button.className = "choice-button";
    button.innerText = choice.text;
    button.onclick = () => selectChoice(choice.next);
    choiceContainer.appendChild(button);
  });
}

function selectChoice(choiceKey) {
  currentChoicePath = choiceKey;
  document.getElementById("choice-container").style.display = "none";
  nextScene();
}

function playVoice(voiceFile) {
  let voice = document.getElementById("voice");
  voice.src = voiceFile;
  voice.play();
}

function openSettings() {
  document.getElementById("settings-modal").style.display = "block";
}

function closeSettings() {
  document.getElementById("settings-modal").style.display = "none";
}
document.getElementById("text-box").addEventListener("click", () => {
  let choiceContainer = document.getElementById("choice-container");
  if (choiceContainer.style.display === "flex") return;
  nextScene();
});

const volumeControls = document.createElement("div");
volumeControls.innerHTML = `
  <div class="volume-container">
    <div class="volume-icon" id="music-icon">🔊</div>
    <input type="range" id="music-volume" min="0" max="1" step="0.01" value="1">
    <div class="volume-icon" id="voice-icon">🎤</div>
    <input type="range" id="voice-volume" min="0" max="1" step="0.01" value="1">
  </div>
`;
document.body.appendChild(volumeControls);

document.getElementById("music-volume").addEventListener("input", (event) => {
  document.getElementById("music").volume = event.target.value;
});

document.getElementById("voice-volume").addEventListener("input", (event) => {
  document.getElementById("voice").volume = event.target.value;
});

const volumeContainer = document.querySelector(".volume-container");
volumeContainer.style.position = "absolute";
volumeContainer.style.top = "10px";
volumeContainer.style.right = "10px";
volumeContainer.style.display = "flex";
volumeContainer.style.flexDirection = "column";
volumeContainer.style.alignItems = "center";
volumeContainer.style.opacity = "0";
volumeContainer.style.transition = "opacity 0.5s";

document
  .querySelector(".volume-container")
  .addEventListener("mouseenter", () => {
    volumeContainer.style.opacity = "1";
  });

document
  .querySelector(".volume-container")
  .addEventListener("mouseleave", () => {
    volumeContainer.style.opacity = "0";
  });
