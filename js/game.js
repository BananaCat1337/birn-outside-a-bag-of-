//TODO работать не с айди из стори жс а с индексами из таймлайн
// это другое!!!!! вы нипонимаите!!
let currentSceneIndex = 0;
// let currentScene = 0;
let currentChoicePath = null;
let musicPlaying = true;
let voiceEnabled = true;
const timeLine = [];

function startGame() {
  document.querySelector(".menu-container").style.display = "none";
  document.querySelector("#game-container").style.display = "block";
  addNextScene();
}
//TODO учесть в обработках что у нас теперь все в чсценах а не в разных ключах
function findEntityById(collection, id) {
  return collection.filter((item) => item.id === id)[0]; 
}

function addChoice(choices, id = null) {
  const defaultChoiceId = timeLine.at(-1).defaultChoiceId;
  const choiceToAdd = id ?? defaultChoiceId;
  timeLine.push(findEntityById(choices, choiceToAdd, "choices"));
}

function addNextScene(nextSceneId = null, nextChoiceId = null) {
  // инициализация первой сцены
  if (!timeLine.at(-1)) {
    timeLine.push(findEntityById(plot.scenes, 0, "scenes"));
    addChoice(plot.choices);
  }
  const lastSceneId = timeLine.filter((item) => item.type === "scene").at(-1).id;
  const sceneToAddId = nextSceneId ?? lastSceneId + 1;
  const sceneToAdd = findEntityById(plot, sceneToAddId, "scene");
  timeLine.push(sceneToAdd);
  addChoice(plot.choices, nextChoiceId);
}


function switchToNextScene(nextId = null) {
  const currentScene = getCurrentScene();
  const nextSceneId = timeLine.indexOf(currentScene) + 1;
  currentSceneIndex = nextSceneId;
}

function switchToPrevScene() {
  const currentScene = getCurrentScene();
  const prevSceneIndex = timeLine.indexOf(currentScene) - 1;
  currentSceneIndex = prevSceneIndex;
}

//TODO сцена выбора может быть текущей сценой
function getCurrentScene() {
  const currentScene = findEntityById(plot, currentSceneIndex, "scene");
  return currentScene;
}
//TODO проверка на то что мы уже выбрали и второй раз это делать нинада!!!! не положено!
//TODO рендерить сцены выбора как сцены
function renderScene() {
  //clear previous characters
  document.querySelector("#character-right").style.backgroundImage = "";
  document.querySelector("#character-left").style.backgroundImage = "";

  const currentScene = getCurrentScene();
  currentScene.characters.forEach((character) => {
    const characterPosition = character.position;
    document.querySelector(`#character-${characterPosition}`).style.backgroundImage = `url(${currentScene.character.sprite})`;;
  });
  if (voiceEnabled) playVoice(scene.voice);

  document.querySelector("#background").style.backgroundImage = scene.bg;
  document.querySelector("#dialogue-text").innerText = scene.text;
  document.querySelector("#character-name").innerText = scene.character.name;
  //TODO showChoices
  if (scene.choices) showChoices(scene.choices);
}

function playVoice(voiceFile) {
  let voice = document.querySelector("#voice");
  voice.src = voiceFile;
  voice.play();
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
//     document.querySelector(
//       "#character-left"
//     ).style.backgroundImage = `url(${scene.character.sprite})`;
//     document.querySelector("#character-right").style.backgroundImage = "";
//   } else {
//     document.querySelector(
//       "#character-right"
//     ).style.backgroundImage = `url(${scene.character.sprite})`;
//     document.querySelector("#character-left").style.backgroundImage = "";
//   }

//   if (voiceEnabled) playVoice(scene.voice);

//   document.querySelector("#background").style.backgroundImage = scene.bg;
//   document.querySelector("#dialogue-text").innerText = scene.text;
//   document.querySelector("#character-name").innerText = scene.character.name;

//   if (scene.choices) showChoices(scene.choices);
// }

function showChoices(choices) {
  let choiceContainer = document.querySelector("#choice-container");
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
  document.querySelector("#choice-container").style.display = "none";
  nextScene();
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
