import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACix8NLNgiS7GzQNxXab8cHct3B3ECdDM",
  authDomain: "social-book-8d543.firebaseapp.com",
  projectId: "social-book-8d543",
  storageBucket: "social-book-8d543.appspot.com",
  messagingSenderId: "672516982870",
  appId: "1:672516982870:web:a7ae17654b524277e693f7",
  measurementId: "G-PVF59V1719",
};

// initialize firebase
export const initializeFirebaseApp = () => {
  initializeApp(firebaseConfig);
};
