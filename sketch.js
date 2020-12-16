var hr,min,sec
function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
  
}

function draw() {
  background("#FAA86A"); 
  translate (400,400)
  rotate(-90) 
  hr= hour();
  min=minute();
  sec=second ();

  secAngle=map (sec,0,60,0,360);
  minAngle= map (min,0,60,0,360);
  hrAngle= map(hr%12,0,12,0,360);
  stroke ("red");
  strokeWeight(5);

  

  push ();
  rotate(secAngle)
  line (0,0,100,0)
  pop ()
  push();
  stroke("brown")
  rotate (minAngle);
  line(0,0,100,0)
  pop ();
  push();
  stroke("blue")
  rotate(hrAngle);
  line (0,0,100,0);
  pop();
  stroke(255,0,255);
  point(0,0)
  strokeWeight(10);
  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hrAngle);
}