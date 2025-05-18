import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration for demo purposes
const firebaseConfig = {
  apiKey: "AIzaSyBLAN84VP3jy4cq4Q0bsKCLR3BXoF_wA5E",
  authDomain: "demo-fitness-app-f5296.firebaseapp.com",
  projectId: "demo-fitness-app-f5296",
  storageBucket: "demo-fitness-app-f5296.appspot.com",
  messagingSenderId: "458237735565",
  appId: "1:458237735565:web:3a7af4d8f57ada0b6f67b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app; 