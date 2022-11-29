import React, { useContext } from "react";
import { authContext } from "./AuthProvider";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
