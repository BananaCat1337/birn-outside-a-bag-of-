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
  
  function openSettings() {
    document.getElementById('settings-modal').style.display = 'flex';
  }
  
  function closeSettings() {
    document.getElementById('settings-modal').style.display = 'none';
  }
  
  function exitGame() {
    if (confirm('Are you sure you want to exit?')) {
      window.close();
    }
  }
