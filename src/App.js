import React from 'react';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';


function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      { user? <ChatRoom />: <SignIn /> }
    </>
  );
}


export default App;
