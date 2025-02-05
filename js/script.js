// Анимация кнопок
let animateButton = function (e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };
  
  document.querySelectorAll('.bubbly-button').forEach(function (button) {
    button.addEventListener('click', animateButton);
  });
  
  // Открытие/закрытие модального окна
  function openSettings() {
    document.getElementById('settings-modal').style.display = 'flex';
  }
  
  function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
  }
  
  // Выход из игры
  function exitGame() {
    if (confirm('Are you sure you want to exit?')) {
      window.close();
    }
  }
  
  // Настройка музыки и звука
  document.getElementById('music-toggle').addEventListener('change', function () {
    alert('Music toggled!');
  });
  
  document.getElementById('sound-toggle').addEventListener('change', function () {
    alert('Sound effects toggled!');
  });


  let wrapper = document.querySelector(".typing");
  let text = document.querySelector(".typing .text");
  let textCont = text.textContent;
  text.style.display = "none";
  for (let i = 0; i < textCont.length; i++) {
      (function(i) {
          setTimeout(function() {
              let texts = document.createTextNode(textCont[i])
              let span = document.createElement('span');
              span.appendChild(texts);
              wrapper.appendChild(span);
          }, 75 * i);
      }(i));
  }