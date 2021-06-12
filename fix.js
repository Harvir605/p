class Fix{
    constructor(x, y,r) {
        var options = {
          isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill ("cyan")
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}