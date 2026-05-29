// src/routes/AppRoutes.jsx
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

// ==========================================
// HALAMAN ADMIN (Bawaan Asli di File Zip)
// ==========================================
import Dashboard from '../pages/admin/Dashboard'
import Orders from '../pages/admin/Orders'
import Payments from '../pages/admin/Payments'
import Customers from '../pages/admin/Customers'
import Employees from '../pages/admin/Employees'
import Tracking from '../pages/admin/Tracking'
import Reports from '../pages/admin/Reports'
import Login from '../pages/Login'
import Register from '../pages/Registrasi' // Menyesuaikan nama file fisik kamu (Registrasi.jsx)
import NotFound from '../pages/admin/NotFound'

// ==========================================
// HALAMAN CUSTOMER (Lengkap dengan Fitur Baru)
// ==========================================
import CustomerDashboard from '../pages/customer/Home'
import NewOrder from '../pages/customer/OrdersForm'
import CustomerHistory from '../pages/customer/History'
import TrackingStatus from '../pages/customer/TrackingStatus' // 🚨 BARU: Lacak cucian realtime
import Profile from '../pages/customer/Profile'               // 🚨 BARU: Profil & Logout
import Services from '../pages/customer/Services'             // 🚨 BARU: Katalog Harga

import AuthProvider from '../context/AuthContext'

export default function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* ================= PINTU UTAMA APLIKASI ================= */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


          {/* ================= ROUTE ADMIN ================= */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/reports" element={<Reports />} />


          {/* ================= ROUTE CUSTOMER ================= */}
          {/* Halaman Utama / Lacak Realtime NoSQL Firestore */}
          <Route path="/customer/dashboard" element={<CustomerDashboard />} />
          
          {/* Form Pembuatan Order Baru via REST API MySQL */}
          <Route path="/customer/new-order" element={<NewOrder />} />
          
          {/* Riwayat Daftar Laundry khusus Pelanggan */}
          <Route path="/customer/history" element={<CustomerHistory />} />

          {/* Rute Baru untuk Fitur Pendukung Customer */}
          <Route path="/customer/tracking" element={<TrackingStatus />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route path="/customer/services" element={<Services />} />


          {/* ================= FALLBACK ERROR ================= */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}