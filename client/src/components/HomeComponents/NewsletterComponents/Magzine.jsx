import React from "react";
import "./Magzine.css";

const Magzine = () => {
  return (
    <div>
      <div className="mypdf">
        <h2>NEWSLETTER / MAGZINE</h2>
        <iframe className="pdf"
          src="doc/BOOK.pdf"
          style={{ border: "none" }}
          title="PDF Viewer"
        />
      </div>
    </div>
  );
};

export default Magzine;
