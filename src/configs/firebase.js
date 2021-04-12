import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAgIsc-g2TF5UZXQbGWKhxRj_lLigUChhw",
    authDomain: "juanramirez-fb32f.firebaseapp.com",
    projectId: "juanramirez-fb32f",
    storageBucket: "juanramirez-fb32f.appspot.com",
    messagingSenderId: "338292148174",
    appId: "1:338292148174:web:fa96d2b50ed95f4de90d9f"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}