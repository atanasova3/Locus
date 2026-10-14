import { requestJson } from "../utils/http";

export function registerUser({ username, email, password }) {
  return requestJson("/api/register", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
}

export function loginUser({ email, password }) {
  return requestJson("/api/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
}
