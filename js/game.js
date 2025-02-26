// let currentScene = 0;
let currentChoicePath = null;
let musicPlaying = true;
let voiceEnabled = true;
let currentBranch = scenes;
let currentScene = scenes[0];
let currentSceneIndex = 0;

function startGame() {
  document.querySelector(".menu-container").style.display = "none";
  document.querySelector("#game-container").style.display = "block";
  nextScene();
}

// function nextScene() {
//   let scene;
//   if (currentChoicePath) {
//     scene = choicePaths[currentChoicePath].shift();
//     if (!scene) {
//       currentChoicePath = null;
//       return nextScene();
//     }
//   } else {
//     if (currentScene >= scenes.length) return alert("Игра завершена!");
//     scene = scenes[currentScene++];
//   }
//   if (scene.character.position === "left") {
//     document.querySelector("#character-left").style.backgroundImage = `url(${scene.character.sprite})`;
//     document.querySelector("#character-right").style.backgroundImage = "";
//   } else {
//     document.querySelector("#character-right").style.backgroundImage = `url(${scene.character.sprite})`;
//     document.querySelector("#character-left").style.backgroundImage = "";
//   }

//   if (voiceEnabled) playVoice(scene.voice);

//   document.querySelector("#background").style.backgroundImage = scene.bg;
//   document.querySelector("#dialogue-text").innerText = scene.text;
//   document.querySelector("#character-name").innerText = scene.character.name;

//   if (scene.choices) showChoices(scene.choices);
// }

function nextScene() {
  currentSceneIndex +=1

  if (scene.character.position === "left") {
    document.querySelector("#character-left").style.backgroundImage = `url(${scene.character.sprite})`;
    document.querySelector("#character-right").style.backgroundImage = "";
  } else {
    document.querySelector("#character-right").style.backgroundImage = `url(${scene.character.sprite})`;
    document.querySelector("#character-left").style.backgroundImage = "";
  }

  if (voiceEnabled) playVoice(currentScene.voice);

  document.querySelector("#background").style.backgroundImage = currentScene.bg;
  document.querySelector("#dialogue-text").innerText = currentScene.text;
  document.querySelector("#character-name").innerText = currentScene.character.name;

  if (scene.choices) showChoices(currentChoicePath.choices);
}

function showChoices(choices) {
  let choiceContainer = document.querySelector("#choice-container");
  choiceContainer.innerHTML = "";
  choiceContainer.style.display = "flex";
  choices.forEach((choice) => {
    //не создавать кнопку каждый раз
    // сделать их один раз и сетать value

    let button = document.createElement("button");
    button.className = "choice-button";
    button.innerText = choice.text;
    button.onclick = () => selectChoice(choice.next);
    choiceContainer.appendChild(button);
  });
}

function selectChoice(choiceKey) {
  currentChoicePath = choiceKey;
  document.querySelector("#choice-container").style.display = "none"; //тогда уж хотябы удалять элемент
  nextScene();
}

function playVoice(voiceFile) {
  let voice = document.querySelector("#voice");
  voice.src = voiceFile;
  voice.play();
}

function openSettings() {
  document.querySelector("#settings-modal").style.display = "block";
}

function closeSettings() {
  document.querySelector("#settings-modal").style.display = "none";
}
document.querySelector("#text-box").addEventListener("click", () => {
  let choiceContainer = document.querySelector("#choice-container");
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

document.querySelector("#music-volume").addEventListener("input", (event) => {
  document.querySelector("#music").volume = event.target.value;
});

document.querySelector("#voice-volume").addEventListener("input", (event) => {
  document.querySelector("#voice").volume = event.target.value;
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
