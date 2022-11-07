import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full mx-auto my-3 animate-spin dark:border-violet-400"></div>
    );
  }

  if(user && user.uid){
    return children;
  }

  return <Navigate to='/login' state={{from: location}} replace>

  </Navigate>;
};

export default PrivateRoutes;
