class Bob
{
    constructor(x,y)
    {
    var options={
           isStatic:true,
			restitution:1,
			friction:0.7,
			density:0.8
    }
    //this.r=r;
    this.body=Bodies.circle(x,y,25,options);
    //console.log(this.body);
		World.add(world, this.body);
    }
display()
{
    
    fill(rgb(255,0,255));
    ellipse(this.body.position.x,this.body.position.y,50,50);
}
}
