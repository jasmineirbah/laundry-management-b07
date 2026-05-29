import React from 'react';

export default function TrackingStatus() {
  // Contoh status realtime
  const currentStatus = "Sedang Dicuci"; 

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h3>Lacak Cucian Realtime</h3>
      <div style={{ margin: '30px 0', padding: '20px', border: '2px dashed #17a2b8', borderRadius: '15px' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>Status Pesanan Saat Ini:</p>
        <h2 style={{ color: '#17a2b8' }}>✨ {currentStatus} ✨</h2>
      </div>
      
      <div style={{ textAlign: 'left', marginLeft: '20%' }}>
        <p>✅ Pesanan Diterima</p>
        <p>🔵 <strong>Sedang Dicuci</strong></p>
        <p>⚪ Proses Pengeringan</p>
        <p>⚪ Siap Diambil</p>
      </div>
    </div>
  );
}