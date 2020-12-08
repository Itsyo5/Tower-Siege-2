class chain{
    constructor(bodyA,pointB){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.01,
    length:30
    }
    
    this.pointB=pointB
    this.chain= Constraint.create(options)
    World.add(world,this.chain)
    }
    display(){
    if(this.chain.bodyA){
    push()
    var pA=this.chain.bodyA.position
    var pB=this.pointB
    stroke(96, 255, 160)
    strokeWeight(7)
    line(pA.x,pA.y,pB.x,pB.y)
    pop()
       }
     }
    
    fly(){
    this.chain.bodyA=null
     }
    
    attach(body){
    this.chain.bodyA=body
     }
   }