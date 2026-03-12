Phase 2 CODE
function setup() {
createCanvas(150, 150); 
noStroke(); 
}
function draw() {
//Left jog wheel
fill(0);
ellipse(30, 90, 35, 35);
fill(150);
ellipse(30, 90, 10, 10);
//Right Jog wheel
fill(0);
ellipse(120, 90, 35, 35);
fill(150);
ellipse(120, 90, 10, 10);
//Left fader & Right fader Volume
fill(0);
rect(85, 75, 3, 30);
rect(65, 75, 3, 30);
fill(120);
rect(61, 80, 10 ,5);
fill(120);
rect(81, 90, 10 ,5);
//Bottom Track Fader
fill(0)
rect(55, 120, 40, 5);
fill(150);
rect(75, 115, 10, 15);
//Power button Top right 
fill (0);
triangle(125, 60, 135, 60, 130, 50); 
//OUTLINE FOR BOARD
rect(10, 139, 130, 1);
rect(139, 40, 1, 100);
rect(10, 40, 1, 100);
rect(10, 40, 130, 1);
}