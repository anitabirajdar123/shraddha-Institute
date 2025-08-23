// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBRvO08wwUsIQ3tlNcX4CCkme9DSthXDe8",
  authDomain: "shraddhainstitute-3737b.firebaseapp.com",
  projectId: "shraddhainstitute-3737b",
  storageBucket: "shraddhainstitute-3737b.appspot.com", // ✅ FIXED (.app → .app**spot.com**)
  messagingSenderId: "98430574285",
  appId: "1:98430574285:web:e3b606f5f61abccb7a1384",
  measurementId: "G-9HCTYVWN4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Storage
const storage = getStorage(app);

// ✅ Export storage so you can use in Gallery.js
export { storage };
