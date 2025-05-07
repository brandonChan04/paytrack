import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBG6WfyUE8jqJZQr5ohSJ3VazfsmdJv0UM",
    authDomain: "paytrack-636f1.firebaseapp.com",
    projectId: "paytrack-636f1",
    storageBucket: "paytrack-636f1.firebasestorage.app",
    messagingSenderId: "151578093528",
    appId: "1:151578093528:web:8534e4bb4b331ea43b74ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
