<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="styleAdmin.css">

    <title>Admin</title>
</head>

<body>


    <!-- SIDEBAR -->
    <section id="sidebar">
        <a href="#" class="brand">
            <i class='bx bxs-smile'></i>
            <span class="text">Admin</span>
        </a>
        <ul class="side-menu top">
            <li class="active">
                <a href="#">
                    <i class='bx bxs-dashboard'></i>
                    <span class="text">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="Categories.html">
                    <i class='bx bxs-category'></i>
                    <span class="text">Danh Mục</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bx bxs-box'></i>
                    <span class="text">Sản Phẩm</span>
                </a>
            </li>
        </ul>
        
        <ul class="side-menu">
            <li>
                <a href="#">
                    <i class='bx bxs-cog'></i>
                    <span class="text">Cài Đặt</span>
                </a>
            </li>
            <li>
                <a href="../page/index.html" class="logout">
                    <i class='bx bxs-log-out-circle'></i>
                    <span  class="text">Đăng Xuất</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- SIDEBAR -->
    <section id="content">
        <!-- NAVBAR -->
        <nav>
            
            <form action="#">
                <div class="form-input">
                    <input type="search" placeholder="Tìm kiếm tại đây...">
                    <button type="submit" class="search-btn"><i class='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden>
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" class="notification">
                <i class='bx bxs-bell'></i>
                <span class="num">8</span>
            </a>
            <a href="#" class="profile">
                <img src="../image/people.png">
            </a>
        </nav>
        <!-- NAVBAR -->
