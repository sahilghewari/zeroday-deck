import React, { useState, useEffect, useCallback } from 'react';
import { slides } from './data/slides';
import SlideContainer from './components/SlideContainer';
import CoverSlide from './components/layouts/CoverSlide';
import SplitSlide from './components/layouts/SplitSlide';
import GridSlide from './components/layouts/GridSlide';
import TimelineSlide from './components/layouts/TimelineSlide';
import { ChevronRight, ChevronLeft } from 'lucide-react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < slides.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        paginate(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        paginate(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const currentSlide = slides[currentIndex];
  const progress = ((currentIndex + 1) / slides.length) * 100;

  const renderSlideContent = () => {
    switch (currentSlide.layout) {
      case 'cover':
        return <CoverSlide slide={currentSlide} />;
      case 'split':
        return <SplitSlide slide={currentSlide} />;
      case 'grid':
        return <GridSlide slide={currentSlide} />;
      case 'timeline':
        return <TimelineSlide slide={currentSlide} />;
      default:
        return <CoverSlide slide={currentSlide} />;
    }
  };

  return (
    <>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <SlideContainer direction={direction} slideKey={currentIndex}>
        {renderSlideContent()}
      </SlideContainer>

      <div className="nav-controls">
        <button 
          className="nav-btn" 
          onClick={() => paginate(-1)} 
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="nav-btn" 
          onClick={() => paginate(1)} 
          disabled={currentIndex === slides.length - 1}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </>
  );
}

export default App;
