class box{
  constructor(x,y){
  var options={
  isStatic:false,
  restitution : 0.2,
  friction : 1.2,
   density : 0.01
  
  }
  
  this.body=Bodies.rectangle(x,y,45,55,options)
  this.width=45
  this.height=55
  World.add(world,this.body)
  stroke("white")
  strokeWeight(4)
 }
  
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity--;
        tint(255,this.Visiblity);
        pop();
    }
  }
}