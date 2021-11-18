import React from 'react';
import Button from '@mui/material/Button';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function SignIn() {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign in with Google</Button>
        </div>
    )
}

export default SignIn
