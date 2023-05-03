import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    const googleprovider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const createUser = (email , pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const loginUser = (email, pass) => {
        return signInWithEmailAndPassword(auth , email, pass)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth , googleprovider)
    }
    
    const githubLogin = ()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () =>{
       return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (logedUser)=>{
            setUser(logedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser,
        googleLogin,
        githubLogin,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;