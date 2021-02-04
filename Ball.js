class Ball{
    constructor(x,y,radius){
    var options= {
        isStatic:false,
        restitution:0.4
    }
    this.body = Bodies.circle(x,y,2,options);
    this.radius = 12;
    this.score = 0;
    this.body.label = 'particle';
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}