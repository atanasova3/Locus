require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

const hasSupabaseCredentials = Boolean(supabaseUrl && supabaseKey);

const supabaseAdminClient =
  hasSupabaseCredentials
    ? createClient(
        supabaseUrl,
        supabaseServiceRoleKey || supabaseKey
      )
    : null;

const supabaseAuthClient =
  hasSupabaseCredentials
    ? createClient(supabaseUrl, supabaseKey)
    : null;

module.exports = {
  supabaseUrl,
  supabaseKey,
  supabaseServiceRoleKey,
  hasSupabaseCredentials,
  supabaseAdminClient,
  supabaseAuthClient,
};
