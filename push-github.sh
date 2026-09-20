#!/bin/bash
# Tool tự động đẩy dự án lên GitHub cho Lớp 11A3 THPT Lương Phú
# Hướng dẫn chạy: bash push-github.sh hoặc ./push-github.sh

echo "========================================================="
echo "   TOOL TỰ ĐỘNG ĐẨY LÊN GITHUB - LỚP 11A3 THPT LƯƠNG PHÚ"
echo "   Đề tài: Danh nhân Đỗ Cận & Thi phẩm Xuân Yến"
echo "========================================================="

if ! command -v git &> /dev/null; then
    echo "❌ Lỗi: Máy của bạn chưa cài đặt Git! Hãy tải Git tại: https://git-scm.com"
    exit 1
fi

# Kiểm tra repo git đã khởi tạo chưa
if [ ! -d ".git" ]; then
    echo "📦 Đang khởi tạo Git repository..."
    git init
    git branch -M main
fi

# Hỏi link GitHub Repository
echo ""
echo "👉 Bước 1: Tạo 1 repository mới trên GitHub (ví dụ: do-can-xuan-yen-11a3)."
read -p "👉 Bước 2: Dán đường link GitHub Repository của bạn vào đây: " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "⚠️ Bạn chưa nhập link GitHub repository! Thao tác đã hủy."
    exit 1
fi

echo ""
echo "🚀 Đang kiểm tra và thêm file..."
git add .

echo "📝 Đang tạo commit..."
git commit -m "feat: Báo cáo slide toàn màn hình Đỗ Cận & Xuân Yến - Lớp 11A3 THPT Lương Phú"

# Cập nhật remote origin
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

echo "⬆️ Đang đẩy code lên GitHub nhánh main..."
git push -u origin main --force

echo ""
echo "========================================================="
echo "✅ ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!"
echo "👉 Để chạy trang web trực tiếp miễn phí trên GitHub:"
echo "   1. Truy cập repo của bạn trên GitHub"
echo "   2. Vào mục 'Settings' -> chọn 'Pages'"
echo "   3. Tại 'Build and deployment' -> 'Source', chọn: 'GitHub Actions'"
echo "   4. Sau 1 phút, web sẽ tự chạy tại: https://<username>.github.io/<repo-name>/"
echo "========================================================="
