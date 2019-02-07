(function() {
  'use strict'

  let board = document.getElementById('board');

  let SIZE = 3;
  let i;
  let currentNum = 0;

  function createPanel(num) {
    let panel;
    panel = document.createElement('div');
    panel.className = 'panel';
    panel.textContent = num;
    panel.addEventListener('click', function() {
      if ((this.textContent - 0) === currentNum) {
        this.className = 'panel flipped';
        currentNum++;
      }
    });
    return panel;
  }

  for (i = 0; i < SIZE * SIZE; i++) {
    board.appendChild(createPanel(i));
  }
})();
