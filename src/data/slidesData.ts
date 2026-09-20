import { SlideData } from '../types';

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    category: 'MỞ ĐẦU',
    title: 'TÌM HIỂU TÁC GIẢ ĐỖ CẬN VÀ TÁC PHẨM XUÂN YẾN',
    subtitle: '春燕 – Chim én mùa xuân | Môn Ngữ văn & Giáo dục địa phương Thái Nguyên',
    bulletPoints: [
      {
        heading: 'Chủ đề báo cáo',
        content: 'Nghiên cứu về danh nhân khoa bảng Đỗ Cận và thi phẩm chữ Hán đặc sắc “Xuân yến”',
        badge: 'Lớp 11A3 – THPT Lương Phú'
      },
      {
        heading: 'Đơn vị thực hiện',
        content: 'Tập thể học sinh Lớp 11A3 – Trường THPT Lương Phú (Phú Bình, Thái Nguyên)'
      },
      {
        heading: 'Định hướng nội dung',
        content: 'Khoa học, chuẩn xác từ văn bản Hán Nôm, phân biệt rõ nguyên tác - phiên âm - dịch nghĩa - dịch thơ'
      }
    ],
    quoteBox: {
      text: '“Đình viện phong vi trúc ảnh đê / Hoạ thiềm thâm xứ đới hương nê...”',
      author: 'Đỗ Cận (1434 – ?)',
      source: 'Toàn Việt thi lục'
    },
    visualHint: {
      iconName: 'Feather',
      tag: 'Thi phẩm Trung đại',
      colorTheme: 'red',
      illustrationType: 'poem'
    },
    speakerNotes: 'Kính chào thầy cô giáo và toàn thể các bạn học sinh lớp 11A3 trường THPT Lương Phú. Hôm nay, nhóm xin phép được trình bày bài thuyết trình chuyên đề về danh nhân Đỗ Cận – niềm tự hào khoa bảng đất Thái Nguyên, cùng thi phẩm chữ Hán đặc sắc của ông mang tên “Xuân yến” (春燕 – Cánh én mùa xuân).'
  },
  {
    id: 2,
    category: 'PHẦN I: TÁC GIẢ',
    title: 'ĐÔI NÉT VỀ CUỘC ĐỜI & SỰ NGHIỆP ĐỖ CẬN',
    subtitle: 'Bậc đại khoa, danh thần tiêu biểu thời thịnh trị Hồng Đức (thế kỷ XV)',
    bulletPoints: [
      {
        heading: 'Tên tuổi & Năm sinh',
        content: 'Tên khai sinh là Đỗ Viễn, tự Hữu Khác, hiệu Phổ Sơn. Sinh năm 1434 (Giáp Dần). Năm mất: Chưa có tài liệu ghi rõ chính xác (tương truyền sống thọ trên 70 tuổi).',
        badge: 'Chính sử'
      },
      {
        heading: 'Sự tích đổi tên “Đỗ Cận”',
        content: 'Sau khi đỗ đại khoa, đích thân vua Lê Thánh Tông ban đổi tên thành Đỗ Cận (mang ý nghĩa gần gũi kề cận quân vương, trung quân ái quốc).'
      },
      {
        heading: 'Khoa cử đại đăng khoa',
        content: 'Đỗ Đệ tam giáp đồng Tiến sĩ xuất thân khoa Mậu Tuất (1478) niên hiệu Hồng Đức thứ 9. Tên ông được khắc trên bia đá Văn Miếu – Quốc Tử Giám Hà Nội.'
      },
      {
        heading: 'Hoạn lộ & Tao Đàn',
        content: 'Từng giữ chức Hàn lâm viện Thị độc, Tham nghị xứ Quảng Nam, làm Phó sứ đi sứ nhà Minh năm 1483. Về nước được thăng Thượng thư, là thành viên Hội Tao Đàn Nhị thập bát tú.'
      }
    ],
    visualHint: {
      iconName: 'ScrollText',
      tag: 'Tiến sĩ 1478',
      colorTheme: 'amber',
      illustrationType: 'author'
    },
    speakerNotes: 'Thưa cô và các bạn, Đỗ Cận sinh năm 1434. Tên gốc của ông là Đỗ Viễn. Khi ông đỗ Tiến sĩ năm 1478, vua Lê Thánh Tông vì mến mộ đức tài nên đã đổi tên ông thành Đỗ Cận. Tên của ông hiện diện trang trọng trên tấm bia Tiến sĩ số 6 tại Văn Miếu – Quốc Tử Giám. Ông từng giữ các trọng trách quan trọng như Hàn lâm Thị độc, Tham nghị xứ Quảng Nam và thăng chức Thượng thư.'
  },
  {
    id: 3,
    category: 'PHẦN I: ĐỊA PHƯƠNG',
    title: 'ĐỖ CẬN VÀ VÙNG ĐẤT THÁI NGUYÊN',
    subtitle: 'Biểu tượng của truyền thống hiếu học và niềm tự hào xứ Trà',
    bulletPoints: [
      {
        heading: 'Quê quán',
        content: 'Làng Thống Thượng, xã Minh Đức, huyện Phổ Yên (nay thuộc phường Minh Đức, thành phố Phổ Yên, tỉnh Thái Nguyên).',
        badge: 'Thái Nguyên'
      },
      {
        heading: 'Đóng góp dựng xây quê hương',
        content: 'Ông vận động quyên góp mở đường xá, tu bổ cầu cống, chùa chiền; đặc biệt xây dựng lại đền Lục Giáp (xã Đắc Sơn, Phổ Yên) phỏng theo quy thức Văn Miếu để cổ vũ sự học.'
      },
      {
        heading: 'Di tích Lịch sử Quốc gia',
        content: 'Đền thờ Tiến sĩ Đỗ Cận tại TDP Thống Thượng, phường Minh Đức được xếp hạng là Di tích Lịch sử cấp Quốc gia vào năm 2014.'
      },
      {
        heading: 'Ý nghĩa trong giáo dục địa phương',
        content: 'Đỗ Cận là danh nhân khai khoa tiêu biểu hàng đầu của Thái Nguyên, cầu nối văn hóa giữa kinh đô Thăng Long và vùng trung du miền núi phía Bắc.'
      }
    ],
    visualHint: {
      iconName: 'Landmark',
      tag: 'Di tích Quốc gia 2014',
      colorTheme: 'green',
      illustrationType: 'temple'
    },
    speakerNotes: 'Đối với tỉnh Thái Nguyên chúng ta, Đỗ Cận có một vị trí vô cùng đặc biệt. Quê hương ông ở làng Thống Thượng, Phổ Yên. Ông không chỉ mang vinh quang về cho quê nhà khi đỗ đạt mà còn cho dựng đền Lục Giáp phỏng theo Văn Miếu để khuyến khích tinh thần hiếu học. Năm 2014, đền thờ của ông đã được Nhà nước xếp hạng Di tích Lịch sử cấp Quốc gia.'
  },
  {
    id: 4,
    category: 'PHẦN II: TÁC PHẨM',
    title: 'GIỚI THIỆU TÁC PHẨM “XUÂN YẾN”',
    subtitle: 'Lai lịch văn bản, thể loại và giải mã nhan đề bài thơ',
    bulletPoints: [
      {
        heading: 'Nhan đề',
        content: '“Xuân yến” (春燕) nghĩa là “Chim én mùa xuân”. “Xuân” là mùa xuân, tuổi trẻ, sức sống; “Yến” là loài chim sứ giả mang tin xuân và hơi ấm sum vầy.',
        badge: '春燕'
      },
      {
        heading: 'Thể thơ & Ngôn ngữ',
        content: 'Thể thơ Thất ngôn tứ tuyệt Đường luật viết bằng chữ Hán (4 câu, mỗi câu 7 chữ, tổng 28 chữ, gieo vần chân: đê - nê - tê).'
      },
      {
        heading: 'Xuất xứ văn bản',
        content: 'Bài thơ được Bảng nhãn Lê Quý Đôn tuyển chọn và ghi chép lại trong bộ thi tuyển đồ sộ “Toàn Việt thi lục” ở thế kỷ XVIII.'
      },
      {
        heading: 'Hoàn cảnh sáng tác',
        content: 'Văn bản gốc không kèm lời tựa nên chưa xác định được chính xác hoàn cảnh cụ thể. Giới nghiên cứu tiếp cận tác phẩm trên cơ sở thi pháp và văn bản nghệ thuật thuần túy.'
      }
    ],
    visualHint: {
      iconName: 'BookOpen',
      tag: 'Toàn Việt thi lục',
      colorTheme: 'stone',
      illustrationType: 'swallow'
    },
    speakerNotes: 'Bước sang phần hai, chúng ta cùng tìm hiểu tác phẩm “Xuân yến”. Nhan đề bài thơ kết hợp giữa “Xuân” – thời gian của sinh sôi và “Yến” – cánh chim báo xuân. Bài thơ thuộc thể thất ngôn tứ tuyệt chữ Hán, được bảo tồn trong tuyển tập danh tiếng Toàn Việt thi lục của Lê Quý Đôn. Chúng ta cần lưu ý là văn bản không có lời tựa nên hoàn cảnh ra đời cụ thể chưa được khẳng định chắc chắn.'
  },
  {
    id: 5,
    category: 'PHẦN III: VĂN BẢN',
    title: 'NGUYÊN TÁC CHỮ HÁN VÀ PHIÊN ÂM',
    subtitle: 'Khảo cứu chính xác 28 chữ Hán của thi phẩm “Xuân yến”',
    bulletPoints: [
      {
        heading: 'Nguyên tác chữ Hán (Hán tự)',
        content: '庭院風微竹影低，\n畫簷深處帶香泥。\n綠窻晝静無人到，\n挑撥春心日未西。',
        badge: 'Chữ Hán chuẩn'
      },
      {
        heading: 'Phiên âm Hán – Việt',
        content: 'Đình viện phong vi trúc ảnh đê,\nHoạ thiềm thâm xứ đới hương nê.\nLục song trú tĩnh vô nhân đáo,\nKhiêu bát xuân tâm nhật vị tê (tây).'
      },
      {
        heading: 'Quy luật niêm luật & vần',
        content: 'Vần bằng: “đê” (低) – “nê” (泥) – “tê” (西). Đối xứng thanh điệu uyển chuyển theo đúng thi pháp Đường thi trung đại.'
      }
    ],
    visualHint: {
      iconName: 'Languages',
      tag: 'Thất ngôn tứ tuyệt',
      colorTheme: 'red',
      illustrationType: 'poem'
    },
    speakerNotes: 'Mời cô giáo và các bạn cùng quan sát nguyên tác chữ Hán và phần phiên âm của bài thơ. Bốn câu thơ với vỏn vẹn 28 âm tiết nhưng đúc kết trọn vẹn thi pháp tứ tuyệt: Đình viện phong vi trúc ảnh đê / Hoạ thiềm thâm xứ đới hương nê / Lục song trú tĩnh vô nhân đáo / Khiêu bát xuân tâm nhật vị tê.'
  },
  {
    id: 6,
    category: 'PHẦN III: DỊCH NGHĨA & DỊCH THƠ',
    title: 'DỊCH NGHĨA VÀ CÁC BẢN DỊCH THƠ',
    subtitle: 'Đối chiếu các tầng nghĩa từ ngữ để thấu hiểu văn bản',
    bulletPoints: [
      {
        heading: 'Dịch nghĩa từng câu',
        content: 'Gió thoảng ngoài sân, bóng trúc rủ thấp,\n(Én xuân) tha bùn thơm làm tổ kín dưới mái hiên.\nBên cửa song biếc, ban ngày yên lặng không người tới,\nKhêu gợi lòng xuân lúc mặt trời chưa xế tây.'
      },
      {
        heading: 'Bản dịch thơ 1 (Hoàng Việt thi văn tuyển)',
        content: '“Gió phất tre sân, bóng thướt tha,\nBùn thơm lót tổ dưới hiên nhà.\nBên song yên lặng không người tới,\nGợi mối lòng xuân trước bóng tà.”',
        badge: 'Bản dịch 1'
      },
      {
        heading: 'Bản dịch thơ 2 (Vũ Bình Lục dịch)',
        content: '“Sân gió mát, bóng trúc xòa,\nBùn thơm lót tổ, hiên nhà én xây.\nBên song vắng vẻ ban ngày,\nLòng xuân thao thức trời tây chưa tà.”',
        badge: 'Bản dịch 2'
      }
    ],
    visualHint: {
      iconName: 'Quote',
      tag: 'So sánh bản dịch',
      colorTheme: 'green',
      illustrationType: 'poem'
    },
    speakerNotes: 'Để hiểu rõ thi phẩm, chúng ta đối chiếu giữa dịch nghĩa và hai bản dịch thơ thể lục bát: một bản trong Hoàng Việt thi văn tuyển và một bản của nhà thơ - nhà nghiên cứu Vũ Bình Lục. Cả hai bản đều giữ được hồn thơ thanh thoát, sự đối lập giữa cảnh chim làm tổ ấm cúng và sự cô tịch bên song cửa biếc.'
  },
  {
    id: 7,
    category: 'PHẦN IV: PHÂN TÍCH',
    title: 'BỨC TRANH MÙA XUÂN TRONG HAI CÂU ĐẦU',
    subtitle: '“Đình viện phong vi trúc ảnh đê / Hoạ thiềm thâm xứ đới hương nê”',
    bulletPoints: [
      {
        heading: 'Không gian “Đình viện” & Cơn gió “phong vi”',
        content: 'Sân viện tĩnh mịch, kín đáo. Gió không ào ạt mà chỉ “phong vi” (gió thoảng nhẹ hiu hiu), gợi bước chuyển mùa êm ả, dịu dàng của tiết xuân.'
      },
      {
        heading: 'Hình tượng “trúc ảnh đê” (bóng trúc rủ thấp)',
        content: 'Cành trúc quân tử thanh mảnh la đà lay động, bóng rủ thấp xuống nền sân. Nghệ thuật điểm xuyết tinh tế: không tả màu xanh của trúc mà bắt lấy bóng trúc rủ.'
      },
      {
        heading: 'Mái hiên chạm “hoạ thiềm”',
        content: 'Góc mái hiên chạm vẽ hoa văn tao nhã chốn thư phòng/dinh thự cổ, tạo nên chiều sâu không gian kín đáo (“thâm xứ”).'
      },
      {
        heading: 'Đặc trưng thẩm mỹ',
        content: 'Cảnh vật không ồn ào rực rỡ mà toát lên vẻ thanh nhã, êm đềm, đậm chất thiền và nét quan sát siêu vi tế của thi nhân trung đại.'
      }
    ],
    visualHint: {
      iconName: 'Wind',
      tag: 'Ngoại cảnh tao nhã',
      colorTheme: 'green',
      illustrationType: 'analysis'
    },
    speakerNotes: 'Đi sâu vào hai câu đầu, ta thấy Đỗ Cận mở ra một không gian “đình viện” thật yên ắng. Ngọn gió chỉ thoảng nhẹ làm bóng trúc nghiêng nghiêng chạm xuống mặt sân. Thi nhân không miêu tả cảnh xuân rực rỡ sắc màu mà nắm bắt những chuyển động khẽ khàng nhất của thiên nhiên.'
  },
  {
    id: 8,
    category: 'PHẦN IV: HÌNH TƯỢNG',
    title: 'HÌNH TƯỢNG CHIM ÉN & “ĐỚI HƯƠNG NÊ”',
    subtitle: 'Nghệ thuật giấu chủ ngữ và nét vẽ đắt giá về sự sống mùa xuân',
    bulletPoints: [
      {
        heading: 'Thủ pháp “ý tại ngôn ngoại”',
        content: 'Trong câu 2 không trực tiếp xuất hiện chữ “yến” (chim én), nhưng qua hành động “đới hương nê” (ngậm bùn thơm) kết hợp nhan đề, người đọc nhận ra ngay hình ảnh chim én xuân.'
      },
      {
        heading: 'Ý nghĩa của “hương nê” (bùn thơm)',
        content: 'Bùn đất không nhơ nhớp mà đượm hương hoa cỏ sau mưa xuân, biểu trưng cho sự trù phú, tươi mát và hương vị nồng nàn của đất trời sinh sôi.'
      },
      {
        heading: 'Khát vọng xây tổ ấm sum vầy',
        content: 'Cánh én tha bùn vào góc sâu mái hiên để dựng tổ gợi lên sự gắn bó đôi lứa, quy luật truyền đời của vạn vật khi mùa xuân về.'
      },
      {
        heading: 'Đòn bẩy nghệ thuật',
        content: 'Hình ảnh chim én cần cù xây tổ ấm là nhịp cầu nối khéo léo để tác giả chuẩn bị chuyển mạch cảm xúc vào hai câu sau.'
      }
    ],
    visualHint: {
      iconName: 'Bird',
      tag: 'Hình tượng chim én',
      colorTheme: 'amber',
      illustrationType: 'swallow'
    },
    speakerNotes: 'Một chi tiết nghệ thuật cực kỳ đắt giá là cụm từ “đới hương nê” – tha bùn thơm. Dù câu thơ không nhắc tên chim én, nhưng ai đọc cũng thấy hiện lên hình ảnh đôi én miệt mài tha bùn thơm hoa cỏ về dưới góc mái hiên chạm vẽ để đắp tổ ấm. Sự gắn kết của vạn vật vào xuân chính là đòn bẩy gợi mở thế giới nội tâm con người.'
  },
  {
    id: 9,
    category: 'PHẦN IV: CẢNH VÀ TÌNH',
    title: 'HAI CÂU CUỐI – SỰ CHUYỂN BIẾN TỪ CẢNH SANG TÌNH',
    subtitle: '“Lục song trú tĩnh vô nhân đáo / Khiêu bát xuân tâm nhật vị tê”',
    bulletPoints: [
      {
        heading: 'Không gian “Lục song” (song cửa biếc)',
        content: 'Tầm nhìn chuyển từ sân ngoài vào phòng trong. Cửa sổ mắt cáo sơn xanh/phủ lụa biếc là ranh giới ngăn cách giữa ngoại giới và cõi lòng thi nhân.'
      },
      {
        heading: 'Sự yên tĩnh cực độ: “Trú tĩnh vô nhân đáo”',
        content: 'Ban ngày tĩnh mịch, tuyệt nhiên không có bóng người qua lại. Càng nhấn mạnh sự cô đơn, khoảng không gian vắng lặng tuyệt đối của chốn thư phòng.'
      },
      {
        heading: 'Thời điểm “nhật vị tê” (mặt trời chưa xế tây)',
        content: 'Mặt trời còn chưa lặn mà cõi lòng đã trĩu nặng suy tư. Ngày dài vô tận càng làm nổi bật tâm trạng thao thức, bâng khuâng.'
      },
      {
        heading: 'Động từ mạnh: “Khiêu bát xuân tâm”',
        content: '“Khiêu bát” là khêu lên, khơi dậy. Cảnh xuân tươi non, đôi én xây tổ đã đánh thức “xuân tâm” – lòng xuân, nỗi khao khát sống, yêu thương hay nỗi hoài nhớ xa xăm.'
      }
    ],
    visualHint: {
      iconName: 'Heart',
      tag: 'Tả cảnh ngụ tình',
      colorTheme: 'red',
      illustrationType: 'analysis'
    },
    speakerNotes: 'Hai câu cuối tạo nên bước ngoặt bất ngờ. Từ không gian ngoài trời, điểm nhìn thu về bên khung cửa sổ biếc “lục song”. Giữa ban ngày vắng vẻ không một bóng người, “nhật vị tê” – mặt trời còn chưa ngả bóng tà, thế mà lòng xuân đã bị khơi dậy dạt dào. Sự yên tĩnh bên ngoài lại đối lập với những đợt sóng cảm xúc đang cựa quậy bên trong.'
  },
  {
    id: 10,
    category: 'PHẦN V: CHỦ ĐỀ',
    title: 'CHỦ ĐỀ VÀ MẠCH CẢM HỨNG BÀI THƠ',
    subtitle: 'Mối quan hệ biện chứng: Thiên nhiên → Chim én → Con người → Tâm trạng',
    bulletPoints: [
      {
        heading: 'Chủ đề tư tưởng chính',
        content: 'Ngợi ca vẻ đẹp tĩnh tại, thanh sạch của mùa xuân phương Nam; đồng thời thể hiện sự nhạy cảm, tinh tế trước bước đi thời gian và khát vọng sống tha thiết.'
      },
      {
        heading: 'Mạch liên kết logic',
        content: 'THIÊN NHIÊN (gió nhẹ, bóng trúc) → CHIM ÉN (tha bùn thơm làm tổ) → MÙA XUÂN (sinh sôi, kết đôi) → CON NGƯỜI (ngồi bên song biếc vắng vẻ) → TÂM TRẠNG (lòng xuân bừng tỉnh, bâng khuâng).'
      },
      {
        heading: 'Hai hướng diễn giải về “tâm trạng”',
        content: 'Hướng 1: Nỗi niềm trăn trở của bậc sĩ phu giữa chốn quan trường thanh vắng, hoài nhớ cố hương. Hướng 2: Mượn mô-típ khuê oán cổ điển để đồng cảm với nỗi niềm khao khát hạnh phúc lứa đôi.'
      }
    ],
    visualHint: {
      iconName: 'Compass',
      tag: 'Mạch cảm xúc',
      colorTheme: 'stone',
      illustrationType: 'analysis'
    },
    speakerNotes: 'Về chủ đề, bài thơ đi theo một mạch vận động vô cùng chặt chẽ: từ gió thoảng bóng trúc của thiên nhiên đến chim én tha bùn kết tổ, dẫn tới hình ảnh con người cô độc bên cửa sổ biếc và kết lại ở “xuân tâm” thức dậy. Đây có thể là tâm sự nhớ quê của kẻ sĩ khi xa nhà, hoặc mượn tứ thơ khuê oán để bày tỏ khát vọng hạnh phúc chân chính.'
  },
  {
    id: 11,
    category: 'PHẦN VI: NGHỆ THUẬT',
    title: 'NHỮNG ĐẶC SẮC VỀ NGHỆ THUẬT',
    subtitle: 'Đỉnh cao thi pháp tứ tuyệt và tinh hoa bút pháp Đường luật',
    bulletPoints: [
      {
        heading: 'Thể thơ Thất ngôn tứ tuyệt',
        content: 'Kết cấu chặt chẽ theo mô hình Khai – Thừa – Chuyển – Hợp (hoặc Cảnh trước – Tình sau), ngôn từ hàm súc đúc kết chỉ trong 28 chữ.'
      },
      {
        heading: 'Nghệ thuật “Lấy động tả tĩnh”',
        content: 'Dùng ngọn gió thoảng lay cành trúc và tiếng vỗ cánh tha bùn của én để làm nổi bật sự tĩnh mịch, an nhiên của viện cảnh ban ngày.'
      },
      {
        heading: 'Thủ pháp “Tả cảnh ngụ tình”',
        content: 'Không tả trực tiếp cảm xúc mà mượn ngoại cảnh tương phản (chim én sum vầy >< người cô độc) để khơi sâu thế giới nội tâm.'
      },
      {
        heading: 'Màu sắc & Ngôn từ ước lệ bác học',
        content: 'Các thi liệu trang trọng: đình viện, họa thiềm, hương nê, lục song hòa quyện với phong thái tao nhã của văn hóa cung đình và tâm hồn Việt.'
      }
    ],
    visualHint: {
      iconName: 'Sparkles',
      tag: 'Bút pháp cổ điển',
      colorTheme: 'amber',
      illustrationType: 'poem'
    },
    speakerNotes: 'Nghệ thuật của bài thơ đạt đến độ điêu luyện của thơ ca trung đại: cấu tứ tứ tuyệt hàm súc, nghệ thuật lấy động tả tĩnh tài tình khi dùng ngọn gió thoảng và cánh én tha bùn để vẽ nên không gian tĩnh lặng. Đặc biệt, nghệ thuật tả cảnh ngụ tình đã nâng bài thơ vượt khỏi một bức tranh phong cảnh đơn thuần.'
  },
  {
    id: 12,
    category: 'PHẦN VII: GIÁ TRỊ',
    title: 'GIÁ TRỊ NỘI DUNG VÀ Ý NGHĨA VĂN HÓA',
    subtitle: 'Tiếng nói nhân văn sâu sắc và đóng góp của thi nhân thời Hồng Đức',
    bulletPoints: [
      {
        heading: 'Bức tranh mùa xuân thanh tao',
        content: 'Lưu giữ vẻ đẹp văn hóa cảnh vật chốn thư phòng truyền thống của người trí thức phong kiến Việt Nam thế kỷ XV.'
      },
      {
        heading: 'Giá trị biểu đạt cảm xúc chân thành',
        content: 'Khẳng định vẻ đẹp tâm hồn nhạy cảm, giàu tình cảm của người trí thức: biết lắng nghe từng rung động tinh vi của vạn vật xung quanh.'
      },
      {
        heading: 'Tầm vóc trong dòng thơ vịnh vật',
        content: 'Thơ đề tài vịnh loài vật (“vịnh vật thi”) thời trung đại thường nặng tính răn dạy đạo lý, nhưng “Xuân yến” thấm đẫm chất trữ tình lãng mạn nhẹ nhàng.'
      },
      {
        heading: 'Vị trí trong sự nghiệp Đỗ Cận',
        content: 'Minh chứng cho tài năng của một thành viên Hội Tao Đàn, thể hiện sự kết hợp hài hòa giữa bản lĩnh danh thần và tâm hồn nghệ sĩ đích thực.'
      }
    ],
    visualHint: {
      iconName: 'Award',
      tag: 'Nhân văn & Thẩm mỹ',
      colorTheme: 'green',
      illustrationType: 'poem'
    },
    speakerNotes: 'Giá trị nổi bật của Xuân yến nằm ở tinh thần nhân văn. Khác với nhiều bài thơ trung đại thường dùng chim muông để giáo huấn luân lý Khổng giáo khô cứng, bài thơ của Đỗ Cận rung rinh cảm xúc đời thường, biểu đạt tình yêu thiên nhiên và sự trân trọng những rung cảm của trái tim con người.'
  },
  {
    id: 13,
    category: 'PHẦN IX: TỔNG KẾT',
    title: 'NHẬN XÉT TỔNG KẾT (KẾT LUẬN)',
    subtitle: 'Đúc kết 150 – 200 chữ phục vụ thuyết trình',
    bulletPoints: [
      {
        heading: 'Tâm hồn thi nhân và thiên nhiên',
        content: '“Qua thi phẩm Xuân yến, người đọc bắt gặp một bức tranh mùa xuân thanh khiết, tao nhã nhưng ngập tràn nhựa sống; đồng thời cảm nhận được một tâm hồn thi nhân Đỗ Cận vô cùng tinh tế và nhạy cảm.”'
      },
      {
        heading: 'Đỉnh cao nghệ thuật trung đại',
        content: '“Chỉ bằng 28 chữ Hán cô đọng, bài thơ đã vận dụng xuất sắc thi pháp Đường luật: lấy động tả tĩnh, dùng ngoại cảnh khêu gợi nội tâm để nâng hình tượng cánh én mùa xuân thành biểu tượng của sự sum vầy và khát vọng sống tha thiết.”'
      },
      {
        heading: 'Niềm tự hào Thái Nguyên',
        content: '“Tác phẩm không chỉ là đóa hoa thơm trong di sản văn học thời Lê sơ mà còn là niềm tự hào sâu sắc của truyền thống văn hóa, hiếu học đất Thái Nguyên hôm nay.”'
      }
    ],
    visualHint: {
      iconName: 'BookmarkCheck',
      tag: 'Đúc kết giá trị',
      colorTheme: 'red',
      illustrationType: 'poem'
    },
    speakerNotes: 'Tóm lại, qua Xuân yến, người đọc bắt gặp một bức tranh mùa xuân thanh khiết nhưng ngập tràn nhựa sống, cảm nhận được tâm hồn Đỗ Cận vô cùng tinh tế. Chỉ 28 chữ cô đọng, bài thơ đã kết tinh đỉnh cao nghệ thuật tả cảnh ngụ tình, vừa là viên ngọc quý của văn học thời Lê sơ vừa là niềm tự hào lớn của vùng đất Thái Nguyên.'
  },
  {
    id: 14,
    category: 'PHẦN X: TƯƠNG TÁC',
    title: 'CÂU HỎI TƯƠNG TÁC CÙNG CẢ LỚP',
    subtitle: 'Các vấn đề thảo luận sôi nổi giúp giờ học thêm hào hứng',
    bulletPoints: [
      {
        heading: 'Câu 1 (Hình tượng)',
        content: 'Vì sao thi nhân chọn hình ảnh chim én để mở ra bức tranh xuân thay vì hoa cỏ rực rỡ?'
      },
      {
        heading: 'Câu 2 (Cấu trúc & Cảm xúc)',
        content: 'Hai câu đầu và hai câu cuối có sự chuyển dịch như thế nào về không gian và cảm xúc?'
      },
      {
        heading: 'Câu 3 (Thi liệu)',
        content: 'Hình ảnh “bóng trúc rủ thấp” và “bùn thơm” mang lại hiệu quả thẩm mỹ gì cho bài thơ?'
      },
      {
        heading: 'Câu 4 (Khám phá)',
        content: 'Em hiểu thế nào về khái niệm “xuân tâm” và vì sao nó lại bị đánh thức lúc “nhật vị tê”?'
      },
      {
        heading: 'Câu 5 (Liên hệ địa phương)',
        content: 'Việc tìm hiểu danh nhân Đỗ Cận mang lại ý nghĩa gì đối với học sinh Thái Nguyên chúng ta?'
      }
    ],
    visualHint: {
      iconName: 'HelpCircle',
      tag: 'Thảo luận lớp học',
      colorTheme: 'amber',
      illustrationType: 'analysis'
    },
    speakerNotes: 'Sau đây, nhóm mình có chuẩn bị một số câu hỏi tương tác ngắn để mời cô giáo và các bạn cùng tham gia thảo luận. Các câu hỏi sẽ xoay quanh cách cảm thụ hình tượng chim én, sự chuyển biến từ cảnh sang tình và ý nghĩa việc học tập tấm gương danh nhân Đỗ Cận trên quê hương Thái Nguyên.'
  },
  {
    id: 15,
    category: 'TÀI LIỆU',
    title: 'DANH MỤC TÀI LIỆU THAM KHẢO',
    subtitle: 'Cơ sở học thuật và thư tịch nghiên cứu uy tín đã được kiểm chứng',
    bulletPoints: [
      {
        heading: '1. Văn bia Tiến sĩ Quốc Tử Giám',
        content: 'Bia Tiến sĩ khoa Mậu Tuất (1478), niên hiệu Hồng Đức thứ 9 – Viện Nghiên cứu Hán Nôm & Di tích Văn Miếu - Quốc Tử Giám.'
      },
      {
        heading: '2. Toàn Việt thi lục',
        content: 'Lê Quý Đôn (chủ biên), bản dịch Viện Nghiên cứu Hán Nôm – NXB Khoa học Xã hội (chép thơ Đỗ Cận).'
      },
      {
        heading: '3. Đại Việt sử ký toàn thư',
        content: 'Ngô Sĩ Liên và các sử quan triều Lê – Kỷ nhà Lê (Lê Thánh Tông, năm 1478 và 1483).'
      },
      {
        heading: '4. Tài liệu Giáo dục địa phương tỉnh Thái Nguyên',
        content: 'Chuyên đề Danh nhân Văn hóa – Lịch sử tỉnh Thái Nguyên (Sở GD&ĐT Thái Nguyên ban hành).'
      },
      {
        heading: '5. Hồ sơ Di tích Lịch sử Quốc gia',
        content: 'Quyết định số 834/QĐ-BVHTTDL ngày 24/3/2014 của Bộ Văn hóa, Thể thao và Du lịch về Đền thờ Tiến sĩ Đỗ Cận.'
      }
    ],
    visualHint: {
      iconName: 'Library',
      tag: 'Nguồn kiểm chứng',
      colorTheme: 'stone',
      illustrationType: 'author'
    },
    speakerNotes: 'Bài thuyết trình của tập thể Lớp 11A3 – THPT Lương Phú được xây dựng dựa trên các tư liệu lịch sử và văn bản học đáng tin cậy: từ văn bia Quốc Tử Giám, Toàn Việt thi lục của Lê Quý Đôn, Đại Việt sử ký toàn thư đến hồ sơ di tích quốc gia của Bộ VHTTDL và tài liệu Giáo dục địa phương tỉnh Thái Nguyên. Tập thể 11A3 xin chân thành cảm ơn thầy cô giáo và các bạn đã chú ý lắng nghe!'
  }
];
