  // ----=  HANDS  =----

  //ensure these are the same as in 0_displaySettings.js

  canvasWidth = 1280;
  canvasHeight = 920;

  let locationA = [];  // array of the hands

  let locationB = [];  // array of the ground lines

  let locationC = [];  //array of the sky lines

  let updated = false;


  let timeFactor = 0.99 ; //the closer to 1 this is, the slower the lines will move.

  spawnRate = 30; //once every X frames


  /* load images here */
  function prepareInteraction() {

    bgImg = loadImage("wallpaper.png")
  }

  function drawAll(cur){
    //rect(cur.xPosIndexTip, cur.yPosIndexTip,50,50)

    //dynamic stuff (affected by user)
    
    if (cur.lifespan > 1){
      strokeWeight(cur.lifespan*0.5)
    } else {
      strokeWeight(1)
    }

    stroke(350-(cur.lifespan*25.5),0,255)
    line(cur.xPosIndexTip, cur.yPosIndexTip, cur.xPosThumbMcp, cur.yPosThumbMcp)
    line(cur.xPosThumbMcp, cur.yPosThumbMcp,cur.xPosThumbTip, cur.yPosThumbTip)
    cur.lifespan -= (1/30);
  }


  function drawAllB(cur){
    
    //env stuff! (unaffected stuff, but not moving, ON THE GROUND

    if (cur.lifespanB > 1){
      strokeWeight(cur.lifespanB*0.5)
    } else {
      strokeWeight(1)
    }
    stroke(350-(cur.lifespanB*25.5),0,255)
    line(cur.xLeftBottom, cur.yLeftBottom, cur.xRightBottom, cur.yLeftBottom)
    cur.lifespanB -= 1/30;

  }

  function drawAllC(cur){

    //env stuff! (unaffected stuff, but not moving, IN THE SMKY

    if (cur.lifespanC > 1){
      strokeWeight(2*cur.lifespanC)
    } else {
      strokeWeight(1)
    }
    stroke(300-(cur.lifespanC*25.5),0,255,cur.lifespanC*20)
    line(cur.xLeftCenter, cur.yLeftCenter, cur.xCenterTop, cur.yCenterTop)
    line(cur.xRightCenter, cur.yRightCenter, cur.xCenterTop, cur.yCenterTop)
    cur.lifespanC -= 1/30;
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

        let thumbMcpX = hand.thumb_mcp.x;
        let thumbMcpY = hand.thumb_mcp.y;
        let thumbMcpZ = hand.thumb_mcp.z3D;

        let thumbTipX = hand.thumb_tip.x;
        let thumbTipY = hand.thumb_tip.y;
        let thumbTipZ = hand.thumb_tip.z3D;

        let indexFingerTipZ = hand.index_finger_tip.z3D;



  if (true){     // if the points have been updated, run this. basically, every updated frame this runs. 
    if (frameCount % spawnRate === 1){  // every 6 frames, run this once
      locationA.push({
        xPosIndexTip: indexFingerTipX,
        yPosIndexTip: indexFingerTipY,
        zPosIndexTip: indexFingerTipZ,
        lifespan: 10,

        xPosThumbMcp: thumbMcpX,
        yPosThumbMcp: thumbMcpY,
        zPosThumbMcp: thumbMcpZ,

        xPosThumbTip: thumbTipX,
        yPosThumbTip: thumbTipY,
        zPosThumbTip: thumbTipZ,

      });


    } 
  }
}

  //under this line only runs once per frame, not per hand every frame

  if (frameCount % spawnRate === 1){    //spawns locationB elements every frame
    locationB.push({
    xLeftBottom: 0,
    yLeftBottom: canvasHeight,

    xRightBottom: canvasWidth,
    yRightBottom: canvasHeight,

    lifespanB: 10

  });
  }

    if (frameCount % (spawnRate*2) === 1){  //spawns lcoationC elements every other frame
    locationC.push({

      xLeftCenter: 0 + (canvasWidth * -1),
      yLeftCenter: (canvasHeight/3)*2.5,

      xCenterTop: canvasWidth/2,
      yCenterTop: 0 + (canvasHeight*-1),

      xRightCenter: canvasWidth + (canvasWidth * 1),
      yRightCenter: (canvasHeight/3) * 2.5,

      lifespanC: 10

    });
  }

  for (let i = 0; i < locationA.length; i++) { //updating locationA values
    let cur = locationA[i];

    cur.yPosIndexTip = ((cur.yPosIndexTip - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)

    cur.yPosThumbMcp = ((cur.yPosThumbMcp - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)

    cur.yPosThumbTip = ((cur.yPosThumbTip - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)


    cur.xPosIndexTip = ((cur.xPosIndexTip - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)

    cur.xPosThumbMcp = ((cur.xPosThumbMcp - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)

    cur.xPosThumbTip = ((cur.xPosThumbTip - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)

  }


    for (let i = 0; i < locationB.length; i++) {    //updating locationB values
      let cur = locationB[i];

      cur.yLeftBottom = ((cur.yLeftBottom - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)
      cur.yRightBottom = ((cur.yRightBottom - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)

      cur.xLeftBottom = ((cur.xLeftBottom - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)
      cur.xRightBottom = ((cur.xRightBottom - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)
    }


    for (let i = 0; i < locationC.length; i++) {    //updating locationC values
      let cur = locationC[i];

      cur.yLeftCenter = ((cur.yLeftCenter - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)
      cur.yRightCenter = ((cur.yRightCenter - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)
      cur.yCenterTop = ((cur.yCenterTop - canvasHeight/2) * (timeFactor) ) + (canvasHeight/2)

      cur.xLeftCenter = ((cur.xLeftCenter - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)
      cur.xRightCenter = ((cur.xRightCenter - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)
      cur.xCenterTop = ((cur.xCenterTop - canvasWidth/2) * (timeFactor) ) + (canvasWidth/2)
    }

    for (let i=0;i<locationC.length;i++) {      //go through each entry in locationC
          let cur = locationC[i];
          let prev = locationC[i-10];               //change this value to change which past value that the trail goes to
          drawAllC(cur)
      }

    for (let i=0;i<locationB.length;i++) {      //go through each entry in locationB

          let cur = locationB[i];
          let prev = locationB[i-10];               //change this value to change which past value that the trail goes to


          drawAllB(cur)
      }

    for (let i=0;i<locationA.length;i++) {      //go through each entry in locationA

          let cur = locationA[i];
          let prev = locationA[i-10];               //change this value to change which past value that the trail goes to

          drawAll(cur)
      }

      if (locationA.length > 100) {   //limit of 100 entries
        locationA.shift();
      }
      

      if (locationB.length > 30) {   //limit of 100 entries
        locationB.shift();
      }

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