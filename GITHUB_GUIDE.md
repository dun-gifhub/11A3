# HƯỚNG DẪN ĐƯA DỰ ÁN LÊN GITHUB & CHẠY TRỰC TIẾP (GITHUB PAGES)
**Dành cho học sinh Lớp 11A3 – Trường THPT Lương Phú (Thái Nguyên)**
**Đề tài: Danh nhân Đỗ Cận & Thi phẩm “Xuân yến” (春燕)**

---

## ⚡ CÁCH 1: DÙNG TOOL TỰ ĐỘNG (NHANH NHẤT – 1 BẤM LÀ XONG)

Dự án đã được tích hợp sẵn 2 tool tự động:

### 👉 Trên máy tính Windows:
1. Tạo 1 repository mới trên [GitHub.com](https://github.com) (đặt tên ví dụ: `do-can-11a3`).
2. Tải toàn bộ mã nguồn về máy (hoặc mở thư mục dự án).
3. Nhấp đúp chuột vào file: **`push-github.bat`**.
4. Dán link GitHub repository của bạn vào rồi nhấn **Enter**. Tool sẽ tự động nạp code và đẩy lên GitHub!

### 👉 Trên máy Mac / Linux / Git Bash:
1. Mở Terminal tại thư mục dự án.
2. Chạy lệnh:
   ```bash
   bash push-github.sh
   ```
3. Dán link repository vào và nhấn **Enter**.

---

## 🌐 CÁCH BẬT CHẠY TRỰC TIẾP MIỄN PHÍ TRÊN GITHUB (GITHUB PAGES)

Dự án đã có sẵn file tự động triển khai: `.github/workflows/deploy.yml`.

Sau khi code đã đẩy lên GitHub:
1. Vào repository của bạn trên GitHub.
2. Bấm vào tab **Settings** (Cài đặt).
3. Ở menu bên trái, chọn mục **Pages**.
4. Tại phần **Build and deployment** -> mục **Source**, chọn: **`GitHub Actions`**.
5. Đợi khoảng 1 phút, GitHub sẽ tự động build và cung cấp cho bạn một đường link chạy trực tiếp miễn phí, ví dụ:
   `https://<tên-tài-khoản-github>.github.io/<tên-repo>/`

*Bạn có thể gửi link này cho thầy cô và các bạn trong lớp xem trình chiếu slide trực tiếp trên máy tính hoặc điện thoại mà không cần cài đặt thêm bất kỳ phần mềm nào.*

---

## 💻 CÁCH 2: DÙNG CÁC LỆNH GIT THỦ CÔNG (DÀNH CHO BẠN NÀO MUỐN GÕ LỆNH)

Mở Terminal / PowerShell / Command Prompt tại thư mục dự án và chạy lần lượt:

```bash
# 1. Khởi tạo Git
git init

# 2. Đặt nhánh chính là main
git branch -M main

# 3. Thêm toàn bộ các file
git add .

# 4. Lưu lại commit
git commit -m "feat: Báo cáo slide toàn màn hình Đỗ Cận và Xuân Yến - Lớp 11A3 THPT Lương Phú"

# 5. Kết nối với repo GitHub của bạn (thay link của bạn vào)
git remote add origin https://github.com/TÊN_TÀI_KHOẢN/TÊN_REPO.git

# 6. Đẩy code lên
git push -u origin main --force
```

---

## 🚀 CÁCH CHẠY DỰ ÁN TRÊN MÁY TÍNH CÁ NHÂN (LOCAL)

Nếu muốn chạy trên máy để trình chiếu ngoại tuyến khi không có mạng internet:
```bash
# Cài đặt thư viện
npm install

# Khởi động trình chiếu cục bộ
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000` và nhấn **`F`** để vào chế độ toàn màn hình!
