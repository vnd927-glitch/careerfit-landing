# CareerFit Landing

- Repo website giới thiệu CareerFit, độc lập với ứng dụng chính.
- HTML/CSS/JavaScript thuần trong public/. Không cần framework hoặc dependency chạy production.
- scripts/build.mjs sao chép public/ sang dist/ cho Vercel. Không commit dist/, .vercel/ hoặc secret.
- Không thêm backend, form đăng ký, tích hợp gửi mail hoặc thu thập dữ liệu khi chưa được yêu cầu.
- Nội dung phản ánh đúng dự án đang phát triển. Không bịa người dùng, đánh giá, số liệu hoặc trạng thái gửi email.
- Minh họa sản phẩm phải ghi rõ là minh họa.
- Không tạo file test mới hoặc thêm test case. Hạn chế chia nhỏ hàm khi không cần.
- Sau khi sửa, chạy npm run check và npm run build; kiểm tra desktop/mobile khi thay đổi bố cục.
- Mục tiêu hosting là Vercel. Chỉ publish, tạo remote Git hoặc đổi DNS khi được yêu cầu.
