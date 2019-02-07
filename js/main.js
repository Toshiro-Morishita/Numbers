(function() {
  'use strict'

  let board = document.getElementById('board');

  let SIZE = 3;
  let i;

  function createPanel(num) {
    let panel;
    panel = document.createElement('div');
    panel.className = 'panel';
    panel.textContent = num;
    return panel;
  }

  for (i = 0; i < SIZE * SIZE; i++) {
    board.appendChild(createPanel(i));
  }
})();
