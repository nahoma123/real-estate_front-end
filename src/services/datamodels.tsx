interface ErrorResponse {
  code: number;
  message: string;
}

interface ApiOptions {
  headers?: Record<string, string>;
}

interface RegisterUserData {
  email: string;
  password: string;
  phone: string;
  first_name: string;
  middle_name: string;
  last_name: string;
}

interface RegisterUserResponse {
  ok: boolean;
  data?: {
    id: number;
    user_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    status: string;
    role: string;
    created_at: string;
    updated_at: string;
  };
  error?: {
    code: number;
    message: string;
    field_error?: Array<{
      name: string;
      description: string;
    }>;
  };
}

interface BookingValuationDataUpdate {
  real_estate_id?: string;
  preferred_time?: string | undefined;
  status?: string;
}

interface BookingValuationData {
  address: string;
  real_estate_id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone_number: string;
  why_joined: number;
  preferred_time: string | undefined;
  status?: string;
}

export interface UserResponse {
  id: number;
  user_id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  reset_code: number;
  phone: string;
  password: string;
  status: string;
  role: string;
  created_at: Date;
  updated_at: Date;
}

export type {
  ErrorResponse,
  ApiOptions,
  RegisterUserData,
  RegisterUserResponse,
  BookingValuationData,
  BookingValuationDataUpdate,
};
