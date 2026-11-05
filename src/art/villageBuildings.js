
/**

 * Echoes of the Crystal

 * V9.2e — Alderbrook building artwork

 *

 * Generates pixel-art textures using Phaser's canvas system.

 * Building dimensions remain 110 × 110 pixels.

 */

function createVillageBuildingTextures(scene) {

  const SIZE = 110;

  function createBuilding(key, palette, isShop = false) {

    const texture = scene.textures.createCanvas(key, SIZE, SIZE);

    const ctx = texture.getContext();

    // Draw sharp pixel-art rectangles.

    function rect(x, y, width, height, color) {

      ctx.fillStyle = color;

      ctx.fillRect(x, y, width, height);

    }

    // Stone foundation and timber-framed walls.

    rect(12, 91, 88, 15, '#555061');

    rect(16, 35, 80, 60, palette.wall);

    rect(16, 35, 6, 60, '#604232');

    rect(90, 35, 6, 60, '#604232');

    rect(16, 51, 80, 5, '#76503a');

    // Layered roof with a dark outline.

    rect(5, 29, 100, 13, '#35283e');

    rect(12, 16, 86, 19, palette.roof);

    rect(26, 6, 60, 14, palette.roofLight);

    // Small roof-tile highlights.

    for (let x = 22; x < 90; x += 17) {

      rect(x, 27, 9, 4, palette.roofLight);

    }

    // Glowing window and wooden frame.

    rect(27, 57, 24, 26, '#3a4854');

    rect(31, 61, 16, 18, '#f0c879');

    rect(37, 61, 3, 18, '#79563c');

    rect(31, 68, 16, 3, '#79563c');

    // Door with a visible handle.

    rect(65, 65, 22, 34, '#483439');

    rect(69, 69, 14, 30, palette.door);

    rect(81, 83, 3, 3, '#f3d78e');

    if (isShop) {

      // Merchant sign and striped storefront awning.

      rect(22, 43, 66, 15, '#35283e');

      rect(26, 46, 58, 9, '#d9b77c');

      for (let x = 25; x < 86; x += 16) {

        rect(x, 56, 8, 7, '#9b4d7d');

      }

    }

    texture.refresh();

  }

  createBuilding('house', {

    wall: '#ac8064',

    roof: '#934f55',

    roofLight: '#b76965',

    door: '#9e6d5d'

  });

  createBuilding('shop', {

    wall: '#b49a74',

    roof: '#418e87',

    roofLight: '#70b7a4',

    door: '#9b4d7d'

  }, true);

}

);

}

