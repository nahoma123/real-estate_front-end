import { UserResponse } from "services/datamodels";

function isSignedIn(): boolean {
  let user = localStorage.getItem("user");
  if (user == null) {
    return false;
  }
  return true;
}

function getSignedUser(): UserResponse | null {
  let user = localStorage.getItem("user");
  if (user == null) {
    return null;
  }

  let userObject: UserResponse = JSON.parse(user);
  return userObject;
}

export { isSignedIn, getSignedUser };
