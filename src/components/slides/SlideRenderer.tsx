import React, { useState } from 'react';
import { SlideData } from '../../types';
import { 
  Feather, MapPin, Award, BookOpen, Quote, Sparkles, Wind, Bird, 
  Landmark, HelpCircle, CheckCircle2, ChevronRight, Volume2, 
  ExternalLink, FileText, ArrowRight, Heart, Compass, Check
} from 'lucide-react';
import { speakVietnamese, stopSpeech } from '../../utils/audio';

interface SlideRendererProps {
  slide: SlideData;
  fontSize: 'normal' | 'large' | 'xl';
  slideTheme: 'parchment' | 'chalkboard' | 'dark-ink';
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  fontSize,
  slideTheme
}) => {
  const [activeRhymeHighlight, setActiveRhymeHighlight] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTabVerse, setActiveTabVerse] = useState<number>(0);
  const [revealedQuiz, setRevealedQuiz] = useState<Record<number, boolean>>({});

  // Font size multiplier classes
  const textScale = {
    title: fontSize === 'xl' ? 'text-2xl sm:text-3xl lg:text-4xl' : fontSize === 'large' ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-2xl lg:text-3xl',
    body: fontSize === 'xl' ? 'text-base sm:text-lg' : fontSize === 'large' ? 'text-sm sm:text-base' : 'text-xs sm:text-sm',
    lead: fontSize === 'xl' ? 'text-lg sm:text-xl' : fontSize === 'large' ? 'text-base sm:text-lg' : 'text-sm sm:text-base',
    small: fontSize === 'xl' ? 'text-xs sm:text-sm' : fontSize === 'large' ? 'text-[11px] sm:text-xs' : 'text-[10px] sm:text-xs'
  };

  // Color mappings based on slide theme
  const isChalk = slideTheme === 'chalkboard';
  const isDarkInk = slideTheme === 'dark-ink';
  const isParchment = slideTheme === 'parchment';

  const themeText = {
    heading: isChalk ? 'text-amber-100' : isDarkInk ? 'text-[#f5f0e6]' : 'text-stone-900',
    subtitle: isChalk ? 'text-emerald-200/90' : isDarkInk ? 'text-amber-200/90' : 'text-amber-950/80',
    body: isChalk ? 'text-stone-100' : isDarkInk ? 'text-[#e5dfd5]' : 'text-stone-800',
    cardBg: isChalk ? 'bg-[#1b3d2b]/80 border-emerald-800/60' : isDarkInk ? 'bg-[#221e1a]/90 border-[#3f3830]' : 'bg-white/90 border-stone-200/90',
    cardAltBg: isChalk ? 'bg-[#153122]/90 border-emerald-900' : isDarkInk ? 'bg-[#2a2520] border-[#4a4034]' : 'bg-amber-50/70 border-amber-200/80',
    accentText: isChalk ? 'text-amber-300' : isDarkInk ? 'text-amber-300' : 'text-red-900',
    accentBg: isChalk ? 'bg-amber-400 text-stone-950' : isDarkInk ? 'bg-red-900 text-amber-100' : 'bg-red-900 text-white',
    border: isChalk ? 'border-emerald-800/50' : isDarkInk ? 'border-[#3f3830]' : 'border-stone-200'
  };

  const handleToggleAudio = (text: string) => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      speakVietnamese(text, () => setIsPlayingAudio(false));
    }
  };

  const toggleQuizReveal = (index: number) => {
    setRevealedQuiz((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  /* ============================================================
     SLIDE 1: MAJESTIC HERO TITLE
     ============================================================ */
  if (slide.id === 1) {
    return (
      <div className="flex-1 flex flex-col justify-between py-2 sm:py-4">
        <div className="text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto">
          {/* Imperial Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border shadow-xs bg-red-900/10 border-red-800/30 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
            <span className={themeText.accentText}>MÔN NGỮ VĂN & GIÁO DỤC ĐỊA PHƯƠNG • LỚP 11A3 – TRƯỜNG THPT LƯƠNG PHÚ</span>
          </div>

          <h1 className={`font-classical font-black tracking-tight leading-tight uppercase ${
            fontSize === 'xl' ? 'text-3xl sm:text-4xl lg:text-5xl' : fontSize === 'large' ? 'text-2xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl lg:text-4xl'
          } ${themeText.heading}`}>
            TÌM HIỂU TÁC GIẢ ĐỖ CẬN & THI PHẨM XUÂN YẾN
          </h1>

          <div className="inline-block">
            <span className={`text-base sm:text-xl font-classical font-medium italic px-4 py-1 rounded-xl border ${themeText.cardAltBg} ${themeText.subtitle}`}>
              春燕 – Cánh Én Mùa Xuân • Bậc Đại Khoa Xứ Trà Thái Nguyên
            </span>
          </div>
        </div>

        {/* 3 Core Pillars Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-4">
          <div className={`p-4 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs ${themeText.accentBg}`}>
                I
              </div>
              <h3 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                Chủ Đề Học Thuật
              </h3>
            </div>
            <p className={`${textScale.body} ${themeText.body} leading-relaxed`}>
              Nghiên cứu về thân thế, sự nghiệp Tiến sĩ Đỗ Cận và thi phẩm chữ Hán đặc sắc <strong>“Xuân yến”</strong> thời Hồng Đức.
            </p>
            <span className={`mt-3 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${isChalk ? 'bg-emerald-900 text-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
              Khoa cử 1478
            </span>
          </div>

          <div className={`p-4 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs bg-amber-500 text-stone-950`}>
                II
              </div>
              <h3 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                Giá Trị Địa Phương
              </h3>
            </div>
            <p className={`${textScale.body} ${themeText.body} leading-relaxed`}>
              Gắn liền di tích Quốc gia Đền Đỗ Cận (TP. Phổ Yên) và truyền thống hiếu học của quê hương đất trà Thái Nguyên.
            </p>
            <span className={`mt-3 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${isChalk ? 'bg-emerald-900 text-emerald-200' : 'bg-amber-100 text-amber-950 border border-amber-300'}`}>
              Phổ Yên – Thái Nguyên
            </span>
          </div>

          <div className={`p-4 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div className="flex items-center gap-2.5 mb-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs bg-emerald-700 text-white`}>
                III
              </div>
              <h3 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                Phương Pháp Khoa Học
              </h3>
            </div>
            <p className={`${textScale.body} ${themeText.body} leading-relaxed`}>
              Khảo chứng nghiêm cẩn từ Toàn Việt thi lục: phân biệt rõ <strong>nguyên tác Hán tự – phiên âm – dịch nghĩa – dịch thơ</strong>.
            </p>
            <span className={`mt-3 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded w-fit ${isChalk ? 'bg-emerald-900 text-emerald-200' : 'bg-emerald-50 text-emerald-900 border border-emerald-200'}`}>
              Văn bản chuẩn Hán Nôm
            </span>
          </div>
        </div>

        {/* Featured Opening Poetry Snippet */}
        <div className={`p-3 sm:p-4 rounded-2xl border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 ${themeText.cardAltBg}`}>
          <div className="flex items-center gap-3">
            <Quote className={`w-6 h-6 shrink-0 ${themeText.accentText}`} />
            <div className={`font-classical italic font-semibold ${textScale.lead} ${themeText.heading}`}>
              “Đình viện phong vi trúc ảnh đê / Hoạ thiềm thâm xứ đới hương nê...”
            </div>
          </div>
          <div className="text-xs text-right shrink-0">
            <span className="font-bold block text-red-900 dark:text-amber-300">LỚP 11A3 • THPT LƯƠNG PHÚ</span>
            <span className="opacity-75">Thái Nguyên – Năm học 2026</span>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 2: TIMELINE & MILESTONES (ĐỖ CẬN)
     ============================================================ */
  if (slide.id === 2) {
    const milestones = [
      {
        year: '1434',
        title: 'Năm sinh & Xuất thân',
        desc: 'Tên khai sinh là Đỗ Viễn, tự Hữu Khác, hiệu Phổ Sơn. Quê tại làng Thống Thượng, xã Minh Đức, huyện Phổ Yên, tỉnh Thái Nguyên.'
      },
      {
        year: '1478',
        title: 'Đỗ Tiến sĩ & Đổi tên',
        desc: 'Đỗ Đệ tam giáp đồng Tiến sĩ khoa Mậu Tuất (Hồng Đức 9). Vua Lê Thánh Tông quý mến ban đổi tên “Đỗ Cận” (gần gũi quân vương).'
      },
      {
        year: '1483',
        title: 'Phó sứ đi sứ nhà Minh',
        desc: 'Cùng đoàn sứ thần sang Yên Kinh, bang giao khéo léo, lưu lại dấu ấn thơ văn đi sứ và uy tín quốc gia thời Lê sơ.'
      },
      {
        year: 'Danh Thần',
        title: 'Thượng thư & Hội Tao Đàn',
        desc: 'Giữ chức Hàn lâm viện Thị độc, Tham nghị xứ Quảng Nam, thăng Thượng thư bộ Lại, là thành viên ưu tú Hội Tao Đàn Nhị thập bát tú.'
      }
    ];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="text-center max-w-2xl mx-auto mb-2">
          <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100 text-red-900 border border-red-200">
            Hành trình đại khoa
          </span>
          <p className={`mt-1 font-serif italic text-xs sm:text-sm ${themeText.subtitle}`}>
            Bậc danh thần lỗi lạc, tài đức trọn vẹn thời thịnh trị Hồng Đức thế kỷ XV
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {milestones.map((m, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-2xl border shadow-xs flex flex-col justify-between relative overflow-hidden transition-all hover:-translate-y-0.5 ${themeText.cardBg}`}
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-900/5 rounded-bl-full pointer-events-none" />
              <div>
                <span className={`inline-block px-3 py-1 rounded-xl font-classical font-black text-sm sm:text-base mb-2.5 ${themeText.accentBg}`}>
                  {m.year}
                </span>
                <h4 className={`font-classical font-bold ${textScale.lead} ${themeText.heading} mb-1.5`}>
                  {m.title}
                </h4>
                <p className={`${textScale.body} ${themeText.body} leading-relaxed`}>
                  {m.desc}
                </p>
              </div>
              <div className={`mt-3 pt-2 border-t text-[11px] opacity-75 font-mono ${themeText.border}`}>
                Chặng {idx + 1} / 4
              </div>
            </div>
          ))}
        </div>

        <div className={`p-3.5 rounded-2xl border flex items-center justify-between gap-3 text-xs ${themeText.cardAltBg}`}>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <span className="font-medium">
              Tên Tiến sĩ Đỗ Cận được khắc trang trọng trên <strong>Tấm bia số 6</strong> tại Di tích Quốc gia đặc biệt Văn Miếu – Quốc Tử Giám Hà Nội.
            </span>
          </div>
          <span className="hidden sm:inline px-2.5 py-1 rounded-lg bg-red-900 text-white font-bold text-[11px] shrink-0">
            Chính sử kiểm chứng
          </span>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 3: THÁI NGUYÊN & DI TÍCH (BENTO)
     ============================================================ */
  if (slide.id === 3) {
    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column: Geographic Roots */}
          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between space-y-3 ${themeText.cardBg}`}>
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-base mb-3 border border-emerald-300">
                <MapPin className="w-5 h-5 text-emerald-800" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Quê Hương
              </span>
              <h3 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                TP. Phổ Yên – Thái Nguyên
              </h3>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Đỗ Cận sinh ra tại làng Thống Thượng, xã Minh Đức, huyện Phổ Yên (nay là tổ dân phố Thống Thượng, phường Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên).
              </p>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${themeText.cardAltBg}`}>
              <strong>Ý nghĩa:</strong> Vùng đất giàu truyền thống yêu nước và hiếu học kiên cường phía Nam tỉnh Thái Nguyên.
            </div>
          </div>

          {/* Center Column: Historic Monuments */}
          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between space-y-3 ${themeText.cardBg}`}>
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base mb-3 border border-amber-300">
                <Landmark className="w-5 h-5 text-amber-800" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                Di Tích Quốc Gia (2014)
              </span>
              <h3 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                Đền Thờ Tiến Sĩ Đỗ Cận
              </h3>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Đền thờ Đỗ Cận tại TDP Thống Thượng được Bộ VHTTDL xếp hạng là <strong>Di tích Lịch sử cấp Quốc gia</strong> năm 2014. Ông còn có công xây dựng Đền Lục Giáp (xã Đắc Sơn) theo mô hình Văn Miếu cổ vũ việc học.
              </p>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${themeText.cardAltBg}`}>
              <strong>Lễ hội:</strong> Hằng năm nhân dân địa phương tổ chức lễ hội dâng hương tưởng niệm danh nhân vào mùa xuân.
            </div>
          </div>

          {/* Right Column: Cultural Educational Value */}
          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between space-y-3 ${themeText.cardBg}`}>
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-900 flex items-center justify-center font-bold text-base mb-3 border border-red-300">
                <Sparkles className="w-5 h-5 text-red-800" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                Giá Trị Giáo Dục
              </span>
              <h3 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                Biểu Tượng Khai Khoa
              </h3>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Đỗ Cận là cây cầu nối văn hóa giữa kinh đô Thăng Long và vùng trung du miền núi; tấm gương sáng ngời về ý chí hiếu học vượt khó để thành tài cho học sinh THPT Thái Nguyên hôm nay.
              </p>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${themeText.cardAltBg}`}>
              <strong>Hiện diện:</strong> Tên ông được đặt cho trường học, đường phố trang trọng tại Thái Nguyên.
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 4: GIỚI THIỆU TÁC PHẨM (XUÂN YẾN)
     ============================================================ */
  if (slide.id === 4) {
    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-5 rounded-2xl border shadow-xs space-y-3 ${themeText.cardBg}`}>
            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${themeText.accentBg}`}>
              Nhan Đề: Xuân Yến (春燕)
            </span>
            <h3 className={`font-classical font-bold text-xl ${themeText.heading}`}>
              Cánh Én Báo Mùa Xuân
            </h3>
            <ul className={`space-y-2 ${textScale.body} ${themeText.body}`}>
              <li>• <strong>“Xuân” (春):</strong> Mùa xuân, tượng trưng cho sức sống, sự tươi non, sinh sôi nảy nở của trời đất.</li>
              <li>• <strong>“Yến” (燕):</strong> Loài chim sứ giả mang mùa xuân về, biểu trưng cho sự kết đôi, xây tổ ấm và hạnh phúc sum vầy.</li>
              <li>• Nhan đề định hình ngay không gian thẩm mỹ và hơi thở mùa xuân thanh tao.</li>
            </ul>
          </div>

          <div className={`p-5 rounded-2xl border shadow-xs space-y-3 ${themeText.cardBg}`}>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-400 text-stone-950">
              Thể Loại & Thi Pháp
            </span>
            <h3 className={`font-classical font-bold text-xl ${themeText.heading}`}>
              Thất Ngôn Tứ Tuyệt Đường Luật
            </h3>
            <ul className={`space-y-2 ${textScale.body} ${themeText.body}`}>
              <li>• Bài thơ gồm <strong>4 câu</strong>, mỗi câu <strong>7 chữ</strong>, tổng cộng vỏn vẹn <strong>28 âm tiết</strong> viết bằng chữ Hán.</li>
              <li>• Niêm luật chặt chẽ, hiệp vần chân ở cuối các câu 1, 2 và 4: <em>đê – nê – tê</em> (vần bằng).</li>
              <li>• Kết cấu mẫu mực theo cấu tứ Khai – Thừa – Chuyển – Hợp (hoặc Tả cảnh trước – Ngụ tình sau).</li>
            </ul>
          </div>

          <div className={`p-5 rounded-2xl border shadow-xs space-y-3 ${themeText.cardBg}`}>
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-700 text-white">
              Xuất Xứ Văn Bản
            </span>
            <h3 className={`font-classical font-bold text-xl ${themeText.heading}`}>
              Toàn Việt Thi Lục
            </h3>
            <ul className={`space-y-2 ${textScale.body} ${themeText.body}`}>
              <li>• Tác phẩm được Bảng nhãn <strong>Lê Quý Đôn</strong> (1726 – 1784) tuyển chọn kỹ lưỡng vào tổng tập thi ca quốc gia <em>“Toàn Việt thi lục”</em>.</li>
              <li>• Văn bản không có lời tựa, khẳng định giá trị nghệ thuật thuần khiết của thi phẩm.</li>
              <li>• Một viên ngọc quý tiêu biểu của dòng văn học trung đại thời Lê sơ.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 5: NGUYÊN TÁC CHỮ HÁN & PHIÊN ÂM
     ============================================================ */
  if (slide.id === 5) {
    const fullPoemVi = "Đình viện phong vi trúc ảnh đê. Hoạ thiềm thâm xứ đới hương nê. Lục song trú tĩnh vô nhân đáo. Khiêu bát xuân tâm nhật vị tê.";

    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        {/* Recitation Action Bar */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveRhymeHighlight(!activeRhymeHighlight)}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-bold border transition-all flex items-center gap-1.5 shadow-2xs ${
                activeRhymeHighlight 
                  ? 'bg-amber-400 text-stone-950 border-amber-500' 
                  : 'bg-white/80 hover:bg-white text-stone-800 border-stone-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{activeRhymeHighlight ? 'Đang bật soi Vần bằng (đê - nê - tê)' : 'Soi vần bằng Đường luật (3 chữ hiệp vần)'}</span>
            </button>

            <button
              onClick={() => handleToggleAudio(fullPoemVi)}
              className={`text-xs px-3.5 py-1.5 rounded-xl font-bold border transition-all flex items-center gap-1.5 shadow-2xs ${
                isPlayingAudio 
                  ? 'bg-red-900 text-white border-red-950' 
                  : 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-800'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isPlayingAudio ? 'Dừng đọc' : 'Nghe ngâm thơ diễn cảm'}</span>
            </button>
          </div>

          <span className="text-xs font-serif italic text-stone-500">
            * Nhấn chữ vần để quan sát sự cân đối của Đường luật
          </span>
        </div>

        {/* 2-Column Calligraphy Scroll Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: Chinese Characters */}
          <div className={`p-6 sm:p-8 rounded-2xl border shadow-md text-center flex flex-col justify-center relative overflow-hidden ${themeText.cardBg}`}>
            <div className="absolute top-3 left-4 text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-red-100 text-red-900 border border-red-200">
              Nguyên tác chữ Hán
            </div>

            <div className="my-auto py-6 space-y-4 font-classical leading-relaxed text-2xl sm:text-3xl lg:text-4xl tracking-widest">
              <p>
                庭 院 風 微 竹 影 <span className={activeRhymeHighlight ? 'bg-amber-300 text-stone-950 font-bold px-1 rounded shadow-xs' : ''}>低</span>，
              </p>
              <p>
                畫 簷 深 處 帶 香 <span className={activeRhymeHighlight ? 'bg-amber-300 text-stone-950 font-bold px-1 rounded shadow-xs' : ''}>泥</span>。
              </p>
              <p>
                綠 窻 晝 静 無 人 到，
              </p>
              <p>
                挑 撥 春 心 日 未 <span className={activeRhymeHighlight ? 'bg-amber-300 text-stone-950 font-bold px-1 rounded shadow-xs' : ''}>西</span>。
              </p>
            </div>

            <div className="text-[11px] opacity-60 font-mono text-center">
              (Vỏn vẹn 28 Hán tự cô đọng, khúc chiết, niêm luật nghiêm cẩn)
            </div>
          </div>

          {/* Right: Sino-Vietnamese Phonetics */}
          <div className={`p-6 sm:p-8 rounded-2xl border shadow-md flex flex-col justify-center ${themeText.cardBg}`}>
            <div className="text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 mb-4 w-fit">
              Phiên âm Hán – Việt
            </div>

            <div className="space-y-3 font-serif italic text-lg sm:text-xl lg:text-2xl leading-relaxed">
              <p>
                “Đình viện phong vi trúc ảnh <strong className={activeRhymeHighlight ? 'text-red-700 underline font-bold' : ''}>đê</strong>,
              </p>
              <p>
                Hoạ thiềm thâm xứ đới hương <strong className={activeRhymeHighlight ? 'text-red-700 underline font-bold' : ''}>nê</strong>.
              </p>
              <p>
                Lục song trú tĩnh vô nhân đáo,
              </p>
              <p>
                Khiêu bát xuân tâm nhật vị <strong className={activeRhymeHighlight ? 'text-red-700 underline font-bold' : ''}>tê</strong> (tây).”
              </p>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs leading-relaxed space-y-1 ${themeText.border} ${themeText.body}`}>
              <p><strong>• Nhịp thơ:</strong> Ngắt nhịp 4/3 truyền thống hoặc 2/2/3 tạo âm hưởng trầm lắng, ung dung.</p>
              <p><strong>• Hiệp vần bằng:</strong> Chữ cuối câu 1 (<em>đê</em>), câu 2 (<em>nê</em>) và câu 4 (<em>tê</em>) hiệp vần êm ái.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 6: MA TRẬN ĐỐI CHIẾU BẢN DỊCH
     ============================================================ */
  if (slide.id === 6) {
    const translationRows = [
      {
        verseHan: '庭院風微竹影低',
        phienAm: 'Đình viện phong vi trúc ảnh đê',
        dichNghia: 'Gió thoảng ngoài sân, bóng trúc rủ thấp xuống',
        dichTho1: 'Gió phất tre sân, bóng thướt tha',
        dichTho2: 'Sân gió mát, bóng trúc xòa'
      },
      {
        verseHan: '畫簷深處帶香泥',
        phienAm: 'Hoạ thiềm thâm xứ đới hương nê',
        dichNghia: '(Én xuân) tha bùn thơm làm tổ kín dưới mái hiên chạm vẽ',
        dichTho1: 'Bùn thơm lót tổ dưới hiên nhà',
        dichTho2: 'Bùn thơm lót tổ, hiên nhà én xây'
      },
      {
        verseHan: '綠窻晝静無人到',
        phienAm: 'Lục song trú tĩnh vô nhân đáo',
        dichNghia: 'Bên cửa song biếc, ban ngày yên lặng không người tới',
        dichTho1: 'Bên song yên lặng không người tới',
        dichTho2: 'Bên song vắng vẻ ban ngày'
      },
      {
        verseHan: '挑撥春心日未西',
        phienAm: 'Khiêu bát xuân tâm nhật vị tê',
        dichNghia: 'Khêu gợi lòng xuân lúc mặt trời chưa xế về tây',
        dichTho1: 'Gợi mối lòng xuân trước bóng tà',
        dichTho2: 'Lòng xuân thao thức trời tây chưa tà'
      }
    ];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-3 py-2">
        {/* Table Comparison Header */}
        <div className="grid grid-cols-12 gap-2 text-xs font-bold uppercase tracking-wider px-2 py-1 opacity-75">
          <div className="col-span-3">Nguyên tác & Phiên âm</div>
          <div className="col-span-3">Dịch nghĩa sát nguyên bản</div>
          <div className="col-span-3">Bản 1 (Hoàng Việt thi văn tuyển)</div>
          <div className="col-span-3">Bản 2 (Vũ Bình Lục dịch)</div>
        </div>

        {/* 4 Rows corresponding to 4 verses */}
        <div className="space-y-2.5">
          {translationRows.map((row, idx) => (
            <div 
              key={idx}
              className={`grid grid-cols-12 gap-2 p-3 sm:p-4 rounded-xl border shadow-2xs text-xs sm:text-sm items-center ${themeText.cardBg}`}
            >
              <div className="col-span-3 pr-2">
                <span className="font-classical font-bold text-red-900 block text-xs sm:text-base">
                  {row.verseHan}
                </span>
                <span className="italic font-serif opacity-80 block text-xs">
                  {row.phienAm}
                </span>
              </div>
              <div className="col-span-3 pr-2 font-serif text-stone-800 leading-snug">
                {row.dichNghia}
              </div>
              <div className="col-span-3 pr-2 font-serif italic text-amber-950 leading-snug bg-amber-50/50 p-2 rounded-lg border border-amber-200/50">
                “{row.dichTho1}”
              </div>
              <div className="col-span-3 font-serif italic text-emerald-950 leading-snug bg-emerald-50/50 p-2 rounded-lg border border-emerald-200/50">
                “{row.dichTho2}”
              </div>
            </div>
          ))}
        </div>

        <div className={`p-3 rounded-xl border text-xs text-center font-serif italic ${themeText.cardAltBg}`}>
          💡 Cả hai bản dịch lục bát đều tái hiện tinh tế cảnh và tình, song nguyên tác tứ tuyệt chữ Hán có độ nén ngôn từ và khoảng lặng cảm xúc cô đọng hơn.
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDES 7, 8, 9, 10: PHÂN TÍCH 4 CÂU THƠ (2-COLUMN SPOTLIGHT)
     ============================================================ */
  if (slide.id >= 7 && slide.id <= 10) {
    const verseFocusMap: Record<number, {
      verseHan: string;
      phienAm: string;
      dichNghia: string;
      deviceTag: string;
      badgeText: string;
      keyTerms: { term: string; meaning: string }[];
    }> = {
      7: {
        verseHan: '庭院風微竹影低',
        phienAm: 'Đình viện phong vi trúc ảnh đê',
        dichNghia: 'Gió thoảng ngoài sân, bóng trúc rủ thấp xuống nền sân',
        deviceTag: 'Thủ pháp Lấy Động Tả Tĩnh',
        badgeText: 'Câu 1 (Khai) • Không gian mùa xuân',
        keyTerms: [
          { term: 'Đình viện (庭院)', meaning: 'Sân viện tĩnh mịch, thanh nhã chốn quan phủ/thư phòng thời xưa.' },
          { term: 'Phong vi (風微)', meaning: 'Gió thoảng nhẹ mơn man, bước chuyển mùa êm ả dịu dàng của tiết xuân.' },
          { term: 'Trúc ảnh đê (竹影低)', meaning: 'Bóng trúc la đà lay động, ngả nghiêng sát mặt sân; không tả cây trúc mà bắt lấy chiếc bóng thanh tao.' }
        ]
      },
      8: {
        verseHan: '畫簷深處帶香泥',
        phienAm: 'Hoạ thiềm thâm xứ đới hương nê',
        dichNghia: '(Chim én) tha bùn thơm làm tổ kín sâu dưới mái hiên vẽ',
        deviceTag: 'Nghệ thuật Ý Tại Ngôn Ngoại',
        badgeText: 'Câu 2 (Thừa) • Sức sống mùa xuân',
        keyTerms: [
          { term: 'Đới hương nê (帶香泥)', meaning: 'Ngậm bùn đượm hương hoa cỏ đất trời sau mưa xuân về xây tổ ấm.' },
          { term: 'Họa thiềm (畫簷)', meaning: 'Mái hiên chạm khắc hoa văn tinh xảo của dinh thự, gợi sự đài các.' },
          { term: 'Thâm xứ (深處)', meaning: 'Góc sâu kín đáo, nơi đôi chim én cùng nhau vun đắp tổ ấm sum vầy.' }
        ]
      },
      9: {
        verseHan: '綠窻晝静無人到',
        phienAm: 'Lục song trú tĩnh vô nhân đáo',
        dichNghia: 'Bên khung cửa sổ biếc, ban ngày yên ắng tuyệt đối không ai tới',
        deviceTag: 'Chuyển Dịch Không Gian & Điểm Nhìn',
        badgeText: 'Câu 3 (Chuyển) • Tâm cảnh tĩnh mịch',
        keyTerms: [
          { term: 'Lục song (綠窻)', meaning: 'Cửa sổ sơn xanh/dán lụa biếc; ranh giới ngăn cách cõi ngoài và lòng người.' },
          { term: 'Trú tĩnh (晝静)', meaning: 'Ban ngày vắng lặng, nhấn mạnh sự thanh bình và khoảng lặng tuyệt đối.' },
          { term: 'Vô nhân đáo (無人到)', meaning: 'Không một bóng người lui tới, khắc sâu thế giới cô độc tao nhã của thi nhân.' }
        ]
      },
      10: {
        verseHan: '挑撥春心日未西',
        phienAm: 'Khiêu bát xuân tâm nhật vị tê',
        dichNghia: 'Đánh thức, khơi dậy lòng xuân lúc mặt trời chưa xế về tây',
        deviceTag: 'Thủ pháp Nhãn Tự & Tả Cảnh Ngụ Tình',
        badgeText: 'Câu 4 (Hợp) • Cảm xúc bừng tỉnh',
        keyTerms: [
          { term: 'Khiêu bát (挑撥)', meaning: 'Khêu gợi, kích thích, đánh thức cảm xúc đang dồn nén trong cõi lòng.' },
          { term: 'Xuân tâm (春心)', meaning: 'Lòng xuân, tình yêu đời, khát khao sum vầy, sự gắn bó tha thiết với cuộc sống.' },
          { term: 'Nhật vị tê (日未西)', meaning: 'Mặt trời còn chưa lặn; ngày dài dằng dặc càng làm cõi lòng thêm thao thức bâng khuâng.' }
        ]
      }
    };

    const focus = verseFocusMap[slide.id];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left Column (5 Cols): Verse Spotlight */}
          <div className={`md:col-span-5 p-6 rounded-2xl border shadow-md flex flex-col justify-between ${themeText.cardBg}`}>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded inline-block mb-3 ${themeText.accentBg}`}>
                {focus.badgeText}
              </span>
              <h2 className="font-classical font-black text-2xl sm:text-3xl text-red-900 tracking-wider mb-2">
                {focus.verseHan}
              </h2>
              <p className="font-serif italic text-lg sm:text-xl font-bold text-stone-900 mb-2">
                “{focus.phienAm}”
              </p>
              <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed font-serif">
                <strong>Dịch nghĩa:</strong> {focus.dichNghia}
              </div>
            </div>

            <div className={`mt-4 pt-3 border-t text-xs ${themeText.border}`}>
              <span className="font-bold block text-red-900 mb-1">{focus.deviceTag}</span>
              <p className="opacity-80">
                Nghệ thuật trung đại đạt đỉnh cao qua sự kết hợp giữa thi liệu ước lệ và rung động chân thực của con người.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): 3 Key Analytic Term Cards */}
          <div className="md:col-span-7 space-y-3 flex flex-col justify-center">
            {focus.keyTerms.map((term, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border shadow-2xs flex items-start gap-3.5 transition-all hover:border-amber-600 ${themeText.cardBg}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${themeText.accentBg}`}>
                  {idx + 1}
                </div>
                <div>
                  <h4 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                    {term.term}
                  </h4>
                  <p className={`${textScale.body} ${themeText.body} mt-1 leading-relaxed`}>
                    {term.meaning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 11: ĐẶC SẮC NGHỆ THUẬT (BENTO 4 TRỤ CỘT)
     ============================================================ */
  if (slide.id === 11) {
    const pillars = [
      {
        title: 'Thể thơ Tứ tuyệt mẫu mực',
        desc: 'Kết cấu Khai – Thừa – Chuyển – Hợp chuẩn chỉnh, niêm luật bằng trắc nghiêm cẩn; đúc kết trọn vẹn cảnh và tình chỉ trong 28 chữ Hán.',
        tag: 'Niêm luật',
        color: 'red'
      },
      {
        title: 'Bút pháp Lấy động tả tĩnh',
        desc: 'Ngọn gió thoảng lay bóng trúc và tiếng én tha bùn không phá vỡ mà càng tô đậm không gian tĩnh mịch, bình yên tuyệt đối của sân viện.',
        tag: 'Thi pháp',
        color: 'amber'
      },
      {
        title: 'Nghệ thuật Tả cảnh ngụ tình',
        desc: 'Mượn bức tranh ngoại cảnh ấm cúng sum vầy của đôi én để soi chiếu vào nội tâm cô độc, đánh thức lòng xuân tha thiết của con người.',
        tag: 'Ngụ tình',
        color: 'green'
      },
      {
        title: 'Hệ thống thi liệu bác học',
        desc: 'Sự hòa quyện giữa các thi liệu cung đình thanh cao (họa thiềm, lục song) với thi liệu đồng nội gần gũi, giàu bản sắc phương Nam (trúc, bùn thơm).',
        tag: 'Ngôn ngữ',
        color: 'stone'
      }
    ];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between space-y-2 ${themeText.cardBg}`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${themeText.accentBg}`}>
                    Trụ cột {idx + 1}: {p.tag}
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                <h3 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                  {p.title}
                </h3>
                <p className={`${textScale.body} ${themeText.body} mt-1.5 leading-relaxed`}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 12: GIÁ TRỊ NỘI DUNG & Ý NGHĨA (DUAL PILLARS)
     ============================================================ */
  if (slide.id === 12) {
    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-3 ${themeText.cardBg}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-700 text-white inline-block mb-2">
                Giá Trị Thẩm Mỹ
              </span>
              <h3 className={`font-classical font-bold text-xl ${themeText.heading}`}>
                Bức Tranh Mùa Xuân Tươi Tắn & Thanh Khiết
              </h3>
              <p className={`${textScale.body} ${themeText.body} leading-relaxed mt-2`}>
                Bài thơ lưu giữ vẻ đẹp tao nhã của mùa xuân phương Nam trong không gian thư phòng truyền thống. Không ồn ào khoa trương mà đằm thắm, thanh sạch, phản chiếu khí thế thái bình thịnh trị của đất nước thời vua Lê Thánh Tông.
              </p>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${themeText.cardAltBg}`}>
              <strong>Ý nghĩa:</strong> Khác với thơ vịnh vật răn dạy khô khan, “Xuân yến” tràn đầy hơi thở mùa xuân tươi non.
            </div>
          </div>

          <div className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-3 ${themeText.cardBg}`}>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded inline-block mb-2 ${themeText.accentBg}`}>
                Giá Trị Nhân Văn
              </span>
              <h3 className={`font-classical font-bold text-xl ${themeText.heading}`}>
                Vẻ Đẹp Tâm Hồn Thi Nhân Đỗ Cận
              </h3>
              <p className={`${textScale.body} ${themeText.body} leading-relaxed mt-2`}>
                Thể hiện sự nhạy cảm tinh vi của một bậc đại khoa: biết lắng nghe từng chuyển động khẽ khàng nhất của tạo vật. Đằng sau sự tĩnh lặng là một trái tim yêu đời, khát khao hòa nhập và trân trọng từng phút giây của cuộc sống.
              </p>
            </div>
            <div className={`p-3 rounded-xl border text-xs ${themeText.cardAltBg}`}>
              <strong>Khẳng định:</strong> Minh chứng cho tài năng của bậc danh thần kiêm thi nhân tài hoa xứ Trà Thái Nguyên.
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 13: ĐÚC KẾT & GIÁO DỤC ĐỊA PHƯƠNG
     ============================================================ */
  if (slide.id === 13) {
    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div>
              <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${themeText.accentBg}`}>
                Tầm Vóc Văn Học
              </span>
              <h4 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                Đỉnh Cao Tứ Tuyệt Thời Lê Sơ
              </h4>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Chỉ 28 chữ Hán cô đọng, bài thơ kết tinh trọn vẹn thi pháp Đường luật mẫu mực: lấy động tả tĩnh, mượn cảnh ngụ tình, ngôn từ hàm súc tinh hoa.
              </p>
            </div>
            <div className="mt-3 text-xs font-serif italic text-amber-700">
              “Một đóa hoa thơm trong di sản văn học trung đại.”
            </div>
          </div>

          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-stone-950">
                Tự Hào Quê Hương
              </span>
              <h4 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                Ngọn Đuốc Hiếu Học Thái Nguyên
              </h4>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Đỗ Cận là danh nhân khai khoa tiêu biểu bậc nhất của Thái Nguyên; tên ông gắn liền với di tích Quốc gia tại Phổ Yên và truyền thống hiếu học bất diệt.
              </p>
            </div>
            <div className="mt-3 text-xs font-serif italic text-amber-700">
              “Cầu nối văn hóa Thăng Long và xứ Trà.”
            </div>
          </div>

          <div className={`p-5 rounded-2xl border shadow-xs flex flex-col justify-between ${themeText.cardBg}`}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-700 text-white">
                Thế Hệ Trẻ Hôm Nay
              </span>
              <h4 className={`font-classical font-bold text-lg mt-2 ${themeText.heading}`}>
                Học Tập & Tiếp Bước
              </h4>
              <p className={`${textScale.body} ${themeText.body} mt-2 leading-relaxed`}>
                Nhắc nhở học sinh THPT Thái Nguyên hôm nay rèn đức luyện tài, trân trọng di sản lịch sử văn hóa và tự hào cống hiến cho quê hương, đất nước.
              </p>
            </div>
            <div className="mt-3 text-xs font-serif italic text-amber-700">
              “Kế thừa và phát huy giá trị tiền nhân.”
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 14: THẢO LUẬN & TƯƠNG TÁC LỚP HỌC
     ============================================================ */
  if (slide.id === 14) {
    const questions = [
      {
        q: '1. Vì sao thi nhân chọn cánh én tha bùn thơm (“đới hương nê”) thay vì muôn hoa rực rỡ để mở ra bức tranh xuân?',
        hint: 'Cánh én là sứ giả mang tin xuân và hơi ấm; chi tiết “bùn thơm” khơi dậy nhựa sống sinh sôi và khát vọng xây tổ ấm.'
      },
      {
        q: '2. Em nhận xét gì về sự chuyển dịch không gian và cảm xúc giữa hai câu đầu và hai câu cuối?',
        hint: 'Hai câu đầu: Ngoại cảnh ngoài sân viện thoáng đãng. Hai câu cuối: Nội cảnh bên song cửa biếc, thu vào chiều sâu nội tâm trăn trở.'
      },
      {
        q: '3. Khái niệm “xuân tâm” có thể hiểu theo những hướng nào và vì sao lại bị đánh thức lúc “nhật vị tê”?',
        hint: 'Có thể là tình yêu đời, nỗi hoài hương của bậc danh thần, hoặc tiếng lòng khao khát hạnh phúc lứa đôi giữa ngày dài thanh vắng.'
      },
      {
        q: '4. Tìm hiểu về danh nhân Đỗ Cận bồi đắp điều gì cho tình yêu quê hương của học sinh Thái Nguyên chúng ta?',
        hint: 'Bồi đắp lòng tự hào về truyền thống hiếu học, ý thức gìn giữ di tích lịch sử đền Đỗ Cận tại Phổ Yên và động lực phấn đấu học tập.'
      }
    ];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-3 py-2">
        <div className="text-center max-w-xl mx-auto mb-1">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-200">
            Tương tác lớp học
          </span>
          <p className="text-xs text-stone-500 italic mt-0.5">
            Nhấn vào từng câu hỏi để người thuyết trình hiển thị gợi ý chốt đáp án trước lớp!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {questions.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => toggleQuizReveal(idx)}
              className={`p-4 rounded-2xl border shadow-2xs cursor-pointer transition-all hover:border-amber-600 ${themeText.cardBg}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className={`w-6 h-6 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${themeText.accentBg}`}>
                  {idx + 1}
                </span>
                <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {revealedQuiz[idx] ? 'Đang hiện gợi ý' : 'Bấm xem gợi ý'}
                </span>
              </div>
              <h4 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                {item.q}
              </h4>
              {revealedQuiz[idx] && (
                <div className="mt-3 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-serif leading-relaxed animate-in fade-in duration-200">
                  <strong>💡 Gợi ý trả lời:</strong> {item.hint}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ============================================================
     SLIDE 15: NGUỒN THAM KHẢO & LỜI CẢM ƠN
     ============================================================ */
  if (slide.id === 15) {
    const references = [
      'Bia Tiến sĩ khoa Mậu Tuất (1478), Văn Miếu – Quốc Tử Giám Hà Nội.',
      'Toàn Việt thi lục – Lê Quý Đôn (Viện Nghiên cứu Hán Nôm & NXB KHXH).',
      'Đại Việt sử ký toàn thư – Ngô Sĩ Liên (Kỷ nhà Lê, triều vua Lê Thánh Tông).',
      'Tài liệu Giáo dục địa phương tỉnh Thái Nguyên (Sở GD&ĐT Thái Nguyên).',
      'Hồ sơ xếp hạng Di tích Lịch sử Quốc gia Đền Đỗ Cận – Bộ VHTTDL (2014).'
    ];

    return (
      <div className="flex-1 flex flex-col justify-center space-y-4 py-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left: References list */}
          <div className={`md:col-span-6 p-5 rounded-2xl border shadow-sm space-y-3 ${themeText.cardBg}`}>
            <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded ${themeText.accentBg}`}>
              Thư Tịch Học Thuật Kiểm Chứng
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
              {references.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{ref}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Thank you box */}
          <div className={`md:col-span-6 p-6 sm:p-8 rounded-2xl border shadow-md text-center space-y-4 ${themeText.cardAltBg}`}>
            <div className="w-12 h-12 rounded-2xl bg-red-900 text-amber-100 flex items-center justify-center font-classical font-black text-2xl mx-auto shadow-md">
              春
            </div>
            <div>
              <h3 className="font-classical font-black text-2xl sm:text-3xl text-stone-900 uppercase">
                XIN CHÂN THÀNH CẢM ƠN!
              </h3>
              <p className="text-sm sm:text-base font-serif italic text-amber-950/80 mt-1">
                Kính chúc Cô giáo và các bạn có một giờ học Ngữ văn thật ý nghĩa và bổ ích!
              </p>
            </div>
            <div className="pt-3 border-t border-amber-300/60 flex items-center justify-center gap-4 text-xs font-semibold text-stone-700">
              <span>Báo Cáo: Tập Thể Lớp 11A3</span>
              <span>•</span>
              <span>Trường THPT Lương Phú (Thái Nguyên)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* Default Fallback for any other slide */
  return (
    <div className="flex-1 flex flex-col justify-center space-y-4">
      <div className="grid grid-cols-1 gap-3.5 my-auto">
        {slide.bulletPoints.map((point, idx) => (
          <div 
            key={idx}
            className={`p-4 rounded-xl border shadow-2xs flex items-start gap-3.5 ${themeText.cardBg}`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 ${themeText.accentBg}`}>
              {idx + 1}
            </div>
            <div className="flex-1">
              {point.heading && (
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className={`font-classical font-bold ${textScale.lead} ${themeText.heading}`}>
                    {point.heading}
                  </h3>
                  {point.badge && (
                    <span className="text-[10px] uppercase tracking-wide bg-amber-100 text-amber-900 px-2 py-0.2 rounded font-semibold">
                      {point.badge}
                    </span>
                  )}
                </div>
              )}
              <p className={`${textScale.body} ${themeText.body} leading-relaxed whitespace-pre-line`}>
                {point.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
