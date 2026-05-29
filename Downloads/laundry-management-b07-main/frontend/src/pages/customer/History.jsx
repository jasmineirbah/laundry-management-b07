import NavbarCustomer from "../../components/customer/NavbarCustomer";

export default function CustomerHistory() {
  const historyData = [
    { id: 'ORD001', tanggal: '10 Mei 2026', paket: 'Cuci Kering', total: 'Rp 45.000', status: 'Selesai', pembayaran: 'Lunas' },
    { id: 'ORD002', tanggal: '15 Mei 2026', paket: 'Setrika', total: 'Rp 30.000', status: 'Selesai', pembayaran: 'Lunas' }
  ]

  return (
    <>
      <NavbarCustomer />

      <div className="container mt-4">
        <h1 className="page-title mb-4">Riwayat Laundry Kamu</h1>

        <div className="table-container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID Order</th>
                <th>Tanggal</th>
                <th>Paket</th>
                <th>Total Harga</th>
                <th>Status Pembayaran</th>
                <th>Status Laundry</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((history, index) => (
                <tr key={index}>
                  <td>{history.id}</td>
                  <td>{history.tanggal}</td>
                  <td>{history.paket}</td>
                  <td>{history.total}</td>
                  <td>
                    <span className="badge bg-success">{history.pembayaran}</span>
                  </td>
                  <td>
                    <span className="badge bg-secondary">{history.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}