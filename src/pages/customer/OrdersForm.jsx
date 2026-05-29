import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarCustomer from "../../components/customer/NavbarCustomer";

export default function NewOrder() {
  const navigate = useNavigate()
  const [paket, setPaket] = useState('')
  const [catatan, setCatatan] = useState('')
  const [alamatJemput, setAlamatJemput] = useState('Jakarta') // Default dari data customer

  const handleBuatOrder = (e) => {
    e.preventDefault()

    if (!paket) {
      alert('Silakan pilih paket laundry terlebih dahulu!')
      return
    }

    // Integrasi backend nanti ditaruh di sini
    alert('Pesanan laundry berhasil dibuat! Kurir akan menjemput ke lokasi Anda.')
    navigate('/customer/dashboard')
  }

  return (
    <>
      <NavbarCustomer />

      <div className="container mt-4" style={{ maxWidth: '600px' }}>
        <div className="card shadow-sm p-4">
          <h2 className="mb-4 text-center">Form Pesan Laundry</h2>
          
          <form onSubmit={handleBuatOrder}>
            <div className="mb-3">
              <label className="form-label font-weight-bold">Pilih Paket Laundry</label>
              <select 
                className="form-control" 
                value={paket} 
                onChange={(e) => setPaket(e.target.value)}
              >
                <option value="">-- Pilih Paket Layanan --</option>
                <option value="Cuci Kering">Cuci Kering (Rp 7.000/kg)</option>
                <option value="Setrika">Setrika Saja (Rp 5.000/kg)</option>
                <option value="Cuci Express">Cuci Express 1 Hari (Rp 12.000/kg)</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Alamat Penjemputan & Pengantaran</label>
              <textarea 
                className="form-control" 
                rows="3"
                value={alamatJemput}
                onChange={(e) => setAlamatJemput(e.target.value)}
                placeholder="Masukkan alamat lengkap"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label">Catatan Tambahan (Opsional)</label>
              <input 
                type="text" 
                className="form-control" 
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                placeholder="Contoh: Jangan dicampur baju putih, baju robek dikit, dll."
              />
            </div>

            <div className="d-flex gap-2">
              <button type="button" className="btn btn-light w-50" onClick={() => navigate(-1)}>
                Batal
              </button>
              <button type="submit" className="btn btn-primary w-50">
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}