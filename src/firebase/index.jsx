import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM0qoUWsUUmWapSCHK9SpG2SXRNj3yMLo",
  authDomain: "movie-web-c1124.firebaseapp.com",
  projectId: "movie-web-c1124",
  storageBucket: "movie-web-c1124.appspot.com",
  messagingSenderId: "241855544392",
  appId: "1:241855544392:web:79ea50cf97147d911c2c7d",
  measurementId: "G-43EHWSD2M3"
};

const app = initializeApp(firebaseConfig);

let database = getFirestore(app)
let auth = getAuth(app);
let storage = getStorage(app)
getDocs
export { auth, database, storage };