var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1img,car2img,car3img,car4img
var bronze,silver,gold;
var finishedPlayers=0
var pastFinished=0


function preload() {
  car1img=loadImage("images/car1.png")
  car2img=loadImage("images/car2.png")
  car3img=loadImage("images/car3.png")
  car4img=loadImage("images/car4.png")
  track=loadImage("images/track.jpg")
  groundImage=loadImage("images/ground.png")
  bronze=loadImage("images/bronze.png")
  silver=loadImage("images/silver.png")
  gold=loadImage("images/gold.png")
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255,20,08)
  if(playerCount === 4){
    game.update(1);
  }

   if(gameState === 1){
    clear();
    game.play();
  }
  if (finishedPlayers===4){
    game.update(2)
  }
  if(gameState===2&&finishedPlayers===4){
    game.displayRanks()
  }
}
