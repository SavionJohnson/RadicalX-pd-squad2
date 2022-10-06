import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCOWQRkxA7K9Hc8jjkDaIrIHSRDmnWCAYo",
    authDomain: "apprenticeship-56f3b.firebaseapp.com",
    projectId: "apprenticeship-56f3b",
    storageBucket: "apprenticeship-56f3b.appspot.com",
    messagingSenderId: "1012025059888",
    appId: "1:1012025059888:web:4db7e99f4ab463014d5bf5",
    measurementId: "G-2MXKWPX2P9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app