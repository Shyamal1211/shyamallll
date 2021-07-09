const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob,bob1,bob2,bob3,bob4;
var Rope,rope1,rope2,rope3,rope4;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

Rope=new rope(bob,roof,-80,0);

var bob1_option={
	restitution:0.5
}

bob1=Bodies.circle(310,50,30,bob_option);
	World.add(world,bob1)
	var bob_option={
		restitution:0.8
	}
	bob=Bodies.circle(300,50,30,bob1_option);
	World.add(world,bob)
	
	var bob3_option={
		restitution:0.7
	}
	bob3=Bodies.circle(340,50,30,bob3_option);
	World.add(world,bob3)
	var bob2_option={
		restitution:0.7
	}
	bob2=Bodies.circle(330,50,30,bob3_option);
	World.add(world,bob2)
	var bob4_option={
		restitution:0.9
	}
	bob4=Bodies.circle(350,50,30,bob4_option);
	World.add(world,bob4)
	Engine.run(engine);
	
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
Rope.display();
  
  //create ellipse shape for multiple bobs here
ellipse(bob.position.x,bob.position.y,30)
ellipse(bob1.position.x,bob1.position.y,30)
ellipse(bob2.position.x,bob2.position.y,30)
ellipse(bob3.position.x,bob3.position.y,30)
ellipse(bob4.position.x,bob4.position.y,30)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode(UP_ARROW)){
		Matter.Body.applyForce(bob,{x:-0.5,y:0},{x:0,y:0});
	}
}