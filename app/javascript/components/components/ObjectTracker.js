import React, { useEffect } from "react";
import Sketch from "react-p5";
import * as p5 from "react-p5";

let detector;
let video;
let detections = [];

export default (props) => {
  
  function setup(p5, canvasParentRef) {
    
    p5.createCanvas(640, 480).parent(canvasParentRef);
    p5.background(0);
    video = p5.createCapture(p5.VIDEO);
    video.hide();  
    setTimeout(()=> detector = ml5.objectDetector("cocossd", video, modelReady),3000)
  }

  function modelReady() {
    detector.detect(gotDetections);
  }

  function gotDetections(error, results) {
    if (error) {
      console.error(error);
    } else {
      detections = results;
      detector.detect(gotDetections);
    }
  }

  function draw (p5) {

    p5.image(video, 0, 0, p5.width, p5.height);

    for (let i = 0; i < detections.length; i += 1) {
      const object = detections[i];
      p5.stroke(0, 255, 0);
      p5.strokeWeight(4);
      p5.noFill();
      p5.rect(object.x, object.y, object.width, object.height);
      p5.noStroke();
      p5.fill(0,255,0);
      p5.textSize(24);
      p5.text(object.label, object.x + 10, object.y + 24);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold">ML5 Object Tracker Demo</h2>
      <div className="">
      <Sketch setup={setup} draw={draw} />;
      </div>
    </>
  )
};
