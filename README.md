# CareerFit Landing

Landing page một trang giới thiệu dự án CareerFit, phục vụ người tìm hiểu dự án và cung cấp thông tin cho hồ sơ xin Amazon SES Production access.

Website dùng HTML/CSS/JavaScript thuần, không có dependency, backend, form thu thập hồ sơ hoặc kết nối tới ứng dụng chính.

## Chạy local

Yêu cầu Node.js 20 trở lên.

    npm run dev

Mở http://127.0.0.1:4175. Đổi cổng bằng biến môi trường PORT khi cần.

    npm run check
    npm run build
    npm run preview

Lệnh build kiểm tra các liên kết nội bộ và asset tham chiếu trong HTML, sau đó tạo dist/. Preview phục vụ dist/ tại cùng cổng 4175.

## Cấu trúc

- public/index.html: nội dung giới thiệu, vai trò, AI, thông tin dữ liệu/email và liên hệ.
- public/styles.css: theme xanh CareerFit, responsive desktop/mobile.
- public/main.js: menu mobile, tab vai trò hỗ trợ bàn phím, mở mục quyền riêng tư.
- public/assets/: logo và mascot có sẵn của dự án CareerFit.
- scripts/: build và server xem thử cục bộ.
- vercel.json: cấu hình build, thư mục xuất bản và security headers.

Nội dung trong khung sản phẩm được ghi là minh họa. Trang ghi rõ ứng dụng chính chưa mở đăng ký công khai; email giao dịch là phần dự kiến tích hợp.

## Deploy Vercel

1. Tạo repository mới trên tài khoản GitHub/GitLab/Bitbucket của bạn, rồi push repo này.
2. Trong Vercel chọn Add New → Project, import repository.
3. Framework Preset: Other. Root Directory: gốc repo này.
4. Build Command: npm run build.
5. Output Directory: dist. Không cần biến môi trường hoặc API key.
6. Deploy. Bảo đảm URL production có thể mở khi không đăng nhập Vercel trước khi cung cấp cho AWS.
7. Project Settings → Domains → thêm ngocdanh.click.
8. Thêm đúng DNS record Vercel hiển thị vào nơi đang quản lý DNS. Giữ nguyên CNAME DKIM và TXT DMARC của SES; không cần chuyển nameserver sang Vercel.

Repo đã có cấu hình vercel.json; Vercel đọc buildCommand và outputDirectory trực tiếp.

Không có Git remote hay deployment nào được tự tạo trong bước chuẩn bị local.

## Liên hệ và SES

- Email liên hệ công khai: vanngocdanh2004@gmail.com, lấy từ thông tin AWS người phát triển đã cung cấp.
- Địa chỉ gửi tự động dự kiến: no-reply@ngocdanh.click.
- Muốn đổi email hoặc domain: tìm và thay trong public/index.html.
- Gmail liên hệ và địa chỉ gửi SES là hai mục khác nhau; xác minh domain SES không tạo ra hộp thư nhận.
- Chỉ mô tả những cấu hình và quy trình đã triển khai thực tế trong yêu cầu AWS.
- Landing page giúp giới thiệu dự án, không bảo đảm AWS chấp thuận Production access.
- Khi SES được tích hợp vào ứng dụng chính, cập nhật nội dung trạng thái email và thông tin xử lý bounce/complaint cho đúng thực tế.

Tài liệu: https://vercel.com/docs/domains/set-up-custom-domain và https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html

## Kiểm chứng local ngày 22/11/2026

- npm run check và npm run build hoàn thành.
- Kiểm tra trình duyệt desktop và mobile 390 × 844, không có tràn ngang trên mobile.
- Menu mobile mở/đóng, Escape, điều hướng liên hệ; tab vai trò hỗ trợ phím trái/phải; liên kết quyền riêng tư mở đúng nội dung.
- Logo, avatar và favicon tải từ repo. Không có lỗi JavaScript trong lần kiểm tra.
- Chưa push lên remote hoặc deploy Vercel; chưa kiểm chứng cấu hình trên một deployment thật.
