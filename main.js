var button1, button2;
var slider1;
var img1, img2;
var nowImageNumber;
var car;

function setup(){
  createCanvas(800, 600);
  background(0);
  button1 = createButton("黃于軒");
  button2 = createButton("楊鈞任");
  createP('');
  slider1 = createSlider(-PI, PI, 0, 0.01);
  /*img1 = loadImage("Huang.jpg");
  img2 = loadImage("Yang.jpg");*/
  button1.mousePressed();
  button2.mousePressed(DisplayImg2);
  /*image(img1, 0, 0);
  image(img1, 0, 0, 100, 100);
  image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
  console.log(img1);*/
  
  img1 = new Image();
  img1.image = document.getElementById("Huang");
  img1.number = 1;
  img1.button = button1;

  img2 = new Image();
  img2 = document.getElementById("Yang");
  img2.number = 2;
  img2.button = button2;
  // slider1.changed(slider1_Changed);

  car = new Car();
  
}

// function slider1_Changed(){
//   var angle1 = slider1.value();
//   console.log("angle1 = " + angle1);
//   rotate(angle1);
//   console.log('rotated');
// }

function draw(){
  background(0);
  translate(width/2, height/2);
  push();
  rotate(slider1.value());
  DisplayImg1();
  frameRate(5);
  //line(0, 0, 0, 100);
  pop();
  switch(nowImageNumber){
    case 1:
      img1.displayImg();
      break;
    case 2:
      img2.displayImg();
      break;
    default:
      break;
  }
}

/*function DisplayImg1(){
  //image(img1, 0, 0);
  //image(img1, 0, 0, 100, 100);
  //image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
  //console.log(img1);
  var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    
    ctx.drawImage(img1,-250,-250);
    console.log("drawImage");
}*/

function DisplayImg2(){
  console.log(img2);
}

function Car() {
  this.wheels = 4;
  this.color;
  this.pos = createVector(50, 50);

  
}

Car.prototype.show =function() {

}

function Image(){
  this.image;
  this.number;
  this.button;
  this.initializtion = function(){
    nowImageNumber = number;
    
  }
  this.displayImg = function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    
    ctx.drawImage(img1,-250,-250);
    console.log("drawImage");
  }
}
/*Image.prototype.initialization = function(){

}*/