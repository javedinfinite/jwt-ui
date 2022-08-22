import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const PrivateRoute = (props) => {
    const { authState } = useAuthContext();
  
    return authState.isLogIn ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;