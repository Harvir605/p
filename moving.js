class Ball{
    constructor(x, y,r) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
            
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        this.trajectry = []
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill (13,75,4)
        ellipse(0, 0, this.r, this.r);  
        pop();
        
      }
}