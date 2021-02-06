import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAE3XYAKIXrxfJyOS0pAAqwVFrkUDGh2pY",
    authDomain: "react-cet.firebaseapp.com",
    projectId: "react-cet",
    storageBucket: "react-cet.appspot.com",
    messagingSenderId: "215952812005",
    appId: "1:215952812005:web:00d7fd6c1378e05b8eb10c",
    measurementId: "G-R4GQ3DY8ZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
