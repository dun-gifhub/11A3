import React, { useState, useEffect } from 'react';
import { SlideViewer } from './components/SlideViewer';
import { SLIDES_DATA } from './data/slidesData';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('xuan-yen-dark-mode') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('xuan-yen-dark-mode', String(isDarkMode));
    } catch {
      // ignore
    }
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {
        setIsFullscreen(!isFullscreen);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Sync fullscreen change events (e.g. user pressing ESC key)
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-stone-950 font-sans selection:bg-amber-300 selection:text-stone-900">
      <SlideViewer
        slides={SLIDES_DATA}
        currentIndex={currentSlideIndex}
        onSelectSlide={setCurrentSlideIndex}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        isDarkMode={isDarkMode}
      />
    </div>
  );
}
