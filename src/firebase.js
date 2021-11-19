import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDz18eHnWPz_K6gnk3xuE5ibJ5Nv-HPZvY",
    authDomain: "superchat-accdd.firebaseapp.com",
    projectId: "superchat-accdd",
    storageBucket: "superchat-accdd.appspot.com",
    messagingSenderId: "722854022525",
    appId: "1:722854022525:web:8ed67e08e46bf82db45014",
    measurementId: "G-LV7MBK8VE0"
})
    
const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }