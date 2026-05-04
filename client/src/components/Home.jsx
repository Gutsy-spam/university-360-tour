import AOS from 'aos';
import 'aos/dist/aos.css';
import Section from "./HomeComponents/section";
import Imageslider from "./HomeComponents/imageslider";
import TwitterFeed from "./HomeComponents/TwitterFeed";
import Card from "./HomeComponents/CardComponents/card";
import Marquee from "./HomeComponents/Marquee/Marquee";
import Flexcontainer from "./HomeComponents/FlexComponents/Flexcontainer";
import Academic from "./HomeComponents/AcademicComponents/academic";
import Announcements from "./HomeComponents/NotifiactionComponents/Announcements";
import EventCalendar from "./HomeComponents/CalenderComponents/EventCalender";
import UpcomingEvents from "./HomeComponents/CalenderComponents/UpcomingEvents";
import Magzine from "./HomeComponents/NewsletterComponents/Magzine";
import Lifeju from "./HomeComponents/ListComponents/Lifeju";
import Research from "./HomeComponents/ListComponents/Research";
import Grid from "./HomeComponents/GridComponents/Grid";
import TabComponent from "./HomeComponents/TabComponents/TabComponent";
import Gallery from "./HomeComponents/GalleryComponents/gallery";
import "./Home.css";
import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);
  return (
    <div data-aos="fade-in">
      <div className="body">
        <div data-aos="zoom-in" className="sec">
          <Section />
        </div>
        <div data-aos="fade-right" className="imageslider1">
          <Imageslider />
        </div>
        <div data-aos="fade-left" className="feed">
          <TwitterFeed />
        </div>
        <div data-aos="flip-left" className="mobile">
          <Section />
        </div>
      </div>

      <div className="wrapper">
        <div data-aos="slide-up" className="one">
          <Card />
        </div>

        <div data-aos="slide-down" className="two">
          <Marquee />
        </div>

        <div data-aos="fade-left" className="three">
          <Flexcontainer />
        </div>

        <div data-aos="fade-right" className="academic">
          <Academic />
        </div>

        <div className="four">
          <div data-aos="flip-right" className="announcement">
            <Announcements />
          </div>
          <div className="calender">
            <EventCalendar />
          </div>
          <UpcomingEvents />
        </div>

        <div data-aos="fade-left" className="five">
          <div data-aos="rotateC-clockwise" className="five-m">
            <Lifeju />
          </div>

          <div data-aos="rotate-clockwise" className="magzine">
            <Magzine />
          </div>
        </div>

        <div className="five-one">
          <div data-aos="slide-left" className="five-m">
            <Research />
          </div>
          <div data-aos="slide-right" className="media">
            <Gallery />
          </div>
        </div>

        <div data-aos="zoom-in-up" className="six">
          <Grid />
        </div>

        <div data-aos="zoom-in-down" className="seven">
          <TabComponent />
        </div>
      </div>
    </div>
  );
};

export default Home;