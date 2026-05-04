import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Lifeju.css";

const ListComponent = () => {
  const [items, setItems] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3; //TO CHANGE NUMER OF ITEMSSSSSSSS.........

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/lifeju");
        setItems(response.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  const displayedItems = [];
  const totalItems = Math.min(items.length, itemsPerPage);

  for (let i = 0; i < totalItems; i++) {
    const itemIndex = (startIndex + i) % items.length;
    displayedItems.push(items[itemIndex]);
  }
  const itemsPerRow = 2;

  const rows = [];
  for (let i = 0; i < totalItems; i += itemsPerRow) {
    const row = displayedItems.slice(i, i + itemsPerRow);
    rows.push(row);
  }

  const splitText = (text) => {
    const words = text.split(" ");
    const firstWord = words[0];
    const restOfText = words.slice(1).join(" ");
    return { firstWord, restOfText };
  };

  return (
    <div className="list-container">
      <h1 className="ju">LIFE@JU</h1>
      <div className="items-container">
        <div className="arrow2 left-arrow2" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </div>

        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((item) => {
              const { firstWord, restOfText } = splitText(item.text); // Move this inside the map

              return (
                <div key={item._id} className="item-card1">
                  {item.photo && (
                    <img
                      src={item.photo}
                      alt={item.text}
                      className="item-image"
                    />
                  )}
                  <h2>{firstWord}</h2>
                  <p className="pa1">{restOfText}</p>
                  <button
                    className="btL"
                    onClick={() => handleClick(item.link)}
                  >
                    Read More
                  </button>
                </div>
              );
            })}
          </div>
        ))}

        <div className="arrow2 right-arrow2" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
