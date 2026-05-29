const express = require('express');
const cors = require('cors');

const app = express();

// Middleware Utama
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // <-- Tambahkan baris baru ini!

// Tambahan Log Logger (Biar kita tahu rute apa saja yang masuk ke server)
app.use((req, res, next) => {
    console.log(`[LOG] Ada request masuk: ${req.method} ${req.url}`);
    next();
});

// 1. Rute Paket
const paketRoutes = require('./routes/paketRoutes');
app.use('/api/paket', paketRoutes); // URL: http://localhost:3000/api/paket

// 2. Rute Pelanggan
const pelangganRoutes = require('./routes/pelangganRoutes');
app.use('/api/pelanggan', pelangganRoutes); // URL: http://localhost:3000/api/pelanggan

// 3. Rute Order & Pembayaran
const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes); // URL: http://localhost:3000/api/orders

// Rute Cadangan jika URL salah ketik (Mengatasi 404)
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Maaf, rute ${req.method} ${req.url} tidak ditemukan di server!`
    });
});

// Jalankan Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`Server laundry berjalan di port ${PORT}`);
    console.log(`=================================`);
});