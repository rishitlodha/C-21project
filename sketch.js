var canvas;
var music;
var rect1,rect2,rect3,rect4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1=createSprite(75,580,150,20);
    rect1.shapeColor="red";
    rect2=createSprite(235,580,150,20);
    rect2.shapeColor="blue";
    rect3 = createSprite(395,580,150,20);
    rect3.shapeColor="green";
    rect4 = createSprite(555,580,150,20);
    rect4.shapeColor="yellow";

    edges=createEdgeSprites();

    //create box sprite and give velocity
    box = createSprite(random(20,750),40,30,30);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

box.bounceOff(edges);
if (box.isTouching(rect1) && box.bounceOff(rect1)){
    box.shapeColor="red";
}

if (box.isTouching(rect2) && box.bounceOff(rect2)){
    box.shapeColor="blue";
}

if (box.isTouching(rect3) && box.bounceOff(rect3)){
    box.shapeColor="green";
}

if (box.isTouching(rect4) && box.bounceOff(rect4)){
    box.shapeColor="yellow";
}


    
      drawSprites();

}