class rope{
	constructor(bodyA,bodyB,pointA,pointB)
	{
this.pointA=pointA
this.pointB=pointB

var option={
	bodyA:bodyA,
	bodyB:bodyB,
	pointB:{x:this.pointA,y:this.pointB},

}
	//create rope constraint here
this.body=Matter.Constraint.create({
pointA:{x:200,y:20},
bodyB:bob,
pointB:{x:0,y:0},
length:100,
stiffness:0.3,
})
World.add(world,this.body)
	}


    //create display() here 
display(){
	var pointA=this.body.bodyA.position
	var pointB=this.body.bodyB.position
push();
	strokeWeight(2)
	stroke(255)
	line(pointA.x,pointA.y,pointB.x,pointB.y)
	pop()
}
}
