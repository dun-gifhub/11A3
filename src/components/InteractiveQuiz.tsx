import React, { useState } from 'react';
import { HelpCircle, Eye, EyeOff, Sparkles, CheckCircle2, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface QuestionItem {
  id: number;
  question: string;
  tag: string;
  hint: string;
  detailedAnswer: string;
  teacherGoal: string;
}

const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    tag: 'Hình tượng thi ca',
    question: 'Vì sao tác giả lựa chọn hình ảnh chim én để mở ra bức tranh mùa xuân thay vì hoa cỏ rực rỡ?',
    hint: 'Hãy chú ý đến tập tính bay theo đôi, tha bùn làm tổ và vị trí biểu tượng của chim én trong văn hóa Á Đông.',
    detailedAnswer: 'Chim én trong văn hóa truyền thống phương Đông là “sứ giả mang tin xuân”, báo hiệu hơi ấm đã về. Khác với hoa cỏ tĩnh tại, chim én bay lượn thành đôi và tha bùn thơm làm tổ dưới mái hiên (“hương nê”, “họa thiềm”), tượng trưng cho sự sum vầy, kết đôi, hạnh phúc và mái ấm gia đình. Đây là đòn bẩy thẩm mỹ đối lập với hình ảnh con người đơn chiếc bên song cửa ở hai câu sau.',
    teacherGoal: 'Kiểm tra khả năng giải mã biểu tượng ước lệ cổ điển trong văn học trung đại.'
  },
  {
    id: 2,
    tag: 'Cấu trúc & Cảm xúc',
    question: 'Hai câu đầu và hai câu cuối có sự chuyển dịch như thế nào về không gian và cảm xúc?',
    hint: 'So sánh không gian bên ngoài sân với không gian bên trong khung cửa sổ biếc.',
    detailedAnswer: '• Về không gian: Thu hẹp từ không gian ngoại cảnh khoáng đạt (ngoài sân, bóng trúc, góc mái hiên) vào không gian khép kín của chốn thư phòng/khuê phòng (bên khung song biếc “lục song”).\n• Về cảm xúc: Chuyển dịch từ trạng thái quan sát thiên nhiên tĩnh tại, tao nhã sang thế giới nội tâm rạo rực, xao xuyến và bâng khuâng trăn trở (“khiêu bát xuân tâm”).',
    teacherGoal: 'Đánh giá kỹ năng nhận diện thi pháp vận động từ cảnh sang tình trong thơ tứ tuyệt.'
  },
  {
    id: 3,
    tag: 'Thi liệu & Bút pháp',
    question: 'Hình ảnh “bóng trúc rủ thấp” (trúc ảnh đê) góp phần tạo nên không khí gì cho bức tranh xuân?',
    hint: 'Quan sát nghệ thuật không tả cây trúc mà tả “bóng trúc” xao động.',
    detailedAnswer: 'Hình ảnh “trúc ảnh đê” tạo nên một không khí thanh u, tĩnh mịch và sâu lắng. Cây trúc vốn biểu trưng cho cốt cách thanh cao của bậc quân tử. Tác giả không vẽ màu xanh của cành trúc mà nắm bắt “bóng trúc” rủ là đà dưới nắng xuân, lay động theo ngọn gió nhẹ (“phong vi”), tạo nên cảm giác bình yên, tao nhã như một bức họa thủy mặc.',
    teacherGoal: 'Giúp học sinh cảm nhận sự tinh tế của nghệ thuật chấm phá trong Đường thi.'
  },
  {
    id: 4,
    tag: 'Cảm hứng trữ tình',
    question: 'Em hiểu thế nào về khái niệm “xuân tâm” và vì sao nó lại bị đánh thức lúc “nhật vị tê” (mặt trời chưa ngả tây)?',
    hint: '“Xuân tâm” có phải chỉ là tình cảm lứa đôi hay còn là khát vọng sống, nỗi niềm thế sự?',
    detailedAnswer: '“Xuân tâm” trước hết là lòng xuân, tình xuân – sự rạo rực của tuổi trẻ, khát khao yêu thương, giao cảm với cuộc đời và nỗi nhớ quê hương tha thiết. Thời điểm “nhật vị tê” (mặt trời còn chưa lặn) rất đặc biệt: nỗi cô đơn và cảm xúc thường trỗi dậy lúc hoàng hôn, nhưng ở đây lòng xuân đã bùng lên từ giữa ban ngày, chứng tỏ nỗi niềm ấy đã dồn nén, âm ỉ sâu sắc tự đáy lòng.',
    teacherGoal: 'Rèn luyện năng lực phân tích tâm lý nhân vật trữ tình qua thời gian nghệ thuật.'
  },
  {
    id: 5,
    tag: 'Nghệ thuật trung đại',
    question: 'Bài thơ thể hiện nghệ thuật “tả cảnh ngụ tình” độc đáo như thế nào?',
    hint: 'Sự đối lập giữa ngoại cảnh vạn vật kết đôi và nội tâm cô độc của con người.',
    detailedAnswer: 'Nghệ thuật tả cảnh ngụ tình thể hiện qua thủ pháp đòn bẩy và tương phản: Tác giả không hề trực tiếp viết “tôi buồn” hay “tôi cô đơn”. Ông vẽ cảnh đôi én miệt mài tha bùn thơm xây tổ ấm ngoài hiên, rồi đối chiếu với hình ảnh con người ngồi lặng lẽ bên song cửa biếc giữa ban ngày không bóng người tới thăm (“trú tĩnh vô nhân đáo”). Chính sự sống đầm ấm của thiên nhiên đã gián tiếp khêu gợi nỗi niềm trăn trở của con người.',
    teacherGoal: 'Khắc sâu kiến thức về một trong những thủ pháp quan trọng nhất của văn học trung đại.'
  },
  {
    id: 6,
    tag: 'Câu hỏi tranh luận',
    question: 'Theo em, điểm đặc sắc nhất của bài thơ nằm ở cảnh vật hay cảm xúc? Hãy giải thích bằng dẫn chứng.',
    hint: 'Đây là câu hỏi mở nhằm phát triển tư duy phản biện văn học cho học sinh.',
    detailedAnswer: 'Cả hai yếu tố đều tuyệt mỹ và đan quyện làm một. Nếu chọn CẢNH VẬT: Đó là sự tài hoa trong việc bắt trọn những chuyển động cực vi tế (gió nhẹ, bóng trúc rủ, bùn thơm). Nếu chọn CẢM XÚC: Đó là chiều sâu của “xuân tâm” kín đáo, thanh tao mà mãnh liệt. Đỉnh cao của thi phẩm chính là sự giao hòa tuyệt đối giữa thiên nhiên thanh nhã và trái tim con người nhạy cảm.',
    teacherGoal: 'Khuyến khích học sinh bày tỏ quan điểm cá nhân, lập luận có dẫn chứng văn bản.'
  },
  {
    id: 7,
    tag: 'Liên hệ Thái Nguyên',
    question: 'Là học sinh THPT tại Thái Nguyên, em rút ra bài học gì từ cuộc đời và sự nghiệp của Tiến sĩ Đỗ Cận?',
    hint: 'Liên hệ tinh thần hiếu học vượt khó và ý thức phụng sự quê hương (đền Lục Giáp).',
    detailedAnswer: '• Tinh thần hiếu học: Xuất thân nghèo khó nhưng kiên trì đèn sách đỗ đại khoa, trở thành tấm gương sáng về ý chí vươn lên.\n• Tấm lòng hướng về nguồn cội: Dù làm quan lớn chốn kinh thành hay đi sứ, ông vẫn luôn chăm lo cho quê hương Phổ Yên, dựng đền Lục Giáp khuyến khích con cháu học hành.\n• Trách nhiệm của thế hệ trẻ: Tự hào về truyền thống khoa bảng của tỉnh nhà, nỗ lực tu dưỡng đạo đức và tri thức để xây dựng quê hương Thái Nguyên ngày càng giàu đẹp.',
    teacherGoal: 'Gắn kết giá trị bài học văn học với môn Giáo dục địa phương và bồi đắp lý tưởng sống.'
  }
];

interface InteractiveQuizProps {
  isDarkMode?: boolean;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ isDarkMode = false }) => {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleOpen = (id: number) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenAll = () => {
    setOpenIds(QUESTIONS.map((q) => q.id));
  };

  const handleCloseAll = () => {
    setOpenIds([]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6 transition-colors duration-300">
      {/* Top Banner */}
      <div className={`p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border ${
        isDarkMode
          ? 'bg-gradient-to-r from-red-950 to-[#2d1810] border-red-900/60 text-[#f5f0e6]'
          : 'bg-red-950 border-red-900 text-red-50'
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs uppercase tracking-wider px-2 py-0.5 rounded font-bold ${
              isDarkMode ? 'bg-amber-400 text-stone-950' : 'bg-amber-300 text-stone-900'
            }`}>
              Phần X: Tương tác lớp học
            </span>
            <span className="text-xs text-red-200">• 7 Câu hỏi thảo luận chuyên sâu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-classical font-bold tracking-tight text-white">
            Bộ Câu Hỏi Tương Tác & Gợi Ý Trả Lời
          </h2>
          <p className="text-xs sm:text-sm text-red-100 mt-1">
            Dành cho nhóm thuyết trình dùng để đặt câu hỏi cho cả lớp, làm chủ phần thảo luận và phản hồi cô giáo.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleOpenAll}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              isDarkMode
                ? 'bg-red-900 hover:bg-red-800 text-amber-200 border-red-800'
                : 'bg-red-900 hover:bg-red-800 text-white border-red-800'
            }`}
          >
            Mở tất cả gợi ý
          </button>
          <button
            onClick={handleCloseAll}
            className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
              isDarkMode
                ? 'bg-[#29241f] hover:bg-[#332e28] text-[#ece5d8] border-[#443c34]'
                : 'bg-red-900 hover:bg-red-800 text-white border-red-800'
            }`}
          >
            Đóng tất cả
          </button>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {QUESTIONS.map((q) => {
          const isOpen = openIds.includes(q.id);

          return (
            <div
              key={q.id}
              className={`rounded-2xl border overflow-hidden shadow-2xs transition-colors ${
                isDarkMode
                  ? 'bg-[#221f1c] border-[#3f3830] hover:border-amber-700/60'
                  : 'bg-white border-stone-200 hover:border-amber-700/40'
              }`}
            >
              {/* Question Header */}
              <div
                onClick={() => toggleOpen(q.id)}
                className={`p-5 cursor-pointer flex items-start justify-between gap-3 transition-colors ${
                  isDarkMode
                    ? 'bg-[#27231f] hover:bg-[#2d2824]'
                    : 'bg-stone-50/50 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                    isDarkMode
                      ? 'bg-red-950 text-amber-300 border border-red-900'
                      : 'bg-red-100 text-red-900'
                  }`}>
                    {q.id}
                  </span>
                  <div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded mr-2 ${
                      isDarkMode
                        ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                        : 'bg-amber-100/70 text-amber-900'
                    }`}>
                      {q.tag}
                    </span>
                    <h3 className={`font-classical font-bold text-base sm:text-lg mt-1 ${
                      isDarkMode ? 'text-[#f5f0e6]' : 'text-stone-900'
                    }`}>
                      {q.question}
                    </h3>
                    <p className={`text-xs mt-1 italic ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
                      💡 Gợi ý tư duy: {q.hint}
                    </p>
                  </div>
                </div>

                <button className={`p-1 shrink-0 ${isDarkMode ? 'text-[#a89d8d] hover:text-[#ece5d8]' : 'text-stone-400 hover:text-stone-700'}`}>
                  {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Revealable Answer */}
              {isOpen && (
                <div className={`p-5 border-t space-y-3 text-sm leading-relaxed animate-in fade-in duration-200 ${
                  isDarkMode ? 'border-[#383129] bg-[#221f1c]' : 'border-stone-100 bg-white'
                }`}>
                  <div className={`p-4 rounded-xl border ${
                    isDarkMode
                      ? 'bg-[#1e2820] border-[#2c3d30] text-emerald-200'
                      : 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                  }`}>
                    <strong className={`block font-bold mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider ${
                      isDarkMode ? 'text-emerald-300' : 'text-emerald-900'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`} />
                      Gợi ý câu trả lời hoàn chỉnh để chốt đáp án trước lớp:
                    </strong>
                    <div className={`whitespace-pre-line font-serif text-sm sm:text-base ${
                      isDarkMode ? 'text-[#e6dfd3]' : 'text-stone-800'
                    }`}>
                      {q.detailedAnswer}
                    </div>
                  </div>

                  <div className={`flex items-center gap-2 text-xs pt-1 ${isDarkMode ? 'text-[#a89d8d]' : 'text-stone-500'}`}>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span><strong>Mục tiêu sư phạm:</strong> {q.teacherGoal}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
