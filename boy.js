class Boy
{
    constructor(x,y,width,height)
       {
           var options={
           'friction':1.0,
           'density':1.2,
           'isStatic':true
                       }
              this.body=Bodies.rectangle(x,y,width,height,options);
              this.x=x;
              this.y=y;
              this.width=width;
              this.height=height;
              this.image=loadImage("boy.png");

              World.add(world,this.body);
       }
        display()
        {
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,this.x,this.y, this.width, this.height);
            pop();
    
        }
}