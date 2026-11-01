# Echoes of the Crystal — Developer Guide (V9.1.1)

This guide describes the existing V9.1 Phaser 3 prototype. It is intended for learning and maintenance, not a redesign.

## Start here: how the game loads

1. `index.html` defines the page, Phaser script, HUD, dialogue, inventory/shop panels, and touch buttons.
2. `styles/game.css` styles the landscape layout and controls.
3. `src/input/touchControls.js` registers touch input and shared UI references.
4. `src/scenes/AdventureScene.js` defines the `Adventure` Phaser scene.
5. `src/config/gameConfig.js` configures Phaser's resolution, scaling, and scene list.
6. `src/main.js` checks whether Phaser loaded and creates the game instance.

**Important:** These are classic browser scripts, not ES modules. Their load order in `index.html` matters because later scripts reference variables defined by earlier scripts.

## Phaser lifecycle

- `constructor()` sets initial game state.
- `create()` sets up textures, input, UI, and the title screen.
- `update()` runs each frame; it handles movement and exploration.
- The scene switches areas by clearing old display objects and constructing a new location.

## Important systems

| System | Where to look | What to learn |
| --- | --- | --- |
| Player movement | `AdventureScene.update()` and `blocked()` | Per-frame input and collision checks |
| Touch input | `touchControls.js` | Pointer events and shared held-direction state |
| Village | `village()`, `addHouse()`, `addTree()` | World building, draw depth, collision, interactions |
| Forest | `woods()`, `spawnWoodsPortal()` | Quest-gated travel and map transitions |
| Quests | `setQuest()`, `elderAction()`, `crystalAction()` | Quest state and progression |
| Dialogue | `say()`, `nextLine()`, `action()` | Conversation flow and input |
| Combat | `beginBattle()`, `playerTurn()`, `finishBattle()` | Turn-based state transitions and rewards |
| Items and shop | `setupPanels()`, `renderPanels()`, `buy()`, `useItem()` | UI state and inventory changes |
| Save/continue | `hasSave()`, `saveGame()`, `loadGame()` | Browser localStorage and serialization |
| Temporary artwork | `makeTextures()` | Canvas-drawn pixel sprites; replace with licensed assets in V9.2 |

## How to read a function

1. Find its **purpose** in the comment immediately above it.
2. Identify its **inputs** (parameters) and the `this.*` fields it reads.
3. Identify its **side effects** (fields it changes, sprites it creates, panels it opens).
4. Find its **callers** (search the method name in the source file).
5. Test the relevant behavior in the game before editing it.

## Naming and structure conventions

- `this.*` fields belong to the Phaser scene instance.
- `hero`, `walls`, and `targets` represent the current map's player and interaction geometry.
- `quest`, `chapter`, `level`, `xp`, and `inventory` represent persistent progress.
- `place` identifies the current location or title screen.
- `held` tracks touchscreen directional buttons; `interact` forwards the action button to the scene.
- Keep comments focused on **why** a behavior exists, not obvious syntax.

## Safety when editing

- Do not rename `saveKey` or change the save-data structure without planning migration.
- Do not remove the Whispering Woods portal's quest check or duplicate-prevention flag.
- Keep DOM IDs synchronized between HTML, CSS, and JavaScript.
- When moving methods to new files, revisit classic-script load order or migrate deliberately to ES modules.
- Run `node --check` on each JavaScript file and test the game on iPhone landscape after changes.

## V9.1.1 scope

This update focuses on readability, explanatory comments, and documentation. It intentionally avoids gameplay redesign and external asset integration. The large `AdventureScene.js` remains one scene to reduce regression risk; splitting it into independent systems can be a later, separately tested milestone.
