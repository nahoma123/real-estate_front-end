import { AxiosRequestConfig, AxiosResponse } from "axios";
import { REGISTER_URL, LOGIN_URL,
  FORGOT_REQUEST_URL,
  VERIFY_FORGOT_REQUEST_URL,
  ADD_VALUATION_URL,
  UPDATE_VALUATION,
  PROPERTIES,
  UPLOAD_IMAGE, } from "../constants/api";
import axiosInstance from "../utils/axios";
import {
  ApiOptions,
  RegisterUserData,
  RegisterUserResponse,
  BookingValuationData,
  BookingValuationDataUpdate,
} from "./datamodels";
import { PropertyData, PropertyForm } from "./findPropertyFilter";

export async function callApiForm<T>(
  url: string,
  method: string,
  body?: FormData,
  options?: ApiOptions
): Promise<T> {
  const headers: Record<string, string> = {
    ...options?.headers,
  };

  const requestOptions: AxiosRequestConfig = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axiosInstance(requestOptions);

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      const errorResponse: any = error.response.data;
      console.log("-error-", errorResponse?.error?.message);
      throw errorResponse;
    }

    throw new Error(`API request failed: ${error.message}`);
  }
}

export async function callApi<T>(
  url: string,
  method: string,
  body?: object,
  options?: ApiOptions
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...options?.headers,
  };

  const requestOptions: AxiosRequestConfig = {
    method,
    url,
    headers,
    data: body,
  };

  try {
    const response: AxiosResponse<T> = await axiosInstance(requestOptions);

    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      const errorResponse: any = error.response.data;
      console.log("-error-", errorResponse?.error?.message);
      throw errorResponse;
    }

    throw new Error(`API request failed: ${error.message}`);
  }
}

export async function registerUser(
  userData: RegisterUserData
): Promise<RegisterUserResponse> {
  const response = await callApi<RegisterUserResponse>(
    REGISTER_URL,
    "POST",
    userData
  );
  return response;
}

export async function loginUser(email: string, password: string): Promise<any> {
  const body = { email, password };
  const response = await callApi<any>(LOGIN_URL, "POST", body);
  return response;
}

export async function fetchProtectedData(token: string): Promise<any> {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await callApi<any>(
    "", // Provide the URL for the protected endpoint here
    "GET",
    undefined,
    { headers }
  );
  return response;
}

export async function forgotPassword(email: string): Promise<void> {
  const FORGOT_PASSWORD_URL = FORGOT_REQUEST_URL;
  await callApi<void>(FORGOT_PASSWORD_URL, "POST", { email });
}

export async function resetPassword(
  email: string,
  reset_code: number,
  password: string
): Promise<void> {
  const RESET_PASSWORD_URL = VERIFY_FORGOT_REQUEST_URL;
  await callApi<void>(RESET_PASSWORD_URL, "POST", {
    email,
    reset_code: parseInt(reset_code.toString()), // Convert reset_code to a number
    password,
  });
}

export async function changePassword(password: string): Promise<void> {
  const RESET_PASSWORD_URL = VERIFY_FORGOT_REQUEST_URL;
  await callApi<void>(RESET_PASSWORD_URL, "POST", {
    password,
  });
}

export async function submitBookingRequest(
  valuation: BookingValuationData
): Promise<void> {
  await callApi<void>(ADD_VALUATION_URL, "POST", valuation);
}

export async function submitProperty(property: PropertyForm): Promise<void> {
  await callApi<void>(PROPERTIES, "POST", property);
}

export async function updateProperty(
  propertyId: string,
  property: PropertyForm
): Promise<void> {
  await callApi<void>(`${PROPERTIES}/${propertyId}`, "PATCH", property);
}

export async function updateBookingRequest(
  valuation: BookingValuationDataUpdate,
  id: string
): Promise<void> {
  await callApi<void>(
    `${UPDATE_VALUATION}/${id}`,
    "PATCH",
    valuation,
    Authorization()
  );
}

export async function uploadImages(file: any) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await callApiForm(UPLOAD_IMAGE, "POST", formData);
  return res;
}

function Authorization(): any {
  return { Authorization: `Bearer ${localStorage.getItem("token")}` };
}
