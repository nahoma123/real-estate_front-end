import React, { ComponentType } from "react";
import { redirect } from "react-router-dom";
import { isSignedIn } from "../../utils/credentials";

interface Props {
  // Define any props required by the wrapped component
}

const withAuthorization = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAuthorization: React.FC<P> = (props: P) => {
    // Check if the user is logged in or has a valid authentication token
    const isLoggedIn = isSignedIn();

    if (isLoggedIn) {
      // User is logged in, render the component
      return <WrappedComponent {...props} />;
    } else {
      redirect("/login");
      return null;
    }
  };

  return WithAuthorization;
};

export default withAuthorization;
