  // ----=  HANDS  =----

  //ensure these are the same as in 0_displaySettings.js


  canvasWidth = 1280;
  canvasHeight = 920;


  let oldX;
  let oldX2;
  let tempTimer = 1;
  let delayBetweenFrames = 26;

  let handswitch = 1;

  let locationA = [];

  let locationB = [];

  let updated = false;

  alreadyUpdated = false;

  let timeFactor = 1; //max and default is 1. changes how fast the lines move


  /* load images here */
  function prepareInteraction() {
    //bgImage = loadImage('/images/background.png');
    bgImg = loadImage("wallpaper.png")
  }




  function drawAll(cur,prev){
    //rect(cur.xPosIndexTip, cur.yPosIndexTip,50,50)

    //dynamic stuff (affected by user)
    
    strokeWeight(20)

    stroke(0)

    line(cur.xPosIndexTip, cur.yPosIndexTip, cur.xPosThumbMcp, cur.yPosThumbMcp)

    line(cur.xPosThumbMcp, cur.yPosThumbMcp,cur.xPosThumbTip, cur.yPosThumbTip)

    strokeWeight(10)

    stroke(cur.lifespan,0,255)

    line(cur.xPosIndexTip, cur.yPosIndexTip, cur.xPosThumbMcp, cur.yPosThumbMcp)

    line(cur.xPosThumbMcp, cur.yPosThumbMcp,cur.xPosThumbTip, cur.yPosThumbTip)

    cur.lifespan -= 1;

  }


  function drawAllB(cur,prev){
    //rect(cur.xPosIndexTip, cur.yPosIndexTip,50,50)


    //env stuff! (unaffected stuff, but not moving)

    line(cur.xLeftBottom, cur.yLeftBottom, cur.xRightBottom, cur.yLeftBottom)

  }







  function drawInteraction(faces, hands) {
    // hands part
    // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.

    oncePerFrame = true;

    image(bgImg,0,0,1280,960)




    for (let i = 0; i < hands.length; i++) {
      let hand = hands[i];
      //console.log(hand);
      if (showKeypoints) {
        drawConnections(hand)
      }

      // This is how to load in the x and y of a point on the hand.
      let indexFingerTipX = hand.index_finger_tip.x;
      let indexFingerTipY = hand.index_finger_tip.y;

      //import everything for development

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




  updated = true

  if (updated === true){     // if the points have been updated, run this. basically, every updated frame this runs. 
    if (frameCount % 15 === 1){  // every 6 frames, run this once
      locationA.push({
        xPosIndexTip: indexFingerTipX,
        yPosIndexTip: indexFingerTipY,
        zPosIndexTip: indexFingerTipZ,
        lifespan: 255,

        xPosThumbMcp: thumbMcpX,
        yPosThumbMcp: thumbMcpY,
        zPosThumbMcp: thumbMcpZ,

        xPosThumbTip: thumbTipX,
        yPosThumbTip: thumbTipY,
        zPosThumbTip: thumbTipZ,

      });



    } else 
      {

    }
  }

  /*

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

  




  //this stuff only runs once per frame, not per hand every frame











  if (frameCount % 15 === 1){
    locationB.push({
    xLeftBottom: 0,
    yLeftBottom: canvasHeight,

    xRightBottom: canvasWidth,
    yRightBottom: canvasHeight

  });
  }






      for (let i = 0; i < locationA.length; i++) {
      let cur = locationA[i];

      //if yposindextip is on the bottom half of the screen

      cur.yPosIndexTip = ((cur.yPosIndexTip - canvasHeight/2) * (0.98*timeFactor) ) + (canvasHeight/2)

      cur.yPosThumbMcp = ((cur.yPosThumbMcp - canvasHeight/2) * (0.98*timeFactor) ) + (canvasHeight/2)

      cur.yPosThumbTip = ((cur.yPosThumbTip - canvasHeight/2) * (0.98*timeFactor) ) + (canvasHeight/2)


      cur.xPosIndexTip = ((cur.xPosIndexTip - canvasWidth/2) * (0.98*timeFactor) ) + (canvasWidth/2)

      cur.xPosThumbMcp = ((cur.xPosThumbMcp - canvasWidth/2) * (0.98*timeFactor) ) + (canvasWidth/2)

      cur.xPosThumbTip = ((cur.xPosThumbTip - canvasWidth/2) * (0.98*timeFactor) ) + (canvasWidth/2)

      //cur.yPosIndexTip -= 5;
      //cur.yPosThumbMcp -= 5;
      //cur.yPosThumbTip -= 5;

      canvasHeight;
      canvasWidth;
    }


    for (let i = 0; i < locationB.length; i++) {
      let cur = locationB[i];

      //if yposindextip is on the bottom half of the screen

      cur.yLeftBottom = ((cur.yLeftBottom - canvasHeight/2) * (0.98*timeFactor) ) + (canvasHeight/2)

      cur.yRightBottom = ((cur.yRightBottom - canvasHeight/2) * (0.98*timeFactor) ) + (canvasHeight/2)


      cur.xLeftBottom = ((cur.xLeftBottom - canvasWidth/2) * (0.98*timeFactor) ) + (canvasWidth/2)

      cur.xRightBottom = ((cur.xRightBottom - canvasWidth/2) * (0.98*timeFactor) ) + (canvasWidth/2)



      //cur.yPosIndexTip -= 5;
      //cur.yPosThumbMcp -= 5;
      //cur.yPosThumbTip -= 5;

      canvasHeight;
      canvasWidth;
    }









    for (let i=0;i<locationA.length;i++) {      //go through each entry in locationA

          let cur = locationA[i];
          let prev = locationA[i-10];               //change this value to change which past value that the trail goes to

          drawAll(cur,prev)
      }



    for (let i=0;i<locationB.length;i++) {      //go through each entry in locationB

          let cur = locationB[i];
          let prev = locationB[i-10];               //change this value to change which past value that the trail goes to


          drawAllB(cur,prev)
      }





      if (locationA.length > 10) {   //limit of 100 entries
        locationA.shift();
      }







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