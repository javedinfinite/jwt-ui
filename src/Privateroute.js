import React, {useContext} from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
    const authLogin  = false;
    // const { authLogin } = useContext('globalC');
  
    return authLogin ? <Outlet /> : <Navigate to="/login" />;
  };

export default PrivateRoute;