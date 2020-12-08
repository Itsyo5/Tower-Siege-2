class polygon{
    constructor(x,y,r){
    var options={
    isStatic:false,
    restitution:1,
    density:0.02,
    friction:1.0
  }

    this.body=Bodies.circle(x,y,r,options)
    this.radius=r
    this.image=loadImage("polygon.png")
    World.add(world,this.body)
 }
    
    display(){
    push()
    var pos=this.body.position
    ellipse(pos.x,pos.y,this.radius,this.radius)
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,80,80)
    pop()
    }   
 }