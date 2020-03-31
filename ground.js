//create the class for the ground
class Ground
{
  //create the constructor function
    constructor(x,y,w,h) 
    {
      var options = 
      {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }

    //create the display function
    display()
    {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };