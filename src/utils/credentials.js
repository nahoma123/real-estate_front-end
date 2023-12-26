function isSignedIn() {
    let user = localStorage.getItem("user");
    if (user == null) {
        return false;
    }
    return true;
}
function getSignedUser() {
    let user = localStorage.getItem("user");
    if (user == null) {
        return null;
    }
    let userObject = JSON.parse(user);
    return userObject;
}
export { isSignedIn, getSignedUser };
