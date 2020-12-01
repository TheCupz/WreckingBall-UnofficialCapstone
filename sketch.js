const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
    createCanvas(3000,615);
    engine = Engine.create();
    world = engine.world;

    // making the bodies.
    ground = new Ground(600,600,1500,20);
    brick1 = new Brick(900,100,70,70);
    brick2 = new Brick(900,100,70,70);
    brick3 = new Brick(900,100,70,70);
    brick4 = new Brick(900,100,70,70);
    brick5 = new Brick(900,100,70,70);
    brick6 = new Brick(900,100,70,70);
    brick7 = new Brick(800,100,70,70);
    brick8 = new Brick(800,100,70,70);
    brick9 = new Brick(800,100,70,70);
    brick10 = new Brick(800,100,70,70);
    brick11 = new Brick(800,100,70,70);
    brick12 = new Brick(800,100,70,70);
    brick13 = new Brick(700,100,70,70);
    brick14 = new Brick(700,100,70,70);
    brick15 = new Brick(700,100,70,70);
    brick16 = new Brick(700,100,70,70);
    brick17 = new Brick(700,100,70,70);
    brick18 = new Brick(700,100,70,70);
    brick19 = new Brick(700,100,70,70);
    brick20 = new Brick(700,100,70,70);
    brick21 = new Brick(900,100,70,70);
    wreckingBall = new Ball(200,200,50)
    rope = new Rope(wreckingBall.body,{x:500,y:50});
 
    //Engine.run(engine);
} 

function draw() {
    background(180);
    Engine.update(engine);
    // displaying the bodies.
    ground.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();
    brick8.display();
    brick9.display();
    brick10.display();
    brick11.display();
    brick12.display();
    brick13.display();
    brick14.display();
    brick15.display();
    brick16.display();
    brick17.display();
    brick18.display();
    brick19.display();
    brick20.display();
    brick21.display();
    wreckingBall.display();
    rope.display();
}

 function mouseDragged(){
     Matter.Body.setPosition(wreckingBall.body,{x:mouseX,y:mouseY});
 }
 