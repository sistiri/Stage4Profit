// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlfvDZwy8BBxUDGhQJUT4DeJ9JYMvMXnI",
  authDomain: "stage4profit.firebaseapp.com",
  projectId: "stage4profit",
  storageBucket: "stage4profit.appspot.com",
  messagingSenderId: "756923307588",
  appId: "1:756923307588:web:97170d9d5173e9c0830e11",
  measurementId: "G-TWSQZXTYZX"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export the initialized services
export { auth, db };