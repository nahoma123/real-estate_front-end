import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const PrivateWrapper = ({ children }) => {
    let isAuthenticated = false;
    let token = localStorage.getItem("token");
    if (token) {
        try {
            let decodedToken = jwtDecode(token);
            console.log("decodedToken", decodedToken);
            let current_time = Date.now().valueOf() / 1000;
            if (decodedToken.exp < current_time) {
                console.log("decodedToken.exp", decodedToken.exp);
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                isAuthenticated = false;
            }
            else {
                console.log("authenticated", decodedToken.exp);
                isAuthenticated = (true);
            }
        }
        catch (err) {
            console.log("Error decoding token:", err);
            isAuthenticated = (false);
        }
    }
    else {
        console.log("token not found");
        isAuthenticated = (false);
    }
    if (isAuthenticated) {
        return _jsx(_Fragment, { children: children });
    }
    else {
        return _jsx(Navigate, { to: "/user_account" });
    }
};
