const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
 createCanvas(1800, 700);

 engine = Engine.create();
 world = engine.world;

 ground=new ground(700,550,400,20)

 polygon1=new polygon(200,500,30)

 chain1=new chain(polygon1.body,{x:200,y:500})
//level 1
 b1=new box(550,ground.body.position.y - 50)
 b2=new box(600,ground.body.position.y - 50)
 b3=new box(650,ground.body.position.y - 50)
 b4=new box(700,ground.body.position.y - 50)
 b5=new box(750,ground.body.position.y - 50)
 b6=new box(800,ground.body.position.y - 50)
 b7=new box(850,ground.body.position.y - 50)
//level 2
 b8=new box(600,b1.body.position.y - 50)
 b9=new box(650,b1.body.position.y - 50)
 b10=new box(700,b1.body.position.y - 50)
 b11=new box(750,b1.body.position.y - 50)
 b12=new box(800,b1.body.position.y - 50)
//level 3
 b13=new box(650,b8.body.position.y - 50)
 b14=new box(700,b8.body.position.y - 50)
 b15=new box(750,b8.body.position.y - 50)
//top block
 b16=new box(700,b13.body.position.y - 50)

 Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  push()
  textSize(30)
  fill("cyan")
  stroke("white")
  strokeWeight(3)
  text("DRAG THE HEXAGONAL STONE AND RELEASE IT, TO LAUNCH IT TOWARDS THE BLOCKS",100,150)
  pop()

  ground.display()

  fill(255, 0, 110)
  b1.display();
  b2.display()
  b3.display()
  b4.display()
  b5.display()
  b6.display()
  b7.display()
  
  fill(255, 114, 182)
  b8.display()
  b9.display()
  b10.display()
  b11.display()
  b12.display()
  
  fill(255, 161, 226)
  b15.display()
  b13.display()
  b14.display()
  
  fill(255, 219, 235)
  b16.display()
  
  polygon1.display()
  chain1.display()

  drawSprites();
}

 function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
    }

 function mouseReleased(){
 chain1.fly()
   }

 function keyPressed(){
 if (keyCode === 32){
  chain1.attach(polygon1.body);
    }
  }