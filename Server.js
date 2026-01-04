const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000; //Dòng này có nghĩa là: "Sử dụng cổng của nhà cung cấp, nếu không có thì mới dùng cổng 3000".

// khai báo thư mục public để server gọi chạy các file trong thư mục
app.use(express.static('Public')); //dòng này chạy file index trước

// route trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));// dòng này chạy file muốn chỉ định nhưng phải đưa lên trước dòng express.static
});

app.listen(PORT, () => {
    console.log(`Website chạy tại http://localhost:${PORT}`);
});


