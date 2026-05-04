import React from "react";
import YouTube from "react-youtube";
import "./video.css";

function card() {
  const videoId = "Nv48NJ4pRNw";
  const videoOptions = {
    width: "300", // Set the initial width of the video
    height: "180", // Set the initial height of the video
  };
  return (
    <div>
      <div className="video">
        <YouTube videoId={videoId} opts={videoOptions} />
      </div>
    </div>
  );
}

export default card;
