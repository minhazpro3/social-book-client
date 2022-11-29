import React, { createContext } from "react";
import { initializeFirebaseApp } from "./firebase_config";

import useFirebase from "./useFirebase";

export const authContext = createContext();
initializeFirebaseApp();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <authContext.Provider value={allContext}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
