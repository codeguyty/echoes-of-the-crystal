/** V9.3 Part 2: original, code-drawn Alderbrook pixel art. No external art dependency. */
function createVillageBuildingTextures(scene) {
  const make = (key,w,h,draw) => {
    const t=scene.textures.createCanvas(key,w,h),c=t.getContext();
    c.imageSmoothingEnabled=false;
    const r=(x,y,a,b,color)=>{c.fillStyle=color;c.fillRect(x,y,a,b)};
    draw(r);t.refresh();
  };
  function building(key,p,shop) {
    make(key,110,110,r=>{
      // Drop shadow, stone footings and timber-frame walls.
      r(7,98,99,9,'#333344');r(13,91,88,13,'#66677b');
      r(16,35,80,60,'#533d37');r(20,39,72,54,p.wall);
      for(let x=20;x<=88;x+=17){r(x,40,3,52,'#73513d');r(x+2,40,1,52,'#c59b72')}
      r(18,52,76,4,'#77513b');r(18,55,76,2,'#c7a178');
      // Stepped shingled roof, eaves and ridge highlights.
      r(3,31,104,12,'#29283c');r(8,24,94,13,p.roofDark);
      r(14,15,82,14,p.roof);r(23,7,64,11,p.roofLight);
      r(30,3,50,5,p.roofLight);
      for(let row=0;row<3;row++) for(let x=14+(row%2)*9;x<99;x+=17){
        const y=19+row*7;r(x,y,12,2,p.roofDark);r(x+2,y-2,7,2,p.roofLight);
      }
      // Glowing window with shutters and sill.
      r(24,59,29,28,'#443d43');r(28,62,21,21,'#e6c778');
      r(37,62,3,21,'#6d4d39');r(28,70,21,3,'#6d4d39');
      r(22,59,4,27,p.trim);r(51,59,4,27,p.trim);r(23,85,31,3,'#d6b18a');
      // Door with frame, lintel and lantern.
      r(63,62,27,36,'#44303a');r(67,66,19,32,p.door);
      r(68,69,3,27,'#a7805e');r(81,81,3,3,'#f9d68d');
      r(60,58,33,4,'#d0a477');r(91,66,4,9,'#54444b');r(92,68,2,4,'#ffe6a0');
      if(shop){
        // Teal-roofed merchant stall and colorful awning.
        r(14,46,82,5,'#3b3342');r(16,50,78,10,'#f0d7a0');
        for(let x=16;x<94;x+=13)r(x,50,7,10,'#b15b69');
        r(23,40,62,7,'#554638');r(27,41,54,5,'#e4c18a');
      } else {
        // Chimney and flower planter.
        r(79,1,12,17,'#64504b');r(77,0,16,4,'#b49b83');
        r(23,89,31,5,'#6c4c3d');r(25,86,4,3,'#d88ca5');r(34,85,4,4,'#f0d58c');r(44,86,4,3,'#b9a2e5');
      }
    });
  }
  building('house',{wall:'#b89578',roof:'#a65b67',roofDark:'#70404f',roofLight:'#d1807a',trim:'#775b64',door:'#956b5a'},false);
  building('shop',{wall:'#c3ab81',roof:'#478d86',roofDark:'#315e69',roofLight:'#7bc3a7',trim:'#6d6a64',door:'#875e69'},true);
  make('village-fence',32,26,r=>{
    r(2,6,5,19,'#59463d');r(25,6,5,19,'#59463d');
    r(3,3,3,19,'#c7a276');r(26,3,3,19,'#c7a276');
    r(0,10,32,5,'#735743');r(0,9,32,3,'#d8b78b');
    r(0,19,32,4,'#735743');r(0,18,32,2,'#c7a276');
  });
  make('village-bush',28,22,r=>{
    r(3,13,24,7,'#244f43');r(0,10,11,9,'#367454');r(8,4,15,14,'#448d60');
    r(17,9,11,11,'#37774d');r(10,2,8,6,'#72b575');
    for(const [x,y] of [[5,12],[16,7],[22,14]])r(x,y,3,2,'#a7d38b');
  });
  make('village-planter',36,26,r=>{
    r(3,16,30,8,'#5c453f');r(5,17,26,6,'#a46f57');r(7,14,22,4,'#543f39');
    for(const [x,y,c] of [[10,7,'#f3b0c6'],[20,3,'#f4d58d'],[27,8,'#b5a4e5']]){
      r(x+1,y+5,2,10,'#3c7851');r(x,y+2,5,5,c);r(x+1,y+3,2,2,'#fff2b6');
    }
  });
  make('village-lamp',20,43,r=>{
    r(8,15,5,27,'#493d4b');r(6,39,9,3,'#77707a');r(5,8,11,12,'#4d4654');
    r(7,10,7,8,'#ffdb85');r(9,11,3,6,'#fff2bc');r(3,6,15,4,'#746678');
    r(8,2,5,5,'#a08d88');
  });
  make('village-shrine',88,66,r=>{
    r(0,52,88,12,'#53566e');r(4,47,80,9,'#8b91a2');r(10,40,68,9,'#b9b8bd');
    r(15,32,58,9,'#777e96');r(22,25,44,10,'#aeb8ca');
    r(29,12,30,16,'#69738d');r(33,7,22,10,'#c6d3df');
    r(18,29,6,17,'#d6c9ad');r(64,29,6,17,'#d6c9ad');
    r(17,26,8,4,'#7d8499');r(63,26,8,4,'#7d8499');
    r(35,36,18,4,'#e0c894');r(39,40,10,5,'#a8d6d9');
    for(const x of [8,76]){r(x,46,4,4,'#cbd3df');r(x+1,44,2,2,'#f1e5b5')}
  });
}
