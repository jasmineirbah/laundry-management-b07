import React from 'react';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

export default function Profile() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    alert("Berhasil keluar.");
    navigate('/');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h3>Profil Akun</h3>
      <div style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '15px', marginBottom: '20px' }}>
        <p>Email: <strong>{user?.email}</strong></p>
        <p>Status: Pelanggan Aktif</p>
      </div>
      <button onClick={handleLogout} style={{ width: '100%', padding: '12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Keluar (Logout)
      </button>
    </div>
  );
}