var bird
var obstacle
var banana
var pipes
var backgroundX=250;
var score = 0;
var gameState = "Play"
var food= []


function preload(){
  backgroundImage=loadImage("backgroundBird.png")
  restart=loadImage("restart.png")
  gameOver=loadImage("239-2391163_game-over-game-over-en-png_prev_ui.png")
  
  gameOverSound = loadSound("gameOver.m4a")
  wings= loadSound("birdWings.m4a")
}



function setup() {
  createCanvas(400, 400);
  
  bird = new Bird();
  pipes=[]
  obstacle= new Obstacle();
  
  
}

function draw() {
  
  background(backgroundImage);
  imageMode(CENTER);
  image(backgroundImage,backgroundX,150,700,600)
  
  if (gameState === "Play"){
  backgroundX-=2;
  
  if (backgroundX < 150){
      backgroundX = 250
  }  
  
  
  bird.display();
   
  
  
  if(frameCount%100 === 0){
    obstacle= new Obstacle();
     pipes.push(obstacle);
 }
    
    if(frameCount%50 === 0){
      banana= new Banana();
    food.push(banana);
    }
  
  for(var i = 0;i<pipes.length;i++){
    pipes[i].display();
    if(pipes[i].isTouching(bird)){
      gameState="End"
      console.log(gameState)
      gameOverSound.play();
    }
    if(pipes[i].offScreen()){
      pipes.splice(i,1)
    }
  }
    
    
    for ( var e = 0;e < food.length;e++){
      food[e].display();
      if(food[e].isTouching(bird)){
        score = score+10;
        food.splice(e,1)
      }
    }
    
    if(bird.y>= 400){
      gameState="End"
      gameOverSound.play();
      console.log(gameState);
    }
  
  
  if(frameCount%15===0){
    score = score+1
    //console.log(score)
  }
  
  
  if (keyIsDown(32)){
    bird.jump();
    wings.play();
  }
  }
  else{
    endGame();
  }
  text("score = " + score,325,25);
  
}

function endGame(){
  bird.freeze();
 for (var p in pipes){
   pipes[p].freeze();
   
   image(gameOver,200,150,200,50)
   image(restart,200,250,50,50)
 }
}

function mousePressed(){
 var d = dist(mouseX,mouseY,200,250)
 if (d < 25){
   resetGame();
 }
 console.log(d)
}

function resetGame(){
  gameState = "Play"
  score=0
  pipes=[]
  bird.y=200;
}
