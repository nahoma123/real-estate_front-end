import { REGISTER_URL, LOGIN_URL, FORGOT_REQUEST_URL, VERIFY_FORGOT_REQUEST_URL, ADD_VALUATION_URL, UPDATE_VALUATION, PROPERTIES, UPLOAD_IMAGE, } from "../constants/api";
import axiosInstance from "../utils/axios";
export async function callApiForm(url, method, body, options) {
    const headers = {
        ...options?.headers,
    };
    const requestOptions = {
        method,
        url,
        headers,
        data: body,
    };
    try {
        const response = await axiosInstance(requestOptions);
        return response.data;
    }
    catch (error) {
        if (error.response && error.response.data) {
            const errorResponse = error.response.data;
            console.log("-error-", errorResponse?.error?.message);
            throw errorResponse;
        }
        throw new Error(`API request failed: ${error.message}`);
    }
}
export async function callApi(url, method, body, options) {
    const headers = {
        "Content-Type": "application/json",
        ...options?.headers,
    };
    const requestOptions = {
        method,
        url,
        headers,
        data: body,
    };
    try {
        const response = await axiosInstance(requestOptions);
        return response.data;
    }
    catch (error) {
        if (error.response && error.response.data) {
            const errorResponse = error.response.data;
            console.log("-error-", errorResponse?.error?.message);
            throw errorResponse;
        }
        throw new Error(`API request failed: ${error.message}`);
    }
}
export async function registerUser(userData) {
    const response = await callApi(REGISTER_URL, "POST", userData);
    return response;
}
export async function loginUser(email, password) {
    const body = { email, password };
    const response = await callApi(LOGIN_URL, "POST", body);
    return response;
}
export async function fetchProtectedData(token) {
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    const response = await callApi("", // Provide the URL for the protected endpoint here
    "GET", undefined, { headers });
    return response;
}
export async function forgotPassword(email) {
    const FORGOT_PASSWORD_URL = FORGOT_REQUEST_URL;
    await callApi(FORGOT_PASSWORD_URL, "POST", { email });
}
export async function resetPassword(email, reset_code, password) {
    const RESET_PASSWORD_URL = VERIFY_FORGOT_REQUEST_URL;
    await callApi(RESET_PASSWORD_URL, "POST", {
        email,
        reset_code: parseInt(reset_code.toString()), // Convert reset_code to a number
        password,
    });
}
export async function changePassword(password) {
    const RESET_PASSWORD_URL = VERIFY_FORGOT_REQUEST_URL;
    await callApi(RESET_PASSWORD_URL, "POST", {
        password,
    });
}
export async function submitBookingRequest(valuation) {
    await callApi(ADD_VALUATION_URL, "POST", valuation);
}
export async function submitProperty(property) {
    await callApi(PROPERTIES, "POST", property);
}
export async function updateProperty(propertyId, property) {
    await callApi(`${PROPERTIES}/${propertyId}`, "PATCH", property);
}
export async function updateBookingRequest(valuation, id) {
    await callApi(`${UPDATE_VALUATION}/${id}`, "PATCH", valuation, Authorization());
}
export async function uploadImages(file) {
    const formData = new FormData();
    formData.append("image", file);
    const res = await callApiForm(UPLOAD_IMAGE, "POST", formData);
    return res;
}
function Authorization() {
    return { Authorization: `Bearer ${localStorage.getItem("token")}` };
}
