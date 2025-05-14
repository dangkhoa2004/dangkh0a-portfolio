# 🚀 Portfolio Cá Nhân - Cao Đăng Khoa

Chào mừng bạn đến với mã nguồn trang web portfolio cá nhân của Cao Đăng Khoa! Nơi đây là không gian để tôi giới thiệu về hành trình, kỹ năng và những dự án đã thực hiện trên con đường trở thành một **Fullstack Developer**.

## ✨ Giới thiệu

Trang web này được xây dựng với mục đích chính là:

- 📚 **Chia sẻ hành trình:** Giới thiệu về nền tảng học tập, kinh nghiệm và những gì đã định hình tôi trở thành một Fullstack Developer như hiện tại.
- 📦 **Trưng bày dự án:** Khoe các dự án tiêu biểu đã hoàn thành, kèm theo mô tả chi tiết và danh sách công nghệ đã sử dụng.
- 🛠️ **Liệt kê kỹ năng:** Tổng hợp các kỹ năng chuyên môn, kinh nghiệm làm việc thực tế và những thành tựu đáng chú ý.
- ✍️ **Kết nối tri thức:** Chia sẻ các bài viết kỹ thuật hoặc blog cá nhân (nếu có).
- 🎯 **Xác định mục tiêu:** Trình bày rõ ràng về định hướng phát triển và mục tiêu nghề nghiệp trong tương lai.
- 🤝 **Mở rộng kết nối:** Cung cấp thông tin liên hệ để mọi người có thể dễ dàng kết nối.

## 🔑 Các Tính năng Nổi bật

Khám phá các phần chính trên trang portfolio:

- 👤 **Về tôi:** Câu chuyện về bản thân và hành trình phát triển.
- 📂 **Dự án:** Những sản phẩm đã tạo ra, thể hiện năng lực qua thực tế.
- 💡 **Kỹ năng chuyên môn:** Các công nghệ và công cụ làm việc thành thạo.
- 💼 **Kinh nghiệm:** Những trải nghiệm quý báu trong việc xây dựng ứng dụng.
- 🏆 **Chứng chỉ & Giải thưởng:** Ghi nhận cho những nỗ lực và thành tựu đạt được.
- 📝 **Blog/Bài viết kỹ thuật:** Nơi chia sẻ kiến thức và góc nhìn cá nhân (nếu có).
- 📈 **Mục tiêu nghề nghiệp:** Con đường tôi hướng tới trong tương lai.
- 📬 **Liên hệ:** Thông tin để bạn có thể dễ dàng kết nối với tôi.

## 💻 Công nghệ Sử dụng

Dự án portfolio này được xây dựng dựa trên nền tảng của các công nghệ hiện đại:

- ⚛️ **Frontend:**
  - Vue.js (Framework JavaScript)
  - React (Thư viện JavaScript)
  - HTML5, CSS3, Javascript, Typescript
  - Bootstrap (Framework CSS)
  - Vite (Build Tool)
- ☕ **Backend:**
  - Java (Spring Boot Framework)
  - PHP
  - Python
- 🗄️ **Database:**
  - Database (Các hệ quản trị CSDL phổ biến)
- ⚙️ **Công cụ & Khác:**
  - Git / Github (Hệ thống quản lý phiên bản)
  - Rest API (Kiến trúc thiết kế API)
  - Postman (Công cụ kiểm thử API)

_Lưu ý: Danh sách này tổng hợp các công nghệ chính được sử dụng trong dự án portfolio và có thể cả các công nghệ khác được đề cập trong phần dự án hoặc kỹ năng._

## 📁 Cấu trúc Dự án

Dưới đây là cái nhìn tổng quan về cấu trúc thư mục của dự án:

```

├── public/           \# Các tệp tĩnh (favicon, index.html,...)
├── src/              \# Mã nguồn chính của ứng dụng Vue
│   ├── assets/       \# Tài nguyên tĩnh (hình ảnh, font chữ, style global,...)
│   ├── components/   \# Các component Vue có thể tái sử dụng
│   ├── router/       \# Cấu hình định tuyến (Vue Router)
│   ├── screens/      \# Các trang (views) chính của ứng dụng
│   └── stores/       \# Quản lý trạng thái toàn cục (sử dụng Pinia hoặc Vuex)
├── index.html        \# Tệp HTML đầu vào
├── LICENSE           \# Giấy phép sử dụng mã nguồn
├── package.json      \# Thông tin dự án và danh sách dependencies
├── package-lock.json \# Khóa phiên bản chính xác của dependencies
├── README.md         \# Tệp README mô tả dự án
├── vite.config.js    \# Cấu hình cho Vite build tool
└── jsconfig.json     \# Cấu hình cho JavaScript (phục vụ editor/IDE)

```

## 🛠️ Bắt đầu Nhanh

Để cài đặt và chạy dự án này trên máy tính cục bộ của bạn, vui lòng làm theo các bước sau:

1.  **Clone repository:** Sao chép mã nguồn về máy của bạn.
    ```bash
    git clone <đường_dẫn_repository_của_bạn>
    ```
2.  **Di chuyển vào thư mục dự án:**
    ```bash
    cd <tên_thư_mục_dự_án>
    ```
3.  **Cài đặt các dependencies:** Sử dụng trình quản lý gói bạn quen thuộc.
    ```bash
    npm install
    # hoặc
    yarn install
    # hoặc
    pnpm install
    ```
4.  **Chạy dự án ở chế độ phát triển:**

    ```bash
    npm run dev
    # hoặc
    yarn dev
    # hoặc
    pnpm dev
    ```

    Ứng dụng sẽ khởi động và có thể truy cập tại địa chỉ `http://localhost:<port>` (thường là 5173 hoặc 3000).

5.  **Build dự án để triển khai (deploy):**
    ```bash
    npm run build
    # hoặc
    yarn build
    # hoặc
    pnpm build
    ```
    Kết quả build tối ưu cho production sẽ nằm trong thư mục `dist/`.

## 📬 Liên hệ

Nếu bạn có bất kỳ câu hỏi nào, muốn thảo luận về cơ hội hợp tác, hoặc đơn giản là muốn kết nối, đừng ngần ngại liên hệ với tôi qua:

- 📧 Email: [Địa chỉ Email của bạn]
- 🔗 LinkedIn: [Link LinkedIn của bạn]
- 🌐 Website: [Link trang web đã deploy (nếu có)]
- 🐙 GitHub: [Link profile GitHub của bạn]

_Hãy thay thế các placeholder `[...]` bằng thông tin liên hệ thực tế của bạn._

## ⚖️ Giấy phép

Dự án này được phát hành dưới Giấy phép **[Tên giấy phép, ví dụ: MIT License]**. Chi tiết đầy đủ có trong tệp [LICENSE](LICENSE).
