import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-VDWSK99xhBk8JbYCvBnIKzne7c4Z3pI",
  authDomain: "pizzamazing-pizzeria.firebaseapp.com",
  databaseURL: "https://pizzamazing-pizzeria.firebaseio.com",
  projectId: "pizzamazing-pizzeria",
  storageBucket: "pizzamazing-pizzeria.appspot.com",
  messagingSenderId: "59289728269",
  appId: "1:59289728269:web:310d7c372fe423a5a22c44",
  measurementId: "G-6ZE09XS4KF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
