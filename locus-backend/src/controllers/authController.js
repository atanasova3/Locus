const {
  registerUser,
  loginUser,
} = require("../services/authService");

async function register(req, res) {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await registerUser({
      username,
      email,
      password,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error registering user:", error);

    return res.status(error.statusCode || 500).json({
      error: error.message || "Internal server error",
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await loginUser({
      email,
      password,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error logging in user:", error);

    return res.status(error.statusCode || 500).json({
      error: error.message || "Internal server error",
    });
  }
}

module.exports = {
  register,
  login,
};
