var bullet1,bullet2,bullet3,bullet4;

var army_image,army1_image,army3_image,aagni_image,missileLauncher1_image,soldier_image,
soldier1_image,soldier2_image,chinnok_image,tank_image,tank2_image;
var army,army1,aagni,akash,missileLauncher1,soldier,soldier1,soldier2,chinnok,tank,tank2;
function preload(){
  army_image = loadImage("army.png");
  army1_image = loadImage("army1.png");
  army3_image = loadImage("army3.png");
  soldier_image = loadImage("soldier.png");
  soldier1_image = loadImage("soldier1.png");
  soldier2_image = loadImage("soldier2.png");
  aagni_image = loadImage("aagniMissile.png");
  missileLauncher1_image = loadImage("missileLauncher1.png");
  chinnok_image = loadImage("chinnok.png");
  tank_image = loadImage("tank.png");
  tank2_image = loadImage("tank2.png");

  sound1= loadSound("sound1.mp3");
  
}

function setup() {
  createCanvas(1366,645);
  bullet1 = createSprite(1400,1400,10,10);
  bullet2 = createSprite(1400,1400,10,10);
  bullet3 = createSprite(1400,1400,10,10);
  bullet4 = createSprite(1400,1400,10,10);
  
  army = createSprite (360,310,10,10);
  army.addImage(army_image);
  army.scale = 0.7;

  army1 = createSprite (400,370,10,10);
  army1.addImage(army1_image);
  army1.scale = 0.7;

  soldier1 = createSprite(300,250,10,10);
soldier1.addImage(soldier1_image);
soldier1.scale = 0.7;

soldier2 = createSprite(90,75,10,10);
soldier2.addImage(soldier2_image);
soldier2.scale = 0.3;
soldier2.visible = false;

soldier = createSprite(340,445,10,10);
soldier.addImage(soldier_image);
soldier.scale = 0.7;


  aagni = createSprite (60,315,10,10);
  aagni.addImage(aagni_image);
  aagni.scale = 0.9;

  army3 = createSprite (360,550,10,10);
  army3.addImage(army3_image);
  army3.scale = 0.5;

  missileLauncher1 = createSprite (117,425,10,10);
  missileLauncher1.addImage(missileLauncher1_image);
  missileLauncher1.scale = 0.9;

  chinnok = createSprite(10,15,10,10);
  chinnok.addImage(chinnok_image);
  chinnok.scale = 1.0;
  chinnok.velocityX = 2;

  tank = createSprite(240,190,10,10);
  tank.addImage(tank_image);
  tank.scale = 0.7;

  tank2 = createSprite(250,130,10,10);
  tank2.addImage(tank2_image);
  tank2.scale = 0.7;
}




function draw() {
  background(0);
  
  if (keyDown("UP_ARROW")){
    army.y=army.y-10;
    army1.y=army1.y-5;
  }

  if (keyDown("DOWN_ARROW")){
    army.y=army.y+10;
    army1.y=army1.y+5;
  }

  if (keyDown("LEFT_ARROW")){
    army.x=army.x-10;
    army1.x=army1.x-5;
  }

  if (keyDown("RIGHT_ARROW")){
    army.x=army.x+10;
    army1.x=army1.x+5;
  }
  edeges = createEdgeSprites();
  chinnok.bounceOff(edeges[0]);
  chinnok.bounceOff(edeges[1]);
  chinnok.bounceOff(edeges[2]);
  chinnok.bounceOff(edeges[3]);
  

  if (keyDown("SHIFT")){
    soldier2.visible = true;
  }

  else{
    soldier2.visible = false;
  }

  if(keyDown ("SPACE")){
    bullet1 = createSprite (350,210,40,10);
    bullet1.velocityX = 10;
    bullet1.shapeColor = "red";
  }








  drawSprites();
}