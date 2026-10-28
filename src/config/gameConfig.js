// Phaser configuration. Scene logic lives in scenes/AdventureScene.js.
const gameConfig = {type:Phaser.AUTO,parent:'game',width:320,height:240,pixelArt:true,roundPixels:true,backgroundColor:'#172238',scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[Adventure]};
