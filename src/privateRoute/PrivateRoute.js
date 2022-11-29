import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./../Hooks/useAuth";
import useFirebase from "./../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();
  const location = useLocation();

  if (isLoading) {
    return (
      <div>
        <h5>Loading</h5>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default PrivateRoute;
