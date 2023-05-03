import React, { createContext } from 'react';
import app from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const tanjim = false

    const createUser = (email , pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        tanjim,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;