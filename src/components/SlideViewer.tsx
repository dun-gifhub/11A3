import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Maximize2, Minimize2, 
  MessageSquare, Grid, Feather, Volume2, VolumeX,
  Clock, Play, Pause, RotateCcw, Type,
  GitBranch, Copy, Check, Terminal, ExternalLink, FileCode
} from 'lucide-react';
import { SlideData } from '../types';
import { SlideRenderer } from './slides/SlideRenderer';
import { playClassicalChime } from '../utils/audio';

interface SlideViewerProps {
  slides: SlideData[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  isDarkMode?: boolean;
}

export const SlideViewer: React.FC<SlideViewerProps> = ({
  slides,
  currentIndex,
  onSelectSlide,
  isFullscreen,
  toggleFullscreen,
  isDarkMode = false
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  
  // Display controls
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('large');
  const [slideTheme, setSlideTheme] = useState<'parchment' | 'chalkboard' | 'dark-ink'>(
    isDarkMode ? 'dark-ink' : 'parchment'
  );
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Presenter practice timer (default 12 minutes)
  const [showTimer, setShowTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(12 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // GitHub Tool Modal
  const [showGithubModal, setShowGithubModal] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);

  // Auto slideshow state
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  // Sync theme with dark mode if changed
  useEffect(() => {
    if (isDarkMode && slideTheme === 'parchment') {
      setSlideTheme('dark-ink');
    } else if (!isDarkMode && slideTheme === 'dark-ink') {
      setSlideTheme('parchment');
    }
  }, [isDarkMode]);

  // Timer interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  // Auto advance slide interval
  useEffect(() => {
    let autoInterval: NodeJS.Timeout | null = null;
    if (isAutoPlay) {
      autoInterval = setInterval(() => {
        onSelectSlide(currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
      }, 15000);
    }
    return () => {
      if (autoInterval) clearInterval(autoInterval);
    };
  }, [isAutoPlay, currentIndex, slides.length, onSelectSlide]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentSlide = slides[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) {
      if (soundEnabled) playClassicalChime(480, 0.8);
      onSelectSlide(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      if (soundEnabled) playClassicalChime(560, 0.8);
      onSelectSlide(currentIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        handleNext();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      } else if (e.key === 'g' || e.key === 'G') {
        setShowThumbnails((prev) => !prev);
      } else if (e.key === 't' || e.key === 'T') {
        setShowTimer((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFullscreen, soundEnabled]);

  const progressPercent = Math.round(((currentIndex + 1) / slides.length) * 100);

  // Background style according to theme
  const getSlideBackground = () => {
    if (slideTheme === 'chalkboard') {
      return {
        backgroundColor: '#162e20',
        backgroundImage: 'radial-gradient(#1f402c 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        color: '#f3f4f6'
      };
    }
    if (slideTheme === 'dark-ink') {
      return {
        backgroundColor: '#1b1714',
        backgroundImage: 'radial-gradient(#29231f 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        color: '#f5f0e6'
      };
    }
    return {
      backgroundColor: '#fefcf8',
      backgroundImage: 'radial-gradient(#e8dfd2 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      color: '#1c1917'
    };
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-hidden bg-stone-950 select-none p-1 sm:p-2 md:p-3">
      
      {/* 1. TOP HEADER TOOLBAR (Dedicated for Lớp 11A3 THPT Lương Phú) */}
      <header className="w-full px-3 py-1.5 rounded-2xl bg-stone-900/95 border border-stone-800 text-stone-200 flex items-center justify-between gap-2 flex-wrap text-xs shadow-md shrink-0">
        {/* Left: Class & School Branding */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-red-800 text-amber-300 flex items-center justify-center font-classical font-black text-xs border border-red-700 shadow-xs">
            11A3
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-300 tracking-wide text-xs sm:text-sm uppercase">
                LỚP 11A3 • THPT LƯƠNG PHÚ
              </span>
              <span className="hidden md:inline-block px-2 py-0.2 rounded-full text-[10px] font-semibold bg-red-950 text-red-300 border border-red-800/80">
                Thái Nguyên
              </span>
            </div>
            <span className="text-[10px] text-stone-400 hidden sm:block">
              Chuyên đề: Tiến sĩ Đỗ Cận & Thi phẩm “Xuân yến” (春燕)
            </span>
          </div>
        </div>

        {/* Center: Slide Progress Pill */}
        <div className="flex items-center gap-1.5 bg-stone-800/90 px-3 py-1 rounded-xl border border-stone-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-[11px] text-stone-200">
            Slide {currentIndex + 1} / {slides.length}
          </span>
          <span className="text-stone-400 text-[11px]">({progressPercent}%)</span>
        </div>

        {/* Right: Presentation Tools (Theme, Font, Sound, Timer, Fullscreen) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Font Size Toggle */}
          <div className="hidden lg:inline-flex items-center rounded-xl p-0.5 border bg-stone-800 border-stone-700">
            <span className="px-1.5 text-[10px] text-stone-400 font-bold flex items-center gap-0.5">
              <Type className="w-3 h-3" />
            </span>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded-md font-medium text-[11px] ${fontSize === 'normal' ? 'bg-stone-700 text-white font-bold' : 'text-stone-400 hover:text-white'}`}
              title="Cỡ chữ vừa"
            >
              Vừa
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded-md font-medium text-[11px] ${fontSize === 'large' ? 'bg-amber-400 text-stone-950 font-bold' : 'text-stone-400 hover:text-white'}`}
              title="Cỡ chữ to (Khuyên dùng)"
            >
              To
            </button>
            <button
              onClick={() => setFontSize('xl')}
              className={`px-2 py-0.5 rounded-md font-medium text-[11px] ${fontSize === 'xl' ? 'bg-red-700 text-white font-bold' : 'text-stone-400 hover:text-white'}`}
              title="Cỡ chữ siêu to"
            >
              Rất to
            </button>
          </div>

          {/* Theme Selector */}
          <div className="inline-flex items-center rounded-xl p-0.5 border bg-stone-800 border-stone-700">
            <button
              onClick={() => setSlideTheme('parchment')}
              className={`px-2 py-0.5 rounded-lg text-[11px] font-medium flex items-center gap-1 ${
                slideTheme === 'parchment' ? 'bg-[#fbf7ee] text-amber-950 font-bold' : 'text-stone-400 hover:text-white'
              }`}
              title="Nền giấy cổ hoàng triều"
            >
              <span className="w-2 h-2 rounded-full bg-[#e8dfd2]" />
              <span className="hidden sm:inline">Giấy cổ</span>
            </button>
            <button
              onClick={() => setSlideTheme('chalkboard')}
              className={`px-2 py-0.5 rounded-lg text-[11px] font-medium flex items-center gap-1 ${
                slideTheme === 'chalkboard' ? 'bg-[#1b3d2b] text-emerald-100 font-bold' : 'text-stone-400 hover:text-white'
              }`}
              title="Nền bảng phấn xanh học đường"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="hidden sm:inline">Bảng phấn</span>
            </button>
            <button
              onClick={() => setSlideTheme('dark-ink')}
              className={`px-2 py-0.5 rounded-lg text-[11px] font-medium flex items-center gap-1 ${
                slideTheme === 'dark-ink' ? 'bg-[#29231f] text-amber-200 font-bold' : 'text-stone-400 hover:text-white'
              }`}
              title="Nền mực nho thâm trầm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span className="hidden sm:inline">Mực nho</span>
            </button>
          </div>

          {/* Bell Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`px-2 py-1 rounded-xl border flex items-center gap-1 text-[11px] transition-all ${
              soundEnabled 
                ? 'bg-amber-950/80 text-amber-300 border-amber-800' 
                : 'bg-stone-800 text-stone-400 border-stone-700'
            }`}
            title={soundEnabled ? 'Chuông chuyển slide: Đang bật' : 'Chuông chuyển slide: Đã tắt'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Presentation Timer Toggle */}
          <button
            onClick={() => setShowTimer(!showTimer)}
            className={`px-2.5 py-1 rounded-xl border flex items-center gap-1 text-[11px] font-semibold transition-all ${
              showTimer || isTimerRunning
                ? 'bg-red-900 text-white border-red-700' 
                : 'bg-stone-800 text-stone-300 border-stone-700'
            }`}
            title="Đồng hồ tính giờ thuyết trình (Phím T)"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{formatTimer(timerSeconds)}</span>
          </button>

          {/* Tool GitHub Button */}
          <button
            id="btn-github-tool"
            onClick={() => setShowGithubModal(true)}
            className="px-2.5 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 border border-amber-600/50 text-amber-300 font-bold flex items-center gap-1.5 text-[11px] transition-all shadow-xs"
            title="Mở hướng dẫn & tool chạy dự án trên GitHub"
          >
            <GitBranch className="w-3.5 h-3.5 text-amber-400" />
            <span>Tool GitHub</span>
          </button>

          {/* Fullscreen Button */}
          <button
            id="btn-fullscreen-toggle"
            onClick={toggleFullscreen}
            className="px-2.5 py-1 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold flex items-center gap-1 text-[11px] transition-all shadow-xs"
            title="Toàn màn hình trình chiếu (Phím F)"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}</span>
          </button>
        </div>
      </header>

      {/* Timer Bar (When toggled open) */}
      {showTimer && (
        <div className="w-full my-1 px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs text-stone-200 shrink-0">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="font-bold uppercase tracking-wider text-amber-200">Thời gian thuyết trình:</span>
            <span className="font-mono text-base font-black px-2.5 py-0.5 rounded bg-black text-amber-300 border border-stone-800">
              {formatTimer(timerSeconds)}
            </span>
            <span className="text-stone-400 text-[11px]">/ 12 phút tiêu chuẩn</span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1"
            >
              {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isTimerRunning ? 'Tạm dừng' : 'Bắt đầu đếm'}</span>
            </button>
            <button
              onClick={() => {
                setIsTimerRunning(false);
                setTimerSeconds(12 * 60);
              }}
              className="px-2 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>12 phút</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. MAIN PRESENTATION STAGE (Fills maximum space) */}
      <main className="flex-1 w-full flex flex-col items-center justify-center p-1 sm:p-2 min-h-0 overflow-hidden">
        <div 
          id={`slide-${currentSlide.id}`}
          className={`w-full h-full max-w-[1550px] mx-auto rounded-2xl sm:rounded-3xl shadow-2xl border flex flex-col justify-between relative overflow-y-auto overflow-x-hidden transition-all duration-300 ${
            slideTheme === 'chalkboard'
              ? 'border-emerald-800/80'
              : slideTheme === 'dark-ink'
                ? 'border-[#42392f]'
                : 'border-amber-900/30'
          } p-4 sm:p-6 md:p-8 lg:p-10`}
          style={getSlideBackground()}
        >
          {/* Top Progress Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-stone-400/20">
            <div 
              className="h-full bg-gradient-to-r from-red-800 via-amber-600 to-red-700 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Watermark & Stamp (Class 11A3 - THPT Lương Phú) */}
          <div className="absolute top-3.5 right-4 sm:top-5 sm:right-7 flex items-center gap-2.5 sm:gap-3 z-10">
            <div className="text-right hidden sm:block">
              <span className={`text-[11px] font-bold uppercase tracking-wider block font-serif ${
                slideTheme === 'chalkboard' ? 'text-amber-300' : slideTheme === 'dark-ink' ? 'text-amber-400' : 'text-red-900'
              }`}>
                LỚP 11A3 • THPT LƯƠNG PHÚ
              </span>
              <span className="text-[10px] opacity-75 block">Thái Nguyên – Ngữ văn & GDĐP</span>
            </div>
            <div className={`w-9 h-9 sm:w-11 sm:h-11 border-2 rounded-xl flex flex-col items-center justify-center font-classical font-black text-[10px] sm:text-xs leading-none shadow-xs ${
              slideTheme === 'chalkboard'
                ? 'border-amber-400 text-amber-300 bg-[#12281b]'
                : slideTheme === 'dark-ink'
                  ? 'border-red-700 text-amber-200 bg-red-950/80'
                  : 'border-red-800 text-red-900 bg-red-50/80'
            }`}>
              <span>11A3</span>
              <span className="text-[8px] font-sans font-normal opacity-80 mt-0.5">L.PHÚ</span>
            </div>
          </div>

          {/* Slide Header Info */}
          <div className="mb-3 pr-24 sm:pr-36 shrink-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                slideTheme === 'chalkboard'
                  ? 'bg-emerald-900 text-emerald-200 border-emerald-700'
                  : slideTheme === 'dark-ink'
                    ? 'bg-[#332b24] text-amber-300 border-[#4a3f34]'
                    : 'bg-red-100 text-red-900 border-red-200'
              }`}>
                {currentSlide.category}
              </span>
              <span className="text-xs font-semibold opacity-60">
                • Slide {currentSlide.id} / {slides.length}
              </span>
            </div>

            {/* Slide Title (Hidden on Slide 1 because Slide 1 has majestic hero title) */}
            {currentSlide.id !== 1 && (
              <div>
                <h2 className={`font-classical font-black tracking-tight leading-tight ${
                  fontSize === 'xl' ? 'text-2xl sm:text-3xl lg:text-4xl' : fontSize === 'large' ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl lg:text-2xl'
                } ${
                  slideTheme === 'chalkboard' ? 'text-amber-100' : slideTheme === 'dark-ink' ? 'text-[#f5f0e6]' : 'text-stone-900'
                }`}>
                  {currentSlide.title}
                </h2>
                {currentSlide.subtitle && (
                  <p className={`font-serif italic mt-1 ${
                    fontSize === 'xl' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
                  } ${
                    slideTheme === 'chalkboard' ? 'text-emerald-200/90' : slideTheme === 'dark-ink' ? 'text-amber-200/90' : 'text-amber-950/80'
                  }`}>
                    {currentSlide.subtitle}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Central Body Content */}
          <div className="flex-1 flex flex-col justify-center my-auto min-h-0">
            <SlideRenderer 
              slide={currentSlide} 
              fontSize={fontSize} 
              slideTheme={slideTheme} 
            />
          </div>

          {/* Slide Footer */}
          <div className={`mt-3 pt-2.5 border-t flex items-center justify-between text-xs opacity-80 shrink-0 ${
            slideTheme === 'chalkboard' 
              ? 'border-emerald-800/60 text-emerald-200' 
              : slideTheme === 'dark-ink' 
                ? 'border-[#3f3830] text-[#a89d8d]' 
                : 'border-stone-300 text-stone-600'
          }`}>
            <div className="flex items-center gap-2">
              <Feather className="w-3.5 h-3.5 text-red-700" />
              <span>Chuyên đề Tiến sĩ Đỗ Cận & Thi phẩm “Xuân yến” (春燕) • Lớp 11A3 – THPT Lương Phú</span>
            </div>
            <div className="font-classical font-bold">
              Trang {currentIndex + 1} / {slides.length}
            </div>
          </div>
        </div>
      </main>

      {/* 3. BOTTOM SLIDE NAVIGATION CONTROLLER */}
      <footer className="w-full px-3 py-2 rounded-2xl bg-stone-900/95 border border-stone-800 text-stone-200 flex items-center justify-between gap-2 flex-wrap text-xs shadow-lg shrink-0">
        
        {/* Left: Previous & Next Slide Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-slide-prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed text-stone-200 font-medium transition-all"
            title="Slide trước (Phím ←)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Slide trước</span>
          </button>

          <button
            id="btn-slide-next"
            onClick={handleNext}
            disabled={currentIndex === slides.length - 1}
            className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-red-800 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold transition-all shadow-md hover:scale-[1.02]"
            title="Slide tiếp theo (Phím Space hoặc →)"
          >
            <span>Slide tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Quick Auto-play slideshow */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`hidden md:flex items-center gap-1 px-2.5 py-2 rounded-xl border text-[11px] font-medium transition-all ${
              isAutoPlay 
                ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold' 
                : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200'
            }`}
            title="Tự động chuyển slide sau 15 giây"
          >
            {isAutoPlay ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            <span>{isAutoPlay ? 'Đang tự chiếu' : 'Tự chiếu (15s)'}</span>
          </button>
        </div>

        {/* Center: Slide Jump Matrix (15 buttons) */}
        <div className="hidden lg:flex items-center gap-1">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                if (soundEnabled) playClassicalChime(500 + idx * 15, 0.6);
                onSelectSlide(idx);
              }}
              className={`w-6 h-6 rounded-lg text-[11px] font-bold transition-all ${
                currentIndex === idx
                  ? 'bg-red-800 text-amber-200 shadow-md scale-110 ring-1 ring-amber-400'
                  : 'bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white'
              }`}
              title={`Slide ${idx + 1}: ${s.title}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Right: Speaker Notes & Grid Drawers */}
        <div className="flex items-center gap-2">
          {/* Speaker Script Drawer Toggle */}
          <button
            id="btn-speaker-notes"
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl border transition-all text-xs ${
              showNotes 
                ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold shadow-xs' 
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Xem lời nói gợi ý thuyết trình trên lớp (Phím N)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Lời thuyết trình</span>
          </button>

          {/* All 15 Slides Drawer Toggle */}
          <button
            id="btn-all-slides-drawer"
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`flex items-center gap-1 px-3 py-2 rounded-xl border transition-all text-xs ${
              showThumbnails
                ? 'bg-red-800 text-white border-red-700 font-bold shadow-xs'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
            title="Xem danh mục 15 slide để chuyển nhanh (Phím G)"
          >
            <Grid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mục lục</span>
            <span>15 Slide</span>
          </button>
        </div>
      </footer>

      {/* Floating Modal: Speaker Notes (When opened) */}
      {showNotes && (
        <div className="fixed bottom-16 left-4 right-4 sm:left-10 sm:right-10 md:left-24 md:right-24 z-50 p-5 rounded-2xl bg-[#201c18] border border-amber-700/60 shadow-2xl text-stone-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-700">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span className="font-classical font-bold text-amber-300 text-sm uppercase">
                Gợi ý lời phát biểu học sinh lớp 11A3 – Slide {currentIndex + 1}
              </span>
            </div>
            <button
              onClick={() => setShowNotes(false)}
              className="text-xs text-stone-400 hover:text-white px-2 py-0.5 rounded bg-stone-800"
            >
              Đóng (ESC / N)
            </button>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#f4efe6] leading-relaxed max-h-40 overflow-y-auto pr-2">
            “{currentSlide.speakerNotes}”
          </p>
        </div>
      )}

      {/* Floating Modal: 15 Slide Matrix Selector (When opened) */}
      {showThumbnails && (
        <div className="fixed inset-4 sm:inset-10 md:inset-16 z-50 p-6 rounded-3xl bg-stone-950/95 border border-stone-700 shadow-2xl text-stone-200 flex flex-col justify-between backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-800">
            <div>
              <h3 className="font-classical font-bold text-lg text-amber-300 uppercase">
                Danh mục 15 Slide – Lớp 11A3 THPT Lương Phú
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Bấm vào slide bất kỳ để chuyển trang ngay lập tức
              </p>
            </div>
            <button
              onClick={() => setShowThumbnails(false)}
              className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
            >
              Đóng danh mục (G)
            </button>
          </div>

          {/* Grid of slides */}
          <div className="flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 p-1">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  if (soundEnabled) playClassicalChime(520, 0.6);
                  onSelectSlide(idx);
                  setShowThumbnails(false);
                }}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                  currentIndex === idx
                    ? 'bg-red-900/90 border-amber-400 text-white font-bold ring-2 ring-amber-400'
                    : 'bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] opacity-75 mb-1.5">
                  <span className="font-bold text-amber-400">SLIDE {s.id}</span>
                  <span className="text-[10px] uppercase font-mono">{s.category}</span>
                </div>
                <div className="line-clamp-2 text-xs font-medium leading-snug">
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Modal: GitHub Tool & Deploy Guide */}
      {showGithubModal && (
        <div className="fixed inset-2 sm:inset-6 md:inset-12 lg:inset-20 z-50 p-4 sm:p-6 rounded-3xl bg-stone-950/98 border border-amber-600/60 shadow-2xl text-stone-200 flex flex-col justify-between backdrop-blur-md animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-classical font-black text-base sm:text-lg text-amber-300 uppercase tracking-wide">
                  Tool Chạy & Đẩy Lên GitHub – Lớp 11A3 THPT Lương Phú
                </h3>
                <p className="text-[11px] sm:text-xs text-stone-400">
                  Tự động triển khai web slide toàn màn hình trực tiếp lên GitHub Pages hoàn toàn miễn phí
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowGithubModal(false)}
              className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold"
            >
              Đóng (ESC)
            </button>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {/* Box 1: Tool 1 Click */}
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-xs sm:text-sm text-emerald-300 uppercase tracking-wider">
                    Cách 1: Chạy Tool Tự Động (Dễ nhất cho học sinh)
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Khuyên dùng
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Trong thư mục dự án đã có sẵn 2 file kịch bản tự động:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800">
                  <div className="flex items-center gap-2 mb-1">
                    <FileCode className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-xs text-amber-200 font-mono">push-github.bat</span>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Dành cho máy tính Windows: Nhấp đúp chuột vào file này, dán link repository GitHub của bạn vào là xong!
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800">
                  <div className="flex items-center gap-2 mb-1">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    <span className="font-bold text-xs text-cyan-200 font-mono">push-github.sh</span>
                  </div>
                  <p className="text-[11px] text-stone-400">
                    Dành cho máy Mac/Linux/Git Bash: Mở terminal chạy lệnh <code className="text-cyan-300">bash push-github.sh</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2: Quick Git Commands */}
            <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-xs sm:text-sm text-amber-300 uppercase tracking-wider">
                    Cách 2: Sao Chép Lệnh Git Thủ Công (Terminal / PowerShell)
                  </span>
                </div>
                <button
                  onClick={() => {
                    const commands = `git init\ngit branch -M main\ngit add .\ngit commit -m "feat: Bao cao slide 11A3 THPT Luong Phu"\ngit remote add origin <LINK_REPO_GITHUB_CUA_BAN>\ngit push -u origin main --force`;
                    navigator.clipboard.writeText(commands);
                    setCopiedCommand(true);
                    setTimeout(() => setCopiedCommand(false), 2500);
                  }}
                  className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                    copiedCommand
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-400 text-stone-950 hover:bg-amber-300'
                  }`}
                >
                  {copiedCommand ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCommand ? 'Đã sao chép!' : 'Sao chép toàn bộ lệnh'}</span>
                </button>
              </div>
              <div className="p-3 rounded-xl bg-black font-mono text-[11px] text-stone-300 space-y-1 overflow-x-auto border border-stone-800">
                <p><span className="text-stone-500"># 1. Khởi tạo và gom file</span></p>
                <p className="text-emerald-400">git init && git branch -M main</p>
                <p className="text-emerald-400">git add . && git commit -m "feat: Bao cao slide 11A3 THPT Luong Phu"</p>
                <p><span className="text-stone-500"># 2. Thêm link repo GitHub và đẩy code</span></p>
                <p className="text-amber-300">git remote add origin https://github.com/TEN_CUA_BAN/TEN_REPO.git</p>
                <p className="text-amber-300">git push -u origin main --force</p>
              </div>
            </div>

            {/* Box 3: GitHub Pages 1-Click Deployment */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/60 space-y-2">
              <span className="font-bold text-xs text-amber-300 uppercase tracking-wider block">
                🌐 Chạy trực tiếp trên mạng miễn phí vĩnh viễn (GitHub Pages)
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                Dự án đã có sẵn file tự động <code className="text-amber-300 bg-black/50 px-1 py-0.5 rounded font-mono">.github/workflows/deploy.yml</code>:
              </p>
              <ol className="text-xs text-stone-300 list-decimal list-inside space-y-1">
                <li>Vào GitHub repository của bạn -&gt; bấm tab <strong>Settings</strong>.</li>
                <li>Chọn menu bên trái: <strong>Pages</strong>.</li>
                <li>Tại mục <strong>Build and deployment</strong> -&gt; chọn Source: <strong className="text-amber-300">GitHub Actions</strong>.</li>
                <li>Sau 1 phút, GitHub sẽ cấp link trang web chạy slide trực tiếp cho lớp 11A3: <code className="text-emerald-400 font-mono">https://&lt;username&gt;.github.io/&lt;repo&gt;/</code></li>
              </ol>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 shrink-0">
            <span>Chi tiết xem thêm tại file <code className="text-amber-300">GITHUB_GUIDE.md</code> trong mã nguồn</span>
            <button
              onClick={() => setShowGithubModal(false)}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold"
            >
              Đã hiểu & Tiếp tục trình chiếu
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
