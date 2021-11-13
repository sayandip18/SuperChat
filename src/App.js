import React from 'react';
import './App.css';

import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

const auth = getAuth();

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }
  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  const signout = () => {
    signOut(auth).then(() => {
      console.log('Signed out successfully')
    }).catch((error) => {
      console.log(error);
    });
  }

  return auth.currentUser && (
    <button className="sign-out" onClick={signout}>Sign Out</button>
  )
}

function ChatRoom() {
  return <div>Chat Room</div>
}

export default App;
