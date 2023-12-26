const BASE_URL = "http://localhost:8001";
const REGISTER_URL = AddBase("users/register");
const VALUATIONS = AddBase("/valuations");
const PROPERTIES = AddBase("/properties");
const UPLOAD_IMAGE = AddBase("/upload_image");
const ADD_VALUATION_URL = AddBase("estates/add_valuation");
const UPDATE_VALUATION = AddBase("estates");
const LOGIN_URL = AddBase("auth/login");
const FORGOT_REQUEST_URL = AddBase("users/request_forgot_password");
const VERIFY_FORGOT_REQUEST_URL = AddBase("users/verify_forgot_password");
const CHANGE_PASSWORD_URL = AddBase("users/verify_reset_code");
function AddBase(route) {
    return `${route}`;
}
function GetAddressUrl(add) {
    return `https://api.getaddress.io/autocomplete/${add}?api-key=GHeGqytMc0a-hF9okte62A40746`;
}
export { UPLOAD_IMAGE, REGISTER_URL, LOGIN_URL, FORGOT_REQUEST_URL, VERIFY_FORGOT_REQUEST_URL, ADD_VALUATION_URL, CHANGE_PASSWORD_URL, PROPERTIES, GetAddressUrl, BASE_URL, VALUATIONS, UPDATE_VALUATION, };
