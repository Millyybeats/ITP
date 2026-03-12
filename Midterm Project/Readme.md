## Midterm Doc 
1. I walked around my apartment looking for things to sketch that just contained circles and rectangles and I realized I could do my DJ mix board. four circles for the jog wheels, 7 rectangles for the faders and mixers, and 1 triangle for the power button.
2. to start phase 2, I copied the code that creates the 150 x 150 canvas and draws the music note. I then deleted all of the elements that created the note and started designing my DJ Board. The code for this was 
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
2. this took me a long time because at first I wasn't thinking about how this is just a graph and the x, y values for each shape are the coordinates. I started off by randomly changing values, but then changed to be perfectly fit to the "graph". It is still not perfectly on grid, but it is close enough/ 
3. For phase 3, I kept my code that drew my DJ Board and added the code that was provided in the midterm read me that contained
function drawObject(x, y, s) {
push();//
translate(x, y);
scale(s);
pop;
}
3. this drew my DJ Board twice one below the other.
4. For phase 4, I kept everything from the previous phases but I had to figure out how to draw the columns/rows and figure out how to have it so whenever I change the amount of colums/rows it would print the image for however many times I changed that value. First was just creating those rows/colums by using let cols = 5; // # of columns, and let rows = 5; // # of rows. NOW is where I had use chat gpt to help explain the instructions in more detail. That mixed in with codes from code along 04 and 05 got it so that it reprints the image based on how many rows and columns I make, giving me the final code. 
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

5. Now whenever I change the "5" for the cols/rows I get as many DJ Boards as that #. (idk if I explained that well, but it works!)

5. CHAT GPT CONVO
! [image 1](Screenshot 2026-03-11 at 8.33.36 PM.png)
! [image 2](Screenshot 2026-03-11 at 8.33.55 PM.png)
! [image 3](Screenshot 2026-03-11 at 8.33.50 PM.png)