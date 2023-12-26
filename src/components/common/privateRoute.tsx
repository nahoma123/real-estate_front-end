import { useEffect, useState, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface PrivateWrapperProps {
  children: ReactNode;
}

export const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  let isAuthenticated = false;
  let token = localStorage.getItem("token");
  if (token) {
    try {
      let decodedToken = jwtDecode(token);
      console.log("decodedToken", decodedToken);
      let current_time = Date.now().valueOf() / 1000;
      if ( decodedToken.exp !== undefined && decodedToken.exp < current_time) {
        console.log("decodedToken.exp", decodedToken.exp);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        isAuthenticated = false;
      } else {
        console.log("authenticated", decodedToken.exp);
        isAuthenticated = (true);
      }
    } catch (err) {
      console.log("Error decoding token:", err);
      isAuthenticated = (false);
    }
  } else {
    console.log("token not found");
    isAuthenticated = (false);
  }

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/user_account" />;
  }
};
