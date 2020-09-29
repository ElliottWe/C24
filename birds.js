class bird{
    constructor(x,y){
        var options ={
            'density':1.5,
            'friction':1.0,
            'restitution':0.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
    this.width = 50;
        this.height = 50;
        World.add(world,this.body)
    }
    display(){
        var movement = this.body.position;
        movement.x = mouseX;
        movement.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(movement.x,movement.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
};