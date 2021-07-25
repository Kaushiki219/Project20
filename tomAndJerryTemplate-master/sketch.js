var backgroundimg, background
var cat1, mouse1, cat2, mouse2
var cat, mouse

function preload() {
    //load the images here
    backgroundimg = loadImage("background.png");
    cat1 = loadAnimation("cat1.png");
    mouse1 = loadAnimation("mouse2.png");
    cat2 = loadAnimation("cat2.png , cat3.png , cat4.png");
    mouse2 = loadAnimation("mouse1.png , mouse3.png , mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background.addImage(backgroundimg);
    mouse = createSprite(50, 500, 10, 10);
    mouse.addAnimation(mouse1 , mouse2);
    cat = createSprite(800, 500, 20, 20);
    cat.addAnimation(cat1 , cat2);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      cat.addAnimation(cat1);
      mouse.addAnimation(mouse1);
      cat.velocityX = 0;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouse2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;
    
    }

    if(keyCode === RIGHT_ARROW){
        cat.addAnimation("catRunning" , cat2);
        cat.changeAnimation("catRunning");
        cat.velocityX = -3;
    }

}
