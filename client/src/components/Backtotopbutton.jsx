import React, { useState, useEffect } from 'react';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} style={scrollToTopStyle}>
          <i className="fa-solid fa-circle-arrow-up" style={iconStyle}></i>


        </button>
      )}
    </div>
  );
}
const iconStyle = {
  color: "#238dfe",
  fontSize: '4.5rem'  // Increase or decrease as per your requirement
};

const scrollToTopStyle = {
  position: 'fixed',
  bottom: '10%',
  right: '1.8%',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  zIndex: 1000,
};

export default BackToTopButton;