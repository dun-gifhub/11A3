import React, { useState } from 'react';
import { SLIDES_DATA } from '../data/slidesData';
import { RESEARCH_DATA, REFERENCES_DATA } from '../data/researchData';
import { Copy, Check, FileDown, Sparkles, Send, Download, CheckCheck } from 'lucide-react';

interface ExportModalProps {
  isDarkMode?: boolean;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isDarkMode = false }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  // Generate 15 Slides text for PowerPoint
  const generateSlidesText = () => {
    return SLIDES_DATA.map((s) => {
      let content = `=== SLIDE ${s.id}: ${s.title} ===\n`;
      if (s.subtitle) content += `Phụ đề: ${s.subtitle}\n\n`;
      content += `NỘI DUNG:\n`;
      s.bulletPoints.forEach((b, i) => {
        content += `${i + 1}. ${b.heading ? `[${b.heading}] ` : ''}${b.content}\n`;
      });
      if (s.quoteBox) {
        content += `\nTrích dẫn: "${s.quoteBox.text}" (${s.quoteBox.author || ''})\n`;
      }
      content += `\nLỜI THUYẾT TRÌNH (SPEAKER NOTES):\n"${s.speakerNotes}"\n`;
      return content;
    }).join('\n----------------------------------------\n\n');
  };

  // Generate full research markdown
  const generateResearchMarkdown = () => {
    let md = `# CÔNG TRÌNH NGHIÊN CỨU: TÁC GIẢ ĐỖ CẬN VÀ THI PHẨM "XUÂN YẾN"\n`;
    md += `Môn: Ngữ văn & Giáo dục địa phương Thái Nguyên | Đối tượng: Học sinh THPT\n\n`;

    RESEARCH_DATA.forEach((sec) => {
      const tempEl = document.createElement('div');
      tempEl.innerHTML = sec.contentHtml;
      md += `## ${sec.number}: ${sec.title}\n`;
      md += `*${sec.description}*\n\n`;
      md += `${tempEl.innerText}\n\n`;
      md += `----------------------------------------\n\n`;
    });

    md += `## DANH MỤC TÀI LIỆU THAM KHẢO\n`;
    REFERENCES_DATA.forEach((r) => {
      md += `${r.id}. ${r.title} - ${r.author} (${r.type}). Ghi chú: ${r.notes}\n`;
    });

    return md;
  };

  // Generate Group Report Submission Text for Teacher (Hạn nộp T4 23/9/2026)
  const generateSubmissionText = () => {
    return `KÍNH GỬI CÔ GIÁO & LỚP TRƯỞNG
BÁO CÁO NỘI DUNG THUYẾT TRÌNH POWERPOINT
CHUYÊN ĐỀ: TÌM HIỂU TÁC GIẢ ĐỖ CẬN VÀ PHÂN TÍCH TÁC PHẨM "XUÂN YẾN"
Đơn vị thực hiện: Nhóm 1 / Tổ 1 (hoặc Nhóm 2 / Tổ 2)
Thời hạn hoàn thành: Trước tối Thứ Tư 23/9/2026

1. TÓM TẮT ĐỀ TÀI:
- Tác giả: Đỗ Cận (1434 – ?), tên thật là Đỗ Viễn, quê tại làng Thống Thượng, xã Minh Đức, huyện Phổ Yên, tỉnh Thái Nguyên. Đỗ Tiến sĩ khoa Mậu Tuất (1478) thời Lê Thánh Tông, thành viên Hội Tao Đàn. Đền thờ tại TP Phổ Yên được xếp hạng Di tích Lịch sử Quốc gia năm 2014.
- Tác phẩm: "Xuân yến" (春燕 – Chim én mùa xuân), thơ chữ Hán thất ngôn tứ tuyệt trích Toàn Việt thi lục.
- Bố cục Slide: Thiết kế hoàn chỉnh 15 slide chuẩn sư phạm, màu sắc trang nhã (trắng kem, đỏ nâu, xanh trúc), phân biệt rõ nguyên tác, phiên âm, dịch nghĩa, 2 bản dịch thơ và phân tích chiều sâu cảnh - tình.

2. NỘI DUNG 15 SLIDE & KỊCH BẢN:
(Đã đính kèm chi tiết trong file trình chiếu)

3. CÂU HỎI THẢO LUẬN LỚP HỌC:
Đã xây dựng 7 câu hỏi tương tác phát triển tư duy văn học và giáo dục truyền thống hiếu học địa phương Thái Nguyên.

Kính nhờ lớp trưởng tổng hợp và gửi báo cáo tới cô giáo!`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <div className="p-6 bg-stone-900 text-stone-100 rounded-2xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider bg-amber-400 text-stone-950 px-2 py-0.5 rounded font-bold">
            Xuất & Tải Nội Dung
          </span>
          <h2 className="text-xl sm:text-2xl font-classical font-bold tracking-tight text-white mt-1">
            Sao Chép Nhanh & Nộp Báo Cáo
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Sao chép trực tiếp để dán vào Microsoft PowerPoint, Google Slides, Word hoặc gửi nộp qua nhóm Zalo lớp trước hạn T4 23/9/2026.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Option 1: 15 Slides */}
        <div className={`p-5 rounded-2xl border shadow-2xs flex flex-col justify-between space-y-4 transition-colors ${
          isDarkMode
            ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
            : 'bg-white border-stone-200 text-stone-900'
        }`}>
          <div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-3 ${
              isDarkMode
                ? 'bg-red-950 text-amber-300 border border-red-900'
                : 'bg-red-100 text-red-900'
            }`}>
              PPT
            </div>
            <h3 className={`font-classical font-bold text-base ${isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'}`}>
              Nội dung 15 Slide PowerPoint
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
              Bao gồm tiêu đề, từng gạch đầu dòng, thơ chữ Hán và lời thuyết trình cho từng slide để dán vào bài trình chiếu.
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(generateSlidesText(), 'slides')}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-red-900 hover:bg-red-950 text-white font-medium text-xs transition-colors shadow-xs"
          >
            {copiedType === 'slides' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Đã sao chép 15 Slide</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao chép 15 Slide</span>
              </>
            )}
          </button>
        </div>

        {/* Option 2: Full Research Paper */}
        <div className={`p-5 rounded-2xl border shadow-2xs flex flex-col justify-between space-y-4 transition-colors ${
          isDarkMode
            ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
            : 'bg-white border-stone-200 text-stone-900'
        }`}>
          <div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-3 ${
              isDarkMode
                ? 'bg-[#3d3326] text-amber-300 border border-amber-800'
                : 'bg-amber-100 text-amber-900'
            }`}>
              DOC
            </div>
            <h3 className={`font-classical font-bold text-base ${isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'}`}>
              Toàn bộ Báo cáo Nghiên cứu
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
              Đầy đủ 10 Phần (Phần I đến Phần X) dạng văn bản chi tiết kèm danh mục thư tịch Hán Nôm để nộp giáo viên.
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(generateResearchMarkdown(), 'research')}
            className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs transition-colors shadow-xs ${
              isDarkMode
                ? 'bg-[#332e29] hover:bg-[#3d3832] text-amber-300 border border-[#4d4439]'
                : 'bg-stone-800 hover:bg-stone-900 text-white'
            }`}
          >
            {copiedType === 'research' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Đã sao chép Báo cáo</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Sao chép Báo cáo chi tiết</span>
              </>
            )}
          </button>
        </div>

        {/* Option 3: Submission text for Class leader / Teacher */}
        <div className={`p-5 rounded-2xl border shadow-2xs flex flex-col justify-between space-y-4 transition-colors ${
          isDarkMode
            ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
            : 'bg-white border-stone-200 text-stone-900'
        }`}>
          <div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm mb-3 ${
              isDarkMode
                ? 'bg-[#1b2b22] text-emerald-300 border border-emerald-800'
                : 'bg-emerald-100 text-emerald-900'
            }`}>
              MSG
            </div>
            <h3 className={`font-classical font-bold text-base ${isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'}`}>
              Tin nhắn Nộp bài cho Lớp trưởng
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
              Mẫu tin nhắn tổng hợp nhóm 1/2 nộp lại qua lớp trưởng trước tối Thứ Tư 23/9/2026 theo thông báo của cô giáo.
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(generateSubmissionText(), 'submission')}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-xs transition-colors shadow-xs"
          >
            {copiedType === 'submission' ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Đã sao chép Tin nhắn</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Sao chép Tin nhắn nộp bài</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Preview Box of Generated Presentation Text */}
      <div className={`p-6 rounded-2xl border shadow-xs space-y-3 transition-colors ${
        isDarkMode
          ? 'bg-[#221f1c] border-[#3f3830] text-[#ece5d8]'
          : 'bg-white border-stone-200 text-stone-900'
      }`}>
        <h4 className={`font-classical font-bold text-sm uppercase tracking-wider ${
          isDarkMode ? 'text-amber-300' : 'text-stone-900'
        }`}>
          Xem trước mẫu định dạng Slide PowerPoint:
        </h4>
        <pre className={`p-4 rounded-xl border text-xs font-mono overflow-x-auto max-h-60 leading-relaxed whitespace-pre-wrap ${
          isDarkMode
            ? 'bg-[#1a1714] border-[#383128] text-amber-200/90'
            : 'bg-stone-50 border-stone-200 text-stone-700'
        }`}>
          {generateSlidesText().slice(0, 1500)}...
        </pre>
      </div>
    </div>
  );
};
