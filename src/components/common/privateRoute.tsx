import { useEffect, useState, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwt from "jsonwebtoken";

interface PrivateWrapperProps {
  children: ReactNode;
}

export const PrivateWrapper = ({ children }: PrivateWrapperProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      try {
        let decodedToken = jwt.decode(token);
        let current_time = Date.now().valueOf() / 1000;
        if (decodedToken.exp < current_time) {
          console.log("Token is expired");
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log("Error decoding token:", err);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return isAuthenticated ? children : <Navigate to="/login" />;
};
