const db = require('../config/db');

// 1. Ambil Semua Data Pelanggan (Admin)
const getAllPelanggan = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM pelanggan');
        res.json({ success: true, data: rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Ambil Satu Pelanggan Berdasarkan Firebase UID (Profil Pelanggan)
const getPelangganByUid = async (req, res) => {
    const { uid } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM pelanggan WHERE firebase_uid = ?', [uid]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Pelanggan tidak ditemukan' });
        }
        res.json({ success: true, data: rows[0] });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 3. Tambah Pelanggan Baru (Dipanggil setelah Register di Firebase sukses)
const createPelanggan = async (req, res) => {
    const { firebase_uid, nama, nomor_telepon, alamat } = req.body;
    try {
        await db.query(
            'INSERT INTO pelanggan (firebase_uid, nama, nomor_telepon, alamat) VALUES (?, ?, ?, ?)',
            [firebase_uid, nama, nomor_telepon, alamat]
        );
        res.json({ success: true, message: "Profil pelanggan berhasil dibuat!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 4. Update Profil Pelanggan
const updatePelanggan = async (req, res) => {
    const { uid } = req.params;
    const { nama, nomor_telepon, alamat } = req.body;
    try {
        await db.query(
            'UPDATE pelanggan SET nama = ?, nomor_telepon = ?, alamat = ? WHERE firebase_uid = ?',
            [nama, nomor_telepon, alamat, uid]
        );
        res.json({ success: true, message: "Profil pelanggan berhasil diperbarui!" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { getAllPelanggan, getPelangganByUid, createPelanggan, updatePelanggan };