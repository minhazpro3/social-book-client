import React from "react";
import { useState, useEffect } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login email and password
  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [user?.displayName]);

  // updateName
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {});
  };

  // user logout
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  // reset password
  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email).then(() => {
      console.log("sent ");
    });
  };

  return {
    user,
    isLoading,
    setUser,
    createUser,
    logOut,
    updateName,
    loginEmailPassword,
    setIsLoading,
    resetPassword,
  };
};

export default useFirebase;
