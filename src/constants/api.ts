const BASE_URL: string = "http://77.68.21.74/real_estate_backend";

const REGISTER_URL: string = AddBase("users/register");
const VALUATIONS: string = AddBase("/valuations");
const PROPERTIES: string = AddBase("/properties");
const UPLOAD_IMAGE: string = AddBase("/upload_image");
const ADD_VALUATION_URL: string = AddBase("estates/add_valuation");
const UPDATE_VALUATION: string = AddBase("estates");
const LOGIN_URL: string = AddBase("auth/login");
const FORGOT_REQUEST_URL: string = AddBase("users/request_forgot_password");
const VERIFY_FORGOT_REQUEST_URL: string = AddBase(
  "users/verify_forgot_password"
);
const CHANGE_PASSWORD_URL: string = AddBase("users/verify_reset_code");

function AddBase(route: string): string {
  return `${route}`;
}
function GetAddressUrl(add: string): string {
  return `https://api.getaddress.io/autocomplete/${add}?api-key=GHeGqytMc0a-hF9okte62A40746`;
}

export {
  UPLOAD_IMAGE,
  REGISTER_URL,
  LOGIN_URL,
  FORGOT_REQUEST_URL,
  VERIFY_FORGOT_REQUEST_URL,
  ADD_VALUATION_URL,
  CHANGE_PASSWORD_URL,
  PROPERTIES,
  GetAddressUrl,
  BASE_URL,
  VALUATIONS,
  UPDATE_VALUATION,
};
