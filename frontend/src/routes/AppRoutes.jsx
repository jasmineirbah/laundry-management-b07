import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Orders from '../pages/Orders'
import Payments from '../pages/Payments'
import Customers from '../pages/Customers'
import Employees from '../pages/Employees'
import Tracking from '../pages/Tracking'
import Reports from '../pages/Reports'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

import AuthProvider from '../context/AuthContext'

export default function AppRoutes() {

  return (
    <AuthProvider>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/payments" element={<Payments />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/employees" element={<Employees />} />

          <Route path="/tracking" element={<Tracking />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  )
}