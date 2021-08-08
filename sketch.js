
var Sprite1, Sprite2, Sprite3, Sprite4;
var movingSprite;
var music;

function preload(){
music=loadSound("music.mp3");
}

function setup(){
    
    createCanvas(800,600);

    

    movingSprite=createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;

   
    Sprite1=createSprite(100,580,180,30);
    Sprite1.shapeColor="red";

    Sprite2=createSprite(300,580,180,30);
    Sprite2.shapeColor="green";

    Sprite3=createSprite(500,580,180,30);
    Sprite3.shapeColor="blue";

    Sprite4=createSprite(700,580,180,30);
    Sprite4.shapeColor="yellow";

    

}

function draw() {
    background(rgb(10,10,10))
   
    if(movingSprite.x<0){
      music.stop()
        movingSprite.velocityX=3
    }else if(movingSprite.x>800){
      music.stop()
        movingSprite.velocityX=-3
    }
   
  if(movingSprite.isTouching(Sprite4)){
    music.play()
    movingSprite.shapeColor="yellow";
    movingSprite.bounceOff(Sprite4);
    
  }
  
  else if(movingSprite.isTouching(Sprite3)){
    music.stop()
    movingSprite.shapeColor="blue";
    bounceOff(movingSprite,Sprite3)
   
  }
    
  else if(movingSprite.isTouching(Sprite2)){
    music.stop()
    movingSprite.shapeColor="green";
    bounceOff(movingSprite,Sprite2)
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
  }
  
  else if(movingSprite.isTouching(Sprite1)){
    music.stop()
    movingSprite.shapeColor="red";
    movingSprite.bounceOff(Sprite1)
  }

  if (movingSprite.y<0){
    music.stop()
    movingSprite.velocityY=3
  }

  
   
    drawSprites()
}
