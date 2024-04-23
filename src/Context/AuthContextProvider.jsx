import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";


// create a context
export const AuthContext = createContext(null);

// fireBase provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // google sign in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // github sign in
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //  sign UP with email password
    const signUpWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //  sign in with email password
    const signInWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


     // update profile 
    const updateUserProfile = (obj) => {
        setLoading(true)
        // return updateProfile(auth.currentUser, obj)
        return updateProfile(auth.currentUser, obj)

    }



    // use observer to check user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Inner subscribe 4")
            console.log(user)
            setLoading(false)
            setUser(currentUser);
        });
        
        return () => {
            unsubscribe();
        };
    }, []);


    // context data
    const authInfo = {
        googleSignIn,
        signUpWithEmailPassword,
        signInWithEmailPassword,
        logOut,
        updateUserProfile,
        githubSignIn,
        loading,
        setLoading,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;