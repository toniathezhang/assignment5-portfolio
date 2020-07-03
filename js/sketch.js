let cnv;
let time = 0
let notepad = document.getElementById("content-container")
console.log(notepad.style)
var screenW = notepad.offsetWidth //screen Width
var screenH = notepad.offsetHeight //screen Height
console.log(screenH, screenW)
console.log("p5js loaded")

function setup() {
    cnv = createCanvas(screenW, screenH);
    cnv.parent('sketch-holder');
    setInterval(function(){
        clear()
    }, 3000);
}
  
  function draw() {
        noStroke();
        fill(216,191,216,70);
        ellipse(mouseX,mouseY,25,25);
        // setInterval(clear(), 5000);
  }

  function keyPressed() {
    if (keyCode === ENTER) {
      clear();
    }
}

function windowResized() {
    screenW = notepad.offsetWidth //screen Width
    screenH = notepad.offsetHeight //screen Height
    if(screenW < 500){ 
        resizeCanvas(0,0);
    }
    else{
        resizeCanvas(screenW, screenH);
    }
}
