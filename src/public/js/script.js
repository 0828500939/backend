window.addEventListener('scroll', function() {
    // Kiểm tra vị trí cuộn của trang
    if (window.scrollY > 500) { // Thay 500 bằng số pixel bạn muốn
        // Chuyển hướng sang trang /create
        window.location.href = '/create';
    }
});