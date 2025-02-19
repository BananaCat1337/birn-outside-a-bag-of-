document.querySelectorAll('input[type=checkbox]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      let counter = 0;
      let clicked = this.dataset.index;
  
      document.querySelectorAll('input[type=checkbox]').forEach(function(input) {
        if (input.checked) {
          counter++;
        }
      });
  
      if (counter == 3) {
        let toDisable = clicked;
        while (toDisable == clicked) {
          toDisable = Math.floor(Math.random() * 3); // Получаем случайное число от 0 до 2
        }
        document.querySelectorAll('input[type=checkbox]')[toDisable].checked = false;
      }
      console.log("11");
    });
  });
  