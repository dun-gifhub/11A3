import React, { useState } from 'react';
import { RESEARCH_DATA, REFERENCES_DATA } from '../data/researchData';
import { Bookmark, Check, Copy, ChevronRight, BookOpen, Sparkles, Moon } from 'lucide-react';

interface ResearchDocProps {
  isDarkMode?: boolean;
}

export const ResearchDoc: React.FC<ResearchDocProps> = ({ isDarkMode = false }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>('phan-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySection = (id: string, title: string) => {
    const section = RESEARCH_DATA.find((s) => s.id === id);
    if (!section) return;

    // Create plain text content for clipboard
    const tempEl = document.createElement('div');
    tempEl.innerHTML = section.contentHtml;
    const plainText = `${section.number}: ${section.title}\n\n${tempEl.innerText}`;

    navigator.clipboard.writeText(plainText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleScrollToSection = (id: string) => {
    setActiveSectionId(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 transition-colors duration-300">
      {/* Top Banner Notice */}
      <div className={`mb-8 p-5 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border ${
        isDarkMode
          ? 'bg-gradient-to-r from-red-950 to-[#2e1c14] border-red-900/60 text-[#f5f0e6]'
          : 'bg-gradient-to-r from-red-900/90 to-amber-900/90 border-red-900 text-white'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
              isDarkMode
                ? 'bg-amber-400 text-stone-950'
                : 'bg-amber-300 text-red-950'
            }`}>
              Công trình nghiên cứu hoàn chỉnh
            </span>
            <span className="text-xs text-amber-200">• Đối tượng: Học sinh THPT</span>
            {isDarkMode && (
              <span className="inline-flex items-center gap-1 text-[11px] bg-black/40 text-amber-300 px-2 py-0.5 rounded border border-amber-900/40">
                <Moon className="w-3 h-3" /> Chế độ Mực tàu & Giấy cổ
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-classical font-bold tracking-tight text-white">
            Nội dung Nghiên cứu Tác giả Đỗ Cận & Phân tích “Xuân yến”
          </h2>
          <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-3xl">
            Tuân thủ nghiêm ngặt các yêu cầu: kiểm chứng sử liệu Văn bia Quốc Tử Giám, Toàn Việt thi lục; phân biệt rõ nguyên tác, phiên âm, dịch nghĩa, dịch thơ; làm rõ bối cảnh văn học Thái Nguyên.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Table of Contents (Sticky Sidebar) */}
        <div className="lg:col-span-4 xl:col-span-3">
          <div className={`sticky top-20 rounded-2xl p-4 border shadow-xs space-y-2 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]' 
              : 'bg-white border-stone-200 text-stone-900'
          }`}>
            <h3 className={`font-classical font-bold text-sm uppercase tracking-wider px-2 flex items-center gap-2 ${
              isDarkMode ? 'text-amber-300' : 'text-red-900'
            }`}>
              <Bookmark className={`w-4 h-4 ${isDarkMode ? 'text-amber-400' : 'text-red-800'}`} />
              <span>Mục lục 10 Phần</span>
            </h3>

            <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
              {RESEARCH_DATA.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleScrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all ${
                    activeSectionId === section.id
                      ? isDarkMode
                        ? 'bg-[#352f28] text-amber-300 font-bold border border-amber-700/50'
                        : 'bg-red-50 text-red-900 font-bold border border-red-200'
                      : isDarkMode
                        ? 'text-[#b0a595] hover:bg-[#2b2723] hover:text-[#ece5d8]'
                        : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className={`text-[10px] block ${isDarkMode ? 'text-[#877c6e]' : 'text-stone-400'}`}>
                      {section.number}
                    </span>
                    <span className="truncate block">{section.title}</span>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${
                    activeSectionId === section.id 
                      ? isDarkMode ? 'text-amber-300' : 'text-red-900'
                      : isDarkMode ? 'text-[#554d43]' : 'text-stone-300'
                  }`} />
                </button>
              ))}

              <button
                onClick={() => handleScrollToSection('tai-lieu-tham-khao')}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  isDarkMode
                    ? 'text-[#b0a595] hover:bg-[#2b2723] hover:text-[#ece5d8]'
                    : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                <div>
                  <span className={`text-[10px] block ${isDarkMode ? 'text-[#877c6e]' : 'text-stone-400'}`}>
                    THƯ TỊCH
                  </span>
                  <span>Tài liệu tham khảo</span>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 ${isDarkMode ? 'text-[#554d43]' : 'text-stone-300'}`} />
              </button>
            </nav>
          </div>
        </div>

        {/* Detailed Content Stream */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-10">
          {RESEARCH_DATA.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className={`rounded-2xl p-6 sm:p-8 border shadow-xs relative transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
                  : 'bg-white border-stone-200 text-stone-900'
              }`}
            >
              <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-4 mb-6 ${
                isDarkMode ? 'border-[#383129]' : 'border-stone-100'
              }`}>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                    isDarkMode
                      ? 'bg-red-950/60 text-amber-300 border-red-900/60'
                      : 'bg-red-50 text-red-800 border-red-100'
                  }`}>
                    {section.number}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-classical font-bold mt-2 ${
                    isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'
                  }`}>
                    {section.title}
                  </h3>
                  <p className={`text-xs sm:text-sm font-serif italic mt-1 ${
                    isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'
                  }`}>
                    {section.description}
                  </p>
                </div>

                <button
                  onClick={() => handleCopySection(section.id, section.title)}
                  className={`self-start sm:self-center flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                    isDarkMode
                      ? 'bg-[#2b2723] hover:bg-[#352f2a] text-[#ece5d8] border-[#443c34]'
                      : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                  }`}
                >
                  {copiedId === section.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Đã sao chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className={`w-3.5 h-3.5 ${isDarkMode ? 'text-amber-400' : 'text-stone-500'}`} />
                      <span>Sao chép phần này</span>
                    </>
                  )}
                </button>
              </div>

              {/* Render HTML content with custom dark mode class support */}
              <div
                className={`prose max-w-none prose-headings:font-classical ${
                  isDarkMode
                    ? 'prose-invert text-[#ece5d8] prose-p:text-[#ece5d8] prose-headings:text-[#f7f3ec] prose-strong:text-amber-300 prose-blockquote:border-red-600 prose-blockquote:bg-[#2b2621] prose-blockquote:text-amber-200 prose-table:border-[#443c34] prose-th:border-[#443c34] prose-th:bg-[#2e2924] prose-th:text-amber-300 prose-td:border-[#443c34]'
                    : 'prose-stone'
                }`}
                dangerouslySetInnerHTML={{ __html: section.contentHtml }}
              />
            </article>
          ))}

          {/* References Section */}
          <article
            id="tai-lieu-tham-khao"
            className={`rounded-2xl p-6 sm:p-8 border shadow-xs transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
                : 'bg-white border-stone-200 text-stone-900'
            }`}
          >
            <div className={`border-b pb-4 mb-6 ${isDarkMode ? 'border-[#383129]' : 'border-stone-100'}`}>
              <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                isDarkMode ? 'bg-[#312b25] text-amber-300' : 'bg-stone-100 text-stone-600'
              }`}>
                THƯ TỊCH KHẢO CỨU
              </span>
              <h3 className={`text-xl sm:text-2xl font-classical font-bold mt-2 ${
                isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'
              }`}>
                Danh mục Tài liệu Tham khảo Đã Kiểm Chứng
              </h3>
              <p className={`text-xs sm:text-sm italic mt-1 ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
                Các nguồn tư liệu lịch sử, văn bản học Hán Nôm và tài liệu giáo dục địa phương uy tín
              </p>
            </div>

            <div className="space-y-3">
              {REFERENCES_DATA.map((ref) => (
                <div
                  key={ref.id}
                  className={`p-4 rounded-xl border flex items-start gap-3.5 text-sm transition-colors ${
                    isDarkMode
                      ? 'bg-[#292521] border-[#3f3830]'
                      : 'bg-stone-50/70 border-stone-200'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${
                    isDarkMode ? 'bg-[#3d362e] text-amber-300' : 'bg-stone-200 text-stone-800'
                  }`}>
                    {ref.id}
                  </div>
                  <div>
                    <h4 className={`font-bold ${isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'}`}>
                      {ref.title}
                    </h4>
                    <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-[#b0a595]' : 'text-stone-600'}`}>
                      <span className={`font-medium ${isDarkMode ? 'text-amber-200' : 'text-stone-800'}`}>{ref.author}</span> • {ref.type}
                    </p>
                    <p className={`text-xs italic mt-1 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
                      {ref.notes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
