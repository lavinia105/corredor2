var corredor, corredor_running, corredor_collided;
var pista, invisiblepista, invisiblepistad, invisiblepistae, pistaImage;

function preload() {
  corredor_running = loadAnimation("runner1.png", "runner2.png", "runner3.png");
  corredor_collided = loadImage("power.png");

  pistaImage = loadImage("path.png")
}

function setup() {
  createCanvas(300,600);
   
  //criar um sprite pista (chão)
  pista = createSprite(200,180,400,20);
  pista.addImage("pista",pistaImage);
  pista.x = pista.width /2;
  pista.velocityY = 4;

  //criar um sprite corredor
  corredor = createSprite(60,580,20,50);
  corredor.addAnimation("running", corredor_running);
  corredor.scale = 0.05;
  
  invisiblepistad = createSprite(15,400,10,400);
  invisiblepistae = createSprite(290,400,10,400);
  invisiblepista = createSprite(200,590,400,10);
  invisiblepistad.visible = false;
  invisiblepistae.visible = false;
  invisiblepista.visible = false;




}

function draw() {
  background(0);
  
  
  //pular quando a barra de espaço for pressionada
  

  if (keyIsDown(RIGHT_ARROW)){
    corredor.position.x = corredor.position.x +5;
  }
  if (keyIsDown(LEFT_ARROW)){
    corredor.position.x = corredor.position.x -5;
  }



  

  if (pista.y > 400) {
    pista.y = pista.width /2;
  }

  corredor.collide(invisiblepista);
  corredor.collide(invisiblepistad);
  corredor.collide(invisiblepistae);
  drawSprites();
}