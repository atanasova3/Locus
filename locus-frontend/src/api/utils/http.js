import { API_BASE_URL } from "../config/api";

function normalizeBaseUrl(baseUrl) {
  return baseUrl.replace(/\/+$/, "");
}

function buildUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizeBaseUrl(API_BASE_URL)}${normalizedPath}`;
}

export async function requestJson(path, options = {}) {
  const response = await fetch(buildUrl(path), {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  let data = {};

  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  if (!response.ok) {
    const error = new Error(
      data.error || data.message || "Request failed."
    );

    error.status = response.status;
    error.data = data;

    throw error;
  }

  return data;
}
