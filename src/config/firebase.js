// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAm7NfPNWJ96C-Wd2Z7HCYKbdhU6vkVUo",
  authDomain: "ecommerce-hub-18029.firebaseapp.com",
  projectId: "ecommerce-hub-18029",
  storageBucket: "ecommerce-hub-18029.appspot.com",
  messagingSenderId: "128776909534",
  appId: "1:128776909534:web:e98cb48261815dc58e084f",
  measurementId: "G-3SMRCFV2VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{auth,analytics};