
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint= Matter.Constraint;

var c;
var b;
var s;
var t;
var ground,g;
var back;
var m,m2,m3,m4,m5,m6,m7,m8,m9;

function preload()
{
	back=loadImage("village back.jpg");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    b= new Boy(100,260,150,300);

	ground = new Ground(175,600,1500,20);

	t = new Tree(300,190,400,500);

	s = new Stone(100,500,20);

    m  = new Mango(275,110,40);
	m2 = new Mango(250,160,40);
	m3 = new Mango(300,150,40);
	m4 = new Mango(350,150,40);
	m5 = new Mango(325,100,40);
	m6 = new Mango(300,125,40);
	m7 = new Mango(380,170,40);
	m8 = new Mango(275,170,40);
	m9 = new Mango(350,120,40);
	
	c = new Chain(s.body,{x:150,y:450});

	Engine.run(engine);
  
}


function draw() {
  
    background(back)
	textSize(25);
	fill("red")
	text("Press Space to get a second Chance to Play!!",50 ,50);

	b.display();

	s.display();
	
	ground.display();

	t.display();

	m.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	m9.display();

	c.display();

	detectCollision(s,m);
	detectCollision(s,m2);
	detectCollision(s,m3);
	detectCollision(s,m4);
	detectCollision(s,m5);
	detectCollision(s,m6);
	detectCollision(s,m7);
	detectCollision(s,m8);
	detectCollision(s,m9); 

	t.depth = s.depth;
	s.depth = s.depth+1;

  drawSprites();

}
function mouseDragged()
{
    Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  c.released();
 //Matter.Body.applyForce(s.body,s.body.position,{x:50,y:-200});
}
function keyPressed()
{
	if(keyCode == 32)
	{
			Matter.Body.setPosition(s.body,{x:100,y:400});
			c.attach(s.body);
	}
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstone.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }