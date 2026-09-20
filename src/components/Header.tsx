import React from 'react';
import { BookOpen, Presentation, FileText, HelpCircle, Copy, Sparkles, MapPin, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  activeTab: 'slides' | 'research' | 'script' | 'quiz' | 'export';
  setActiveTab: (tab: 'slides' | 'research' | 'script' | 'quiz' | 'export') => void;
  currentSlide: number;
  totalSlides: number;
  onLaunchPresentation: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentSlide,
  totalSlides,
  onLaunchPresentation,
  isDarkMode,
  onToggleDarkMode
}) => {
  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 border-b shadow-xs backdrop-blur ${
      isDarkMode 
        ? 'bg-[#1b1916]/95 border-[#3d362e] text-[#ece5d8]' 
        : 'bg-[#fbf9f5]/95 border-stone-200/80 text-stone-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Logo & Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-classical font-bold text-lg shadow-sm border ${
                isDarkMode
                  ? 'bg-red-950 text-amber-300 border-red-800/80 shadow-red-950/40'
                  : 'bg-red-900 text-amber-100 border-red-800'
              }`}>
                春
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className={`font-classical font-bold text-base sm:text-lg tracking-tight ${
                    isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'
                  }`}>
                    Tác giả Đỗ Cận & Thi phẩm “Xuân yến”
                  </h1>
                  <span className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border ${
                    isDarkMode 
                      ? 'text-emerald-300 bg-emerald-950/60 border-emerald-800' 
                      : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                  }`}>
                    <MapPin className="w-3 h-3 text-emerald-400" /> Thái Nguyên
                  </span>
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
                  Nghiên cứu & Báo cáo PowerPoint Ngữ văn / Giáo dục địa phương THPT
                </p>
              </div>
            </div>

            {/* Mobile Dark Mode Toggle */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                id="btn-toggle-dark-mode-mobile"
                onClick={onToggleDarkMode}
                className={`p-2 rounded-xl border transition-all text-xs flex items-center gap-1 ${
                  isDarkMode
                    ? 'bg-[#292521] border-[#4a4237] text-amber-300 hover:bg-[#332e29]'
                    : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                }`}
                title={isDarkMode ? 'Chuyển sang nền sáng (Lụa ngà)' : 'Chuyển sang nền tối (Mực tàu & Giấy cổ)'}
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-stone-600" />}
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className={`flex items-center overflow-x-auto pb-1 lg:pb-0 gap-1 p-1 rounded-xl border text-xs ${
            isDarkMode 
              ? 'bg-[#221f1c] border-[#3d362e]' 
              : 'bg-stone-100 border-stone-200'
          }`}>
            <button
              id="tab-slides"
              onClick={() => setActiveTab('slides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'slides'
                  ? isDarkMode 
                    ? 'bg-[#332e29] text-amber-300 shadow-xs font-semibold' 
                    : 'bg-white text-red-900 shadow-xs font-semibold'
                  : isDarkMode
                    ? 'text-[#a89d8d] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Slide PowerPoint ({currentSlide}/{totalSlides})</span>
            </button>

            <button
              id="tab-research"
              onClick={() => setActiveTab('research')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'research'
                  ? isDarkMode 
                    ? 'bg-[#332e29] text-amber-300 shadow-xs font-semibold' 
                    : 'bg-white text-red-900 shadow-xs font-semibold'
                  : isDarkMode
                    ? 'text-[#a89d8d] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tài liệu (Phần I - X)</span>
            </button>

            <button
              id="tab-script"
              onClick={() => setActiveTab('script')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'script'
                  ? isDarkMode 
                    ? 'bg-[#332e29] text-amber-300 shadow-xs font-semibold' 
                    : 'bg-white text-red-900 shadow-xs font-semibold'
                  : isDarkMode
                    ? 'text-[#a89d8d] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Kịch bản thuyết trình</span>
            </button>

            <button
              id="tab-quiz"
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'quiz'
                  ? isDarkMode 
                    ? 'bg-[#332e29] text-amber-300 shadow-xs font-semibold' 
                    : 'bg-white text-red-900 shadow-xs font-semibold'
                  : isDarkMode
                    ? 'text-[#a89d8d] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hỏi đáp tương tác</span>
            </button>

            <button
              id="tab-export"
              onClick={() => setActiveTab('export')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'export'
                  ? isDarkMode 
                    ? 'bg-[#332e29] text-amber-300 shadow-xs font-semibold' 
                    : 'bg-white text-red-900 shadow-xs font-semibold'
                  : isDarkMode
                    ? 'text-[#a89d8d] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Xuất & Tải</span>
            </button>
          </div>

          {/* Action buttons on Desktop */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Dark Mode Toggle Button */}
            <button
              id="btn-toggle-dark-mode"
              onClick={onToggleDarkMode}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all font-medium ${
                isDarkMode
                  ? 'bg-[#28231e] hover:bg-[#342e28] text-amber-300 border-[#4a4136]'
                  : 'bg-white hover:bg-stone-50 text-stone-700 border-stone-200 shadow-2xs'
              }`}
              title="Chuyển đổi giao diện Sáng / Nền tối mực tàu & giấy cổ"
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                  <span>Nền Lụa ngà</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-700" />
                  <span>Mực tàu & Giấy cổ</span>
                </>
              )}
            </button>

            <button
              id="btn-present-mode"
              onClick={onLaunchPresentation}
              className="flex items-center gap-1.5 text-xs bg-red-900 hover:bg-red-950 text-white px-3.5 py-1.5 rounded-lg shadow-xs font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Trình chiếu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

