import React from "react";
import "./CS&IT.css";
import Slider from "./ImagesliderComponent/Slider";
import Head from "./HeaderMenuComponent/head";
import Aboutcomp from "./AboutusComponent/aboutcomp";
import Programmes from "./ProgrammesComponent/programmes";
import Gallery from "./GalleryComponents/gallery";
import Subfooter from "./SubfooterComponents/subfooter";

const home = () => {
  return (
    <>
      
      <div className="first">
        <Head />
      </div>

      <div className="second">
        <Slider />
      </div>

      <div className="third">
        <div className="third-one">
          <Aboutcomp />
        </div>

        <div className="third-two">
          <Programmes />
        </div>
        <div className="gallery31">
          <Gallery />
        </div>
      </div>

      <div className="fourth">
        <Subfooter />
      </div>
    </>
  );
};

export default home;
