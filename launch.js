class launch {

    constructor(bodyA,pointB){

    var option = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
        }
    
    this.pointB = pointB
    this.launch = Constraint.create(option);
    World.add(world,this.launch);

    }  

    attach(body){

this.launch.bodyA = body;

    }

    fly(){

    this.launch.bodyA = null;
    }
    


    display(){

        if(this.launch.bodyA){
        
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x ,pointB.y)
        
        
        }
        
        
        }

    }
