//create the box class
class Box {

  //create the constructor function
  constructor(x, y, width, height) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }

  //create the display function
  display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);


    fill("green");
    rect(100, 100, this.width, this.height);
    pop();
  }

  

}