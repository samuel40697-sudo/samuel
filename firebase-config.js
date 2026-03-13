import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNo71fbMUb_TYADx4BN-ZtT2eGN36-YEA",
  authDomain: "brocode-341f0.firebaseapp.com",
  projectId: "brocode-341f0",
  storageBucket: "brocode-341f0.firebasestorage.app",
  messagingSenderId: "57643526434",
  appId: "1:57643526434:web:3e97fb7b6d99ffcd219d7b",
  measurementId: "G-8B9HZ60NGJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };