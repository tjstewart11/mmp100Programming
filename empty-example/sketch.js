var rectX = 300;
var rectY = 300;
var r, g, b = 100;

function setup() {
    
  // put setup code here
    createCanvas(500,500);
    background ("#A1E2DC");
    
    //donut
    fill("#E6AA68");
    noStroke();
    ellipse(250,250,400,400);

    // icing
    fill("#FAFDF5");
    noStroke();
    ellipse(250,250,320,320);
     // text
    textSize(20);
    textFont("Helvetica");
    text('snack time',10,30);

    //hole
    fill("#A1E2DC");
    noStroke();
    ellipse(250,250,150,150);
}

function draw() {
  // put drawing code here


}
function mousePressed() {
    // sprinkles
    fill(r, g, b);
    noStroke();
    //rect(155,155,10,15);
    rect(rectX, rectY, 25, 10);
    rectX = random(200,1000);
    rectY = random (200,1000);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    }



     