import { useEffect, useState } from "react";
import { db } from "./firebase/firebaseConfig";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";

function App() {
  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    const q = collection(db, "tracking_status");

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("DATA FIREBASE:", data);

      setTracking(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Realtime Tracking Laundry 🚀</h1>

      {tracking.length > 0 ? (
        tracking.map((item) => (
          <div key={item.id}>
            <h3>Order: {item.orderId}</h3>
            <p>Status: {item.status}</p>
          </div>
        ))
      ) : (
        <p>Belum ada data</p>
      )}
    </div>
  );
}

export default App;