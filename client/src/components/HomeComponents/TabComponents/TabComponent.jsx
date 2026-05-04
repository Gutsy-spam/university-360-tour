import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TabComponent.css";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("JU_CORNER");
  const [scrollIndex, setScrollIndex] = useState(0);
  const [juCornerData, setJuCornerData] = useState([]);
  const [topDestinationsData, setTopDestinationsData] = useState([]);
  const [importantLinksData, setImportantLinksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/tabs");
        setJuCornerData(
          response.data.filter((item) => item.category === "JU_CORNER")
        );
        setTopDestinationsData(
          response.data.filter((item) => item.category === "TOP_DESTINATIONS")
        );
        setImportantLinksData(
          response.data.filter((item) => item.category === "IMPORTANT_LINKS")
        );
      } catch (error) {
        console.error("Error fetching tab data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLeftScroll = (tabName) => {
    let dataArray;
    if (tabName === "JU_CORNER") dataArray = juCornerData;
    if (tabName === "TOP_DESTINATIONS") dataArray = topDestinationsData;
    if (tabName === "IMPORTANT_LINKS") dataArray = importantLinksData;

    const firstItem = dataArray.shift();
    dataArray.push(firstItem);

    if (tabName === "JU_CORNER") setJuCornerData([...dataArray]);
    if (tabName === "TOP_DESTINATIONS") setTopDestinationsData([...dataArray]);
    if (tabName === "IMPORTANT_LINKS") setImportantLinksData([...dataArray]);
  };

  const handleRightScroll = (tabName) => {
    let dataArray;
    if (tabName === "JU_CORNER") dataArray = juCornerData;
    if (tabName === "TOP_DESTINATIONS") dataArray = topDestinationsData;
    if (tabName === "IMPORTANT_LINKS") dataArray = importantLinksData;

    const lastItem = dataArray.pop();
    dataArray.unshift(lastItem);

    if (tabName === "JU_CORNER") setJuCornerData([...dataArray]);
    if (tabName === "TOP_DESTINATIONS") setTopDestinationsData([...dataArray]);
    if (tabName === "IMPORTANT_LINKS") setImportantLinksData([...dataArray]);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-headers">
        <button
          className={`tab-button ${activeTab === "JU_CORNER" ? "active" : ""}`}
          onClick={() => setActiveTab("JU_CORNER")}
        >
          JU CORNER
        </button>

        <button
          className={`tab-button ${
            activeTab === "TOP_DESTINATIONS" ? "active" : ""
          }`}
          onClick={() => setActiveTab("TOP_DESTINATIONS")}
        >
          TOP DESTINATIONS
        </button>
        <button
          className={`tab-button ${
            activeTab === "IMPORTANT_LINKS" ? "active" : ""
          }`}
          onClick={() => setActiveTab("IMPORTANT_LINKS")}
        >
          IMPORTANT LINKS
        </button>
      </div>

      <div className="tabs-content-wrapper">
        <div
          className="tabs-content"
          style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
        >
          {/* Combine all tab contents into one div */}

          <div
            className={`tab-content ${
              activeTab === "JU_CORNER" ? "active" : ""
            }`}
          >
            <button
              className="arrow left-arrow"
              onClick={() => handleLeftScroll("JU_CORNER")}
            >
              ←
            </button>
            {juCornerData.map((item) => (
              <div key={item._id} className="tab-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.text} className="tab-image" />
                  <span className="tab-text">{item.text}</span>
                </a>
              </div>
            ))}
            <button
              className="arrow right-arrow"
              onClick={() => handleRightScroll("JU_CORNER")}
            >
              →
            </button>
          </div>

          <div
            className={`tab-content ${
              activeTab === "TOP_DESTINATIONS" ? "active" : ""
            }`}
          >
            <button
              className="arrow left-arrow"
              onClick={() => handleLeftScroll("TOP_DESTINATIONS")}
            >
              ←
            </button>
            {topDestinationsData.map((item) => (
              <div key={item._id} className="tab-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.text} className="tab-image" />
                  <span className="tab-text">{item.text}</span>
                </a>
              </div>
            ))}
            <button
              className="arrow right-arrow"
              onClick={() => handleRightScroll("TOP_DESTINATIONS")}
            >
              →
            </button>
          </div>
          <div
            className={`tab-content ${
              activeTab === "IMPORTANT_LINKS" ? "active" : ""
            }`}
          >
            <button
              className="arrow left-arrow"
              onClick={() => handleLeftScroll("IMPORTANT_LINKS")}
            >
              ←
            </button>
            {importantLinksData.map((item) => (
              <div key={item._id} className="tab-item">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.text} className="tab-image" />
                  <span className="tab-text">{item.text}</span>
                </a>
              </div>
            ))}
            <button
              className="arrow right-arrow"
              onClick={() => handleRightScroll("IMPORTANT_LINKS")}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
