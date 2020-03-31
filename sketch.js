// namespace all the files
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//create all the variables
var engine, bodies;

var box1;
var gSlider;


function setup() {
    //create the canvas
    createCanvas(400, 400);

    //create our own engine and the world
    engine = Engine.create();
    world = engine.world;


    // create the slider 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);

    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200, 400, 400, 20);
}


function draw() {
    // Draw all the elements including the slider  
    background(51);

    //update the engine
    Engine.update(engine);

    //display the ground
    ground.display();


    //display the box
    if (box1 != null) {
        box1.display();
    }

    // This is the value of your gravity. 
    var fVal = gSlider.value();


}





function mousePressed() {
    //if (mouseY < 350) {
    // Every time a mouse press occures create a new box.

    //write the condition to reset the box
    if (box1 != null) {
        World.clear(world, true);
    }

    box1 = new Box(mouseX, mouseY, 20, 20);
    //}

}