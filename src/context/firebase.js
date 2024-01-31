import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDu7pf1bJd3u-zynFCLt5NQx44Shdaat9A",
  authDomain: "sekawan-media01.firebaseapp.com",
  projectId: "sekawan-media01",
  storageBucket: "sekawan-media01.appspot.com",
  messagingSenderId: "161262427134",
  appId: "1:161262427134:web:981d9a6b11b7ee3626beaf",
  measurementId: "G-Q5LF4JF28M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Pastikan Anda mengeksekusi ini setelah inisialisasi Firebase

export default app;
