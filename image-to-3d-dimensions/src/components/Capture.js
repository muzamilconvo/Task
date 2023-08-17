import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function Capture({ onTakePhoto }) {
  return (
    <div>
      <h1>Camera Capture</h1>
      <Camera
        onTakePhoto={(dataUri) => onTakePhoto(dataUri)}
        isFullscreen={false}
        idealResolution={{ width: 640, height: 480 }}
      />
    </div>
  );
}

export default Capture;
