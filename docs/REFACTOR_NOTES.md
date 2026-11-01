# V9.1.1 Refactor Notes

- Formatted existing JavaScript, CSS, and HTML for readability.
- Added method-level educational comments to the `Adventure` scene.
- Added `docs/DEVELOPER_GUIDE.md` for the project's architecture and learning reference.
- Kept the same file paths and script load order.
- No game mechanics or save schema were intentionally changed.
- The included README from the original V9.1 archive is **outdated**. When deploying, retain the newer gameplay README and `assets/` screenshot already on GitHub.

## Before publishing

1. Run syntax checks for each JavaScript file.
2. Run the game and verify the title, village, portal, woods, combat, inventory, save/load, and touch controls.
3. Compare against V9.1 in the same browser.
4. Publish to `main` only after those tests pass.
