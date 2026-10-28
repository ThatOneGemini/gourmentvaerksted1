import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlvrIklO_Wp8M7Vt0IaTVhkR5j6MbZJt8",
  authDomain: "gourmentvaerksted.firebaseapp.com",
  databaseURL: "https://gourmentvaerksted-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gourmentvaerksted",
  storageBucket: "gourmentvaerksted.firebasestorage.app",
  messagingSenderId: "968332168184",
  appId: "1:968332168184:web:0af743bd989d6ad6e2240d"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
