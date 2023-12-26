import { jsx as _jsx } from "react/jsx-runtime";
import { redirect } from "react-router-dom";
import { isSignedIn } from "../../utils/credentials";
const withAuthorization = (WrappedComponent) => {
    const WithAuthorization = (props) => {
        // Check if the user is logged in or has a valid authentication token
        const isLoggedIn = isSignedIn();
        if (isLoggedIn) {
            // User is logged in, render the component
            return _jsx(WrappedComponent, { ...props });
        }
        else {
            redirect("/login");
            return null;
        }
    };
    return WithAuthorization;
};
export default withAuthorization;
