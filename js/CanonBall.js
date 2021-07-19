class CanonBall {
    constructor(x,y) {


        this.canonBallImg = loadImage("./assets/cannonball.png");

        var ball_options = {
            isStatc:true,
            restitution:0.8,
            friction:1,
            density:1
        }


        this.r = 40;
        this.body = Bodies.circle(x,y,this.r, ball_options);
        World.add(world, this.body)
    }

    display() {
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        
        imageMode(CENTER);
        image(this.canonBallImg,0, 0, this.r, this.r);
        pop();
    }

    shoot() {
            console.log("shootCall");
            var velocity = p5.Vector.fromAngle(cannon.angle)
            velocity.mult(20)
            Matter.Body.setStatic(this.body,false);
        Matter.Body.setVelocity(this.body, {x:50, y:-30});

    }


}