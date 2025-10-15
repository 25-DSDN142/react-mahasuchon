// ----=  HANDS  =----




let oldX;
let oldX2;
let tempTimer = 1;
let delayBetweenFrames = 26;

let handswitch = 1;

let locationA = [];


let locationB = [];

let updated = false;


/* load images here */
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}



function drawInteraction(faces, hands) {
  // hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    //console.log(hand);
    if (showKeypoints) {
      drawConnections(hand)
    }

    // This is how to load in the x and y of a point on the hand.
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;

    //who cares. just import everything
      let wristX = hand.wrist.x;
      let wristY = hand.wrist.y;
      let wristZ = hand.wrist.z3D;

      // Thumb
      let thumbCmcX = hand.thumb_cmc.x;
      let thumbCmcY = hand.thumb_cmc.y;
      let thumbCmcZ = hand.thumb_cmc.z3D;

      let thumbMcpX = hand.thumb_mcp.x;
      let thumbMcpY = hand.thumb_mcp.y;
      let thumbMcpZ = hand.thumb_mcp.z3D;

      let thumbIpX = hand.thumb_ip.x;
      let thumbIpY = hand.thumb_ip.y;
      let thumbIpZ = hand.thumb_ip.z3D;

      let thumbTipX = hand.thumb_tip.x;
      let thumbTipY = hand.thumb_tip.y;
      let thumbTipZ = hand.thumb_tip.z3D;

      // Index finger
      let indexFingerMcpX = hand.index_finger_mcp.x;
      let indexFingerMcpY = hand.index_finger_mcp.y;
      let indexFingerMcpZ = hand.index_finger_mcp.z3D;

      let indexFingerPipX = hand.index_finger_pip.x;
      let indexFingerPipY = hand.index_finger_pip.y;
      let indexFingerPipZ = hand.index_finger_pip.z3D;

      let indexFingerDipX = hand.index_finger_dip.x;
      let indexFingerDipY = hand.index_finger_dip.y;
      let indexFingerDipZ = hand.index_finger_dip.z3D;


      let indexFingerTipZ = hand.index_finger_tip.z3D;

      // Middle finger
      let middleFingerMcpX = hand.middle_finger_mcp.x;
      let middleFingerMcpY = hand.middle_finger_mcp.y;
      let middleFingerMcpZ = hand.middle_finger_mcp.z;

      let middleFingerPipX = hand.middle_finger_pip.x;
      let middleFingerPipY = hand.middle_finger_pip.y;
      let middleFingerPipZ = hand.middle_finger_pip.z;

      let middleFingerDipX = hand.middle_finger_dip.x;
      let middleFingerDipY = hand.middle_finger_dip.y;
      let middleFingerDipZ = hand.middle_finger_dip.z;

      let middleFingerTipX = hand.middle_finger_tip.x;
      let middleFingerTipY = hand.middle_finger_tip.y;
      let middleFingerTipZ = hand.middle_finger_tip.z;

      // Ring finger
      let ringFingerMcpX = hand.ring_finger_mcp.x;
      let ringFingerMcpY = hand.ring_finger_mcp.y;
      let ringFingerMcpZ = hand.ring_finger_mcp.z;

      let ringFingerPipX = hand.ring_finger_pip.x;
      let ringFingerPipY = hand.ring_finger_pip.y;
      let ringFingerPipZ = hand.ring_finger_pip.z;

      let ringFingerDipX = hand.ring_finger_dip.x;
      let ringFingerDipY = hand.ring_finger_dip.y;
      let ringFingerDipZ = hand.ring_finger_dip.z;

      let ringFingerTipX = hand.ring_finger_tip.x;
      let ringFingerTipY = hand.ring_finger_tip.y;
      let ringFingerTipZ = hand.ring_finger_tip.z;

      // Pinky finger
      let pinkyFingerMcpX = hand.pinky_finger_mcp.x;
      let pinkyFingerMcpY = hand.pinky_finger_mcp.y;
      let pinkyFingerMcpZ = hand.pinky_finger_mcp.z;

      let pinkyFingerPipX = hand.pinky_finger_pip.x;
      let pinkyFingerPipY = hand.pinky_finger_pip.y;
      let pinkyFingerPipZ = hand.pinky_finger_pip.z;

      let pinkyFingerDipX = hand.pinky_finger_dip.x;
      let pinkyFingerDipY = hand.pinky_finger_dip.y;
      let pinkyFingerDipZ = hand.pinky_finger_dip.z;

      let pinkyFingerTipX = hand.pinky_finger_tip.x;
      let pinkyFingerTipY = hand.pinky_finger_tip.y;
      let pinkyFingerTipZ = hand.pinky_finger_tip.z;

      //  let pinkyFingerTipX = hand.pinky_finger_tip.x;
      //  let pinkyFingerTipY = hand.pinky_finger_tip.y;

    /*
    Start drawing on the hands here
    */
    
    

    //let delayBetweenFrames = 26; //THIS MUST BE AN EVEN NUMBER!!!!!!!!!!!!
    
    /*if (tempTimer < delayBetweenFrames){ 
      tempTimer ++;
    } else {
      tempTimer = 0;
    }*/

    /*if (tempTimer === (delayBetweenFrames-1)){
          temp.push({
            xPos: indexFingerTipX,
            yPos: indexFingerTipY,
            zPos: indexFingerTipZhh
          });
    }*/

/*
    if (handswitch === 1){
      locationA.push({
        xPosIndexTip: indexFingerTipX,
        yPosIndexTip: indexFingerTipY,
        zPosIndexTip: indexFingerTipZ,
        lifespan: 100
      });
      handswitch = 2
    } else if (handswitch = 2) {
      locationB.push({
        xPosIndexTip: indexFingerTipX,
        yPosIndexTip: indexFingerTipY,
        zPosIndexTip: indexFingerTipZ,
        lifespan: 100
      });
      handswitch = 1
    }*/




      locationA.push({
        xPosIndexTip: indexFingerTipX,
        yPosIndexTip: indexFingerTipY,
        zPosIndexTip: indexFingerTipZ,
        lifespan: 250
      });


    updated = true


//alternate way of limiting frame rate. this limit depends on your device!!!

function drawTrail(prev,cur) {                     //draws the trail
  if (prev){
    fill(0,255,0,5*prev.lifespan)
    //rect(prev.xPosIndexTip, prev.yPosIndexTip, 100, 100);
    strokeWeight(20);
    stroke(255,255,0,cur.lifespan);
    line(prev.xPosIndexTip, prev.yPosIndexTip, cur.xPosIndexTip, cur.yPosIndexTip)
  }
}

    if (updated === true){     // if the points have been updated, run this. basically, every updated frame this runs. 
      if (frameCount % 3 === 1){  // every 6 frames, run this once
          for (let i=0;i<locationA.length;i++) {      //go through each entry in locationA
            let cur = locationA[i];
            let prev = locationA[i-10];               //change this value to change which past value that the trail goes to
            //noStroke;
            //strokeWeight(0);
              
            //fill(255,255,255,cur.lifespan)  //change colour to white, p.lifespan accesses lifespan in each entry
            
            //rect(cur.xPosIndexTip, cur.yPosIndexTip, 50, 50);
            cur.yPosIndexTip -= 2;
            cur.lifespan -= 10;
            //updated = false;

            drawTrail(prev,cur)
        }
      } else {

          for (let i=0;i<locationA.length;i++) {      //go through each entry in locationA
            let cur = locationA[i];
            let prev = locationA[i-10];
            //noStroke;
            //strokeWeight(0);
              
            //fill(255,255,255,cur.lifespan)  //change colour to white, p.lifespan accesses lifespan in each entry
            
            //rect(cur.xPosIndexTip, cur.yPosIndexTip, 50, 50);
            //cur.yPosIndexTip -= 2;
            cur.lifespan -= 10;

            //updated = false;

            drawTrail(prev,cur)
        }
      
      }

    }

  
    
 
    if (updated === false){      // every not updated frame this runs. still draws elements on screen even if the points have not been updated
      for (let p of locationA) {      //go through each entry in locationA
        noStroke;
        strokeWeight(0);

        fill(255,255,255,p.lifespan)  //change colour to white, p.lifespan accesses lifespan in each entry
        
        rect(p.xPosIndexTip, p.yPosIndexTip, 50, 50);
      }
    }
















    if (locationA.length > 100) {   //limit of 100 entries
      locationA.shift();
    }



    //fill(225, 225, 0);
    //ellipse(indexFingerTipX, indexFingerTipY, 30, 30);
    //ellipse(pinkyFingerTipX, pinkyFingerTipY, 30, 30);
    //text(frameCount,255,255)
    //text(tempTimer,255,355)

    /*Because of how the points dont instantly update, this is a solution i've come up with.

    checks current update's position from array, then checks position from however many updates ago. if they are the same, you know the points havent been updated yet.
    
    unfortunately this results in a very low frame rate output*/

    /*
    for (i = 2; i < locationA.length;i++){
      let currentUpdate = locationA[i].xPosIndexTip;
      let prev1Update = locationA[i-1].xPosIndexTip;
      let prev2Update = locationA[i-2].xPosIndexTip;

      console.log("current is " + currentUpdate + "| prev1 is " + prev1Update +  " | prev2 update is " + prev2Update)
      if (currentUpdate === prev1Update){ //or prev 1 / prev 2 update 
        updated = false;
      } else {
        updated = true;
      }
    }
*/



    /*strokeWeight(0)
    for (i=1;i<76;i++){ //old "bar" style
      console.log(pinkyFingerTipY)

      fill(i*3+((pinkyFingerTipY/768)*255))
      
      console.log((-i*2)*(pinkyFingerTipY/700)+700)
      rect(0,(10*-i)+768,1920,5)
    }
    fill((pinkyFingerDipY/768)*255)
    rect(0,pinkyFingerTipY,1920,50)

    */

    //rect(thumbTipX,thumbTipY,50,50);

    // drawPoints(hand)

    //fingerPuppet(indexFingerTipX, indexFingerTipY);

    //chameleonHandPuppet(hand)

    /*
    Stop drawing on the hands here
    */
  }
  // You can make addtional elements here, but keep the hand drawing inside the for loop. 
  //------------------------------------------------------
}



























function ghostSelf(){
  push();
  ellipse(pinkyFingerTipX, pinkyFingerTipY, 30, 30);
  pop();
}


function fingerPuppet(x, y) {
  fill(255, 38, 219) // pink
  ellipse(x, y, 100, 20)
  ellipse(x, y, 20, 100)

  fill(255, 252, 48) // yellow
  ellipse(x, y, 20) // draw center 

}


function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}

function chameleonHandPuppet(hand) {
  // Find the index finger tip and thumb tip
  // let finger = hand.index_finger_tip;

  let finger = hand.middle_finger_tip; // this finger now contains the x and y infomation! you can access it by using finger.x 
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(0);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

  let indexFingerTipX = hand.index_finger_tip.x;
  let indexFingerTipY = hand.index_finger_tip.y;
  fill(0)
  circle(indexFingerTipX, indexFingerTipY, 20);

}

function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {
  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 10);
  }
  pop()

}