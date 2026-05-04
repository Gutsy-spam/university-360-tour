import React, { useEffect, useState } from "react";
import "./topbar01.css";

function Topbar01() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <div className="abc">
        <h3 className="text">
          WELCOME TO THE UNIVERSITY OF JAMMU NAAC ACCREDITED "A+"
        </h3>

        <div className="socialmedia">
          <ul>
            <li className="facebook">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="linkedin">
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="twitter">
              <a href="https://twitter.com/UniversityJammu">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="youtube">
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="themesbtn">
          <i
            className="fa-solid fa-circle-half-stroke"
            onClick={() => toggleTheme()}
          ></i>
        </div>

        <div className="themesbtn">
          <i
            className="fa-solid fa-circle-half-stroke"
            onClick={() => toggleTheme()}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Topbar01;
