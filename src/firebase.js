import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const app = initializeApp(
    {
        apiKey: "AIzaSyBrW1_10riaGp1krR-jCG-P7sYC4jZibQs",
        authDomain: "chat-react-27749.firebaseapp.com",
        projectId: "chat-react-27749",
        storageBucket: "chat-react-27749.appspot.com",
        messagingSenderId: "554214557140",
        appId: "1:554214557140:web:ca8a0095444086cfb24241",
        measurementId: "G-L6QXQXG7F7"
    }
);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export const login = async () => {
    const { user } = await signInWithPopup(auth, googleProvider);
    console.log(user);
}
