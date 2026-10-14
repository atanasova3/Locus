const DEFAULT_API_BASE_URL = "http://192.168.0.194:5000";

export const API_BASE_URL =
  process.env.EXPO_PUBLIC_API_BASE_URL?.trim() ||
  DEFAULT_API_BASE_URL;
