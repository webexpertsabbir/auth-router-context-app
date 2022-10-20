// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwwhXzZMsKzGGTyfSTJf_JNjrrcpnsCHY",
  authDomain: "auth-router-context-app-c8718.firebaseapp.com",
  projectId: "auth-router-context-app-c8718",
  storageBucket: "auth-router-context-app-c8718.appspot.com",
  messagingSenderId: "830726711137",
  appId: "1:830726711137:web:dbb49f698b2986454a4720",
  measurementId: "G-X693P2S9RQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;