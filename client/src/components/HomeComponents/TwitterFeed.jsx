import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./TwitterFeed.css";

const TwitterFeed = () => {
  return (
    <div className="twitter1">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="UniversityJammu"
        options={{ height: 500 }}
      />
    </div>
  );
};

export default TwitterFeed;
