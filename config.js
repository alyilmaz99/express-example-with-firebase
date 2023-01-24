const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBKeBEl3oTQfY1HhkdUsWPFcAgI3LaCQJA",
  authDomain: "express-sketchers-clone.firebaseapp.com",
  projectId: "express-sketchers-clone",
  storageBucket: "express-sketchers-clone.appspot.com",
  messagingSenderId: "989547087959",
  appId: "1:989547087959:web:026e6118f89ab8e3ddbb12",
  measurementId: "G-1FPYW195CB",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
