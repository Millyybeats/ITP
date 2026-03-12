## Phase4 CODE
function setup() {
createCanvas(400, 400); 
noStroke(); 
}
function drawObject(x, y, s) {
push();//
translate(x, y);
scale(s);
//DJ BOARD
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
pop();//
}
function draw() {
//GRID SIZE
let cols = 5; // # of columns
let rows = 5; // # of rows
let canvasHeight = height / cols; //divides canvas into equal sizes (cols)
let canvasWidth = width / rows; //divides canvas into equal sizes (rows)
// Scale
let s = min(canvasWidth, canvasHeight) / 150; //DJ BOARD SIZE 150
// NEST LOOPS FROM CODE ALONG 04 + 05 cols vs rows
for (let i = 0; i < cols; i++) { 
for (let j = 0; j < rows; j++) {
let x = i * canvasWidth; 
let y = j * canvasHeight;
drawObject(x, y, s);
    }
  }
}