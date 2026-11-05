// Echoes of the Crystal — V9.2e startup repair.
// index.html loads the classic scripts in dependency order before this file.
(function startEchoesOfTheCrystal() {
  'use strict';

  const errorElement = document.getElementById('error');
  const showError = (message, error) => {
    if (errorElement) {
      errorElement.style.display = 'block';
      errorElement.textContent = message;
    }
    if (error) console.error('Echoes of the Crystal startup:', error);
  };

  console.info('Echoes of the Crystal: V9.2e startup repair loaded');

  if (typeof Phaser === 'undefined') {
    showError('Phaser did not load. Check your internet connection and reload.');
    return;
  }

  if (!window.gameConfig) {
    showError('Game configuration did not load. Check script order and reload.');
    return;
  }

  if (typeof Adventure === 'undefined') {
    showError('Adventure scene did not load. Check the browser console.');
    return;
  }

  try {
    new Phaser.Game(window.gameConfig);
  } catch (error) {
    showError(`Game error: ${error.message}`, error);
  }
})();
