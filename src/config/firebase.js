// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCugY-OMeY6cD-IoPq6SsER-dE13iKerfY",
  authDomain: "estantedigital-ca892.firebaseapp.com",
  projectId: "estantedigital-ca892",
  storageBucket: "estantedigital-ca892.appspot.com",
  messagingSenderId: "399868779055",
  appId: "1:399868779055:web:f7dc7fe26e8950185884da",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
