let slider;
let input;
let button;
let myString;
let sel;
let itemSelected;
let grayscaleValue;
let gameState = 1;
let smileyFace;
let time;
let positionX;
let speedX;
let positionY;
let speedY;
let imagPositionX;
let imagPositionY;
let imagSpeedX;
let imagSpeedY;
let value1 = 0;
let value2 = 0;
let value3 = 0;
// let inconsolata;


function preload() {
  smileyFace = loadImage('./images/smileyface.png');
  // inconsolata = loadFont('assets/')
}

function setup() {
  // put setup code here
  createCanvas(1000,600);

  input = createInput();
  input.position(width/2 - input.width/2, height/2-50);

  button = createButton('Submit!');
  button.position(input.x + input.width, height/2-50);
  button.mousePressed(buttonFunction);


  myString = '';
  grayscaleValue = 150;
  background(grayscaleValue);

  positionX = 100;
  speedX = random(-9,9);
  positionY = 100;
  speedY = random(-9,9);
  imagPositionX = 100;
  imagPositionY = 100;
  imagSpeedX = random(-9,9);
  imagSpeedY = random(-9,9);



}


function draw() {
  if (gameState === 1) {
    background(grayscaleValue);
    textSize(40);
    textAlign(CENTER);
    fill(0);
    textStyle(BOLD);
    // time = millis();
    // rotateX(time/1000);
    // rotateZ(time/1234);


    for(let i=25; i<1000; i+=150){
      for(let j=25; j<800; j+=150){

      image(smileyFace,i,j,100,100);
      }
    }
    text('What is your name?',520,310);



  } else if (gameState === 2) {
    removeElements();
    background(grayscaleValue);
    grayscaleValue--;
    if (grayscaleValue <= 0) {
      grayscaleValue = 0;
      gameState = 3;
    }
  } else if (gameState === 3) {
    fill(255);
    textSize(25);
    textAlign(CENTER);
    text('Welcome '+ myString + '! Click on the smiley face below.', width/2, height/2);
    image(smileyFace, width/2, height/2+30, 50, 50);
  } else if (gameState === 4){
    background(0);
    textSize(20);
    fill(grayscaleValue);
    text('Tricked ya! ' +myString + ' ,click on the smiley face again! Shhh...', width/2, height/2);
    image(smileyFace, width/2, height/2+30, 50, 50);
    grayscaleValue--;
  }else if (gameState === 5){

  image(smileyFace,imagPositionX,imagPositionY,100,100);

         for (let i =100; i < 1300; i+=150) {

              fill(value1,value2,value3);
              ellipse(i,positionY,100,100);

              positionX = positionX + speedX;
              if(positionX >= 1300 - 50 || positionX <= 50){
                speedX = speedX * -1;
              }
              positionY = positionY + speedY;
              if(positionY >= 650 -50 || positionY <= 50){
                speedY = speedY * -1;
              }
              imagPositionX = imagPositionX + imagSpeedX;
              imagPositionY = imagPositionY + imagSpeedY;

              if (imagPositionX >= width || imagPositionX <= 0) {
                imagSpeedX = imagSpeedX * -1;
              }
              if (imagPositionY >= height || imagPositionY <= 0){
                imagSpeedY = imagSpeedY * -1;
              }

            }

            image(smileyFace, width/2, height/2+30, 50, 50);
            fill(125);
            text(myString + '! Click on the smiley face again.', width/2, height/2);

  }else if (gameState === 6){
    background(0);

    sel = createSelect();
    sel.position(width/2, height/2+20);
    sel.option('Yes');
    sel.option('No');

    gameState = 7;
  // }else if(gameState === 7){

  // }



} else if (gameState === 7){
  // sel.changed(mySelectEvent);
  let item = sel.value();
  background(0);
  text(myString + ', did you have fun?', width/2, height/2);
  text(myString + ' selected ' + item + '!',width/2,height/2 +70);

}
  console.log(grayscaleValue);
}


function buttonFunction() {
  gameState = 2;
  myString = input.value();
}

function mousePressed() {
  if (gameState=== 3) {
    grayscaleValue = 255;
    gameState=4;
  } else if(gameState===4){
    gameState=5;
  } else if(gameState===5){
    gameState=6;
  }

}

function mySelectEvent(){
 if(gameState === 6){
   let item = sel.value();
   text(myString + 'selected' + item + '!',150,150);
 }

}

// }
