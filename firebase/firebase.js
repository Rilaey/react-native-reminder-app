// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgMbnSIZ2XAir2OHz4nwdFFFzc6CpUcRs",
  authDomain: "react-native-reminder-ap-5ed5b.firebaseapp.com",
  projectId: "react-native-reminder-ap-5ed5b",
  storageBucket: "react-native-reminder-ap-5ed5b.appspot.com",
  messagingSenderId: "165440392686",
  appId: "1:165440392686:web:be5fe36cb7525441af12ff",
  measurementId: "G-PSLZTR9ETS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);