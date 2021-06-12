const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){}
function setup(){
var canvas = createCanvas(700,600);
engine = Engine.create();
world = engine.world;

 bar1 = new Bars(600,595,1200,10);
 bar2 = new Bars(5,460,10,500);
 bar3 = new Bars(100,460,10,500);
 bar4 = new Bars(200,460,10,500);
 bar5 = new Bars(300,460,10,500);
 bar6 = new Bars(400,460,10,500);
 bar7 = new Bars(500,460,10,500);
 bar8 = new Bars(600,460,10,500);
 bar9 = new Bars(695,460,10,500);

 ball1 = new Fix(20,50,15);
 ball2 = new Fix(80,50,15);
 ball3 = new Fix(140,50,15);
 ball4 = new Fix(200,50,15);
 ball5 = new Fix(260,50,15);
 ball6 = new Fix(320,50,15);
 ball7 = new Fix(380,50,15);
 ball8 = new Fix(440,50,15);
 ball9 = new Fix(500,50,15);
 ball10 = new Fix(560,50,15);
 ball11 = new Fix(620,50,15);
 ball12 = new Fix(680,50,15);
 //ball13 = new Fix(480,50,15);

 ball14 = new Fix(20,100,15);
 ball15 = new Fix(80,100,15);
 ball16 = new Fix(140,100,15);
 ball17 = new Fix(200,100,15);
 ball18 = new Fix(260,100,15);
 ball19 = new Fix(320,100,15);
 ball20 = new Fix(380,100,15);
 ball21 = new Fix(440,100,15);
 ball22 = new Fix(500,100,15);
 ball23 = new Fix(560,100,15);
 ball24 = new Fix(620,100,15);
 ball25 = new Fix(680,100,15);
 
 ball26 = new Fix(20,150,15);
 ball27 = new Fix(80,150,15);
 ball28 = new Fix(140,150,15);
 ball29 = new Fix(200,150,15);
 ball30 = new Fix(260,150,15);
 ball31 = new Fix(320,150,15);
 ball32 = new Fix(380,150,15);
 ball33 = new Fix(440,150,15);
 ball34 = new Fix(500,150,15);
 ball35 = new Fix(560,150,15);
 ball36 = new Fix(620,150,15);
 ball37 = new Fix(680,150,15);

 mball1 = new Ball(50,20,15);
}
function draw(){
  background(255,75,78);
  Engine.update(engine);

  bar1.display();
  bar2.display();
  bar3.display();
  bar4.display();
  bar5.display();
  bar6.display();
  bar7.display();
  bar8.display();
  bar9.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();

  ball14.display();
  ball15.display();
  ball16.display();
  ball17.display();
  ball18.display();
  ball19.display();
  ball20.display();
  ball21.display();
  ball22.display();
  ball23.display();
  ball24.display();
  ball25.display();
 
  ball26.display();
  ball27.display();
  ball28.display();
  ball29.display();
  ball30.display();
  ball31.display();
  ball32.display();
  ball33.display();
  ball34.display();
  ball35.display();
  ball36.display();
  ball37.display();
 
  mball1.display();
}