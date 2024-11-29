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


  