import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollProgressBar = () => {
  const [y, setY] = useState(window.scrollY); // storing current scroll position
  const [totalY, setTotalY] = useState(0); // storing Total Scrollable area
  const [scrollBar, setScrollBar] = useState(0); // storing Size of scroll bar
  const location = useLocation(); // to detect route changes

  useEffect(() => {
    // Function to update scroll values
    const updateScroll = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", updateScroll);
    
    // Update total scrollable area and scroll bar size on route change
    const updateDimensions = () => {
      const element = document.body;
      setTotalY(element.scrollHeight); // Total height of the page
      setScrollBar(window.innerHeight); // Visible height of the window
    };

    updateDimensions(); // On initial load
    window.addEventListener("resize", updateDimensions); // Recalculate on resize

    // Cleanup
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [location]); // Dependency on location to reset when changing pages

  // Calculate scroll progress percentage
  const scrollProgress = ((y + scrollBar) / totalY) * 100;

  return (
    <div className="h-1 bg-primary" style={{ width: `${scrollProgress}%` }}></div>
  );
};

export default ScrollProgressBar;
