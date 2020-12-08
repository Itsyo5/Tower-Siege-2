class ground{
    constructor(x,y,w,h){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.width=w
    this.height=h
    World.add(world,this.body)
 }
    
    display(){ 
    push()
    var pos=this.body.position
    rectMode(CENTER)
    fill(252, 185, 2)
    stroke("white")
    strokeWeight(2)
    rect(pos.x,pos.y,this.width,this.height)
    pop()
    }  
}