import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnMopSULb_PydPmyJ_sHeM3QzPRkIAZr8",
    authDomain: "linkedin-clone-salcrom.firebaseapp.com",
    projectId: "linkedin-clone-salcrom",
    storageBucket: "linkedin-clone-salcrom.appspot.com",
    messagingSenderId: "115512783753",
    appId: "1:115512783753:web:8a3519d7cfb1c4f8262758",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
