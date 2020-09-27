
var fixedrext, movrect
function setup() {
  createCanvas(400,400);
  fixedrext=createSprite(200 ,200, 50, 100);
  fixedrext.shapeColor="blue";
  movrect=createSprite(390,200,100,50);
  movrect.shapeColor="red"
}

function draw() {
  background(26,26,26);  
  movrect.x=mouseX;
  movrect.y=mouseY;
  console.log(movrect.x-fixedrext.x);
  console.log("distance");
  console.log(fixedrext.width/2+movrect.width/2);
  if(movrect.x-fixedrext.x < fixedrext.width/2+movrect.width/2 && 
    fixedrext.x-movrect.x< fixedrext.width/2+movrect.width/2 &&
    movrect.y-fixedrext.y < fixedrext.height/2+movrect.height/2 && 
    fixedrext.y-movrect.y< fixedrext.height/2+movrect.height/2){
      movrect.shapeColor="green";
      fixedrext.shapeColor="yellow";
  }
    else  
        {
          movrect.shapeColor="red";
          fixedrext.shapeColor="blue"
        }
  drawSprites();
}