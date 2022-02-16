import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3euk3ij3KJWVik573EzCCn0mG-vlasoE",
  authDomain: "cart-836fe.firebaseapp.com",
  projectId: "cart-836fe",
  storageBucket: "cart-836fe.appspot.com",
  messagingSenderId: "187686927595",
  appId: "1:187686927595:web:6d4224ceaf83e65a2c12ae"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

