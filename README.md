# Echoes of the Crystal — V9.1 structural refactor

This is a **behavior-preserving first step**, not a gameplay update. The V9.1 game scene is still a single class; extracting it into smaller systems will be a separate, carefully tested refactor.

## Files
- `index.html` — document markup and script references only
- `styles/game.css` — visual layout, mobile controls, battle and menus
- `src/input/touchControls.js` — touch input, action handler and DOM references
- `src/scenes/AdventureScene.js` — existing Phaser scene, maps, battles, shops, quests, save behavior
- `src/config/gameConfig.js` — Phaser settings
- `src/main.js` — game initialization

## Running
Open the project using Replit's existing web server or any static HTTP server. Keep the folder structure intact. Phaser is loaded from a CDN, so the game needs internet access for the library. No bundler or npm install is required.

## Test checklist
Title/new game; directional movement; TALK; Elder quest; crystal shrine; training battle; victory; BAG and merchant; Chapter Two portal; forest encounters; SAVE and continue. Check iPhone landscape and desktop.

## Next architectural milestone
Extract game state, quest/save logic, combat, inventory, and area rendering into modules after verifying this no-feature-change refactor. Avoid moving everything at once.
