import React from 'react';

export default function Services() {
  const prices = [
    { name: 'Cuci Kering Setrika', price: 'Rp 7.000 / Kg' },
    { name: 'Cuci Kering (Lipat)', price: 'Rp 5.000 / Kg' },
    { name: 'Setrika Saja', price: 'Rp 4.000 / Kg' },
    { name: 'Bedcover Besar', price: 'Rp 30.000 / Pcs' },
    { name: 'Express (6 Jam)', price: 'Rp 15.000 / Kg' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h3>Daftar Paket & Harga</h3>
      {prices.map((p, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', borderBottom: '1px solid #eee' }}>
          <span>{p.name}</span>
          <strong style={{ color: '#28a745' }}>{p.price}</strong>
        </div>
      ))}
    </div>
  );
}