class Mango
{
    constructor(x,y,radius)
    {
        var options={isStatic:true,friction:1}
        this.body=Bodies.circle(x,y,radius,options);
              this.x=x;
              this.y=y;
              this.radius=radius;
              this.image=loadImage("mango.png");

              World.add(world,this.body);

    }
    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.x,this.y, this.radius, this.radius);
        pop();
    }
}