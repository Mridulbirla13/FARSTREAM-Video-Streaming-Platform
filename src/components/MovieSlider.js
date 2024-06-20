import React, { useState, useRef } from 'react';
import './MovieSlider.css';

function MovieSlider({ headerText, images }) {
  const sliderRef = useRef(null);
  const innerSliderRef = useRef(null);
  const [isPressed, setIsPressed] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (e) => {
    setIsPressed(true);
    setStartX(e.clientX - offsetX);
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleMouseEnter = () => {
    sliderRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    sliderRef.current.style.cursor = 'default';
  };

  const handleMouseMove = (e) => {
    if (!isPressed) return;
    e.preventDefault();
    const x = e.clientX;
    const walk = x - startX;
    setOffsetX(walk);
    innerSliderRef.current.style.transform = `translateX(${walk}px)`;
    checkBoundary();
  };

  const checkBoundary = () => {
    const outer = sliderRef.current.getBoundingClientRect();
    const inner = innerSliderRef.current.getBoundingClientRect();
    
    if (parseInt(innerSliderRef.current.style.transform.replace('translateX(', '')) > 0) {
      innerSliderRef.current.style.transform = 'translateX(0px)';
    } else if (inner.right < outer.right) {
      innerSliderRef.current.style.transform = `translateX(-${inner.width - outer.width}px)`;
    }
  };

  return (
    <div className='Mcontainer'>
      <h2 className="rowHeader">{headerText}</h2>
      <div 
        className="slider" 
        ref={sliderRef} 
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="slider-inner" ref={innerSliderRef}>
          {images.map((image, index) => (
            <a className='slide' href="#" key={index}>
              <div className="slide-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${image})` }}></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSlider;
