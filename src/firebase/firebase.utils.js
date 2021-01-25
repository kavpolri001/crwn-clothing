import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbtmFwD_xF37j0Wv2H7hWj4gqIfdJWncE",
  authDomain: "testing-crwn-db.firebaseapp.com",
  projectId: "testing-crwn-db",
  storageBucket: "testing-crwn-db.appspot.com",
  messagingSenderId: "889478315999",
  appId: "1:889478315999:web:f0734d4959540443bfce6a",
  measurementId: "G-ESDTW40P59",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
