let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navabar');
menu.onclick =() =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,

    
  });
  // Hàm hiển thị trang
function showPage(pageNumber) {
  // Ẩn tất cả các trang
  const pages = document.querySelectorAll('.page-content');
  pages.forEach(page => {
      page.style.display = 'none';
  });

  // Hiển thị trang được chọn
  const activePage = document.getElementById(`page-${pageNumber}`);
  if (activePage) {
      activePage.style.display = 'block';
  }
}

// Hiển thị page 1 khi trang được tải
window.onload = function() {
  showPage(1);
};

// Xử lý nút xóa sản phẩm
const deleteIcons = document.querySelectorAll('.btn-delete'); // Lấy tất cả icon xóa
deleteIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        const row = e.target.closest('tr'); // Lấy dòng (row) của sản phẩm
        row.remove(); // Xóa dòng sản phẩm
        updateTotal(); // Cập nhật lại tổng tiền
    });
});

// Xử lý nút "Xóa Tất Cả"
const deleteAllButton = document.querySelector('.btn-delete-all');
deleteAllButton.addEventListener('click', () => {
    const tableBody = document.querySelector('.checkout-list tbody'); // Lấy phần thân bảng
    tableBody.innerHTML = ''; // Xóa toàn bộ nội dung
    updateTotal(); // Đặt tổng tiền về 0
});

// Hàm cập nhật tổng tiền
function updateTotal() {
    const productRows = document.querySelectorAll('.checkout-list tbody tr');
    let total = 0;

    productRows.forEach(row => {
        const priceCell = row.querySelector('.product-price'); // Lấy ô giá
        const quantityInput = row.querySelector('input[type="number"]'); // Lấy input số lượng
        const price = parseInt(priceCell.textContent.replace(/\D/g, '')); // Loại bỏ ký tự không phải số
        const quantity = parseInt(quantityInput.value);
        total += price * quantity;
    });

    const totalDisplay = document.querySelector('.total-section span');
    totalDisplay.textContent = total.toLocaleString('vi-VN') + ' ₫'; // Cập nhật tổng tiền
}



  










































