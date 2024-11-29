
// Tạo hàm chung để khởi tạo biểu đồ
function createChart(ctx, type, data, options) {
    return new Chart(ctx, {
        type: type,
        data: data,
        options: options,
    });
}

// Biểu đồ thống kê sản phẩm
const productChartCtx = document.getElementById('productChart').getContext('2d');
const productData = {
    labels: ['Phân bón hữu cơ', 'Phân bón vô cơ', 'Phân bón vi sinh'],
    datasets: [
        {
            label: 'Số lượng bán',
            data: [500, 300, 450, 600],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
        {
            label: 'Tồn kho',
            data: [200, 150, 100, 250],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
        },
    ],
};
const productOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Thống kê sản phẩm' },
    },
};
createChart(productChartCtx, 'bar', productData, productOptions);

// Biểu đồ phân loại người dùng
const userChartCtx = document.getElementById('userChart').getContext('2d');
const userData = {
    labels: ['Admin', 'Khách hàng', 'Nhà cung cấp'],
    datasets: [{
        data: [5, 120, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
    }],
};
const userOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'bottom' },
        tooltip: {
            callbacks: {
                label: function(tooltipItem) {
                    const value = userData.datasets[0].data[tooltipItem.dataIndex];
                    return `${userData.labels[tooltipItem.dataIndex]}: ${value}`;
                },
            },
        },
    },
};
createChart(userChartCtx, 'doughnut', userData, userOptions);
