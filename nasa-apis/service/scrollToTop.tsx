'use client';
import React, {useState, useEffect }from 'react';


const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
  
    useEffect(() => {
      window.scrollTo(0, 0);
      handleScroll();
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerHeight = 80;
  
      if (scrollY > headerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
        <>
          {showButton && (
            <button className='topButton' onClick={scrollToTop}>
              <p>Back to Top</p>
            </button>
          )}
        </>
      );
  };
  
  export default ScrollToTop;
  
  
  