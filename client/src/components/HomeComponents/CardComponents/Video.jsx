import React from "react";
import "./video.css";

function Card() {
  const videoId = "Nv48NJ4pRNw";

  return (
    <div>
      <div className="video">
        <iframe
          width="300"
          height="180"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Card;