import React from "react";
import Header from "../components/Header";
import Home from "./Home"
import VideoClassifer from "../components/VideoClassifer";
import ObjectTracker from "../components/ObjectTracker";
import ReactThreeFiber from "../components/ReactThreeFiber";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(props) {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home {...props}/>}/>
          <Route path="/reactthreefiber" element={<ReactThreeFiber />} />
          <Route path="/ml5videoclass" element={<VideoClassifer />} />
          <Route path="/ml5objecttrack" element={<ObjectTracker />} />
        </Routes>
      </Router>
    </>
  );
}
