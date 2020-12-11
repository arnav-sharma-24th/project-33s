const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var Mouse

function setup(){
    canvas = createCanvas(windowWidth/2,windowHeight/1.5)
        engine = Engine.create () ;
        world = engine.world;
        
        
        
        let canvasmouse = Mouse.create(canvas.elt) ;
        canvasmouse.pixelRatio = pixelDensity () ;
        let options = {
        mouse: canvasmouse
        }
        mconstraint = MouseConstraint.create (engine, options) ;
        World.add (world, mConstraint) ;
            
}
function draw(){

    Engine.update(engine); 

}
function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY})
}
