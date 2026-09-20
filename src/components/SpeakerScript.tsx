import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { Clock, UserCheck, Copy, Check, Lightbulb, Volume2 } from 'lucide-react';

interface SpeakerScriptProps {
  isDarkMode?: boolean;
}

export const SpeakerScript: React.FC<SpeakerScriptProps> = ({ isDarkMode = false }) => {
  const [copied, setCopied] = useState(false);

  const totalEstimatedMinutes = 12;

  const handleCopyAll = () => {
    const fullScript = SLIDES_DATA.map(
      (s) => `[SLIDE ${s.id}: ${s.title}]\nThời gian ước tính: ~45 giây\nLời thuyết trình:\n"${s.speakerNotes}"\n`
    ).join('\n---\n\n');

    navigator.clipboard.writeText(fullScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 transition-colors duration-300">
      {/* Top Banner */}
      <div className={`p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border ${
        isDarkMode
          ? 'bg-gradient-to-r from-[#2c1d14] to-[#382618] border-[#4d3826] text-[#f5f0e6]'
          : 'bg-amber-900/90 border-amber-900 text-amber-50'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
              isDarkMode ? 'bg-amber-400 text-stone-950' : 'bg-amber-300 text-stone-900'
            }`}>
              Kịch bản nói cho người thuyết trình
            </span>
            <span className="text-xs text-amber-200">• Ước tính: ~{totalEstimatedMinutes} phút</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-classical font-bold tracking-tight text-white">
            Lời Nói Thuyết Trình Từng Slide (Speaker Script)
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 mt-1">
            Văn phong trang trọng, tự tin, mạch lạc, phù hợp học sinh THPT thuyết trình trước giáo viên và các bạn trong lớp.
          </p>
        </div>

        <button
          onClick={handleCopyAll}
          className={`flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl font-bold transition-all shadow-xs shrink-0 ${
            isDarkMode
              ? 'bg-amber-400 hover:bg-amber-300 text-stone-950'
              : 'bg-amber-100 hover:bg-white text-stone-900'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-700" />
              <span>Đã sao chép toàn bộ</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-stone-900" />
              <span>Sao chép toàn bộ kịch bản</span>
            </>
          )}
        </button>
      </div>

      {/* Practical Tips Box */}
      <div className={`p-4 rounded-xl border flex items-start gap-3 text-xs sm:text-sm transition-colors ${
        isDarkMode
          ? 'bg-[#1e2a22] border-[#2d4234] text-emerald-200'
          : 'bg-emerald-50 border-emerald-200 text-emerald-950'
      }`}>
        <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`} />
        <div>
          <strong className={`font-bold block mb-1 ${isDarkMode ? 'text-emerald-300' : 'text-emerald-900'}`}>
            Bí quyết thuyết trình đạt điểm cao môn Ngữ văn / Giáo dục địa phương:
          </strong>
          <ul className={`list-disc pl-4 space-y-1 ${isDarkMode ? 'text-emerald-200/90' : 'text-emerald-900/90'}`}>
            <li><strong>Ngữ điệu:</strong> Đọc phần thơ (Slide 5, 6) với giọng trầm ấm, chậm rãi, ngắt nhịp 4/3 hoặc 2/2/3 để toát lên phong vị cổ điển.</li>
            <li><strong>Tương tác mắt:</strong> Không nhìn chằm chằm vào màn hình; hãy nhìn bao quát cô giáo và các bạn dưới lớp.</li>
            <li><strong>Nhấn mạnh:</strong> Dừng khoảng 1-2 giây ở các từ khóa đắt giá như <em>“đới hương nê”</em>, <em>“lục song”</em>, <em>“khiêu bát xuân tâm”</em>.</li>
          </ul>
        </div>
      </div>

      {/* Slides Script Stream */}
      <div className="space-y-4">
        {SLIDES_DATA.map((slide, idx) => (
          <div
            key={slide.id}
            className={`p-5 sm:p-6 rounded-2xl border shadow-2xs transition-colors ${
              isDarkMode
                ? 'bg-[#221f1c] border-[#3f3830] hover:border-amber-700/60 text-[#ece5d8]'
                : 'bg-white border-stone-200 hover:border-amber-700/40 text-stone-900'
            }`}
          >
            <div className={`flex items-center justify-between gap-2 border-b pb-3 mb-3 ${
              isDarkMode ? 'border-[#383129]' : 'border-stone-100'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center ${
                  isDarkMode
                    ? 'bg-red-950 text-amber-300 border border-red-900'
                    : 'bg-red-900 text-amber-100'
                }`}>
                  {slide.id}
                </span>
                <span className={`text-xs uppercase tracking-wider font-semibold ${
                  isDarkMode ? 'text-amber-300' : 'text-red-900'
                }`}>
                  Slide {slide.id}: {slide.title}
                </span>
              </div>
              <div className={`flex items-center gap-1.5 text-xs ${isDarkMode ? 'text-[#877c6e]' : 'text-stone-400'}`}>
                <Clock className="w-3.5 h-3.5" />
                <span>~45 - 60s</span>
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-sm leading-relaxed font-serif transition-colors ${
              isDarkMode
                ? 'bg-[#2a2520] border-[#443a2e] text-[#f5f0e6]'
                : 'bg-stone-50/80 border-stone-200/80 text-stone-800'
            }`}>
              <div className={`flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider mb-2 ${
                isDarkMode ? 'text-amber-400' : 'text-stone-500'
              }`}>
                <Volume2 className="w-3.5 h-3.5 text-amber-500" />
                <span>Lời nói của người thuyết trình:</span>
              </div>
              <p className={`italic ${isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'}`}>
                “{slide.speakerNotes}”
              </p>
            </div>

            {/* Cue / Action note */}
            <div className={`mt-3 flex items-center gap-2 text-xs ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
              <UserCheck className={`w-3.5 h-3.5 shrink-0 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
              <span>
                <strong>Gợi ý động tác:</strong> {idx === 0 ? 'Cúi đầu chào cô và cả lớp, mỉm cười tự tin.' : idx === 4 ? 'Chỉ tay lên slide hoặc đọc diễn cảm 4 câu thơ Hán tự.' : idx === 13 ? 'Chủ động mời 1-2 bạn dưới lớp giơ tay phát biểu.' : 'Chuyển slide nhịp nhàng, nhấn giọng ở các luận điểm có dẫn chứng.'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
