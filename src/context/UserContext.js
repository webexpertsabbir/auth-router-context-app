import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const singInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('Auth state changed', currentUser);
        })
        return () =>{
            unsubscribe();
        }

    }, [])

    const authInfo = {user, loading, createUser, singIn, logOut, singInWithGoogle}


    return ( 
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;