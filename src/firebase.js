import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDz18eHnWPz_K6gnk3xuE5ibJ5Nv-HPZvY",
    authDomain: "superchat-accdd.firebaseapp.com",
    projectId: "superchat-accdd",
    storageBucket: "superchat-accdd.appspot.com",
    messagingSenderId: "722854022525",
    appId: "1:722854022525:web:8ed67e08e46bf82db45014",
    measurementId: "G-LV7MBK8VE0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)

const db = getFirestore();
const auth = getAuth();

export { db, auth };