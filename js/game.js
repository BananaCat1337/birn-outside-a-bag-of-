let currentSceneIndex = 0;
let currentSlideIndex = 0;
let currentChoicePath = null;
let musicPlaying = true;
let voiceEnabled = true;
const timeLine = [];

function startGame() {
    document.querySelector('.menu-container').style.display = 'none';
    document.querySelector('#game-container').style.display = 'block';
    addNextScene();
    renderSlide();
}

function findSceneById(collection, id) {
    return collection.filter((item) => item.id === id)[0];
}

function addChoice(scenes, id = null) {
  console.log(1111111);
    const defaultChoiceId = timeLine.at(-1).defaultChoiceId;
    const choiceToAdd = id ?? defaultChoiceId;
    timeLine.push(findSceneById(scenes, choiceToAdd));
    console.log(timeLine, "timeLine add choice")
}

function addNextScene(nextSceneId = null, nextChoiceId = null) {
    // инициализация первой сцены
        if (!timeLine.at(-1)) {
        timeLine.push(findSceneById(scenes, 0));
        addChoice(scenes);
    } else {
        const lastSceneId = timeLine.filter((item) => item.type === 'plot').at(-1).id;
        const sceneToAddId = nextSceneId ?? lastSceneId + 1;
        const sceneToAdd = findSceneById(scenes, sceneToAddId);
        timeLine.push(sceneToAdd);
        addChoice(scenes, nextChoiceId); // мб не нужен потому что выбор теперь тоже сцена
      }
      
    }

function switchToNextSlide(nextId = null) {
    console.log(' switchToNextSlide switchToNextSlide');

    const currentScene = timeLine[currentSceneIndex];
    console.log(' switchToNextSlide currentScene', currentScene);

    if (currentSlideIndex + 1 > currentScene.content.length - 1) {
        currentSceneIndex += 1;
        currentSlideIndex = 0;
    } else currentSlideIndex += 1;
    console.log('switchToNextSlide currentSlideIndex, currentSceneIndex', currentSlideIndex, currentSceneIndex);
}

function switchToPrevScene() {
    if (currentSlideIndex - 1 < 0) {
        currentSceneIndex -= 1;
        currentSlideIndex = 0;
    } else currentSlideIndex -= 1;
}

function getCurrentScene() {
    const currentScene = findSceneById(scenes, currentSceneIndex);
    return currentScene;
}
function getCurrentSlide() {
    const currentScene = getCurrentScene();
    return currentScene.content[currentSlideIndex];
}
//TODO проверка на то что мы уже выбрали и второй раз это делать нинада!!!! не положено!

//TODO  кнопки добавить вперед и только вперед, ещкере, ещё добавить систему укурки, сделать доп проверку для назад, чтобы выбор работал.
function renderSlide() {
    //clear previous characters
    document.querySelector('#character-right').style.backgroundImage = '';
    document.querySelector('#character-left').style.backgroundImage = '';

    const currentSlide = getCurrentSlide();
    console.log('currentSlide', currentSlide);

    currentSlide.characters.forEach((character) => {
        console.log('character:', character);

        const characterPosition = character.position;
        const a = document.querySelector(`#character-${characterPosition}`);
        if (a) a.style.backgroundImage = `url(${character.sprite})`;
        document.querySelector('#character-name').innerText = character.name;
    });
    if (voiceEnabled) playVoice(currentSlide.voice);

    document.querySelector('#background').style.backgroundImage = currentSlide.bg;
    document.querySelector('#dialogue-text').innerText = currentSlide.text;
    //TODO showChoices
    if (currentSlide.choices) showChoices(currentSlide.choices);
}
// renderSlide();
function playVoice(voiceFile) {
    let voice = document.querySelector('#voice');
    voice.src = voiceFile;
    voice.play();
}

function showChoices(choices) {
    let choiceContainer = document.querySelector('#choice-container');
    choiceContainer.innerHTML = '';
    choiceContainer.style.display = 'flex';
    choices.forEach((choice) => {
        let button = document.createElement('button');
        button.className = 'choice-button';
        button.innerText = choice.text;
        button.onclick = () => selectChoice(choice.next);
        choiceContainer.appendChild(button);
    });
}

function selectChoice(choiceKey) {
    currentChoicePath = choiceKey;
    document.querySelector('#choice-container').style.display = 'none';
    switchToNextSlide();
    renderSlide();
}

function openSettings() {
    document.querySelector('#settings-modal').style.display = 'block';
}

function closeSettings() {
    document.querySelector('#settings-modal').style.display = 'none';
}
document.querySelector('#text-box').addEventListener('click', () => {
    let choiceContainer = document.querySelector('#choice-container');
    if (choiceContainer.style.display === 'flex') return;
    switchToNextSlide();
    renderSlide();
});

const volumeControls = document.createElement('div');
volumeControls.innerHTML = `
  <div class="volume-container">
    <div class="volume-icon" id="music-icon">🔊</div>
    <input type="range" id="music-volume" min="0" max="1" step="0.01" value="1">
    <div class="volume-icon" id="voice-icon">🎤</div>
    <input type="range" id="voice-volume" min="0" max="1" step="0.01" value="1">
  </div>
`;
document.body.appendChild(volumeControls);

document.querySelector('#music-volume').addEventListener('input', (event) => {
    document.querySelector('#music').volume = event.target.value;
});

document.querySelector('#voice-volume').addEventListener('input', (event) => {
    document.querySelector('#voice').volume = event.target.value;
});

const volumeContainer = document.querySelector('.volume-container');
// const volumeContainer = document.querySelector('.volume-container').addAttribute('style', {
//   position: absolute,
//   top: 10px,
//   position = absolute,
// top: 10px,
// right: 10px,
// display: flex,
// flexDirection: column,
// alignItems: center,
// opacity: 0,
// transition: opacity 0.5s
// });
volumeContainer.style.position = 'absolute';
volumeContainer.style.top = '10px';
volumeContainer.style.right = '10px';
volumeContainer.style.display = 'flex';
volumeContainer.style.flexDirection = 'column';
volumeContainer.style.alignItems = 'center';
volumeContainer.style.opacity = '0';
volumeContainer.style.transition = 'opacity 0.5s';

document.querySelector('.volume-container').addEventListener('mouseenter', () => {
    volumeContainer.style.opacity = '1';
});

document.querySelector('.volume-container').addEventListener('mouseleave', () => {
    volumeContainer.style.opacity = '0';
});
