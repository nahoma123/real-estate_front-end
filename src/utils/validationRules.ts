export const validationRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address",
    },
  },
  basic: {
    required: "Field is required",
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
  },
  select: {
    required: "select one option",
  },
  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /^(?:\+44|0)[1-9]\d{9}$/,
      message: "Invalid phone number. Please enter a valid phone number with the country code, e.g., +441234567890 or 01234567890",
    },
  },
  fullName: {
    required: "Full name is required",
    pattern: {
      value: /^[a-zA-Z]+(?:\s[a-zA-Z]+){2,}$/,
      message: "Invalid full name",
    },
  },
};
