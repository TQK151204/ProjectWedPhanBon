document.getElementById("account-icon").addEventListener("click", function (event) {
    event.stopPropagation();
    const dropdown = document.querySelector(".account-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Đóng menu khi nhấp bên ngoài
document.addEventListener("click", function () {
    document.querySelector(".account-dropdown").style.display = "none";
});
