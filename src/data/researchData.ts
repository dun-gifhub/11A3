export interface DetailedSection {
  id: string;
  number: string;
  title: string;
  description: string;
  contentHtml: string;
}

export const RESEARCH_DATA: DetailedSection[] = [
  {
    id: 'phan-1',
    number: 'PHẦN I',
    title: 'GIỚI THIỆU TÁC GIẢ ĐỖ CẬN (1434 – ?)',
    description: 'Cuộc đời, sự nghiệp khoa cử, hoạn lộ và đóng góp của bậc danh thần thời Lê sơ',
    contentHtml: `
      <div class="space-y-6 text-stone-700 leading-relaxed">
        <div class="bg-amber-50/60 p-5 rounded-xl border border-amber-200">
          <h4 class="font-bold text-amber-950 mb-2 font-classical text-lg">1. Thông tin nhân thân & Tên thật</h4>
          <p><strong>Họ tên khai sinh:</strong> Đỗ Viễn. Tự là <em>Hữu Khác</em>, hiệu là <em>Phổ Sơn</em>.</p>
          <p><strong>Tên được ban đổi:</strong> Sau khi ông thi đỗ Tiến sĩ năm 1478, đích thân vua Lê Thánh Tông đã ban chiếu đổi tên ông từ Đỗ Viễn thành <strong>Đỗ Cận</strong> (杜近). Trong chữ Hán, chữ "Cận" (近) mang ý nghĩa là "gần gũi", "kề cận bên vua", thể hiện sự tin cậy, quý mến sâu sắc của nhà vua đối với một bậc trí thức hiền tài, trung quân ái quốc.</p>
          <p><strong>Năm sinh – Năm mất:</strong> Sinh năm Giáp Dần (1434). Năm mất: <em>Chưa có tài liệu lịch sử ghi lại chính xác</em> (theo gia phả dòng họ và truyền thuyết dân gian địa phương ghi nhận, ông thọ trên 70 tuổi và tạ thế vào khoảng đầu thế kỷ XVI).</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">2. Quê quán</h4>
          <p>Ông sinh ra tại làng <strong>Thống Thượng</strong>, xã Minh Đức, huyện Phổ Yên, thừa tuyên Thái Nguyên dưới thời Hậu Lê (nay là tổ dân phố Thống Thượng, phường Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên).</p>
          <p>Vùng đất Phổ Yên là cửa ngõ phía nam của tỉnh Thái Nguyên, nơi giao lưu giữa vùng đồng bằng châu thổ sông Hồng với vùng rừng núi Việt Bắc, giàu truyền thống quật cường và hiếu học.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">3. Thời đại & Bối cảnh lịch sử</h4>
          <p>Đỗ Cận sống và cống hiến trọn đời trong <strong>giai đoạn thịnh trị nhất của thời Lê sơ</strong>, đặc biệt là dưới triều đại của vị vua anh minh lỗi lạc <strong>Lê Thánh Tông</strong> (trị vì 1460 – 1497, với hai niên hiệu Quang Thuận và Hồng Đức). Đây là thời kỳ đất nước Đại Việt đạt đến đỉnh cao về kinh tế, quân sự, pháp luật (Bộ luật Hồng Đức) và phát triển văn hóa - giáo dục rực rỡ bậc nhất trong lịch sử chế độ phong kiến Việt Nam.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">4. Con đường học tập & Khoa cử</h4>
          <p>Xuất thân trong một gia đình nghèo nơi vùng bán sơn địa nghèo khó, Đỗ Cận từ nhỏ đã nổi tiếng thông minh đĩnh ngộ, chăm chỉ rèn rũa kinh sử bên ngọn đèn dầu. Vượt qua bao khó khăn gian khổ, ông lần lượt đỗ đạt trong các kỳ thi Hương, thi Hội.</p>
          <p>Vào mùa xuân năm Mậu Tuất (1478), niên hiệu Hồng Đức thứ 9, Đỗ Cận vào thi Đình và trúng cách <strong>Đệ tam giáp đồng Tiến sĩ xuất thân</strong> (thường gọi tắt là Tiến sĩ). Tên họ của ông hiện được khắc trang trọng trên <strong>tấm bia Tiến sĩ số 6 tại Văn Miếu – Quốc Tử Giám Hà Nội</strong>, khẳng định địa vị của một danh nho khai khoa mẫu mực.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">5. Quá trình làm quan & Hoạn lộ</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li>Sau khi thi đỗ, ông được tuyển dụng vào chốn cung đình, bổ nhiệm giữ chức <strong>Hàn lâm viện Thị độc</strong> (chức quan văn hàn lâm có nhiệm vụ giảng đọc sách, thẩm định văn kiện chốn hoàng cung).</li>
            <li>Sau đó, ông được triều đình phái đi kinh lý và giữ chức <strong>Tham nghị xứ Quảng Nam</strong> (một chức quan trọng yếu vừa phụ trách hành chính, văn giáo ở vùng đất mới của Đại Việt thời kỳ mở mang bờ cõi).</li>
            <li>Ông được thăng chức <strong>Thượng thư</strong> (đứng đầu một trong Lục bộ triều đình, có tài liệu ghi Thượng thư Bộ Lại / Bộ Lễ).</li>
            <li>Nhờ tài hoa thơ văn trác việt, ông được vua Lê Thánh Tông kết nạp vào <strong>Hội Tao Đàn</strong> (thành viên <em>Nhị thập bát tú</em> – 28 ngôi sao văn học của Đại Việt).</li>
          </ul>
        </div>

        <div class="bg-red-50/60 p-5 rounded-xl border border-red-200">
          <h4 class="font-bold text-red-950 mb-2 font-classical text-lg">6. Dấu mốc quan trọng: Chuyến đi sứ nhà Minh năm 1483</h4>
          <p>Vào mùa thu năm Quý Mão (1483), niên hiệu Hồng Đức thứ 14, vua Lê Thánh Tông cử đoàn sứ bộ Đại Việt sang cống và bang giao với triều đình nhà Minh (Trung Quốc). Đỗ Cận được tin cậy giao phó trọng trách <strong>Phó sứ</strong>.</p>
          <p>Trong chuyến đi sứ kéo dài qua nhiều vùng đất hiểm trở sang tận kinh đô phương Bắc, Đỗ Cận đã thể hiện bản lĩnh kiên nghị, sự uyên bác về văn hóa và ứng đối ngoại giao mềm dẻo nhưng kiên quyết bảo vệ quốc thể. Chuyến đi sứ này đã truyền cảm hứng để ông sáng tác nên tập ký – thơ bằng chữ Nôm nổi tiếng mang tên <em>Kim Lăng ký</em>.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">7. Các tác phẩm tiêu biểu</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Thơ chữ Hán:</strong> Nhiều thi phẩm độc đáo được Bảng nhãn Lê Quý Đôn tuyển chọn đưa vào bộ sách mẫu mực <em>Toàn Việt thi lục</em> (thế kỷ XVIII). Tiêu biểu là bài <em>Xuân yến</em> (春燕 – Chim én mùa xuân), <em>Thái Thạch vãn bạc</em> (采石晚泊 – Buổi chiều đậu thuyền ở Thái Thạch), v.v.</li>
            <li><strong>Sáng tác chữ Nôm:</strong> Tập <em>Kim Lăng ký</em> (chép lại cảnh sắc, con người, phong tục ở Kim Lăng - Nam Kinh khi đi sứ; đây là một trong những áng văn ký sự Nôm hiếm hoi và xuất hiện sớm nhất của văn học dân tộc).</li>
            <li><em>Lưu ý học thuật:</em> Trước đây có một số nguồn dân gian hoặc tài liệu cũ cho rằng Đỗ Cận là tác giả diễn ca truyện Nôm <em>Phan Trần</em>. Tuy nhiên, giới nghiên cứu văn học trung đại hiện đại (Viện Văn học, Viện Nghiên cứu Hán Nôm) nhận định chưa đủ cứ liệu văn bản học xác quyết, do đó ta chỉ ghi nhận đây là một giả thuyết/truyền thuyết văn học chứ không khẳng định tuyệt đối.</li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">8. Đóng góp đối với văn học trung đại & Văn học Thái Nguyên</h4>
          <p><strong>Đối với văn học dân tộc:</strong> Đỗ Cận là cây bút tài hoa của trào lưu văn học thời Hồng Đức thịnh trị. Thơ ông vừa mang phong vị tao nhã, chuẩn mực của thi pháp Đường thi chữ Hán, vừa giàu tính dân tộc với ý thức sáng tạo bằng chữ Nôm (với <em>Kim Lăng ký</em>).</p>
          <p><strong>Đối với văn học và quê hương Thái Nguyên:</strong> Ông là <em>vị Tiến sĩ đầu tiên của vùng đất Phổ Yên - Thái Nguyên</em> được vinh danh tại Văn Miếu Thăng Long. Ông là tấm gương sáng chói về tinh thần hiếu học, vượt lên gian khó để đỗ đạt đại khoa và làm rạng danh quê hương miền bán sơn địa. Khi về hưu, ông đã cho xây dựng lại <strong>đền Lục Giáp</strong> (xã Đắc Sơn, Phổ Yên) mô phỏng Văn Miếu Quốc Tử Giám để làm nơi thờ đức Khổng Tử và cổ vũ phong trào học tập của con em quê hương.</p>
          <p>Ngày 24/3/2014, <strong>Đền thờ Tiến sĩ Đỗ Cận</strong> tại phường Minh Đức, thành phố Phổ Yên đã được Bộ Văn hóa, Thể thao và Du lịch chính thức xếp hạng là <strong>Di tích Lịch sử cấp Quốc gia</strong>.</p>
        </div>
      </div>
    `
  },
  {
    id: 'phan-2',
    number: 'PHẦN II',
    title: 'GIỚI THIỆU TÁC PHẨM “XUÂN YẾN” (CHIM ÉN MÙA XUÂN)',
    description: 'Lai lịch văn bản, giải mã thể thơ và chiều sâu hình tượng cánh én',
    contentHtml: `
      <div class="space-y-6 text-stone-700 leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-stone-50 p-4 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">1. Tên tác phẩm:</span>
            <p class="mt-1 text-base"><em>Xuân yến</em> (春燕) – dịch nghĩa là “Chim én mùa xuân”.</p>
          </div>
          <div class="bg-stone-50 p-4 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">2. Tác giả:</span>
            <p class="mt-1 text-base">Đỗ Cận (nhà thơ thời Lê sơ, thành viên Hội Tao Đàn).</p>
          </div>
          <div class="bg-stone-50 p-4 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">3. Ngôn ngữ sáng tác:</span>
            <p class="mt-1 text-base">Chữ Hán (văn tự bác học phổ biến của thi ca trung đại).</p>
          </div>
          <div class="bg-stone-50 p-4 rounded-lg border border-stone-200">
            <span class="font-bold text-stone-900">4. Thể thơ:</span>
            <p class="mt-1 text-base"><strong>Thất ngôn tứ tuyệt Đường luật</strong> (4 câu, mỗi câu 7 chữ, gieo vần bằng ở cuối câu 1, 2 và 4).</p>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">5. Hoàn cảnh sáng tác</h4>
          <div class="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-sm">
            <p><strong>Căn cứ khoa học:</strong> Bài thơ được sao chép và lưu giữ trong bộ thi tuyển đồ sộ <em>Toàn Việt thi lục</em> do Bảng nhãn Lê Quý Đôn tổ chức sưu tầm và biên soạn vào thế kỷ XVIII. Trong văn bản gốc lưu trữ tại Viện Nghiên cứu Hán Nôm, bài thơ không kèm theo lời tựa (tiểu dẫn) giải thích thời gian hay địa điểm cụ thể.</p>
            <p class="mt-2">Vì vậy, về mặt nghiên cứu văn học, <strong>chưa thể khẳng định chắc chắn hoàn cảnh sáng tác cụ thể</strong> của bài thơ (có thuyết suy đoán bài thơ được viết khi ông đi sứ phương Bắc nhìn cảnh xuân nhớ nhà, hoặc viết lúc ông làm quan nhàn rỗi chốn kinh thành hay lúc dưỡng lão ở quê nhà). Cần tiếp cận bài thơ từ vẻ đẹp nội tại của thi pháp văn bản.</p>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">6. Ý nghĩa nhan đề “Xuân yến” (春燕)</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Chữ “Xuân” (春):</strong> Mùa xuân – mùa mở đầu cho vòng quay bốn mùa trong năm, tiết trời ấm áp, vạn vật hồi sinh, đâm chồi nảy lộc. Ở tầng sâu nghĩa tâm linh và cảm xúc, mùa xuân còn biểu tượng cho sự trẻ trung, niềm hy vọng, sức sống mãnh liệt và những rung động tình cảm tinh khôi ("xuân tâm").</li>
            <li><strong>Chữ “Yến” (燕):</strong> Loài chim én (hải yến). Trong văn hóa truyền thống Á Đông, chim én là "sứ giả của mùa xuân". Én từ phương Nam bay về báo hiệu cái rét đã tan, mang theo hơi ấm đất trời. Đặc tính sinh học của chim én là thường bay lượn thành đôi, tha bùn rơm về làm tổ dưới mái hiên nhà người, tượng trưng cho sự đoàn tụ, gắn bó, ấm no và hòa hợp gia đình lứa đôi.</li>
            <li><strong>Ý nghĩa hình tượng:</strong> Nhan đề “Xuân yến” không chỉ đơn thuần giới thiệu một đối tượng quan sát của thiên nhiên (vịnh vật), mà cánh én chính là chiếc chìa khóa khơi gợi không gian mùa xuân, đồng thời là chiếc cầu nối đánh thức những rung động sâu kín nhất trong cõi lòng con người.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 'phan-3',
    number: 'PHẦN III',
    title: 'VĂN BẢN TÁC PHẨM “XUÂN YẾN”',
    description: 'Đối chiếu khoa học 4 phương diện: Nguyên tác Hán tự, Phiên âm, Dịch nghĩa và Dịch thơ',
    contentHtml: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-stone-100/70 p-5 rounded-xl border border-stone-300">
            <span class="text-xs uppercase font-bold tracking-wider text-red-900 bg-red-100 px-2 py-0.5 rounded">A. Nguyên tác chữ Hán</span>
            <div class="mt-4 text-xl font-classical leading-loose tracking-widest text-stone-900">
              庭院風微竹影低，<br>
              畫簷深處帶香泥。<br>
              綠窻晝静無人到，<br>
              挑撥春心日未西。
            </div>
          </div>

          <div class="bg-stone-100/70 p-5 rounded-xl border border-stone-300">
            <span class="text-xs uppercase font-bold tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded">B. Phiên âm Hán – Việt</span>
            <div class="mt-4 text-base italic font-serif leading-relaxed text-stone-900 space-y-1">
              <p>Đình viện phong vi trúc ảnh đê,</p>
              <p>Hoạ thiềm thâm xứ đới hương nê.</p>
              <p>Lục song trú tĩnh vô nhân đáo,</p>
              <p>Khiêu bát xuân tâm nhật vị tê (tây).</p>
            </div>
            <div class="mt-3 pt-3 border-t border-stone-200 text-xs text-stone-500">
              Gieo vần bằng: <em>đê – nê – tê</em> (vần chân cuối câu 1, 2, 4).
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-emerald-50/50 p-5 rounded-xl border border-emerald-200">
            <span class="text-xs uppercase font-bold tracking-wider text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">C. Dịch nghĩa</span>
            <div class="mt-4 text-sm leading-relaxed text-stone-800 space-y-2">
              <p><strong>Câu 1:</strong> Gió thoảng ngoài sân, bóng trúc rủ thấp xuống,</p>
              <p><strong>Câu 2:</strong> (Én xuân) tha bùn thơm làm tổ kín dưới mái hiên chạm vẽ.</p>
              <p><strong>Câu 3:</strong> Bên cửa song biếc, ban ngày yên lặng không một ai tới,</p>
              <p><strong>Câu 4:</strong> Khêu gợi lòng xuân trỗi dậy lúc mặt trời còn chưa xế về tây.</p>
            </div>
          </div>

          <div class="bg-amber-50/50 p-5 rounded-xl border border-amber-200">
            <span class="text-xs uppercase font-bold tracking-wider text-stone-900 bg-stone-200 px-2 py-0.5 rounded">D. Các bản dịch thơ (Thể lục bát)</span>
            <div class="mt-3 space-y-4 text-sm">
              <div class="p-3 bg-white/70 rounded border border-amber-100">
                <p class="font-bold text-stone-900 text-xs text-red-900 mb-1">Bản dịch thứ nhất (Hoàng Việt thi văn tuyển):</p>
                <p class="italic text-stone-800">
                  “Gió phất tre sân, bóng thướt tha,<br>
                  Bùn thơm lót tổ dưới hiên nhà.<br>
                  Bên song yên lặng không người tới,<br>
                  Gợi mối lòng xuân trước bóng tà.”
                </p>
              </div>
              <div class="p-3 bg-white/70 rounded border border-amber-100">
                <p class="font-bold text-stone-900 text-xs text-emerald-900 mb-1">Bản dịch thứ hai (Vũ Bình Lục dịch):</p>
                <p class="italic text-stone-800">
                  “Sân gió mát, bóng trúc xòa,<br>
                  Bùn thơm lót tổ, hiên nhà én xây.<br>
                  Bên song vắng vẻ ban ngày,<br>
                  Lòng xuân thao thức trời tây chưa tà.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'phan-4',
    number: 'PHẦN IV',
    title: 'PHÂN TÍCH TÁC PHẨM CHI TIẾT THEO TỪNG CÂU HÌNH ẢNH',
    description: 'Giải mã chiều sâu bức tranh xuân tao nhã và chuyển động nội tâm tinh tế',
    contentHtml: `
      <div class="space-y-8 text-stone-700 leading-relaxed">
        <!-- Hai câu đầu -->
        <div class="p-6 bg-white rounded-xl border border-stone-200 shadow-sm">
          <h4 class="text-lg font-bold text-red-950 font-classical border-b border-stone-200 pb-2 mb-4">
            1. Hai câu đầu: Bức tranh ngoại cảnh mùa xuân tao nhã, tinh khiết
          </h4>
          <p class="italic font-serif text-stone-900 text-base mb-4 bg-stone-50 p-3 rounded border-l-4 border-red-800">
            “Đình viện phong vi trúc ảnh đê,<br>
            Hoạ thiềm thâm xứ đới hương nê.”
          </p>

          <div class="space-y-3">
            <p><strong>Không gian sân viện (“Đình viện”):</strong> Đây là khoảng sân trong, khu vườn nhỏ nơi chốn tư gia hoặc chốn thư phòng cổ kính. Không gian này mang tính chất khép kín, tĩnh mịch và tao nhã, tách biệt khỏi sự xô bồ, ồn ã của đời sống thị thành.</p>
            <p><strong>Hình ảnh gió thoảng nhẹ (“Phong vi”):</strong> Chữ "vi" (微) có nghĩa là nhỏ bé, khẽ khàng, mỏng manh. Cơn gió xuân không thổi ào ạt dữ dội mà chỉ lướt nhẹ hiu hiu trên từng phiến lá, đủ làm mát dịu không gian và đưa lại cảm giác thư thái.</p>
            <p><strong>Hình ảnh bóng trúc rủ thấp (“Trúc ảnh đê”):</strong> Cây trúc vốn là biểu tượng của người quân tử với khí tiết thanh cao, dẻo dai. Điểm đặc sắc ở đây là tác giả không tả màu xanh hay thân trúc mà quan sát <em>"bóng trúc"</em> (trúc ảnh) rủ là đà, nghiêng nghiêng dưới ánh nắng xuân. Gió nhẹ làm bóng trúc đu đưa trên nền sân tạo nên một bức tranh thủy mặc tĩnh lặng nhưng giàu sức sống.</p>
            <p><strong>Mái hiên chạm vẽ (“Họa thiềm”) và chiều sâu (“Thâm xứ”):</strong> Mái hiên được điêu khắc hoa văn tinh xảo gợi không khí thư phòng trang nhã của tầng lớp nho sĩ tri thức. Chữ "thâm xứ" (nơi góc sâu) gợi nên vẻ kín đáo, thanh u.</p>
            <p><strong>Hình ảnh chim én tha “bùn thơm” (“Đới hương nê”):</strong> Một nét vẽ vô cùng độc đáo! Câu thơ không hề xuất hiện từ "yến" (chim én), nhưng qua hành động "đới hương nê" (ngậm/tha bùn thơm) kết hợp với đầu đề bài thơ, người đọc lập tức mường tượng ra cánh én nhỏ đang miệt mài bay lượn, cần mẫn tha từng hạt bùn về đắp tổ ấm. Bùn đất mùa xuân không hôi tanh mà thấm đượm mùi hoa cỏ, đất ẩm sau mưa xuân nên gọi là <em>bùn thơm</em>. Nét vẽ ấy biểu hiện sự tươi tắn, thanh sạch và mầm sống đang cựa quậy sinh sôi.</p>
            <div class="bg-emerald-50 p-3 rounded text-emerald-950 text-sm mt-2">
              <strong>Đánh giá tiểu kết hai câu đầu:</strong> Cảnh vật mùa xuân hiện lên không màu mè, náo nhiệt mà được chấm phá bằng những nét vẽ siêu vi tế, nhẹ nhàng, đậm chất thanh u của hội họa cổ phương Đông. Thi nhân đã lắng nghe và bắt trọn từng nhịp thở khẽ khàng nhất của thiên nhiên vào xuân.
            </div>
          </div>
        </div>

        <!-- Hai câu cuối -->
        <div class="p-6 bg-white rounded-xl border border-stone-200 shadow-sm">
          <h4 class="text-lg font-bold text-red-950 font-classical border-b border-stone-200 pb-2 mb-4">
            2. Hai câu cuối: Sự chuyển biến không gian và chiều sâu tâm trạng
          </h4>
          <p class="italic font-serif text-stone-900 text-base mb-4 bg-stone-50 p-3 rounded border-l-4 border-red-800">
            “Lục song trú tĩnh vô nhân đáo,<br>
            Khiêu bát xuân tâm nhật vị tê.”
          </p>

          <div class="space-y-3">
            <p><strong>Không gian “Lục song” (song cửa biếc):</strong> Tầm nhìn của bài thơ thu hẹp từ sân viện ngoài trời vào sát khung cửa sổ. "Lục song" là cửa sổ chấn song sơn màu xanh biếc hoặc dán lụa mỏng xanh, thi liệu quen thuộc gắn với chốn thư phòng nho gia hoặc khuê các. Khung cửa sổ đóng vai trò như chiếc gương ngăn cách giữa hai thế giới: thế giới sinh sôi, kết đôi bên ngoài và thế giới cô quạnh bên trong.</p>
            <p><strong>Sự yên ắng tuyệt đối (“Trú tĩnh vô nhân đáo”):</strong> Ban ngày (trú) vốn là khoảng thời gian con người bận rộn hoạt động, thế nhưng ở đây lại "tĩnh" lạ lùng và "vô nhân đáo" (không một ai tới thăm). Sự vắng bóng hoàn toàn của con người tô đậm nỗi cô tịch, khoảng trống mênh mông của không gian.</p>
            <p><strong>Thời khắc “Nhật vị tê” (mặt trời chưa ngả về tây):</strong> Trong thơ cổ, nỗi buồn và sự cô đơn thường ùa về vào lúc hoàng hôn (bóng chiều tà). Nhưng ở đây, trời còn chưa xế bóng tà mà tâm trạng thi nhân đã trào dâng thao thức. Điều đó cho thấy nỗi niềm bên trong đã tích tụ, âm ỉ từ rất lâu.</p>
            <p><strong>Động từ mãnh liệt “Khiêu bát xuân tâm”:</strong> "Khiêu bát" có nghĩa là khêu lên, khơi dậy, khuấy động (như lấy que khêu ngọn đèn dầu cháy bùng lên). "Xuân tâm" là lòng xuân, tình xuân – sự rạo rực của tuổi trẻ, khát khao sống, khát khao yêu thương, sum vầy và giao cảm với cuộc đời. Cảnh đôi én kết đôi làm tổ ấm dưới mái hiên sâu đã vô tình trở thành đòn bẩy tâm lý đánh thức nỗi trăn trở trong cõi lòng người ngồi một mình bên song biếc.</p>
            <div class="bg-amber-50 p-3 rounded text-amber-950 text-sm mt-2">
              <strong>Hướng giải thích tâm trạng (nguyên tắc học thuật khách quan):</strong>
              <ul class="list-disc pl-5 mt-1 space-y-1">
                <li><em>Hướng 1 (Tâm sự kẻ sĩ xa quê/nhàn cư):</em> Tâm trạng cô đơn, hoài vọng cố hương và trăn trở thế sự của một bậc danh thần khi nhìn cảnh xuân đất khách (khi đi sứ) hoặc giữa chốn quan trường vắng vẻ.</li>
                <li><em>Hướng 2 (Tiếp thu mô-típ khuê oán):</em> Tác giả mượn bút pháp khuê oán truyền thống để nhập vai, cảm thông cho nỗi buồn của người ở lại chờ đợi sum vầy khi thấy đôi én có nơi nương tựa.</li>
                <li><em>Kết luận:</em> Dù hiểu theo hướng nào, bài thơ cũng cho thấy quy luật <strong>tả cảnh ngụ tình</strong> tuyệt mỹ: cảnh càng tĩnh mịch, thanh sạch thì lòng người lại càng xao xuyến, cuộn trào khát vọng sống.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'phan-5',
    number: 'PHẦN V',
    title: 'CHỦ ĐỀ VÀ MẠCH CẢM HỨNG BÀI THƠ',
    description: 'Mối quan hệ biện chứng giữa Thiên nhiên – Chim én – Mùa xuân – Con người – Tâm trạng',
    contentHtml: `
      <div class="space-y-6 text-stone-700 leading-relaxed">
        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">1. Chủ đề chính</h4>
          <p>Bài thơ ca ngợi vẻ đẹp tĩnh tại, thanh tao và tràn đầy sức sống của thiên nhiên mùa xuân; đồng thời bộc lộ những rung cảm tinh tế, kín đáo nhưng mãnh liệt trong thế giới nội tâm của con người trước quy luật sinh sôi và bước đi của thời gian.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">2. Mạch vận động cảm xúc (Sơ đồ 5 bước)</h4>
          <div class="bg-stone-50 p-5 rounded-xl border border-stone-300">
            <div class="flex flex-col md:flex-row items-center justify-between gap-3 text-center text-sm font-semibold">
              <div class="p-3 bg-emerald-100 text-emerald-950 rounded-lg w-full">
                1. THIÊN NHIÊN<br><span class="text-xs font-normal">Gió nhẹ, bóng trúc rủ</span>
              </div>
              <span class="text-stone-400 font-bold hidden md:inline">→</span>
              <div class="p-3 bg-amber-100 text-amber-950 rounded-lg w-full">
                2. CHIM ÉN<br><span class="text-xs font-normal">Tha bùn thơm đắp tổ</span>
              </div>
              <span class="text-stone-400 font-bold hidden md:inline">→</span>
              <div class="p-3 bg-green-100 text-green-950 rounded-lg w-full">
                3. MÙA XUÂN<br><span class="text-xs font-normal">Ấm no, đôi lứa sum vầy</span>
              </div>
              <span class="text-stone-400 font-bold hidden md:inline">→</span>
              <div class="p-3 bg-blue-100 text-blue-950 rounded-lg w-full">
                4. CON NGƯỜI<br><span class="text-xs font-normal">Bên song biếc cô tịch</span>
              </div>
              <span class="text-stone-400 font-bold hidden md:inline">→</span>
              <div class="p-3 bg-red-100 text-red-950 rounded-lg w-full">
                5. TÂM TRẠNG<br><span class="text-xs font-normal">Lòng xuân bừng thức dậy</span>
              </div>
            </div>
            <p class="mt-4 text-xs text-stone-600 italic">
              Mạch thơ đi từ <strong>ngoại cảnh</strong> vào <strong>nội tâm</strong>, từ thế giới thiên nhiên sinh sôi ngoài sân đình chuyển hóa thành nỗi xao xuyến, trăn trở trong cõi lòng con người nơi thư phòng.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'phan-6',
    number: 'PHẦN VI',
    title: 'ĐẶC SẮC NGHỆ THUẬT CỦA BÀI THƠ',
    description: 'Phân tích thi pháp Đường luật, nghệ thuật lấy động tả tĩnh và ngôn ngữ hàm súc',
    contentHtml: `
      <div class="space-y-4 text-stone-700 leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <h5 class="font-bold text-stone-900 mb-1">1. Thể thơ & Cấu tứ</h5>
            <p class="text-sm">Thể thất ngôn tứ tuyệt chuẩn mực, kết cấu chặt chẽ. Hai câu đầu thiên về tả cảnh (khai, thừa), hai câu sau chuyển hướng sang tình và kết đọng cảm xúc (chuyển, hợp).</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <h5 class="font-bold text-stone-900 mb-1">2. Nghệ thuật “Lấy động tả tĩnh”</h5>
            <p class="text-sm">Ngọn gió rất nhẹ ("phong vi"), bóng trúc nghiêng thấp, cánh én khẽ bay tha bùn. Những chuyển động cực nhỏ ấy không phá vỡ sự yên tĩnh mà càng làm đậm sâu vẻ thanh vắng của sân viện ban ngày.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <h5 class="font-bold text-stone-900 mb-1">3. Thủ pháp “Tả cảnh ngụ tình”</h5>
            <p class="text-sm">Thi nhân không trực tiếp than vãn về sự cô đơn. Cảm xúc được giấu kín sau hình ảnh đôi chim én tha bùn đắp tổ tương phản với con người ngồi một mình bên song vắng không người viếng thăm.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-lg border border-stone-200">
            <h5 class="font-bold text-stone-900 mb-1">4. Không gian và thời gian nghệ thuật</h5>
            <p class="text-sm">Không gian dịch chuyển từ ngoài sân ("đình viện") đến góc mái hiên ("họa thiềm"), rồi dừng lại bên song cửa sổ ("lục song"). Thời gian ban ngày ("trú", "nhật vị tê") đối lập với sự tĩnh lặng thường thấy về đêm.</p>
          </div>
        </div>

        <div class="p-4 bg-amber-50/50 rounded-lg border border-amber-200 text-sm">
          <p><strong>5. Ngôn ngữ cô đọng, hàm súc:</strong> Toàn bài chỉ có 28 chữ Hán nhưng chữ nào cũng đắt giá. Việc dùng các từ ngữ giàu sức tạo hình như <em>phong vi, trúc ảnh, họa thiềm, hương nê, lục song, khiêu bát, xuân tâm</em> tạo nên phong vị bác học, thanh cao của văn học cung đình thế kỷ XV.</p>
        </div>
      </div>
    `
  },
  {
    id: 'phan-7',
    number: 'PHẦN VII',
    title: 'GIÁ TRỊ NỘI DUNG VÀ Ý NGHĨA VĂN HÓA',
    description: 'Vẻ đẹp thanh tao, tinh thần nhân văn và vị trí của tác phẩm trong dòng thơ trung đại',
    contentHtml: `
      <div class="space-y-4 text-stone-700 leading-relaxed">
        <ul class="list-disc pl-5 space-y-3">
          <li><strong>Giá trị miêu tả thiên nhiên:</strong> Khắc họa bức tranh mùa xuân phương Nam thanh nhã, êm đềm với các thi liệu truyền thống nhưng được cảm nhận bằng con mắt quan sát tinh tế, gần gũi và đượm chất thiền vị.</li>
          <li><strong>Giá trị biểu đạt cảm xúc nhân văn:</strong> Khẳng định khát vọng sống, khát vọng hạnh phúc, sum vầy của con người. "Xuân tâm" không chỉ là sự xao xuyến cá nhân mà còn là nhịp đập đồng điệu của trái tim con người hòa cùng sức sống của vạn vật đất trời.</li>
          <li><strong>Vị trí trong dòng thơ vịnh vật:</strong> Trong văn học trung đại, thơ vịnh muông thú, hoa cỏ thường mang tính chất giáo huấn đạo đức Khổng giáo (như tùng, cúc, trúc, mai tượng trưng cho khí tiết quân tử). Với <em>Xuân yến</em>, Đỗ Cận đã vượt qua tính ước lệ khô khan để hướng ngòi bút về vẻ đẹp tự nhiên và cảm xúc chân thật đời thường.</li>
          <li><strong>Khẳng định tài năng của Đỗ Cận:</strong> Tác phẩm chứng minh vị thế xứng đáng của ông trong Hội Tao Đàn thời Lê Thánh Tông – một vị quan đại thần tài năng văn chương uyên bác, giàu lòng yêu thiên nhiên và gắn bó với cuộc đời.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'phan-8',
    number: 'PHẦN VIII',
    title: 'GIÁ TRỊ ĐỐI VỚI VĂN HỌC & GIÁO DỤC ĐỊA PHƯƠNG THÁI NGUYÊN',
    description: 'Đỗ Cận – Niềm tự hào khoa bảng và biểu tượng tinh thần hiếu học đất Phổ Yên',
    contentHtml: `
      <div class="space-y-5 text-stone-700 leading-relaxed">
        <div class="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200">
          <h4 class="font-bold text-emerald-950 mb-2 font-classical text-lg">Mối liên hệ máu thịt với vùng đất Thái Nguyên</h4>
          <p>Đỗ Cận sinh ra, lớn lên từ mảnh đất Phổ Yên giàu truyền thống. Cả cuộc đời ông, dù giữ trọng trách quan trường tại Thăng Long, Quảng Nam hay khi đi sứ phương Bắc, tấm lòng ông vẫn luôn đau đáu hướng về quê hương. Việc ông vận động tu bổ đường xá, chùa chiền và xây dựng lại <strong>đền Lục Giáp</strong> (xã Đắc Sơn, Phổ Yên) phỏng theo kiểu dáng Văn Miếu là minh chứng sáng ngời cho tinh thần phụng sự quê hương.</p>
        </div>

        <div>
          <h4 class="font-bold text-stone-900 mb-2 font-classical text-lg">Vì sao Đỗ Cận được đưa vào nội dung Giáo dục địa phương?</h4>
          <ul class="list-disc pl-5 space-y-2">
            <li><strong>Tấm gương hiếu học vượt khó:</strong> Từ một cậu bé con nhà nghèo nơi miền bán sơn địa xa xôi, nhờ bền chí dùi mài kinh sử mà đỗ Tiến sĩ, Đỗ Cận là biểu tượng mẫu mực để thế hệ học sinh THPT Thái Nguyên noi theo trên con đường học tập và lập thân, lập nghiệp.</li>
            <li><strong>Bằng chứng sinh động về truyền thống văn hiến:</strong> Sự nghiệp và tác phẩm của Đỗ Cận bác bỏ quan niệm cho rằng Thái Nguyên thời trung đại chỉ là vùng núi non hẻo lánh không có nền văn học bác học. Ông chứng minh mảnh đất này từ thế kỷ XV đã sản sinh ra những bậc kỳ tài văn học tầm cỡ quốc gia, được ghi tên trên bảng vàng Văn Miếu và gia nhập Tao Đàn cung đình.</li>
            <li><strong>Ý nghĩa đối với thế hệ trẻ hôm nay:</strong> Việc học tập tác phẩm <em>Xuân yến</em> giúp học sinh thêm trân quý di sản văn hóa tiền nhân để lại, bồi dưỡng niềm tự hào dân tộc và tình yêu quê hương đất nước.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 'phan-9',
    number: 'PHẦN IX',
    title: 'NHẬN XÉT TỔNG KẾT (KẾT LUẬN CHO THUYẾT TRÌNH)',
    description: 'Đoạn văn đúc kết 150 – 200 chữ cô đọng, sâu sắc để trình bày trước lớp',
    contentHtml: `
      <div class="p-6 bg-red-50/60 rounded-xl border border-red-200 text-stone-800 leading-relaxed font-serif text-base">
        <p class="font-bold text-red-950 font-classical mb-3 text-lg">Lời đúc kết chuẩn mực (150 – 200 chữ):</p>
        <p class="italic">
          “Qua thi phẩm <strong>Xuân yến</strong>, người đọc bắt gặp một bức tranh mùa xuân thanh khiết, êm đềm nhưng ngập tràn sức sống; đồng thời cảm nhận được một tâm hồn thi nhân Đỗ Cận vô cùng tinh tế, nhạy cảm và giàu lòng trắc ẩn trước bước chuyển của thời gian. Chỉ bằng vỏn vẹn 28 chữ Hán cô đọng, tác giả đã vận dụng bậc thầy các thủ pháp thi ca trung đại: lấy động tả tĩnh, mượn cảnh ngụ tình, đưa hình tượng cánh én nhỏ ngậm bùn thơm thành chiếc cầu nối đánh thức ‘xuân tâm’ – niềm khát khao yêu thương, sum vầy và giao cảm chân thành với cuộc đời. Bài thơ không chỉ khẳng định tài năng của một danh thần Tao Đàn thời Hồng Đức mà còn là viên ngọc quý trong di sản văn học, thắp sáng niềm tự hào về truyền thống hiếu học và tâm hồn cao đẹp của đất và người Thái Nguyên.”
        </p>
      </div>
    `
  },
  {
    id: 'phan-10',
    number: 'PHẦN X',
    title: 'CÂU HỎI TƯƠNG TÁC KHI THUYẾT TRÌNH & GỢI Ý TRẢ LỜI',
    description: 'Bộ câu hỏi thảo luận đa chiều giúp giờ học Văn / Giáo dục địa phương sôi nổi',
    contentHtml: `
      <div class="space-y-4">
        <p class="text-sm text-stone-600 italic">Dưới đây là 7 câu hỏi tương tác được thiết kế riêng cho học sinh thuyết trình đặt câu hỏi với lớp, kèm theo gợi ý trả lời chuẩn xác:</p>

        <div class="space-y-4">
          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 1: Vì sao tác giả lựa chọn hình tượng chim én để mở ra bức tranh mùa xuân thay vì các hình ảnh hoa lá rực rỡ thường thấy?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> Chim én là loài chim sứ giả báo tin xuân trong văn hóa Á Đông. Đặc biệt, én bay thành đôi và có tập tính tha bùn về làm tổ ấm dưới mái hiên, gợi nên ý niệm về sự sum vầy, kết đôi, sinh sôi và hạnh phúc gia đình. Đó là đòn bẩy thẩm mỹ hoàn hảo để tạo sự đối lập với con người đơn chiếc bên song cửa ở hai câu sau.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 2: Hai câu đầu và hai câu cuối có sự thay đổi như thế nào về không gian và cảm xúc?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> 
              <br>• <em>Về không gian:</em> Đi từ không gian mở ngoài trời (sân viện, gió nhẹ, bóng trúc, mái hiên) thu hẹp dần vào không gian đóng kín đáo bên trong (khung cửa sổ song biếc).
              <br>• <em>Về cảm xúc:</em> Từ quan sát ngoại cảnh thanh nhã chuyển sâu vào thế giới nội tâm u hoài, thao thức (“khiêu bát xuân tâm”).</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 3: Hình ảnh “trúc ảnh đê” (bóng trúc rủ thấp) góp phần tạo nên không khí gì cho bức tranh xuân?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> Bóng trúc rủ thấp gợi sự thanh mảnh, tao nhã, u tịch chốn thư phòng. Cơn gió xuân thoảng nhẹ làm bóng trúc đu đưa trên nền sân tạo nên một không khí tĩnh lặng, trầm mặc, đậm phong vị thiền và vẻ đẹp tao nhã của người quân tử.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 4: Em hiểu thế nào về khái niệm “xuân tâm” trong câu thơ cuối?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> “Xuân tâm” có nghĩa đen là lòng xuân, tình xuân. Ở tầng sâu thẩm mỹ, đó là sự rạo rực của sức sống tuổi trẻ, khát khao được yêu thương, sum vầy, đồng cảm; hoặc là nỗi niềm bâng khuâng trăn trở trước bước đi thời gian và khát vọng cống hiến của người trí thức phong kiến.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 5: Bài thơ thể hiện nghệ thuật “tả cảnh ngụ tình” độc đáo như thế nào?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> Tác giả đặt hai bức tranh tương phản cạnh nhau: ngoại cảnh tràn đầy sức sống lứa đôi (chim én tha bùn thơm đắp tổ) đối lập với con người ngồi cô độc giữa ban ngày tĩnh lặng không bóng người qua lại. Cảnh không hề buồn nhưng lại đánh thức nỗi cô đơn và khát vọng sâu thẳm trong lòng người.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 6: Theo em, điểm đặc sắc nhất của bài thơ nằm ở cảnh vật hay cảm xúc? Vì sao?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> Đây là câu hỏi mở. Học sinh có thể chọn cảnh vật vì nét vẽ vi tế (bóng trúc rủ, ngậm bùn thơm), hoặc chọn cảm xúc vì sự kín đáo, tinh tế của “xuân tâm”. Tuy nhiên, câu trả lời toàn diện nhất là sự hòa quyện tuyệt diệu giữa cảnh và tình: cảnh là chất men khơi dậy tình, và tình làm cho cảnh xuân thêm phần rung động có hồn.</p>
          </div>

          <div class="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <p class="font-bold text-red-900 font-classical">Câu 7: Là học sinh Thái Nguyên, chúng ta học tập được điều gì từ cuộc đời danh nhân Đỗ Cận?</p>
            <p class="text-sm mt-2 text-stone-700"><strong>Gợi ý trả lời:</strong> Học tập tinh thần vượt khó, say mê tự học rèn đức luyện tài; noi gương lối sống thanh bạch, trung quân ái quốc; và đặc biệt là tấm lòng luôn hướng về xây dựng quê hương xứ sở như việc ông cho dựng đền Lục Giáp để khuyến học năm xưa.</p>
          </div>
        </div>
      </div>
    `
  }
];

export const REFERENCES_DATA = [
  {
    id: 1,
    title: 'Văn bia Tiến sĩ khoa Mậu Tuất (1478), niên hiệu Hồng Đức thứ 9',
    author: 'Văn Miếu – Quốc Tử Giám Hà Nội',
    type: 'Di sản Tư liệu Thế giới UNESCO / Thư tịch Hán Nôm',
    notes: 'Bia số 6 tại Văn Miếu, ghi danh Tiến sĩ Đỗ Cận (quê huyện Phổ Yên).'
  },
  {
    id: 2,
    title: 'Toàn Việt thi lục (全越詩錄)',
    author: 'Bảng nhãn Lê Quý Đôn (1726 – 1784) biên soạn',
    type: 'Bộ thi tuyển thơ Hán Việt / Viện Nghiên cứu Hán Nôm',
    notes: 'Văn bản gốc lưu giữ bài thơ Xuân yến và các bài thơ đi sứ của Đỗ Cận.'
  },
  {
    id: 3,
    title: 'Đại Việt sử ký toàn thư (Bản kỷ, quyển XIII - Kỷ nhà Lê)',
    author: 'Ngô Sĩ Liên và Sử quan triều Hậu Lê',
    type: 'Chính sử quốc gia / NXB Khoa học Xã hội',
    notes: 'Ghi chép các kỳ thi Đình thời Lê Thánh Tông và chuyến đi sứ năm Quý Mão (1483).'
  },
  {
    id: 4,
    title: 'Hoàng Việt thi văn tuyển (皇越詩選)',
    author: 'Bùi Huy Bích (1744 – 1818)',
    type: 'Tổng tập thơ văn chữ Hán kinh điển',
    notes: 'Chứa bản dịch thơ lục bát quen thuộc của thi phẩm Xuân yến.'
  },
  {
    id: 5,
    title: 'Tài liệu Giáo dục địa phương tỉnh Thái Nguyên (Cấp THPT)',
    author: 'Sở Giáo dục và Đào tạo tỉnh Thái Nguyên',
    type: 'Sách giáo khoa / Tài liệu giảng dạy chính thức',
    notes: 'Chuyên đề: Danh nhân văn hóa, lịch sử và tác gia văn học tiêu biểu tỉnh Thái Nguyên.'
  },
  {
    id: 6,
    title: 'Hồ sơ khoa học Di tích Lịch sử Quốc gia Đền thờ Tiến sĩ Đỗ Cận',
    author: 'Bộ Văn hóa, Thể thao và Du lịch',
    type: 'Quyết định số 834/QĐ-BVHTTDL ngày 24/3/2014',
    notes: 'Xác nhận quê quán tại làng Thống Thượng, xã Minh Đức, thị xã Phổ Yên (nay là TP Phổ Yên).'
  },
  {
    id: 7,
    title: 'Bài viết và tư liệu nghiên cứu trên Báo Thái Nguyên & Cổng TTĐT Thái Nguyên',
    author: 'Hội đồng Khoa học Lịch sử tỉnh Thái Nguyên & Báo Thái Nguyên',
    type: 'Tư liệu chuyên ngành lịch sử - văn hóa',
    notes: 'Các chuyên đề khảo cứu về Tiến sĩ Đỗ Cận và đền Lục Giáp (Phổ Yên).'
  }
];
