import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  
  //CreateUserWithEmailAndPassword
  const createUser = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //LogIN With Google
  const googleLogIn = () => {
    setLoading(false)
    return signInWithPopup(auth, googleProvider);
  };

  //SignIn With email, password
  const signIn = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Update Profile
  const updateUser = (name, photoURL) => {
    setLoading(false)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
  };

  //Log Out
  const logOut = () => {
    localStorage.removeItem('clean-me')
    setLoading(false)
    return signOut(auth);
  }


  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
  }, [])





  const autoInfo = { createUser, signIn, googleLogIn, user, loading, updateUser, logOut };

  return (
    <AuthContext.Provider value={autoInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
