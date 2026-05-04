import React from "react";
import "./card.css";
import About from "./About";
import Video from "./Video";
import Vcabout from "./vcabout";
import Vcpicture from "./vcpicture";
import Virtualmap from "./virtualmap";
import Threesixty from "./threesixty";

function card() {
  return (
    <div className="b">
      <About />
      <Video />
      <Vcabout />
      <Vcpicture />
      <Virtualmap />
      <Threesixty />
    </div>
  );
}

export default card;
