const hoTenEl = document.getElementById("ho-ten");
const noiDungEl = document.getElementById("noi-dung");
const ngayGioHienTaiEl = document.getElementById("ngay-gio-hien-tai");
const btnGuiEl = document.getElementById("btn-gui");

btnGuiEl.addEventListener("click", function() {
    const hoTen = hoTenEl.value;
    const noiDung = noiDungEl.value;
    const ngayGio = new Date().toLocaleString(); // Lấy thời gian hiện tại

    ngayGioHienTaiEl.textContent = ngayGio;

    // Xử lý dữ liệu và gửi lên server

    // Hiển thị thông báo
});

// Hiển thị thời gian hiện tại khi trang web được tải
ngayGioHienTaiEl.textContent = new Date().toLocaleString();
