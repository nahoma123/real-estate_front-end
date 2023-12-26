import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type User = {
  // Define your user type here
};

type AuthContextType = [User | null, Dispatch<SetStateAction<User | null>>, () => void];

const AuthContext = createContext<AuthContextType>([null, () => {}, () => {}]);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: SetStateAction<User | null>) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={[user, login, logout]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };