// src/pages/customer/Home.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig' // 🚨 Import Firebase Auth
import NavbarCustomer from "../../components/customer/NavbarCustomer"

export default function CustomerDashboard() {
  // Mengambil data user yang sedang login di browser saat ini via Firebase
  const user = auth.currentUser;
  
  // Mengambil nama depan dari email (misal budi@gmail.com menjadi Budi)
  const displayName = user?.email ? user.email.split('@')[0] : 'Pelanggan';

  // Dummy data orderan aktif milik customer yang sedang login
  const [activeOrders] = useState([
    {
      id: 'ORD003',
      paket: 'Cuci Express',
      status: 'Menunggu',
      total: 'Rp 60.000',
      tglMasuk: '28 Mei 2026'
    }
  ])

  return (
    <>
      {/* Navbar Customer */}
      <NavbarCustomer /> 

      <div className="container mt-4" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            {/* 🚨 Nama otomatis dinamis mengikuti user Firebase yang login */}
            <h1 className="text-capitalize">Halo, {displayName}! 👋</h1>
            <p className="text-muted">Mau laundry apa hari ini?</p>
          </div>
          <Link to="/customer/new-order" className="btn btn-primary btn-lg" style={{ fontWeight: 'bold' }}>
            + Pesan Laundry
          </Link>
        </div>

        {/* CARDS STATUS */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="dashboard-card" style={{ borderLeft: '5px solid #ffc107', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h5 className="text-muted">Order Menunggu</h5>
              <h2 className="fw-bold" style={{ color: '#ffc107' }}>1</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-card" style={{ borderLeft: '5px solid #0d6efd', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h5 className="text-muted">Sedang Diproses</h5>
              <h2 className="fw-bold" style={{ color: '#0d6efd' }}>0</h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-card" style={{ borderLeft: '5px solid #198754', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <h5 className="text-muted">Selesai Diambil</h5>
              <h2 className="fw-bold" style={{ color: '#198754' }}>12</h2>
            </div>
          </div>
        </div>

        {/* ORDERAN AKTIF */}
        <div className="table-container" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h3 className="mb-3 fw-bold">Status Laundry Kamu</h3>
          
          {activeOrders.length === 0 ? (
            <p className="text-muted text-center my-4">Tidak ada laundry yang sedang berjalan.</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr className="table-light">
                    <th>ID Order</th>
                    <th>Tanggal</th>
                    <th>Paket</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {activeOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="fw-bold text-secondary">{order.id}</td>
                      <td>{order.tglMasuk}</td>
                      <td>{order.paket}</td>
                      <td className="fw-bold text-success">{order.total}</td>
                      <td>
                        <span className="badge bg-warning text-dark px-3 py-2">{order.status}</span>
                      </td>
                      <td>
                        {/* 🚨 Disesuaikan jalurnya menuju rute /customer/tracking kelompokmu */}
                        <Link to="/customer/tracking" className="btn btn-sm btn-outline-primary fw-bold px-3">
                          Pantau Posisi
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}