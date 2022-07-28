import React from "react";
import Sketch from "react-p5";
import * as p5 from "react-p5"

let mobileNet;
let video;
let label;

function modelReady () {
    mobileNet.classify(gotResults)
}

function gotResults(error, results) {
    if(error) {
        console.error(error)
    } else {
        label = results[0].label;
        mobileNet.classify(gotResults)
    }
}

export default (props) => {
  
  function setup (p5, canvasParentRef) {
    p5.createCanvas(640, 580).parent(canvasParentRef);
    video = p5.createCapture(p5.VIDEO)
    video.hide()
    p5.background(0)

    mobileNet = ml5.imageClassifier('MobileNet', video, modelReady)
  }

  const draw = (p5) => {
    p5.background(0);
    p5.image(video, 0, 0, p5.width, p5.width * video.height / video)
    p5.fill(255)
    p5.textSize(32)
    p5.text(label, 10, video.height + 80)
  };

  return (
    <>
  
        <Sketch setup={setup} draw={draw} />
      
   </>
  );
};
