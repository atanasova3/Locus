const {
  hasSupabaseCredentials,
  supabaseAdminClient,
  supabaseAuthClient,
  supabaseServiceRoleKey,
} = require("../config/supabase");

function assertSupabaseReady() {
  if (!hasSupabaseCredentials) {
    const error = new Error(
      "Supabase URL or key is not defined in environment variables"
    );

    error.statusCode = 500;

    throw error;
  }
}

function mapStatusCode(message) {
  if (/already (?:been )?registered|already exists/i.test(message)) {
    return 409;
  }

  if (/rate limit/i.test(message)) {
    return 429;
  }

  return 400;
}

async function registerUser({ username, email, password }) {
  assertSupabaseReady();

  const payload = {
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  };

  const { data, error } = supabaseServiceRoleKey
    ? await supabaseAdminClient.auth.admin.createUser({
        email: payload.email,
        password: payload.password,
        email_confirm: true,
        user_metadata: payload.options.data,
      })
    : await supabaseAuthClient.auth.signUp(payload);

  if (error) {
    const mappedError = new Error(error.message);
    mappedError.statusCode = mapStatusCode(error.message);

    throw mappedError;
  }

  return {
    message: "User registered successfully",
    user: data.user,
  };
}

async function loginUser({ email, password }) {
  assertSupabaseReady();

  const { data, error } = await supabaseAuthClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    const mappedError = new Error(error.message);
    mappedError.statusCode = 401;

    throw mappedError;
  }

  return {
    message: "User logged in successfully",
    user: data.user,
    session: data.session,
  };
}

module.exports = {
  registerUser,
  loginUser,
};
