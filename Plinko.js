class Plinko{
    constructor(x,y){
    var options= {
        isStatic:true
    }
    this.body = Bodies.circle(x,y,23,options);
    this.radius = 23;
    this.body.label = 'plinko';
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("red");
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}