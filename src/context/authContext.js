import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
const AuthContext = createContext([null, () => { }, () => { }]);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        setUser(userData);
    };
    const logout = () => {
        setUser(null);
    };
    return (_jsx(AuthContext.Provider, { value: [user, login, logout], children: children }));
};
export { AuthContext, AuthProvider };
